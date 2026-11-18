const Os={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qf=0,Gc=1,Yf=2,wr=1,Kf=2,xr=3,ji=0,Nn=1,on=2,cs=0,Fs=1,Oi=2,Hc=3,Vc=4,Zf=5,Is=100,Jf=101,$f=102,Qf=103,jf=104,ed=200,td=201,nd=202,id=203,Du=204,Nu=205,sd=206,rd=207,od=208,ad=209,ld=210,cd=211,hd=212,ud=213,fd=214,rl=0,ol=1,al=2,Dr=3,ll=4,cl=5,hl=6,ul=7,Iu=0,dd=1,pd=2,ki=0,tc=1,nc=2,ic=3,oa=4,sc=5,rc=6,oc=7,Wc="attached",md="detached",Uu=300,Hs=301,Nr=302,va=303,Ma=304,si=1e3,zn=1001,Xo=1002,xn=1003,Ou=1004,vr=1005,Rn=1006,Fo=1007,yi=1008,Zn=1009,Fu=1010,Bu=1011,Ir=1012,ac=1013,ui=1014,ii=1015,In=1016,lc=1017,cc=1018,Vs=1020,zu=35902,ku=35899,Gu=1021,Hu=1022,ci=1023,es=1026,Ji=1027,aa=1028,hc=1029,us=1030,uc=1031,fc=1033,Bo=33776,zo=33777,ko=33778,Go=33779,fl=35840,dl=35841,pl=35842,ml=35843,gl=36196,_l=37492,xl=37496,vl=37488,Ml=37489,qo=37490,yl=37491,Sl=37808,bl=37809,wl=37810,Tl=37811,El=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Dl=37818,Nl=37819,Il=37820,Ul=37821,Ol=36492,Fl=36494,Bl=36495,zl=36283,kl=36284,Yo=36285,Gl=36286,Ur=2300,Or=2301,ya=2302,Xc=2303,qc=2400,Yc=2401,Kc=2402,gd=2500,_d=0,Vu=1,Hl=2,xd=3200,Fr=0,vd=1,Fi="",yn="srgb",Qn="srgb-linear",Ko="linear",Qt="srgb",Sa=7680,Md=519,yd=512,Sd=513,bd=514,Wu=515,wd=516,Td=517,Xu=518,qu=519,Yu=35044,Zc="300 es",hi=2e3,Br=2001;function Ed(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ad(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rd(){const s=zr("canvas");return s.style.display="block",s}const Jc={};function Zo(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ku(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function yt(...s){s=Ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=Ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bs(...s){const e=s.join(" ");e in Jc||(Jc[e]=!0,yt(...s))}function Cd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pd={[rl]:rl,[al]:hl,[ll]:ll,[Dr]:cl,[ol]:ol,[hl]:al,[ul]:ul,[cl]:Dr};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const Tr=Math.PI/180,Ws=180/Math.PI;function fi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function dc(s,e){return(s%e+e)%e}function Ld(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function Er(s,e,t){return(1-t)*s+t*e}function Nd(s,e,t,n){return Er(s,e,1-Math.exp(-t*n))}function Id(s,e=1){return e-Math.abs(dc(s,e*2)-e)}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function kd(s){s!==void 0&&($c=s);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(s){return s*Tr}function Hd(s){return s*Ws}function Vd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,e,t,n,i){const r=Math.cos,o=Math.sin,l=r(t/2),a=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(l*h,a*d,a*f,l*c);break;case"YZY":s.set(a*f,l*h,a*d,l*c);break;case"ZXZ":s.set(a*d,a*f,l*h,l*c);break;case"XZX":s.set(l*h,a*p,a*u,l*c);break;case"YXY":s.set(a*u,l*h,a*p,l*c);break;case"ZYZ":s.set(a*p,a*u,l*h,l*c);break;default:yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function la(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pc(s,e){if(e.constructor===Float32Array)return s;const t=la(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function mc(s,e){if(e.constructor===Float32Array)return s;const t=la(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Ju={DEG2RAD:Tr,RAD2DEG:Ws,generateUUID:fi,clamp:Ut,euclideanModulo:dc,mapLinear:Ld,inverseLerp:Dd,lerp:Er,damp:Nd,pingpong:Id,smoothstep:Ud,smootherstep:Od,randInt:Fd,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:Xd,normalize:mc,denormalize:pc},Uc=class Uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;let Ne=Uc;class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||a!==f||c!==u||h!==p){let m=a*f+c*u+h*p+d*v;m<0&&(f=-f,u=-u,p=-p,v=-v,m=-m);let _=1-l;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);_=Math.sin(_*S)/A,l=Math.sin(l*S)/A,a=a*_+f*l,c=c*_+u*l,h=h*_+p*l,d=d*_+v*l}else{a=a*_+f*l,c=c*_+u*l,h=h*_+p*l,d=d*_+v*l;const S=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=S,c*=S,h*=S,d*=S}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=l*p+h*d+a*u-c*f,e[t+1]=a*p+h*f+c*d-l*u,e[t+2]=c*p+h*u+l*f-a*d,e[t+3]=h*p-l*d-a*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(i/2),d=l(r/2),f=a(n/2),u=a(i/2),p=a(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],a=t[9],c=t[2],h=t[6],d=t[10],f=n+l+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-a)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>l&&n>d){const u=2*Math.sqrt(1+n-l-d);this._w=(h-a)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(l>d){const u=2*Math.sqrt(1+l-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(a+h)/u}else{const u=2*Math.sqrt(1+d-n-l);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(a+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*l+i*c-r*a,this._y=i*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-i*l,this._w=o*h-n*l-i*a-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,t=Math.sin(t*c)/h,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*i-l*n),h=2*(l*t-r*i),d=2*(r*n-o*t);return this.x=t+a*c+o*d-l*h,this.y=n+a*h+l*c-r*d,this.z=i+a*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=i*a-r*l,this.y=r*o-n*a,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let W=Oc;const ba=new W,Qc=new Wn,Fc=class Fc{constructor(e,t,n,i,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c)}set(e,t,n,i,r,o,l,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],v=i[0],m=i[3],_=i[6],S=i[1],A=i[4],T=i[7],I=i[2],N=i[5],M=i[8];return r[0]=o*v+l*S+a*I,r[3]=o*m+l*A+a*N,r[6]=o*_+l*T+a*M,r[1]=c*v+h*S+d*I,r[4]=c*m+h*A+d*N,r[7]=c*_+h*T+d*M,r[2]=f*v+u*S+p*I,r[5]=f*m+u*A+p*N,r[8]=f*_+u*T+p*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*l*c-n*r*h+n*l*a+i*r*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=h*o-l*c,f=l*a-h*r,u=c*r-o*a,p=t*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(l*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*a)*v,e[5]=(i*r-l*t)*v,e[6]=u*v,e[7]=(n*a-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+e,-i*c,i*a,-i*(-c*o+a*l)+l+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wa.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fc.prototype.isMatrix3=!0;let Dt=Fc;const wa=new Dt,jc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){const s={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?Ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qn]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:jc,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:Qt,toXYZ:jc,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),s}const Ht=qd();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class Yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=zr("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class gc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Ta(i[o].image)):r.push(Ta(i[o]))}else r=Ta(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let Zd=0;const Ea=new W;class Sn extends ts{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=zn,i=zn,r=Rn,o=yi,l=ci,a=Zn,c=Sn.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=fi(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Uu;Sn.DEFAULT_ANISOTROPY=1;const Bc=class Bc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const a=e.elements,c=a[0],h=a[4],d=a[8],f=a[1],u=a[5],p=a[9],v=a[2],m=a[6],_=a[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(u+1)/2,I=(_+1)/2,N=(h+f)/4,M=(d+v)/4,w=(p+m)/4;return A>T&&A>I?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=N/n,r=M/n):T>I?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=N/i,r=w/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=M/r,i=w/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this.w=Ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this.w=Ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bc.prototype.isVector4=!0;let nn=Bc;class Jd extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $u extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ra=class ra{constructor(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m)}set(e,t,n,i,r,o,l,a,c,h,d,f,u,p,v,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=l,_[13]=a,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=u,_[7]=p,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,p=l*h,v=l*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=u+p*c,t[5]=f-v*c,t[9]=-l*a,t[2]=v-f*c,t[6]=p+u*c,t[10]=o*a}else if(e.order==="YXZ"){const f=a*h,u=a*d,p=c*h,v=c*d;t[0]=f+v*l,t[4]=p*l-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=u*l-p,t[6]=v+f*l,t[10]=o*a}else if(e.order==="ZXY"){const f=a*h,u=a*d,p=c*h,v=c*d;t[0]=f-v*l,t[4]=-o*d,t[8]=p+u*l,t[1]=u+p*l,t[5]=o*h,t[9]=v-f*l,t[2]=-o*c,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const f=o*h,u=o*d,p=l*h,v=l*d;t[0]=a*h,t[4]=p*c-u,t[8]=f*c+v,t[1]=a*d,t[5]=v*c+f,t[9]=u*c-p,t[2]=-c,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const f=o*a,u=o*c,p=l*a,v=l*c;t[0]=a*h,t[4]=v-f*d,t[8]=p*d+u,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-c*h,t[6]=u*d+p,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*a,u=o*c,p=l*a,v=l*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=u*d-p,t[2]=p*d-u,t[6]=l*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,jd)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Vi.crossVectors(n,Yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Vi.crossVectors(n,Yn)),Vi.normalize(),jr.crossVectors(Yn,Vi),i[0]=Vi.x,i[4]=jr.x,i[8]=Yn.x,i[1]=Vi.y,i[5]=jr.y,i[9]=Yn.y,i[2]=Vi.z,i[6]=jr.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],v=n[6],m=n[10],_=n[14],S=n[3],A=n[7],T=n[11],I=n[15],N=i[0],M=i[4],w=i[8],k=i[12],H=i[1],j=i[5],re=i[9],$=i[13],U=i[2],se=i[6],oe=i[10],Z=i[14],ee=i[3],ae=i[7],pe=i[11],we=i[15];return r[0]=o*N+l*H+a*U+c*ee,r[4]=o*M+l*j+a*se+c*ae,r[8]=o*w+l*re+a*oe+c*pe,r[12]=o*k+l*$+a*Z+c*we,r[1]=h*N+d*H+f*U+u*ee,r[5]=h*M+d*j+f*se+u*ae,r[9]=h*w+d*re+f*oe+u*pe,r[13]=h*k+d*$+f*Z+u*we,r[2]=p*N+v*H+m*U+_*ee,r[6]=p*M+v*j+m*se+_*ae,r[10]=p*w+v*re+m*oe+_*pe,r[14]=p*k+v*$+m*Z+_*we,r[3]=S*N+A*H+T*U+I*ee,r[7]=S*M+A*j+T*se+I*ae,r[11]=S*w+A*re+T*oe+I*pe,r[15]=S*k+A*$+T*Z+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],v=e[7],m=e[11],_=e[15],S=a*u-c*f,A=l*u-c*d,T=l*f-a*d,I=o*u-c*h,N=o*f-a*h,M=o*d-l*h;return t*(v*S-m*A+_*T)-n*(p*S-m*I+_*N)+i*(p*A-v*I+_*M)-r*(p*T-v*N+m*M)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return t*(o*h-l*c)-n*(r*h-l*a)+i*(r*c-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],v=e[13],m=e[14],_=e[15],S=t*l-n*o,A=t*a-i*o,T=t*c-r*o,I=n*a-i*l,N=n*c-r*l,M=i*c-r*a,w=h*v-d*p,k=h*m-f*p,H=h*_-u*p,j=d*m-f*v,re=d*_-u*v,$=f*_-u*m,U=S*$-A*re+T*j+I*H-N*k+M*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/U;return e[0]=(l*$-a*re+c*j)*se,e[1]=(i*re-n*$-r*j)*se,e[2]=(v*M-m*N+_*I)*se,e[3]=(f*N-d*M-u*I)*se,e[4]=(a*H-o*$-c*k)*se,e[5]=(t*$-i*H+r*k)*se,e[6]=(m*T-p*M-_*A)*se,e[7]=(h*M-f*T+u*A)*se,e[8]=(o*re-l*H+c*w)*se,e[9]=(n*H-t*re-r*w)*se,e[10]=(p*N-v*T+_*S)*se,e[11]=(d*T-h*N-u*S)*se,e[12]=(l*k-o*j-a*w)*se,e[13]=(t*j-n*k+i*w)*se,e[14]=(v*A-p*I-m*S)*se,e[15]=(h*I-d*A+f*S)*se,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-i*a,c*a+i*l,0,c*l+i*a,h*l+n,h*a-i*o,0,c*a-i*l,h*a+i*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,c=r+r,h=o+o,d=l+l,f=r*c,u=r*h,p=r*d,v=o*h,m=o*d,_=l*d,S=a*c,A=a*h,T=a*d,I=n.x,N=n.y,M=n.z;return i[0]=(1-(v+_))*I,i[1]=(u+T)*I,i[2]=(p-A)*I,i[3]=0,i[4]=(u-T)*N,i[5]=(1-(f+_))*N,i[6]=(m+S)*N,i[7]=0,i[8]=(p+A)*M,i[9]=(m-S)*M,i[10]=(1-(f+v))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_s.set(i[0],i[1],i[2]).length();const l=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ri.copy(this);const c=1/o,h=1/l,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let p,v;if(a)p=r/(o-r),v=o*r/(o-r);else if(l===hi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(l===Br)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=hi,a=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,v;if(a)p=1/(o-r),v=o/(o-r);else if(l===hi)p=-2/(o-r),v=-(o+r)/(o-r);else if(l===Br)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ra.prototype.isMatrix4=!0;let At=ra;const _s=new W,ri=new At,Qd=new W(0,0,0),jd=new W(1,1,1),Vi=new W,jr=new W,Yn=new W,th=new At,nh=new Wn;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],a=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const ih=new W,xs=new Wn,Ai=new At,eo=new W,ir=new W,tp=new W,np=new Wn,sh=new W(1,0,0),rh=new W(0,1,0),oh=new W(0,0,1),ah={type:"added"},ip={type:"removed"},vs={type:"childadded",child:null},Aa={type:"childremoved",child:null};class rn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new W,t=new wi,n=new Wn,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Dt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ir,eo,this.up):Ai.lookAt(eo,ir,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Ai),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];r(e.shapes,d)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(e.materials,this.material[a]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];i.animations.push(r(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ee extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),_=this._getHandJoint(c,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return l!==null&&(l.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ht.workingColorSpace){if(e=dc(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ca(o,r,e+1/3),this.g=Ca(o,r,e),this.b=Ca(o,r,e-1/3)}return Ht.colorSpaceToWorking(this,i),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ht.workingToColorSpace(Ln.copy(this),e),Math.round(Ut(Ln.r*255,0,255))*65536+Math.round(Ut(Ln.g*255,0,255))*256+Math.round(Ut(Ln.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const d=o-l;switch(c=h<=.5?d/(o+l):d/(2-o-l),o){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=yn){Ht.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,i=Ln.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(to);const n=Er(Wi.h,to.h,t),i=Er(Wi.s,to.s,t),r=Er(Wi.l,to.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new gt;gt.NAMES=ju;class _c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oi=new W,Ri=new W,Pa=new W,Ci=new W,Ms=new W,ys=new W,lh=new W,La=new W,Da=new W,Na=new W,Ia=new nn,Ua=new nn,Oa=new nn;class ni{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Ri.subVectors(n,t),Pa.subVectors(e,t);const o=oi.dot(oi),l=oi.dot(Ri),a=oi.dot(Pa),c=Ri.dot(Ri),h=Ri.dot(Pa),d=o*c-l*l;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*a-l*h)*f,p=(o*h-l*a)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,r,o,l,a){return this.getBarycoord(e,t,n,i,Ci)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Ci.x),a.addScaledVector(o,Ci.y),a.addScaledVector(l,Ci.z),a)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ia.setScalar(0),Ua.setScalar(0),Oa.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Oa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ri.subVectors(e,t),oi.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),oi.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;Ms.subVectors(i,n),ys.subVectors(r,n),La.subVectors(e,n);const a=Ms.dot(La),c=ys.dot(La);if(a<=0&&c<=0)return t.copy(n);Da.subVectors(e,i);const h=Ms.dot(Da),d=ys.dot(Da);if(h>=0&&d<=h)return t.copy(i);const f=a*d-h*c;if(f<=0&&a>=0&&h<=0&&a-h>0)return o=a/(a-h),t.copy(n).addScaledVector(Ms,o);Na.subVectors(e,r);const u=Ms.dot(Na),p=ys.dot(Na);if(p>=0&&u<=p)return t.copy(r);const v=u*c-a*p;if(v<=0&&c>=0&&p<=0)return l=c/(c-p),t.copy(n).addScaledVector(ys,l);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return lh.subVectors(r,i),l=(d-h)/(d-h+(u-p)),t.copy(i).addScaledVector(lh,l);const _=1/(m+v+f);return o=v*_,l=f*_,t.copy(n).addScaledVector(Ms,o).addScaledVector(ys,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),io.subVectors(this.max,sr),Ss.subVectors(e.a,sr),bs.subVectors(e.b,sr),ws.subVectors(e.c,sr),Xi.subVectors(bs,Ss),qi.subVectors(ws,bs),ns.subVectors(Ss,ws);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ns.z,ns.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ns.z,0,-ns.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ns.y,ns.x,0];return!Fa(t,Ss,bs,ws,io)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Ss,bs,ws,io))?!1:(so.crossVectors(Xi,qi),t=[so.x,so.y,so.z],Fa(t,Ss,bs,ws,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new W,new W,new W,new W,new W,new W,new W,new W],ai=new W,no=new Hi,Ss=new W,bs=new W,ws=new W,Xi=new W,qi=new W,ns=new W,sr=new W,io=new W,so=new W,is=new W;function Fa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){is.fromArray(s,r);const l=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),a=e.dot(is),c=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const _n=new W,ro=new Ne;let op=0;class An extends ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?la(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mc(e,this.array)}}class ef extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tf extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ap=new Hi,rr=new W,Ba=new W;class Ti{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Ba)),this.expandByPoint(rr.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const jn=new At,za=new rn,Ts=new W,Kn=new Hi,or=new Hi,En=new W;class jt extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?tf:ef)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];or.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(Kn.min,or.min),Kn.expandByPoint(En),En.addVectors(Kn.max,or.max),Kn.expandByPoint(En)):(Kn.expandByPoint(or.min),Kn.expandByPoint(or.max))}Kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)En.fromBufferAttribute(l,c),a&&(Ts.fromBufferAttribute(e,c),En.add(Ts)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],a=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)l[k]=new W,a[k]=new W;const h=new W,d=new W,f=new W,u=new Ne,p=new Ne,v=new Ne,m=new W,_=new W;function S(k,H,j){c[k]=c[H]=c[j]=1,h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,H),f.fromBufferAttribute(n,j),u.fromBufferAttribute(r,k),p.fromBufferAttribute(r,H),v.fromBufferAttribute(r,j),d.sub(h),f.sub(h),p.sub(u),v.sub(u);const re=1/(p.x*v.y-v.x*p.y);isFinite(re)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(re),_.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(re),l[k].add(m),l[H].add(m),l[j].add(m),a[k].add(_),a[H].add(_),a[j].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,H=A.length;k<H;++k){const j=A[k],re=j.start,$=j.count;for(let U=re,se=re+$;U<se;U+=3)S(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const T=new W,I=new W,N=new W,M=new W;function w(k){N.fromBufferAttribute(i,k),M.copy(N);const H=l[k];T.copy(H),T.sub(N.multiplyScalar(N.dot(H))).normalize(),I.crossVectors(M,H);const re=I.dot(a[k])<0?-1:1;o.setXYZW(k,T.x,T.y,T.z,re)}for(let k=0,H=n.count;k<H;++k)c[k]&&w(k);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new W,r=new W,o=new W,l=new W,a=new W,c=new W,h=new W,d=new W;if(e)for(let f=0,u=e.count;f<u;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),l.fromBufferAttribute(n,p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.add(h),a.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(l,a){const c=l.array,h=l.itemSize,d=l.normalized,f=new c.constructor(a.length*h);let u=0,p=0;for(let v=0,m=a.length;v<m;v++){l.isInterleavedBufferAttribute?u=a[v]*l.data.stride+l.offset:u=a[v]*h;for(let _=0;_<h;_++)f[p++]=c[u++]}return new An(f,h,d)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const l in i){const a=i[l],c=e(a,n);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);a.push(u)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[a]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ch(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ch(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function ch(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=fi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const On=new W;class kr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?la(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mc(e,this.data.array)}}const ka=new W,cp=new W,hp=new Dt;class Ui{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ka.subVectors(n,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hp.getNormalMatrix(e),i=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let up=0;class $n extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Fs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ks extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const ar=new W,As=new W,Rs=new W,Cs=new Ne,lr=new Ne,sf=new At,oo=new W,cr=new W,ao=new W,hh=new Ne,Ga=new Ne,uh=new Ne;class hs extends rn{constructor(e=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nf(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new kr(n,3,0,!1)),Es.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;lo(oo.set(-.5,-.5,0),Rs,o,As,i,r),lo(cr.set(.5,-.5,0),Rs,o,As,i,r),lo(ao.set(.5,.5,0),Rs,o,As,i,r),hh.set(0,0),Ga.set(1,0),uh.set(1,1);let l=e.ray.intersectTriangle(oo,cr,ao,!1,ar);if(l===null&&(lo(cr.set(-.5,.5,0),Rs,o,As,i,r),Ga.set(0,1),l=e.ray.intersectTriangle(oo,ao,cr,!1,ar),l===null))return;const a=e.ray.origin.distanceTo(ar);a<e.near||a>e.far||t.push({distance:a,point:ar.clone(),uv:ni.getInterpolation(ar,oo,cr,ao,hh,Ga,uh,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function lo(s,e,t,n,i,r){Cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(lr.x=r*Cs.x-i*Cs.y,lr.y=i*Cs.x+r*Cs.y):lr.copy(Cs),s.copy(e),s.x+=lr.x,s.y+=lr.y,s.applyMatrix4(sf)}const Li=new W,Ha=new W,co=new W,ho=new W;class Jr{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ha.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),ho.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(co),l=ho.dot(this.direction),a=-ho.dot(co),c=ho.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*a-l,f=o*l-a,p=r*h,d>=0)if(f>=-p)if(f<=p){const v=1/h;d*=v,f*=v,u=d*(d+o*f+2*l)+f*(o*d+f+2*a)+c}else f=r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f=-r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;else f<=-p?(d=Math.max(0,-(-o*r+l)),f=d>0?-r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+c):(d=Math.max(0,-(o*r+l)),f=d>0?r:Math.min(Math.max(-r,-a),r),u=-d*d+f*(f+2*a)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+l)),u=-d*d+f*(f+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ha).addScaledVector(co,f),u}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(l=(e.min.z-f.z)*d,a=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,a=(e.min.z-f.z)*d),n>a||l>i)||((l>n||n!==n)&&(n=l),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,l=this.direction,a=l.x,c=l.y,h=l.z,d=e.x-o.x,f=e.y-o.y,u=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,_=n.x-o.x,S=n.y-o.y,A=n.z-o.z,T=Math.abs(a),I=Math.abs(c),N=Math.abs(h);let M,w,k,H,j,re,$,U,se,oe,Z,ee;if(T>=I&&T>=N?(k=a,re=d,se=p,ee=_,a>=0?(M=c,w=h,H=f,j=u,$=v,U=m,oe=S,Z=A):(M=h,w=c,H=u,j=f,$=m,U=v,oe=A,Z=S)):I>=N?(k=c,re=f,se=v,ee=S,c>=0?(M=h,w=a,H=u,j=d,$=m,U=p,oe=A,Z=_):(M=a,w=h,H=d,j=u,$=p,U=m,oe=_,Z=A)):(k=h,re=u,se=m,ee=A,h>=0?(M=a,w=c,H=d,j=f,$=p,U=v,oe=_,Z=S):(M=c,w=a,H=f,j=d,$=v,U=p,oe=S,Z=_)),k===0)return null;const ae=M/k,pe=w/k,we=1/k,$e=H-ae*re,at=j-pe*re,me=$-ae*se,He=U-pe*se,it=oe-ae*ee,Ze=Z-pe*ee,We=it*He-Ze*me,et=$e*Ze-at*it,Ot=me*at-He*$e;if(i){if(We<0||et<0||Ot<0)return null}else if((We<0||et<0||Ot<0)&&(We>0||et>0||Ot>0))return null;const st=We+et+Ot;if(st===0)return null;const vt=we*(We*re+et*se+Ot*ee);return(st>0?vt<0:vt>0)?null:this.at(vt/st,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fh=new At,ss=new Jr,uo=new Ti,dh=new W,fo=new W,po=new W,mo=new W,Va=new W,go=new W,ph=new W,_o=new W;class Nt extends rn{constructor(e=new jt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){go.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=l[a],d=r[a];h!==0&&(Va.fromBufferAttribute(d,e),o?go.addScaledVector(Va,h):go.addScaledVector(Va.sub(t),h))}t.add(go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(uo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(uo,dh)===null||ss.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],_=o[m.materialIndex],S=Math.max(m.start,u.start),A=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=S,I=A;T<I;T+=3){const N=l.getX(T),M=l.getX(T+1),w=l.getX(T+2);i=xo(this,_,e,n,c,h,d,N,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,_=v;m<_;m+=3){const S=l.getX(m),A=l.getX(m+1),T=l.getX(m+2);i=xo(this,o,e,n,c,h,d,S,A,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],_=o[m.materialIndex],S=Math.max(m.start,u.start),A=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let T=S,I=A;T<I;T+=3){const N=T,M=T+1,w=T+2;i=xo(this,_,e,n,c,h,d,N,M,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=p,_=v;m<_;m+=3){const S=m,A=m+1,T=m+2;i=xo(this,o,e,n,c,h,d,S,A,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fp(s,e,t,n,i,r,o,l){let a;if(e.side===Nn?a=n.intersectTriangle(o,r,i,!0,l):a=n.intersectTriangle(i,r,o,e.side===ji,l),a===null)return null;_o.copy(l),_o.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:s}}function xo(s,e,t,n,i,r,o,l,a,c){s.getVertexPosition(l,fo),s.getVertexPosition(a,po),s.getVertexPosition(c,mo);const h=fp(s,e,t,n,fo,po,mo,ph);if(h){const d=new W;ni.getBarycoord(ph,fo,po,mo,d),i&&(h.uv=ni.getInterpolatedAttribute(i,l,a,c,d,new Ne)),r&&(h.uv1=ni.getInterpolatedAttribute(r,l,a,c,d,new Ne)),o&&(h.normal=ni.getInterpolatedAttribute(o,l,a,c,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:a,c,normal:new W,materialIndex:0};ni.getNormal(fo,po,mo,f.normal),h.face=f,h.barycoord=d}return h}const hr=new nn,mh=new nn,gh=new nn,dp=new nn,_h=new At,vo=new W,Wa=new Ti,xh=new At,Xa=new Jr;class pp extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wc,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingSphere.expandByPoint(vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(i),e.ray.intersectsSphere(Wa)!==!1&&(xh.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(xh),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===md?this.bindMatrixInverse.copy(this.bindMatrix).invert():yt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mh.fromBufferAttribute(i.attributes.skinIndex,e),gh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(hr.copy(t),t.set(0,0,0,0)):(hr.set(t.x,t.y,t.z,1),t.set(0,0,0)),hr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=gh.getComponent(r);if(o!==0){const l=mh.getComponent(r);_h.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(dp.copy(hr).applyMatrix4(_h),o)}}return t.isVector4&&(t.w=hr.w),t.applyMatrix4(this.bindMatrixInverse)}}class rf extends rn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ca extends Sn{constructor(e=null,t=1,n=1,i,r,o,l,a,c=xn,h=xn,d,f){super(null,o,l,a,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new At,mp=new At;class xc{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){yt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new At;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:mp;vh.multiplyMatrices(l,t[r]),vh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ca(t,e,e,ci,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(yt("Skeleton: No bone found with UUID:",r),o=new rf),this.bones.push(o),this.boneInverses.push(new At().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Jo extends An{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new At,Mh=new At,Mo=[],yh=new Hi,gp=new At,ur=new Nt,fr=new Ti;class Gr extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),yh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),fr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),Mh.multiplyMatrices(n,Ps),ur.matrixWorld=Mh,ur.raycast(e,Mo);for(let o=0,l=Mo.length;o<l;o++){const a=Mo[o];a.instanceId=r,a.object=this,t.push(a)}Mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(i*this.count),i,this.count,aa,ii));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=i*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rs=new Ti,_p=new Ne(.5,.5),yo=new W;class Hr{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){const i=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],v=r[9],m=r[10],_=r[11],S=r[12],A=r[13],T=r[14],I=r[15];if(i[0].setComponents(c-o,u-h,_-p,I-S).normalize(),i[1].setComponents(c+o,u+h,_+p,I+S).normalize(),i[2].setComponents(c+l,u+d,_+v,I+A).normalize(),i[3].setComponents(c-l,u-d,_-v,I-A).normalize(),n)i[4].setComponents(a,f,m,T).normalize(),i[5].setComponents(c-a,u-f,_-m,I-T).normalize();else if(i[4].setComponents(c-a,u-f,_-m,I-T).normalize(),t===hi)i[5].setComponents(c+a,u+f,_+m,I+T).normalize();else if(t===Br)i[5].setComponents(a,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=_p.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yo.x=i.normal.x>0?e.max.x:e.min.x,yo.y=i.normal.y>0?e.max.y:e.min.y,yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sh=new At;class vc{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];Sh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Hr),n[i].setFromProjectionMatrix(Sh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Hr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new vc().copy(this)}}class of extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new W,Qo=new W,bh=new At,dr=new Jr,So=new Ti,qa=new W,wh=new W;class Mc extends rn{constructor(e=new jt,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$o.fromBufferAttribute(t,i-1),Qo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Qo);e.setAttribute("lineDistance",new Tt(n,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;bh.copy(i).invert(),dr.copy(e.ray).applyMatrix4(bh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const _=h.getX(v),S=h.getX(v+1),A=bo(this,e,dr,a,_,S,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(u),_=bo(this,e,dr,a,v,m,p-1);_&&t.push(_)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,m=p-1;v<m;v+=c){const _=bo(this,e,dr,a,v,v+1,v);_&&t.push(_)}if(this.isLineLoop){const v=bo(this,e,dr,a,p-1,u,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function bo(s,e,t,n,i,r,o){const l=s.geometry.attributes.position;if($o.fromBufferAttribute(l,i),Qo.fromBufferAttribute(l,r),t.distanceSqToSegment($o,Qo,qa,wh)>n)return;qa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(qa);if(!(c<e.near||c>e.far))return{distance:c,point:wh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Th=new W,Eh=new W;class xp extends Mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Th.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(Eh);e.setAttribute("lineDistance",new Tt(n,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends Mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ar extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ah=new At,Vl=new Jr,wo=new Ti,To=new W;class Mr extends rn{constructor(e=new jt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Ah.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(Ah);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,v=u;p<v;p++){const m=c.getX(p);To.fromBufferAttribute(d,m),Rh(To,m,a,i,e,t,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,v=u;p<v;p++)To.fromBufferAttribute(d,p),Rh(To,p,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Rh(s,e,t,n,i,r,o){const l=Vl.distanceSqToPoint(s);if(l<t){const a=new W;Vl.closestPointToPoint(s,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class af extends Sn{constructor(e=[],t=Hs,n,i,r,o,l,a,c,h){super(e,t,n,i,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wl extends Sn{constructor(e,t,n,i,r,o,l,a,c){super(e,t,n,i,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends Sn{constructor(e,t,n=ui,i,r,o,l=xn,a=xn,c,h=es,d=1){if(h!==es&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class lf extends fs{constructor(e,t=ui,n=Hs,i,r,o=xn,l=xn,a,c=es){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,l,a,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cf extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Re extends jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function p(v,m,_,S,A,T,I,N,M,w,k){const H=T/M,j=I/w,re=T/2,$=I/2,U=N/2,se=M+1,oe=w+1;let Z=0,ee=0;const ae=new W;for(let pe=0;pe<oe;pe++){const we=pe*j-$;for(let $e=0;$e<se;$e++){const at=$e*H-re;ae[v]=at*S,ae[m]=we*A,ae[_]=U,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[_]=N>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push($e/M),d.push(1-pe/w),Z+=1}}for(let pe=0;pe<w;pe++)for(let we=0;we<M;we++){const $e=f+we+se*pe,at=f+we+se*(pe+1),me=f+(we+1)+se*(pe+1),He=f+(we+1)+se*pe;a.push($e,at,He),a.push(at,me,He),ee+=6}l.addGroup(u,ee,k),u+=ee,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jo extends jt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],l=[],a=[],c=[],h=t/2,d=Math.PI/2*e,f=t,u=2*d+f,p=n*2+r,v=i+1,m=new W,_=new W;for(let S=0;S<=p;S++){let A=0,T=0,I=0,N=0;if(S<=n){const k=S/n,H=k*Math.PI/2;T=-h-e*Math.cos(H),I=e*Math.sin(H),N=-e*Math.cos(H),A=k*d}else if(S<=n+r){const k=(S-n)/r;T=-h+k*t,I=e,N=0,A=d+k*f}else{const k=(S-n-r)/n,H=k*Math.PI/2;T=h+e*Math.sin(H),I=e*Math.cos(H),N=e*Math.sin(H),A=d+f+k*d}const M=Math.max(0,Math.min(1,A/u));let w=0;S===0?w=.5/i:S===p&&(w=-.5/i);for(let k=0;k<=i;k++){const H=k/i,j=H*Math.PI*2,re=Math.sin(j),$=Math.cos(j);_.x=-I*$,_.y=T,_.z=I*re,l.push(_.x,_.y,_.z),m.set(-I*$,N,I*re),m.normalize(),a.push(m.x,m.y,m.z),c.push(H+w,M)}if(S>0){const k=(S-1)*v;for(let H=0;H<i;H++){const j=k+H,re=k+H+1,$=S*v+H,U=S*v+H+1;o.push(j,re,$),o.push(re,U,$)}}}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class li extends jt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],l=[],a=[],c=new W,h=new Ne;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nt extends jt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const v=[],m=n/2;let _=0;S(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(u,2));function S(){const T=new W,I=new W;let N=0;const M=(t-e)/n;for(let w=0;w<=r;w++){const k=[],H=w/r,j=H*(t-e)+e;for(let re=0;re<=i;re++){const $=re/i,U=$*a+l,se=Math.sin(U),oe=Math.cos(U);I.x=j*se,I.y=-H*n+m,I.z=j*oe,d.push(I.x,I.y,I.z),T.set(se,M,oe).normalize(),f.push(T.x,T.y,T.z),u.push($,1-H),k.push(p++)}v.push(k)}for(let w=0;w<i;w++)for(let k=0;k<r;k++){const H=v[k][w],j=v[k+1][w],re=v[k+1][w+1],$=v[k][w+1];(e>0||k!==0)&&(h.push(H,j,$),N+=3),(t>0||k!==r-1)&&(h.push(j,re,$),N+=3)}c.addGroup(_,N,0),_+=N}function A(T){const I=p,N=new Ne,M=new W;let w=0;const k=T===!0?e:t,H=T===!0?1:-1;for(let re=1;re<=i;re++)d.push(0,m*H,0),f.push(0,H,0),u.push(.5,.5),p++;const j=p;for(let re=0;re<=i;re++){const U=re/i*a+l,se=Math.cos(U),oe=Math.sin(U);M.x=k*oe,M.y=m*H,M.z=k*se,d.push(M.x,M.y,M.z),f.push(0,H,0),N.x=se*.5+.5,N.y=oe*.5*H+.5,u.push(N.x,N.y),p++}for(let re=0;re<i;re++){const $=I+re,U=j+re;T===!0?h.push(U,U+1,$):h.push(U+1,U,$),w+=3}c.addGroup(_,w,T===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mn extends nt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new mn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends jt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),c(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(S){const A=new W,T=new W,I=new W;for(let N=0;N<t.length;N+=3)u(t[N+0],A),u(t[N+1],T),u(t[N+2],I),a(A,T,I,S)}function a(S,A,T,I){const N=I+1,M=[];for(let w=0;w<=N;w++){M[w]=[];const k=S.clone().lerp(T,w/N),H=A.clone().lerp(T,w/N),j=N-w;for(let re=0;re<=j;re++)re===0&&w===N?M[w][re]=k:M[w][re]=k.clone().lerp(H,re/j)}for(let w=0;w<N;w++)for(let k=0;k<2*(N-w)-1;k++){const H=Math.floor(k/2);k%2===0?(f(M[w][H+1]),f(M[w+1][H]),f(M[w][H])):(f(M[w][H+1]),f(M[w+1][H+1]),f(M[w+1][H]))}}function c(S){const A=new W;for(let T=0;T<r.length;T+=3)A.x=r[T+0],A.y=r[T+1],A.z=r[T+2],A.normalize().multiplyScalar(S),r[T+0]=A.x,r[T+1]=A.y,r[T+2]=A.z}function h(){const S=new W;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const T=m(S)/2/Math.PI+.5,I=_(S)/Math.PI+.5;o.push(T,1-I)}p(),d()}function d(){for(let S=0;S<o.length;S+=6){const A=o[S+0],T=o[S+2],I=o[S+4],N=Math.max(A,T,I),M=Math.min(A,T,I);N>.9&&M<.1&&(A<.2&&(o[S+0]+=1),T<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function u(S,A){const T=S*3;A.x=e[T+0],A.y=e[T+1],A.z=e[T+2]}function p(){const S=new W,A=new W,T=new W,I=new W,N=new Ne,M=new Ne,w=new Ne;for(let k=0,H=0;k<r.length;k+=9,H+=6){S.set(r[k+0],r[k+1],r[k+2]),A.set(r[k+3],r[k+4],r[k+5]),T.set(r[k+6],r[k+7],r[k+8]),N.set(o[H+0],o[H+1]),M.set(o[H+2],o[H+3]),w.set(o[H+4],o[H+5]),I.copy(S).add(A).add(T).divideScalar(3);const j=m(I);v(N,H+0,S,j),v(M,H+2,A,j),v(w,H+4,T,j)}}function v(S,A,T,I){I<0&&S.x===1&&(o[A]=S.x-1),T.x===0&&T.z===0&&(o[A]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function _(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.detail)}}class Mi extends ha{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(i=Math.floor(l+(a-l)/2),c=n[i]-o,c<0)l=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),a=t||(o.isVector2?new Ne:new W);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new W,i=[],r=[],o=[],l=new W,a=new At;for(let u=0;u<=e;u++){const p=u/e;i[u]=this.getTangentAt(p,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),l.crossVectors(i[u-1],i[u]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(Ut(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(l,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(Ut(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class yc extends Ei{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Ne){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=a-this.aX,u=c-this.aY;a=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(a,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mp extends yc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let s=0,e=0,t=0,n=0;function i(r,o,l,a){s=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){i(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,d){let f=(o-r)/c-(l-r)/(c+h)+(l-o)/h,u=(l-o)/h-(a-o)/(h+d)+(a-l)/d;f*=h,u*=h,i(o,l,f,u)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const Ch=new W,Ph=new W,Ya=new Sc,Ka=new Sc,Za=new Sc;class yp extends Ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new W){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=i[(l-1)%r]:(Ph.subVectors(i[0],i[1]).add(i[0]),c=Ph);const d=i[l%r],f=i[(l+1)%r];if(this.closed||l+2<r?h=i[(l+2)%r]:(Ch.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Ya.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,v,m),Ka.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,v,m),Za.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ka.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Za.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ya.calc(a),Ka.calc(a),Za.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new W().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,a=s*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*s+t}function Sp(s,e){const t=1-s;return t*t*e}function bp(s,e){return 2*(1-s)*s*e}function wp(s,e){return s*s*e}function Rr(s,e,t,n){return Sp(s,e)+bp(s,t)+wp(s,n)}function Tp(s,e){const t=1-s;return t*t*t*e}function Ep(s,e){const t=1-s;return 3*t*t*s*e}function Ap(s,e){return 3*(1-s)*s*s*e}function Rp(s,e){return s*s*s*e}function Cr(s,e,t,n,i){return Tp(s,e)+Ep(s,t)+Ap(s,n)+Rp(s,i)}class hf extends Ei{constructor(e=new Ne,t=new Ne,n=new Ne,i=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ne){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Cr(e,i.x,r.x,o.x,l.x),Cr(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cp extends Ei{constructor(e=new W,t=new W,n=new W,i=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new W){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Cr(e,i.x,r.x,o.x,l.x),Cr(e,i.y,r.y,o.y,l.y),Cr(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uf extends Ei{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Ei{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends Ei{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends Ei{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y),Rr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,a=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Lh(l,a.x,c.x,h.x,d.x),Lh(l,a.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ne().fromArray(i))}return this}}var Xl=Object.freeze({__proto__:null,ArcCurve:Mp,CatmullRomCurve3:yp,CubicBezierCurve:hf,CubicBezierCurve3:Cp,EllipseCurve:yc,LineCurve:uf,LineCurve3:Pp,QuadraticBezierCurve:ff,QuadraticBezierCurve3:Lp,SplineCurve:df});class Dp extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let c=0;c<a.length;c++){const h=a[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Xl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Dh extends Dp{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new uf(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ff(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new hf(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i),new Ne(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new df(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,a){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,l,a),this}absellipse(e,t,n,i,r,o,l,a){const c=new yc(e,t,n,i,r,o,l,a);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vr extends Dh{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Dh().fromJSON(i))}return this}}function Np(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=pf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c;if(n&&(r=Bp(s,e,r,t)),s.length>80*t){l=s[0],a=s[1];let h=l,d=a;for(let f=t;f<i;f+=t){const u=s[f],p=s[f+1];u<l&&(l=u),p<a&&(a=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-l,d-a),c=c!==0?32767/c:0}return Wr(r,o,t,l,a,c,0),o}function pf(s,e,t,n,i){let r;if(i===Zp(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nh(o/n|0,s[o],s[o+1],r);return r&&Xs(r,r.next)&&(qr(r),r=r.next),r}function ds(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Xs(t,t.next)||cn(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Vp(s,n,i,r);let l=s;for(;s.prev!==s.next;){const a=s.prev,c=s.next;if(r?Up(s,n,i,r):Ip(s)){e.push(a.i,s.i,c.i),qr(s),s=c.next,l=c.next;continue}if(s=c,s===l){o?o===1?(s=Op(ds(s),e),Wr(s,e,t,n,i,r,2)):o===2&&Fp(s,e,t,n,i,r):Wr(ds(s),e,t,n,i,r,1);break}}}function Ip(s){const e=s.prev,t=s,n=s.next;if(cn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,l=e.y,a=t.y,c=n.y,h=Math.min(i,r,o),d=Math.min(l,a,c),f=Math.max(i,r,o),u=Math.max(l,a,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&yr(i,l,r,a,o,c,p.x,p.y)&&cn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Up(s,e,t,n){const i=s.prev,r=s,o=s.next;if(cn(i,r,o)>=0)return!1;const l=i.x,a=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(l,a,c),p=Math.min(h,d,f),v=Math.max(l,a,c),m=Math.max(h,d,f),_=ql(u,p,e,t,n),S=ql(v,m,e,t,n);let A=s.prevZ,T=s.nextZ;for(;A&&A.z>=_&&T&&T.z<=S;){if(A.x>=u&&A.x<=v&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&yr(l,h,a,d,c,f,A.x,A.y)&&cn(A.prev,A,A.next)>=0||(A=A.prevZ,T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&yr(l,h,a,d,c,f,T.x,T.y)&&cn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;A&&A.z>=_;){if(A.x>=u&&A.x<=v&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&yr(l,h,a,d,c,f,A.x,A.y)&&cn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;T&&T.z<=S;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&yr(l,h,a,d,c,f,T.x,T.y)&&cn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Op(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Xs(n,i)&&gf(n,t,t.next,i)&&Xr(n,i)&&Xr(i,n)&&(e.push(n.i,t.i,i.i),qr(t),qr(t.next),t=s=i),t=t.next}while(t!==s);return ds(t)}function Fp(s,e,t,n,i,r){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&qp(o,l)){let a=_f(o,l);o=ds(o,o.next),a=ds(a,a.next),Wr(o,e,t,n,i,r,0),Wr(a,e,t,n,i,r,0);return}l=l.next}o=o.next}while(o!==s)}function Bp(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const l=e[r]*n,a=r<o-1?e[r+1]*n:s.length,c=pf(s,l,a,n,!1);c===c.next&&(c.steiner=!0),i.push(Xp(c))}i.sort(zp);for(let r=0;r<i.length;r++)t=kp(i[r],t);return t}function zp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function kp(s,e){const t=Gp(s,e);if(!t)return e;const n=_f(t,s);return ds(n,n.next),ds(t,t.next)}function Gp(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Xs(s,t))return t;do{if(Xs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,a=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&mf(i<c?n:r,i,a,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Xr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Hp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==l);return o}function Hp(s,e){return cn(s.prev,s,e.prev)<0&&cn(e.next,s,s.next)<0}function Vp(s,e,t,n){let i=s;do i.z===0&&(i.z=ql(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Wp(i)}function Wp(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let c=0;c<t&&(l++,o=o.nextZ,!!o);c++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,l--):(i=o,o=o.nextZ,a--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ql(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Xp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function mf(s,e,t,n,i,r,o,l){return(i-o)*(e-l)>=(s-o)*(r-l)&&(s-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(i-o)*(n-l)}function yr(s,e,t,n,i,r,o,l){return!(s===o&&e===l)&&mf(s,e,t,n,i,r,o,l)}function qp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Yp(s,e)&&(Xr(s,e)&&Xr(e,s)&&Kp(s,e)&&(cn(s.prev,s,e.prev)||cn(s,e.prev,e))||Xs(s,e)&&cn(s.prev,s,s.next)>0&&cn(e.prev,e,e.next)>0)}function cn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Xs(s,e){return s.x===e.x&&s.y===e.y}function gf(s,e,t,n){const i=Ao(cn(s,e,t)),r=Ao(cn(s,e,n)),o=Ao(cn(t,n,s)),l=Ao(cn(t,n,e));return!!(i!==r&&o!==l||i===0&&Eo(s,t,e)||r===0&&Eo(s,n,e)||o===0&&Eo(t,s,n)||l===0&&Eo(t,e,n))}function Eo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ao(s){return s>0?1:s<0?-1:0}function Yp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&gf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xr(s,e){return cn(s.prev,s,s.next)<0?cn(s,e,s.next)>=0&&cn(s,s.prev,e)>=0:cn(s,e,s.prev)<0||cn(s,s.next,e)<0}function Kp(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function _f(s,e){const t=Yl(s.i,s.x,s.y),n=Yl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(s,e,t,n){const i=Yl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zp(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Jp{static triangulate(e,t,n=2){return Np(e,t,n)}}class Bi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Bi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ih(e),Uh(n,e);let o=e.length;t.forEach(Ih);for(let a=0;a<t.length;a++)i.push(o),o+=t[a].length,Uh(n,t[a]);const l=Jp.triangulate(n,i);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function Ih(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Uh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ea extends jt{constructor(e=new Vr([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,a=e.length;l<a;l++){const c=e[l];o(c)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(l){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:$p;let A,T=!1,I,N,M,w;if(_){A=_.getSpacedPoints(h),T=!0,f=!1;const Ce=_.isCatmullRomCurve3?_.closed:!1;I=_.computeFrenetFrames(h,Ce),N=new W,M=new W,w=new W}f||(m=0,u=0,p=0,v=0);const k=l.extractPoints(c);let H=k.shape;const j=k.holes;if(!Bi.isClockWise(H)){H=H.reverse();for(let Ce=0,Ve=j.length;Ce<Ve;Ce++){const Qe=j[Ce];Bi.isClockWise(Qe)&&(j[Ce]=Qe.reverse())}}function $(Ce){const Qe=10000000000000001e-36;let rt=Ce[0];for(let tt=1;tt<=Ce.length;tt++){const St=tt%Ce.length,lt=Ce[St],Ie=lt.x-rt.x,Ue=lt.y-rt.y,ze=Ie*Ie+Ue*Ue,D=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(rt.x),Math.abs(rt.y)),Je=Qe*D*D;if(ze<=Je){Ce.splice(St,1),tt--;continue}rt=lt}}$(H),j.forEach($);const U=j.length,se=H;for(let Ce=0;Ce<U;Ce++){const Ve=j[Ce];H=H.concat(Ve)}function oe(Ce,Ve,Qe){return Ve||Ct("ExtrudeGeometry: vec does not exist"),Ce.clone().addScaledVector(Ve,Qe)}const Z=H.length;function ee(Ce,Ve,Qe){let rt,tt,St;const lt=Ce.x-Ve.x,Ie=Ce.y-Ve.y,Ue=Qe.x-Ce.x,ze=Qe.y-Ce.y,D=lt*lt+Ie*Ie,Je=lt*ze-Ie*Ue;if(Math.abs(Je)>Number.EPSILON){const qe=Math.sqrt(D),Ge=Math.sqrt(Ue*Ue+ze*ze),Ae=Ve.x-Ie/qe,je=Ve.y+lt/qe,Te=Qe.x-ze/Ge,ce=Qe.y+Ue/Ge,L=((Te-Ae)*ze-(ce-je)*Ue)/(lt*ze-Ie*Ue);rt=Ae+lt*L-Ce.x,tt=je+Ie*L-Ce.y;const y=rt*rt+tt*tt;if(y<=2)return new Ne(rt,tt);St=Math.sqrt(y/2)}else{let qe=!1;lt>Number.EPSILON?Ue>Number.EPSILON&&(qe=!0):lt<-Number.EPSILON?Ue<-Number.EPSILON&&(qe=!0):Math.sign(Ie)===Math.sign(ze)&&(qe=!0),qe?(rt=-Ie,tt=lt,St=Math.sqrt(D)):(rt=lt,tt=Ie,St=Math.sqrt(D/2))}return new Ne(rt/St,tt/St)}const ae=[];for(let Ce=0,Ve=se.length,Qe=Ve-1,rt=Ce+1;Ce<Ve;Ce++,Qe++,rt++)Qe===Ve&&(Qe=0),rt===Ve&&(rt=0),ae[Ce]=ee(se[Ce],se[Qe],se[rt]);const pe=[];let we,$e=ae.concat();for(let Ce=0,Ve=U;Ce<Ve;Ce++){const Qe=j[Ce];we=[];for(let rt=0,tt=Qe.length,St=tt-1,lt=rt+1;rt<tt;rt++,St++,lt++)St===tt&&(St=0),lt===tt&&(lt=0),we[rt]=ee(Qe[rt],Qe[St],Qe[lt]);pe.push(we),$e=$e.concat(we)}let at;if(m===0)at=Bi.triangulateShape(se,j);else{const Ce=[],Ve=[];for(let Qe=0;Qe<m;Qe++){const rt=Qe/m,tt=u*Math.cos(rt*Math.PI/2),St=p*Math.sin(rt*Math.PI/2)+v;for(let lt=0,Ie=se.length;lt<Ie;lt++){const Ue=oe(se[lt],ae[lt],St);et(Ue.x,Ue.y,-tt),rt===0&&Ce.push(Ue)}for(let lt=0,Ie=U;lt<Ie;lt++){const Ue=j[lt];we=pe[lt];const ze=[];for(let D=0,Je=Ue.length;D<Je;D++){const qe=oe(Ue[D],we[D],St);et(qe.x,qe.y,-tt),rt===0&&ze.push(qe)}rt===0&&Ve.push(ze)}}at=Bi.triangulateShape(Ce,Ve)}const me=at.length,He=p+v;for(let Ce=0;Ce<Z;Ce++){const Ve=f?oe(H[Ce],$e[Ce],He):H[Ce];T?(M.copy(I.normals[0]).multiplyScalar(Ve.x),N.copy(I.binormals[0]).multiplyScalar(Ve.y),w.copy(A[0]).add(M).add(N),et(w.x,w.y,w.z)):et(Ve.x,Ve.y,0)}for(let Ce=1;Ce<=h;Ce++)for(let Ve=0;Ve<Z;Ve++){const Qe=f?oe(H[Ve],$e[Ve],He):H[Ve];T?(M.copy(I.normals[Ce]).multiplyScalar(Qe.x),N.copy(I.binormals[Ce]).multiplyScalar(Qe.y),w.copy(A[Ce]).add(M).add(N),et(w.x,w.y,w.z)):et(Qe.x,Qe.y,d/h*Ce)}for(let Ce=m-1;Ce>=0;Ce--){const Ve=Ce/m,Qe=u*Math.cos(Ve*Math.PI/2),rt=p*Math.sin(Ve*Math.PI/2)+v;for(let tt=0,St=se.length;tt<St;tt++){const lt=oe(se[tt],ae[tt],rt);et(lt.x,lt.y,d+Qe)}for(let tt=0,St=j.length;tt<St;tt++){const lt=j[tt];we=pe[tt];for(let Ie=0,Ue=lt.length;Ie<Ue;Ie++){const ze=oe(lt[Ie],we[Ie],rt);T?et(ze.x,ze.y+A[h-1].y,A[h-1].x+Qe):et(ze.x,ze.y,d+Qe)}}}it(),Ze();function it(){const Ce=i.length/3;if(f){let Ve=0,Qe=Z*Ve;for(let rt=0;rt<me;rt++){const tt=at[rt];Ot(tt[2]+Qe,tt[1]+Qe,tt[0]+Qe)}Ve=h+m*2,Qe=Z*Ve;for(let rt=0;rt<me;rt++){const tt=at[rt];Ot(tt[0]+Qe,tt[1]+Qe,tt[2]+Qe)}}else{for(let Ve=0;Ve<me;Ve++){const Qe=at[Ve];Ot(Qe[2],Qe[1],Qe[0])}for(let Ve=0;Ve<me;Ve++){const Qe=at[Ve];Ot(Qe[0]+Z*h,Qe[1]+Z*h,Qe[2]+Z*h)}}n.addGroup(Ce,i.length/3-Ce,0)}function Ze(){const Ce=i.length/3;let Ve=0;We(se,Ve),Ve+=se.length;for(let Qe=0,rt=j.length;Qe<rt;Qe++){const tt=j[Qe];We(tt,Ve),Ve+=tt.length}n.addGroup(Ce,i.length/3-Ce,1)}function We(Ce,Ve){let Qe=Ce.length;for(;--Qe>=0;){const rt=Qe;let tt=Qe-1;tt<0&&(tt=Ce.length-1);for(let St=0,lt=h+m*2;St<lt;St++){const Ie=Z*St,Ue=Z*(St+1),ze=Ve+rt+Ie,D=Ve+tt+Ie,Je=Ve+tt+Ue,qe=Ve+rt+Ue;st(ze,D,Je,qe)}}}function et(Ce,Ve,Qe){a.push(Ce),a.push(Ve),a.push(Qe)}function Ot(Ce,Ve,Qe){vt(Ce),vt(Ve),vt(Qe);const rt=i.length/3,tt=S.generateTopUV(n,i,rt-3,rt-2,rt-1);Mt(tt[0]),Mt(tt[1]),Mt(tt[2])}function st(Ce,Ve,Qe,rt){vt(Ce),vt(Ve),vt(rt),vt(Ve),vt(Qe),vt(rt);const tt=i.length/3,St=S.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);Mt(St[0]),Mt(St[1]),Mt(St[3]),Mt(St[1]),Mt(St[2]),Mt(St[3])}function vt(Ce){i.push(a[Ce*3+0]),i.push(a[Ce*3+1]),i.push(a[Ce*3+2])}function Mt(Ce){r.push(Ce.x),r.push(Ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Xl[i.type]().fromJSON(i)),new ea(n,e.options)}}const $p={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],l=e[n*3],a=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ne(r,o),new Ne(l,a),new Ne(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],l=e[t*3+1],a=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],p=e[i*3+2],v=e[r*3],m=e[r*3+1],_=e[r*3+2];return Math.abs(l-h)<Math.abs(o-c)?[new Ne(o,1-a),new Ne(c,1-d),new Ne(f,1-p),new Ne(v,1-_)]:[new Ne(l,1-a),new Ne(h,1-d),new Ne(u,1-p),new Ne(m,1-_)]}};function Qp(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bc extends jt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ut(i,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],h=1/t,d=new W,f=new Ne,u=new W,p=new W,v=new W;let m=0,_=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,u.x=_*1,u.y=-m,u.z=_*0,v.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:v.normalize(),a.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,u.x=_*1,u.y=-m,u.z=_*0,p.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),a.push(u.x,u.y,u.z),v.copy(p)}for(let S=0;S<=t;S++){const A=n+S*h*i,T=Math.sin(A),I=Math.cos(A);for(let N=0;N<=e.length-1;N++){d.x=e[N].x*T,d.y=e[N].y,d.z=e[N].x*I,o.push(d.x,d.y,d.z),f.x=S/t,f.y=N/(e.length-1),l.push(f.x,f.y);const M=a[3*N+0]*T,w=a[3*N+1],k=a[3*N+0]*I;c.push(M,w,k)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){const T=A+S*e.length,I=T,N=T+e.length,M=T+e.length+1,w=T+1;r.push(I,N,w),r.push(M,w,N)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2)),this.setAttribute("normal",new Tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.points,e.segments,e.phiStart,e.phiLength)}}class wc extends ha{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wc(e.radius,e.detail)}}class qt extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(i),c=l+1,h=a+1,d=e/l,f=t/a,u=[],p=[],v=[],m=[];for(let _=0;_<h;_++){const S=_*f-o;for(let A=0;A<c;A++){const T=A*d-r;p.push(T,-S,0),v.push(0,0,1),m.push(A/l),m.push(1-_/a)}}for(let _=0;_<a;_++)for(let S=0;S<l;S++){const A=S+c*_,T=S+c*(_+1),I=S+1+c*(_+1),N=S+1+c*_;u.push(A,T,N),u.push(T,I,N)}this.setIndex(u),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends jt{constructor(e=new Vr([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let l=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Tt(i,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const p=f.holes;Bi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,_=p.length;m<_;m++){const S=p[m];Bi.isClockWise(S)===!0&&(p[m]=S.reverse())}const v=Bi.triangulateShape(u,p);for(let m=0,_=p.length;m<_;m++){const S=p[m];u=u.concat(S)}for(let m=0,_=u.length;m<_;m++){const S=u[m];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,_=v.length;m<_;m++){const S=v[m],A=S[0]+d,T=S[1]+d,I=S[2]+d;n.push(A,T,I),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jp(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Tc(n,e.curveSegments)}}function jp(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Xt extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const h=[],d=new W,f=new W,u=[],p=[],v=[],m=[];for(let _=0;_<=n;_++){const S=[],A=_/n,T=o+A*l,I=e*Math.cos(T),N=Math.sqrt(e*e-I*I);let M=0;_===0&&o===0?M=.5/t:_===n&&a===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const k=w/t,H=i+k*r;d.x=-N*Math.cos(H),d.y=I,d.z=N*Math.sin(H),p.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(k+M,1-A),S.push(c++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){const A=h[_][S+1],T=h[_][S],I=h[_+1][S],N=h[_+1][S+1];(_!==0||o>0)&&u.push(A,T,N),(_!==n-1||a<Math.PI)&&u.push(T,I,N)}this.setIndex(u),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pn extends jt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],h=[],d=[],f=new W,u=new W,p=new W;for(let v=0;v<=n;v++){const m=o+v/n*l;for(let _=0;_<=i;_++){const S=_/i*r;u.x=(e+t*Math.cos(m))*Math.cos(S),u.y=(e+t*Math.cos(m))*Math.sin(S),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(_/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const _=(i+1)*v+m-1,S=(i+1)*(v-1)+m-1,A=(i+1)*(v-1)+m,T=(i+1)*v+m;a.push(_,S,T),a.push(S,A,T)}this.setIndex(a),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function qs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Oh(i))i.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Oh(i[0])){const r=[];for(let o=0,l=i.length;o<l;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const n=qs(s[t]);for(const i in n)e[i]=n[i]}return e}function Oh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function e0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const Yr={clone:qs,merge:Bn};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new W().fromArray(i.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new At().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vf extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ys extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends Ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ho extends $n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class i0 extends $n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class s0 extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r0 extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function o0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let a=0;a!==e;++a)i[o++]=s[l+a]}return i}function a0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class l0 extends Js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],a=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,l=2*t-n;break;case Kc:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Yc:o=e,a=2*n-t;break;case Kc:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,_=-f*m+2*f*v-f*p,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,A=(-1-u)*m+(1.5+u)*v+.5*p,T=u*m-u*v;for(let I=0;I!==l;++I)r[I]=_*o[h+I]+S*o[c+I]+A*o[a+I]+T*o[d+I];return r}}class c0 extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==l;++f)r[f]=o[c+f]*d+o[a+f]*h;return r}}class h0 extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class u0 extends Js{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,c=a-l,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),v=1-p;for(let m=0;m!==l;++m)r[m]=o[c+m]*v+o[a+m]*p;return r}const f=l*2,u=e-1;for(let p=0;p!==l;++p){const v=o[c+p],m=o[a+p],_=u*f+p*2,S=d[_],A=d[_+1],T=e*f+p*2,I=h[T],N=h[T+1],M=d0(n,t,S,I,i);r[p]=Mf(M,v,A,N,m)}return r}}function Mf(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function f0(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function d0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const l=Mf(r,e,t,n,i)-s;if(Math.abs(l)<1e-10)break;const a=f0(r,e,t,n,i);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Sr(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new h0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new c0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new u0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return yt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Sr(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Sr(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const a=n[l];if(typeof a=="number"&&isNaN(a)){Ct("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){Ct("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(i!==void 0&&Ad(i))for(let l=0,a=i.length;l!==a;++l){const c=i[l];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ya,r=e.length-1;let o=1;for(let l=1;l<r;++l){let a=!1;const c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(i)a=!0;else{const d=l*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[f+p]||v!==t[u+p]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];const d=l*n,f=o*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,c=0;c!==n;++c)t[a+c]=t[l+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Sr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Bh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function zh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Or;class $s extends pi{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ur;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class yf extends pi{constructor(e,t,n,i){super(e,t,n,i)}}yf.prototype.ValueTypeName="color";class Kr extends pi{constructor(e,t,n,i){super(e,t,n,i)}}Kr.prototype.ValueTypeName="number";class p0 extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(i-t);let c=e*l;for(let h=c+l;c!==h;c+=4)Wn.slerpFlat(r,0,o,c-l,o,c,a);return r}}class Zr extends pi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new p0(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends pi{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Ur;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class ta extends pi{constructor(e,t,n,i){super(e,t,n,i)}}ta.prototype.ValueTypeName="vector";class m0{constructor(e="",t=-1,n=[],i=gd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(_0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(pi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let a=[],c=[];a.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);const h=o0(a);a=Fh(a,1,h),c=Fh(c,1,h),!i&&a[0]===0&&(a.push(r),c.push(c[0])),o.push(new Kr(".morphTargetInfluences["+t[l].name+"]",a,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const c=e[l],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function g0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return ta;case"color":return yf;case"quaternion":return Zr;case"bool":case"boolean":return $s;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g0(s.type);if(s.times===void 0){const n=[],i=[];a0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Sr(s.settings)&&(t.settings={inTangents:Zi(s.settings.inTangents,Float32Array),outTangents:Zi(s.settings.outTangents,Float32Array)}),t}const zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(kh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!kh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function kh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class x0{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const v0=new x0;class js{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class M0 extends Error{constructor(e,t){super(e),this.response=t}}class Sf extends js{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:i});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,a=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&yt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Di[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,p=u!==0;let v=0;const m=new ReadableStream({start(_){S();function S(){d.read().then(({done:A,value:T})=>{if(A)_.close();else{v+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:u});for(let N=0,M=h.length;N<M;N++){const w=h[N];w.onProgress&&w.onProgress(I)}_.enqueue(T),S()}},A=>{_.error(A)})}}});return new Response(m)}else throw new M0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{zi.add(`file:${e}`,c);const h=Di[e];delete Di[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Di[e];if(h===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class y0 extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ls.get(o);d===void 0&&(d=[],Ls.set(o,d)),d.push({onLoad:t,onError:i})}return o}const l=zr("img");function a(){h(),t&&t(this);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),zi.remove(`image:${e}`);const f=Ls.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onError&&p.onError(d)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),zi.add(`image:${e}`,l),r.manager.itemStart(e),l.fetchPriority=this.priority,l.src=e,l}}class S0 extends js{constructor(e){super(e)}load(e,t,n,i){const r=new Sn,o=new y0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ua extends rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class b0 extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ja=new At,Gh=new W,Hh=new W;class Ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,l=i?i.w/r.y:1,a=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Br||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ro=new W,Co=new Wn,gi=new W;class bf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ro,Co,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ro,Co,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new W,Vh=new Ne,Wh=new Ne;class Vn extends bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Vh,Wh),t.subVectors(Wh,Vh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class w0 extends Ec{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class T0 extends ua{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new w0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class E0 extends Ec{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0}}class $i extends ua{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fa extends bf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class A0 extends Ec{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new A0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $a=new WeakMap;class R0 extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&yt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&yt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{$a.has(o)===!0?(i&&i($a.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const l={};l.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",l.headers=this.requestHeader,l.priority=this.priority,l.cache=this.cache,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const a=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return zi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$a.set(a,c),zi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ds=-90,Ns=1;class Kl extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(Ds,Ns,e,t);i.layers=this.layers,this.add(i);const r=new Vn(Ds,Ns,e,t);r.layers=this.layers,this.add(r);const o=new Vn(Ds,Ns,e,t);o.layers=this.layers,this.add(o);const l=new Vn(Ds,Ns,e,t);l.layers=this.layers,this.add(l);const a=new Vn(Ds,Ns,e,t);a.layers=this.layers,this.add(a);const c=new Vn(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,a]=t;for(const c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class C0 extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class P0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=L0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function L0(){this._document.hidden===!1&&this.reset()}const Ac="\\[\\]\\.:\\/",D0=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",N0="[^"+Ac.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",Rc),U0=/(WCOD+)?/.source.replace("WCOD",N0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),B0=new RegExp("^"+I0+U0+O0+F0+"$"),z0=["material","materials","bones","map"];class k0{constructor(e,t,n){const i=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tn{constructor(e,t,n){this.path=t,this.parsedPath=n||tn.parseTrackName(t),this.node=tn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tn.Composite(e,t,n):new tn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const a=n(l.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tn.Composite=k0;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G0 extends ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qh(s,e,t,n){const i=H0(n);switch(t){case Gu:return s*e;case aa:return s*e/i.components*i.byteLength;case hc:return s*e/i.components*i.byteLength;case us:return s*e*2/i.components*i.byteLength;case uc:return s*e*2/i.components*i.byteLength;case Hu:return s*e*3/i.components*i.byteLength;case ci:return s*e*4/i.components*i.byteLength;case fc:return s*e*4/i.components*i.byteLength;case Bo:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ko:case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:case ml:return Math.max(s,16)*Math.max(e,8)/4;case fl:case pl:return Math.max(s,8)*Math.max(e,8)/2;case gl:case _l:case vl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:case qo:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Fl:case Bl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zl:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yo:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(s){switch(s){case Zn:case Fu:return{byteLength:1,components:1};case Ir:case Bu:case In:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case ui:case ac:case ii:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Tf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function V0(s){const e=new WeakMap;function t(l,a){const c=l.array,h=l.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(a,f),s.bufferData(a,c,h),l.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,a,c){const h=a.array,d=a.updateRanges;if(s.bindBuffer(c,l),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],v=d[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(s.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:i,remove:r,update:o}}var W0=`#ifdef USE_ALPHAHASH
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
}`,Ft={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:K0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:$0,batching_pars_vertex:Q0,batching_vertex:j0,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:fm,common:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:Mm,envmap_fragment:ym,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Im,lights_toon_fragment:Om,lights_toon_pars_fragment:Fm,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:yg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Dg,specularmap_fragment:Ng,specularmap_pars_fragment:Ig,tonemapping_fragment:Ug,tonemapping_pars_fragment:Og,transmission_fragment:Fg,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Kg,depth_vert:Zg,depth_frag:Jg,distance_vert:$g,distance_frag:Qg,equirect_vert:jg,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:y_,sprite_frag:S_},ut={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},vi={basic:{uniforms:Bn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Bn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Bn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Bn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Bn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Bn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Bn([ut.points,ut.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Bn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Bn([ut.common,ut.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Bn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Bn([ut.sprite,ut.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Bn([ut.common,ut.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Bn([ut.lights,ut.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};vi.physical={uniforms:Bn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Po={r:0,b:0,g:0},b_=new At,Ef=new Dt;Ef.set(-1,0,0,0,1,0,0,0,1);function w_(s,e,t,n,i,r){const o=new gt(0);let l=i===!0?0:1,a,c,h=null,d=0,f=null;function u(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const T=S.backgroundBlurriness>0;A=e.get(A,T)}return A}function p(S){let A=!1;const T=u(S);T===null?m(o,l):T&&T.isColor&&(m(T,1),A=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,A){const T=u(A);T&&T.isCubeTexture?(c===void 0&&(c=new Nt(new Re(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:qs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,(h!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(a===void 0&&(a=new Nt(new qt(2,2),new kn({name:"BackgroundMaterial",uniforms:qs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=T,a.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,a.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),a.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(a.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),a.layers.enableAll(),S.unshift(a,a.geometry,a.material,0,0,null))}function m(S,A){S.getRGB(Po,xf(s)),t.buffers.color.setClear(Po.r,Po.g,Po.b,A,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),l=A,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:p,addToRenderList:v,dispose:_}}function T_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function l(j,re,$,U,se){let oe=!1;const Z=d(j,U,$,re);r!==Z&&(r=Z,c(r.object)),oe=u(j,U,$,se),oe&&p(j,U,$,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,T(j,re,$,U),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function a(){return s.createVertexArray()}function c(j){return s.bindVertexArray(j)}function h(j){return s.deleteVertexArray(j)}function d(j,re,$,U){const se=U.wireframe===!0;let oe=n[re.id];oe===void 0&&(oe={},n[re.id]=oe);const Z=j.isInstancedMesh===!0?j.id:0;let ee=oe[Z];ee===void 0&&(ee={},oe[Z]=ee);let ae=ee[$.id];ae===void 0&&(ae={},ee[$.id]=ae);let pe=ae[se];return pe===void 0&&(pe=f(a()),ae[se]=pe),pe}function f(j){const re=[],$=[],U=[];for(let se=0;se<t;se++)re[se]=0,$[se]=0,U[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:$,attributeDivisors:U,object:j,attributes:{},index:null}}function u(j,re,$,U){const se=r.attributes,oe=re.attributes;let Z=0;const ee=$.getAttributes();for(const ae in ee)if(ee[ae].location>=0){const we=se[ae];let $e=oe[ae];if($e===void 0&&(ae==="instanceMatrix"&&j.instanceMatrix&&($e=j.instanceMatrix),ae==="instanceColor"&&j.instanceColor&&($e=j.instanceColor)),we===void 0||we.attribute!==$e||$e&&we.data!==$e.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function p(j,re,$,U){const se={},oe=re.attributes;let Z=0;const ee=$.getAttributes();for(const ae in ee)if(ee[ae].location>=0){let we=oe[ae];we===void 0&&(ae==="instanceMatrix"&&j.instanceMatrix&&(we=j.instanceMatrix),ae==="instanceColor"&&j.instanceColor&&(we=j.instanceColor));const $e={};$e.attribute=we,we&&we.data&&($e.data=we.data),se[ae]=$e,Z++}r.attributes=se,r.attributesNum=Z,r.index=U}function v(){const j=r.newAttributes;for(let re=0,$=j.length;re<$;re++)j[re]=0}function m(j){_(j,0)}function _(j,re){const $=r.newAttributes,U=r.enabledAttributes,se=r.attributeDivisors;$[j]=1,U[j]===0&&(s.enableVertexAttribArray(j),U[j]=1),se[j]!==re&&(s.vertexAttribDivisor(j,re),se[j]=re)}function S(){const j=r.newAttributes,re=r.enabledAttributes;for(let $=0,U=re.length;$<U;$++)re[$]!==j[$]&&(s.disableVertexAttribArray($),re[$]=0)}function A(j,re,$,U,se,oe,Z){Z===!0?s.vertexAttribIPointer(j,re,$,se,oe):s.vertexAttribPointer(j,re,$,U,se,oe)}function T(j,re,$,U){v();const se=U.attributes,oe=$.getAttributes(),Z=re.defaultAttributeValues;for(const ee in oe){const ae=oe[ee];if(ae.location>=0){let pe=se[ee];if(pe===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor)),pe!==void 0){const we=pe.normalized,$e=pe.itemSize,at=e.get(pe);if(at===void 0)continue;const me=at.buffer,He=at.type,it=at.bytesPerElement,Ze=He===s.INT||He===s.UNSIGNED_INT||pe.gpuType===ac;if(pe.isInterleavedBufferAttribute){const We=pe.data,et=We.isInterleavedBuffer===!0?We.stride:We.itemSize,Ot=pe.offset;if(We.isInstancedInterleavedBuffer||We.isInstancedBufferAttribute){for(let st=0;st<ae.locationSize;st++)_(ae.location+st,We.meshPerAttribute);j.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let st=0;st<ae.locationSize;st++)m(ae.location+st);s.bindBuffer(s.ARRAY_BUFFER,me);for(let st=0;st<ae.locationSize;st++)A(ae.location+st,$e/ae.locationSize,He,we,et*it,(Ot+$e/ae.locationSize*st)*it,Ze)}else{if(pe.isInstancedBufferAttribute){for(let We=0;We<ae.locationSize;We++)_(ae.location+We,pe.meshPerAttribute);j.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<ae.locationSize;We++)m(ae.location+We);s.bindBuffer(s.ARRAY_BUFFER,me);for(let We=0;We<ae.locationSize;We++)A(ae.location+We,$e/ae.locationSize,He,we,$e*it,$e/ae.locationSize*We*it,Ze)}}else if(Z!==void 0){const we=Z[ee];if(we!==void 0)switch(we.length){case 2:s.vertexAttrib2fv(ae.location,we);break;case 3:s.vertexAttrib3fv(ae.location,we);break;case 4:s.vertexAttrib4fv(ae.location,we);break;default:s.vertexAttrib1fv(ae.location,we)}}}}S()}function I(){k();for(const j in n){const re=n[j];for(const $ in re){const U=re[$];for(const se in U){const oe=U[se];for(const Z in oe)h(oe[Z].object),delete oe[Z];delete U[se]}}delete n[j]}}function N(j){if(n[j.id]===void 0)return;const re=n[j.id];for(const $ in re){const U=re[$];for(const se in U){const oe=U[se];for(const Z in oe)h(oe[Z].object),delete oe[Z];delete U[se]}}delete n[j.id]}function M(j){for(const re in n){const $=n[re];for(const U in $){const se=$[U];if(se[j.id]===void 0)continue;const oe=se[j.id];for(const Z in oe)h(oe[Z].object),delete oe[Z];delete se[j.id]}}}function w(j){for(const re in n){const $=n[re],U=j.isInstancedMesh===!0?j.id:0,se=$[U];if(se!==void 0){for(const oe in se){const Z=se[oe];for(const ee in Z)h(Z[ee].object),delete Z[ee];delete se[oe]}delete $[U],Object.keys($).length===0&&delete n[re]}}}function k(){H(),o=!0,r!==i&&(r=i,c(r.object))}function H(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:k,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function E_(s,e,t){let n;function i(a){n=a}function r(a,c){s.drawArrays(n,a,c),t.update(c,n,1)}function o(a,c,h){h!==0&&(s.drawArraysInstanced(n,a,c,h),t.update(c,n,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function A_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==ci&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(M){const w=M===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Zn&&M!==ii&&!w&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function a(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:T,maxSamples:I,samples:N}}function R_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ui,l=new Dt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,A=S*4;let T=_.clippingState||null;a.value=T,T=h(p,f,A,u);for(let I=0;I!==A;++I)T[I]=t[I];_.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=a.value,p!==!0||m===null){const _=u+v*4,S=f.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let A=0,T=u;A!==v;++A,T+=4)o.copy(d[A]).applyMatrix4(S,l),o.normal.toArray(m,T),m[T+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}class Cc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Re(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:cs});r.uniforms.tEquirect.value=t;const o=new Nt(i,r),l=t.minFilter;return t.minFilter===yi&&(t.minFilter=Rn),new Kl(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Yh=256,C_=3,P_=20,Af=256,Rf=16,L_=3,D_=new W,N_=new gt;class na{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kl(1,10,null),this._boxMesh=new Nt(new Re(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:l=D_}=r,a=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=a.autoClear,f=a.autoClearColor,u=a.autoClearDepth,p=a.autoClearStencil,v=e.background;a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,v===null&&(e.background=a.getClearColor(N_));const m=new Kl(n,i,h);return m.position.copy(l),m.update(a,e),a.autoClear=d,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Yh,Zu(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Nr?this._setSize(e.image.length===0?Yh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-C_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=I_(),this._integrationMaterial=U_());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Rf);for(let o=0;o<=n;o++){const l=na.lodToRoughness(o,n);if(o>n-L_)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const a=l>0?Math.log2(t)+.5*Math.log2(6/(Af*Math.pow(l,4)))+.5:0;i.roughness.value=l,i.lodBias.value=a,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=O_());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Kh(s,e,t){return new Cc(s,{minFilter:yi,generateMipmaps:e,type:In,colorSpace:Qn,depthBuffer:t})}function $r(s,e,t){return new kn({name:s,uniforms:e,vertexShader:Ft.cube_vert,fragmentShader:t,side:Nn,blending:cs,depthTest:!1,depthWrite:!1})}function I_(){return $r("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function U_(){return $r("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rf}},`

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
	`)}function O_(){return $r("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Zh(){return $r("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jh(){return $r("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function F_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===va||u===Ma)if(e.has(f)){const p=e.get(f).texture;return l(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const v=new Cc(p.height);return v.fromEquirectangularTexture(s,f),e.set(f,v),f.addEventListener("dispose",c),l(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===va||u===Ma,v=u===Hs||u===Nr;if(p||v){let m=t.get(f);const _=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new na(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new na(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function l(f,u){return u===va?f.mapping=Hs:u===Ma&&(f.mapping=Nr),f}function a(f){let u=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function B_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bs("WebGLRenderer: "+n+" extension not supported."),i}}}function z_(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function l(p){a(p.target)}function a(p){p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",l),delete i[p.id],o.unregister(p);const v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",l),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){const v=p.attributes;for(const m in v)e.update(v[m],s.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let _=0;if(m===void 0)return;const S=v!==null?v.array.length:m.array.length/3-1,A=m.count>=65535?tf:ef,T=new A(Math.ceil(S/3)*6,1),I=T.array;if(v!==null){const M=v.array;_=v.version;for(let w=0,k=0;w<S;w+=3){const H=M[w+0],j=M[w+1],re=M[w+2];I[k++]=H,I[k++]=j,I[k++]=j,I[k++]=re,I[k++]=re,I[k++]=H}}else{_=m.version;for(let M=0,w=0;M<S;M+=3){const k=M+0,H=M+1,j=M+2;I[w++]=k,I[w++]=H,I[w++]=H,I[w++]=j,I[w++]=j,I[w++]=k}}T.version=_;const N=r.get(p);N&&e.remove(N),r.set(p,T)}function f(p){const v=r.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in i){const v=i[p].deref();v!==void 0&&a(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function k_(s,e,t){let n;function i(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];t.update(v,n,1)}this.setMode=i,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function G_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:Ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H_(s,e,t){const n=new WeakMap,i=new nn;function r(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let k=function(){M.dispose(),n.delete(l),l.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();const u=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let A=0;u===!0&&(A=1),p===!0&&(A=2),v===!0&&(A=3);let T=l.attributes.position.count*A,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*I*4*d),M=new $u(N,T,I,d);M.type=ii,M.needsUpdate=!0;const w=A*4;for(let H=0;H<d;H++){const j=m[H],re=_[H],$=S[H],U=T*I*4*H;for(let se=0;se<j.count;se++){const oe=se*w;u===!0&&(i.fromBufferAttribute(j,se),N[U+oe+0]=i.x,N[U+oe+1]=i.y,N[U+oe+2]=i.z,N[U+oe+3]=0),p===!0&&(i.fromBufferAttribute(re,se),N[U+oe+4]=i.x,N[U+oe+5]=i.y,N[U+oe+6]=i.z,N[U+oe+7]=0),v===!0&&(i.fromBufferAttribute($,se),N[U+oe+8]=i.x,N[U+oe+9]=i.y,N[U+oe+10]=i.z,N[U+oe+11]=$.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Ne(T,I)},n.set(l,f),l.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const p=l.morphTargetsRelative?1:1-u;a.getUniforms().setValue(s,"morphTargetBaseInfluence",p),a.getUniforms().setValue(s,"morphTargetInfluences",c)}a.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function V_(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function l(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const W_={[tc]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[oa]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function X_(s,e,t,n,i,r){const o=new Un(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,a=null,c=null;const h=new jt;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const d=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Nt(h,d),u=new fa(-1,1,1,-1,0,1);let p=null,v=null,m=!1,_,S=null,A=[],T=!1;this.setSize=function(I,N){o.setSize(I,N),l!==null&&l.setSize(I,N),a!==null&&a.setSize(I,N);for(let M=0;M<A.length;M++){const w=A[M];w.setSize&&w.setSize(I,N)}},this.setEffects=function(I){A=I,T=A.length>0&&A[0].isRenderPass===!0;const N=o.width,M=o.height;A.length>0&&l===null&&(l=new Un(N,M,{type:In,depthBuffer:!1,stencilBuffer:!1}),a=new Un(N,M,{type:In,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&A.some(k=>k.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new fs(N,M),r===!0&&(c.format=Ji,c.type=Vs)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let k=0;k<A.length;k++){const H=A[k];H.setSize&&H.setSize(N,M),w&&H.needsDepthTexture===!0&&H.setDepthTexture&&H.setDepthTexture(c)}},this.begin=function(I,N){if(m||I.toneMapping===ki&&A.length===0)return!1;if(S=N,N!==null){const M=N.width,w=N.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return T===!1&&I.setRenderTarget(o),_=I.toneMapping,I.toneMapping=ki,!0},this.hasRenderPass=function(){return T},this.end=function(I,N){I.toneMapping=_,m=!0;let M=o,w=l;for(let k=0;k<A.length;k++){const H=A[k];H.enabled!==!1&&(H.render(I,w,M,N),H.needsSwap!==!1&&(M=w,w=w===l?a:l))}if(p!==I.outputColorSpace||v!==I.toneMapping){p=I.outputColorSpace,v=I.toneMapping,d.defines={},Ht.getTransfer(p)===Qt&&(d.defines.SRGB_TRANSFER="");const k=W_[v];k&&(d.defines[k]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,I.setRenderTarget(S),I.render(f,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),h.dispose(),d.dispose()}}const Cf=new Sn,Pf=new fs(1,1),Lf=new lf(1),Df=new $u,Nf=new $d,If=new af,$h=[],Qh=[],jh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function er(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$h[i];if(r===void 0&&(r=new Float32Array(i),$h[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function da(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function J_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),wn(t,n)}}function $_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),wn(t,n)}}function Q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(bn(t,n))return;jh.set(n),s.uniformMatrix4fv(this.addr,!1,jh),wn(t,n)}}function j_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function pa(s){return s.version===0&&(s.compareFunction=qu,s.needsUpdate=!0),s}function ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=pa(Pf):r=Cf,t.setTexture2D(e||r,i)}function lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nf,i)}function cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=pa(Lf):r=If,t.setTextureCube(e||r,i)}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Df,i)}function ux(s){switch(s){case 5126:return q_;case 35664:return Y_;case 35665:return K_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return Q_;case 5124:case 35670:return j_;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function fx(s,e){s.uniform1fv(this.addr,e)}function dx(s,e){const t=er(e,this.size,2);s.uniform2fv(this.addr,t)}function px(s,e){const t=er(e,this.size,3);s.uniform3fv(this.addr,t)}function mx(s,e){const t=er(e,this.size,4);s.uniform4fv(this.addr,t)}function gx(s,e){const t=er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _x(s,e){const t=er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xx(s,e){const t=er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vx(s,e){s.uniform1iv(this.addr,e)}function Mx(s,e){s.uniform2iv(this.addr,e)}function yx(s,e){s.uniform3iv(this.addr,e)}function Sx(s,e){s.uniform4iv(this.addr,e)}function bx(s,e){s.uniform1uiv(this.addr,e)}function wx(s,e){s.uniform2uiv(this.addr,e)}function Tx(s,e){s.uniform3uiv(this.addr,e)}function Ex(s,e){s.uniform4uiv(this.addr,e)}function Ax(s,e,t){const n=this.cache,i=e.length,r=da(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=pa(Pf):o=Cf;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||o,r[l])}function Rx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nf,r[o])}function Cx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=pa(Lf):o=If;for(let l=0;l!==i;++l)t.setTextureCube(e[l]||o,r[l])}function Px(s,e,t){const n=this.cache,i=e.length,r=da(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Df,r[o])}function Lx(s){switch(s){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return yx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function Ux(s,e,t){const n=s.name,i=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),o=Qa.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===i){nu(t,c===void 0?new Dx(l,s,e):new Nx(l,s,e));break}else{let d=t.map[l];d===void 0&&(d=new Ix(l),nu(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);Ux(l,a,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function iu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ox=37297;let Fx=0;function Bx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const su=new Dt;function zx(s){Ht._getMatrix(su,Ht.workingColorSpace,s);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(s)){case Ko:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ru(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bx(s.getShaderSource(e),l)}else return r}function kx(s,e){const t=zx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Gx={[tc]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[oa]:"ACESFilmic",[rc]:"AgX",[oc]:"Neutral",[sc]:"Custom"};function Hx(s,e){const t=Gx[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lo=new W;function Vx(){Ht.getLuminanceCoefficients(Lo);const s=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Xx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function br(s){return s!==""}function ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(s){return s.replace(Yx,Kx)}function Kx(s,e){const t=Ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zl(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(s){return s.replace(Zx,Jx)}function Jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const $x={[wr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Qx(s){return $x[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jx={[Nr]:"ENVMAP_MODE_REFRACTION"};function ev(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tv={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function nv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tv[s.combine]||"ENVMAP_BLENDING_NONE"}function iv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=Qx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ev(t),d=nv(t),f=Wx(t),u=Xx(r),p=i.createProgram();let v,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(br).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(br).join(`
`),m.length>0&&(m+=`
`)):(v=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ft.tonemapping_pars_fragment:"",t.toneMapping!==ki?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Zl(o),o=ou(o,t),o=au(o,t),l=Zl(l),l=ou(l,t),l=au(l,t),o=lu(o),l=lu(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=_+v+o,A=_+m+l,T=iu(i,i.VERTEX_SHADER,S),I=iu(i,i.FRAGMENT_SHADER,A);i.attachShader(p,T),i.attachShader(p,I),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function N(H){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(p)||"",re=i.getShaderInfoLog(T)||"",$=i.getShaderInfoLog(I)||"",U=j.trim(),se=re.trim(),oe=$.trim();let Z=!0,ee=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,I);else{const ae=ru(i,T,"vertex"),pe=ru(i,I,"fragment");Ct("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+U+`
`+ae+`
`+pe)}else U!==""?yt("WebGLProgram: Program Info Log:",U):(se===""||oe==="")&&(ee=!1);ee&&(H.diagnostics={runnable:Z,programLog:U,vertexShader:{log:se,prefix:v},fragmentShader:{log:oe,prefix:m}})}i.deleteShader(T),i.deleteShader(I),M=new Vo(i,p),w=qx(i,p)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(p,Ox)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=I,this}let sv=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}}function av(s){return s===us||s===qo||s===Yo}function lv(s,e,t,n,i,r){const o=new Qu,l=new rv,a=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return a.add(M),M===0?"uv":`uv${M}`}function p(M,w,k,H,j,re){const $=H.fog,U=j.geometry,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Z=e.get(M.envMap||se,oe),ee=f[M.type];let ae=n.precision;M.precision!==null&&(ae=n.getMaxPrecision(M.precision),ae!==M.precision&&yt("WebGLProgram.getParameters:",M.precision,"not supported, using",ae,"instead."));const pe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,we=pe!==void 0?pe.length:0;let $e=0;U.morphAttributes.position!==void 0&&($e=1),U.morphAttributes.normal!==void 0&&($e=2),U.morphAttributes.color!==void 0&&($e=3);let at,me,He,it;if(ee){const O=vi[ee];at=O.vertexShader,me=O.fragmentShader}else{at=M.vertexShader,me=M.fragmentShader;const O=l.getVertexShaderStage(M),ie=l.getFragmentShaderStage(M);l.update(M,O,ie),He=O.id,it=ie.id}const Ze=s.getRenderTarget(),We=s.state.buffers.depth.getReversed(),et=j.isInstancedMesh===!0,Ot=j.isBatchedMesh===!0,st=!!M.map,vt=!!M.matcap,Mt=!!Z,Ce=Mt&&Z.isPMREMTexture===!0,Ve=!!M.aoMap,Qe=!!M.lightMap,rt=!!M.bumpMap&&M.wireframe===!1,tt=!!M.normalMap,St=!!M.displacementMap,lt=!!M.emissiveMap,Ie=!!M.metalnessMap,Ue=!!M.roughnessMap,ze=M.anisotropy>0,D=M.clearcoat>0,Je=M.diffuseRoughness>0,qe=M.dispersion>0,Ge=M.retroreflectivity>0,Ae=M.iridescence>0,je=M.sheen>0,Te=M.transmission>0,ce=ze&&!!M.anisotropyMap,L=D&&!!M.clearcoatMap,y=D&&!!M.clearcoatNormalMap,J=D&&!!M.clearcoatRoughnessMap,ye=Je&&!!M.diffuseRoughnessMap,ge=Ae&&!!M.iridescenceMap,Le=Ae&&!!M.iridescenceThicknessMap,Fe=je&&!!M.sheenColorMap,_e=je&&!!M.sheenRoughnessMap,be=!!M.specularMap,Pe=!!M.specularColorMap,q=!!M.specularIntensityMap,Me=Te&&!!M.transmissionMap,ve=Te&&!!M.thicknessMap,ke=!!M.gradientMap,Q=!!M.alphaMap,K=M.alphaTest>0,de=!!M.alphaHash,De=!!M.extensions;let x=ki;M.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(x=s.toneMapping);const V=Ce?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,X={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:at,fragmentShader:me,defines:M.defines,customVertexShaderID:He,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ae,batching:Ot,batchingColor:Ot&&j._colorsTexture!==null,instancing:et,instancingColor:et&&j.instanceColor!==null,instancingMorph:et&&j.morphTexture!==null,outputColorSpace:Ze===null?s.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:vt,envMap:Mt,envMapMode:Mt&&Z.mapping,envMapPMREM:Ce,envMapMaxLod:Ce?V.length-1:null,envMapSize:Ce?V[0].width:null,aoMap:Ve,lightMap:Qe,bumpMap:rt,normalMap:tt,displacementMap:St,emissiveMap:lt,normalMapObjectSpace:tt&&M.normalMapType===vd,normalMapTangentSpace:tt&&M.normalMapType===Fr,packedNormalMap:tt&&M.normalMapType===Fr&&av(M.normalMap.format),metalnessMap:Ie,roughnessMap:Ue,anisotropy:ze,anisotropyMap:ce,clearcoat:D,clearcoatMap:L,clearcoatNormalMap:y,clearcoatRoughnessMap:J,diffuseRoughness:Je,diffuseRoughnessMap:ye,dispersion:qe,retroreflection:Ge,iridescence:Ae,iridescenceMap:ge,iridescenceThicknessMap:Le,sheen:je,sheenColorMap:Fe,sheenRoughnessMap:_e,specularMap:be,specularColorMap:Pe,specularIntensityMap:q,transmission:Te,transmissionMap:Me,thicknessMap:ve,gradientMap:ke,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:K,alphaHash:de,combine:M.combine,mapUv:st&&u(M.map.channel),aoMapUv:Ve&&u(M.aoMap.channel),lightMapUv:Qe&&u(M.lightMap.channel),bumpMapUv:rt&&u(M.bumpMap.channel),normalMapUv:tt&&u(M.normalMap.channel),displacementMapUv:St&&u(M.displacementMap.channel),emissiveMapUv:lt&&u(M.emissiveMap.channel),metalnessMapUv:Ie&&u(M.metalnessMap.channel),roughnessMapUv:Ue&&u(M.roughnessMap.channel),anisotropyMapUv:ce&&u(M.anisotropyMap.channel),clearcoatMapUv:L&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:y&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&u(M.sheenRoughnessMap.channel),specularMapUv:be&&u(M.specularMap.channel),specularColorMapUv:Pe&&u(M.specularColorMap.channel),specularIntensityMapUv:q&&u(M.specularIntensityMap.channel),transmissionMapUv:Me&&u(M.transmissionMap.channel),thicknessMapUv:ve&&u(M.thicknessMap.channel),alphaMapUv:Q&&u(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(tt||ze),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!U.attributes.uv&&(st||Q),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&tt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:$e,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:re.filter(O=>O.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:x,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&Ht.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return X.vertexUv1s=a.has(1),X.vertexUv2s=a.has(2),X.vertexUv3s=a.has(3),a.clear(),X}function v(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)w.push(k),w.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapPMREM),M.push(w.envMapMaxLod),M.push(w.envMapSize),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.diffuseRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.numLightProbeGrids),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function S(M){const w=f[M.type];let k;if(w){const H=vi[w];k=Yr.clone(H.uniforms)}else k=M.uniforms;return k}function A(M,w){let k=h.get(w);return k!==void 0?++k.usedTimes:(k=new iv(s,w,M,i),c.push(k),h.set(w,k)),k}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function I(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:S,acquireProgram:A,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:N}}function cv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function i(o,l,a){s.get(o)[l]=a}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function l(f,u,p,v,m,_){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:_},s[e]=S):(S.id=f.id,S.object=f,S.geometry=u,S.material=p,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=m,S.group=_),e++,S}function a(f,u,p,v,m,_,S){S.reversedDepth===!0&&(m=-m);const A=l(f,u,p,v,m,_);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):t.push(A)}function c(f,u,p,v,m,_){const S=l(f,u,p,v,m,_);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(f,u){t.length>1&&t.sort(f||hv),n.length>1&&n.sort(u||hu),i.length>1&&i.sort(u||hu)}function d(){for(let f=e,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:h}}function uv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new uu,s.set(n,[o])):i>=r.length?(o=new uu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function dv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pv=0;function mv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gv(s){const e=new fv,t=dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,r=new At,o=new At;function l(c){let h=0,d=0,f=0;for(let re=0;re<9;re++)n.probe[re].set(0,0,0);let u=0,p=0,v=0,m=0,_=0,S=0,A=0,T=0,I=0,N=0,M=0,w=0,k=0,H=0;c.sort(mv);for(let re=0,$=c.length;re<$;re++){const U=c[re],se=U.color,oe=U.intensity,Z=U.distance;let ee=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===us?ee=U.shadow.map.texture:ee=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=se.r*oe,d+=se.g*oe,f+=se.b*oe;else if(U.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(U.sh.coefficients[ae],oe);H++}else if(U.isSunLight){const ae=e.get(U);if(ae.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const pe=U.shadow,we=t.get(U);we.shadowIntensity=pe.intensity,we.shadowBias=pe.bias,we.shadowNormalBias=pe.normalBias,we.shadowRadius=pe.radius,we.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),n.sunShadow[p]=we,n.sunShadowMap[p]=ee;const $e=pe.getViewportCount();for(let at=0;at<$e;at++)n.sunShadowMatrix[v+at]=pe.getMatrix(at),n.sunShadowCascade[v+at]=pe._cascadeData[at];v+=$e,p++}n.sun[u]=ae,u++}else if(U.isDirectionalLight){const ae=e.get(U);if(ae.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const pe=U.shadow,we=t.get(U);we.shadowIntensity=pe.intensity,we.shadowBias=pe.bias,we.shadowNormalBias=pe.normalBias,we.shadowRadius=pe.radius,we.shadowMapSize=pe.mapSize,n.directionalShadow[m]=we,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=U.shadow.matrix,I++}n.directional[m]=ae,m++}else if(U.isSpotLight){const ae=e.get(U);ae.position.setFromMatrixPosition(U.matrixWorld),ae.color.copy(se).multiplyScalar(oe),ae.distance=Z,ae.coneCos=Math.cos(U.angle),ae.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ae.decay=U.decay,n.spot[S]=ae;const pe=U.shadow;if(U.map&&(n.spotLightMap[w]=U.map,w++,pe.updateMatrices(U),U.castShadow&&k++),n.spotLightMatrix[S]=pe.matrix,U.castShadow){const we=t.get(U);we.shadowIntensity=pe.intensity,we.shadowBias=pe.bias,we.shadowNormalBias=pe.normalBias,we.shadowRadius=pe.radius,we.shadowMapSize=pe.mapSize,n.spotShadow[S]=we,n.spotShadowMap[S]=ee,M++}S++}else if(U.isRectAreaLight){const ae=e.get(U);ae.color.copy(se).multiplyScalar(oe),ae.halfWidth.set(U.width*.5,0,0),ae.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=ae,A++}else if(U.isPointLight){const ae=e.get(U);if(ae.color.copy(U.color).multiplyScalar(U.intensity),ae.distance=U.distance,ae.decay=U.decay,U.castShadow){const pe=U.shadow,we=t.get(U);we.shadowIntensity=pe.intensity,we.shadowBias=pe.bias,we.shadowNormalBias=pe.normalBias,we.shadowRadius=pe.radius,we.shadowMapSize=pe.mapSize,we.shadowCameraNear=pe.camera.near,we.shadowCameraFar=pe.camera.far,n.pointShadow[_]=we,n.pointShadowMap[_]=ee,n.pointShadowMatrix[_]=U.shadow.matrix,N++}n.point[_]=ae,_++}else if(U.isHemisphereLight){const ae=e.get(U);ae.skyColor.copy(U.color).multiplyScalar(oe),ae.groundColor.copy(U.groundColor).multiplyScalar(oe),n.hemi[T]=ae,T++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const j=n.hash;(j.sunLength!==u||j.directionalLength!==m||j.pointLength!==_||j.spotLength!==S||j.rectAreaLength!==A||j.hemiLength!==T||j.numSunShadows!==p||j.numDirectionalShadows!==I||j.numPointShadows!==N||j.numSpotShadows!==M||j.numSpotMaps!==w||j.numLightProbes!==H)&&(n.sun.length=u,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=T,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=N,n.pointShadowMap.length=N,n.pointShadowMatrix.length=N,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+w-k,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=H,j.sunLength=u,j.directionalLength=m,j.pointLength=_,j.spotLength=S,j.rectAreaLength=A,j.hemiLength=T,j.numSunShadows=p,j.numDirectionalShadows=I,j.numPointShadows=N,j.numSpotShadows=M,j.numSpotMaps=w,j.numLightProbes=H,n.version=pv++)}function a(c,h){let d=0,f=0,u=0,p=0,v=0,m=0;const _=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const T=c[S];if(T.isSunLight){const I=n.sun[d];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(_),d++}else if(T.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(_),f++}else if(T.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const I=n.rectArea[v];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(_),o.identity(),r.copy(T.matrixWorld),r.premultiply(_),o.extractRotation(r),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const I=n.point[u];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(_),u++}else if(T.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(_),m++}}}return{setup:l,setupView:a,state:n}}function fu(s){const e=new gv(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function l(d){n.push(d)}function a(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:l}}function _v(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let l;return o===void 0?(l=new fu(s),e.set(i,[l])):r>=o.length?(l=new fu(s),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const xv=`void main() {
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
}`,Mv=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],yv=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],du=new At,pr=new W,ja=new W;function Sv(s,e,t){let n=new Hr;const i=new Ne,r=new Ne,o=new nn,l=new s0,a=new r0,c={},h=t.maxTextureSize,d={[ji]:Nn,[Nn]:ji,[on]:on},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:xv,fragmentShader:vv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let _=this.type;this.render=function(N,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;this.type===Kf&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);const k=s.getRenderTarget(),H=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),re=s.state;re.setBlending(cs),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const $=_!==this.type;$&&M.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(se=>se.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,se=N.length;U<se;U++){const oe=N[U],Z=oe.shadow;if(Z===void 0){yt("WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const ee=Z.getFrameExtents();i.multiply(ee),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,Z.mapSize.y=r.y));const ae=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ae,Z.map===null||$===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===xr){if(oe.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Un(i.x,i.y,{format:us,type:In,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),Z.map.texture.name=oe.name+".shadowMap",Z.map.depthTexture=new fs(i.x,i.y,ii),Z.map.depthTexture.name=oe.name+".shadowMapDepth",Z.map.depthTexture.format=es,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn}else oe.isPointLight?(Z.map=new Cc(i.x),Z.map.depthTexture=new lf(i.x,ui)):(Z.map=new Un(i.x,i.y),Z.map.depthTexture=new fs(i.x,i.y,ui)),Z.map.depthTexture.name=oe.name+".shadowMap",Z.map.depthTexture.format=es,this.type===wr?(Z.map.depthTexture.compareFunction=ae?Xu:Wu,Z.map.depthTexture.minFilter=Rn,Z.map.depthTexture.magFilter=Rn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);const pe=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();oe.isPointLight!==!0&&Z.updateMatrices(oe,w);const we=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:w.layers;for(let $e=0;$e<pe;$e++){const at=Z.getCamera($e);if(oe.isPointLight){const me=Z.camera,He=Z.matrix,it=oe.distance||me.far;it!==me.far&&(me.far=it,me.updateProjectionMatrix()),pr.setFromMatrixPosition(oe.matrixWorld),me.position.copy(pr),ja.copy(me.position),ja.add(Mv[$e]),me.up.copy(yv[$e]),me.lookAt(ja),me.updateMatrixWorld(),He.makeTranslation(-pr.x,-pr.y,-pr.z),du.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(du,me.coordinateSystem,me.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,$e),s.clear();else{$e===0&&(s.setRenderTarget(Z.map),s.clear());const me=Z.getViewport($e);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),re.viewport(o)}n=Z.getFrustum($e),T(M,w,at,oe,we,this.type)}Z.isPointLightShadow!==!0&&this.type===xr&&S(Z,w),Z.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(k,H,j)};function S(N,M){const w=e.update(v);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,u.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),N.mapPass===null?N.mapPass=new Un(i.x,i.y,{format:us,type:In}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),f.uniforms.shadow_pass.value=N.map.depthTexture,f.uniforms.resolution.value.set(N.map.width,N.map.height),f.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,v,null),u.uniforms.shadow_pass.value=N.mapPass.texture,u.uniforms.resolution.value.set(N.map.width,N.map.height),u.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(M,null,w,u,v,null)}function A(N,M,w,k){let H=null;const j=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(j!==void 0)H=j;else if(H=w.isPointLight===!0?a:l,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const re=H.uuid,$=M.uuid;let U=c[re];U===void 0&&(U={},c[re]=U);let se=U[$];se===void 0&&(se=H.clone(),U[$]=se,M.addEventListener("dispose",I)),H=se}if(H.visible=M.visible,H.wireframe=M.wireframe,k===xr?H.side=M.shadowSide!==null?M.shadowSide:M.side:H.side=M.shadowSide!==null?M.shadowSide:d[M.side],H.alphaMap=M.alphaMap,H.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,H.map=M.map,H.clipShadows=M.clipShadows,H.clippingPlanes=M.clippingPlanes,H.clipIntersection=M.clipIntersection,H.displacementMap=M.displacementMap,H.displacementScale=M.displacementScale,H.displacementBias=M.displacementBias,H.wireframeLinewidth=M.wireframeLinewidth,H.linewidth=M.linewidth,w.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const re=s.properties.get(H);re.light=w}return H}function T(N,M,w,k,H,j){if(N.visible===!1)return;if(N.layers.test(H)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&j===xr)&&(!N.frustumCulled||N.intersectsFrustum(n))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const U=e.update(N),se=N.material;if(Array.isArray(se)){const oe=U.groups;for(let Z=0,ee=oe.length;Z<ee;Z++){const ae=oe[Z],pe=se[ae.materialIndex];if(pe&&pe.visible){const we=A(N,pe,k,j);N.onBeforeShadow(s,N,M,w,U,we,ae),s.renderBufferDirect(w,null,U,we,N,ae),N.onAfterShadow(s,N,M,w,U,we,ae)}}}else if(se.visible){const oe=A(N,se,k,j);N.onBeforeShadow(s,N,M,w,U,oe,null),s.renderBufferDirect(w,null,U,oe,N,null),N.onAfterShadow(s,N,M,w,U,oe,null)}}const $=N.children;for(let U=0,se=$.length;U<se;U++)T($[U],M,w,k,H,j)}function I(N){N.target.removeEventListener("dispose",I);for(const w in c){const k=c[w],H=N.target.uuid;H in k&&(k[H].dispose(),delete k[H])}}}function bv(s,e){function t(){let q=!1;const Me=new nn;let ve=null;const ke=new nn(0,0,0,0);return{setMask:function(Q){ve!==Q&&!q&&(s.colorMask(Q,Q,Q,Q),ve=Q)},setLocked:function(Q){q=Q},setClear:function(Q,K,de,De,x){x===!0&&(Q*=De,K*=De,de*=De),Me.set(Q,K,de,De),ke.equals(Me)===!1&&(s.clearColor(Q,K,de,De),ke.copy(Me))},reset:function(){q=!1,ve=null,ke.set(-1,0,0,0)}}}function n(){let q=!1,Me=!1,ve=null,ke=null,Q=null;return{setReversed:function(K){if(Me!==K){const de=e.get("EXT_clip_control");K?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),Me=K;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(K){K?We(s.DEPTH_TEST):et(s.DEPTH_TEST)},setMask:function(K){ve!==K&&!q&&(s.depthMask(K),ve=K)},setFunc:function(K){if(Me&&(K=Pd[K]),ke!==K){switch(K){case rl:s.depthFunc(s.NEVER);break;case ol:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Dr:s.depthFunc(s.LEQUAL);break;case ll:s.depthFunc(s.EQUAL);break;case cl:s.depthFunc(s.GEQUAL);break;case hl:s.depthFunc(s.GREATER);break;case ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=K}},setLocked:function(K){q=K},setClear:function(K){Q!==K&&(Q=K,Me&&(K=1-K),s.clearDepth(K))},reset:function(){q=!1,ve=null,ke=null,Q=null,Me=!1}}}function i(){let q=!1,Me=null,ve=null,ke=null,Q=null,K=null,de=null,De=null,x=null;return{setTest:function(V){q||(V?We(s.STENCIL_TEST):et(s.STENCIL_TEST))},setMask:function(V){Me!==V&&!q&&(s.stencilMask(V),Me=V)},setFunc:function(V,X,O){(ve!==V||ke!==X||Q!==O)&&(s.stencilFunc(V,X,O),ve=V,ke=X,Q=O)},setOp:function(V,X,O){(K!==V||de!==X||De!==O)&&(s.stencilOp(V,X,O),K=V,de=X,De=O)},setLocked:function(V){q=V},setClear:function(V){x!==V&&(s.clearStencil(V),x=V)},reset:function(){q=!1,Me=null,ve=null,ke=null,Q=null,K=null,de=null,De=null,x=null}}}const r=new t,o=new n,l=new i;let a={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],v=null,m=!1,_=null,S=null,A=null,T=null,I=null,N=null,M=null,w=new gt(0,0,0),k=0,H=!1,j=null,re=null,$=null,U=null,se=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Z=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Z=ee>=2);let pe=null,we={};const $e=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),me=new nn().fromArray($e),He=new nn().fromArray(at);function it(q,Me,ve,ke){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(q,K),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<ve;de++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(Me+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const Ze={};Ze[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),Ze[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ze[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),We(s.DEPTH_TEST),o.setFunc(Dr),rt(!1),tt(Gc),We(s.CULL_FACE),Ve(cs);function We(q){h[q]!==!0&&(s.enable(q),h[q]=!0)}function et(q){h[q]!==!1&&(s.disable(q),h[q]=!1)}function Ot(q,Me){return f[q]!==Me?(s.bindFramebuffer(q,Me),f[q]=Me,q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Me),q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function st(q,Me){let ve=p,ke=!1;if(q){ve=u.get(Me),ve===void 0&&(ve=[],u.set(Me,ve));const Q=q.textures;if(ve.length!==Q.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let K=0,de=Q.length;K<de;K++)ve[K]=s.COLOR_ATTACHMENT0+K;ve.length=Q.length,ke=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,ke=!0);ke&&s.drawBuffers(ve)}function vt(q){return v!==q?(s.useProgram(q),v=q,!0):!1}const Mt={[Is]:s.FUNC_ADD,[Jf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};Mt[Qf]=s.MIN,Mt[jf]=s.MAX;const Ce={[ed]:s.ZERO,[td]:s.ONE,[nd]:s.SRC_COLOR,[Du]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[sd]:s.DST_ALPHA,[id]:s.ONE_MINUS_SRC_COLOR,[Nu]:s.ONE_MINUS_SRC_ALPHA,[ad]:s.ONE_MINUS_DST_COLOR,[rd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[hd]:s.ONE_MINUS_CONSTANT_COLOR,[ud]:s.CONSTANT_ALPHA,[fd]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(q,Me,ve,ke,Q,K,de,De,x,V){if(q===cs){m===!0&&(et(s.BLEND),m=!1);return}if(m===!1&&(We(s.BLEND),m=!0),q!==Zf){if(q!==_||V!==H){if((S!==Is||I!==Is)&&(s.blendEquation(s.FUNC_ADD),S=Is,I=Is),V)switch(q){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oi:s.blendFunc(s.ONE,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",q);break}else switch(q){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hc:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",q);break}A=null,T=null,N=null,M=null,w.set(0,0,0),k=0,_=q,H=V}return}Q=Q||Me,K=K||ve,de=de||ke,(Me!==S||Q!==I)&&(s.blendEquationSeparate(Mt[Me],Mt[Q]),S=Me,I=Q),(ve!==A||ke!==T||K!==N||de!==M)&&(s.blendFuncSeparate(Ce[ve],Ce[ke],Ce[K],Ce[de]),A=ve,T=ke,N=K,M=de),(De.equals(w)===!1||x!==k)&&(s.blendColor(De.r,De.g,De.b,x),w.copy(De),k=x),_=q,H=!1}function Qe(q,Me){q.side===on?et(s.CULL_FACE):We(s.CULL_FACE);let ve=q.side===Nn;Me&&(ve=!ve),rt(ve),q.blending===Fs&&q.transparent===!1?Ve(cs):Ve(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const ke=q.stencilWrite;l.setTest(ke),ke&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),lt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?We(s.SAMPLE_ALPHA_TO_COVERAGE):et(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(q){j!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),j=q)}function tt(q){q!==qf?(We(s.CULL_FACE),q!==re&&(q===Gc?s.cullFace(s.BACK):q===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):et(s.CULL_FACE),re=q}function St(q){q!==$&&(Z&&s.lineWidth(q),$=q)}function lt(q,Me,ve){q?(We(s.POLYGON_OFFSET_FILL),(U!==Me||se!==ve)&&(U=Me,se=ve,o.getReversed()&&(Me=-Me,ve=-ve),s.polygonOffset(Me,ve))):et(s.POLYGON_OFFSET_FILL)}function Ie(q){q?We(s.SCISSOR_TEST):et(s.SCISSOR_TEST)}function Ue(q){q===void 0&&(q=s.TEXTURE0+oe-1),pe!==q&&(s.activeTexture(q),pe=q)}function ze(q,Me,ve){ve===void 0&&(pe===null?ve=s.TEXTURE0+oe-1:ve=pe);let ke=we[ve];ke===void 0&&(ke={type:void 0,texture:void 0},we[ve]=ke),(ke.type!==q||ke.texture!==Me)&&(pe!==ve&&(s.activeTexture(ve),pe=ve),s.bindTexture(q,Me||Ze[q]),ke.type=q,ke.texture=Me)}function D(){const q=we[pe];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Je(){try{s.compressedTexImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function qe(){try{s.compressedTexImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ge(){try{s.texSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function je(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function ce(){try{s.texStorage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function L(){try{s.texStorage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function y(){try{s.texImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function J(){try{s.texImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function ye(q){return d[q]!==void 0?d[q]:s.getParameter(q)}function ge(q,Me){d[q]!==Me&&(s.pixelStorei(q,Me),d[q]=Me)}function Le(q){me.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),me.copy(q))}function Fe(q){He.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),He.copy(q))}function _e(q,Me){let ve=c.get(Me);ve===void 0&&(ve=new WeakMap,c.set(Me,ve));let ke=ve.get(q);ke===void 0&&(ke=s.getUniformBlockIndex(Me,q.name),s.uniformBlockBinding(Me,ke,ke),ve.set(q,ke))}function be(q,Me,ve){const Q=c.get(Me).get(q);a[Q]!==ve&&(s.bindBufferBase(s.UNIFORM_BUFFER,Q,ve),a[Q]=ve)}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},pe=null,we={},f={},a={},u=new WeakMap,p=[],v=null,m=!1,_=null,S=null,A=null,T=null,I=null,N=null,M=null,w=new gt(0,0,0),k=0,H=!1,j=null,re=null,$=null,U=null,se=null,me.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:We,disable:et,bindFramebuffer:Ot,drawBuffers:st,useProgram:vt,setBlending:Ve,setMaterial:Qe,setFlipSided:rt,setCullFace:tt,setLineWidth:St,setPolygonOffset:lt,setScissorTest:Ie,activeTexture:Ue,bindTexture:ze,unbindTexture:D,compressedTexImage2D:Je,compressedTexImage3D:qe,texImage2D:y,texImage3D:J,pixelStorei:ge,getParameter:ye,updateUBOMapping:_e,uniformBlockBinding:be,texStorage2D:ce,texStorage3D:L,texSubImage2D:Ge,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Te,scissor:Le,viewport:Fe,reset:Pe}}function wv(s,e,t,n,i,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,v=new FinalizationRegistry(L=>p.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,y){return m?new OffscreenCanvas(L,y):zr("canvas")}function S(L,y,J){let ye=1;const ge=ce(L);if((ge.width>J||ge.height>J)&&(ye=J/Math.max(ge.width,ge.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Le=Math.floor(ye*ge.width),Fe=Math.floor(ye*ge.height);f===void 0&&(f=_(Le,Fe));const _e=y?_(Le,Fe):f;return _e.width=Le,_e.height=Fe,_e.getContext("2d").drawImage(L,0,0,Le,Fe),yt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Le+"x"+Fe+")."),_e}else return"data"in L&&yt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function A(L){return L.generateMipmaps}function T(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,y,J,ye,ge,Le=!1){if(L!==null){if(s[L]!==void 0)return s[L];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Fe;ye&&(Fe=e.get("EXT_texture_norm16"),Fe||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=y;if(y===s.RED&&(J===s.FLOAT&&(_e=s.R32F),J===s.HALF_FLOAT&&(_e=s.R16F),J===s.UNSIGNED_BYTE&&(_e=s.R8),J===s.UNSIGNED_SHORT&&Fe&&(_e=Fe.R16_EXT),J===s.SHORT&&Fe&&(_e=Fe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(_e=s.R8UI),J===s.UNSIGNED_SHORT&&(_e=s.R16UI),J===s.UNSIGNED_INT&&(_e=s.R32UI),J===s.BYTE&&(_e=s.R8I),J===s.SHORT&&(_e=s.R16I),J===s.INT&&(_e=s.R32I)),y===s.RG&&(J===s.FLOAT&&(_e=s.RG32F),J===s.HALF_FLOAT&&(_e=s.RG16F),J===s.UNSIGNED_BYTE&&(_e=s.RG8),J===s.UNSIGNED_SHORT&&Fe&&(_e=Fe.RG16_EXT),J===s.SHORT&&Fe&&(_e=Fe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(_e=s.RG8UI),J===s.UNSIGNED_SHORT&&(_e=s.RG16UI),J===s.UNSIGNED_INT&&(_e=s.RG32UI),J===s.BYTE&&(_e=s.RG8I),J===s.SHORT&&(_e=s.RG16I),J===s.INT&&(_e=s.RG32I)),y===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),J===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),J===s.UNSIGNED_INT&&(_e=s.RGB32UI),J===s.BYTE&&(_e=s.RGB8I),J===s.SHORT&&(_e=s.RGB16I),J===s.INT&&(_e=s.RGB32I)),y===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),J===s.UNSIGNED_INT&&(_e=s.RGBA32UI),J===s.BYTE&&(_e=s.RGBA8I),J===s.SHORT&&(_e=s.RGBA16I),J===s.INT&&(_e=s.RGBA32I)),y===s.RGB&&(J===s.UNSIGNED_SHORT&&Fe&&(_e=Fe.RGB16_EXT),J===s.SHORT&&Fe&&(_e=Fe.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),y===s.RGBA){const be=Le?Ko:Ht.getTransfer(ge);J===s.FLOAT&&(_e=s.RGBA32F),J===s.HALF_FLOAT&&(_e=s.RGBA16F),J===s.UNSIGNED_BYTE&&(_e=be===Qt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Fe&&(_e=Fe.RGBA16_EXT),J===s.SHORT&&Fe&&(_e=Fe.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function M(L,y){let J;return L?y===null||y===ui||y===Vs?J=s.DEPTH24_STENCIL8:y===ii?J=s.DEPTH32F_STENCIL8:y===Ir&&(J=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===Vs?J=s.DEPTH_COMPONENT24:y===ii?J=s.DEPTH_COMPONENT32F:y===Ir&&(J=s.DEPTH_COMPONENT16),J}function w(L,y){return A(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function k(L){const y=new WeakRef(L);n.get(L).__ref=y,p.add(y),v.register(L,y,y)}function H(L){const y=n.get(L).__ref;y!==void 0&&(p.delete(y),v.unregister(y))}function j(L){$(L.target)}function re(L){U(L.target)}function $(L){L.removeEventListener("dispose",j),H(L),oe(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&d.delete(L)}function U(L){L.removeEventListener("dispose",re),H(L),ee(L)}function se(){for(const L of p){const y=L.deref();y!==void 0&&(y.isRenderTarget===!0?U(y):$(y))}p.clear(),d.clear()}function oe(L){const y=n.get(L);if(y.__webglInit===void 0)return;const J=L.source,ye=u.get(J);if(ye){const ge=ye[y.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Z(L),Object.keys(ye).length===0&&u.delete(J)}n.remove(L)}function Z(L){const y=n.get(L);s.deleteTexture(y.__webglTexture);const J=L.source,ye=u.get(J);delete ye[y.__cacheKey],o.memory.textures--}function ee(L){const y=n.get(L);y.__depthDisposeCallback&&y.__depthDisposeCallback();const J=L.depthTexture;if(J&&J.renderTarget===L&&$(J),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(y.__webglFramebuffer[ge]))for(let Le=0;Le<y.__webglFramebuffer[ge].length;Le++)s.deleteFramebuffer(y.__webglFramebuffer[ge][Le]);else s.deleteFramebuffer(y.__webglFramebuffer[ge]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ge])}else{if(Array.isArray(y.__webglFramebuffer))for(let ge=0;ge<y.__webglFramebuffer.length;ge++)s.deleteFramebuffer(y.__webglFramebuffer[ge]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ge=0;ge<y.__webglColorRenderbuffer.length;ge++)y.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ge]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ye=L.textures;for(let ge=0,Le=ye.length;ge<Le;ge++){const Fe=n.get(ye[ge]);Fe.__webglTexture&&(s.deleteTexture(Fe.__webglTexture),o.memory.textures--),n.remove(ye[ge])}n.remove(L)}let ae=0;function pe(){ae=0}function we(){return ae}function $e(L){ae=L}function at(){const L=ae;return L>=i.maxTextures&&yt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),ae+=1,L}function me(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.mipmapsAutoUpdate),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function He(L,y){const J=n.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ye=L.image;if(ye===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(J,L,y);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+y)}function it(L,y){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Qe(J,L,y);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+y)}function Ze(L,y){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Qe(J,L,y);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+y)}function We(L,y){const J=n.get(L);if(L.version>0&&J.__version!==L.version){rt(J,L,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+y)}const et={[si]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Xo]:s.MIRRORED_REPEAT},Ot={[xn]:s.NEAREST,[Ou]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Fo]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},st={[yd]:s.NEVER,[qu]:s.ALWAYS,[Sd]:s.LESS,[Wu]:s.LEQUAL,[bd]:s.EQUAL,[Xu]:s.GEQUAL,[wd]:s.GREATER,[Td]:s.NOTEQUAL};function vt(L,y){if(y.type===ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Fo||y.magFilter===vr||y.magFilter===yi||y.minFilter===Rn||y.minFilter===Fo||y.minFilter===vr||y.minFilter===yi)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,et[y.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,et[y.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,et[y.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ot[y.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ot[y.minFilter]),y.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,st[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==vr&&y.minFilter!==yi||y.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Mt(L,y){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",j),k(y));const ye=y.source;let ge=u.get(ye);ge===void 0&&(ge={},u.set(ye,ge));const Le=me(y);if(Le!==L.__cacheKey){ge[Le]===void 0&&(ge[Le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ge[Le].usedTimes++;const Fe=ge[L.__cacheKey];Fe!==void 0&&(ge[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&Z(y)),L.__cacheKey=Le,L.__webglTexture=ge[Le].texture}return J}function Ce(L,y,J){return Math.floor(Math.floor(L/J)/y)}function Ve(L,y,J,ye){const Le=L.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,J,ye,y.data);else{Le.sort((q,Me)=>q.start-Me.start);let Fe=0;for(let q=1;q<Le.length;q++){const Me=Le[Fe],ve=Le[q],ke=Me.start+Me.count,Q=Ce(ve.start,y.width,4),K=Ce(Me.start,y.width,4);ve.start<=ke+1&&Q===K&&Ce(ve.start+ve.count-1,y.width,4)===Q?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++Fe,Le[Fe]=ve)}Le.length=Fe+1;const _e=t.getParameter(s.UNPACK_ROW_LENGTH),be=t.getParameter(s.UNPACK_SKIP_PIXELS),Pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let q=0,Me=Le.length;q<Me;q++){const ve=Le[q],ke=Math.floor(ve.start/4),Q=Math.ceil(ve.count/4),K=ke%y.width,de=Math.floor(ke/y.width),De=Q,x=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,de),t.texSubImage2D(s.TEXTURE_2D,0,K,de,De,x,J,ye,y.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,_e),t.pixelStorei(s.UNPACK_SKIP_PIXELS,be),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Qe(L,y,J){let ye=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ye=s.TEXTURE_3D);const ge=Mt(L,y),Le=y.source;t.bindTexture(ye,L.__webglTexture,s.TEXTURE0+J);const Fe=n.get(Le);if(Le.version!==Fe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const x=Ht.getPrimaries(Ht.workingColorSpace),V=y.colorSpace===Fi?null:Ht.getPrimaries(y.colorSpace),X=y.colorSpace===Fi||x===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let be=S(y.image,!1,i.maxTextureSize);be=Te(y,be);const Pe=r.convert(y.format,y.colorSpace),q=r.convert(y.type);let Me=N(y.internalFormat,Pe,q,y.normalized,y.colorSpace,y.isVideoTexture);vt(ye,y);let ve;const ke=y.mipmaps,Q=y.isVideoTexture!==!0,K=Fe.__version===void 0||ge===!0,de=Le.dataReady,De=w(y,be);if(y.isDepthTexture)Me=M(y.format===Ji,y.type),K&&(Q?t.texStorage2D(s.TEXTURE_2D,1,Me,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Me,be.width,be.height,0,Pe,q,null));else if(y.isDataTexture)if(ke.length>0){Q&&K&&t.texStorage2D(s.TEXTURE_2D,De,Me,ke[0].width,ke[0].height);for(let x=0,V=ke.length;x<V;x++)ve=ke[x],Q?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,ve.width,ve.height,Pe,q,ve.data):t.texImage2D(s.TEXTURE_2D,x,Me,ve.width,ve.height,0,Pe,q,ve.data);y.generateMipmaps=!1}else Q?(K&&t.texStorage2D(s.TEXTURE_2D,De,Me,be.width,be.height),de&&Ve(y,be,Pe,q)):t.texImage2D(s.TEXTURE_2D,0,Me,be.width,be.height,0,Pe,q,be.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Q&&K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Me,ke[0].width,ke[0].height,be.depth);for(let x=0,V=ke.length;x<V;x++)if(ve=ke[x],y.format!==ci)if(Pe!==null)if(Q){if(de)if(y.layerUpdates.size>0){const X=qh(ve.width,ve.height,y.format,y.type);for(const O of y.layerUpdates){const ie=ve.data.subarray(O*X/ve.data.BYTES_PER_ELEMENT,(O+1)*X/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,O,ve.width,ve.height,1,Pe,ie)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,ve.width,ve.height,be.depth,Pe,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,x,Me,ve.width,ve.height,be.depth,0,ve.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?de&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,x,0,0,0,ve.width,ve.height,be.depth,Pe,q,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,x,Me,ve.width,ve.height,be.depth,0,Pe,q,ve.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Q&&K&&t.texStorage2D(s.TEXTURE_2D,De,Me,ke[0].width,ke[0].height);for(let x=0,V=ke.length;x<V;x++)ve=ke[x],y.format!==ci?Pe!==null?Q?de&&t.compressedTexSubImage2D(s.TEXTURE_2D,x,0,0,ve.width,ve.height,Pe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,x,Me,ve.width,ve.height,0,ve.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,ve.width,ve.height,Pe,q,ve.data):t.texImage2D(s.TEXTURE_2D,x,Me,ve.width,ve.height,0,Pe,q,ve.data)}else if(y.isDataArrayTexture)if(Q){if(K&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Me,be.width,be.height,be.depth),de)if(y.layerUpdates.size>0){const x=qh(be.width,be.height,y.format,y.type);for(const V of y.layerUpdates){const X=be.data.subarray(V*x/be.data.BYTES_PER_ELEMENT,(V+1)*x/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,V,be.width,be.height,1,Pe,q,X)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Pe,q,be.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,be.width,be.height,be.depth,0,Pe,q,be.data);else if(y.isData3DTexture)Q?(K&&t.texStorage3D(s.TEXTURE_3D,De,Me,be.width,be.height,be.depth),de&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Pe,q,be.data)):t.texImage3D(s.TEXTURE_3D,0,Me,be.width,be.height,be.depth,0,Pe,q,be.data);else if(y.isFramebufferTexture){if(K)if(Q)t.texStorage2D(s.TEXTURE_2D,De,Me,be.width,be.height);else{let x=be.width,V=be.height;for(let X=0;X<De;X++)t.texImage2D(s.TEXTURE_2D,X,Me,x,V,0,Pe,q,null),x>>=1,V>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const x=s.canvas;if(x.hasAttribute("layoutsubtree")||x.setAttribute("layoutsubtree","true"),be.parentNode!==x){x.appendChild(be),d.add(y),x.onpaint=V=>{const X=V.changedElements;for(const O of d)X.includes(O.image)&&(O.needsUpdate=!0)},x.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,be);else{const X=s.RGBA,O=s.RGBA,ie=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,X,O,ie,be)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Q&&K){const x=ce(ke[0]);t.texStorage2D(s.TEXTURE_2D,De,Me,x.width,x.height)}for(let x=0,V=ke.length;x<V;x++)ve=ke[x],Q?de&&t.texSubImage2D(s.TEXTURE_2D,x,0,0,Pe,q,ve):t.texImage2D(s.TEXTURE_2D,x,Me,Pe,q,ve);y.generateMipmaps=!1}else if(Q){if(K){const x=ce(be);t.texStorage2D(s.TEXTURE_2D,De,Me,x.width,x.height)}de&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,q,be)}else t.texImage2D(s.TEXTURE_2D,0,Me,Pe,q,be);A(y)&&y.mipmapsAutoUpdate===!0&&T(ye),Fe.__version=Le.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function rt(L,y,J){if(y.image.length!==6)return;const ye=Mt(L,y),ge=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const Le=n.get(ge);if(ge.version!==Le.__version||ye===!0){t.activeTexture(s.TEXTURE0+J);const Fe=Ht.getPrimaries(Ht.workingColorSpace),_e=y.colorSpace===Fi?null:Ht.getPrimaries(y.colorSpace),be=y.colorSpace===Fi||Fe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,q=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let O=0;O<6;O++)!Pe&&!q?Me[O]=S(y.image[O],!0,i.maxCubemapSize):Me[O]=q?y.image[O].image:y.image[O],Me[O]=Te(y,Me[O]);const ve=Me[0],ke=r.convert(y.format,y.colorSpace),Q=r.convert(y.type);let K=N(y.internalFormat,ke,Q,y.normalized,y.colorSpace);const de=y.isVideoTexture!==!0,De=Le.__version===void 0||ye===!0,x=ge.dataReady;let V=w(y,ve);vt(s.TEXTURE_CUBE_MAP,y);let X;if(y.isDepthTexture){if(K=M(y.format===Ji,y.type),De)if(de)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,K,ve.width,ve.height);else for(let O=0;O<6;O++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,ve.width,ve.height,0,ke,Q,null)}else if(Pe){de&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,V,K,ve.width,ve.height);for(let O=0;O<6;O++){X=Me[O].mipmaps;for(let ie=0;ie<X.length;ie++){const le=X[ie];y.format!==ci?ke!==null?de?x&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,le.width,le.height,ke,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,K,le.width,le.height,0,le.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,le.width,le.height,ke,Q,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,K,le.width,le.height,0,ke,Q,le.data)}}}else{if(X=y.mipmaps,de&&De){X.length>0&&V++;const O=ce(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,V,K,O.width,O.height)}for(let O=0;O<6;O++)if(q){de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Me[O].width,Me[O].height,ke,Q,Me[O].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,Me[O].width,Me[O].height,0,ke,Q,Me[O].data);for(let ie=0;ie<X.length;ie++){const Be=X[ie].image[O].image;de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,Be.width,Be.height,ke,Q,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,K,Be.width,Be.height,0,ke,Q,Be.data)}}else{de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ke,Q,Me[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,K,ke,Q,Me[O]);for(let ie=0;ie<X.length;ie++){const le=X[ie];de?x&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,ke,Q,le.image[O]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,K,ke,Q,le.image[O])}}}A(y)&&y.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),Le.__version=ge.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function tt(L,y,J,ye,ge,Le){const Fe=r.convert(J.format,J.colorSpace),_e=r.convert(J.type),be=N(J.internalFormat,Fe,_e,J.normalized,J.colorSpace),Pe=n.get(y),q=n.get(J);if(q.__renderTarget=y,!Pe.__hasExternalTextures){const Me=Math.max(1,y.width>>Le),ve=Math.max(1,y.height>>Le);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Le,be,Me,ve,y.depth,0,Fe,_e,null):t.texImage2D(ge,Le,be,Me,ve,0,Fe,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ae(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,ge,q.__webglTexture,0,Ge(y)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,ge,q.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,y,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),y.depthBuffer){const ye=y.depthTexture,ge=ye&&ye.isDepthTexture?ye.type:null,Le=M(y.stencilBuffer,ge),Fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(y),Le,y.width,y.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(y),Le,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Le,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,L)}else{const ye=y.textures;for(let ge=0;ge<ye.length;ge++){const Le=ye[ge],Fe=r.convert(Le.format,Le.colorSpace),_e=r.convert(Le.type),be=N(Le.internalFormat,Fe,_e,Le.normalized,Le.colorSpace);Ae(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(y),be,y.width,y.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(y),be,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,be,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(L,y,J){const ye=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(y.depthTexture);ge.__renderTarget=y;const Le=ye?y.depthTexture.image[0]:y.depthTexture.image;(!ge.__webglTexture||Le.width!==y.width||Le.height!==y.height)&&(Le.width=y.width,Le.height=y.height,y.depthTexture.needsUpdate=!0),ye?We(y.depthTexture,0):He(y.depthTexture,0);const Fe=ge.__webglTexture,_e=Ge(y),be=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Pe=y.depthTexture.format===Ji?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===es)Ae(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,be,Fe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,be,Fe,0);else if(y.depthTexture.format===Ji)Ae(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,be,Fe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,be,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(L){const y=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ye){const ge=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ye.removeEventListener("dispose",ge)};ye.addEventListener("dispose",ge),y.__depthDisposeCallback=ge}y.__boundDepthTexture=ye}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let ye=0;ye<6;ye++)lt(y.__webglFramebuffer[ye],L,ye);else L.texture.mipmaps.length>0?lt(y.__webglFramebuffer[0],L,0):lt(y.__webglFramebuffer,L,0);else if(J){y.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ye]),y.__webglDepthbuffer[ye]===void 0)y.__webglDepthbuffer[ye]=s.createRenderbuffer(),St(y.__webglDepthbuffer[ye],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Le)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),St(y.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(L,y,J){const ye=n.get(L);y!==void 0&&tt(ye.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ie(L)}function ze(L){const y=L.texture,J=n.get(L),ye=n.get(y);L.addEventListener("dispose",re),k(L);const ge=L.textures,Le=L.isWebGLCubeRenderTarget===!0,Fe=ge.length>1;if(Fe||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=y.version,o.memory.textures++),Le){J.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps.length>0){J.__webglFramebuffer[_e]=[];for(let be=0;be<y.mipmaps.length;be++)J.__webglFramebuffer[_e][be]=s.createFramebuffer()}else J.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(y.mipmaps.length>0){J.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)J.__webglFramebuffer[_e]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let _e=0,be=ge.length;_e<be;_e++){const Pe=n.get(ge[_e]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Ae(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const be=ge[_e];J.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[_e]);const Pe=r.convert(be.format,be.colorSpace),q=r.convert(be.type),Me=N(be.internalFormat,Pe,q,be.normalized,be.colorSpace,L.isXRRenderTarget===!0),ve=Ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,J.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),St(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),vt(s.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)tt(J.__webglFramebuffer[_e][be],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else tt(J.__webglFramebuffer[_e],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);A(y)?T(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(Fe){for(let _e=0,be=ge.length;_e<be;_e++){const Pe=ge[_e],q=n.get(Pe);let Me=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,q.__webglTexture),vt(Me,Pe),tt(J.__webglFramebuffer,L,Pe,s.COLOR_ATTACHMENT0+_e,Me,0),A(Pe)&&T(Me)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,ye.__webglTexture),vt(_e,y),y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)tt(J.__webglFramebuffer[be],L,y,s.COLOR_ATTACHMENT0,_e,be);else tt(J.__webglFramebuffer,L,y,s.COLOR_ATTACHMENT0,_e,0);A(y)?T(_e):y.mipmaps.length>0&&s.texParameteri(_e,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Ie(L)}function D(L){const y=L.textures;for(let J=0,ye=y.length;J<ye;J++){const ge=y[J];if(A(ge)&&ge.mipmapsAutoUpdate===!0){const Le=I(L),Fe=n.get(ge).__webglTexture;t.bindTexture(Le,Fe),T(Le),t.unbindTexture()}}}const Je=[];function qe(L){if(L.samples>0){if(Ae(L)===!1){const y=L.textures,J=L.width,ye=L.height;let ge=s.COLOR_BUFFER_BIT;const Le=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(L),_e=y.length>1;if(_e)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const q=n.get(y[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,q,0)}s.blitFramebuffer(0,0,J,ye,0,0,J,ye,ge,s.NEAREST),a===!0&&(Je.length=0,Je.push(s.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Je.push(Le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Pe]);const q=n.get(y[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&a){const y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ge(L){return Math.min(i.maxSamples,L.samples)}function Ae(L){const y=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function je(L){const y=o.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())}function Te(L,y){const J=L.colorSpace,ye=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Qn&&J!==Fi&&(Ht.getTransfer(J)===Qt?(ye!==ci||ge!==Zn)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",J)),y}function ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=at,this.resetTextureUnits=pe,this.getTextureUnits=we,this.setTextureUnits=$e,this.setTexture2D=He,this.setTexture2DArray=it,this.setTexture3D=Ze,this.setTextureCube=We,this.rebindTextures=Ue,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ae,this.dispose=se}function Tv(s,e){function t(n,i=Fi){let r;const o=Ht.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===lc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return s.BYTE;if(n===Bu)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===ii)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===Gu)return s.ALPHA;if(n===Hu)return s.RGB;if(n===ci)return s.RGBA;if(n===es)return s.DEPTH_COMPONENT;if(n===Ji)return s.DEPTH_STENCIL;if(n===aa)return s.RED;if(n===hc)return s.RED_INTEGER;if(n===us)return s.RG;if(n===uc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===Bo||n===zo||n===ko||n===Go)if(o===Qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===dl||n===pl||n===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===_l||n===xl||n===vl||n===Ml||n===qo||n===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gl||n===_l)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return r.COMPRESSED_RG11_EAC;if(n===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sl||n===bl||n===wl||n===Tl||n===El||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===Nl||n===Il||n===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Fl||n===Bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===kl||n===Yo||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ev=`
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

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Ev,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends ts{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,d=null,f=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Rv,_={},S=t.getContextAttributes();let A=null,T=null;const I=[],N=[],M=new Ne;let w=null,k=null;const H=new Vn;H.viewport=new nn;const j=new Vn;j.viewport=new nn;const re=[H,j],$=new C0;let U=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let He=I[me];return He===void 0&&(He=new Ra,I[me]=He),He.getTargetRaySpace()},this.getControllerGrip=function(me){let He=I[me];return He===void 0&&(He=new Ra,I[me]=He),He.getGripSpace()},this.getHand=function(me){let He=I[me];return He===void 0&&(He=new Ra,I[me]=He),He.getHandSpace()};function oe(me){const He=N.indexOf(me.inputSource);if(He===-1)return;const it=I[He];it!==void 0&&(it.update(me.inputSource,me.frame,c||o),it.dispatchEvent({type:me.type,data:me.inputSource}))}function Z(){i.removeEventListener("select",oe),i.removeEventListener("selectstart",oe),i.removeEventListener("selectend",oe),i.removeEventListener("squeeze",oe),i.removeEventListener("squeezestart",oe),i.removeEventListener("squeezeend",oe),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ee);for(let me=0;me<I.length;me++){const He=N[me];He!==null&&(N[me]=null,I[me].disconnect(He))}U=null,se=null,m.reset();for(const me in _)delete _[me];if(e.setRenderTarget(A),u=null,f=null,d=null,i=null,T=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),k!==null){const me=k.camera;me.fov=k.fov,me.zoom=k.zoom,me.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){r=me,n.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){l=me,n.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(me){if(i=me,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",oe),i.addEventListener("selectstart",oe),i.addEventListener("selectend",oe),i.addEventListener("squeeze",oe),i.addEventListener("squeezestart",oe),i.addEventListener("squeezeend",oe),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Ze=null,We=null;S.depth&&(We=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,it=S.stencil?Ji:es,Ze=S.stencil?Vs:ui);const et={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(et),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Un(f.textureWidth,f.textureHeight,{format:ci,type:Zn,depthTexture:new fs(f.textureWidth,f.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,it),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Un(u.framebufferWidth,u.framebufferHeight,{format:ci,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(l),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(me){for(let He=0;He<me.removed.length;He++){const it=me.removed[He],Ze=N.indexOf(it);Ze>=0&&(N[Ze]=null,I[Ze].disconnect(it))}for(let He=0;He<me.added.length;He++){const it=me.added[He];let Ze=N.indexOf(it);if(Ze===-1){for(let et=0;et<I.length;et++)if(et>=N.length){N.push(it),Ze=et;break}else if(N[et]===null){N[et]=it,Ze=et;break}if(Ze===-1)break}const We=I[Ze];We&&We.connect(it)}}function ae(me,He){He===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(He.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(i===null)return;let He=me.near,it=me.far;m.texture!==null&&(m.depthNear>0&&(He=m.depthNear),m.depthFar>0&&(it=m.depthFar)),$.near=j.near=H.near=He,$.far=j.far=H.far=it,(U!==$.near||se!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),U=$.near,se=$.far),$.layers.mask=me.layers.mask|6,H.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const Ze=me.parent,We=$.cameras;ae($,Ze);for(let et=0;et<We.length;et++)ae(We[et],Ze);$.projectionMatrix.copy(H.projectionMatrix),$.projectionMatrixInverse.copy(H.projectionMatrixInverse),k===null&&me.isPerspectiveCamera&&(k={camera:me,fov:me.fov,zoom:me.zoom}),pe(me,$,Ze)};function pe(me,He,it){it===null?me.matrix.copy(He.matrixWorld):(me.matrix.copy(it.matrixWorld),me.matrix.invert(),me.matrix.multiply(He.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(He.projectionMatrix),me.projectionMatrixInverse.copy(He.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=Ws*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&u===null))return a},this.setFoveation=function(me){a=me,f!==null&&(f.fixedFoveation=me),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=me)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(me){return _[me]};let we=null;function $e(me,He){if(h=He.getViewerPose(c||o),p=He,h!==null){const it=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let Ze=!1;it.length!==$.cameras.length&&($.cameras.length=0,Ze=!0);for(let st=0;st<it.length;st++){const vt=it[st];let Mt=null;if(u!==null)Mt=u.getViewport(vt);else{const Ve=d.getViewSubImage(f,vt);Mt=Ve.viewport,st===0&&(e.setRenderTargetTextures(T,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(T))}let Ce=re[st];Ce===void 0&&(Ce=new Vn,Ce.layers.enable(st),Ce.viewport=new nn,re[st]=Ce),Ce.matrix.fromArray(vt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(vt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),st===0&&($.matrix.copy(Ce.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ze===!0&&$.cameras.push(Ce)}const We=i.enabledFeatures;if(We&&We.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const st=d.getDepthInformation(it[0]);st&&st.isValid&&st.texture&&m.init(st,i.renderState)}if(We&&We.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let st=0;st<it.length;st++){const vt=it[st].camera;if(vt){let Mt=_[vt];Mt||(Mt=new cf,_[vt]=Mt);const Ce=d.getCameraImage(vt);Mt.sourceTexture=Ce}}}}for(let it=0;it<I.length;it++){const Ze=N[it],We=I[it];Ze!==null&&We!==void 0&&We.update(Ze,He,c||o)}we&&we(me,He),He.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:He}),p=null}const at=new Tf;at.setAnimationLoop($e),this.setAnimationLoop=function(me){we=me},this.dispose=function(){}}}const Pv=new At,Uf=new Dt;Uf.set(-1,0,0,0,1,0,0,0,1);function Lv(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,xf(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,S,A,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),f(m,_),_.isMeshPhysicalMaterial&&u(m,_,T)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),v(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&l(m,_)):_.isPointsMaterial?a(m,_,S,A):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Nn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Nn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const S=e.get(_),A=S.envMap,T=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uf),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function l(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function a(m,_,S,A){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*S,m.scale.value=A*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function f(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function u(m,_,S){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Nn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function v(m,_){const S=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dv(s,e,t,n){let i={},r={};function o(S,A){const T=A.program;n.uniformBlockBinding(S,T,i[S.id])}function l(S,A){let T=i[S.id];T===void 0&&(p(S),T=a(S),i[S.id]=T,S.addEventListener("dispose",m));const I=A.program;n.updateUBOMapping(S,I);const N=e.render.frame;r[S.id]!==N&&(c(S),r[S.id]=N)}function a(S){const A=s.createBuffer(),T=S.__size,I=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,T,I),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(S){const A=i[S.id],T=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let N=0,M=T.length;N<M;N++){const w=T[N];if(Array.isArray(w))for(let k=0,H=w.length;k<H;k++)h(w[k],N,k,I);else h(w,N,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,A,T,I){if(f(S,A,T,I)===!0){const N=S.__offset,M=S.value;if(Array.isArray(M)){let w=0;for(let k=0;k<M.length;k++){const H=M[k],j=v(H,!0);d(H,S.__data,w),w+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,N,S.__data)}}function d(S,A,T){typeof S=="number"||typeof S=="boolean"?A[T]=S:S.isMatrix3?(A[T]=S.elements[0],A[T+1]=S.elements[1],A[T+2]=S.elements[2],A[T+3]=0,A[T+4]=S.elements[3],A[T+5]=S.elements[4],A[T+6]=S.elements[5],A[T+7]=0,A[T+8]=S.elements[6],A[T+9]=S.elements[7],A[T+10]=S.elements[8],A[T+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-T),T):S.toArray(A,T)}function f(S,A,T,I){const N=S.value,M=A+"_"+T;if(Array.isArray(N)){I[M]===void 0&&(I[M]=[]);const w=I[M];let k=!1;for(let H=0;H<N.length;H++)u(N[H],w,H)===!0&&(k=!0);return k}return u(N,I,M)}function u(S,A,T){if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:ArrayBuffer.isView(S)?A[T]=S.slice():A[T]=S.clone(),!0;{const I=A[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return A[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(I.equals(S)===!1)return I.copy(S),!0}}return!1}function p(S){const A=S.uniforms;let T=0;const I=16;for(let M=0,w=A.length;M<w;M++){const k=Array.isArray(A[M])?A[M]:[A[M]];for(let H=0,j=k.length;H<j;H++){const re=k[H],$=Array.isArray(re.value)?re.value:[re.value],U=Array.isArray(A[M])||Array.isArray(re.value);let se=T;for(let Z=0,ee=$.length;Z<ee;Z++){const ae=$[Z],pe=v(ae,U),we=T%I,$e=we%pe.boundary,at=we+$e;T+=$e,at!==0&&I-at<pe.storage&&(T+=I-at),Z===0&&(se=T),T+=pe.storage}const oe=re.type==="int"?Int32Array:re.type==="uint"?Uint32Array:Float32Array;re.__data=new oe((T-se)/Float32Array.BYTES_PER_ELEMENT),re.__offset=se}}const N=T%I;return N>0&&(T+=I-N),S.__size=T,S.__cache={},this}function v(S,A){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(S){const A=S.target;A.removeEventListener("dispose",m),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function _(){for(const S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:l,dispose:_}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function Iv(){return _i===null&&(_i=new ca(Nv,16,16,us,In),_i.name="DFG_LUT",_i.minFilter=Rn,_i.magFilter=Rn,_i.wrapS=zn,_i.wrapT=zn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class Uv{constructor(e={}){const{canvas:t=Rd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Zn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=u,m=new Set([fc,uc,hc]),_=new Set([Zn,ui,Ir,Vs,lc,cc]),S=new Uint32Array(4),A=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let I=null,N=null;const M=[],w=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let j=!1,re=null,$=null,U=null,se=null;this._outputColorSpace=yn;let oe=0,Z=0,ee=null,ae=-1,pe=null;const we=new nn,$e=new nn;let at=null;const me=new gt(0);let He=0,it=t.width,Ze=t.height,We=1,et=null,Ot=null;const st=new nn(0,0,it,Ze),vt=new nn(0,0,it,Ze);let Mt=!1;const Ce=new Hr,Ve=new vc;let Qe=!1,rt=!1;const tt=new At,St=new W,lt=new nn,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ze(){return ee===null?We:1}let D=n;function Je(g,P){return t.getContext(g,P)}let qe,Ge,Ae,je,Te,ce,L,y,J,ye,ge,Le,Fe,_e,be,Pe,q,Me,ve,ke,Q,K,de;try{const g={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",O,!1),D===null){const P="webgl2";if(D=Je(P,g),D===null)throw Je(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(g){throw t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",O,!1),Ct("WebGLRenderer: "+g.message),g}function De(){qe=new B_(D),qe.init(),Q=new Tv(D,qe),Ge=new A_(D,qe,e,Q),Ae=new bv(D,qe),Ge.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),$=D.createFramebuffer(),U=D.createFramebuffer(),se=D.createFramebuffer(),je=new G_(D),Te=new cv,ce=new wv(D,qe,Ae,Te,Ge,Q,je),L=new F_(H),y=new V0(D),K=new T_(D,y),J=new z_(D,y,je,K),ye=new V_(D,J,y,K,je),Me=new H_(D,Ge,ce),be=new R_(Te),ge=new lv(H,L,qe,Ge,K,be),Le=new Lv(H,Te),Fe=new uv,_e=new _v(qe),q=new w_(H,L,Ae,ye,p,a),Pe=new Sv(H,ye,Ge),de=new Dv(D,je,Ge,Ae),ve=new E_(D,qe,je),ke=new k_(D,qe,je),je.programs=ge.programs,H.capabilities=Ge,H.extensions=qe,H.properties=Te,H.renderLists=Fe,H.shadowMap=Pe,H.state=Ae,H.info=je}v!==Zn&&(k=new X_(v,t.width,t.height,l,i,r));const x=new Cv(H,D);this.xr=x,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const g=qe.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=qe.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(g){g!==void 0&&(We=g,this.setSize(it,Ze,!1))},this.getSize=function(g){return g.set(it,Ze)},this.setSize=function(g,P,B=!0){if(x.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=g,Ze=P,t.width=Math.floor(g*We),t.height=Math.floor(P*We),B===!0&&(t.style.width=g+"px",t.style.height=P+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,g,P)},this.getDrawingBufferSize=function(g){return g.set(it*We,Ze*We).floor()},this.setDrawingBufferSize=function(g,P,B){it=g,Ze=P,We=B,t.width=Math.floor(g*B),t.height=Math.floor(P*B),this.setViewport(0,0,g,P)},this.setEffects=function(g){if(v===Zn){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let P=0;P<g.length;P++)if(g[P].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(we)},this.getViewport=function(g){return g.copy(st)},this.setViewport=function(g,P,B,Y){g.isVector4?st.set(g.x,g.y,g.z,g.w):st.set(g,P,B,Y),Ae.viewport(we.copy(st).multiplyScalar(ze()).round())},this.getScissor=function(g){return g.copy(vt)},this.setScissor=function(g,P,B,Y){g.isVector4?vt.set(g.x,g.y,g.z,g.w):vt.set(g,P,B,Y),Ae.scissor($e.copy(vt).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(g){Ae.setScissorTest(Mt=g)},this.setOpaqueSort=function(g){et=g},this.setTransparentSort=function(g){Ot=g},this.getClearColor=function(g){return g.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(g=!0,P=!0,B=!0){let Y=0;if(g){let G=!1;if(ee!==null){const ue=ee.texture.format;G=m.has(ue)}if(G){const ue=ee.texture.type,fe=_.has(ue),Se=q.getClearColor(),Oe=q.getClearAlpha(),Xe=Se.r,ft=Se.g,mt=Se.b;fe?(S[0]=Xe,S[1]=ft,S[2]=mt,S[3]=Oe,D.clearBufferuiv(D.COLOR,0,S)):(A[0]=Xe,A[1]=ft,A[2]=mt,A[3]=Oe,D.clearBufferiv(D.COLOR,0,A))}else Y|=D.COLOR_BUFFER_BIT}P&&(Y|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),re=g},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",O,!1),q.dispose(),Fe.dispose(),_e.dispose(),ce.dispose(),Te.dispose(),L.dispose(),ye.dispose(),J.dispose(),K.dispose(),de.dispose(),ge.dispose(),x.dispose(),x.removeEventListener("sessionstart",Rt),x.removeEventListener("sessionend",xt),Ye.stop()};function V(g){g.preventDefault(),Zo("WebGLRenderer: Context Lost."),j=!0}function X(){Zo("WebGLRenderer: Context Restored."),j=!1;const g=je.autoReset,P=Pe.enabled,B=Pe.autoUpdate,Y=Pe.needsUpdate,G=Pe.type;De(),je.autoReset=g,Pe.enabled=P,Pe.autoUpdate=B,Pe.needsUpdate=Y,Pe.type=G}function O(g){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function ie(g){const P=g.target;P.removeEventListener("dispose",ie),le(P)}function le(g){Be(g),Te.remove(g)}function Be(g){const P=Te.get(g).programs;P!==void 0&&(P.forEach(function(B){ge.releaseProgram(B)}),g.isShaderMaterial&&ge.releaseShaderCache(g))}this.renderBufferDirect=function(g,P,B,Y,G,ue){P===null&&(P=Ie);const fe=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=xe(g,P,B,Y,G);Ae.setMaterial(Y,fe);let Oe=B.index,Xe=1;if(Y.wireframe===!0){if(Oe=J.getWireframeAttribute(B),Oe===void 0)return;Xe=2}const ft=B.drawRange,mt=B.attributes.position;let Ke=ft.start*Xe,Et=(ft.start+ft.count)*Xe;ue!==null&&(Ke=Math.max(Ke,ue.start*Xe),Et=Math.min(Et,(ue.start+ue.count)*Xe)),Oe!==null?(Ke=Math.max(Ke,0),Et=Math.min(Et,Oe.count)):mt!=null&&(Ke=Math.max(Ke,0),Et=Math.min(Et,mt.count));const Vt=Et-Ke;if(Vt<0||Vt===1/0)return;K.setup(G,Y,Se,B,Oe);let wt,bt=ve;if(Oe!==null&&(wt=y.get(Oe),bt=ke,bt.setIndex(wt)),G.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*ze()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(G.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),Ae.setLineWidth(Yt*ze()),G.isLineSegments?bt.setMode(D.LINES):G.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else G.isPoints?bt.setMode(D.POINTS):G.isSprite&&bt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,dt=G._multiDrawCounts,an=G._multiDrawCount,Bt=Oe?y.get(Oe).bytesPerElement:1,Tn=Te.get(Y).currentProgram.getUniforms();for(let gn=0;gn<an;gn++)Tn.setValue(D,"_gl_DrawID",gn),bt.render(Yt[gn]/Bt,dt[gn])}else if(G.isInstancedMesh)bt.renderInstances(Ke,Vt,G.count);else if(B.isInstancedBufferGeometry){const Yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,dt=Math.min(B.instanceCount,Yt);bt.renderInstances(Ke,Vt,dt)}else bt.render(Ke,Vt)};function ct(g,P,B,Y){re!==null&&g.isNodeMaterial&&re.setObject(Y,g),Qe===!0&&be.setState(g,B,!1),g.transparent===!0&&g.side===on&&g.forceSinglePass===!1?(g.side=Nn,g.needsUpdate=!0,C(g,P,Y),g.side=ji,g.needsUpdate=!0,C(g,P,Y),g.side=on):C(g,P,Y)}this.compile=function(g,P,B=null){B===null&&(B=g),re!==null&&re.renderStart(g,P,B),N=_e.get(B),N.init(P),w.push(N),B.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),g!==B&&g.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),N.setupLights(),re!==null&&re.updateLights(N.state.lightsArray),rt=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,rt),Qe===!0&&be.setGlobalState(this.clippingPlanes,P),re!==null&&Pe.render(N.state.shadowsArray,B,P);const Y=new Set;return g.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let fe=0;fe<ue.length;fe++){const Se=ue[fe];ct(Se,B,P,G),Y.add(Se)}else ct(ue,B,P,G),Y.add(ue)}),N=w.pop(),re!==null&&re.renderEnd(),Y},this.compileAsync=function(g,P,B=null){const Y=this.compile(g,P,B);return new Promise(G=>{function ue(){if(Y.forEach(function(fe){const Oe=Te.get(fe).currentProgram;(Oe===void 0||Oe.isReady())&&Y.delete(fe)}),Y.size===0){G(g);return}setTimeout(ue,10)}qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let _t=null;function ot(g){_t&&_t(g)}function Rt(){Ye.stop()}function xt(){Ye.start()}const Ye=new Tf;Ye.setAnimationLoop(ot),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(g){_t=g,x.setAnimationLoop(g),g===null?Ye.stop():Ye.start()},x.addEventListener("sessionstart",Rt),x.addEventListener("sessionend",xt),this.render=function(g,P){if(P!==void 0&&P.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;re!==null&&re.renderStart(g,P);const B=x.enabled===!0&&x.isPresenting===!0,Y=k!==null&&(ee===null||B)&&k.begin(H,ee);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(x.cameraAutoUpdate===!0&&x.updateCamera(P),P=x.getCamera()),g.isScene===!0&&g.onBeforeRender(H,g,P,ee),N=_e.get(g,w.length),N.init(P),N.state.textureUnits=ce.getTextureUnits(),w.push(N),tt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Ve.setFromArrayCamera(P):Ce.setFromProjectionMatrix(tt,hi,P.reversedDepth),rt=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,rt),I=Fe.get(g,M.length),I.init(),M.push(I),this.info.render.frame++,x.enabled===!0&&x.isPresenting===!0){const fe=H.xr.getDepthSensingMesh();fe!==null&&ht(fe,P,-1/0,H.sortObjects)}ht(g,P,0,H.sortObjects),I.finish(),re!==null&&re.updateLights(N.state.lightsArray),H.sortObjects===!0&&I.sort(et,Ot),Ue=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Ue&&q.addToRenderList(I,g),this.info.autoReset===!0&&this.info.reset(),Qe===!0&&be.beginShadows();const G=N.state.shadowsArray;if(Pe.render(G,g,P),Qe===!0&&be.endShadows(),(Y&&k.hasRenderPass())===!1){const fe=I.opaque,Se=I.transmissive;if(N.setupLights(),P.isArrayCamera){const Oe=P.cameras;if(Se.length>0)for(let Xe=0,ft=Oe.length;Xe<ft;Xe++){const mt=Oe[Xe];fn(fe,Se,g,mt)}Ue&&q.render(g);for(let Xe=0,ft=Oe.length;Xe<ft;Xe++){const mt=Oe[Xe];en(I,g,mt,mt.viewport)}}else Se.length>0&&fn(fe,Se,g,P),Ue&&q.render(g),en(I,g,P)}ee!==null&&Z===0&&(ce.updateMultisampleRenderTarget(ee),ce.updateRenderTargetMipmap(ee)),Y&&k.end(H),g.isScene===!0&&g.onAfterRender(H,g,P),K.resetDefaultState(),ae=-1,pe=null,w.pop(),w.length>0?(N=w[w.length-1],ce.setTextureUnits(N.state.textureUnits),Qe===!0&&be.setGlobalState(H.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?I=M[M.length-1]:I=null,re!==null&&re.renderEnd()};function ht(g,P,B,Y){if(g.visible===!1)return;if(g.layers.test(P.layers)){if(g.isGroup)B=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(P);else if(g.isLight)N.pushLight(g),g.castShadow&&N.pushShadow(g);else if(g.isSprite){const fe=P.isArrayCamera?Ve:Ce;if(!g.frustumCulled||g.intersectsFrustum(fe)){Y&&lt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(tt);const Se=ye.update(g),Oe=g.material;Oe.visible&&I.push(g,Se,Oe,B,lt.z,null,P)}}else if(g.isMesh||g.isLine||g.isPoints){const fe=P.isArrayCamera?Ve:Ce;if(!g.frustumCulled||g.intersectsFrustum(fe)){const Se=ye.update(g),Oe=g.material;if(Y&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),lt.copy(g.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),lt.copy(Se.boundingSphere.center)),lt.applyMatrix4(g.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Xe=Se.groups;for(let ft=0,mt=Xe.length;ft<mt;ft++){const Ke=Xe[ft],Et=Oe[Ke.materialIndex];Et&&Et.visible&&I.push(g,Se,Et,B,lt.z,Ke,P)}}else Oe.visible&&I.push(g,Se,Oe,B,lt.z,null,P)}}}const ue=g.children;for(let fe=0,Se=ue.length;fe<Se;fe++)ht(ue[fe],P,B,Y)}function en(g,P,B,Y){const{opaque:G,transmissive:ue,transparent:fe}=g;N.setupLightsView(B),Qe===!0&&be.setGlobalState(H.clippingPlanes,B),Y&&Ae.viewport(we.copy(Y)),G.length>0&&un(G,P,B),ue.length>0&&un(ue,P,B),fe.length>0&&un(fe,P,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function fn(g,P,B,Y){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[Y.id]===void 0){const Ke=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:Ke?In:Zn,minFilter:yi,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const ue=N.state.transmissionRenderTarget[Y.id],fe=Y.viewport||we;ue.setSize(fe.z*H.transmissionResolutionScale,fe.w*H.transmissionResolutionScale);const Se=H.getRenderTarget(),Oe=H.getActiveCubeFace(),Xe=H.getActiveMipmapLevel();H.setRenderTarget(ue),H.getClearColor(me),He=H.getClearAlpha(),He<1&&H.setClearColor(16777215,.5),H.clear(),Ue&&q.render(B);const ft=H.toneMapping;H.toneMapping=ki;const mt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),N.setupLightsView(Y),Qe===!0&&be.setGlobalState(H.clippingPlanes,Y),un(g,B,Y),ce.updateMultisampleRenderTarget(ue),ce.updateRenderTargetMipmap(ue),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Et=0,Vt=P.length;Et<Vt;Et++){const wt=P[Et],{object:bt,geometry:Yt,material:dt,group:an}=wt;if(dt.side===on&&bt.layers.test(Y.layers)){const Bt=dt.side;dt.side=Nn,dt.needsUpdate=!0,E(bt,B,Y,Yt,dt,an),dt.side=Bt,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(ce.updateMultisampleRenderTarget(ue),ce.updateRenderTargetMipmap(ue))}H.setRenderTarget(Se,Oe,Xe),H.setClearColor(me,He),mt!==void 0&&(Y.viewport=mt),H.toneMapping=ft}function un(g,P,B){const Y=P.isScene===!0?P.overrideMaterial:null;for(let G=0,ue=g.length;G<ue;G++){const fe=g[G],{object:Se,geometry:Oe,group:Xe}=fe;let ft=fe.material;ft.allowOverride===!0&&Y!==null&&(ft=Y),Se.layers.test(B.layers)&&E(Se,P,B,Oe,ft,Xe)}}function E(g,P,B,Y,G,ue){re!==null&&G.isNodeMaterial&&re.setObject(g,G),g.onBeforeRender(H,P,B,Y,G,ue),g.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),G.onBeforeRender(H,P,B,Y,g,ue),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=Nn,G.needsUpdate=!0,H.renderBufferDirect(B,P,Y,G,g,ue),G.side=ji,G.needsUpdate=!0,H.renderBufferDirect(B,P,Y,G,g,ue),G.side=on):H.renderBufferDirect(B,P,Y,G,g,ue),g.onAfterRender(H,P,B,Y,G,ue)}function b(g){let P=0;for(const B of g)B.texture!==null&&P++;return P}function C(g,P,B){P.isScene!==!0&&(P=Ie);const Y=Te.get(g),G=N.state.lights,ue=N.state.shadowsArray,fe=G.state.version,Se=ge.getParameters(g,G.state,ue,P,B,N.state.lightProbeGridArray),Oe=ge.getProgramCacheKey(Se);let Xe=Y.programs;Y.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Y.fog=P.fog;const ft=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;Y.envMap=L.get(g.envMap||Y.environment,ft),Y.envMapRotation=Y.environment!==null&&g.envMap===null?P.environmentRotation:g.envMapRotation,Xe===void 0&&(g.addEventListener("dispose",ie),Xe=new Map,Y.programs=Xe,Y.programVariants=new Map);let mt=Xe.get(Oe);if(mt!==void 0){if(Y.currentProgram===mt&&Y.lightsStateVersion===fe)return he(g,Se),mt}else Se.uniforms=ge.getUniforms(g),re!==null&&g.isNodeMaterial&&re.build(g,B,Se),g.onBeforeCompile(Se,H),mt=ge.acquireProgram(Se,Oe),Xe.set(Oe,mt),Y.uniforms=Se.uniforms;const Ke=Y.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Ke.clippingPlanes=be.uniform),he(g,Se),Y.needsLights=R(g),Y.lightsStateVersion=fe,Y.needsLights&&(Ke.ambientLightColor.value=G.state.ambient,Ke.lightProbe.value=G.state.probe,Ke.sunLights.value=G.state.sun,Ke.sunLightShadows.value=G.state.sunShadow,Ke.directionalLights.value=G.state.directional,Ke.directionalLightShadows.value=G.state.directionalShadow,Ke.spotLights.value=G.state.spot,Ke.spotLightShadows.value=G.state.spotShadow,Ke.rectAreaLights.value=G.state.rectArea,Ke.ltc_1.value=G.state.rectAreaLTC1,Ke.ltc_2.value=G.state.rectAreaLTC2,Ke.pointLights.value=G.state.point,Ke.pointLightShadows.value=G.state.pointShadow,Ke.hemisphereLights.value=G.state.hemi,Ke.sunShadowMatrix.value=G.state.sunShadowMatrix,Ke.sunShadowCascade.value=G.state.sunShadowCascade,Ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ke.spotLightMatrix.value=G.state.spotLightMatrix,Ke.spotLightMap.value=G.state.spotLightMap,Ke.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.numLightProbeGrids=b(N.state.lightProbeGridArray),Y.currentProgram=mt,Y.uniformsList=null,mt}function F(g,P,B,Y,G){const ue=Te.get(g),fe=ue.currentProgram.id+","+Y+","+G;let Se=ue.programVariants.get(fe);return Se===void 0?(Se=C(g,P,B),ue.programVariants.set(fe,Se)):(ue.currentProgram=Se,ue.uniformsList=null,ue.outputColorSpace=Y,ue.toneMapping=G),Se}function te(g){if(g.uniformsList===null){const P=g.currentProgram.getUniforms();g.uniformsList=Vo.seqWithValue(P.seq,g.uniforms)}return g.uniformsList}function he(g,P){const B=Te.get(g);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function xe(g,P,B,Y,G){P.isScene!==!0&&(P=Ie),ce.resetTextureUnits();const ue=P.fog,fe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?P.environment:null,Se=ee===null?H.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ht.workingColorSpace,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xe=L.get(Y.envMap||fe,Oe),ft=Y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,mt=!!B.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!B.morphAttributes.position,Et=!!B.morphAttributes.normal,Vt=!!B.morphAttributes.color;let wt=ki;Y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(wt=H.toneMapping);const bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=bt!==void 0?bt.length:0,dt=Te.get(Y),an=N.state.lights;if(Qe===!0&&(rt===!0||g!==pe)){const It=g===pe&&Y.id===ae;be.setState(Y,g,It)}let Bt=!1,Tn=!1;Y.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==an.state.version||G.isBatchedMesh&&dt.batching===!1||!G.isBatchedMesh&&dt.batching===!0||G.isBatchedMesh&&dt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&dt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&dt.instancing===!1||!G.isInstancedMesh&&dt.instancing===!0||G.isSkinnedMesh&&dt.skinning===!1||!G.isSkinnedMesh&&dt.skinning===!0||G.isInstancedMesh&&dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&dt.instancingMorph===!1&&G.morphTexture!==null||dt.envMap!==Xe||Y.fog===!0&&dt.fog!==ue||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==be.numPlanes||dt.numIntersection!==be.numIntersection)||dt.vertexAlphas!==ft||dt.vertexTangents!==mt||dt.morphTargets!==Ke||dt.morphNormals!==Et||dt.morphColors!==Vt||dt.morphTargetsCount!==Yt||dt.numLightProbeGrids!==b(N.state.lightProbeGridArray)?Bt=!0:(dt.outputColorSpace!==Se||dt.toneMapping!==wt)&&(Tn=!0):(Bt=!0,dt.__version=Y.version);let gn=dt.currentProgram;(Bt===!0||Tn===!0)&&(gn=Tn===!0?F(Y,P,G,Se,wt):C(Y,P,G),re&&Y.isNodeMaterial&&re.onUpdateProgram(Y,gn,dt));let mi=!1,Gn=!1,Xn=!1;const zt=gn.getUniforms(),Pt=dt.uniforms;if(Ae.useProgram(gn.program)&&(mi=!0,Gn=!0,Xn=!0),Y.id!==ae&&(ae=Y.id,Gn=!0),mi||pe!==g){Ae.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),zt.setValue(D,"projectionMatrix",g.projectionMatrix),zt.setValue(D,"viewMatrix",g.matrixWorldInverse);const Wt=zt.map.cameraPosition;Wt!==void 0&&Wt.setValue(D,St.setFromMatrixPosition(g.matrixWorld)),Ge.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&zt.setValue(D,"isOrthographic",g.isOrthographicCamera===!0),pe!==g&&(pe=g,Gn=!0,Xn=!0)}if(dt.needsLights&&(an.state.sunShadowMap.length>0&&zt.setValue(D,"sunShadowMap",an.state.sunShadowMap,ce),an.state.directionalShadowMap.length>0&&zt.setValue(D,"directionalShadowMap",an.state.directionalShadowMap,ce),an.state.spotShadowMap.length>0&&zt.setValue(D,"spotShadowMap",an.state.spotShadowMap,ce),an.state.pointShadowMap.length>0&&zt.setValue(D,"pointShadowMap",an.state.pointShadowMap,ce)),G.isSkinnedMesh){zt.setOptional(D,G,"bindMatrix"),zt.setOptional(D,G,"bindMatrixInverse");const It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),zt.setValue(D,"boneTexture",It.boneTexture,ce))}G.isBatchedMesh&&(zt.setOptional(D,G,"batchingTexture"),zt.setValue(D,"batchingTexture",G._matricesTexture,ce),zt.setOptional(D,G,"batchingIdTexture"),zt.setValue(D,"batchingIdTexture",G._indirectTexture,ce),zt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",G._colorsTexture,ce));const Kt=B.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Me.update(G,B,gn),(Gn||dt.receiveShadow!==G.receiveShadow)&&(dt.receiveShadow=G.receiveShadow,zt.setValue(D,"receiveShadow",G.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Iv()),Gn){if(zt.setValue(D,"toneMappingExposure",H.toneMappingExposure),dt.needsLights&&z(Pt,Xn),ue&&Y.fog===!0&&Le.refreshFogUniforms(Pt,ue),Le.refreshMaterialUniforms(Pt,Y,We,Ze,N.state.transmissionRenderTarget[g.id]),dt.needsLights&&dt.numLightProbeGrids>0){const It=T;let Wt=0;for(const Jt of N.state.lightProbeGridArray)Jt.texture!==null&&(It.textures[Wt]=Jt.texture,It.min[Wt]=Jt.boundingBox.min,It.max[Wt]=Jt.boundingBox.max,It.resolution[Wt]=Jt.resolution,Wt++);for(const Jt in It)It[Jt].length=Wt;Pt.probesSH.value=It.textures,Pt.probesMin.value=It.min,Pt.probesMax.value=It.max,Pt.probesResolution.value=It.resolution}Vo.upload(D,te(dt),Pt,ce)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vo.upload(D,te(dt),Pt,ce),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&zt.setValue(D,"center",G.center),zt.setValue(D,"modelViewMatrix",G.modelViewMatrix),zt.setValue(D,"normalMatrix",G.normalMatrix),zt.setValue(D,"modelMatrix",G.matrixWorld),Y.uniformsGroups!==void 0){const It=Y.uniformsGroups;for(let Wt=0,Jt=It.length;Wt<Jt;Wt++){const ln=It[Wt];de.update(ln,gn),de.bind(ln,gn)}}return gn}function z(g,P){g.ambientLightColor.needsUpdate=P,g.lightProbe.needsUpdate=P,g.sunLights.needsUpdate=P,g.sunLightShadows.needsUpdate=P,g.directionalLights.needsUpdate=P,g.directionalLightShadows.needsUpdate=P,g.pointLights.needsUpdate=P,g.pointLightShadows.needsUpdate=P,g.spotLights.needsUpdate=P,g.spotLightShadows.needsUpdate=P,g.rectAreaLights.needsUpdate=P,g.hemisphereLights.needsUpdate=P}function R(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(g,P,B){const Y=Te.get(g);Y.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Te.get(g.texture).__webglTexture=P,Te.get(g.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:B,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,P){const B=Te.get(g);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(g,P=0,B=0){ee=g,oe=P,Z=B;let Y=null,G=!1,ue=!1;if(g){const Se=Te.get(g);if(Se.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(D.FRAMEBUFFER,Se.__webglFramebuffer),we.copy(g.viewport),$e.copy(g.scissor),at=g.scissorTest,Ae.viewport(we),Ae.scissor($e),Ae.setScissorTest(at),ae=-1;return}else if(Se.__webglFramebuffer===void 0)ce.setupRenderTarget(g);else if(Se.__hasExternalTextures)ce.rebindTextures(g,Te.get(g.texture).__webglTexture,Te.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const ft=g.depthTexture;if(Se.__boundDepthTexture!==ft){if(ft!==null&&Te.has(ft)&&(g.width!==ft.image.width||g.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(g)}}const Oe=g.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ue=!0);const Xe=Te.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Xe[P])?Y=Xe[P][B]:Y=Xe[P],G=!0):g.samples>0&&ce.useMultisampledRTT(g)===!1?Y=Te.get(g).__webglMultisampledFramebuffer:Array.isArray(Xe)?Y=Xe[B]:Y=Xe,we.copy(g.viewport),$e.copy(g.scissor),at=g.scissorTest}else we.copy(st).multiplyScalar(We).floor(),$e.copy(vt).multiplyScalar(We).floor(),at=Mt;if(B!==0&&(Y=$),Ae.bindFramebuffer(D.FRAMEBUFFER,Y)&&Ae.drawBuffers(g,Y),Ae.viewport(we),Ae.scissor($e),Ae.setScissorTest(at),G){const Se=Te.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,Se.__webglTexture,B)}else if(ue){const Se=P;for(let Oe=0;Oe<g.textures.length;Oe++){const Xe=Te.get(g.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Xe.__webglTexture,B,Se)}}else if(g!==null&&B!==0){const Se=Te.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,B)}ae=-1};function ne(g){const P=Te.get(g);return(P.__readFormat!==g.format||P.__readType!==g.type)&&(P.__readFormat=g.format,P.__readType=g.type,P.__formatReadable=Ge.textureFormatReadable(g.format),P.__typeReadable=Ge.textureTypeReadable(g.type)),P}this.readRenderTargetPixels=function(g,P,B,Y,G,ue,fe,Se=0){if(!(g&&g.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Te.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&fe!==void 0&&(Oe=Oe[fe],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Ae.bindFramebuffer(D.FRAMEBUFFER,Oe);try{const Xe=g.textures[Se],ft=Xe.format,mt=Xe.type;g.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);const Ke=ne(Xe);if(Ke.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=g.width-Y&&B>=0&&B<=g.height-G&&D.readPixels(P,B,Y,G,Q.convert(ft),Q.convert(mt),ue)}finally{const Xe=ee!==null?Te.get(ee).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(g,P,B,Y,G,ue,fe,Se=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Te.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&fe!==void 0&&(Oe=Oe[fe],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(P>=0&&P<=g.width-Y&&B>=0&&B<=g.height-G){Ae.bindFramebuffer(D.FRAMEBUFFER,Oe);const Xe=g.textures[Se],ft=Xe.format,mt=Xe.type;g.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);const Ke=ne(Xe);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(P,B,Y,G,Q.convert(ft),Q.convert(mt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Vt=ee!==null?Te.get(ee).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Vt);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cd(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Et),D.deleteSync(wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,P=null,B=0){const Y=Math.pow(2,-B),G=Math.floor(g.image.width*Y),ue=Math.floor(g.image.height*Y),fe=P!==null?P.x:0,Se=P!==null?P.y:0;ce.setTexture2D(g,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,fe,Se,G,ue),Ae.unbindTexture()},this.copyTextureToTexture=function(g,P,B=null,Y=null,G=0,ue=0){let fe,Se,Oe,Xe,ft,mt,Ke,Et,Vt;const wt=g.isCompressedTexture?g.mipmaps[ue]:g.image;if(B!==null)fe=B.max.x-B.min.x,Se=B.max.y-B.min.y,Oe=B.isBox3?B.max.z-B.min.z:1,Xe=B.min.x,ft=B.min.y,mt=B.isBox3?B.min.z:0;else{const zt=Math.pow(2,-G);fe=Math.floor(wt.width*zt),Se=Math.floor(wt.height*zt),g.isDataArrayTexture?Oe=wt.depth:g.isData3DTexture?Oe=Math.floor(wt.depth*zt):Oe=1,Xe=0,ft=0,mt=0}Y!==null?(Ke=Y.x,Et=Y.y,Vt=Y.z):(Ke=0,Et=0,Vt=0);const bt=Q.convert(P.format),Yt=Q.convert(P.type);let dt;P.isData3DTexture?(ce.setTexture3D(P,0),dt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(ce.setTexture2DArray(P,0),dt=D.TEXTURE_2D_ARRAY):(ce.setTexture2D(P,0),dt=D.TEXTURE_2D),Ae.activeTexture(D.TEXTURE0),Ae.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),Ae.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Ae.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const an=Ae.getParameter(D.UNPACK_ROW_LENGTH),Bt=Ae.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=Ae.getParameter(D.UNPACK_SKIP_PIXELS),gn=Ae.getParameter(D.UNPACK_SKIP_ROWS),mi=Ae.getParameter(D.UNPACK_SKIP_IMAGES);Ae.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),Ae.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),Ae.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),Ae.pixelStorei(D.UNPACK_SKIP_ROWS,ft),Ae.pixelStorei(D.UNPACK_SKIP_IMAGES,mt);const Gn=g.isDataArrayTexture||g.isData3DTexture,Xn=P.isDataArrayTexture||P.isData3DTexture;if(g.isDepthTexture){const zt=Te.get(g),Pt=Te.get(P),Kt=Te.get(zt.__renderTarget),It=Te.get(Pt.__renderTarget);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Wt=0;Wt<Oe;Wt++)Gn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(g).__webglTexture,G,mt+Wt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(P).__webglTexture,ue,Vt+Wt)),D.blitFramebuffer(Xe,ft,Xe+fe,ft+Se,Ke,Et,Ke+fe,Et+Se,D.DEPTH_BUFFER_BIT,D.NEAREST);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||g.isRenderTargetTexture||Te.has(g)){const zt=Te.get(g),Pt=Te.get(P);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,U),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,se);for(let Kt=0;Kt<Oe;Kt++)Gn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,G,mt+Kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,G),Xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,ue,Vt+Kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,ue),G!==0?D.blitFramebuffer(Xe,ft,Xe+fe,ft+Se,Ke,Et,Ke+fe,Et+Se,D.COLOR_BUFFER_BIT,D.NEAREST):Xn?D.copyTexSubImage3D(dt,ue,Ke,Et,Vt+Kt,Xe,ft,fe,Se):D.copyTexSubImage2D(dt,ue,Ke,Et,Xe,ft,fe,Se);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xn?g.isDataTexture||g.isData3DTexture?D.texSubImage3D(dt,ue,Ke,Et,Vt,fe,Se,Oe,bt,Yt,wt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,ue,Ke,Et,Vt,fe,Se,Oe,bt,wt.data):D.texSubImage3D(dt,ue,Ke,Et,Vt,fe,Se,Oe,bt,Yt,wt):g.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Ke,Et,fe,Se,bt,Yt,wt.data):g.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Ke,Et,wt.width,wt.height,bt,wt.data):D.texSubImage2D(D.TEXTURE_2D,ue,Ke,Et,fe,Se,bt,Yt,wt);Ae.pixelStorei(D.UNPACK_ROW_LENGTH,an),Ae.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt),Ae.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),Ae.pixelStorei(D.UNPACK_SKIP_ROWS,gn),Ae.pixelStorei(D.UNPACK_SKIP_IMAGES,mi),ue===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(dt),Ae.unbindTexture()},this.initRenderTarget=function(g){Te.get(g).__webglFramebuffer===void 0&&ce.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?ce.setTextureCube(g,0):g.isData3DTexture?ce.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?ce.setTexture2DArray(g,0):ce.setTexture2D(g,0),Ae.unbindTexture()},this.resetState=function(){oe=0,Z=0,ee=null,Ae.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}const pu={type:"change"},Pc={type:"start"},Of={type:"end"},Do=new Jr,mu=new Ui,Ov=Math.cos(70*Ju.DEG2RAD),vn=new W,Hn=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},el=1e-6;class Fv extends G0{constructor(e,t=null){super(e,t),this.state=$t.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Wn,this._lastTargetPosition=new W,this._quat=new Wn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xh,this._sphericalDelta=new Xh,this._scale=1,this._panOffset=new W,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new W,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zv.bind(this),this._onPointerDown=Bv.bind(this),this._onPointerUp=kv.bind(this),this._onContextMenu=Yv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Wv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=qv.bind(this),this._onMouseDown=Gv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=Kv.bind(this),this._interceptControlUp=Zv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pu),this.update(),this.state=$t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;vn.copy(t).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Hn:n>Math.PI&&(n-=Hn),i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),t.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=vn.length();o=this._clampDistance(l*this._scale);const a=l-o;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),r=!!a}else if(this.object.isOrthographicCamera){const l=new W(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=a!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<Ov?this.object.lookAt(this.target):(mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(mu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>el||8*(1-this._lastQuaternion.dot(this.object.quaternion))>el||this._lastTargetPosition.distanceToSquared(this.target)>el?(this.dispatchEvent(pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vn.setFromMatrixColumn(t,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,t){this.screenSpacePanning===!0?vn.setFromMatrixColumn(t,1):(vn.setFromMatrixColumn(t,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;vn.copy(i).sub(this.target);let r=vn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=$t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=$t.DOLLY;break;case Os.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=$t.ROTATE}break;case Os.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Pc)}function Hv(s){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Vv(s){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(s.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Of))}function Wv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Xv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1){this.state=$t.NONE;break}this._handleTouchStartRotate(s),this.state=$t.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1){this.state=$t.NONE;break}this._handleTouchStartPan(s),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=$t.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Pc)}function qv(s){switch(this._trackPointer(s),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=$t.NONE}}function Yv(s){this.enabled!==!1&&s.preventDefault()}function Kv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jv=new fa(-1,1,1,-1,0,1);class $v extends jt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}}const Qv=new $v;class Lc{constructor(e){this._mesh=new Nt(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jl extends tr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yr.clone(e.uniforms),this.material=new kn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gu extends tr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class jv extends tr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class e1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jl(Wo),this.copyPass.material.blending=cs,this.timer=new P0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}gu!==void 0&&(o instanceof gu?n=!0:o instanceof jv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t1 extends tr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yr.clone(No.uniforms),this.material=new vf({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new Lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class n1 extends tr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const i1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ks extends tr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:In,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Un(r,o,{type:In,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Un(r,o,{type:In,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const l=i1;this.highPassUniforms=Yr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yr.clone(Wo.uniforms),this.blendMaterial=new kn({uniforms:this.copyUniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,premultipliedAlpha:!0,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new Lc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=Ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<e;o+=2){const l=t[o],a=o+1<e?t[o+1]:0,c=l+a;i.push((o*l+(o+1)*a)/c),r.push(c)}return new kn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new kn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ks.BlurDirectionX=new Ne(1,0);Ks.BlurDirectionY=new Ne(0,1);function Dc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},l=s[0].morphTargetsRelative,a=new jt;a.morphTargetsRelative=l;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}a.setIndex(d)}for(const h in r){const d=_u(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][f]);const p=_u(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(p)}}}return a}function _u(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),l=new An(o,t,n);let a=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=a/t;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<t;p++){const v=h.getComponent(f,p);l.setComponent(f+d,p,v)}}else o.set(h.array,a);a+=h.count*t}return i!==void 0&&(l.gpuType=i),l}function xu(s,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Hl||e===Vu){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Hl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const{cos:ps,sin:Si,atan2:Nc,hypot:Lr,PI:as}=Math,Lt=.22,Qi=(s,e,t)=>{const n=s.ry;return[s.x+e*ps(n)+t*Si(n),s.z-e*Si(n)+t*ps(n)]},ia=(s,e,t)=>{const n=s.ry,i=e-s.x,r=t-s.z;return[i*ps(n)-r*Si(n),i*Si(n)+r*ps(n)]},Ii=(s,e,t,n)=>Nc(t-s,n-e),s1={S:[0,1],N:[0,-1],E:[1,0],W:[-1,0]};function mr(s){const{side:e,off:t}=s.door,n=s1[e],i=e==="S"?[t,s.d/2]:e==="N"?[t,-s.d/2]:e==="E"?[s.w/2,t]:[-s.w/2,t],r=[i[0]-n[0]*1.1,i[1]-n[1]*1.1],o=[i[0]+n[0]*1.5,i[1]+n[1]*1.5];return{...s,doorLocal:i,doorN:n,inLocal:r,outLocal:o,inW:Qi(s,...r),outW:Qi(s,...o),hubW:Qi(s,...s.hub)}}function Io(s){return{...s,hubW:Qi(s,...s.hub),entriesW:s.entries.map(e=>Qi(s,...e))}}const Zs=[mr({id:"war",name:"War hall",kind:"house",x:-6,z:-22,ry:.06,w:15,d:9,wallH:3,door:{side:"S",off:0,width:2.4},hub:[0,2.7],floor:"war",desc:"Where the Lead/PM plans the run and keeps the task board."}),mr({id:"library",name:"Library",kind:"house",x:24,z:-21,ry:-.32,w:10,d:8,wallH:2.8,door:{side:"S",off:-2.2,width:1.6},hub:[-1.2,1],floor:"dark",storeys:2,upperH:2.5,desc:"Where the Reviewer checks the work. The archive is upstairs."}),mr({id:"studio",name:"Design studio",kind:"house",x:30,z:2,ry:-1.37,w:9,d:7,wallH:2.7,door:{side:"S",off:0,width:1.6},hub:[0,1.6],floor:"light",deck:[-4.2,4.2,3.5,7.6],desc:"Where the Designer lays out pages. Paints on the terrace when free."}),mr({id:"workshop",name:"Workshop",kind:"house",x:-27,z:-4,ry:.28,w:12,d:8,wallH:2.8,door:{side:"E",off:1,width:1.8},hub:[-.5,1.8],floor:"tiles",desc:"Where the Frontend dev and the Backend dev write code."}),Io({id:"forge",name:"The Forge",kind:"open",x:0,z:0,ry:0,r:7.6,hub:[-5,5],entries:[[-7.3,7.3]],desc:"The furnace burns hotter the more agents are working."}),mr({id:"tavern",name:"Tavern",kind:"house",x:20.5,z:18.6,ry:-.2,w:11,d:8,wallH:2.8,door:{side:"W",off:1.5,width:1.8},hub:[-3.6,2.6],floor:"planks",storeys:2,upperH:2.5,desc:"Where agents with no task have a drink. Rooms to sleep in upstairs."}),Io({id:"yard",name:"Training yard",kind:"arena",x:-24,z:17,ry:0,r:7.5,gate:-.526,hub:[.5,-1.4],entries:[[4.85,-2.81],[7.71,-4.47]],desc:"Sparring and target practice between tasks."}),Io({id:"court",name:"Courtyard",kind:"open",x:2,z:24,ry:0,r:6,hub:[-1.8,.2],entries:[[.4,.2]],desc:"The square inside the gate: the well, the market stall, the notice board."}),Io({id:"garden",name:"Garden",kind:"open",x:-29,z:-20,ry:0,r:7.4,hub:[3.6,2.4],entries:[[5.6,4.6],[6.6,5.6]],desc:"A quiet ring of hedges around the pond."})],Jn=Object.fromEntries(Zs.map(s=>[s.id,s])),dn=(s,e,t,n,i,r,o={})=>({room:s,lx:e,lz:t,lry:n,pose:i,doing:r,...o}),Ff={"war-table":dn("war",-.3,.9,Ii(-.3,.9,-2.5,-.6),"plan","planning at the war table"),"war-board":dn("war",3.8,-2.8,as,"point","updating the task board"),"war-rug":dn("war",-4,1.8,Ii(-4,1.8,-6.1,-2.6),"idle","thinking it over by the war chief's seat"),"lib-desk":dn("library",1.8,-1.98,0,"readsit","reviewing at the library desk",{via:[.3,-2.1]}),"lib-chair":dn("library",-2,2.3,.4,"read","reading by the armchair"),"lib-shelf":dn("library",-2.4,-2.5,as,"read","browsing the shelves"),"studio-desk":dn("studio",-2,-2.38,0,"type","drafting the layout",{via:[-.6,-2.5]}),"studio-easel":dn("studio",-2.4,6.2,Ii(-2.4,6.2,-1.5,5.3),"paint","painting on the terrace",{out:!0}),"desk-frontend":dn("workshop",-3,-2.18,0,"smash","writing code",{via:[-.5,-2.45]}),"desk-backend":dn("workshop",2,-2.18,0,"type","writing code",{via:[-.5,-2.45]}),"forge-anvil":dn("forge",-3.9,3.9,Ii(-3.9,3.9,-2.9,2.9),"spar","hammering at the anvil"),"tavern-1":dn("tavern",-3.1,.8,as/2,"drink","having a drink in the tavern"),"tavern-2":dn("tavern",-1.3,.8,-as/2,"drink","having a drink in the tavern",{via:[-1,2.1]}),"tavern-3":dn("tavern",.4,5.75,0,"drink","having a drink in the beer garden",{out:!0,via:[-6.2,5]}),"tavern-bar":dn("tavern",2.9,-.8,as/2,"idle","leaning on the bar"),"yard-1":dn("yard",-3.2,.7,0,"spar","sparring in the yard"),"yard-2":dn("yard",1.6,1.8,0,"spar","sparring in the yard"),"court-bench":dn("court",-5.2,-4,0,"sit","resting on the courtyard bench"),"court-well":dn("court",-3.9,1,Ii(-3.9,1,-5.8,2),"idle","chatting by the well"),"garden-easel":dn("garden",3,-3.4,Ii(3,-3.4,2.2,-4.3),"paint","painting in the garden"),"garden-pond":dn("garden",1.4,2.4,Ii(1.4,2.4,-1,0),"idle","watching the pond")},r1=Object.fromEntries(Object.entries(Ff).map(([s,e])=>{const t=Jn[e.room],[n,i]=Qi(t,e.lx,e.lz),r={...e,x:n,z:i,ry:e.lry+t.ry,...e.via?{viaW:Qi(t,...e.via)}:{},anchor:(e.out?"out:":"hub:")+e.room};return[s,r]})),o1=Object.keys(Ff),vu={pts:[[-38,-28],[-12,-35],[18,-34],[40,-22],[45,4],[38,27],[12,35],[-8,35],[-30,30],[-43,6]],thick:1.6},Mu=60,yu=52,ls=s=>Mu*yu/Lr(yu*ps(s),Mu*Si(s))*(1+.05*Si(3*s+.7)+.035*Si(5*s+2.1)+.02*Si(9*s)),Ic=[{kind:"hut",id:"barracks",name:"Barracks",desc:"Bunks and spare weapons.",floor:"planks",x:-35.2,z:5,ry:.42,w:6,d:4.4},{kind:"hut",id:"store",name:"Store house",desc:"Supplies for the keep: crates, sacks and barrels.",floor:"planks",x:-37.6,z:-9.5,ry:1.42,w:5,d:3.6},{kind:"hut",id:"stable",name:"Stable",desc:"Where the wolf mounts sleep.",floor:"planks",x:11.5,z:29.4,ry:-.08,w:6.4,d:3.6},{kind:"hut",id:"granary",name:"Granary",desc:"Grain and flour for the tavern.",floor:"planks",x:9.5,z:-27.5,ry:-.2,w:4.6,d:3.8},{kind:"windmill",x:35,z:13,r:2.6},{kind:"watch",x:36.5,z:-8.5,r:2},{kind:"shrine",x:-17.6,z:-28.4,r:2.8},{kind:"camp",x:-13.5,z:27.5,r:4.2}],Su=(s,e,t,n,i=0)=>Array.from({length:n},(r,o)=>[s+t*ps(i+o/n*2*as),e+t*Si(i+o/n*2*as)]),Bf=(s,e=0)=>[ps(s)*(ls(s)-e),Si(s)*(ls(s)-e)],a1=[[-32.4,-19.6],[-35.6,-18],[-40,-14.4],[-45.5,-12.6],[-51,-11.8],Bf(Nc(-11.4,-56),.4)],$l=Bf(Nc(49,2.2)),l1=[{id:"main",w:4.4,kind:"cobble",pts:[[2,33.8],[2.6,28],[1.7,21],[.5,14.5],[0,10.4]]},{id:"ring",w:3.2,kind:"cobble",closed:!0,pts:Su(0,0,10,16)},{id:"war",w:3.6,kind:"flag",pts:[[-.6,-10.4],[-2.8,-13.6],"out:war"]},{id:"library",w:2.3,kind:"dirt",pts:[[7.3,-7],[11.5,-11.4],[16.4,-14.6],"out:library"]},{id:"studio",w:2.2,kind:"flag",pts:[[10.3,1.2],[15.5,2.9],[20.6,2.7],"out:studio"]},{id:"tavern",w:2.8,kind:"cobble",pts:[[2.6,21.4],[7.5,21.2],[11,19.6],"out:tavern"]},{id:"workshop",w:2.8,kind:"cobble",pts:[[-10.3,-1.4],[-14.6,-3.4],"out:workshop"]},{id:"yard",w:2.3,kind:"dirt",pts:[[-7.3,7.1],[-11.6,9.8],"entry:yard"]},{id:"garden",w:1.7,kind:"dirt",pts:[[-14.6,-3.6],[-17.6,-9.4],[-20.6,-12.8],"entry:garden"]},{id:"lib-war",w:1.6,kind:"dirt",pts:[[11.3,-11.3],[5.6,-14.6],[-1.4,-15.2],[-3.2,-14.6]]},{id:"tav-studio",w:1.5,kind:"dirt",pts:[[11,19.6],[12.6,15.8],[15,11.4],[20.4,8],[24.4,4.4]]},{id:"yard-court",w:1.8,kind:"dirt",pts:[[-11.6,9.8],[-10.2,15.4],[-5.6,20.6],[-.4,22.6]]},{id:"dock",w:3.6,kind:"dirt",nav:!1,pts:[[2,36.4],[3.2,41.5],[2.4,46.2],$l]},{id:"pond",w:1.3,kind:"stones",closed:!0,pts:Su(-30,-20,4.3,12,.3)},{id:"to-shrine",w:1.3,kind:"dirt",nav:!1,pts:[[-20.6,-12.8],[-18.6,-19],[-17.8,-25]]},{id:"to-mill",w:1.4,kind:"dirt",nav:!1,pts:[[20.4,8],[27,9.8],[32.2,12.2]]},{id:"to-watch",w:1.3,kind:"dirt",nav:!1,pts:[[16.4,-14.6],[24,-11],[30.5,-9.4],[34.2,-8.7]]},{id:"to-barracks",w:1.4,kind:"dirt",nav:!1,pts:[[-19.5,-5.1],[-18.6,-.6],[-22,3.6],[-28.6,4.6],[-32.2,6.6]]},{id:"to-stable",w:1.6,kind:"cobble",nav:!1,pts:[[3.4,30.4],[6,30.9],[7.8,29.8]]},{id:"to-granary",w:1.2,kind:"dirt",nav:!1,pts:[[5.6,-14.6],[7.6,-20],[9,-25.2]]},{id:"to-camp",w:1.3,kind:"dirt",nav:!1,pts:[[-5.6,20.6],[-9,24.4],[-10.6,25.8]]}];function c1(s){const[e,t]=s.split(":"),n=Jn[t];if(e==="out"&&n.kind==="house")return n.outW;if(e==="entry"&&n.kind!=="house"){const i=n.entriesW[n.entriesW.length-1];if(i)return i}throw new Error(`no such road point: ${s}`)}function zf(s,e,t){const n=s.length,i=f=>{const u=e?s[(f%n+n)%n]:s[Math.max(0,Math.min(n-1,f))];if(!u)throw new Error("no points to sample");return u},r=[],o=e?n:n-1;for(let f=0;f<o;f++){const u=i(f-1),p=i(f),v=i(f+1),m=i(f+2),_=Math.max(6,Math.ceil(Lr(v[0]-p[0],v[1]-p[1])/.2));for(let S=0;S<_;S++){const A=S/_,T=A*A,I=T*A,N=(M,w,k,H)=>.5*(2*w+(-M+k)*A+(2*M-5*w+4*k-H)*T+(-M+3*w-3*k+H)*I);r.push([N(u[0],p[0],v[0],m[0]),N(u[1],p[1],v[1],m[1])])}}r.push(e?r[0]:i(n-1));const a=[r[0]];let c=0;for(let f=1;f<r.length;f++){const u=r[f-1],p=r[f];c+=Lr(p[0]-u[0],p[1]-u[1]),c>=t&&(a.push(p),c=0)}const h=r[r.length-1],d=a[a.length-1];return Lr(d[0]-h[0],d[1]-h[1])<t*.5?a[a.length-1]=h:a.push(h),e&&a.pop(),a}const bi=l1.map(s=>{const e=s.pts.map(t=>typeof t=="string"?c1(t):t);return{...s,ctrl:e,refs:s.pts.map(t=>typeof t=="string"?t:null),line:zf(e,!!s.closed,.5)}}),sa=zf(a1,!1,.5);function h1(){const s={},e=(a,c,h)=>s[a]={id:a,x:c,z:h,edges:[]},t=a=>{const c=s[a];if(!c)throw new Error(`no node ${a}`);return c},n=(a,c)=>{a===c||t(a).edges.includes(c)||(t(a).edges.push(c),t(c).edges.push(a))};for(const a of Zs)if(e(`hub:${a.id}`,...a.hubW),a.kind==="house")e(`in:${a.id}`,...a.inW),e(`out:${a.id}`,...a.outW),n(`hub:${a.id}`,`in:${a.id}`),n(`in:${a.id}`,`out:${a.id}`);else{let c=`hub:${a.id}`;a.entriesW.forEach((h,d)=>{const f=d===a.entriesW.length-1?`entry:${a.id}`:`e:${a.id}:${d}`;e(f,...h),n(c,f),c=f})}const i={},r={};for(const a of bi){if(a.nav===!1)continue;const c=[],h=a.line,d=4;for(let f=0;f<h.length;f++){if(!(!a.closed&&(f===0||f===h.length-1))&&f%d!==0)continue;const p=!a.closed&&f===0?a.refs[0]:!a.closed&&f===h.length-1?a.refs[a.refs.length-1]:null,v=p||`r:${a.id}:${f}`,m=h[f];p||e(v,m[0],m[1]);const _=c[c.length-1];_!==void 0&&n(_,v),c.push(v)}a.closed&&n(c[c.length-1],c[0]),i[a.id]=c,r[a.id]=a.closed?[]:[c[0],c[c.length-1]]}const o=(a,c,h)=>{let d=null,f=1/0;for(const[u,p]of Object.entries(i))if(u!==h)for(const v of p){const m=Lr(t(v).x-a,t(v).z-c);m<f&&(f=m,d=v)}return[d,f]};for(const a of bi)a.nav===!1||a.closed||(r[a.id]??[]).forEach((c,h)=>{if(a.refs[h===0?0:a.refs.length-1])return;const[d,f]=o(t(c).x,t(c).z,a.id);d&&f<4.5&&n(c,d)});for(const a of Zs){if(a.kind==="house")continue;const c=`entry:${a.id}`;if(bi.some(d=>d.refs.includes(c)))continue;const[h]=o(t(c).x,t(c).z,null);h&&n(c,h)}const[l]=o(...Jn.garden.hubW,"garden");return l&&l.startsWith("r:pond")&&n("hub:garden",l),s}h1();const Dn={fov:34,near:.5,far:900,home:{target:[0,0,2],position:[46,70,96]},minDistance:6,maxDistance:150,minPolarAngle:.12,maxPolarAngle:1.3,targetRadius:52,targetMinY:0,targetMaxY:4,minHeight:1.2};function u1(s,e){const t=Jn[s],n=t.kind==="house"?Math.max(t.w,t.d)*1.15+8:t.r*1.6+7,i=Math.hypot(e[0],e[1]),[r,o]=i>0?[e[0]/i,e[1]/i]:[.45,.9];return{target:[t.x,1,t.z],position:[t.x+r*n,n*.85,t.z+o*n]}}const{PI:kt}=Math,bu=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)};function f1(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,UP:c,toon:h,glow:d,mesh:f,at:u,rot:p,put:v,rr:m,pick:_,tiled:S,instanced:A}=s,{FLAGS:T,SPINNERS:I,skull:N,horns:M,flame:w,anvil:k,weaponRack:H,brazier:j,poleBanner:re,skullPole:$,barrel:U,well:se,bench:oe,stall:Z,lampPost:ee,crate:ae,sack:pe,torch:we,dummy:$e,target:at,hay:me,easel:He,candle:it,plantFlora:Ze,bunk:We,chest:et,hangingBanner:Ot,table:st,partition:vt,wolf:Mt,spikes:Ce,cart:Ve,fence:Qe,skullCandle:rt,tent:tt,signPost:St}=e,{patch:lt}=t,{buildHouse:Ie,inH:Ue,outH:ze,onWall:D}=n,Je=new Ys({color:0,emissive:"#ff7a24",emissiveIntensity:1.4,roughness:1}),qe=new Ys({color:0,emissive:"#ffd890",emissiveIntensity:2,roughness:1}),{fireLight:Ge,chimneyTop:Ae,emberBase:je}=(()=>{const Q=Jn.forge,K=new Ee;K.position.set(Q.x,0,Q.z),r.add(K),r.add(i.forge);const de=-.6,De=new Ee;De.position.set(0,.16,de),K.add(De),De.add(u(f(new li(1,24,0,kt),Je,!1),0,1.05,1.705)),De.add(u(f(new qt(2,1.05),Je,!1),0,.53,1.705)),De.add(u(f(new qt(1.4,.45),qe,!1),0,.32,1.71));{const ie=new Ee;for(let le=0;le<4;le++)ie.add(u(f(new Re(.9-le*.08,.14,1.2-le*.1),le%2?o.redD:h("#5a3a2a")),0,.5+le*.16,0));ie.add(u(f(new Re(1,.08,1.3),o.wood),0,.45,0)),ie.add(p(u(f(new nt(.06,.1,1.2,8),o.iron),.7,.8,0),0,0,kt/2)),De.add(u(ie,-2.9,0,.2))}const x=new $i("#ff8a3a",14,16,2);x.position.set(0,1.4,2.8),De.add(x),De.updateMatrixWorld(!0);const V=De.localToWorld(new W(0,10.9,-.5)),X=De.localToWorld(new W(0,1,2));v(K,k(),-2.9,2.9,Ii(-2.9,2.9,-3.9,3.9)+kt/2,.16);{const ie=new Ee;ie.add(u(f(new Re(1.5,.55,.7),o.wood),0,.27,0)),ie.add(p(u(f(new qt(1.35,.55),h("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.4}),!1),0,.52,0),-kt/2,0,0)),v(K,ie,3.5,3,-.5,.16)}const O=[];for(let ie=0;ie<40;ie++)O.push({x:3.9+m(-.8,.8),y:.16+m(.05,.4),z:-2.4+m(-.7,.7),sx:m(.14,.22),sy:m(.1,.18),sz:m(.14,.22),ry:m(0,3),c:_(["#2e2a2c","#3a3538","#262224"])});A(new Mi(1,0),O,{});for(let ie=0;ie<6;ie++)K.add(u(f(new Xt(.05,6,4),d("#ff6a20",2.4),!1),3.9+m(-.5,.5),.3+m(0,.25),-2.4+m(-.4,.4)));v(K,H(4),-5.3,-2,Math.atan2(5.3,2),.16),v(K,H(4),5.7,.9,-kt/2,.16);{const ie=new Ee;ie.add(u(f(new Re(.9,.5,.5),o.wood),0,.25,0));const le=u(p(f(new nt(.45,.45,.16,18),h("#8a8078")),0,0,kt/2),0,.8,0);ie.add(le),v(K,ie,-4.8,.2,.4,.16)}for(const ie of[.4,2,3.9,5.2])v(K,j(0),Math.cos(ie)*6.9,Math.sin(ie)*6.9,0,.16);return v(K,re(4),-1.9,-3.8,0,.16),v(K,re(4),1.9,-3.8,0,.16),v(K,$(2.6),6,-3.6,0,.16),v(K,U(),-6,2,0,.16),{fireLight:x,chimneyTop:V,emberBase:X}})();{const Q=Jn.court,K=new Ee;K.position.set(Q.x,0,Q.z),r.add(K),v(K,se(),-5.8,2),v(K,oe(1.9,!0),-5.2,-4,0),v(K,Z(),6.2,1.2,-kt/2);{const de=new Ee;for(const De of[-1,1])de.add(u(f(new Re(.12,2.2,.12),o.woodD),De*.8,1.1,0));de.add(u(f(new Re(1.8,1.1,.08),o.wood),0,1.55,0));for(let De=0;De<6;De++)de.add(u(p(f(new qt(.34,.42),h(_(["#e6d9bc","#d8c8a0","#efe4cc"])),!1),0,0,m(-.15,.15)),-.6+De%3*.6,1.8-Math.floor(De/3)*.5,.05));de.add(p(u(f(new Re(2.1,.08,.4),o.red),0,2.2,.08),.4,0,0)),v(K,de,5.6,-5.4,-kt/2)}v(K,ee(6),-5.8,-1),v(K,U(),8,-.6),v(K,ae(.55),3.8,3.4,.3),v(K,pe(),4.4,3),v(K,$(2.4),-7.8,6);{const de=new Ee;de.add(u(f(new Re(1.6,.5,.6),o.wood),0,.25,0)),de.add(p(u(f(new qt(1.45,.45),h("#3f6f8a"),!1),0,.47,0),-kt/2,0,0)),v(K,de,-7.6,3.6,kt/2)}lt("dirt",Q.x-4,Q.z+.5,4.4,5.6,0,.013)}{const Q=Jn.yard;if(Q.kind==="house")throw new Error("the yard is an open area");const K=Q.gate??0,de=new Ee;de.position.set(Q.x,0,Q.z),r.add(de),lt("sand",Q.x,Q.z,Q.r+.6,Q.r+.6,0,.014,5),de.add(i.yard);{const De=new Ee,x=Math.cos(K),V=Math.sin(K);De.position.set(x*Q.r,0,V*Q.r),De.rotation.y=Math.atan2(x,V);for(const X of[-1,1])De.add(u(we(),X*1.55,2,.24));de.add(De),v(de,$(2.6),x*(Q.r+1.6)-V*2.2,V*(Q.r+1.6)+x*2.2),v(de,$(2.2),x*(Q.r+1.6)+V*2.2,V*(Q.r+1.6)-x*2.2)}v(de,$e(),-3.2,2.1,kt),v(de,$e(),1.6,3.2,kt),v(de,at(),4.4,3.6,Math.atan2(-4.4,-3.6)),v(de,H(4),-5.4,-2.6,Math.atan2(5.4,2.6)),v(de,me(),-5.6,3.8,.4),v(de,me(),-4.8,4.7,1.2),v(de,p(me(.36),0,0,0),-5.1,4.2,.8).position.y=.72;for(const De of[2,3.4,4.6])v(de,re(3.4),Math.cos(De)*(Q.r-.7),Math.sin(De)*(Q.r-.7),Math.atan2(-Math.cos(De),-Math.sin(De)));v(de,oe(1.8,!1),3,-4.6,Math.atan2(-3,4.6)),v(de,U(),-.6,-5.8),v(de,j(0,.9),Math.cos(K)*(Q.r-1.2)-Math.sin(K)*1.8,Math.sin(K)*(Q.r-1.2)+Math.cos(K)*1.8)}const Te={x:-30,z:-20,r:2.6,mouthA:0},ce=a.ripple;ce.wrapS=ce.wrapT=si;const L=new gt("#1f5f8c"),y=new gt("#6fb6d2"),J=new gt("#a6d8e6"),ye="#bdb3c4",ge=Q=>new Cn({map:ce,color:ye,vertexColors:!0,side:on,polygonOffset:!0,polygonOffsetFactor:-1-Q,polygonOffsetUnits:-4-Q*4}),Le=new gt;function Fe(Q,K,de){const De=Math.hypot(Q-Te.x,K-Te.z),x=bu(1-De/Te.r);return Le.copy(y).lerp(L,x*.95),de&&Le.lerp(J,de*bu((De-Te.r)/1.2)*.45),[Le.r*1.27,Le.g*1.27,Le.b*1.27]}const _e=2.2;{const De=[],x=[],V=[],X=[],O=(z,R)=>{De.push(z,.045,R),x.push(...Fe(z,R,0)),V.push(z/_e,R/_e)};O(Te.x,Te.z);for(let z=1;z<=5;z++)for(let R=0;R<72;R++){const ne=R/72*2*kt,g=Te.r*z/5;O(Te.x+Math.cos(ne)*g,Te.z+Math.sin(ne)*g)}for(let z=0;z<72;z++)X.push(0,1+(z+1)%72,1+z);for(let z=1;z<5;z++)for(let R=0;R<72;R++){const ne=1+(z-1)*72+R,g=1+(z-1)*72+(R+1)%72,P=ne+72,B=g+72;X.push(ne,g,P,g,B,P)}const ie=new jt;ie.setAttribute("position",new Tt(De,3)),ie.setAttribute("color",new Tt(x,3)),ie.setAttribute("uv",new Tt(V,2)),ie.setIndex(X),r.add(f(ie,ge(0),!1));const le=sa,Be=le[0],ct=Math.hypot(Be[0]-Te.x,Be[1]-Te.z),_t=(Be[0]-Te.x)/ct,ot=(Be[1]-Te.z)/ct;Te.mouthA=Math.atan2(ot,_t);const Rt=[];for(let z=Te.r-1.2;z<ct-.2;z+=.3)Rt.push([Te.x+_t*z,Te.z+ot*z]);Rt.push(...le);const xt=.7,Ye=Te.r*Te.r,ht=Math.sqrt(Ye-1.5*1.5),en=Te.r+.8,fn=-(ht/1.5)*(en-ht),un=z=>{const R=Rt[z],ne=Math.hypot(R[0]-Te.x,R[1]-Te.z);if(ne<=ht)return Math.sqrt(Math.max(0,Ye-ne*ne))-.02;if(ne>=en)return xt;const g=(ne-ht)/(en-ht),P=g*g,B=P*g;return(2*B-3*P+1)*1.48+(B-2*P+g)*fn+(-2*B+3*P)*xt},E=[],b=[],C=[],F=[],te=[-1,-.5,0,.5,1];for(let z=0;z<Rt.length;z++){const R=Rt[Math.max(0,z-1)],ne=Rt[Math.min(Rt.length-1,z+1)],g=Rt[z],P=Math.hypot(ne[0]-R[0],ne[1]-R[1])||1,B=-(ne[1]-R[1])/P,Y=(ne[0]-R[0])/P,G=un(z);for(const ue of te){const fe=g[0]+B*ue*G,Se=g[1]+Y*ue*G;E.push(fe,.05,Se),b.push(...Fe(fe,Se,Math.abs(ue))),C.push(fe/_e,Se/_e)}if(z>0)for(let ue=0;ue<4;ue++){const fe=(z-1)*5+ue,Se=fe+1,Oe=z*5+ue,Xe=Oe+1;F.push(fe,Oe,Se,Se,Oe,Xe)}}const he=new jt;he.setAttribute("position",new Tt(E,3)),he.setAttribute("color",new Tt(b,3)),he.setAttribute("uv",new Tt(C,2)),he.setIndex(F),r.add(f(he,ge(1),!1));const xe=[];for(let z=1;z<Rt.length-1;z+=2){const R=Rt[z];if(Math.hypot(R[0]-Te.x,R[1]-Te.z)<Te.r+.9)continue;const ne=Rt[z-1],g=Rt[z+1],P=Math.hypot(g[0]-ne[0],g[1]-ne[1])||1,B=-(g[1]-ne[1])/P,Y=(g[0]-ne[0])/P,G=un(z)+.16;for(const ue of[-1,1])xe.push({x:R[0]+B*ue*G,y:.06,z:R[1]+Y*ue*G,sx:m(.25,.42),sy:m(.15,.25),sz:m(.25,.4),ry:m(0,3),c:_(["#8d837a","#80766e","#968b81","#6e665f"])})}A(new Mi(1,0),xe,{})}for(const Q of t.crossings){const K=i.bridge.clone();K.position.set(Q.x,0,Q.z),K.rotation.y=Q.ang,K.scale.x=(Q.len+.6)/3.4,r.add(K)}{const Q=Jn.garden;if(Q.kind==="house")throw new Error("the garden is an open area");const K=new Ee;K.position.set(Q.x,0,Q.z),r.add(K);const de=Math.atan2(4.6,5.6);K.add(i.garden);{const O=Math.cos(de)*Q.r,ie=Math.sin(de)*Q.r,le=new Ee;le.position.set(O,0,ie),le.rotation.y=Math.atan2(Math.cos(de),Math.sin(de)),le.add(u(ee(0).children[2].clone(),0,2.6,0)),K.add(le)}const De=[],x=[];for(let O=0;O<26;O++){const ie=O/26*2*kt;let le=Math.abs(ie-Te.mouthA);le=Math.min(le,2*kt-le),!(le<.62)&&De.push({x:Te.x+Math.cos(ie)*2.75,y:.08,z:Te.z+Math.sin(ie)*2.75,sx:m(.25,.4),sy:m(.15,.25),sz:m(.25,.35),ry:m(0,3),c:_(["#8d837a","#80766e","#968b81"])})}for(let O=0;O<7;O++)x.push({x:Te.x+m(-1.6,1.6),y:.065,z:Te.z+m(-1.4,1.4),sx:m(.8,1.2),sz:m(.8,1.2),c:_(["#5f8a4a","#6e9452"])});A(new Mi(1,0),De,{}),A(new nt(.22,.22,.02,12),x,{}),v(K,He(),2.2,-4.3,Math.atan2(3-2.2,-3.4- -4.3)),v(K,oe(1.6,!0),-4.4,4.4,Math.atan2(3.4,-4.4));for(const[O,ie]of[[-5.6,-2.2],[4.9,-.6]]){const le=new Ee;le.add(u(f(new nt(.22,.28,.9,6),o.stone),0,.45,0)),le.add(u(f(new Re(.5,.36,.5),o.stone),0,1.08,0)),le.add(u(f(new Re(.3,.2,.52),d("#ffc070",1.6),!1),0,1.08,0)),le.add(u(f(new mn(.48,.36,4),o.redD),0,1.44,0)),v(K,le,O,ie,kt/4)}{const O=new Ee;O.add(u(f(new Re(.9,.6,.6),o.stone),0,.3,0)),O.add(u(N(.26),0,.75,0));for(const ie of[-1,1])O.add(u(it(.18),ie*.3,.6,.12));v(K,O,-4.4,-5.4,Math.atan2(4.4,5.4))}Ze("tree_willow",1,Q.x-6.2,Q.z-2.8),Ze("tree_cherry",.95,Q.x+5.3,Q.z-4.9),Ze("tree_fruit",.85,Q.x-3,Q.z+6.2);const V=[];let X=0;for(;V.length<90&&X<4e3;){X++;const O=m(0,2*kt),ie=m(5.3,6.7),le=Math.cos(O)*ie,Be=Math.sin(O)*ie;Math.min(Math.abs(O-de),2*kt-Math.abs(O-de))<.35||Math.hypot(le-3,Be+3.4)<1.3||Math.hypot(le-2.2,Be+4.3)<1||V.push({x:Q.x+le,y:.18,z:Q.z+Be,sx:.9,sy:.9,sz:.9,c:_([l.red,l.bone,"#d98a3a",l.redL,"#e8c860"])})}A(new Xt(.11,8,6),V,{})}const be=S(a.water,1,6),Pe=[];{const Q=sa,[K,de]=Q[Q.length-1],[De,x]=Q[Q.length-3],V=Math.hypot(K-De,de-x),X=(K-De)/V,O=(de-x)/V,ie=new Nt(new qt(1.4,40),new Cn({map:be,color:"#acb5c8",transparent:!0,opacity:.85,side:on,depthWrite:!1}));ie.position.set(K+X*.9,-20+.05,de+O*.9),ie.rotation.y=Math.atan2(X,O),r.add(ie);const le=new ks({map:a.soft,color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1});for(let Be=0;Be<9;Be++){const ct=new hs(le);ct.position.set(K+X*m(1,2.4),m(-38,-30),de+O*m(1,2.4)+m(-1,1)),ct.scale.setScalar(m(3,5.5)),r.add(ct),Pe.push(ct)}for(let Be=0;Be<4;Be++){const ct=new hs(le);ct.position.set(K+X*1,m(-.6,.3),de+O*1+m(-.5,.5)),ct.scale.setScalar(m(1,1.6)),r.add(ct),Pe.push(ct)}}for(const Q of Ic)if(Q.kind==="hut"){const K=Ie({...Q,wallH:2.5},{id:Q.id,pitch:.66,chimney:Q.id==="barracks"?[1.4,-.6]:null});if(Q.id==="barracks"&&(Ue(K,We(),-1.6,-.9),Ue(K,We(),.4,-.9),Ue(K,et(),2.2,-1.6,-kt/2),Ue(K,j(0,.7),2.3,1.2),D(K,"W",H(3),0,Lt,.3),D(K,"S",Ot(.8,1.3),1.6,Lt+2.3,.04)),Q.id==="store"){Ue(K,st(1.6,.6,.9,o.wood),-1.2,-1.3);for(let de=0;de<4;de++)Ue(K,ae(.45),-1.8+de*.4,-1.3).position.y=Lt+.95;Ue(K,U(),1.6,-1.2),Ue(K,U(.9),1.9,-.4),Ue(K,pe(),.6,-1.3),Ue(K,pe(),1,.6),Ue(K,ae(.6),-1.8,.8,.3)}if(Q.id==="stable"){const de=f(new qt(Q.w-.6,Q.d-.6),o.straw,!1);de.rotation.x=-kt/2,Ue(K,de,0,0).position.y=Lt+.01;for(const De of[-1,1.2])Ue(K,vt(2.2,1.1),De,-.6);Ue(K,Mt(),-2.2,-.3,.4),Ue(K,Mt(),.1,-.5,-.5).scale.setScalar(.9),Ue(K,me(),2.4,-1,.2);{const De=new Ee;De.add(u(f(new Re(1.2,.4,.45),o.wood),0,.2,0)),De.add(p(u(f(new qt(1.1,.36),h("#3f6f8a"),!1),0,.38,0),-kt/2,0,0)),Ue(K,De,2.2,1)}}if(Q.id==="granary"){for(let de=0;de<6;de++)Ue(K,pe(),-1.4+de%3*.5,-1.2+Math.floor(de/3)*.55);Ue(K,U(),1.5,-1.1);{const de=f(new Re(1.2,.8,.8),o.wood);de.position.y=.4;const De=new Ee;De.add(de),De.add(u(f(new Re(1.1,.05,.7),o.straw),0,.78,0)),Ue(K,De,1.2,.7)}}Q.id==="barracks"&&(ze(K,H(4),-1.4,3.3),ze(K,Ce(2.6),3.8,3,.6),ze(K,re(3),3.6,.6),ze(K,$(2.4),-3.8,2.4)),Q.id==="store"&&(ze(K,ae(.7),-1.6,2.8,.2),ze(K,ae(.5),-.9,3.1,.7),ze(K,pe(),.6,2.9),ze(K,pe(),1.1,3.2),ze(K,U(),2.3,2.9)),Q.id==="stable"&&(ze(K,me(),-2.8,2.6,.3),ze(K,me(),-2,3,1.1),ze(K,Ve(),2,3.4,-.3),Qe(K.g,[[-3.2,4.4],[3.2,4.4]],.9)),Q.id==="granary"&&(ze(K,pe(),-1.2,2.6),ze(K,pe(),-.6,2.9),ze(K,pe(),-1,3.3),ze(K,U(.9),1.6,2.7))}else if(Q.kind==="windmill"){const K=new Ee;K.position.set(Q.x,0,Q.z),K.add(u(f(new nt(1.7,2.4,6.6,18),h("#ffffff",{map:S(a.castleWall,3,2.2)})),0,3.3,0)),K.add(u(f(new mn(2.3,2.8,18),h("#ffffff",{map:S(a.roof,4,1.5)})),0,7.9,0)),K.add(u(f(new Re(1,1.7,.2),o.woodD),0,.85,2.25));for(const[De,x]of[[.6,3.6],[-.9,4.8]])K.add(u(p(f(new Re(.5,.6,.1),o.pane,!1),0,De,0),Math.sin(De)*2,x,Math.cos(De)*2));const de=u(new Ee,0,6.2,2);de.add(p(f(new nt(.22,.22,.5,10),o.woodD),kt/2,0,0));for(let De=0;De<4;De++){const x=new Ee;x.rotation.z=De*kt/2,x.add(u(f(new Re(.12,4.4,.08),o.woodD),0,2.3,.2)),x.add(u(f(new Re(.9,3.4,.04),h("#e3d5b6",{side:on})),.5,2.6,.24)),x.add(u(f(new Re(.06,3.4,.06),o.wood),.95,2.6,.26)),de.add(x)}K.add(de),I.push({o:de,axis:"z",v:.5}),K.add(u(pe(),-1.6,0,2.6)),K.add(u(pe(),-2.2,0,2.2)),r.add(K)}else if(Q.kind==="watch"){const K=new Ee;K.position.set(Q.x,0,Q.z),K.add(i.watch),K.add(u(j(0,.7),.6,6.5,-.6)),r.add(K)}else if(Q.kind==="shrine"){const K=new Ee;K.position.set(Q.x,0,Q.z),K.add(i.altar);for(const de of[.9,2.5,4.1,5.6])K.add(u(rt(),Math.cos(de)*1.4,0,Math.sin(de)*1.4));K.add(u(j(0,.8),1.6,0,1.4)),r.add(K),lt("dirt",Q.x,Q.z,3.4,3.4,0,.013)}else{const K=new Ee;K.position.set(Q.x,0,Q.z),K.add(u(p(tt(1.8,2.5,"#7a5a40"),0,Math.atan2(2.2,-1.6),0),-2.2,0,1.6)),K.add(u(p(tt(1.6,2.3,"#6a2a22"),0,Math.atan2(-2,-2.2),0),2,0,2.2));for(let de=0;de<8;de++){const De=de/8*2*kt;K.add(u(f(new Mi(.18,0),o.stone),Math.cos(De)*.55,.1,Math.sin(De)*.55))}for(let de=0;de<3;de++)K.add(p(u(f(new nt(.07,.07,.8,6),o.woodD),0,.12,0),kt/2,de*1.05,0));w(K,0,.12,0,1.8);for(const de of[.6,2.4,4.4])K.add(u(p(f(new nt(.2,.2,1.4,8),o.wood),0,-de,kt/2),Math.cos(de)*1.6,.2,Math.sin(de)*1.6));K.add(u($(2.4),-3.2,0,-1.2)),K.add(u(U(),3.1,0,-.8)),r.add(K),lt("dirt",Q.x,Q.z,4.2,4,0,.013)}function q(Q,K,de,De=.018,x=o.dark){const V=new W(...K),X=new W(...de),O=V.distanceTo(X),ie=f(new nt(De,De,O,5),x,!1);return ie.position.copy(V).add(X).multiplyScalar(.5),ie.quaternion.setFromUnitVectors(c,X.clone().sub(V).normalize()),Q.add(ie),ie}function Me(){const Q=new Ee,K=f(new Xt(1,22,12,0,kt*2,kt/2,kt/2),h("#ffffff",{map:a.planks}));K.scale.set(2.7,1,1.15),Q.add(K);const de=f(new nt(1,1,.1,24),o.woodL);de.scale.set(2.62,1,1.1),Q.add(u(de,0,.02,0));const De=f(new pn(1,.06,6,36),o.woodD);De.rotation.x=kt/2,De.scale.set(2.68,1.13,1),De.position.y=.14,Q.add(De),Q.add(p(u(f(new nt(.05,.08,1.6,8),o.woodD),3.2,.5,0),0,0,-1.2)),Q.add(u(p(N(.32),0,kt/2,0),2.75,.32,0)),Q.add(u(p(M(.8),0,kt/2,0),2.75,.42,0)),Q.add(u(f(new nt(.07,.09,2.8,8),o.woodD),.3,1.4,0));const x=u(new Ee,.3,2.85,0);x.add(u(f(new Re(.9,.36,.02),o.red),.45,0,0)),Q.add(x),T.push(x);const V=u(new Ee,-1.5,.06,0);V.add(u(f(new Re(1.1,.8,1.1),h("#ffffff",{map:a.planks})),0,.4,0)),V.add(u(p(f(new nt(.75,.75,1.3,3),h("#ffffff",{map:a.roof})),0,0,kt/2),0,1.05,0)),V.add(u(f(new Re(.3,.3,.04),o.pane,!1),.56,.5,0)),Q.add(V);const X=f(new Xt(1,24,16),h("#ffffff",{map:a.balloon}));X.scale.set(3.6,1.5,1.7),X.position.y=4.4,Q.add(X);const O=f(new pn(1,.05,6,40),o.bone);O.rotation.x=kt/2,O.scale.set(3.62,1.72,1),O.position.y=4.1,Q.add(O);for(const[le,Be,ct,_t]of[[2.6,1.15,2,.9],[2.6,-1.15,2,-.9],[-2.6,1.15,-2,.9],[-2.6,-1.15,-2,-.9],[0,1.7,0,1.12],[0,-1.7,0,-1.12]])q(Q,[le,4.05,Be],[ct,.16,_t]);const ie=u(new Ee,-2.95,.65,0);ie.add(p(f(new nt(.1,.1,.3,8),o.iron),0,0,kt/2));for(let le=0;le<3;le++){const Be=u(new Ee,0,0,0);Be.rotation.x=le/3*kt*2,Be.add(u(p(f(new Re(.04,.75,.16),o.wood),.2,0,0),-.05,.4,0)),ie.add(Be)}Q.add(ie),I.push({o:ie,axis:"x",v:7}),Q.add(u(f(new Re(.06,.9,.7),o.redD),-2.75,.1,0));for(const le of[2.4,-2.4])Q.add(u(f(new Xt(.1,8,6),d("#ffc070",2.2),!1),le,.5,0));return Q.add(u(ae(.45),1.3,.07,.4)),Q.add(u(U(.6),1.2,.07,-.45)),Q}const ve=Me(),ke=Me();{const Q=bi.find(_t=>_t.id==="dock");if(!Q)throw new Error("no dock road");const K=Q.line,[de,De]=K[K.length-1],[x,V]=K[K.length-4],X=Math.hypot(de-x,De-V),O=(de-x)/X,ie=(De-V)/X,le=new Ee;le.position.set(de,0,De),le.rotation.y=Math.atan2(O,ie),r.add(le),le.add(i.dock),le.add(u(ae(.55),2.8,1.17,6.8));for(const[_t,ot]of[[-1.5,3.2],[1.5,7.7],[-1.5,7.7]])le.add(u(f(new Xt(.12,8,6),d("#ffc070",2.2),!1),_t,1.32,ot));le.add(u(ae(.6),-.85,.22,1.3)),le.add(u(ae(.45),-.75,.22,2)),le.add(u(U(.85),.85,.22,1)),le.add(u(pe(),.6,.22,3.6)),le.add(u(re(3.4),-1.45,.22,.4)),ve.position.set(4.1,-.4,5.6),ve.rotation.y=-kt/2,le.add(ve);const Be=f(new Re(1.6,.08,.7),o.woodL);Be.position.set(2.3,.05,5.6),Be.rotation.z=-.18,le.add(Be);const ct=u(new Ee,-4.6,0,-3.8);ct.add(u(we(),-.2,1.6,1.3)),ct.add(u(ae(.6),1.9,0,.8)),ct.add(u(U(),1.8,0,-.4)),le.add(ct),le.add(u(p(St("SKY DOCK"),0,kt/2,0),2.2,0,-2.4)),r.add(ke),ke.scale.setScalar(1.5),ke.userData={a:1.2,r:96,y:15}}{const Q=new Ee;Q.position.set(-44,0,26),r.add(Q);for(const[K,de,De]of[[-2.4,-1.2,"#7a5a40"],[2.2,-2,"#6a2a22"],[.4,2.6,"#5a4a3a"]])Q.add(u(p(tt(1.8,2.6,De),0,Math.atan2(-K,-de),0),K,0,de));for(let K=0;K<8;K++){const de=K/8*2*kt;Q.add(u(f(new Mi(.18,0),o.stone),Math.cos(de)*.55,.1,Math.sin(de)*.55))}w(Q,0,.1,0,1.8),Q.add(u($(2.6),3.6,0,1.8)),Q.add(u(re(3),-3.6,0,1.6)),Q.add(u(p(Ce(3),0,.6,0),4.6,0,-2.6)),lt("dirt",-44,26,5,4.6,.3,.013)}return lt("field",54,-8,6.5,4.2,.35,.013,3),lt("field",51,6,5.2,3.6,-.2,.013,3),lt("field",10,-44.5,6,3.6,.1,.013,3),v(r,$e(),55.5,-2.6,.4),v(r,me(),48.6,-12.6,.4),v(r,me(),49.4,-11.8,1.3),{mouthMat:Je,coreMat:qe,fireLight:Ge,chimneyTop:Ae,emberBase:je,waterTex:ce,fallTex:be,mists:Pe,skyBoat:ve,airship:ke}}const d1=[3,5,7,9,11];function p1(s){const e=[];for(let t=0;t<s;t++)e.push(.39894*Math.exp(-.5*t*t/(s*s))/s);return new kn({defines:{KERNEL_RADIUS:s},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`;function _1(s){s.separableBlurMaterials.forEach((e,t)=>{e.dispose(),s.separableBlurMaterials[t]=p1(d1[t]??3)}),s.materialHighPassFilter.fragmentShader=m1,s.materialHighPassFilter.needsUpdate=!0,s.compositeMaterial.fragmentShader=g1,s.compositeMaterial.needsUpdate=!0,s.blendMaterial.premultipliedAlpha=!1,s.blendMaterial.needsUpdate=!0}const x1="/assets/altar-BLnKV2Du.glb",v1="/assets/bridge-ETZK_L1i.glb",M1="/assets/dock-Dz4b5cxY.glb",y1="/assets/flora-7jxy9LaY.glb",S1="/assets/forge-DNia5kCh.glb",b1="/assets/garden-iFD0puy8.glb",w1="/assets/gate-CLzj2aEg.glb",T1="/assets/house_library-a_INcIO_.glb",E1="/assets/house_studio-prPn7xt-.glb",A1="/assets/house_tavern-DhJciONJ.glb",R1="/assets/house_war-CErgsJUC.glb",C1="/assets/house_workshop-DizOAfBl.glb",P1="/assets/towers-DiePBDd1.glb",L1="/assets/underside-CtDt-w8A.glb",D1="/assets/walls-DL6hLM5P.glb",N1="/assets/watch-D_FLfKo1.glb",I1="/assets/yard-BCXHtimJ.glb";function U1(s){const e=new Map,t=new Map,n=s.clone();return kf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),l=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=l.map(function(a){return t.get(a)}),r.bind(r.skeleton,r.bindMatrix)}),n}function kf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)kf(s.children[n],e.children[n],t)}class O1 extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new G1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new wu(t,Gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wu(t,Gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new tM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Pr.extractUrlBase(e);o=Pr.resolveURL(c,this.path)}else o=Pr.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},a=new Sf(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},l={},a=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Gf){try{o[Gt.KHR_BINARY_GLTF]=new nM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Gt.KHR_MATERIALS_UNLIT:o[d]=new z1;break;case Gt.KHR_DRACO_MESH_COMPRESSION:o[d]=new iM(r,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:o[d]=new sM;break;case Gt.KHR_MESH_QUANTIZATION:o[d]=new rM;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function F1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function hn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class B1{constructor(e){this.parser=e,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new gt(16777215);a.color!==void 0&&h.setRGB(a.color[0],a.color[1],a.color[2],Qn);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new wf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $i(h),c.distance=d;break;case"spot":c=new T0(h),c.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),xi(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return n._getNodeRef(t.cache,l,a)})}}class z1{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const i=[];e.color=new gt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yn))}return Promise.all(i)}}class k1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class G1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(i)}}class H1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class V1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class W1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class X1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new gt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class q1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Y1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new gt().setRGB(r[0],r[1],r[2],Qn),Promise.all(i)}}class K1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new gt().setRGB(r[0],r[1],r[2],Qn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yn)),Promise.all(i)}}class J1{constructor(e){this.parser=e,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class $1{constructor(e){this.parser=e,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return hn(this.parser,e,this.name)!==null?di:null}extendMaterialParams(e,t){const n=hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Q1{constructor(e){this.parser=e,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class j1{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class eM{constructor(e){this.parser=e,this.name=Gt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=i.images[o.source];let a=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(a=c)}return n.loadTextureImage(e,o.source,a)}}class wu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(l,a,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):o.ready.then(function(){const u=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class tM{constructor(e){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],a={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(h=>(a[c]=h,a[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const p of d){const v=new At,m=new W,_=new Wn,S=new W(1,1,1),A=new Gr(p.geometry,p.material,f);for(let I=0;I<f;I++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,I),a.ROTATION&&_.fromBufferAttribute(a.ROTATION,I),a.SCALE&&S.fromBufferAttribute(a.SCALE,I),A.setMatrixAt(I,v.compose(m,_,S));let T=null;for(const I in a)if(I==="_COLOR_0"){const N=a[I];A.instanceColor=new Jo(N.array,N.itemSize,N.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(T===null){const M=A.geometry;T=new jt,T.name=M.name;for(const w in M.attributes)T.setAttribute(w,M.attributes[w]);for(const w in M.morphAttributes)T.morphAttributes[w]=M.morphAttributes[w];M.index!==null&&T.setIndex(M.index),T.morphTargetsRelative=M.morphTargetsRelative;for(const w of M.groups)T.addGroup(w.start,w.count,w.materialIndex);M.boundingBox!==null&&(T.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(T.boundingSphere=M.boundingSphere.clone()),T.drawRange.start=M.drawRange.start,T.drawRange.count=M.drawRange.count,T.userData=Object.assign({},M.userData),A.geometry=T}const N=a[I];T.setAttribute(I,new Jo(N.array,N.itemSize,N.normalized))}rn.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),u.push(A)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Gf="glTF",gr=12,Tu={JSON:1313821514,BIN:5130562};class nM{constructor(e){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<i;){const l=r.getUint32(o,!0);o+=4;const a=r.getUint32(o,!0);if(o+=4,a===Tu.JSON){const c=new Uint8Array(e,gr+o,l);this.content=n.decode(c)}else if(a===Tu.BIN){const c=gr+o;this.body=e.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},a={},c={};for(const h in o){const d=Ql[h]||h.toLowerCase();l[d]=o[h]}for(const h in e.attributes){const d=Ql[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],u=Gs[f.componentType];c[d]=u.name,a[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const v=u.attributes[p],m=a[p];m!==void 0&&(v.normalized=m)}d(u)},l,c,Qn,f)})})}}class sM{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class rM{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class Hf extends Js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=l*2,c=l*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,p=e*c,v=p-c,m=-2*u+3*f,_=u-f,S=1-m,A=_-f+d;for(let T=0;T!==l;T++){const I=o[v+T+l],N=o[v+T+a]*h,M=o[p+T+l],w=o[p+T]*h;r[T]=S*I+A*N+m*M+_*w}return r}}const oM=new Wn;class aM extends Hf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return oM.fromArray(r).normalize().toArray(r),r}}const ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:xn,9729:Rn,9984:Ou,9985:Fo,9986:vr,9987:yi},Au={33071:zn,33648:Xo,10497:si},tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lM={CUBICSPLINE:void 0,LINEAR:Or,STEP:Ur},nl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function os(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],l=[],a=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;l.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;a.push(f)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function uM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fM(s){let e;const t=s.extensions&&s.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+il(t.attributes):e=s.indices+":"+il(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+il(s.targets[n]);return e}function il(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pM=new At;class mM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const a=l.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new S0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new R0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return os(r,l,i),xi(l,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let l=0,a=o.length;l<a;l++)e[o[l]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,l)=>{const a=this.associations.get(o);a!=null&&this.associations.set(l,a);for(const[c,h]of o.children.entries())r(h,l.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Pr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=tl[i.type],l=Gs[i.componentType],a=i.normalized===!0,c=new l(i.count*o);return Promise.resolve(new An(c,o,a))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],a=tl[i.type],c=Gs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*a,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,m;if(u&&u!==d){const _=Math.floor(f/u),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let A=t.cache.get(S);A||(v=new c(l,_*u,i.count*u/h),A=new nf(v,u/h),t.cache.add(S,A)),m=new kr(A,a,f%u/h,p)}else l===null?v=new c(i.count*a):v=new c(l,f,i.count*a),m=new An(v,a,p);if(i.sparse!==void 0){const _=tl.SCALAR,S=Gs[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,I=new S(o[1],A,i.sparse.count*_),N=new c(o[2],T,i.sparse.count*a);l!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=I.length;M<w;M++){const k=I[M];if(m.setX(k,N[M*a]),a>=2&&m.setY(k,N[M*a+1]),a>=3&&m.setZ(k,N[M*a+2]),a>=4&&m.setW(k,N[M*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const a=n.manager.getHandler(o.uri);a!==null&&(l=a)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],l=r.images[t],a=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Eu[f.magFilter]||Rn,h.minFilter=Eu[f.minFilter]||yi,h.wrapS=Au[f.wrapS]||si,h.wrapT=Au[f.wrapT]||si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xn&&h.minFilter!==Rn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],l=self.URL||self.webkitURL;let a=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(u,p){t.parse(f,u,p)})});else{if(o.bufferView!==void 0)a=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return a=l.createObjectURL(u),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(a).then(function(f){return new Promise(function(u,p){let v=u;t.isImageBitmapLoader===!0&&(v=function(m){const _=new Sn(m);_.needsUpdate=!0,u(_)}),t.load(Pr.resolveURL(f,r.path),v,void 0,p)})})}const d=h.then(function(f){return c===!0&&l.revokeObjectURL(a),xi(f,o),f.userData.mimeType=o.mimeType||dM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=r.associations.get(o);o=r.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,a)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new Ar,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(l,a)),n=a}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let a=this.cache.get(l);a||(a=new of,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(l,a)),n=a}if(i||r||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=n.clone(),r&&(a.vertexColors=!0),o&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return Ys}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const l={},a=r.extensions||{},c=[];if(a[Gt.KHR_MATERIALS_UNLIT]){const d=i[Gt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(l,r,t))}else{const d=r.pbrMetallicRoughness||{};if(l.color=new gt(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Qn),l.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",d.baseColorTexture,yn)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=on);const h=r.alphaMode||nl.OPAQUE;if(h===nl.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===nl.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;l.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Cn&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){const d=r.emissiveFactor;l.emissive=new gt().setRGB(d[0],d[1],d[2],Qn)}return r.emissiveTexture!==void 0&&o!==Cn&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,yn)),Promise.all(c).then(function(){const d=new o(l);return r.name&&(d.name=r.name),xi(d,r),t.associations.set(d,{materials:e}),r.extensions&&os(i,d,r),d})}createUniqueName(e){const t=tn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(l){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return Ru(a,l,t)})}const o=[];for(let l=0,a=e.length;l<a;l++){const c=e[l],h=fM(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ru(new jt,c,t),c.mode===ti.TRIANGLE_STRIP?f=f.then(u=>xu(u,Vu)):c.mode===ti.TRIANGLE_FAN&&(f=f.then(u=>xu(u,Hl))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let a=0,c=o.length;a<c;a++){const h=o[a].material===void 0?cM(this.cache):this.getDependency("material",o[a].material);l.push(h)}return l.push(t.loadGeometries(o)),Promise.all(l).then(async function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let u=0,p=h.length;u<p;u++){const v=h[u],m=o[u];let _;const S=c[u];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0){const A=r.isSkinnedMesh===!0,T=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");A&&T===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=A&&T?new pp(v,S):new Nt(v,S),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(m.mode===ti.LINES)_=new xp(v,S);else if(m.mode===ti.LINE_STRIP)_=new Mc(v,S);else if(m.mode===ti.LINE_LOOP)_=new vp(v,S);else if(m.mode===ti.POINTS)_=new Mr(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&uM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),xi(_,r),m.extensions&&os(i,_,m),t.assignFinalMaterial(_),d.push(_)}for(let u=0,p=d.length;u<p;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&os(i,d[0],r),d[0];const f=new Ee;r.extensions&&os(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,p=d.length;u<p;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(Ju.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,l=[],a=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){l.push(d);const f=new At;r!==null&&f.fromArray(r.array,c*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xc(l,a)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],l=[],a=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],p=i.samplers[u.sampler],v=u.target,m=v.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",_)),a.push(this.getDependency("accessor",S)),c.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(a),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],p=d[2],v=d[3],m=d[4],_=[];for(let A=0,T=f.length;A<T;A++){const I=f[A],N=u[A],M=p[A],w=v[A],k=m[A];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const H=n._createAnimationTracks(I,N,M,w,k);if(H)for(let j=0;j<H.length;j++)_.push(H[j])}const S=new m0(r,void 0,_);return xi(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let a=0,c=i.weights.length;a<c;a++)l.morphTargetInfluences[a]=i.weights[a]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=i.children||[];for(let c=0,h=l.length;c<h;c++)o.push(n.getDependency("node",l[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),a]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,pM)});for(let u=0,p=d.length;u<p;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,p=d[0];h.pivot=new W().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",l=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&l.push(a),r.camera!==void 0&&l.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let h;if(r.isBone===!0?h=new rf:c.length>1?h=new Ee:c.length===1?h=c[0]:h=new rn,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&os(n,h,r),r.matrix!==void 0){const d=new At;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ee;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&os(t,r,n);const o=n.nodes||[],l=[];for(let a=0,c=o.length;a<c;a++)l.push(i.getDependency("node",o[a]));return Promise.all(l).then(function(a){for(let h=0,d=a.length;h<d;h++){const f=a[h];f.parent!==null?r.add(U1(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof $n||f instanceof Sn)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],l=e.name?e.name:e.uuid,a=[];function c(u){u.morphTargetInfluences&&a.push(u.name?u.name:u.uuid)}Ki[r.path]===Ki.weights?(c(e),e.isGroup&&e.children.forEach(c)):a.push(l);let h;switch(Ki[r.path]){case Ki.weights:h=Kr;break;case Ki.rotation:h=Zr;break;case Ki.translation:case Ki.scale:h=ta;break;default:n.itemSize===1?h=Kr:h=ta;break}const d=i.interpolation!==void 0?lM[i.interpolation]:Or,f=this._getArrayFromAccessor(n);for(let u=0,p=a.length;u<p;u++){const v=new h(a[u]+"."+Ki[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Zr?aM:Hf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gM(s,e,t){const n=e.attributes,i=new Hi;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],a=l.min,c=l.max;if(a!==void 0&&c!==void 0){if(i.set(new W(a[0],a[1],a[2]),new W(c[0],c[1],c[2])),l.normalized){const h=jl(Gs[l.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new W,a=new W;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,p=f.max;if(u!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),f.normalized){const v=jl(Gs[f.componentType]);a.multiplyScalar(v)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const o=new Ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ru(s,e,t){const n=e.attributes,i=[];function r(o,l){return t.getDependency("accessor",o).then(function(a){s.setAttribute(l,a)})}for(const o in n){const l=Ql[o]||o.toLowerCase();l in s.attributes||i.push(r(n[o],l))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(l){s.setIndex(l)});i.push(o)}return Ht.workingColorSpace!==Qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ht.workingColorSpace}" not supported.`),xi(s,e),gM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hM(s,e.targets,t):s})}const _M=Object.assign({"../models/altar.glb":x1,"../models/bridge.glb":v1,"../models/dock.glb":M1,"../models/flora.glb":y1,"../models/forge.glb":S1,"../models/garden.glb":b1,"../models/gate.glb":w1,"../models/house_library.glb":T1,"../models/house_studio.glb":E1,"../models/house_tavern.glb":A1,"../models/house_war.glb":R1,"../models/house_workshop.glb":C1,"../models/towers.glb":P1,"../models/underside.glb":L1,"../models/walls.glb":D1,"../models/watch.glb":N1,"../models/yard.glb":I1}),ec={underside:"static",walls:"static",towers:"static",gate:"static",forge:"static",house_war:"parts",house_workshop:"parts",house_tavern:"parts",house_library:"parts",house_studio:"parts",yard:"static",watch:"static",dock:"static",bridge:"static",altar:"static",garden:"static",flora:"parts"};function xM(s){const e=_M[`../models/${s}.glb`];if(!e)throw new Error(`no model ${s} in the bundle`);return e}const sl=new At,vM=new At;function MM(s){const e=new Set;return s.scene.traverse(t=>{const n=t.userData.woa_q;if(n&&(sl.makeScale(n[3],n[3],n[3]).setPosition(n[0],n[1],n[2]),t.matrix.compose(t.position,t.quaternion,t.scale).multiply(vM.copy(sl).invert()),t.matrix.decompose(t.position,t.quaternion,t.scale)),!(t instanceof Nt)||e.has(t.geometry))return;const i=t.geometry;e.add(i);for(const[o,l]of Object.entries(i.attributes)){if(o==="skinIndex"||l.array instanceof Float32Array&&!("isInterleavedBufferAttribute"in l))continue;const a=l.itemSize,c=new Float32Array(l.count*a);for(let h=0;h<l.count;h++)c[h*a]=l.getX(h),a>1&&(c[h*a+1]=l.getY(h)),a>2&&(c[h*a+2]=l.getZ(h)),a>3&&(c[h*a+3]=l.getW(h));i.setAttribute(o,new An(c,a))}const r=n||t.parent?.userData.woa_q;r&&i.applyMatrix4(sl.makeScale(r[3],r[3],r[3]).setPosition(r[0],r[1],r[2])),i.attributes.normal||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}),s}function Vf(s,e){const t=e,n=t.emissive;return n&&n.r+n.g+n.b>.01?s.glow("#"+n.getHexString(),Math.min(2.6,Math.round((t.emissiveIntensity||1)*40)/100)):s.toon("#"+t.color.getHexString())}const yM=s=>s.isMeshStandardMaterial===!0;function Wf(s,e){const t=new Map;return e.traverse(n=>{if(!(n instanceof Nt))return;const i=Vf(s,n.material),r=n.geometry,o=r.index?r.toNonIndexed():r.clone();for(const a of Object.keys(o.attributes))a!=="position"&&a!=="normal"&&o.deleteAttribute(a);o.applyMatrix4(n.matrixWorld);const l=t.get(i);l?l.push(o):t.set(i,[o])}),t}function SM(s,e){e.scene.updateMatrixWorld(!0);const t=new Ee;for(const[n,i]of Wf(s,e.scene)){const r=i.length===1?i[0]:Dc(i,!1);if(!r)continue;const o=new Nt(r,n);o.castShadow=!yM(n),o.receiveShadow=!0,o.matrixAutoUpdate=!1,t.add(o)}return t}function Xf(s,e){let t=null;return s.scene.traverse(n=>{!t&&(n.userData.name===e||n.name===e)&&(t=n)}),t}async function bM(){const s=new O1,e=Object.keys(ec),t=await Promise.all(e.map(n=>s.loadAsync(xM(n)).then(MM)));return Object.fromEntries(e.map((n,i)=>[n,t[i]]))}function wM(s,e){const t={};for(const n of Object.keys(ec)){const i=e[n];t[n]=ec[n]==="static"?SM(s,i):i}return t}const{PI:Zt}=Math,Mn=.32,Uo=s=>s.userData.up,TM=s=>s.userData.cutY;function EM(s,e,t,n,i){const{scene:r,M:o,COL:l,TEX:a,GRAD:c,UP:h,toon:d,glow:f,mesh:u,at:p,rot:v,put:m,spike:_,rr:S,pick:A,tiled:T,planarUV:I,wallUV:N,boxes:M}=s,{SPINNERS:w,skull:k,horns:H,torch:j,flame:re,table:$,skullCandle:U,throne:se,rug:oe,trophy:Z,hangingBanner:ee,weaponRack:ae,shield:pe,brazier:we,chest:$e,crate:at,barrel:me,stool:He,drum:it,poleBanner:Ze,skullPole:We,woodpile:et,spikes:Ot,bookshelf:st,desk:vt,candle:Mt,fence:Ce,plant:Ve,cauldron:Qe,bench:rt,lampPost:tt,scrollStack:St,telescope:lt,starGlobe:Ie,crystal:Ue,wallMap:ze,easel:D,bottle:Je,anvil:qe,sack:Ge,cart:Ae,roundTable:je,mug:Te,lanternString:ce,signPost:L,bed:y,curtain:J,partition:ye,wardrobe:ge}=e,{patch:Le}=t,Fe={},_e={war:[a.planksWar,2.6],dark:[a.planksDark,2.6],light:[a.planksLight,2.6],planks:[a.planks,2.6],tiles:[a.slate,3.6]};function be(z,R,ne,g,P,B,Y={}){const G=Y.T||Mn,ue=Y.base||0,fe=Y.stone!==!1,Se=fe?1.15:ue,Oe=fe?Lt:ue,Xe=fe?Se:ue+.9,ft=p(new Ee,0,Xe,0);z.add(ft),z.userData.up=ft,ft.userData.movesWithWall=!0,z.userData.cutY=Xe;const mt={timber:[[],[]],panes:[[],[]],shutters:[[],[]]};function Ke(Pt,Kt){const[It,Wt,Jt,ln,qn,nr,ms=0,ga=0,Qr=0]=Kt,_a=Wt-qn/2,xa=Wt+qn/2,[zc,kc]=mt[Pt];ms||Qr||_a>=Xe-.01?kc.push([It,Wt-Xe,Jt,ln,qn,nr,ms,ga,Qr]):xa<=Xe+.01?zc.push(Kt):(zc.push([It,(_a+Xe)/2,Jt,ln,Xe-_a,nr,ms,ga,Qr]),kc.push([It,(Xe+xa)/2-Xe,Jt,ln,xa-Xe,nr,ms,ga,Qr]))}const Et=g?g.x-g.w/2:0,Vt=g?g.x+g.w/2:0,wt=g?[[-R/2,Et],[Vt,R/2]]:[[-R/2,R/2]],bt=ne-Se;for(const[Pt,Kt]of wt){const It=Kt-Pt;if(It<.05)continue;const Wt=(Pt+Kt)/2;if(fe)z.add(p(u(I(new Re(It,Se,G+.08),1.6),o.stone),Wt,Se/2,0)),ft.add(p(u(N(new Re(It,bt,G),bt,1.3),o.plankWall),Wt,bt/2,0));else{const Jt=Xe-Se,ln=ne-Xe;z.add(p(u(N(new Re(It,Jt,G),Jt,1.3,0,bt),o.plankWall),Wt,Se+Jt/2,0)),ft.add(p(u(N(new Re(It,ln,G),ln,1.3,Jt,bt),o.plankWall),Wt,ln/2,0))}}if(g){const Pt=Lt+2.3,Kt=ne-Pt;ft.add(p(u(N(new Re(g.w,Kt,G),Kt,1.3),o.plankWall),g.x,Pt+Kt/2-Xe,0)),Ke("timber",[g.x-g.w/2-.1,(Pt+.1)/2,0,.24,Pt+.1,G+.16]),Ke("timber",[g.x+g.w/2+.1,(Pt+.1)/2,0,.24,Pt+.1,G+.16]),Ke("timber",[g.x,Pt+.08,0,g.w+.8,.3,G+.2]);for(const It of[-1,1])for(let Wt=0;Wt<4;Wt++)Ke("timber",[g.x+It*(g.w/2+.1),.35+Wt*.55,G/2+.09,.07,.07,.04]);ft.add(p(k(.26),g.x,Pt+.42-Xe,G/2+.17)),ft.add(p(H(.6),g.x,Pt+.48-Xe,G/2+.15));for(const It of[-1,1])ft.add(p(j(),g.x+It*(g.w/2+.55),Lt+1.7-Xe,G/2+.02))}Ke("timber",[0,Se+(fe?0:.09),0,R,.18,G+.12]),Ke("timber",[0,ne-.1,0,R,.22,G+.12]);const Yt=Math.max(1,Math.round(R/2.3)),dt=[];for(let Pt=1;Pt<Yt;Pt++){const Kt=-R/2+Pt*R/Yt;if(!(g&&Kt>Et-.45&&Kt<Vt+.45)){dt.push(Kt),Ke("timber",[Kt,Se+bt/2,0,.2,bt,G+.1]);for(const It of[Se+.09,ne-.1])Ke("timber",[Kt,It,G/2+.08,.09,.09,.06])}}if(P)for(const Pt of[-R/2+.2,R/2-.2])Ke("timber",[Pt,(ue+ne+.12)/2,0,.42,ne-ue+.12,G+.18]);const an=[-R/2+(P?.41:0),...dt,R/2-(P?.41:0)];g&&an.push(Et-.22,Vt+.22),an.sort((Pt,Kt)=>Pt-Kt);let Bt=0;for(let Pt=0;Pt<an.length-1;Pt++){const Kt=an[Pt],It=an[Pt+1],Wt=It-Kt,Jt=(Kt+It)/2;if(!(Wt<.9)&&!(g&&Jt>Et-.3&&Jt<Vt+.3)){if(Bt++,B&&Wt>1.5&&Bt%2===1){const ln=Oe+(fe?1.62:1.35);Ke("panes",[Jt,ln,0,.86,.78,Y.paneT||G+.04]);for(const qn of[[Jt,ln+.44,0,1.08,.1,G+.12],[Jt,ln-.44,0,1.12,.12,G+.16],[Jt-.48,ln,0,.1,.96,G+.12],[Jt+.48,ln,0,.1,.96,G+.12],[Jt,ln,0,.06,.78,G+.06],[Jt,ln,0,.86,.05,G+.06]])Ke("timber",qn);for(const qn of[-1,1])Ke("shutters",[Jt+qn*.78,ln,G/2+.05,.42,.86,.05,0,qn*.35,0]),Ke("timber",[Jt+qn*.78+qn*.012,ln,G/2+.09,.44,.08,.03,0,qn*.35,0])}else if(Wt>1){const ln=bt-.3,qn=Math.atan2(ln,Wt-.2),nr=Math.hypot(ln,Wt-.2);for(const ms of[-1,1])Ke("timber",[Jt,Se+bt/2,G/2+.04,nr,.13,.06,0,0,ms*qn])}}}const[Tn,gn]=mt.timber,[mi,Gn]=mt.panes,[Xn,zt]=mt.shutters;M(z,o.timber,Tn),M(ft,o.timber,gn),M(z,o.pane,mi,!1),M(ft,o.pane,Gn,!1),M(z,o.red,Xn),M(ft,o.red,zt),ke(z,Xe)}const Pe=new W,q=new At,Me=new At,ve=new At;function ke(z,R){const ne=Uo(z),g=new Map;z.traverse(G=>{if(!(G instanceof Nt)||Array.isArray(G.material))return;for(let Se=G;Se&&Se!==z;Se=Se.parent)if(Se===ne)return;const ue=G.material,fe=g.get(ue);fe?fe.push(G):g.set(ue,[G])});const P=G=>{const ue=G;return(ue.color?ue.color.r*.3+ue.color.g*.59+ue.color.b*.11:0)+(ue.map?.5:0)},B=[...g.keys()].sort((G,ue)=>P(G)-P(ue));z.updateWorldMatrix(!0,!0),ve.copy(z.matrixWorld).invert();const Y=new Set;B.forEach((G,ue)=>{if(ue)for(const fe of g.get(G)??[]){const Se=fe.geometry;if(Y.has(Se))continue;Y.add(Se),q.multiplyMatrices(ve,fe.matrixWorld),Me.copy(q).invert();const Oe=Se.attributes.position;let Xe=!1;for(let ft=0;ft<Oe.count;ft++)Pe.fromBufferAttribute(Oe,ft).applyMatrix4(q),!(Math.abs(Pe.y-R)>.002)&&(Pe.y-=.003*ue,Pe.applyMatrix4(Me),Oe.setXYZ(ft,Pe.x,Pe.y,Pe.z),Xe=!0);Xe&&(Oe.needsUpdate=!0,Se.computeBoundingBox(),Se.computeBoundingSphere())}})}function Q(z){const R=[],ne=new Map;return z.traverse(g=>{if(!(g instanceof Nt))return;const P=g.material;let B=ne.get(P);B||(B=P.clone(),B.transparent=!0,ne.set(P,B),R.push(B)),g.material=B}),R}function K(z,R,ne){const g=z.r,P=ne.pitch||.6,B=.6,Y=g.d/2+B,G=new Ee;G.position.y=R-B*Math.tan(P),z.g.add(G);const ue=Y*Math.tan(P),fe=B*Math.tan(P),Se=Y/Math.cos(P),Oe=d("#ffffff",{map:a.roof});for(const wt of[-1,1]){const bt=u(I(new Re(g.w+B*2,.18,Se),1.6),Oe);bt.rotation.x=wt<0?-P:P,bt.position.set(0,ue/2,wt*Y/2),G.add(bt)}const Xe=new Vr;Xe.moveTo(-g.d/2,fe),Xe.lineTo(g.d/2,fe),Xe.lineTo(0,ue-.12),Xe.closePath();const ft=new Tc(Xe),mt=d("#ffffff",{map:a.gable,side:on});for(const wt of[-1,1])G.add(p(v(u(ft,mt),0,Zt/2,0),wt*(g.w/2+.02),0,0)),G.add(p(v(k(.34),0,wt*Zt/2,0),wt*(g.w/2+.2),fe+(ue-fe)*.42,0)),G.add(p(v(H(1.1),0,wt*Zt/2,0),wt*(g.w/2+B+.05),ue+.12,0));G.add(p(u(new Re(g.w+B*2+.2,.2,.26),o.iron),0,ue+.04,0));const Ke=Math.floor((g.w+B)/1.5);for(let wt=0;wt<Ke;wt++)_(G,new W(-g.w/2+.5+wt*(g.w-1)/Math.max(1,Ke-1),ue+.12,0),h,.34,.06,o.boneD,0,5);let Et=null;if(ne.chimney){const[wt,bt]=ne.chimney,Yt=ue+1.4;G.add(p(u(I(new Re(.85,Yt,.85),1.2),o.stone),wt,Yt/2,bt)),G.add(p(u(new Re(1.05,.16,1.05),o.iron),wt,Yt+.05,bt)),Et=[wt,Yt+.3,bt]}const Vt=Q(G);return{R:G,mats:Vt,base:G.position.y,hR:ue,smokeAt:Et}}function de(z){return{S:{c:[0,z.d/2],n:[0,1],L:z.w+Mn},N:{c:[0,-z.d/2],n:[0,-1],L:z.w+Mn},E:{c:[z.w/2,0],n:[1,0],L:z.d-Mn},W:{c:[-z.w/2,0],n:[-1,0],L:z.d-Mn}}}function De(z,R){const ne=new Ee;z.add(ne);const g=new Ee;return g.position.set(R.c[0],0,R.c[1]),g.rotation.y=Math.atan2(R.n[0],R.n[1]),ne.add(g),{sg:ne,sf:g}}function x(z,R,ne){if(!R)return;R.updateWorldMatrix(!0,!0),z.g.updateMatrixWorld(!0);const g=[];R.traverse(P=>{P instanceof Nt&&g.push(P)});for(const P of g){const B=P.geometry;B.attributes.uv||B.setAttribute("uv",new Tt(new Float32Array(B.attributes.position.count*2),2));const Y=Vf(s,P.material),G=new Nt(B,Y);G.castShadow=!Y.isMeshStandardMaterial,G.receiveShadow=!0,P.matrixWorld.decompose(G.position,G.quaternion,G.scale),z.g.add(G),G.updateMatrixWorld(!0),ne.attach(G)}}function V(z,R,ne,g,P,B={}){const Y=B.T||Mn,G=B.stone!==!1,ue=B.base||0,fe=G?1.15:ue+.9,Se=p(new Ee,0,fe,0);if(R.add(Se),R.userData.up=Se,Se.userData.movesWithWall=!0,R.userData.cutY=fe,x(z,ne,R),x(z,g,Se),ke(R,fe),P)for(const Oe of[-1,1])Se.add(p(j(),P.x+Oe*(P.w/2+.55),Lt+1.7-fe,Y/2+.08))}function X(z,R,ne,g){const P=z.r,B=ne.pitch||.6,Y=.6,G=P.d/2+Y,ue=new Ee;ue.position.y=R-Y*Math.tan(B),z.g.add(ue);const fe=G*Math.tan(B);x(z,g,ue);const Se=Q(ue);let Oe=null;if(ne.chimney){const[Xe,ft]=ne.chimney;Oe=[Xe,fe+1.4+.3,ft]}return{R:ue,mats:Se,base:ue.position.y,hR:fe,smokeAt:Oe}}const O={war:n.house_war,workshop:n.house_workshop,tavern:n.house_tavern,library:n.house_library,studio:n.house_studio};function ie(z,R={}){const ne=new Ee;ne.position.set(z.x,0,z.z),ne.rotation.y=z.ry||0,r.add(ne);const g=z.id||R.id,P={id:g,r:z,g:ne,sides:{},lift:0,view:"ground",deco:!!R.deco,name:z.name,top:0},B=O[g],Y=mt=>B?Xf(B,g+"_"+mt):null;B?x(P,Y("base"),ne):ne.add(p(u(I(new Re(z.w+.6,Lt+.3,z.d+.6),1.4),o.stone),0,(Lt+.3)/2-.3,0));const[G,ue]=_e[z.floor||"planks"];ne.add(v(p(u(new qt(z.w,z.d),d("#ffffff",{map:T(G,z.w/ue,z.d/ue)}),!1),0,Lt+.004,0),-Zt/2,0,0));const fe=Lt+z.wallH,Se=de(z),Oe=z.doorLocal||[0,z.d/2],Xe=z.door?z.door.side:"S";for(const[mt,Ke]of Object.entries(Se)){const{sg:Et,sf:Vt}=De(ne,Ke),wt=Math.cos(Vt.rotation.y),bt=-Math.sin(Vt.rotation.y),Yt=Xe===mt?{x:(Oe[0]-Ke.c[0])*wt+(Oe[1]-Ke.c[1])*bt,w:z.door&&z.door.width||1.4}:null;B?V(P,Vt,Y(mt+"_lo"),Y(mt+"_hi"),Yt):be(Vt,Ke.L,fe,Yt,mt==="N"||mt==="S",R.windows!==!1),P.sides[mt]={g:Et,sf:Vt,up:Uo(Vt),n:Ke.n,s:1}}if(!B){const mt=z.doorN||[0,1],Ke=Math.abs(mt[0])>0?[.7,(z.door&&z.door.width||1.4)+.5]:[(z.door&&z.door.width||1.4)+.5,.7];ne.add(p(u(I(new Re(Ke[0],.14,Ke[1]),1.2),o.stone),Oe[0]+mt[0]*.62,.07,Oe[1]+mt[1]*.62))}let ft=fe;if(z.storeys===2){const mt=z.upperH||2.5,Ke=p(new Ee,0,fe,0);Ke.userData.movesWithWall=!0,ne.add(Ke);const Et={U:Ke,sides:{},lift:0,mats:[],top:fe};if(P.upper=Et,B)x(P,Y("Ufloor"),Ke);else{const wt=d("#ffffff",{map:G}),[bt,Yt,dt,an]=R.stairHole||[0,0,0,0],Bt=z.w/2,Tn=z.d/2,gn=R.stairHole?[[-Bt,bt,-Tn,Tn],[Yt,Bt,-Tn,Tn],[bt,Yt,-Tn,dt],[bt,Yt,an,Tn]]:[[-Bt,Bt,-Tn,Tn]];for(const[mi,Gn,Xn,zt]of gn)Gn-mi<.05||zt-Xn<.05||Ke.add(p(u(I(new Re(Gn-mi,.22,zt-Xn),ue),wt),(mi+Gn)/2,.09,(Xn+zt)/2))}const Vt=[];for(const[wt,bt]of Object.entries(Se)){const{sg:Yt,sf:dt}=De(Ke,bt);B?V(P,dt,Y("U"+wt+"_lo"),Y("U"+wt+"_hi"),null,{base:.2,stone:!1,T:Mn-.05}):(be(dt,bt.L,.2+mt,null,wt==="N"||wt==="S",!0,{base:.2,stone:!1,T:Mn-.05,paneT:Mn-.03}),Vt.push([0,.05,.2,bt.L+.2,.2,.18]),M(dt,o.timber,Vt.slice(-1))),Et.sides[wt]={g:Yt,sf:dt,up:Uo(dt),n:bt.n,s:1}}ft=fe+.2+mt}return P.top=ft,P.roof=B?X(P,ft,R,Y("roof")):K(P,ft,R),Fe[g]=P,P}function le(z,R,ne,g,P){const B=z.upper,Y=12,G=B.top+.2-Lt,ue=(g-ne)/Y,fe=[];for(let mt=0;mt<Y;mt++){const Ke=G*(mt+1)/Y;fe.push([R,Lt+Ke/2,ne+ue*(mt+.5),P,Ke,Math.abs(ue)+.01])}M(z.g,o.wood,fe);const Se=R>0?-1:1,Oe=R+Se*(P/2+.04);for(let mt=0;mt<=4;mt++){const Ke=ne+(g-ne)*mt/4,Et=Lt+G*mt/4;z.g.add(p(u(new Re(.07,.95,.07),o.woodD),Oe,Et+.5,Ke))}const Xe=Math.hypot(g-ne,G),ft=p(u(new Re(.08,.08,Xe),o.woodL),Oe,Lt+G/2+.95,(ne+g)/2);ft.rotation.x=-Math.atan2(G,g-ne),z.g.add(ft)}function Be(z,R,ne,g,P){const B=TM(z);g>B?(R.position.set(ne,g-B,P),Uo(z).add(R)):(R.position.set(ne,g,P),z.add(R))}const ct=(z,R)=>z==="S"?R:z==="N"||z==="E"?-R:R;function _t(z,R,ne,g,P,B=.1){const Y=z.upper.sides[R];return ne.rotation.y=Zt,Be(Y.sf,ne,ct(R,g),P,-((Mn-.05)/2+B/2+.01)),ne}const ot=(z,R,ne,g,P=0)=>m(z.upper.U,R,ne,g,P,.2);function Rt(z,R,ne=0,g=.9){for(let P=0;P<R.length-1;P++){const[B,Y]=R[P],[G,ue]=R[P+1],fe=Math.hypot(G-B,ue-Y),Se=p(u(new Re(fe,.07,.07),o.woodL),(B+G)/2,ne+g,(Y+ue)/2);Se.rotation.y=-Math.atan2(ue-Y,G-B),z.add(Se);const Oe=Math.max(1,Math.round(fe/.5));for(let Xe=0;Xe<=Oe;Xe++)z.add(p(u(new Re(.05,g,.05),o.woodD),B+(G-B)*Xe/Oe,ne+g/2,Y+(ue-Y)*Xe/Oe))}}function xt(z,R,ne,g,P,B=.1,Y=!0){const G=z.sides[R];return Y&&(ne.rotation.y=Zt),Be(G.sf,ne,ct(R,g),P,Y?-(Mn/2+B/2+.01):Mn/2+B/2+.01),ne}const Ye=(z,R,ne,g,P=0)=>m(z.g,R,ne,g,P,Lt),ht=(z,R,ne,g,P=0)=>m(z.g,R,ne,g,P,0),en=(z,R,ne)=>Qi(z,R,ne),fn=document.createElement("canvas");fn.width=512,fn.height=280;const un=new Wl(fn);un.colorSpace=yn;let E=i;const b='"M PLUS Rounded 1c", "Inter Variable", sans-serif';function C(z=E){E=z;const R=fn.getContext("2d");if(!R)return;const ne=512,g=z.filter(B=>B==="done").length;R.fillStyle="#2e2422",R.fillRect(0,0,ne,280),R.fillStyle="#e3d5b6",R.font=`800 40px ${b}`,R.textAlign="left",R.fillText("TASKS",28,58),R.fillStyle="#ffd27a",R.textAlign="right",R.fillText(`${g} / 5`,ne-28,58);const P={done:"#6f9a52",work:"#d9762e",review:"#4f9a96",todo:"#6e6668"};["L","D","B","F","R"].forEach((B,Y)=>{const G=28+Y*94,ue=90;R.fillStyle=P[z[Y]??"todo"],R.beginPath(),R.roundRect(G,ue,78,96,14),R.fill(),R.fillStyle="rgba(255, 255, 255, 0.22)",R.beginPath(),R.roundRect(G+6,ue+6,66,18,8),R.fill(),R.fillStyle="#1e1a1c",R.font=`800 46px ${b}`,R.textAlign="center",R.fillText(B,G+39,ue+70)}),R.fillStyle="#1b1616",R.beginPath(),R.roundRect(28,220,ne-56,28,14),R.fill(),g&&(R.fillStyle="#d9762e",R.beginPath(),R.roundRect(28,220,(ne-56)*g/5,28,14),R.fill()),un.needsUpdate=!0}C(),document.fonts&&document.fonts.ready.then(()=>C());function F(){const z=new Ee;return z.add(u(new Re(2.7,1.65,.1),o.woodD)),z.add(p(new Nt(new qt(2.45,1.35),new Cn({map:un,toneMapped:!1})),0,0,.06)),z.add(p(u(new Re(2.9,.14,.2),o.wood),0,.9,.02)),z.add(p(k(.18),0,1.08,.06)),z}{const z=Jn.war,R=ie(z,{pitch:.62}),ne=Lt+z.wallH;Ye(R,$(3.4,2,.86),-2.5,-.6);{const g=new qt(3,1.7,26,16),P=g.attributes.position,B=[];for(let G=0;G<P.count;G++){const ue=P.getX(G),fe=P.getY(G),Se=Math.max(0,Math.sin(ue*2.1+1)*Math.cos(fe*2.7)*.1+Math.sin(ue*5+fe*3)*.03);P.setZ(G,Se),B.push(...Se>.08?[.86,.82,.76]:Se>.03?[.5,.38,.28]:Se>.005?[.42,.55,.32]:[.32,.5,.62])}g.setAttribute("color",new Tt(B,3)),g.computeVertexNormals();const Y=v(p(u(g,new Ho({vertexColors:!0,gradientMap:c}),!1),-2.5,Lt+.91,-.6),-Zt/2,0,0);R.g.add(Y);for(const[G,ue,fe]of[[-.9,-.3,l.red],[.4,.3,"#3f5f8f"],[1,-.4,l.gold],[-.2,-.5,l.red]])R.g.add(p(u(new nt(.012,.012,.24,4),o.dark,!1),-2.5+G,Lt+1.05,-.6+ue)),R.g.add(p(u(new Re(.12,.07,.01),d(fe),!1),-2.5+G+.06,Lt+1.13,-.6+ue));for(const[G,ue]of[[-1.55,-.85],[1.55,.85]])Ye(R,U(),-2.5+G,-.6+ue).position.y=Lt+.9}Ye(R,se(),-6.1,-2.6,Ii(-6.1,-2.6,-2.5,-.6)),Ye(R,oe(1.6,[l.redD,l.bone,l.red,l.black,l.redL,l.redD]),-4.6,.6),xt(R,"N",F(),3.8,Lt+1.95,.12),xt(R,"N",Z(),-2.5,Lt+2.2,.1),xt(R,"N",Z(),.9,Lt+2.1,.1),xt(R,"N",ee(1,1.9),-5.4,ne-.3,.04),xt(R,"N",ee(1,1.9),6.4,ne-.3,.04),xt(R,"W",ae(4),.6,Lt,.3),xt(R,"E",pe(l.red),-2,Lt+1.9,.1),xt(R,"E",pe(l.black),1.2,Lt+1.9,.1),Ye(R,we(7),6.3,-3.3),Ye(R,we(0,.85),-6.7,3.5),Ye(R,$e(),6.3,1.6,-Zt/2),Ye(R,at(.6),5.3,3.6,.3),Ye(R,at(.45),5.9,3.7,.9),Ye(R,me(.9),-6.6,-.6),Ye(R,He(),-.9,-2.2),Le("plaza",...en(z,0,7.4),5.8,3.6,-z.ry,.014),ht(R,it(),-4.4,6,.3),ht(R,it(),5.6,5.9,-.2),ht(R,Ze(3.4),-2.6,5),ht(R,Ze(3.4),2.6,5),ht(R,We(2.6),-7,6.2),ht(R,We(2.2),7.8,5.4),ht(R,we(0),-6.2,5),ht(R,et(2.4),-3,-6),ht(R,me(),4.4,-5.6),ht(R,me(.9),5,-6.1),ht(R,me(1,!0),3.6,-6.2,.4),ht(R,v(ae(4),0,Zt,0),.8,-5.6),ht(R,Ot(3),-8.6,-1,Zt/2)}{const z=Jn.library,R=ie(z,{pitch:.66,stairHole:[4,4.84,-2,0]}),ne=Lt+z.wallH;for(const B of[-3.6,-1.4])Ye(R,st(2),B,-z.d/2+Mn/2+.27);for(const B of[-2.1,.3])Ye(R,st(2),-z.w/2+Mn/2+.27,B,Zt/2);const g=vt("books");Ye(R,g.g,1.8,-1.2),Ye(R,Mt(.18,4),2.45,-.95).position.y=Lt+.79;{const B=new Ee;B.add(p(u(new Re(1,.45,.9),d("#5a1f2a")),0,.3,0)),B.add(p(u(new Re(.86,.12,.74),d("#7a2a36")),0,.58,.04)),B.add(p(u(new Re(1,.95,.22),d("#5a1f2a")),0,.8,-.38));for(const Y of[-1,1])B.add(p(u(new Re(.2,.6,.9),d("#4a1822")),Y*.5,.52,0));Ye(R,B,-3.3,1.9,.9)}Ye(R,oe(1.5,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),-1.2,.8);{const B=new Ee;B.add(p(u(new nt(.08,.2,1,8),o.woodD),0,.5,0)),B.add(v(p(u(new Re(.6,.06,.44),o.wood),0,1.06,0),.35,0,0)),B.add(v(p(u(new Re(.5,.03,.36),d("#e6d9bc")),0,1.1,.01),.35,0,0)),Ye(R,B,2.3,2.5,-.5)}{const B=new Ee;B.add(p(u(new nt(.05,.2,.9,10),o.woodD),0,.45,0));const Y=p(new Ee,0,1.25,0);Y.rotation.z=.4;const G=u(new Xt(.34,24,16),d("#ffffff",{map:a.globe}));Y.add(G),Y.add(v(u(new pn(.4,.02,6,28),o.gold),0,Zt/2,0)),B.add(Y),Ye(R,B,.5,3),w.push({o:G,axis:"y",v:.25})}{const B=new Ee;B.add(p(u(new nt(.16,.26,.9,8),o.woodD),0,.45,0)),B.add(p(u(new Xt(.22,16,12),f("#5fe0d0",1),!1),0,1.12,0));for(let Y=0;Y<3;Y++){const G=Y/3*Zt*2;_(B,new W(Math.cos(G)*.14,.92,Math.sin(G)*.14),new W(Math.cos(G),2,Math.sin(G)),.3,.03,o.bone,0,5)}Ye(R,B,3,-3.2)}const P=[];for(const[B,Y,G]of[[.2,-3.4,5],[.75,-3.5,3],[-4.2,3.3,4]]){const[ue,fe]=en(z,B,Y);let Se=Lt;for(let Oe=0;Oe<G;Oe++){const Xe=S(.06,.1);P.push({x:ue+S(-.03,.03),y:Se+Xe/2,z:fe+S(-.03,.03),sx:S(.32,.42),sy:Xe,sz:S(.24,.3),ry:z.ry+S(-.3,.3),c:A(e.BOOK_COLS)}),Se+=Xe}}s.instanced(s.UNIT_BOX,P,{cast:!0}),Ye(R,U(),-4.3,3.4).position.y=Lt+.42,Ye(R,Mt(.5),-4.5,2.9),Ye(R,Mt(.34),-4.2,2.7),xt(R,"E",ee(.9,1.6),-3,ne-.3,.04),xt(R,"S",Z(),1.6,Lt+2.1,.1);{const B=new Ee;B.add(p(u(new nt(2.2,2.4,7.6,22),d("#ffffff",{map:T(a.castleWall,3.5,2.4)})),0,3.8,0)),B.add(p(u(new nt(2.6,2.4,.4,22),o.stone),0,7.7,0)),B.add(p(u(new mn(2.9,3.6,22),d("#ffffff",{map:T(a.roof,5,2)})),0,9.7,0)),B.add(p(k(.45),0,11.8,0));for(const[Y,G]of[[.5,2.6],[2,4.6],[3.6,3.4],[5.2,5.6]])B.add(p(v(u(new Re(.4,.9,.12),o.pane,!1),0,-Y+Zt/2,0),Math.cos(Y)*2.32,G,Math.sin(Y)*2.32));B.add(p(v(ee(1,2.2),0,.6,0),Math.sin(.6)*2.42,6.8,Math.cos(.6)*2.42)),ht(R,B,5.6,3.4)}Ce(R.g,[[-5.8,4.9],[-5.8,7.6],[-9,7.6],[-9,4.9]],.7);for(let B=0;B<10;B++)ht(R,Ve(S(.6,.9)),S(-8.6,-6.2),S(5.3,7.1));ht(R,Qe(),1.2,6.2),ht(R,rt(1.6,!0),3,6.7,Zt),ht(R,We(2.2),-.4,5.6),ht(R,tt(0),-4.6,4.6),ht(R,at(.55),6.2,-1.4,.3),ht(R,at(.4),6.3,-.8,.8),Le("dirt",...en(z,.5,6.4),4.6,2.2,-z.ry,.013),le(R,4.42,-3.4,-.2,.84),Rt(R.upper.U,[[4,0],[4,-2],[4.84,-2]],.2);for(const B of[-3.6,-1.4,1])ot(R,st(2),B,-z.d/2+Mn/2+.27);for(const B of[-2.1,.3,2.5])ot(R,st(2),-z.w/2+Mn/2+.27,B,Zt/2);ot(R,$(2.2,1,.8,o.wood),.2,.7),ot(R,St(),-.4,.6).position.y=1.04,ot(R,St(),.9,.9).position.y=1.04,ot(R,p(u(new Re(.5,.03,.36),d("#e6d9bc")),0,0,0),.3,.5).position.y=1.03,ot(R,Mt(.2),-.6,1).position.y=1,ot(R,Mt(.14),.95,.4).position.y=1,ot(R,He(),.2,1.6),ot(R,He(),-.9,1.5),ot(R,lt(),2.4,2.9,Zt),ot(R,Ie(),-2.6,2.6),ot(R,Ue(),2.9,-2.8),ot(R,oe(1.3,["#3a1f3a",l.bone,"#5a2a4a",l.redD,"#e0cfa8","#3a1f3a"]),.2,.7),_t(R,"S",ze(),-.6,1.75,.06),_t(R,"E",Z(),2.4,1.8,.1),ot(R,$e(),-3.6,3.2,0)}{const z=Jn.studio,R=ie(z,{pitch:.58}),ne=Lt+z.wallH,g=vt("paper");Ye(R,g.g,-2,-1.6);{const fe=new Ee;fe.add(u(new Re(1.6,1.25,.08),o.wood)),fe.add(p(new Nt(new qt(1.45,1.1),new Cn({map:a.moodboard,toneMapped:!1})),0,0,.05)),xt(R,"N",fe,1.6,Lt+1.75,.08)}Ye(R,$(1.2,.7,.74,o.woodL),2.6,-2,.1);for(const[fe,Se,Oe]of[[-.35,-.1,"#3f5f8f"],[0,.12,l.red],[.32,-.05,l.gold],[.12,-.2,"#5f8a52"]])Ye(R,p(u(new nt(.08,.09,.16,12),d(Oe)),0,.08,0),2.6+fe,-2+Se).position.y=Lt+.78;for(let fe=0;fe<3;fe++){const Se=p(u(new Re(.8,.6,.04),d(A(["#efe4cc","#e2d4b6"]))),0,.3,0);Se.rotation.x=-.22,Ye(R,Se,3.7-fe*.1,1.4+fe*.12,-Zt/2)}Ye(R,Ve(1.1),3.8,2.8),Ye(R,Ve(.9),-3.8,2.9),Ye(R,st(1.6),-z.w/2+Mn/2+.27,.6,Zt/2),xt(R,"E",ee(.9,1.5),.6,ne-.3,.04);const[P,B,Y,G]=z.deck;R.g.add(p(u(I(new Re(B-P,.2,G-Y),2.6),d("#ffffff",{map:a.planks})),(P+B)/2,.1,(Y+G)/2));const ue=p(new Ee,0,.2,0);R.g.add(ue),Ce(ue,[[P,Y+.1],[P,G],[-2,G]],.85),Ce(ue,[[3.4,G],[B,G],[B,Y+.1]],.85),m(ue,D(),-1.5,5.3,Math.atan2(-2.4- -1.5,6.2-5.3)),m(ue,rt(1.6,!0),3,4.4,0),m(ue,Ve(1),-3.7,4),m(ue,Ve(.8),3.8,7.1),m(ue,tt(0),-3.9,7.3),m(ue,p(u(new nt(.16,.14,.3,10),o.wood),0,.15,0),-3,5),m(ue,p(u(new nt(.14,.12,.26,10),o.red),0,.13,0),-2.7,4.6);for(let fe=0;fe<14;fe++)ht(R,p(u(new Xt(.14,8,6),d(A([l.red,l.bone,"#d98a3a",l.redL]))),0,.14,0),S(-3.5,3.5),S(-5.2,-4.2));ht(R,We(2),4.9,-4.6)}const te=vt("screen"),he=vt("screen");{const z=Jn.workshop,R=ie(z,{pitch:.6,chimney:[-4,-1.6]}),ne=Lt+z.wallH;Ye(R,te.g,-3,-1.4),Ye(R,he.g,2,-1.4),Ye(R,Ue(),-5,2.6);{const g=new Ee;for(const P of[.9,1.5])g.add(p(u(new Re(2.4,.06,.4),o.wood),0,P,0));for(const P of[-1,1])g.add(p(u(new Re(.06,1.7,.4),o.woodD),P*1.2,.85,0));for(let P=0;P<7;P++)g.add(p(Je(A(["#5fb8c8","#8fbf5a","#d98a3a","#9a7ac8","#5fe0d0"])),-1+P*.32,.93+P%2*.6,0));g.add(p(k(.14),.9,1.65,0)),Ye(R,g,-.5,-z.d/2+Mn/2+.25)}{const g=$(2,.8,.86,o.woodD);g.add(p(qe(),.4,.9,0)),g.add(v(p(u(new nt(.02,.02,.4,6),o.wood),-.5,.92,.1),Zt/2,0,.4)),Ye(R,g,3.9,-3.2)}{const g=new Ee;g.add(p(u(new Re(.9,.8,.8),o.iron),0,.4,0)),g.add(p(u(new qt(.4,.3),f("#ff7a2a",1.8),!1),0,.35,.41)),g.add(p(u(new nt(.1,.1,2.2,8),o.iron),0,1.9,-.2)),Ye(R,g,-5.2,.7,Zt/2)}for(const[g,P,B,Y]of[[4.2,1.7,.4,l.gold],[3.5,1.35,.26,l.ironL]]){const G=new Ee;G.add(v(u(new nt(B,B,.1,18),d(Y)),Zt/2,0,0));for(let ue=0;ue<10;ue++){const fe=ue/10*Zt*2;G.add(p(u(new Re(.12,.12,.1),d(Y)),Math.cos(fe)*(B+.05),Math.sin(fe)*(B+.05),0))}xt(R,"N",G,g,Lt+P,.1),w.push({o:G,axis:"z",v:Y===l.gold?.6:-.9})}xt(R,"W",ae(4),-1.2,Lt,.3),xt(R,"S",ee(1,1.7),-2.4,ne-.3,.04),xt(R,"S",pe(l.red),2.6,Lt+1.8,.1),Ye(R,me(),-5.2,-3.2),Ye(R,at(.6),-4.6,-3.4,.3),Ye(R,at(.6),5,3.2,.2),Ye(R,Ge(),4.3,3.4),Le("dirt",...en(z,0,6.2),6.6,2.8,-z.ry,.013),ht(R,et(2.6),-2.6,5.4),ht(R,Ae(),2.6,6.2,.4);{const g=new Ee;g.add(p(u(new nt(.4,.45,.6,12),o.woodL),0,.3,0)),g.add(v(p(u(new nt(.03,.03,.7,6),o.woodD),.1,.8,0),0,0,.5)),g.add(v(p(u(new Re(.26,.18,.04),o.ironL),-.08,1.1,0),0,0,.5)),ht(R,g,-5,5.6)}ht(R,me(),5.2,5),ht(R,me(.85),5.8,5.6),ht(R,We(2.4),-6.6,6.8),ht(R,we(0,.9),7.4,-1.4)}let xe;{const z=Jn.tavern,R=ie(z,{pitch:.6,chimney:[-1.5,-3.1],stairHole:[-5.34,-4.44,-2.8,-.5]}),ne=Lt+z.wallH;{const g=new Ee;g.add(p(u(new Re(.9,1.1,5),o.wood),0,.55,0)),g.add(p(u(new Re(1.1,.08,5.2),o.woodL),0,1.14,0));for(let B=0;B<5;B++)g.add(p(u(new Re(.02,.9,.9),o.woodD),-.46,.5,-2+B));for(let B=0;B<6;B++)g.add(p(Je(A(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f"])),S(-.2,.2),1.18,-2.2+B*.8));g.add(p(k(.2),0,1.3,2.3)),Ye(R,g,4.1,-.6);const P=new Ee;for(const B of[1.5,2])P.add(p(u(new Re(.3,.05,4),o.wood),0,B,0));for(let B=0;B<10;B++)P.add(p(Je(A(["#4f7a4a","#8a2a24","#b08a3e","#3f5f8f","#5fb8c8"])),0,B%2?2.03:1.53,-1.8+B*.4));Ye(R,P,5.12,-.6),Ye(R,me(.9,!0),4.85,2.6,Zt/2),Ye(R,me(.9,!0),4.85,3.4,Zt/2)}{const g=new Ee;g.add(p(u(I(new Re(2.6,2,.9),1.4),o.stone),0,1,0)),g.add(p(u(new Re(2.9,.18,1.1),o.wood),0,2.05,.05)),g.add(p(u(new qt(1.2,.8),f("#ff7a2a",2),!1),0,.55,.46)),g.add(p(Qe(),0,0,.85)),g.add(p(k(.22),0,2.32,.1)),xe=new $i("#ff9a4a",12,9,2),xe.position.set(0,.9,1.2),g.add(xe),re(g,0,.3,.3,1.4),Ye(R,g,-1.5,-z.d/2+Mn/2+.46)}Ye(R,je(),-2.2,.8),Ye(R,He(),-3.1,.8),Ye(R,He(),-1.3,.8),Ye(R,je(.65),1,2.3),Ye(R,He(),.1,2.3),Ye(R,He(),1.9,2.3),Ye(R,He(),1,3.2);for(const[g,P]of[[-2.4,.6],[-1.9,1],[1.2,2.1],[.8,2.5]])Ye(R,Te(),g,P).position.y=Lt+.8;Ye(R,He(),3.2,-2.4),xt(R,"N",Z(),2.6,Lt+2.1,.1),xt(R,"S",pe(l.black),-3,Lt+1.9,.1),xt(R,"S",ee(.9,1.6),1.6,ne-.3,.04),xt(R,"W",Z(),-2.6,Lt+2.2,.1),Le("dirt",...en(z,-.5,6.4),4.8,2.6,-z.ry,.013),ht(R,$(3.6,.9,.8,o.woodL),.4,6.55),ht(R,rt(3.6,!1),.4,5.75),ht(R,rt(3.6,!1),.4,7.35,Zt);for(const[g,P]of[[-.6,6.4],[.8,6.7],[1.6,6.4]])ht(R,Te(),g,P).position.y=.84;Ce(R.g,[[-4.6,6.6],[-4.6,8.6],[3.6,8.6],[3.6,4.3]],.9);for(const[g,P]of[[-4.6,8.6],[3.6,8.6],[3.6,4.3]])ht(R,p(u(new nt(.06,.08,2.6,6),o.woodD),0,1.3,0),g,P);ce(R.g,[[-4.6,8.6],[3.6,8.6],[3.6,4.3]],2.5,.35),ht(R,me(),3,5.2),ht(R,me(.8,!0),2.6,7.9,.3),ht(R,L("TAVERN"),-6.4,3.6,-Zt/2),ht(R,We(2.2),-8.4,5.6),le(R,-4.89,-3.6,-.6,.9),Rt(R.upper.U,[[-4.44,-.5],[-4.44,-2.8],[-5.34,-2.8]],.2);for(const[g,P]of[[-2.6,l.red],[.8,"#3f5f8f"],[4,l.redD]])ot(R,y(P),g,-2.75),ot(R,$e(),g+.95,-3.4,Zt/2).scale.setScalar(.7),ot(R,J(.8,1.6),g-.5,-1.35),ot(R,Mt(.16),g-.62,-3.55);for(const g of[-.9,2.4])ot(R,ye(2.5),g,-2.6);{const g=u(new qt(8.6,1.1),d(l.redD),!1);g.rotation.x=-Zt/2,ot(R,g,.4,.9).position.y=.212}ot(R,ge(),.8,3.45,Zt),ot(R,rt(1.6,!0),2.8,3.4,Zt),ot(R,$(.9,.7,.8,o.woodL),4.4,1.6),ot(R,He(),4.4,2.4),ot(R,Mt(.16,0),4.5,1.5).position.y=1;{const g=new Ee;g.add(p(u(new nt(.06,.12,.8,8),o.woodD),0,.4,0)),g.add(p(u(new nt(.28,.2,.14,14),d("#b8b0a8")),0,.86,0)),g.add(v(p(u(new li(.24,14),d("#5f8fa8"),!1),0,.92,0),-Zt/2,0,0)),ot(R,g,-2.2,3.3)}ot(R,Ve(.9),-3.6,3.3),_t(R,"S",pe(l.red),-1.2,1.7,.1),_t(R,"E",ee(.9,1.5),1.6,2.5,.04)}return{HOUSES:Fe,buildHouse:ie,inH:Ye,outH:ht,onWall:xt,W2:en,deskF:te,deskB:he,hearthLight:xe,drawBoard:C}}const _r=new W;function ei(s,e,t,n,i,r){const o=2*Math.PI*i/4,l=Math.max(r-2*i,0),a=Math.PI/4;_r.copy(e),_r[n]=0,_r.normalize();const c=.5*o/(o+l),h=1-_r.angleTo(s)/a;return Math.sign(_r[t])===1?h*c:l/(o+l)+c+c*(1-h)}class ma extends Re{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const a=new W,c=new W,h=new W(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,v=new W,m=.5/o;for(let _=0,S=0;_<d.length;_+=3,S+=2)switch(a.fromArray(d,_),c.copy(a),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[_+0]=h.x*Math.sign(a.x)+c.x*r,d[_+1]=h.y*Math.sign(a.y)+c.y*r,d[_+2]=h.z*Math.sign(a.z)+c.z*r,f[_+0]=c.x,f[_+1]=c.y,f[_+2]=c.z,Math.floor(_/p)){case 0:v.set(1,0,0),u[S+0]=ei(v,c,"z","y",r,n),u[S+1]=1-ei(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),u[S+0]=1-ei(v,c,"z","y",r,n),u[S+1]=1-ei(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),u[S+0]=1-ei(v,c,"x","z",r,e),u[S+1]=ei(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[S+0]=1-ei(v,c,"x","z",r,e),u[S+1]=1-ei(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[S+0]=1-ei(v,c,"x","y",r,e),u[S+1]=1-ei(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),u[S+0]=ei(v,c,"x","y",r,e),u[S+1]=1-ei(v,c,"y","x",r,t);break}}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.segments,e.radius)}}const{PI:Ni}=Math,Fn={woodD:"#3f2820",wood:"#5c3b2a",woodL:"#7d5538",timber:"#3a2419",iron:"#3b3437",ironL:"#5a5254",rust:"#7a4128",bone:"#e3d5b6",boneD:"#b9a988",redD:"#5e1717",red:"#8a2420",redL:"#a63a2a",black:"#262022",gold:"#c79a45",stone:"#7b706a",stoneD:"#5d5550",straw:"#c9a75a",leaf:"#55804a",leafD:"#3f6a40",leafL:"#6e9452",autumn1:"#a5432c",autumn2:"#c0652f",autumn3:"#8a3426"};function AM(s,e,t,n){s.setPixelRatio(Math.min(n,2)),s.setSize(e,t),s.shadowMap.enabled=!0,s.shadowMap.type=wr,s.toneMapping=oa,s.toneMappingExposure=.95}function Cu(s){let e=s;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function RM(s,e){const t=new ca(new Uint8Array([70,150,255]),3,1,aa);t.minFilter=t.magFilter=xn,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new Cn({color:2824987,side:Nn}),i=0,r=1,o=new W(0,1,0),l={uRimColor:{value:new gt("#ffd2a6")},uRimAmt:{value:.45}};function a(x){return x.onBeforeCompile=V=>{V.uniforms.uRimColor=l.uRimColor,V.uniforms.uRimAmt=l.uRimAmt,V.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimAmt;
`+V.fragmentShader.replace("#include <opaque_fragment>",`float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
outgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);
#include <opaque_fragment>`)},x.customProgramCacheKey=()=>"rim1",x}const c=new Map;function h(x,V){if(!V){let X=c.get(x);return X||(X=a(new Ho({color:x,gradientMap:t})),c.set(x,X)),X}return a(new Ho(Object.assign({color:x,gradientMap:t},V)))}const d=new Map;function f(x,V=2){const X=x+V;let O=d.get(X);return O||(O=new Ys({color:0,emissive:x,emissiveIntensity:V,roughness:1}),d.set(X,O)),O}function u(x,V,X=!0){V&&V.userData.autoUV&&x.attributes.uv&&!x.userData.planar&&(x.type==="BoxGeometry"||x.type==="RoundedBoxGeometry")&&(j(x,.9),x.userData.planar=!0);const O=new Nt(x,V);return O.castShadow=X,O.receiveShadow=!0,O}const p=(x,V,X,O=.03)=>new ma(x,V,X,2,Math.min(O,x/2.1,V/2.1,X/2.1));function v(x,V,X=i,O=!0){const ie=u(x,V,O);if(X){const le=new Nt(x,n);le.scale.setScalar(1+X*r),le.raycast=()=>{},ie.add(le)}return ie}function m(x,V,X,O){return x.position.set(V,X,O),x}function _(x,V,X,O){return x.rotation.set(V,X,O),x}function S(x,V,X,O,ie=0,le=0){return V.position.set(X,le,O),V.rotation.y=ie,x.add(V),V}function A(x,V,X,O,ie,le,Be=i*1.6,ct=7){const _t=X.clone().normalize(),ot=v(new mn(ie,O,ct),le,Be);return ot.quaternion.setFromUnitVectors(o,_t),ot.position.copy(V).addScaledVector(_t,O*.45),x.add(ot),ot}const T=Cu(20261116),I=(x,V)=>x+(V-x)*T(),N=x=>x[Math.floor(T()*x.length)],M=Cu(777),w=(x,V)=>x+(V-x)*M();function k(x,V,X,O){const ie=document.createElement("canvas");ie.width=x,ie.height=V;const le=ie.getContext("2d");le&&X(le,x,V);const Be=new Wl(ie);return Be.colorSpace=yn,Be.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),Be.wrapS=Be.wrapT=si,O&&Be.repeat.set(O[0],O[1]),Be}function H(x,V,X){const O=x.clone();return O.wrapS=O.wrapT=si,O.repeat.set(V,X),O.needsUpdate=!0,O}function j(x,V=1,X=V){const O=x.attributes.position,ie=x.attributes.normal,le=x.attributes.uv;for(let Be=0;Be<O.count;Be++){const ct=Math.abs(ie.getX(Be)),_t=Math.abs(ie.getY(Be)),ot=Math.abs(ie.getZ(Be));let Rt,xt;_t>=ct&&_t>=ot?(Rt=O.getX(Be),xt=O.getZ(Be)):ct>=ot?(Rt=O.getZ(Be),xt=O.getY(Be)):(Rt=O.getX(Be),xt=O.getY(Be)),le.setXY(Be,Rt/V,xt/X)}return le.needsUpdate=!0,x}function re(x,V,X,O=0,ie=V){const le=x.attributes.position,Be=x.attributes.normal,ct=x.attributes.uv;for(let _t=0;_t<le.count;_t++){const ot=Math.abs(Be.getX(_t)),Rt=Math.abs(Be.getZ(_t)),xt=(ot>Rt?le.getZ(_t):le.getX(_t))/X;ct.setXY(_t,xt,(le.getY(_t)+V/2+O)/ie)}return ct.needsUpdate=!0,x}const $=new At,U=new Wn,se=new wi,oe=new W,Z=new W,ee=new gt;function ae(x,V,X={}){if(!V.length)return null;const O=X.mat||a(new Ho({color:16777215,gradientMap:t})),ie=new Gr(x,O,V.length);return ie.castShadow=!!X.cast,ie.receiveShadow=X.receive!==!1,V.forEach((le,Be)=>{le.m?$.copy(le.m):(se.set(le.rx||0,le.ry||0,le.rz||0),U.setFromEuler(se),oe.set(le.x??0,le.y??0,le.z??0),Z.set(le.sx??1,le.sy??1,le.sz??1),$.compose(oe,U,Z)),ie.setMatrixAt(Be,$),(!X.mat||X.colors)&&ie.setColorAt(Be,ee.set(le.c||"#ffffff"))}),ie.instanceMatrix.needsUpdate=!0,ie.instanceColor&&(ie.instanceColor.needsUpdate=!0),ie.computeBoundingSphere(),(X.parent||e).add(ie),ie}const pe=new Re(1,1,1);function we(x,V,X,O=!0){return X.length?ae(pe,X.map(([ie,le,Be,ct,_t,ot,Rt=0,xt=0,Ye=0])=>({x:ie,y:le,z:Be,sx:ct,sy:_t,sz:ot,rx:Rt,ry:xt,rz:Ye})),{mat:V,parent:x,cast:O}):null}function $e(x,V,X,O,ie,le,Be,ct){for(let _t=0;_t<ie;_t++){const ot=w(0,V),Rt=w(0,X),xt=w(le,Be);for(const[Ye,ht]of[[0,0],[V,0],[-V,0],[0,X],[0,-X]]){const en=x.createRadialGradient(ot+Ye,Rt+ht,0,ot+Ye,Rt+ht,xt),fn=O[Math.floor(M()*O.length)];en.addColorStop(0,fn+ct),en.addColorStop(1,fn+"00"),x.fillStyle=en,x.fillRect(ot+Ye-xt,Rt+ht-xt,xt*2,xt*2)}}}function at(x,V,X,O=.16){x.globalCompositeOperation="destination-in";const ie=x.createLinearGradient(0,0,V,0);ie.addColorStop(0,"rgba(0,0,0,0)"),ie.addColorStop(O,"rgba(0,0,0,1)"),ie.addColorStop(1-O,"rgba(0,0,0,1)"),ie.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=ie,x.fillRect(0,0,V,X),x.globalCompositeOperation="source-over"}function me(x,V,X,O,ie,le,Be,ct,_t,ot,Rt){for(let xt=X;xt<ie;xt+=le){let Ye=V-w(0,ct);for(;Ye<O;){const ht=w(Be,ct);x.fillStyle=_t[Math.floor(M()*_t.length)],x.beginPath(),x.roundRect(Ye+ot,xt+ot,ht-ot*2,le-ot*2,Rt),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Ye+ot*2,xt+ot*1.5,ht-ot*4,3),Ye+=ht}}}function He(x,V,X,O,ie,le,Be,ct,_t){const ot=X/O;for(let Rt=0;Rt<O;Rt++){const xt=Rt*ot;let Ye=w(0,le);const ht=Ye;for(;Ye<ht+V;){const en=Math.min(w(ie,le),ht+V-Ye);if(en<ie*.5)break;const fn=Be[Math.floor(M()*Be.length)];for(const un of[0,-V])x.fillStyle=fn,x.beginPath(),x.roundRect(Ye+un+ct,xt+ct,en-ct*2,ot-ct*2,_t),x.fill(),x.fillStyle="rgba(255, 240, 220, 0.10)",x.fillRect(Ye+un+ct*2,xt+ct*1.5,en-ct*4,3);Ye+=en}}}function it(x,V,X,O){for(let ie=0;ie<8;ie++){let le=-w(0,200);for(;le<V;){const Be=w(160,340);x.fillStyle=O[Math.floor(M()*O.length)],x.fillRect(le,ie*64,Be,64),x.strokeStyle="rgba(255, 230, 200, 0.06)",x.lineWidth=2;for(let ct=0;ct<3;ct++){const _t=ie*64+w(10,54);x.beginPath(),x.moveTo(le+6,_t),x.bezierCurveTo(le+Be*.3,_t+w(-4,4),le+Be*.6,_t+w(-4,4),le+Be-6,_t),x.stroke()}x.fillStyle="rgba(20, 10, 6, 0.4)",x.fillRect(le,ie*64,3,64),x.fillStyle="rgba(20, 10, 6, 0.35)",x.beginPath(),x.arc(le+10,ie*64+14,2.5,0,Ni*2),x.arc(le+10,ie*64+50,2.5,0,Ni*2),x.fill(),le+=Be}x.fillStyle="rgba(20, 10, 6, 0.45)",x.fillRect(0,ie*64,V,3)}}const Ze=(x,V,X)=>{const O=x.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,V),O.addColorStop(1,X),x.fillStyle=O,x.fillRect(0,0,64,64)},We=k(512,512,(x,V,X)=>{x.fillStyle="#6f8b49",x.fillRect(0,0,V,X),$e(x,V,X,["#7b9752","#64803f","#86a05a","#6a8443"],90,30,90,"55");for(let O=0;O<900;O++){x.strokeStyle=M()<.5?"rgba(140, 170, 95, 0.35)":"rgba(80, 105, 55, 0.3)",x.lineWidth=2;const ie=w(0,V),le=w(0,X);x.beginPath(),x.moveTo(ie,le),x.lineTo(ie+w(-2,2),le-w(5,10)),x.stroke()}}),et=k(256,256,(x,V,X)=>{x.fillStyle="#8b6a4b",x.fillRect(0,0,V,X),$e(x,V,X,["#977556","#7e5f43","#a07e5c"],40,15,50,"66");for(let O=0;O<120;O++)x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.35)":"rgba(190, 160, 120, 0.35)",x.beginPath(),x.ellipse(w(0,V),w(0,X),w(1.5,4),w(1,3),w(0,3),0,Ni*2),x.fill()}),Ot=k(256,256,(x,V,X)=>{x.fillStyle="#b0906a",x.fillRect(0,0,V,X),$e(x,V,X,["#bb9c76","#a5865f","#c0a27b"],40,20,60,"55");for(let O=0;O<160;O++)x.fillStyle="rgba(120, 90, 60, 0.25)",x.fillRect(w(0,V),w(0,X),2,2)}),st=k(512,512,(x,V,X)=>{x.fillStyle="#5b524c",x.fillRect(0,0,V,X),He(x,V,X,16,26,46,["#8d837a","#80766e","#968b81","#7a7068","#887e75"],2.5,10)}),vt=k(512,512,(x,V,X)=>{x.fillStyle="#6a6058",x.fillRect(0,0,V,X),He(x,V,X,8,60,130,["#9b9086","#a69b90","#8f857c","#b0a497"],3,6)}),Mt=k(512,512,(x,V,X)=>{x.fillStyle="#8f6c4b",x.fillRect(0,0,V,X),$e(x,V,X,["#9a7756","#80603f","#a38160"],80,20,60,"55");for(let O=0;O<260;O++){const ie=w(6,V-6),le=w(6,X-6);x.fillStyle=M()<.5?"rgba(70, 50, 35, 0.4)":"rgba(200, 175, 140, 0.4)",x.beginPath(),x.ellipse(ie,le,w(1.5,4),w(1,3),0,0,Ni*2),x.fill()}}),Ce=k(256,512,(x,V,X)=>{const O=[["#4f6e3c",.05],["#5a4030",.08],["#7a5a42",.12],["#8a6a4e",.1],["#6e5040",.14],["#957258",.1],["#76584a",.16],["#5f4a40",.25]];let ie=0;for(const[le,Be]of O)x.fillStyle=le,x.fillRect(0,ie,V,Be*X+2),ie+=Be*X;$e(x,V,X,["#3e2c22","#a07e60","#5a4a44"],60,6,22,"40");for(let le=0;le<40;le++){x.strokeStyle="rgba(40, 26, 18, 0.35)",x.lineWidth=2;const Be=w(0,V),ct=w(.15*X,X);x.beginPath(),x.moveTo(Be,ct),x.lineTo(Be+w(-10,10),ct+w(10,40)),x.stroke()}x.fillStyle="#5a7a44";for(let le=0;le<V;le+=6)x.beginPath(),x.moveTo(le,0),x.lineTo(le+3,w(14,34)),x.lineTo(le+6,0),x.fill()}),Ve=k(256,128,(x,V,X)=>{x.fillStyle="#7a2420",x.fillRect(0,0,V,X);for(let O=0;O<8;O++)x.fillStyle=O%2?"#8a2a24":"#6a1e1a",x.fillRect(O*32,0,32,X);x.fillStyle="#e3d5b6",x.fillRect(0,X*.46,V,X*.08),x.fillStyle="#2a2224",x.fillRect(0,X*.43,V,3),x.fillRect(0,X*.57,V,3)}),Qe=k(256,256,(x,V,X)=>{for(let O=0;O<2;O++)x.fillStyle=["#a59a8c","#958a7d"][O],x.beginPath(),x.ellipse(V/2+w(-20,20),X*(.25+O*.5),V*.32,X*.17,w(-.3,.3),0,Ni*2),x.fill()}),rt=k(512,512,(x,V,X)=>{x.fillStyle="#5f5650",x.fillRect(0,0,V,X),me(x,0,0,V,X,64,64,128,["#8a8076","#958a80","#7f756c","#9d9287"],3,8)}),tt=k(512,512,(x,V,X)=>it(x,V,X,["#5a3a2a","#4e3224","#62402e","#553728"])),St=k(512,512,(x,V,X)=>it(x,V,X,["#4a3226","#553a2b","#3f2a20","#4e3428"])),lt=k(512,512,(x,V,X)=>it(x,V,X,["#a17a55","#94704d","#ab845e","#9a7552"])),Ie=k(512,512,(x,V,X)=>it(x,V,X,["#7a5236","#6e4a31","#84593b","#734d33"])),Ue=k(512,512,(x,V,X)=>{x.fillStyle="#3f3a3a",x.fillRect(0,0,V,X);for(let O=0;O<4;O++)for(let ie=0;ie<4;ie++)x.fillStyle=["#5f5958","#575151","#676060","#5b5454"][(ie+O*3)%4],x.beginPath(),x.roundRect(ie*128+4,O*128+4,120,120,6),x.fill(),x.fillStyle="rgba(255,255,255,0.05)",x.fillRect(ie*128+10,O*128+10,108,6)}),ze=k(512,512,(x,V,X)=>{x.fillStyle="#4f4843",x.fillRect(0,0,V,X),me(x,0,0,V,X,64,70,140,["#7b706a","#857a72","#72675f","#8a7f76","#6d635c"],3,9)}),D=k(512,512,(x,V,X)=>{x.fillStyle="#4a433f",x.fillRect(0,0,V,X),me(x,0,0,V,X,85,110,200,["#746a63","#7e736b","#6a605a","#82766d"],4,10),$e(x,V,X,["#3e5a34","#4a3a30"],14,20,60,"30")}),Je=k(512,512,(x,V,X)=>{for(let O=0;O<8;O++)x.fillStyle=["#4f3124","#5a3829","#472c21","#553426"][O%4],x.fillRect(O*64,0,64,X),x.fillStyle="rgba(25, 14, 10, 0.45)",x.fillRect(O*64,0,3,X),x.fillStyle="rgba(255, 220, 190, 0.05)",x.fillRect(O*64+8,0,3,X);x.fillStyle="#7a2320",x.fillRect(0,34,V,70),x.strokeStyle="#d9c9a6",x.lineWidth=6,x.lineJoin="round",x.beginPath();for(let O=0;O<=V;O+=32)x.lineTo(O,O%64?52:86);x.stroke()}),qe=k(256,256,(x,V,X)=>{x.fillStyle="#4e1612",x.fillRect(0,0,V,X);for(let O=0;O<8;O++){const ie=O%2?16:0;for(let le=-32;le<V+32;le+=32)x.fillStyle=["#7a2820","#842d22","#6f241d","#8c3226"][Math.floor(M()*4)],x.beginPath(),x.roundRect(le+ie+1,O*32+2,30,30,[2,2,12,12]),x.fill(),x.fillStyle="rgba(255, 200, 170, 0.12)",x.fillRect(le+ie+5,O*32+5,22,3);x.fillStyle="rgba(30, 6, 6, 0.35)",x.fillRect(0,O*32,V,3)}}),Ge=k(256,256,(x,V,X)=>{for(let O=0;O<4;O++)x.fillStyle=["#5a2a1f","#652f22","#552719","#5f2d20"][O],x.fillRect(O*64,0,64,X),x.fillStyle="rgba(20, 8, 6, 0.45)",x.fillRect(O*64,0,3,X)}),Ae=k(256,512,(x,V,X)=>{x.fillStyle="#6e1a19",x.fillRect(0,0,V,X),x.fillStyle="#2a1e1f",x.fillRect(0,0,V,26),x.fillRect(0,0,14,X),x.fillRect(V-14,0,14,X),x.fillStyle="#b08a3e",x.fillRect(0,26,V,6),x.fillStyle="#e3d5b6",x.beginPath(),x.moveTo(52,300),x.lineTo(204,300),x.lineTo(188,332),x.lineTo(156,332),x.lineTo(164,368),x.lineTo(196,368),x.lineTo(196,396),x.lineTo(60,396),x.lineTo(60,368),x.lineTo(92,368),x.lineTo(100,332),x.lineTo(68,332),x.closePath(),x.fill(),x.beginPath(),x.moveTo(128,120),x.bezierCurveTo(168,164,176,192,164,216),x.bezierCurveTo(152,236,104,236,92,216),x.bezierCurveTo(80,192,100,176,112,152),x.bezierCurveTo(120,168,124,172,132,176),x.bezierCurveTo(132,160,128,140,128,120),x.fill(),x.fillStyle="#6e1a19",x.beginPath(),x.moveTo(0,X),x.lineTo(V/2,X-60),x.lineTo(V,X),x.fill()}),je=k(64,256,(x,V,X)=>{x.fillStyle="#6fa9c9",x.fillRect(0,0,V,X);for(let O=0;O<40;O++)x.fillStyle=O%3?"rgba(230, 245, 250, 0.4)":"rgba(40, 90, 120, 0.25)",x.fillRect(O*23%64,O*41%256,3+O%3*2,18+O%5*10)}),Te=k(128,128,(x,V,X)=>{x.fillStyle="#c4c4c4",x.fillRect(0,0,V,X);for(let O=0;O<70;O++){const ie=O*37%V,le=(O*59+O%7*11)%X,Be=4+O%4*3;x.fillStyle=O%4?"rgba(255, 255, 255, 0.55)":"rgba(90, 90, 90, 0.35)",x.beginPath(),x.ellipse(ie,le,Be,1.2+O%3*.5,O*.7%3.14,0,2*Math.PI),x.fill(),ie+Be>V&&(x.beginPath(),x.ellipse(ie-V,le,Be,1.4,O*.7%3.14,0,2*Math.PI),x.fill())}}),ce=k(256,180,(x,V,X)=>{x.fillStyle="#efe4cc",x.fillRect(0,0,V,X),x.strokeStyle="#4f76b0",x.lineWidth=3,x.strokeRect(20,20,216,30),x.strokeRect(20,62,66,46),x.strokeRect(95,62,66,46),x.strokeRect(170,62,66,46),x.strokeRect(20,120,216,42),x.strokeStyle="#b8483e",x.beginPath(),x.moveTo(26,150),x.lineTo(80,132),x.lineTo(130,145),x.lineTo(226,126),x.stroke()}),L=k(256,200,(x,V,X)=>{const O=x.createLinearGradient(0,0,0,X);O.addColorStop(0,"#d98a62"),O.addColorStop(1,"#f2d2a8"),x.fillStyle=O,x.fillRect(0,0,V,X),x.fillStyle="#5c6f48",x.beginPath(),x.moveTo(0,150),x.quadraticCurveTo(80,100,150,140),x.quadraticCurveTo(210,120,256,135),x.lineTo(256,200),x.lineTo(0,200),x.fill(),x.fillStyle="#4a3a3c",x.fillRect(150,70,44,72),x.fillStyle="#7a2420",x.beginPath(),x.moveTo(144,72),x.lineTo(172,40),x.lineTo(200,72),x.fill(),x.fillStyle="#ffd27a",x.fillRect(165,92,14,18)}),y=k(256,200,x=>{x.fillStyle="#c8b18a",x.fillRect(0,0,256,200),["#ee8a45","#2b3a36","#efe4cc","#8a2420","#5f8a52","#3f5f8f"].forEach((V,X)=>{x.fillStyle=V,x.fillRect(16+X%3*78,16+Math.floor(X/3)*60,66,48)}),x.fillStyle="#efe4cc",x.fillRect(16,140,224,44),x.fillStyle="#2b3a36",x.fillRect(28,152,120,8),x.fillRect(28,166,80,6)}),J=k(256,160,(x,V,X)=>{x.fillStyle="rgba(40, 200, 220, 0.18)",x.fillRect(0,0,V,X);const O=["#bff8ff","#7fe0ff","#ffd27a","#ff9ec7"];for(let ie=0;ie<9;ie++)x.fillStyle=O[ie%4],x.fillRect(18+ie%3*12,18+ie*14,40+ie*53%140,6)}),ye=k(256,128,(x,V,X)=>{x.fillStyle="#3d6f99",x.fillRect(0,0,V,X),x.fillStyle="#8aa866";for(const[O,ie,le,Be]of[[50,50,30,20],[70,80,14,22],[140,40,36,18],[160,70,20,24],[210,90,22,12]])x.beginPath(),x.ellipse(O,ie,le,Be,.3,0,Ni*2),x.fill()}),ge=k(128,128,(x,V,X)=>{x.fillStyle="#c9a75a",x.fillRect(0,0,V,X);for(let O=0;O<160;O++){x.strokeStyle=O%2?"rgba(150, 115, 50, 0.5)":"rgba(240, 220, 160, 0.5)",x.lineWidth=2;const ie=w(0,V),le=w(0,X);x.beginPath(),x.moveTo(ie,le),x.lineTo(ie+6,le+2),x.stroke()}}),Le=k(128,128,x=>{["#e8dcc0","#8a2420","#e8dcc0","#3a3436","#c79a45"].forEach((V,X)=>{x.fillStyle=V,x.beginPath(),x.arc(64,64,62-X*12,0,Ni*2),x.fill()})}),Fe=k(256,256,(x,V,X)=>{x.fillStyle="#7a5a3c",x.fillRect(0,0,V,X);for(let O=0;O<8;O++)x.fillStyle=O%2?"#8a9a48":"#a7a24e",x.fillRect(0,O*32+6,V,20)}),_e=k(64,64,x=>Ze(x,"rgba(255,255,255,1)","rgba(255,255,255,0)")),be=k(64,64,x=>Ze(x,"rgba(30,20,20,0.4)","rgba(30,20,20,0)")),Pe=k(64,64,x=>{x.translate(32,32),x.fillStyle="#fff6c8",x.beginPath();for(let V=0;V<8;V++){const X=V%2?9:30,O=V*Ni/4;x.lineTo(Math.cos(O)*X,Math.sin(O)*X)}x.closePath(),x.fill()}),q=k(8,512,(x,V,X)=>{const O=x.createLinearGradient(0,0,0,X);O.addColorStop(0,"#4c6994"),O.addColorStop(.38,"#8ea6c4"),O.addColorStop(.62,"#d8c2a6"),O.addColorStop(.8,"#e2a682"),O.addColorStop(1,"#b8674f"),x.fillStyle=O,x.fillRect(0,0,V,X)});q.wrapS=q.wrapT=zn;const Me={grass:We,dirt:et,sand:Ot,tCobble:st,tFlag:vt,tDirt:Mt,strata:Ce,balloon:Ve,roadStones:Qe,plaza:rt,planksWar:tt,planksDark:St,planksLight:lt,planks:Ie,slate:Ue,stoneWall:ze,castleWall:D,plankWall:Je,roof:qe,gable:Ge,banner:Ae,water:je,ripple:Te,paper:ce,painting:L,moodboard:y,code:J,globe:ye,straw:ge,target:Le,field:Fe,soft:_e,blob:be,spark:Pe,sky:q,grain:void 0};function ve(x,V=2.2){const X=x.image,O=X.width,ie=X.height;if(!(O>0)||!(ie>0))return x;const le=X.getContext("2d");if(!le)return x;const Be=le.getImageData(0,0,O,ie).data,ct=new Float32Array(O*ie);for(let Ye=0;Ye<O*ie;Ye++)ct[Ye]=((Be[Ye*4]??0)*.299+(Be[Ye*4+1]??0)*.587+(Be[Ye*4+2]??0)*.114)/255;const _t=document.createElement("canvas");_t.width=O,_t.height=ie;const ot=_t.getContext("2d");if(!ot)return x;const Rt=ot.createImageData(O,ie);for(let Ye=0;Ye<ie;Ye++)for(let ht=0;ht<O;ht++){const en=ct[Ye*O+(ht-1+O)%O]??0,fn=ct[Ye*O+(ht+1)%O]??0,un=ct[(Ye-1+ie)%ie*O+ht]??0,E=ct[(Ye+1)%ie*O+ht]??0,b=(en-fn)*V,C=(E-un)*V,F=Math.hypot(b,C,1),te=(Ye*O+ht)*4;Rt.data[te]=(b/F*.5+.5)*255,Rt.data[te+1]=(C/F*.5+.5)*255,Rt.data[te+2]=(1/F*.5+.5)*255,Rt.data[te+3]=255}ot.putImageData(Rt,0,0);const xt=new Wl(_t);return xt.wrapS=xt.wrapT=si,xt.colorSpace=Fi,xt.anisotropy=x.anisotropy,xt.repeat.copy(x.repeat),xt}const ke={},Q=(x,V)=>ke[x]||=ve(Me[x],V);function K(x,V=1,X=1,O=2.2,ie={}){const le=V===1&&X===1?Me[x]:H(Me[x],V,X),Be=V===1&&X===1?Q(x,O):H(Q(x,O),V,X);return h("#ffffff",Object.assign({map:le,normalMap:Be,normalScale:new Ne(1,1)},ie))}Me.grain=k(256,256,(x,V,X)=>{x.fillStyle="#d6cbbf",x.fillRect(0,0,V,X);for(let O=0;O<70;O++){x.strokeStyle=M()<.5?"rgba(90, 60, 40, 0.18)":"rgba(255, 245, 230, 0.16)",x.lineWidth=w(1,3);const ie=w(0,V);x.beginPath(),x.moveTo(ie,0),x.bezierCurveTo(ie+w(-8,8),X*.3,ie+w(-8,8),X*.7,ie+w(-4,4),X),x.stroke()}for(let O=0;O<6;O++){const ie=w(10,V-10),le=w(10,X-10);x.strokeStyle="rgba(80, 50, 30, 0.3)",x.lineWidth=2,x.beginPath(),x.ellipse(ie,le,w(3,6),w(8,14),0,0,Ni*2),x.stroke()}});const de=x=>{const V=h(x,{map:Me.grain,normalMap:Q("grain",1.5)});return V.userData.autoUV=!0,V},De={stone:K("stoneWall",1,1,2),castle:K("castleWall",1,1,2),plankWall:K("plankWall",1,1,1.4),timber:h(Fn.timber),wood:de(Fn.wood),woodD:de(Fn.woodD),woodL:de(Fn.woodL),iron:h(Fn.iron),ironL:h(Fn.ironL),rust:h(Fn.rust),bone:h(Fn.bone),boneD:h(Fn.boneD),red:h(Fn.red),redD:h(Fn.redD),redL:h(Fn.redL),black:h(Fn.black),gold:h(Fn.gold),straw:h("#ffffff",{map:Me.straw}),pane:f("#ffbf73",.85),fire:f("#ff8a2a",2.6),fireCore:f("#ffd88a",3.2),dark:h("#2a1a1a")};return{scene:e,renderer:s,COL:Fn,GRAD:t,INK:n,DEF_INK:i,INK_K:r,UP:o,rimify:a,toon:h,glow:f,mesh:u,rbox:p,part:v,at:m,rot:_,put:S,spike:A,rnd:T,rr:I,pick:N,trnd:M,tr:w,canvasTex:k,blobs:$e,edgeFade:at,tiled:H,planarUV:j,wallUV:re,instanced:ae,boxes:we,UNIT_BOX:pe,TEX:Me,nrm:Q,relief:K,woodMat:de,M:De,_c:ee}}const{PI:sn}=Math;function Oo(s,e,t){let n=1e9;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[l,a]=t[i+1],c=l-r,h=a-o,d=c*c+h*h||1,f=Math.max(0,Math.min(1,((s-r)*c+(e-o)*h)/d));n=Math.min(n,Math.hypot(s-r-c*f,e-o-h*f))}return n}function Pu(s,e,t,n){const i=t?[...s,s[0]]:s,r=[],o=[],l=[];let a=0;for(let h=0;h<i.length;h++){const d=i[Math.max(0,h-1)],f=i[Math.min(i.length-1,h+1)];let u=f[0]-d[0],p=f[1]-d[1];if(t&&(h===0||h===i.length-1)){const A=s[s.length-1],T=s[1];u=T[0]-A[0],p=T[1]-A[1]}const v=Math.hypot(u,p)||1,m=-p/v,_=u/v,S=i[h];if(h>0){const A=i[h-1];a+=Math.hypot(S[0]-A[0],S[1]-A[1])}if(r.push(S[0]+m*e/2,n,S[1]+_*e/2,S[0]-m*e/2,n,S[1]-_*e/2),o.push(0,a,1,a),h>0){const A=h*2;l.push(A-2,A,A-1,A-1,A,A+1)}}const c=new jt;return c.setAttribute("position",new Tt(r,3)),c.setAttribute("uv",new Tt(o,2)),c.setIndex(l),c.computeVertexNormals(),c}async function CM(s,e,t){const{scene:n,TEX:i,toon:r,mesh:o,at:l,rot:a,tiled:c,rnd:h,rr:d,pick:f,wallUV:u,nrm:p,M:v,instanced:m}=s,{SPINNERS:_,plantFlora:S,skullPole:A,totem:T,brazier:I,hay:N}=e,M=new W(-62,27,70).normalize(),w=new Nt(new Xt(600,32,16),new kn({side:Nn,depthWrite:!1,fog:!1,uniforms:{zen:{value:new gt("#2b3b78")},mid:{value:new gt("#7f8fc4")},hor:{value:new gt("#f2aa7c")},low:{value:new gt("#c98a72")},sunCol:{value:new gt("#ffa864")},sunDir:{value:M}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`}));w.renderOrder=-100,w.frustumCulled=!1,n.add(w),n.fog=new _c("#d6a487",230,640),n.add(new b0("#9aa8d8","#4a3428",1.05));const k=new wf("#ffb070",2.3);k.position.copy(M).multiplyScalar(110),k.castShadow=!0,k.shadow.mapSize.set(4096,4096),Object.assign(k.shadow.camera,{left:-70,right:70,top:66,bottom:-66,near:1,far:260}),k.shadow.camera.updateProjectionMatrix(),k.shadow.bias=-5e-4,k.shadow.normalBias=.05,n.add(k);const H=new Vr;for(let Ie=0;Ie<=160;Ie++){const Ue=Ie/160*sn*2,ze=ls(Ue),D=Math.cos(Ue)*ze,Je=-Math.sin(Ue)*ze;Ie===0?H.moveTo(D,Je):H.lineTo(D,Je)}const j=new ea(H,{depth:2.4,bevelEnabled:!0,bevelThickness:.5,bevelSize:.7,bevelSegments:3,curveSegments:4});j.rotateX(-sn/2);const re=c(i.grass,1/9,1/9);function $(Ie,Ue){const ze=i.strata.clone();return ze.wrapS=si,ze.wrapT=zn,ze.repeat.set(1/8,-1/(Ue-Ie)),ze.offset.set(0,Ue/(Ue-Ie)),ze.needsUpdate=!0,r("#ffffff",{map:ze})}const U=new Nt(j,[r("#ffffff",{map:re}),$(-1.9,1.5)]);U.position.y=-2.9,U.receiveShadow=!0,n.add(U);const se=wM(s,await t);n.add(se.underside);for(const Ie of["walls","towers","gate"])n.add(se[Ie]);const oe=r("#fff4ea",{emissive:"#e8c8b0",emissiveIntensity:.25}),Z=new Xt(1,16,12),ee=new Ee;n.add(ee);for(let Ie=0;Ie<22;Ie++){const Ue=Ie/22*sn*2+d(-.12,.12),ze=d(100,260),D=d(1.6,3.2),Je=new Ee;for(let qe=0;qe<7;qe++){const Ge=new Nt(Z,oe),Ae=d(1.6,2.8)*D;Ge.scale.set(Ae,Ae*.7,Ae),Ge.position.set(d(-3.5,3.5)*D,d(-.3,1.2)*D,d(-1.8,1.8)*D),Je.add(Ge)}Je.position.set(Math.cos(Ue)*ze,d(-45,28),Math.sin(Ue)*ze),ee.add(Je)}{const Ie=[],Ue=[],ze=[];for(let D=0;D<420;D++){const Je=D/420*sn*2+d(-.006,.006),qe=ls(Je);if(h()<.55){const Ge=d(.5,2.8),Ae=d(-.55,-1.8);Ie.push({x:Math.cos(Je)*(qe+.8),y:Ae-Ge/2,z:Math.sin(Je)*(qe+.8),sx:d(.7,1.3),sy:Ge,sz:d(.7,1.3),rx:sn+d(-.12,.12),rz:d(-.12,.12),c:f(["#4a3424","#3e2c20","#4f6a3a","#5a4a30"])})}D%2===0&&Ue.push({x:Math.cos(Je)*(qe+.3),y:-.06,z:Math.sin(Je)*(qe+.3),sx:d(.5,.8),sy:d(.18,.28),sz:d(.5,.8),c:f(["#5f7f42","#6a8a48","#55753c"])})}for(let D=0;D<7;D++){const Je=d(0,sn*2),qe=ls(Je)+d(4,12);ze.push({x:Math.cos(Je)*qe,y:d(-14,-4),z:Math.sin(Je)*qe,s:d(.8,2.2)})}m(new mn(.06,1,4),Ie,{}),m(new Xt(1,10,6),Ue,{});for(const D of ze){const Je=new Ee;Je.add(l(o(new Mi(1.2*D.s,0),r("#6e5240")),0,-.4*D.s,0)),Je.add(l(o(new nt(1*D.s,1.1*D.s,.3*D.s,9),r("#6f8b49")),0,.5*D.s,0)),h()<.6&&Je.add(l(e.tree(f(["pine","autumn","dead"]),.5*D.s),0,.6*D.s,0)),Je.position.set(D.x,D.y,D.z),Je.rotation.y=d(0,6),n.add(Je)}}const ae=$(-.75,1.35),pe={ruin:{trees:["tree_pine","tree_spruce","tree_dead","tree_pine","tree_oak"],clear:[[-.25,-.1,.32],[.35,.3,.3],[.1,.5,.14]]},farm:{trees:["tree_oak","tree_fruit","tree_maple","tree_birch","tree_fruit"],clear:[[-.2,-.15,.32],[.3,.25,.46],[.35,-.45,.22],[.05,.55,.12]]},shrine:{trees:["tree_cherry","tree_maple","tree_cherry","tree_cypress"],clear:[[0,0,.45]]},falls:{trees:["tree_pine","tree_spruce","tree_birch","tree_willow","tree_spruce"],clear:[[.25,.3,.33],[.52,.52,.26]]}},we=["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass"];function $e(Ie,Ue,ze,D,Je){S(Ue,ze,Ie.position.x+D,Ie.position.z+Je,Ie.position.y)}function at(Ie,Ue,ze,D){const{trees:Je,clear:qe}=pe[ze],Ge=Ue/10,Ae=[...qe.map(([Te,ce,L])=>[Te,ce,L]),...D.map(([Te,ce])=>[Te,ce,.16])],je=(Te,ce,L)=>{for(let y=0;y<60;y++){const J=d(0,sn*2),ye=d(Te,ce),ge=Math.cos(J)*ye,Le=Math.sin(J)*ye;if(Ae.every(([Fe,_e,be])=>Math.hypot(ge-Fe,Le-_e)>be+L))return Ae.push([ge,Le,L]),[ge*Ue,Le*Ue]}return null};for(let Te=0;Te<7;Te++){const ce=je(.3,.74,.12);ce&&S(Je[Te%Je.length],d(1,1.3)*Ge,Ie.position.x+ce[0],Ie.position.z+ce[1],Ie.position.y)}for(let Te=0;Te<9;Te++){const ce=je(.15,.78,.05);ce&&S(f(we),d(.75,1.25)*Ge,Ie.position.x+ce[0],Ie.position.z+ce[1],Ie.position.y)}}const me=c(i.water,1,4);function He(Ie,Ue,ze,D,Je,qe){const Ge=new Ee;Ge.position.set(Ie,Ue,ze),n.add(Ge);const Ae=new Vr;for(let L=0;L<=56;L++){const y=L/56*sn*2,J=D*(1+.12*Math.sin(3*y+qe)+.07*Math.sin(5*y+2*qe));L===0?Ae.moveTo(Math.cos(y)*J,-Math.sin(y)*J):Ae.lineTo(Math.cos(y)*J,-Math.sin(y)*J)}const je=new ea(Ae,{depth:1.4,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:2,curveSegments:3});je.rotateX(-sn/2),Ge.add(l(new Nt(je,[r("#ffffff",{map:re}),ae]),0,-1.75,0));const Te=o(new mn(D*.95,D*2.3,12,3),r("#6e5240"),!1);Te.rotation.x=sn,Te.position.y=-2.1-D*1.15,Ge.add(Te);for(let L=0;L<14;L++){const y=d(0,sn*2),J=d(.2,.9);Ge.add(l(a(o(new Mi(d(.8,2)*(D/10),0),r(f(["#6e5240","#5f4636","#7a5c47"]))),d(0,3),d(0,3),0),Math.cos(y)*D*.95*J,-2.1-(1-J)*D*2.3,Math.sin(y)*D*.95*J))}for(let L=0;L<26;L++){const y=d(0,sn*2),J=d(.6,2.4);Ge.add(l(a(o(new mn(.07,J,4),r("#4a3424")),sn,0,0),Math.cos(y)*D*1.02,-.6-J/2,Math.sin(y)*D*1.02))}const ce=D/10;if(Je==="ruin"){const L=l(new Ee,-D*.25,0,-D*.1);L.add(l(o(new nt(1.7*ce,1.9*ce,5.5*ce,14),r("#ffffff",{map:c(i.castleWall,2.5,1.6)})),0,2.75*ce,0));for(let J=0;J<7;J++){const ye=J/7*sn*2;L.add(l(o(new Re(.7*ce,d(.4,1.6)*ce,.5*ce),v.stone),Math.cos(ye)*1.6*ce,5.6*ce,Math.sin(ye)*1.6*ce))}L.add(l(o(new Re(.4*ce,1*ce,.1),v.pane,!1),0,2.6*ce,1.85*ce)),Ge.add(L);for(const J of[-1,1])Ge.add(l(o(new Re(.7*ce,3.2*ce,.7*ce),v.stone),D*.35+J*1.3*ce,1.6*ce,D*.3));Ge.add(l(o(new Re(3.3*ce,.6*ce,.7*ce),v.stone),D*.35,3.4*ce,D*.3)),Ge.add(l(A(2.4),D*.1,0,D*.5));const y=[[.5,-.5,"tree_pine"],[-.6,.5,"tree_maple"],[.2,.6,"tree_dead"]];for(const[J,ye,ge]of y)$e(Ge,ge,1.2*ce,J*D,ye*D);at(Ge,D,Je,[[.5,-.5],[-.6,.5],[.2,.6]])}else if(Je==="farm"){const L=l(new Ee,-D*.2,0,-D*.15);L.add(l(o(u(new Re(3.6*ce,2.2*ce,2.8*ce),2.2*ce,1.3),v.plankWall),0,1.1*ce,0));const y=new nt(2.1*ce,2.1*ce,4*ce,3,1);L.add(l(a(o(y,r("#ffffff",{map:i.roof})),0,0,sn/2),0,2.2*ce+.9*ce,0)),L.add(l(o(new Re(.8*ce,1.5*ce,.1),v.woodD),0,.75*ce,1.42*ce)),L.add(l(o(new Re(.6*ce,.6*ce,.1),v.pane,!1),1.1*ce,1.3*ce,1.42*ce)),Ge.add(L);const J=o(new qt(D*.8,D*.5),r("#ffffff",{map:i.field}),!1);J.rotation.x=-sn/2,J.position.set(D*.3,.03,D*.25),Ge.add(J);const ye=l(new Ee,D*.35,0,-D*.45);ye.add(l(o(new nt(.8*ce,1.2*ce,4*ce,12),r("#e3d5b6")),0,2*ce,0)),ye.add(l(o(new mn(1.2*ce,1.4*ce,12),r("#ffffff",{map:i.roof})),0,4.7*ce,0));const ge=l(new Ee,0,3.6*ce,1*ce);for(let Le=0;Le<4;Le++){const Fe=new Ee;Fe.rotation.z=Le*sn/2,Fe.add(l(o(new Re(.5*ce,2.6*ce,.04),r("#e3d5b6",{side:on})),.3*ce,1.5*ce,0)),ge.add(Fe)}ye.add(ge),_.push({o:ge,axis:"z",v:.4}),Ge.add(ye),$e(Ge,"tree_maple",1.1*ce,-D*.55,D*.4),Ge.add(l(N(.5*ce),D*.05,0,D*.55)),at(Ge,D,Je,[[-.55,.4]])}else if(Je==="shrine"){for(let y=0;y<6;y++){const J=y/6*sn*2;Ge.add(l(a(o(new Re(.7*ce,d(2,3)*ce,.5*ce),v.stone),0,-J,d(-.1,.1)),Math.cos(J)*3*ce,1.2*ce,Math.sin(J)*3*ce))}Ge.add(T(4*ce));for(const y of[.8,3.9])Ge.add(l(I(0,1.2*ce),Math.cos(y)*1.8*ce,0,Math.sin(y)*1.8*ce));const L=[[.6,.4],[-.5,-.5],[.4,-.6]];for(const[y,J]of L)$e(Ge,"tree_maple",1.1*ce,y*D,J*D);at(Ge,D,Je,L)}else{const L=[[-.5,-.3,"tree_pine"],[-.2,-.6,"tree_pine"],[.4,-.4,"tree_oak"],[-.6,.3,"tree_maple"]];for(const[ye,ge,Le]of L)$e(Ge,Le,1.2*ce,ye*D,ge*D);at(Ge,D,Je,L),Ge.add(l(a(o(new li(D*.28,24),r("#5c96b4",{emissive:"#2c5a72",emissiveIntensity:.35}),!1),-sn/2,0,0),D*.25,.04,D*.3));const y=new Nt(new qt(1.8*ce,D*3.2),new Cn({map:me,color:"#acb5c8",transparent:!0,opacity:.85,side:on,depthWrite:!1}));y.position.set(D*.62,-D*1.6,D*.62),y.rotation.y=sn/4,Ge.add(y);const J=o(new qt(1.2*ce,D*.55),r("#6fa9c9"),!1);J.rotation.set(-sn/2,0,-sn/4),J.position.set(D*.45,.05,D*.45),Ge.add(J)}return Ge}He(-150,6,-105,11,"ruin",.4),He(165,-4,-60,13,"farm",1.7),He(115,20,135,9,"shrine",2.9),He(-165,-14,85,12,"falls",4.1);const it={};function Ze(Ie){const Ue=it[Ie];if(Ue)return Ue;const ze={dirt:i.dirt,sand:i.sand,plaza:i.plaza,field:i.field}[Ie],D=s.canvasTex(256,256,(qe,Ge,Ae)=>{const je=qe.createRadialGradient(Ge/2,Ae/2,Ge*.3,Ge/2,Ae/2,Ge/2);je.addColorStop(0,"rgba(255,255,255,1)"),je.addColorStop(1,"rgba(255,255,255,0)"),qe.fillStyle=je,qe.fillRect(0,0,Ge,Ae)});D.wrapS=D.wrapT=zn;const Je={src:ze,mask:D};return it[Ie]=Je,Je}let We=0;function et(Ie,Ue,ze,D,Je,qe=0,Ge=.012,Ae=4){const je=Ze(Ie),Te=c(je.src,D*2/Ae,Je*2/Ae),ce=new Nt(new qt(D*2,Je*2),r("#ffffff",{map:Te,alphaMap:je.mask,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1-We}));return ce.rotation.set(-sn/2,0,qe),ce.position.set(Ue,Ge,ze),ce.receiveShadow=!0,ce.renderOrder=-10+We++*.01,n.add(ce),ce}const Ot={cobble:[i.tCobble,4,.1,"tCobble"],flag:[i.tFlag,4,.1,"tFlag"],dirt:[i.tDirt,6,.45,"tDirt"]},st={},vt=Ie=>{const Ue=Math.max(0,Math.min(1,Ie));return Ue*Ue*(3-2*Ue)},Mt=[],Ce=Ie=>Ie==="cobble"||Ie==="flag",Ve=Ie=>Ie.closed?[...Ie.line,Ie.line[0]]:Ie.line;function Qe(Ie,Ue){let ze=null,D=1e9;for(const Je of bi){if(Je===Ue||Je.kind==="stones")continue;const qe=Oo(Ie[0],Ie[1],Ve(Je))-Je.w/2;qe<D&&(D=qe,ze=Je)}return D<.6?ze:null}function rt(Ie,Ue,ze){const D=Ve(ze),Je=ze.w/2+.02,qe=Ue?[...Ie].reverse():[...Ie];let Ge=0;for(;Ge<qe.length-2&&Oo(qe[Ge][0],qe[Ge][1],D)<Je;)Ge++;if(Ge===0)return null;let Ae=qe[Ge-1],je=qe[Ge];for(let L=0;L<12;L++){const y=[(Ae[0]+je[0])/2,(Ae[1]+je[1])/2];Oo(y[0],y[1],D)<Je?Ae=y:je=y}const ce=[[(Ae[0]+je[0])/2,(Ae[1]+je[1])/2],...qe.slice(Ge)];return Ue?ce.reverse():ce}function tt(Ie,Ue){const ze=Ie.kind;let D=Ve(Ie);const Je=Ie.closed?[!1,!1]:[!Ie.refs[0],!Ie.refs[Ie.refs.length-1]];if(!Ie.closed&&Ce(ze))for(const Pe of[0,1]){if(!Je[Pe])continue;const q=Pe?D[D.length-1]:D[0],Me=Qe(q,Ie);if(!Me||Me.kind===ze||!Ce(Me.kind))continue;const ve=rt(D,Pe===1,Me);if(!ve)continue;D=ve,Je[Pe]=!1;const ke=Pe?D[D.length-1]:D[0],Q=Pe?D[D.length-2]:D[1],K=Math.hypot(ke[0]-Q[0],ke[1]-Q[1])||1;Mt.push({x:ke[0],z:ke[1],tx:(ke[0]-Q[0])/K,tz:(ke[1]-Q[1])/K,w:Ie.w,kind:ze})}const qe=D.length,[Ge,Ae,je,Te]=Ot[ze],ce=[0];for(let Pe=1;Pe<qe;Pe++){const q=D[Pe],Me=D[Pe-1];ce.push(ce[Pe-1]+Math.hypot(q[0]-Me[0],q[1]-Me[1]))}const L=ce[qe-1],y=.02+Ue*.0015,J=[],ye=[],ge=[],Le=[];for(let Pe=0;Pe<qe;Pe++){const q=D[Math.max(0,Pe-1)],Me=D[Math.min(qe-1,Pe+1)];let ve=Me[0]-q[0],ke=Me[1]-q[1];if(Ie.closed&&(Pe===0||Pe===qe-1)){const le=D[qe-2],Be=D[1];ve=Be[0]-le[0],ke=Be[1]-le[1]}const Q=Math.hypot(ve,ke)||1,K=-ke/Q,de=ve/Q;let De=1,x=1;if(!Ie.closed)for(const le of[0,1]){const Be=le?L-ce[Pe]:ce[Pe];Je[le]&&(De=Math.max(De,1+.5*(1-vt(Be/2.4))),x=Math.min(x,vt(Be/2.2)))}const V=Ie.w/2*De,X=[-(V+je),-(V-je),V-je,V+je],O=[0,x,x,0],ie=D[Pe];for(let le=0;le<4;le++){const Be=ie[0]+K*X[le],ct=ie[1]+de*X[le];J.push(Be,y,ct),ye.push(Be/Ae,ct/Ae),ge.push(1,1,1,O[le])}if(Pe>0)for(let le=0;le<3;le++){const Be=(Pe-1)*4+le,ct=Be+1,_t=Pe*4+le,ot=_t+1;Le.push(ct,ot,Be,Be,ot,_t)}}const Fe=new jt;Fe.setAttribute("position",new Tt(J,3)),Fe.setAttribute("uv",new Tt(ye,2)),Fe.setAttribute("color",new Tt(ge,4)),Fe.setIndex(Le),Fe.computeVertexNormals();let _e=st[ze];_e||(_e=r("#ffffff",{map:Ge,normalMap:p(Te,ze==="dirt"?1:1.8),vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),st[ze]=_e);const be=new Nt(Fe,_e);be.receiveShadow=!0,be.renderOrder=-5+Ue*.01,n.add(be)}const St=[];function lt(Ie){const Ue=Ie.length,ze=Ie.map(([Ge,Ae])=>Oo(Ge,Ae,sa)<1.35);if(!ze.some(Boolean))return[{pts:[...Ie],closed:!0}];const D=ze.findIndex((Ge,Ae)=>!Ge&&ze[(Ae-1+Ue)%Ue]),Je=[];let qe=[];for(let Ge=0;Ge<=Ue;Ge++){const Ae=(D+Ge)%Ue;if(!ze[Ae]&&Ge<Ue){qe.push(Ie[Ae]);continue}if(qe.length>1&&Je.push({pts:qe,closed:!1}),Ge<Ue&&ze[Ae]&&qe.length){let je=Ge;for(;je<Ue&&ze[(D+je)%Ue];)je++;const Te=qe[qe.length-1],ce=Ie[(D+je)%Ue],L=ce[0]-Te[0],y=ce[1]-Te[1],J=Math.hypot(L,y);St.push({x:(Te[0]+ce[0])/2,z:(Te[1]+ce[1])/2,ang:Math.atan2(-y,L),len:J})}qe=[]}return Je}bi.forEach((Ie,Ue)=>{if(Ie.kind!=="stones"){tt(Ie,Ue);return}const ze=i.roadStones.clone();ze.wrapS=zn,ze.wrapT=si,ze.repeat.set(1,1/1.3),ze.needsUpdate=!0;const D=r("#ffffff",{map:ze,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6});for(const Je of lt(Ie.line)){const qe=new Nt(Pu(Je.pts,Ie.w,Je.closed,.03),D);qe.receiveShadow=!0,n.add(qe)}});{const Ie=(je,Te,ce,L,y,J)=>{const ye=y-ce,ge=J-L,Le=ye*ye+ge*ge||1,Fe=Math.max(0,Math.min(1,((je-ce)*ye+(Te-L)*ge)/Le));return Math.hypot(je-ce-ye*Fe,Te-L-ge*Fe)},Ue=(je,Te,ce,L)=>{for(const y of bi){if(y===ce)continue;const J=Ve(y),ye=y.w/2+L;for(let ge=0;ge<J.length-1;ge++){const Le=J[ge],Fe=J[ge+1];if(!(Math.abs(Le[0]-je)>ye+1||Math.abs(Le[1]-Te)>ye+1)&&Ie(je,Te,Le[0],Le[1],Fe[0],Fe[1])<ye)return!0}}return!1},ze=[1.5708,-1.6284,-.7646,.1159,-3.0065,2.36],D=(je,Te)=>{const ce=Math.hypot(je,Te),L=Math.atan2(Te,je);if(ce>7.4&&ce<9&&ze.some(y=>{let J=Math.abs(L-y)%(2*sn);return J=Math.min(J,2*sn-J),J*ce<1.45}))return!0;for(const y of Zs)if(y.kind==="house"){const[J,ye]=ia(y,je,Te);if(Math.abs(J)<y.w/2+.9&&Math.abs(ye)<y.d/2+.9||y.deck&&J>y.deck[0]-.5&&J<y.deck[1]+.5&&ye>y.deck[2]&&ye<y.deck[3]+.5)return!0}else if(Math.hypot(je-y.x,Te-y.z)<y.r+.6)return!0;for(const y of Ic)if(y.kind==="hut"){const[J,ye]=ia(y,je,Te);if(Math.abs(J)<y.w/2+.9&&Math.abs(ye)<y.d/2+.9)return!0}else if(Math.hypot(je-y.x,Te-y.z)<(y.r||2)+.4)return!0;return Math.hypot(je,Te)>ls(Math.atan2(Te,je))-1.2},Je=[],qe=[],Ge=r("#5a4030",{transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});for(const je of bi){if(je.kind==="stones")continue;const Te=Ve(je),ce=je.kind!=="dirt",L=y=>{const J=Te[Math.max(0,y-1)],ye=Te[Math.min(Te.length-1,y+1)],ge=Math.hypot(ye[0]-J[0],ye[1]-J[1])||1;return[-(ye[1]-J[1])/ge,(ye[0]-J[0])/ge]};for(let y=0;y<Te.length;y++){const[J,ye]=L(y),ge=Math.atan2(J,ye)+sn/2,Le=Te[y];for(const Fe of[-1,1]){const _e=je.w/2+.07,be=Le[0]+J*Fe*_e,Pe=Le[1]+ye*Fe*_e;if(!(D(be,Pe)||Ue(be,Pe,je,.25))&&(ce&&Je.push({x:be,y:.04,z:Pe,sx:.2,sy:.13,sz:d(.4,.47),ry:ge+d(-.04,.04),c:je.kind==="flag"?f(["#8a7a70","#7e6f66","#94857a"]):f(["#9a8f86","#8a8078","#a39a90"])}),y%3===0&&h()<.7)){const q=_e+(ce?.25:.1)+d(0,.35),Me=Le[0]+J*Fe*q,ve=Le[1]+ye*Fe*q;if(!D(Me,ve)&&!Ue(Me,ve,je,.2)){const ke=f(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let Q=0;Q<5;Q++)qe.push({x:Me+d(-.15,.15),y:.11,z:ve+d(-.15,.15),rx:d(-.4,.4),rz:d(-.4,.4),sy:d(.7,1.3),c:ke})}}}}if(!ce&&je.w>1.5)for(const y of[-1,1]){const J=Te.map((ge,Le)=>{const[Fe,_e]=L(Le);return[ge[0]+Fe*y*.45,ge[1]+_e*y*.45]}),ye=new Nt(Pu(J,.18,!1,.035),Ge);ye.receiveShadow=!0,ye.renderOrder=-4,n.add(ye)}}for(const je of Mt){const Te=-je.tz,ce=je.tx,L=Math.max(2,Math.round((je.w+.3)/.42));for(let y=0;y<L;y++){const J=-((je.w+.3)/2)+(y+.5)*(je.w+.3)/L;Je.push({x:je.x+Te*J-je.tx*.1,y:.045,z:je.z+ce*J-je.tz*.1,sx:.4,sy:.12,sz:.24,ry:Math.atan2(Te,ce)+sn/2+d(-.04,.04),c:f(["#8a7a70","#7e6f66","#94857a"])})}}m(new ma(1,1,1,1,.2),Je,{cast:!1});const Ae=m(new mn(.06,.24,4),qe,{});Ae&&(Ae.userData.noLine=!0)}return{models:se,skyDome:w,sun:k,island:U,cloudRing:ee,grassTex:re,strataMat:$,crossings:St,patch:et}}const{PI:pt}=Math;function PM(s){const{M:e,COL:t,TEX:n,toon:i,glow:r,mesh:o,rbox:l,at:a,rot:c,put:h,spike:d,rnd:f,rr:u,pick:p,canvasTex:v,tiled:m,planarUV:_,wallUV:S}=s,A=s.scene,T=[],I=[],N=[],M=[],w=v(64,128,(E,b,C)=>{const F=()=>{E.beginPath(),E.moveTo(b/2,2),E.bezierCurveTo(b*.62,C*.3,b*.98,C*.55,b*.86,C*.8),E.bezierCurveTo(b*.76,C*.98,b*.24,C*.98,b*.14,C*.8),E.bezierCurveTo(b*.02,C*.55,b*.38,C*.3,b/2,2),E.closePath()},te=E.createLinearGradient(0,C,0,0);te.addColorStop(0,"rgba(255, 246, 214, 1)"),te.addColorStop(.3,"rgba(255, 196, 92, 1)"),te.addColorStop(.65,"rgba(255, 110, 40, 0.95)"),te.addColorStop(1,"rgba(220, 40, 30, 0)"),F(),E.fillStyle=te,E.fill(),E.save(),E.translate(b*.5,C*.92),E.scale(.5,.55),E.translate(-b*.5,-C*.92),F(),E.fillStyle="rgba(255, 252, 235, 0.9)",E.fill(),E.restore()});w.wrapS=w.wrapT=zn;const k=new ks({map:w,color:new gt(1.6,1.25,1),transparent:!0,depthWrite:!1,toneMapped:!1}),H=new ks({map:w,color:new gt(2.2,2,1.6),transparent:!0,depthWrite:!1,toneMapped:!1}),j=new ks({map:n.soft,color:"#ff8a3a",transparent:!0,opacity:.4,depthWrite:!1,blending:Oi});function re(E,b,C,F,te=1){const he=new Ee,xe=new hs(k);xe.center.set(.5,.06),xe.scale.set(.34*te,.68*te,1),he.add(xe);const z=new hs(H);z.center.set(.5,.04),z.scale.set(.18*te,.34*te,1),he.add(z);const R=new hs(j);return R.scale.setScalar(1.5*te),R.position.y=.2*te,he.add(R),he.position.set(b,C,F),E.add(he),I.push({f:he,ph:u(0,6),s:te}),he}const $=(()=>{const E=new Ee,b=o(new Xt(.5,16,12),e.bone);b.scale.set(1,.92,1.05),b.position.y=.14,E.add(b),E.add(a(o(new Re(.62,.28,.5),e.bone),0,-.24,.16));for(const C of[-1,1]){const F=o(new Xt(.14,10,8),e.dark,!1);F.scale.z=.5,F.position.set(C*.19,.08,.45),E.add(F)}return E.add(c(a(o(new mn(.06,.12,3),e.dark,!1),0,-.1,.5),pt,0,0)),E.add(a(o(new Re(.42,.03,.02),e.dark,!1),0,-.25,.42)),E})();function U(E=.3){const b=$.clone();return b.scale.setScalar(E),b}function se(E=1,b=e.bone){const C=new Ee;for(const F of[-1,1]){const te=o(new pn(.5*E,.09*E,6,12,pt*.6),b);te.rotation.set(0,F>0?0:pt,.25),te.position.set(F*.35*E,0,0),C.add(te)}return C}let oe=7;const Z=(E,b)=>E+(b-E)*((oe=oe*16807%2147483647)/2147483647);function ee(E,b,C,F,te,he,xe,z,R=0){const ne=a(o(R?l(he,xe,z,R):new Re(he,xe,z),b),C,F,te);return E.add(ne),ne}function ae(E,b,C,F=.75){const te=new Re(E,b,C),he=te.attributes.position;for(let xe=0;xe<he.count;xe++)he.getY(xe)<0&&(he.setX(xe,he.getX(xe)*F),he.setZ(xe,he.getZ(xe)*F));return te.computeVertexNormals(),te}function pe(E,b,C,F,te,he,xe=Math.max(2,Math.round(C/.2))){const z=C/xe;for(let R=0;R<xe;R++)ee(E,he,0,F+Z(-.004,.004),-C/2+z*(R+.5),b+Z(-.02,.02),te,z-.012,.012)}function we(E,b,C,F,te,he){ee(E,e.iron,b-te*.055,C,F-he*.012,.13,.014,.028),ee(E,e.iron,b-te*.012,C,F-he*.055,.028,.014,.13)}const $e=(()=>{const E=[];for(let b=0;b<=10;b++){const C=b/10;E.push(new Ne(.3+Math.sin(C*pt)*.06,(C-.5)*.8))}return new bc(E,20)})(),at=E=>.3+Math.sin((E/.8+.5)*pt)*.06;function me(E=1,b=!1){const C=new Ee,F=o($e,i("#ffffff",{map:n.planks}));for(const te of[-.33,-.17,.17,.33])F.add(a(c(o(new pn(at(te)+.006,.02,5,24),e.iron),pt/2,0,0),0,te,0));for(const te of[-.17,.17])for(let he=0;he<6;he++){const xe=he/6*pt*2;F.add(a(o(new Xt(.016,5,4),e.ironL),Math.cos(xe)*(at(te)+.025),te,Math.sin(xe)*(at(te)+.025)))}F.add(a(c(o(new li(.3,20),e.woodD),-pt/2,0,0),0,.392,0)),F.add(a(c(o(new pn(.3,.018,4,24),e.woodD),pt/2,0,0),0,.4,0));for(const te of[-.1,0,.1])F.add(a(o(new Re(.004,.004,.5),e.dark,!1),te,.394,0));return F.add(a(o(new nt(.035,.035,.03,8),e.woodL),.15,.4,.05)),F.scale.setScalar(E),b?(F.rotation.z=pt/2,F.position.y=.36*E):F.position.y=.4*E,C.add(F),C}const He=i("#ffffff",{map:v(128,128,(E,b,C)=>{E.fillStyle="#7a5538",E.fillRect(0,0,b,C);for(let F=0;F<4;F++)E.fillStyle=F%2?"#70502f":"#84603f",E.fillRect(0,F*32,b,30),E.fillStyle="rgba(40, 24, 14, 0.6)",E.fillRect(0,F*32+30,b,2)})});function it(E=.6){const b=new Ee;ee(b,He,0,E/2,0,E*.94,E*.94,E*.94);const C=E*.09,F=E/2-C/2;for(const te of[-1,1])for(const he of[-1,1])ee(b,e.woodD,te*F,E/2,he*F,C,E,C),ee(b,e.woodD,0,E/2+te*F,he*F,E-C*2,C,C),ee(b,e.woodD,te*F,E/2+he*F,0,C,C,E-C*2);for(const te of[-1,1]){const he=ee(b,e.woodD,0,E/2,te*(E*.47+.006),E*1.1,C*.8,C*.4);he.rotation.z=te*pt/4}for(const te of[-1,1])for(const he of[-1,1])for(const xe of[-1,1])ee(b,e.iron,te*(F+.006),E/2+he*(F+.006),xe*(F+.006),C*1.2,C*1.2,C*1.2);return b}function Ze(){const E=new Ee,b=o(new Xt(.28,12,10),i("#b8a07a"));return b.scale.set(1,1.15,.9),b.position.y=.3,E.add(b),E.add(a(o(new nt(.08,.14,.14,10),i("#a88f6a")),0,.66,0)),E}function We(E,b,C=.8,F=e.wood){const te=new Ee,he=.07;pe(te,E,b,C-he/2,he,F);for(const z of[-1,1])ee(te,e.woodD,0,C-he-.06,z*(b/2-.12),E-.34,.12,.04,.01),ee(te,e.woodD,z*(E/2-.12),C-he-.06,0,.04,.12,b-.34,.01);const xe=ae(.1,C-he,.1,.72);for(const[z,R]of[[-1,-1],[1,-1],[-1,1],[1,1]])te.add(a(o(xe,e.woodD),z*(E/2-.12),(C-he)/2,R*(b/2-.12))),we(te,z*E/2,C+.004,R*b/2,z,R);ee(te,e.woodD,0,.17,0,E-.3,.06,.05,.01);for(const z of[-1,1])ee(te,e.woodD,z*(E/2-.12),.17,0,.05,.06,b-.3,.01);return te}function et(E=.7){const b=new Ee;b.add(a(o(new nt(E,E,.08,24),e.wood),0,.76,0)),b.add(a(c(o(new pn(E,.022,5,32),e.iron),pt/2,0,0),0,.76,0));for(const C of[-E*.5,0,E*.5])ee(b,e.dark,C,.801,0,.006,.004,Math.sqrt(E*E-C*C)*1.96);b.add(a(o(new nt(.08,.11,.7,10),e.woodD),0,.37,0)),b.add(a(o(new nt(.13,.13,.06,10),e.iron),0,.5,0));for(let C=0;C<4;C++){const F=C*pt/2+pt/4,te=ee(b,e.woodD,Math.sin(F)*E*.25,.05,Math.cos(F)*E*.25,.09,.08,E*.6,.015);te.rotation.y=F}return b}function Ot(){const E=new Ee;E.add(a(o(new nt(.24,.24,.07,16),e.wood),0,.45,0)),E.add(a(c(o(new pn(.24,.012,4,20),e.iron),pt/2,0,0),0,.45,0));for(let b=0;b<3;b++){const C=b/3*pt*2+.5,F=o(new nt(.028,.034,.46,6),e.woodD);F.position.set(Math.cos(C)*.15,.22,Math.sin(C)*.15),F.rotation.set(-Math.sin(C)*.2,0,Math.cos(C)*.2),E.add(F)}return E.add(a(c(o(new pn(.16,.014,4,14),e.woodD),pt/2,0,0),0,.17,0)),E}function st(E=1.8,b=!0){const C=new Ee;for(const F of[-1,1])ee(C,e.woodL,Z(-.01,.01),.45,F*.11,E,.07,.2,.015);for(const F of[-1,1]){const te=F*(E/2-.2);for(const he of[-1,1]){const xe=a(o(ae(.08,.44,.07,1),e.woodD),te,.21,he*.12);xe.rotation.x=-he*.2,C.add(xe)}ee(C,e.woodD,te,.385,0,.09,.06,.44,.01),ee(C,e.iron,te,.487,.2,.1,.012,.03)}if(ee(C,e.woodD,0,.14,0,E-.4,.05,.05,.01),b){for(const F of[-1,1])ee(C,e.woodD,F*(E/2-.2),.74,-.21,.07,.56,.06,.012);for(const F of[.64,.9])ee(C,e.woodL,Z(-.01,.01),F,-.225,E-.1,.11,.05,.015)}return C}function vt(E=.16,b=0){const C=new Ee;if(C.add(a(o(new nt(.04,.045,E,10),i("#eadfc4")),0,E/2,0)),re(C,0,E,0,.35),b){const F=new $i("#ffb36a",b,5,2);F.position.y=E+.15,C.add(F)}return C}function Mt(){const E=new Ee;return E.add(a(U(.22),0,.12,0)),E.add(a(vt(.14),0,.24,0)),E}function Ce(E){const b=new Ee,C=i(E,{emissive:E,emissiveIntensity:.18});return b.add(a(o(new nt(.06,.07,.2,10),C),0,.1,0)),b.add(a(o(new nt(.022,.03,.1,8),C),0,.25,0)),b}function Ve(){const E=new Ee;return E.add(a(o(new nt(.07,.06,.15,12),e.woodL),0,.075,0)),E.add(a(c(o(new li(.062,12),i("#efe0b0")),-pt/2,0,0),0,.14,0)),E.add(a(o(new pn(.045,.012,6,12),e.woodL),.08,.08,0)),E}function Qe(E=1){const b=new Ee;b.add(a(o(new nt(.22*E,.16*E,.34*E,12),i("#8a4a30")),0,.17*E,0));for(let C=0;C<6;C++){const F=C/6*pt*2;d(b,new W(Math.cos(F)*.06*E,.32*E,Math.sin(F)*.06*E),new W(Math.cos(F)*.5,1,Math.sin(F)*.5),.5*E,.1*E,i(p([t.leaf,t.leafD,t.leafL])),0,5)}return b}const rt=["#8a2a24","#3f5f8f","#b08a3e","#4f7a4a","#5a3f7a","#a85a2c","#2f4f45","#d8c8a0"],tt=s.UNIT_BOX;function St(E=2){const b=new Ee,C=2.4,F=.5;ee(b,i("#3a2519"),0,C/2,-F/2+.03,E-.1,C-.1,.04);for(const he of[-1,1])ee(b,e.woodD,he*(E/2-.04),C/2,0,.08,C,F,.015);for(let he=0;he<4;he++){const xe=he<3?.27+he*.72:C-.03;ee(b,e.wood,0,xe,0,E-.14,.06,F-.04),ee(b,e.woodL,0,xe+.01,F/2-.02,E-.12,.08,.04,.01)}ee(b,e.woodD,0,.1,.02,E,.2,F,.02),ee(b,e.wood,0,C+.04,.02,E+.1,.08,F+.08,.02),ee(b,e.woodD,0,C+.11,.03,E+.18,.07,F+.14,.02);for(const he of[-1,1])ee(b,e.iron,he*(E/2-.02),C-.12,F/2+.004,.06,.2,.012),ee(b,e.iron,he*(E/2-.1),C-.04,F/2+.004,.2,.06,.012);b.add(a(U(.13),E/2-.25,2.62,.05));const te=[];for(let he=0;he<3;he++){let xe=-E/2+.12;for(;xe<E/2-.2;){if(f()<.12){xe+=.18;continue}const z=u(.07,.14),R=u(.34,.56),ne=f()<.1?.18:0;te.push({x:xe+z/2,y:.33+he*.72+R/2,z:.08,sx:z,sy:R,sz:u(.28,.36),rz:ne,c:p(rt)}),xe+=z+.012+ne*.4}}return s.instanced(tt,te,{parent:b,cast:!0}),b}function lt(E,b){const C=v(512,512,(he,xe)=>{b.forEach((z,R)=>{he.fillStyle=z,he.beginPath(),he.arc(xe/2,xe/2,xe/2-R*34,0,pt*2),he.fill()}),he.fillStyle=b[1];for(let z=0;z<12;z++){const R=z/12*pt*2;he.beginPath(),he.arc(256+Math.cos(R)*196,256+Math.sin(R)*196,10,0,pt*2),he.fill()}}),F=o(new li(E,48),i("#ffffff",{map:C}),!1);F.rotation.x=-pt/2,F.position.y=.012;const te=new Ee;return te.add(F),te}function Ie(E=n.painting){const b=new Ee;for(const C of[-1,1]){const F=a(o(new Re(.06,1.8,.06),e.wood),C*.36,.9,0);F.rotation.z=C*-.12,b.add(F)}return b.add(c(a(o(new Re(.06,1.7,.06),e.wood),0,.84,-.3),.35,0,0)),b.add(a(o(new Re(1.05,.82,.05),i("#efe4cc")),0,1.25,.05)),b.add(a(new Nt(new qt(.95,.72),new Cn({map:E,toneMapped:!1})),0,1.25,.079)),b.add(a(o(new Re(1,.05,.14),e.wood),0,.82,.08)),b}function Ue(E){const b=new Ee;pe(b,1.7,.84,.745,.08,e.woodL,4),ee(b,e.woodD,0,.78,.43,1.74,.05,.03,.01),ee(b,e.wood,.55,.36,0,.5,.66,.76,.02);for(let F=0;F<3;F++)ee(b,e.woodL,.55,.15+F*.2,.385,.44,.17,.02,.01),ee(b,e.iron,.55,.17+F*.2,.402,.12,.025,.02);for(const F of[-.34,.34])b.add(a(o(ae(.09,.7,.09,.7),e.woodD),-.76,.35,F));ee(b,e.woodD,-.76,.14,0,.05,.05,.62,.01);for(const F of[-1,1])we(b,F*.85,.79,.42,F,1);const C={g:b,kb:null,screen:null,light:null};if(E==="screen"){const F=a(new Ee,-.12,.805,-.25);F.userData.y0=.805,F.add(o(new Re(.62,.035,.2),e.iron));for(const[R,ne]of[[-.06,.54],[0,.56],[.06,.5]])F.add(a(o(new Re(ne,.012,.04),r("#ff5a3a",.55),!1),0,.022,R));b.add(F),C.kb=F;const te=new Ee;te.add(o(new Re(1.04,.7,.05),e.woodD));const he=new Cn({map:n.code,transparent:!0,opacity:.4,toneMapped:!1}),xe=c(a(new Nt(new qt(.92,.58),he),0,0,-.03),0,pt,0);te.add(xe),C.screen=xe,te.add(a(new Nt(new qt(.92,.58),he),0,0,.03)),te.add(a(o(new Re(.08,.13,.08),e.woodD),0,-.41,0)),te.add(a(o(new Re(.34,.02,.2),e.woodD),0,-.455,0)),te.add(a(U(.09),.46,.4,0)),te.position.set(-.12,1.25,.17),b.add(te);const z=new $i("#7fe8ff",0,3.2,2);z.position.set(-.12,1.25,-.35),b.add(z),C.light=z,b.add(a(Ve(),.6,.79,.15))}else E==="paper"?(b.add(c(a(new Nt(new qt(.9,.63),i("#ffffff",{map:n.paper})),-.15,.796,0),-pt/2,0,0)),b.add(c(a(o(new nt(.012,.012,.22,6),e.red),.35,.81,.1),0,0,pt/2)),b.add(a(vt(.12),.65,.79,-.25))):E==="books"&&(b.add(a(o(new Re(.42,.06,.3),e.red),-.35,.82,0)),b.add(a(o(new Re(.36,.05,.28),i("#3f5f8f")),-.33,.875,.01)),b.add(a(o(new Re(.5,.03,.34),i("#e6d9bc")),.1,.81,.05)),b.add(a(Mt(),.62,.79,-.22)));return b.add(a(o(new nt(.25,.21,.44,14),e.woodD),0,.22,-.78)),C}function ze(){const E=new Ee;return E.add(a(o(new nt(.3,.38,.5,10),e.woodD),0,.25,0)),E.add(a(o(new Re(.34,.2,.22),e.iron),0,.6,0)),E.add(a(o(new Re(.7,.14,.3),e.ironL),0,.77,0)),d(E,new W(.35,.77,0),new W(1,0,0),.32,.1,e.ironL,0,10),E.add(a(o(new Re(.4,.02,.06),r("#ff7a2a",1.6),!1),.05,.85,-.05)),E}function D(){const E=new Ee;return E.add(a(o(new nt(.06,.06,1.6,8),e.wood),0,.8,0)),E.add(a(o(new nt(.28,.32,.8,12),e.straw),0,1.15,0)),E.add(a(o(new Xt(.22,12,10),e.straw),0,1.75,0)),E.add(a(o(new Re(.9,.08,.08),e.wood),0,1.35,0)),E.add(a(c(o(new pn(.3,.03,6,16),e.red),pt/2,0,0),0,1.2,0)),E}function Je(){const E=new Ee;E.add(c(a(o(new nt(.6,.6,.2,24),i("#ffffff",{map:n.target})),0,1,0),pt/2,0,0));for(const b of[-1,1])E.add(c(a(o(new Re(.06,1.4,.06),e.wood),b*.35,.7,-.2),0,0,b*.2));return E}function qe(E=.42){const b=new Ee;return b.add(c(a(o(new nt(E,E,.7,16),e.straw),0,E,0),0,0,pt/2)),b}function Ge(E=0,b=1){const C=new Ee;for(let F=0;F<3;F++){const te=F/3*pt*2,he=o(new nt(.035,.045,1.1,6),e.iron);he.position.set(Math.cos(te)*.22,.5,Math.sin(te)*.22),he.rotation.set(Math.sin(te)*.3,0,-Math.cos(te)*.3),C.add(he)}C.add(a(o(new nt(.42,.24,.3,14,1,!0),e.iron),0,1.05,0)),C.add(c(a(o(new li(.36,14),e.dark,!1),0,1.12,0),-pt/2,0,0)),C.add(a(o(new Xt(.3,10,6,0,pt*2,0,pt/2),r("#ff6a20",1.4),!1),0,1.08,0));for(let F=0;F<4;F++){const te=F/4*pt*2;d(C,new W(Math.cos(te)*.42,1.18,Math.sin(te)*.42),new W(Math.cos(te)*.4,1,Math.sin(te)*.4),.22,.04,e.iron,0,5)}if(re(C,0,1.12,0,1.6),E){const F=new $i("#ff9a4a",E,9,2);F.position.y=1.7,C.add(F),M.push({l:F,base:E,ph:u(0,6)})}return C.scale.setScalar(b),C}function Ae(){const E=new Ee;E.add(c(a(o(new Re(.06,.06,.3),e.iron),0,0,.12),0,0,0));const b=a(o(new nt(.045,.06,.5,8),e.woodD),0,.12,.26);return b.rotation.x=.35,E.add(b),E.add(a(o(new nt(.08,.06,.12,8),e.iron),0,.36,.34)),re(E,0,.4,.35,.9),E}function je(E=3.2,b=n.banner){const C=new Ee;C.add(a(o(new nt(.05,.07,E+.6,8),e.woodD),0,(E+.6)/2,0)),C.add(c(a(o(new nt(.03,.03,1,6),e.iron),0,E+.4,.05),0,0,pt/2)),C.add(a(U(.16),0,E+.72,.02));const F=new Nt(new qt(.9,1.9,1,8),i("#ffffff",{map:b,side:on})),te=F.geometry.attributes.position;for(let he=0;he<te.count;he++)te.setZ(he,Math.sin(te.getY(he)*2.6)*.05);return F.geometry.computeVertexNormals(),F.position.set(0,E-.55,.08),F.castShadow=!0,C.add(F),C}function Te(E=1.2,b=2.6){const C=new Ee;C.add(c(a(o(new nt(.04,.04,E+.3,6),e.iron),0,0,.04),0,0,pt/2));const F=o(new qt(E,b),i("#ffffff",{map:n.banner,side:on}),!1);return F.position.set(0,-b/2,.05),C.add(F),C}function ce(E=2.4){const b=new Ee;b.add(a(o(new nt(.05,.08,E,7),e.woodD),0,E/2,0)),b.add(a(U(.24),0,E+.12,0)),b.add(a(se(.5),0,E+.2,0));for(let C=0;C<3;C++){const F=o(new qt(.12,u(.5,.9)),i(p([t.red,t.redD,t.bone]),{side:on}),!1);F.position.set(Math.cos(C*2.1)*.08,E-.5,Math.sin(C*2.1)*.08),F.rotation.y=C*2.1,b.add(F)}return b}function L(E=3){const b=new Ee,C=Math.max(2,Math.round(E/.9));b.add(c(a(o(new nt(.1,.1,E,8),e.wood),0,.45,0),0,0,pt/2));for(let F=0;F<C;F++){const te=-E/2+(F+.5)*E/C;for(const he of[-1,1]){const xe=new Ee;xe.add(a(o(new nt(.07,.07,1.4,7),e.woodL),0,0,0)),xe.add(a(o(new mn(.07,.3,7),e.boneD),0,.85,0)),xe.position.set(te,.45,0),xe.rotation.x=he*.8,b.add(xe)}}return b}function y(){const E=new Ee;E.add(a(o(new nt(.55,.5,.9,18),e.redD),0,.75,0)),E.add(a(o(new nt(.57,.57,.06,18),i("#d8c4a0")),0,1.22,0));for(let b=0;b<3;b++){const C=b/3*pt*2;E.add(c(a(o(new nt(.04,.05,.7,6),e.woodD),Math.cos(C)*.42,.3,Math.sin(C)*.42),Math.sin(C)*.2,0,-Math.cos(C)*.2))}return E.add(a(c(o(new pn(.53,.03,6,20),e.bone),pt/2,0,0),0,1.05,0)),E}function J(E=4){const b=new Ee,C=[t.red,t.woodL,t.redD,t.wood];for(let F=0;F<4;F++){const te=o(new nt(.42,.46,E/4,10),i(C[F]));te.position.y=E/8+F*E/4,b.add(te);for(const he of[-1,1])b.add(a(o(new Re(.12,.08,.06),e.bone),he*.15,te.position.y+.05,.42));b.add(a(o(new Re(.36,.06,.06),e.dark),0,te.position.y-.18,.43))}b.add(a(U(.45),0,E+.25,0)),b.add(a(se(1.1),0,E+.35,0));for(const F of[-1,1])b.add(c(a(o(new Re(1,.12,.1),e.woodD),F*.55,E*.72,0),0,0,F*.2));return b}function ye(E=1.9,b=2.6,C="#8a6a4a"){const F=new Ee,te=o(new mn(E,b,8,1,!0),i(C,{side:on}));te.position.y=b/2,F.add(te);for(let he=0;he<3;he++){const xe=he/3*pt*2+.4;F.add(c(a(o(new nt(.04,.04,.9,6),e.woodD),Math.cos(xe)*.12,b+.25,Math.sin(xe)*.12),Math.sin(xe)*.4,0,-Math.cos(xe)*.4))}return F.add(c(a(o(new qt(.9,1.3),e.dark,!1),0,.65,E*.82),-.6,0,0)),F.add(c(a(o(new pn(E*.62,.05,6,24),e.redD),0,b*.35,0),pt/2,0,0)),F}function ge(E=4){const b=new Ee;b.add(a(o(new Re(1.8,.1,.1),e.wood),0,1.25,0)),b.add(a(o(new Re(1.8,.1,.1),e.wood),0,.3,.12));for(const C of[-1,1])b.add(a(o(new Re(.1,1.35,.1),e.woodD),C*.85,.67,0));for(let C=0;C<E;C++){const F=-.6+C*1.2/(E-1),te=new Ee;C%2?(te.add(a(o(new Re(.07,1.2,.03),i("#c8ccd2")),0,.6,0)),te.add(a(o(new Re(.22,.05,.06),e.gold),0,.2,0))):(te.add(a(o(new nt(.03,.03,1.4,6),e.woodD),0,.7,0)),te.add(a(o(new Re(.34,.24,.04),i("#a8acb2")),.12,1.25,0))),te.position.set(F,.05,.08),te.rotation.z=.08,b.add(te)}return b}function Le(E=2){const b=new Ee,C=[];for(let F=0;F<4;F++)for(let te=0;te<Math.floor(E/.26)-F;te++)C.push([-E/2+.13+te*.26+F*.13,.13+F*.22,0]);for(const[F,te]of C)b.add(c(a(o(new nt(.12,.12,.9,8),i(p([t.woodL,"#8a6440","#6e4a30"]))),F,te,0),pt/2,0,0));return b}function Fe(){const E=new Ee;E.add(a(o(new Re(1.6,.12,1),e.wood),0,.62,0));for(const b of[-1,1])E.add(a(o(new Re(1.6,.36,.06),e.woodL),0,.85,b*.47)),E.add(c(a(o(new nt(.42,.42,.08,14),e.woodD),0,.42,b*.58),pt/2,0,0));for(const b of[-1,1])E.add(c(a(o(new Re(1.4,.07,.07),e.woodD),1.3,.55,b*.35),0,0,-.18));return E.add(a(Ze(),-.3,.68,.1)),E.add(a(it(.4),.35,.68,-.15)),E}function _e(){const E=new Ee;E.add(We(2.2,.9,.9,e.woodL));for(const[F,te]of[[-1.05,-.4],[1.05,-.4],[-1.05,.4],[1.05,.4]])E.add(a(o(new Re(.08,2.2,.08),e.woodD),F,1.1,te));const b=v(256,64,(F,te,he)=>{for(let xe=0;xe<8;xe++)F.fillStyle=xe%2?"#e3d5b6":"#8a2420",F.fillRect(xe*32,0,32,he)}),C=o(new Re(2.5,.05,1.4),i("#ffffff",{map:b}));C.position.set(0,2.2,.15),C.rotation.x=.22,E.add(C);for(let F=0;F<9;F++)E.add(a(o(new Xt(.09,8,6),i(p(["#c0392b","#e0a030","#7aa04a","#d06030"]))),u(-.9,.9),.95,u(-.3,.3)));return E.add(a(it(.5),-1.4,0,.3)),E.add(a(me(.8),1.5,0,-.1)),E}function be(){const E=new Ee;E.add(a(o(_(new nt(1,1.1,.9,22),1.2),e.stone),0,.45,0)),E.add(c(a(o(new li(.85,20),i("#3f6f8a",{emissive:"#28485a",emissiveIntensity:.3}),!1),0,.82,0),-pt/2,0,0));for(const C of[-1,1])E.add(a(o(new Re(.14,1.7,.14),e.woodD),C*.95,1.5,0));const b=o(new mn(1.45,.8,4),i("#ffffff",{map:m(n.roof,2,1)}));return b.position.y=2.65,b.rotation.y=pt/4,E.add(b),E.add(c(a(o(new nt(.06,.06,1.9,8),e.wood),0,2.05,0),0,0,pt/2)),E.add(a(o(new nt(.15,.13,.22,10),e.woodL),.2,1.55,0)),E.add(a(U(.18),0,3.15,0)),E}function Pe(E=0){const b=new Ee;b.add(a(o(new nt(.07,.1,2.8,8),e.iron),0,1.4,0)),b.add(a(o(new Re(.55,.06,.06),e.iron),.22,2.7,0));const C=new Ee;if(C.add(o(new nt(.14,.18,.32,8),e.iron)),C.add(a(o(new Xt(.11,10,8),r("#ffc070",2.2),!1),0,-.02,0)),E){const F=new $i("#ffc477",E,9,2);C.add(F)}return C.position.set(.44,2.44,0),b.add(C),b}function q(){const E=new Ee;ee(E,e.wood,0,.25,0,1,.5,.6,.02),E.add(c(a(o(new nt(.3,.3,1,16,1,!1,0,pt),e.woodL),0,.5,0),0,0,pt/2));for(const b of[-.38,.38])ee(E,e.iron,b,.27,0,.07,.52,.62),E.add(a(c(o(new pn(.31,.025,4,16,pt),e.iron),0,pt/2,0),b,.5,0));for(const b of[-1,1])for(const C of[-1,1])ee(E,e.iron,b*.49,.05,C*.29,.06,.1,.06);ee(E,e.gold,0,.44,.31,.16,.2,.025),ee(E,e.dark,0,.42,.325,.03,.06,.01);for(const b of[-1,1])E.add(a(c(o(new pn(.06,.012,4,12),e.iron),0,pt/2,0),b*.51,.3,0));return E.add(a(U(.1),0,.62,.22)),E}function Me(){const E=new Ee;ee(E,e.woodD,0,.25,0,1.3,.5,1.1,.03),ee(E,e.red,0,.58,.05,1.08,.16,.9,.06),ee(E,e.woodD,0,1.2,-.48,1.3,1.9,.2,.03),ee(E,e.red,0,1.25,-.36,.9,1.3,.06,.03);for(let b=0;b<4;b++)for(const C of[-1,1])E.add(a(o(new Xt(.03,6,4),e.gold),C*.4,.7+b*.36,-.32));for(const b of[-1,1])ee(E,e.woodD,b*.62,.75,0,.18,.5,1,.03),ee(E,e.iron,b*.62,1.01,.1,.22,.04,.8,.01),E.add(a(U(.12),b*.62,1.1,.45)),d(E,new W(b*.55,2.15,-.48),new W(b*.3,1,0),.5,.08,e.bone,0,6);return E.add(a(U(.32),0,2.25,-.4)),E.add(a(se(1),0,2.3,-.4)),E}function ve(E=t.red){const b=new Ee;return b.add(c(o(new nt(.42,.42,.06,18),i(E)),pt/2,0,0)),b.add(c(a(o(new pn(.42,.04,6,20),e.iron),0,0,.03),0,0,0)),b.add(a(U(.16),0,0,.08)),b}function ke(){const E=new Ee;return E.add(o(new Re(.7,.8,.08),e.woodD)),E.add(a(U(.32),0,.02,.18)),E.add(a(se(1),0,.12,.16)),E}function Q(E=.7,b=6){const C=new Ee;C.add(a(o(new nt(.012,.012,1,4),e.iron),0,.5,0)),C.add(c(o(new pn(E,.04,6,24),e.iron),pt/2,0,0));for(let F=0;F<b;F++){const te=F/b*pt*2;C.add(a(vt(.12),Math.cos(te)*E,.02,Math.sin(te)*E))}return C}function K(E,b,C,F){for(let te=0;te<b.length-1;te++){const[he,xe]=b[te],[z,R]=b[te+1],ne=5;for(let B=1;B<ne;B++){const Y=B/ne,G=he+(z-he)*Y,ue=xe+(R-xe)*Y,fe=C-Math.sin(Y*pt)*F;E.add(a(o(new Xt(.09,8,6),r(p(["#ffc070","#ff9a50","#ffe0a0"]),2),!1),G,fe,ue))}const g=Math.hypot(z-he,R-xe),P=o(new nt(.008,.008,g,3),e.dark,!1);P.position.set((he+z)/2,C-F*.6,(xe+R)/2),P.rotation.set(0,-Math.atan2(R-xe,z-he),pt/2),E.add(P)}}function de(E="round",b=1){const C=new Ee;if(C.add(a(o(new nt(.18*b,.3*b,1.8*b,8),e.wood),0,.9*b,0)),E==="pine")for(let F=0;F<4;F++)C.add(a(o(new mn((1.5-F*.3)*b,1.4*b,9),i(p(["#3e6a46","#47744c","#355f40"]))),0,(1.6+F*.8)*b,0));else if(E==="dead")for(let F=0;F<4;F++){const te=o(new nt(.04*b,.1*b,1.2*b,6),e.woodD),he=F*1.7;te.position.set(Math.cos(he)*.3*b,(1.6+F*.25)*b,Math.sin(he)*.3*b),te.rotation.set(Math.sin(he)*.8,0,-Math.cos(he)*.8),C.add(te)}else{const F=E==="autumn"?[t.autumn1,t.autumn2,t.autumn3]:[t.leaf,t.leafD,t.leafL];for(const[te,he,xe,z]of[[0,2.2,0,1.1],[.7,1.9,.3,.8],[-.6,2,-.3,.85],[.1,2.9,-.1,.7],[-.2,2.4,.6,.7]])C.add(a(o(new Xt(z*b,14,10),i(p(F))),te*b,he*b,xe*b))}return C.rotation.y=u(0,3),C}const De=new Map;function x(E,b,C,F,te=0){const he=new At().compose(new W(C,te,F),new Wn().setFromAxisAngle(new W(0,1,0),u(0,2*pt)),new W(b*u(.92,1.08),b*u(.9,1.12),b*u(.92,1.08))),xe=De.get(E);return xe?xe.push(he):De.set(E,[he]),!0}function V(E){E.flora.scene.updateMatrixWorld(!0);for(const[b,C]of De){const F=Xf(E.flora,b);if(!F)throw new Error(`no flora model for ${b}`);for(const[te,he]of Wf(s,F)){const xe=he.length===1?he[0]:Dc(he,!1);if(!xe)continue;const z=new Gr(xe,te,C.length);C.forEach((R,ne)=>z.setMatrixAt(ne,R)),z.castShadow=!te.isMeshStandardMaterial,z.receiveShadow=!0,z.frustumCulled=!1,A.add(z)}}}function X(){const E=new Ee;E.add(a(o(new nt(.3,.38,.6,8),e.stone),0,.3,0));const b=a(o(new wc(.32,0),r("#5fe0d0",1.3),!1),0,1,0);return b.scale.y=1.7,E.add(b),N.push({o:b,axis:"y",v:.6,bob:!0,y0:1}),E}function O(){const E=new Ee;E.add(a(o(new Xt(.5,16,10,0,pt*2,pt*.3,pt*.7),i("#2e2a2c",{side:on})),0,.55,0)),E.add(c(a(o(new li(.44,16),r("#7a9a3a",.6),!1),0,.8,0),-pt/2,0,0));for(let b=0;b<3;b++){const C=b/3*pt*2;E.add(a(o(new nt(.04,.04,.3,6),e.iron),Math.cos(C)*.32,.12,Math.sin(C)*.32))}return E}function ie(E,b,C=.9,F=-1){for(let te=0;te<b.length-1;te++){if(te===F)continue;const[he,xe]=b[te],[z,R]=b[te+1],ne=Math.hypot(z-he,R-xe),g=-Math.atan2(R-xe,z-he);for(const P of[C*.45,C*.85]){const B=o(new Re(ne,.07,.06),e.woodL);B.position.set((he+z)/2,P,(xe+R)/2),B.rotation.y=g,E.add(B)}for(const[P,B]of[[he,xe],[z,R]])E.add(a(o(new Re(.12,C+.15,.12),e.woodD),P,(C+.15)/2,B))}}function le(E){const b=new Ee;b.add(a(o(new Re(.1,2.2,.1),e.woodD),0,1.1,0));const C=v(256,96,(F,te,he)=>{F.fillStyle="#6a4630",F.fillRect(0,0,te,he),F.strokeStyle="#3a2419",F.lineWidth=8,F.strokeRect(4,4,te-8,he-8),F.fillStyle="#e3d5b6",F.font='800 40px "M PLUS Rounded 1c", "Inter Variable", sans-serif',F.textAlign="center",F.textBaseline="middle",F.fillText(E,te/2,he/2+2)});return b.add(a(o(new Re(1.1,.42,.06),i("#ffffff",{map:C})),.25,1.85,0)),b}function Be(E=t.red){const b=new Ee;for(const C of[-1,1])ee(b,e.woodD,C*.48,.24,0,.07,.18,1.96,.015);for(const[C,F,te]of[[-.48,-.98,1],[.48,-.98,1],[-.48,.98,.62],[.48,.98,.62]])ee(b,e.woodD,C,te/2,F,.1,te,.1,.015),b.add(a(o(new Xt(.065,8,6),e.wood),C,te+.04,F));for(let C=0;C<5;C++)ee(b,e.wood,-.32+C*.16,.66,-.98,.07,.5,.04,.01);return ee(b,e.woodD,0,.92,-.98,.98,.09,.07,.015),ee(b,e.woodD,0,.42,-.98,.98,.07,.07,.015),ee(b,e.woodD,0,.5,.98,.98,.14,.06,.015),ee(b,i("#e6d9bc"),0,.4,0,.9,.16,1.88,.05),ee(b,i(E),0,.5,.25,.96,.07,1.36,.03),ee(b,i(E),0,.535,-.38,.96,.05,.16,.025),ee(b,i("#efe4cc"),0,.54,-.72,.6,.12,.32,.055),ee(b,i("#8a7660"),0,.545,.72,.98,.04,.36,.02),b.add(a(U(.12),0,1.08,-.94)),b}function ct(){const E=new Ee;E.add(Be(t.redD));const b=Be("#4a3a30");b.position.y=1.15,E.add(b);for(const[C,F]of[[-.52,-1],[.52,-1],[-.52,1],[.52,1]])E.add(a(o(new Re(.1,2.2,.1),e.wood),C,1.1,F));for(let C=0;C<5;C++)E.add(a(o(new Re(.06,.05,.06),e.woodL),.52,.4+C*.3,.9));return E}function _t(){const E=new Ee;ee(E,e.woodD,0,1.05,0,1.2,1.9,.6,.02);for(const b of[-1,1]){ee(E,e.wood,b*.3,1.05,.31,.56,1.78,.03,.01);for(const C of[.62,1.48])ee(E,e.woodL,b*.3,C,.33,.4,.66,.02,.008);for(const C of[.4,1.7])ee(E,e.iron,b*.52,C,.33,.14,.05,.015);ee(E,e.gold,b*.06,1.08,.34,.03,.14,.03)}ee(E,e.wood,0,2.05,0,1.32,.1,.68,.02),ee(E,e.woodD,0,2.13,.01,1.4,.06,.74,.02);for(const b of[-1,1])for(const C of[-1,1])ee(E,e.woodD,b*.54,.05,C*.24,.12,.1,.12,.02);return E}function ot(E,b=1.8){const C=new Ee;return C.add(a(o(S(new Re(.12,b,E),b,1.3),e.plankWall),0,b/2,0)),C.add(a(o(new Re(.18,.1,E+.04),e.timber),0,b,0)),C}function Rt(E=.8,b=1.6){const C=new Nt(new qt(E,b,6,1),i(t.red,{side:on})),F=C.geometry.attributes.position;for(let he=0;he<F.count;he++)F.setZ(he,Math.sin(F.getX(he)*14)*.04);C.geometry.computeVertexNormals(),C.position.y=b/2+.1;const te=new Ee;return te.add(C),te.add(a(c(o(new nt(.02,.02,E+.2,6),e.iron),0,0,pt/2),0,b+.12,0)),te}function xt(){const E=new Ee;for(let b=0;b<5;b++)E.add(c(a(o(new nt(.045,.045,.42,8),i(p(["#e6d9bc","#d8c8a0","#efe4cc"]))),u(-.15,.15),.05+b%3*.08,u(-.1,.1)),0,u(-.4,.4),pt/2));return E}function Ye(){const E=new Ee;for(let C=0;C<3;C++){const F=C/3*pt*2;E.add(c(a(o(new nt(.025,.03,1.3,6),e.woodD),Math.cos(F)*.22,.62,Math.sin(F)*.22),Math.sin(F)*.32,0,-Math.cos(F)*.32))}const b=a(c(o(new nt(.07,.11,1.3,12),e.gold),.9,0,0),0,1.35,.15);return E.add(b),E}function ht(){const E=new Ee;E.add(a(o(new nt(.06,.22,.9,10),e.woodD),0,.45,0)),E.add(a(o(new Xt(.34,20,14),i("#2a3050")),0,1.25,0));for(let b=0;b<14;b++){const C=u(0,2*pt),F=u(-1.2,1.2);E.add(a(o(new Xt(.018,5,4),r("#ffd88a",1.6),!1),Math.cos(C)*Math.cos(F)*.345,1.25+Math.sin(F)*.345,Math.sin(C)*Math.cos(F)*.345))}return E.add(a(c(o(new pn(.4,.02,6,28),e.gold),0,pt/2,.3),0,1.25,0)),E}const en=v(256,192,(E,b,C)=>{E.fillStyle="#d8c8a0",E.fillRect(0,0,b,C),E.strokeStyle="#6a4a30",E.lineWidth=3,E.beginPath(),E.moveTo(30,150),E.bezierCurveTo(60,60,140,40,220,90),E.bezierCurveTo(200,150,120,170,30,150),E.stroke(),E.fillStyle="#8a2420";for(const[F,te]of[[90,100],[150,80],[180,120]])E.beginPath(),E.arc(F,te,6,0,pt*2),E.fill();E.strokeStyle="rgba(106, 74, 48, 0.5)",E.setLineDash([6,6]),E.beginPath(),E.moveTo(90,100),E.lineTo(150,80),E.lineTo(180,120),E.stroke()});function fn(){const E=new Ee;return E.add(o(new Re(1.4,1.05,.04),e.woodD)),E.add(a(new Nt(new qt(1.3,.95),new Cn({map:en,toneMapped:!1})),0,0,.03)),E}function un(){const E=new Ee,b=i("#6e6668"),C=i("#4a4446"),F=i("#b8b0a8"),te=o(new jo(.32,.8,6,12),b);te.rotation.x=pt/2,te.position.set(0,.34,0),te.scale.set(1.05,1,.85),E.add(te),E.add(a(o(new Xt(.24,12,10),F),0,.22,.25));const he=a(new Ee,0,.5,.78);he.add(o(new Xt(.24,14,10),b)),he.add(c(a(o(new mn(.12,.34,10),C),0,-.05,.26),pt/2,0,0)),he.add(a(o(new Xt(.04,6,4),e.dark,!1),0,-.03,.43));for(const xe of[-1,1])he.add(c(a(o(new mn(.07,.2,6),C),xe*.13,.22,-.02),0,0,-xe*.3)),he.add(a(o(new Xt(.03,6,4),r("#ffb84a",1.2),!1),xe*.1,.05,.2));he.rotation.x=.25,E.add(he);for(const[xe,z]of[[-.2,.55],[.2,.55]])E.add(c(a(o(new jo(.07,.36,4,8),b),xe,.08,z+.15),pt/2,0,0));return E.add(c(a(o(new mn(.12,.7,8),C),.25,.22,-.75),1.2,.6,0)),E.add(c(a(o(new pn(.2,.03,6,16),e.red),0,.42,.62),pt/2.4,0,0)),E}return{FLAGS:T,FLAMES:I,SPINNERS:N,FIRE_LIGHTS:M,BOOK_COLS:rt,flameTex:w,flame:re,skull:U,horns:se,fj:Z,bx:ee,taper:ae,boards:pe,cornerIron:we,barrel:me,crate:it,sack:Ze,table:We,roundTable:et,stool:Ot,bench:st,candle:vt,skullCandle:Mt,bottle:Ce,mug:Ve,plant:Qe,bookshelf:St,rug:lt,easel:Ie,desk:Ue,anvil:ze,dummy:D,target:Je,hay:qe,brazier:Ge,torch:Ae,poleBanner:je,hangingBanner:Te,skullPole:ce,spikes:L,drum:y,totem:J,tent:ye,weaponRack:ge,woodpile:Le,cart:Fe,stall:_e,well:be,lampPost:Pe,chest:q,throne:Me,shield:ve,trophy:ke,chandelier:Q,lanternString:K,tree:de,plantFlora:x,growFlora:V,crystal:X,cauldron:O,fence:ie,signPost:le,bed:Be,bunk:ct,wardrobe:_t,partition:ot,curtain:Rt,scrollStack:xt,telescope:Ye,starGlobe:ht,wallMap:fn,wolf:un,put:h}}const{PI:Lu}=Math;function LM(s,e,t,n){const{scene:i,COL:r,toon:o,mesh:l,at:a,rot:c,put:h,rnd:d,rr:f,pick:u,instanced:p}=s,{plantFlora:v,growFlora:m,lampPost:_,skullPole:S}=e,A=vu.pts;function T($,U){let se=!1;for(let oe=0,Z=A.length-1;oe<A.length;Z=oe++){const[ee,ae]=A[oe],[pe,we]=A[Z];ae>U!=we>U&&$<(pe-ee)*(U-ae)/(we-ae)+ee&&(se=!se)}return se}function I($,U,se,oe,Z,ee){const ae=Z-se,pe=ee-oe,we=ae*ae+pe*pe||1,$e=Math.max(0,Math.min(1,(($-se)*ae+(U-oe)*pe)/we));return Math.hypot($-se-ae*$e,U-oe-pe*$e)}const N=[...bi.map($=>({w:$.w*.65,pts:$.closed?[...$.line,$.line[0]]:$.line})),{w:1,pts:sa}],M=[],w=o1.map($=>r1[$]);function k($,U,se=.6){const oe=Math.atan2(U,$);if(Math.hypot($,U)>ls(oe)-1.6)return!1;for(const Z of N){const ee=Z.pts;for(let ae=0;ae<ee.length-1;ae++){const pe=ee[ae],we=ee[ae+1];if(!(Math.abs(pe[0]-$)>Z.w+se+1.5||Math.abs(pe[1]-U)>Z.w+se+1.5)&&I($,U,pe[0],pe[1],we[0],we[1])<Z.w+se)return!1}}for(const Z of Zs)if(Z.kind==="house"){const[ee,ae]=ia(Z,$,U),pe=3.4+se;if(Math.abs(ee)<Z.w/2+pe&&ae>-Z.d/2-pe&&ae<Z.d/2+pe+(Z.deck?4.5:0)+(Z.id==="tavern"?5:0))return!1}else if(Math.hypot($-Z.x,U-Z.z)<Z.r+(Z.kind==="open"?2.2:1.4)+se)return!1;for(const Z of Ic)if(Z.kind==="hut"){const[ee,ae]=ia(Z,$,U);if(Math.abs(ee)<Z.w/2+2.6+se&&Math.abs(ae)<Z.d/2+2.6+se)return!1}else if(Math.hypot($-Z.x,U-Z.z)<Z.r+1.8+se)return!1;for(let Z=0;Z<A.length;Z++){const[ee,ae]=A[Z],[pe,we]=A[(Z+1)%A.length];if(I($,U,ee,ae,pe,we)<vu.thick/2+.8+se||Math.hypot($-ee,U-ae)<3.6+se)return!1}if(Math.hypot($+44,U-26)<6+se||Math.hypot($-$l[0],U-$l[1])<9+se)return!1;for(const Z of w)if(Math.hypot($-Z.x,U-Z.z)<1.2+se)return!1;for(const Z of M)if(Math.hypot($-Z.x,U-Z.z)<Z.r+se)return!1;return!0}function H($,U,se,oe){let Z=0;for(let ee=0;ee<U&&Z<$;ee++){const ae=f(0,2*Lu),pe=Math.sqrt(d())*58,we=Math.cos(ae)*pe*1.04,$e=Math.sin(ae)*pe*.9;se(we,$e)&&(oe(we,$e),Z++)}}H(34,6e3,($,U)=>T($,U)&&k($,U,1.4),($,U)=>{v(u(["tree_maple","tree_maple","tree_oak","tree_cherry","tree_fruit","tree_birch","tree_cypress","tree_maple","tree_oak"]),f(.8,1.1),$,U),M.push({x:$,z:U,r:2.2})}),H(80,9e3,($,U)=>!T($,U)&&k($,U,1.6),($,U)=>{v(u(["tree_pine","tree_pine","tree_spruce","tree_spruce","tree_oak","tree_birch","tree_dead","tree_maple","tree_pine"]),f(.9,1.3),$,U),M.push({x:$,z:U,r:2.4})});{const $=[],U=[],se=[];H(90,9e3,(oe,Z)=>k(oe,Z,.5),(oe,Z)=>{const ee=f(.55,1);v(u(["bush_round","bush_round","bush_flower","bush_berry","bush_fern","bush_grass","bush_flower"]),ee*1.25,oe,Z),M.push({x:oe,z:Z,r:ee})}),H(60,6e3,(oe,Z)=>k(oe,Z,.4),(oe,Z)=>{const ee=f(.25,.8);$.push({x:oe,y:ee*.3,z:Z,sx:ee,sy:ee*f(.5,.85),sz:ee*f(.8,1.1),ry:f(0,3),c:u(["#8a8078","#7a706a","#968b81","#6e665f"])}),M.push({x:oe,z:Z,r:ee})}),H(1200,16e3,(oe,Z)=>k(oe,Z,.1),(oe,Z)=>{const ee=u(["#5f7f42","#6a8a48","#55753c","#7a9450"]);for(let ae=0;ae<4;ae++)U.push({x:oe+f(-.12,.12),y:.11,z:Z+f(-.12,.12),rx:f(-.35,.35),rz:f(-.35,.35),sy:f(.7,1.2),c:ee})}),H(320,12e3,(oe,Z)=>k(oe,Z,.1),(oe,Z)=>{se.push({x:oe,y:.16,z:Z,c:u([r.red,r.bone,"#d98a3a",r.redL,"#e8c860"])})}),p(new Mi(1,0),$,{cast:!0});for(const oe of[p(new mn(.06,.24,4),U,{}),p(new Xt(.09,7,5),se,{})])oe&&(oe.userData.noLine=!0)}m(n);for(const[$,U,se]of[["main",9,"lamp"],["ring",13,"skull"],["workshop",6,"skull"],["library",8,"skull"],["dock",6,"skull"]]){const oe=bi.find(ee=>ee.id===$);if(!oe)continue;const Z=oe.line;for(let ee=6;ee<Z.length-6;ee+=U*2){const[ae,pe]=Z[ee-1],[we,$e]=Z[ee+1],at=Z[ee],me=Math.hypot(we-ae,$e-pe)||1,He=-($e-pe)/me,it=(we-ae)/me,Ze=ee/(U*2)%2?1:-1,We=at[0]+He*Ze*(oe.w*.62+.5),et=at[1]+it*Ze*(oe.w*.62+.5);if($==="ring"&&Math.hypot(We,et)<10)continue;let Ot=!0;for(const st of w)Math.hypot(We-st.x,et-st.z)<2&&(Ot=!1);for(const st of Zs)st.kind!=="house"&&Math.hypot(We-st.x,et-st.z)<st.r+.5&&st.id!=="court"&&(Ot=!1);Ot&&h(i,se==="lamp"?_(0):S(f(2,2.6)),We,et,Math.atan2(-He*Ze,-it*Ze))}}const j=[];function re(){const $=new Ee,U=o("#2a2426");$.add(a(l(new Xt(.16,8,6),U),0,0,0)),$.children[0].scale.set(1,.8,1.6),$.add(a(l(new Xt(.1,8,6),U),0,.08,.2)),$.add(c(a(l(new mn(.03,.12,4),o("#c79a45")),0,.07,.33),Lu/2,0,0));for(const se of[-1,1]){const oe=a(new Ee,se*.1,.02,0);oe.add(a(l(new Re(.55,.03,.22),U),se*.27,0,0)),$.add(oe)}return $}for(let $=0;$<6;$++){const U=re();U.userData={r:f(30,55),y:f(16,28),a:f(0,6.28),s:f(.08,.14)},U.scale.setScalar(1.8),i.add(U),j.push(U)}for(const $ of["war","library","tavern"]){const U=t.HOUSES[$];if(!U)continue;const se=U.roof;for(let oe=0;oe<2;oe++){const Z=re(),ee=Z.children[3],ae=Z.children[4];ee.visible=ae.visible=!0,ee.rotation.z=.9,ae.rotation.z=-.9,Z.position.set(f(-U.r.w/3,U.r.w/3),se.hR+.3,0),Z.rotation.y=f(0,6),se.R.add(Z)}}return{CROWS:j}}const DM=["lead","designer","frontend","backend","reviewer"];async function NM(s){const e=s.reducedMotion;let t=s.width,n=s.height;const i=new Uv({canvas:s.canvas,antialias:!0,powerPreference:"high-performance"});AM(i,t,n,s.dpr);const r=new rp,o=RM(i,r),l=bM(),a=PM(o),c=await CM(o,a,l),h=EM(o,a,c,c.models,s.tasks??["todo","todo","todo","todo","todo"]),d=f1(o,a,c,h,c.models),f=LM(o,a,h,c.models),{TEX:u,COL:p,toon:v,rnd:m,rr:_,pick:S,_c:A}=o,{FLAMES:T,SPINNERS:I,FLAGS:N,FIRE_LIGHTS:M}=a,{HOUSES:w,deskF:k,deskB:H,hearthLight:j}=h,{mouthMat:re,coreMat:$,fireLight:U,chimneyTop:se,emberBase:oe,waterTex:Z,fallTex:ee,mists:ae,skyBoat:pe,airship:we}=d,{CROWS:$e}=f,{skyDome:at,cloudRing:me}=c,He=Object.fromEntries(DM.map(b=>[b,m()*6])),it=[];{const b=new Set;for(const xe of Object.values(w)){for(const z of Object.values(xe.sides))b.add(z.up);if(b.add(xe.roof.R),xe.upper){const z=xe.upper;b.add(z.U);const R=new Map;z.U.traverse(ne=>{if(!(ne instanceof Nt))return;const g=ne.material;let P=R.get(g);P||(P=g.clone(),R.set(g,P),z.mats.push(P)),ne.material=P})}}for(const{f:xe}of T)b.add(xe);for(const xe of I)b.add(xe.o);for(const xe of N)b.add(xe);for(const xe of $e)b.add(xe);[k.g,H.g,pe,we,me,at].forEach(xe=>b.add(xe)),r.updateMatrixWorld(!0);const C=new Map,F=["position","normal","uv"],te=xe=>{if(b.has(xe))return;for(const B of[...xe.children])te(B);if(!(xe instanceof Nt)||xe instanceof Gr||xe.children.length||Array.isArray(xe.material))return;const z=xe.material,R=xe.geometry;if(z.transparent||z.vertexColors||z.isShaderMaterial||z.depthWrite===!1||!R.attributes.uv||!R.attributes.normal||R.attributes.color)return;const ne=R.index?R.toNonIndexed():R.clone();for(const B of Object.keys(ne.attributes))F.includes(B)||ne.deleteAttribute(B);ne.morphAttributes={},ne.clearGroups(),ne.applyMatrix4(xe.matrixWorld);const g=z.uuid+(xe.castShadow?"s":"n"),P=C.get(g);P?P.geos.push(ne):C.set(g,{m:z,cast:xe.castShadow,geos:[ne]}),xe.parent?.remove(xe)};te(r);for(const{m:xe,cast:z,geos:R}of C.values()){const ne=Dc(R,!1);if(!ne){console.warn("could not merge",xe.type);continue}const g=new Nt(ne,xe);g.castShadow=z,g.receiveShadow=!0,g.matrixAutoUpdate=!1,r.add(g)}const he=new Cn({visible:!1});for(const[xe,z]of Object.entries(w)){const R=z.top+z.roof.hR,ne=new Nt(new Re(z.r.w+.6,R,z.r.d+.6),he);ne.position.set(z.r.x,R/2,z.r.z),ne.rotation.y=z.r.ry||0,ne.userData.houseId=xe,r.add(ne),ne.updateMatrixWorld(!0),it.push(ne)}}const Ze=new Vn(Dn.fov,t/n,Dn.near,Dn.far),We={t:new W(...Dn.home.target),p:new W(...Dn.home.position)};Ze.position.copy(We.p);const et=new Fv(Ze,i.domElement);et.target.copy(We.t),et.enableDamping=!0,et.dampingFactor=.08,et.minDistance=Dn.minDistance,et.maxDistance=Dn.maxDistance,et.maxPolarAngle=Dn.maxPolarAngle,et.minPolarAngle=Dn.minPolarAngle,et.screenSpacePanning=!1,et.zoomSpeed=.8,et.update();function Ot(){const b=et.target,C=Math.hypot(b.x,b.z),F=Dn.targetRadius;if(C>F){const te=F/C;Ze.position.x-=b.x*(1-te),Ze.position.z-=b.z*(1-te),b.x*=te,b.z*=te}if(b.y<Dn.targetMinY||b.y>Dn.targetMaxY){const te=Math.max(Dn.targetMinY,Math.min(Dn.targetMaxY,b.y));Ze.position.y+=te-b.y,b.y=te}Ze.position.y<Dn.minHeight&&(Ze.position.y=Dn.minHeight)}let st=null,vt=null,Mt=!1;function Ce(b,C){if(e){et.target.copy(b),Ze.position.copy(C),et.update();return}st={t0:performance.now(),dur:1100,ft:et.target.clone(),fp:Ze.position.clone(),tt:b,tp:C}}function Ve(b){if(b==="overview"){vt=null,Ce(We.t.clone(),We.p.clone());return}const C=w[b];vt=b,C&&(C.view="ground");const F=u1(b,[Ze.position.x-et.target.x,Ze.position.z-et.target.z]);Ce(new W(...F.target),new W(...F.position))}const Qe=()=>{st=null};i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("wheel",Qe,{passive:!0});const rt=b=>Mt||vt===b.id||!!b.near;function tt(b,C){const F=et.target,te=Math.hypot(b.r.x-F.x,b.r.z-F.z),he=Math.max(b.r.w,b.r.d)*.8+9;b.near=b.near?C<72&&te<he+4:C<64&&te<he}function St(b,C,F){if(F.fading!==C){F.fading=C;for(const te of b)te.transparent=C,te.needsUpdate=!0}}function lt(b,C,F){const te=C?0:1;b.s+=(te-b.s)*F,Math.abs(b.s-te)<.004&&(b.s=te),b.up.scale.y=Math.max(.001,b.s),b.up.visible=b.s>.03}function Ie(b){const C=Ze.position.distanceTo(et.target),F=e?1:Math.min(1,b*5),te=e?1:Math.min(1,b*6);for(const he of Object.values(w)){tt(he,C);const xe=rt(he),z=xe&&!!he.upper&&he.view==="upper",R=xe?1:0;he.lift+=(R-he.lift)*F,Math.abs(he.lift-R)<.002&&(he.lift=R);const ne=he.roof;ne.R.position.y=ne.base+he.lift*3.4,ne.R.visible=he.lift<.97;for(const fe of ne.mats)fe.opacity=1-he.lift;const g=Ze.position.x-he.r.x,P=Ze.position.z-he.r.z,B=Math.hypot(g,P)||1,Y=Math.cos(he.r.ry||0),G=Math.sin(he.r.ry||0),ue=fe=>{const Se=((fe.n[0]*Y+fe.n[1]*G)*g+(-fe.n[0]*G+fe.n[1]*Y)*P)/B;return Se>.32?fe.wish=!0:Se<.06&&(fe.wish=!1),!!fe.wish};for(const fe of Object.values(he.sides))lt(fe,xe&&!z&&ue(fe),te);if(he.upper){const fe=he.upper,Se=xe&&!z?1:0;fe.lift+=(Se-fe.lift)*F,Math.abs(fe.lift-Se)<.002&&(fe.lift=Se),St(fe.mats,fe.lift>0,fe),fe.U.position.y=fe.top+fe.lift*3.4,fe.U.visible=fe.lift<.97;for(const Oe of fe.mats)Oe.opacity=1-fe.lift;for(const Oe of Object.values(fe.sides))lt(Oe,z&&ue(Oe),te)}}}function Ue(b,C,F,te,he,xe){const z=new jt;z.setAttribute("position",new An(new Float32Array(b*3),3));const R=new Mr(z,new Ar({color:C,size:F,map:te,transparent:!0,opacity:he,depthWrite:!1,blending:te?Fs:Oi}));return R.frustumCulled=!1,R.userData.seed=Float32Array.from({length:b},()=>Math.random()),R.userData.h=Float32Array.from({length:b},()=>Math.random()*xe),R.userData.top=xe,R.visible=!e,r.add(R),R}const ze=[{at:se,p:Ue(30,"#d8cfc6",2.2,u.soft,.5,9),heat:!0}];for(const b of Object.values(w)){if(!b.roof.smokeAt)continue;b.g.updateMatrixWorld(!0);const C=b.roof.R.localToWorld(new W(...b.roof.smokeAt));ze.push({at:C,p:Ue(14,"#d8cfc6",1.4,u.soft,.45,5),house:b})}const D=Ue(60,"#ffb04a",.11,null,.9,4),Je=[];for(let b=0;b<4;b++){const C=new hs(new ks({map:u.spark,color:b%2?"#ffd27a":"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Oi}));C.scale.setScalar(.25),k.g.add(C),Je.push(C)}const qe=[];{const b=new Set;for(const F of Object.values(w)){b.add(F.roof.R);for(const te of Object.values(F.sides))b.add(te.up);if(F.upper){b.add(F.upper.U);for(const te of Object.values(F.upper.sides))b.add(te.up)}}r.updateMatrixWorld(!0);const C=[];r.traverse(F=>{F instanceof $i&&C.push(F)});for(const F of C){const te=[];for(let he=F.parent,xe=0;he&&xe<40;he=he.parent,xe++)b.has(he)&&te.push(he);r.attach(F),te.length&&qe.push({l:F,anc:te,base:F.intensity})}}function Ge(){for(const b of qe)b.anc.every(F=>F.visible)?b.l.intensity===0&&(b.l.intensity=b.base):b.l.intensity=0}const Ae=1;r.updateMatrixWorld(!0);const je=[];for(const{f:b,s:C}of T){if(C<1.3)continue;let F=b,te=!1;for(let he=0;F&&he<40;he++)F.userData.movesWithWall===!0&&(te=!0),F=F.parent;te||je.push(b.getWorldPosition(new W))}function Te(b){const C=new jt;C.setAttribute("position",new An(new Float32Array(b*3),3)),C.setAttribute("color",new An(new Float32Array(b*3),3));const F=new Mr(C,new Ar({size:.09,map:u.soft,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Oi,toneMapped:!1}));return F.frustumCulled=!1,F.visible=!e,r.add(F),F}const ce=Te(Math.max(1,je.length*7)),L=ce.geometry.attributes.position.count,y={src:Float32Array.from({length:L},(b,C)=>C%Math.max(1,je.length)),life:Float32Array.from({length:L},()=>Math.random()),sd:Float32Array.from({length:L},()=>Math.random())},J=240,ye=new Mr(new jt,new Ar({size:.07,map:u.soft,color:"#ffe2b0",transparent:!0,opacity:.75,depthWrite:!1,blending:Oi}));ye.geometry.setAttribute("position",new An(new Float32Array(J*3),3));const ge=Float32Array.from({length:J*3},()=>Math.random());ye.frustumCulled=!1,ye.visible=!e,r.add(ye);const Le=80,Fe=new qt(.16,.1),_e=new Gr(Fe,v("#ffffff",{side:on}),Le),be=[];for(let b=0;b<Le;b++)_e.setColorAt(b,A.set(S([p.autumn1,p.autumn2,p.autumn3,"#c9a03a"]))),be.push({x:_(-30,30),y:_(0,12),z:_(-30,30),r:_(0,6),v:_(.5,.9),w:_(1,3)});_e.instanceColor&&(_e.instanceColor.needsUpdate=!0),_e.frustumCulled=!1,_e.visible=!e,r.add(_e);const Pe=new At,q=new Wn,Me=new wi,ve=new W,ke=new W(1,1,1);function Q(b,C){const F=ce.geometry.attributes.position,te=ce.geometry.attributes.color;for(let z=0;z<F.count;z++){const R=je[y.src[z]];if(!R)break;y.life[z]=y.life[z]+C*(.35+y.sd[z]*.4),y.life[z]>1&&(y.life[z]=y.life[z]-1);const ne=y.life[z],g=y.sd[z];F.setXYZ(z,R.x+Math.sin(b*(1+g)+g*20)*.25*ne,R.y+.2+ne*2.2,R.z+Math.cos(b*(.8+g)+g*9)*.25*ne);const P=(1-ne)*(.6+.4*Math.sin(b*13+g*30))*2.2;te.setXYZ(z,P,P*.48,P*.16)}F.needsUpdate=!0,te.needsUpdate=!0;const he=ye.geometry.attributes.position,xe=et.target;for(let z=0;z<J;z++){const R=ge[z*3],ne=ge[z*3+1],g=ge[z*3+2],P=((R*44+b*.25*(ne-.5)-xe.x)%44+66)%44-22,B=((ne*44+b*.18*(R-.3)-xe.z)%44+66)%44-22;he.setXYZ(z,xe.x+P,.6+g*9+Math.sin(b*.5+R*20)*.4,xe.z+B)}he.needsUpdate=!0;for(let z=0;z<Le;z++){const R=be[z];R.y-=C*R.v,R.y<.05&&(R.y=_(8,13),R.x=xe.x+_(-28,28),R.z=xe.z+_(-28,28)),ve.set(R.x+Math.sin(b*.9+R.r)*.9,R.y,R.z+Math.cos(b*.7+R.r)*.6),Me.set(b*R.w+R.r,b*.6+R.r,Math.sin(b*2+R.r)*1.2),Pe.compose(ve,q.setFromEuler(Me),ke),_e.setMatrixAt(z,Pe)}_e.instanceMatrix.needsUpdate=!0}r.traverse(b=>{const C=b.material;(b instanceof Mr||b instanceof hs||b.userData.noLine||C&&!Array.isArray(C)&&(C.blending===Oi||C.depthWrite===!1))&&b.layers.set(Ae)});for(const b of[me,_e,at])b.traverse(C=>C.layers.set(Ae));Ze.layers.enable(Ae);const K=new i0({side:on}),de=new Un(1,1,{type:In});de.depthTexture=new fs(1,1),de.depthTexture.type=ui;const De=new gt(.5,.5,1),x=new gt;function V(){r.overrideMaterial=K,Ze.layers.disable(Ae);const b=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.getClearColor(x);const C=i.getClearAlpha();i.setClearColor(De,1),i.setRenderTarget(de),i.clear(),i.render(r,Ze),i.setRenderTarget(null),i.setClearColor(x,C),i.shadowMap.autoUpdate=b,Ze.layers.enable(Ae),r.overrideMaterial=null}const X=new e1(i,new Un(1,1,{type:In,samples:4}));X.setPixelRatio(i.getPixelRatio()),X.addPass(new n1(r,Ze));const O="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",ie=new Jl({uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},texel:{value:new Ne},width:{value:1},near:{value:.5},far:{value:900}},vertexShader:O,fragmentShader:`#include <packing>
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
    }`});X.addPass(ie);const le=new Ks(new Ne(t,n),.42,.55,.88);_1(le),X.addPass(le),X.addPass(new t1);const Be=new Jl({uniforms:{tDiffuse:{value:null},tDepth:{value:null},texel:{value:new Ne},near:{value:.5},far:{value:900},focus:{value:100},dof:{value:3},time:{value:0},ca:{value:.0024}},vertexShader:O,fragmentShader:`#include <packing>
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
    }`});X.addPass(Be);const ct=ie.uniforms,_t=Be.uniforms,ot=(b,C)=>b[C];ot(ct,"tDepth").value=de.depthTexture,ot(_t,"tDepth").value=de.depthTexture;function Rt(b,C){const F=i.getPixelRatio();i.setSize(b,C),X.setSize(b,C),le.setSize(b,C),de.setSize(Math.floor(b*F),Math.floor(C*F)),ot(ct,"texel").value.set(1/(b*F),1/(C*F)),ot(_t,"texel").value.copy(ot(ct,"texel").value),ot(ct,"width").value=Math.max(1,F*.85),Ze.aspect=b/C,Ze.updateProjectionMatrix()}for(const b of[ct,_t])ot(b,"near").value=Ze.near,ot(b,"far").value=Ze.far;Rt(t,n);const xt=0,Ye={frontend:!1,backend:!1};let ht=-1,en=0,fn=0,un=!1;function E(b){ht<0&&(ht=b);const C=(b-ht)/1e3,F=Math.min(.05,C-en);en=C;const te=.25+xt*.35,he=e?0:Math.sin(C*9)*.08+Math.sin(C*23)*.05;re.emissiveIntensity=.9+te*1.4+he,$.emissiveIntensity=1.2+te*1.8+he,U.intensity=8+te*16+he*20;for(const[xe,z]of[[k,"frontend"],[H,"backend"]]){const R=Ye[z],ne=xe.screen?.material;ne&&(ne.opacity+=((R?1:.3)-ne.opacity)*Math.min(1,F*4)),xe.light&&(xe.light.intensity=R?3.5:0)}if(Ie(F),!e){for(const{f:ne,ph:g}of T){const P=1+Math.sin(C*11+g)*.16+Math.sin(C*27+g*2)*.08;ne.scale.set(1/Math.sqrt(P),P,1/Math.sqrt(P))}for(const ne of M)ne.l.intensity=ne.base*(1+Math.sin(C*9+ne.ph)*.12+Math.sin(C*23+ne.ph)*.06);j.intensity=11+Math.sin(C*7)*1.5;for(const ne of I)ne.o.rotation[ne.axis]+=F*ne.v,ne.bob&&(ne.o.position.y=(ne.y0??0)+Math.sin(C*1.6)*.06);Math.abs(Math.sin(C*5.2+He.frontend)),Je.forEach((ne,g)=>{ne.material.opacity=0,ne.position.set(-.4+g*.19,.95+g%2*.12+0,g%2*.08-.29),ne.material.rotation=C*3+g}),k.kb&&(k.kb.position.y=k.kb.userData.y0+0);const xe=D.geometry.attributes.position,z=D.userData.h,R=D.userData.seed;for(let ne=0;ne<xe.count;ne++){const g=R[ne];z[ne]=z[ne]+F*(.5+g*.7)*(.5+te),z[ne]>D.userData.top&&(z[ne]=0),xe.setXYZ(ne,oe.x+Math.sin(C*(.6+g)+g*10)*.8*g,oe.y+z[ne],oe.z+Math.cos(C*.7+g*7)*.5*g)}xe.needsUpdate=!0,D.material.opacity=Math.min(.95,.2+te*.5);for(const ne of ze){const g=ne.p,P=g.geometry.attributes.position,B=g.userData.h,Y=g.userData.seed,G=ne.house?ne.house.lift:0;g.visible=G<.5;const ue=ne.heat?.6+te:.7;for(let fe=0;fe<P.count;fe++){const Se=Y[fe];B[fe]=B[fe]+F*(.5+Se*.4)*ue,B[fe]>g.userData.top&&(B[fe]=0);const Oe=B[fe];P.setXYZ(fe,ne.at.x+Math.sin(Oe*.8+Se*6)*Oe*.16+Oe*.3,ne.at.y+Oe,ne.at.z+Math.cos(Oe*.6+Se*4)*Oe*.14)}P.needsUpdate=!0}ee.offset.y=(ee.offset.y+F*1.6)%1,Z.offset.x=(Z.offset.x+F*.12)%1,me.rotation.y+=F*.004,ae.forEach((ne,g)=>{ne.material.opacity=.42+Math.sin(C*.8+g)*.1});for(const ne of $e){const g=ne.userData;g.a+=F*g.s,ne.position.set(Math.cos(g.a)*g.r,g.y+Math.sin(g.a*3)*.8,Math.sin(g.a)*g.r),ne.rotation.y=-g.a,ne.children[3].rotation.z=Math.sin(C*10+g.r)*.6,ne.children[4].rotation.z=-Math.sin(C*10+g.r)*.6}N.forEach((ne,g)=>{ne.rotation.y=Math.sin(C*2+g)*.3}),pe.position.y=-.4+Math.sin(C*.9)*.2,pe.rotation.x=Math.sin(C*.7)*.03;{const ne=we.userData;ne.a+=F*.022,we.position.set(Math.cos(ne.a)*ne.r,ne.y+Math.sin(C*.5)*.8,Math.sin(ne.a)*ne.r),we.rotation.y=Math.atan2(-Math.cos(ne.a),-Math.sin(ne.a))}}if(st){const xe=Math.min(1,(performance.now()-st.t0)/st.dur),z=xe<.5?4*xe*xe*xe:1-Math.pow(-2*xe+2,3)/2;et.target.lerpVectors(st.ft,st.tt,z),Ze.position.lerpVectors(st.fp,st.tp,z),xe>=1&&(st=null)}Ge(),et.update(),Ot(),e||Q(C,F),at.position.copy(Ze.position),ot(_t,"focus").value=Ze.position.distanceTo(et.target),ot(_t,"time").value=e?0:C,V(),X.render(),fn++}return{renderer:i,scene:r,camera:Ze,controls:et,housePicks:it,agentPhase:He,get frames(){return fn},start(){un=!1,i.setAnimationLoop(b=>{un||E(b)})},stop(){un=!0,i.setAnimationLoop(null)},resize(b,C){t=b,n=C,Rt(b,C)},flyToRoom:Ve,setOpenHouses(b){Mt=b},setTasks(b){h.drawBoard(b)},dispose(){i.setAnimationLoop(null),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("wheel",Qe),et.dispose(),X.dispose(),de.dispose(),i.dispose()}}}export{NM as createWorld};
