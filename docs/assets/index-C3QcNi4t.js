(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ax(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},el={};var R_;function fM(){if(R_)return el;R_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return el.Fragment=t,el.jsx=i,el.jsxs=i,el}var C_;function hM(){return C_||(C_=1,zh.exports=fM()),zh.exports}var O=hM(),Hh={exports:{}},oe={};var w_;function dM(){if(w_)return oe;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function x(z,Z,_t){this.props=z,this.context=Z,this.refs=y,this.updater=_t||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,Z){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Z,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=x.prototype;function D(z,Z,_t){this.props=z,this.context=Z,this.refs=y,this.updater=_t||E}var U=D.prototype=new R;U.constructor=D,A(U,x.prototype),U.isPureReactComponent=!0;var B=Array.isArray;function P(){}var H={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(z,Z,_t){var Et=_t.ref;return{$$typeof:r,type:z,key:Z,ref:Et!==void 0?Et:null,props:_t}}function X(z,Z){return L(z.type,Z,z.props)}function F(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function W(z){var Z={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_t){return Z[_t]})}var Q=/\/+/g;function tt(z,Z){return typeof z=="object"&&z!==null&&z.key!=null?W(""+z.key):Z.toString(36)}function J(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(Z){z.status==="pending"&&(z.status="fulfilled",z.value=Z)},function(Z){z.status==="pending"&&(z.status="rejected",z.reason=Z)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function N(z,Z,_t,Et,Ut){var rt=typeof z;(rt==="undefined"||rt==="boolean")&&(z=null);var xt=!1;if(z===null)xt=!0;else switch(rt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(z.$$typeof){case r:case t:xt=!0;break;case g:return xt=z._init,N(xt(z._payload),Z,_t,Et,Ut)}}if(xt)return Ut=Ut(z),xt=Et===""?"."+tt(z,0):Et,B(Ut)?(_t="",xt!=null&&(_t=xt.replace(Q,"$&/")+"/"),N(Ut,Z,_t,"",function(jt){return jt})):Ut!=null&&(F(Ut)&&(Ut=X(Ut,_t+(Ut.key==null||z&&z.key===Ut.key?"":(""+Ut.key).replace(Q,"$&/")+"/")+xt)),Z.push(Ut)),1;xt=0;var bt=Et===""?".":Et+":";if(B(z))for(var Gt=0;Gt<z.length;Gt++)Et=z[Gt],rt=bt+tt(Et,Gt),xt+=N(Et,Z,_t,rt,Ut);else if(Gt=S(z),typeof Gt=="function")for(z=Gt.call(z),Gt=0;!(Et=z.next()).done;)Et=Et.value,rt=bt+tt(Et,Gt++),xt+=N(Et,Z,_t,rt,Ut);else if(rt==="object"){if(typeof z.then=="function")return N(J(z),Z,_t,Et,Ut);throw Z=String(z),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function G(z,Z,_t){if(z==null)return z;var Et=[],Ut=0;return N(z,Et,"","",function(rt){return Z.call(_t,rt,Ut++)}),Et}function ot(z){if(z._status===-1){var Z=z._result;Z=Z(),Z.then(function(_t){(z._status===0||z._status===-1)&&(z._status=1,z._result=_t)},function(_t){(z._status===0||z._status===-1)&&(z._status=2,z._result=_t)}),z._status===-1&&(z._status=0,z._result=Z)}if(z._status===1)return z._result.default;throw z._result}var ht=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Mt={map:G,forEach:function(z,Z,_t){G(z,function(){Z.apply(this,arguments)},_t)},count:function(z){var Z=0;return G(z,function(){Z++}),Z},toArray:function(z){return G(z,function(Z){return Z})||[]},only:function(z){if(!F(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=_,oe.Children=Mt,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=D,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return H.H.useMemoCache(z)}},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,Z,_t){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Et=A({},z.props),Ut=z.key;if(Z!=null)for(rt in Z.key!==void 0&&(Ut=""+Z.key),Z)!b.call(Z,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&Z.ref===void 0||(Et[rt]=Z[rt]);var rt=arguments.length-2;if(rt===1)Et.children=_t;else if(1<rt){for(var xt=Array(rt),bt=0;bt<rt;bt++)xt[bt]=arguments[bt+2];Et.children=xt}return L(z.type,Ut,Et)},oe.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},oe.createElement=function(z,Z,_t){var Et,Ut={},rt=null;if(Z!=null)for(Et in Z.key!==void 0&&(rt=""+Z.key),Z)b.call(Z,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ut[Et]=Z[Et]);var xt=arguments.length-2;if(xt===1)Ut.children=_t;else if(1<xt){for(var bt=Array(xt),Gt=0;Gt<xt;Gt++)bt[Gt]=arguments[Gt+2];Ut.children=bt}if(z&&z.defaultProps)for(Et in xt=z.defaultProps,xt)Ut[Et]===void 0&&(Ut[Et]=xt[Et]);return L(z,rt,Ut)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:p,render:z}},oe.isValidElement=F,oe.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:ot}},oe.memo=function(z,Z){return{$$typeof:d,type:z,compare:Z===void 0?null:Z}},oe.startTransition=function(z){var Z=H.T,_t={};H.T=_t;try{var Et=z(),Ut=H.S;Ut!==null&&Ut(_t,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(P,ht)}catch(rt){ht(rt)}finally{Z!==null&&_t.types!==null&&(Z.types=_t.types),H.T=Z}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(z){return H.H.use(z)},oe.useActionState=function(z,Z,_t){return H.H.useActionState(z,Z,_t)},oe.useCallback=function(z,Z){return H.H.useCallback(z,Z)},oe.useContext=function(z){return H.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,Z){return H.H.useDeferredValue(z,Z)},oe.useEffect=function(z,Z){return H.H.useEffect(z,Z)},oe.useEffectEvent=function(z){return H.H.useEffectEvent(z)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(z,Z,_t){return H.H.useImperativeHandle(z,Z,_t)},oe.useInsertionEffect=function(z,Z){return H.H.useInsertionEffect(z,Z)},oe.useLayoutEffect=function(z,Z){return H.H.useLayoutEffect(z,Z)},oe.useMemo=function(z,Z){return H.H.useMemo(z,Z)},oe.useOptimistic=function(z,Z){return H.H.useOptimistic(z,Z)},oe.useReducer=function(z,Z,_t){return H.H.useReducer(z,Z,_t)},oe.useRef=function(z){return H.H.useRef(z)},oe.useState=function(z){return H.H.useState(z)},oe.useSyncExternalStore=function(z,Z,_t){return H.H.useSyncExternalStore(z,Z,_t)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.2.4",oe}var D_;function Rp(){return D_||(D_=1,Hh.exports=dM()),Hh.exports}var nt=Rp();const pM=ax(nt);var Gh={exports:{}},nl={},Vh={exports:{}},kh={};var L_;function mM(){return L_||(L_=1,(function(r){function t(N,G){var ot=N.length;N.push(G);t:for(;0<ot;){var ht=ot-1>>>1,Mt=N[ht];if(0<l(Mt,G))N[ht]=G,N[ot]=Mt,ot=ht;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var G=N[0],ot=N.pop();if(ot!==G){N[0]=ot;t:for(var ht=0,Mt=N.length,z=Mt>>>1;ht<z;){var Z=2*(ht+1)-1,_t=N[Z],Et=Z+1,Ut=N[Et];if(0>l(_t,ot))Et<Mt&&0>l(Ut,_t)?(N[ht]=Ut,N[Et]=ot,ht=Et):(N[ht]=_t,N[Z]=ot,ht=Z);else if(Et<Mt&&0>l(Ut,ot))N[ht]=Ut,N[Et]=ot,ht=Et;else break t}}return G}function l(N,G){var ot=N.sortIndex-G.sortIndex;return ot!==0?ot:N.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,_=null,v=3,S=!1,E=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var G=i(d);G!==null;){if(G.callback===null)s(d);else if(G.startTime<=N)s(d),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(d)}}function B(N){if(A=!1,U(N),!E)if(i(m)!==null)E=!0,P||(P=!0,W());else{var G=i(d);G!==null&&J(B,G.startTime-N)}}var P=!1,H=-1,b=5,L=-1;function X(){return y?!0:!(r.unstable_now()-L<b)}function F(){if(y=!1,P){var N=r.unstable_now();L=N;var G=!0;try{t:{E=!1,A&&(A=!1,R(H),H=-1),S=!0;var ot=v;try{e:{for(U(N),_=i(m);_!==null&&!(_.expirationTime>N&&X());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var Mt=ht(_.expirationTime<=N);if(N=r.unstable_now(),typeof Mt=="function"){_.callback=Mt,U(N),G=!0;break e}_===i(m)&&s(m),U(N)}else s(m);_=i(m)}if(_!==null)G=!0;else{var z=i(d);z!==null&&J(B,z.startTime-N),G=!1}}break t}finally{_=null,v=ot,S=!1}G=void 0}}finally{G?W():P=!1}}}var W;if(typeof D=="function")W=function(){D(F)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,tt=Q.port2;Q.port1.onmessage=F,W=function(){tt.postMessage(null)}}else W=function(){x(F,0)};function J(N,G){H=x(function(){N(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(N){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ot=v;v=G;try{return N()}finally{v=ot}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ot=v;v=N;try{return G()}finally{v=ot}},r.unstable_scheduleCallback=function(N,G,ot){var ht=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,N){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=ot+Mt,N={id:g++,callback:G,priorityLevel:N,startTime:ot,expirationTime:Mt,sortIndex:-1},ot>ht?(N.sortIndex=ot,t(d,N),i(m)===null&&N===i(d)&&(A?(R(H),H=-1):A=!0,J(B,ot-ht))):(N.sortIndex=Mt,t(m,N),E||S||(E=!0,P||(P=!0,W()))),N},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(N){var G=v;return function(){var ot=v;v=G;try{return N.apply(this,arguments)}finally{v=ot}}}})(kh)),kh}var U_;function gM(){return U_||(U_=1,Vh.exports=mM()),Vh.exports}var Xh={exports:{}},Nn={};var N_;function _M(){if(N_)return Nn;N_=1;var r=Rp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=g,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var O_;function vM(){if(O_)return Xh.exports;O_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Xh.exports=_M(),Xh.exports}var P_;function xM(){if(P_)return nl;P_=1;var r=gM(),t=Rp(),i=vM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=h;break}if(C===o){M=!0,o=u,a=h;break}C=C.sibling}if(!M){for(C=h.child;C;){if(C===a){M=!0,a=h,o=u;break}if(C===o){M=!0,o=h,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var J=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],Mt=-1;function z(e){return{current:e}}function Z(e){0>Mt||(e.current=ht[Mt],ht[Mt]=null,Mt--)}function _t(e,n){Mt++,ht[Mt]=e.current,e.current=n}var Et=z(null),Ut=z(null),rt=z(null),xt=z(null);function bt(e,n){switch(_t(rt,n),_t(Ut,e),_t(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?K0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=K0(n),e=Q0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Et),_t(Et,e)}function Gt(){Z(Et),Z(Ut),Z(rt)}function jt(e){e.memoizedState!==null&&_t(xt,e);var n=Et.current,a=Q0(n,e.type);n!==a&&(_t(Ut,e),_t(Et,a))}function $t(e){Ut.current===e&&(Z(Et),Z(Ut)),xt.current===e&&(Z(xt),Qo._currentValue=ot)}var je,me;function ve(e){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+me}var Ue=!1;function le(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ft){var ct=ft}Reflect.construct(e,[],St)}else{try{St.call()}catch(ft){ct=ft}e.call(St.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],C=h[1];if(M&&C){var V=M.split(`
`),st=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===st.length)for(o=V.length-1,u=st.length-1;1<=o&&0<=u&&V[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==st[u]){var mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ve("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Oe=r.unstable_cancelCallback,qt=r.unstable_shouldYield,I=r.unstable_requestPaint,T=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Wt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Qt=r.log,ee=r.unstable_setDisableYieldValue,Rt=null,Tt=null;function Ft(e){if(typeof Qt=="function"&&ee(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Rt,e)}catch{}}var Pt=Math.clz32?Math.clz32:q,It=Math.log,fe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(It(e)/fe|0)|0}var wt=256,Ct=262144,Bt=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=At(o):(M&=C,M!==0?u=At(M):a||(a=C&~e,a!==0&&(u=At(a))))):(C=o&~h,C!==0?u=At(C):M!==0?u=At(M):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Pt(a),St=1<<mt;C[mt]=0,V[mt]=-1;var ct=st[mt];if(ct!==null)for(st[mt]=null,mt=0;mt<ct.length;mt++){var ft=ct[mt];ft!==null&&(ft.lane&=-536870913)}a&=~St}o!==0&&fo(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function fo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function er(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Al(e,n){var a=n&-n;return a=(a&42)!==0?1:nr(a),(a&(e.suspendedLanes|n))!==0?0:a}function nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ir(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zi(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function ar(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Ri=Math.random().toString(36).slice(2),on="__reactFiber$"+Ri,gn="__reactProps$"+Ri,ea="__reactContainer$"+Ri,Pa="__reactEvents$"+Ri,Rl="__reactListeners$"+Ri,Cl="__reactHandles$"+Ri,wl="__reactResources$"+Ri,Es="__reactMarker$"+Ri;function ho(e){delete e[on],delete e[gn],delete e[Pa],delete e[Rl],delete e[Cl]}function Fa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ea]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=a_(e);e!==null;){if(a=e[on])return a;e=a_(e)}return n}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[on]||e[ea]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function bs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[wl];return n||(n=e[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Es]=!0}var ut=new Set,lt={};function it(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(lt[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nt={},Yt={};function Kt(e){return Ze.call(Yt,e)?!0:Ze.call(Nt,e)?!1:zt.test(e)?Yt[e]=!0:(Nt[e]=!0,!1)}function ie(e,n,a){if(Kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function se(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,h,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ci(e,M,he(n)):a!=null?Ci(e,M,he(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+he(C):e.removeAttribute("name")}function $n(e,n,a,o,u,h,M,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){we(e);return}a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),we(e)}function Ci(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function na(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wi(e,h,n[h])}function sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return lS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var Pu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rr=null,or=null;function Zp(e){var n=Ia(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var Iu=!1;function Kp(e,n,a){if(Iu)return e(n,a);Iu=!0;try{var o=e(n);return o}finally{if(Iu=!1,(rr!==null||or!==null)&&(_c(),rr&&(n=rr,e=or,or=rr=null,Zp(n),e)))for(n=0;n<e.length;n++)Zp(e[n])}}function po(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(aa)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Bu=!1}var Ba=null,zu=null,Ll=null;function Qp(){if(Ll)return Ll;var e,n=zu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return Ll=u.slice(e,1<o?1-o:void 0)}function Ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function Jp(){return!1}function Xn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Nl:Jp,this.isPropagationStopped=Jp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Xn(Ts),go=_({},Ts,{view:0,detail:0}),cS=Xn(go),Hu,Gu,_o,Pl=_({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Hu=e.screenX-_o.screenX,Gu=e.screenY-_o.screenY):Gu=Hu=0,_o=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),$p=Xn(Pl),uS=_({},Pl,{dataTransfer:0}),fS=Xn(uS),hS=_({},go,{relatedTarget:0}),Vu=Xn(hS),dS=_({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),pS=Xn(dS),mS=_({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gS=Xn(mS),_S=_({},Ts,{data:0}),tm=Xn(_S),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=SS[e])?!!n[e]:!1}function ku(){return yS}var MS=_({},go,{key:function(e){if(e.key){var n=vS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ES=Xn(MS),bS=_({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Xn(bS),TS=_({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),AS=Xn(TS),RS=_({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=Xn(RS),wS=_({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Xn(wS),LS=_({},Ts,{newState:0,oldState:0}),US=Xn(LS),NS=[9,13,27,32],Xu=aa&&"CompositionEvent"in window,vo=null;aa&&"documentMode"in document&&(vo=document.documentMode);var OS=aa&&"TextEvent"in window&&!vo,nm=aa&&(!Xu||vo&&8<vo&&11>=vo),im=" ",am=!1;function sm(e,n){switch(e){case"keyup":return NS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function PS(e,n){switch(e){case"compositionend":return rm(n);case"keypress":return n.which!==32?null:(am=!0,im);case"textInput":return e=n.data,e===im&&am?null:e;default:return null}}function FS(e,n){if(lr)return e==="compositionend"||!Xu&&sm(e,n)?(e=Qp(),Ll=zu=Ba=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nm&&n.locale!=="ko"?null:n.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!IS[e.type]:n==="textarea"}function lm(e,n,a,o){rr?or?or.push(o):or=[o]:rr=o,n=bc(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var xo=null,So=null;function BS(e){X0(e,0)}function Fl(e){var n=bs(e);if(_n(n))return e}function cm(e,n){if(e==="change")return n}var um=!1;if(aa){var ju;if(aa){var Wu="oninput"in document;if(!Wu){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),Wu=typeof fm.oninput=="function"}ju=Wu}else ju=!1;um=ju&&(!document.documentMode||9<document.documentMode)}function hm(){xo&&(xo.detachEvent("onpropertychange",dm),So=xo=null)}function dm(e){if(e.propertyName==="value"&&Fl(So)){var n=[];lm(n,So,e,Fu(e)),Kp(BS,n)}}function zS(e,n,a){e==="focusin"?(hm(),xo=n,So=a,xo.attachEvent("onpropertychange",dm)):e==="focusout"&&hm()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(So)}function GS(e,n){if(e==="click")return Fl(n)}function VS(e,n){if(e==="input"||e==="change")return Fl(n)}function kS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:kS;function yo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ze.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mm(e,n){var a=pm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pm(a)}}function gm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _m(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function Yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var XS=aa&&"documentMode"in document&&11>=document.documentMode,cr=null,qu=null,Mo=null,Zu=!1;function vm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zu||cr==null||cr!==Xt(o)||(o=cr,"selectionStart"in o&&Yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&yo(Mo,o)||(Mo=o,o=bc(qu,"onSelect"),0<o.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=cr)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ur={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Ku={},xm={};aa&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Rs(e){if(Ku[e])return Ku[e];if(!ur[e])return e;var n=ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xm)return Ku[e]=n[a];return e}var Sm=Rs("animationend"),ym=Rs("animationiteration"),Mm=Rs("animationstart"),jS=Rs("transitionrun"),WS=Rs("transitionstart"),YS=Rs("transitioncancel"),Em=Rs("transitionend"),bm=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Di(e,n){bm.set(e,n),it(n,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],fr=0,Ju=0;function Bl(){for(var e=fr,n=Ju=fr=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var h=di[n];if(di[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Tm(a,u,h)}}function zl(e,n,a,o){di[fr++]=e,di[fr++]=n,di[fr++]=a,di[fr++]=o,Ju|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function $u(e,n,a,o){return zl(e,n,a,o),Hl(e)}function Cs(e,n){return zl(e,null,null,n),Hl(e)}function Tm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Hl(e){if(50<Xo)throw Xo=0,ch=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hr={};function qS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new qS(e,n,a,o)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Gl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")tf(e)&&(M=1);else if(typeof e=="string")M=$y(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ni(31,a,n,u),e.elementType=L,e.lanes=h,e;case A:return ws(a.children,u,h,n);case y:M=8,u|=24;break;case x:return e=ni(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case B:return e=ni(13,a,n,u),e.elementType=B,e.lanes=h,e;case P:return e=ni(19,a,n,u),e.elementType=P,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case R:M=9;break t;case U:M=11;break t;case H:M=14;break t;case b:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ws(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function ef(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Rm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function nf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Cm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Cm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var dr=[],pr=0,Vl=null,Eo=0,mi=[],gi=0,za=null,Hi=1,Gi="";function ra(e,n){dr[pr++]=Eo,dr[pr++]=Vl,Vl=e,Eo=n}function wm(e,n,a){mi[gi++]=Hi,mi[gi++]=Gi,mi[gi++]=za,za=e;var o=Hi;e=Gi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Hi=1<<32-Pt(n)+u|a<<u|o,Gi=h+e}else Hi=1<<h|a<<u|o,Gi=e}function af(e){e.return!==null&&(ra(e,1),wm(e,1,0))}function sf(e){for(;e===Vl;)Vl=dr[--pr],dr[pr]=null,Eo=dr[--pr],dr[pr]=null;for(;e===za;)za=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null}function Dm(e,n){mi[gi++]=Hi,mi[gi++]=Gi,mi[gi++]=za,Hi=n.id,Gi=n.overflow,za=e}var Tn=null,We=null,Ee=!1,Ha=null,_i=!1,rf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(pi(n,e)),rf}function Lm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[gn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Se(Wo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||q0(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ga(e,!0)}function Um(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Tn=Tn.return}}function mr(e){if(e!==Tn)return!1;if(!Ee)return Um(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bh(e.type,e.memoizedProps)),a=!a),a&&We&&Ga(e),Um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=i_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=i_(e)}else n===27?(n=We,es(e.type)?(e=wh,wh=null,We=e):We=n):We=Tn?xi(e.stateNode.nextSibling):null;return!0}function Ds(){We=Tn=null,Ee=!1}function of(){var e=Ha;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ha=null),e}function bo(e){Ha===null?Ha=[e]:Ha.push(e)}var lf=z(null),Ls=null,oa=null;function Va(e,n,a){_t(lf,n._currentValue),n._currentValue=a}function la(e){e._currentValue=lf.current,Z(lf)}function cf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function uf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),cf(h.return,a,e),o||(M=null);break t}h=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),cf(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function gr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;ei(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===xt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Qo):e=[Qo])}u=u.return}e!==null&&uf(n,e,a,o),n.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ls=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Nm(Ls,e)}function Xl(e,n){return Ls===null&&Us(e),Nm(e,n)}function Nm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(s(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var ZS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},KS=r.unstable_scheduleCallback,QS=r.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new ZS,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&KS(QS,function(){e.controller.abort()})}var Ao=null,hf=0,_r=0,vr=null;function JS(e,n){if(Ao===null){var a=Ao=[];hf=0,_r=mh(),vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hf++,n.then(Om,Om),n}function Om(){if(--hf===0&&Ao!==null){vr!==null&&(vr.status="fulfilled");var e=Ao;Ao=null,_r=0,vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Pm=N.S;N.S=function(e,n){v0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(e,n),Pm!==null&&Pm(e,n)};var Ns=z(null);function df(){var e=Ns.current;return e!==null?e:Xe.pooledCache}function jl(e,n){n===null?_t(Ns,Ns.current):_t(Ns,n.pool)}function Fm(){var e=df();return e===null?null:{parent:un._currentValue,pool:e}}var xr=Error(s(460)),pf=Error(s(474)),Wl=Error(s(542)),Yl={then:function(){}};function Im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hm(e),e;default:if(typeof n.status=="string")n.then(ia,ia);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hm(e),e}throw Ps=n,xr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,xr):a}}var Ps=null;function zm(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function Hm(e){if(e===xr||e===Wl)throw Error(s(483))}var Sr=null,Ro=0;function ql(e){var n=Ro;return Ro+=1,Sr===null&&(Sr=[]),Bm(Sr,e,n)}function Co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Gm(e){function n($,j){if(e){var at=$.deletions;at===null?($.deletions=[j],$.flags|=16):at.push(j)}}function a($,j){if(!e)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=sa($,j),$.index=0,$.sibling=null,$}function h($,j,at){return $.index=at,e?(at=$.alternate,at!==null?(at=at.index,at<j?($.flags|=67108866,j):at):($.flags|=67108866,j)):($.flags|=1048576,j)}function M($){return e&&$.alternate===null&&($.flags|=67108866),$}function C($,j,at,vt){return j===null||j.tag!==6?(j=ef(at,$.mode,vt),j.return=$,j):(j=u(j,at),j.return=$,j)}function V($,j,at,vt){var Jt=at.type;return Jt===A?mt($,j,at.props.children,vt,at.key):j!==null&&(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Os(Jt)===j.type)?(j=u(j,at.props),Co(j,at),j.return=$,j):(j=Gl(at.type,at.key,at.props,null,$.mode,vt),Co(j,at),j.return=$,j)}function st($,j,at,vt){return j===null||j.tag!==4||j.stateNode.containerInfo!==at.containerInfo||j.stateNode.implementation!==at.implementation?(j=nf(at,$.mode,vt),j.return=$,j):(j=u(j,at.children||[]),j.return=$,j)}function mt($,j,at,vt,Jt){return j===null||j.tag!==7?(j=ws(at,$.mode,vt,Jt),j.return=$,j):(j=u(j,at),j.return=$,j)}function St($,j,at){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ef(""+j,$.mode,at),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return at=Gl(j.type,j.key,j.props,null,$.mode,at),Co(at,j),at.return=$,at;case E:return j=nf(j,$.mode,at),j.return=$,j;case b:return j=Os(j),St($,j,at)}if(J(j)||W(j))return j=ws(j,$.mode,at,null),j.return=$,j;if(typeof j.then=="function")return St($,ql(j),at);if(j.$$typeof===D)return St($,Xl($,j),at);Zl($,j)}return null}function ct($,j,at,vt){var Jt=j!==null?j.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Jt!==null?null:C($,j,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===Jt?V($,j,at,vt):null;case E:return at.key===Jt?st($,j,at,vt):null;case b:return at=Os(at),ct($,j,at,vt)}if(J(at)||W(at))return Jt!==null?null:mt($,j,at,vt,null);if(typeof at.then=="function")return ct($,j,ql(at),vt);if(at.$$typeof===D)return ct($,j,Xl($,at),vt);Zl($,at)}return null}function ft($,j,at,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(at)||null,C(j,$,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return $=$.get(vt.key===null?at:vt.key)||null,V(j,$,vt,Jt);case E:return $=$.get(vt.key===null?at:vt.key)||null,st(j,$,vt,Jt);case b:return vt=Os(vt),ft($,j,at,vt,Jt)}if(J(vt)||W(vt))return $=$.get(at)||null,mt(j,$,vt,Jt,null);if(typeof vt.then=="function")return ft($,j,at,ql(vt),Jt);if(vt.$$typeof===D)return ft($,j,at,Xl(j,vt),Jt);Zl(j,vt)}return null}function kt($,j,at,vt){for(var Jt=null,De=null,Zt=j,de=j=0,Me=null;Zt!==null&&de<at.length;de++){Zt.index>de?(Me=Zt,Zt=null):Me=Zt.sibling;var Le=ct($,Zt,at[de],vt);if(Le===null){Zt===null&&(Zt=Me);break}e&&Zt&&Le.alternate===null&&n($,Zt),j=h(Le,j,de),De===null?Jt=Le:De.sibling=Le,De=Le,Zt=Me}if(de===at.length)return a($,Zt),Ee&&ra($,de),Jt;if(Zt===null){for(;de<at.length;de++)Zt=St($,at[de],vt),Zt!==null&&(j=h(Zt,j,de),De===null?Jt=Zt:De.sibling=Zt,De=Zt);return Ee&&ra($,de),Jt}for(Zt=o(Zt);de<at.length;de++)Me=ft(Zt,$,de,at[de],vt),Me!==null&&(e&&Me.alternate!==null&&Zt.delete(Me.key===null?de:Me.key),j=h(Me,j,de),De===null?Jt=Me:De.sibling=Me,De=Me);return e&&Zt.forEach(function(rs){return n($,rs)}),Ee&&ra($,de),Jt}function te($,j,at,vt){if(at==null)throw Error(s(151));for(var Jt=null,De=null,Zt=j,de=j=0,Me=null,Le=at.next();Zt!==null&&!Le.done;de++,Le=at.next()){Zt.index>de?(Me=Zt,Zt=null):Me=Zt.sibling;var rs=ct($,Zt,Le.value,vt);if(rs===null){Zt===null&&(Zt=Me);break}e&&Zt&&rs.alternate===null&&n($,Zt),j=h(rs,j,de),De===null?Jt=rs:De.sibling=rs,De=rs,Zt=Me}if(Le.done)return a($,Zt),Ee&&ra($,de),Jt;if(Zt===null){for(;!Le.done;de++,Le=at.next())Le=St($,Le.value,vt),Le!==null&&(j=h(Le,j,de),De===null?Jt=Le:De.sibling=Le,De=Le);return Ee&&ra($,de),Jt}for(Zt=o(Zt);!Le.done;de++,Le=at.next())Le=ft(Zt,$,de,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?de:Le.key),j=h(Le,j,de),De===null?Jt=Le:De.sibling=Le,De=Le);return e&&Zt.forEach(function(uM){return n($,uM)}),Ee&&ra($,de),Jt}function Ve($,j,at,vt){if(typeof at=="object"&&at!==null&&at.type===A&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var Jt=at.key;j!==null;){if(j.key===Jt){if(Jt=at.type,Jt===A){if(j.tag===7){a($,j.sibling),vt=u(j,at.props.children),vt.return=$,$=vt;break t}}else if(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Os(Jt)===j.type){a($,j.sibling),vt=u(j,at.props),Co(vt,at),vt.return=$,$=vt;break t}a($,j);break}else n($,j);j=j.sibling}at.type===A?(vt=ws(at.props.children,$.mode,vt,at.key),vt.return=$,$=vt):(vt=Gl(at.type,at.key,at.props,null,$.mode,vt),Co(vt,at),vt.return=$,$=vt)}return M($);case E:t:{for(Jt=at.key;j!==null;){if(j.key===Jt)if(j.tag===4&&j.stateNode.containerInfo===at.containerInfo&&j.stateNode.implementation===at.implementation){a($,j.sibling),vt=u(j,at.children||[]),vt.return=$,$=vt;break t}else{a($,j);break}else n($,j);j=j.sibling}vt=nf(at,$.mode,vt),vt.return=$,$=vt}return M($);case b:return at=Os(at),Ve($,j,at,vt)}if(J(at))return kt($,j,at,vt);if(W(at)){if(Jt=W(at),typeof Jt!="function")throw Error(s(150));return at=Jt.call(at),te($,j,at,vt)}if(typeof at.then=="function")return Ve($,j,ql(at),vt);if(at.$$typeof===D)return Ve($,j,Xl($,at),vt);Zl($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,j!==null&&j.tag===6?(a($,j.sibling),vt=u(j,at),vt.return=$,$=vt):(a($,j),vt=ef(at,$.mode,vt),vt.return=$,$=vt),M($)):a($,j)}return function($,j,at,vt){try{Ro=0;var Jt=Ve($,j,at,vt);return Sr=null,Jt}catch(Zt){if(Zt===xr||Zt===Wl)throw Zt;var De=ni(29,Zt,null,$.mode);return De.lanes=vt,De.return=$,De}}}var Fs=Gm(!0),Vm=Gm(!1),ka=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Hl(e),Tm(e,null,a),n}return zl(e,o,n,a),Hl(e)}function wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,er(e,a)}}function _f(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vf=!1;function Do(){if(vf){var e=vr;if(e!==null)throw e}}function Lo(e,n,a,o){vf=!1;var u=e.updateQueue;ka=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,st=V.next;V.next=null,M===null?h=st:M.next=st,M=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==M&&(C===null?mt.firstBaseUpdate=st:C.next=st,mt.lastBaseUpdate=V))}if(h!==null){var St=u.baseState;M=0,mt=st=V=null,C=h;do{var ct=C.lane&-536870913,ft=ct!==C.lane;if(ft?(ye&ct)===ct:(o&ct)===ct){ct!==0&&ct===_r&&(vf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,te=C;ct=n;var Ve=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){St=kt.call(Ve,St,ct);break t}St=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,ct=typeof kt=="function"?kt.call(Ve,St,ct):kt,ct==null)break t;St=_({},St,ct);break t;case 2:ka=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(st=mt=ft,V=St):mt=mt.next=ft,M|=ct;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(V=St),u.baseState=V,u.firstBaseUpdate=st,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),Ka|=M,e.lanes=M,e.memoizedState=St}}function km(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)km(a[e],n)}var yr=z(null),Kl=z(0);function jm(e,n){e=_a,_t(Kl,e),_t(yr,n),_a=e|n.baseLanes}function xf(){_t(Kl,_a),_t(yr,yr.current)}function Sf(){_a=Kl.current,Z(yr),Z(Kl)}var ii=z(null),vi=null;function Wa(e){var n=e.alternate;_t(sn,sn.current&1),_t(ii,e),vi===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(vi=e)}function yf(e){_t(sn,sn.current),_t(ii,e),vi===null&&(vi=e)}function Wm(e){e.tag===22?(_t(sn,sn.current),_t(ii,e),vi===null&&(vi=e)):Ya()}function Ya(){_t(sn,sn.current),_t(ii,ii.current)}function ai(e){Z(ii),vi===e&&(vi=null),Z(sn)}var sn=z(0);function Ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rh(a)||Ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,ue=null,He=null,fn=null,Jl=!1,Mr=!1,Is=!1,$l=0,Uo=0,Er=null,ty=0;function en(){throw Error(s(321))}function Mf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Ef(e,n,a,o,u,h){return ca=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?wg:Bf,Is=!1,h=a(o,u),Is=!1,Mr&&(h=qm(n,a,o,u)),Ym(e),h}function Ym(e){N.H=Po;var n=He!==null&&He.next!==null;if(ca=0,fn=He=ue=null,Jl=!1,Uo=0,Er=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&kl(e)&&(hn=!0))}function qm(e,n,a,o){ue=e;var u=0;do{if(Mr&&(Er=null),Uo=0,Mr=!1,25<=u)throw Error(s(301));if(u+=1,fn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=Dg,h=n(a,o)}while(Mr);return h}function ey(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?No(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ue.flags|=1024),n}function bf(){var e=$l!==0;return $l=0,e}function Tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Af(e){if(Jl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Jl=!1}ca=0,fn=He=ue=null,Mr=!1,Uo=$l=0,Er=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ue.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(He===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=fn===null?ue.memoizedState:fn.next;if(n!==null)fn=n,He=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},fn===null?ue.memoizedState=fn=e:fn=fn.next=e}return fn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var n=Uo;return Uo+=1,Er===null&&(Er=[]),e=Bm(Er,e,n),n=ue,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?wg:Bf),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===D)return An(e)}throw Error(s(438,String(e)))}function Rf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=X;return n.index++,a}function ua(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=rn();return Cf(n,He,e)}function Cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=M=null,V=null,st=n,mt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(ye&St)===St:(ca&St)===St){var ct=st.revertLane;if(ct===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===_r&&(mt=!0);else if((ca&ct)===ct){st=st.next,ct===_r&&(mt=!0);continue}else St={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(C=V=St,M=h):V=V.next=St,ue.lanes|=ct,Ka|=ct;St=st.action,Is&&a(h,St),h=st.hasEagerState?st.eagerState:a(h,St)}else ct={lane:St,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},V===null?(C=V=ct,M=h):V=V.next=ct,ue.lanes|=St,Ka|=St;st=st.next}while(st!==null&&st!==n);if(V===null?M=h:V.next=C,!ei(h,e.memoizedState)&&(hn=!0,mt&&(a=vr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);ei(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Zm(e,n,a){var o=ue,u=rn(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ei((He||u).memoizedState,a);if(M&&(u.memoizedState=a,hn=!0),u=u.queue,Uf(Jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},Qm.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));h||(ca&127)!==0||Km(o,n,a)}return a}function Km(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=tc(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qm(e,n,a,o){n.value=a,n.getSnapshot=o,$m(n)&&tg(e)}function Jm(e,n,a){return a(function(){$m(n)&&tg(e)})}function $m(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function tg(e){var n=Cs(e,2);n!==null&&Zn(n,e,2)}function Df(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Is){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},n}function eg(e,n,a,o){return e.baseState=a,Cf(e,He,typeof o=="function"?o:ua)}function ny(e,n,a,o,u){if(sc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};N.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,ng(n,h)):(h.next=a.next,n.pending=a.next=h)}}function ng(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=N.T,M={};N.T=M;try{var C=a(u,o),V=N.S;V!==null&&V(M,C),ig(e,n,C)}catch(st){Lf(e,n,st)}finally{h!==null&&M.types!==null&&(h.types=M.types),N.T=h}}else try{h=a(u,o),ig(e,n,h)}catch(st){Lf(e,n,st)}}function ig(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ag(e,n,o)},function(o){return Lf(e,n,o)}):ag(e,n,a)}function ag(e,n,a){n.status="fulfilled",n.value=a,sg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ng(e,a)))}function Lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sg(n),n=n.next;while(n!==o)}e.action=null}function sg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rg(e,n){return n}function og(e,n){if(Ee){var a=Xe.formState;if(a!==null){t:{var o=ue;if(Ee){if(We){e:{for(var u=We,h=_i;u.nodeType!==8;){if(!h){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){We=xi(u.nextSibling),o=u.data==="F!";break t}}Ga(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:n},a.queue=o,a=Ag.bind(null,ue,o),o.dispatch=a,o=Df(!1),h=If.bind(null,ue,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ny.bind(null,ue,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function lg(e){var n=rn();return cg(n,He,e)}function cg(e,n,a){if(n=Cf(e,n,rg)[0],e=nc(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(M){throw M===xr?Wl:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,br(9,{destroy:void 0},iy.bind(null,u,a),null)),[o,h,e]}function iy(e,n){e.action=n}function ug(e){var n=rn(),a=He;if(a!==null)return cg(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=tc(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function fg(){return rn().memoizedState}function ic(e,n,a,o){var u=Gn();ue.flags|=e,u.memoizedState=br(1|n,{destroy:void 0},a,o===void 0?null:o)}function ac(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&Mf(o,He.memoizedState.deps)?u.memoizedState=br(n,h,a,o):(ue.flags|=e,u.memoizedState=br(1|n,h,a,o))}function hg(e,n){ic(8390656,8,e,n)}function Uf(e,n){ac(2048,8,e,n)}function ay(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=tc(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function dg(e){var n=rn().memoizedState;return ay({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function pg(e,n){return ac(4,2,e,n)}function mg(e,n){return ac(4,4,e,n)}function gg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _g(e,n,a){a=a!=null?a.concat([e]):null,ac(4,4,gg.bind(null,n,e),a)}function Nf(){}function vg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Mf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Mf(n,o[1]))return o[0];if(o=e(),Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Of(e,n,a){return a===void 0||(ca&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=S0(),ue.lanes|=e,Ka|=e,a)}function Sg(e,n,a,o){return ei(a,n)?a:yr.current!==null?(e=Of(e,a,o),ei(e,n)||(hn=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=S0(),ue.lanes|=e,Ka|=e,n)}function yg(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var M=N.T,C={};N.T=C,If(e,!1,n,a);try{var V=u(),st=N.S;if(st!==null&&st(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=$S(V,o);Oo(e,n,mt,oi(e))}else Oo(e,n,o,oi(e))}catch(St){Oo(e,n,{then:function(){},status:"rejected",reason:St},oi())}finally{G.p=h,M!==null&&C.types!==null&&(M.types=C.types),N.T=M}}function sy(){}function Pf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Mg(e).queue;yg(e,u,n,ot,a===null?sy:function(){return Eg(e),a(o)})}function Mg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Eg(e){var n=Mg(e);n.next===null&&(n=e.alternate.memoizedState),Oo(e,n.next.queue,{},oi())}function Ff(){return An(Qo)}function bg(){return rn().memoizedState}function Tg(){return rn().memoizedState}function ry(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Xa(a);var o=ja(n,e,a);o!==null&&(Zn(o,n,a),wo(o,n,a)),n={cache:ff()},e.payload=n;return}n=n.return}}function oy(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(e)?Rg(n,a):(a=$u(e,n,a,o),a!==null&&(Zn(a,e,o),Cg(a,n,o)))}function Ag(e,n,a){var o=oi();Oo(e,n,a,o)}function Oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(e))Rg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,C=h(M,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,M))return zl(e,n,u,0),Xe===null&&Bl(),!1}catch{}if(a=$u(e,n,u,o),a!==null)return Zn(a,e,o),Cg(a,n,o),!0}return!1}function If(e,n,a,o){if(o={lane:2,revertLane:mh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(n)throw Error(s(479))}else n=$u(e,a,o,2),n!==null&&Zn(n,e,2)}function sc(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Rg(e,n){Mr=Jl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,er(e,a)}}var Po={readContext:An,use:ec,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Po.useEffectEvent=en;var wg={readContext:An,use:ec,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:hg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ic(4194308,4,gg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Is){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oy.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Df(e);var n=e.queue,a=Ag.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Nf,useDeferredValue:function(e,n){var a=Gn();return Of(a,e,n)},useTransition:function(){var e=Df(!1);return e=yg.bind(null,ue,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Gn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ye&127)!==0||Km(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,hg(Jm.bind(null,o,h,e),[e]),o.flags|=2048,br(9,{destroy:void 0},Qm.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=Xe.identifierPrefix;if(Ee){var a=Gi,o=Hi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ff,useFormState:og,useActionState:og,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Rf,useCacheRefresh:function(){return Gn().memoizedState=ry.bind(null,ue)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bf={readContext:An,use:ec,useCallback:vg,useContext:An,useEffect:Uf,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:nc,useRef:fg,useState:function(){return nc(ua)},useDebugValue:Nf,useDeferredValue:function(e,n){var a=rn();return Sg(a,He.memoizedState,e,n)},useTransition:function(){var e=nc(ua)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Zm,useId:bg,useHostTransitionStatus:Ff,useFormState:lg,useActionState:lg,useOptimistic:function(e,n){var a=rn();return eg(a,He,e,n)},useMemoCache:Rf,useCacheRefresh:Tg};Bf.useEffectEvent=dg;var Dg={readContext:An,use:ec,useCallback:vg,useContext:An,useEffect:Uf,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:wf,useRef:fg,useState:function(){return wf(ua)},useDebugValue:Nf,useDeferredValue:function(e,n){var a=rn();return He===null?Of(a,e,n):Sg(a,He.memoizedState,e,n)},useTransition:function(){var e=wf(ua)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Zm,useId:bg,useHostTransitionStatus:Ff,useFormState:ug,useActionState:ug,useOptimistic:function(e,n){var a=rn();return He!==null?eg(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Tg};Dg.useEffectEvent=dg;function zf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,o),n!==null&&(Zn(n,e,o),wo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,o),n!==null&&(Zn(n,e,o),wo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=ja(e,o,a),n!==null&&(Zn(n,e,a),wo(n,e,a))}};function Lg(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!yo(a,o)||!yo(u,h):!0}function Ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Hf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ng(e){Il(e)}function Og(e){console.error(e)}function Pg(e){Il(e)}function rc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Fg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gf(e,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(e,n)},a}function Ig(e){return e=Xa(e),e.tag=3,e}function Bg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Fg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Fg(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&gr(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?vc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),hh(e,o,u)),!1;case 22:return a.flags|=65536,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),hh(e,o,u)),!1}throw Error(s(435,a.tag))}return hh(e,o,u),vc(),!1}if(Ee)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==rf&&(e=Error(s(422),{cause:o}),bo(pi(e,a)))):(o!==rf&&(n=Error(s(423),{cause:o}),bo(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=Gf(e.stateNode,o,u),_f(e,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=pi(h,a),ko===null?ko=[h]:ko.push(h),nn!==4&&(nn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Gf(a.stateNode,o,e),_f(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ig(u),Bg(u,e,a,o),_f(a,u),!1}a=a.return}while(a!==null);return!1}var Vf=Error(s(461)),hn=!1;function Rn(e,n,a,o){n.child=e===null?Vm(n,null,a,o):Fs(n,e.child,a,o)}function zg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return Us(n),o=Ef(e,n,a,M,h,u),C=bf(),e!==null&&!hn?(Tf(e,n,u),fa(e,n,u)):(Ee&&C&&af(n),n.flags|=1,Rn(e,n,o,u),n.child)}function Hg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!tf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Gg(e,n,h,o,u)):(e=Gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Kf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(M,o)&&e.ref===n.ref)return fa(e,n,u)}return n.flags|=1,e=sa(h,o),e.ref=n.ref,e.return=n,n.child=e}function Gg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(yo(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Kf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,fa(e,n,u)}return kf(e,n,a,o,u)}function Vg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return kg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(n,h!==null?h.cachePool:null),h!==null?jm(n,h):xf(),Wm(n);else return o=n.lanes=536870912,kg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(jl(n,h.cachePool),jm(n,h),Ya(),n.memoizedState=null):(e!==null&&jl(n,null),xf(),Ya());return Rn(e,n,u,a),n.child}function Fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function kg(e,n,a,o,u){var h=df();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&jl(n,null),xf(),Wm(n),e!==null&&gr(e,n,o,!0),n.childLanes=u,null}function oc(e,n){return n=cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Xg(e,n,a){return Fs(n,e.child,null,a),e=oc(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function cy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=oc(n,o),n.lanes=536870912,Fo(null,e);if(yf(n),(e=We)?(e=n_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Rm(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return oc(n,o)}var h=e.memoizedState;if(h!==null){var M=h.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=Xg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||gr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Xe,o!==null&&(M=Al(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,Cs(e,M),Zn(o,e,M),Vf;vc(),n=Xg(e,n,a)}else e=h.treeContext,We=xi(M.nextSibling),Tn=n,Ee=!0,Ha=null,_i=!1,e!==null&&Dm(n,e),n=oc(n,o),n.flags|=4096;return n}return e=sa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function kf(e,n,a,o,u){return Us(n),a=Ef(e,n,a,o,void 0,u),o=bf(),e!==null&&!hn?(Tf(e,n,u),fa(e,n,u)):(Ee&&o&&af(n),n.flags|=1,Rn(e,n,a,u),n.child)}function jg(e,n,a,o,u,h){return Us(n),n.updateQueue=null,a=qm(n,o,a,u),Ym(e),o=bf(),e!==null&&!hn?(Tf(e,n,h),fa(e,n,h)):(Ee&&o&&af(n),n.flags|=1,Rn(e,n,a,h),n.child)}function Wg(e,n,a,o,u){if(Us(n),n.stateNode===null){var h=hr,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Hf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},mf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):hr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(zf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Hf.enqueueReplaceState(h,h.state,null),Lo(n,o,h,u),Do(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,V=Bs(a,C);h.props=V;var st=h.context,mt=a.contextType;M=hr,typeof mt=="object"&&mt!==null&&(M=An(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||st!==M)&&Ug(n,h,o,M),ka=!1;var ct=n.memoizedState;h.state=ct,Lo(n,o,h,u),Do(),st=n.memoizedState,C||ct!==st||ka?(typeof St=="function"&&(zf(n,a,St,o),st=n.memoizedState),(V=ka||Lg(n,a,V,o,ct,st,M))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=M,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,gf(e,n),M=n.memoizedProps,mt=Bs(a,M),h.props=mt,St=n.pendingProps,ct=h.context,st=a.contextType,V=hr,typeof st=="object"&&st!==null&&(V=An(st)),C=a.getDerivedStateFromProps,(st=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==St||ct!==V)&&Ug(n,h,o,V),ka=!1,ct=n.memoizedState,h.state=ct,Lo(n,o,h,u),Do();var ft=n.memoizedState;M!==St||ct!==ft||ka||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof C=="function"&&(zf(n,a,C,o),ft=n.memoizedState),(mt=ka||Lg(n,a,mt,o,ct,ft,V)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(st||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=V,o=mt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,lc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Fs(n,e.child,null,u),n.child=Fs(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=fa(e,n,u),e}function Yg(e,n,a,o){return Ds(),n.flags|=256,Rn(e,n,a,o),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:Fm()}}function Wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function qg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Wa(n):Ya(),(e=We)?(e=n_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Rm(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Ga(n);return Ch(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ya(),u=n.mode,C=cc({mode:"hidden",children:C},u),o=ws(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=jf(a),o.childLanes=Wf(e,M,a),n.memoizedState=Xf,Fo(null,o)):(Wa(n),Yf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(h)n.flags&256?(Wa(n),n.flags&=-257,n=qf(e,n,a)):n.memoizedState!==null?(Ya(),n.child=e.child,n.flags|=128,n=null):(Ya(),C=o.fallback,u=n.mode,o=cc({mode:"visible",children:o.children},u),C=ws(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Fs(n,e.child,null,a),o=n.child,o.memoizedState=jf(a),o.childLanes=Wf(e,M,a),n.memoizedState=Xf,n=Fo(null,o));else if(Wa(n),Ch(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,bo({value:o,source:null,stack:null}),n=qf(e,n,a)}else if(hn||gr(e,n,a,!1),M=(a&e.childLanes)!==0,hn||M){if(M=Xe,M!==null&&(o=Al(M,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Cs(e,o),Zn(M,e,o),Vf;Rh(C)||vc(),n=qf(e,n,a)}else Rh(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,We=xi(C.nextSibling),Tn=n,Ee=!0,Ha=null,_i=!1,e!==null&&Dm(n,e),n=Yf(n,o.children),n.flags|=4096);return n}return u?(Ya(),C=o.fallback,u=n.mode,V=e.child,st=V.sibling,o=sa(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,st!==null?C=sa(st,C):(C=ws(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Fo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=jf(a):(u=C.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Fm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Wf(e,M,a),n.memoizedState=Xf,Fo(e.child,o)):(Wa(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Yf(e,n){return n=cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cc(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function qf(e,n,a){return Fs(n,e.child,null,a),e=Yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),cf(e.return,n,a)}function Zf(e,n,a,o,u,h){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function Kg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=sn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,_t(sn,M),Rn(e,n,o,a),o=Ee?Eo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zg(e,a,n);else if(e.tag===19)Zg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ql(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ql(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zf(n,!0,a,null,h,o);break;case"together":Zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Kf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function uy(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Va(n,un,e.memoizedState.cache),Ds();break;case 27:case 5:jt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qg(e,n,a):(Wa(n),e=fa(e,n,a),e!==null?e.sibling:null);Wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(gr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Kg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Vg(e,n,a,n.pendingProps);case 24:Va(n,un,e.memoizedState.cache)}return fa(e,n,a)}function Qg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Kf(e,a)&&(n.flags&128)===0)return hn=!1,uy(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&wm(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")tf(e)?(o=Bs(e,o),n.tag=1,n=Wg(null,n,e,o,a)):(n.tag=0,n=kf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=zg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=Hg(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return kf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),Wg(e,n,o,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,gf(e,n),Lo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Va(n,un,o),o!==h.cache&&uf(n,[un],a,!0),Do(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Yg(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),bo(u),n=Yg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=xi(e.firstChild),Tn=n,Ee=!0,Ha=null,_i=!0,a=Vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),o===u){n=fa(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return lc(e,n),e===null?(a=l_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Tc(rt.current).createElement(a),o[on]=n,o[gn]=e,Cn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=l_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Ee&&(o=n.stateNode=s_(n.type,n.pendingProps,rt.current),Tn=n,_i=!0,u=We,es(n.type)?(wh=u,We=xi(o.firstChild)):We=u),Rn(e,n,n.pendingProps.children,a),lc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=We)&&(o=Hy(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Tn=n,We=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Ga(n)),jt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,bh(u,h)?o=null:M!==null&&bh(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Ef(e,n,ey,null,null,a),Qo._currentValue=u),lc(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=We)&&(a=Gy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Tn=n,We=null,e=!0):e=!1),e||Ga(n)),null;case 13:return qg(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Fs(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return zg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Va(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return Hg(e,n,n.type,n.pendingProps,a);case 15:return Gg(e,n,n.type,n.pendingProps,a);case 19:return Kg(e,n,a);case 31:return cy(e,n,a);case 22:return Vg(e,n,a,n.pendingProps);case 24:return Us(n),o=An(un),e===null?(u=df(),u===null&&(u=Xe,h=ff(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},mf(n),Va(n,un,u)):((e.lanes&a)!==0&&(gf(e,n),Lo(n,null,null,a),Do()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Va(n,un,o)):(o=h.cache,Va(n,un,o),o!==u.cache&&uf(n,[un],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(e){e.flags|=4}function Qf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(b0())e.flags|=8192;else throw Ps=Yl,pf}else e.flags&=-16777217}function Jg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!d_(n))if(b0())e.flags|=8192;else throw Ps=Yl,pf}function uc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,Cr|=n)}function Io(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fy(e,n,a){var o=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(un),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mr(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),Ye(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ha(n),h!==null?(Ye(n),Jg(n,h)):(Ye(n),Qf(n,u,null,o,a))):h?h!==e.memoizedState?(ha(n),Ye(n),Jg(n,h)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ha(n),Ye(n),Qf(n,u,e,o,a)),null;case 27:if($t(n),a=rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=Et.current,mr(n)?Lm(n):(e=s_(u,o,a),n.stateNode=e,ha(n))}return Ye(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(h=Et.current,mr(n))Lm(n);else{var M=Tc(rt.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[on]=n,h[gn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ha(n)}}return Ye(n),Qf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=rt.current,mr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||q0(e.nodeValue,a)),e||Ga(n,!0)}else e=Tc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=mr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=mr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),uc(n,n.updateQueue),Ye(n),null);case 4:return Gt(),e===null&&xh(n.stateNode.containerInfo),Ye(n),null;case 10:return la(n.type),Ye(n),null;case 19:if(Z(sn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Io(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ql(e),h!==null){for(n.flags|=128,Io(o,!1),e=h.updateQueue,n.updateQueue=e,uc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Am(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ee&&ra(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>mc&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ql(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,uc(n,e),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Ye(n),null}else 2*T()-o.renderingStartTime>mc&&a!==536870912&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),Ee&&ra(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return ai(n),Sf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&uc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Ns),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(un),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hy(e,n){switch(sf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(un),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(sn),null;case 4:return Gt(),null;case 10:return la(n.type),null;case 22:case 23:return ai(n),Sf(),e!==null&&Z(Ns),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(un),null;case 25:return null;default:return null}}function $g(e,n){switch(sf(n),n.tag){case 3:la(un),Gt();break;case 26:case 27:case 5:$t(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Z(sn);break;case 10:la(n.type);break;case 22:case 23:ai(n),Sf(),e!==null&&Z(Ns);break;case 24:la(un)}}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){Be(n,n.return,C)}}function qa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var V=a,st=C;try{st()}catch(mt){Be(u,V,mt)}}}o=o.next}while(o!==h)}}catch(mt){Be(n,n.return,mt)}}function t0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xm(n,a)}catch(o){Be(e,e.return,o)}}}function e0(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function zo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Vi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function n0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Jf(e,n,a){try{var o=e.stateNode;Oy(o,e.type,a,n),o[gn]=n}catch(u){Be(e,e.return,u)}}function i0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function $f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||i0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function th(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(th(e,n,a),e=e.sibling;e!==null;)th(e,n,a),e=e.sibling}function fc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fc(e,n,a),e=e.sibling;e!==null;)fc(e,n,a),e=e.sibling}function a0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[on]=e,n[gn]=a}catch(h){Be(e,e.return,h)}}var da=!1,dn=!1,eh=!1,s0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function dy(e,n){if(e=e.containerInfo,Mh=Uc,e=_m(e),Yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,C=-1,V=-1,st=0,mt=0,St=e,ct=null;e:for(;;){for(var ft;St!==a||u!==0&&St.nodeType!==3||(C=M+u),St!==h||o!==0&&St.nodeType!==3||(V=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(ft=St.firstChild)!==null;)ct=St,St=ft;for(;;){if(St===e)break e;if(ct===a&&++st===u&&(C=M),ct===h&&++mt===o&&(V=M),(ft=St.nextSibling)!==null)break;St=ct,ct=St.parentNode}St=ft}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eh={focusedElem:e,selectionRange:a},Uc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=Bs(a.type,u);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ah(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ah(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function r0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),o&4&&Bo(5,a);break;case 1:if(ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Be(a,a.return,M)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Be(a,a.return,M)}}o&64&&t0(a),o&512&&zo(a,a.return);break;case 3:if(ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xm(e,n)}catch(M){Be(a,a.return,M)}}break;case 27:n===null&&o&4&&a0(a);case 26:case 5:ma(e,a),n===null&&o&4&&n0(a),o&512&&zo(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),o&4&&c0(e,a);break;case 13:ma(e,a),o&4&&u0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=My.bind(null,a),Vy(e,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||dn,u=da;var h=dn;da=o,(dn=n)&&!h?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),da=u,dn=h}break;case 30:break;default:ma(e,a)}}function o0(e){var n=e.alternate;n!==null&&(e.alternate=null,o0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ho(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,jn=!1;function pa(e,n,a){for(a=a.child;a!==null;)l0(e,n,a),a=a.sibling}function l0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:dn||Vi(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Vi(a,n);var o=Je,u=jn;es(a.type)&&(Je=a.stateNode,jn=!1),pa(e,n,a),qo(a.stateNode),Je=o,jn=u;break;case 5:dn||Vi(a,n);case 6:if(o=Je,u=jn,Je=null,pa(e,n,a),Je=o,jn=u,Je!==null)if(jn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Je.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Je!==null&&(jn?(e=Je,t_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fr(e)):t_(Je,a.stateNode));break;case 4:o=Je,u=jn,Je=a.stateNode.containerInfo,jn=!0,pa(e,n,a),Je=o,jn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),dn||qa(4,a,n),pa(e,n,a);break;case 1:dn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&e0(a,n,o)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,pa(e,n,a),dn=o;break;default:pa(e,n,a)}}function c0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(a){Be(n,n.return,a)}}}function u0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(a){Be(n,n.return,a)}}function py(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new s0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new s0),n;default:throw Error(s(435,e.tag))}}function hc(e,n){var a=py(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ey.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(es(C.type)){Je=C.stateNode,jn=!1;break t}break;case 5:Je=C.stateNode,jn=!1;break t;case 3:case 4:Je=C.stateNode.containerInfo,jn=!0;break t}C=C.return}if(Je===null)throw Error(s(160));l0(h,M,u),Je=null,jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)f0(n,e),n=n.sibling}var Li=null;function f0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(qa(3,e,e.return),Bo(3,e),qa(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&64&&da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Es]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[on]=e,Y(h),o=h;break t;case"link":var M=f_("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(h=M[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=f_("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(h=M[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=e,Y(h),o=h}e.stateNode=o}else h_(u,e.type,e.stateNode);else e.stateNode=u_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?h_(u,e.type,e.stateNode):u_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Jf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),a!==null&&o&4&&Jf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Jf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(eh=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(Cc=null,u=Li,Li=Ac(n.containerInfo),Wn(n,e),Li=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(kt){Be(e,e.return,kt)}eh&&(eh=!1,h0(e));break;case 4:o=Li,Li=Ac(e.stateNode.containerInfo),Wn(n,e),Yn(e),Li=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,st=da,mt=dn;if(da=st||u,dn=mt||V,Wn(n,e),dn=mt,da=st,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||da||dn||zs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var St=V.memoizedProps.style,ct=St!=null&&St.hasOwnProperty("display")?St.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(kt){Be(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(kt){Be(V,V.return,kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;u?e_(ft,!0):e_(V.stateNode,!1)}catch(kt){Be(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hc(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(i0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=$f(e);fc(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Hn(M,""),a.flags&=-33);var C=$f(e);fc(e,C,M);break;case 3:case 4:var V=a.stateNode.containerInfo,st=$f(e);th(e,st,V);break;default:throw Error(s(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;h0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)r0(e,n.alternate,n),n=n.sibling}function zs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),zs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&e0(n,n.return,a),zs(n);break;case 27:qo(n.stateNode);case 26:case 5:Vi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:ga(u,h,a),Bo(4,h);break;case 1:if(ga(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Be(o,o.return,st)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)km(V[u],C)}catch(st){Be(o,o.return,st)}}a&&M&64&&t0(h),zo(h,h.return);break;case 27:a0(h);case 26:case 5:ga(u,h,a),a&&o===null&&M&4&&n0(h),zo(h,h.return);break;case 12:ga(u,h,a);break;case 31:ga(u,h,a),a&&M&4&&c0(u,h);break;case 13:ga(u,h,a),a&&M&4&&u0(u,h);break;case 22:h.memoizedState===null&&ga(u,h,a),zo(h,h.return);break;case 30:break;default:ga(u,h,a)}n=n.sibling}}function nh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&To(a))}function ih(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)d0(e,n,a,o),n=n.sibling}function d0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&Bo(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,C=h.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Be(n,n.return,V)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ui(e,n,a,o):Ho(e,n):h._visibility&2?Ui(e,n,a,o):(h._visibility|=2,Tr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&nh(M,n);break;case 24:Ui(e,n,a,o),u&2048&&ih(n.alternate,n);break;default:Ui(e,n,a,o)}}function Tr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,M=n,C=a,V=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:Tr(h,M,C,V,u),Bo(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?Tr(h,M,C,V,u):Ho(h,M):(mt._visibility|=2,Tr(h,M,C,V,u)),u&&st&2048&&nh(M.alternate,M);break;case 24:Tr(h,M,C,V,u),u&&st&2048&&ih(M.alternate,M);break;default:Tr(h,M,C,V,u)}n=n.sibling}}function Ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ho(a,o),u&2048&&nh(o.alternate,o);break;case 24:Ho(a,o),u&2048&&ih(o.alternate,o);break;default:Ho(a,o)}n=n.sibling}}var Go=8192;function Ar(e,n,a){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)p0(e,n,a),e=e.sibling}function p0(e,n,a){switch(e.tag){case 26:Ar(e,n,a),e.flags&Go&&e.memoizedState!==null&&tM(a,Li,e.memoizedState,e.memoizedProps);break;case 5:Ar(e,n,a);break;case 3:case 4:var o=Li;Li=Ac(e.stateNode.containerInfo),Ar(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Ar(e,n,a),Go=o):Ar(e,n,a));break;default:Ar(e,n,a)}}function m0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,_0(o,e)}m0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g0(e),e=e.sibling}function g0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,dc(e)):Vo(e);break;default:Vo(e)}}function dc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,_0(o,e)}m0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,dc(n));break;default:dc(n)}e=e.sibling}}function _0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(o0(o),o===a){Mn=null;break t}if(u!==null){u.return=h,Mn=u;break t}Mn=h}}}var my={getCacheForType:function(e){var n=An(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(un).controller.signal}},gy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,xe=null,ye=0,Ie=0,si=null,Za=!1,Rr=!1,ah=!1,_a=0,nn=0,Ka=0,Hs=0,sh=0,ri=0,Cr=0,ko=null,qn=null,rh=!1,pc=0,v0=0,mc=1/0,gc=null,Qa=null,vn=0,Ja=null,wr=null,va=0,oh=0,lh=null,x0=null,Xo=0,ch=null;function oi(){return(Ne&2)!==0&&ye!==0?ye&-ye:N.T!==null?mh():zi()}function S0(){if(ri===0)if((ye&536870912)===0||Ee){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Zn(e,n,a){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Dr(e,0),$a(e,ye,ri,!1)),In(e,a),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(Hs|=a),nn===4&&$a(e,ye,ri,!1)),ki(e))}function y0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?xy(e,n):fh(e,n,!0),h=o;do{if(u===0){Rr&&!o&&$a(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!_y(a)){u=fh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=ko;var V=C.current.memoizedState.isDehydrated;if(V&&(Dr(C,M).flags|=256),M=fh(C,M,!1),M!==2){if(ah&&!V){C.errorRecoveryDisabledLanes|=h,Hs|=h,u=4;break t}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){Dr(e,0),$a(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,ri,!Za);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=pc+300-T(),10<u)){if($a(o,n,ri,!Za),dt(o,0,!0)!==0)break t;va=n,o.timeoutHandle=J0(M0.bind(null,o,a,qn,gc,rh,n,ri,Hs,Cr,Za,h,"Throttled",-0,0),u);break t}M0(o,a,qn,gc,rh,n,ri,Hs,Cr,Za,h,null,-0,0)}}break}while(!0);ki(e)}function M0(e,n,a,o,u,h,M,C,V,st,mt,St,ct,ft){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},p0(n,h,St);var kt=(h&62914560)===h?pc-T():(h&4194048)===h?v0-T():0;if(kt=eM(St,kt),kt!==null){va=h,e.cancelPendingCommit=kt(D0.bind(null,e,n,h,a,o,u,M,C,V,mt,St,null,ct,ft)),$a(e,h,M,!st);return}}D0(e,n,h,a,o,u,M,C,V)}function _y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ei(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(e,n,a,o){n&=~sh,n&=~Hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&fo(e,a,n)}function _c(){return(Ne&6)===0?(jo(0),!1):!0}function uh(){if(xe!==null){if(Ie===0)var e=xe.return;else e=xe,oa=Ls=null,Af(e),Sr=null,Ro=0,e=xe;for(;e!==null;)$g(e.alternate,e),e=e.return;xe=null}}function Dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,uh(),Xe=e,xe=a=sa(e.current,null),ye=n,Ie=0,si=null,Za=!1,Rr=Ht(e,n),ah=!1,Cr=ri=sh=Hs=Ka=nn=0,qn=ko=null,rh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return _a=n,Bl(),a}function E0(e,n){ue=null,N.H=Po,n===xr||n===Wl?(n=zm(),Ie=3):n===pf?(n=zm(),Ie=4):Ie=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,xe===null&&(nn=1,rc(e,pi(n,e.current)))}function b0(){var e=ii.current;return e===null?!0:(ye&4194048)===ye?vi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===vi:!1}function T0(){var e=N.H;return N.H=Po,e===null?Po:e}function A0(){var e=N.A;return N.A=my,e}function vc(){nn=4,Za||(ye&4194048)!==ye&&ii.current!==null||(Rr=!0),(Ka&134217727)===0&&(Hs&134217727)===0||Xe===null||$a(Xe,ye,ri,!1)}function fh(e,n,a){var o=Ne;Ne|=2;var u=T0(),h=A0();(Xe!==e||ye!==n)&&(gc=null,Dr(e,n)),n=!1;var M=nn;t:do try{if(Ie!==0&&xe!==null){var C=xe,V=si;switch(Ie){case 8:uh(),M=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var st=Ie;if(Ie=0,si=null,Lr(e,C,V,st),a&&Rr){M=0;break t}break;default:st=Ie,Ie=0,si=null,Lr(e,C,V,st)}}vy(),M=nn;break}catch(mt){E0(e,mt)}while(!0);return n&&e.shellSuspendCounter++,oa=Ls=null,Ne=o,N.H=u,N.A=h,xe===null&&(Xe=null,ye=0,Bl()),M}function vy(){for(;xe!==null;)R0(xe)}function xy(e,n){var a=Ne;Ne|=2;var o=T0(),u=A0();Xe!==e||ye!==n?(gc=null,mc=T()+500,Dr(e,n)):Rr=Ht(e,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var h=si;e:switch(Ie){case 1:Ie=0,si=null,Lr(e,n,h,1);break;case 2:case 9:if(Im(h)){Ie=0,si=null,C0(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),ki(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Im(h)?(Ie=0,si=null,C0(n)):(Ie=0,si=null,Lr(e,n,h,7));break;case 5:var M=null;switch(xe.tag){case 26:M=xe.memoizedState;case 5:case 27:var C=xe;if(M?d_(M):C.stateNode.complete){Ie=0,si=null;var V=C.sibling;if(V!==null)xe=V;else{var st=C.return;st!==null?(xe=st,xc(st)):xe=null}break e}}Ie=0,si=null,Lr(e,n,h,5);break;case 6:Ie=0,si=null,Lr(e,n,h,6);break;case 8:uh(),nn=6;break t;default:throw Error(s(462))}}Sy();break}catch(mt){E0(e,mt)}while(!0);return oa=Ls=null,N.H=o,N.A=u,Ne=a,xe!==null?0:(Xe=null,ye=0,Bl(),nn)}function Sy(){for(;xe!==null&&!qt();)R0(xe)}function R0(e){var n=Qg(e.alternate,e,_a);e.memoizedProps=e.pendingProps,n===null?xc(e):xe=n}function C0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=jg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Af(n);default:$g(a,n),n=xe=Am(n,_a),n=Qg(a,n,_a)}e.memoizedProps=e.pendingProps,n===null?xc(e):xe=n}function Lr(e,n,a,o){oa=Ls=null,Af(n),Sr=null,Ro=0;var u=n.return;try{if(ly(e,u,n,a,ye)){nn=1,rc(e,pi(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;nn=1,rc(e,pi(a,e.current)),xe=null;return}n.flags&32768?(Ee||o===1?e=!0:Rr||(ye&536870912)!==0?e=!1:(Za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),w0(n,e)):xc(n)}function xc(e){var n=e;do{if((n.flags&32768)!==0){w0(n,Za);return}e=n.return;var a=fy(n.alternate,n,_a);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function w0(e,n){do{var a=hy(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function D0(e,n,a,o,u,h,M,C,V){e.cancelPendingCommit=null;do Sc();while(vn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Ju,Ai(e,a,h,M,C,V),e===Xe&&(xe=Xe=null,ye=0),wr=n,Ja=e,va=a,oh=h,lh=u,x0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,by(pt,function(){return P0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=G.p,G.p=2,M=Ne,Ne|=4;try{dy(e,n,a)}finally{Ne=M,G.p=u,N.T=o}}vn=1,L0(),U0(),N0()}}function L0(){if(vn===1){vn=0;var e=Ja,n=wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=G.p;G.p=2;var u=Ne;Ne|=4;try{f0(n,e);var h=Eh,M=_m(e.containerInfo),C=h.focusedElem,V=h.selectionRange;if(M!==C&&C&&C.ownerDocument&&gm(C.ownerDocument.documentElement,C)){if(V!==null&&Yu(C)){var st=V.start,mt=V.end;if(mt===void 0&&(mt=st),"selectionStart"in C)C.selectionStart=st,C.selectionEnd=Math.min(mt,C.value.length);else{var St=C.ownerDocument||document,ct=St&&St.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),kt=C.textContent.length,te=Math.min(V.start,kt),Ve=V.end===void 0?te:Math.min(V.end,kt);!ft.extend&&te>Ve&&(M=Ve,Ve=te,te=M);var $=mm(C,te),j=mm(C,Ve);if($&&j&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==j.node||ft.focusOffset!==j.offset)){var at=St.createRange();at.setStart($.node,$.offset),ft.removeAllRanges(),te>Ve?(ft.addRange(at),ft.extend(j.node,j.offset)):(at.setEnd(j.node,j.offset),ft.addRange(at))}}}}for(St=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&St.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<St.length;C++){var vt=St[C];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Uc=!!Mh,Eh=Mh=null}finally{Ne=u,G.p=o,N.T=a}}e.current=n,vn=2}}function U0(){if(vn===2){vn=0;var e=Ja,n=wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=G.p;G.p=2;var u=Ne;Ne|=4;try{r0(e,n.alternate,n)}finally{Ne=u,G.p=o,N.T=a}}vn=3}}function N0(){if(vn===4||vn===3){vn=0,I();var e=Ja,n=wr,a=va,o=x0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,wr=Ja=null,O0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),ir(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var C=o[M];h(C.value,{componentStack:C.stack})}}finally{N.T=n,G.p=u}}(va&3)!==0&&Sc(),ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ch?Xo++:(Xo=0,ch=e):Xo=0,jo(0)}}function O0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function Sc(){return L0(),U0(),N0(),P0()}function P0(){if(vn!==5)return!1;var e=Ja,n=oh;oh=0;var a=ir(va),o=N.T,u=G.p;try{G.p=32>a?32:a,N.T=null,a=lh,lh=null;var h=Ja,M=va;if(vn=0,wr=Ja=null,va=0,(Ne&6)!==0)throw Error(s(331));var C=Ne;if(Ne|=4,g0(h.current),d0(h,h.current,M,a),Ne=C,jo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Rt,h)}catch{}return!0}finally{G.p=u,N.T=o,O0(e,n)}}function F0(e,n,a){n=pi(a,n),n=Gf(e.stateNode,n,2),e=ja(e,n,2),e!==null&&(In(e,2),ki(e))}function Be(e,n,a){if(e.tag===3)F0(e,e,a);else for(;n!==null;){if(n.tag===3){F0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=pi(a,e),a=Ig(2),o=ja(n,a,2),o!==null&&(Bg(a,o,n,e),In(o,2),ki(o));break}}n=n.return}}function hh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ah=!0,u.add(a),e=yy.bind(null,e,n,a),n.then(e,e))}function yy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>T()-pc?(Ne&2)===0&&Dr(e,0):sh|=a,Cr===ye&&(Cr=0)),ki(e)}function I0(e,n){n===0&&(n=Fe()),e=Cs(e,n),e!==null&&(In(e,n),ki(e))}function My(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(e,a)}function Ey(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),I0(e,a)}function by(e,n){return be(e,n)}var yc=null,Ur=null,dh=!1,Mc=!1,ph=!1,ts=0;function ki(e){e!==Ur&&e.next===null&&(Ur===null?yc=Ur=e:Ur=Ur.next=e),Mc=!0,dh||(dh=!0,Ay())}function jo(e,n){if(!ph&&Mc){ph=!0;do for(var a=!1,o=yc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(M&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,G0(o,h))}else h=ye,h=dt(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(a=!0,G0(o,h));o=o.next}while(a);ph=!1}}function Ty(){B0()}function B0(){Mc=dh=!1;var e=0;ts!==0&&Fy()&&(e=ts);for(var n=T(),a=null,o=yc;o!==null;){var u=o.next,h=z0(o,n);h===0?(o.next=null,a===null?yc=u:a.next=u,u===null&&(Ur=a)):(a=o,(e!==0||(h&3)!==0)&&(Mc=!0)),o=u}vn!==0&&vn!==5||jo(e),ts!==0&&(ts=0)}function z0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Pt(h),C=1<<M,V=u[M];V===-1?((C&a)===0||(C&o)!==0)&&(u[M]=ae(C,n)):V<=n&&(e.expiredLanes|=C),h&=~C}if(n=Xe,a=ye,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),ir(a)){case 2:case 8:a=yt;break;case 32:a=pt;break;case 268435456:a=Dt;break;default:a=pt}return o=H0.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function H0(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sc()&&e.callbackNode!==a)return null;var o=ye;return o=dt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(y0(e,o,n),z0(e,T()),e.callbackNode!=null&&e.callbackNode===a?H0.bind(null,e):null)}function G0(e,n){if(Sc())return null;y0(e,n,!0)}function Ay(){By(function(){(Ne&6)!==0?be(gt,Ty):B0()})}function mh(){if(ts===0){var e=_r;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),ts=e}return ts}function V0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(""+e)}function k0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ry(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=V0((u[gn]||null).action),M=o.submitter;M&&(n=(n=M[gn]||null)?V0(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var C=new Ol("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var V=M?k0(u,M):new FormData(u);Pf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=M?k0(u,M):new FormData(u),Pf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var gh=0;gh<Qu.length;gh++){var _h=Qu[gh],Cy=_h.toLowerCase(),wy=_h[0].toUpperCase()+_h.slice(1);Di(Cy,"on"+wy)}Di(Sm,"onAnimationEnd"),Di(ym,"onAnimationIteration"),Di(Mm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(jS,"onTransitionRun"),Di(WS,"onTransitionStart"),Di(YS,"onTransitionCancel"),Di(Em,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function X0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],V=C.instance,st=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=st;try{h(u)}catch(mt){Il(mt)}u.currentTarget=null,h=V}else for(M=0;M<o.length;M++){if(C=o[M],V=C.instance,st=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=st;try{h(u)}catch(mt){Il(mt)}u.currentTarget=null,h=V}}}}function Se(e,n){var a=n[Pa];a===void 0&&(a=n[Pa]=new Set);var o=e+"__bubble";a.has(o)||(j0(n,e,2,!1),a.add(o))}function vh(e,n,a){var o=0;n&&(o|=4),j0(a,e,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function xh(e){if(!e[Ec]){e[Ec]=!0,ut.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||vh(a,!1,e),vh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,vh("selectionchange",!1,n))}}function j0(e,n,a,o){switch(S_(n)){case 2:var u=aM;break;case 8:u=sM;break;default:u=Oh}a=u.bind(null,n,a,e),u=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Sh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=Fa(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=h=M;continue t}C=C.parentNode}}o=o.return}Kp(function(){var st=h,mt=Fu(a),St=[];t:{var ct=bm.get(e);if(ct!==void 0){var ft=Ol,kt=e;switch(e){case"keypress":if(Ul(a)===0)break t;case"keydown":case"keyup":ft=ES;break;case"focusin":kt="focus",ft=Vu;break;case"focusout":kt="blur",ft=Vu;break;case"beforeblur":case"afterblur":ft=Vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=fS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=AS;break;case Sm:case ym:case Mm:ft=pS;break;case Em:ft=CS;break;case"scroll":case"scrollend":ft=cS;break;case"wheel":ft=DS;break;case"copy":case"cut":case"paste":ft=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=em;break;case"toggle":case"beforetoggle":ft=US}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),$=te?ct!==null?ct+"Capture":null:ct;te=[];for(var j=st,at;j!==null;){var vt=j;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||$===null||(vt=po(j,$),vt!=null&&te.push(Yo(j,vt,at))),Ve)break;j=j.return}0<te.length&&(ct=new ft(ct,kt,null,a,mt),St.push({event:ct,listeners:te}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ct&&a!==Pu&&(kt=a.relatedTarget||a.fromElement)&&(Fa(kt)||kt[ea]))break t;if((ft||ct)&&(ct=mt.window===mt?mt:(ct=mt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(kt=a.relatedTarget||a.toElement,ft=st,kt=kt?Fa(kt):null,kt!==null&&(Ve=c(kt),te=kt.tag,kt!==Ve||te!==5&&te!==27&&te!==6)&&(kt=null)):(ft=null,kt=st),ft!==kt)){if(te=$p,vt="onMouseLeave",$="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=em,vt="onPointerLeave",$="onPointerEnter",j="pointer"),Ve=ft==null?ct:bs(ft),at=kt==null?ct:bs(kt),ct=new te(vt,j+"leave",ft,a,mt),ct.target=Ve,ct.relatedTarget=at,vt=null,Fa(mt)===st&&(te=new te($,j+"enter",kt,a,mt),te.target=at,te.relatedTarget=Ve,vt=te),Ve=vt,ft&&kt)e:{for(te=Ly,$=ft,j=kt,at=0,vt=$;vt;vt=te(vt))at++;vt=0;for(var Jt=j;Jt;Jt=te(Jt))vt++;for(;0<at-vt;)$=te($),at--;for(;0<vt-at;)j=te(j),vt--;for(;at--;){if($===j||j!==null&&$===j.alternate){te=$;break e}$=te($),j=te(j)}te=null}else te=null;ft!==null&&W0(St,ct,ft,te,!1),kt!==null&&Ve!==null&&W0(St,Ve,kt,te,!0)}}t:{if(ct=st?bs(st):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var De=cm;else if(om(ct))if(um)De=VS;else{De=HS;var Zt=zS}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?st&&sr(st.elementType)&&(De=cm):De=GS;if(De&&(De=De(e,st))){lm(St,De,a,mt);break t}Zt&&Zt(e,ct,st),e==="focusout"&&st&&ct.type==="number"&&st.memoizedProps.value!=null&&Ci(ct,"number",ct.value)}switch(Zt=st?bs(st):window,e){case"focusin":(om(Zt)||Zt.contentEditable==="true")&&(cr=Zt,qu=st,Mo=null);break;case"focusout":Mo=qu=cr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,vm(St,a,mt);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":vm(St,a,mt)}var de;if(Xu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else lr?sm(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(nm&&a.locale!=="ko"&&(lr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&lr&&(de=Qp()):(Ba=mt,zu="value"in Ba?Ba.value:Ba.textContent,lr=!0)),Zt=bc(st,Me),0<Zt.length&&(Me=new tm(Me,e,null,a,mt),St.push({event:Me,listeners:Zt}),de?Me.data=de:(de=rm(a),de!==null&&(Me.data=de)))),(de=OS?PS(e,a):FS(e,a))&&(Me=bc(st,"onBeforeInput"),0<Me.length&&(Zt=new tm("onBeforeInput","beforeinput",null,a,mt),St.push({event:Zt,listeners:Me}),Zt.data=de)),Ry(St,e,st,a,mt)}X0(St,n)})}function Yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=po(e,a),u!=null&&o.unshift(Yo(e,u,h)),u=po(e,n),u!=null&&o.push(Yo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Ly(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W0(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var C=a,V=C.alternate,st=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||st===null||(V=st,u?(st=po(a,h),st!=null&&M.unshift(Yo(a,st,V))):u||(st=po(a,h),st!=null&&M.push(Yo(a,st,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Uy=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Y0(e){return(typeof e=="string"?e:""+e).replace(Uy,`
`).replace(Ny,"")}function q0(e,n){return n=Y0(n),Y0(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":re(e,"class",o);break;case"tabIndex":re(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,a,o);break;case"style":na(e,o,h);break;case"data":if(n!=="object"){re(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ia);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=oS.get(a)||a,ie(e,a,o))}}function yh(e,n,a,o,u,h){switch(a){case"style":na(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[gn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,h,M,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var C=h=M=u=null,V=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":V=mt;break;case"defaultChecked":st=mt;break;case"value":h=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ge(e,n,o,mt,a,null)}}$n(e,h,C,V,st,M,u,!1);return;case"select":Se("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:Ge(e,n,u,C,a,null)}n=h,a=M,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Ge(e,n,M,C,a,null)}ln(e,o,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,V,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Se(Wo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,st,o,a,null)}return;default:if(sr(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&yh(e,n,mt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ge(e,n,C,o,a,null))}function Oy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,C=null,V=null,st=null,mt=null;for(ft in a){var St=a[ft];if(a.hasOwnProperty(ft)&&St!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=St;default:o.hasOwnProperty(ft)||Ge(e,n,ft,null,o,St)}}for(var ct in o){var ft=o[ct];if(St=a[ct],o.hasOwnProperty(ct)&&(ft!=null||St!=null))switch(ct){case"type":h=ft;break;case"name":u=ft;break;case"checked":st=ft;break;case"defaultChecked":mt=ft;break;case"value":M=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==St&&Ge(e,n,ct,ft,o,St)}}zn(e,M,C,V,st,mt,h,u);return;case"select":ft=M=C=ct=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ft=V;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ct=h;break;case"defaultValue":C=h;break;case"multiple":M=h;default:h!==V&&Ge(e,n,u,h,o,V)}n=C,a=M,o=ft,ct!=null?ti(e,!!a,ct,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":ft=ct=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ge(e,n,C,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ct=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ge(e,n,M,u,o,h)}Pe(e,ct,ft);return;case"option":for(var kt in a)ct=a[kt],a.hasOwnProperty(kt)&&ct!=null&&!o.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Ge(e,n,kt,null,o,ct));for(V in o)ct=o[V],ft=a[V],o.hasOwnProperty(V)&&ct!==ft&&(ct!=null||ft!=null)&&(V==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ge(e,n,V,ct,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ct=a[te],a.hasOwnProperty(te)&&ct!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,ct);for(st in o)if(ct=o[st],ft=a[st],o.hasOwnProperty(st)&&ct!==ft&&(ct!=null||ft!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ge(e,n,st,ct,o,ft)}return;default:if(sr(n)){for(var Ve in a)ct=a[Ve],a.hasOwnProperty(Ve)&&ct!==void 0&&!o.hasOwnProperty(Ve)&&yh(e,n,Ve,void 0,o,ct);for(mt in o)ct=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||ct===ft||ct===void 0&&ft===void 0||yh(e,n,mt,ct,o,ft);return}}for(var $ in a)ct=a[$],a.hasOwnProperty($)&&ct!=null&&!o.hasOwnProperty($)&&Ge(e,n,$,null,o,ct);for(St in o)ct=o[St],ft=a[St],!o.hasOwnProperty(St)||ct===ft||ct==null&&ft==null||Ge(e,n,St,ct,o,ft)}function Z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,C=u.duration;if(h&&C&&Z0(M)){for(M=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],st=V.startTime;if(st>C)break;var mt=V.transferSize,St=V.initiatorType;mt&&Z0(St)&&(V=V.responseEnd,M+=mt*(V<C?1:(C-st)/(V-st)))}if(--o,n+=8*(h+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mh=null,Eh=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function K0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Th=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===Th?!1:(Th=e,!0):(Th=null,!1)}var J0=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(e){return $0.resolve(null).then(e).catch(zy)}:J0;function zy(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function t_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Fr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qo(a);for(var h=a.firstChild;h;){var M=h.nextSibling,C=h.nodeName;h[Es]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&qo(e.ownerDocument.body);a=u}while(a);Fr(n)}function e_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ah(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ah(a),ho(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function n_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Rh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wh=null;function i_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function a_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function s_(e,n,a){switch(n=Tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ho(e)}var Si=new Map,r_=new Set;function Ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=G.d;G.d={f:ky,r:Xy,D:jy,C:Wy,L:Yy,m:qy,X:Ky,S:Zy,M:Qy};function ky(){var e=xa.f(),n=_c();return e||n}function Xy(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?Eg(n):xa.r(e)}var Nr=typeof document>"u"?null:document;function o_(e,n,a){var o=Nr;if(o&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),r_.has(u)||(r_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),Y(n),o.head.appendChild(n)))}}function jy(e){xa.D(e),o_("dns-prefetch",e,null)}function Wy(e,n){xa.C(e,n),o_("preconnect",e,n)}function Yy(e,n,a){xa.L(e,n,a);var o=Nr;if(o&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var h=u;switch(n){case"style":h=Or(e);break;case"script":h=Pr(e)}Si.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(h))||n==="script"&&o.querySelector(Ko(h))||(n=o.createElement("link"),Cn(n,"link",e),Y(n),o.head.appendChild(n)))}}function qy(e,n){xa.m(e,n);var a=Nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Pr(e)}if(!Si.has(h)&&(e=_({rel:"modulepreload",href:e},n),Si.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(h)))return}o=a.createElement("link"),Cn(o,"link",e),Y(o),a.head.appendChild(o)}}}function Zy(e,n,a){xa.S(e,n,a);var o=Nr;if(o&&e){var u=w(o).hoistableStyles,h=Or(e);n=n||"default";var M=u.get(h);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Zo(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(h))&&Dh(e,a);var V=M=o.createElement("link");Y(V),Cn(V,"link",e),V._p=new Promise(function(st,mt){V.onload=st,V.onerror=mt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(h,M)}}}function Ky(e,n){xa.X(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Pr(e),h=o.get(u);h||(h=a.querySelector(Ko(u)),h||(e=_({src:e,async:!0},n),(n=Si.get(u))&&Lh(e,n),h=a.createElement("script"),Y(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Qy(e,n){xa.M(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Pr(e),h=o.get(u);h||(h=a.querySelector(Ko(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&Lh(e,n),h=a.createElement("script"),Y(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function l_(e,n,a,o){var u=(u=rt.current)?Ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Or(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Or(a.href);var h=w(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Zo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),h||Jy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pr(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Or(e){return'href="'+se(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function c_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),Y(n),e.head.appendChild(n))}function Pr(e){return'[src="'+se(e)+'"]'}function Ko(e){return"script[async]"+e}function u_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Cn(o,"style",u),Rc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Or(a.href);var h=e.querySelector(Zo(u));if(h)return n.state.loading|=4,n.instance=h,Y(h),h;o=c_(a),(u=Si.get(u))&&Dh(o,u),h=(e.ownerDocument||e).createElement("link"),Y(h);var M=h;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Cn(h,"link",o),n.state.loading|=4,Rc(h,a.precedence,e),n.instance=h;case"script":return h=Pr(a.src),(u=e.querySelector(Ko(h)))?(n.instance=u,Y(u),u):(o=a,(u=Si.get(h))&&(o=_({},a),Lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Rc(o,a.precedence,e));return n.instance}function Rc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Cc=null;function f_(e,n,a){if(Cc===null){var o=new Map,u=Cc=new Map;u.set(a,o)}else u=Cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Es]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var C=o.get(M);C?C.push(h):o.set(M,[h])}}return o}function h_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(o.href),h=n.querySelector(Zo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Y(h);return}h=n.ownerDocument||n,o=c_(o),(u=Si.get(u))&&Dh(o,u),h=h.createElement("link"),Y(h);var M=h;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Cn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uh=0;function eM(e,n){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Uh===0&&(Uh=62500*Py());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Uh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,n.forEach(nM,e),Dc=null,wc.call(e))}function nM(e,n){if(!(n.state.loading&4)){var a=Dc.get(e);if(a)var o=a.get(null);else{a=new Map,Dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=wc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Qo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function iM(e,n,a,o,u,h,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function p_(e,n,a,o,u,h,M,C,V,st,mt,St){return e=new iM(e,n,a,M,V,st,mt,St,C),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=ff(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},mf(h),e}function m_(e){return e?(e=hr,e):hr}function g_(e,n,a,o,u,h){u=m_(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ja(e,o,n),a!==null&&(Zn(a,e,n),wo(a,e,n))}function __(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Nh(e,n){__(e,n),(e=e.alternate)&&__(e,n)}function v_(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&Zn(n,e,67108864),Nh(e,67108864)}}function x_(e){if(e.tag===13||e.tag===31){var n=oi();n=nr(n);var a=Cs(e,n);a!==null&&Zn(a,e,n),Nh(e,n)}}var Uc=!0;function aM(e,n,a,o){var u=N.T;N.T=null;var h=G.p;try{G.p=2,Oh(e,n,a,o)}finally{G.p=h,N.T=u}}function sM(e,n,a,o){var u=N.T;N.T=null;var h=G.p;try{G.p=8,Oh(e,n,a,o)}finally{G.p=h,N.T=u}}function Oh(e,n,a,o){if(Uc){var u=Ph(o);if(u===null)Sh(e,n,o,Nc,a),y_(e,o);else if(oM(u,e,n,a,o))o.stopPropagation();else if(y_(e,o),n&4&&-1<rM.indexOf(e)){for(;u!==null;){var h=Ia(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=At(h.pendingLanes);if(M!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-Pt(M);C.entanglements[1]|=V,M&=~V}ki(h),(Ne&6)===0&&(mc=T()+500,jo(0))}}break;case 31:case 13:C=Cs(h,2),C!==null&&Zn(C,h,2),_c(),Nh(h,2)}if(h=Ph(o),h===null&&Sh(e,n,o,Nc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Sh(e,n,o,null,a)}}function Ph(e){return e=Fu(e),Fh(e)}var Nc=null;function Fh(e){if(Nc=null,e=Fa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Nc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case gt:return 2;case yt:return 8;case pt:case Wt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Ih=!1,ns=null,is=null,as=null,Jo=new Map,$o=new Map,ss=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(e,n){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ia(n),n!==null&&v_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oM(e,n,a,o,u){switch(n){case"focusin":return ns=tl(ns,e,n,a,o,u),!0;case"dragenter":return is=tl(is,e,n,a,o,u),!0;case"mouseover":return as=tl(as,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Jo.set(h,tl(Jo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,$o.set(h,tl($o.get(h)||null,e,n,a,o,u)),!0}return!1}function M_(e){var n=Fa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ar(e.priority,function(){x_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ar(e.priority,function(){x_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Pu=o,a.target.dispatchEvent(o),Pu=null}else return n=Ia(a),n!==null&&v_(n),e.blockedOn=a,!1;n.shift()}return!0}function E_(e,n,a){Oc(e)&&a.delete(n)}function lM(){Ih=!1,ns!==null&&Oc(ns)&&(ns=null),is!==null&&Oc(is)&&(is=null),as!==null&&Oc(as)&&(as=null),Jo.forEach(E_),$o.forEach(E_)}function Pc(e,n){e.blockedOn===n&&(e.blockedOn=null,Ih||(Ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lM)))}var Fc=null;function b_(e){Fc!==e&&(Fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Fc===e&&(Fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Fh(o||a)===null)continue;break}var h=Ia(a);h!==null&&(e.splice(n,3),n-=3,Pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Fr(e){function n(V){return Pc(V,e)}ns!==null&&Pc(ns,e),is!==null&&Pc(is,e),as!==null&&Pc(as,e),Jo.forEach(n),$o.forEach(n);for(var a=0;a<ss.length;a++){var o=ss[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)M_(a),a.blockedOn===null&&ss.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[gn]||null;if(typeof h=="function")M||b_(a);else if(M){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[gn]||null)C=M.formAction;else if(Fh(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),b_(a)}}}function T_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bh(e){this._internalRoot=e}Ic.prototype.render=Bh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();g_(a,o,e,n,null,null)},Ic.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;g_(e.current,2,null,e,null,null),_c(),n[ea]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,e),a===0&&M_(e)}};var A_=t.version;if(A_!=="19.2.4")throw Error(s(527,A_,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Rt=Bc.inject(cM),Tt=Bc}catch{}}return nl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Ng,h=Og,M=Pg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=p_(e,1,!1,null,null,a,o,null,u,h,M,T_),e[ea]=n.current,xh(e),new Bh(n)},nl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Ng,M=Og,C=Pg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=p_(e,1,!0,n,a??null,o,u,V,h,M,C,T_),n.context=m_(null),a=n.current,o=oi(),o=nr(o),u=Xa(o),u.callback=null,ja(a,u,o),a=o,n.current.lanes=a,In(n,a),ki(n),e[ea]=n.current,xh(e),new Ic(n)},nl.version="19.2.4",nl}var F_;function SM(){if(F_)return Gh.exports;F_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gh.exports=xM(),Gh.exports}var yM=SM();const MM=ax(yM);var I_="popstate";function EM(r={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=Js(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ld("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,d=m.indexOf("#");p=d===-1?m:m.slice(0,d)}return p+"#"+(typeof c=="string"?c:ml(c))}function s(l,c){Bi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return TM(t,i,s,r)}function tn(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Bi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bM(){return Math.random().toString(36).substring(2,10)}function B_(r,t){return{usr:r.state,key:r.key,idx:t}}function Ld(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Js(t):t,state:i,key:t&&t.key||s||bM()}}function ml({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Js(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function TM(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){p="POP";let y=g(),x=y==null?null:y-d;d=y,m&&m({action:p,location:A.location,delta:x})}function v(y,x){p="PUSH";let R=Ld(A.location,y,x);i&&i(R,y),d=g()+1;let D=B_(R,d),U=A.createHref(R);try{f.pushState(D,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(U)}c&&m&&m({action:p,location:A.location,delta:1})}function S(y,x){p="REPLACE";let R=Ld(A.location,y,x);i&&i(R,y),d=g();let D=B_(R,d),U=A.createHref(R);f.replaceState(D,"",U),c&&m&&m({action:p,location:A.location,delta:0})}function E(y){return AM(y)}let A={get action(){return p},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(I_,_),m=y,()=>{l.removeEventListener(I_,_),m=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return f.go(y)}};return A}function AM(r,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:ml(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function sx(r,t,i="/"){return RM(r,t,i,!1)}function RM(r,t,i,s){let l=typeof t=="string"?Js(t):t,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=rx(r);CM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=zM(c);p=IM(f[m],d,s)}return p}function rx(r,t=[],i=[],s="",l=!1){let c=(f,p,m=l,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;tn(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=wa([s,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),rx(f.children,t,v,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:PM(_,f.index),routesMeta:v})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of ox(f.path))c(f,p,!0,m)}),t}function ox(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=ox(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function CM(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:FM(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var wM=/^:[\w-]+$/,DM=3,LM=2,UM=1,NM=10,OM=-2,z_=r=>r==="*";function PM(r,t){let i=r.split("/"),s=i.length;return i.some(z_)&&(s+=OM),t&&(s+=LM),i.filter(l=>!z_(l)).reduce((l,c)=>l+(wM.test(c)?DM:c===""?UM:NM),s)}function FM(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function IM(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],d=p===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),v=m.route;if(!_&&d&&i&&!s[s.length-1].route.index&&(_=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:wa([c,_.pathname]),pathnameBase:kM(wa([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=wa([c,_.pathnameBase]))}return f}function Su(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=BM(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((d,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=p[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=p[v];return _&&!S?d[g]=void 0:d[g]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:r}}function BM(r,t=!1,i=!0){Bi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function zM(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Ua(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var HM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function GM(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Js(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=H_(i.substring(1),"/"):c=H_(i,t)):c=t,{pathname:c,search:XM(s),hash:jM(l)}}function H_(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function jh(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VM(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function lx(r){let t=VM(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function cx(r,t,i,s=!1){let l;typeof r=="string"?l=Js(r):(l={...r},tn(!l.pathname||!l.pathname.includes("?"),jh("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),jh("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),jh("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=t.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?t[_]:"/"}let m=GM(l,p),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var wa=r=>r.join("/").replace(/\/\/+/g,"/"),kM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),XM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,WM=class{constructor(r,t,i,s=!1){this.status=r,this.statusText=t||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function YM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function qM(r){return r.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fx(r,t){let i=r;if(typeof i!="string"||!HM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(ux)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ua(f.pathname,t);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hx=["POST","PUT","PATCH","DELETE"];new Set(hx);var ZM=["GET",...hx];new Set(ZM);var oo=nt.createContext(null);oo.displayName="DataRouter";var Au=nt.createContext(null);Au.displayName="DataRouterState";var KM=nt.createContext(!1),dx=nt.createContext({isTransitioning:!1});dx.displayName="ViewTransition";var QM=nt.createContext(new Map);QM.displayName="Fetchers";var JM=nt.createContext(null);JM.displayName="Await";var Ti=nt.createContext(null);Ti.displayName="Navigation";var Ml=nt.createContext(null);Ml.displayName="Location";var ta=nt.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Cp=nt.createContext(null);Cp.displayName="RouteError";var px="REACT_ROUTER_ERROR",$M="REDIRECT",tE="ROUTE_ERROR_RESPONSE";function eE(r){if(r.startsWith(`${px}:${$M}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function nE(r){if(r.startsWith(`${px}:${tE}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new WM(t.status,t.statusText,t.data)}catch{}}function iE(r,{relative:t}={}){tn(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=nt.useContext(Ti),{hash:l,pathname:c,search:f}=bl(r,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:wa([i,c])),s.createHref({pathname:p,search:f,hash:l})}function El(){return nt.useContext(Ml)!=null}function Ms(){return tn(El(),"useLocation() may be used only in the context of a <Router> component."),nt.useContext(Ml).location}var mx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gx(r){nt.useContext(Ti).static||nt.useLayoutEffect(r)}function Ru(){let{isDataRoute:r}=nt.useContext(ta);return r?vE():aE()}function aE(){tn(El(),"useNavigate() may be used only in the context of a <Router> component.");let r=nt.useContext(oo),{basename:t,navigator:i}=nt.useContext(Ti),{matches:s}=nt.useContext(ta),{pathname:l}=Ms(),c=JSON.stringify(lx(s)),f=nt.useRef(!1);return gx(()=>{f.current=!0}),nt.useCallback((m,d={})=>{if(Bi(f.current,mx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=cx(m,JSON.parse(c),l,d.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:wa([t,g.pathname])),(d.replace?i.replace:i.push)(g,d.state,d)},[t,i,c,l,r])}var sE=nt.createContext(null);function rE(r){let t=nt.useContext(ta).outlet;return nt.useMemo(()=>t&&nt.createElement(sE.Provider,{value:r},t),[t,r])}function bl(r,{relative:t}={}){let{matches:i}=nt.useContext(ta),{pathname:s}=Ms(),l=JSON.stringify(lx(i));return nt.useMemo(()=>cx(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function oE(r,t){return _x(r,t)}function _x(r,t,i,s,l){tn(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=nt.useContext(Ti),{matches:f}=nt.useContext(ta),p=f[f.length-1],m=p?p.params:{},d=p?p.pathname:"/",g=p?p.pathnameBase:"/",_=p&&p.route;{let R=_&&_.path||"";xx(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Ms(),S;if(t){let R=typeof t=="string"?Js(t):t;tn(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let E=S.pathname||"/",A=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=sx(r,{pathname:A});Bi(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Bi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=hE(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:wa([g,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:wa([g,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,s,l);return t&&x?nt.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function lE(){let r=_E(),t=YM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=nt.createElement(nt.Fragment,null,nt.createElement("p",null,"💿 Hey developer 👋"),nt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",nt.createElement("code",{style:c},"ErrorBoundary")," or"," ",nt.createElement("code",{style:c},"errorElement")," prop on your route.")),nt.createElement(nt.Fragment,null,nt.createElement("h2",null,"Unexpected Application Error!"),nt.createElement("h3",{style:{fontStyle:"italic"}},t),i?nt.createElement("pre",{style:l},i):null,f)}var cE=nt.createElement(lE,null),vx=class extends nt.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=nE(r.digest);i&&(r=i)}let t=r!==void 0?nt.createElement(ta.Provider,{value:this.props.routeContext},nt.createElement(Cp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?nt.createElement(uE,{error:r},t):t}};vx.contextType=KM;var Wh=new WeakMap;function uE({children:r,error:t}){let{basename:i}=nt.useContext(Ti);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let s=eE(t.digest);if(s){let l=Wh.get(t);if(l)throw l;let c=fx(s.location,i);if(ux&&!Wh.get(t))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Wh.set(t,f),f}return nt.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function fE({routeContext:r,match:t,children:i}){let s=nt.useContext(oo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),nt.createElement(ta.Provider,{value:r},i)}function hE(r,t=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:S}=i,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let d=i&&s?(g,_)=>{s(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:qM(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,v)=>{let S,E=!1,A=null,y=null;i&&(S=f&&_.route.id?f[_.route.id]:void 0,A=_.route.errorElement||cE,p&&(m<0&&v===0?(xx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):m===v&&(E=!0,y=_.route.hydrateFallbackElement||null)));let x=t.concat(c.slice(0,v+1)),R=()=>{let D;return S?D=A:E?D=y:_.route.Component?D=nt.createElement(_.route.Component,null):_.route.element?D=_.route.element:D=g,nt.createElement(fE,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:i!=null},children:D})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?nt.createElement(vx,{location:i.location,revalidation:i.revalidation,component:A,error:S,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:d}):R()},null)}function wp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dE(r){let t=nt.useContext(oo);return tn(t,wp(r)),t}function pE(r){let t=nt.useContext(Au);return tn(t,wp(r)),t}function mE(r){let t=nt.useContext(ta);return tn(t,wp(r)),t}function Dp(r){let t=mE(r),i=t.matches[t.matches.length-1];return tn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function gE(){return Dp("useRouteId")}function _E(){let r=nt.useContext(Cp),t=pE("useRouteError"),i=Dp("useRouteError");return r!==void 0?r:t.errors?.[i]}function vE(){let{router:r}=dE("useNavigate"),t=Dp("useNavigate"),i=nt.useRef(!1);return gx(()=>{i.current=!0}),nt.useCallback(async(l,c={})=>{Bi(i.current,mx),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var G_={};function xx(r,t,i){!t&&!G_[r]&&(G_[r]=!0,Bi(!1,i))}nt.memo(xE);function xE({routes:r,future:t,state:i,onError:s}){return _x(r,void 0,i,s,t)}function SE(r){return rE(r.context)}function ms(r){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yE({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){tn(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=nt.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Js(i));let{pathname:d="/",search:g="",hash:_="",state:v=null,key:S="default"}=i,E=nt.useMemo(()=>{let A=Ua(d,p);return A==null?null:{location:{pathname:A,search:g,hash:_,state:v,key:S},navigationType:s}},[p,d,g,_,v,S,s]);return Bi(E!=null,`<Router basename="${p}"> is not able to match the URL "${d}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:nt.createElement(Ti.Provider,{value:m},nt.createElement(Ml.Provider,{children:t,value:E}))}function ME({children:r,location:t}){return oE(Ud(r),t)}function Ud(r,t=[]){let i=[];return nt.Children.forEach(r,(s,l)=>{if(!nt.isValidElement(s))return;let c=[...t,l];if(s.type===nt.Fragment){i.push.apply(i,Ud(s.props.children,c));return}tn(s.type===ms,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Ud(s.props.children,c)),i.push(f)}),i}var hu="get",du="application/x-www-form-urlencoded";function Cu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function EE(r){return Cu(r)&&r.tagName.toLowerCase()==="button"}function bE(r){return Cu(r)&&r.tagName.toLowerCase()==="form"}function TE(r){return Cu(r)&&r.tagName.toLowerCase()==="input"}function AE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function RE(r,t){return r.button===0&&(!t||t==="_self")&&!AE(r)}var zc=null;function CE(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var wE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yh(r){return r!=null&&!wE.has(r)?(Bi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${du}"`),null):r}function DE(r,t){let i,s,l,c,f;if(bE(r)){let p=r.getAttribute("action");s=p?Ua(p,t):null,i=r.getAttribute("method")||hu,l=Yh(r.getAttribute("enctype"))||du,c=new FormData(r)}else if(EE(r)||TE(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Ua(m,t):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||hu,l=Yh(r.getAttribute("formenctype"))||Yh(p.getAttribute("enctype"))||du,c=new FormData(p,r),!CE()){let{name:d,type:g,value:_}=r;if(g==="image"){let v=d?`${d}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else d&&c.append(d,_)}}else{if(Cu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=hu,s=null,l=du,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lp(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function LE(r,t,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:t&&Ua(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function UE(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function OE(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await UE(c,i);return f.links?f.links():[]}return[]}));return BE(s.flat(1).filter(NE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function V_(r,t,i,s,l,c){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):c==="data"?t.filter((m,d)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function PE(r,t,{includeHydrateFallback:i}={}){return FE(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function FE(r){return[...new Set(r)]}function IE(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function BE(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(IE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Sx(){let r=nt.useContext(oo);return Lp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function zE(){let r=nt.useContext(Au);return Lp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Up=nt.createContext(void 0);Up.displayName="FrameworkContext";function yx(){let r=nt.useContext(Up);return Lp(r,"You must render this element inside a <HydratedRouter> element"),r}function HE(r,t){let i=nt.useContext(Up),[s,l]=nt.useState(!1),[c,f]=nt.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=t,v=nt.useRef(null);nt.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=x=>{x.forEach(R=>{f(R.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),nt.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:il(p,S),onBlur:il(m,E),onMouseEnter:il(d,S),onMouseLeave:il(g,E),onTouchStart:il(_,S)}]:[!1,v,{}]}function il(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function GE({page:r,...t}){let{router:i}=Sx(),s=nt.useMemo(()=>sx(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?nt.createElement(kE,{page:r,matches:s,...t}):null}function VE(r){let{manifest:t,routeModules:i}=yx(),[s,l]=nt.useState([]);return nt.useEffect(()=>{let c=!1;return OE(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function kE({page:r,matches:t,...i}){let s=Ms(),{future:l,manifest:c,routeModules:f}=yx(),{basename:p}=Sx(),{loaderData:m,matches:d}=zE(),g=nt.useMemo(()=>V_(r,t,d,c,s,"data"),[r,t,d,c,s]),_=nt.useMemo(()=>V_(r,t,d,c,s,"assets"),[r,t,d,c,s]),v=nt.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let A=new Set,y=!1;if(t.forEach(R=>{let D=c.routes[R.route.id];!D||!D.hasLoader||(!g.some(U=>U.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||D.hasClientLoader?y=!0:A.add(R.route.id))}),A.size===0)return[];let x=LE(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&A.size>0&&x.searchParams.set("_routes",t.filter(R=>A.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,g,t,r,f]),S=nt.useMemo(()=>PE(_,c),[_,c]),E=VE(_);return nt.createElement(nt.Fragment,null,v.map(A=>nt.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),S.map(A=>nt.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:y})=>nt.createElement("link",{key:A,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function XE(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var jE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jE&&(window.__reactRouterVersion="7.13.0")}catch{}function WE({basename:r,children:t,unstable_useTransitions:i,window:s}){let l=nt.useRef();l.current==null&&(l.current=EM({window:s,v5Compat:!0}));let c=l.current,[f,p]=nt.useState({action:c.action,location:c.location}),m=nt.useCallback(d=>{i===!1?p(d):nt.startTransition(()=>p(d))},[i]);return nt.useLayoutEffect(()=>c.listen(m),[c,m]),nt.createElement(yE,{basename:r,children:t,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Aa=nt.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E){let{basename:A,unstable_useTransitions:y}=nt.useContext(Ti),x=typeof d=="string"&&Mx.test(d),R=fx(d,A);d=R.to;let D=iE(d,{relative:l}),[U,B,P]=HE(s,S),H=KE(d,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function b(X){t&&t(X),X.defaultPrevented||H(X)}let L=nt.createElement("a",{...S,...P,href:R.absoluteURL||D,onClick:R.isExternal||c?t:b,ref:XE(E,B),target:m,"data-discover":!x&&i==="render"?"true":void 0});return U&&!x?nt.createElement(nt.Fragment,null,L,nt.createElement(GE,{page:D})):L});Aa.displayName="Link";var YE=nt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...d},g){let _=bl(f,{relative:d.relative}),v=Ms(),S=nt.useContext(Au),{navigator:E,basename:A}=nt.useContext(Ti),y=S!=null&&eb(_)&&p===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,R=v.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(R=R.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&A&&(D=Ua(D,A)||D);const U=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let B=R===x||!l&&R.startsWith(x)&&R.charAt(U)==="/",P=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),H={isActive:B,isPending:P,isTransitioning:y},b=B?t:void 0,L;typeof s=="function"?L=s(H):L=[s,B?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let X=typeof c=="function"?c(H):c;return nt.createElement(Aa,{...d,"aria-current":b,className:L,ref:g,style:X,to:f,viewTransition:p},typeof m=="function"?m(H):m)});YE.displayName="NavLink";var qE=nt.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=hu,action:p,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E)=>{let{unstable_useTransitions:A}=nt.useContext(Ti),y=$E(),x=tb(p,{relative:d}),R=f.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Mx.test(p),U=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let P=B.nativeEvent.submitter,H=P?.getAttribute("formmethod")||f,b=()=>y(P||B.currentTarget,{fetcherKey:t,method:H,navigate:i,replace:l,state:c,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});A&&i!==!1?nt.startTransition(()=>b()):b()};return nt.createElement("form",{ref:E,method:R,action:x,onSubmit:s?m:U,...S,"data-discover":!D&&r==="render"?"true":void 0})});qE.displayName="Form";function ZE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ex(r){let t=nt.useContext(oo);return tn(t,ZE(r)),t}function KE(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let d=Ru(),g=Ms(),_=bl(r,{relative:c});return nt.useCallback(v=>{if(RE(v,t)){v.preventDefault();let S=i!==void 0?i:ml(g)===ml(_),E=()=>d(r,{replace:S,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?nt.startTransition(()=>E()):E()}},[g,d,_,i,s,t,r,l,c,f,p,m])}var QE=0,JE=()=>`__${String(++QE)}__`;function $E(){let{router:r}=Ex("useSubmit"),{basename:t}=nt.useContext(Ti),i=gE(),s=r.fetch,l=r.navigate;return nt.useCallback(async(c,f={})=>{let{action:p,method:m,encType:d,formData:g,body:_}=DE(c,t);if(f.navigate===!1){let v=f.fetcherKey||JE();await s(v,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,t,i])}function tb(r,{relative:t}={}){let{basename:i}=nt.useContext(Ti),s=nt.useContext(ta);tn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...bl(r||".",{relative:t})},f=Ms();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:wa([i,c.pathname])),ml(c)}function eb(r,{relative:t}={}){let i=nt.useContext(dx);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ex("useViewTransitionState"),l=bl(r,{relative:t});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Su(l.pathname,f)!=null||Su(l.pathname,c)!=null}const nb="/Vibra-Web/assets/VibraLogo-DwWVlSzh.png";function ib(){return O.jsxs("nav",{className:"navbar",children:[O.jsx(Aa,{to:"/",className:"logo-link",children:O.jsx("img",{src:nb,alt:"VIBRA Logo",className:"navbar-logo"})}),O.jsxs("div",{className:"nav-links",children:[O.jsx(Aa,{to:"/",children:"HOME"}),O.jsx(Aa,{to:"/about",children:"ABOUT"}),O.jsx(Aa,{to:"/team",children:"TEAM"}),O.jsx(Aa,{to:"/simulation",children:"SIMULATION"}),O.jsx(Aa,{to:"/instruction",children:"INSTRUCTION"}),O.jsx(Aa,{to:"/contact",children:"CONTACT"})]})]})}function ab(){return O.jsxs("div",{className:"app-container",children:[O.jsx(ib,{}),O.jsx("div",{className:"page-content",children:O.jsx(SE,{})})]})}function sb(){const r=Ru(),t=Ms();return O.jsxs("div",{className:"home-container",children:[O.jsx("h1",{className:"main-title",children:"VIBRA"}),O.jsx("h2",{className:"subtitle",children:"STUDIO SIMULATION"}),O.jsxs("button",{className:"primary-btn",onClick:()=>r("/about"),children:[O.jsx("span",{className:"btn-text",children:"LEARN MORE ABOUT US"}),O.jsx("span",{className:"btn-arrow",children:"→"})]})]},t.key)}function rb(){const[r,t]=nt.useState(!1),i=Ru();return nt.useEffect(()=>{t(!0)},[]),O.jsxs("div",{className:`about-container ${r?"enter":""}`,children:[O.jsx("h1",{children:"ABOUT US"}),O.jsx("h3",{children:"WE ARE VIBRA"}),O.jsxs("div",{className:"about-content",children:[O.jsxs("div",{className:"about-text",children:[O.jsx("p",{className:"about-paragraph p1",children:O.jsx("span",{className:"para-inner",children:"VIBRA is a web-based studio simulation platform designed to visualize and analyze acoustic data through an interactive three-dimensional environment. It bridges real-world sound measurements and digital visualization, allowing users to better understand how sound behaves within enclosed spaces."})}),O.jsx("p",{className:"about-paragraph p2",children:O.jsx("span",{className:"para-inner",children:"The platform gathers acoustic parameters such as RT60 values and spatial measurements from a physical prototype and transforms them into meaningful visual representations. Through its integrated 3D simulation, users can identify acoustic conditions including hot spots, dead spots, and neutral zones within a room."})}),O.jsx("p",{className:"about-paragraph p3",children:O.jsx("span",{className:"para-inner",children:"VIBRA aims to support students, engineers, and designers by providing a clear and intuitive way to evaluate room acoustics, explore data-driven insights, and improve sound optimization decisions. By combining data analysis with immersive visualization, VIBRA delivers a modern approach to acoustic assessment and simulation."})})]}),O.jsx("div",{className:"about-cta-side",children:O.jsxs("button",{className:"about-cta-btn",onClick:()=>i("/team"),"aria-label":"Meet the developers",children:[O.jsx("span",{className:"cta-arrow",children:"→"}),O.jsx("span",{className:"cta-text",children:"Meet the developers"})]})})]})]})}const ob="/Vibra-Web/assets/marichu-kG7RSE-D.png",lb="/Vibra-Web/assets/missy-BteT_0I_.png",cb="/Vibra-Web/assets/khlowee-CAL1KU9a.png",ub="/Vibra-Web/assets/juliann-BXcYWaAK.png",fb="/Vibra-Web/assets/lance-DPwIT8nK.png",hb=[{name:"Marichu C. Espelimbergo",role:"Frontend Developer",image:ob},{name:"Missy Ann Jhlezshir G. Espiritu",role:"UI/UX Designer",image:lb},{name:"Khlowee A. Mendoza",role:"Assistant Backend Developer",image:cb},{name:"Juliann Vincent B. Quibral",role:"Backend Developer",image:ub},{name:"Lance Gabrielle A. Santos",role:"Assistant Frontend Developer",image:fb}];function db(){const r=Ru(),[t,i]=nt.useState(!1);return nt.useEffect(()=>{i(!0)},[]),O.jsxs("div",{className:`team-container ${t?"enter":""}`,children:[O.jsx("h1",{className:"team-title",children:"OUR TEAM"}),O.jsx("h3",{className:"team-subtitle",children:"MEET THE DEVELOPERS"}),O.jsx("div",{className:"team-grid",children:hb.map((s,l)=>O.jsx("div",{className:"team-member",children:O.jsx("div",{className:"flip-card",children:O.jsxs("div",{className:"flip-inner",children:[O.jsx("div",{className:"flip-front",style:{backgroundImage:`url(${s.image})`}}),O.jsxs("div",{className:"flip-back",children:[O.jsx("div",{className:"team-name",children:s.name}),O.jsx("div",{className:"team-role",children:s.role})]})]})})},l))}),O.jsx("div",{className:"team-cta-down",children:O.jsxs("button",{className:"team-cta-btn",type:"button",onClick:()=>r("/simulation"),"aria-label":"Continue to simulation",children:[O.jsx("span",{className:"team-cta-arrow",children:"→"}),O.jsx("span",{className:"team-cta-text",children:"Continue to Simulation"})]})})]})}const pb="1OAfQI6MwheL6wIes1EhGjak3G1jSVLFGppmzqTL9MWQ",mb=[{label:"Layer 1",gid:"0"},{label:"Layer 2",gid:"540291160"},{label:"Layer 3",gid:"1597351297"},{label:"Layer 4",gid:"1962364642"}],gb=r=>`https://docs.google.com/spreadsheets/d/${pb}/export?format=csv&gid=${r}`,Nd=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function k_(r){const t=String(r).replace(/\r/g,""),i=[];let s=[],l="",c=!1;for(let m=0;m<t.length;m++){const d=t[m],g=t[m+1];if(d==='"'){c&&g==='"'?(l+='"',m++):c=!c;continue}if(d===","&&!c){s.push(l),l="";continue}if(d===`
`&&!c){s.push(l),i.push(s),s=[],l="";continue}l+=d}if((l.length||s.length)&&(s.push(l),i.push(s)),!i.length)return[];const f=i[0].map(m=>Nd(m)),p=[];for(let m=1;m<i.length;m++){const d=i[m];if(d.every(_=>Nd(_)===""))continue;const g={};f.forEach((_,v)=>{g[_]=String(d[v]??"").trim()}),p.push(g)}return p}function wn(r,t){for(const i of t){const s=Nd(i);if(Object.prototype.hasOwnProperty.call(r,s))return r[s]}return""}function _b({rawRows:r,setRawRows:t,displayedRows:i,searchInput:s,setSearchInput:l,setAppliedSearch:c,sortValue:f,setSortValue:p,onExport:m,onDeploy:d,onReset:g,spatial:_,uploadStatus:v,setUploadStatus:S}){const[E,A]=nt.useState(!1),[y,x]=nt.useState(!1),R=nt.useRef(null);nt.useEffect(()=>{if(v.type==="idle")return;const X=setTimeout(()=>S({type:"idle",message:""}),5e3);return()=>clearTimeout(X)},[v,S]);const D=async()=>{try{S({type:"loading",message:"Uploading data from Google Sheet (all layers)..."});const X=[];for(const F of mb){const Q=await(await fetch(gb(F.gid),{redirect:"follow"})).text();if(Q.toLowerCase().includes("<html")||Q.toLowerCase().includes("<!doctype"))throw new Error(`Sheet ${F.label} is not publicly accessible as CSV.`);const J=k_(Q).map(N=>({Angle:wn(N,["angle"]),Decibel:wn(N,["db","dB","decibel"]),Ultrasonic:wn(N,["utv","ultrasonic","ultrasonicvalue"]),RT60:wn(N,["rt60","reverberation","rt60value"]),Classification:wn(N,["class","classification"]),Layer:F.label,LengthRaw:wn(N,["length"]),WidthRaw:wn(N,["width"]),HeightRaw:wn(N,["utvh","height","heightraw"])}));X.push(...J)}if(!X.length)throw new Error("No data found from all sheets.");t(X),S({type:"success",message:`Done uploading. Loaded ${X.length} row(s) from all layers.`}),A(!1),x(!1)}catch(X){console.error("Cloud import failed:",X),S({type:"error",message:`Upload failed: ${String(X.message||X)}`}),A(!1),x(!1)}},U=X=>{const F=X.target.files?.[0];if(!F)return;if(!F.name.toLowerCase().endsWith(".csv")){S({type:"error",message:"CSV only. Please upload a .csv file."}),X.target.value="";return}S({type:"loading",message:"Uploading data from local CSV..."});const W=new FileReader;W.onload=Q=>{try{const tt=Q.target.result,J=k_(String(tt));if(!J.length)throw new Error("CSV has no data rows.");const N=J.map(G=>({Angle:wn(G,["angle"]),Decibel:wn(G,["db","dB"]),Ultrasonic:wn(G,["utv","ultrasonic"]),RT60:wn(G,["rt60","reverberation"]),HeightRaw:wn(G,["utvh","height","heightraw"]),Classification:wn(G,["class","classification"]),Layer:wn(G,["layer"])||"Local",LengthRaw:wn(G,["length"]),WidthRaw:wn(G,["width"])}));t(N),S({type:"success",message:`Done uploading. Loaded ${N.length} row(s).`})}catch(tt){S({type:"error",message:`Upload failed: ${String(tt.message||tt)}`})}},W.readAsText(F),A(!1),x(!1),X.target.value=""},B=()=>c(s),P=X=>{p(X),x(!1)},H=X=>X==null?"—":`${X.toFixed(1)} cm`,b=X=>X==null?"—":`${X.toFixed(2)} m²`,L=_.qualified==null?"—":_.qualified?"Qualified":"Not Qualified";return O.jsxs("div",{className:"sim-slide sim-slide-1",children:[O.jsx("h1",{className:"sim-title",children:"SIMULATION"}),v.type!=="idle"&&O.jsxs("div",{className:`upload-toast upload-toast--floating ${v.type}`,children:[v.message,O.jsx("button",{className:"upload-toast-close",type:"button",onClick:()=>S({type:"idle",message:""}),"aria-label":"Close notification",children:"✕"})]}),O.jsxs("div",{className:"sim-row",children:[O.jsxs("div",{className:"glass-card glass-card--raw",children:[O.jsx("h2",{className:"card-title",children:"RAW PARAMETERS"}),O.jsxs("div",{className:"raw-top",children:[O.jsx("input",{className:"search-input",placeholder:"Search...",value:s,onChange:X=>l(X.target.value),onKeyDown:X=>X.key==="Enter"&&B()}),O.jsx("button",{className:"small-btn",type:"button",onClick:B,children:"Enter"}),O.jsxs("div",{className:"sort-wrapper",children:[O.jsx("button",{className:"small-btn",type:"button",onClick:()=>{x(X=>!X),A(!1)},children:"Sort ▾"}),y&&O.jsxs("div",{className:"sort-dropdown",children:[O.jsx("button",{type:"button",onClick:()=>P("layer:Layer 1"),children:"Layer 1"}),O.jsx("button",{type:"button",onClick:()=>P("layer:Layer 2"),children:"Layer 2"}),O.jsx("button",{type:"button",onClick:()=>P("layer:Layer 3"),children:"Layer 3"}),O.jsx("button",{type:"button",onClick:()=>P("layer:Layer 4"),children:"Layer 4"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>P("class:hotspot"),children:"Hot Spot"}),O.jsx("button",{type:"button",onClick:()=>P("class:deadspot"),children:"Dead Spot"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>P(null),children:"Clear Sort"})]})]})]}),O.jsx("div",{className:"data-box",children:O.jsxs("table",{className:"raw-table",children:[O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{children:"No."}),O.jsx("th",{children:"Angle"}),O.jsx("th",{children:"Decibel"}),O.jsx("th",{children:"Ultrasonic"}),O.jsx("th",{children:"RT60"}),O.jsx("th",{children:"Classification"}),O.jsx("th",{children:"Layer"})]})}),O.jsx("tbody",{children:i.map((X,F)=>O.jsxs("tr",{children:[O.jsx("td",{children:F+1}),O.jsx("td",{children:X.Angle}),O.jsx("td",{children:X.Decibel}),O.jsx("td",{children:X.Ultrasonic}),O.jsx("td",{children:X.RT60}),O.jsx("td",{children:X.Classification}),O.jsx("td",{children:X.Layer})]},`${X.Layer}-${F}`))})]})}),O.jsxs("div",{className:"raw-bottom",children:[O.jsxs("div",{className:"left-actions",children:[O.jsxs("div",{className:"import-wrapper",children:[O.jsx("button",{className:"action-btn",type:"button",onClick:()=>{A(X=>!X),x(!1)},children:"Import ▾"}),E&&O.jsxs("div",{className:"import-dropdown",children:[O.jsx("button",{type:"button",onClick:D,children:"Cloud"}),O.jsx("button",{type:"button",onClick:()=>R.current?.click(),children:"Local"})]}),O.jsx("input",{type:"file",ref:R,style:{display:"none"},accept:".csv",onChange:U})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:m,disabled:!i.length,children:"Export"}),O.jsx("button",{className:"action-btn",type:"button",onClick:d,disabled:!i.length,children:"Deploy"})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:g,children:"Reset"})]})]}),O.jsxs("div",{className:"glass-card glass-card--spatial",children:[O.jsx("h2",{className:"card-title",children:"SPATIAL STATUS"}),O.jsx("p",{className:"label",children:"PHYSICAL DIMENSION:"}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Length: ",H(_.lengthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Width: ",H(_.widthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Height: ",_.heightRaw?`${_.heightRaw} cm`:"—"]})}),O.jsxs("div",{className:"status-wrapper",children:[O.jsx("p",{className:"status-label",children:"STATUS:"}),O.jsx("div",{className:"status-box",children:O.jsxs("div",{className:"status-inner",children:[O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Area:"})," ",O.jsx("b",{children:b(_.area)})]}),O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Result:"})," ",O.jsx("b",{children:L})]}),O.jsxs("div",{className:"status-hint",children:["Qualified if floor area is ",O.jsx("b",{children:"3–5 m²"}),"."]})]})})]}),O.jsxs("div",{className:"spatial-meta",children:["Active rows: ",O.jsx("b",{children:i.length})," / ",r.length,f?O.jsxs(O.Fragment,{children:[" ","• Filter: ",O.jsx("b",{children:f})]}):null]})]})]})]})}const Np="183",$r={ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vb=0,X_=1,xb=2,pu=1,Sb=2,fl=3,Ss=0,Qn=1,Ei=2,Da=0,to=1,j_=2,W_=3,Y_=4,yb=5,Ys=100,Mb=101,Eb=102,bb=103,Tb=104,Ab=200,Rb=201,Cb=202,wb=203,Od=204,Pd=205,Db=206,Lb=207,Ub=208,Nb=209,Ob=210,Pb=211,Fb=212,Ib=213,Bb=214,Fd=0,Id=1,Bd=2,no=3,zd=4,Hd=5,Gd=6,Vd=7,bx=0,zb=1,Hb=2,Ki=0,Tx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Lx=7,Ux=300,Qs=301,io=302,qh=303,Zh=304,wu=306,kd=1e3,Ra=1001,Xd=1002,Ln=1003,Gb=1004,Hc=1005,mn=1006,Kh=1007,Zs=1008,fi=1009,Nx=1010,Ox=1011,gl=1012,Op=1013,Ji=1014,qi=1015,Na=1016,Pp=1017,Fp=1018,_l=1020,Px=35902,Fx=35899,Ix=1021,Bx=1022,Ii=1023,Oa=1026,Ks=1027,zx=1028,Ip=1029,ao=1030,Bp=1031,zp=1033,mu=33776,gu=33777,_u=33778,vu=33779,jd=35840,Wd=35841,Yd=35842,qd=35843,Zd=36196,Kd=37492,Qd=37496,Jd=37488,$d=37489,tp=37490,ep=37491,np=37808,ip=37809,ap=37810,sp=37811,rp=37812,op=37813,lp=37814,cp=37815,up=37816,fp=37817,hp=37818,dp=37819,pp=37820,mp=37821,gp=36492,_p=36494,vp=36495,xp=36283,Sp=36284,yp=36285,Mp=36286,Vb=3200,Hx=0,kb=1,vs="",ui="srgb",so="srgb-linear",yu="linear",ze="srgb",Ir=7680,q_=519,Xb=512,jb=513,Wb=514,Hp=515,Yb=516,qb=517,Gp=518,Zb=519,Z_=35044,K_="300 es",Zi=2e3,vl=2001;function Kb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qb(){const r=Mu("canvas");return r.style.display="block",r}const Q_={};function J_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Gx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ne(...r){r=Gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=Gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Eu(...r){const t=r.join(" ");t in Q_||(Q_[t]=!0,ne(...r))}function Jb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $b={[Fd]:Id,[Bd]:Gd,[zd]:Vd,[no]:Hd,[Id]:Fd,[Gd]:Bd,[Vd]:zd,[Hd]:no};class $s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $_=1234567;const dl=Math.PI/180,xl=180/Math.PI;function lo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function Vp(r,t){return(r%t+t)%t}function tT(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function eT(r,t,i){return r!==t?(i-r)/(t-r):0}function pl(r,t,i){return(1-i)*r+i*t}function nT(r,t,i,s){return pl(r,t,1-Math.exp(-i*s))}function iT(r,t=1){return t-Math.abs(Vp(r,t*2)-t)}function aT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function sT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function rT(r,t){return r+Math.floor(Math.random()*(t-r+1))}function oT(r,t){return r+Math.random()*(t-r)}function lT(r){return r*(.5-Math.random())}function cT(r){r!==void 0&&($_=r);let t=$_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uT(r){return r*dl}function fT(r){return r*xl}function hT(r){return(r&r-1)===0&&r!==0}function dT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mT(r,t,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),v=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(p*g,m*_,m*v,p*d);break;case"YZY":r.set(m*v,p*g,m*_,p*d);break;case"ZXZ":r.set(m*_,m*v,p*g,p*d);break;case"XZX":r.set(p*g,m*E,m*S,p*d);break;case"YXY":r.set(m*S,p*g,m*E,p*d);break;case"ZYZ":r.set(m*E,m*S,p*g,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Qr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ep={DEG2RAD:dl,RAD2DEG:xl,generateUUID:lo,clamp:_e,euclideanModulo:Vp,mapLinear:tT,inverseLerp:eT,lerp:pl,damp:nT,pingpong:iT,smoothstep:aT,smootherstep:sT,randInt:rT,randFloat:oT,randFloatSpread:lT,seededRandom:cT,degToRad:uT,radToDeg:fT,isPowerOfTwo:hT,ceilPowerOfTwo:dT,floorPowerOfTwo:pT,setQuaternionFromProperEuler:mT,normalize:Vn,denormalize:Qr};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3],v=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(_!==A||m!==v||d!==S||g!==E){let y=m*v+d*S+g*E+_*A;y<0&&(v=-v,S=-S,E=-E,A=-A,y=-y);let x=1-p;if(y<.9995){const R=Math.acos(y),D=Math.sin(R);x=Math.sin(x*R)/D,p=Math.sin(p*R)/D,m=m*x+v*p,d=d*x+S*p,g=g*x+E*p,_=_*x+A*p}else{m=m*x+v*p,d=d*x+S*p,g=g*x+E*p,_=_*x+A*p;const R=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=R,d*=R,g*=R,_*=R}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],g=s[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=p*E+g*_+m*S-d*v,t[i+1]=m*E+g*v+d*_-p*S,t[i+2]=d*E+g*S+p*v-m*_,t[i+3]=g*E-p*_-m*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),g=p(l/2),_=p(c/2),v=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_+v*S*E;break;case"YZX":this._x=v*g*_+d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_-v*S*E;break;case"XZY":this._x=v*g*_-d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_+v*S*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=s+p+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-d)*S,this._z=(f-l)*S}else if(s>p&&s>_){const S=2*Math.sqrt(1+s-p-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+d)/S}else if(p>_){const S=2*Math.sqrt(1+p-s-_);this._w=(c-d)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-p);this._w=(f-l)/S,this._x=(c+d)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-s*d,this._z=c*g+f*d+s*m-l*p,this._w=f*g-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(tv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(tv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*d+f*_-p*g,this.y=s+m*g+p*d-c*_,this.z=l+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qh=new et,tv=new ys;class pe{constructor(t,i,s,l,c,f,p,m,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],g=s[4],_=s[7],v=s[2],S=s[5],E=s[8],A=l[0],y=l[3],x=l[6],R=l[1],D=l[4],U=l[7],B=l[2],P=l[5],H=l[8];return c[0]=f*A+p*R+m*B,c[3]=f*y+p*D+m*P,c[6]=f*x+p*U+m*H,c[1]=d*A+g*R+_*B,c[4]=d*y+g*D+_*P,c[7]=d*x+g*U+_*H,c[2]=v*A+S*R+E*B,c[5]=v*y+S*D+E*P,c[8]=v*x+S*U+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-s*c*g+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=g*f-p*d,v=p*m-g*c,S=d*c-f*m,E=i*_+s*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*d-g*s)*A,t[2]=(p*s-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=S*A,t[7]=(s*m-d*i)*A,t[8]=(f*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Jh.makeScale(t,i)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jh=new pe,ev=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gT(){const r={enabled:!0,workingColorSpace:so,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=eo(l.r),l.g=eo(l.g),l.b=eo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[so]:{primaries:t,whitePoint:s,transfer:yu,toXYZ:ev,fromXYZ:nv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:ev,fromXYZ:nv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Re=gT();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class _T{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Br===void 0&&(Br=Mu("canvas")),Br.width=t.width,Br.height=t.height;const l=Br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Mu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vT=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push($h(l[f].image)):c.push($h(l[f]))}else c=$h(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function $h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_T.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let xT=0;const td=new et;class Fn extends $s{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Ra,l=Ra,c=mn,f=Zs,p=Ii,m=fi,d=Fn.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=lo(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ux)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kd:t.x=t.x-Math.floor(t.x);break;case Ra:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kd:t.y=t.y-Math.floor(t.y);break;case Ra:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ux;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,U=(S+1)/2,B=(x+1)/2,P=(g+v)/4,H=(_+A)/4,b=(E+y)/4;return D>U&&D>B?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=P/s,c=H/s):U>B?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=P/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=b/c),this.set(s,l,c,i),this}let R=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(_-A)/R,this.z=(v-g)/R,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ST extends $s{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Fn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends ST{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Vx extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yT extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t,i,s,l,c,f,p,m,d,g,_,v,S,E,A,y){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,g,_,v,S,E,A,y)}set(t,i,s,l,c,f,p,m,d,g,_,v,S,E,A,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/zr.setFromMatrixColumn(t,0).length(),c=1/zr.setFromMatrixColumn(t,1).length(),f=1/zr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=S+E*d,i[5]=v-A*d,i[9]=-p*m,i[2]=A-v*d,i[6]=E+S*d,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,S=m*_,E=d*g,A=d*_;i[0]=v+A*p,i[4]=E*p-S,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=S*p-E,i[6]=A+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,S=m*_,E=d*g,A=d*_;i[0]=v-A*p,i[4]=-f*_,i[8]=E+S*p,i[1]=S+E*p,i[5]=f*g,i[9]=A-v*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=E*d-S,i[8]=v*d+A,i[1]=m*_,i[5]=A*d+v,i[9]=S*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,S=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=S*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,S=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+A,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=p*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MT,t,ET)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),os.crossVectors(s,li),os.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),os.crossVectors(s,li)),os.normalize(),Gc.crossVectors(li,os),l[0]=os.x,l[4]=Gc.x,l[8]=li.x,l[1]=os.y,l[5]=Gc.y,l[9]=li.y,l[2]=os.z,l[6]=Gc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],g=s[1],_=s[5],v=s[9],S=s[13],E=s[2],A=s[6],y=s[10],x=s[14],R=s[3],D=s[7],U=s[11],B=s[15],P=l[0],H=l[4],b=l[8],L=l[12],X=l[1],F=l[5],W=l[9],Q=l[13],tt=l[2],J=l[6],N=l[10],G=l[14],ot=l[3],ht=l[7],Mt=l[11],z=l[15];return c[0]=f*P+p*X+m*tt+d*ot,c[4]=f*H+p*F+m*J+d*ht,c[8]=f*b+p*W+m*N+d*Mt,c[12]=f*L+p*Q+m*G+d*z,c[1]=g*P+_*X+v*tt+S*ot,c[5]=g*H+_*F+v*J+S*ht,c[9]=g*b+_*W+v*N+S*Mt,c[13]=g*L+_*Q+v*G+S*z,c[2]=E*P+A*X+y*tt+x*ot,c[6]=E*H+A*F+y*J+x*ht,c[10]=E*b+A*W+y*N+x*Mt,c[14]=E*L+A*Q+y*G+x*z,c[3]=R*P+D*X+U*tt+B*ot,c[7]=R*H+D*F+U*J+B*ht,c[11]=R*b+D*W+U*N+B*Mt,c[15]=R*L+D*Q+U*G+B*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],A=t[7],y=t[11],x=t[15],R=m*S-d*v,D=p*S-d*_,U=p*v-m*_,B=f*S-d*g,P=f*v-m*g,H=f*_-p*g;return i*(A*R-y*D+x*U)-s*(E*R-y*B+x*P)+l*(E*D-A*B+x*H)-c*(E*U-A*P+y*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],A=t[13],y=t[14],x=t[15],R=i*p-s*f,D=i*m-l*f,U=i*d-c*f,B=s*m-l*p,P=s*d-c*p,H=l*d-c*m,b=g*A-_*E,L=g*y-v*E,X=g*x-S*E,F=_*y-v*A,W=_*x-S*A,Q=v*x-S*y,tt=R*Q-D*W+U*F+B*X-P*L+H*b;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/tt;return t[0]=(p*Q-m*W+d*F)*J,t[1]=(l*W-s*Q-c*F)*J,t[2]=(A*H-y*P+x*B)*J,t[3]=(v*P-_*H-S*B)*J,t[4]=(m*X-f*Q-d*L)*J,t[5]=(i*Q-l*X+c*L)*J,t[6]=(y*U-E*H-x*D)*J,t[7]=(g*H-v*U+S*D)*J,t[8]=(f*W-p*X+d*b)*J,t[9]=(s*X-i*W-c*b)*J,t[10]=(E*P-A*U+x*R)*J,t[11]=(_*U-g*P-S*R)*J,t[12]=(p*L-f*F-m*b)*J,t[13]=(i*F-s*L+l*b)*J,t[14]=(A*D-E*B-y*R)*J,t[15]=(g*B-_*D+v*R)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+s,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,_=p+p,v=c*d,S=c*g,E=c*_,A=f*g,y=f*_,x=p*_,R=m*d,D=m*g,U=m*_,B=s.x,P=s.y,H=s.z;return l[0]=(1-(A+x))*B,l[1]=(S+U)*B,l[2]=(E-D)*B,l[3]=0,l[4]=(S-U)*P,l[5]=(1-(v+x))*P,l[6]=(y+R)*P,l[7]=0,l[8]=(E+D)*H,l[9]=(y-R)*H,l[10]=(1-(v+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=zr.set(l[0],l[1],l[2]).length();const p=zr.set(l[4],l[5],l[6]).length(),m=zr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const d=1/f,g=1/p,_=1/m;return Ni.elements[0]*=d,Ni.elements[1]*=d,Ni.elements[2]*=d,Ni.elements[4]*=g,Ni.elements[5]*=g,Ni.elements[6]*=g,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=Zi,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(p===Zi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===vl)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=Zi,m=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(p===Zi)E=-2/(f-c),A=-(f+c)/(f-c);else if(p===vl)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const zr=new et,Ni=new qe,MT=new et(0,0,0),ET=new et(1,1,1),os=new et,Gc=new et,li=new et,iv=new qe,av=new ys;class Dn{constructor(t=0,i=0,s=0,l=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return iv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return av.setFromEuler(this),this.setFromQuaternion(av,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bT=0;const sv=new et,Hr=new ys,Sa=new qe,Vc=new et,al=new et,TT=new et,AT=new ys,rv=new et(1,0,0),ov=new et(0,1,0),lv=new et(0,0,1),cv={type:"added"},RT={type:"removed"},Gr={type:"childadded",child:null},ed={type:"childremoved",child:null};class Un extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new et,i=new Dn,s=new ys,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new pe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(rv,t)}rotateY(t){return this.rotateOnAxis(ov,t)}rotateZ(t){return this.rotateOnAxis(lv,t)}translateOnAxis(t,i){return sv.copy(t).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(rv,t)}translateY(t){return this.translateOnAxis(ov,t)}translateZ(t){return this.translateOnAxis(lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Vc.copy(t):Vc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(al,Vc,this.up):Sa.lookAt(Vc,al,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Hr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cv),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RT),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cv),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,TT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,AT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new et(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ca extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CT={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),x=this._getHandJoint(d,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;d.inputState.pinching&&v>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ca;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},kc={h:0,s:0,l:0};function id(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=Vp(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=id(f,c,t+1/3),this.g=id(f,c,t),this.b=id(f,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function s(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const s=kx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Re.workingToColorSpace(Pn.copy(this),t),Math.round(_e(Pn.r*255,0,255))*65536+Math.round(_e(Pn.g*255,0,255))*256+Math.round(_e(Pn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const _=f-p;switch(d=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=ui){Re.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+i,ls.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ls),t.getHSL(kc);const s=pl(ls.h,kc.h,i),l=pl(ls.s,kc.s,i),c=pl(ls.l,kc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ce;Ce.NAMES=kx;class wT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new et,ya=new et,ad=new et,Ma=new et,Vr=new et,kr=new et,uv=new et,sd=new et,rd=new et,od=new et,ld=new an,cd=new an,ud=new an;class Fi{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oi.subVectors(l,i),ya.subVectors(s,i),ad.subVectors(t,i);const f=Oi.dot(Oi),p=Oi.dot(ya),m=Oi.dot(ad),d=ya.dot(ya),g=ya.dot(ad),_=f*d-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(d*m-p*g)*v,E=(f*g-p*m)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(f,Ma.y),m.addScaledVector(p,Ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ld,c.x),f.addScaledVector(cd,c.y),f.addScaledVector(ud,c.z),f}static isFrontFacing(t,i,s,l){return Oi.subVectors(s,i),ya.subVectors(t,i),Oi.cross(ya).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Oi.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Vr.subVectors(l,s),kr.subVectors(c,s),sd.subVectors(t,s);const m=Vr.dot(sd),d=kr.dot(sd);if(m<=0&&d<=0)return i.copy(s);rd.subVectors(t,l);const g=Vr.dot(rd),_=kr.dot(rd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Vr,f);od.subVectors(t,c);const S=Vr.dot(od),E=kr.dot(od);if(E>=0&&S<=E)return i.copy(c);const A=S*d-m*E;if(A<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(s).addScaledVector(kr,p);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return uv.subVectors(c,l),p=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(uv,p);const x=1/(y+A+v);return f=A*x,p=v*x,i.copy(s).addScaledVector(Vr,f).addScaledVector(kr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Tl{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xc.copy(s.boundingBox)),Xc.applyMatrix4(t.matrixWorld),this.union(Xc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),jc.subVectors(this.max,sl),Xr.subVectors(t.a,sl),jr.subVectors(t.b,sl),Wr.subVectors(t.c,sl),cs.subVectors(jr,Xr),us.subVectors(Wr,jr),Gs.subVectors(Xr,Wr);let i=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Gs.z,Gs.y,cs.z,0,-cs.x,us.z,0,-us.x,Gs.z,0,-Gs.x,-cs.y,cs.x,0,-us.y,us.x,0,-Gs.y,Gs.x,0];return!fd(i,Xr,jr,Wr,jc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,Xr,jr,Wr,jc))?!1:(Wc.crossVectors(cs,us),i=[Wc.x,Wc.y,Wc.z],fd(i,Xr,jr,Wr,jc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ea=[new et,new et,new et,new et,new et,new et,new et,new et],Pi=new et,Xc=new Tl,Xr=new et,jr=new et,Wr=new et,cs=new et,us=new et,Gs=new et,sl=new et,jc=new et,Wc=new et,Vs=new et;function fd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Vs.fromArray(r,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),d=i.dot(Vs),g=s.dot(Vs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const pn=new et,Yc=new ce;let DT=0;class hi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Z_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(t),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Qr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Qr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Qr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Qr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Qr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class Xx extends hi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class jx extends hi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bi extends hi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const LT=new Tl,rl=new et,hd=new et;class Du{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):LT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rl.subVectors(t,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(rl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rl.copy(t.center).add(hd)),this.expandByPoint(rl.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let UT=0;const yi=new qe,dd=new Un,Yr=new et,ci=new Tl,ol=new Tl,En=new et;class Jn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kb(t)?jx:Xx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ol.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(ci.min,ol.min),ci.expandByPoint(En),En.addVectors(ci.max,ol.max),ci.expandByPoint(En)):(ci.expandByPoint(ol.min),ci.expandByPoint(ol.max))}ci.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)En.fromBufferAttribute(p,d),m&&(Yr.fromBufferAttribute(t,d),En.add(Yr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new et,m[b]=new et;const d=new et,g=new et,_=new et,v=new ce,S=new ce,E=new ce,A=new et,y=new et;function x(b,L,X){d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),_.fromBufferAttribute(s,X),v.fromBufferAttribute(c,b),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,X),g.sub(d),_.sub(d),S.sub(v),E.sub(v);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(F),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(F),p[b].add(A),p[L].add(A),p[X].add(A),m[b].add(y),m[L].add(y),m[X].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let b=0,L=R.length;b<L;++b){const X=R[b],F=X.start,W=X.count;for(let Q=F,tt=F+W;Q<tt;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const D=new et,U=new et,B=new et,P=new et;function H(b){B.fromBufferAttribute(l,b),P.copy(B);const L=p[b];D.copy(L),D.sub(B.multiplyScalar(B.dot(L))).normalize(),U.crossVectors(P,L);const F=U.dot(m[b])<0?-1:1;f.setXYZW(b,D.x,D.y,D.z,F)}for(let b=0,L=R.length;b<L;++b){const X=R[b],F=X.start,W=X.count;for(let Q=F,tt=F+W;Q<tt;Q+=3)H(t.getX(Q+0)),H(t.getX(Q+1)),H(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new et,c=new et,f=new et,p=new et,m=new et,d=new et,g=new et,_=new et;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),A=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,y),p.add(g),m.add(g),d.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,_=p.normalized,v=new d.constructor(m.length*g);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){p.isInterleavedBufferAttribute?S=m[A]*p.data.stride+p.offset:S=m[A]*g;for(let x=0;x<g;x++)v[E++]=d[S++]}return new hi(v,g,_)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const v=d[g],S=t(v,s);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const S=d[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NT=0;class co extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=to,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Od&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ba=new et,pd=new et,qc=new et,fs=new et,md=new et,Zc=new et,gd=new et;class Lu{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){pd.copy(t).add(i).multiplyScalar(.5),qc.copy(i).sub(t).normalize(),fs.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(qc),p=fs.dot(this.direction),m=-fs.dot(qc),d=fs.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*m-p,v=f*p-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,S=_*(_+f*v+2*p)+v*(f*_+v+2*m)+d}else v=c,_=Math.max(0,-(f*v+p)),S=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(f*v+p)),S=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+d):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+d);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),S=-_*_+v*(v+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(pd).addScaledVector(qc,v),S}intersectSphere(t,i){ba.subVectors(t.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(t.min.x-v.x)*d,l=(t.max.x-v.x)*d):(s=(t.max.x-v.x)*d,l=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,i,s,l,c){md.subVectors(i,t),Zc.subVectors(s,t),gd.crossVectors(md,Zc);let f=this.direction.dot(gd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;fs.subVectors(this.origin,t);const m=p*this.direction.dot(Zc.crossVectors(fs,Zc));if(m<0)return null;const d=p*this.direction.dot(md.cross(fs));if(d<0||m+d>f)return null;const g=-p*fs.dot(gd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uu extends co{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fv=new qe,ks=new Lu,Kc=new Du,hv=new et,Qc=new et,Jc=new et,$c=new et,_d=new et,tu=new et,dv=new et,eu=new et;class bn extends Un{constructor(t=new Jn,i=new Uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){tu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(_d.fromBufferAttribute(_,t),f?tu.addScaledVector(_d,g):tu.addScaledVector(_d.sub(i),g))}i.add(tu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Kc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Kc,hv)===null||ks.origin.distanceToSquared(hv)>(t.far-t.near)**2))&&(fv.copy(c).invert(),ks.copy(t.ray).applyMatrix4(fv),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=f[y.materialIndex],R=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let U=R,B=D;U<B;U+=3){const P=p.getX(U),H=p.getX(U+1),b=p.getX(U+2);l=nu(this,x,t,s,d,g,_,P,H,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const R=p.getX(y),D=p.getX(y+1),U=p.getX(y+2);l=nu(this,f,t,s,d,g,_,R,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=f[y.materialIndex],R=Math.max(y.start,S.start),D=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let U=R,B=D;U<B;U+=3){const P=U,H=U+1,b=U+2;l=nu(this,x,t,s,d,g,_,P,H,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const R=y,D=y+1,U=y+2;l=nu(this,f,t,s,d,g,_,R,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function OT(r,t,i,s,l,c,f,p){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===Ss,p),m===null)return null;eu.copy(p),eu.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(eu);return d<i.near||d>i.far?null:{distance:d,point:eu.clone(),object:r}}function nu(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,Qc),r.getVertexPosition(m,Jc),r.getVertexPosition(d,$c);const g=OT(r,t,i,s,Qc,Jc,$c,dv);if(g){const _=new et;Fi.getBarycoord(dv,Qc,Jc,$c,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,p,m,d,_,new ce)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,p,m,d,_,new ce)),f&&(g.normal=Fi.getInterpolatedAttribute(f,p,m,d,_,new et),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:d,normal:new et,materialIndex:0};Fi.getNormal(Qc,Jc,$c,v.normal),g.face=v,g.barycoord=_}return g}class PT extends Fn{constructor(t=null,i=1,s=1,l,c,f,p,m,d=Ln,g=Ln,_,v){super(null,f,p,m,d,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new et,FT=new et,IT=new pe;class gs{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vd.subVectors(s,i).cross(FT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||IT.getNormalMatrix(t),l=this.coplanarPoint(vd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Du,BT=new ce(.5,.5),iu=new et;class jp{constructor(t=new gs,i=new gs,s=new gs,l=new gs,c=new gs,f=new gs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],S=c[7],E=c[8],A=c[9],y=c[10],x=c[11],R=c[12],D=c[13],U=c[14],B=c[15];if(l[0].setComponents(d-f,S-g,x-E,B-R).normalize(),l[1].setComponents(d+f,S+g,x+E,B+R).normalize(),l[2].setComponents(d+p,S+_,x+A,B+D).normalize(),l[3].setComponents(d-p,S-_,x-A,B-D).normalize(),s)l[4].setComponents(m,v,y,U).normalize(),l[5].setComponents(d-m,S-v,x-y,B-U).normalize();else if(l[4].setComponents(d-m,S-v,x-y,B-U).normalize(),i===Zi)l[5].setComponents(d+m,S+v,x+y,B+U).normalize();else if(i===vl)l[5].setComponents(m,v,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=BT.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(iu.x=l.normal.x>0?t.max.x:t.min.x,iu.y=l.normal.y>0?t.max.y:t.min.y,iu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends co{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bu=new et,Tu=new et,pv=new qe,ll=new Lu,au=new Du,xd=new et,mv=new et;class Wx extends Un{constructor(t=new Jn,i=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)bu.fromBufferAttribute(i,l-1),Tu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=bu.distanceTo(Tu);t.setAttribute("lineDistance",new bi(s,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),au.copy(s.boundingSphere),au.applyMatrix4(l),au.radius+=c,t.ray.intersectsSphere(au)===!1)return;pv.copy(l).invert(),ll.copy(t.ray).applyMatrix4(pv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=S,y=E-1;A<y;A+=d){const x=g.getX(A),R=g.getX(A+1),D=su(this,t,ll,m,x,R,A);D&&i.push(D)}if(this.isLineLoop){const A=g.getX(E-1),y=g.getX(S),x=su(this,t,ll,m,A,y,E-1);x&&i.push(x)}}else{const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=S,y=E-1;A<y;A+=d){const x=su(this,t,ll,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=su(this,t,ll,m,E-1,S,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function su(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(bu.fromBufferAttribute(p,l),Tu.fromBufferAttribute(p,c),i.distanceSqToSegment(bu,Tu,xd,mv)>s)return;xd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(xd);if(!(d<t.near||d>t.far))return{distance:d,point:mv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class Yx extends Fn{constructor(t=[],i=Qs,s,l,c,f,p,m,d,g){super(t,i,s,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qx extends Fn{constructor(t,i,s,l,c,f,p,m,d){super(t,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yl extends Fn{constructor(t,i,s=Ji,l,c,f,p=Ln,m=Ln,d,g=Oa,_=1){if(g!==Oa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,p,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zT extends yl{constructor(t,i=Ji,s=Qs,l,c,f=Ln,p=Ln,m,d=Oa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zx extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yi extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(d,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function E(A,y,x,R,D,U,B,P,H,b,L){const X=U/H,F=B/b,W=U/2,Q=B/2,tt=P/2,J=H+1,N=b+1;let G=0,ot=0;const ht=new et;for(let Mt=0;Mt<N;Mt++){const z=Mt*F-Q;for(let Z=0;Z<J;Z++){const _t=Z*X-W;ht[A]=_t*R,ht[y]=z*D,ht[x]=tt,d.push(ht.x,ht.y,ht.z),ht[A]=0,ht[y]=0,ht[x]=P>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(Z/H),_.push(1-Mt/b),G+=1}}for(let Mt=0;Mt<b;Mt++)for(let z=0;z<H;z++){const Z=v+z+J*Mt,_t=v+z+J*(Mt+1),Et=v+(z+1)+J*(Mt+1),Ut=v+(z+1)+J*Mt;m.push(Z,_t,Ut),m.push(_t,Et,Ut),ot+=6}p.addGroup(S,ot,L),S+=ot,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class tr extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,g=m+1,_=t/p,v=i/m,S=[],E=[],A=[],y=[];for(let x=0;x<g;x++){const R=x*v-f;for(let D=0;D<d;D++){const U=D*_-c;E.push(U,-R,0),A.push(0,0,1),y.push(D/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let R=0;R<p;R++){const D=R+d*x,U=R+d*(x+1),B=R+1+d*(x+1),P=R+1+d*x;S.push(D,U,P),S.push(U,B,P)}this.setIndex(S),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.widthSegments,t.heightSegments)}}function ro(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=ro(r[i]);for(const l in s)t[l]=s[l]}return t}function HT(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const GT={clone:ro,merge:kn};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends co{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=HT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class XT extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hs extends co{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jT extends co{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WT extends co{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gv={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(_v(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!_v(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function _v(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class YT{constructor(t,i,s){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const S=d[_],E=d[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qT=new YT;class Wp{constructor(t){this.manager=t!==void 0?t:qT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ta={};class ZT extends Error{constructor(t,i){super(t),this.response=i}}class KT extends Wp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=gv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Ta[t]!==void 0){Ta[t].push({onLoad:i,onProgress:s,onError:l});return}Ta[t]=[],Ta[t].push({onLoad:i,onProgress:s,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Ta[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let A=0;const y=new ReadableStream({start(x){R();function R(){_.read().then(({done:D,value:U})=>{if(D)x.close();else{A+=U.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:S});for(let P=0,H=g.length;P<H;P++){const b=g[P];b.onProgress&&b.onProgress(B)}x.enqueue(U),R()}},D=>{x.error(D)})}}});return new Response(y)}else throw new ZT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,p));case"json":return d.json();default:if(p==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(p),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return d.arrayBuffer().then(E=>S.decode(E))}}}).then(d=>{gv.add(`file:${t}`,d);const g=Ta[t];delete Ta[t];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onLoad&&S.onLoad(d)}}).catch(d=>{const g=Ta[t];if(g===void 0)throw this.manager.itemError(t),d;delete Ta[t];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onError&&S.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Qx extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Sd=new qe,vv=new et,xv=new et;class QT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;vv.setFromMatrixPosition(t.matrixWorld),i.position.copy(vv),xv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(xv),i.updateMatrixWorld(),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===vl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ru=new et,ou=new ys,Xi=new et;class Jx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ru,ou,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(ru,ou,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new et,Sv=new ce,yv=new ce;class Mi extends Jx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,Sv,yv),i.subVectors(yv,Sv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Yp extends Jx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JT extends QT{constructor(){super(new Yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $T extends Qx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new JT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class tA extends Qx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const qr=-90,Zr=1;class eA extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(qr,Zr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(qr,Zr,t,i);c.layers=this.layers,this.add(c);const f=new Mi(qr,Zr,t,i);f.layers=this.layers,this.add(f);const p=new Mi(qr,Zr,t,i);p.layers=this.layers,this.add(p);const m=new Mi(qr,Zr,t,i);m.layers=this.layers,this.add(m);const d=new Mi(qr,Zr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class nA extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Mv=new qe;class iA{constructor(t,i,s=0,l=1/0){this.ray=new Lu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Mv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mv),this}intersectObject(t,i=!0,s=[]){return bp(t,this,s,i),s.sort(Ev),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)bp(t[l],this,s,i);return s.sort(Ev),s}}function Ev(r,t){return r.distance-t.distance}function bp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)bp(c[f],t,i,!0)}}class bv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aA extends $s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Tv(r,t,i,s){const l=sA(s);switch(i){case Ix:return r*t;case zx:return r*t/l.components*l.byteLength;case Ip:return r*t/l.components*l.byteLength;case ao:return r*t*2/l.components*l.byteLength;case Bp:return r*t*2/l.components*l.byteLength;case Bx:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case zp:return r*t*4/l.components*l.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _u:case vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wd:case qd:return Math.max(r,16)*Math.max(t,8)/4;case jd:case Yd:return Math.max(r,8)*Math.max(t,8)/2;case Zd:case Kd:case Jd:case $d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qd:case tp:case ep:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ap:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gp:case _p:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xp:case Sp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yp:case Mp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sA(r){switch(r){case fi:case Nx:return{byteLength:1,components:1};case gl:case Ox:case Na:return{byteLength:2,components:1};case Pp:case Fp:return{byteLength:2,components:4};case Ji:case Op:case qi:return{byteLength:4,components:1};case Px:case Fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);function $x(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rA(r){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,d,g),p.onUploadCallback();let S;if(d instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=r.SHORT;else if(d instanceof Uint32Array)S=r.UNSIGNED_INT;else if(d instanceof Int32Array)S=r.INT;else if(d instanceof Int8Array)S=r.BYTE;else if(d instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,p),_.length===0)r.bufferSubData(d,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],A=_[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const A=_[S];r.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var oA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lA=`#ifdef USE_ALPHAHASH
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
#endif`,cA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dA=`#ifdef USE_AOMAP
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
#endif`,pA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mA=`#ifdef USE_BATCHING
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
#endif`,gA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SA=`#ifdef USE_IRIDESCENCE
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
#endif`,yA=`#ifdef USE_BUMPMAP
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
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DA=`#define PI 3.141592653589793
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
} // validated`,LA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UA=`vec3 transformedNormal = objectNormal;
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
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IA="gl_FragColor = linearToOutputTexel( gl_FragColor );",BA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zA=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
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
#endif`,XA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qA=`#ifdef USE_GRADIENTMAP
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
}`,ZA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JA=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,$A=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,s1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,r1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tR=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oR=`uniform sampler2D t2D;
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
}`,lR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hR=`#include <common>
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
}`,dR=`#if DEPTH_PACKING == 3200
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
}`,pR=`#define DISTANCE
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
}`,mR=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_R=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`uniform float scale;
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
}`,xR=`uniform vec3 diffuse;
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
}`,SR=`#include <common>
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
}`,yR=`uniform vec3 diffuse;
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
}`,MR=`#define LAMBERT
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
}`,ER=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,bR=`#define MATCAP
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
}`,TR=`#define MATCAP
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
}`,AR=`#define NORMAL
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
}`,RR=`#define NORMAL
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
}`,CR=`#define PHONG
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
}`,wR=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,DR=`#define STANDARD
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
}`,LR=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,UR=`#define TOON
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
}`,NR=`#define TOON
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
}`,OR=`uniform float size;
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
}`,PR=`uniform vec3 diffuse;
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
}`,FR=`#include <common>
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
}`,IR=`uniform vec3 color;
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
}`,BR=`uniform float rotation;
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
}`,zR=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:oA,alphahash_pars_fragment:lA,alphamap_fragment:cA,alphamap_pars_fragment:uA,alphatest_fragment:fA,alphatest_pars_fragment:hA,aomap_fragment:dA,aomap_pars_fragment:pA,batching_pars_vertex:mA,batching_vertex:gA,begin_vertex:_A,beginnormal_vertex:vA,bsdfs:xA,iridescence_fragment:SA,bumpmap_pars_fragment:yA,clipping_planes_fragment:MA,clipping_planes_pars_fragment:EA,clipping_planes_pars_vertex:bA,clipping_planes_vertex:TA,color_fragment:AA,color_pars_fragment:RA,color_pars_vertex:CA,color_vertex:wA,common:DA,cube_uv_reflection_fragment:LA,defaultnormal_vertex:UA,displacementmap_pars_vertex:NA,displacementmap_vertex:OA,emissivemap_fragment:PA,emissivemap_pars_fragment:FA,colorspace_fragment:IA,colorspace_pars_fragment:BA,envmap_fragment:zA,envmap_common_pars_fragment:HA,envmap_pars_fragment:GA,envmap_pars_vertex:VA,envmap_physical_pars_fragment:$A,envmap_vertex:kA,fog_vertex:XA,fog_pars_vertex:jA,fog_fragment:WA,fog_pars_fragment:YA,gradientmap_pars_fragment:qA,lightmap_pars_fragment:ZA,lights_lambert_fragment:KA,lights_lambert_pars_fragment:QA,lights_pars_begin:JA,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:d1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:S1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:E1,normal_fragment_begin:b1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:C1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:O1,packing:P1,premultiplied_alpha_fragment:F1,project_vertex:I1,dithering_fragment:B1,dithering_pars_fragment:z1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:k1,shadowmap_vertex:X1,shadowmask_pars_fragment:j1,skinbase_vertex:W1,skinning_pars_vertex:Y1,skinning_vertex:q1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:$1,transmission_fragment:tR,transmission_pars_fragment:eR,uv_pars_fragment:nR,uv_pars_vertex:iR,uv_vertex:aR,worldpos_vertex:sR,background_vert:rR,background_frag:oR,backgroundCube_vert:lR,backgroundCube_frag:cR,cube_vert:uR,cube_frag:fR,depth_vert:hR,depth_frag:dR,distance_vert:pR,distance_frag:mR,equirect_vert:gR,equirect_frag:_R,linedashed_vert:vR,linedashed_frag:xR,meshbasic_vert:SR,meshbasic_frag:yR,meshlambert_vert:MR,meshlambert_frag:ER,meshmatcap_vert:bR,meshmatcap_frag:TR,meshnormal_vert:AR,meshnormal_frag:RR,meshphong_vert:CR,meshphong_frag:wR,meshphysical_vert:DR,meshphysical_frag:LR,meshtoon_vert:UR,meshtoon_frag:NR,points_vert:OR,points_frag:PR,shadow_vert:FR,shadow_frag:IR,sprite_vert:BR,sprite_frag:zR},Ot={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Wi={basic:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:kn([Ot.common,Ot.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:kn([Ot.lights,Ot.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Wi.physical={uniforms:kn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const lu={r:0,b:0,g:0},js=new Dn,HR=new qe;function GR(r,t,i,s,l,c){const f=new Ce(0);let p=l===!0?0:1,m,d,g=null,_=0,v=null;function S(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const U=R.backgroundBlurriness>0;D=t.get(D,U)}return D}function E(R){let D=!1;const U=S(R);U===null?y(f,p):U&&U.isColor&&(y(U,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,D){const U=S(D);U&&(U.isCubeTexture||U.mapping===wu)?(d===void 0&&(d=new bn(new Yi(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:ro(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),js.copy(D.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(HR.makeRotationFromEuler(js)),d.material.toneMapped=Re.getTransfer(U.colorSpace)!==ze,(g!==U||_!==U.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new bn(new tr(2,2),new $i({name:"BackgroundMaterial",uniforms:ro(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(U.colorSpace)!==ze,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,D){R.getRGB(lu,Kx(r)),i.buffers.color.setClear(lu.r,lu.g,lu.b,D,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,D=1){f.set(R),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(f,p)},render:E,addToRenderList:A,dispose:x}}function VR(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(F,W,Q,tt,J){let N=!1;const G=_(F,tt,Q,W);c!==G&&(c=G,d(c.object)),N=S(F,tt,Q,J),N&&E(F,tt,Q,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,U(F,W,Q,tt),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function d(F){return r.bindVertexArray(F)}function g(F){return r.deleteVertexArray(F)}function _(F,W,Q,tt){const J=tt.wireframe===!0;let N=s[W.id];N===void 0&&(N={},s[W.id]=N);const G=F.isInstancedMesh===!0?F.id:0;let ot=N[G];ot===void 0&&(ot={},N[G]=ot);let ht=ot[Q.id];ht===void 0&&(ht={},ot[Q.id]=ht);let Mt=ht[J];return Mt===void 0&&(Mt=v(m()),ht[J]=Mt),Mt}function v(F){const W=[],Q=[],tt=[];for(let J=0;J<i;J++)W[J]=0,Q[J]=0,tt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:tt,object:F,attributes:{},index:null}}function S(F,W,Q,tt){const J=c.attributes,N=W.attributes;let G=0;const ot=Q.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const z=J[ht];let Z=N[ht];if(Z===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),z===void 0||z.attribute!==Z||Z&&z.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==tt}function E(F,W,Q,tt){const J={},N=W.attributes;let G=0;const ot=Q.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let z=N[ht];z===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));const Z={};Z.attribute=z,z&&z.data&&(Z.data=z.data),J[ht]=Z,G++}c.attributes=J,c.attributesNum=G,c.index=tt}function A(){const F=c.newAttributes;for(let W=0,Q=F.length;W<Q;W++)F[W]=0}function y(F){x(F,0)}function x(F,W){const Q=c.newAttributes,tt=c.enabledAttributes,J=c.attributeDivisors;Q[F]=1,tt[F]===0&&(r.enableVertexAttribArray(F),tt[F]=1),J[F]!==W&&(r.vertexAttribDivisor(F,W),J[F]=W)}function R(){const F=c.newAttributes,W=c.enabledAttributes;for(let Q=0,tt=W.length;Q<tt;Q++)W[Q]!==F[Q]&&(r.disableVertexAttribArray(Q),W[Q]=0)}function D(F,W,Q,tt,J,N,G){G===!0?r.vertexAttribIPointer(F,W,Q,J,N):r.vertexAttribPointer(F,W,Q,tt,J,N)}function U(F,W,Q,tt){A();const J=tt.attributes,N=Q.getAttributes(),G=W.defaultAttributeValues;for(const ot in N){const ht=N[ot];if(ht.location>=0){let Mt=J[ot];if(Mt===void 0&&(ot==="instanceMatrix"&&F.instanceMatrix&&(Mt=F.instanceMatrix),ot==="instanceColor"&&F.instanceColor&&(Mt=F.instanceColor)),Mt!==void 0){const z=Mt.normalized,Z=Mt.itemSize,_t=t.get(Mt);if(_t===void 0)continue;const Et=_t.buffer,Ut=_t.type,rt=_t.bytesPerElement,xt=Ut===r.INT||Ut===r.UNSIGNED_INT||Mt.gpuType===Op;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Gt=bt.stride,jt=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let $t=0;$t<ht.locationSize;$t++)x(ht.location+$t,bt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let $t=0;$t<ht.locationSize;$t++)y(ht.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let $t=0;$t<ht.locationSize;$t++)D(ht.location+$t,Z/ht.locationSize,Ut,z,Gt*rt,(jt+Z/ht.locationSize*$t)*rt,xt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<ht.locationSize;bt++)x(ht.location+bt,Mt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<ht.locationSize;bt++)y(ht.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let bt=0;bt<ht.locationSize;bt++)D(ht.location+bt,Z/ht.locationSize,Ut,z,Z*rt,Z/ht.locationSize*bt*rt,xt)}}else if(G!==void 0){const z=G[ot];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(ht.location,z);break;case 3:r.vertexAttrib3fv(ht.location,z);break;case 4:r.vertexAttrib4fv(ht.location,z);break;default:r.vertexAttrib1fv(ht.location,z)}}}}R()}function B(){L();for(const F in s){const W=s[F];for(const Q in W){const tt=W[Q];for(const J in tt){const N=tt[J];for(const G in N)g(N[G].object),delete N[G];delete tt[J]}}delete s[F]}}function P(F){if(s[F.id]===void 0)return;const W=s[F.id];for(const Q in W){const tt=W[Q];for(const J in tt){const N=tt[J];for(const G in N)g(N[G].object),delete N[G];delete tt[J]}}delete s[F.id]}function H(F){for(const W in s){const Q=s[W];for(const tt in Q){const J=Q[tt];if(J[F.id]===void 0)continue;const N=J[F.id];for(const G in N)g(N[G].object),delete N[G];delete J[F.id]}}}function b(F){for(const W in s){const Q=s[W],tt=F.isInstancedMesh===!0?F.id:0,J=Q[tt];if(J!==void 0){for(const N in J){const G=J[N];for(const ot in G)g(G[ot].object),delete G[ot];delete J[N]}delete Q[tt],Object.keys(Q).length===0&&delete s[W]}}}function L(){X(),f=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function kR(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function p(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(d,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<d.length;E++)f(d[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function XR(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ii&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const b=H===Na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==fi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==qi&&!b)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ne("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:U,maxSamples:B,samples:P}}function jR(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new gs,p=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||s!==0||l;return l=v,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):d();else{const R=c?0:s,D=R*4;let U=x.clippingState||null;m.value=U,U=g(E,v,D,S);for(let B=0;B!==D;++B)U[B]=i[B];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,S,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const x=S+A*4,R=v.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,U=S;D!==A;++D,U+=4)f.copy(_[D]).applyMatrix4(R,p),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}const xs=4,Av=[.125,.215,.35,.446,.526,.582],qs=20,WR=256,cl=new Yp,Rv=new Ce;let yd=null,Md=0,Ed=0,bd=!1;const YR=new et;class Cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=YR}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Na,format:Ii,colorSpace:so,depthBuffer:!1},l=wv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qR(c)),this._blurMaterial=KR(c,t,i),this._ggxMaterial=ZR(c,t,i)}return l}_compileMaterial(t){const i=new bn(new Jn,t);this._renderer.compile(i,cl)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Rv),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Yi,new Uu({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,x=!0):(y.color.copy(Rv),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,d[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const B=this._cubeSize;Kr(l,U*B,D>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(A,m),_.render(t,m)}_.toneMapping=S,_.autoClear=v,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Qs||t.mapping===io;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,cl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,S=_*v,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-xs?s-E+xs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Kr(c,y,x,3*A,2*A),l.setRenderTarget(c),l.render(p,cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Kr(t,y,x,3*A,2*A),l.setRenderTarget(t),l.render(p,cl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=d;const v=d.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qs-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):qs;y>qs&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qs}`);const x=[];let R=0;for(let H=0;H<qs;++H){const b=H/A,L=Math.exp(-b*b/2);x.push(L),H===0?R+=L:H<y&&(R+=2*L)}for(let H=0;H<x.length;H++)x[H]=x[H]/R;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const U=this._sizeLods[l],B=3*U*(l>D-xs?l-D+xs:0),P=4*(this._cubeSize-U);Kr(i,B,P,3*U,2*U),m.setRenderTarget(i),m.render(_,cl)}}function qR(r){const t=[],i=[],s=[];let l=r;const c=r-xs+1+Av.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-xs?m=Av[f-r+xs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,A=3,y=2,x=1,R=new Float32Array(A*E*S),D=new Float32Array(y*E*S),U=new Float32Array(x*E*S);for(let P=0;P<S;P++){const H=P%3*2/3-1,b=P>2?0:-1,L=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];R.set(L,A*E*P),D.set(v,y*E*P);const X=[P,P,P,P,P,P];U.set(X,x*E*P)}const B=new Jn;B.setAttribute("position",new hi(R,A)),B.setAttribute("uv",new hi(D,y)),B.setAttribute("faceIndex",new hi(U,x)),s.push(new bn(B,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function wv(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=wu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ZR(r,t,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function KR(r,t,i){const s=new Float32Array(qs),l=new et(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Dv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Lv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}class tS extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yi(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Da});c.uniforms.tEquirect.value=i;const f=new bn(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=mn),new eA(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function QR(r){let t=new WeakMap,i=new WeakMap,s=null;function l(v,S=!1){return v==null?null:S?f(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===qh||S===Zh)if(t.has(v)){const E=t.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new tS(E.height);return A.fromEquirectangularTexture(r,v),t.set(v,A),v.addEventListener("dispose",d),p(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const S=v.mapping,E=S===qh||S===Zh,A=S===Qs||S===io;if(E||A){let y=i.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new Cv(r)),y=E?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const R=v.image;return E&&R&&R.height>0||A&&R&&m(R)?(s===null&&(s=new Cv(r)),y=E?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function p(v,S){return S===qh?v.mapping=Qs:S===Zh&&(v.mapping=io),v}function m(v){let S=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&S++;return S===E}function d(v){const S=v.target;S.removeEventListener("dispose",d);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function JR(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Eu("WebGLRenderer: "+s+" extension not supported."),l}}}function $R(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function d(_){const v=[],S=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(S!==null){const R=S.array;A=S.version;for(let D=0,U=R.length;D<U;D+=3){const B=R[D+0],P=R[D+1],H=R[D+2];v.push(B,P,P,H,H,B)}}else{const R=E.array;A=E.version;for(let D=0,U=R.length/3-1;D<U;D+=3){const B=D+0,P=D+1,H=D+2;v.push(B,P,P,H,H,B)}}const y=new(E.count>=65535?jx:Xx)(v,1);y.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function tC(r,t,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,S){r.drawElements(s,S,c,v*f),i.update(S,s,1)}function d(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,v*f,E),i.update(S,s,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];i.update(y,s,1)}function _(v,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/f,S[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,v,0,A,0,E);let x=0;for(let R=0;R<E;R++)x+=S[R]*A[R];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function eC(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nC(r,t,i){const s=new WeakMap,l=new an;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(p);if(v===void 0||v.count!==_){let L=function(){H.dispose(),s.delete(p),p.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const S=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,A=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],x=p.morphAttributes.normal||[],R=p.morphAttributes.color||[];let D=0;S===!0&&(D=1),E===!0&&(D=2),A===!0&&(D=3);let U=p.attributes.position.count*D,B=1;U>t.maxTextureSize&&(B=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*B*4*_),H=new Vx(P,U,B,_);H.type=qi,H.needsUpdate=!0;const b=D*4;for(let X=0;X<_;X++){const F=y[X],W=x[X],Q=R[X],tt=U*B*4*X;for(let J=0;J<F.count;J++){const N=J*b;S===!0&&(l.fromBufferAttribute(F,J),P[tt+N+0]=l.x,P[tt+N+1]=l.y,P[tt+N+2]=l.z,P[tt+N+3]=0),E===!0&&(l.fromBufferAttribute(W,J),P[tt+N+4]=l.x,P[tt+N+5]=l.y,P[tt+N+6]=l.z,P[tt+N+7]=0),A===!0&&(l.fromBufferAttribute(Q,J),P[tt+N+8]=l.x,P[tt+N+9]=l.y,P[tt+N+10]=l.z,P[tt+N+11]=Q.itemSize===4?l.w:1)}}v={count:_,texture:H,size:new ce(U,B)},s.set(p,v),p.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let A=0;A<d.length;A++)S+=d[A];const E=p.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function iC(r,t,i,s,l){let c=new WeakMap;function f(d){const g=l.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const S=d.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const aC={[Tx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Lx]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function sC(r,t,i,s,l){const c=new Qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Qi(t,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),p=new Jn;p.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new XT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bn(p,m),g=new Yp(-1,1,1,-1,0,1);let _=null,v=null,S=!1,E,A=null,y=[],x=!1;this.setSize=function(R,D){c.setSize(R,D),f.setSize(R,D);for(let U=0;U<y.length;U++){const B=y[U];B.setSize&&B.setSize(R,D)}},this.setEffects=function(R){y=R,x=y.length>0&&y[0].isRenderPass===!0;const D=c.width,U=c.height;for(let B=0;B<y.length;B++){const P=y[B];P.setSize&&P.setSize(D,U)}},this.begin=function(R,D){if(S||R.toneMapping===Ki&&y.length===0)return!1;if(A=D,D!==null){const U=D.width,B=D.height;(c.width!==U||c.height!==B)&&this.setSize(U,B)}return x===!1&&R.setRenderTarget(c),E=R.toneMapping,R.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(R,D){R.toneMapping=E,S=!0;let U=c,B=f;for(let P=0;P<y.length;P++){const H=y[P];if(H.enabled!==!1&&(H.render(R,B,U,D),H.needsSwap!==!1)){const b=U;U=B,B=b}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,m.defines={},Re.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const P=aC[v];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(A),R.render(d,g),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const eS=new Fn,Tp=new yl(1,1),nS=new Vx,iS=new yT,aS=new Yx,Uv=[],Nv=[],Ov=new Float32Array(16),Pv=new Float32Array(9),Fv=new Float32Array(4);function uo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Uv[l];if(c===void 0&&(c=new Float32Array(l),Uv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Ou(r,t){let i=Nv[t];i===void 0&&(i=new Int32Array(t),Nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function rC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function oC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function lC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function cC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function uC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Fv.set(s),r.uniformMatrix2fv(this.addr,!1,Fv),yn(i,s)}}function fC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Pv.set(s),r.uniformMatrix3fv(this.addr,!1,Pv),yn(i,s)}}function hC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Ov.set(s),r.uniformMatrix4fv(this.addr,!1,Ov),yn(i,s)}}function dC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function pC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function mC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function gC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function _C(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function vC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function xC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function SC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function yC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Tp.compareFunction=i.isReversedDepthBuffer()?Gp:Hp,c=Tp):c=eS,i.setTexture2D(t||c,l)}function MC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||iS,l)}function EC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||aS,l)}function bC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nS,l)}function TC(r){switch(r){case 5126:return rC;case 35664:return oC;case 35665:return lC;case 35666:return cC;case 35674:return uC;case 35675:return fC;case 35676:return hC;case 5124:case 35670:return dC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return gC;case 5125:return _C;case 36294:return vC;case 36295:return xC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return bC}}function AC(r,t){r.uniform1fv(this.addr,t)}function RC(r,t){const i=uo(t,this.size,2);r.uniform2fv(this.addr,i)}function CC(r,t){const i=uo(t,this.size,3);r.uniform3fv(this.addr,i)}function wC(r,t){const i=uo(t,this.size,4);r.uniform4fv(this.addr,i)}function DC(r,t){const i=uo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function LC(r,t){const i=uo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function UC(r,t){const i=uo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function NC(r,t){r.uniform1iv(this.addr,t)}function OC(r,t){r.uniform2iv(this.addr,t)}function PC(r,t){r.uniform3iv(this.addr,t)}function FC(r,t){r.uniform4iv(this.addr,t)}function IC(r,t){r.uniform1uiv(this.addr,t)}function BC(r,t){r.uniform2uiv(this.addr,t)}function zC(r,t){r.uniform3uiv(this.addr,t)}function HC(r,t){r.uniform4uiv(this.addr,t)}function GC(r,t,i){const s=this.cache,l=t.length,c=Ou(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Tp:f=eS;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function VC(r,t,i){const s=this.cache,l=t.length,c=Ou(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||iS,c[f])}function kC(r,t,i){const s=this.cache,l=t.length,c=Ou(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||aS,c[f])}function XC(r,t,i){const s=this.cache,l=t.length,c=Ou(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||nS,c[f])}function jC(r){switch(r){case 5126:return AC;case 35664:return RC;case 35665:return CC;case 35666:return wC;case 35674:return DC;case 35675:return LC;case 35676:return UC;case 5124:case 35670:return NC;case 35667:case 35671:return OC;case 35668:case 35672:return PC;case 35669:case 35673:return FC;case 5125:return IC;case 36294:return BC;case 36295:return zC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return GC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return kC;case 36289:case 36303:case 36311:case 36292:return XC}}class WC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TC(i.type)}}class YC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jC(i.type)}}class qC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Iv(r,t){r.seq.push(t),r.map[t.id]=t}function ZC(r,t,i){const s=r.name,l=s.length;for(Td.lastIndex=0;;){const c=Td.exec(s),f=Td.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Iv(i,d===void 0?new WC(p,r,t):new YC(p,r,t));break}else{let _=i.map[p];_===void 0&&(_=new qC(p),Iv(i,_)),i=_}}}class xu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);ZC(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Bv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const KC=37297;let QC=0;function JC(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const zv=new pe;function $C(r){Re._getMatrix(zv,Re.workingColorSpace,r);const t=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case yu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JC(r.getShaderSource(t),p)}else return c}function tw(r,t){const i=$C(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ew={[Tx]:"Linear",[Ax]:"Reinhard",[Rx]:"Cineon",[Cx]:"ACESFilmic",[Dx]:"AgX",[Lx]:"Neutral",[wx]:"Custom"};function nw(r,t){const i=ew[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cu=new et;function iw(){Re.getLuminanceCoefficients(cu);const r=cu.x.toFixed(4),t=cu.y.toFixed(4),i=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function sw(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rw(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function hl(r){return r!==""}function Gv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(r){return r.replace(ow,cw)}const lw=new Map;function cw(r,t){let i=ge[t];if(i===void 0){const s=lw.get(t);if(s!==void 0)i=ge[s],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ap(i)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(r){return r.replace(uw,fw)}function fw(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Xv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const hw={[pu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function dw(r){return hw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pw={[Qs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function mw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gw={[io]:"ENVMAP_MODE_REFRACTION"};function _w(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vw={[bx]:"ENVMAP_BLENDING_MULTIPLY",[zb]:"ENVMAP_BLENDING_MIX",[Hb]:"ENVMAP_BLENDING_ADD"};function xw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vw[r.combine]||"ENVMAP_BLENDING_NONE"}function Sw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yw(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=dw(i),d=mw(i),g=_w(i),_=xw(i),v=Sw(i),S=aw(i),E=sw(c),A=l.createProgram();let y,x,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(y=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?ge.tonemapping_pars_fragment:"",i.toneMapping!==Ki?nw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,tw("linearToOutputTexel",i.outputColorSpace),iw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),f=Ap(f),f=Gv(f,i),f=Vv(f,i),p=Ap(p),p=Gv(p,i),p=Vv(p,i),f=kv(f),p=kv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=R+y+f,U=R+x+p,B=Bv(l,l.VERTEX_SHADER,D),P=Bv(l,l.FRAGMENT_SHADER,U);l.attachShader(A,B),l.attachShader(A,P),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(F){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(B)||"",tt=l.getShaderInfoLog(P)||"",J=W.trim(),N=Q.trim(),G=tt.trim();let ot=!0,ht=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,B,P);else{const Mt=Hv(l,B,"vertex"),z=Hv(l,P,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+Mt+`
`+z)}else J!==""?ne("WebGLProgram: Program Info Log:",J):(N===""||G==="")&&(ht=!1);ht&&(F.diagnostics={runnable:ot,programLog:J,vertexShader:{log:N,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(P),b=new xu(l,A),L=rw(l,A)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let L;this.getAttributes=function(){return L===void 0&&H(this),L};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(A,KC)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QC++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=P,this}let Mw=0;class Ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new bw(t),i.set(t,s)),s}}class bw{constructor(t){this.id=Mw++,this.code=t,this.usedTimes=0}}function Tw(r,t,i,s,l,c){const f=new Xp,p=new Ew,m=new Set,d=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function A(b,L,X,F,W){const Q=F.fog,tt=W.geometry,J=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=t.get(b.envMap||J,N),ot=G&&G.mapping===wu?G.image.height:null,ht=S[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&ne("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,z=Mt!==void 0?Mt.length:0;let Z=0;tt.morphAttributes.position!==void 0&&(Z=1),tt.morphAttributes.normal!==void 0&&(Z=2),tt.morphAttributes.color!==void 0&&(Z=3);let _t,Et,Ut,rt;if(ht){const Te=Wi[ht];_t=Te.vertexShader,Et=Te.fragmentShader}else _t=b.vertexShader,Et=b.fragmentShader,p.update(b),Ut=p.getVertexShaderID(b),rt=p.getFragmentShaderID(b);const xt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Gt=W.isInstancedMesh===!0,jt=W.isBatchedMesh===!0,$t=!!b.map,je=!!b.matcap,me=!!G,ve=!!b.aoMap,Ue=!!b.lightMap,le=!!b.bumpMap,$e=!!b.normalMap,k=!!b.displacementMap,Ze=!!b.emissiveMap,be=!!b.metalnessMap,Oe=!!b.roughnessMap,qt=b.anisotropy>0,I=b.clearcoat>0,T=b.dispersion>0,K=b.iridescence>0,gt=b.sheen>0,yt=b.transmission>0,pt=qt&&!!b.anisotropyMap,Wt=I&&!!b.clearcoatMap,Dt=I&&!!b.clearcoatNormalMap,Qt=I&&!!b.clearcoatRoughnessMap,ee=K&&!!b.iridescenceMap,Rt=K&&!!b.iridescenceThicknessMap,Tt=gt&&!!b.sheenColorMap,Ft=gt&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,It=!!b.specularColorMap,fe=!!b.specularIntensityMap,q=yt&&!!b.transmissionMap,wt=yt&&!!b.thicknessMap,Ct=!!b.gradientMap,Bt=!!b.alphaMap,At=b.alphaTest>0,dt=!!b.alphaHash,Ht=!!b.extensions;let ae=Ki;b.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Fe={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Et,defines:b.defines,customVertexShaderID:Ut,customFragmentShaderID:rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:jt,batchingColor:jt&&W._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&W.instanceColor!==null,instancingMorph:Gt&&W.morphTexture!==null,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:so,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:je,envMap:me,envMapMode:me&&G.mapping,envMapCubeUVHeight:ot,aoMap:ve,lightMap:Ue,bumpMap:le,normalMap:$e,displacementMap:k,emissiveMap:Ze,normalMapObjectSpace:$e&&b.normalMapType===kb,normalMapTangentSpace:$e&&b.normalMapType===Hx,metalnessMap:be,roughnessMap:Oe,anisotropy:qt,anisotropyMap:pt,clearcoat:I,clearcoatMap:Wt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Qt,dispersion:T,iridescence:K,iridescenceMap:ee,iridescenceThicknessMap:Rt,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:It,specularIntensityMap:fe,transmission:yt,transmissionMap:q,thicknessMap:wt,gradientMap:Ct,opaque:b.transparent===!1&&b.blending===to&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:dt,combine:b.combine,mapUv:$t&&E(b.map.channel),aoMapUv:ve&&E(b.aoMap.channel),lightMapUv:Ue&&E(b.lightMap.channel),bumpMapUv:le&&E(b.bumpMap.channel),normalMapUv:$e&&E(b.normalMap.channel),displacementMapUv:k&&E(b.displacementMap.channel),emissiveMapUv:Ze&&E(b.emissiveMap.channel),metalnessMapUv:be&&E(b.metalnessMap.channel),roughnessMapUv:Oe&&E(b.roughnessMap.channel),anisotropyMapUv:pt&&E(b.anisotropyMap.channel),clearcoatMapUv:Wt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(b.sheenRoughnessMap.channel),specularMapUv:Pt&&E(b.specularMap.channel),specularColorMapUv:It&&E(b.specularColorMap.channel),specularIntensityMapUv:fe&&E(b.specularIntensityMap.channel),transmissionMapUv:q&&E(b.transmissionMap.channel),thicknessMapUv:wt&&E(b.thicknessMap.channel),alphaMapUv:Bt&&E(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&($e||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&($t||Bt),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||tt.attributes.normal===void 0&&$e===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&Re.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:Ze&&b.emissiveMap.isVideoTexture===!0&&Re.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function y(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)L.push(X),L.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(x(L,b),R(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function x(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function R(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),b.push(f.mask)}function D(b){const L=S[b.type];let X;if(L){const F=Wi[L];X=GT.clone(F.uniforms)}else X=b.uniforms;return X}function U(b,L){let X=g.get(L);return X!==void 0?++X.usedTimes:(X=new yw(r,L,b,l),d.push(X),g.set(L,X)),X}function B(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function P(b){p.remove(b)}function H(){p.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:D,acquireProgram:U,releaseProgram:B,releaseShaderCache:P,programs:d,dispose:H}}function Aw(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function Rw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function jv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function p(v,S,E,A,y,x){let R=r[t];return R===void 0?(R={id:v.id,object:v,geometry:S,material:E,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:y,group:x},r[t]=R):(R.id=v.id,R.object=v,R.geometry=S,R.material=E,R.materialVariant=f(v),R.groupOrder=A,R.renderOrder=v.renderOrder,R.z=y,R.group=x),t++,R}function m(v,S,E,A,y,x){const R=p(v,S,E,A,y,x);E.transmission>0?s.push(R):E.transparent===!0?l.push(R):i.push(R)}function d(v,S,E,A,y,x){const R=p(v,S,E,A,y,x);E.transmission>0?s.unshift(R):E.transparent===!0?l.unshift(R):i.unshift(R)}function g(v,S){i.length>1&&i.sort(v||Rw),s.length>1&&s.sort(S||jv),l.length>1&&l.sort(S||jv)}function _(){for(let v=t,S=r.length;v<S;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:_,sort:g}}function Cw(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Wv,r.set(s,[f])):l>=c.length?(f=new Wv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function ww(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function Dw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Lw=0;function Uw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Nw(r){const t=new ww,i=Dw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new et);const l=new et,c=new qe,f=new qe;function p(d){let g=0,_=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,E=0,A=0,y=0,x=0,R=0,D=0,U=0,B=0,P=0,H=0;d.sort(Uw);for(let L=0,X=d.length;L<X;L++){const F=d[L],W=F.color,Q=F.intensity,tt=F.distance;let J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ao?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)g+=W.r*Q,_+=W.g*Q,v+=W.b*Q;else if(F.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(F.sh.coefficients[N],Q);H++}else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const G=F.shadow,ot=i.get(F);ot.shadowIntensity=G.intensity,ot.shadowBias=G.bias,ot.shadowNormalBias=G.normalBias,ot.shadowRadius=G.radius,ot.shadowMapSize=G.mapSize,s.directionalShadow[S]=ot,s.directionalShadowMap[S]=J,s.directionalShadowMatrix[S]=F.shadow.matrix,R++}s.directional[S]=N,S++}else if(F.isSpotLight){const N=t.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(W).multiplyScalar(Q),N.distance=tt,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,s.spot[A]=N;const G=F.shadow;if(F.map&&(s.spotLightMap[B]=F.map,B++,G.updateMatrices(F),F.castShadow&&P++),s.spotLightMatrix[A]=G.matrix,F.castShadow){const ot=i.get(F);ot.shadowIntensity=G.intensity,ot.shadowBias=G.bias,ot.shadowNormalBias=G.normalBias,ot.shadowRadius=G.radius,ot.shadowMapSize=G.mapSize,s.spotShadow[A]=ot,s.spotShadowMap[A]=J,U++}A++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(W).multiplyScalar(Q),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=N,y++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),N.distance=F.distance,N.decay=F.decay,F.castShadow){const G=F.shadow,ot=i.get(F);ot.shadowIntensity=G.intensity,ot.shadowBias=G.bias,ot.shadowNormalBias=G.normalBias,ot.shadowRadius=G.radius,ot.shadowMapSize=G.mapSize,ot.shadowCameraNear=G.camera.near,ot.shadowCameraFar=G.camera.far,s.pointShadow[E]=ot,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=F.shadow.matrix,D++}s.point[E]=N,E++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(Q),N.groundColor.copy(F.groundColor).multiplyScalar(Q),s.hemi[x]=N,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const b=s.hash;(b.directionalLength!==S||b.pointLength!==E||b.spotLength!==A||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==R||b.numPointShadows!==D||b.numSpotShadows!==U||b.numSpotMaps!==B||b.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+B-P,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=H,b.directionalLength=S,b.pointLength=E,b.spotLength=A,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=R,b.numPointShadows=D,b.numSpotShadows=U,b.numSpotMaps=B,b.numLightProbes=H,s.version=Lw++)}function m(d,g){let _=0,v=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const D=d[x];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(D.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const U=s.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),A++}}}return{setup:p,setupView:m,state:s}}function Yv(r){const t=new Nw(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function Ow(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Yv(r),t.set(l,[p])):c>=f.length?(p=new Yv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`,Iw=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],Bw=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],qv=new qe,ul=new et,Ad=new et;function zw(r,t,i){let s=new jp;const l=new ce,c=new ce,f=new an,p=new jT,m=new WT,d={},g=i.maxTextureSize,_={[Ss]:Qn,[Qn]:Ss,[Ei]:Ei},v=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Pw,fragmentShader:Fw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bn(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let x=this.type;this.render=function(P,H,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Sb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pu);const L=r.getRenderTarget(),X=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Da),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=x!==this.type;Q&&H.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(J=>J.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,J=P.length;tt<J;tt++){const N=P[tt],G=N.shadow;if(G===void 0){ne("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ot=G.getFrameExtents();l.multiply(ot),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ot.x),l.x=c.x*ot.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ot.y),l.y=c.y*ot.y,G.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ht,G.map===null||Q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fl){if(N.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qi(l.x,l.y,{format:ao,type:Na,minFilter:mn,magFilter:mn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new yl(l.x,l.y,qi),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=Oa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln}else N.isPointLight?(G.map=new tS(l.x),G.map.depthTexture=new zT(l.x,Ji)):(G.map=new Qi(l.x,l.y),G.map.depthTexture=new yl(l.x,l.y,Ji)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=Oa,this.type===pu?(G.map.depthTexture.compareFunction=ht?Gp:Hp,G.map.depthTexture.minFilter=mn,G.map.depthTexture.magFilter=mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln);G.camera.updateProjectionMatrix()}const Mt=G.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Mt;z++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,z),r.clear();else{z===0&&(r.setRenderTarget(G.map),r.clear());const Z=G.getViewport(z);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),W.viewport(f)}if(N.isPointLight){const Z=G.camera,_t=G.matrix,Et=N.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),ul.setFromMatrixPosition(N.matrixWorld),Z.position.copy(ul),Ad.copy(Z.position),Ad.add(Iw[z]),Z.up.copy(Bw[z]),Z.lookAt(Ad),Z.updateMatrixWorld(),_t.makeTranslation(-ul.x,-ul.y,-ul.z),qv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(qv,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(N);s=G.getFrustum(),U(H,b,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===fl&&R(G,b),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(L,X,F)};function R(P,H){const b=t.update(A);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qi(l.x,l.y,{format:ao,type:Na})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(H,null,b,v,A,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(H,null,b,S,A,null)}function D(P,H,b,L){let X=null;const F=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)X=F;else if(X=b.isPointLight===!0?m:p,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const W=X.uuid,Q=H.uuid;let tt=d[W];tt===void 0&&(tt={},d[W]=tt);let J=tt[Q];J===void 0&&(J=X.clone(),tt[Q]=J,H.addEventListener("dispose",B)),X=J}if(X.visible=H.visible,X.wireframe=H.wireframe,L===fl?X.side=H.shadowSide!==null?H.shadowSide:H.side:X.side=H.shadowSide!==null?H.shadowSide:_[H.side],X.alphaMap=H.alphaMap,X.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,X.map=H.map,X.clipShadows=H.clipShadows,X.clippingPlanes=H.clippingPlanes,X.clipIntersection=H.clipIntersection,X.displacementMap=H.displacementMap,X.displacementScale=H.displacementScale,X.displacementBias=H.displacementBias,X.wireframeLinewidth=H.wireframeLinewidth,X.linewidth=H.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const W=r.properties.get(X);W.light=b}return X}function U(P,H,b,L,X){if(P.visible===!1)return;if(P.layers.test(H.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===fl)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const Q=t.update(P),tt=P.material;if(Array.isArray(tt)){const J=Q.groups;for(let N=0,G=J.length;N<G;N++){const ot=J[N],ht=tt[ot.materialIndex];if(ht&&ht.visible){const Mt=D(P,ht,L,X);P.onBeforeShadow(r,P,H,b,Q,Mt,ot),r.renderBufferDirect(b,null,Q,Mt,P,ot),P.onAfterShadow(r,P,H,b,Q,Mt,ot)}}}else if(tt.visible){const J=D(P,tt,L,X);P.onBeforeShadow(r,P,H,b,Q,J,null),r.renderBufferDirect(b,null,Q,J,P,null),P.onAfterShadow(r,P,H,b,Q,J,null)}}const W=P.children;for(let Q=0,tt=W.length;Q<tt;Q++)U(W[Q],H,b,L,X)}function B(P){P.target.removeEventListener("dispose",B);for(const b in d){const L=d[b],X=P.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function Hw(r,t){function i(){let q=!1;const wt=new an;let Ct=null;const Bt=new an(0,0,0,0);return{setMask:function(At){Ct!==At&&!q&&(r.colorMask(At,At,At,At),Ct=At)},setLocked:function(At){q=At},setClear:function(At,dt,Ht,ae,Fe){Fe===!0&&(At*=ae,dt*=ae,Ht*=ae),wt.set(At,dt,Ht,ae),Bt.equals(wt)===!1&&(r.clearColor(At,dt,Ht,ae),Bt.copy(wt))},reset:function(){q=!1,Ct=null,Bt.set(-1,0,0,0)}}}function s(){let q=!1,wt=!1,Ct=null,Bt=null,At=null;return{setReversed:function(dt){if(wt!==dt){const Ht=t.get("EXT_clip_control");dt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),wt=dt;const ae=At;At=null,this.setClear(ae)}},getReversed:function(){return wt},setTest:function(dt){dt?xt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(dt){Ct!==dt&&!q&&(r.depthMask(dt),Ct=dt)},setFunc:function(dt){if(wt&&(dt=$b[dt]),Bt!==dt){switch(dt){case Fd:r.depthFunc(r.NEVER);break;case Id:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case zd:r.depthFunc(r.EQUAL);break;case Hd:r.depthFunc(r.GEQUAL);break;case Gd:r.depthFunc(r.GREATER);break;case Vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=dt}},setLocked:function(dt){q=dt},setClear:function(dt){At!==dt&&(At=dt,wt&&(dt=1-dt),r.clearDepth(dt))},reset:function(){q=!1,Ct=null,Bt=null,At=null,wt=!1}}}function l(){let q=!1,wt=null,Ct=null,Bt=null,At=null,dt=null,Ht=null,ae=null,Fe=null;return{setTest:function(Te){q||(Te?xt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!q&&(r.stencilMask(Te),wt=Te)},setFunc:function(Te,In,Ai){(Ct!==Te||Bt!==In||At!==Ai)&&(r.stencilFunc(Te,In,Ai),Ct=Te,Bt=In,At=Ai)},setOp:function(Te,In,Ai){(dt!==Te||Ht!==In||ae!==Ai)&&(r.stencilOp(Te,In,Ai),dt=Te,Ht=In,ae=Ai)},setLocked:function(Te){q=Te},setClear:function(Te){Fe!==Te&&(r.clearStencil(Te),Fe=Te)},reset:function(){q=!1,wt=null,Ct=null,Bt=null,At=null,dt=null,Ht=null,ae=null,Fe=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,A=!1,y=null,x=null,R=null,D=null,U=null,B=null,P=null,H=new Ce(0,0,0),b=0,L=!1,X=null,F=null,W=null,Q=null,tt=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ot)[1]),N=G>=1):ot.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),N=G>=2);let ht=null,Mt={};const z=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),_t=new an().fromArray(z),Et=new an().fromArray(Z);function Ut(q,wt,Ct,Bt){const At=new Uint8Array(4),dt=r.createTexture();r.bindTexture(q,dt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<Ct;Ht++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(wt+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return dt}const rt={};rt[r.TEXTURE_2D]=Ut(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=Ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[r.TEXTURE_2D_ARRAY]=Ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=Ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),xt(r.DEPTH_TEST),f.setFunc(no),le(!1),$e(X_),xt(r.CULL_FACE),ve(Da);function xt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function bt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Gt(q,wt){return _[q]!==wt?(r.bindFramebuffer(q,wt),_[q]=wt,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=wt),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function jt(q,wt){let Ct=S,Bt=!1;if(q){Ct=v.get(wt),Ct===void 0&&(Ct=[],v.set(wt,Ct));const At=q.textures;if(Ct.length!==At.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Ht=At.length;dt<Ht;dt++)Ct[dt]=r.COLOR_ATTACHMENT0+dt;Ct.length=At.length,Bt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Ct)}function $t(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const je={[Ys]:r.FUNC_ADD,[Mb]:r.FUNC_SUBTRACT,[Eb]:r.FUNC_REVERSE_SUBTRACT};je[bb]=r.MIN,je[Tb]=r.MAX;const me={[Ab]:r.ZERO,[Rb]:r.ONE,[Cb]:r.SRC_COLOR,[Od]:r.SRC_ALPHA,[Ob]:r.SRC_ALPHA_SATURATE,[Ub]:r.DST_COLOR,[Db]:r.DST_ALPHA,[wb]:r.ONE_MINUS_SRC_COLOR,[Pd]:r.ONE_MINUS_SRC_ALPHA,[Nb]:r.ONE_MINUS_DST_COLOR,[Lb]:r.ONE_MINUS_DST_ALPHA,[Pb]:r.CONSTANT_COLOR,[Fb]:r.ONE_MINUS_CONSTANT_COLOR,[Ib]:r.CONSTANT_ALPHA,[Bb]:r.ONE_MINUS_CONSTANT_ALPHA};function ve(q,wt,Ct,Bt,At,dt,Ht,ae,Fe,Te){if(q===Da){A===!0&&(bt(r.BLEND),A=!1);return}if(A===!1&&(xt(r.BLEND),A=!0),q!==yb){if(q!==y||Te!==L){if((x!==Ys||U!==Ys)&&(r.blendEquation(r.FUNC_ADD),x=Ys,U=Ys),Te)switch(q){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case j_:r.blendFunc(r.ONE,r.ONE);break;case W_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Y_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",q);break}else switch(q){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case j_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case W_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",q);break}R=null,D=null,B=null,P=null,H.set(0,0,0),b=0,y=q,L=Te}return}At=At||wt,dt=dt||Ct,Ht=Ht||Bt,(wt!==x||At!==U)&&(r.blendEquationSeparate(je[wt],je[At]),x=wt,U=At),(Ct!==R||Bt!==D||dt!==B||Ht!==P)&&(r.blendFuncSeparate(me[Ct],me[Bt],me[dt],me[Ht]),R=Ct,D=Bt,B=dt,P=Ht),(ae.equals(H)===!1||Fe!==b)&&(r.blendColor(ae.r,ae.g,ae.b,Fe),H.copy(ae),b=Fe),y=q,L=!1}function Ue(q,wt){q.side===Ei?bt(r.CULL_FACE):xt(r.CULL_FACE);let Ct=q.side===Qn;wt&&(Ct=!Ct),le(Ct),q.blending===to&&q.transparent===!1?ve(Da):ve(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Bt=q.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ze(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(q){X!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),X=q)}function $e(q){q!==vb?(xt(r.CULL_FACE),q!==F&&(q===X_?r.cullFace(r.BACK):q===xb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),F=q}function k(q){q!==W&&(N&&r.lineWidth(q),W=q)}function Ze(q,wt,Ct){q?(xt(r.POLYGON_OFFSET_FILL),(Q!==wt||tt!==Ct)&&(Q=wt,tt=Ct,f.getReversed()&&(wt=-wt),r.polygonOffset(wt,Ct))):bt(r.POLYGON_OFFSET_FILL)}function be(q){q?xt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Oe(q){q===void 0&&(q=r.TEXTURE0+J-1),ht!==q&&(r.activeTexture(q),ht=q)}function qt(q,wt,Ct){Ct===void 0&&(ht===null?Ct=r.TEXTURE0+J-1:Ct=ht);let Bt=Mt[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},Mt[Ct]=Bt),(Bt.type!==q||Bt.texture!==wt)&&(ht!==Ct&&(r.activeTexture(Ct),ht=Ct),r.bindTexture(q,wt||rt[q]),Bt.type=q,Bt.texture=wt)}function I(){const q=Mt[ht];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function gt(){try{r.texSubImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function yt(){try{r.texSubImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Dt(){try{r.texStorage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Qt(){try{r.texStorage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function ee(){try{r.texImage2D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Rt(){try{r.texImage3D(...arguments)}catch(q){Ae("WebGLState:",q)}}function Tt(q){_t.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Ft(q){Et.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Et.copy(q))}function Pt(q,wt){let Ct=d.get(wt);Ct===void 0&&(Ct=new WeakMap,d.set(wt,Ct));let Bt=Ct.get(q);Bt===void 0&&(Bt=r.getUniformBlockIndex(wt,q.name),Ct.set(q,Bt))}function It(q,wt){const Bt=d.get(wt).get(q);m.get(wt)!==Bt&&(r.uniformBlockBinding(wt,Bt,q.__bindingPointIndex),m.set(wt,Bt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ht=null,Mt={},_={},v=new WeakMap,S=[],E=null,A=!1,y=null,x=null,R=null,D=null,U=null,B=null,P=null,H=new Ce(0,0,0),b=0,L=!1,X=null,F=null,W=null,Q=null,tt=null,_t.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:xt,disable:bt,bindFramebuffer:Gt,drawBuffers:jt,useProgram:$t,setBlending:ve,setMaterial:Ue,setFlipSided:le,setCullFace:$e,setLineWidth:k,setPolygonOffset:Ze,setScissorTest:be,activeTexture:Oe,bindTexture:qt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:ee,texImage3D:Rt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:Dt,texStorage3D:Qt,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Wt,scissor:Tt,viewport:Ft,reset:fe}}function Gw(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return S?new OffscreenCanvas(I,T):Mu("canvas")}function A(I,T,K){let gt=1;const yt=qt(I);if((yt.width>K||yt.height>K)&&(gt=K/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(gt*yt.width),Wt=Math.floor(gt*yt.height);_===void 0&&(_=E(pt,Wt));const Dt=T?E(pt,Wt):_;return Dt.width=pt,Dt.height=Wt,Dt.getContext("2d").drawImage(I,0,0,pt,Wt),ne("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Wt+")."),Dt}else return"data"in I&&ne("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(I,T,K,gt,yt=!1){if(I!==null){if(r[I]!==void 0)return r[I];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt=T;if(T===r.RED&&(K===r.FLOAT&&(pt=r.R32F),K===r.HALF_FLOAT&&(pt=r.R16F),K===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.R8UI),K===r.UNSIGNED_SHORT&&(pt=r.R16UI),K===r.UNSIGNED_INT&&(pt=r.R32UI),K===r.BYTE&&(pt=r.R8I),K===r.SHORT&&(pt=r.R16I),K===r.INT&&(pt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(pt=r.RG32F),K===r.HALF_FLOAT&&(pt=r.RG16F),K===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RG8UI),K===r.UNSIGNED_SHORT&&(pt=r.RG16UI),K===r.UNSIGNED_INT&&(pt=r.RG32UI),K===r.BYTE&&(pt=r.RG8I),K===r.SHORT&&(pt=r.RG16I),K===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),K===r.UNSIGNED_INT&&(pt=r.RGB32UI),K===r.BYTE&&(pt=r.RGB8I),K===r.SHORT&&(pt=r.RGB16I),K===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),K===r.UNSIGNED_INT&&(pt=r.RGBA32UI),K===r.BYTE&&(pt=r.RGBA8I),K===r.SHORT&&(pt=r.RGBA16I),K===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),T===r.RGBA){const Wt=yt?yu:Re.getTransfer(gt);K===r.FLOAT&&(pt=r.RGBA32F),K===r.HALF_FLOAT&&(pt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(pt=Wt===ze?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(I,T){let K;return I?T===null||T===Ji||T===_l?K=r.DEPTH24_STENCIL8:T===qi?K=r.DEPTH32F_STENCIL8:T===gl&&(K=r.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===_l?K=r.DEPTH_COMPONENT24:T===qi?K=r.DEPTH_COMPONENT32F:T===gl&&(K=r.DEPTH_COMPONENT16),K}function B(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function P(I){const T=I.target;T.removeEventListener("dispose",P),b(T),T.isVideoTexture&&g.delete(T)}function H(I){const T=I.target;T.removeEventListener("dispose",H),X(T)}function b(I){const T=s.get(I);if(T.__webglInit===void 0)return;const K=I.source,gt=v.get(K);if(gt){const yt=gt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&L(I),Object.keys(gt).length===0&&v.delete(K)}s.remove(I)}function L(I){const T=s.get(I);r.deleteTexture(T.__webglTexture);const K=I.source,gt=v.get(K);delete gt[T.__cacheKey],f.memory.textures--}function X(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let yt=0;yt<T.__webglFramebuffer[gt].length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[gt][yt]);else r.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)r.deleteFramebuffer(T.__webglFramebuffer[gt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=I.textures;for(let gt=0,yt=K.length;gt<yt;gt++){const pt=s.get(K[gt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(K[gt])}s.remove(I)}let F=0;function W(){F=0}function Q(){const I=F;return I>=l.maxTextures&&ne("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),F+=1,I}function tt(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function J(I,T){const K=s.get(I);if(I.isVideoTexture&&be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const gt=I.image;if(gt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,I,T);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function N(I,T){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){rt(K,I,T);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function G(I,T){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){rt(K,I,T);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function ot(I,T){const K=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){xt(K,I,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const ht={[kd]:r.REPEAT,[Ra]:r.CLAMP_TO_EDGE,[Xd]:r.MIRRORED_REPEAT},Mt={[Ln]:r.NEAREST,[Gb]:r.NEAREST_MIPMAP_NEAREST,[Hc]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Kh]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},z={[Xb]:r.NEVER,[Zb]:r.ALWAYS,[jb]:r.LESS,[Hp]:r.LEQUAL,[Wb]:r.EQUAL,[Gp]:r.GEQUAL,[Yb]:r.GREATER,[qb]:r.NOTEQUAL};function Z(I,T){if(T.type===qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===Kh||T.magFilter===Hc||T.magFilter===Zs||T.minFilter===mn||T.minFilter===Kh||T.minFilter===Hc||T.minFilter===Zs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ht[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ht[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ht[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Mt[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ln||T.minFilter!==Hc&&T.minFilter!==Zs||T.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _t(I,T){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",P));const gt=T.source;let yt=v.get(gt);yt===void 0&&(yt={},v.set(gt,yt));const pt=tt(T);if(pt!==I.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),yt[pt].usedTimes++;const Wt=yt[I.__cacheKey];Wt!==void 0&&(yt[I.__cacheKey].usedTimes--,Wt.usedTimes===0&&L(T)),I.__cacheKey=pt,I.__webglTexture=yt[pt].texture}return K}function Et(I,T,K){return Math.floor(Math.floor(I/K)/T)}function Ut(I,T,K,gt){const pt=I.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,gt,T.data);else{pt.sort((Rt,Tt)=>Rt.start-Tt.start);let Wt=0;for(let Rt=1;Rt<pt.length;Rt++){const Tt=pt[Wt],Ft=pt[Rt],Pt=Tt.start+Tt.count,It=Et(Ft.start,T.width,4),fe=Et(Tt.start,T.width,4);Ft.start<=Pt+1&&It===fe&&Et(Ft.start+Ft.count-1,T.width,4)===It?Tt.count=Math.max(Tt.count,Ft.start+Ft.count-Tt.start):(++Wt,pt[Wt]=Ft)}pt.length=Wt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Tt=pt.length;Rt<Tt;Rt++){const Ft=pt[Rt],Pt=Math.floor(Ft.start/4),It=Math.ceil(Ft.count/4),fe=Pt%T.width,q=Math.floor(Pt/T.width),wt=It,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,fe,q,wt,Ct,K,gt,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function rt(I,T,K){let gt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=r.TEXTURE_3D);const yt=_t(I,T),pt=T.source;i.bindTexture(gt,I.__webglTexture,r.TEXTURE0+K);const Wt=s.get(pt);if(pt.version!==Wt.__version||yt===!0){i.activeTexture(r.TEXTURE0+K);const Dt=Re.getPrimaries(Re.workingColorSpace),Qt=T.colorSpace===vs?null:Re.getPrimaries(T.colorSpace),ee=T.colorSpace===vs||Dt===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Rt=A(T.image,!1,l.maxTextureSize);Rt=Oe(T,Rt);const Tt=c.convert(T.format,T.colorSpace),Ft=c.convert(T.type);let Pt=D(T.internalFormat,Tt,Ft,T.colorSpace,T.isVideoTexture);Z(gt,T);let It;const fe=T.mipmaps,q=T.isVideoTexture!==!0,wt=Wt.__version===void 0||yt===!0,Ct=pt.dataReady,Bt=B(T,Rt);if(T.isDepthTexture)Pt=U(T.format===Ks,T.type),wt&&(q?i.texStorage2D(r.TEXTURE_2D,1,Pt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,Rt.width,Rt.height,0,Tt,Ft,null));else if(T.isDataTexture)if(fe.length>0){q&&wt&&i.texStorage2D(r.TEXTURE_2D,Bt,Pt,fe[0].width,fe[0].height);for(let At=0,dt=fe.length;At<dt;At++)It=fe[At],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,Ft,It.data):i.texImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,Tt,Ft,It.data);T.generateMipmaps=!1}else q?(wt&&i.texStorage2D(r.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height),Ct&&Ut(T,Rt,Tt,Ft)):i.texImage2D(r.TEXTURE_2D,0,Pt,Rt.width,Rt.height,0,Tt,Ft,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Pt,fe[0].width,fe[0].height,Rt.depth);for(let At=0,dt=fe.length;At<dt;At++)if(It=fe[At],T.format!==Ii)if(Tt!==null)if(q){if(Ct)if(T.layerUpdates.size>0){const Ht=Tv(It.width,It.height,T.format,T.type);for(const ae of T.layerUpdates){const Fe=It.data.subarray(ae*Ht/It.data.BYTES_PER_ELEMENT,(ae+1)*Ht/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,ae,It.width,It.height,1,Tt,Fe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,Rt.depth,Tt,It.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Pt,It.width,It.height,Rt.depth,0,It.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,Rt.depth,Tt,Ft,It.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Pt,It.width,It.height,Rt.depth,0,Tt,Ft,It.data)}else{q&&wt&&i.texStorage2D(r.TEXTURE_2D,Bt,Pt,fe[0].width,fe[0].height);for(let At=0,dt=fe.length;At<dt;At++)It=fe[At],T.format!==Ii?Tt!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,It.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,It.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,Tt,Ft,It.data):i.texImage2D(r.TEXTURE_2D,At,Pt,It.width,It.height,0,Tt,Ft,It.data)}else if(T.isDataArrayTexture)if(q){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Pt,Rt.width,Rt.height,Rt.depth),Ct)if(T.layerUpdates.size>0){const At=Tv(Rt.width,Rt.height,T.format,T.type);for(const dt of T.layerUpdates){const Ht=Rt.data.subarray(dt*At/Rt.data.BYTES_PER_ELEMENT,(dt+1)*At/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,Rt.width,Rt.height,1,Tt,Ft,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Tt,Ft,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,Rt.width,Rt.height,Rt.depth,0,Tt,Ft,Rt.data);else if(T.isData3DTexture)q?(wt&&i.texStorage3D(r.TEXTURE_3D,Bt,Pt,Rt.width,Rt.height,Rt.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Tt,Ft,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,Rt.width,Rt.height,Rt.depth,0,Tt,Ft,Rt.data);else if(T.isFramebufferTexture){if(wt)if(q)i.texStorage2D(r.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height);else{let At=Rt.width,dt=Rt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(r.TEXTURE_2D,Ht,Pt,At,dt,0,Tt,Ft,null),At>>=1,dt>>=1}}else if(fe.length>0){if(q&&wt){const At=qt(fe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Pt,At.width,At.height)}for(let At=0,dt=fe.length;At<dt;At++)It=fe[At],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Tt,Ft,It):i.texImage2D(r.TEXTURE_2D,At,Pt,Tt,Ft,It);T.generateMipmaps=!1}else if(q){if(wt){const At=qt(Rt);i.texStorage2D(r.TEXTURE_2D,Bt,Pt,At.width,At.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ft,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,Tt,Ft,Rt);y(T)&&x(gt),Wt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function xt(I,T,K){if(T.image.length!==6)return;const gt=_t(I,T),yt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+K);const pt=s.get(yt);if(yt.version!==pt.__version||gt===!0){i.activeTexture(r.TEXTURE0+K);const Wt=Re.getPrimaries(Re.workingColorSpace),Dt=T.colorSpace===vs?null:Re.getPrimaries(T.colorSpace),Qt=T.colorSpace===vs||Wt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let dt=0;dt<6;dt++)!ee&&!Rt?Tt[dt]=A(T.image[dt],!0,l.maxCubemapSize):Tt[dt]=Rt?T.image[dt].image:T.image[dt],Tt[dt]=Oe(T,Tt[dt]);const Ft=Tt[0],Pt=c.convert(T.format,T.colorSpace),It=c.convert(T.type),fe=D(T.internalFormat,Pt,It,T.colorSpace),q=T.isVideoTexture!==!0,wt=pt.__version===void 0||gt===!0,Ct=yt.dataReady;let Bt=B(T,Ft);Z(r.TEXTURE_CUBE_MAP,T);let At;if(ee){q&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,Ft.width,Ft.height);for(let dt=0;dt<6;dt++){At=Tt[dt].mipmaps;for(let Ht=0;Ht<At.length;Ht++){const ae=At[Ht];T.format!==Ii?Pt!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,fe,ae.width,ae.height,0,ae.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,ae.width,ae.height,Pt,It,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,fe,ae.width,ae.height,0,Pt,It,ae.data)}}}else{if(At=T.mipmaps,q&&wt){At.length>0&&Bt++;const dt=qt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Rt){q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Tt[dt].width,Tt[dt].height,Pt,It,Tt[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,fe,Tt[dt].width,Tt[dt].height,0,Pt,It,Tt[dt].data);for(let Ht=0;Ht<At.length;Ht++){const Fe=At[Ht].image[dt].image;q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Fe.width,Fe.height,Pt,It,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,fe,Fe.width,Fe.height,0,Pt,It,Fe.data)}}else{q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt,It,Tt[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,fe,Pt,It,Tt[dt]);for(let Ht=0;Ht<At.length;Ht++){const ae=At[Ht];q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Pt,It,ae.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,fe,Pt,It,ae.image[dt])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),pt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function bt(I,T,K,gt,yt,pt){const Wt=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),Qt=D(K.internalFormat,Wt,Dt,K.colorSpace),ee=s.get(T),Rt=s.get(K);if(Rt.__renderTarget=T,!ee.__hasExternalTextures){const Tt=Math.max(1,T.width>>pt),Ft=Math.max(1,T.height>>pt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,Qt,Tt,Ft,T.depth,0,Wt,Dt,null):i.texImage2D(yt,pt,Qt,Tt,Ft,0,Wt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),Ze(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,yt,Rt.__webglTexture,0,k(T)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,yt,Rt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(I,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const gt=T.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,pt=U(T.stencilBuffer,yt),Wt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),pt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,I)}else{const gt=T.textures;for(let yt=0;yt<gt.length;yt++){const pt=gt[yt],Wt=c.convert(pt.format,pt.colorSpace),Dt=c.convert(pt.type),Qt=D(pt.internalFormat,Wt,Dt,pt.colorSpace);Ze(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),Qt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),Qt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function jt(I,T,K){const gt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(T.depthTexture);if(yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),Z(r.TEXTURE_CUBE_MAP,T.depthTexture);const ee=c.convert(T.depthTexture.format),Rt=c.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Oa?Tt=r.DEPTH_COMPONENT24:T.depthTexture.format===Ks&&(Tt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Tt,T.width,T.height,0,ee,Rt,null)}}else J(T.depthTexture,0);const pt=yt.__webglTexture,Wt=k(T),Dt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,Qt=T.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Oa)Ze(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Dt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Dt,pt,0);else if(T.depthTexture.format===Ks)Ze(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Dt,pt,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Dt,pt,0);else throw new Error("Unknown depthTexture format")}function $t(I){const T=s.get(I),K=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const gt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=gt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let gt=0;gt<6;gt++)jt(T.__webglFramebuffer[gt],I,gt);else{const gt=I.texture.mipmaps;gt&&gt.length>0?jt(T.__webglFramebuffer[0],I,0):jt(T.__webglFramebuffer,I,0)}else if(K){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=r.createRenderbuffer(),Gt(T.__webglDepthbuffer[gt],I,!1);else{const yt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}else{const gt=I.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Gt(T.__webglDepthbuffer,I,!1);else{const yt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function je(I,T,K){const gt=s.get(I);T!==void 0&&bt(gt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&$t(I)}function me(I){const T=I.texture,K=s.get(I),gt=s.get(T);I.addEventListener("dispose",H);const yt=I.textures,pt=I.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=T.version,f.memory.textures++),pt){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let Qt=0;Qt<T.mipmaps.length;Qt++)K.__webglFramebuffer[Dt][Qt]=r.createFramebuffer()}else K.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Dt=0,Qt=yt.length;Dt<Qt;Dt++){const ee=s.get(yt[Dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&Ze(I)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Qt=yt[Dt];K.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt]);const ee=c.convert(Qt.format,Qt.colorSpace),Rt=c.convert(Qt.type),Tt=D(Qt.internalFormat,ee,Rt,Qt.colorSpace,I.isXRRenderTarget===!0),Ft=k(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,Tt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(K.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),Z(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)bt(K.__webglFramebuffer[Dt][Qt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Qt);else bt(K.__webglFramebuffer[Dt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Dt=0,Qt=yt.length;Dt<Qt;Dt++){const ee=yt[Dt],Rt=s.get(ee);let Tt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Rt.__webglTexture),Z(Tt,ee),bt(K.__webglFramebuffer,I,ee,r.COLOR_ATTACHMENT0+Dt,Tt,0),y(ee)&&x(Tt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,gt.__webglTexture),Z(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)bt(K.__webglFramebuffer[Qt],I,T,r.COLOR_ATTACHMENT0,Dt,Qt);else bt(K.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Dt,0);y(T)&&x(Dt),i.unbindTexture()}I.depthBuffer&&$t(I)}function ve(I){const T=I.textures;for(let K=0,gt=T.length;K<gt;K++){const yt=T[K];if(y(yt)){const pt=R(I),Wt=s.get(yt).__webglTexture;i.bindTexture(pt,Wt),x(pt),i.unbindTexture()}}}const Ue=[],le=[];function $e(I){if(I.samples>0){if(Ze(I)===!1){const T=I.textures,K=I.width,gt=I.height;let yt=r.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(I),Dt=T.length>1;if(Dt)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Qt=I.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Rt=s.get(T[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,K,gt,0,0,K,gt,yt,r.NEAREST),m===!0&&(Ue.length=0,le.length=0,Ue.push(r.COLOR_ATTACHMENT0+ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ue.push(pt),le.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Rt=s.get(T[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(I){return Math.min(l.maxSamples,I.samples)}function Ze(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(I){const T=f.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Oe(I,T){const K=I.colorSpace,gt=I.format,yt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==so&&K!==vs&&(Re.getTransfer(K)===ze?(gt!==Ii||yt!==fi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",K)),T}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=ot,this.rebindTextures=je,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Vw(r,t){function i(s,l=vs){let c;const f=Re.getTransfer(l);if(s===fi)return r.UNSIGNED_BYTE;if(s===Pp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Px)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nx)return r.BYTE;if(s===Ox)return r.SHORT;if(s===gl)return r.UNSIGNED_SHORT;if(s===Op)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===Ix)return r.ALPHA;if(s===Bx)return r.RGB;if(s===Ii)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===zx)return r.RED;if(s===Ip)return r.RED_INTEGER;if(s===ao)return r.RG;if(s===Bp)return r.RG_INTEGER;if(s===zp)return r.RGBA_INTEGER;if(s===mu||s===gu||s===_u||s===vu)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jd||s===Wd||s===Yd||s===qd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Zd||s===Kd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Qd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Jd)return c.COMPRESSED_R11_EAC;if(s===$d)return c.COMPRESSED_SIGNED_R11_EAC;if(s===tp)return c.COMPRESSED_RG11_EAC;if(s===ep)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp||s===pp||s===mp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===np)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ip)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ap)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gp||s===_p||s===vp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===gp)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xp||s===Sp||s===yp||s===Mp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
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

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Zx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new $i({vertexShader:kw,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new tr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends $s{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,_=null,v=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",y=new jw,x={},R=i.getContextAttributes();let D=null,U=null;const B=[],P=[],H=new ce;let b=null;const L=new Mi;L.viewport=new an;const X=new Mi;X.viewport=new an;const F=[L,X],W=new nA;let Q=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let xt=B[rt];return xt===void 0&&(xt=new nd,B[rt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(rt){let xt=B[rt];return xt===void 0&&(xt=new nd,B[rt]=xt),xt.getGripSpace()},this.getHand=function(rt){let xt=B[rt];return xt===void 0&&(xt=new nd,B[rt]=xt),xt.getHandSpace()};function J(rt){const xt=P.indexOf(rt.inputSource);if(xt===-1)return;const bt=B[xt];bt!==void 0&&(bt.update(rt.inputSource,rt.frame,d||f),bt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function N(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",G);for(let rt=0;rt<B.length;rt++){const xt=P[rt];xt!==null&&(P[rt]=null,B[rt].disconnect(xt))}Q=null,tt=null,y.reset();for(const rt in x)delete x[rt];t.setRenderTarget(D),S=null,v=null,_=null,l=null,U=null,Ut.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){p=rt,s.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(rt){d=rt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",N),l.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(H),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Gt=null,jt=null;R.depth&&(jt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=R.stencil?Ks:Oa,Gt=R.stencil?_l:Ji);const $t={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($t),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Qi(v.textureWidth,v.textureHeight,{format:Ii,type:fi,depthTexture:new yl(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Ii,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Ut.setContext(l),Ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(rt){for(let xt=0;xt<rt.removed.length;xt++){const bt=rt.removed[xt],Gt=P.indexOf(bt);Gt>=0&&(P[Gt]=null,B[Gt].disconnect(bt))}for(let xt=0;xt<rt.added.length;xt++){const bt=rt.added[xt];let Gt=P.indexOf(bt);if(Gt===-1){for(let $t=0;$t<B.length;$t++)if($t>=P.length){P.push(bt),Gt=$t;break}else if(P[$t]===null){P[$t]=bt,Gt=$t;break}if(Gt===-1)break}const jt=B[Gt];jt&&jt.connect(bt)}}const ot=new et,ht=new et;function Mt(rt,xt,bt){ot.setFromMatrixPosition(xt.matrixWorld),ht.setFromMatrixPosition(bt.matrixWorld);const Gt=ot.distanceTo(ht),jt=xt.projectionMatrix.elements,$t=bt.projectionMatrix.elements,je=jt[14]/(jt[10]-1),me=jt[14]/(jt[10]+1),ve=(jt[9]+1)/jt[5],Ue=(jt[9]-1)/jt[5],le=(jt[8]-1)/jt[0],$e=($t[8]+1)/$t[0],k=je*le,Ze=je*$e,be=Gt/(-le+$e),Oe=be*-le;if(xt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Oe),rt.translateZ(be),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),jt[10]===-1)rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const qt=je+be,I=me+be,T=k-Oe,K=Ze+(Gt-Oe),gt=ve*me/I*qt,yt=Ue*me/I*qt;rt.projectionMatrix.makePerspective(T,K,gt,yt,qt,I),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function z(rt,xt){xt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(xt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let xt=rt.near,bt=rt.far;y.texture!==null&&(y.depthNear>0&&(xt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),W.near=X.near=L.near=xt,W.far=X.far=L.far=bt,(Q!==W.near||tt!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),Q=W.near,tt=W.far),W.layers.mask=rt.layers.mask|6,L.layers.mask=W.layers.mask&-5,X.layers.mask=W.layers.mask&-3;const Gt=rt.parent,jt=W.cameras;z(W,Gt);for(let $t=0;$t<jt.length;$t++)z(jt[$t],Gt);jt.length===2?Mt(W,L,X):W.projectionMatrix.copy(L.projectionMatrix),Z(rt,W,Gt)};function Z(rt,xt,bt){bt===null?rt.matrix.copy(xt.matrixWorld):(rt.matrix.copy(bt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(xt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=xl*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(rt){m=rt,v!==null&&(v.fixedFoveation=rt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(rt){return x[rt]};let _t=null;function Et(rt,xt){if(g=xt.getViewerPose(d||f),E=xt,g!==null){const bt=g.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Gt=!1;bt.length!==W.cameras.length&&(W.cameras.length=0,Gt=!0);for(let me=0;me<bt.length;me++){const ve=bt[me];let Ue=null;if(S!==null)Ue=S.getViewport(ve);else{const $e=_.getViewSubImage(v,ve);Ue=$e.viewport,me===0&&(t.setRenderTargetTextures(U,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(U))}let le=F[me];le===void 0&&(le=new Mi,le.layers.enable(me),le.viewport=new an,F[me]=le),le.matrix.fromArray(ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(W.matrix.copy(le.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Gt===!0&&W.cameras.push(le)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const me=_.getDepthInformation(bt[0]);me&&me.isValid&&me.texture&&y.init(me,l.renderState)}if(jt&&jt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let me=0;me<bt.length;me++){const ve=bt[me].camera;if(ve){let Ue=x[ve];Ue||(Ue=new Zx,x[ve]=Ue);const le=_.getCameraImage(ve);Ue.sourceTexture=le}}}}for(let bt=0;bt<B.length;bt++){const Gt=P[bt],jt=B[bt];Gt!==null&&jt!==void 0&&jt.update(Gt,xt,d||f)}_t&&_t(rt,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Ut=new $x;Ut.setAnimationLoop(Et),this.setAnimationLoop=function(rt){_t=rt},this.dispose=function(){}}}const Ws=new Dn,Yw=new qe;function qw(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Kx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,R,D,U){x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,U)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),A(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,R,D):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=t.get(x),D=R.envMap,U=R.envMapRotation;D&&(y.envMap.value=D,Ws.copy(U),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),y.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(Ws)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,R,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const R=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Zw(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,D){const U=D.program;s.uniformBlockBinding(R,U)}function d(R,D){let U=l[R.id];U===void 0&&(E(R),U=g(R),l[R.id]=U,R.addEventListener("dispose",y));const B=D.program;s.updateUBOMapping(R,B);const P=t.render.frame;c[R.id]!==P&&(v(R),c[R.id]=P)}function g(R){const D=_();R.__bindingPointIndex=D;const U=r.createBuffer(),B=R.__size,P=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function _(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const D=l[R.id],U=R.uniforms,B=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let P=0,H=U.length;P<H;P++){const b=Array.isArray(U[P])?U[P]:[U[P]];for(let L=0,X=b.length;L<X;L++){const F=b[L];if(S(F,P,L,B)===!0){const W=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let tt=0;for(let J=0;J<Q.length;J++){const N=Q[J],G=A(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,W+tt,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,tt),tt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(R,D,U,B){const P=R.value,H=D+"_"+U;if(B[H]===void 0)return typeof P=="number"||typeof P=="boolean"?B[H]=P:B[H]=P.clone(),!0;{const b=B[H];if(typeof P=="number"||typeof P=="boolean"){if(b!==P)return B[H]=P,!0}else if(b.equals(P)===!1)return b.copy(P),!0}return!1}function E(R){const D=R.uniforms;let U=0;const B=16;for(let H=0,b=D.length;H<b;H++){const L=Array.isArray(D[H])?D[H]:[D[H]];for(let X=0,F=L.length;X<F;X++){const W=L[X],Q=Array.isArray(W.value)?W.value:[W.value];for(let tt=0,J=Q.length;tt<J;tt++){const N=Q[tt],G=A(N),ot=U%B,ht=ot%G.boundary,Mt=ot+ht;U+=ht,Mt!==0&&B-Mt<G.storage&&(U+=B-Mt),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=G.storage}}}const P=U%B;return P>0&&(U+=B-P),R.__size=U,R.__cache={},this}function A(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",R),D}function y(R){const D=R.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:d,dispose:x}}const Kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function Qw(){return ji===null&&(ji=new PT(Kw,16,16,ao,Na),ji.name="DFG_LUT",ji.minFilter=mn,ji.magFilter=mn,ji.wrapS=Ra,ji.wrapT=Ra,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class Jw{constructor(t={}){const{canvas:i=Qb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=fi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=S,y=new Set([zp,Bp,Ip]),x=new Set([fi,Ji,gl,_l,Pp,Fp]),R=new Uint32Array(4),D=new Int32Array(4);let U=null,B=null;const P=[],H=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let X=!1;this._outputColorSpace=ui;let F=0,W=0,Q=null,tt=-1,J=null;const N=new an,G=new an;let ot=null;const ht=new Ce(0);let Mt=0,z=i.width,Z=i.height,_t=1,Et=null,Ut=null;const rt=new an(0,0,z,Z),xt=new an(0,0,z,Z);let bt=!1;const Gt=new jp;let jt=!1,$t=!1;const je=new qe,me=new et,ve=new an,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function $e(){return Q===null?_t:1}let k=s;function Ze(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Np}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),k===null){const Y="webgl2";if(k=Ze(Y,w),k===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ae("WebGLRenderer: "+w.message),w}let be,Oe,qt,I,T,K,gt,yt,pt,Wt,Dt,Qt,ee,Rt,Tt,Ft,Pt,It,fe,q,wt,Ct,Bt;function At(){be=new JR(k),be.init(),wt=new Vw(k,be),Oe=new XR(k,be,t,wt),qt=new Hw(k,be),Oe.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),I=new eC(k),T=new Aw,K=new Gw(k,be,qt,T,Oe,wt,I),gt=new QR(L),yt=new rA(k),Ct=new VR(k,yt),pt=new $R(k,yt,I,Ct),Wt=new iC(k,pt,yt,Ct,I),It=new nC(k,Oe,K),Tt=new jR(T),Dt=new Tw(L,gt,be,Oe,Ct,Tt),Qt=new qw(L,T),ee=new Cw,Rt=new Ow(be),Pt=new GR(L,gt,qt,Wt,E,m),Ft=new zw(L,Wt,Oe),Bt=new Zw(k,I,Oe,qt),fe=new kR(k,be,I),q=new tC(k,be,I),I.programs=Dt.programs,L.capabilities=Oe,L.extensions=be,L.properties=T,L.renderLists=ee,L.shadowMap=Ft,L.state=qt,L.info=I}At(),A!==fi&&(b=new sC(A,i.width,i.height,l,c));const dt=new Ww(L,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(z,Z,!1))},this.getSize=function(w){return w.set(z,Z)},this.setSize=function(w,Y,ut=!0){if(dt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Z=Y,i.width=Math.floor(w*_t),i.height=Math.floor(Y*_t),ut===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(z*_t,Z*_t).floor()},this.setDrawingBufferSize=function(w,Y,ut){z=w,Z=Y,_t=ut,i.width=Math.floor(w*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(A===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(rt)},this.setViewport=function(w,Y,ut,lt){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,Y,ut,lt),qt.viewport(N.copy(rt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,Y,ut,lt){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,Y,ut,lt),qt.scissor(G.copy(xt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(w){qt.setScissorTest(bt=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ut=!0){let lt=0;if(w){let it=!1;if(Q!==null){const Lt=Q.texture.format;it=y.has(Lt)}if(it){const Lt=Q.texture.type,zt=x.has(Lt),Nt=Pt.getClearColor(),Yt=Pt.getClearAlpha(),Kt=Nt.r,ie=Nt.g,re=Nt.b;zt?(R[0]=Kt,R[1]=ie,R[2]=re,R[3]=Yt,k.clearBufferuiv(k.COLOR,0,R)):(D[0]=Kt,D[1]=ie,D[2]=re,D[3]=Yt,k.clearBufferiv(k.COLOR,0,D))}else lt|=k.COLOR_BUFFER_BIT}Y&&(lt|=k.DEPTH_BUFFER_BIT),ut&&(lt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&k.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Pt.dispose(),ee.dispose(),Rt.dispose(),T.dispose(),gt.dispose(),Wt.dispose(),Ct.dispose(),Bt.dispose(),Dt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",nr),dt.removeEventListener("sessionend",ir),zi.stop()};function Ht(w){w.preventDefault(),J_("WebGLRenderer: Context Lost."),X=!0}function ae(){J_("WebGLRenderer: Context Restored."),X=!1;const w=I.autoReset,Y=Ft.enabled,ut=Ft.autoUpdate,lt=Ft.needsUpdate,it=Ft.type;At(),I.autoReset=w,Ft.enabled=Y,Ft.autoUpdate=ut,Ft.needsUpdate=lt,Ft.type=it}function Fe(w){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const Y=w.target;Y.removeEventListener("dispose",Te),In(Y)}function In(w){Ai(w),T.remove(w)}function Ai(w){const Y=T.get(w).programs;Y!==void 0&&(Y.forEach(function(ut){Dt.releaseProgram(ut)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ut,lt,it,Lt){Y===null&&(Y=Ue);const zt=it.isMesh&&it.matrixWorld.determinant()<0,Nt=wl(w,Y,ut,lt,it);qt.setMaterial(lt,zt);let Yt=ut.index,Kt=1;if(lt.wireframe===!0){if(Yt=pt.getWireframeAttribute(ut),Yt===void 0)return;Kt=2}const ie=ut.drawRange,re=ut.attributes.position;let Vt=ie.start*Kt,he=(ie.start+ie.count)*Kt;Lt!==null&&(Vt=Math.max(Vt,Lt.start*Kt),he=Math.min(he,(Lt.start+Lt.count)*Kt)),Yt!==null?(Vt=Math.max(Vt,0),he=Math.min(he,Yt.count)):re!=null&&(Vt=Math.max(Vt,0),he=Math.min(he,re.count));const Ke=he-Vt;if(Ke<0||Ke===1/0)return;Ct.setup(it,lt,Nt,ut,Yt);let Qe,we=fe;if(Yt!==null&&(Qe=yt.get(Yt),we=q,we.setIndex(Qe)),it.isMesh)lt.wireframe===!0?(qt.setLineWidth(lt.wireframeLinewidth*$e()),we.setMode(k.LINES)):we.setMode(k.TRIANGLES);else if(it.isLine){let _n=lt.linewidth;_n===void 0&&(_n=1),qt.setLineWidth(_n*$e()),it.isLineSegments?we.setMode(k.LINES):it.isLineLoop?we.setMode(k.LINE_LOOP):we.setMode(k.LINE_STRIP)}else it.isPoints?we.setMode(k.POINTS):it.isSprite&&we.setMode(k.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))we.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const _n=it._multiDrawStarts,Xt=it._multiDrawCounts,Bn=it._multiDrawCount,se=Yt?yt.get(Yt).bytesPerElement:1,zn=T.get(lt).currentProgram.getUniforms();for(let $n=0;$n<Bn;$n++)zn.setValue(k,"_gl_DrawID",$n),we.render(_n[$n]/se,Xt[$n])}else if(it.isInstancedMesh)we.renderInstances(Vt,Ke,it.count);else if(ut.isInstancedBufferGeometry){const _n=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Xt=Math.min(ut.instanceCount,_n);we.renderInstances(Vt,Ke,Xt)}else we.render(Vt,Ke)};function fo(w,Y,ut){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Pa(w,Y,ut),w.side=Ss,w.needsUpdate=!0,Pa(w,Y,ut),w.side=Ei):Pa(w,Y,ut)}this.compile=function(w,Y,ut=null){ut===null&&(ut=w),B=Rt.get(ut),B.init(Y),H.push(B),ut.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(B.pushLight(it),it.castShadow&&B.pushShadow(it))}),w!==ut&&w.traverseVisible(function(it){it.isLight&&it.layers.test(Y.layers)&&(B.pushLight(it),it.castShadow&&B.pushShadow(it))}),B.setupLights();const lt=new Set;return w.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Lt=it.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){const Nt=Lt[zt];fo(Nt,ut,it),lt.add(Nt)}else fo(Lt,ut,it),lt.add(Lt)}),B=H.pop(),lt},this.compileAsync=function(w,Y,ut=null){const lt=this.compile(w,Y,ut);return new Promise(it=>{function Lt(){if(lt.forEach(function(zt){T.get(zt).currentProgram.isReady()&&lt.delete(zt)}),lt.size===0){it(w);return}setTimeout(Lt,10)}be.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let er=null;function Al(w){er&&er(w)}function nr(){zi.stop()}function ir(){zi.start()}const zi=new $x;zi.setAnimationLoop(Al),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){er=w,dt.setAnimationLoop(w),w===null?zi.stop():zi.start()},dt.addEventListener("sessionstart",nr),dt.addEventListener("sessionend",ir),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const ut=dt.enabled===!0&&dt.isPresenting===!0,lt=b!==null&&(Q===null||ut)&&b.begin(L,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Y),Y=dt.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,Y,Q),B=Rt.get(w,H.length),B.init(Y),H.push(B),je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(je,Zi,Y.reversedDepth),$t=this.localClippingEnabled,jt=Tt.init(this.clippingPlanes,$t),U=ee.get(w,P.length),U.init(),P.push(U),dt.enabled===!0&&dt.isPresenting===!0){const zt=L.xr.getDepthSensingMesh();zt!==null&&ar(zt,Y,-1/0,L.sortObjects)}ar(w,Y,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(Et,Ut),le=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,le&&Pt.addToRenderList(U,w),this.info.render.frame++,jt===!0&&Tt.beginShadows();const it=B.state.shadowsArray;if(Ft.render(it,w,Y),jt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&b.hasRenderPass())===!1){const zt=U.opaque,Nt=U.transmissive;if(B.setupLights(),Y.isArrayCamera){const Yt=Y.cameras;if(Nt.length>0)for(let Kt=0,ie=Yt.length;Kt<ie;Kt++){const re=Yt[Kt];on(zt,Nt,w,re)}le&&Pt.render(w);for(let Kt=0,ie=Yt.length;Kt<ie;Kt++){const re=Yt[Kt];Ri(U,w,re,re.viewport)}}else Nt.length>0&&on(zt,Nt,w,Y),le&&Pt.render(w),Ri(U,w,Y)}Q!==null&&W===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),lt&&b.end(L),w.isScene===!0&&w.onAfterRender(L,w,Y),Ct.resetDefaultState(),tt=-1,J=null,H.pop(),H.length>0?(B=H[H.length-1],jt===!0&&Tt.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function ar(w,Y,ut,lt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){lt&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);const zt=Wt.update(w),Nt=w.material;Nt.visible&&U.push(w,zt,Nt,ut,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const zt=Wt.update(w),Nt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ve.copy(zt.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(Nt)){const Yt=zt.groups;for(let Kt=0,ie=Yt.length;Kt<ie;Kt++){const re=Yt[Kt],Vt=Nt[re.materialIndex];Vt&&Vt.visible&&U.push(w,zt,Vt,ut,ve.z,re)}}else Nt.visible&&U.push(w,zt,Nt,ut,ve.z,null)}}const Lt=w.children;for(let zt=0,Nt=Lt.length;zt<Nt;zt++)ar(Lt[zt],Y,ut,lt)}function Ri(w,Y,ut,lt){const{opaque:it,transmissive:Lt,transparent:zt}=w;B.setupLightsView(ut),jt===!0&&Tt.setGlobalState(L.clippingPlanes,ut),lt&&qt.viewport(N.copy(lt)),it.length>0&&gn(it,Y,ut),Lt.length>0&&gn(Lt,Y,ut),zt.length>0&&gn(zt,Y,ut),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function on(w,Y,ut,lt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[lt.id]===void 0){const Vt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[lt.id]=new Qi(1,1,{generateMipmaps:!0,type:Vt?Na:fi,minFilter:Zs,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Lt=B.state.transmissionRenderTarget[lt.id],zt=lt.viewport||N;Lt.setSize(zt.z*L.transmissionResolutionScale,zt.w*L.transmissionResolutionScale);const Nt=L.getRenderTarget(),Yt=L.getActiveCubeFace(),Kt=L.getActiveMipmapLevel();L.setRenderTarget(Lt),L.getClearColor(ht),Mt=L.getClearAlpha(),Mt<1&&L.setClearColor(16777215,.5),L.clear(),le&&Pt.render(ut);const ie=L.toneMapping;L.toneMapping=Ki;const re=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),B.setupLightsView(lt),jt===!0&&Tt.setGlobalState(L.clippingPlanes,lt),gn(w,ut,lt),K.updateMultisampleRenderTarget(Lt),K.updateRenderTargetMipmap(Lt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let he=0,Ke=Y.length;he<Ke;he++){const Qe=Y[he],{object:we,geometry:_n,material:Xt,group:Bn}=Qe;if(Xt.side===Ei&&we.layers.test(lt.layers)){const se=Xt.side;Xt.side=Qn,Xt.needsUpdate=!0,ea(we,ut,lt,_n,Xt,Bn),Xt.side=se,Xt.needsUpdate=!0,Vt=!0}}Vt===!0&&(K.updateMultisampleRenderTarget(Lt),K.updateRenderTargetMipmap(Lt))}L.setRenderTarget(Nt,Yt,Kt),L.setClearColor(ht,Mt),re!==void 0&&(lt.viewport=re),L.toneMapping=ie}function gn(w,Y,ut){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let it=0,Lt=w.length;it<Lt;it++){const zt=w[it],{object:Nt,geometry:Yt,group:Kt}=zt;let ie=zt.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Nt.layers.test(ut.layers)&&ea(Nt,Y,ut,Yt,ie,Kt)}}function ea(w,Y,ut,lt,it,Lt){w.onBeforeRender(L,Y,ut,lt,it,Lt),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),it.onBeforeRender(L,Y,ut,lt,w,Lt),it.transparent===!0&&it.side===Ei&&it.forceSinglePass===!1?(it.side=Qn,it.needsUpdate=!0,L.renderBufferDirect(ut,Y,lt,it,w,Lt),it.side=Ss,it.needsUpdate=!0,L.renderBufferDirect(ut,Y,lt,it,w,Lt),it.side=Ei):L.renderBufferDirect(ut,Y,lt,it,w,Lt),w.onAfterRender(L,Y,ut,lt,it,Lt)}function Pa(w,Y,ut){Y.isScene!==!0&&(Y=Ue);const lt=T.get(w),it=B.state.lights,Lt=B.state.shadowsArray,zt=it.state.version,Nt=Dt.getParameters(w,it.state,Lt,Y,ut),Yt=Dt.getProgramCacheKey(Nt);let Kt=lt.programs;lt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,lt.fog=Y.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;lt.envMap=gt.get(w.envMap||lt.environment,ie),lt.envMapRotation=lt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Te),Kt=new Map,lt.programs=Kt);let re=Kt.get(Yt);if(re!==void 0){if(lt.currentProgram===re&&lt.lightsStateVersion===zt)return Cl(w,Nt),re}else Nt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Nt,L),re=Dt.acquireProgram(Nt,Yt),Kt.set(Yt,re),lt.uniforms=Nt.uniforms;const Vt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),Cl(w,Nt),lt.needsLights=ho(w),lt.lightsStateVersion=zt,lt.needsLights&&(Vt.ambientLightColor.value=it.state.ambient,Vt.lightProbe.value=it.state.probe,Vt.directionalLights.value=it.state.directional,Vt.directionalLightShadows.value=it.state.directionalShadow,Vt.spotLights.value=it.state.spot,Vt.spotLightShadows.value=it.state.spotShadow,Vt.rectAreaLights.value=it.state.rectArea,Vt.ltc_1.value=it.state.rectAreaLTC1,Vt.ltc_2.value=it.state.rectAreaLTC2,Vt.pointLights.value=it.state.point,Vt.pointLightShadows.value=it.state.pointShadow,Vt.hemisphereLights.value=it.state.hemi,Vt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Vt.spotLightMatrix.value=it.state.spotLightMatrix,Vt.spotLightMap.value=it.state.spotLightMap,Vt.pointShadowMatrix.value=it.state.pointShadowMatrix),lt.currentProgram=re,lt.uniformsList=null,re}function Rl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=xu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Cl(w,Y){const ut=T.get(w);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function wl(w,Y,ut,lt,it){Y.isScene!==!0&&(Y=Ue),K.resetTextureUnits();const Lt=Y.fog,zt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?Y.environment:null,Nt=Q===null?L.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:so,Yt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Kt=gt.get(lt.envMap||zt,Yt),ie=lt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,re=!!ut.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!ut.morphAttributes.position,he=!!ut.morphAttributes.normal,Ke=!!ut.morphAttributes.color;let Qe=Ki;lt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qe=L.toneMapping);const we=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,_n=we!==void 0?we.length:0,Xt=T.get(lt),Bn=B.state.lights;if(jt===!0&&($t===!0||w!==J)){const cn=w===J&&lt.id===tt;Tt.setState(lt,w,cn)}let se=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Bn.state.version||Xt.outputColorSpace!==Nt||it.isBatchedMesh&&Xt.batching===!1||!it.isBatchedMesh&&Xt.batching===!0||it.isBatchedMesh&&Xt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Xt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Xt.instancing===!1||!it.isInstancedMesh&&Xt.instancing===!0||it.isSkinnedMesh&&Xt.skinning===!1||!it.isSkinnedMesh&&Xt.skinning===!0||it.isInstancedMesh&&Xt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Xt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Xt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Xt.instancingMorph===!1&&it.morphTexture!==null||Xt.envMap!==Kt||lt.fog===!0&&Xt.fog!==Lt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==ie||Xt.vertexTangents!==re||Xt.morphTargets!==Vt||Xt.morphNormals!==he||Xt.morphColors!==Ke||Xt.toneMapping!==Qe||Xt.morphTargetsCount!==_n)&&(se=!0):(se=!0,Xt.__version=lt.version);let zn=Xt.currentProgram;se===!0&&(zn=Pa(lt,Y,it));let $n=!1,Ci=!1,ti=!1;const Pe=zn.getUniforms(),ln=Xt.uniforms;if(qt.useProgram(zn.program)&&($n=!0,Ci=!0,ti=!0),lt.id!==tt&&(tt=lt.id,Ci=!0),$n||J!==w){qt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(k,"projectionMatrix",w.projectionMatrix),Pe.setValue(k,"viewMatrix",w.matrixWorldInverse);const wi=Pe.map.cameraPosition;wi!==void 0&&wi.setValue(k,me.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Ci=!0,ti=!0)}if(Xt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Pe.setValue(k,"directionalShadowMap",Bn.state.directionalShadowMap,K),Bn.state.spotShadowMap.length>0&&Pe.setValue(k,"spotShadowMap",Bn.state.spotShadowMap,K),Bn.state.pointShadowMap.length>0&&Pe.setValue(k,"pointShadowMap",Bn.state.pointShadowMap,K)),it.isSkinnedMesh){Pe.setOptional(k,it,"bindMatrix"),Pe.setOptional(k,it,"bindMatrixInverse");const cn=it.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(k,"boneTexture",cn.boneTexture,K))}it.isBatchedMesh&&(Pe.setOptional(k,it,"batchingTexture"),Pe.setValue(k,"batchingTexture",it._matricesTexture,K),Pe.setOptional(k,it,"batchingIdTexture"),Pe.setValue(k,"batchingIdTexture",it._indirectTexture,K),Pe.setOptional(k,it,"batchingColorTexture"),it._colorsTexture!==null&&Pe.setValue(k,"batchingColorTexture",it._colorsTexture,K));const Hn=ut.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&It.update(it,ut,zn),(Ci||Xt.receiveShadow!==it.receiveShadow)&&(Xt.receiveShadow=it.receiveShadow,Pe.setValue(k,"receiveShadow",it.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&Y.environment!==null&&(ln.envMapIntensity.value=Y.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Qw()),Ci&&(Pe.setValue(k,"toneMappingExposure",L.toneMappingExposure),Xt.needsLights&&Es(ln,ti),Lt&&lt.fog===!0&&Qt.refreshFogUniforms(ln,Lt),Qt.refreshMaterialUniforms(ln,lt,_t,Z,B.state.transmissionRenderTarget[w.id]),xu.upload(k,Rl(Xt),ln,K)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(xu.upload(k,Rl(Xt),ln,K),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Pe.setValue(k,"center",it.center),Pe.setValue(k,"modelViewMatrix",it.modelViewMatrix),Pe.setValue(k,"normalMatrix",it.normalMatrix),Pe.setValue(k,"modelMatrix",it.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const cn=lt.uniformsGroups;for(let wi=0,na=cn.length;wi<na;wi++){const sr=cn[wi];Bt.update(sr,zn),Bt.bind(sr,zn)}}return zn}function Es(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ho(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,Y,ut){const lt=T.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Y,T.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ut,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ut=T.get(w);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const Fa=k.createFramebuffer();this.setRenderTarget=function(w,Y=0,ut=0){Q=w,F=Y,W=ut;let lt=null,it=!1,Lt=!1;if(w){const Nt=T.get(w);if(Nt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(k.FRAMEBUFFER,Nt.__webglFramebuffer),N.copy(w.viewport),G.copy(w.scissor),ot=w.scissorTest,qt.viewport(N),qt.scissor(G),qt.setScissorTest(ot),tt=-1;return}else if(Nt.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Nt.__hasExternalTextures)K.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Nt.__boundDepthTexture!==ie){if(ie!==null&&T.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Lt=!0);const Kt=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?lt=Kt[Y][ut]:lt=Kt[Y],it=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?lt=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?lt=Kt[ut]:lt=Kt,N.copy(w.viewport),G.copy(w.scissor),ot=w.scissorTest}else N.copy(rt).multiplyScalar(_t).floor(),G.copy(xt).multiplyScalar(_t).floor(),ot=bt;if(ut!==0&&(lt=Fa),qt.bindFramebuffer(k.FRAMEBUFFER,lt)&&qt.drawBuffers(w,lt),qt.viewport(N),qt.scissor(G),qt.setScissorTest(ot),it){const Nt=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,ut)}else if(Lt){const Nt=Y;for(let Yt=0;Yt<w.textures.length;Yt++){const Kt=T.get(w.textures[Yt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Yt,Kt.__webglTexture,ut,Nt)}}else if(w!==null&&ut!==0){const Nt=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,ut)}tt=-1},this.readRenderTargetPixels=function(w,Y,ut,lt,it,Lt,zt,Nt=0){if(!(w&&w.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt){qt.bindFramebuffer(k.FRAMEBUFFER,Yt);try{const Kt=w.textures[Nt],ie=Kt.format,re=Kt.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),!Oe.textureFormatReadable(ie)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(re)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-lt&&ut>=0&&ut<=w.height-it&&k.readPixels(Y,ut,lt,it,wt.convert(ie),wt.convert(re),Lt)}finally{const Kt=Q!==null?T.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ut,lt,it,Lt,zt,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Yt=Yt[zt]),Yt)if(Y>=0&&Y<=w.width-lt&&ut>=0&&ut<=w.height-it){qt.bindFramebuffer(k.FRAMEBUFFER,Yt);const Kt=w.textures[Nt],ie=Kt.format,re=Kt.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),!Oe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Vt),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(Y,ut,lt,it,wt.convert(ie),wt.convert(re),0);const he=Q!==null?T.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,he);const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Jb(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Vt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.deleteBuffer(Vt),k.deleteSync(Ke),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ut=0){const lt=Math.pow(2,-ut),it=Math.floor(w.image.width*lt),Lt=Math.floor(w.image.height*lt),zt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;K.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,zt,Nt,it,Lt),qt.unbindTexture()};const Ia=k.createFramebuffer(),bs=k.createFramebuffer();this.copyTextureToTexture=function(w,Y,ut=null,lt=null,it=0,Lt=0){let zt,Nt,Yt,Kt,ie,re,Vt,he,Ke;const Qe=w.isCompressedTexture?w.mipmaps[Lt]:w.image;if(ut!==null)zt=ut.max.x-ut.min.x,Nt=ut.max.y-ut.min.y,Yt=ut.isBox3?ut.max.z-ut.min.z:1,Kt=ut.min.x,ie=ut.min.y,re=ut.isBox3?ut.min.z:0;else{const ln=Math.pow(2,-it);zt=Math.floor(Qe.width*ln),Nt=Math.floor(Qe.height*ln),w.isDataArrayTexture?Yt=Qe.depth:w.isData3DTexture?Yt=Math.floor(Qe.depth*ln):Yt=1,Kt=0,ie=0,re=0}lt!==null?(Vt=lt.x,he=lt.y,Ke=lt.z):(Vt=0,he=0,Ke=0);const we=wt.convert(Y.format),_n=wt.convert(Y.type);let Xt;Y.isData3DTexture?(K.setTexture3D(Y,0),Xt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(K.setTexture2DArray(Y,0),Xt=k.TEXTURE_2D_ARRAY):(K.setTexture2D(Y,0),Xt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Bn=k.getParameter(k.UNPACK_ROW_LENGTH),se=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zn=k.getParameter(k.UNPACK_SKIP_PIXELS),$n=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ie),k.pixelStorei(k.UNPACK_SKIP_IMAGES,re);const ti=w.isDataArrayTexture||w.isData3DTexture,Pe=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const ln=T.get(w),Hn=T.get(Y),cn=T.get(ln.__renderTarget),wi=T.get(Hn.__renderTarget);qt.bindFramebuffer(k.READ_FRAMEBUFFER,cn.__webglFramebuffer),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let na=0;na<Yt;na++)ti&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(w).__webglTexture,it,re+na),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Lt,Ke+na)),k.blitFramebuffer(Kt,ie,zt,Nt,Vt,he,zt,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(it!==0||w.isRenderTargetTexture||T.has(w)){const ln=T.get(w),Hn=T.get(Y);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Ia),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,bs);for(let cn=0;cn<Yt;cn++)ti?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,it,re+cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,it),Pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Hn.__webglTexture,Lt,Ke+cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Hn.__webglTexture,Lt),it!==0?k.blitFramebuffer(Kt,ie,zt,Nt,Vt,he,zt,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):Pe?k.copyTexSubImage3D(Xt,Lt,Vt,he,Ke+cn,Kt,ie,zt,Nt):k.copyTexSubImage2D(Xt,Lt,Vt,he,Kt,ie,zt,Nt);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Xt,Lt,Vt,he,Ke,zt,Nt,Yt,we,_n,Qe.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Xt,Lt,Vt,he,Ke,zt,Nt,Yt,we,Qe.data):k.texSubImage3D(Xt,Lt,Vt,he,Ke,zt,Nt,Yt,we,_n,Qe):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Vt,he,zt,Nt,we,_n,Qe.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Vt,he,Qe.width,Qe.height,we,Qe.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Vt,he,zt,Nt,we,_n,Qe);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,se),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,$n),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),Lt===0&&Y.generateMipmaps&&k.generateMipmap(Xt),qt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),qt.unbindTexture()},this.resetState=function(){F=0,W=0,Q=null,qt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Zv={type:"change"},qp={type:"start"},sS={type:"end"},uu=new Lu,Kv=new gs,$w=Math.cos(70*Ep.DEG2RAD),xn=new et,Kn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rd=1e-6;class t2 extends aA{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new ys,this._lastTargetPosition=new et,this._quat=new ys().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bv,this._sphericalDelta=new bv,this._scale=1,this._panOffset=new et,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new et,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n2.bind(this),this._onPointerDown=e2.bind(this),this._onPointerUp=i2.bind(this),this._onContextMenu=u2.bind(this),this._onMouseWheel=r2.bind(this),this._onKeyDown=o2.bind(this),this._onTouchStart=l2.bind(this),this._onTouchMove=c2.bind(this),this._onMouseDown=a2.bind(this),this._onMouseMove=s2.bind(this),this._interceptControlDown=f2.bind(this),this._interceptControlUp=h2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zv),this.update(),this.state=ke.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=xn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<$w?this.object.lookAt(this.target):(Kv.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(Kv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rd||this._lastTargetPosition.distanceToSquared(this.target)>Rd?(this.dispatchEvent(Zv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-t),this._panOffset.add(xn)}_panUp(t,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(t),this._panOffset.add(xn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;xn.copy(l).sub(this.target);let c=xn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function e2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function n2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function i2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sS),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function a2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case $r.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case $r.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(qp)}function s2(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function r2(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(qp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(sS))}function o2(r){this.enabled!==!1&&this._handleKeyDown(r)}function l2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(qp)}function c2(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function u2(r){this.enabled!==!1&&r.preventDefault()}function f2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cd extends Wp{constructor(t){super(t)}load(t,i,s,l){const c=this,f=new KT(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(d){const g=new DataView(d),_=32/8*3+32/8*3*3+16/8,v=g.getUint32(80,!0);if(80+32/8+v*_===g.byteLength)return!0;const E=[115,111,108,105,100];for(let A=0;A<5;A++)if(s(E,g,A))return!1;return!0}function s(d,g,_){for(let v=0,S=d.length;v<S;v++)if(d[v]!==g.getUint8(_+v))return!1;return!0}function l(d){const g=new DataView(d),_=g.getUint32(80,!0);let v,S,E,A=!1,y,x,R,D,U;for(let F=0;F<70;F++)g.getUint32(F,!1)==1129270351&&g.getUint8(F+4)==82&&g.getUint8(F+5)==61&&(A=!0,y=new Float32Array(_*3*3),x=g.getUint8(F+6)/255,R=g.getUint8(F+7)/255,D=g.getUint8(F+8)/255,U=g.getUint8(F+9)/255);const B=84,P=50,H=new Jn,b=new Float32Array(_*3*3),L=new Float32Array(_*3*3),X=new Ce;for(let F=0;F<_;F++){const W=B+F*P,Q=g.getFloat32(W,!0),tt=g.getFloat32(W+4,!0),J=g.getFloat32(W+8,!0);if(A){const N=g.getUint16(W+48,!0);(N&32768)===0?(v=(N&31)/31,S=(N>>5&31)/31,E=(N>>10&31)/31):(v=x,S=R,E=D)}for(let N=1;N<=3;N++){const G=W+N*12,ot=F*3*3+(N-1)*3;b[ot]=g.getFloat32(G,!0),b[ot+1]=g.getFloat32(G+4,!0),b[ot+2]=g.getFloat32(G+8,!0),L[ot]=Q,L[ot+1]=tt,L[ot+2]=J,A&&(X.setRGB(v,S,E,ui),y[ot]=X.r,y[ot+1]=X.g,y[ot+2]=X.b)}}return H.setAttribute("position",new hi(b,3)),H.setAttribute("normal",new hi(L,3)),A&&(H.setAttribute("color",new hi(y,3)),H.hasColors=!0,H.alpha=U),H}function c(d){const g=new Jn,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let E=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+A+A+A,"g"),x=new RegExp("normal"+A+A+A,"g"),R=[],D=[],U=[],B=new et;let P,H=0,b=0,L=0;for(;(P=_.exec(d))!==null;){b=L;const X=P[0],F=(P=S.exec(X))!==null?P[1]:"";for(U.push(F);(P=v.exec(X))!==null;){let tt=0,J=0;const N=P[0];for(;(P=x.exec(N))!==null;)B.x=parseFloat(P[1]),B.y=parseFloat(P[2]),B.z=parseFloat(P[3]),J++;for(;(P=y.exec(N))!==null;)R.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),D.push(B.x,B.y,B.z),tt++,L++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),tt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const W=b,Q=L-b;g.userData.groupNames=U,g.addGroup(W,Q,H),H++}return g.setAttribute("position",new bi(R,3)),g.setAttribute("normal",new bi(D,3)),g}function f(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const g=new Uint8Array(d.length);for(let _=0;_<d.length;_++)g[_]=d.charCodeAt(_)&255;return g.buffer||g}else return d}const m=p(t);return i(m)?l(m):c(f(t))}}const rS="/Vibra-Web/",fu=`${rS}models/pad_2.stl`,Qv=`${rS}models/Protoype-stripped.stl`,Jv=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[^a-z0-9]+/g,"");function _s(r,...t){if(!r)return null;const i=t.map(Jv);for(const s of Object.keys(r)){const l=Jv(s);if(i.includes(l))return r[s]}return null}function d2(r){const t=Number(String(r??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}const $v=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[\s\-]+/g,"");function wd(r){const t=[new Dn(0,0,0),new Dn(-Math.PI/2,0,0),new Dn(Math.PI/2,0,0),new Dn(0,0,-Math.PI/2),new Dn(0,0,Math.PI/2),new Dn(0,-Math.PI/2,0),new Dn(0,Math.PI/2,0)];let i=null,s=-1/0;for(const l of t){const c=r.clone();c.applyMatrix4(new qe().makeRotationFromEuler(l)),c.computeBoundingBox();const f=new et;c.boundingBox.getSize(f),f.y>s&&(s=f.y,i=c)}return i||r}function Dd(r,t=1){const i=r.clone();i.computeBoundingBox();const s=i.boundingBox,l=new et;s.getCenter(l);const c=s.min.y;i.translate(-l.x,-c,-l.z),i.computeBoundingBox();const f=new et;i.boundingBox.getSize(f);const p=Math.max(f.x,f.y,f.z)||1,m=t/p;return i.computeVertexNormals(),{geom:i,scale:m}}function tx(r,{fontSize:t=56}={}){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=256,i.height=128,s.clearRect(0,0,i.width,i.height),s.font=`bold ${t}px Arial`,s.fillStyle="rgba(0, 229, 255, 0.95)",s.textAlign="center",s.textBaseline="middle",s.fillText(r,i.width/2,i.height/2);const l=new qx(i);l.needsUpdate=!0,l.minFilter=mn,l.magFilter=mn;const c=new Uu({map:l,transparent:!0,depthWrite:!1,depthTest:!0,side:Ei}),f=new tr(.18,.09),p=new bn(f,c);return p.rotation.x=-Math.PI/2,p.renderOrder=10,p}function p2({parent:r,lengthM:t,widthM:i,originX:s=0,originZ:l=0,minorCm:c=10,majorCm:f=50,y:p=.002}){const m=new Ca;m.name="MeasurementGridCM";const d=t/2,g=i/2,_=c/100,v=f/100,S=new Sl({color:51455,transparent:!0,opacity:.18}),E=new Sl({color:58879,transparent:!0,opacity:.6}),A=(U,B,P,H,b)=>{const L=new Jn().setFromPoints([new et(U,p,B),new et(P,p,H)]),X=new Wx(L,b);return X.renderOrder=1,X},y=(U,B)=>{const P=U/B;return Math.abs(P-Math.round(P))<1e-6};for(let U=-d;U<=d+1e-6;U+=_){const B=U+d;m.add(A(U,-g,U,g,y(B,v)?E:S))}for(let U=-g;U<=g+1e-6;U+=_){const B=U+g;m.add(A(-d,U,d,U,y(B,v)?E:S))}const x=p+.004,R=Ep.clamp(l,-g,g),D=Ep.clamp(s,-d,d);for(let U=-d;U<=d+1e-6;U+=v){const B=Math.round((U-s)*100),P=tx(`${B} cm`,{fontSize:56});P.position.set(U,x,R),m.add(P)}for(let U=-g;U<=g+1e-6;U+=v){const B=Math.round((U-l)*100),P=tx(`${B} cm`,{fontSize:56});P.position.set(D,x,U),P.rotation.z=Math.PI/2,m.add(P)}return r.add(m),m}function ex(r,{fontSize:t=54}={}){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=256,i.height=128,s.clearRect(0,0,i.width,i.height),s.font=`bold ${t}px Arial`,s.fillStyle="rgba(0, 229, 255, 0.95)",s.textAlign="center",s.textBaseline="middle",s.fillText(r,i.width/2,i.height/2);const l=new qx(i);l.needsUpdate=!0,l.minFilter=mn,l.magFilter=mn;const c=new Uu({map:l,transparent:!0,depthWrite:!1,depthTest:!0,side:Ei}),f=new tr(.18,.09),p=new bn(f,c);return p.renderOrder=10,p}function m2({parent:r,lengthM:t,widthM:i,heightM:s,wallThickness:l=.05,minorCm:c=10,majorCm:f=50,surfaceOffset:p=.002}){const m=new Ca;m.name="WallRulersCM";const d=c/100,g=f/100,_=new Sl({color:51455,transparent:!0,opacity:.25}),v=new Sl({color:58879,transparent:!0,opacity:.7}),S=(R,D,U)=>{const B=new Jn().setFromPoints([R,D]),P=new Wx(B,U);return P.renderOrder=2,P},E=R=>{const D=R/g;return Math.abs(D-Math.round(D))<1e-6},A=t/2,x=-(i/2)+l/2+p;{const R=-A+.12;for(let D=0;D<=s+1e-6;D+=d){const U=E(D),B=U?.18:.1;if(m.add(S(new et(R,D,x),new et(R+B,D,x),U?v:_)),U){const P=Math.round(D*100),H=ex(`${P} cm`,{fontSize:54});H.position.set(R+B+.12,D,x),m.add(H)}}}for(let D=-A;D<=A+1e-6;D+=d){const U=D+A,B=E(U),P=B?.16:.09;if(m.add(S(new et(D,.22,x),new et(D,.22+P,x),B?v:_)),B){const H=Math.round(U*100),b=ex(`${H} cm`,{fontSize:54});b.position.set(D,.22+P+.1,x),b.rotation.z=Math.PI/2,m.add(b)}}return r.add(m),m}const nx={hotspot:{title:"Hotspot Treatment",what:["A hotspot is a part of the room where sound becomes too strong or “focuses” in one area.","It can happen when reflections and low-frequency build-up collect at certain points (commonly corners or near walls).","Your data detects hotspot based on the measured parameters and classification output from the system."],fixed:{key:"bass_trap",label:"Bass Trap (Recommended)",desc:"Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",options:[{name:"Rockwool / Mineral Wool Corner Bass Trap",text:"Common DIY/pro option. Materials are widely available in PH hardware suppliers; many builders also sell ready-made corner traps online."},{name:"Foam Corner Bass Trap (Acoustic Foam)",text:"Easy to buy (PH e-commerce). Works mainly on mid/high-bass compared to thick wool traps, but still helps for basic control."},{name:"Panel Bass Trap (Thick Broadband Panels)",text:"Thicker wall panels placed at corners/first reflections. Often sold locally by acoustic treatment shops and custom builders."},{name:"Tube / Cylindrical Bass Trap",text:"Portable and repositionable. Some local sellers offer cylindrical traps; can also be custom-made by upholstery/wood shops."}],footnote:"Tip: Corner placement usually gives the biggest improvement for hotspots caused by low-frequency build-up."}},deadspot:{title:"Deadspot Treatment",what:["A deadspot is a part of the room that feels weak, dull, or “missing detail.”","It can happen when reflections cancel out or when the space becomes overly absorptive in certain areas.","Your data detects deadspot based on the measured parameters and classification output from the system."],fixed:{key:"diffuser",label:"Diffuser (Recommended)",desc:"Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced, improving spaciousness without adding strong echo.",options:[{name:"QRD Diffuser (1D)",text:"Common studio diffuser type. Available via local acoustic builders and custom wood shops in PH."},{name:"Skyline Diffuser (2D)",text:"Scatters sound in many directions. Often made-to-order locally; some ready-made options appear on PH marketplaces."},{name:"Poly / Curved Diffuser",text:"Smooth scattering (good for small rooms). Usually custom-made using plywood/curved panels by local fabricators."},{name:"Slat / Hybrid Diffuser Panel",text:"Hybrid look (wood slats + backing). Common in PH interior builds; can be ordered from acoustic/interior contractors."}],footnote:"Tip: Rear wall diffusion often helps deadspots by restoring useful reflections without making the room harsh."}}};function g2({rowsFor3D:r,spatial:t}){const i=Array.isArray(r)&&r.length>0,[s,l]=nt.useState("all"),[c,f]=nt.useState(!1),[p,m]=nt.useState({hotspot:!1,deadspot:!1}),[d,g]=nt.useState("before"),_=nt.useMemo(()=>{const x=Array.isArray(r)?r:[];let R=0,D=0,U=0;for(const B of x){const P=$v(_s(B,"Classification")??"");P.includes("hot")?R++:P.includes("dead")?D++:U++}return{hot:R,dead:D,neutral:U,total:x.length}},[r]),v=nt.useMemo(()=>{const x=Array.isArray(r)?r:[];if(s==="all")return x;const R=s==="hotspot"?"hot":"dead";return x.filter(D=>$v(_s(D,"Classification")).includes(R))},[r,s]);nt.useEffect(()=>{g("before")},[s]);const S=s==="hotspot"?nx.hotspot:s==="deadspot"?nx.deadspot:null,E=s==="hotspot"?p.hotspot:s==="deadspot"?p.deadspot:!1,A=i&&s!=="all",y=()=>{A&&(m(x=>s==="hotspot"?{...x,hotspot:!0}:s==="deadspot"?{...x,deadspot:!0}:x),g("after"))};return O.jsx("div",{className:"sim-slide sim-slide-2",children:O.jsxs("div",{className:"sim-row sim-row-2",children:[O.jsx("div",{className:"glass-card glass-card--bigLeft",children:O.jsxs("div",{className:"sim3d-card sim3d-card--three",children:[O.jsx(_2,{rowsFor3D:v,spatial:t,focusClass:s,viewMode:d,isApplied:E}),O.jsxs("div",{className:"three-legend",children:[O.jsx("div",{className:"three-legend-title",children:"Legend (Click to filter)"}),O.jsxs("button",{type:"button",className:`legend-btn ${s==="hotspot"?"on":""}`,onClick:()=>l("hotspot"),disabled:!i,title:i?"Show hotspots only":"Deploy data first in Slide 1",children:[O.jsx("span",{className:"swatch swatch-hot"})," Hotspot (",_.hot,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${s==="deadspot"?"on":""}`,onClick:()=>l("deadspot"),disabled:!i,title:i?"Show deadspots only":"Deploy data first in Slide 1",children:[O.jsx("span",{className:"swatch swatch-dead"})," Deadspot (",_.dead,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${s==="all"?"on":""}`,onClick:()=>l("all"),disabled:!i,title:i?"Show all pads":"Deploy data first in Slide 1",children:[O.jsx("span",{className:"swatch swatch-neutral"})," All (",_.total,")"]}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Hover a pad to view details"}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Layer 1 (bottom) → Layer 4 (top)"})]})]})}),O.jsxs("div",{className:"glass-card glass-card--recommend",children:[O.jsx("h2",{className:"card-title card-title--recommend",children:"RECOMMENDATION"}),O.jsxs("div",{className:"recommend-inner",children:[O.jsxs("div",{className:"recommend-toolbar",children:[O.jsx("button",{type:"button",className:`guide-btn ${c?"on":""}`,onClick:()=>f(x=>!x),children:c?"Hide Guide":"Guide"}),O.jsx("div",{className:"recommend-mini",children:i?O.jsxs(O.Fragment,{children:["Showing ",O.jsx("b",{children:v.length})," pad(s)"]}):O.jsx(O.Fragment,{children:"No deployed data"})})]}),c&&O.jsxs("div",{className:"guide-card",children:[O.jsx("div",{className:"guide-title",children:"How to use Slide 2"}),O.jsxs("ol",{className:"guide-list",children:[O.jsxs("li",{children:["Go to Slide 1 → Import CSV → then click ",O.jsx("b",{children:"Deploy"}),"."]}),O.jsxs("li",{children:["In Slide 2, click ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"})," (Legend or buttons)."]}),O.jsx("li",{children:"Read the treatment recommendation."}),O.jsxs("li",{children:["Click ",O.jsx("b",{children:"Apply Treatment"})," to preview the “After” view in 3D."]}),O.jsxs("li",{children:["Use ",O.jsx("b",{children:"Before / After"})," to compare."]})]}),O.jsx("div",{className:"guide-note",children:"Note: Treatment preview is a visual indicator (green pads) to help users understand changes."})]}),i?O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"info-card",style:{marginBottom:16},children:[O.jsx("div",{className:"info-title",children:"What are Hotspot and Deadspot?"}),O.jsxs("div",{className:"info-text",children:[O.jsx("b",{children:"Hotspot"})," = sound energy becomes too strong in a specific area (often due to reflections + build-up).",O.jsx("br",{}),O.jsx("b",{children:"Deadspot"})," = sound feels weak/dull in a specific area (often due to cancellations or uneven reflections).",O.jsx("br",{}),"These are detected from your measured parameters and the system’s classification result."]})]}),O.jsxs("div",{className:"select-card",children:[O.jsxs("div",{className:"select-title",children:["What you want to select: ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"}),"?"]}),O.jsxs("div",{className:"select-actions",children:[O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("hotspot"),children:"Select Hotspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("deadspot"),children:"Select Deadspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("all"),children:"Show All"})]}),O.jsx("div",{className:"select-hint",children:"You can also click the Legend inside the 3D panel."})]}),s==="all"?O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"Select one to continue"}),O.jsxs("div",{className:"info-text",children:["Choose ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"})," to show the recommended treatment and apply preview."]})]}):S&&O.jsxs("div",{className:"treat-card",children:[O.jsx("div",{className:"treat-title",children:S.title}),O.jsxs("div",{className:"treat-sub",children:["Showing ",O.jsx("b",{children:v.length})," pad(s) in 3D"]}),O.jsxs("div",{className:"treat-main",children:[O.jsx("div",{className:"treat-badge",children:S.fixed.label}),O.jsx("div",{className:"treat-desc",children:S.fixed.desc})]}),O.jsxs("div",{className:"treat-actions",children:[O.jsx("button",{type:"button",className:"apply-btn",onClick:y,disabled:E,title:E?"Treatment already applied":"Apply and preview After",children:E?"Applied ✓":"Apply Treatment"}),O.jsxs("div",{className:"compare-toggle",children:[O.jsx("button",{type:"button",className:`compare-btn ${d==="before"?"on":""}`,onClick:()=>g("before"),children:"Before"}),O.jsx("button",{type:"button",className:`compare-btn ${d==="after"?"on":""}`,onClick:()=>g("after"),disabled:!E,title:E?"View treated preview":"Apply treatment to enable After view",children:"After"})]})]}),O.jsxs("div",{className:"recommend-card",style:{marginTop:14},children:[O.jsx("div",{className:"recommend-card-title",children:"Available Types (PH-friendly)"}),O.jsx("div",{className:"recommend-list",style:{marginTop:10},children:S.fixed.options.map(x=>O.jsxs("div",{className:"recommend-item",children:[O.jsx("div",{className:"recommend-item-name",children:x.name}),O.jsx("div",{className:"recommend-item-text",children:x.text})]},x.name))}),O.jsx("div",{className:"treat-footnote",children:S.fixed.footnote})]})]})]}):O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"No data detected"}),O.jsxs("div",{className:"info-text",children:["Please import and deploy your data in ",O.jsx("b",{children:"Slide 1"})," first.",O.jsx("br",{}),"After deploying, this panel will show hotspot/deadspot explanations and treatment options."]})]})]}),O.jsx("div",{className:"scroll-rail"}),O.jsx("div",{className:"scroll-thumb"})]})]})})}function _2({rowsFor3D:r,spatial:t,focusClass:i,viewMode:s,isApplied:l}){const c=nt.useRef(null),[f,p]=nt.useState({show:!1,x:0,y:0,text:""}),[m,d]=nt.useState("Initializing 3D…"),[g,_]=nt.useState(0),[v,S]=nt.useState(0),[E,A]=nt.useState({x:0,z:0}),y=nt.useRef({renderer:null,scene:null,camera:null,controls:null,roomGroup:null,padsGroup:null,protoGroup:null}),x=nt.useRef(new iA),R=nt.useRef(new ce),D=nt.useRef(0),U=nt.useRef(""),B=nt.useRef({ready:!1,geom:null,baseScale:1}),P=nt.useRef({mesh:null,loaded:!1,fallbackBox:null}),H=nt.useRef({hot:new hs({color:8129026,emissive:8129026,emissiveIntensity:.55,roughness:.35,metalness:.05}),dead:new hs({color:937106,emissive:937106,emissiveIntensity:.55,roughness:.35,metalness:.05}),neutral:new hs({color:15790320,emissive:15790320,emissiveIntensity:.12,roughness:.55,metalness:.02,transparent:!1,opacity:1}),treated:new hs({color:3066993,emissive:3066993,emissiveIntensity:.45,roughness:.45,metalness:.02}),floor:new hs({color:14540253,transparent:!0,opacity:.92}),wall:new hs({color:16777215,transparent:!0,opacity:.25,side:Ei}),proto:new hs({color:16090919,roughness:.65,metalness:.25})});return nt.useEffect(()=>{const b=c.current;if(!b)return;const L=b.clientWidth,X=b.clientHeight;if(!L||!X){d("3D mount has 0 width/height. Fix CSS height of .three-mount.");return}const F=new Jw({antialias:!0,alpha:!0});F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),F.setSize(L,X),F.setClearAlpha(0),b.appendChild(F.domElement);const W=new wT,Q=new Mi(60,L/X,.05,200);Q.position.set(0,2.5,4);const tt=new t2(Q,F.domElement);tt.enableDamping=!0,tt.dampingFactor=.08,W.add(new tA(16777215,.75));const J=new $T(16777215,1.1);J.position.set(6,9,6),W.add(J);const N=new Ca,G=new Ca,ot=new Ca;W.add(N),W.add(G),W.add(ot),y.current={renderer:F,scene:W,camera:Q,controls:tt,roomGroup:N,padsGroup:G,protoGroup:ot},d("3D ready. Loading models…");const ht=new ResizeObserver(()=>{const Et=b.clientWidth,Ut=b.clientHeight;F.setSize(Et,Ut),Q.aspect=Et/Ut,Q.updateProjectionMatrix()});ht.observe(b);const Mt=Et=>{const Ut=F.domElement.getBoundingClientRect(),rt=Et.clientX-Ut.left,xt=Et.clientY-Ut.top;D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{R.current.set(rt/Ut.width*2-1,-(xt/Ut.height*2-1)),x.current.setFromCamera(R.current,Q);const bt=x.current.intersectObjects(G.children,!1);if(!bt.length){f.show&&p(me=>({...me,show:!1})),U.current="";return}const Gt=bt[0].object,jt=Gt?.userData?.row;if(!jt)return;const je=[`#${(Gt.userData.index??0)+1}`,`Layer: ${_s(jt,"Layer")??"-"}`,`Angle: ${_s(jt,"Angle")??"-"}`,`Ultrasonic: ${_s(jt,"Ultrasonic","Distance","UTV")??"-"}`,`Decibel: ${_s(jt,"Decibel","DB","dB")??"-"}`,`RT60: ${_s(jt,"RT60","Reverberation")??"-"}`,`Classification: ${_s(jt,"Classification")??"-"}`].join(`
`);je!==U.current||!f.show?(U.current=je,p({show:!0,x:rt+14,y:xt+14,text:je})):p(me=>({...me,x:rt+14,y:xt+14}))})},z=()=>{D.current&&cancelAnimationFrame(D.current),D.current=0,U.current="",p(Et=>Et.show?{...Et,show:!1}:Et)};F.domElement.addEventListener("pointermove",Mt),F.domElement.addEventListener("pointerleave",z);let Z=0;const _t=()=>{Z=requestAnimationFrame(_t),tt.update(),F.render(W,Q)};return _t(),()=>{cancelAnimationFrame(Z),ht.disconnect(),F.domElement.removeEventListener("pointermove",Mt),F.domElement.removeEventListener("pointerleave",z),tt.dispose(),F.dispose(),F.domElement&&b.contains(F.domElement)&&b.removeChild(F.domElement)}},[]),nt.useEffect(()=>{const{roomGroup:b}=y.current;if(!b)return;b.clear();const L=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:3,X=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3,F=d2(t?.heightRaw),W=F!=null?F/100:2.6,Q=new bn(new tr(L,X),H.current.floor);Q.rotation.x=-Math.PI/2,b.add(Q);const tt=.05,J=H.current.wall,N=new bn(new Yi(L,W,tt),J);N.position.set(0,W/2,-X/2),b.add(N);const G=new bn(new Yi(L,W,tt),J);G.position.set(0,W/2,X/2),b.add(G);const ot=new bn(new Yi(tt,W,X),J);ot.position.set(-L/2,W/2,0),b.add(ot);const ht=new bn(new Yi(tt,W,X),J);ht.position.set(L/2,W/2,0),b.add(ht),p2({parent:b,lengthM:L,widthM:X,originX:E.x,originZ:E.z,minorCm:10,majorCm:50,y:.002}),m2({parent:b,lengthM:L,widthM:X,heightM:W,wallThickness:tt,minorCm:10,majorCm:50,surfaceOffset:.002})},[t,E]),nt.useEffect(()=>{if(B.current.ready)return;d(L=>L.includes("pad_2")?L:"Loading pad_2.stl…"),new Cd().load(fu,L=>{const X=wd(L),{geom:F,scale:W}=Dd(X,1);B.current.geom=F,B.current.baseScale=W,B.current.ready=!0,_(Q=>Q+1),d("pad_2.stl loaded ✅")},void 0,L=>{console.error("[Pad] load failed ❌",L),d(`FAILED to load pad_2.stl. Check DevTools > Network if ${fu} is 404.`)})},[]),nt.useEffect(()=>{const{protoGroup:b}=y.current;if(!b||P.current.loaded)return;const L=new bn(new Yi(.25,.25,.25),new hs({color:16090919}));L.position.set(0,.125,0),b.add(L),P.current.fallbackBox=L,new Cd().load(Qv,F=>{const W=wd(F),{geom:Q,scale:tt}=Dd(W,1.8),J=new bn(Q,H.current.proto);J.scale.setScalar(tt),b.clear(),b.add(J),P.current.mesh=J,P.current.loaded=!0,S(N=>N+1)},void 0,F=>{console.error("[Prototype] load failed ❌",F),d(`FAILED to load Prototype. Check DevTools > Network if ${Qv} is 404.`)})},[]),nt.useEffect(()=>{if(B.current.ready)return;d(L=>L.includes("pad_2")?L:"Loading pad_2.stl…"),new Cd().load(fu,L=>{const X=wd(L),{geom:F,scale:W}=Dd(X,1);F.computeBoundingBox();const Q=new et;F.boundingBox.getSize(Q);const J=(Q.x<=Q.z?"x":"z")==="x"?-Math.PI/2:0;B.current.geom=F,B.current.baseScale=W,B.current.ready=!0,B.current.fixYaw=J,_(N=>N+1),d("pad_2.stl loaded ✅")},void 0,L=>{console.error("[Pad] load failed ❌",L),d(`FAILED to load pad_2.stl. Check DevTools > Network if ${fu} is 404.`)})},[]),O.jsxs("div",{ref:c,className:"three-mount",style:{position:"relative"},children:[O.jsx("div",{style:{position:"absolute",left:10,top:10,padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,0.45)",color:"white",fontSize:12,zIndex:30,pointerEvents:"none",maxWidth:360},children:m}),f.show&&O.jsx("div",{style:{position:"absolute",left:f.x,top:f.y,whiteSpace:"pre-line",padding:"10px 12px",borderRadius:12,background:"rgba(0,0,0,0.55)",color:"white",fontSize:12,textAlign:"left",lineHeight:1.35,pointerEvents:"none",maxWidth:260,zIndex:20},children:f.text})]})}const v2=new URL("../../assets/Prototype-stripped.stl",import.meta.url).href,ps=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function ix(r){const t=Number(String(r??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}function x2(r,t){if(!t?.length)return;const i=Object.keys(t[0]||{}),s=p=>{const m=String(p??"");return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=[i.join(","),...t.map(p=>i.map(m=>s(p[m])).join(","))].join(`
`),c=new Blob([l],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");f.href=URL.createObjectURL(c),f.download=r,document.body.appendChild(f),f.click(),document.body.removeChild(f)}const S2=r=>r==null?null:(r%360+360)%360,y2=(r,t=3)=>{if(r==null)return null;const i=S2(r),s=[0,90,180,270];let l=null,c=1/0;for(const f of s){const p=Math.min(Math.abs(i-f),360-Math.abs(i-f));p<c&&(c=p,l=f)}return c<=t?l:null};function M2(){const r=nt.useMemo(()=>[0,1],[]),[t,i]=nt.useState(0),[s,l]=nt.useState(!1);nt.useEffect(()=>l(!0),[]);const[c,f]=nt.useState([]),[p,m]=nt.useState([]),[d,g]=nt.useState({type:"idle",message:""}),[_,v]=nt.useState(""),[S,E]=nt.useState(""),[A,y]=nt.useState(null),x=nt.useMemo(()=>{let b=[...c];if(A){const[L,X]=String(A).split(":");if(L==="layer"&&(b=b.filter(F=>ps(F.Layer)===ps(X))),L==="class"){const F=ps(X).replace(/[\s\-]+/g,"");b=b.filter(W=>ps(String(W.Classification)).replace(/[\s\-]+/g,"")===F)}}if(S.trim()){const L=ps(S);b=b.filter(X=>Object.values(X).some(F=>ps(F).includes(L)))}return b},[c,S,A]),R=nt.useMemo(()=>{const b=c.filter(Z=>ps(Z.Layer)===ps("Layer 1")),L={0:[],90:[],180:[],270:[]};for(const Z of b){const _t=y2(ix(Z.Angle),3);if(_t==null)continue;const Et=ix(Z.Ultrasonic);Et!=null&&L[_t].push(Et)}const X=L[0][0]??null,F=L[180][0]??null,W=L[90][0]??null,Q=L[270][0]??null,tt=X!=null&&F!=null?X+F:null,J=W!=null&&Q!=null?W+Q:null,G=(c.find(Z=>String(Z.HeightRaw??"").trim()!=="")||null)?.HeightRaw??"",ot=tt==null?null:tt/100,ht=J==null?null:J/100,Mt=ot!=null&&ht!=null?ot*ht:null,z=Mt!=null?Mt>=3&&Mt<=5:null;return{lengthCm:tt,widthCm:J,heightRaw:G,area:Mt,qualified:z,debug:{u0:X,u180:F,u90:W,u270:Q}}},[c]),D=()=>i(b=>Math.max(0,b-1)),U=()=>i(b=>Math.min(r.length-1,b+1)),B=()=>{f([]),m([]),v(""),E(""),y(null),g({type:"idle",message:""}),i(0)},P=()=>{m(x),i(1)},H=()=>x2("vibra_raw_parameters.csv",x);return O.jsxs("div",{className:`simulation-page ${s?"enter":""}`,children:[t===0?O.jsx(_b,{rawRows:c,setRawRows:f,displayedRows:x,searchInput:_,setSearchInput:v,setAppliedSearch:E,sortValue:A,setSortValue:y,onExport:H,onDeploy:P,onReset:B,spatial:R,uploadStatus:d,setUploadStatus:g}):O.jsx(g2,{rowsFor3D:p,spatial:R,prototypeUrl:v2}),O.jsxs("div",{className:"sim-controls",children:[O.jsx("button",{className:"sim-arrow",onClick:D,disabled:t===0,children:"‹"}),O.jsx("div",{className:"sim-dots",children:r.map((b,L)=>O.jsx("span",{className:`sim-dot ${L===t?"on":""}`},L))}),O.jsx("button",{className:"sim-arrow",onClick:U,disabled:t===r.length-1,children:"›"})]})]})}function E2(){return O.jsxs("div",{className:"inst-page",children:[O.jsx("h1",{className:"inst-title",children:"INSTRUCTION"}),O.jsx("h3",{className:"inst-subtitle",children:"HOW TO USE VIBRA"}),O.jsxs("div",{className:"inst-grid",children:[O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"PROTOTYPE"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Power on the prototype device."}),O.jsx("li",{children:"Place the device at the center of the room."}),O.jsx("li",{children:"Rotate the device 360° to scan the environment."}),O.jsx("li",{children:"Allow sensors to collect dB, distance, and RT60 data."}),O.jsx("li",{children:"Ensure measurements are stable before recording."}),O.jsx("li",{children:"Export or upload the gathered data."})]})]}),O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"WEB APPLICATION"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Go to the SIMULATION page."}),O.jsx("li",{children:"Import data (Cloud or Local)."}),O.jsx("li",{children:"Verify Angle, dB, Ultrasonic, RT60 values."}),O.jsx("li",{children:"Select classification (Hotspot/Deadspot/Neutral)."}),O.jsx("li",{children:"Click DEPLOY to map the data."}),O.jsx("li",{children:"Review recommendations and apply treatments."})]})]})]})]})}const b2="https://docs.google.com/spreadsheets/d/15EzmUf5PyGhI88RAx5znaZDTGuw_GUc4OMXKJS_A2Pk/edit?gid=0#gid=0";function T2(){const[r,t]=nt.useState(!1),[i,s]=nt.useState(""),[l,c]=nt.useState(""),[f,p]=nt.useState(""),[m,d]=nt.useState({type:"",text:""}),[g,_]=nt.useState(!1);nt.useEffect(()=>{t(!0)},[]);function v(E){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(E||"").trim())}async function S(E){if(E.preventDefault(),g)return;const A=i.trim(),y=l.trim(),x=f.trim();if(!A||!y||!x){d({type:"error",text:"Please fill out Name, Email, and Message."});return}if(!v(y)){d({type:"error",text:"Please enter a valid email address."});return}_(!0),d({type:"loading",text:"Sending..."});try{const R=await fetch(b2,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,email:y,message:x})});let D=null;const U=await R.text();try{D=JSON.parse(U)}catch{D={ok:R.ok}}if(!R.ok||!D?.ok)throw new Error(D?.error||"Failed to send message.");d({type:"success",text:"Message sent! Thanks for reaching out."}),s(""),c(""),p("")}catch(R){d({type:"error",text:"Could not send. If this keeps happening, check the Apps Script deployment access (Anyone) and the URL."}),console.error(R)}finally{_(!1),setTimeout(()=>d({type:"",text:""}),3500)}}return O.jsxs("div",{className:`contact-page ${r?"enter":""}`,children:[O.jsx("h1",{className:"contact-title",children:"CONTACT US"}),O.jsx("h3",{className:"contact-subtitle",children:"GET IN TOUCH"}),O.jsxs("div",{className:"contact-grid",children:[O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"EMAIL"}),O.jsx("div",{className:"contact-value",children:"vibra.project@email.com"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"SCHOOL"}),O.jsx("div",{className:"contact-value",children:"Technological Institute of the Philippines"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"LOCATION"}),O.jsx("div",{className:"contact-value",children:"Quezon City, Philippines"})]})]}),m.text&&O.jsx("div",{className:`contact-toast ${m.type}`,children:m.text}),O.jsxs("form",{className:"contact-form",onSubmit:S,children:[O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"NAME"}),O.jsx("input",{value:i,onChange:E=>s(E.target.value),placeholder:"Your name",autoComplete:"name"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"EMAIL"}),O.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Your email",autoComplete:"email"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"MESSAGE"}),O.jsx("textarea",{value:f,onChange:E=>p(E.target.value),placeholder:"Your message...",rows:6})]}),O.jsx("button",{className:"contact-btn",type:"submit",disabled:g,children:g?"SENDING...":"SEND"})]})]})}function A2(){return O.jsx(WE,{children:O.jsx(ME,{children:O.jsxs(ms,{element:O.jsx(ab,{}),children:[O.jsx(ms,{path:"/",element:O.jsx(sb,{})}),O.jsx(ms,{path:"/about",element:O.jsx(rb,{})}),O.jsx(ms,{path:"/team",element:O.jsx(db,{})}),O.jsx(ms,{path:"/simulation",element:O.jsx(M2,{})}),O.jsx(ms,{path:"/instruction",element:O.jsx(E2,{})}),O.jsx(ms,{path:"/contact",element:O.jsx(T2,{})})]})})})}MM.createRoot(document.getElementById("root")).render(O.jsx(pM.StrictMode,{children:O.jsx(A2,{})}));
