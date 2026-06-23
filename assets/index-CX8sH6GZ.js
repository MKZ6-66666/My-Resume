var Uv=Object.defineProperty;var Nv=(n,e,t)=>e in n?Uv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ke=(n,e,t)=>Nv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Th(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Dt={},No=[],tr=()=>{},g_=()=>!1,Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),eu=n=>n.startsWith("onUpdate:"),rn=Object.assign,bh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ov=Object.prototype.hasOwnProperty,xt=(n,e)=>Ov.call(n,e),$e=Array.isArray,Oo=n=>dl(n)==="[object Map]",v_=n=>dl(n)==="[object Set]",yd=n=>dl(n)==="[object Date]",it=n=>typeof n=="function",Wt=n=>typeof n=="string",ir=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",x_=n=>(St(n)||it(n))&&it(n.then)&&it(n.catch),S_=Object.prototype.toString,dl=n=>S_.call(n),Fv=n=>dl(n).slice(8,-1),M_=n=>dl(n)==="[object Object]",Ah=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pa=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Bv=/-\w/g,Oi=tu(n=>n.replace(Bv,e=>e.slice(1).toUpperCase())),zv=/\B([A-Z])/g,io=tu(n=>n.replace(zv,"-$1").toLowerCase()),y_=tu(n=>n.charAt(0).toUpperCase()+n.slice(1)),yu=tu(n=>n?`on${y_(n)}`:""),ji=(n,e)=>!Object.is(n,e),Eu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},E_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},kv=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Hv=n=>{const e=Wt(n)?Number(n):NaN;return isNaN(e)?n:e};let Ed;const nu=()=>Ed||(Ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rs(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Wt(i)?Xv(i):rs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Wt(n)||St(n))return n}const Gv=/;(?![^(]*\))/g,Vv=/:([^]+)/,Wv=/\/\*[^]*?\*\//g;function Xv(n){const e={};return n.replace(Wv,"").split(Gv).forEach(t=>{if(t){const i=t.split(Vv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function In(n){let e="";if(Wt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=In(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=Th(Yv);function T_(n){return!!n||n===""}function $v(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=wh(n[i],e[i]);return t}function wh(n,e){if(n===e)return!0;let t=yd(n),i=yd(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ir(n),i=ir(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?$v(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!wh(n[a],e[a]))return!1}}return String(n)===String(e)}const b_=n=>!!(n&&n.__v_isRef===!0),et=n=>Wt(n)?n:n==null?"":$e(n)||St(n)&&(n.toString===S_||!it(n.toString))?b_(n)?et(n.value):JSON.stringify(n,A_,2):String(n),A_=(n,e)=>b_(e)?A_(n,e.value):Oo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Tu(i,s)+" =>"]=r,t),{})}:v_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Tu(t))}:ir(e)?Tu(e):St(e)&&!$e(e)&&!M_(e)?String(e):e,Tu=(n,e="")=>{var t;return ir(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class jv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&fn&&(fn.active?(this.parent=fn,this.index=(fn.scopes||(fn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){++this._on===1&&(this.prevScope=fn,fn=this)}off(){if(this._on>0&&--this._on===0){if(fn===this)fn=this.prevScope;else{let e=fn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Kv(){return fn}let Lt;const bu=new WeakSet;class w_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&(fn.active?fn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bu.has(this)&&(bu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||C_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Td(this),P_(this);const e=Lt,t=Fi;Lt=this,Fi=!0;try{return this.fn()}finally{L_(this),Lt=e,Fi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ph(e);this.deps=this.depsTail=void 0,Td(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pf(this)&&this.run()}get dirty(){return Pf(this)}}let R_=0,La,Da;function C_(n,e=!1){if(n.flags|=8,e){n.next=Da,Da=n;return}n.next=La,La=n}function Rh(){R_++}function Ch(){if(--R_>0)return;if(Da){let e=Da;for(Da=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;La;){let e=La;for(La=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function P_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function L_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ph(i),Zv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Pf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(D_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function D_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ja)||(n.globalVersion=ja,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pf(n))))return;n.flags|=2;const e=n.dep,t=Lt,i=Fi;Lt=n,Fi=!0;try{P_(n);const r=n.fn(n._value);(e.version===0||ji(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Lt=t,Fi=i,L_(n),n.flags&=-3}}function Ph(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ph(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fi=!0;const I_=[];function Ar(){I_.push(Fi),Fi=!1}function wr(){const n=I_.pop();Fi=n===void 0?!0:n}function Td(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Lt;Lt=void 0;try{e()}finally{Lt=t}}}let ja=0;class Jv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Lt||!Fi||Lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Lt)t=this.activeLink=new Jv(Lt,this),Lt.deps?(t.prevDep=Lt.depsTail,Lt.depsTail.nextDep=t,Lt.depsTail=t):Lt.deps=Lt.depsTail=t,U_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Lt.depsTail,t.nextDep=void 0,Lt.depsTail.nextDep=t,Lt.depsTail=t,Lt.deps===t&&(Lt.deps=i)}return t}trigger(e){this.version++,ja++,this.notify(e)}notify(e){Rh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ch()}}}function U_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)U_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Lf=new WeakMap,Gs=Symbol(""),Df=Symbol(""),Ka=Symbol("");function Sn(n,e,t){if(Fi&&Lt){let i=Lf.get(n);i||Lf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Lh),r.map=i,r.key=t),r.track()}}function vr(n,e,t,i,r,s){const a=Lf.get(n);if(!a){ja++;return}const o=l=>{l&&l.trigger()};if(Rh(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&Ah(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Ka||!ir(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ka)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Gs)),Oo(n)&&o(a.get(Df)));break;case"delete":l||(o(a.get(Gs)),Oo(n)&&o(a.get(Df)));break;case"set":Oo(n)&&o(a.get(Gs));break}}Ch()}function so(n){const e=_t(n);return e===n?e:(Sn(e,"iterate",Ka),wi(n)?e:e.map(zi))}function iu(n){return Sn(n=_t(n),"iterate",Ka),n}function Yi(n,e){return Rr(n)?$o(Vs(n)?zi(e):e):zi(e)}const Qv={__proto__:null,[Symbol.iterator](){return Au(this,Symbol.iterator,n=>Yi(this,n))},concat(...n){return so(this).concat(...n.map(e=>$e(e)?so(e):e))},entries(){return Au(this,"entries",n=>(n[1]=Yi(this,n[1]),n))},every(n,e){return or(this,"every",n,e,void 0,arguments)},filter(n,e){return or(this,"filter",n,e,t=>t.map(i=>Yi(this,i)),arguments)},find(n,e){return or(this,"find",n,e,t=>Yi(this,t),arguments)},findIndex(n,e){return or(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return or(this,"findLast",n,e,t=>Yi(this,t),arguments)},findLastIndex(n,e){return or(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return or(this,"forEach",n,e,void 0,arguments)},includes(...n){return wu(this,"includes",n)},indexOf(...n){return wu(this,"indexOf",n)},join(n){return so(this).join(n)},lastIndexOf(...n){return wu(this,"lastIndexOf",n)},map(n,e){return or(this,"map",n,e,void 0,arguments)},pop(){return ca(this,"pop")},push(...n){return ca(this,"push",n)},reduce(n,...e){return bd(this,"reduce",n,e)},reduceRight(n,...e){return bd(this,"reduceRight",n,e)},shift(){return ca(this,"shift")},some(n,e){return or(this,"some",n,e,void 0,arguments)},splice(...n){return ca(this,"splice",n)},toReversed(){return so(this).toReversed()},toSorted(n){return so(this).toSorted(n)},toSpliced(...n){return so(this).toSpliced(...n)},unshift(...n){return ca(this,"unshift",n)},values(){return Au(this,"values",n=>Yi(this,n))}};function Au(n,e,t){const i=iu(n),r=i[e]();return i!==n&&!wi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ex=Array.prototype;function or(n,e,t,i,r,s){const a=iu(n),o=a!==n&&!wi(n),l=a[e];if(l!==ex[e]){const f=l.apply(n,s);return o?zi(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Yi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function bd(n,e,t,i){const r=iu(n),s=r!==n&&!wi(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Yi(n,c)),t.call(this,c,Yi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?Yi(n,l):l}function wu(n,e,t){const i=_t(n);Sn(i,"iterate",Ka);const r=i[e](...t);return(r===-1||r===!1)&&Nh(t[0])?(t[0]=_t(t[0]),i[e](...t)):r}function ca(n,e,t=[]){Ar(),Rh();const i=_t(n)[e].apply(n,t);return Ch(),wr(),i}const tx=Th("__proto__,__v_isRef,__isVue"),N_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ir));function nx(n){ir(n)||(n=String(n));const e=_t(this);return Sn(e,"has",n),e.hasOwnProperty(n)}class O_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?hx:k_:s?z_:B_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!r){let l;if(a&&(l=Qv[t]))return l;if(t==="hasOwnProperty")return nx}const o=Reflect.get(e,t,En(e)?e:i);if((ir(t)?N_.has(t):tx(t))||(r||Sn(e,"get",t),s))return o;if(En(o)){const l=a&&Ah(t)?o:o.value;return r&&St(l)?Uf(l):l}return St(o)?r?Uf(o):Ih(o):o}}class F_ extends O_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=$e(e)&&Ah(t);if(!this._isShallow){const c=Rr(s);if(!wi(i)&&!Rr(i)&&(s=_t(s),i=_t(i)),!a&&En(s)&&!En(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:xt(e,t),l=Reflect.set(e,t,i,En(e)?e:r);return e===_t(r)&&(o?ji(i,s)&&vr(e,"set",t,i):vr(e,"add",t,i)),l}deleteProperty(e,t){const i=xt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&vr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ir(t)||!N_.has(t))&&Sn(e,"has",t),i}ownKeys(e){return Sn(e,"iterate",$e(e)?"length":Gs),Reflect.ownKeys(e)}}class ix extends O_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const rx=new F_,sx=new ix,ox=new F_(!0);const If=n=>n,El=n=>Reflect.getPrototypeOf(n);function ax(n,e,t){return function(...i){const r=this.__v_raw,s=_t(r),a=Oo(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?If:e?$o:zi;return!e&&Sn(s,"iterate",l?Df:Gs),rn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Tl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function lx(n,e){const t={get(r){const s=this.__v_raw,a=_t(s),o=_t(r);n||(ji(r,o)&&Sn(a,"get",r),Sn(a,"get",o));const{has:l}=El(a),c=e?If:n?$o:zi;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Sn(_t(r),"iterate",Gs),r.size},has(r){const s=this.__v_raw,a=_t(s),o=_t(r);return n||(ji(r,o)&&Sn(a,"has",r),Sn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=_t(o),c=e?If:n?$o:zi;return!n&&Sn(l,"iterate",Gs),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return rn(t,n?{add:Tl("add"),set:Tl("set"),delete:Tl("delete"),clear:Tl("clear")}:{add(r){const s=_t(this),a=El(s),o=_t(r),l=!e&&!wi(r)&&!Rr(r)?o:r;return a.has.call(s,l)||ji(r,l)&&a.has.call(s,r)||ji(o,l)&&a.has.call(s,o)||(s.add(l),vr(s,"add",l,l)),this},set(r,s){!e&&!wi(s)&&!Rr(s)&&(s=_t(s));const a=_t(this),{has:o,get:l}=El(a);let c=o.call(a,r);c||(r=_t(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ji(s,u)&&vr(a,"set",r,s):vr(a,"add",r,s),this},delete(r){const s=_t(this),{has:a,get:o}=El(s);let l=a.call(s,r);l||(r=_t(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&vr(s,"delete",r,void 0),c},clear(){const r=_t(this),s=r.size!==0,a=r.clear();return s&&vr(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ax(r,n,e)}),t}function Dh(n,e){const t=lx(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(xt(t,r)&&r in i?t:i,r,s)}const cx={get:Dh(!1,!1)},ux={get:Dh(!1,!0)},fx={get:Dh(!0,!1)};const B_=new WeakMap,z_=new WeakMap,k_=new WeakMap,hx=new WeakMap;function dx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ih(n){return Rr(n)?n:Uh(n,!1,rx,cx,B_)}function px(n){return Uh(n,!1,ox,ux,z_)}function Uf(n){return Uh(n,!0,sx,fx,k_)}function Uh(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=dx(Fv(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vs(n){return Rr(n)?Vs(n.__v_raw):!!(n&&n.__v_isReactive)}function Rr(n){return!!(n&&n.__v_isReadonly)}function wi(n){return!!(n&&n.__v_isShallow)}function Nh(n){return n?!!n.__v_raw:!1}function _t(n){const e=n&&n.__v_raw;return e?_t(e):n}function mx(n){return!xt(n,"__v_skip")&&Object.isExtensible(n)&&E_(n,"__v_skip",!0),n}const zi=n=>St(n)?Ih(n):n,$o=n=>St(n)?Uf(n):n;function En(n){return n?n.__v_isRef===!0:!1}function ut(n){return _x(n,!1)}function _x(n,e){return En(n)?n:new gx(n,e)}class gx{constructor(e,t){this.dep=new Lh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_t(e),this._value=t?e:zi(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wi(e)||Rr(e);e=i?e:_t(e),ji(e,t)&&(this._rawValue=e,this._value=i?e:zi(e),this.dep.trigger())}}function Tt(n){return En(n)?n.value:n}const vx={get:(n,e,t)=>e==="__v_raw"?n:Tt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return En(r)&&!En(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function H_(n){return Vs(n)?n:new Proxy(n,vx)}class xx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Lh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ja-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Lt!==this)return C_(this,!0),!0}get value(){const e=this.dep.track();return D_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sx(n,e,t=!1){let i,r;return it(n)?i=n:(i=n.get,r=n.set),new xx(i,r,t)}const bl={},wc=new WeakMap;let Ps;function Mx(n,e=!1,t=Ps){if(t){let i=wc.get(t);i||wc.set(t,i=[]),i.push(n)}}function yx(n,e,t=Dt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:wi(S)||r===!1||r===0?Wr(S,1):Wr(S);let u,f,h,d,_=!1,g=!1;if(En(n)?(f=()=>n.value,_=wi(n)):Vs(n)?(f=()=>c(n),_=!0):$e(n)?(g=!0,_=n.some(S=>Vs(S)||wi(S)),f=()=>n.map(S=>{if(En(S))return S.value;if(Vs(S))return c(S);if(it(S))return l?l(S,2):S()})):it(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ar();try{h()}finally{wr()}}const S=Ps;Ps=u;try{return l?l(n,3,[d]):n(d)}finally{Ps=S}}:f=tr,e&&r){const S=f,w=r===!0?1/0:r;f=()=>Wr(S(),w)}const p=Kv(),m=()=>{u.stop(),p&&p.active&&bh(p.effects,u)};if(s&&e){const S=e;e=(...w)=>{const R=S(...w);return m(),R}}let E=g?new Array(n.length).fill(bl):bl;const x=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(S||r||_||(g?w.some((R,b)=>ji(R,E[b])):ji(w,E))){h&&h();const R=Ps;Ps=u;try{const b=[w,E===bl?void 0:g&&E[0]===bl?[]:E,d];E=w,l?l(e,3,b):e(...b)}finally{Ps=R}}}else u.run()};return o&&o(x),u=new w_(f),u.scheduler=a?()=>a(x,!1):x,d=S=>Mx(S,!1,u),h=u.onStop=()=>{const S=wc.get(u);if(S){if(l)l(S,4);else for(const w of S)w();wc.delete(u)}},e?i?x(!0):E=u.run():a?a(x.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Wr(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,En(n))Wr(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Wr(n[i],e,t);else if(v_(n)||Oo(n))n.forEach(i=>{Wr(i,e,t)});else if(M_(n)){for(const i in n)Wr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pl(n,e,t,i){try{return i?n(...i):n()}catch(r){ru(r,e,t)}}function Ci(n,e,t,i){if(it(n)){const r=pl(n,e,t,i);return r&&x_(r)&&r.catch(s=>{ru(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Ci(n[s],e,t,i));return r}}function ru(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Dt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ar(),pl(s,null,10,[n,l,c]),wr();return}}Ex(n,t,r,i,a)}function Ex(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nn=[];let Gi=-1;const Fo=[];let Vr=null,wo=0;const G_=Promise.resolve();let Rc=null;function Oh(n){const e=Rc||G_;return n?e.then(this?n.bind(this):n):e}function Tx(n){let e=Gi+1,t=Nn.length;for(;e<t;){const i=e+t>>>1,r=Nn[i],s=Za(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Fh(n){if(!(n.flags&1)){const e=Za(n),t=Nn[Nn.length-1];!t||!(n.flags&2)&&e>=Za(t)?Nn.push(n):Nn.splice(Tx(e),0,n),n.flags|=1,V_()}}function V_(){Rc||(Rc=G_.then(X_))}function bx(n){$e(n)?Fo.push(...n):Vr&&n.id===-1?Vr.splice(wo+1,0,n):n.flags&1||(Fo.push(n),n.flags|=1),V_()}function Ad(n,e,t=Gi+1){for(;t<Nn.length;t++){const i=Nn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function W_(n){if(Fo.length){const e=[...new Set(Fo)].sort((t,i)=>Za(t)-Za(i));if(Fo.length=0,Vr){Vr.push(...e);return}for(Vr=e,wo=0;wo<Vr.length;wo++){const t=Vr[wo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vr=null,wo=0}}const Za=n=>n.id==null?n.flags&2?-1:1/0:n.id;function X_(n){try{for(Gi=0;Gi<Nn.length;Gi++){const e=Nn[Gi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gi<Nn.length;Gi++){const e=Nn[Gi];e&&(e.flags&=-2)}Gi=-1,Nn.length=0,W_(),Rc=null,(Nn.length||Fo.length)&&X_()}}let Ji=null,Y_=null;function Cc(n){const e=Ji;return Ji=n,Y_=n&&n.type.__scopeId||null,e}function su(n,e=Ji,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Dc(-1);const s=Cc(e);let a;try{a=n(...r)}finally{Cc(s),i._d&&Dc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function vs(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ar(),Ci(l,t,8,[n.el,o,n,e]),wr())}}function Ax(n,e){if(Fn){let t=Fn.provides;const i=Fn.parent&&Fn.parent.provides;i===t&&(t=Fn.provides=Object.create(i)),t[n]=e}}function dc(n,e,t=!1){const i=Tg();if(i||Bo){let r=Bo?Bo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const wx=Symbol.for("v-scx"),Rx=()=>dc(wx);function Ru(n,e,t){return q_(n,e,t)}function q_(n,e,t=Dt){const{immediate:i,deep:r,flush:s,once:a}=t,o=rn({},t),l=e&&i||!e&&s!=="post";let c;if(el){if(s==="sync"){const d=Rx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=tr,d.resume=tr,d.pause=tr,d}}const u=Fn;o.call=(d,_,g)=>Ci(d,u,_,g);let f=!1;s==="post"?o.scheduler=d=>{Hn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Fh(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=yx(n,e,o);return el&&(c?c.push(h):l&&h()),h}function Cx(n,e,t){const i=this.proxy,r=Wt(n)?n.includes(".")?$_(i,n):()=>i[n]:n.bind(i,i);let s;it(e)?s=e:(s=e.handler,t=e);const a=_l(this),o=q_(r,s.bind(i),t);return a(),o}function $_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Px=Symbol("_vte"),j_=n=>n.__isTeleport,Mi=Symbol("_leaveCb"),ua=Symbol("_enterCb");function Lx(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{n.isMounted=!0}),ig(()=>{n.isUnmounting=!0}),n}const vi=[Function,Array],K_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vi,onEnter:vi,onAfterEnter:vi,onEnterCancelled:vi,onBeforeLeave:vi,onLeave:vi,onAfterLeave:vi,onLeaveCancelled:vi,onBeforeAppear:vi,onAppear:vi,onAfterAppear:vi,onAppearCancelled:vi},Z_=n=>{const e=n.subTree;return e.component?Z_(e.component):e},Dx={name:"BaseTransition",props:K_,setup(n,{slots:e}){const t=Tg(),i=Lx();return()=>{const r=e.default&&eg(e.default(),!0),s=r&&r.length?J_(r):t.subTree?Cr():void 0;if(!s)return;const a=_t(n),{mode:o}=a;if(i.isLeaving)return Cu(s);const l=wd(s);if(!l)return Cu(s);let c=Nf(l,a,i,t,f=>c=f);l.type!==On&&Ja(l,c);let u=t.subTree&&wd(t.subTree);if(u&&u.type!==On&&!Os(u,l)&&Z_(t).type!==On){let f=Nf(u,a,i,t);if(Ja(u,f),o==="out-in"&&l.type!==On)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Cu(s);o==="in-out"&&l.type!==On?f.delayLeave=(h,d,_)=>{const g=Q_(i,u);g[String(u.key)]=u,h[Mi]=()=>{d(),h[Mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function J_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==On){e=t;break}}return e}const Ix=Dx;function Q_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Nf(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:p,onAppear:m,onAfterAppear:E,onAppearCancelled:x}=e,S=String(n.key),w=Q_(t,n),R=(O,v)=>{O&&Ci(O,i,9,v)},b=(O,v)=>{const C=v[1];R(O,v),$e(O)?O.every(F=>F.length<=1)&&C():O.length<=1&&C()},U={mode:a,persisted:o,beforeEnter(O){let v=l;if(!t.isMounted)if(s)v=p||l;else return;O[Mi]&&O[Mi](!0);const C=w[S];C&&Os(n,C)&&C.el[Mi]&&C.el[Mi](),R(v,[O])},enter(O){if(w[S]===n)return;let v=c,C=u,F=f;if(!t.isMounted)if(s)v=m||c,C=E||u,F=x||f;else return;let ee=!1;O[ua]=$=>{ee||(ee=!0,$?R(F,[O]):R(C,[O]),U.delayedLeave&&U.delayedLeave(),O[ua]=void 0)};const D=O[ua].bind(null,!1);v?b(v,[O,D]):D()},leave(O,v){const C=String(n.key);if(O[ua]&&O[ua](!0),t.isUnmounting)return v();R(h,[O]);let F=!1;O[Mi]=D=>{F||(F=!0,v(),D?R(g,[O]):R(_,[O]),O[Mi]=void 0,w[C]===n&&delete w[C])};const ee=O[Mi].bind(null,!1);w[C]=n,d?b(d,[O,ee]):ee()},clone(O){const v=Nf(O,e,t,i,r);return r&&r(v),v}};return U}function Cu(n){if(ou(n))return n=ss(n),n.children=null,n}function wd(n){if(!ou(n))return j_(n.type)&&n.children?J_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function Ja(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ja(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function eg(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Bt?(a.patchFlag&128&&r++,i=i.concat(eg(a.children,e,o))):(e||a.type!==On)&&i.push(o!=null?ss(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function hs(n,e){return it(n)?rn({name:n.name},e,{setup:n}):n}function tg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Rd(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Pc=new WeakMap;function Ia(n,e,t,i,r=!1){if($e(n)){n.forEach((g,p)=>Ia(g,e&&($e(e)?e[p]:e),t,i,r));return}if(Ua(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ia(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Hh(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Dt?o.refs={}:o.refs,f=o.setupState,h=_t(f),d=f===Dt?g_:g=>Rd(u,g)?!1:xt(h,g),_=(g,p)=>!(p&&Rd(u,p));if(c!=null&&c!==l){if(Cd(e),Wt(c))u[c]=null,d(c)&&(f[c]=null);else if(En(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(it(l))pl(l,o,12,[a,u]);else{const g=Wt(l),p=En(l);if(g||p){const m=()=>{if(n.f){const E=g?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)$e(E)&&bh(E,s);else if($e(E))E.includes(s)||E.push(s);else if(g)u[l]=[s],d(l)&&(f[l]=u[l]);else{const x=[s];_(l,n.k)&&(l.value=x),n.k&&(u[n.k]=x)}}else g?(u[l]=a,d(l)&&(f[l]=a)):p&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{m(),Pc.delete(n)};E.id=-1,Pc.set(n,E),Hn(E,t)}else Cd(n),m()}}}function Cd(n){const e=Pc.get(n);e&&(e.flags|=8,Pc.delete(n))}nu().requestIdleCallback;nu().cancelIdleCallback;const Ua=n=>!!n.type.__asyncLoader,ou=n=>n.type.__isKeepAlive;function Ux(n,e){ng(n,"a",e)}function Nx(n,e){ng(n,"da",e)}function ng(n,e,t=Fn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(au(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ou(r.parent.vnode)&&Ox(i,e,t,r),r=r.parent}}function Ox(n,e,t,i){const r=au(e,n,i,!0);ml(()=>{bh(i[e],r)},t)}function au(n,e,t=Fn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ar();const o=_l(t),l=Ci(e,t,n,a);return o(),wr(),l});return i?r.unshift(s):r.push(s),s}}const Ir=n=>(e,t=Fn)=>{(!el||n==="sp")&&au(n,(...i)=>e(...i),t)},Fx=Ir("bm"),sr=Ir("m"),Bx=Ir("bu"),zx=Ir("u"),ig=Ir("bum"),ml=Ir("um"),kx=Ir("sp"),Hx=Ir("rtg"),Gx=Ir("rtc");function Vx(n,e=Fn){au("ec",n,e)}const Wx=Symbol.for("v-ndc");function hi(n,e,t,i){let r;const s=t,a=$e(n);if(a||Wt(n)){const o=a&&Vs(n);let l=!1,c=!1;o&&(l=!wi(n),c=Rr(n),n=iu(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?$o(zi(n[u])):zi(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Of=n=>n?bg(n)?Hh(n):Of(n.parent):null,Na=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Of(n.parent),$root:n=>Of(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sg(n),$forceUpdate:n=>n.f||(n.f=()=>{Fh(n.update)}),$nextTick:n=>n.n||(n.n=Oh.bind(n.proxy)),$watch:n=>Cx.bind(n)}),Pu=(n,e)=>n!==Dt&&!n.__isScriptSetup&&xt(n,e),Xx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Pu(i,e))return a[e]=1,i[e];if(r!==Dt&&xt(r,e))return a[e]=2,r[e];if(xt(s,e))return a[e]=3,s[e];if(t!==Dt&&xt(t,e))return a[e]=4,t[e];Ff&&(a[e]=0)}}const c=Na[e];let u,f;if(c)return e==="$attrs"&&Sn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Dt&&xt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Pu(r,e)?(r[e]=t,!0):i!==Dt&&xt(i,e)?(i[e]=t,!0):xt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Dt&&o[0]!=="$"&&xt(n,o)||Pu(e,o)||xt(s,o)||xt(i,o)||xt(Na,o)||xt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pd(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ff=!0;function Yx(n){const e=sg(n),t=n.proxy,i=n.ctx;Ff=!1,e.beforeCreate&&Ld(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:E,destroyed:x,unmounted:S,render:w,renderTracked:R,renderTriggered:b,errorCaptured:U,serverPrefetch:O,expose:v,inheritAttrs:C,components:F,directives:ee,filters:D}=e;if(c&&qx(c,i,null),a)for(const z in a){const N=a[z];it(N)&&(i[z]=N.bind(t))}if(r){const z=r.call(t,t);St(z)&&(n.data=Ih(z))}if(Ff=!0,s)for(const z in s){const N=s[z],K=it(N)?N.bind(t,t):it(N.get)?N.get.bind(t,t):tr,P=!it(N)&&it(N.set)?N.set.bind(t):tr,ae=wg({get:K,set:P});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>ae.value,set:de=>ae.value=de})}if(o)for(const z in o)rg(o[z],i,t,z);if(l){const z=it(l)?l.call(t):l;Reflect.ownKeys(z).forEach(N=>{Ax(N,z[N])})}u&&Ld(u,n,"c");function W(z,N){$e(N)?N.forEach(K=>z(K.bind(t))):N&&z(N.bind(t))}if(W(Fx,f),W(sr,h),W(Bx,d),W(zx,_),W(Ux,g),W(Nx,p),W(Vx,U),W(Gx,R),W(Hx,b),W(ig,E),W(ml,S),W(kx,O),$e(v))if(v.length){const z=n.exposed||(n.exposed={});v.forEach(N=>{Object.defineProperty(z,N,{get:()=>t[N],set:K=>t[N]=K,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===tr&&(n.render=w),C!=null&&(n.inheritAttrs=C),F&&(n.components=F),ee&&(n.directives=ee),O&&tg(n)}function qx(n,e,t=tr){$e(n)&&(n=Bf(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=dc(r.from||i,r.default,!0):s=dc(r.from||i):s=dc(r),En(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ld(n,e,t){Ci($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rg(n,e,t,i){let r=i.includes(".")?$_(t,i):()=>t[i];if(Wt(n)){const s=e[n];it(s)&&Ru(r,s)}else if(it(n))Ru(r,n.bind(t));else if(St(n))if($e(n))n.forEach(s=>rg(s,e,t,i));else{const s=it(n.handler)?n.handler.bind(t):e[n.handler];it(s)&&Ru(r,s,n)}}function sg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Lc(l,c,a,!0)),Lc(l,e,a)),St(e)&&s.set(e,l),l}function Lc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Lc(n,s,t,!0),r&&r.forEach(a=>Lc(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=$x[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const $x={data:Dd,props:Id,emits:Id,methods:Ma,computed:Ma,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:Ma,directives:Ma,watch:Kx,provide:Dd,inject:jx};function Dd(n,e){return e?n?function(){return rn(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function jx(n,e){return Ma(Bf(n),Bf(e))}function Bf(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ma(n,e){return n?rn(Object.create(null),n,e):e}function Id(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:rn(Object.create(null),Pd(n),Pd(e??{})):e}function Kx(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=wn(n[i],e[i]);return t}function og(){return{app:null,config:{isNativeTag:g_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zx=0;function Jx(n,e){return function(i,r=null){it(i)||(i=rn({},i)),r!=null&&!St(r)&&(r=null);const s=og(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Zx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:LS,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&it(u.install)?(a.add(u),u.install(c,...f)):it(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ft(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Hh(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Ci(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Bo;Bo=c;try{return u()}finally{Bo=f}}};return c}}let Bo=null;const Qx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Oi(e)}Modifiers`]||n[`${io(e)}Modifiers`];function eS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Dt;let r=t;const s=e.startsWith("update:"),a=s&&Qx(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Wt(u)?u.trim():u)),a.number&&(r=t.map(kv)));let o,l=i[o=yu(e)]||i[o=yu(Oi(e))];!l&&s&&(l=i[o=yu(io(e))]),l&&Ci(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ci(c,n,6,r)}}const tS=new WeakMap;function ag(n,e,t=!1){const i=t?tS:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!it(n)){const l=c=>{const u=ag(c,e,!0);u&&(o=!0,rn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(St(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>a[l]=null):rn(a,s),St(n)&&i.set(n,a),a)}function lu(n,e){return!n||!Qc(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(n,e[0].toLowerCase()+e.slice(1))||xt(n,io(e))||xt(n,e))}function Ud(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=n,p=Cc(n);let m,E;try{if(t.shapeFlag&4){const S=r||i,w=S;m=qi(c.call(w,S,u,f,d,h,_)),E=o}else{const S=e;m=qi(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),E=e.props?o:nS(o)}}catch(S){Oa.length=0,ru(S,n,1),m=Ft(On)}let x=m;if(E&&g!==!1){const S=Object.keys(E),{shapeFlag:w}=x;S.length&&w&7&&(s&&S.some(eu)&&(E=iS(E,s)),x=ss(x,E,!1,!0))}return t.dirs&&(x=ss(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ja(x,t.transition),m=x,Cc(p),m}const nS=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qc(t))&&((e||(e={}))[t]=n[t]);return e},iS=(n,e)=>{const t={};for(const i in n)(!eu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rS(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Nd(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(lg(a,i,h)&&!lu(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Nd(i,a,c):!0:!!a;return!1}function Nd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(lg(e,n,s)&&!lu(t,s))return!0}return!1}function lg(n,e,t){const i=n[t],r=e[t];return t==="style"&&St(i)&&St(r)?!wh(i,r):i!==r}function sS({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const cg={},ug=()=>Object.create(cg),fg=n=>Object.getPrototypeOf(n)===cg;function oS(n,e,t,i=!1){const r={},s=ug();n.propsDefaults=Object.create(null),hg(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:px(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function aS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=_t(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(lu(n.emitsOptions,h))continue;const d=e[h];if(l)if(xt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=Oi(h);r[_]=zf(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{hg(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!xt(e,f)&&((u=io(f))===f||!xt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=zf(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!xt(e,f))&&(delete s[f],c=!0)}c&&vr(n.attrs,"set","")}function hg(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Pa(l))continue;const c=e[l];let u;r&&xt(r,u=Oi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:lu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=_t(t),c=o||Dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=zf(r,l,f,c[f],n,!xt(c,f))}}return a}function zf(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=xt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&it(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=_l(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===io(t))&&(i=!0))}return i}const lS=new WeakMap;function dg(n,e,t=!1){const i=t?lS:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!it(n)){const u=f=>{l=!0;const[h,d]=dg(f,e,!0);rn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,No),No;if($e(s))for(let u=0;u<s.length;u++){const f=Oi(s[u]);Od(f)&&(a[f]=Dt)}else if(s)for(const u in s){const f=Oi(u);if(Od(f)){const h=s[u],d=a[f]=$e(h)||it(h)?{type:h}:rn({},h),_=d.type;let g=!1,p=!0;if($e(_))for(let m=0;m<_.length;++m){const E=_[m],x=it(E)&&E.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(p=!1)}else g=it(_)&&_.name==="Boolean";d[0]=g,d[1]=p,(g||xt(d,"default"))&&o.push(f)}}const c=[a,o];return St(n)&&i.set(n,c),c}function Od(n){return n[0]!=="$"&&!Pa(n)}const Bh=n=>n==="_"||n==="_ctx"||n==="$stable",zh=n=>$e(n)?n.map(qi):[qi(n)],cS=(n,e,t)=>{if(e._n)return e;const i=su((...r)=>zh(e(...r)),t);return i._c=!1,i},pg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bh(r))continue;const s=n[r];if(it(s))e[r]=cS(r,s,i);else if(s!=null){const a=zh(s);e[r]=()=>a}}},mg=(n,e)=>{const t=zh(e);n.slots.default=()=>t},_g=(n,e,t)=>{for(const i in e)(t||!Bh(i))&&(n[i]=e[i])},uS=(n,e,t)=>{const i=n.slots=ug();if(n.vnode.shapeFlag&32){const r=e._;r?(_g(i,e,t),t&&E_(i,"_",r,!0)):pg(e,i)}else e&&mg(n,e)},fS=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Dt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:_g(r,e,t):(s=!e.$stable,pg(e,r)),a=e}else e&&(mg(n,e),a={default:1});if(s)for(const o in r)!Bh(o)&&a[o]==null&&delete r[o]},Hn=_S;function hS(n){return dS(n)}function dS(n,e){const t=nu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=tr,insertStaticContent:_}=n,g=(M,I,k,te=null,Y=null,L=null,se=void 0,oe=null,ue=!!I.dynamicChildren)=>{if(M===I)return;M&&!Os(M,I)&&(te=we(M),de(M,Y,L,!0),M=null),I.patchFlag===-2&&(ue=!1,I.dynamicChildren=null);const{type:T,ref:y,shapeFlag:B}=I;switch(T){case cu:p(M,I,k,te);break;case On:m(M,I,k,te);break;case pc:M==null&&E(I,k,te,se);break;case Bt:F(M,I,k,te,Y,L,se,oe,ue);break;default:B&1?w(M,I,k,te,Y,L,se,oe,ue):B&6?ee(M,I,k,te,Y,L,se,oe,ue):(B&64||B&128)&&T.process(M,I,k,te,Y,L,se,oe,ue,Xe)}y!=null&&Y?Ia(y,M&&M.ref,L,I||M,!I):y==null&&M&&M.ref!=null&&Ia(M.ref,null,L,M,!0)},p=(M,I,k,te)=>{if(M==null)i(I.el=o(I.children),k,te);else{const Y=I.el=M.el;I.children!==M.children&&c(Y,I.children)}},m=(M,I,k,te)=>{M==null?i(I.el=l(I.children||""),k,te):I.el=M.el},E=(M,I,k,te)=>{[M.el,M.anchor]=_(M.children,I,k,te,M.el,M.anchor)},x=({el:M,anchor:I},k,te)=>{let Y;for(;M&&M!==I;)Y=h(M),i(M,k,te),M=Y;i(I,k,te)},S=({el:M,anchor:I})=>{let k;for(;M&&M!==I;)k=h(M),r(M),M=k;r(I)},w=(M,I,k,te,Y,L,se,oe,ue)=>{if(I.type==="svg"?se="svg":I.type==="math"&&(se="mathml"),M==null)R(I,k,te,Y,L,se,oe,ue);else{const T=M.el&&M.el._isVueCE?M.el:null;try{T&&T._beginPatch(),O(M,I,Y,L,se,oe,ue)}finally{T&&T._endPatch()}}},R=(M,I,k,te,Y,L,se,oe)=>{let ue,T;const{props:y,shapeFlag:B,transition:X,dirs:Z}=M;if(ue=M.el=a(M.type,L,y&&y.is,y),B&8?u(ue,M.children):B&16&&U(M.children,ue,null,te,Y,Lu(M,L),se,oe),Z&&vs(M,null,te,"created"),b(ue,M,M.scopeId,se,te),y){for(const me in y)me!=="value"&&!Pa(me)&&s(ue,me,null,y[me],L,te);"value"in y&&s(ue,"value",null,y.value,L),(T=y.onVnodeBeforeMount)&&Hi(T,te,M)}Z&&vs(M,null,te,"beforeMount");const re=pS(Y,X);re&&X.beforeEnter(ue),i(ue,I,k),((T=y&&y.onVnodeMounted)||re||Z)&&Hn(()=>{try{T&&Hi(T,te,M),re&&X.enter(ue),Z&&vs(M,null,te,"mounted")}finally{}},Y)},b=(M,I,k,te,Y)=>{if(k&&d(M,k),te)for(let L=0;L<te.length;L++)d(M,te[L]);if(Y){let L=Y.subTree;if(I===L||Sg(L.type)&&(L.ssContent===I||L.ssFallback===I)){const se=Y.vnode;b(M,se,se.scopeId,se.slotScopeIds,Y.parent)}}},U=(M,I,k,te,Y,L,se,oe,ue=0)=>{for(let T=ue;T<M.length;T++){const y=M[T]=oe?_r(M[T]):qi(M[T]);g(null,y,I,k,te,Y,L,se,oe)}},O=(M,I,k,te,Y,L,se)=>{const oe=I.el=M.el;let{patchFlag:ue,dynamicChildren:T,dirs:y}=I;ue|=M.patchFlag&16;const B=M.props||Dt,X=I.props||Dt;let Z;if(k&&xs(k,!1),(Z=X.onVnodeBeforeUpdate)&&Hi(Z,k,I,M),y&&vs(I,M,k,"beforeUpdate"),k&&xs(k,!0),(B.innerHTML&&X.innerHTML==null||B.textContent&&X.textContent==null)&&u(oe,""),T?v(M.dynamicChildren,T,oe,k,te,Lu(I,Y),L):se||N(M,I,oe,null,k,te,Lu(I,Y),L,!1),ue>0){if(ue&16)C(oe,B,X,k,Y);else if(ue&2&&B.class!==X.class&&s(oe,"class",null,X.class,Y),ue&4&&s(oe,"style",B.style,X.style,Y),ue&8){const re=I.dynamicProps;for(let me=0;me<re.length;me++){const ve=re[me],fe=B[ve],he=X[ve];(he!==fe||ve==="value")&&s(oe,ve,fe,he,Y,k)}}ue&1&&M.children!==I.children&&u(oe,I.children)}else!se&&T==null&&C(oe,B,X,k,Y);((Z=X.onVnodeUpdated)||y)&&Hn(()=>{Z&&Hi(Z,k,I,M),y&&vs(I,M,k,"updated")},te)},v=(M,I,k,te,Y,L,se)=>{for(let oe=0;oe<I.length;oe++){const ue=M[oe],T=I[oe],y=ue.el&&(ue.type===Bt||!Os(ue,T)||ue.shapeFlag&198)?f(ue.el):k;g(ue,T,y,null,te,Y,L,se,!0)}},C=(M,I,k,te,Y)=>{if(I!==k){if(I!==Dt)for(const L in I)!Pa(L)&&!(L in k)&&s(M,L,I[L],null,Y,te);for(const L in k){if(Pa(L))continue;const se=k[L],oe=I[L];se!==oe&&L!=="value"&&s(M,L,oe,se,Y,te)}"value"in k&&s(M,"value",I.value,k.value,Y)}},F=(M,I,k,te,Y,L,se,oe,ue)=>{const T=I.el=M?M.el:o(""),y=I.anchor=M?M.anchor:o("");let{patchFlag:B,dynamicChildren:X,slotScopeIds:Z}=I;Z&&(oe=oe?oe.concat(Z):Z),M==null?(i(T,k,te),i(y,k,te),U(I.children||[],k,y,Y,L,se,oe,ue)):B>0&&B&64&&X&&M.dynamicChildren&&M.dynamicChildren.length===X.length?(v(M.dynamicChildren,X,k,Y,L,se,oe),(I.key!=null||Y&&I===Y.subTree)&&gg(M,I,!0)):N(M,I,k,y,Y,L,se,oe,ue)},ee=(M,I,k,te,Y,L,se,oe,ue)=>{I.slotScopeIds=oe,M==null?I.shapeFlag&512?Y.ctx.activate(I,k,te,se,ue):D(I,k,te,Y,L,se,ue):$(M,I,ue)},D=(M,I,k,te,Y,L,se)=>{const oe=M.component=TS(M,te,Y);if(ou(M)&&(oe.ctx.renderer=Xe),bS(oe,!1,se),oe.asyncDep){if(Y&&Y.registerDep(oe,W,se),!M.el){const ue=oe.subTree=Ft(On);m(null,ue,I,k),M.placeholder=ue.el}}else W(oe,M,I,k,Y,L,se)},$=(M,I,k)=>{const te=I.component=M.component;if(rS(M,I,k))if(te.asyncDep&&!te.asyncResolved){z(te,I,k);return}else te.next=I,te.update();else I.el=M.el,te.vnode=I},W=(M,I,k,te,Y,L,se)=>{const oe=()=>{if(M.isMounted){let{next:B,bu:X,u:Z,parent:re,vnode:me}=M;{const ce=vg(M);if(ce){B&&(B.el=me.el,z(M,B,se)),ce.asyncDep.then(()=>{Hn(()=>{M.isUnmounted||T()},Y)});return}}let ve=B,fe;xs(M,!1),B?(B.el=me.el,z(M,B,se)):B=me,X&&Eu(X),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&Hi(fe,re,B,me),xs(M,!0);const he=Ud(M),ze=M.subTree;M.subTree=he,g(ze,he,f(ze.el),we(ze),M,Y,L),B.el=he.el,ve===null&&sS(M,he.el),Z&&Hn(Z,Y),(fe=B.props&&B.props.onVnodeUpdated)&&Hn(()=>Hi(fe,re,B,me),Y)}else{let B;const{el:X,props:Z}=I,{bm:re,m:me,parent:ve,root:fe,type:he}=M,ze=Ua(I);xs(M,!1),re&&Eu(re),!ze&&(B=Z&&Z.onVnodeBeforeMount)&&Hi(B,ve,I),xs(M,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(he,M.parent?M.parent.type:void 0);const ce=M.subTree=Ud(M);g(null,ce,k,te,M,Y,L),I.el=ce.el}if(me&&Hn(me,Y),!ze&&(B=Z&&Z.onVnodeMounted)){const ce=I;Hn(()=>Hi(B,ve,ce),Y)}(I.shapeFlag&256||ve&&Ua(ve.vnode)&&ve.vnode.shapeFlag&256)&&M.a&&Hn(M.a,Y),M.isMounted=!0,I=k=te=null}};M.scope.on();const ue=M.effect=new w_(oe);M.scope.off();const T=M.update=ue.run.bind(ue),y=M.job=ue.runIfDirty.bind(ue);y.i=M,y.id=M.uid,ue.scheduler=()=>Fh(y),xs(M,!0),T()},z=(M,I,k)=>{I.component=M;const te=M.vnode.props;M.vnode=I,M.next=null,aS(M,I.props,te,k),fS(M,I.children,k),Ar(),Ad(M),wr()},N=(M,I,k,te,Y,L,se,oe,ue=!1)=>{const T=M&&M.children,y=M?M.shapeFlag:0,B=I.children,{patchFlag:X,shapeFlag:Z}=I;if(X>0){if(X&128){P(T,B,k,te,Y,L,se,oe,ue);return}else if(X&256){K(T,B,k,te,Y,L,se,oe,ue);return}}Z&8?(y&16&&pe(T,Y,L),B!==T&&u(k,B)):y&16?Z&16?P(T,B,k,te,Y,L,se,oe,ue):pe(T,Y,L,!0):(y&8&&u(k,""),Z&16&&U(B,k,te,Y,L,se,oe,ue))},K=(M,I,k,te,Y,L,se,oe,ue)=>{M=M||No,I=I||No;const T=M.length,y=I.length,B=Math.min(T,y);let X;for(X=0;X<B;X++){const Z=I[X]=ue?_r(I[X]):qi(I[X]);g(M[X],Z,k,null,Y,L,se,oe,ue)}T>y?pe(M,Y,L,!0,!1,B):U(I,k,te,Y,L,se,oe,ue,B)},P=(M,I,k,te,Y,L,se,oe,ue)=>{let T=0;const y=I.length;let B=M.length-1,X=y-1;for(;T<=B&&T<=X;){const Z=M[T],re=I[T]=ue?_r(I[T]):qi(I[T]);if(Os(Z,re))g(Z,re,k,null,Y,L,se,oe,ue);else break;T++}for(;T<=B&&T<=X;){const Z=M[B],re=I[X]=ue?_r(I[X]):qi(I[X]);if(Os(Z,re))g(Z,re,k,null,Y,L,se,oe,ue);else break;B--,X--}if(T>B){if(T<=X){const Z=X+1,re=Z<y?I[Z].el:te;for(;T<=X;)g(null,I[T]=ue?_r(I[T]):qi(I[T]),k,re,Y,L,se,oe,ue),T++}}else if(T>X)for(;T<=B;)de(M[T],Y,L,!0),T++;else{const Z=T,re=T,me=new Map;for(T=re;T<=X;T++){const Re=I[T]=ue?_r(I[T]):qi(I[T]);Re.key!=null&&me.set(Re.key,T)}let ve,fe=0;const he=X-re+1;let ze=!1,ce=0;const mt=new Array(he);for(T=0;T<he;T++)mt[T]=0;for(T=Z;T<=B;T++){const Re=M[T];if(fe>=he){de(Re,Y,L,!0);continue}let Ae;if(Re.key!=null)Ae=me.get(Re.key);else for(ve=re;ve<=X;ve++)if(mt[ve-re]===0&&Os(Re,I[ve])){Ae=ve;break}Ae===void 0?de(Re,Y,L,!0):(mt[Ae-re]=T+1,Ae>=ce?ce=Ae:ze=!0,g(Re,I[Ae],k,null,Y,L,se,oe,ue),fe++)}const Ye=ze?mS(mt):No;for(ve=Ye.length-1,T=he-1;T>=0;T--){const Re=re+T,Ae=I[Re],Pe=I[Re+1],Ke=Re+1<y?Pe.el||xg(Pe):te;mt[T]===0?g(null,Ae,k,Ke,Y,L,se,oe,ue):ze&&(ve<0||T!==Ye[ve]?ae(Ae,k,Ke,2):ve--)}}},ae=(M,I,k,te,Y=null)=>{const{el:L,type:se,transition:oe,children:ue,shapeFlag:T}=M;if(T&6){ae(M.component.subTree,I,k,te);return}if(T&128){M.suspense.move(I,k,te);return}if(T&64){se.move(M,I,k,Xe);return}if(se===Bt){i(L,I,k);for(let B=0;B<ue.length;B++)ae(ue[B],I,k,te);i(M.anchor,I,k);return}if(se===pc){x(M,I,k);return}if(te!==2&&T&1&&oe)if(te===0)oe.persisted&&!L[Mi]?i(L,I,k):(oe.beforeEnter(L),i(L,I,k),Hn(()=>oe.enter(L),Y));else{const{leave:B,delayLeave:X,afterLeave:Z}=oe,re=()=>{M.ctx.isUnmounted?r(L):i(L,I,k)},me=()=>{const ve=L._isLeaving||!!L[Mi];L._isLeaving&&L[Mi](!0),oe.persisted&&!ve?re():B(L,()=>{re(),Z&&Z()})};X?X(L,re,me):me()}else i(L,I,k)},de=(M,I,k,te=!1,Y=!1)=>{const{type:L,props:se,ref:oe,children:ue,dynamicChildren:T,shapeFlag:y,patchFlag:B,dirs:X,cacheIndex:Z,memo:re}=M;if(B===-2&&(Y=!1),oe!=null&&(Ar(),Ia(oe,null,k,M,!0),wr()),Z!=null&&(I.renderCache[Z]=void 0),y&256){I.ctx.deactivate(M);return}const me=y&1&&X,ve=!Ua(M);let fe;if(ve&&(fe=se&&se.onVnodeBeforeUnmount)&&Hi(fe,I,M),y&6)le(M.component,k,te);else{if(y&128){M.suspense.unmount(k,te);return}me&&vs(M,null,I,"beforeUnmount"),y&64?M.type.remove(M,I,k,Xe,te):T&&!T.hasOnce&&(L!==Bt||B>0&&B&64)?pe(T,I,k,!1,!0):(L===Bt&&B&384||!Y&&y&16)&&pe(ue,I,k),te&&Ne(M)}const he=re!=null&&Z==null;(ve&&(fe=se&&se.onVnodeUnmounted)||me||he)&&Hn(()=>{fe&&Hi(fe,I,M),me&&vs(M,null,I,"unmounted"),he&&(M.el=null)},k)},Ne=M=>{const{type:I,el:k,anchor:te,transition:Y}=M;if(I===Bt){j(k,te);return}if(I===pc){S(M);return}const L=()=>{r(k),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(M.shapeFlag&1&&Y&&!Y.persisted){const{leave:se,delayLeave:oe}=Y,ue=()=>se(k,L);oe?oe(M.el,L,ue):ue()}else L()},j=(M,I)=>{let k;for(;M!==I;)k=h(M),r(M),M=k;r(I)},le=(M,I,k)=>{const{bum:te,scope:Y,job:L,subTree:se,um:oe,m:ue,a:T}=M;Fd(ue),Fd(T),te&&Eu(te),Y.stop(),L&&(L.flags|=8,de(se,M,I,k)),oe&&Hn(oe,I),Hn(()=>{M.isUnmounted=!0},I)},pe=(M,I,k,te=!1,Y=!1,L=0)=>{for(let se=L;se<M.length;se++)de(M[se],I,k,te,Y)},we=M=>{if(M.shapeFlag&6)return we(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const I=h(M.anchor||M.el),k=I&&I[Px];return k?h(k):I};let be=!1;const Me=(M,I,k)=>{let te;M==null?I._vnode&&(de(I._vnode,null,null,!0),te=I._vnode.component):g(I._vnode||null,M,I,null,null,null,k),I._vnode=M,be||(be=!0,Ad(te),W_(),be=!1)},Xe={p:g,um:de,m:ae,r:Ne,mt:D,mc:U,pc:N,pbc:v,n:we,o:n};return{render:Me,hydrate:void 0,createApp:Jx(Me)}}function Lu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gg(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=_r(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&gg(a,o)),o.type===cu&&(o.patchFlag===-1&&(o=r[s]=_r(o)),o.el=a.el),o.type===On&&!o.el&&(o.el=a.el)}}function mS(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function vg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vg(e)}function Fd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function xg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?xg(e.subTree):null}const Sg=n=>n.__isSuspense;function _S(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):bx(n)}const Bt=Symbol.for("v-fgt"),cu=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),pc=Symbol.for("v-stc"),Oa=[];let li=null;function Qe(n=!1){Oa.push(li=n?null:[])}function gS(){Oa.pop(),li=Oa[Oa.length-1]||null}let Qa=1;function Dc(n,e=!1){Qa+=n,n<0&&li&&e&&(li.hasOnce=!0)}function Mg(n){return n.dynamicChildren=Qa>0?li||No:null,gS(),Qa>0&&li&&li.push(n),n}function tt(n,e,t,i,r,s){return Mg(H(n,e,t,i,r,s,!0))}function vS(n,e,t,i,r){return Mg(Ft(n,e,t,i,r,!0))}function Ic(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const yg=({key:n})=>n??null,mc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Wt(n)||En(n)||it(n)?{i:Ji,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,r=null,s=n===Bt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yg(e),ref:e&&mc(e),scopeId:Y_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ji};return o?(kh(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),Qa>0&&!a&&li&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&li.push(l),l}const Ft=xS;function xS(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Wx)&&(n=On),Ic(n)){const o=ss(n,e,!0);return t&&kh(o,t),Qa>0&&!s&&li&&(o.shapeFlag&6?li[li.indexOf(n)]=o:li.push(o)),o.patchFlag=-2,o}if(CS(n)&&(n=n.__vccOpts),e){e=SS(e);let{class:o,style:l}=e;o&&!Wt(o)&&(e.class=In(o)),St(l)&&(Nh(l)&&!$e(l)&&(l=rn({},l)),e.style=rs(l))}const a=Wt(n)?1:Sg(n)?128:j_(n)?64:St(n)?4:it(n)?2:0;return H(n,e,t,i,r,a,s,!0)}function SS(n){return n?Nh(n)||fg(n)?rn({},n):n:null}function ss(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?MS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yg(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(mc(e)):[s,mc(e)]:mc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ss(n.ssContent),ssFallback:n.ssFallback&&ss(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ja(u,l.clone(u)),u}function _c(n=" ",e=0){return Ft(cu,null,n,e)}function Eg(n,e){const t=Ft(pc,null,n);return t.staticCount=e,t}function Cr(n="",e=!1){return e?(Qe(),vS(On,null,n)):Ft(On,null,n)}function qi(n){return n==null||typeof n=="boolean"?Ft(On):$e(n)?Ft(Bt,null,n.slice()):Ic(n)?_r(n):Ft(cu,null,String(n))}function _r(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ss(n)}function kh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),kh(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!fg(e)?e._ctx=Ji:r===3&&Ji&&(Ji.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:Ji},t=32):(e=String(e),i&64?(t=16,e=[_c(e)]):t=8);n.children=e,n.shapeFlag|=t}function MS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=In([e.class,i.class]));else if(r==="style")e.style=rs([e.style,i.style]);else if(Qc(r)){const s=e[r],a=i[r];a&&s!==a&&!($e(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!eu(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function Hi(n,e,t,i=null){Ci(n,e,7,[t,i])}const yS=og();let ES=0;function TS(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||yS,s={uid:ES++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dg(i,r),emitsOptions:ag(i,r),emit:null,emitted:null,propsDefaults:Dt,inheritAttrs:i.inheritAttrs,ctx:Dt,data:Dt,props:Dt,attrs:Dt,slots:Dt,refs:Dt,setupState:Dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=eS.bind(null,s),n.ce&&n.ce(s),s}let Fn=null;const Tg=()=>Fn||Ji;let Uc,kf;{const n=nu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Uc=e("__VUE_INSTANCE_SETTERS__",t=>Fn=t),kf=e("__VUE_SSR_SETTERS__",t=>el=t)}const _l=n=>{const e=Fn;return Uc(n),n.scope.on(),()=>{n.scope.off(),Uc(e)}},Bd=()=>{Fn&&Fn.scope.off(),Uc(null)};function bg(n){return n.vnode.shapeFlag&4}let el=!1;function bS(n,e=!1,t=!1){e&&kf(e);const{props:i,children:r}=n.vnode,s=bg(n);oS(n,i,s,e),uS(n,r,t||e);const a=s?AS(n,e):void 0;return e&&kf(!1),a}function AS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xx);const{setup:i}=t;if(i){Ar();const r=n.setupContext=i.length>1?RS(n):null,s=_l(n),a=pl(i,n,0,[n.props,r]),o=x_(a);if(wr(),s(),(o||n.sp)&&!Ua(n)&&tg(n),o){if(a.then(Bd,Bd),e)return a.then(l=>{zd(n,l)}).catch(l=>{ru(l,n,0)});n.asyncDep=a}else zd(n,a)}else Ag(n)}function zd(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=H_(e)),Ag(n)}function Ag(n,e,t){const i=n.type;n.render||(n.render=i.render||tr);{const r=_l(n);Ar();try{Yx(n)}finally{wr(),r()}}}const wS={get(n,e){return Sn(n,"get",""),n[e]}};function RS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wS),slots:n.slots,emit:n.emit,expose:e}}function Hh(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(H_(mx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Na)return Na[t](n)},has(e,t){return t in e||t in Na}})):n.proxy}function CS(n){return it(n)&&"__vccOpts"in n}const wg=(n,e)=>Sx(n,e,el);function PS(n,e,t){try{Dc(-1);const i=arguments.length;return i===2?St(e)&&!$e(e)?Ic(e)?Ft(n,null,[e]):Ft(n,e):Ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ic(t)&&(t=[t]),Ft(n,e,t))}finally{Dc(1)}}const LS="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hf;const kd=typeof window<"u"&&window.trustedTypes;if(kd)try{Hf=kd.createPolicy("vue",{createHTML:n=>n})}catch{}const Rg=Hf?n=>Hf.createHTML(n):n=>n,DS="http://www.w3.org/2000/svg",IS="http://www.w3.org/1998/Math/MathML",pr=typeof document<"u"?document:null,Hd=pr&&pr.createElement("template"),US={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?pr.createElementNS(DS,n):e==="mathml"?pr.createElementNS(IS,n):t?pr.createElement(n,{is:t}):pr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>pr.createTextNode(n),createComment:n=>pr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hd.innerHTML=Rg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Hd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ur="transition",fa="animation",tl=Symbol("_vtc"),Cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},NS=rn({},K_,Cg),OS=n=>(n.displayName="Transition",n.props=NS,n),Gh=OS((n,{slots:e})=>PS(Ix,FS(n),e)),Ss=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Gd=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function FS(n){const e={};for(const F in n)F in Cg||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,_=BS(r),g=_&&_[0],p=_&&_[1],{onBeforeEnter:m,onEnter:E,onEnterCancelled:x,onLeave:S,onLeaveCancelled:w,onBeforeAppear:R=m,onAppear:b=E,onAppearCancelled:U=x}=e,O=(F,ee,D,$)=>{F._enterCancelled=$,Ms(F,ee?u:o),Ms(F,ee?c:a),D&&D()},v=(F,ee)=>{F._isLeaving=!1,Ms(F,f),Ms(F,d),Ms(F,h),ee&&ee()},C=F=>(ee,D)=>{const $=F?b:E,W=()=>O(ee,F,D);Ss($,[ee,W]),Vd(()=>{Ms(ee,F?l:s),ar(ee,F?u:o),Gd($)||Wd(ee,i,g,W)})};return rn(e,{onBeforeEnter(F){Ss(m,[F]),ar(F,s),ar(F,a)},onBeforeAppear(F){Ss(R,[F]),ar(F,l),ar(F,c)},onEnter:C(!1),onAppear:C(!0),onLeave(F,ee){F._isLeaving=!0;const D=()=>v(F,ee);ar(F,f),F._enterCancelled?(ar(F,h),qd(F)):(qd(F),ar(F,h)),Vd(()=>{F._isLeaving&&(Ms(F,f),ar(F,d),Gd(S)||Wd(F,i,p,D))}),Ss(S,[F,D])},onEnterCancelled(F){O(F,!1,void 0,!0),Ss(x,[F])},onAppearCancelled(F){O(F,!0,void 0,!0),Ss(U,[F])},onLeaveCancelled(F){v(F),Ss(w,[F])}})}function BS(n){if(n==null)return null;if(St(n))return[Du(n.enter),Du(n.leave)];{const e=Du(n);return[e,e]}}function Du(n){return Hv(n)}function ar(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[tl]||(n[tl]=new Set)).add(e)}function Ms(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[tl];t&&(t.delete(e),t.size||(n[tl]=void 0))}function Vd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let zS=0;function Wd(n,e,t,i){const r=n._endId=++zS,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=kS(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function kS(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${Ur}Delay`),s=i(`${Ur}Duration`),a=Xd(r,s),o=i(`${fa}Delay`),l=i(`${fa}Duration`),c=Xd(o,l);let u=null,f=0,h=0;e===Ur?a>0&&(u=Ur,f=a,h=s.length):e===fa?c>0&&(u=fa,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?Ur:fa:null,h=u?u===Ur?s.length:l.length:0);const d=u===Ur&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ur}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Xd(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Yd(t)+Yd(n[i])))}function Yd(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function qd(n){return(n?n.ownerDocument:document).body.offsetHeight}function HS(n,e,t){const i=n[tl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $d=Symbol("_vod"),GS=Symbol("_vsh"),VS=Symbol(""),WS=/(?:^|;)\s*display\s*:/;function XS(n,e,t){const i=n.style,r=Wt(t);let s=!1;if(t&&!r){if(e)if(Wt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ya(i,o,"")}else for(const a in e)t[a]==null&&ya(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?qS(n,a,!Wt(e)&&e?e[a]:void 0,o)||ya(i,a,o):ya(i,a,"")}}else if(r){if(e!==t){const a=i[VS];a&&(t+=";"+a),i.cssText=t,s=WS.test(t)}}else e&&n.removeAttribute("style");$d in n&&(n[$d]=s?i.display:"",n[GS]&&(i.display="none"))}const jd=/\s*!important$/;function ya(n,e,t){if($e(t))t.forEach(i=>ya(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=YS(n,e);jd.test(t)?n.setProperty(io(i),t.replace(jd,""),"important"):n[i]=t}}const Kd=["Webkit","Moz","ms"],Iu={};function YS(n,e){const t=Iu[e];if(t)return t;let i=Oi(e);if(i!=="filter"&&i in n)return Iu[e]=i;i=y_(i);for(let r=0;r<Kd.length;r++){const s=Kd[r]+i;if(s in n)return Iu[e]=s}return e}function qS(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Wt(i)&&t===i}const Zd="http://www.w3.org/1999/xlink";function Jd(n,e,t,i,r,s=qv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Zd,e.slice(6,e.length)):n.setAttributeNS(Zd,e,t):t==null||s&&!T_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ir(t)?String(t):t)}function Qd(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rg(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=T_(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function $S(n,e,t,i){n.addEventListener(e,t,i)}function jS(n,e,t,i){n.removeEventListener(e,t,i)}const ep=Symbol("_vei");function KS(n,e,t,i,r=null){const s=n[ep]||(n[ep]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ZS(e);if(i){const c=s[e]=eM(i,r);$S(n,o,c,l)}else a&&(jS(n,o,a,l),s[e]=void 0)}}const tp=/(?:Once|Passive|Capture)$/;function ZS(n){let e;if(tp.test(n)){e={};let i;for(;i=n.match(tp);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):io(n.slice(2)),e]}let Uu=0;const JS=Promise.resolve(),QS=()=>Uu||(JS.then(()=>Uu=0),Uu=Date.now());function eM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if($e(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Ci(c,e,5,o)}}else Ci(r,e,5,[i])};return t.value=n,t.attached=QS(),t}const np=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tM=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?HS(n,i,a):e==="style"?XS(n,t,i):Qc(e)?eu(e)||KS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nM(n,e,i,a))?(Qd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jd(n,e,i,a,s,e!=="value")):n._isVueCE&&(iM(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Wt(i)))?Qd(n,Oi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Jd(n,e,i,a))};function nM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&np(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return np(e)&&Wt(t)?!1:e in n}function iM(n,e){const t=n._def.props;if(!t)return!1;const i=Oi(e);return Array.isArray(t)?t.some(r=>Oi(r)===i):Object.keys(t).some(r=>Oi(r)===i)}const rM=["ctrl","shift","alt","meta"],sM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>rM.some(t=>n[`${t}Key`]&&!e.includes(t))},oM=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=sM[e[a]];if(o&&o(r,e))return}return n(r,...s)})},aM=rn({patchProp:tM},US);let ip;function lM(){return ip||(ip=hS(aM))}const cM=(...n)=>{const e=lM().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fM(i);if(!r)return;const s=e._component;!it(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,uM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function uM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fM(n){return Wt(n)?document.querySelector(n):n}var rp="1.3.23";function Pg(n,e,t){return Math.max(n,Math.min(e,t))}function hM(n,e,t){return(1-t)*n+t*e}function dM(n,e,t,i){return hM(n,e,1-Math.exp(-t*i))}function pM(n,e){return(n%e+e)%e}var mM=class{constructor(){ke(this,"isRunning",!1);ke(this,"value",0);ke(this,"from",0);ke(this,"to",0);ke(this,"currentTime",0);ke(this,"lerp");ke(this,"duration");ke(this,"easing");ke(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Pg(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=dM(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function _M(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var gM=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){ke(this,"width",0);ke(this,"height",0);ke(this,"scrollHeight",0);ke(this,"scrollWidth",0);ke(this,"debouncedResize");ke(this,"wrapperResizeObserver");ke(this,"contentResizeObserver");ke(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ke(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ke(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=_M(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Lg=class{constructor(){ke(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const vM=100/6,Nr={passive:!1};function sp(n,e){return n===1?vM:n===2?e:1}var xM=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){ke(this,"touchStart",{x:0,y:0});ke(this,"lastDelta",{x:0,y:0});ke(this,"window",{width:0,height:0});ke(this,"emitter",new Lg);ke(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});ke(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});ke(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});ke(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=sp(i,this.window.width),s=sp(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});ke(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Nr),this.element.addEventListener("touchstart",this.onTouchStart,Nr),this.element.addEventListener("touchmove",this.onTouchMove,Nr),this.element.addEventListener("touchend",this.onTouchEnd,Nr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Nr),this.element.removeEventListener("touchstart",this.onTouchStart,Nr),this.element.removeEventListener("touchmove",this.onTouchMove,Nr),this.element.removeEventListener("touchend",this.onTouchEnd,Nr)}};const op=n=>Math.min(1,1.001-2**(-10*n));var SM=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:E=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:w=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:U=b,stopInertiaOnNavigate:O=!1}={}){ke(this,"_isScrolling",!1);ke(this,"_isStopped",!1);ke(this,"_isLocked",!1);ke(this,"_preventNextNativeScrollEvent",!1);ke(this,"_resetVelocityTimeout",null);ke(this,"_rafId",null);ke(this,"isTouching");ke(this,"time",0);ke(this,"userData",{});ke(this,"lastVelocity",0);ke(this,"velocity",0);ke(this,"direction",0);ke(this,"options");ke(this,"targetScroll");ke(this,"animatedScroll");ke(this,"animate",new mM);ke(this,"emitter",new Lg);ke(this,"dimensions");ke(this,"virtualScroll");ke(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});ke(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ke(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});ke(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});ke(this,"onPointerDown",n=>{n.button===1&&this.reset()});ke(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,E,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||r&&((E=_.hasAttribute)==null?void 0:E.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,d=r&&i.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ke(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ke(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rp,window.lenis||(window.lenis={}),window.lenis.version=rp,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof o=="number"&&typeof l!="function"?l=op:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:E,autoRaf:x,anchors:S,autoToggle:w,allowNestedScroll:R,naiveDimensions:U,stopInertiaOnNavigate:O},this.dimensions=new gM(n,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new xM(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=n,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?S.left:S.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),E=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=Pg(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=op:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,a,o,l,c,u,f,h,d,_;if(i-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(n);if(r.computedStyle=R,s=["auto","overlay","scroll"].includes(R.overflowX),a=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;f=n.scrollWidth,h=n.scrollHeight,d=n.clientWidth,_=n.clientHeight,o=f>d,l=h>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=h,r.clientWidth=d,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,E,x,S,w;if(g==="horizontal")p=Math.round(n.scrollLeft),m=f-d,E=e,x=s,S=o,w=c;else if(g==="vertical")p=Math.round(n.scrollTop),m=h-_,E=t,x=a,S=l,w=u;else return!1;return!w&&(p>=m||p<=0)?!0:(E>0?p<m:p>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?pM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="162",MM=0,ap=1,yM=2,Dg=1,EM=2,dr=3,os=0,Yn=1,xr=2,Jr=0,zo=1,Nc=2,lp=3,cp=4,TM=5,Fs=100,bM=101,AM=102,up=103,fp=104,wM=200,RM=201,CM=202,PM=203,Gf=204,Vf=205,LM=206,DM=207,IM=208,UM=209,NM=210,OM=211,FM=212,BM=213,zM=214,kM=0,HM=1,GM=2,Oc=3,VM=4,WM=5,XM=6,YM=7,Ig=0,qM=1,$M=2,Qr=0,jM=1,KM=2,ZM=3,JM=4,QM=5,ey=6,ty=7,Ug=300,jo=301,Ko=302,Wf=303,Xf=304,uu=306,Yf=1e3,Ui=1001,qf=1002,Un=1003,hp=1004,ha=1005,Vn=1006,Nu=1007,zs=1008,es=1009,ny=1010,iy=1011,Wh=1012,Ng=1013,Yr=1014,Sr=1015,nl=1016,Og=1017,Fg=1018,Ws=1020,ry=1021,Ni=1023,sy=1024,oy=1025,Xs=1026,Zo=1027,ay=1028,Bg=1029,ly=1030,zg=1031,kg=1033,Ou=33776,Fu=33777,Bu=33778,zu=33779,dp=35840,pp=35841,mp=35842,_p=35843,Hg=36196,gp=37492,vp=37496,xp=37808,Sp=37809,Mp=37810,yp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,wp=37816,Rp=37817,Cp=37818,Pp=37819,Lp=37820,Dp=37821,ku=36492,Ip=36494,Up=36495,cy=36283,Np=36284,Op=36285,Fp=36286,uy=3200,fy=3201,hy=0,dy=1,Xr="",Vi="srgb",ds="srgb-linear",Xh="display-p3",fu="display-p3-linear",Fc="linear",Ut="srgb",Bc="rec709",zc="p3",oo=7680,Bp=519,py=512,my=513,_y=514,Gg=515,gy=516,vy=517,xy=518,Sy=519,zp=35044,kp="300 es",$f=1035,yr=2e3,kc=2001;class sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=Math.PI/180,jf=180/Math.PI;function gl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Wn(n,e,t){return Math.max(e,Math.min(t,n))}function My(n,e){return(n%e+e)%e}function Gu(n,e,t){return(1-t)*n+t*e}function Hp(n){return(n&n-1)===0&&n!==0}function Kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,s,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=r[0],p=r[3],m=r[6],E=r[1],x=r[4],S=r[7],w=r[2],R=r[5],b=r[8];return s[0]=a*g+o*E+l*w,s[3]=a*p+o*x+l*R,s[6]=a*m+o*S+l*b,s[1]=c*g+u*E+f*w,s[4]=c*p+u*x+f*R,s[7]=c*m+u*S+f*b,s[2]=h*g+d*E+_*w,s[5]=h*p+d*x+_*R,s[8]=h*m+d*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vu.makeScale(e,t)),this}rotate(e){return this.premultiply(Vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new st;function Vg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yy(){const n=Hc("canvas");return n.style.display="block",n}const Gp={};function Ey(n){n in Gp||(Gp[n]=!0,console.warn(n))}const Vp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Al={[ds]:{transfer:Fc,primaries:Bc,toReference:n=>n,fromReference:n=>n},[Vi]:{transfer:Ut,primaries:Bc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fu]:{transfer:Fc,primaries:zc,toReference:n=>n.applyMatrix3(Wp),fromReference:n=>n.applyMatrix3(Vp)},[Xh]:{transfer:Ut,primaries:zc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wp),fromReference:n=>n.applyMatrix3(Vp).convertLinearToSRGB()}},Ty=new Set([ds,fu]),At={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ty.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Al[e].toReference,r=Al[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Al[n].primaries},getTransfer:function(n){return n===Xr?Fc:Al[n].transfer}};function ko(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ao;class Wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ao===void 0&&(ao=Hc("canvas")),ao.width=e.width,ao.height=e.height;const i=ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ko(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ko(t[i]/255)*255):t[i]=ko(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let by=0;class Xg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xu(r[a].image)):s.push(Xu(r[a]))}else s=Xu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ay=0;class qn extends sa{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,i=Ui,r=Ui,s=Vn,a=zs,o=Ni,l=es,c=qn.DEFAULT_ANISOTROPY,u=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=gl(),this.name="",this.source=new Xg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yf:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yf:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Ug;qn.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,w=(m+1)/2,R=(u+h)/4,b=(f+g)/4,U=(_+p)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=U/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-g)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends sa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new qn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qs extends wy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yg extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ry extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-o;const m=l*h+c*d+u*_+f*g,E=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,m*E);p=Math.sin(p*R)/w,o=Math.sin(o*R)/w}const S=o*E;if(l=l*p+h*S,c=c*p+d*S,u=u*p+_*S,f=f*p+g*S,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new ie,Xp=new vl;class xl{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Rl.subVectors(this.max,pa),lo.subVectors(e.a,pa),co.subVectors(e.b,pa),uo.subVectors(e.c,pa),Or.subVectors(co,lo),Fr.subVectors(uo,co),ys.subVectors(lo,uo);let t=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-ys.z,ys.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,ys.z,0,-ys.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-ys.y,ys.x,0];return!qu(t,lo,co,uo,Rl)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,lo,co,uo,Rl))?!1:(Cl.crossVectors(Or,Fr),t=[Cl.x,Cl.y,Cl.z],qu(t,lo,co,uo,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Pi=new ie,wl=new xl,lo=new ie,co=new ie,uo=new ie,Or=new ie,Fr=new ie,ys=new ie,pa=new ie,Rl=new ie,Cl=new ie,Es=new ie;function qu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Es.fromArray(n,s);const o=r.x*Math.abs(Es.x)+r.y*Math.abs(Es.y)+r.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),u=i.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Cy=new xl,ma=new ie,$u=new ie;class Sl{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add($u)),this.expandByPoint(ma.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new ie,ju=new ie,Pl=new ie,Br=new ie,Ku=new ie,Ll=new ie,Zu=new ie;class Yh{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ju.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(ju);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pl),o=Br.dot(this.direction),l=-Br.dot(Pl),c=Br.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ju).addScaledVector(Pl,h),d}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,r,s){Ku.subVectors(t,e),Ll.subVectors(i,e),Zu.crossVectors(Ku,Ll);let a=this.direction.dot(Zu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Br.subVectors(this.origin,e);const l=o*this.direction.dot(Ll.crossVectors(Br,Ll));if(l<0)return null;const c=o*this.direction.dot(Ku.cross(Br));if(c<0||l+c>a)return null;const u=-o*Br.dot(Zu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,g,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,g,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fo.setFromMatrixColumn(e,0).length(),s=1/fo.setFromMatrixColumn(e,1).length(),a=1/fo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Py,e,Ly)}lookAt(e,t,i){const r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),zr.crossVectors(i,ei),zr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),zr.crossVectors(i,ei)),zr.normalize(),Dl.crossVectors(ei,zr),r[0]=zr.x,r[4]=Dl.x,r[8]=ei.x,r[1]=zr.y,r[5]=Dl.y,r[9]=ei.y,r[2]=zr.z,r[6]=Dl.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],p=i[10],m=i[14],E=i[3],x=i[7],S=i[11],w=i[15],R=r[0],b=r[4],U=r[8],O=r[12],v=r[1],C=r[5],F=r[9],ee=r[13],D=r[2],$=r[6],W=r[10],z=r[14],N=r[3],K=r[7],P=r[11],ae=r[15];return s[0]=a*R+o*v+l*D+c*N,s[4]=a*b+o*C+l*$+c*K,s[8]=a*U+o*F+l*W+c*P,s[12]=a*O+o*ee+l*z+c*ae,s[1]=u*R+f*v+h*D+d*N,s[5]=u*b+f*C+h*$+d*K,s[9]=u*U+f*F+h*W+d*P,s[13]=u*O+f*ee+h*z+d*ae,s[2]=_*R+g*v+p*D+m*N,s[6]=_*b+g*C+p*$+m*K,s[10]=_*U+g*F+p*W+m*P,s[14]=_*O+g*ee+p*z+m*ae,s[3]=E*R+x*v+S*D+w*N,s[7]=E*b+x*C+S*$+w*K,s[11]=E*U+x*F+S*W+w*P,s[15]=E*O+x*ee+S*z+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+g*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+m*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],E=f*p*c-g*h*c+g*l*d-o*p*d-f*l*m+o*h*m,x=_*h*c-u*p*c-_*l*d+a*p*d+u*l*m-a*h*m,S=u*g*c-_*f*c+_*o*d-a*g*d-u*o*m+a*f*m,w=_*f*l-u*g*l-_*o*h+a*g*h+u*o*p-a*f*p,R=t*E+i*x+r*S+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=E*b,e[1]=(g*h*s-f*p*s-g*r*d+i*p*d+f*r*m-i*h*m)*b,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*m+i*l*m)*b,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*b,e[4]=x*b,e[5]=(u*p*s-_*h*s+_*r*d-t*p*d-u*r*m+t*h*m)*b,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*m-t*l*m)*b,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*b,e[8]=S*b,e[9]=(_*f*s-u*g*s-_*i*d+t*g*d+u*i*m-t*f*m)*b,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*m+t*o*m)*b,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*b,e[12]=w*b,e[13]=(u*g*r-_*f*r+_*i*h-t*g*h-u*i*p+t*f*p)*b,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*p-t*o*p)*b,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,p=a*f,m=o*f,E=l*c,x=l*u,S=l*f,w=i.x,R=i.y,b=i.z;return r[0]=(1-(g+m))*w,r[1]=(d+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(h+m))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(_+x)*b,r[9]=(p-E)*b,r[10]=(1-(h+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fo.set(r[0],r[1],r[2]).length();const a=fo.set(r[4],r[5],r[6]).length(),o=fo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Li.copy(this);const c=1/s,u=1/a,f=1/o;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=f,Li.elements[9]*=f,Li.elements[10]*=f,t.setFromRotationMatrix(Li),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=yr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(o===yr)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===kc)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=yr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,d=(i+r)*u;let _,g;if(o===yr)_=(a+s)*f,g=-2*f;else if(o===kc)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fo=new ie,Li=new $t,Py=new ie(0,0,0),Ly=new ie(1,1,1),zr=new ie,Dl=new ie,ei=new ie,Yp=new $t,qp=new vl;class Pr{constructor(e=0,t=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dy=0;const $p=new ie,ho=new vl,ur=new $t,Il=new ie,_a=new ie,Iy=new ie,Uy=new vl,jp=new ie(1,0,0),Kp=new ie(0,1,0),Zp=new ie(0,0,1),Ny={type:"added"},Oy={type:"removed"},Ju={type:"childadded",child:null},Qu={type:"childremoved",child:null};class zn extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ie,t=new Pr,i=new vl,r=new ie(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new st}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Il.copy(e):Il.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(_a,Il,this.up):ur.lookAt(Il,_a,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),ho.setFromRotationMatrix(ur),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ny),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oy),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zn.DEFAULT_UP=new ie(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new ie,fr=new ie,ef=new ie,hr=new ie,po=new ie,mo=new ie,Jp=new ie,tf=new ie,nf=new ie,rf=new ie;class Ki{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Di.subVectors(r,t),fr.subVectors(i,t),ef.subVectors(e,t);const a=Di.dot(Di),o=Di.dot(fr),l=Di.dot(ef),c=fr.dot(fr),u=fr.dot(ef),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(a,hr.y),l.addScaledVector(o,hr.z),l)}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),fr.subVectors(e,t),Di.cross(fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Di.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ki.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;po.subVectors(r,i),mo.subVectors(s,i),tf.subVectors(e,i);const l=po.dot(tf),c=mo.dot(tf);if(l<=0&&c<=0)return t.copy(i);nf.subVectors(e,r);const u=po.dot(nf),f=mo.dot(nf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(po,a);rf.subVectors(e,s);const d=po.dot(rf),_=mo.dot(rf);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(mo,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Jp.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Jp,o);const m=1/(p+g+h);return a=g*m,o=h*m,t.copy(i).addScaledVector(po,a).addScaledVector(mo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function sf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=My(e,1),t=Wn(t,0,1),i=Wn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=sf(a,s,e+1/3),this.g=sf(a,s,e),this.b=sf(a,s,e-1/3)}return At.toWorkingColorSpace(this,r),this}setStyle(e,t=Vi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){const i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return At.fromWorkingColorSpace(gn.copy(this),e),Math.round(Wn(gn.r*255,0,255))*65536+Math.round(Wn(gn.g*255,0,255))*256+Math.round(Wn(gn.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(gn.copy(this),t);const i=gn.r,r=gn.g,s=gn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Vi){At.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,r=gn.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Ul);const i=Gu(kr.h,Ul.h,t),r=Gu(kr.s,Ul.s,t),s=Gu(kr.l,Ul.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new pt;pt.NAMES=$g;let Fy=0;class oa extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=zo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Vf,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jg extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ie,Nl=new gt;class di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ey("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=da(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=da(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=da(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class Kg extends di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zg extends di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bi extends di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let By=0;const xi=new $t,of=new zn,_o=new ie,ti=new xl,ga=new xl,an=new ie;class ki extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?Zg:Kg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(ti.min,ga.min),ti.expandByPoint(an),an.addVectors(ti.max,ga.max),ti.expandByPoint(an)):(ti.expandByPoint(ga.min),ti.expandByPoint(ga.max))}ti.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(_o.fromBufferAttribute(e,c),an.add(_o)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new ie,l[U]=new ie;const c=new ie,u=new ie,f=new ie,h=new gt,d=new gt,_=new gt,g=new ie,p=new ie;function m(U,O,v){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,O),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,O),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),o[U].add(g),o[O].add(g),o[v].add(g),l[U].add(p),l[O].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,O=E.length;U<O;++U){const v=E[U],C=v.start,F=v.count;for(let ee=C,D=C+F;ee<D;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const x=new ie,S=new ie,w=new ie,R=new ie;function b(U){w.fromBufferAttribute(r,U),R.copy(w);const O=o[U];x.copy(O),x.sub(w.multiplyScalar(w.dot(O))).normalize(),S.crossVectors(R,O);const C=S.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,C)}for(let U=0,O=E.length;U<O;++U){const v=E[U],C=v.start,F=v.count;for(let ee=C,D=C+F;ee<D;ee+=3)b(e.getX(ee+0)),b(e.getX(ee+1)),b(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new ie,s=new ie,a=new ie,o=new ie,l=new ie,c=new ie,u=new ie,f=new ie;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new di(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ki,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qp=new $t,Ts=new Yh,Ol=new Sl,em=new ie,go=new ie,vo=new ie,xo=new ie,af=new ie,Fl=new ie,Bl=new gt,zl=new gt,kl=new gt,tm=new ie,nm=new ie,im=new ie,Hl=new ie,Gl=new ie;class Er extends zn{constructor(e=new ki,t=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(af.fromBufferAttribute(f,e),a?Fl.addScaledVector(af,u):Fl.addScaledVector(af.sub(t),u))}t.add(Fl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Ts.copy(e.ray).recast(e.near),!(Ol.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ol,em)===null||Ts.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Qp.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(Qp),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],E=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=E,w=x;S<w;S+=3){const R=o.getX(S),b=o.getX(S+1),U=o.getX(S+2);r=Vl(this,m,e,i,c,u,f,R,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const E=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);r=Vl(this,a,e,i,c,u,f,E,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],E=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=E,w=x;S<w;S+=3){const R=S,b=S+1,U=S+2;r=Vl(this,m,e,i,c,u,f,R,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const E=p,x=p+1,S=p+2;r=Vl(this,a,e,i,c,u,f,E,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function zy(n,e,t,i,r,s,a,o){let l;if(e.side===Yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===os,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:n}}function Vl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,go),n.getVertexPosition(l,vo),n.getVertexPosition(c,xo);const u=zy(n,e,t,i,go,vo,xo,Hl);if(u){r&&(Bl.fromBufferAttribute(r,o),zl.fromBufferAttribute(r,l),kl.fromBufferAttribute(r,c),u.uv=Ki.getInterpolation(Hl,go,vo,xo,Bl,zl,kl,new gt)),s&&(Bl.fromBufferAttribute(s,o),zl.fromBufferAttribute(s,l),kl.fromBufferAttribute(s,c),u.uv1=Ki.getInterpolation(Hl,go,vo,xo,Bl,zl,kl,new gt)),a&&(tm.fromBufferAttribute(a,o),nm.fromBufferAttribute(a,l),im.fromBufferAttribute(a,c),u.normal=Ki.getInterpolation(Hl,go,vo,xo,tm,nm,im,new ie),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new ie,materialIndex:0};Ki.getNormal(go,vo,xo,f.normal),u.face=f}return u}class Ml extends ki{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bi(c,3)),this.setAttribute("normal",new Bi(u,3)),this.setAttribute("uv",new Bi(f,2));function _(g,p,m,E,x,S,w,R,b,U,O){const v=S/b,C=w/U,F=S/2,ee=w/2,D=R/2,$=b+1,W=U+1;let z=0,N=0;const K=new ie;for(let P=0;P<W;P++){const ae=P*C-ee;for(let de=0;de<$;de++){const Ne=de*v-F;K[g]=Ne*E,K[p]=ae*x,K[m]=D,c.push(K.x,K.y,K.z),K[g]=0,K[p]=0,K[m]=R>0?1:-1,u.push(K.x,K.y,K.z),f.push(de/b),f.push(1-P/U),z+=1}}for(let P=0;P<U;P++)for(let ae=0;ae<b;ae++){const de=h+ae+$*P,Ne=h+ae+$*(P+1),j=h+(ae+1)+$*(P+1),le=h+(ae+1)+$*P;l.push(de,Ne,le),l.push(Ne,j,le),N+=6}o.addGroup(d,N,O),d+=N,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Cn(n){const e={};for(let t=0;t<n.length;t++){const i=Jo(n[t]);for(const r in i)e[r]=i[r]}return e}function ky(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jg(n){return n.getRenderTarget()===null?n.outputColorSpace:At.workingColorSpace}const Hy={clone:Jo,merge:Cn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qg extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new ie,rm=new gt,sm=new gt;class yi extends Qg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,rm,sm),t.subVectors(sm,rm)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const So=-90,Mo=1;class Wy extends zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(So,Mo,e,t);r.layers=this.layers,this.add(r);const s=new yi(So,Mo,e,t);s.layers=this.layers,this.add(s);const a=new yi(So,Mo,e,t);a.layers=this.layers,this.add(a);const o=new yi(So,Mo,e,t);o.layers=this.layers,this.add(o);const l=new yi(So,Mo,e,t);l.layers=this.layers,this.add(l);const c=new yi(So,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class e0 extends qn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends Qs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new e0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ml(5,5,5),s=new as({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Jr});s.uniforms.tEquirect.value=t;const a=new Er(r,s),o=t.minFilter;return t.minFilter===zs&&(t.minFilter=Vn),new Wy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const lf=new ie,Yy=new ie,qy=new st;class Ls{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lf.subVectors(i,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qy.getNormalMatrix(e),r=this.coplanarPoint(lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Sl,Wl=new ie;class t0{constructor(e=new Ls,t=new Ls,i=new Ls,r=new Ls,s=new Ls,a=new Ls){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],p=r[11],m=r[12],E=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-d,S-m).normalize(),i[1].setComponents(l+s,h+c,p+d,S+m).normalize(),i[2].setComponents(l+a,h+u,p+_,S+E).normalize(),i[3].setComponents(l-a,h-u,p-_,S-E).normalize(),i[4].setComponents(l-o,h-f,p-g,S-x).normalize(),t===yr)i[5].setComponents(l+o,h+f,p+g,S+x).normalize();else if(t===kc)i[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wl.x=r.normal.x>0?e.max.x:e.min.x,Wl.y=r.normal.y>0?e.max.y:e.min.y,Wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function n0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $y(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,_=u.updateRanges;if(n.bindBuffer(f,c),d.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];t?n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class hu extends ki{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const E=m*h-a;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-E,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const x=E+c*m,S=E+c*(m+1),w=E+1+c*(m+1),R=E+1+c*m;d.push(x,S,R),d.push(S,w,R)}this.setIndex(d),this.setAttribute("position",new Bi(_,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
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
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,$E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sT=`#if defined( USE_POINTS_UV )
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
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vT=`#ifdef USE_NORMALMAP
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
#endif`,xT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,DT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,UT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KT=`uniform sampler2D t2D;
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ib=`#define DISTANCE
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
}`,rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,db=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,_b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gb=`#define PHONG
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
}`,vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xb=`#define STANDARD
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
}`,Sb=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mb=`#define TOON
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
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Eb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rb=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:jy,alphahash_pars_fragment:Ky,alphamap_fragment:Zy,alphamap_pars_fragment:Jy,alphatest_fragment:Qy,alphatest_pars_fragment:eE,aomap_fragment:tE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:aE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:dE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:_E,color_vertex:gE,common:vE,cube_uv_reflection_fragment:xE,defaultnormal_vertex:SE,displacementmap_pars_vertex:ME,displacementmap_vertex:yE,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:bE,colorspace_pars_fragment:AE,envmap_fragment:wE,envmap_common_pars_fragment:RE,envmap_pars_fragment:CE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:GE,envmap_vertex:LE,fog_vertex:DE,fog_pars_vertex:IE,fog_fragment:UE,fog_pars_fragment:NE,gradientmap_pars_fragment:OE,lightmap_fragment:FE,lightmap_pars_fragment:BE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:kE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:WE,lights_phong_fragment:XE,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:$E,lights_fragment_begin:jE,lights_fragment_maps:KE,lights_fragment_end:ZE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:aT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:uT,morphtarget_pars_vertex:fT,morphtarget_vertex:hT,normal_fragment_begin:dT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:_T,normal_vertex:gT,normalmap_pars_fragment:vT,clearcoat_normal_fragment_begin:xT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:yT,opaque_fragment:ET,packing:TT,premultiplied_alpha_fragment:bT,project_vertex:AT,dithering_fragment:wT,dithering_pars_fragment:RT,roughnessmap_fragment:CT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:DT,shadowmap_vertex:IT,shadowmask_pars_fragment:UT,skinbase_vertex:NT,skinning_pars_vertex:OT,skinning_vertex:FT,skinnormal_vertex:BT,specularmap_fragment:zT,specularmap_pars_fragment:kT,tonemapping_fragment:HT,tonemapping_pars_fragment:GT,transmission_fragment:VT,transmission_pars_fragment:WT,uv_pars_fragment:XT,uv_pars_vertex:YT,uv_vertex:qT,worldpos_vertex:$T,background_vert:jT,background_frag:KT,backgroundCube_vert:ZT,backgroundCube_frag:JT,cube_vert:QT,cube_frag:eb,depth_vert:tb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:rb,equirect_vert:sb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:fb,meshlambert_frag:hb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:_b,meshphong_vert:gb,meshphong_frag:vb,meshphysical_vert:xb,meshphysical_frag:Sb,meshtoon_vert:Mb,meshtoon_frag:yb,points_vert:Eb,points_frag:Tb,shadow_vert:bb,shadow_frag:Ab,sprite_vert:wb,sprite_frag:Rb},Ee={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},$i={basic:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Cn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Cn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Cn([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Cn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Cn([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Cn([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Cn([Ee.common,Ee.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Cn([Ee.lights,Ee.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};$i.physical={uniforms:Cn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Xl={r:0,b:0,g:0},As=new Pr,Cb=new $t;function Pb(n,e,t,i,r,s,a){const o=new pt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(p,m){let E=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===uu)?(u===void 0&&(u=new Er(new Ml(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Jo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),As.copy(m.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(As)),u.material.toneMapped=At.getTransfer(x.colorSpace)!==Ut,(f!==x||h!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Er(new hu(2,2),new as({name:"BackgroundMaterial",uniforms:Jo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=At.getTransfer(x.colorSpace)!==Ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Xl,Jg(n)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function Lb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(D,$,W,z,N){let K=!1;if(a){const P=g(z,W,$);c!==P&&(c=P,d(c.object)),K=m(D,z,W,N),K&&E(D,z,W,N)}else{const P=$.wireframe===!0;(c.geometry!==z.id||c.program!==W.id||c.wireframe!==P)&&(c.geometry=z.id,c.program=W.id,c.wireframe=P,K=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,U(D,$,W,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,$,W){const z=W.wireframe===!0;let N=o[D.id];N===void 0&&(N={},o[D.id]=N);let K=N[$.id];K===void 0&&(K={},N[$.id]=K);let P=K[z];return P===void 0&&(P=p(h()),K[z]=P),P}function p(D){const $=[],W=[],z=[];for(let N=0;N<r;N++)$[N]=0,W[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:W,attributeDivisors:z,object:D,attributes:{},index:null}}function m(D,$,W,z){const N=c.attributes,K=$.attributes;let P=0;const ae=W.getAttributes();for(const de in ae)if(ae[de].location>=0){const j=N[de];let le=K[de];if(le===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;P++}return c.attributesNum!==P||c.index!==z}function E(D,$,W,z){const N={},K=$.attributes;let P=0;const ae=W.getAttributes();for(const de in ae)if(ae[de].location>=0){let j=K[de];j===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const le={};le.attribute=j,j&&j.data&&(le.data=j.data),N[de]=le,P++}c.attributes=N,c.attributesNum=P,c.index=z}function x(){const D=c.newAttributes;for(let $=0,W=D.length;$<W;$++)D[$]=0}function S(D){w(D,0)}function w(D,$){const W=c.newAttributes,z=c.enabledAttributes,N=c.attributeDivisors;W[D]=1,z[D]===0&&(n.enableVertexAttribArray(D),z[D]=1),N[D]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,$),N[D]=$)}function R(){const D=c.newAttributes,$=c.enabledAttributes;for(let W=0,z=$.length;W<z;W++)$[W]!==D[W]&&(n.disableVertexAttribArray(W),$[W]=0)}function b(D,$,W,z,N,K,P){P===!0?n.vertexAttribIPointer(D,$,W,N,K):n.vertexAttribPointer(D,$,W,z,N,K)}function U(D,$,W,z){if(i.isWebGL2===!1&&(D.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=z.attributes,K=W.getAttributes(),P=$.defaultAttributeValues;for(const ae in K){const de=K[ae];if(de.location>=0){let Ne=N[ae];if(Ne===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(Ne=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(Ne=D.instanceColor)),Ne!==void 0){const j=Ne.normalized,le=Ne.itemSize,pe=t.get(Ne);if(pe===void 0)continue;const we=pe.buffer,be=pe.type,Me=pe.bytesPerElement,Xe=i.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||Ne.gpuType===Ng);if(Ne.isInterleavedBufferAttribute){const Ce=Ne.data,M=Ce.stride,I=Ne.offset;if(Ce.isInstancedInterleavedBuffer){for(let k=0;k<de.locationSize;k++)w(de.location+k,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let k=0;k<de.locationSize;k++)S(de.location+k);n.bindBuffer(n.ARRAY_BUFFER,we);for(let k=0;k<de.locationSize;k++)b(de.location+k,le/de.locationSize,be,j,M*Me,(I+le/de.locationSize*k)*Me,Xe)}else{if(Ne.isInstancedBufferAttribute){for(let Ce=0;Ce<de.locationSize;Ce++)w(de.location+Ce,Ne.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ce=0;Ce<de.locationSize;Ce++)S(de.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ce=0;Ce<de.locationSize;Ce++)b(de.location+Ce,le/de.locationSize,be,j,le*Me,le/de.locationSize*Ce*Me,Xe)}}else if(P!==void 0){const j=P[ae];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(de.location,j);break;case 3:n.vertexAttrib3fv(de.location,j);break;case 4:n.vertexAttrib4fv(de.location,j);break;default:n.vertexAttrib1fv(de.location,j)}}}}R()}function O(){F();for(const D in o){const $=o[D];for(const W in $){const z=$[W];for(const N in z)_(z[N].object),delete z[N];delete $[W]}delete o[D]}}function v(D){if(o[D.id]===void 0)return;const $=o[D.id];for(const W in $){const z=$[W];for(const N in z)_(z[N].object),delete z[N];delete $[W]}delete o[D.id]}function C(D){for(const $ in o){const W=o[$];if(W[D.id]===void 0)continue;const z=W[D.id];for(const N in z)_(z[N].object),delete z[N];delete W[D.id]}}function F(){ee(),u=!0,c!==l&&(c=l,d(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:ee,dispose:O,releaseStatesOfGeometry:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:S,disableUnusedAttributes:R}}function Db(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,_;if(r)d=n,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ib(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=a||e.has("OES_texture_float"),w=x&&S,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:R}}function Ub(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ls,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,x=E*4;let S=m.clippingState||null;l.value=S,S=u(_,h,x,d);for(let w=0;w!==x;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==g;++x,S+=4)a.copy(f[x]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Nb(n){let e=new WeakMap;function t(a,o){return o===Wf?a.mapping=jo:o===Xf&&(a.mapping=Ko),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wf||o===Xf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xy(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ob extends Qg{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Po=4,om=[.125,.215,.35,.446,.526,.582],Bs=20,cf=new Ob,am=new pt;let uf=null,ff=0,hf=0;const Ds=(1+Math.sqrt(5))/2,yo=1/Ds,lm=[new ie(1,1,1),new ie(-1,1,1),new ie(1,1,-1),new ie(-1,1,-1),new ie(0,Ds,yo),new ie(0,Ds,-yo),new ie(yo,0,Ds),new ie(-yo,0,Ds),new ie(Ds,yo,0),new ie(-Ds,yo,0)];class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,ff,hf),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:nl,format:Ni,colorSpace:ds,depthBuffer:!1},r=um(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fb(s)),this._blurMaterial=Bb(s,e,t)}return r}_compileMaterial(e){const t=new Er(this._lodPlanes[0],e);this._renderer.compile(t,cf)}_sceneToCubeUV(e,t,i,r){const o=new yi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(am),u.toneMapping=Qr,u.autoClear=!1;const d=new jg({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),_=new Er(new Ml,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(am),g=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Yl(r,E*x,m>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Er(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,cf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lm[(r-1)%lm.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Er(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Bs-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Bs;p>Bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bs}`);const m=[];let E=0;for(let b=0;b<Bs;++b){const U=b/g,O=Math.exp(-U*U/2);m.push(O),b===0?E+=O:b<p&&(E+=2*O)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Po?r-x+Po:0),R=4*(this._cubeSize-S);Yl(t,w,R,3*S,2*S),l.setRenderTarget(t),l.render(f,cf)}}function Fb(n){const e=[],t=[],i=[];let r=n;const s=n-Po+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Po?l=om[a-n+Po-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,E=new Float32Array(g*_*d),x=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,U=R>2?0:-1,O=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];E.set(O,g*_*R),x.set(h,p*_*R);const v=[R,R,R,R,R,R];S.set(v,m*_*R)}const w=new ki;w.setAttribute("position",new di(E,g)),w.setAttribute("uv",new di(x,p)),w.setAttribute("faceIndex",new di(S,m)),e.push(w),r>Po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function um(n,e,t){const i=new Qs(n,e,t);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bb(n,e,t){const i=new Float32Array(Bs),r=new ie(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function fm(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function hm(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zb(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wf||l===Xf,u=l===jo||l===Ko;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new cm(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new cm(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function kb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hb(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let x=0,S=E.length;x<S;x+=3){const w=E[x+0],R=E[x+1],b=E[x+2];h.push(w,R,R,b,b,w)}}else if(_!==void 0){const E=_.array;g=_.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const w=x+0,R=x+1,b=x+2;h.push(w,R,R,b,b,w)}}else return;const p=new(Vg(h)?Zg:Kg)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Gb(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,_){n.drawElements(s,_,o,d*l),t.update(_,s,1)}function f(d,_,g){if(g===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,o,d*l,g),t.update(_,s,g)}function h(d,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let m=0;for(let E=0;E<g;E++)m+=_[E];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Vb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wb(n,e){return n[0]-e[0]}function Xb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Yb(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new hn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let ee=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",ee)};var d=ee;p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let b=0;m===!0&&(b=1),E===!0&&(b=2),x===!0&&(b=3);let U=u.attributes.position.count*b,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const v=new Float32Array(U*O*4*g),C=new Yg(v,U,O,g);C.type=Sr,C.needsUpdate=!0;const F=b*4;for(let D=0;D<g;D++){const $=S[D],W=w[D],z=R[D],N=U*O*4*D;for(let K=0;K<$.count;K++){const P=K*F;m===!0&&(a.fromBufferAttribute($,K),v[N+P+0]=a.x,v[N+P+1]=a.y,v[N+P+2]=a.z,v[N+P+3]=0),E===!0&&(a.fromBufferAttribute(W,K),v[N+P+4]=a.x,v[N+P+5]=a.y,v[N+P+6]=a.z,v[N+P+7]=0),x===!0&&(a.fromBufferAttribute(z,K),v[N+P+8]=a.x,v[N+P+9]=a.y,v[N+P+10]=a.z,v[N+P+11]=z.itemSize===4?a.w:1)}}p={count:g,texture:C,size:new gt(U,O)},s.set(u,p),u.addEventListener("dispose",ee)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let m=0;for(let x=0;x<h.length;x++)m+=h[x];const E=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];i[u.id]=g}for(let S=0;S<_;S++){const w=g[S];w[0]=S,w[1]=h[S]}g.sort(Xb);for(let S=0;S<8;S++)S<_&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Wb);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const w=o[S],R=w[0],b=w[1];R!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+S)!==p[R]&&u.setAttribute("morphTarget"+S,p[R]),m&&u.getAttribute("morphNormal"+S)!==m[R]&&u.setAttribute("morphNormal"+S,m[R]),r[S]=b,E+=b):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function qb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class i0 extends qn{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Xs,u!==Xs&&u!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=Yr),i===void 0&&u===Zo&&(i=Ws),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const r0=new qn,s0=new i0(1,1);s0.compareFunction=Gg;const o0=new Yg,a0=new Ry,l0=new e0,dm=[],pm=[],mm=new Float32Array(16),_m=new Float32Array(9),gm=new Float32Array(4);function aa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dm[r];if(s===void 0&&(s=new Float32Array(r),dm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function du(n,e){let t=pm[e];t===void 0&&(t=new Int32Array(e),pm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;gm.set(i),n.uniformMatrix2fv(this.addr,!1,gm),on(t,i)}}function Qb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;_m.set(i),n.uniformMatrix3fv(this.addr,!1,_m),on(t,i)}}function e1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;mm.set(i),n.uniformMatrix4fv(this.addr,!1,mm),on(t,i)}}function t1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function s1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function c1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?s0:r0;t.setTexture2D(e||s,r)}function u1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||a0,r)}function f1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||l0,r)}function h1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||o0,r)}function d1(n){switch(n){case 5126:return $b;case 35664:return jb;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}function p1(n,e){n.uniform1fv(this.addr,e)}function m1(n,e){const t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function _1(n,e){const t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function g1(n,e){const t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function v1(n,e){const t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x1(n,e){const t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S1(n,e){const t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function M1(n,e){n.uniform1iv(this.addr,e)}function y1(n,e){n.uniform2iv(this.addr,e)}function E1(n,e){n.uniform3iv(this.addr,e)}function T1(n,e){n.uniform4iv(this.addr,e)}function b1(n,e){n.uniform1uiv(this.addr,e)}function A1(n,e){n.uniform2uiv(this.addr,e)}function w1(n,e){n.uniform3uiv(this.addr,e)}function R1(n,e){n.uniform4uiv(this.addr,e)}function C1(n,e,t){const i=this.cache,r=e.length,s=du(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||r0,s[a])}function P1(n,e,t){const i=this.cache,r=e.length,s=du(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||a0,s[a])}function L1(n,e,t){const i=this.cache,r=e.length,s=du(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||l0,s[a])}function D1(n,e,t){const i=this.cache,r=e.length,s=du(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||o0,s[a])}function I1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return _1;case 35666:return g1;case 35674:return v1;case 35675:return x1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return y1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return b1;case 36294:return A1;case 36295:return w1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return D1}}class U1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d1(t.type)}}class N1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const df=/(\w+)(\])?(\[|\.)?/g;function vm(n,e){n.seq.push(e),n.map[e.id]=e}function F1(n,e,t){const i=n.name,r=i.length;for(df.lastIndex=0;;){const s=df.exec(i),a=df.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vm(t,c===void 0?new U1(o,n,e):new N1(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new O1(o),vm(t,f)),t=f}}}class gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);F1(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const B1=37297;let z1=0;function k1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function H1(n){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(n);let i;switch(e===t?i="":e===zc&&t===Bc?i="LinearDisplayP3ToLinearSRGB":e===Bc&&t===zc&&(i="LinearSRGBToLinearDisplayP3"),n){case ds:case fu:return[i,"LinearTransferOETF"];case Vi:case Xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+k1(n.getShaderSource(e),a)}else return r}function G1(n,e){const t=H1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function V1(n,e){let t;switch(e){case jM:t="Linear";break;case KM:t="Reinhard";break;case ZM:t="OptimizedCineon";break;case JM:t="ACESFilmic";break;case ey:t="AgX";break;case ty:t="Neutral";break;case QM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lo).join(`
`)}function X1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Y1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lo(n){return n!==""}function Mm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(n){return n.replace($1,K1)}const j1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function K1(n,e){let t=rt[e];if(t===void 0){const i=j1.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(n){return n.replace(Z1,J1)}function J1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===EM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jo:case Ko:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function nA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case qM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function iA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rA(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q1(t),c=eA(t),u=tA(t),f=nA(t),h=iA(t),d=t.isWebGL2?"":W1(t),_=X1(t),g=Y1(s),p=r.createProgram();let m,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),E=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),E.length>0&&(E+=`
`)):(m=[Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),E=[d,Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Qr?V1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,G1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=Zf(a),a=Mm(a,t),a=ym(a,t),o=Zf(o),o=Mm(o,t),o=ym(o,t),a=Em(a),o=Em(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=x+m+a,w=x+E+o,R=xm(r,r.VERTEX_SHADER,S),b=xm(r,r.FRAGMENT_SHADER,w);r.attachShader(p,R),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(F){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(b).trim();let W=!0,z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,b);else{const N=Sm(r,R,"vertex"),K=Sm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ee+`
`+N+`
`+K)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(D===""||$==="")&&(z=!1);z&&(F.diagnostics={runnable:W,programLog:ee,vertexShader:{log:D,prefix:m},fragmentShader:{log:$,prefix:E}})}r.deleteShader(R),r.deleteShader(b),O=new gc(r,p),v=q1(r,p)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,B1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=b,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aA(e),t.set(e,i)),i}}class aA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function lA(n,e,t,i,r,s,a){const o=new qg,l=new oA,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,C,F,ee,D){const $=ee.fog,W=D.geometry,z=v.isMeshStandardMaterial?ee.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),K=N&&N.mapping===uu?N.image.height:null,P=g[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=ae!==void 0?ae.length:0;let Ne=0;W.morphAttributes.position!==void 0&&(Ne=1),W.morphAttributes.normal!==void 0&&(Ne=2),W.morphAttributes.color!==void 0&&(Ne=3);let j,le,pe,we;if(P){const dt=$i[P];j=dt.vertexShader,le=dt.fragmentShader}else j=v.vertexShader,le=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const be=n.getRenderTarget(),Me=D.isInstancedMesh===!0,Xe=D.isBatchedMesh===!0,Ce=!!v.map,M=!!v.matcap,I=!!N,k=!!v.aoMap,te=!!v.lightMap,Y=!!v.bumpMap,L=!!v.normalMap,se=!!v.displacementMap,oe=!!v.emissiveMap,ue=!!v.metalnessMap,T=!!v.roughnessMap,y=v.anisotropy>0,B=v.clearcoat>0,X=v.iridescence>0,Z=v.sheen>0,re=v.transmission>0,me=y&&!!v.anisotropyMap,ve=B&&!!v.clearcoatMap,fe=B&&!!v.clearcoatNormalMap,he=B&&!!v.clearcoatRoughnessMap,ze=X&&!!v.iridescenceMap,ce=X&&!!v.iridescenceThicknessMap,mt=Z&&!!v.sheenColorMap,Ye=Z&&!!v.sheenRoughnessMap,Re=!!v.specularMap,Ae=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Ke=re&&!!v.transmissionMap,ye=re&&!!v.thicknessMap,ht=!!v.gradientMap,G=!!v.alphaMap,xe=v.alphaTest>0,Q=!!v.alphaHash,_e=!!v.extensions;let Te=Qr;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Te=n.toneMapping);const je={isWebGL2:f,shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:le,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Xe,instancing:Me,instancingColor:Me&&D.instanceColor!==null,instancingMorph:Me&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ds,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:M,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:K,aoMap:k,lightMap:te,bumpMap:Y,normalMap:L,displacementMap:d&&se,emissiveMap:oe,normalMapObjectSpace:L&&v.normalMapType===dy,normalMapTangentSpace:L&&v.normalMapType===hy,metalnessMap:ue,roughnessMap:T,anisotropy:y,anisotropyMap:me,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,iridescence:X,iridescenceMap:ze,iridescenceThicknessMap:ce,sheen:Z,sheenColorMap:mt,sheenRoughnessMap:Ye,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Pe,transmission:re,transmissionMap:Ke,thicknessMap:ye,gradientMap:ht,opaque:v.transparent===!1&&v.blending===zo&&v.alphaToCoverage===!1,alphaMap:G,alphaTest:xe,alphaHash:Q,combine:v.combine,mapUv:Ce&&p(v.map.channel),aoMapUv:k&&p(v.aoMap.channel),lightMapUv:te&&p(v.lightMap.channel),bumpMapUv:Y&&p(v.bumpMap.channel),normalMapUv:L&&p(v.normalMap.channel),displacementMapUv:se&&p(v.displacementMap.channel),emissiveMapUv:oe&&p(v.emissiveMap.channel),metalnessMapUv:ue&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:me&&p(v.anisotropyMap.channel),clearcoatMapUv:ve&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:Re&&p(v.specularMap.channel),specularColorMapUv:Ae&&p(v.specularColorMap.channel),specularIntensityMapUv:Pe&&p(v.specularIntensityMap.channel),transmissionMapUv:Ke&&p(v.transmissionMap.channel),thicknessMapUv:ye&&p(v.thicknessMap.channel),alphaMapUv:G&&p(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(L||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Ce||G),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&At.getTransfer(v.map.colorSpace)===Ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xr,flipSided:v.side===Yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:_e&&v.extensions.derivatives===!0,extensionFragDepth:_e&&v.extensions.fragDepth===!0,extensionDrawBuffers:_e&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_e&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function E(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)C.push(F),C.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(C,v),S(C,v),C.push(n.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function x(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function S(v,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),v.push(o.mask)}function w(v){const C=g[v.type];let F;if(C){const ee=$i[C];F=Hy.clone(ee.uniforms)}else F=v.uniforms;return F}function R(v,C){let F;for(let ee=0,D=u.length;ee<D;ee++){const $=u[ee];if($.cacheKey===C){F=$,++F.usedTimes;break}}return F===void 0&&(F=new rA(n,C,v,s),u.push(F)),F}function b(v){if(--v.usedTimes===0){const C=u.indexOf(v);u[C]=u[u.length-1],u.pop(),v.destroy()}}function U(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:w,acquireProgram:R,releaseProgram:b,releaseShaderCache:U,programs:u,dispose:O}}function cA(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function uA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Am(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,_,g,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function o(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||uA),i.length>1&&i.sort(h||bm),r.length>1&&r.sort(h||bm)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function fA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Am,n.set(i,[a])):r>=s.length?(a=new Am,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new pt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function dA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pA=0;function mA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _A(n,e){const t=new hA,i=dA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new ie);const s=new ie,a=new $t,o=new $t;function l(u,f){let h=0,d=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,p=0,m=0,E=0,x=0,S=0,w=0,R=0,b=0,U=0,O=0;u.sort(mA);const v=f===!0?Math.PI:1;for(let F=0,ee=u.length;F<ee;F++){const D=u[F],$=D.color,W=D.intensity,z=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=$.r*W*v,d+=$.g*W*v,_+=$.b*W*v;else if(D.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],W);O++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const P=D.shadow,ae=i.get(D);ae.shadowBias=P.bias,ae.shadowNormalBias=P.normalBias,ae.shadowRadius=P.radius,ae.shadowMapSize=P.mapSize,r.directionalShadow[g]=ae,r.directionalShadowMap[g]=N,r.directionalShadowMatrix[g]=D.shadow.matrix,S++}r.directional[g]=K,g++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy($).multiplyScalar(W*v),K.distance=z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[m]=K;const P=D.shadow;if(D.map&&(r.spotLightMap[b]=D.map,b++,P.updateMatrices(D),D.castShadow&&U++),r.spotLightMatrix[m]=P.matrix,D.castShadow){const ae=i.get(D);ae.shadowBias=P.bias,ae.shadowNormalBias=P.normalBias,ae.shadowRadius=P.radius,ae.shadowMapSize=P.mapSize,r.spotShadow[m]=ae,r.spotShadowMap[m]=N,R++}m++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy($).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=K,E++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*v),K.distance=D.distance,K.decay=D.decay,D.castShadow){const P=D.shadow,ae=i.get(D);ae.shadowBias=P.bias,ae.shadowNormalBias=P.normalBias,ae.shadowRadius=P.radius,ae.shadowMapSize=P.mapSize,ae.shadowCameraNear=P.camera.near,ae.shadowCameraFar=P.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=D.shadow.matrix,w++}r.point[p]=K,p++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(W*v),K.groundColor.copy(D.groundColor).multiplyScalar(W*v),r.hemi[x]=K,x++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==g||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==E||C.hemiLength!==x||C.numDirectionalShadows!==S||C.numPointShadows!==w||C.numSpotShadows!==R||C.numSpotMaps!==b||C.numLightProbes!==O)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=E,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,C.directionalLength=g,C.pointLength=p,C.spotLength=m,C.rectAreaLength=E,C.hemiLength=x,C.numDirectionalShadows=S,C.numPointShadows=w,C.numSpotShadows=R,C.numSpotMaps=b,C.numLightProbes=O,r.version=pA++)}function c(u,f){let h=0,d=0,_=0,g=0,p=0;const m=f.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const S=u[E];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function wm(n,e){const t=new _A(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gA(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new wm(n,e),t.set(s,[l])):a>=o.length?(l=new wm(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class vA extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xA extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(n,e,t){let i=new t0;const r=new gt,s=new gt,a=new hn,o=new vA({depthPacking:fy}),l=new xA,c={},u=t.maxTextureSize,f={[os]:Yn,[Yn]:os,[xr]:xr},h=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ki;_.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Er(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let m=this.type;this.render=function(R,b,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const O=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Jr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ee=m!==dr&&this.type===dr,D=m===dr&&this.type!==dr;for(let $=0,W=R.length;$<W;$++){const z=R[$],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||ee===!0||D===!0){const ae=this.type!==dr?{minFilter:Un,magFilter:Un}:{};N.map!==null&&N.map.dispose(),N.map=new Qs(r.x,r.y,ae),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const P=N.getViewportCount();for(let ae=0;ae<P;ae++){const de=N.getViewport(ae);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(a),N.updateMatrices(z,ae),i=N.getFrustum(),S(b,U,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===dr&&E(N,U),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(O,v,C)};function E(R,b){const U=e.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qs(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(b,null,U,h,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(b,null,U,d,g,null)}function x(R,b,U,O){let v=null;const C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)v=C;else if(v=U.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=v.uuid,ee=b.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let $=D[ee];$===void 0&&($=v.clone(),D[ee]=$,b.addEventListener("dispose",w)),v=$}if(v.visible=b.visible,v.wireframe=b.wireframe,O===dr?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=U}return v}function S(R,b,U,O,v){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===dr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const ee=e.update(R),D=R.material;if(Array.isArray(D)){const $=ee.groups;for(let W=0,z=$.length;W<z;W++){const N=$[W],K=D[N.materialIndex];if(K&&K.visible){const P=x(R,K,O,v);R.onBeforeShadow(n,R,b,U,ee,P,N),n.renderBufferDirect(U,null,ee,P,R,N),R.onAfterShadow(n,R,b,U,ee,P,N)}}}else if(D.visible){const $=x(R,D,O,v);R.onBeforeShadow(n,R,b,U,ee,$,null),n.renderBufferDirect(U,null,ee,$,R,null),R.onAfterShadow(n,R,b,U,ee,$,null)}}const F=R.children;for(let ee=0,D=F.length;ee<D;ee++)S(F[ee],b,U,O,v)}function w(R){R.target.removeEventListener("dispose",w);for(const U in c){const O=c[U],v=R.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}function EA(n,e,t){const i=t.isWebGL2;function r(){let G=!1;const xe=new hn;let Q=null;const _e=new hn(0,0,0,0);return{setMask:function(Te){Q!==Te&&!G&&(n.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){G=Te},setClear:function(Te,je,dt,Oe,Ie){Ie===!0&&(Te*=Oe,je*=Oe,dt*=Oe),xe.set(Te,je,dt,Oe),_e.equals(xe)===!1&&(n.clearColor(Te,je,dt,Oe),_e.copy(xe))},reset:function(){G=!1,Q=null,_e.set(-1,0,0,0)}}}function s(){let G=!1,xe=null,Q=null,_e=null;return{setTest:function(Te){Te?Me(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(Te){xe!==Te&&!G&&(n.depthMask(Te),xe=Te)},setFunc:function(Te){if(Q!==Te){switch(Te){case kM:n.depthFunc(n.NEVER);break;case HM:n.depthFunc(n.ALWAYS);break;case GM:n.depthFunc(n.LESS);break;case Oc:n.depthFunc(n.LEQUAL);break;case VM:n.depthFunc(n.EQUAL);break;case WM:n.depthFunc(n.GEQUAL);break;case XM:n.depthFunc(n.GREATER);break;case YM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Te}},setLocked:function(Te){G=Te},setClear:function(Te){_e!==Te&&(n.clearDepth(Te),_e=Te)},reset:function(){G=!1,xe=null,Q=null,_e=null}}}function a(){let G=!1,xe=null,Q=null,_e=null,Te=null,je=null,dt=null,Oe=null,Ie=null;return{setTest:function(Be){G||(Be?Me(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(Be){xe!==Be&&!G&&(n.stencilMask(Be),xe=Be)},setFunc:function(Be,ge,Ge){(Q!==Be||_e!==ge||Te!==Ge)&&(n.stencilFunc(Be,ge,Ge),Q=Be,_e=ge,Te=Ge)},setOp:function(Be,ge,Ge){(je!==Be||dt!==ge||Oe!==Ge)&&(n.stencilOp(Be,ge,Ge),je=Be,dt=ge,Oe=Ge)},setLocked:function(Be){G=Be},setClear:function(Be){Ie!==Be&&(n.clearStencil(Be),Ie=Be)},reset:function(){G=!1,xe=null,Q=null,_e=null,Te=null,je=null,dt=null,Oe=null,Ie=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],p=null,m=!1,E=null,x=null,S=null,w=null,R=null,b=null,U=null,O=new pt(0,0,0),v=0,C=!1,F=null,ee=null,D=null,$=null,W=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,K=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=K>=1):P.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=K>=2);let ae=null,de={};const Ne=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),le=new hn().fromArray(Ne),pe=new hn().fromArray(j);function we(G,xe,Q,_e){const Te=new Uint8Array(4),je=n.createTexture();n.bindTexture(G,je),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<Q;dt++)i&&(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(xe+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return je}const be={};be[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(n.DEPTH_TEST),l.setFunc(Oc),se(!1),oe(ap),Me(n.CULL_FACE),Y(Jr);function Me(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Xe(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Ce(G,xe){return d[G]!==xe?(n.bindFramebuffer(G,xe),d[G]=xe,i&&(G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function M(G,xe){let Q=g,_e=!1;if(G){Q=_.get(xe),Q===void 0&&(Q=[],_.set(xe,Q));const Te=G.textures;if(Q.length!==Te.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let je=0,dt=Te.length;je<dt;je++)Q[je]=n.COLOR_ATTACHMENT0+je;Q.length=Te.length,_e=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,_e=!0);if(_e)if(t.isWebGL2)n.drawBuffers(Q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function I(G){return p!==G?(n.useProgram(G),p=G,!0):!1}const k={[Fs]:n.FUNC_ADD,[bM]:n.FUNC_SUBTRACT,[AM]:n.FUNC_REVERSE_SUBTRACT};if(i)k[up]=n.MIN,k[fp]=n.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(k[up]=G.MIN_EXT,k[fp]=G.MAX_EXT)}const te={[wM]:n.ZERO,[RM]:n.ONE,[CM]:n.SRC_COLOR,[Gf]:n.SRC_ALPHA,[NM]:n.SRC_ALPHA_SATURATE,[IM]:n.DST_COLOR,[LM]:n.DST_ALPHA,[PM]:n.ONE_MINUS_SRC_COLOR,[Vf]:n.ONE_MINUS_SRC_ALPHA,[UM]:n.ONE_MINUS_DST_COLOR,[DM]:n.ONE_MINUS_DST_ALPHA,[OM]:n.CONSTANT_COLOR,[FM]:n.ONE_MINUS_CONSTANT_COLOR,[BM]:n.CONSTANT_ALPHA,[zM]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(G,xe,Q,_e,Te,je,dt,Oe,Ie,Be){if(G===Jr){m===!0&&(Xe(n.BLEND),m=!1);return}if(m===!1&&(Me(n.BLEND),m=!0),G!==TM){if(G!==E||Be!==C){if((x!==Fs||R!==Fs)&&(n.blendEquation(n.FUNC_ADD),x=Fs,R=Fs),Be)switch(G){case zo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nc:n.blendFunc(n.ONE,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,w=null,b=null,U=null,O.set(0,0,0),v=0,E=G,C=Be}return}Te=Te||xe,je=je||Q,dt=dt||_e,(xe!==x||Te!==R)&&(n.blendEquationSeparate(k[xe],k[Te]),x=xe,R=Te),(Q!==S||_e!==w||je!==b||dt!==U)&&(n.blendFuncSeparate(te[Q],te[_e],te[je],te[dt]),S=Q,w=_e,b=je,U=dt),(Oe.equals(O)===!1||Ie!==v)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Ie),O.copy(Oe),v=Ie),E=G,C=!1}function L(G,xe){G.side===xr?Xe(n.CULL_FACE):Me(n.CULL_FACE);let Q=G.side===Yn;xe&&(Q=!Q),se(Q),G.blending===zo&&G.transparent===!1?Y(Jr):Y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const _e=G.stencilWrite;c.setTest(_e),_e&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),T(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){F!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),F=G)}function oe(G){G!==MM?(Me(n.CULL_FACE),G!==ee&&(G===ap?n.cullFace(n.BACK):G===yM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),ee=G}function ue(G){G!==D&&(N&&n.lineWidth(G),D=G)}function T(G,xe,Q){G?(Me(n.POLYGON_OFFSET_FILL),($!==xe||W!==Q)&&(n.polygonOffset(xe,Q),$=xe,W=Q)):Xe(n.POLYGON_OFFSET_FILL)}function y(G){G?Me(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function B(G){G===void 0&&(G=n.TEXTURE0+z-1),ae!==G&&(n.activeTexture(G),ae=G)}function X(G,xe,Q){Q===void 0&&(ae===null?Q=n.TEXTURE0+z-1:Q=ae);let _e=de[Q];_e===void 0&&(_e={type:void 0,texture:void 0},de[Q]=_e),(_e.type!==G||_e.texture!==xe)&&(ae!==Q&&(n.activeTexture(Q),ae=Q),n.bindTexture(G,xe||be[G]),_e.type=G,_e.texture=xe)}function Z(){const G=de[ae];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(G){le.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),le.copy(G))}function Pe(G){pe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),pe.copy(G))}function Ke(G,xe){let Q=f.get(xe);Q===void 0&&(Q=new WeakMap,f.set(xe,Q));let _e=Q.get(G);_e===void 0&&(_e=n.getUniformBlockIndex(xe,G.name),Q.set(G,_e))}function ye(G,xe){const _e=f.get(xe).get(G);u.get(xe)!==_e&&(n.uniformBlockBinding(xe,_e,G.__bindingPointIndex),u.set(xe,_e))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,de={},d={},_=new WeakMap,g=[],p=null,m=!1,E=null,x=null,S=null,w=null,R=null,b=null,U=null,O=new pt(0,0,0),v=0,C=!1,F=null,ee=null,D=null,$=null,W=null,le.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:Xe,bindFramebuffer:Ce,drawBuffers:M,useProgram:I,setBlending:Y,setMaterial:L,setFlipSided:se,setCullFace:oe,setLineWidth:ue,setPolygonOffset:T,setScissorTest:y,activeTexture:B,bindTexture:X,unbindTexture:Z,compressedTexImage2D:re,compressedTexImage3D:me,texImage2D:Ye,texImage3D:Re,updateUBOMapping:Ke,uniformBlockBinding:ye,texStorage2D:ce,texStorage3D:mt,texSubImage2D:ve,texSubImage3D:fe,compressedTexSubImage2D:he,compressedTexSubImage3D:ze,scissor:Ae,viewport:Pe,reset:ht}}function TA(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new gt,f=new WeakMap;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return _?new OffscreenCanvas(T,y):Hc("canvas")}function p(T,y,B,X){let Z=1;const re=ue(T);if((re.width>X||re.height>X)&&(Z=X/Math.max(re.width,re.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const me=y?Kf:Math.floor,ve=me(Z*re.width),fe=me(Z*re.height);h===void 0&&(h=g(ve,fe));const he=B?g(ve,fe):h;return he.width=ve,he.height=fe,he.getContext("2d").drawImage(T,0,0,ve,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+fe+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function m(T){const y=ue(T);return Hp(y.width)&&Hp(y.height)}function E(T){return o?!1:T.wrapS!==Ui||T.wrapT!==Ui||T.minFilter!==Un&&T.minFilter!==Vn}function x(T,y){return T.generateMipmaps&&y&&T.minFilter!==Un&&T.minFilter!==Vn}function S(T){n.generateMipmap(T)}function w(T,y,B,X,Z=!1){if(o===!1)return y;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=y;if(y===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),y===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.RG8UI),B===n.UNSIGNED_SHORT&&(re=n.RG16UI),B===n.UNSIGNED_INT&&(re=n.RG32UI),B===n.BYTE&&(re=n.RG8I),B===n.SHORT&&(re=n.RG16I),B===n.INT&&(re=n.RG32I)),y===n.RGBA){const me=Z?Fc:At.getTransfer(X);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=me===Ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(T,y,B){return x(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Un&&T.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function b(T){return T===Un||T===hp||T===ha?n.NEAREST:n.LINEAR}function U(T){const y=T.target;y.removeEventListener("dispose",U),v(y),y.isVideoTexture&&f.delete(y)}function O(T){const y=T.target;y.removeEventListener("dispose",O),F(y)}function v(T){const y=i.get(T);if(y.__webglInit===void 0)return;const B=T.source,X=d.get(B);if(X){const Z=X[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(T),Object.keys(X).length===0&&d.delete(B)}i.remove(T)}function C(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const B=T.source,X=d.get(B);delete X[y.__cacheKey],a.memory.textures--}function F(T){const y=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Z=0;Z<y.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=T.textures;for(let X=0,Z=B.length;X<Z;X++){const re=i.get(B[X]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(T)}let ee=0;function D(){ee=0}function $(){const T=ee;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),ee+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function z(T,y){const B=i.get(T);if(T.isVideoTexture&&se(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(B,T,y);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function N(T,y){const B=i.get(T);if(T.version>0&&B.__version!==T.version){pe(B,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function K(T,y){const B=i.get(T);if(T.version>0&&B.__version!==T.version){pe(B,T,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function P(T,y){const B=i.get(T);if(T.version>0&&B.__version!==T.version){we(B,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const ae={[Yf]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[qf]:n.MIRRORED_REPEAT},de={[Un]:n.NEAREST,[hp]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[Nu]:n.LINEAR_MIPMAP_NEAREST,[zs]:n.LINEAR_MIPMAP_LINEAR},Ne={[py]:n.NEVER,[Sy]:n.ALWAYS,[my]:n.LESS,[Gg]:n.LEQUAL,[_y]:n.EQUAL,[xy]:n.GEQUAL,[gy]:n.GREATER,[vy]:n.NOTEQUAL};function j(T,y,B){if(y.type===Sr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Nu||y.magFilter===ha||y.magFilter===zs||y.minFilter===Vn||y.minFilter===Nu||y.minFilter===ha||y.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(n.texParameteri(T,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ae[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,de[y.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Ui||y.wrapT!==Ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,b(y.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==Un&&y.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==ha&&y.minFilter!==zs||y.type===Sr&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===nl&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function le(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",U));const X=y.source;let Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));const re=W(y);if(re!==T.__cacheKey){Z[re]===void 0&&(Z[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[re].usedTimes++;const me=Z[T.__cacheKey];me!==void 0&&(Z[T.__cacheKey].usedTimes--,me.usedTimes===0&&C(y)),T.__cacheKey=re,T.__webglTexture=Z[re].texture}return B}function pe(T,y,B){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);const Z=le(T,y),re=y.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+B);const me=i.get(re);if(re.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const ve=At.getPrimaries(At.workingColorSpace),fe=y.colorSpace===Xr?null:At.getPrimaries(y.colorSpace),he=y.colorSpace===Xr||ve===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ze=E(y)&&m(y.image)===!1;let ce=p(y.image,ze,!1,r.maxTextureSize);ce=oe(y,ce);const mt=m(ce)||o,Ye=s.convert(y.format,y.colorSpace);let Re=s.convert(y.type),Ae=w(y.internalFormat,Ye,Re,y.colorSpace,y.isVideoTexture);j(X,y,mt);let Pe;const Ke=y.mipmaps,ye=o&&y.isVideoTexture!==!0&&Ae!==Hg,ht=me.__version===void 0||Z===!0,G=re.dataReady,xe=R(y,ce,mt);if(y.isDepthTexture)Ae=n.DEPTH_COMPONENT,o?y.type===Sr?Ae=n.DEPTH_COMPONENT32F:y.type===Yr?Ae=n.DEPTH_COMPONENT24:y.type===Ws?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:y.type===Sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Xs&&Ae===n.DEPTH_COMPONENT&&y.type!==Wh&&y.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Yr,Re=s.convert(y.type)),y.format===Zo&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,y.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ws,Re=s.convert(y.type))),ht&&(ye?t.texStorage2D(n.TEXTURE_2D,1,Ae,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,Ye,Re,null));else if(y.isDataTexture)if(Ke.length>0&&mt){ye&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,Ke[0].width,Ke[0].height);for(let Q=0,_e=Ke.length;Q<_e;Q++)Pe=Ke[Q],ye?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Ye,Re,Pe.data):t.texImage2D(n.TEXTURE_2D,Q,Ae,Pe.width,Pe.height,0,Ye,Re,Pe.data);y.generateMipmaps=!1}else ye?(ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,ce.width,ce.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ye,Re,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,Ye,Re,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ye&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ae,Ke[0].width,Ke[0].height,ce.depth);for(let Q=0,_e=Ke.length;Q<_e;Q++)Pe=Ke[Q],y.format!==Ni?Ye!==null?ye?G&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,ce.depth,Ye,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ae,Pe.width,Pe.height,ce.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,ce.depth,Ye,Re,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ae,Pe.width,Pe.height,ce.depth,0,Ye,Re,Pe.data)}else{ye&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,Ke[0].width,Ke[0].height);for(let Q=0,_e=Ke.length;Q<_e;Q++)Pe=Ke[Q],y.format!==Ni?Ye!==null?ye?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Ye,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ae,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Ye,Re,Pe.data):t.texImage2D(n.TEXTURE_2D,Q,Ae,Pe.width,Pe.height,0,Ye,Re,Pe.data)}else if(y.isDataArrayTexture)ye?(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ae,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ye,Re,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ce.width,ce.height,ce.depth,0,Ye,Re,ce.data);else if(y.isData3DTexture)ye?(ht&&t.texStorage3D(n.TEXTURE_3D,xe,Ae,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ye,Re,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ce.width,ce.height,ce.depth,0,Ye,Re,ce.data);else if(y.isFramebufferTexture){if(ht)if(ye)t.texStorage2D(n.TEXTURE_2D,xe,Ae,ce.width,ce.height);else{let Q=ce.width,_e=ce.height;for(let Te=0;Te<xe;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ae,Q,_e,0,Ye,Re,null),Q>>=1,_e>>=1}}else if(Ke.length>0&&mt){if(ye&&ht){const Q=ue(Ke[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ae,Q.width,Q.height)}for(let Q=0,_e=Ke.length;Q<_e;Q++)Pe=Ke[Q],ye?G&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ye,Re,Pe):t.texImage2D(n.TEXTURE_2D,Q,Ae,Ye,Re,Pe);y.generateMipmaps=!1}else if(ye){if(ht){const Q=ue(ce);t.texStorage2D(n.TEXTURE_2D,xe,Ae,Q.width,Q.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ye,Re,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Ye,Re,ce);x(y,mt)&&S(X),me.__version=re.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function we(T,y,B){if(y.image.length!==6)return;const X=le(T,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const re=i.get(Z);if(Z.version!==re.__version||X===!0){t.activeTexture(n.TEXTURE0+B);const me=At.getPrimaries(At.workingColorSpace),ve=y.colorSpace===Xr?null:At.getPrimaries(y.colorSpace),fe=y.colorSpace===Xr||me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,ze=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!he&&!ze?ce[Q]=p(y.image[Q],!1,!0,r.maxCubemapSize):ce[Q]=ze?y.image[Q].image:y.image[Q],ce[Q]=oe(y,ce[Q]);const mt=ce[0],Ye=m(mt)||o,Re=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),Pe=w(y.internalFormat,Re,Ae,y.colorSpace),Ke=o&&y.isVideoTexture!==!0,ye=re.__version===void 0||X===!0,ht=Z.dataReady;let G=R(y,mt,Ye);j(n.TEXTURE_CUBE_MAP,y,Ye);let xe;if(he){Ke&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,G,Pe,mt.width,mt.height);for(let Q=0;Q<6;Q++){xe=ce[Q].mipmaps;for(let _e=0;_e<xe.length;_e++){const Te=xe[_e];y.format!==Ni?Re!==null?Ke?ht&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,Te.width,Te.height,Re,Ae,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Pe,Te.width,Te.height,0,Re,Ae,Te.data)}}}else{if(xe=y.mipmaps,Ke&&ye){xe.length>0&&G++;const Q=ue(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,G,Pe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ze){Ke?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,Re,Ae,ce[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pe,ce[Q].width,ce[Q].height,0,Re,Ae,ce[Q].data);for(let _e=0;_e<xe.length;_e++){const je=xe[_e].image[Q].image;Ke?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,je.width,je.height,Re,Ae,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Pe,je.width,je.height,0,Re,Ae,je.data)}}else{Ke?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,Ae,ce[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pe,Re,Ae,ce[Q]);for(let _e=0;_e<xe.length;_e++){const Te=xe[_e];Ke?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Re,Ae,Te.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Pe,Re,Ae,Te.image[Q])}}}x(y,Ye)&&S(n.TEXTURE_CUBE_MAP),re.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function be(T,y,B,X,Z,re){const me=s.convert(B.format,B.colorSpace),ve=s.convert(B.type),fe=w(B.internalFormat,me,ve,B.colorSpace);if(!i.get(y).__hasExternalTextures){const ze=Math.max(1,y.width>>re),ce=Math.max(1,y.height>>re);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,fe,ze,ce,y.depth,0,me,ve,null):t.texImage2D(Z,re,fe,ze,ce,0,me,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),L(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,i.get(B).__webglTexture,0,Y(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(T,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let X=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||L(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Sr?X=n.DEPTH_COMPONENT32F:Z.type===Yr&&(X=n.DEPTH_COMPONENT24));const re=Y(y);L(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,X,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,X,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const X=Y(y);B&&L(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,y.width,y.height):L(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const X=y.textures;for(let Z=0;Z<X.length;Z++){const re=X[Z],me=s.convert(re.format,re.colorSpace),ve=s.convert(re.type),fe=w(re.internalFormat,me,ve,re.colorSpace),he=Y(y);B&&L(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,fe,y.width,y.height):L(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,fe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,fe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const X=i.get(y.depthTexture).__webglTexture,Z=Y(y);if(y.depthTexture.format===Xs)L(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(y.depthTexture.format===Zo)L(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const y=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Xe(y.__webglFramebuffer,T)}else if(B){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]=n.createRenderbuffer(),Me(y.__webglDepthbuffer[X],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Me(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(T,y,B){const X=i.get(T);y!==void 0&&be(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ce(T)}function I(T){const y=T.texture,B=i.get(T),X=i.get(y);T.addEventListener("dispose",O);const Z=T.textures,re=T.isWebGLCubeRenderTarget===!0,me=Z.length>1,ve=m(T)||o;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[fe][he]=n.createFramebuffer()}else B.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)B.__webglFramebuffer[fe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(me)if(r.drawBuffers)for(let fe=0,he=Z.length;fe<he;fe++){const ze=i.get(Z[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&L(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<Z.length;fe++){const he=Z[fe];B.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const ze=s.convert(he.format,he.colorSpace),ce=s.convert(he.type),mt=w(he.internalFormat,ze,ce,he.colorSpace,T.isXRRenderTarget===!0),Ye=Y(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),j(n.TEXTURE_CUBE_MAP,y,ve);for(let fe=0;fe<6;fe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(B.__webglFramebuffer[fe][he],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else be(B.__webglFramebuffer[fe],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(y,ve)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,he=Z.length;fe<he;fe++){const ze=Z[fe],ce=i.get(ze);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),j(n.TEXTURE_2D,ze,ve),be(B.__webglFramebuffer,T,ze,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),x(ze,ve)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,X.__webglTexture),j(fe,y,ve),o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(B.__webglFramebuffer[he],T,y,n.COLOR_ATTACHMENT0,fe,he);else be(B.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,fe,0);x(y,ve)&&S(fe),t.unbindTexture()}T.depthBuffer&&Ce(T)}function k(T){const y=m(T)||o,B=T.textures;for(let X=0,Z=B.length;X<Z;X++){const re=B[X];if(x(re,y)){const me=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(re).__webglTexture;t.bindTexture(me,ve),S(me),t.unbindTexture()}}}function te(T){if(o&&T.samples>0&&L(T)===!1){const y=T.textures,B=T.width,X=T.height;let Z=n.COLOR_BUFFER_BIT;const re=[],me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),fe=y.length>1;if(fe)for(let he=0;he<y.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<y.length;he++){re.push(n.COLOR_ATTACHMENT0+he),T.depthBuffer&&re.push(me);const ze=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(ze===!1&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[he]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),fe){const ce=i.get(y[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,B,X,0,0,B,X,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let he=0;he<y.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const ze=i.get(y[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Y(T){return Math.min(r.maxSamples,T.samples)}function L(T){const y=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(T){const y=a.render.frame;f.get(T)!==y&&(f.set(T,y),T.update())}function oe(T,y){const B=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===$f||B!==ds&&B!==Xr&&(At.getTransfer(B)===Ut?o===!1?e.has("EXT_sRGB")===!0&&X===Ni?(T.format=$f,T.minFilter=Vn,T.generateMipmaps=!1):y=Wg.sRGBToLinear(y):(X!==Ni||Z!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=P,this.rebindTextures=M,this.setupRenderTarget=I,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=L}function bA(n,e,t){const i=t.isWebGL2;function r(s,a=Xr){let o;const l=At.getTransfer(a);if(s===es)return n.UNSIGNED_BYTE;if(s===Og)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Fg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ny)return n.BYTE;if(s===iy)return n.SHORT;if(s===Wh)return n.UNSIGNED_SHORT;if(s===Ng)return n.INT;if(s===Yr)return n.UNSIGNED_INT;if(s===Sr)return n.FLOAT;if(s===nl)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ry)return n.ALPHA;if(s===Ni)return n.RGBA;if(s===sy)return n.LUMINANCE;if(s===oy)return n.LUMINANCE_ALPHA;if(s===Xs)return n.DEPTH_COMPONENT;if(s===Zo)return n.DEPTH_STENCIL;if(s===$f)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ay)return n.RED;if(s===Bg)return n.RED_INTEGER;if(s===ly)return n.RG;if(s===zg)return n.RG_INTEGER;if(s===kg)return n.RGBA_INTEGER;if(s===Ou||s===Fu||s===Bu||s===zu)if(l===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ou)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ou)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dp||s===pp||s===mp||s===_p)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===dp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_p)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gp||s===vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===gp)return l===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xp||s===Sp||s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ap||s===wp||s===Rp||s===Cp||s===Pp||s===Lp||s===Dp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ku||s===Ip||s===Up)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ku)return l===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ip)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Up)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cy||s===Np||s===Op||s===Fp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ku)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Np)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Op)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ws?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class AA extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ql extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wA={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new as({extensions:{fragDepth:!0},vertexShader:RA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Er(new hu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class LA extends sa{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new PA,p=t.getContextAttributes();let m=null,E=null;const x=[],S=[],w=new gt;let R=null;const b=new yi;b.layers.enable(1),b.viewport=new hn;const U=new yi;U.layers.enable(2),U.viewport=new hn;const O=[b,U],v=new AA;v.layers.enable(1),v.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=x[j];return le===void 0&&(le=new pf,x[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=x[j];return le===void 0&&(le=new pf,x[j]=le),le.getGripSpace()},this.getHand=function(j){let le=x[j];return le===void 0&&(le=new pf,x[j]=le),le.getHandSpace()};function ee(j){const le=S.indexOf(j.inputSource);if(le===-1)return;const pe=x[le];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",$);for(let j=0;j<x.length;j++){const le=S[j];le!==null&&(S[j]=null,x[j].disconnect(le))}C=null,F=null,g.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,E=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",D),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Qs(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:es,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,pe=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Zo:Xs,pe=p.stencil?Ws:Yr);const be={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Qs(h.textureWidth,h.textureHeight,{format:Ni,type:es,depthTexture:new i0(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Me=e.properties.get(E);Me.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(j){for(let le=0;le<j.removed.length;le++){const pe=j.removed[le],we=S.indexOf(pe);we>=0&&(S[we]=null,x[we].disconnect(pe))}for(let le=0;le<j.added.length;le++){const pe=j.added[le];let we=S.indexOf(pe);if(we===-1){for(let Me=0;Me<x.length;Me++)if(Me>=S.length){S.push(pe),we=Me;break}else if(S[Me]===null){S[Me]=pe,we=Me;break}if(we===-1)break}const be=x[we];be&&be.connect(pe)}}const W=new ie,z=new ie;function N(j,le,pe){W.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(pe.matrixWorld);const we=W.distanceTo(z),be=le.projectionMatrix.elements,Me=pe.projectionMatrix.elements,Xe=be[14]/(be[10]-1),Ce=be[14]/(be[10]+1),M=(be[9]+1)/be[5],I=(be[9]-1)/be[5],k=(be[8]-1)/be[0],te=(Me[8]+1)/Me[0],Y=Xe*k,L=Xe*te,se=we/(-k+te),oe=se*-k;le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ue=Xe+se,T=Ce+se,y=Y-oe,B=L+(we-oe),X=M*Ce/T*ue,Z=I*Ce/T*ue;j.projectionMatrix.makePerspective(y,B,X,Z,ue,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function K(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;g.texture!==null&&(j.near=g.depthNear,j.far=g.depthFar),v.near=U.near=b.near=j.near,v.far=U.far=b.far=j.far,(C!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,F=v.far,b.near=C,b.far=F,U.near=C,U.far=F,b.updateProjectionMatrix(),U.updateProjectionMatrix(),j.updateProjectionMatrix());const le=j.parent,pe=v.cameras;K(v,le);for(let we=0;we<pe.length;we++)K(pe[we],le);pe.length===2?N(v,b,U):v.projectionMatrix.copy(b.projectionMatrix),P(j,v,le)};function P(j,le,pe){pe===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null};let ae=null;function de(j,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let we=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,we=!0);for(let Me=0;Me<pe.length;Me++){const Xe=pe[Me];let Ce=null;if(d!==null)Ce=d.getViewport(Xe);else{const I=f.getViewSubImage(h,Xe);Ce=I.viewport,Me===0&&(e.setRenderTargetTextures(E,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let M=O[Me];M===void 0&&(M=new yi,M.layers.enable(Me),M.viewport=new hn,O[Me]=M),M.matrix.fromArray(Xe.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.projectionMatrix.fromArray(Xe.projectionMatrix),M.projectionMatrixInverse.copy(M.projectionMatrix).invert(),M.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Me===0&&(v.matrix.copy(M.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),we===!0&&v.cameras.push(M)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Me=f.getDepthInformation(pe[0]);Me&&Me.isValid&&Me.texture&&g.init(e,Me,r.renderState)}}for(let pe=0;pe<x.length;pe++){const we=S[pe],be=x[pe];we!==null&&be!==void 0&&be.update(we,le,c||a)}g.render(e,v),ae&&ae(j,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ne=new n0;Ne.setAnimationLoop(de),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}}const ws=new Pr,DA=new $t;function IA(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Jg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,E,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),x=E.envMap,S=E.envMapRotation;if(x&&(p.envMap.value=x,ws.copy(S),ws.x*=-1,ws.y*=-1,ws.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),p.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(ws)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UA(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=r[E.id];S===void 0&&(_(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(E,w);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function u(E){const x=f();E.__bindingPointIndex=x;const S=n.createBuffer(),w=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=r[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,b=S.length;R<b;R++){const U=Array.isArray(S[R])?S[R]:[S[R]];for(let O=0,v=U.length;O<v;O++){const C=U[O];if(d(C,R,O,w)===!0){const F=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let $=0;$<ee.length;$++){const W=ee[$],z=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+D,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,S,w){const R=E.value,b=x+"_"+S;if(w[b]===void 0)return typeof R=="number"||typeof R=="boolean"?w[b]=R:w[b]=R.clone(),!0;{const U=w[b];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return w[b]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(E){const x=E.uniforms;let S=0;const w=16;for(let b=0,U=x.length;b<U;b++){const O=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,C=O.length;v<C;v++){const F=O[v],ee=Array.isArray(F.value)?F.value:[F.value];for(let D=0,$=ee.length;D<$;D++){const W=ee[D],z=g(W),N=S%w;N!==0&&w-N<z.boundary&&(S+=w-N),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=z.storage}}}const R=S%w;return R>0&&(S+=w-R),E.__size=S,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class c0{constructor(e={}){const{canvas:t=yy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vi,this._useLegacyLights=!1,this.toneMapping=Qr,this.toneMappingExposure=1;const x=this;let S=!1,w=0,R=0,b=null,U=-1,O=null;const v=new hn,C=new hn;let F=null;const ee=new pt(0);let D=0,$=t.width,W=t.height,z=1,N=null,K=null;const P=new hn(0,0,$,W),ae=new hn(0,0,$,W);let de=!1;const Ne=new t0;let j=!1,le=!1,pe=null;const we=new $t,be=new gt,Me=new ie,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?z:1}let M=i;function I(A,V){for(let ne=0;ne<A.length;ne++){const J=A[ne],q=t.getContext(J,V);if(q!==null)return q}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",xe,!1),M===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),M=I(V,A),M===null)throw I(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let k,te,Y,L,se,oe,ue,T,y,B,X,Z,re,me,ve,fe,he,ze,ce,mt,Ye,Re,Ae,Pe;function Ke(){k=new kb(M),te=new Ib(M,k,e),k.init(te),Re=new bA(M,k,te),Y=new EA(M,k,te),L=new Vb(M),se=new cA,oe=new TA(M,k,Y,se,te,Re,L),ue=new Nb(x),T=new zb(x),y=new $y(M,te),Ae=new Lb(M,k,y,te),B=new Hb(M,y,L,Ae),X=new qb(M,B,y,L),ce=new Yb(M,te,oe),fe=new Ub(se),Z=new lA(x,ue,T,k,te,Ae,fe),re=new IA(x,se),me=new fA,ve=new gA(k,te),ze=new Pb(x,ue,T,Y,X,h,l),he=new yA(x,X,te),Pe=new UA(M,L,te,Y),mt=new Db(M,k,L,te),Ye=new Gb(M,k,L,te),L.programs=Z.programs,x.capabilities=te,x.extensions=k,x.properties=se,x.renderLists=me,x.shadowMap=he,x.state=Y,x.info=L}Ke();const ye=new LA(x,M);this.xr=ye,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=k.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=k.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize($,W,!1))},this.getSize=function(A){return A.set($,W)},this.setSize=function(A,V,ne=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,W=V,t.width=Math.floor(A*z),t.height=Math.floor(V*z),ne===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set($*z,W*z).floor()},this.setDrawingBufferSize=function(A,V,ne){$=A,W=V,z=ne,t.width=Math.floor(A*ne),t.height=Math.floor(V*ne),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,ne,J){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,ne,J),Y.viewport(v.copy(P).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,V,ne,J){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,V,ne,J),Y.scissor(C.copy(ae).multiplyScalar(z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){Y.setScissorTest(de=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,V=!0,ne=!0){let J=0;if(A){let q=!1;if(b!==null){const Se=b.texture.format;q=Se===kg||Se===zg||Se===Bg}if(q){const Se=b.texture.type,De=Se===es||Se===Yr||Se===Wh||Se===Ws||Se===Og||Se===Fg,Ve=ze.getClearColor(),Ue=ze.getClearAlpha(),Fe=Ve.r,We=Ve.g,Je=Ve.b;De?(d[0]=Fe,d[1]=We,d[2]=Je,d[3]=Ue,M.clearBufferuiv(M.COLOR,0,d)):(_[0]=Fe,_[1]=We,_[2]=Je,_[3]=Ue,M.clearBufferiv(M.COLOR,0,_))}else J|=M.COLOR_BUFFER_BIT}V&&(J|=M.DEPTH_BUFFER_BIT),ne&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),me.dispose(),ve.dispose(),se.dispose(),ue.dispose(),T.dispose(),X.dispose(),Ae.dispose(),Pe.dispose(),Z.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ie),ye.removeEventListener("sessionend",Be),pe&&(pe.dispose(),pe=null),ge.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=L.autoReset,V=he.enabled,ne=he.autoUpdate,J=he.needsUpdate,q=he.type;Ke(),L.autoReset=A,he.enabled=V,he.autoUpdate=ne,he.needsUpdate=J,he.type=q}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){const V=A.target;V.removeEventListener("dispose",Q),_e(V)}function _e(A){Te(A),se.remove(A)}function Te(A){const V=se.get(A).programs;V!==void 0&&(V.forEach(function(ne){Z.releaseProgram(ne)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ne,J,q,Se){V===null&&(V=Xe);const De=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Pt(A,V,ne,J,q);Y.setMaterial(J,De);let Ue=ne.index,Fe=1;if(J.wireframe===!0){if(Ue=B.getWireframeAttribute(ne),Ue===void 0)return;Fe=2}const We=ne.drawRange,Je=ne.attributes.position;let Nt=We.start*Fe,Qt=(We.start+We.count)*Fe;Se!==null&&(Nt=Math.max(Nt,Se.start*Fe),Qt=Math.min(Qt,(Se.start+Se.count)*Fe)),Ue!==null?(Nt=Math.max(Nt,0),Qt=Math.min(Qt,Ue.count)):Je!=null&&(Nt=Math.max(Nt,0),Qt=Math.min(Qt,Je.count));const yt=Qt-Nt;if(yt<0||yt===1/0)return;Ae.setup(q,J,Ve,ne,Ue);let bn,bt=mt;if(Ue!==null&&(bn=y.get(Ue),bt=Ye,bt.setIndex(bn)),q.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*Ce()),bt.setMode(M.LINES)):bt.setMode(M.TRIANGLES);else if(q.isLine){let qe=J.linewidth;qe===void 0&&(qe=1),Y.setLineWidth(qe*Ce()),q.isLineSegments?bt.setMode(M.LINES):q.isLineLoop?bt.setMode(M.LINE_LOOP):bt.setMode(M.LINE_STRIP)}else q.isPoints?bt.setMode(M.POINTS):q.isSprite&&bt.setMode(M.TRIANGLES);if(q.isBatchedMesh)bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)bt.renderInstances(Nt,yt,q.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,vu=Math.min(ne.instanceCount,qe);bt.renderInstances(Nt,yt,vu)}else bt.render(Nt,yt)};function je(A,V,ne){A.transparent===!0&&A.side===xr&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Ct(A,V,ne),A.side=os,A.needsUpdate=!0,Ct(A,V,ne),A.side=xr):Ct(A,V,ne)}this.compile=function(A,V,ne=null){ne===null&&(ne=A),p=ve.get(ne),p.init(),E.push(p),ne.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==ne&&A.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(x._useLegacyLights);const J=new Set;return A.traverse(function(q){const Se=q.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const Ve=Se[De];je(Ve,ne,q),J.add(Ve)}else je(Se,ne,q),J.add(Se)}),E.pop(),p=null,J},this.compileAsync=function(A,V,ne=null){const J=this.compile(A,V,ne);return new Promise(q=>{function Se(){if(J.forEach(function(De){se.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){q(A);return}setTimeout(Se,10)}k.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dt=null;function Oe(A){dt&&dt(A)}function Ie(){ge.stop()}function Be(){ge.start()}const ge=new n0;ge.setAnimationLoop(Oe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){dt=A,ye.setAnimationLoop(A),A===null?ge.stop():ge.start()},ye.addEventListener("sessionstart",Ie),ye.addEventListener("sessionend",Be),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,b),p=ve.get(A,E.length),p.init(),E.push(p),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ne.setFromProjectionMatrix(we),le=this.localClippingEnabled,j=fe.init(this.clippingPlanes,le),g=me.get(A,m.length),g.init(),m.push(g),Ge(A,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(N,K),this.info.render.frame++,j===!0&&fe.beginShadows();const ne=p.state.shadowsArray;if(he.render(ne,A,V),j===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1)&&ze.render(g,A),p.setupLights(x._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let q=0,Se=J.length;q<Se;q++){const De=J[q];He(g,A,De,De.viewport)}}else He(g,A,V);b!==null&&(oe.updateMultisampleRenderTarget(b),oe.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,V),Ae.resetDefaultState(),U=-1,O=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ge(A,V,ne,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){J&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const De=X.update(A),Ve=A.material;Ve.visible&&g.push(A,De,Ve,ne,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){const De=X.update(A),Ve=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Me.copy(De.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Ue=De.groups;for(let Fe=0,We=Ue.length;Fe<We;Fe++){const Je=Ue[Fe],Nt=Ve[Je.materialIndex];Nt&&Nt.visible&&g.push(A,De,Nt,ne,Me.z,Je)}}else Ve.visible&&g.push(A,De,Ve,ne,Me.z,null)}}const Se=A.children;for(let De=0,Ve=Se.length;De<Ve;De++)Ge(Se[De],V,ne,J)}function He(A,V,ne,J){const q=A.opaque,Se=A.transmissive,De=A.transparent;p.setupLightsView(ne),j===!0&&fe.setGlobalState(x.clippingPlanes,ne),Se.length>0&&Ze(q,Se,V,ne),J&&Y.viewport(v.copy(J)),q.length>0&&kt(q,V,ne),Se.length>0&&kt(Se,V,ne),De.length>0&&kt(De,V,ne),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ze(A,V,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Se=te.isWebGL2;pe===null&&(pe=new Qs(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?nl:es,minFilter:zs,samples:Se?4:0})),x.getDrawingBufferSize(be),Se?pe.setSize(be.x,be.y):pe.setSize(Kf(be.x),Kf(be.y));const De=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(ee),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Ve=x.toneMapping;x.toneMapping=Qr,kt(A,ne,J),oe.updateMultisampleRenderTarget(pe),oe.updateRenderTargetMipmap(pe);let Ue=!1;for(let Fe=0,We=V.length;Fe<We;Fe++){const Je=V[Fe],Nt=Je.object,Qt=Je.geometry,yt=Je.material,bn=Je.group;if(yt.side===xr&&Nt.layers.test(J.layers)){const bt=yt.side;yt.side=Yn,yt.needsUpdate=!0,at(Nt,ne,J,Qt,yt,bn),yt.side=bt,yt.needsUpdate=!0,Ue=!0}}Ue===!0&&(oe.updateMultisampleRenderTarget(pe),oe.updateRenderTargetMipmap(pe)),x.setRenderTarget(De),x.setClearColor(ee,D),x.toneMapping=Ve}function kt(A,V,ne){const J=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Se=A.length;q<Se;q++){const De=A[q],Ve=De.object,Ue=De.geometry,Fe=J===null?De.material:J,We=De.group;Ve.layers.test(ne.layers)&&at(Ve,V,ne,Ue,Fe,We)}}function at(A,V,ne,J,q,Se){A.onBeforeRender(x,V,ne,J,q,Se),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(x,V,ne,J,A,Se),q.transparent===!0&&q.side===xr&&q.forceSinglePass===!1?(q.side=Yn,q.needsUpdate=!0,x.renderBufferDirect(ne,V,J,q,A,Se),q.side=os,q.needsUpdate=!0,x.renderBufferDirect(ne,V,J,q,A,Se),q.side=xr):x.renderBufferDirect(ne,V,J,q,A,Se),A.onAfterRender(x,V,ne,J,q,Se)}function Ct(A,V,ne){V.isScene!==!0&&(V=Xe);const J=se.get(A),q=p.state.lights,Se=p.state.shadowsArray,De=q.state.version,Ve=Z.getParameters(A,q.state,Se,V,ne),Ue=Z.getProgramCacheKey(Ve);let Fe=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?T:ue).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Q),Fe=new Map,J.programs=Fe);let We=Fe.get(Ue);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===De)return It(A,Ve),We}else Ve.uniforms=Z.getUniforms(A),A.onBuild(ne,Ve,x),A.onBeforeCompile(Ve,x),We=Z.acquireProgram(Ve,Ue),Fe.set(Ue,We),J.uniforms=Ve.uniforms;const Je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=fe.uniform),It(A,Ve),J.needsLights=Qn(A),J.lightsStateVersion=De,J.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function Jt(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=gc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function It(A,V){const ne=se.get(A);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function Pt(A,V,ne,J,q){V.isScene!==!0&&(V=Xe),oe.resetTextureUnits();const Se=V.fog,De=J.isMeshStandardMaterial?V.environment:null,Ve=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ds,Ue=(J.isMeshStandardMaterial?T:ue).get(J.envMap||De),Fe=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,We=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!ne.morphAttributes.position,Nt=!!ne.morphAttributes.normal,Qt=!!ne.morphAttributes.color;let yt=Qr;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(yt=x.toneMapping);const bn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=bn!==void 0?bn.length:0,qe=se.get(J),vu=p.state.lights;if(j===!0&&(le===!0||A!==O)){const gi=A===O&&J.id===U;fe.setState(J,A,gi)}let Ot=!1;J.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==vu.state.version||qe.outputColorSpace!==Ve||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==Ue||J.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==fe.numPlanes||qe.numIntersection!==fe.numIntersection)||qe.vertexAlphas!==Fe||qe.vertexTangents!==We||qe.morphTargets!==Je||qe.morphNormals!==Nt||qe.morphColors!==Qt||qe.toneMapping!==yt||te.isWebGL2===!0&&qe.morphTargetsCount!==bt)&&(Ot=!0):(Ot=!0,qe.__version=J.version);let _s=qe.currentProgram;Ot===!0&&(_s=Ct(J,V,q));let Sd=!1,la=!1,xu=!1;const mn=_s.getUniforms(),gs=qe.uniforms;if(Y.useProgram(_s.program)&&(Sd=!0,la=!0,xu=!0),J.id!==U&&(U=J.id,la=!0),Sd||O!==A){mn.setValue(M,"projectionMatrix",A.projectionMatrix),mn.setValue(M,"viewMatrix",A.matrixWorldInverse);const gi=mn.map.cameraPosition;gi!==void 0&&gi.setValue(M,Me.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&mn.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&mn.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,la=!0,xu=!0)}if(q.isSkinnedMesh){mn.setOptional(M,q,"bindMatrix"),mn.setOptional(M,q,"bindMatrixInverse");const gi=q.skeleton;gi&&(te.floatVertexTextures?(gi.boneTexture===null&&gi.computeBoneTexture(),mn.setValue(M,"boneTexture",gi.boneTexture,oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(mn.setOptional(M,q,"batchingTexture"),mn.setValue(M,"batchingTexture",q._matricesTexture,oe));const Su=ne.morphAttributes;if((Su.position!==void 0||Su.normal!==void 0||Su.color!==void 0&&te.isWebGL2===!0)&&ce.update(q,ne,_s),(la||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,mn.setValue(M,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gs.envMap.value=Ue,gs.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),la&&(mn.setValue(M,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Mt(gs,xu),Se&&J.fog===!0&&re.refreshFogUniforms(gs,Se),re.refreshMaterialUniforms(gs,J,z,W,pe),gc.upload(M,Jt(qe),gs,oe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(gc.upload(M,Jt(qe),gs,oe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&mn.setValue(M,"center",q.center),mn.setValue(M,"modelViewMatrix",q.modelViewMatrix),mn.setValue(M,"normalMatrix",q.normalMatrix),mn.setValue(M,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const gi=J.uniformsGroups;for(let Mu=0,Iv=gi.length;Mu<Iv;Mu++)if(te.isWebGL2){const Md=gi[Mu];Pe.update(Md,_s),Pe.bind(Md,_s)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _s}function Mt(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Qn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,V,ne){se.get(A.texture).__webglTexture=V,se.get(A.depthTexture).__webglTexture=ne;const J=se.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ne===void 0,J.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const ne=se.get(A);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ne=0){b=A,w=V,R=ne;let J=!0,q=null,Se=!1,De=!1;if(A){const Ue=se.get(A);Ue.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(M.FRAMEBUFFER,null),J=!1):Ue.__webglFramebuffer===void 0?oe.setupRenderTarget(A):Ue.__hasExternalTextures&&oe.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(De=!0);const We=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[V])?q=We[V][ne]:q=We[V],Se=!0):te.isWebGL2&&A.samples>0&&oe.useMultisampledRTT(A)===!1?q=se.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?q=We[ne]:q=We,v.copy(A.viewport),C.copy(A.scissor),F=A.scissorTest}else v.copy(P).multiplyScalar(z).floor(),C.copy(ae).multiplyScalar(z).floor(),F=de;if(Y.bindFramebuffer(M.FRAMEBUFFER,q)&&te.drawBuffers&&J&&Y.drawBuffers(A,q),Y.viewport(v),Y.scissor(C),Y.setScissorTest(F),Se){const Ue=se.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,ne)}else if(De){const Ue=se.get(A.texture),Fe=V||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ue.__webglTexture,ne||0,Fe)}U=-1},this.readRenderTargetPixels=function(A,V,ne,J,q,Se,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){Y.bindFramebuffer(M.FRAMEBUFFER,Ve);try{const Ue=A.texture,Fe=Ue.format,We=Ue.type;if(Fe!==Ni&&Re.convert(Fe)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=We===nl&&(k.has("EXT_color_buffer_half_float")||te.isWebGL2&&k.has("EXT_color_buffer_float"));if(We!==es&&Re.convert(We)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Sr&&(te.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&ne>=0&&ne<=A.height-q&&M.readPixels(V,ne,J,q,Re.convert(Fe),Re.convert(We),Se)}finally{const Ue=b!==null?se.get(b).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,V,ne=0){const J=Math.pow(2,-ne),q=Math.floor(V.image.width*J),Se=Math.floor(V.image.height*J);oe.setTexture2D(V,0),M.copyTexSubImage2D(M.TEXTURE_2D,ne,0,0,A.x,A.y,q,Se),Y.unbindTexture()},this.copyTextureToTexture=function(A,V,ne,J=0){const q=V.image.width,Se=V.image.height,De=Re.convert(ne.format),Ve=Re.convert(ne.type);oe.setTexture2D(ne,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ne.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ne.unpackAlignment),V.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,J,A.x,A.y,q,Se,De,Ve,V.image.data):V.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,J,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,J,A.x,A.y,De,Ve,V.image),J===0&&ne.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(A,V,ne,J,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(A.max.x-A.min.x),De=Math.round(A.max.y-A.min.y),Ve=A.max.z-A.min.z+1,Ue=Re.convert(J.format),Fe=Re.convert(J.type);let We;if(J.isData3DTexture)oe.setTexture3D(J,0),We=M.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)oe.setTexture2DArray(J,0),We=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,J.unpackAlignment);const Je=M.getParameter(M.UNPACK_ROW_LENGTH),Nt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Qt=M.getParameter(M.UNPACK_SKIP_PIXELS),yt=M.getParameter(M.UNPACK_SKIP_ROWS),bn=M.getParameter(M.UNPACK_SKIP_IMAGES),bt=ne.isCompressedTexture?ne.mipmaps[q]:ne.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,bt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,bt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,A.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,A.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,A.min.z),ne.isDataTexture||ne.isData3DTexture?M.texSubImage3D(We,q,V.x,V.y,V.z,Se,De,Ve,Ue,Fe,bt.data):J.isCompressedArrayTexture?M.compressedTexSubImage3D(We,q,V.x,V.y,V.z,Se,De,Ve,Ue,bt.data):M.texSubImage3D(We,q,V.x,V.y,V.z,Se,De,Ve,Ue,Fe,bt),M.pixelStorei(M.UNPACK_ROW_LENGTH,Je),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Nt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Qt),M.pixelStorei(M.UNPACK_SKIP_ROWS,yt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,bn),q===0&&J.generateMipmaps&&M.generateMipmap(We),Y.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Y.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,Y.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===fu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NA extends c0{}NA.prototype.isWebGL1Renderer=!0;class OA extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class u0 extends oa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rm=new ie,Cm=new ie,Pm=new $t,mf=new Yh,$l=new Sl;class FA extends zn{constructor(e=new ki,t=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rm.fromBufferAttribute(t,r-1),Cm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rm.distanceTo(Cm);e.setAttribute("lineDistance",new Bi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;Pm.copy(r).invert(),mf.copy(e.ray).applyMatrix4(Pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new ie,u=new ie,f=new ie,h=new ie,d=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const m=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let x=m,S=E-1;x<S;x+=d){const w=_.getX(x),R=_.getX(x+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,R),mf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||t.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let x=m,S=E-1;x<S;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),mf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Lm=new ie,Dm=new ie;class BA extends FA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Lm.fromBufferAttribute(t,r),Dm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lm.distanceTo(Dm);e.setAttribute("lineDistance",new Bi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f0 extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new $t,Jf=new Yh,jl=new Sl,Kl=new ie;class zA extends zn{constructor(e=new ki,t=new f0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(r),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;Im.copy(r).invert(),Jf.copy(e.ray).applyMatrix4(Im);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const p=c.getX(_);Kl.fromBufferAttribute(f,p),Um(Kl,p,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d;_<g;_++)Kl.fromBufferAttribute(f,_),Um(Kl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Um(n,e,t,i,r,s,a){const o=Jf.distanceSqToPoint(n);if(o<t){const l=new ie;Jf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);const tn={name:"高萌锴",nameEn:"GAO MENGKAI",title:"资深前端工程师",subtitle:"7年极客经验 / 专注极致 Web 与跨端体验",motto:"努力超越自己，每天进步一点点",age:29,gender:"男",ethnicity:"汉",origin:"河南南阳",experience:"7年+",phone:"18639812511",email:"a842676425@163.com",position:"前端工程师",salary:"面议",availability:"一周内到岗"},Zl={school:"南阳师范学院",major:"软件工程（本科）",period:"2016-09 ~ 2020-06",courses:["C/C++程序设计","Java语言程序设计","软件工程","计算机原理","Linux操作系统与网络编程","WEB技术与应用","数据结构与算法","数据库开发技术"]},Jl=[{id:1,name:"Vue全家桶",level:95,detail:"熟练掌握Vue全家桶阅读过源码、使用 Vue.js及vue-electron及其他工具库完成项目开发",tags:["Vue2","Vue3","Vuex","Pinia","Vue-Router"]},{id:2,name:"Git版本管理",level:90,detail:"熟练使用 Git 进行代码的版本、分支管理，熟悉码云及 GitHub、GitLab 的可视化操作",tags:["Git","GitHub","GitLab"]},{id:3,name:"Web安全",level:80,detail:"熟悉浏览器的同源策略，了解和熟练使用 jsonp、cors 等跨域解决方案、了解浏览器进线程、了解XSS、CSRF攻击、了解网络劫持，能更好处理安全问题",tags:["XSS","CSRF","CORS","JSONP"]},{id:4,name:"HTML5/CSS3",level:92,detail:"熟悉 HTML5、CSS3 新特性，进行web、移动端的开发，熟练使用预处理器 sass,less,stylus",tags:["HTML5","CSS3","Sass","Less","Stylus"]},{id:5,name:"JavaScript",level:90,detail:"熟练使用 jquery lodash 等类库操作 dom 和数据，熟练掌握原生 JavaScript，了解作用域、原型链、闭包、线程机制和事件循环机制等",tags:["ES6+","DOM","BOM","TypeScript"]},{id:6,name:"前端工程化",level:85,detail:"熟练使用 babel 进行代码转译，webpack 构建前端工程配置",tags:["Webpack","Vite","Babel","Rollup"]},{id:7,name:"UI还原",level:88,detail:"熟练掌握 h5 标签语义化，能够较高精度还原 UI 设计稿",tags:["Flex","Grid","响应式","像素级还原"]},{id:8,name:"Vue3 + TS",level:88,detail:"使用并了解Vue3.0 + Vite + TypeScript，熟悉MVC、MVVM开发模式",tags:["Vue3","Vite","TypeScript","Composition API"]},{id:9,name:"全栈开发",level:78,detail:"从0到1开发15个项目，一套完整的商城项目，从后台管理系统到商城页面以及订单页面支付页面以及AI机器人对话，涉及多个域名之间的数据交互和判断",tags:["Node.js","Electron","PWA","全栈"]},{id:10,name:"HTTP/网络",level:75,detail:"了解 http 协议、客户端与服务器通信原理",tags:["HTTP","HTTPS","WebSocket","RESTful"]},{id:11,name:"移动端开发",level:82,detail:"参与移动端 H5、小程序、原生应用框架体系设计以及前端工程体系的落地",tags:["H5","小程序","PWA","跨端"]}],Qf=[{id:1,period:"2023-03 ~ 2026-06",company:"金果未来公司",position:"前端工程师",responsibilities:["负责公司国外借贷业务的前端开发工作，包括 APP、H5 页面和 PWA 应用的开发与维护","主导多个项目从 Vue2 重构到 Vue3，使用 Composition API 重构核心业务逻辑，提升项目性能和开发效率","负责前端模块的整体架构设计和代码规范制定，引入 TypeScript 增强类型安全","开发海外借贷 APP 项目，使用 Vue3、Vite、Pinia、TypeScript 技术栈，负责核心业务模块开发","开发 H5 营销活动平台，实现抽奖、优惠券、邀请返利等多种营销玩法","将核心业务改造为 PWA 应用，实现 Service Worker 缓存策略，支持离线访问和消息推送","优化首屏加载速度，将白屏时间从 3s 降低到 1.2s，打包时间缩短 40%","集成第三方支付和风控系统，确保交易安全"],projects:[{name:"海外借贷 APP",tech:"Vue3, Vite, Pinia, TypeScript, Vant UI",description:"面向海外用户的借贷服务平台，提供贷款申请、审核、还款等核心功能",features:["核心业务模块开发，包括用户认证、贷款申请流程、还款管理等","设计并实现可复用业务组件库，提高开发效率30%","优化首屏加载速度，白屏时间从3s降至1.2s","集成第三方支付和风控系统"]},{name:"H5营销活动平台",tech:"Vue2/Vue3, Vuex, Axios",description:"面向海外市场的营销活动平台，支持多种营销玩法",features:["开发抽奖、优惠券、邀请返利等营销活动页面","实现活动数据可视化展示","优化移动端适配方案"]},{name:"PWA渐进式应用",tech:"Vue3, PWA, Service Worker",description:"将核心业务改造为PWA应用，提升用户体验",features:["实现Service Worker缓存策略，支持离线访问","添加桌面快捷方式功能，提升用户留存率","实现消息推送功能，提高用户活跃度"]}]},{id:2,period:"2021-05 ~ 2023-02",company:"北京鸿蒙蝴蝶云公司",position:"前端工程师（前端组长）",responsibilities:["负责维护、开发公司多个项目，优化项目安全性能问题，持续优化前端架构，提升性能和开发效率以及维护开发成本","与产品经理和运营人员沟通优化公司产品页面以及功能实现流程","重构公司部分老项目，对比之前老项目提高双倍运行效率比，后期开发人员更便捷维护","参与开发APP对接项目，开发h5页面与app数据进行交互","关注前端前沿技术研究，通过新技术服务团队和业务，保证前端架构处于先进水平"],projects:[{name:"鸿蒙通桌面应用系统",tech:"Vue, Vue-Electron, ElementUI",description:"基于Electron的桌面应用系统",features:["Web核心设计开发","Electron桌面端封装与优化","原生交互能力实现"]},{name:"智能云终端",tech:"Vue, Vuex, Vue-Router, ElementUI, Axios",description:"云终端大数据展示，视频监测数据统计",features:["资质审核时使用jsencrypt插件对参数进行RSA加密","自定义代码模块上传时进行encodeURIComponent编码操作","用户自定义广告位置代码，鼠标点击位置即弹窗出现位置","用户商城页面扫描自查","云终端开通以及资质审核对用户账号权限操作"]},{name:"数字乡村3D展示",tech:"Vue, Vuex, Vue-Router, ElementUI, Axios",description:"展示数字乡村商家统计信息",features:["3D动态旋转4阶魔方，鼠标移入魔方展开与闭合动画","多个模块循环旋转样式","3D数据球统计展示","CSS帧动画以及毛玻璃效果展示"]},{name:"智网前台检测系统 / 后台管理系统",tech:"Vue, Vuex, Vue-Router, ElementUI, Axios, WebSocket",description:"智网系统主要用于网络资源的监控、抓取，其前台功能包括音视频检测、网站监测、图片检测",features:["多个扫描模块使用WebSocket更新进度样式、数据展示进行数据实时更新","多种业务逻辑处理，复杂数据类型大量处理","对ElementUI表单进行二次封装模仿ant组件库封装","APP与H5使用webJS/messageHandlers方法进行交互"]}]},{id:3,period:"2019-06 ~ 2021-04",company:"易有料科技公司",position:"前端工程师",responsibilities:["负责维护、开发公司后台管理系统、用户使用系统","在项目中部分模块引入 Vue3 的相关新特性，提升研发效率和系统性能","负责公司项目的 H5/Web 端的前端开发及维护工作","参与需求的设计研发，以及易用性的优化，为客户带来最佳的体验"],projects:[{name:"易有料后台运营管理系统",tech:"Vue, Vue-Router, ElementUI, Axios",description:"独立式开发方式，后台包含多个管理模块，内容分发以及内容权限，管理内容收付费情况",features:["运营人员管理拉取后的内容，分发客户浏览权限","统计人员统计内容日输出量以及浏览量","审核人员审核内容是否有违规违法内容"]},{name:"百川系统",tech:"React, Redux, Ant Design, Axios",description:"用户对于自建内容的集合管理，以及对内容的统一输出",features:["用户申请注册账号创建应用后可自建内容并投递","用户可管理内容的上下架状态","内容创建可分为视频、音频、文章三大类","参与1.0 UI及功能改版全过程以及2.0系统完全改版全过程"]}]}],Ql=["有很强的责任心和执行力，能够认真仔细地完成本职工作。能够适应快节奏的工作状态。","有良好的前端编程能力和编程习惯，致力于代码的整体结构规范及优化，有对于代码格式整洁的轻微强迫症。","有良好的沟通能力和团队合作意识，工作中遇到的问题能及时和同事进行沟通，分工合作的同时可以很快的提出各种前端后台问题的解决方案。","具有很强的学习能力和对新技术的追求精神，对前端开发有浓厚的兴趣，关注前端前沿技术，并乐于钻研。"],kA={class:"hud-terminal"},HA={class:"hero-name","data-text":"高萌锴"},GA={class:"hero-name-en"},VA={key:0,class:"hero-subtitle"},WA={class:"typed-text"},XA=hs({__name:"HeroSection",setup(n){const e=ut(null),t=ut(null),i=ut(!1),r=ut(""),s=ut(!1),a=ut(!1),o=ut(!1),l=ut(!1),c=ut(0),u=ut(0),f=ut([]),h=["> load Vue3_Core.......... [OK]","> init WebRTC_Stream...... [OK]","> mount AI_Prompt_Engine.. [READY]","> sync TypeScript_Module.. [OK]","> boot Electron_Shell..... [OK]","> connect PWA_Service..... [ACTIVE]"];let d=null;const _=()=>{const z=document.getElementById("contact");z&&z.scrollIntoView({behavior:"smooth"})},g=()=>{const z=document.getElementById("projects");z&&z.scrollIntoView({behavior:"smooth"})},p=z=>{const N=e.value;if(!N)return;const K=N.getBoundingClientRect(),P=z.clientX-K.left,ae=z.clientY-K.top,de=K.width/2,Ne=K.height/2;c.value=(ae-Ne)/Ne*-8,u.value=(P-de)/de*8},m=()=>{c.value=0,u.value=0};let E=null,x=null,S=null,w=null,R=0,b=0,U=0;const O=`${tn.title} / ${tn.subtitle}`,v=()=>{if(!(!t.value||!e.value))try{E=new OA,x=new yi(75,window.innerWidth/window.innerHeight,.1,1e3),x.position.z=50,S=new c0({canvas:t.value,alpha:!0,antialias:!0}),S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(Math.min(window.devicePixelRatio,2));const z=300,N=new ki,K=new Float32Array(z*3),P=new Float32Array(z*3),ae=new Float32Array(z),de=new pt(61695),Ne=new pt(9055202);for(let Xe=0;Xe<z;Xe++){const Ce=Xe*3;K[Ce]=(Math.random()-.5)*120,K[Ce+1]=(Math.random()-.5)*120,K[Ce+2]=(Math.random()-.5)*120;const M=Math.random()>.5?de:Ne;P[Ce]=M.r,P[Ce+1]=M.g,P[Ce+2]=M.b,ae[Xe]=Math.random()*1.5+.3}N.setAttribute("position",new di(K,3)),N.setAttribute("color",new di(P,3)),N.setAttribute("size",new di(ae,1));const j=new f0({size:1.2,vertexColors:!0,transparent:!0,opacity:.25,blending:Nc,sizeAttenuation:!0});w=new zA(N,j),E.add(w);const le=new ki,pe=[],we=[];for(let Xe=0;Xe<30;Xe++){const Ce=(Math.random()-.5)*100,M=(Math.random()-.5)*100,I=(Math.random()-.5)*100,k=Ce+(Math.random()-.5)*20,te=M+(Math.random()-.5)*20,Y=I+(Math.random()-.5)*20;pe.push(Ce,M,I,k,te,Y);const L=Math.random()>.5?[0,.94,1]:[.54,.17,.89];we.push(...L,...L)}le.setAttribute("position",new Bi(pe,3)),le.setAttribute("color",new Bi(we,3));const be=new u0({vertexColors:!0,transparent:!0,opacity:.08,blending:Nc}),Me=new BA(le,be);E.add(Me)}catch(z){console.error("[HeroSection.initThree]",z)}},C=()=>{if(U=requestAnimationFrame(C),w&&S&&E&&x){w.rotation.x+=15e-5,w.rotation.y+=25e-5;const z=R*3e-4,N=b*3e-4;w.rotation.x+=(N-w.rotation.x)*.01,w.rotation.y+=(z-w.rotation.y)*.01,S.render(E,x)}},F=z=>{R=z.clientX-window.innerWidth/2,b=z.clientY-window.innerHeight/2},ee=()=>{!x||!S||(x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight))},D=(z,N=60)=>{let K=0;const P=setInterval(()=>{K<z.length?(r.value+=z.charAt(K),K++):clearInterval(P)},N)},$=()=>{i.value=!0,setTimeout(()=>{i.value=!1},1500)},W=()=>{let z=0;d=window.setInterval(()=>{z<h.length?(f.value.push(h[z]),z++):(f.value=[],z=0)},2500)};return sr(()=>{v(),C(),window.addEventListener("mousemove",F),window.addEventListener("resize",ee),setTimeout(()=>{l.value=!0,W()},0),setTimeout(()=>{a.value=!0},500),setTimeout(()=>{$()},1e3),setTimeout(()=>{s.value=!0,D(O,70)},2e3),setTimeout(()=>{o.value=!0},3e3)}),ml(()=>{cancelAnimationFrame(U),window.removeEventListener("mousemove",F),window.removeEventListener("resize",ee),d&&clearInterval(d),S==null||S.dispose()}),(z,N)=>(Qe(),tt("section",{ref_key:"heroRef",ref:e,class:"hero-section"},[H("canvas",{ref_key:"canvasRef",ref:t,class:"hero-canvas"},null,512),N[13]||(N[13]=H("div",{class:"scanline"},null,-1)),N[14]||(N[14]=H("div",{class:"vignette-overlay"},null,-1)),H("div",{class:In(["hud hud-tl",{"hud-visible":l.value}])},[...N[0]||(N[0]=[H("div",{class:"hud-line-primary"},"[SYS_STATUS: ONLINE]",-1),H("div",{class:"hud-line-secondary"},"NODE: HKG // UPTIME: 99.9%",-1)])],2),H("div",{class:In(["hud hud-tr",{"hud-visible":l.value}])},[...N[1]||(N[1]=[H("div",{class:"hud-line-primary"},"ID_CLASSIFICATION:",-1),H("div",{class:"hud-line-accent"},"FRONT_END_ARCHITECT",-1)])],2),H("div",{class:In(["hud hud-bl",{"hud-visible":l.value}])},[H("div",kA,[(Qe(!0),tt(Bt,null,hi(f.value,(K,P)=>(Qe(),tt("div",{key:P,class:"hud-term-line"},et(K),1))),128))])],2),H("div",{class:In(["hero-content",{"panel-visible":a.value}]),onMousemove:p,onMouseleave:m,style:rs({transform:`perspective(1200px) rotateX(${c.value}deg) rotateY(${u.value}deg)`})},[N[8]||(N[8]=H("div",{class:"panel-corner-line tl"},null,-1)),N[9]||(N[9]=H("div",{class:"panel-corner-line tr"},null,-1)),N[10]||(N[10]=H("div",{class:"panel-corner-line bl"},null,-1)),N[11]||(N[11]=H("div",{class:"panel-corner-line br"},null,-1)),H("div",{class:In(["hero-name-wrapper",{"glitch-active":i.value}])},[H("h1",HA,[N[2]||(N[2]=H("span",{class:"hero-name-main"},"高萌锴",-1)),H("span",GA,et(Tt(tn).nameEn),1)]),N[3]||(N[3]=H("div",{class:"hero-name-glitch","aria-hidden":"true"},"高萌锴",-1)),N[4]||(N[4]=H("div",{class:"hero-name-glitch2","aria-hidden":"true"},"高萌锴",-1))],2),s.value?(Qe(),tt("div",VA,[H("span",WA,et(r.value),1),N[5]||(N[5]=H("span",{class:"cursor"},"|",-1))])):Cr("",!0),H("div",{class:In(["hero-cta",{"cta-visible":o.value}])},[H("button",{class:"neon-btn",onClick:g},[...N[6]||(N[6]=[H("span",{class:"btn-text"},"获取我的简历",-1),H("div",{class:"btn-glitch"},null,-1)])]),H("button",{class:"neon-btn neon-btn--purple",onClick:_},[...N[7]||(N[7]=[H("span",{class:"btn-text"},"开启远程协作",-1),H("div",{class:"btn-glitch"},null,-1)])])],2)],38),H("div",{class:In(["scroll-indicator",{"cta-visible":o.value}])},[...N[12]||(N[12]=[H("div",{class:"scroll-line"},null,-1),H("span",{class:"scroll-text"},"SCROLL",-1)])],2)],512))}}),ps=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},YA=ps(XA,[["__scopeId","data-v-589ca103"]]);function mr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},il={duration:.5,overwrite:!1,delay:0},$h,pn,zt,bi=1e8,Rt=1/bi,eh=Math.PI*2,qA=eh/4,$A=0,d0=Math.sqrt,jA=Math.cos,KA=Math.sin,un=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Lr=function(e){return typeof e=="number"},jh=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Kh=function(){return typeof window<"u"},ec=function(e){return Xt(e)||un(e)},p0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,ZA=/random\([^)]+\)/g,JA=/,\s*/g,Nm=/(?:-?\.?\d|\.)+/gi,m0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_f=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_0=/[+-]=-?[.\d]+/,QA=/[^,'"\[\]\s]+/gi,ew=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Wi,th,Zh,mi={},Gc={},g0,v0=function(e){return(Gc=Qo(e,mi))&&Jn},Jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rl=function(e,t){return!t&&console.warn(e)},x0=function(e,t){return e&&(mi[e]=t)&&Gc&&(Gc[e]=t)||mi},sl=function(){return 0},tw={suppressEvents:!0,isStart:!0,kill:!1},vc={suppressEvents:!0,kill:!1},nw={suppressEvents:!0},Qh={},ts=[],nh={},S0,ri={},gf={},Om=30,xc=[],ed="",td=function(e){var t=e[0],i,r;if(rr(t)||Xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=xc.length;r--&&!xc[r].targetTest(t););i=xc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new G0(e[r],i)))||e.splice(r,1);return e},Ys=function(e){return e._gsap||td(Ai(e))[0]._gsap},M0=function(e,t,i){return(i=e[t])&&Xt(i)?e[t]():jh(i)&&e.getAttribute&&e.getAttribute(t)||i},jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Ho=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},iw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Vc=function(){var e=ts.length,t=ts.slice(0),i,r;for(nh={},ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},nd=function(e){return!!(e._initted||e._startAt||e.add)},y0=function(e,t,i,r){ts.length&&!pn&&Vc(),e.render(t,i,!!(pn&&t<0&&nd(e))),ts.length&&!pn&&Vc()},E0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(QA).length<2?t:un(e)?e.trim():e},T0=function(e){return e},_i=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},rw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Qo=function(e,t){for(var i in t)e[i]=t[i];return e},Fm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Wc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Fa=function(e){var t=e.parent||Gt,i=e.keyframes?rw(Tn(e.keyframes)):_i;if($n(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},sw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},b0=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},pu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ow=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ih=function(e,t,i,r){return e._startAt&&(pn?e._startAt.revert(vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aw=function n(e){return!e||e._ts&&n(e.parent)},Bm=function(e){return e._repeat?ea(e._tTime,e=e.duration()+e._rDelay)*e:0},ea=function(e,t){var i=Math.floor(e=Ht(e/t));return e&&i===e?i-1:i},Xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mu=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},_u=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),mu(e),i._dirty||qs(i,e)),e},A0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Xc(e.rawTime(),t),(!t._dur||yl(0,t.totalDuration(),i)-t._tTime>Rt)&&t.render(i,!0)),qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Rt}},Zi=function(e,t,i,r){return t.parent&&ls(t),t._start=Ht((Lr(i)?i:i||e!==Gt?Si(e,i,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),b0(e,t,"_first","_last",e._sort?"_start":0),rh(t)||(e._recent=t),r||A0(e,t),e._ts<0&&_u(e,e._tTime),e},w0=function(e,t){return(mi.ScrollTrigger||Jh("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},R0=function(e,t,i,r,s){if(rd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&S0!==oi.frame)return ts.push(e),e._lazy=[s,r],1},lw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},rh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cw=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&lw(e)&&!(!e._initted&&rh(e))||(e._ts<0||e._dp._ts<0)&&!rh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=yl(0,e._tDur,t),u=ea(l,o),e._yoyo&&u&1&&(a=1-a),u!==ea(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||r||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&R0(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Rt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ih(e,t,i,!0),e._onUpdate&&!i&&ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ls(e,1),!i&&!pn&&(ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ta=function(e,t,i,r){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!r&&_u(e,e._tTime=e._tDur*o),e.parent&&mu(e),i||qs(e.parent,e),e},zm=function(e){return e instanceof Xn?qs(e):ta(e,e._dur)},fw={_start:0,endTime:sl,totalDuration:sl},Si=function n(e,t,i){var r=e.labels,s=e._recent||fw,a=e.duration()>=bi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Tn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Ba=function(e,t,i){var r=Lr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Zt(t[0],a,t[s+1])},ms=function(e,t){return e||e===0?t(e):t},yl=function(e,t,i){return i<e?e:i>t?t:i},Mn=function(e,t){return!un(e)||!(t=ew.exec(e))?"":t[1]},hw=function(e,t,i){return ms(i,function(r){return yl(e,t,r)})},sh=[].slice,C0=function(e,t){return e&&rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==Wi},dw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return un(r)&&!t||C0(r,1)?(s=i).push.apply(s,Ai(r)):i.push(r)})||i},Ai=function(e,t,i){return zt&&!t&&zt.selector?zt.selector(e):un(e)&&!i&&(th||!na())?sh.call((t||Zh).querySelectorAll(e),0):Tn(e)?dw(e,i):C0(e)?sh.call(e,0):e?[e]:[]},oh=function(e){return e=Ai(e)[0]||rl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ai(t,i.querySelectorAll?i:i===e?rl("Invalid scope")||Zh.createElement("div"):e)}},P0=function(e){return e.sort(function(){return .5-Math.random()})},L0=function(e){if(Xt(e))return e;var t=rr(e)?e:{each:e},i=$s(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return un(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,p=a[g],m,E,x,S,w,R,b,U,O;if(!p){if(O=t.grid==="auto"?0:(t.grid||[1,bi])[1],!O){for(b=-bi;b<(b=_[O++].getBoundingClientRect().left)&&O<g;);O<g&&O--}for(p=a[g]=[],m=l?Math.min(O,g)*u-.5:r%O,E=O===bi?0:l?g*f/O-.5:r/O|0,b=0,U=bi,R=0;R<g;R++)x=R%O-m,S=E-(R/O|0),p[R]=w=c?Math.abs(c==="y"?S:x):d0(x*x+S*S),w>b&&(b=w),w<U&&(U=w);r==="random"&&P0(p),p.max=b-U,p.min=U,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(O>g?g-1:c?c==="y"?g/O:O:Math.max(O,g/O))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Mn(t.amount||t.each)||0,i=i&&g<0?Aw(i):i}return g=(p[h]-p.min)/p.max||0,Ht(p.b+(i?i(g):g)*p.v)+p.u}},ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Lr(i)?0:Mn(i))}},D0=function(e,t){var i=Tn(e),r,s;return!i&&rr(e)&&(r=i=e.radius||bi,e.values?(e=Ai(e.values),(s=!Lr(e[0]))&&(r*=r)):e=ah(e.increment)),ms(t,i?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=bi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Lr(a)?u:u+Mn(a)}:ah(e))},I0=function(e,t,i,r){return ms(Tn(e)?!t:i===!0?!!(i=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},pw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},mw=function(e,t){return function(i){return e(parseFloat(i))+(t||Mn(i))}},_w=function(e,t,i){return N0(e,t,0,1,i)},U0=function(e,t,i){return ms(i,function(r){return e[~~t(r)]})},gw=function n(e,t,i){var r=t-e;return Tn(e)?U0(e,n(0,e.length),t):ms(i,function(s){return(r+(s-e)%r)%r+e})},vw=function n(e,t,i){var r=t-e,s=r*2;return Tn(e)?U0(e,n(0,e.length-1),t):ms(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ol=function(e){return e.replace(ZA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(JA);return I0(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},N0=function(e,t,i,r,s){var a=t-e,o=r-i;return ms(s,function(l){return i+((l-e)/a*o||0)})},xw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=un(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},i=t}else r||(e=Qo(Tn(e)?[]:{},e));if(!u){for(l in t)id.call(o,e,l,"get",t[l]);s=function(_){return ad(_,o)||(a?e.p:e)}}}return ms(i,s)},km=function(e,t,i){var r=e.labels,s=bi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ci=function(e,t,i){var r=e.vars,s=r[t],a=zt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ts.length&&Vc(),o&&(zt=o),u=l?s.apply(c,l):s.call(c),zt=a,u},Ea=function(e){return ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ci(e,"onInterrupt"),e},Io,O0=[],F0=function(e){if(e)if(e=!e.name&&e.default||e,Kh()||e.headless){var t=e.name,i=Xt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:sl,render:ad,add:id,kill:Ow,modifier:Nw,rawVars:0},a={targetTest:0,get:0,getSetter:od,aliases:{},register:0};if(na(),e!==r){if(ri[t])return;_i(r,_i(Wc(e,s),a)),Qo(r.prototype,Qo(s,Wc(e,a))),ri[r.prop=t]=r,e.targetTest&&(xc.push(r),Qh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}x0(t,r),e.register&&e.register(Jn,r,Kn)}else O0.push(e)},wt=255,Ta={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},vf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},B0=function(e,t,i){var r=e?Lr(e)?[e>>16,e>>8&wt,e&wt]:0:Ta.black,s,a,o,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ta[e])r=Ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Nm),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=vf(l+1/3,s,a),r[1]=vf(l,s,a),r[2]=vf(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(m0),i&&r.length<4&&(r[3]=1),r}else r=e.match(Nm)||Ta.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/wt,a=r[1]/wt,o=r[2]/wt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},z0=function(e){var t=[],i=[],r=-1;return e.split(ns).forEach(function(s){var a=s.match(Do)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Hm=function(e,t,i){var r="",s=(e+r).match(ns),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=B0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=z0(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ns,"1").split(Do),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ns),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},ns=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ta)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Sw=/hsl[a]?\(/,k0=function(e){var t=e.join(" "),i;if(ns.lastIndex=0,ns.test(t))return i=Sw.test(t),e[1]=Hm(e[1],i),e[0]=Hm(e[0],i,z0(e[1])),!0},al,oi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(p){var m=n()-r,E=p===!0,x,S,w,R;if((m>e||m<0)&&(i+=m-t),r+=m,w=r-i,x=w-a,(x>0||E)&&(R=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,a+=x+(x>=s?4:s-x),S=1),E||(l=c(g)),S)for(d=0;d<o.length;d++)o[d](w,h,R,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){g0&&(!th&&Kh()&&(Wi=th=window,Zh=Wi.document||{},mi.gsap=Jn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Jn.version),v0(Gc||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),O0.forEach(F0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},al=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),al=0,c=sl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,E){var x=m?function(S,w,R,b){p(S,w,R,b),f.remove(x)}:p;return f.remove(p),o[E?"unshift":"push"](x),na(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),na=function(){return!al&&oi.wake()},ft={},Mw=/^[\d.\-M][\d.\-,\s]/,yw=/["']/g,Ew=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(yw,"").trim():+c,r=l.substr(o+1).trim();return t},Tw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},bw=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Ew(t[1])]:Tw(e).split(",").map(E0)):ft._CE&&Mw.test(e)?ft._CE("",e):i},Aw=function(e){return function(t){return 1-e(1-t)}},$s=function(e,t){return e&&(Xt(e)?e:ft[e]||bw(e))||t},ro=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return jn(e,function(o){ft[o]=mi[o]=s,ft[a=o.toLowerCase()]=i;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},H0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/eh*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*KA((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:H0(o);return s=eh/s,l.config=function(c,u){return n(e,c,u)},l},Sf=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:H0(i);return r.config=function(s){return n(e,s)},r};jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ro(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;ro("Elastic",xf("in"),xf("out"),xf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};ro("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ro("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ro("Circ",function(n){return-(d0(1-n*n)-1)});ro("Sine",function(n){return n===1?1:-jA(n*qA)+1});ro("Back",Sf("in"),Sf("out"),Sf());ft.SteppedEase=ft.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((r*yl(0,a,o)|0)+s)*i}}};il.ease=ft["quad.out"];jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return ed+=n+","+n+"Params,"});var G0=function(e,t){this.id=$A++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:M0,this.set=t?t.getSetter:od},ll=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ta(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),al||oi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ta(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(na(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_u(this,i),!s._dp||s.parent||A0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),y0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Bm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Bm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ea(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Xc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Rt?0:this._rts,this.totalTime(yl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),mu(this),ow(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(na(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+($n(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=nw);var r=pn;return pn=i,nd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),pn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,zm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,zm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Si(this,i),$n(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,$n(r)),this._dur||(this._zTime=-Rt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Rt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Xt(i)?i:T0,l=function(){var u=r.then;r.then=null,s&&s(),Xt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ea(this)},n}();_i(ll.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Xn=function(n){h0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=$n(i.sortChildren),Gt&&Zi(i.parent||Gt,mr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&w0(mr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ba(0,arguments,this),this},t.from=function(r,s,a){return Ba(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ba(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Fa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Si(this,a),1),this},t.call=function(r,s,a){return Zi(this,Zt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Zt(r,a,Si(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Fa(a).immediateRender=$n(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Fa(o).immediateRender=$n(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ht(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,p,m,E,x,S,w,R,b;if(this!==Gt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Ht(u%p),u===l?(g=this._repeat,h=c):(w=Ht(u/p),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=ea(this._tTime,p),!o&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),R&&g&1&&(h=c-h,b=1),g!==w&&!this._lock){var U=R&&w&1,O=U===(R&&g&1);if(g<w&&(U=!U),o=U?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Ht(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,o=U?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=uw(this,Ht(o),Ht(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!w&&(ci(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=-Rt);break}}d=_}else{d=this._last;for(var v=r<0?r:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||pn&&nd(d)),h!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=v?-Rt:Rt);break}}d=_}}if(E&&!s&&(this.pause(),E.render(h>=o?0:-Rt)._zTime=h>=o?1:-1,this._ts))return this._start=S,mu(this),this.render(r,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ls(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ci(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Lr(s)||(s=Si(this,s,r)),!(r instanceof ll)){if(Tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(un(r))return this.addLabel(r,s);if(Xt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?Zi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Zt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return un(r)?this.removeLabel(r):Xt(r)?this.killTweensOf(r):(r.parent===this&&pu(this,r),r===this._recent&&(this._recent=this._last),qs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(oi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Si(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Zt.delayedCall(0,s||sl,a);return o.data="isPause",this._hasPause=1,Zi(this,o,Si(this,r))},t.removePause=function(r){var s=this._first;for(r=Si(this,r);s;)s._start===r&&s.data==="isPause"&&ls(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)qr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Ai(r),l=this._first,c=Lr(s),u;l;)l instanceof Zt?iw(l._targets,o)&&(c?(!qr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Si(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Zt.to(a,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ta(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,_i({startAt:{time:Si(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),km(this,Si(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),km(this,Si(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Ht(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return qs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=bi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Zi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ht(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ta(a,a===Gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Gt._ts&&(y0(Gt,Xc(r,Gt)),S0=oi.frame),oi.frame>=Om){Om+=pi.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&pi.autoSleep&&oi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oi.sleep()}}},e}(ll);_i(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ww=function(e,t,i,r,s,a,o){var l=new Kn(this._pt,e,t,0,1,$0,null,s),c=0,u=0,f,h,d,_,g,p,m,E;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=ol(r)),a&&(E=[i,r],a(E,e,t),i=E[0],r=E[1]),h=i.match(_f)||[];f=_f.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ho(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=_f.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(_0.test(r)||m)&&(l.e=0),this._pt=l,l},id=function(e,t,i,r,s,a,o,l,c,u){Xt(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:Xt(f)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Xt(f)?c?Dw:Y0:sd,_;if(un(r)&&(~r.indexOf("random(")&&(r=ol(r)),r.charAt(1)==="="&&(_=Ho(h,r)+(Mn(h)||0),(_||_===0)&&(r=_))),!u||h!==r||lh)return!isNaN(h*r)&&r!==""?(_=new Kn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Uw:q0,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Jh(t,r),ww.call(this,e,t,h,r,d,l||pi.stringFilter,c))},Rw=function(e,t,i,r,s){if(Xt(e)&&(e=za(e,s,t,i,r)),!rr(e)||e.style&&e.nodeType||Tn(e)||p0(e))return un(e)?za(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=za(e[o],s,t,i,r);return a},V0=function(e,t,i,r,s,a){var o,l,c,u;if(ri[e]&&(o=new ri[e]).init(s,o.rawVars?t[e]:Rw(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Kn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Io))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qr,lh,rd=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!$h,S=e.timeline,w=r.easeReverse||f,R,b,U,O,v,C,F,ee,D,$,W,z,N;if(S&&(!h||!s)&&(s="none"),e._ease=$s(s,il.ease),e._rEase=w&&($s(w)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(ee=p[0]?Ys(p[0]).harness:0,z=ee&&r[ee.prop],R=Wc(r,Qh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?vc:tw),g._lazy=0),a){if(ls(e._startAt=Zt.set(p,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!d)&&e._startAt.revert(vc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),U=_i({overwrite:!1,data:"isFromStart",lazy:o&&!g&&$n(l),immediateRender:o,stagger:0,parent:m},R),z&&(U[ee.prop]=z),ls(e._startAt=Zt.set(p,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(vc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&$n(l)||l&&!_,b=0;b<p.length;b++){if(v=p[b],F=v._gsap||td(p)[b]._gsap,e._ptLookup[b]=$={},nh[F.id]&&ts.length&&Vc(),W=E===p?b:E.indexOf(v),ee&&(D=new ee).init(v,z||R,e,W,E)!==!1&&(e._pt=O=new Kn(e._pt,v,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(K){$[K]=O}),D.priority&&(C=1)),!ee||z)for(U in R)ri[U]&&(D=V0(U,R,e,W,v,E))?D.priority&&(C=1):$[U]=O=id.call(e,v,U,"get",R[U],W,E,0,r.stringFilter);e._op&&e._op[b]&&e.kill(v,e._op[b]),x&&e._pt&&(qr=e,Gt.killTweensOf(v,$,e.globalTime(t)),N=!e.parent,qr=0),e._pt&&l&&(nh[F.id]=1)}C&&j0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,h&&t<=0&&S.render(bi,!0,!0)},Cw=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lh=1,e.vars[t]="+=0",rd(e,o),lh=0,l?rl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Yt(i)+Mn(f.e)),f.b&&(f.b=u.s+Mn(f.b))},Pw=function(e,t){var i=e[0]?Ys(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Qo({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Lw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Tn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},za=function(e,t,i,r,s){return Xt(e)?e.call(t,i,r,s):un(e)&&~e.indexOf("random(")?ol(e):e},W0=ed+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",X0={};jn(W0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return X0[n]=1});var Zt=function(n){h0(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Fa(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=r.parent||Gt,E=(Tn(i)||p0(i)?Lr(i[0]):"length"in r)?[i]:Ai(i),x,S,w,R,b,U,O,v;if(o._targets=E.length?td(E):rl("GSAP target "+i+" not found. https://gsap.com",!pi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||ec(c)||ec(u)){r=o.vars;var C=r.easeReverse||r.yoyoEase;if(x=o.timeline=new Xn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:E}),x.kill(),x.parent=x._dp=mr(o),x._start=0,h||ec(c)||ec(u)){if(R=E.length,O=h&&L0(h),rr(h))for(b in h)~W0.indexOf(b)&&(v||(v={}),v[b]=h[b]);for(S=0;S<R;S++)w=Wc(r,X0),w.stagger=0,C&&(w.easeReverse=C),v&&Qo(w,v),U=E[S],w.duration=+za(c,mr(o),S,U,E),w.delay=(+za(u,mr(o),S,U,E)||0)-o._delay,!h&&R===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),x.to(U,w,O?O(S,U,E):0),x._ease=ft.none;x.duration()?c=u=0:o.timeline=0}else if(_){Fa(_i(x.vars.defaults,{ease:"none"})),x._ease=$s(_.ease||r.ease||"none");var F=0,ee,D,$;if(Tn(_))_.forEach(function(W){return x.to(E,W,">")}),x.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||Lw(b,_[b],w,_.easeEach);for(b in w)for(ee=w[b].sort(function(W,z){return W.t-z.t}),F=0,S=0;S<ee.length;S++)D=ee[S],$={ease:D.e,duration:(D.t-(S?ee[S-1].t:0))/100*c},$[b]=D.v,x.to(E,$,F),F+=$.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!$h&&(qr=mr(o),Gt.killTweensOf(E),qr=0),Zi(m,mr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ht(m._time)&&$n(f)&&aw(mr(o))&&m.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),p&&w0(mr(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Rt&&!u?l:r<Rt?0:r,h,d,_,g,p,m,E,x;if(!c)cw(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(h=Ht(f%g),f===l?(_=this._repeat,h=c):(p=Ht(f/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=ea(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ht(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(R0(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var w=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(h/c);if(this._from&&(this.ratio=E=1-E),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ih(this,r,s,a),ci(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ih(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ls(this,1),!s&&!(u&&!o)&&(f||o||m)&&(ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){al||oi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rd(this,c),u=this._ease(c/this._dur),Cw(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(_u(this,0),this.parent||b0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,qr&&qr.vars.overwrite!==!0)._first||Ea(this),this.parent&&a!==this.timeline.totalDuration()&&ta(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Ai(r):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&sw(o,l))return s==="all"&&(this._pt=0),Ea(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(g={},jn(s,function(E){return g[E]=1}),s=g),s=Pw(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&pu(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ea(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ba(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ba(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Gt.killTweensOf(r,s,a)},e}(ll);_i(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jn("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new Xn,t=sh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var sd=function(e,t,i){return e[t]=i},Y0=function(e,t,i){return e[t](i)},Dw=function(e,t,i,r){return e[t](r.fp,i)},Iw=function(e,t,i){return e.setAttribute(t,i)},od=function(e,t){return Xt(e[t])?Y0:jh(e[t])&&e.setAttribute?Iw:sd},q0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Uw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ad=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Nw=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},Ow=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?pu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Fw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},j0=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Kn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||q0,this.d=l||this,this.set=c||sd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Fw,this.m=i,this.mt=s,this.tween=r},n}();jn(ed+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Qh[n]=1});mi.TweenMax=mi.TweenLite=Zt;mi.TimelineLite=mi.TimelineMax=Xn;Gt=new Xn({sortChildren:!1,defaults:il,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pi.stringFilter=k0;var js=[],Sc={},Bw=[],Gm=0,zw=0,Mf=function(e){return(Sc[e]||Bw).map(function(t){return t()})},ch=function(){var e=Date.now(),t=[];e-Gm>2&&(Mf("matchMediaInit"),js.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Wi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Mf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Gm=e,Mf("matchMedia"))},K0=function(){function n(t,i){this.selector=i&&oh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Xt(i)&&(s=r,r=i,i=Xt);var a=this,o=function(){var c=zt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=oh(s)),zt=a,f=r.apply(a,arguments),Xt(f)&&a._r.push(f),zt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Xt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=zt;zt=null,i(this),zt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=js.length;a--;)js[a].id===this.id&&js.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),kw=function(){function n(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){rr(i)||(i={matches:i});var a=new K0(0,s||this.scope),o=a.conditions={},l,c,u;zt&&!a.selector&&(a.selector=zt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Wi.matchMedia(i[c]),l&&(js.indexOf(a)<0&&js.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return F0(r)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,i,r){un(e)&&(e=Ai(e)[0]);var s=Ys(e||{}).get,a=i?T0:E0;return i==="native"&&(i=""),e&&(t?a((ri[t]&&ri[t].get||s)(e,t,i,r)):function(o,l,c){return a((ri[o]&&ri[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Ai(e),e.length>1){var r=e.map(function(u){return Jn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=ri[t],o=Ys(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Io._pt=0,f.init(e,i?u+i:u,Io,0,[e]),f.render(1,f),Io._pt&&ad(1,Io)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Jn.to(e,_i((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$s(e.ease,il.ease)),Fm(il,e||{})},config:function(e){return Fm(pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ri[o]&&!mi[o]&&rl(t+" effect requires "+o+" plugin.")}),gf[t]=function(o,l,c){return i(Ai(o),_i(l||{},s),c)},a&&(Xn.prototype[t]=function(o,l,c){return this.add(gf[t](o,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=$s(t)},parseEase:function(e,t){return arguments.length?$s(e,t):ft},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xn(e),r,s;for(i.smoothChildTiming=$n(e.smoothChildTiming),Gt.remove(i),i._dp=0,i._time=i._tTime=Gt._time,r=Gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&Zi(i,r,r._start-r._delay),r=s;return Zi(Gt,i,0),i},context:function(e,t){return e?new K0(e,t):zt},matchMedia:function(e){return new kw(e)},matchMediaRefresh:function(){return js.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ch()},addEventListener:function(e,t){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:gw,wrapYoyo:vw,distribute:L0,random:I0,snap:D0,normalize:_w,getUnit:Mn,clamp:hw,splitColor:B0,toArray:Ai,selector:oh,mapRange:N0,pipe:pw,unitize:mw,interpolate:xw,shuffle:P0},install:v0,effects:gf,ticker:oi,updateRoot:Xn.updateRoot,plugins:ri,globalTimeline:Gt,core:{PropTween:Kn,globals:x0,Tween:Zt,Timeline:Xn,Animation:ll,getCache:Ys,_removeLinkedListItem:pu,reverting:function(){return pn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return $h=e}}};jn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yc[n]=Zt[n]});oi.add(Xn.updateRoot);Io=Yc.to({},{duration:0});var Hw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Gw=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Hw(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},yf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},jn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Gw(o,s)}}}},Jn=Yc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)pn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},yf("roundProps",ah),yf("modifiers"),yf("snap",D0))||Yc;Zt.version=Xn.version=Jn.version="3.15.0";g0=1;Kh()&&na();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vm,$r,Go,ld,ks,Wm,cd,Vw=function(){return typeof window<"u"},Dr={},Is=180/Math.PI,Vo=Math.PI/180,Eo=Math.atan2,Xm=1e8,ud=/([A-Z])/g,Ww=/(left|right|width|margin|padding|x)/i,Xw=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$w=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Z0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},J0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kw=function(e,t,i){return e.style[t]=i},Zw=function(e,t,i){return e.style.setProperty(t,i)},Jw=function(e,t,i){return e._gsap[t]=i},Qw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},eR=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},tR=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Vt="transform",Zn=Vt+"Origin",nR=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Dr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=gr(r,o)}):this.tfm[e]=a.x?a[e]:gr(r,e),e===Zn&&(this.tfm.zOrigin=a.zOrigin);else return Qi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Q0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iR=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ud,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cd(),(!s||!s.isStart)&&!i[Vt]&&(Q0(i),r.zOrigin&&i[Zn]&&(i[Zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ev=function(e,t){var i={target:e,props:[],revert:iR,save:nR};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},tv,fh=function(e,t){var i=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return i&&i.style?i:$r.createElement(e)},ui=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ud,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ia(t)||t,1)||""},Ym="O,Moz,ms,Ms,Webkit".split(","),ia=function(e,t,i){var r=t||ks,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ym[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ym[a]:"")+e},hh=function(){Vw()&&window.document&&(Vm=window,$r=Vm.document,Go=$r.documentElement,ks=fh("div")||{style:{}},fh("div"),Vt=ia(Vt),Zn=Vt+"Origin",ks.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tv=!!ia("perspective"),cd=Jn.core.reverting,ld=1)},qm=function(e){var t=e.ownerSVGElement,i=fh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Go.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Go.removeChild(i),s},$m=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},nv=function(e){var t,i;try{t=e.getBBox()}catch{t=qm(e),i=1}return t&&(t.width||t.height)||i||(t=qm(e)),t&&!t.width&&!t.x&&!t.y?{x:+$m(e,["x","cx","x1"])||0,y:+$m(e,["y","cy","y1"])||0,width:0,height:0}:t},iv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nv(e))},cs=function(e,t){if(t){var i=e.style,r;t in Dr&&t!==Zn&&(t=Vt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(ud,"-$1").toLowerCase())):i.removeAttribute(t)}},jr=function(e,t,i,r,s,a){var o=new Kn(e._pt,t,i,0,1,a?J0:Z0);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},jm={deg:1,rad:1,turn:1},rR={grid:1,flex:1},us=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ks.style,l=Ww.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,p,m;if(r===a||!s||jm[r]||jm[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),m=e.getCTM&&iv(e),(d||a==="%")&&(Dr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Yt(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===$r||!g.appendChild)&&(g=$r.body),p=g._gsap,p&&d&&p.width&&l&&p.time===oi.time&&!p.uncache)return Yt(s/p.width*f);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,_=e[u],E?e.style[t]=E:cs(e,t)}else(d||a==="%")&&!rR[ui(g,"display")]&&(o.position=ui(e,"position")),g===e&&(o.position="static"),g.appendChild(ks),_=ks[u],g.removeChild(ks),o.position="absolute";return l&&d&&(p=Ys(g),p.time=oi.time,p.width=g[u]),Yt(h?_*s/f:_&&s?f/_*s:0)},gr=function(e,t,i,r){var s;return ld||hh(),t in Qi&&t!=="transform"&&(t=Qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Dr[t]&&t!=="transform"?(s=ul(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$c(ui(e,Zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qc[t]&&qc[t](e,t,i)||ui(e,t)||M0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?us(e,t,s,i)+i:s},sR=function(e,t,i,r){if(!i||i==="none"){var s=ia(t,e,1),a=s&&ui(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=ui(e,"borderTopColor"))}var o=new Kn(this._pt,e.style,t,0,1,$0),l=0,c=0,u,f,h,d,_,g,p,m,E,x,S,w;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ui(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ui(e,t)||r,g?e.style[t]=g:cs(e,t)),u=[i,r],k0(u),i=u[0],r=u[1],h=i.match(Do)||[],w=r.match(Do)||[],w.length){for(;f=Do.exec(r);)p=f[0],E=r.substring(l,f.index),_?_=(_+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ho(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Do.lastIndex-x.length,x||(x=x||pi.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(d=us(e,t,g,x)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?J0:Z0;return _0.test(r)&&(o.e=0),this._pt=o,o},Km={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oR=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Km[i]||i,t[1]=Km[r]||r,t.join(" ")},aR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Dr[o]&&(l=1,o=o==="transformOrigin"?Zn:Vt),cs(i,o);l&&(cs(i,Vt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ul(i,1),a.uncache=1,Q0(r)))}},qc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Kn(e._pt,t,i,0,0,aR);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},cl=[1,0,0,1,0,0],rv={},sv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zm=function(e){var t=ui(e,Vt);return sv(t)?cl:t.substr(7).match(m0).map(Yt)},fd=function(e,t){var i=e._gsap||Ys(e),r=e.style,s=Zm(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cl:s):(s===cl&&!e.offsetParent&&e!==Go&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Go.appendChild(e)),s=Zm(e),l?r.display=l:cs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Go.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dh=function(e,t,i,r,s,a){var o=e._gsap,l=s||fd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],E=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,R,b,U,O;i?l!==cl&&(b=d*p-_*g)&&(U=S*(p/b)+w*(-g/b)+(g*E-p*m)/b,O=S*(-_/b)+w*(d/b)-(d*E-_*m)/b,S=U,w=O):(R=nv(e),S=R.x+(~x[0].indexOf("%")?S/100*R.width:S),w=R.y+(~(x[1]||x[0]).indexOf("%")?w/100*R.height:w)),r||r!==!1&&o.smooth?(m=S-c,E=w-u,o.xOffset=f+(m*d+E*g)-m,o.yOffset=h+(m*_+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=w,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Zn]="0px 0px",a&&(jr(a,o,"xOrigin",c,S),jr(a,o,"yOrigin",u,w),jr(a,o,"xOffset",f,o.xOffset),jr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},ul=function(e,t){var i=e._gsap||new G0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ui(e,Zn)||"0",u,f,h,d,_,g,p,m,E,x,S,w,R,b,U,O,v,C,F,ee,D,$,W,z,N,K,P,ae,de,Ne,j,le;return u=f=h=g=p=m=E=x=S=0,d=_=1,i.svg=!!(e.getCTM&&iv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),b=fd(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),c=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),dh(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,b)),w=i.xOrigin||0,R=i.yOrigin||0,b!==cl&&(C=b[0],F=b[1],ee=b[2],D=b[3],u=$=b[4],f=W=b[5],b.length===6?(d=Math.sqrt(C*C+F*F),_=Math.sqrt(D*D+ee*ee),g=C||F?Eo(F,C)*Is:0,E=ee||D?Eo(ee,D)*Is+g:0,E&&(_*=Math.abs(Math.cos(E*Vo))),i.svg&&(u-=w-(w*C+R*ee),f-=R-(w*F+R*D))):(le=b[6],Ne=b[7],P=b[8],ae=b[9],de=b[10],j=b[11],u=b[12],f=b[13],h=b[14],U=Eo(le,de),p=U*Is,U&&(O=Math.cos(-U),v=Math.sin(-U),z=$*O+P*v,N=W*O+ae*v,K=le*O+de*v,P=$*-v+P*O,ae=W*-v+ae*O,de=le*-v+de*O,j=Ne*-v+j*O,$=z,W=N,le=K),U=Eo(-ee,de),m=U*Is,U&&(O=Math.cos(-U),v=Math.sin(-U),z=C*O-P*v,N=F*O-ae*v,K=ee*O-de*v,j=D*v+j*O,C=z,F=N,ee=K),U=Eo(F,C),g=U*Is,U&&(O=Math.cos(U),v=Math.sin(U),z=C*O+F*v,N=$*O+W*v,F=F*O-C*v,W=W*O-$*v,C=z,$=N),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Yt(Math.sqrt(C*C+F*F+ee*ee)),_=Yt(Math.sqrt(W*W+le*le)),U=Eo($,W),E=Math.abs(U)>2e-4?U*Is:0,S=j?1/(j<0?-j:j):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!sv(ui(e,Vt)),z&&e.setAttribute("transform",z))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,E+=E<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Yt(d),i.scaleY=Yt(_),i.rotation=Yt(g)+o,i.rotationX=Yt(p)+o,i.rotationY=Yt(m)+o,i.skewX=E+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Zn]=$c(c)),i.xOffset=i.yOffset=0,i.force3D=pi.force3D,i.renderTransform=i.svg?cR:tv?ov:lR,i.uncache=0,i},$c=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ef=function(e,t,i){var r=Mn(t);return Yt(parseFloat(t)+parseFloat(us(e,"x",i+"px",r)))+r},lR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ov(e,t)},Rs="0deg",va="0px",Cs=") ",ov=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,E=i.target,x=i.zOrigin,S="",w=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==Rs||u!==Rs)){var R=parseFloat(u)*Vo,b=Math.sin(R),U=Math.cos(R),O;R=parseFloat(f)*Vo,O=Math.cos(R),a=Ef(E,a,b*O*-x),o=Ef(E,o,-Math.sin(R)*-x),l=Ef(E,l,U*O*-x+x)}p!==va&&(S+="perspective("+p+Cs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||a!==va||o!==va||l!==va)&&(S+=l!==va||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Cs),c!==Rs&&(S+="rotate("+c+Cs),u!==Rs&&(S+="rotateY("+u+Cs),f!==Rs&&(S+="rotateX("+f+Cs),(h!==Rs||d!==Rs)&&(S+="skew("+h+", "+d+Cs),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Cs),E.style[Vt]=S||"translate(0, 0)"},cR=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,E=i.forceCSS,x=parseFloat(a),S=parseFloat(o),w,R,b,U,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vo,c*=Vo,w=Math.cos(l)*f,R=Math.sin(l)*f,b=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=Vo,O=Math.tan(c-u),O=Math.sqrt(1+O*O),b*=O,U*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),w*=O,R*=O)),w=Yt(w),R=Yt(R),b=Yt(b),U=Yt(U)):(w=f,U=h,R=b=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=us(d,"x",a,"px"),S=us(d,"y",o,"px")),(_||g||p||m)&&(x=Yt(x+_-(_*w+g*b)+p),S=Yt(S+g-(_*R+g*U)+m)),(r||s)&&(O=d.getBBox(),x=Yt(x+r/100*O.width),S=Yt(S+s/100*O.height)),O="matrix("+w+","+R+","+b+","+U+","+x+","+S+")",d.setAttribute("transform",O),E&&(d.style[Vt]=O)},uR=function(e,t,i,r,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Is:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Xm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Xm)%a-~~(c/a)*a)),e._pt=h=new Kn(e._pt,t,i,r,c,Yw),h.e=u,h.u="deg",e._props.push(i),h},Jm=function(e,t){for(var i in t)e[i]=t[i];return e},fR=function(e,t,i){var r=Jm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,d,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Vt]=t,o=ul(i,1),cs(i,Vt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Vt],a[Vt]=t,o=ul(i,1),a[Vt]=c);for(l in Dr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Mn(c),_=Mn(u),f=d!==_?us(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Kn(e._pt,o,l,f,h-f,uh),e._pt.u=_||0,e._props.push(l));Jm(o,r)};jn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});qc[e>1?"border"+n:n]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return gr(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var av={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,_,g,p,m,E,x,S,w,R,b,U,O;ld||hh(),this.styles=this.styles||ev(e),U=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ri[g]&&V0(g,t,i,r,e,s)))){if(d=typeof u,_=qc[g],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ol(u)),_)_(this,e,g,u,i)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ns.lastIndex=0,ns.test(c)||(p=Mn(c),m=Mn(u),m?p!==m&&(c=us(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),U.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],un(c)&&~c.indexOf("random(")&&(c=ol(c)),Mn(c+"")||c==="auto"||(c+=pi.units[g]||Mn(gr(e,g))||""),(c+"").charAt(1)==="="&&(c=gr(e,g))):c=gr(e,g),h=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),g in Qi&&(g==="autoAlpha"&&(h===1&&gr(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,o.visibility),jr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Dr,x){if(this.styles.save(g),O=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ui(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=ui(e,"perspective"),v?e.style.perspective=v:cs(e,"perspective")}f=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||ul(e,t.parseTransform),R=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new Kn(this._pt,o,Vt,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new Kn(this._pt,w,"scaleY",w.scaleY,(E?Ho(w.scaleY,E+f):f)-w.scaleY||0,uh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){U.push(Zn,0,o[Zn]),u=oR(u),w.svg?dh(e,u,0,R,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&jr(this,w,"zOrigin",w.zOrigin,m),jr(this,o,g,$c(c),$c(u)));continue}else if(g==="svgOrigin"){dh(e,u,1,R,0,this);continue}else if(g in rv){uR(this,w,g,h,E?Ho(h,E+u):u);continue}else if(g==="smoothOrigin"){jr(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){fR(this,u,e);continue}}else g in o||(g=ia(g)||g);if(x||(f||f===0)&&(h||h===0)&&!Xw.test(u)&&g in o)p=(c+"").substr((h+"").length),f||(f=0),m=Mn(u)||(g in pi.units?pi.units[g]:p),p!==m&&(h=us(e,g,c,m)),this._pt=new Kn(this._pt,x?w:o,g,h,(E?Ho(h,E+f):f)-h,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?jw:uh),this._pt.u=m||0,x&&O!==u?(this._pt.b=c,this._pt.e=O,this._pt.r=$w):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=qw);else if(g in o)sR.call(this,e,g,c,E?E+u:u);else if(g in e)this.add(e,g,c||e[g],E?E+u:u,r,s);else if(g!=="parseTransform"){Jh(g,u);continue}x||(g in o?U.push(g,0,o[g]):typeof e[g]=="function"?U.push(g,2,e[g]()):U.push(g,1,c||e[g])),a.push(g)}}b&&j0(this)},render:function(e,t){if(t.tween._time||!cd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:gr,aliases:Qi,getSetter:function(e,t,i){var r=Qi[t];return r&&r.indexOf(",")<0&&(t=r),t in Dr&&t!==Zn&&(e._gsap.x||gr(e,"x"))?i&&Wm===i?t==="scale"?Qw:Jw:(Wm=i||{})&&(t==="scale"?eR:tR):e.style&&!jh(e.style[t])?Kw:~t.indexOf("-")?Zw:od(e,t)},core:{_removeProperty:cs,_getMatrix:fd}};Jn.utils.checkPrefix=ia;Jn.core.getStyleSaver=ev;(function(n,e,t,i){var r=jn(n+","+e+","+t,function(s){Dr[s]=1});jn(e,function(s){pi.units[s]="deg",rv[s]=1}),Qi[r[13]]=n+","+e,jn(i,function(s){var a=s.split(":");Qi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){pi.units[n]="px"});Jn.registerPlugin(av);var fi=Jn.registerPlugin(av)||Jn;fi.core.Tween;function hR(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function dR(n,e,t){return e&&hR(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dn,Mc,ai,Kr,Zr,Wo,lv,Us,Xo,cv,Tr,Ii,uv,fv=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},hv=1,Uo=[],ct=[],nr=[],ka=Date.now,ph=function(e,t){return t},pR=function(){var e=Xo.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ct),r.push.apply(r,nr),ct=i,nr=r,ph=function(a,o){return t[a](o)}},is=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Ha=function(e){return!!~cv.indexOf(e)},Rn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},An=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},tc="scrollLeft",nc="scrollTop",mh=function(){return Tr&&Tr.isPressed||ct.cache++},jc=function(e,t){var i=function r(s){if(s||s===0){hv&&(ai.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=r.v=Math.round(s)||(Tr&&Tr.iOS?1:0),e(s),r.cacheID=ct.cache,a&&ph("ss",s)}else(t||ct.cache!==r.cacheID||ph("ref"))&&(r.cacheID=ct.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Bn={s:tc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jc(function(n){return arguments.length?ai.scrollTo(n,nn.sc()):ai.pageXOffset||Kr[tc]||Zr[tc]||Wo[tc]||0})},nn={s:nc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:jc(function(n){return arguments.length?ai.scrollTo(Bn.sc(),n):ai.pageYOffset||Kr[nc]||Zr[nc]||Wo[nc]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mR=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},fs=function(e,t){var i=t.s,r=t.sc;Ha(e)&&(e=Kr.scrollingElement||Zr);var s=ct.indexOf(e),a=r===nn.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+a]||Rn(e,"scroll",mh);var o=ct[s+a],l=o||(ct[s+a]=jc(is(e,i),!0)||(Ha(e)?r:jc(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},_h=function(e,t,i){var r=e,s=e,a=ka(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=ka();g||p-a>l?(s=r,r=_,o=a,a=p):i?r+=_:r=s+(_-s)/(p-o)*(a-o)},f=function(){s=r=i?0:r,o=a=0},h=function(_){var g=o,p=s,m=ka();return(_||_===0)&&_!==r&&u(_),a===o||m-o>c?0:(r+(i?p:-p))/((i?m:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},xa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},dv=function(){Xo=dn.core.globals().ScrollTrigger,Xo&&Xo.core&&pR()},pv=function(e){return dn=e||fv(),!Mc&&dn&&typeof document<"u"&&document.body&&(ai=window,Kr=document,Zr=Kr.documentElement,Wo=Kr.body,cv=[ai,Kr,Zr,Wo],dn.utils.clamp,uv=dn.core.context||function(){},Us="onpointerenter"in Wo?"pointer":"mouse",lv=qt.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=qt.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return hv=0},500),Mc=1),Xo||dv(),Mc};Bn.op=nn;ct.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Mc||pv(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Xo||dv();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,_=i.wheelSpeed,g=i.event,p=i.onDragStart,m=i.onDragEnd,E=i.onDrag,x=i.onPress,S=i.onRelease,w=i.onRight,R=i.onLeft,b=i.onUp,U=i.onDown,O=i.onChangeX,v=i.onChangeY,C=i.onChange,F=i.onToggleX,ee=i.onToggleY,D=i.onHover,$=i.onHoverEnd,W=i.onMove,z=i.ignoreCheck,N=i.isNormalizer,K=i.onGestureStart,P=i.onGestureEnd,ae=i.onWheel,de=i.onEnable,Ne=i.onDisable,j=i.onClick,le=i.scrollSpeed,pe=i.capture,we=i.allowClicks,be=i.lockAxis,Me=i.onLockAxis;this.target=o=Gn(o)||Zr,this.vars=i,d&&(d=dn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,le=le||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ai.getComputedStyle(Wo).lineHeight)||22);var Xe,Ce,M,I,k,te,Y,L=this,se=0,oe=0,ue=i.passive||!u&&i.passive!==!1,T=fs(o,Bn),y=fs(o,nn),B=T(),X=y(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ii[0]==="pointerdown",re=Ha(o),me=o.ownerDocument||Kr,ve=[0,0,0],fe=[0,0,0],he=0,ze=function(){return he=ka()},ce=function(Ie,Be){return(L.event=Ie)&&d&&mR(Ie.target,d)||Be&&Z&&Ie.pointerType!=="touch"||z&&z(Ie,Be)},mt=function(){L._vx.reset(),L._vy.reset(),Ce.pause(),f&&f(L)},Ye=function(){var Ie=L.deltaX=Qm(ve),Be=L.deltaY=Qm(fe),ge=Math.abs(Ie)>=r,Ge=Math.abs(Be)>=r;C&&(ge||Ge)&&C(L,Ie,Be,ve,fe),ge&&(w&&L.deltaX>0&&w(L),R&&L.deltaX<0&&R(L),O&&O(L),F&&L.deltaX<0!=se<0&&F(L),se=L.deltaX,ve[0]=ve[1]=ve[2]=0),Ge&&(U&&L.deltaY>0&&U(L),b&&L.deltaY<0&&b(L),v&&v(L),ee&&L.deltaY<0!=oe<0&&ee(L),oe=L.deltaY,fe[0]=fe[1]=fe[2]=0),(I||M)&&(W&&W(L),M&&(p&&M===1&&p(L),E&&E(L),M=0),I=!1),te&&!(te=!1)&&Me&&Me(L),k&&(ae(L),k=!1),Xe=0},Re=function(Ie,Be,ge){ve[ge]+=Ie,fe[ge]+=Be,L._vx.update(Ie),L._vy.update(Be),c?Xe||(Xe=requestAnimationFrame(Ye)):Ye()},Ae=function(Ie,Be){be&&!Y&&(L.axis=Y=Math.abs(Ie)>Math.abs(Be)?"x":"y",te=!0),Y!=="y"&&(ve[2]+=Ie,L._vx.update(Ie,!0)),Y!=="x"&&(fe[2]+=Be,L._vy.update(Be,!0)),c?Xe||(Xe=requestAnimationFrame(Ye)):Ye()},Pe=function(Ie){if(!ce(Ie,1)){Ie=xa(Ie,u);var Be=Ie.clientX,ge=Ie.clientY,Ge=Be-L.x,He=ge-L.y,Ze=L.isDragging;L.x=Be,L.y=ge,(Ze||(Ge||He)&&(Math.abs(L.startX-Be)>=s||Math.abs(L.startY-ge)>=s))&&(M||(M=Ze?2:1),Ze||(L.isDragging=!0),Ae(Ge,He))}},Ke=L.onPress=function(Oe){ce(Oe,1)||Oe&&Oe.button||(L.axis=Y=null,Ce.pause(),L.isPressed=!0,Oe=xa(Oe),se=oe=0,L.startX=L.x=Oe.clientX,L.startY=L.y=Oe.clientY,L._vx.reset(),L._vy.reset(),Rn(N?o:me,Ii[1],Pe,ue,!0),L.deltaX=L.deltaY=0,x&&x(L))},ye=L.onRelease=function(Oe){if(!ce(Oe,1)){An(N?o:me,Ii[1],Pe,!0);var Ie=!isNaN(L.y-L.startY),Be=L.isDragging,ge=Be&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ge=xa(Oe);!ge&&Ie&&(L._vx.reset(),L._vy.reset(),u&&we&&dn.delayedCall(.08,function(){if(ka()-he>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(me.createEvent){var He=me.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,ai,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(He)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,f&&Be&&!N&&Ce.restart(!0),M&&Ye(),m&&Be&&m(L),S&&S(L,ge)}},ht=function(Ie){return Ie.touches&&Ie.touches.length>1&&(L.isGesturing=!0)&&K(Ie,L.isDragging)},G=function(){return(L.isGesturing=!1)||P(L)},xe=function(Ie){if(!ce(Ie)){var Be=T(),ge=y();Re((Be-B)*le,(ge-X)*le,1),B=Be,X=ge,f&&Ce.restart(!0)}},Q=function(Ie){if(!ce(Ie)){Ie=xa(Ie,u),ae&&(k=!0);var Be=(Ie.deltaMode===1?l:Ie.deltaMode===2?ai.innerHeight:1)*_;Re(Ie.deltaX*Be,Ie.deltaY*Be,0),f&&!N&&Ce.restart(!0)}},_e=function(Ie){if(!ce(Ie)){var Be=Ie.clientX,ge=Ie.clientY,Ge=Be-L.x,He=ge-L.y;L.x=Be,L.y=ge,I=!0,f&&Ce.restart(!0),(Ge||He)&&Ae(Ge,He)}},Te=function(Ie){L.event=Ie,D(L)},je=function(Ie){L.event=Ie,$(L)},dt=function(Ie){return ce(Ie)||xa(Ie,u)&&j(L)};Ce=L._dc=dn.delayedCall(h||.25,mt).pause(),L.deltaX=L.deltaY=0,L._vx=_h(0,50,!0),L._vy=_h(0,50,!0),L.scrollX=T,L.scrollY=y,L.isDragging=L.isGesturing=L.isPressed=!1,uv(this),L.enable=function(Oe){return L.isEnabled||(Rn(re?me:o,"scroll",mh),a.indexOf("scroll")>=0&&Rn(re?me:o,"scroll",xe,ue,pe),a.indexOf("wheel")>=0&&Rn(o,"wheel",Q,ue,pe),(a.indexOf("touch")>=0&&lv||a.indexOf("pointer")>=0)&&(Rn(o,Ii[0],Ke,ue,pe),Rn(me,Ii[2],ye),Rn(me,Ii[3],ye),we&&Rn(o,"click",ze,!0,!0),j&&Rn(o,"click",dt),K&&Rn(me,"gesturestart",ht),P&&Rn(me,"gestureend",G),D&&Rn(o,Us+"enter",Te),$&&Rn(o,Us+"leave",je),W&&Rn(o,Us+"move",_e)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=I=M=!1,L._vx.reset(),L._vy.reset(),B=T(),X=y(),Oe&&Oe.type&&Ke(Oe),de&&de(L)),L},L.disable=function(){L.isEnabled&&(Uo.filter(function(Oe){return Oe!==L&&Ha(Oe.target)}).length||An(re?me:o,"scroll",mh),L.isPressed&&(L._vx.reset(),L._vy.reset(),An(N?o:me,Ii[1],Pe,!0)),An(re?me:o,"scroll",xe,pe),An(o,"wheel",Q,pe),An(o,Ii[0],Ke,pe),An(me,Ii[2],ye),An(me,Ii[3],ye),An(o,"click",ze,!0),An(o,"click",dt),An(me,"gesturestart",ht),An(me,"gestureend",G),An(o,Us+"enter",Te),An(o,Us+"leave",je),An(o,Us+"move",_e),L.isEnabled=L.isPressed=L.isDragging=!1,Ne&&Ne(L))},L.kill=L.revert=function(){L.disable();var Oe=Uo.indexOf(L);Oe>=0&&Uo.splice(Oe,1),Tr===L&&(Tr=0)},Uo.push(L),N&&Ha(o)&&(Tr=L),L.enable(g)},dR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.15.0";qt.create=function(n){return new qt(n)};qt.register=pv;qt.getAll=function(){return Uo.slice()};qt.getById=function(n){return Uo.filter(function(e){return e.vars.id===n})[0]};fv()&&dn.registerPlugin(qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,Ro,lt,Et,si,vt,hd,Kc,fl,Ga,ba,ic,vn,gu,gh,Ln,e_,t_,Co,mv,Tf,_v,Pn,vh,gv,vv,Gr,xh,dd,Yo,pd,Va,Sh,bf,rc=1,xn=Date.now,Af=xn(),Ri=0,Aa=0,n_=function(e,t,i){var r=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},i_=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_R=function n(){return Aa&&requestAnimationFrame(n)},r_=function(){return gu=1},s_=function(){return gu=0},Xi=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},xv=function(){return typeof window<"u"},Sv=function(){return Le||xv()&&(Le=window.gsap)&&Le.registerPlugin&&Le},eo=function(e){return!!~hd.indexOf(e)},Mv=function(e){return(e==="Height"?pd:lt["inner"+e])||si["client"+e]||vt["client"+e]},yv=function(e){return is(e,"getBoundingClientRect")||(eo(e)?function(){return Ac.width=lt.innerWidth,Ac.height=pd,Ac}:function(){return Mr(e)})},gR=function(e,t,i){var r=i.d,s=i.d2,a=i.a;return(a=is(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Mv(s):e["client"+s])||0}},vR=function(e,t){return!t||~nr.indexOf(e)?yv(e):function(){return Ac}},er=function(e,t){var i=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=is(e,i))?a()-yv(e)()[s]:eo(e)?(si[i]||vt[i])-Mv(r):e[i]-e["offset"+r])},sc=function(e,t){for(var i=0;i<Co.length;i+=3)(!t||~t.indexOf(Co[i+1]))&&e(Co[i],Co[i+1],Co[i+2])},ii=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Ra=function(e){return typeof e=="number"},Ns=function(e){return typeof e=="object"},Sa=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},To=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},bo=Math.abs,Ev="left",Tv="top",md="right",_d="bottom",Ks="width",Zs="height",Wa="Right",Xa="Left",Ya="Top",qa="Bottom",Kt="padding",Ei="margin",ra="Width",gd="Height",en="px",Ti=function(e){return lt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xR=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},o_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Mr=function(e,t){var i=t&&Ti(e)[gh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Zc=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},bv=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},SR=function(e){return function(t){return Le.utils.snap(bv(e),t)}},vd=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},MR=function(e){return function(t,i){return vd(bv(e))(t,i.direction)}},oc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},ln=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ac=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},a_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lc={toggleActions:"play",anticipatePin:0},Jc={top:0,left:0,center:.5,bottom:1,right:1},yc=function(e,t){if(ii(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Jc?Jc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},cc=function(e,t,i,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Et.createElement("div"),g=eo(i)||is(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?vt:i.tagName==="IFRAME"?i.contentDocument.body:i,E=e.indexOf("start")!==-1,x=E?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(r===nn?md:_d)+":"+(a+parseFloat(h))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=E,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],Ec(_,0,r,E),_},Ec=function(e,t,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+ra]=1,s["border"+o+ra]=0,s[i.p]=t+"px",Le.set(e,s)},ot=[],Mh={},hl,l_=function(){return xn()-Ri>34&&(hl||(hl=requestAnimationFrame(br)))},Ao=function(){(!Pn||!Pn.isPressed||Pn.startX>vt.clientWidth)&&(ct.cache++,Pn?hl||(hl=requestAnimationFrame(br)):br(),Ri||no("scrollStart"),Ri=xn())},wf=function(){vv=lt.innerWidth,gv=lt.innerHeight},Ca=function(e){ct.cache++,(e===!0||!vn&&!_v&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!vh||vv!==lt.innerWidth||Math.abs(lt.innerHeight-gv)>lt.innerHeight*.25))&&Kc.restart(!0)},to={},yR=[],Av=function n(){return ln(nt,"scrollEnd",n)||Hs(!0)},no=function(e){return to[e]&&to[e].map(function(t){return t()})||yR},ni=[],wv=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},Rv=function(){return ct.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},xd=function(e,t){var i;for(Ln=0;Ln<ot.length;Ln++)i=ot[Ln],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Va=!0,t&&wv(t),t||no("revert")},Cv=function(e,t){ct.cache++,(t||!Dn)&&ct.forEach(function(i){return yn(i)&&i.cacheID++&&(i.rec=0)}),ii(e)&&(lt.history.scrollRestoration=dd=e)},Dn,Js=0,c_,ER=function(){if(c_!==Js){var e=c_=Js;requestAnimationFrame(function(){return e===Js&&Hs(!0)})}},Pv=function(){vt.appendChild(Yo),pd=!Pn&&Yo.offsetHeight||lt.innerHeight,vt.removeChild(Yo)},u_=function(e){return fl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hs=function(e,t){if(si=Et.documentElement,vt=Et.body,hd=[lt,Et,si,vt],Ri&&!e&&!Va){cn(nt,"scrollEnd",Av);return}Pv(),Dn=nt.isRefreshing=!0,Va||Rv();var i=no("refreshInit");mv&&nt.sort(),t||xd(),ct.forEach(function(r){yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ot.slice(0).forEach(function(r){return r.refresh()}),Va=!1,ot.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Sh=1,u_(!0),ot.forEach(function(r){var s=er(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),u_(!1),Sh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ct.forEach(function(r){yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Cv(dd,1),Kc.pause(),Js++,Dn=2,br(2),ot.forEach(function(r){return yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Dn=nt.isRefreshing=!1,no("refresh")},yh=0,Tc=1,$a,br=function(e){if(e===2||!Dn&&!Va){nt.isUpdating=!0,$a&&$a.update(0);var t=ot.length,i=xn(),r=i-Af>=50,s=t&&ot[0].scroll();if(Tc=yh>s?-1:1,Dn||(yh=s),r&&(Ri&&!gu&&i-Ri>200&&(Ri=0,no("scrollEnd")),ba=Af,Af=i),Tc<0){for(Ln=t;Ln-- >0;)ot[Ln]&&ot[Ln].update(0,r);Tc=1}else for(Ln=0;Ln<t;Ln++)ot[Ln]&&ot[Ln].update(0,r);nt.isUpdating=!1}hl=0},Eh=[Ev,Tv,_d,md,Ei+qa,Ei+Wa,Ei+Ya,Ei+Xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bc=Eh.concat([Ks,Zs,"boxSizing","max"+ra,"max"+gd,"position",Ei,Kt,Kt+Ya,Kt+Wa,Kt+qa,Kt+Xa]),TR=function(e,t,i){qo(i);var r=e._gsap;if(r.spacerIsNative)qo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Eh.length,a=t.style,o=e.style,l;s--;)l=Eh[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[_d]=o[md]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ks]=Zc(e,Bn)+en,a[Zs]=Zc(e,nn)+en,a[Kt]=o[Ei]=o[Tv]=o[Ev]="0",qo(r),o[Ks]=o["max"+ra]=i[Ks],o[Zs]=o["max"+gd]=i[Zs],o[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bR=/([A-Z])/g,qo=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(bR,"-$1").toLowerCase())}},uc=function(e){for(var t=bc.length,i=e.style,r=[],s=0;s<t;s++)r.push(bc[s],i[bc[s]]);return r.t=e,r},AR=function(e,t,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Ac={left:0,top:0},f_=function(e,t,i,r,s,a,o,l,c,u,f,h,d,_){yn(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?yc("0"+e.substr(3),i):0));var g=d?d.time():0,p,m,E;if(d&&d.seek(0),isNaN(e)||(e=+e),Ra(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Ec(o,i,r,!0);else{yn(t)&&(t=t(l));var x=(e||"0").split(" "),S,w,R,b;E=Gn(t,l)||vt,S=Mr(E)||{},(!S||!S.left&&!S.top)&&Ti(E).display==="none"&&(b=E.style.display,E.style.display="block",S=Mr(E),b?E.style.display=b:E.style.removeProperty("display")),w=yc(x[0],S[r.d]),R=yc(x[1]||"0",i),e=S[r.p]-c[r.p]-u+w+s-R,o&&Ec(o,R,r,i-R<20||o._isStart&&R>20),i-=i-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var U=e+i,O=a._isStart;p="scroll"+r.d2,Ec(a,U,r,O&&U>20||!O&&(f?Math.max(vt[p],si[p]):a.parentNode[p])<=U+1),f&&(c=Mr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+en))}return d&&E&&(p=Mr(E),d.seek(h),m=Mr(E),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},wR=/(webkit|moz|length|cssText|inset)/i,h_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=Ti(e);for(a in o)!+a&&!wR.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},Lv=function(e,t,i){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},fc=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},d_=function(e,t){var i=fs(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||i();var g=Lv(i,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,a.tween&&br()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Le.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",i.wheelHandler),nt.isTouch&&cn(e,"touchmove",i.wheelHandler),s},nt=function(){function n(t,i){Ro||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Aa){this.update=this.refresh=this.kill=Xi;return}i=o_(ii(i)||Ra(i)||i.nodeType?{trigger:i}:i,lc);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,x=s.once,S=s.snap,w=s.pinReparent,R=s.pinSpacer,b=s.containerAnimation,U=s.fastScrollEnd,O=s.preventOverlaps,v=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Bn:nn,C=!f&&f!==0,F=Gn(i.scroller||lt),ee=Le.core.getCache(F),D=eo(F),$=("pinType"in i?i.pinType:is(F,"pinType")||D&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=C&&i.toggleActions.split(" "),N="markers"in i?i.markers:lc.markers,K=D?0:parseFloat(Ti(F)["border"+v.p2+ra])||0,P=this,ae=i.onRefreshInit&&function(){return i.onRefreshInit(P)},de=gR(F,D,v),Ne=vR(F,D),j=0,le=0,pe=0,we=fs(F,v),be,Me,Xe,Ce,M,I,k,te,Y,L,se,oe,ue,T,y,B,X,Z,re,me,ve,fe,he,ze,ce,mt,Ye,Re,Ae,Pe,Ke,ye,ht,G,xe,Q,_e,Te,je;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=F,P.scroll=b?b.time.bind(b):we,Ce=we(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(mv=1,i.refreshPriority===-9999&&($a=P)),ee.tweenScroll=ee.tweenScroll||{top:d_(F,nn),left:d_(F,Bn)},P.tweenTo=be=ee.tweenScroll[v.p],P.scrubDuration=function(ge){ht=Ra(ge)&&ge,ht?ye?ye.duration(ge):ye=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return m&&m(P)}}):(ye&&ye.progress(1).kill(),ye=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),Pe=0,l||(l=r.vars.id)),S&&((!Ns(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in vt.style&&Le.set(D?[vt,si]:F,{scrollBehavior:"auto"}),ct.forEach(function(ge){return yn(ge)&&ge.target===(D?Et.scrollingElement||si:F)&&(ge.smooth=!1)}),Xe=yn(S.snapTo)?S.snapTo:S.snapTo==="labels"?SR(r):S.snapTo==="labelsDirectional"?MR(r):S.directional!==!1?function(ge,Ge){return vd(S.snapTo)(ge,xn()-le<500?0:Ge.direction)}:Le.utils.snap(S.snapTo),G=S.duration||{min:.1,max:2},G=Ns(G)?Ga(G.min,G.max):Ga(G,G),xe=Le.delayedCall(S.delay||ht/2||.1,function(){var ge=we(),Ge=xn()-le<500,He=be.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!He&&!gu&&j!==ge){var Ze=(ge-I)/T,kt=r&&!C?r.totalProgress():Ze,at=Ge?0:(kt-Ke)/(xn()-ba)*1e3||0,Ct=Le.utils.clamp(-Ze,1-Ze,bo(at/2)*at/.185),Jt=Ze+(S.inertia===!1?0:Ct),It,Pt,Mt=S,Qn=Mt.onStart,A=Mt.onInterrupt,V=Mt.onComplete;if(It=Xe(Jt,P),Ra(It)||(It=Jt),Pt=Math.max(0,Math.round(I+It*T)),ge<=k&&ge>=I&&Pt!==ge){if(He&&!He._initted&&He.data<=bo(Pt-ge))return;S.inertia===!1&&(Ct=It-Ze),be(Pt,{duration:G(bo(Math.max(bo(Jt-kt),bo(It-kt))*.185/at/.05||0)),ease:S.ease||"power3",data:bo(Pt-ge),onInterrupt:function(){return xe.restart(!0)&&A&&To(P,A)},onComplete:function(){P.update(),j=we(),r&&!C&&(ye?ye.resetTo("totalProgress",It,r._tTime/r._tDur):r.progress(It)),Pe=Ke=r&&!C?r.totalProgress():P.progress,E&&E(P),V&&To(P,V)}},ge,Ct*T,Pt-ge-Ct*T),Qn&&To(P,Qn,be.tween)}}else P.isActive&&j!==ge&&xe.restart(!0)}).pause()),l&&(Mh[l]=P),h=P.trigger=Gn(h||d!==!0&&d),je=h&&h._gsap&&h._gsap.stRevert,je&&(je=je(P)),d=d===!0?h:Gn(d),ii(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Ei||(_=!_&&d.parentNode&&d.parentNode.style&&Ti(d.parentNode).display==="flex"?!1:Kt),P.pin=d,Me=Le.core.getCache(d),Me.spacer?y=Me.pinState:(R&&(R=Gn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Me.spacerIsNative=!!R,R&&(Me.spacerState=uc(R))),Me.spacer=Z=R||Et.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Me.pinState=y=uc(d)),i.force3D!==!1&&Le.set(d,{force3D:!0}),P.spacer=Z=Me.spacer,Ae=Ti(d),ze=Ae[_+v.os2],me=Le.getProperty(d),ve=Le.quickSetter(d,v.a,en),Rf(d,Z,Ae),X=uc(d)),N){oe=Ns(N)?o_(N,a_):a_,L=cc("scroller-start",l,F,v,oe,0),se=cc("scroller-end",l,F,v,oe,0,L),re=L["offset"+v.op.d2];var dt=Gn(is(F,"content")||F);te=this.markerStart=cc("start",l,dt,v,oe,re,0,b),Y=this.markerEnd=cc("end",l,dt,v,oe,re,0,b),b&&(Te=Le.quickSetter([te,Y],v.a,en)),!$&&!(nr.length&&is(F,"fixedMarkers")===!0)&&(xR(D?vt:F),Le.set([L,se],{force3D:!0}),mt=Le.quickSetter(L,v.a,en),Re=Le.quickSetter(se,v.a,en))}if(b){var Oe=b.vars.onUpdate,Ie=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),Oe&&Oe.apply(b,Ie||[])})}if(P.previous=function(){return ot[ot.indexOf(P)-1]},P.next=function(){return ot[ot.indexOf(P)+1]},P.revert=function(ge,Ge){if(!Ge)return P.kill(!0);var He=ge!==!1||!P.enabled,Ze=vn;He!==P.isReverted&&(He&&(Q=Math.max(we(),P.scroll.rec||0),pe=P.progress,_e=r&&r.progress()),te&&[te,Y,L,se].forEach(function(kt){return kt.style.display=He?"none":"block"}),He&&(vn=P,P.update(He)),d&&(!w||!P.isActive)&&(He?TR(d,Z,y):Rf(d,Z,Ti(d),ce)),He||P.update(He),vn=Ze,P.isReverted=He)},P.refresh=function(ge,Ge,He,Ze){if(!((vn||!P.enabled)&&!Ge)){if(d&&ge&&Ri){cn(n,"scrollEnd",Av);return}!Dn&&ae&&ae(P),vn=P,be.tween&&!He&&(be.tween.kill(),be.tween=0),ye&&ye.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var kt=de(),at=Ne(),Ct=b?b.duration():er(F,v),Jt=T<=.01||!T,It=0,Pt=Ze||0,Mt=Ns(He)?He.end:i.end,Qn=i.endTrigger||h,A=Ns(He)?He.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),V=P.pinnedContainer=i.pinnedContainer&&Gn(i.pinnedContainer,P),ne=h&&Math.max(0,ot.indexOf(P))||0,J=ne,q,Se,De,Ve,Ue,Fe,We,Je,Nt,Qt,yt,bn,bt;for(N&&Ns(He)&&(bn=Le.getProperty(L,v.p),bt=Le.getProperty(se,v.p));J-- >0;)Fe=ot[J],Fe.end||Fe.refresh(0,1)||(vn=P),We=Fe.pin,We&&(We===h||We===d||We===V)&&!Fe.isReverted&&(Qt||(Qt=[]),Qt.unshift(Fe),Fe.revert(!0,!0)),Fe!==ot[J]&&(ne--,J--);for(yn(A)&&(A=A(P)),A=n_(A,"start",P),I=f_(A,h,kt,v,we(),te,L,P,at,K,$,Ct,b,P._startClamp&&"_startClamp")||(d?-.001:0),yn(Mt)&&(Mt=Mt(P)),ii(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(ii(A)?A.split(" ")[0]:"")+Mt:(It=yc(Mt.substr(2),kt),Mt=ii(A)?A:(b?Le.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,I):I)+It,Qn=h)),Mt=n_(Mt,"end",P),k=Math.max(I,f_(Mt||(Qn?"100% 0":Ct),Qn,kt,v,we()+It,Y,se,P,at,K,$,Ct,b,P._endClamp&&"_endClamp"))||-.001,It=0,J=ne;J--;)Fe=ot[J]||{},We=Fe.pin,We&&Fe.start-Fe._pinPush<=I&&!b&&Fe.end>0&&(q=Fe.end-(P._startClamp?Math.max(0,Fe.start):Fe.start),(We===h&&Fe.start-Fe._pinPush<I||We===V)&&isNaN(A)&&(It+=q*(1-Fe.progress)),We===d&&(Pt+=q));if(I+=It,k+=It,P._startClamp&&(P._startClamp+=It),P._endClamp&&!Dn&&(P._endClamp=k||-.001,k=Math.min(k,er(F,v))),T=k-I||(I-=.01)&&.001,Jt&&(pe=Le.utils.clamp(0,1,Le.utils.normalize(I,k,Q))),P._pinPush=Pt,te&&It&&(q={},q[v.a]="+="+It,V&&(q[v.p]="-="+we()),Le.set([te,Y],q)),d&&!(Sh&&P.end>=er(F,v)))q=Ti(d),Ve=v===nn,De=we(),fe=parseFloat(me(v.a))+Pt,!Ct&&k>1&&(yt=(D?Et.scrollingElement||si:F).style,yt={style:yt,value:yt["overflow"+v.a.toUpperCase()]},D&&Ti(vt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(yt.style["overflow"+v.a.toUpperCase()]="scroll")),Rf(d,Z,q),X=uc(d),Se=Mr(d,!0),Je=$&&fs(F,Ve?Bn:nn)(),_?(ce=[_+v.os2,T+Pt+en],ce.t=Z,J=_===Kt?Zc(d,v)+T+Pt:0,J&&(ce.push(v.d,J+en),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=J+en)),qo(ce),V&&ot.forEach(function(qe){qe.pin===V&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),$&&we(Q)):(J=Zc(d,v),J&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=J+en)),$&&(Ue={top:Se.top+(Ve?De-I:Je)+en,left:Se.left+(Ve?Je:De-I)+en,boxSizing:"border-box",position:"fixed"},Ue[Ks]=Ue["max"+ra]=Math.ceil(Se.width)+en,Ue[Zs]=Ue["max"+gd]=Math.ceil(Se.height)+en,Ue[Ei]=Ue[Ei+Ya]=Ue[Ei+Wa]=Ue[Ei+qa]=Ue[Ei+Xa]="0",Ue[Kt]=q[Kt],Ue[Kt+Ya]=q[Kt+Ya],Ue[Kt+Wa]=q[Kt+Wa],Ue[Kt+qa]=q[Kt+qa],Ue[Kt+Xa]=q[Kt+Xa],B=AR(y,Ue,w),Dn&&we(0)),r?(Nt=r._initted,Tf(1),r.render(r.duration(),!0,!0),he=me(v.a)-fe+T+Pt,Ye=Math.abs(T-he)>1,$&&Ye&&B.splice(B.length-2,2),r.render(0,!0,!0),Nt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Tf(0)):he=T,yt&&(yt.value?yt.style["overflow"+v.a.toUpperCase()]=yt.value:yt.style.removeProperty("overflow-"+v.a));else if(h&&we()&&!b)for(Se=h.parentNode;Se&&Se!==vt;)Se._pinOffset&&(I-=Se._pinOffset,k-=Se._pinOffset),Se=Se.parentNode;Qt&&Qt.forEach(function(qe){return qe.revert(!1,!0)}),P.start=I,P.end=k,Ce=M=Dn?Q:we(),!b&&!Dn&&(Ce<Q&&we(Q),P.scroll.rec=0),P.revert(!1,!0),le=xn(),xe&&(j=-1,xe.restart(!0)),vn=0,r&&C&&(r._initted||_e)&&r.progress()!==_e&&r.progress(_e||0,!0).render(r.time(),!0,!0),(Jt||pe!==P.progress||b||g||r&&!r._initted)&&(r&&!C&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(b&&I<-.001&&!pe?Le.utils.normalize(I,k,0):pe,!0),P.progress=Jt||(Ce-I)/T===pe?0:pe),d&&_&&(Z._pinOffset=Math.round(P.progress*he)),ye&&ye.invalidate(),isNaN(bn)||(bn-=Le.getProperty(L,v.p),bt-=Le.getProperty(se,v.p),fc(L,v,bn),fc(te,v,bn-(Ze||0)),fc(se,v,bt),fc(Y,v,bt-(Ze||0))),Jt&&!Dn&&P.update(),u&&!Dn&&!ue&&(ue=!0,u(P),ue=!1)}},P.getVelocity=function(){return(we()-M)/(xn()-ba)*1e3||0},P.endAnimation=function(){Sa(P.callbackAnimation),r&&(ye?ye.progress(1):r.paused()?C||Sa(r,P.direction<0,1):Sa(r,r.reversed()))},P.labelToScroll=function(ge){return r&&r.labels&&(I||P.refresh()||I)+r.labels[ge]/r.duration()*T||0},P.getTrailing=function(ge){var Ge=ot.indexOf(P),He=P.direction>0?ot.slice(0,Ge).reverse():ot.slice(Ge+1);return(ii(ge)?He.filter(function(Ze){return Ze.vars.preventOverlaps===ge}):He).filter(function(Ze){return P.direction>0?Ze.end<=I:Ze.start>=k})},P.update=function(ge,Ge,He){if(!(b&&!He&&!ge)){var Ze=Dn===!0?Q:P.scroll(),kt=ge?0:(Ze-I)/T,at=kt<0?0:kt>1?1:kt||0,Ct=P.progress,Jt,It,Pt,Mt,Qn,A,V,ne;if(Ge&&(M=Ce,Ce=b?we():Ze,S&&(Ke=Pe,Pe=r&&!C?r.totalProgress():at)),p&&d&&!vn&&!rc&&Ri&&(!at&&I<Ze+(Ze-M)/(xn()-ba)*p?at=1e-4:at===1&&k>Ze+(Ze-M)/(xn()-ba)*p&&(at=.9999)),at!==Ct&&P.enabled){if(Jt=P.isActive=!!at&&at<1,It=!!Ct&&Ct<1,A=Jt!==It,Qn=A||!!at!=!!Ct,P.direction=at>Ct?1:-1,P.progress=at,Qn&&!vn&&(Pt=at&&!Ct?0:at===1?1:Ct===1?2:3,C&&(Mt=!A&&z[Pt+1]!=="none"&&z[Pt+1]||z[Pt],ne=r&&(Mt==="complete"||Mt==="reset"||Mt in r))),O&&(A||ne)&&(ne||f||!r)&&(yn(O)?O(P):P.getTrailing(O).forEach(function(De){return De.endAnimation()})),C||(ye&&!vn&&!rc?(ye._dp._time-ye._start!==ye._time&&ye.render(ye._dp._time-ye._start),ye.resetTo?ye.resetTo("totalProgress",at,r._tTime/r._tDur):(ye.vars.totalProgress=at,ye.invalidate().restart())):r&&r.totalProgress(at,!!(vn&&(le||ge)))),d){if(ge&&_&&(Z.style[_+v.os2]=ze),!$)ve(wa(fe+he*at));else if(Qn){if(V=!ge&&at>Ct&&k+1>Ze&&Ze+1>=er(F,v),w)if(!ge&&(Jt||V)){var J=Mr(d,!0),q=Ze-I;h_(d,vt,J.top+(v===nn?q:0)+en,J.left+(v===nn?0:q)+en)}else h_(d,Z);qo(Jt||V?B:X),Ye&&at<1&&Jt||ve(fe+(at===1&&!V?he:0))}}S&&!be.tween&&!vn&&!rc&&xe.restart(!0),o&&(A||x&&at&&(at<1||!bf))&&fl(o.targets).forEach(function(De){return De.classList[Jt||x?"add":"remove"](o.className)}),a&&!C&&!ge&&a(P),Qn&&!vn?(C&&(ne&&(Mt==="complete"?r.pause().totalProgress(1):Mt==="reset"?r.restart(!0).pause():Mt==="restart"?r.restart(!0):r[Mt]()),a&&a(P)),(A||!bf)&&(c&&A&&To(P,c),W[Pt]&&To(P,W[Pt]),x&&(at===1?P.kill(!1,1):W[Pt]=0),A||(Pt=at===1?1:3,W[Pt]&&To(P,W[Pt]))),U&&!Jt&&Math.abs(P.getVelocity())>(Ra(U)?U:2500)&&(Sa(P.callbackAnimation),ye?ye.progress(1):Sa(r,Mt==="reverse"?1:!at,1))):C&&a&&!vn&&a(P)}if(Re){var Se=b?Ze/b.duration()*(b._caScrollDist||0):Ze;mt(Se+(L._isFlipped?1:0)),Re(Se)}Te&&Te(-Ze/b.duration()*(b._caScrollDist||0))}},P.enable=function(ge,Ge){P.enabled||(P.enabled=!0,cn(F,"resize",Ca),D||cn(F,"scroll",Ao),ae&&cn(n,"refreshInit",ae),ge!==!1&&(P.progress=pe=0,Ce=M=j=we()),Ge!==!1&&P.refresh())},P.getTween=function(ge){return ge&&be?be.tween:ye},P.setPositions=function(ge,Ge,He,Ze){if(b){var kt=b.scrollTrigger,at=b.duration(),Ct=kt.end-kt.start;ge=kt.start+Ct*ge/at,Ge=kt.start+Ct*Ge/at}P.refresh(!1,!1,{start:i_(ge,He&&!!P._startClamp),end:i_(Ge,He&&!!P._endClamp)},Ze),P.update()},P.adjustPinSpacing=function(ge){if(ce&&ge){var Ge=ce.indexOf(v.d)+1;ce[Ge]=parseFloat(ce[Ge])+ge+en,ce[1]=parseFloat(ce[1])+ge+en,qo(ce)}},P.disable=function(ge,Ge){if(ge!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||ye&&ye.pause(),Q=0,Me&&(Me.uncache=1),ae&&ln(n,"refreshInit",ae),xe&&(xe.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!D)){for(var He=ot.length;He--;)if(ot[He].scroller===F&&ot[He]!==P)return;ln(F,"resize",Ca),D||ln(F,"scroll",Ao)}},P.kill=function(ge,Ge){P.disable(ge,Ge),ye&&!Ge&&ye.kill(),l&&delete Mh[l];var He=ot.indexOf(P);He>=0&&ot.splice(He,1),He===Ln&&Tc>0&&Ln--,He=0,ot.forEach(function(Ze){return Ze.scroller===P.scroller&&(He=1)}),He||Dn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,ge&&r.revert({kill:!1}),Ge||r.kill()),te&&[te,Y,L,se].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),$a===P&&($a=0),d&&(Me&&(Me.uncache=1),He=0,ot.forEach(function(Ze){return Ze.pin===d&&He++}),He||(Me.spacer=0)),i.onKill&&i.onKill(P)},ot.push(P),P.enable(!1,!1),je&&je(P),r&&r.add&&!T){var Be=P.update;P.update=function(){P.update=Be,ct.cache++,I||k||P.refresh()},Le.delayedCall(.01,P.update),T=.01,I=k=0}else P.refresh();d&&ER()},n.register=function(i){return Ro||(Le=i||Sv(),xv()&&window.document&&n.enable(),Ro=Aa),Ro},n.defaults=function(i){if(i)for(var r in i)lc[r]=i[r];return lc},n.disable=function(i,r){Aa=0,ot.forEach(function(a){return a[r?"kill":"disable"](i)}),ln(lt,"wheel",Ao),ln(Et,"scroll",Ao),clearInterval(ic),ln(Et,"touchcancel",Xi),ln(vt,"touchstart",Xi),oc(ln,Et,"pointerdown,touchstart,mousedown",r_),oc(ln,Et,"pointerup,touchend,mouseup",s_),Kc.kill(),sc(ln);for(var s=0;s<ct.length;s+=3)ac(ln,ct[s],ct[s+1]),ac(ln,ct[s],ct[s+2])},n.enable=function(){if(lt=window,Et=document,si=Et.documentElement,vt=Et.body,Le){if(fl=Le.utils.toArray,Ga=Le.utils.clamp,xh=Le.core.context||Xi,Tf=Le.core.suppressOverwrites||Xi,dd=lt.history.scrollRestoration||"auto",yh=lt.pageYOffset||0,Le.core.globals("ScrollTrigger",n),vt){Aa=1,Yo=document.createElement("div"),Yo.style.height="100vh",Yo.style.position="absolute",Pv(),_R(),qt.register(Le),n.isTouch=qt.isTouch,Gr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vh=qt.isTouch===1,cn(lt,"wheel",Ao),hd=[lt,Et,si,vt],Le.matchMedia?(n.matchMedia=function(u){var f=Le.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Le.addEventListener("matchMediaInit",function(){Rv(),xd()}),Le.addEventListener("matchMediaRevert",function(){return wv()}),Le.addEventListener("matchMedia",function(){Hs(0,1),no("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return wf(),wf})):console.warn("Requires GSAP 3.11.0 or later"),wf(),cn(Et,"scroll",Ao);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,a=Le.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Mr(vt),nn.m=Math.round(o.top+nn.sc())||0,Bn.m=Math.round(o.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),ic=setInterval(l_,250),Le.delayedCall(.5,function(){return rc=0}),cn(Et,"touchcancel",Xi),cn(vt,"touchstart",Xi),oc(cn,Et,"pointerdown,touchstart,mousedown",r_),oc(cn,Et,"pointerup,touchend,mouseup",s_),gh=Le.utils.checkPrefix("transform"),bc.push(gh),Ro=xn(),Kc=Le.delayedCall(.2,Hs).pause(),Co=[Et,"visibilitychange",function(){var u=lt.innerWidth,f=lt.innerHeight;Et.hidden?(e_=u,t_=f):(e_!==u||t_!==f)&&Ca()},Et,"DOMContentLoaded",Hs,lt,"load",Hs,lt,"resize",Ca],sc(cn),ot.forEach(function(u){return u.enable(0,1)}),l=0;l<ct.length;l+=3)ac(ln,ct[l],ct[l+1]),ac(ln,ct[l],ct[l+2])}else if(Et){var c=function u(){n.enable(),Et.removeEventListener("DOMContentLoaded",u)};Et.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(bf=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(ic)||(ic=r)&&setInterval(l_,r),"ignoreMobileResize"in i&&(vh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(sc(ln)||sc(cn,i.autoRefreshEvents||"none"),_v=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Gn(i),a=ct.indexOf(s),o=eo(s);~a&&ct.splice(a,o?6:2),r&&(o?nr.unshift(lt,r,vt,r,si,r):nr.unshift(s,r))},n.clearMatchMedia=function(i){ot.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var a=(ii(i)?Gn(i):i).getBoundingClientRect(),o=a[s?Ks:Zs]*r||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},n.positionInViewport=function(i,r,s){ii(i)&&(i=Gn(i));var a=i.getBoundingClientRect(),o=a[s?Ks:Zs],l=r==null?o/2:r in Jc?Jc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},n.killAll=function(i){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=to.killAll||[];to={},r.forEach(function(s){return s()})}},n}();nt.version="3.15.0";nt.saveStyles=function(n){return n?fl(n).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),xh())}}):ni};nt.revert=function(n,e){return xd(!n,e)};nt.create=function(n,e){return new nt(n,e)};nt.refresh=function(n){return n?Ca(!0):(Ro||nt.register())&&Hs(!0)};nt.update=function(n){return++ct.cache&&br(n===!0?2:0)};nt.clearScrollMemory=Cv;nt.maxScroll=function(n,e){return er(n,e?Bn:nn)};nt.getScrollFunc=function(n,e){return fs(Gn(n),e?Bn:nn)};nt.getById=function(n){return Mh[n]};nt.getAll=function(){return ot.filter(function(n){return n.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Ri};nt.snapDirectional=vd;nt.addEventListener=function(n,e){var t=to[n]||(to[n]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(n,e){var t=to[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};nt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Le.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(s)&&(s=s(),cn(nt,"refresh",function(){return s=e.batchMax()})),fl(n).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(nt.create(c))}),t};var p_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Cf=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===si&&n(vt,t)},hc={auto:1,scroll:1},RR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Le.core.getCache(s),o=xn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hc[(l=Ti(s)).overflowY]||hc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!eo(s)&&(hc[(l=Ti(s)).overflowY]||hc[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Dv=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&RR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&cn(Et,qt.eventTypes[0],__,!1,!0)},onDisable:function(){return ln(Et,qt.eventTypes[0],__,!0)}})},CR=/(input|label|select|textarea)/i,m_,__=function(e){var t=CR.test(e.target.tagName);(t||m_)&&(e._gsapAllow=!0,m_=t)},PR=function(e){Ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||si,u=Le.core.globals().ScrollSmoother,f=u&&u.get(),h=Gr&&(e.content&&Gn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=fs(c,nn),_=fs(c,Bn),g=1,p=(qt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,E=yn(r)?function(){return r(o)}:function(){return r||2.8},x,S,w=Dv(c,e.type,!0,s),R=function(){return S=!1},b=Xi,U=Xi,O=function(){l=er(c,nn),U=Ga(Gr?1:0,l),i&&(b=Ga(0,er(c,Bn))),x=Js},v=function(){h._gsap.y=wa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(S){requestAnimationFrame(R);var N=wa(o.deltaY/2),K=U(d.v-N);if(h&&K!==d.v+d.offset){d.offset=K-d.v;var P=wa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=ct.cache,br()}return!0}d.offset&&v(),S=!0},F,ee,D,$,W=function(){O(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return h&&Le.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return Gr&&z.type==="touchmove"&&C()||g>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){S=!1;var z=g;g=wa((lt.visualViewport&&lt.visualViewport.scale||1)/p),F.pause(),z!==g&&Cf(c,g>1.01?!0:i?!1:"x"),ee=_(),D=d(),O(),x=Js},e.onRelease=e.onGestureStart=function(z,N){if(d.offset&&v(),!N)$.restart(!0);else{ct.cache++;var K=E(),P,ae;i&&(P=_(),ae=P+K*.05*-z.velocityX/.227,K*=p_(_,P,ae,er(c,Bn)),F.vars.scrollX=b(ae)),P=d(),ae=P+K*.05*-z.velocityY/.227,K*=p_(d,P,ae,er(c,nn)),F.vars.scrollY=U(ae),F.invalidate().duration(K).play(.01),(Gr&&F.vars.scrollY>=l||P>=l-1)&&Le.to({},{onUpdate:W,duration:K})}a&&a(z)},e.onWheel=function(){F._ts&&F.pause(),xn()-m>1e3&&(x=0,m=xn())},e.onChange=function(z,N,K,P,ae){if(Js!==x&&O(),N&&i&&_(b(P[2]===N?ee+(z.startX-z.x):_()+N-P[1])),K){d.offset&&v();var de=ae[2]===K,Ne=de?D+z.startY-z.y:d()+K-ae[1],j=U(Ne);de&&Ne!==j&&(D+=j-Ne),d(j)}(K||N)&&br()},e.onEnable=function(){Cf(c,i?!1:"x"),nt.addEventListener("refresh",W),cn(lt,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){Cf(c,!0),ln(lt,"resize",W),nt.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new qt(e),o.iOS=Gr,Gr&&!d()&&d(1),Gr&&Le.ticker.add(Xi),$=o._dc,F=Le.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lv(d,d(),function(){return F.pause()})},onUpdate:br,onComplete:$.vars.onComplete}),o};nt.sort=function(n){if(yn(n))return ot.sort(n);var e=lt.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};nt.observe=function(n){return new qt(n)};nt.normalizeScroll=function(n){if(typeof n>"u")return Pn;if(n===!0&&Pn)return Pn.enable();if(n===!1){Pn&&Pn.kill(),Pn=n;return}var e=n instanceof qt?n:PR(n);return Pn&&Pn.target===e.target&&Pn.kill(),eo(e.target)&&(Pn=e),e};nt.core={_getVelocityProp:_h,_inputObserver:Dv,_scrollers:ct,_proxies:nr,bridge:{ss:function(){Ri||no("scrollStart"),Ri=xn()},ref:function(){return vn}}};Sv()&&Le.registerPlugin(nt);const LR={class:"card-front"},DR={class:"card-header"},IR={class:"card-avatar"},UR={class:"avatar-text"},NR={class:"card-name"},OR={class:"card-title"},FR={class:"info-grid"},BR={class:"info-item reveal-item"},zR={class:"info-value"},kR={class:"info-item reveal-item"},HR={class:"info-value"},GR={class:"info-item reveal-item"},VR={class:"info-value"},WR={class:"info-item reveal-item"},XR={class:"info-value highlight"},YR={class:"contact-row reveal-item"},qR={class:"contact-value"},$R={class:"contact-row reveal-item"},jR={class:"contact-value"},KR={class:"card-back"},ZR={class:"edu-school"},JR={class:"edu-major"},QR={class:"edu-period"},eC={class:"courses-grid"},tC=hs({__name:"ProfileSection",setup(n){fi.registerPlugin(nt);const e=ut(null),t=ut(null),i=ut(!1),r=ut(0),s=ut(0),a=c=>{if(!t.value||i.value)return;const u=t.value.getBoundingClientRect(),f=c.clientX-u.left,h=c.clientY-u.top,d=u.width/2,_=u.height/2;r.value=(h-_)/_*-15,s.value=(f-d)/d*15},o=()=>{i.value||(r.value=0,s.value=0)},l=()=>{i.value=!i.value,i.value&&(r.value=0,s.value=0)};return sr(()=>{e.value&&fi.from(e.value.querySelectorAll(".reveal-item"),{scrollTrigger:{trigger:e.value,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"},y:60,opacity:0,duration:.8,stagger:.15,ease:"power3.out"})}),(c,u)=>(Qe(),tt("section",{ref_key:"sectionRef",ref:e,class:"section profile-section"},[u[14]||(u[14]=H("h2",{class:"section-title"},"Profile & Education",-1)),H("div",{class:"card-container",onMousemove:a,onMouseleave:o,onClick:l},[H("div",{ref_key:"cardRef",ref:t,class:In(["holo-card",{"is-flipped":i.value}]),style:rs({transform:i.value?"rotateY(180deg)":`rotateX(${r.value}deg) rotateY(${s.value}deg)`})},[H("div",LR,[H("div",DR,[H("div",IR,[H("span",UR,et(Tt(tn).name.charAt(0)),1)]),u[0]||(u[0]=H("div",{class:"card-badge"},"ACTIVE",-1))]),H("h3",NR,et(Tt(tn).name),1),H("p",OR,et(Tt(tn).position),1),u[7]||(u[7]=H("div",{class:"card-divider"},null,-1)),H("div",FR,[H("div",BR,[u[1]||(u[1]=H("span",{class:"info-label"},"AGE",-1)),H("span",zR,et(Tt(tn).age),1)]),H("div",kR,[u[2]||(u[2]=H("span",{class:"info-label"},"EXP",-1)),H("span",HR,et(Tt(tn).experience),1)]),H("div",GR,[u[3]||(u[3]=H("span",{class:"info-label"},"FROM",-1)),H("span",VR,et(Tt(tn).origin),1)]),H("div",WR,[u[4]||(u[4]=H("span",{class:"info-label"},"STATUS",-1)),H("span",XR,et(Tt(tn).availability),1)])]),u[8]||(u[8]=H("div",{class:"card-divider"},null,-1)),H("div",YR,[u[5]||(u[5]=H("span",{class:"contact-icon"},"TEL",-1)),H("span",qR,et(Tt(tn).phone),1)]),H("div",$R,[u[6]||(u[6]=H("span",{class:"contact-icon"},"MAIL",-1)),H("span",jR,et(Tt(tn).email),1)]),u[9]||(u[9]=H("div",{class:"flip-hint"},"CLICK TO FLIP →",-1))]),H("div",KR,[u[10]||(u[10]=H("div",{class:"card-header"},[H("div",{class:"card-badge back-badge"},"EDUCATION")],-1)),H("h3",ZR,et(Tt(Zl).school),1),H("p",JR,et(Tt(Zl).major),1),H("p",QR,et(Tt(Zl).period),1),u[11]||(u[11]=H("div",{class:"card-divider"},null,-1)),u[12]||(u[12]=H("div",{class:"courses-title"},"主修课程",-1)),H("div",eC,[(Qe(!0),tt(Bt,null,hi(Tt(Zl).courses,(f,h)=>(Qe(),tt("span",{key:h,class:"course-tag reveal-item"},et(f),1))),128))]),u[13]||(u[13]=H("div",{class:"flip-hint"},"← CLICK TO FLIP",-1))])],6)],32)],512))}}),nC=ps(tC,[["__scopeId","data-v-0f3f057b"]]),iC={class:"skills-container"},rC={class:"skill-tree"},sC=["onClick"],oC={class:"node-ring"},aC={viewBox:"0 0 100 100",class:"node-svg"},lC=["stroke-dashoffset"],cC={class:"node-level"},uC={class:"node-name"},fC={class:"node-tags"},hC={class:"terminal-body"},dC={class:"terminal-text"},pC={key:0,class:"terminal-cursor"},mC=hs({__name:"SkillsSection",setup(n){fi.registerPlugin(nt);const e=ut(null),t=ut(null),i=ut(""),r=ut(!1);let s=null;const a=2*Math.PI*42,o=u=>a*(1-u/100),l=u=>{s&&clearInterval(s),i.value="",r.value=!0;let f=0;s=window.setInterval(()=>{f<u.length?(i.value+=u.charAt(f),f++):(s&&clearInterval(s),r.value=!1)},30)},c=u=>{if(t.value===u.id){t.value=null,i.value="";return}t.value=u.id,l(u.detail)};return sr(()=>{Jl.length>0&&(t.value=Jl[0].id,l(Jl[0].detail)),e.value&&Oh(()=>{setTimeout(()=>{const u=e.value.querySelectorAll(".skill-node");fi.fromTo(u,{scale:.6,opacity:0},{scrollTrigger:{trigger:e.value,start:"top 75%"},scale:1,opacity:1,duration:.5,stagger:{each:.06,from:"center"},ease:"back.out(1.7)"}),nt.refresh()},100)})}),(u,f)=>(Qe(),tt("section",{ref_key:"sectionRef",ref:e,class:"section skills-section"},[f[3]||(f[3]=H("h2",{class:"section-title"},"Skill Matrix",-1)),H("div",iC,[H("div",rC,[(Qe(!0),tt(Bt,null,hi(Tt(Jl),h=>(Qe(),tt("div",{key:h.id,class:In(["skill-node",{"is-active":t.value===h.id}]),onClick:d=>c(h)},[H("div",oC,[(Qe(),tt("svg",aC,[f[0]||(f[0]=H("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"rgba(0, 240, 255, 0.1)","stroke-width":"2"},null,-1)),H("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"var(--color-cyan)","stroke-width":"2.5","stroke-dasharray":a,"stroke-dashoffset":o(h.level),"stroke-linecap":"round",class:"node-progress"},null,8,lC)])),H("div",cC,et(h.level),1)]),H("div",uC,et(h.name),1),H("div",fC,[(Qe(!0),tt(Bt,null,hi(h.tags.slice(0,3),d=>(Qe(),tt("span",{key:d,class:"node-tag"},et(d),1))),128))])],10,sC))),128))]),H("div",{class:In(["skill-detail-terminal",{"is-visible":t.value!==null}])},[f[2]||(f[2]=Eg('<div class="terminal-header" data-v-37b94587><span class="terminal-dot red" data-v-37b94587></span><span class="terminal-dot yellow" data-v-37b94587></span><span class="terminal-dot green" data-v-37b94587></span><span class="terminal-title" data-v-37b94587>skill_detail.exe</span></div>',1)),H("div",hC,[f[1]||(f[1]=H("span",{class:"terminal-prompt"},">",-1)),H("span",dC,et(i.value),1),r.value?(Qe(),tt("span",pC,"_")):Cr("",!0)])],2)])],512))}}),_C=ps(mC,[["__scopeId","data-v-37b94587"]]),gC={class:"timeline-container"},vC={class:"timeline-nodes"},xC=["onClick","onMousemove","onMouseleave"],SC={class:"card-period"},MC={class:"card-company"},yC={class:"card-position"},EC={key:0,class:"card-detail"},TC={class:"detail-list"},bC={key:0,class:"detail-projects"},AC={class:"project-chips"},wC=hs({__name:"TimelineSection",setup(n){fi.registerPlugin(nt);const e=ut(null),t=ut(null),i=ut({}),r=o=>{t.value=t.value===o?null:o},s=(o,l)=>{const u=o.currentTarget.getBoundingClientRect(),f=o.clientX-u.left,h=o.clientY-u.top,d=u.width/2,_=u.height/2;i.value={...i.value,[l]:{x:(h-_)/_*-10,y:(f-d)/d*10}}},a=o=>{i.value={...i.value,[o]:{x:0,y:0}}};return sr(()=>{if(e.value)try{const o=e.value.querySelector(".timeline-line-svg");o&&o.querySelectorAll("path").forEach(u=>{try{const f=u.getTotalLength();fi.set(u,{strokeDasharray:f,strokeDashoffset:f}),fi.to(u,{strokeDashoffset:0,duration:2,ease:"power2.inOut",scrollTrigger:{trigger:u,start:"top 80%",end:"bottom 20%",scrub:1}})}catch(f){console.error("[TimelineSection.path-animation]",f)}});const l=e.value.querySelectorAll(".timeline-node");fi.from(l,{scrollTrigger:{trigger:e.value,start:"top 60%",toggleActions:"play none none reverse"},x:-60,opacity:0,duration:.8,stagger:.3,ease:"power3.out"})}catch(o){console.error("[TimelineSection.onMounted]",o)}}),(o,l)=>(Qe(),tt("section",{ref_key:"sectionRef",ref:e,class:"section timeline-section"},[l[4]||(l[4]=H("h2",{class:"section-title"},"Career Timeline",-1)),H("div",gC,[l[3]||(l[3]=Eg('<div class="timeline-line" data-v-2ddc553d><svg class="timeline-line-svg" viewBox="0 0 60 800" preserveAspectRatio="none" data-v-2ddc553d><defs data-v-2ddc553d><linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1" data-v-2ddc553d><stop offset="0%" stop-color="var(--color-cyan)" data-v-2ddc553d></stop><stop offset="50%" stop-color="var(--color-purple)" data-v-2ddc553d></stop><stop offset="100%" stop-color="var(--color-cyan)" data-v-2ddc553d></stop></linearGradient><filter id="glow" data-v-2ddc553d><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-2ddc553d></feGaussianBlur><feMerge data-v-2ddc553d><feMergeNode in="coloredBlur" data-v-2ddc553d></feMergeNode><feMergeNode in="SourceGraphic" data-v-2ddc553d></feMergeNode></feMerge></filter></defs><path d="M30 0 L30 250 L25 260 L30 270 L35 280 L30 290 L30 530 L25 540 L30 550 L35 560 L30 570 L30 800" fill="none" stroke="url(#lineGrad)" stroke-width="2" filter="url(#glow)" data-v-2ddc553d></path><path d="M30 130 L50 130" fill="none" stroke="var(--color-cyan)" stroke-width="1.5" filter="url(#glow)" data-v-2ddc553d></path><path d="M30 400 L50 400" fill="none" stroke="var(--color-purple)" stroke-width="1.5" filter="url(#glow)" data-v-2ddc553d></path><path d="M30 670 L50 670" fill="none" stroke="var(--color-cyan)" stroke-width="1.5" filter="url(#glow)" data-v-2ddc553d></path></svg></div>',1)),H("div",vC,[(Qe(!0),tt(Bt,null,hi(Tt(Qf),(c,u)=>{var f,h;return Qe(),tt("div",{key:c.id,class:In(["timeline-node",{"is-active":t.value===c.id}])},[H("div",{class:"node-indicator",style:rs({"--delay":u*.2+"s"})},[...l[0]||(l[0]=[H("div",{class:"indicator-dot"},null,-1),H("div",{class:"indicator-ring"},null,-1)])],4),H("div",{class:"node-card glass-panel",onClick:d=>r(c.id),onMousemove:d=>s(d,c.id),onMouseleave:d=>a(c.id),style:rs({transform:`perspective(800px) rotateX(${((f=i.value[c.id])==null?void 0:f.x)||0}deg) rotateY(${((h=i.value[c.id])==null?void 0:h.y)||0}deg)`})},[H("div",SC,et(c.period),1),H("h3",MC,et(c.company),1),H("div",yC,et(c.position),1),Ft(Gh,{name:"expand"},{default:su(()=>[t.value===c.id?(Qe(),tt("div",EC,[l[2]||(l[2]=H("div",{class:"detail-divider"},null,-1)),H("ul",TC,[(Qe(!0),tt(Bt,null,hi(c.responsibilities,(d,_)=>(Qe(),tt("li",{key:_},et(d),1))),128))]),c.projects.length?(Qe(),tt("div",bC,[l[1]||(l[1]=H("div",{class:"projects-label"},"核心项目",-1)),H("div",AC,[(Qe(!0),tt(Bt,null,hi(c.projects,d=>(Qe(),tt("span",{key:d.name,class:"project-chip"},et(d.name),1))),128))])])):Cr("",!0)])):Cr("",!0)]),_:2},1024)],44,xC)],2)}),128))])])],512))}}),RC=ps(wC,[["__scopeId","data-v-2ddc553d"]]),CC=["onClick"],PC={class:"card-company-label"},LC={class:"card-project-name"},DC={class:"card-tech-stack"},IC={class:"card-desc"},UC={class:"terminal-modal"},NC={class:"modal-body"},OC={class:"code-block"},FC={class:"code-line"},BC={class:"code-string"},zC={class:"code-block"},kC={class:"code-line"},HC={class:"code-string"},GC={class:"code-block"},VC={class:"code-line"},WC={class:"code-string"},XC={class:"code-block"},YC={class:"code-string"},qC={key:0,class:"code-comma"},$C=hs({__name:"ProjectsSection",setup(n){fi.registerPlugin(nt);const e=ut(null),t=ut(null),i=ut(null),r=Qf.flatMap((l,c)=>l.projects.map((u,f)=>({...u,company:l.company,period:l.period,workIdx:c,projIdx:f}))),s=(l,c)=>{t.value={workIdx:l,projIdx:c}},a=()=>{t.value=null},o=wg(()=>{var u;if(!t.value)return null;const{workIdx:l,projIdx:c}=t.value;return((u=Qf[l])==null?void 0:u.projects[c])||null});return sr(()=>{e.value&&Oh(()=>{setTimeout(()=>{fi.fromTo(i.value,{y:50,opacity:0},{scrollTrigger:{trigger:e.value,start:"top 75%"},y:0,opacity:1,duration:.8,ease:"power3.out"}),nt.refresh()},100)})}),(l,c)=>(Qe(),tt("section",{ref_key:"sectionRef",ref:e,id:"projects",class:"section projects-section"},[c[23]||(c[23]=H("h2",{class:"section-title"},"Project Arsenal",-1)),H("div",{ref_key:"scrollContainer",ref:i,class:"projects-scroll"},[(Qe(!0),tt(Bt,null,hi(Tt(r),u=>(Qe(),tt("div",{key:`${u.workIdx}-${u.projIdx}`,class:"project-card glass-panel",onClick:f=>s(u.workIdx,u.projIdx)},[c[0]||(c[0]=H("div",{class:"card-corner tl"},null,-1)),c[1]||(c[1]=H("div",{class:"card-corner tr"},null,-1)),c[2]||(c[2]=H("div",{class:"card-corner bl"},null,-1)),c[3]||(c[3]=H("div",{class:"card-corner br"},null,-1)),H("div",PC,et(u.company),1),H("h3",LC,et(u.name),1),H("div",DC,[(Qe(!0),tt(Bt,null,hi(u.tech.split(", ").slice(0,4),f=>(Qe(),tt("span",{key:f,class:"tech-tag"},et(f),1))),128))]),H("p",IC,et(u.description),1),c[4]||(c[4]=H("div",{class:"card-action"},"[ CLICK TO INSPECT ]",-1))],8,CC))),128))],512),Ft(Gh,{name:"terminal"},{default:su(()=>[t.value&&o.value?(Qe(),tt("div",{key:0,class:"terminal-overlay",onClick:oM(a,["self"])},[H("div",UC,[H("div",{class:"modal-header"},[H("div",{class:"modal-dots"},[H("span",{class:"dot red",onClick:a}),c[5]||(c[5]=H("span",{class:"dot yellow"},null,-1)),c[6]||(c[6]=H("span",{class:"dot green"},null,-1))]),c[7]||(c[7]=H("span",{class:"modal-title"},"project_inspector.sh",-1)),H("span",{class:"modal-close",onClick:a},"✕")]),H("div",NC,[H("div",OC,[c[11]||(c[11]=H("div",{class:"code-line comment"},"// 项目名称",-1)),H("div",FC,[c[8]||(c[8]=H("span",{class:"code-keyword"},"const",-1)),c[9]||(c[9]=H("span",{class:"code-var"},"projectName",-1)),c[10]||(c[10]=H("span",{class:"code-op"},"=",-1)),H("span",BC,'"'+et(o.value.name)+'"',1)])]),H("div",zC,[c[15]||(c[15]=H("div",{class:"code-line comment"},"// 前端技术",-1)),H("div",kC,[c[12]||(c[12]=H("span",{class:"code-keyword"},"const",-1)),c[13]||(c[13]=H("span",{class:"code-var"},"techStack",-1)),c[14]||(c[14]=H("span",{class:"code-op"},"=",-1)),H("span",HC,'"'+et(o.value.tech)+'"',1)])]),H("div",GC,[c[19]||(c[19]=H("div",{class:"code-line comment"},"// 项目描述",-1)),H("div",VC,[c[16]||(c[16]=H("span",{class:"code-keyword"},"const",-1)),c[17]||(c[17]=H("span",{class:"code-var"},"description",-1)),c[18]||(c[18]=H("span",{class:"code-op"},"=",-1)),H("span",WC,"`"+et(o.value.description)+"`",1)])]),H("div",XC,[c[20]||(c[20]=H("div",{class:"code-line comment"},"// 核心实现",-1)),c[21]||(c[21]=H("div",{class:"code-line"},[H("span",{class:"code-keyword"},"const"),H("span",{class:"code-var"},"features"),H("span",{class:"code-op"},"="),H("span",{class:"code-bracket"},"[")],-1)),(Qe(!0),tt(Bt,null,hi(o.value.features,(u,f)=>(Qe(),tt("div",{key:f,class:"code-line indent"},[H("span",YC,'"'+et(u)+'"',1),f<o.value.features.length-1?(Qe(),tt("span",qC,",")):Cr("",!0)]))),128)),c[22]||(c[22]=H("div",{class:"code-line"},[H("span",{class:"code-bracket"},"]")],-1))])])])])):Cr("",!0)]),_:1})],512))}}),jC=ps($C,[["__scopeId","data-v-fd5a530d"]]),KC={class:"marquee-container"},ZC={class:"marquee-track"},JC={class:"marquee-content"},QC={class:"marquee-track reverse"},eP={class:"marquee-content reverse-content"},tP={class:"spotlight-area"},nP={class:"contact-card glass-panel"},iP={class:"card-name"},rP={class:"card-position"},sP={class:"contact-links"},oP={class:"link-value"},aP={class:"link-action"},lP={class:"link-value"},cP={class:"link-action"},uP={class:"card-cta"},fP={key:0,class:"copy-toast"},hP={key:0,class:"particle-container"},dP={class:"cyber-footer"},pP={class:"footer-sub"},mP=hs({__name:"ContactSection",setup(n){fi.registerPlugin(nt);const e=ut(null),t=ut(null),i=ut(!1),r=async(o,l)=>{try{await navigator.clipboard.writeText(o),t.value=l,i.value=!0,setTimeout(()=>{t.value=null,i.value=!1},2e3)}catch{}},s=ut([]),a=o=>{const l=Array.from({length:20},(c,u)=>({id:Date.now()+u,x:o.clientX,y:o.clientY,dx:(Math.random()-.5)*200,dy:(Math.random()-.5)*200}));s.value=l,setTimeout(()=>{s.value=[]},1e3)};return sr(()=>{e.value&&fi.from(e.value.querySelector(".contact-card"),{scrollTrigger:{trigger:e.value,start:"top 70%",toggleActions:"play none none reverse"},y:80,opacity:0,duration:1,ease:"power3.out"})}),(o,l)=>(Qe(),tt("section",{ref_key:"sectionRef",ref:e,id:"contact",class:"section contact-section"},[l[16]||(l[16]=H("h2",{class:"section-title"},"Connect & Collaborate",-1)),H("div",KC,[H("div",ZC,[H("div",JC,[(Qe(!0),tt(Bt,null,hi([...Tt(Ql),...Tt(Ql)],(c,u)=>(Qe(),tt("span",{key:u,class:"marquee-item"},[l[3]||(l[3]=H("span",{class:"marquee-bracket"},"[",-1)),_c(" "+et(c)+" ",1),l[4]||(l[4]=H("span",{class:"marquee-bracket"},"]",-1))]))),128))])]),H("div",QC,[H("div",eP,[(Qe(!0),tt(Bt,null,hi([...Tt(Ql),...Tt(Ql)],(c,u)=>(Qe(),tt("span",{key:u,class:"marquee-item"},[l[5]||(l[5]=H("span",{class:"marquee-bracket"},"<",-1)),_c(" "+et(c)+" ",1),l[6]||(l[6]=H("span",{class:"marquee-bracket"},"/>",-1))]))),128))])])]),H("div",tP,[H("div",nP,[l[10]||(l[10]=H("div",{class:"card-glow"},null,-1)),l[11]||(l[11]=H("div",{class:"card-header"},[H("div",{class:"status-indicator"}),H("span",{class:"status-text"},"AVAILABLE FOR WORK")],-1)),H("h3",iP,et(Tt(tn).name),1),H("p",rP,et(Tt(tn).position),1),l[12]||(l[12]=H("div",{class:"card-divider"},null,-1)),H("div",sP,[H("button",{class:"contact-link",onClick:l[0]||(l[0]=c=>{r(Tt(tn).email,"email"),a(c)})},[l[7]||(l[7]=H("span",{class:"link-icon"},"✉",-1)),H("span",oP,et(Tt(tn).email),1),H("span",aP,et(t.value==="email"?"已复制!":"点击复制"),1)]),H("button",{class:"contact-link",onClick:l[1]||(l[1]=c=>{r(Tt(tn).phone,"phone"),a(c)})},[l[8]||(l[8]=H("span",{class:"link-icon"},"☎",-1)),H("span",lP,et(Tt(tn).phone),1),H("span",cP,et(t.value==="phone"?"已复制!":"点击复制"),1)])]),l[13]||(l[13]=H("div",{class:"card-divider"},null,-1)),H("div",uP,[l[9]||(l[9]=H("a",{href:"mailto:a842676425@163.com",class:"neon-btn"}," 发送邮件 ",-1)),H("button",{class:"neon-btn neon-btn--purple",onClick:l[2]||(l[2]=c=>{r(Tt(tn).phone,"phone"),a(c)})}," 获取电话 ")]),Ft(Gh,{name:"toast"},{default:su(()=>[t.value?(Qe(),tt("div",fP," 已复制，期待您的项目合作 ✨ ")):Cr("",!0)]),_:1})])]),s.value.length?(Qe(),tt("div",hP,[(Qe(!0),tt(Bt,null,hi(s.value,c=>(Qe(),tt("div",{key:c.id,class:"burst-particle",style:rs({left:c.x+"px",top:c.y+"px","--dx":c.dx+"px","--dy":c.dy+"px"})},null,4))),128))])):Cr("",!0),H("footer",dP,[l[14]||(l[14]=H("div",{class:"footer-line"},null,-1)),l[15]||(l[15]=H("p",{class:"footer-text"},[H("span",{class:"footer-bracket"},"<"),_c(" Designed & Built by 高萌锴 "),H("span",{class:"footer-bracket"},"/>")],-1)),H("p",pP,"CYBER PORTFOLIO v1.0 // "+et(new Date().getFullYear()),1)])],512))}}),_P=ps(mP,[["__scopeId","data-v-37742eaf"]]),gP=hs({__name:"CyberCursor",setup(n){const e=ut(null),t=ut(null),i=ut(0),r=ut(0),s=ut(0),a=ut(0),o=ut(!1);let l=0;const c=d=>{i.value=d.clientX,r.value=d.clientY},u=d=>{d.target.closest("a, button, .neon-btn, .project-card, .skill-node")&&(o.value=!0)},f=()=>{o.value=!1},h=()=>{s.value+=(i.value-s.value)*.15,a.value+=(r.value-a.value)*.15,e.value&&(e.value.style.transform=`translate(${i.value}px, ${r.value}px)`),t.value&&(t.value.style.transform=`translate(${s.value}px, ${a.value}px)`),l=requestAnimationFrame(h)};return sr(()=>{document.addEventListener("mousemove",c),document.addEventListener("mouseover",u),document.addEventListener("mouseout",f),h()}),ml(()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseover",u),document.removeEventListener("mouseout",f),cancelAnimationFrame(l)}),(d,_)=>(Qe(),tt("div",{class:In(["cyber-cursor",{"is-hovering":o.value}])},[H("div",{ref_key:"cursorDot",ref:e,class:"cursor-dot"},null,512),H("div",{ref_key:"cursorOutline",ref:t,class:"cursor-outline"},null,512)],2))}}),vP=ps(gP,[["__scopeId","data-v-1a851efd"]]),xP={class:"cyber-portfolio"},SP=hs({__name:"App",setup(n){let e=null,t=0;return sr(()=>{try{let i=function(r){e==null||e.raf(r),t=requestAnimationFrame(i)};e=new SM({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!0}),t=requestAnimationFrame(i)}catch(i){console.error("[App.onMounted]",i)}}),ml(()=>{t&&cancelAnimationFrame(t),e==null||e.destroy()}),(i,r)=>(Qe(),tt(Bt,null,[Ft(vP),H("main",xP,[Ft(YA),Ft(nC),Ft(_C),Ft(RC),Ft(jC),Ft(_P)])],64))}}),MP=ps(SP,[["__scopeId","data-v-47e6bf1a"]]),yP=cM(MP);yP.mount("#app");
