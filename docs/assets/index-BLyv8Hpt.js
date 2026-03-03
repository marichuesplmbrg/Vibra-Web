(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function sx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zh={exports:{}},tl={};var C_;function fM(){if(C_)return tl;C_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var w_;function hM(){return w_||(w_=1,zh.exports=fM()),zh.exports}var O=hM(),Hh={exports:{}},le={};var D_;function dM(){if(D_)return le;D_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function x(I,Y,_t){this.props=I,this.context=Y,this.refs=S,this.updater=_t||E}x.prototype.isReactComponent={},x.prototype.setState=function(I,Y){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Y,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=x.prototype;function L(I,Y,_t){this.props=I,this.context=Y,this.refs=S,this.updater=_t||E}var U=L.prototype=new R;U.constructor=L,A(U,x.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(I,Y,_t){var Et=_t.ref;return{$$typeof:s,type:I,key:Y,ref:Et!==void 0?Et:null,props:_t}}function nt(I,Y){return D(I.type,Y,I.props)}function P(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function V(I){var Y={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return Y[_t]})}var Q=/\/+/g;function it(I,Y){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):Y.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(H,H):(I.status="pending",I.then(function(Y){I.status==="pending"&&(I.status="fulfilled",I.value=Y)},function(Y){I.status==="pending"&&(I.status="rejected",I.reason=Y)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function N(I,Y,_t,Et,Lt){var st=typeof I;(st==="undefined"||st==="boolean")&&(I=null);var vt=!1;if(I===null)vt=!0;else switch(st){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(I.$$typeof){case s:case t:vt=!0;break;case g:return vt=I._init,N(vt(I._payload),Y,_t,Et,Lt)}}if(vt)return Lt=Lt(I),vt=Et===""?"."+it(I,0):Et,G(Lt)?(_t="",vt!=null&&(_t=vt.replace(Q,"$&/")+"/"),N(Lt,Y,_t,"",function(jt){return jt})):Lt!=null&&(P(Lt)&&(Lt=nt(Lt,_t+(Lt.key==null||I&&I.key===Lt.key?"":(""+Lt.key).replace(Q,"$&/")+"/")+vt)),Y.push(Lt)),1;vt=0;var At=Et===""?".":Et+":";if(G(I))for(var zt=0;zt<I.length;zt++)Et=I[zt],st=At+it(Et,zt),vt+=N(Et,Y,_t,st,Lt);else if(zt=M(I),typeof zt=="function")for(I=zt.call(I),zt=0;!(Et=I.next()).done;)Et=Et.value,st=At+it(Et,zt++),vt+=N(Et,Y,_t,st,Lt);else if(st==="object"){if(typeof I.then=="function")return N(Z(I),Y,_t,Et,Lt);throw Y=String(I),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(I,Y,_t){if(I==null)return I;var Et=[],Lt=0;return N(I,Et,"","",function(st){return Y.call(_t,st,Lt++)}),Et}function et(I){if(I._status===-1){var Y=I._result;Y=Y(),Y.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=Y)}if(I._status===1)return I._result.default;throw I._result}var ut=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:z,forEach:function(I,Y,_t){z(I,function(){Y.apply(this,arguments)},_t)},count:function(I){var Y=0;return z(I,function(){Y++}),Y},toArray:function(I){return z(I,function(Y){return Y})||[]},only:function(I){if(!P(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=_,le.Children=Mt,le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=L,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,Y,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Et=A({},I.props),Lt=I.key;if(Y!=null)for(st in Y.key!==void 0&&(Lt=""+Y.key),Y)!b.call(Y,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Y.ref===void 0||(Et[st]=Y[st]);var st=arguments.length-2;if(st===1)Et.children=_t;else if(1<st){for(var vt=Array(st),At=0;At<st;At++)vt[At]=arguments[At+2];Et.children=vt}return D(I.type,Lt,Et)},le.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},le.createElement=function(I,Y,_t){var Et,Lt={},st=null;if(Y!=null)for(Et in Y.key!==void 0&&(st=""+Y.key),Y)b.call(Y,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Lt[Et]=Y[Et]);var vt=arguments.length-2;if(vt===1)Lt.children=_t;else if(1<vt){for(var At=Array(vt),zt=0;zt<vt;zt++)At[zt]=arguments[zt+2];Lt.children=At}if(I&&I.defaultProps)for(Et in vt=I.defaultProps,vt)Lt[Et]===void 0&&(Lt[Et]=vt[Et]);return D(I,st,Lt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:p,render:I}},le.isValidElement=P,le.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:et}},le.memo=function(I,Y){return{$$typeof:d,type:I,compare:Y===void 0?null:Y}},le.startTransition=function(I){var Y=B.T,_t={};B.T=_t;try{var Et=I(),Lt=B.S;Lt!==null&&Lt(_t,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(H,ut)}catch(st){ut(st)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),B.T=Y}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(I){return B.H.use(I)},le.useActionState=function(I,Y,_t){return B.H.useActionState(I,Y,_t)},le.useCallback=function(I,Y){return B.H.useCallback(I,Y)},le.useContext=function(I){return B.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,Y){return B.H.useDeferredValue(I,Y)},le.useEffect=function(I,Y){return B.H.useEffect(I,Y)},le.useEffectEvent=function(I){return B.H.useEffectEvent(I)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(I,Y,_t){return B.H.useImperativeHandle(I,Y,_t)},le.useInsertionEffect=function(I,Y){return B.H.useInsertionEffect(I,Y)},le.useLayoutEffect=function(I,Y){return B.H.useLayoutEffect(I,Y)},le.useMemo=function(I,Y){return B.H.useMemo(I,Y)},le.useOptimistic=function(I,Y){return B.H.useOptimistic(I,Y)},le.useReducer=function(I,Y,_t){return B.H.useReducer(I,Y,_t)},le.useRef=function(I){return B.H.useRef(I)},le.useState=function(I){return B.H.useState(I)},le.useSyncExternalStore=function(I,Y,_t){return B.H.useSyncExternalStore(I,Y,_t)},le.useTransition=function(){return B.H.useTransition()},le.version="19.2.4",le}var L_;function Rp(){return L_||(L_=1,Hh.exports=dM()),Hh.exports}var $=Rp();const pM=sx($);var Gh={exports:{}},el={},Vh={exports:{}},kh={};var N_;function mM(){return N_||(N_=1,(function(s){function t(N,z){var et=N.length;N.push(z);t:for(;0<et;){var ut=et-1>>>1,Mt=N[ut];if(0<l(Mt,z))N[ut]=z,N[et]=Mt,et=ut;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],et=N.pop();if(et!==z){N[0]=et;t:for(var ut=0,Mt=N.length,I=Mt>>>1;ut<I;){var Y=2*(ut+1)-1,_t=N[Y],Et=Y+1,Lt=N[Et];if(0>l(_t,et))Et<Mt&&0>l(Lt,_t)?(N[ut]=Lt,N[Et]=et,ut=Et):(N[ut]=_t,N[Y]=et,ut=Y);else if(Et<Mt&&0>l(Lt,et))N[ut]=Lt,N[Et]=et,ut=Et;else break t}}return z}function l(N,z){var et=N.sortIndex-z.sortIndex;return et!==0?et:N.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,_=null,v=3,M=!1,E=!1,A=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var z=i(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=N)r(d),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(d)}}function G(N){if(A=!1,U(N),!E)if(i(m)!==null)E=!0,H||(H=!0,V());else{var z=i(d);z!==null&&Z(G,z.startTime-N)}}var H=!1,B=-1,b=5,D=-1;function nt(){return S?!0:!(s.unstable_now()-D<b)}function P(){if(S=!1,H){var N=s.unstable_now();D=N;var z=!0;try{t:{E=!1,A&&(A=!1,R(B),B=-1),M=!0;var et=v;try{e:{for(U(N),_=i(m);_!==null&&!(_.expirationTime>N&&nt());){var ut=_.callback;if(typeof ut=="function"){_.callback=null,v=_.priorityLevel;var Mt=ut(_.expirationTime<=N);if(N=s.unstable_now(),typeof Mt=="function"){_.callback=Mt,U(N),z=!0;break e}_===i(m)&&r(m),U(N)}else r(m);_=i(m)}if(_!==null)z=!0;else{var I=i(d);I!==null&&Z(G,I.startTime-N),z=!1}}break t}finally{_=null,v=et,M=!1}z=void 0}}finally{z?V():H=!1}}}var V;if(typeof L=="function")V=function(){L(P)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,it=Q.port2;Q.port1.onmessage=P,V=function(){it.postMessage(null)}}else V=function(){x(P,0)};function Z(N,z){B=x(function(){N(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(N){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var et=v;v=z;try{return N()}finally{v=et}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var et=v;v=N;try{return z()}finally{v=et}},s.unstable_scheduleCallback=function(N,z,et){var ut=s.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ut+et:ut):et=ut,N){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=et+Mt,N={id:g++,callback:z,priorityLevel:N,startTime:et,expirationTime:Mt,sortIndex:-1},et>ut?(N.sortIndex=et,t(d,N),i(m)===null&&N===i(d)&&(A?(R(B),B=-1):A=!0,Z(G,et-ut))):(N.sortIndex=Mt,t(m,N),E||M||(E=!0,H||(H=!0,V()))),N},s.unstable_shouldYield=nt,s.unstable_wrapCallback=function(N){var z=v;return function(){var et=v;v=z;try{return N.apply(this,arguments)}finally{v=et}}}})(kh)),kh}var U_;function gM(){return U_||(U_=1,Vh.exports=mM()),Vh.exports}var Xh={exports:{}},Nn={};var O_;function _M(){if(O_)return Nn;O_=1;var s=Rp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=g,r.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var P_;function vM(){if(P_)return Xh.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Xh.exports=_M(),Xh.exports}var F_;function xM(){if(F_)return el;F_=1;var s=gM(),t=Rp(),i=vM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=h;break}if(C===o){y=!0,o=u,a=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===a){y=!0,a=h,o=u;break}if(C===o){y=!0,o=h,a=u;break}C=C.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:it(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return it(e(n))}catch{}}return null}var Z=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ut=[],Mt=-1;function I(e){return{current:e}}function Y(e){0>Mt||(e.current=ut[Mt],ut[Mt]=null,Mt--)}function _t(e,n){Mt++,ut[Mt]=e.current,e.current=n}var Et=I(null),Lt=I(null),st=I(null),vt=I(null);function At(e,n){switch(_t(st,n),_t(Lt,e),_t(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Q0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Q0(n),e=J0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Et),_t(Et,e)}function zt(){Y(Et),Y(Lt),Y(st)}function jt(e){e.memoizedState!==null&&_t(vt,e);var n=Et.current,a=J0(n,e.type);n!==a&&(_t(Lt,e),_t(Et,a))}function $t(e){Lt.current===e&&(Y(Et),Y(Lt)),vt.current===e&&(Y(vt),Ko._currentValue=et)}var Fe,ce;function fe(e){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+e+ce}var Ee=!1;function se(e,n){if(!e||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ht){var ct=ht}Reflect.construct(e,[],St)}else{try{St.call()}catch(ht){ct=ht}e.call(St.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],C=h[1];if(y&&C){var k=y.split(`
`),ot=C.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ot.length)for(o=k.length-1,u=ot.length-1;1<=o&&0<=u&&k[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ot[u]){var gt=`
`+k[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function Ye(e,n){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return fe("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=Ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Se=s.unstable_scheduleCallback,he=s.unstable_cancelCallback,Gt=s.unstable_shouldYield,F=s.unstable_requestPaint,T=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,yt=s.unstable_UserBlockingPriority,dt=s.unstable_NormalPriority,Vt=s.unstable_LowPriority,wt=s.unstable_IdlePriority,Zt=s.log,te=s.unstable_setDisableYieldValue,Tt=null,bt=null;function Ft(e){if(typeof Zt=="function"&&te(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Tt,e)}catch{}}var Pt=Math.clz32?Math.clz32:q,It=Math.log,pe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(It(e)/pe|0)|0}var Dt=256,Ct=262144,Bt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=Rt(o):(y&=C,y!==0?u=Rt(y):a||(a=C&~e,a!==0&&(u=Rt(a))))):(C=o&~h,C!==0?u=Rt(C):y!==0?u=Rt(y):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,ot=e.hiddenUpdates;for(a=y&~a;0<a;){var gt=31-Pt(a),St=1<<gt;C[gt]=0,k[gt]=-1;var ct=ot[gt];if(ct!==null)for(ot[gt]=null,gt=0;gt<ct.length;gt++){var ht=ct[gt];ht!==null&&(ht.lane&=-536870913)}a&=~St}o!==0&&uo(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function uo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function tr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Al(e,n){var a=n&-n;return a=(a&42)!==0?1:er(a),(a&(e.suspendedLanes|n))!==0?0:a}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zi(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:y_(e.type))}function ir(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Ri=Math.random().toString(36).slice(2),on="__reactFiber$"+Ri,mn="__reactProps$"+Ri,na="__reactContainer$"+Ri,Fa="__reactEvents$"+Ri,Rl="__reactListeners$"+Ri,Cl="__reactHandles$"+Ri,wl="__reactResources$"+Ri,Es="__reactMarker$"+Ri;function fo(e){delete e[on],delete e[mn],delete e[Fa],delete e[Rl],delete e[Cl]}function Ia(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[na]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=s_(e);e!==null;){if(a=e[on])return a;e=s_(e)}return n}e=a,a=e.parentNode}return null}function Ba(e){if(e=e[on]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function bs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[wl];return n||(n=e[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[Es]=!0}var ft=new Set,lt={};function at(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(lt[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},qt={};function Qt(e){return je.call(qt,e)?!0:je.call(Ut,e)?!1:Ht.test(e)?qt[e]=!0:(Ut[e]=!0,!1)}function ie(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Le(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function re(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,h,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ci(e,y,me(n)):a!=null?Ci(e,y,me(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+me(C):e.removeAttribute("name")}function $n(e,n,a,o,u,h,y,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Le(e);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Le(e)}function Ci(e,n,a){n==="number"&&Yt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Le(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ia(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wi(e,h,n[h])}function ar(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return lS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Pu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,rr=null;function Kp(e){var n=Ba(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&gn(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var Iu=!1;function Qp(e,n,a){if(Iu)return e(n,a);Iu=!0;try{var o=e(n);return o}finally{if(Iu=!1,(sr!==null||rr!==null)&&(_c(),sr&&(n=sr,e=rr,rr=sr=null,Kp(n),e)))for(n=0;n<e.length;n++)Kp(e[n])}}function ho(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(sa)try{var po={};Object.defineProperty(po,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Bu=!1}var za=null,zu=null,Ll=null;function Jp(){if(Ll)return Ll;var e,n=zu,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return Ll=u.slice(e,1<o?1-o:void 0)}function Nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function $p(){return!1}function Xn(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ul:$p,this.isPropagationStopped=$p,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Xn(Ts),mo=_({},Ts,{view:0,detail:0}),cS=Xn(mo),Hu,Gu,go,Pl=_({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Hu=e.screenX-go.screenX,Gu=e.screenY-go.screenY):Gu=Hu=0,go=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),tm=Xn(Pl),uS=_({},Pl,{dataTransfer:0}),fS=Xn(uS),hS=_({},mo,{relatedTarget:0}),Vu=Xn(hS),dS=_({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),pS=Xn(dS),mS=_({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gS=Xn(mS),_S=_({},Ts,{data:0}),em=Xn(_S),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=SS[e])?!!n[e]:!1}function ku(){return yS}var MS=_({},mo,{key:function(e){if(e.key){var n=vS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ES=Xn(MS),bS=_({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Xn(bS),TS=_({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),AS=Xn(TS),RS=_({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=Xn(RS),wS=_({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Xn(wS),LS=_({},Ts,{newState:0,oldState:0}),NS=Xn(LS),US=[9,13,27,32],Xu=sa&&"CompositionEvent"in window,_o=null;sa&&"documentMode"in document&&(_o=document.documentMode);var OS=sa&&"TextEvent"in window&&!_o,im=sa&&(!Xu||_o&&8<_o&&11>=_o),am=" ",sm=!1;function rm(e,n){switch(e){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function PS(e,n){switch(e){case"compositionend":return om(n);case"keypress":return n.which!==32?null:(sm=!0,am);case"textInput":return e=n.data,e===am&&sm?null:e;default:return null}}function FS(e,n){if(or)return e==="compositionend"||!Xu&&rm(e,n)?(e=Jp(),Ll=zu=za=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return im&&n.locale!=="ko"?null:n.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!IS[e.type]:n==="textarea"}function cm(e,n,a,o){sr?rr?rr.push(o):rr=[o]:sr=o,n=bc(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var vo=null,xo=null;function BS(e){j0(e,0)}function Fl(e){var n=bs(e);if(gn(n))return e}function um(e,n){if(e==="change")return n}var fm=!1;if(sa){var ju;if(sa){var Wu="oninput"in document;if(!Wu){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Wu=typeof hm.oninput=="function"}ju=Wu}else ju=!1;fm=ju&&(!document.documentMode||9<document.documentMode)}function dm(){vo&&(vo.detachEvent("onpropertychange",pm),xo=vo=null)}function pm(e){if(e.propertyName==="value"&&Fl(xo)){var n=[];cm(n,xo,e,Fu(e)),Qp(BS,n)}}function zS(e,n,a){e==="focusin"?(dm(),vo=n,xo=a,vo.attachEvent("onpropertychange",pm)):e==="focusout"&&dm()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(xo)}function GS(e,n){if(e==="click")return Fl(n)}function VS(e,n){if(e==="input"||e==="change")return Fl(n)}function kS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:kS;function So(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!je.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function mm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gm(e,n){var a=mm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mm(a)}}function _m(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_m(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yt(e.document)}return n}function Yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var XS=sa&&"documentMode"in document&&11>=document.documentMode,lr=null,qu=null,yo=null,Zu=!1;function xm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zu||lr==null||lr!==Yt(o)||(o=lr,"selectionStart"in o&&Yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&So(yo,o)||(yo=o,o=bc(qu,"onSelect"),0<o.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=lr)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var cr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Ku={},Sm={};sa&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Rs(e){if(Ku[e])return Ku[e];if(!cr[e])return e;var n=cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sm)return Ku[e]=n[a];return e}var ym=Rs("animationend"),Mm=Rs("animationiteration"),Em=Rs("animationstart"),jS=Rs("transitionrun"),WS=Rs("transitionstart"),YS=Rs("transitioncancel"),bm=Rs("transitionend"),Tm=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Di(e,n){Tm.set(e,n),at(n,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],ur=0,Ju=0;function Bl(){for(var e=ur,n=Ju=ur=0;n<e;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var h=pi[n];if(pi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Am(a,u,h)}}function zl(e,n,a,o){pi[ur++]=e,pi[ur++]=n,pi[ur++]=a,pi[ur++]=o,Ju|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function $u(e,n,a,o){return zl(e,n,a,o),Hl(e)}function Cs(e,n){return zl(e,null,null,n),Hl(e)}function Am(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Hl(e){if(50<ko)throw ko=0,ch=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fr={};function qS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new qS(e,n,a,o)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Gl(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")tf(e)&&(y=1);else if(typeof e=="string")y=$y(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ni(31,a,n,u),e.elementType=D,e.lanes=h,e;case A:return ws(a.children,u,h,n);case S:y=8,u|=24;break;case x:return e=ni(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case G:return e=ni(13,a,n,u),e.elementType=G,e.lanes=h,e;case H:return e=ni(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case R:y=9;break t;case U:y=11;break t;case B:y=14;break t;case b:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ni(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ws(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function ef(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Cm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function nf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wm=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=wm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},wm.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var hr=[],dr=0,Vl=null,Mo=0,gi=[],_i=0,Ha=null,Hi=1,Gi="";function oa(e,n){hr[dr++]=Mo,hr[dr++]=Vl,Vl=e,Mo=n}function Dm(e,n,a){gi[_i++]=Hi,gi[_i++]=Gi,gi[_i++]=Ha,Ha=e;var o=Hi;e=Gi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Hi=1<<32-Pt(n)+u|a<<u|o,Gi=h+e}else Hi=1<<h|a<<u|o,Gi=e}function af(e){e.return!==null&&(oa(e,1),Dm(e,1,0))}function sf(e){for(;e===Vl;)Vl=hr[--dr],hr[dr]=null,Mo=hr[--dr],hr[dr]=null;for(;e===Ha;)Ha=gi[--_i],gi[_i]=null,Gi=gi[--_i],gi[_i]=null,Hi=gi[--_i],gi[_i]=null}function Lm(e,n){gi[_i++]=Hi,gi[_i++]=Gi,gi[_i++]=Ha,Hi=n.id,Gi=n.overflow,Ha=e}var En=null,qe=null,Ae=!1,Ga=null,vi=!1,rf=Error(r(519));function Va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(mi(n,e)),rf}function Nm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[mn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)Me(jo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Z0(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Va(e,!0)}function Um(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:En=En.return}}function pr(e){if(e!==En)return!1;if(!Ae)return Um(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bh(e.type,e.memoizedProps)),a=!a),a&&qe&&Va(e),Um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=a_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=a_(e)}else n===27?(n=qe,ns(e.type)?(e=wh,wh=null,qe=e):qe=n):qe=En?Si(e.stateNode.nextSibling):null;return!0}function Ds(){qe=En=null,Ae=!1}function of(){var e=Ga;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ga=null),e}function Eo(e){Ga===null?Ga=[e]:Ga.push(e)}var lf=I(null),Ls=null,la=null;function ka(e,n,a){_t(lf,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=lf.current,Y(lf)}function cf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function uf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var k=0;k<n.length;k++)if(C.context===n[k]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),cf(h.return,a,e),o||(y=null);break t}h=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),cf(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function mr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var C=u.type;ei(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===vt.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&uf(n,e,a,o),n.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Ls=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Om(Ls,e)}function Xl(e,n){return Ls===null&&Ns(e),Om(e,n)}function Om(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(r(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var ZS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},KS=s.unstable_scheduleCallback,QS=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new ZS,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&KS(QS,function(){e.controller.abort()})}var To=null,hf=0,gr=0,_r=null;function JS(e,n){if(To===null){var a=To=[];hf=0,gr=mh(),_r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hf++,n.then(Pm,Pm),n}function Pm(){if(--hf===0&&To!==null){_r!==null&&(_r.status="fulfilled");var e=To;To=null,gr=0,_r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fm=N.S;N.S=function(e,n){x0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(e,n),Fm!==null&&Fm(e,n)};var Us=I(null);function df(){var e=Us.current;return e!==null?e:We.pooledCache}function jl(e,n){n===null?_t(Us,Us.current):_t(Us,n.pool)}function Im(){var e=df();return e===null?null:{parent:un._currentValue,pool:e}}var vr=Error(r(460)),pf=Error(r(474)),Wl=Error(r(542)),Yl={then:function(){}};function Bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gm(e),e}throw Ps=n,vr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,vr):a}}var Ps=null;function Hm(){if(Ps===null)throw Error(r(459));var e=Ps;return Ps=null,e}function Gm(e){if(e===vr||e===Wl)throw Error(r(483))}var xr=null,Ao=0;function ql(e){var n=Ao;return Ao+=1,xr===null&&(xr=[]),zm(xr,e,n)}function Ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Vm(e){function n(J,j){if(e){var rt=J.deletions;rt===null?(J.deletions=[j],J.flags|=16):rt.push(j)}}function a(J,j){if(!e)return null;for(;j!==null;)n(J,j),j=j.sibling;return null}function o(J){for(var j=new Map;J!==null;)J.key!==null?j.set(J.key,J):j.set(J.index,J),J=J.sibling;return j}function u(J,j){return J=ra(J,j),J.index=0,J.sibling=null,J}function h(J,j,rt){return J.index=rt,e?(rt=J.alternate,rt!==null?(rt=rt.index,rt<j?(J.flags|=67108866,j):rt):(J.flags|=67108866,j)):(J.flags|=1048576,j)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,j,rt,xt){return j===null||j.tag!==6?(j=ef(rt,J.mode,xt),j.return=J,j):(j=u(j,rt),j.return=J,j)}function k(J,j,rt,xt){var Jt=rt.type;return Jt===A?gt(J,j,rt.props.children,xt,rt.key):j!==null&&(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Os(Jt)===j.type)?(j=u(j,rt.props),Ro(j,rt),j.return=J,j):(j=Gl(rt.type,rt.key,rt.props,null,J.mode,xt),Ro(j,rt),j.return=J,j)}function ot(J,j,rt,xt){return j===null||j.tag!==4||j.stateNode.containerInfo!==rt.containerInfo||j.stateNode.implementation!==rt.implementation?(j=nf(rt,J.mode,xt),j.return=J,j):(j=u(j,rt.children||[]),j.return=J,j)}function gt(J,j,rt,xt,Jt){return j===null||j.tag!==7?(j=ws(rt,J.mode,xt,Jt),j.return=J,j):(j=u(j,rt),j.return=J,j)}function St(J,j,rt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ef(""+j,J.mode,rt),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return rt=Gl(j.type,j.key,j.props,null,J.mode,rt),Ro(rt,j),rt.return=J,rt;case E:return j=nf(j,J.mode,rt),j.return=J,j;case b:return j=Os(j),St(J,j,rt)}if(Z(j)||V(j))return j=ws(j,J.mode,rt,null),j.return=J,j;if(typeof j.then=="function")return St(J,ql(j),rt);if(j.$$typeof===L)return St(J,Xl(J,j),rt);Zl(J,j)}return null}function ct(J,j,rt,xt){var Jt=j!==null?j.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Jt!==null?null:C(J,j,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case M:return rt.key===Jt?k(J,j,rt,xt):null;case E:return rt.key===Jt?ot(J,j,rt,xt):null;case b:return rt=Os(rt),ct(J,j,rt,xt)}if(Z(rt)||V(rt))return Jt!==null?null:gt(J,j,rt,xt,null);if(typeof rt.then=="function")return ct(J,j,ql(rt),xt);if(rt.$$typeof===L)return ct(J,j,Xl(J,rt),xt);Zl(J,rt)}return null}function ht(J,j,rt,xt,Jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return J=J.get(rt)||null,C(j,J,""+xt,Jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return J=J.get(xt.key===null?rt:xt.key)||null,k(j,J,xt,Jt);case E:return J=J.get(xt.key===null?rt:xt.key)||null,ot(j,J,xt,Jt);case b:return xt=Os(xt),ht(J,j,rt,xt,Jt)}if(Z(xt)||V(xt))return J=J.get(rt)||null,gt(j,J,xt,Jt,null);if(typeof xt.then=="function")return ht(J,j,rt,ql(xt),Jt);if(xt.$$typeof===L)return ht(J,j,rt,Xl(j,xt),Jt);Zl(j,xt)}return null}function Wt(J,j,rt,xt){for(var Jt=null,Ne=null,Kt=j,ge=j=0,Te=null;Kt!==null&&ge<rt.length;ge++){Kt.index>ge?(Te=Kt,Kt=null):Te=Kt.sibling;var Ue=ct(J,Kt,rt[ge],xt);if(Ue===null){Kt===null&&(Kt=Te);break}e&&Kt&&Ue.alternate===null&&n(J,Kt),j=h(Ue,j,ge),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue,Kt=Te}if(ge===rt.length)return a(J,Kt),Ae&&oa(J,ge),Jt;if(Kt===null){for(;ge<rt.length;ge++)Kt=St(J,rt[ge],xt),Kt!==null&&(j=h(Kt,j,ge),Ne===null?Jt=Kt:Ne.sibling=Kt,Ne=Kt);return Ae&&oa(J,ge),Jt}for(Kt=o(Kt);ge<rt.length;ge++)Te=ht(Kt,J,ge,rt[ge],xt),Te!==null&&(e&&Te.alternate!==null&&Kt.delete(Te.key===null?ge:Te.key),j=h(Te,j,ge),Ne===null?Jt=Te:Ne.sibling=Te,Ne=Te);return e&&Kt.forEach(function(os){return n(J,os)}),Ae&&oa(J,ge),Jt}function ee(J,j,rt,xt){if(rt==null)throw Error(r(151));for(var Jt=null,Ne=null,Kt=j,ge=j=0,Te=null,Ue=rt.next();Kt!==null&&!Ue.done;ge++,Ue=rt.next()){Kt.index>ge?(Te=Kt,Kt=null):Te=Kt.sibling;var os=ct(J,Kt,Ue.value,xt);if(os===null){Kt===null&&(Kt=Te);break}e&&Kt&&os.alternate===null&&n(J,Kt),j=h(os,j,ge),Ne===null?Jt=os:Ne.sibling=os,Ne=os,Kt=Te}if(Ue.done)return a(J,Kt),Ae&&oa(J,ge),Jt;if(Kt===null){for(;!Ue.done;ge++,Ue=rt.next())Ue=St(J,Ue.value,xt),Ue!==null&&(j=h(Ue,j,ge),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return Ae&&oa(J,ge),Jt}for(Kt=o(Kt);!Ue.done;ge++,Ue=rt.next())Ue=ht(Kt,J,ge,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&Kt.delete(Ue.key===null?ge:Ue.key),j=h(Ue,j,ge),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&Kt.forEach(function(uM){return n(J,uM)}),Ae&&oa(J,ge),Jt}function ke(J,j,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===A&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case M:t:{for(var Jt=rt.key;j!==null;){if(j.key===Jt){if(Jt=rt.type,Jt===A){if(j.tag===7){a(J,j.sibling),xt=u(j,rt.props.children),xt.return=J,J=xt;break t}}else if(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Os(Jt)===j.type){a(J,j.sibling),xt=u(j,rt.props),Ro(xt,rt),xt.return=J,J=xt;break t}a(J,j);break}else n(J,j);j=j.sibling}rt.type===A?(xt=ws(rt.props.children,J.mode,xt,rt.key),xt.return=J,J=xt):(xt=Gl(rt.type,rt.key,rt.props,null,J.mode,xt),Ro(xt,rt),xt.return=J,J=xt)}return y(J);case E:t:{for(Jt=rt.key;j!==null;){if(j.key===Jt)if(j.tag===4&&j.stateNode.containerInfo===rt.containerInfo&&j.stateNode.implementation===rt.implementation){a(J,j.sibling),xt=u(j,rt.children||[]),xt.return=J,J=xt;break t}else{a(J,j);break}else n(J,j);j=j.sibling}xt=nf(rt,J.mode,xt),xt.return=J,J=xt}return y(J);case b:return rt=Os(rt),ke(J,j,rt,xt)}if(Z(rt))return Wt(J,j,rt,xt);if(V(rt)){if(Jt=V(rt),typeof Jt!="function")throw Error(r(150));return rt=Jt.call(rt),ee(J,j,rt,xt)}if(typeof rt.then=="function")return ke(J,j,ql(rt),xt);if(rt.$$typeof===L)return ke(J,j,Xl(J,rt),xt);Zl(J,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,j!==null&&j.tag===6?(a(J,j.sibling),xt=u(j,rt),xt.return=J,J=xt):(a(J,j),xt=ef(rt,J.mode,xt),xt.return=J,J=xt),y(J)):a(J,j)}return function(J,j,rt,xt){try{Ao=0;var Jt=ke(J,j,rt,xt);return xr=null,Jt}catch(Kt){if(Kt===vr||Kt===Wl)throw Kt;var Ne=ni(29,Kt,null,J.mode);return Ne.lanes=xt,Ne.return=J,Ne}}}var Fs=Vm(!0),km=Vm(!1),Xa=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Hl(e),Am(e,null,a),n}return zl(e,o,n,a),Hl(e)}function Co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,tr(e,a)}}function _f(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vf=!1;function wo(){if(vf){var e=_r;if(e!==null)throw e}}function Do(e,n,a,o){vf=!1;var u=e.updateQueue;Xa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var k=C,ot=k.next;k.next=null,y===null?h=ot:y.next=ot,y=k;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==y&&(C===null?gt.firstBaseUpdate=ot:C.next=ot,gt.lastBaseUpdate=k))}if(h!==null){var St=u.baseState;y=0,gt=ot=k=null,C=h;do{var ct=C.lane&-536870913,ht=ct!==C.lane;if(ht?(be&ct)===ct:(o&ct)===ct){ct!==0&&ct===gr&&(vf=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Wt=e,ee=C;ct=n;var ke=a;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){St=Wt.call(ke,St,ct);break t}St=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,ct=typeof Wt=="function"?Wt.call(ke,St,ct):Wt,ct==null)break t;St=_({},St,ct);break t;case 2:Xa=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(ot=gt=ht,k=St):gt=gt.next=ht,y|=ct;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ht=C,C=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);gt===null&&(k=St),u.baseState=k,u.firstBaseUpdate=ot,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),Qa|=y,e.lanes=y,e.memoizedState=St}}function Xm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function jm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xm(a[e],n)}var Sr=I(null),Kl=I(0);function Wm(e,n){e=va,_t(Kl,e),_t(Sr,n),va=e|n.baseLanes}function xf(){_t(Kl,va),_t(Sr,Sr.current)}function Sf(){va=Kl.current,Y(Sr),Y(Kl)}var ii=I(null),xi=null;function Ya(e){var n=e.alternate;_t(sn,sn.current&1),_t(ii,e),xi===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(xi=e)}function yf(e){_t(sn,sn.current),_t(ii,e),xi===null&&(xi=e)}function Ym(e){e.tag===22?(_t(sn,sn.current),_t(ii,e),xi===null&&(xi=e)):qa()}function qa(){_t(sn,sn.current),_t(ii,ii.current)}function ai(e){Y(ii),xi===e&&(xi=null),Y(sn)}var sn=I(0);function Ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rh(a)||Ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,de=null,Ge=null,fn=null,Jl=!1,yr=!1,Is=!1,$l=0,Lo=0,Mr=null,ty=0;function en(){throw Error(r(321))}function Mf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Ef(e,n,a,o,u,h){return ua=h,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Dg:Bf,Is=!1,h=a(o,u),Is=!1,yr&&(h=Zm(n,a,o,u)),qm(e),h}function qm(e){N.H=Oo;var n=Ge!==null&&Ge.next!==null;if(ua=0,fn=Ge=de=null,Jl=!1,Lo=0,Mr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&kl(e)&&(hn=!0))}function Zm(e,n,a,o){de=e;var u=0;do{if(yr&&(Mr=null),Lo=0,yr=!1,25<=u)throw Error(r(301));if(u+=1,fn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=Lg,h=n(a,o)}while(yr);return h}function ey(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?No(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(de.flags|=1024),n}function bf(){var e=$l!==0;return $l=0,e}function Tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Af(e){if(Jl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Jl=!1}ua=0,fn=Ge=de=null,yr=!1,Lo=$l=0,Mr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?de.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(Ge===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=fn===null?de.memoizedState:fn.next;if(n!==null)fn=n,Ge=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},fn===null?de.memoizedState=fn=e:fn=fn.next=e}return fn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var n=Lo;return Lo+=1,Mr===null&&(Mr=[]),e=zm(Mr,e,n),n=de,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Dg:Bf),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===L)return bn(e)}throw Error(r(438,String(e)))}function Rf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=nt;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=rn();return Cf(n,Ge,e)}function Cf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=y=null,k=null,ot=n,gt=!1;do{var St=ot.lane&-536870913;if(St!==ot.lane?(be&St)===St:(ua&St)===St){var ct=ot.revertLane;if(ct===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),St===gr&&(gt=!0);else if((ua&ct)===ct){ot=ot.next,ct===gr&&(gt=!0);continue}else St={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(C=k=St,y=h):k=k.next=St,de.lanes|=ct,Qa|=ct;St=ot.action,Is&&a(h,St),h=ot.hasEagerState?ot.eagerState:a(h,St)}else ct={lane:St,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(C=k=ct,y=h):k=k.next=ct,de.lanes|=St,Qa|=St;ot=ot.next}while(ot!==null&&ot!==n);if(k===null?y=h:k.next=C,!ei(h,e.memoizedState)&&(hn=!0,gt&&(a=_r,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=k,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wf(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);ei(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Km(e,n,a){var o=de,u=rn(),h=Ae;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!ei((Ge||u).memoizedState,a);if(y&&(u.memoizedState=a,hn=!0),u=u.queue,Nf($m.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Er(9,{destroy:void 0},Jm.bind(null,o,u,a,n),null),We===null)throw Error(r(349));h||(ua&127)!==0||Qm(o,n,a)}return a}function Qm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=tc(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jm(e,n,a,o){n.value=a,n.getSnapshot=o,tg(n)&&eg(e)}function $m(e,n,a){return a(function(){tg(n)&&eg(e)})}function tg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function eg(e){var n=Cs(e,2);n!==null&&Zn(n,e,2)}function Df(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Is){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function ng(e,n,a,o){return e.baseState=a,Cf(e,Ge,typeof o=="function"?o:fa)}function ny(e,n,a,o,u){if(sc(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};N.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,ig(n,h)):(h.next=a.next,n.pending=a.next=h)}}function ig(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=N.T,y={};N.T=y;try{var C=a(u,o),k=N.S;k!==null&&k(y,C),ag(e,n,C)}catch(ot){Lf(e,n,ot)}finally{h!==null&&y.types!==null&&(h.types=y.types),N.T=h}}else try{h=a(u,o),ag(e,n,h)}catch(ot){Lf(e,n,ot)}}function ag(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sg(e,n,o)},function(o){return Lf(e,n,o)}):sg(e,n,a)}function sg(e,n,a){n.status="fulfilled",n.value=a,rg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ig(e,a)))}function Lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,rg(n),n=n.next;while(n!==o)}e.action=null}function rg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function og(e,n){return n}function lg(e,n){if(Ae){var a=We.formState;if(a!==null){t:{var o=de;if(Ae){if(qe){e:{for(var u=qe,h=vi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){qe=Si(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:og,lastRenderedState:n},a.queue=o,a=Rg.bind(null,de,o),o.dispatch=a,o=Df(!1),h=If.bind(null,de,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ny.bind(null,de,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function cg(e){var n=rn();return ug(n,Ge,e)}function ug(e,n,a){if(n=Cf(e,n,og)[0],e=nc(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(y){throw y===vr?Wl:y}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Er(9,{destroy:void 0},iy.bind(null,u,a),null)),[o,h,e]}function iy(e,n){e.action=n}function fg(e){var n=rn(),a=Ge;if(a!==null)return ug(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Er(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=tc(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function hg(){return rn().memoizedState}function ic(e,n,a,o){var u=Hn();de.flags|=e,u.memoizedState=Er(1|n,{destroy:void 0},a,o===void 0?null:o)}function ac(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&Mf(o,Ge.memoizedState.deps)?u.memoizedState=Er(n,h,a,o):(de.flags|=e,u.memoizedState=Er(1|n,h,a,o))}function dg(e,n){ic(8390656,8,e,n)}function Nf(e,n){ac(2048,8,e,n)}function ay(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=tc(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function pg(e){var n=rn().memoizedState;return ay({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function mg(e,n){return ac(4,2,e,n)}function gg(e,n){return ac(4,4,e,n)}function _g(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vg(e,n,a){a=a!=null?a.concat([e]):null,ac(4,4,_g.bind(null,n,e),a)}function Uf(){}function xg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Mf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Mf(n,o[1]))return o[0];if(o=e(),Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Of(e,n,a){return a===void 0||(ua&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=y0(),de.lanes|=e,Qa|=e,a)}function yg(e,n,a,o){return ei(a,n)?a:Sr.current!==null?(e=Of(e,a,o),ei(e,n)||(hn=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(be&261930)===0?(hn=!0,e.memoizedState=a):(e=y0(),de.lanes|=e,Qa|=e,n)}function Mg(e,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var y=N.T,C={};N.T=C,If(e,!1,n,a);try{var k=u(),ot=N.S;if(ot!==null&&ot(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var gt=$S(k,o);Uo(e,n,gt,oi(e))}else Uo(e,n,o,oi(e))}catch(St){Uo(e,n,{then:function(){},status:"rejected",reason:St},oi())}finally{z.p=h,y!==null&&C.types!==null&&(y.types=C.types),N.T=y}}function sy(){}function Pf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Eg(e).queue;Mg(e,u,n,et,a===null?sy:function(){return bg(e),a(o)})}function Eg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bg(e){var n=Eg(e);n.next===null&&(n=e.alternate.memoizedState),Uo(e,n.next.queue,{},oi())}function Ff(){return bn(Ko)}function Tg(){return rn().memoizedState}function Ag(){return rn().memoizedState}function ry(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=ja(a);var o=Wa(n,e,a);o!==null&&(Zn(o,n,a),Co(o,n,a)),n={cache:ff()},e.payload=n;return}n=n.return}}function oy(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(e)?Cg(n,a):(a=$u(e,n,a,o),a!==null&&(Zn(a,e,o),wg(a,n,o)))}function Rg(e,n,a){var o=oi();Uo(e,n,a,o)}function Uo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(e))Cg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,C=h(y,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,y))return zl(e,n,u,0),We===null&&Bl(),!1}catch{}if(a=$u(e,n,u,o),a!==null)return Zn(a,e,o),wg(a,n,o),!0}return!1}function If(e,n,a,o){if(o={lane:2,revertLane:mh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(n)throw Error(r(479))}else n=$u(e,a,o,2),n!==null&&Zn(n,e,2)}function sc(e){var n=e.alternate;return e===de||n!==null&&n===de}function Cg(e,n){yr=Jl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function wg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,tr(e,a)}}var Oo={readContext:bn,use:ec,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Oo.useEffectEvent=en;var Dg={readContext:bn,use:ec,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:dg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ic(4194308,4,_g.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Is){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oy.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Df(e);var n=e.queue,a=Rg.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(e,n){var a=Hn();return Of(a,e,n)},useTransition:function(){var e=Df(!1);return e=Mg.bind(null,de,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Hn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(be&127)!==0||Qm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,dg($m.bind(null,o,h,e),[e]),o.flags|=2048,Er(9,{destroy:void 0},Jm.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=We.identifierPrefix;if(Ae){var a=Gi,o=Hi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ff,useFormState:lg,useActionState:lg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Rf,useCacheRefresh:function(){return Hn().memoizedState=ry.bind(null,de)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bf={readContext:bn,use:ec,useCallback:xg,useContext:bn,useEffect:Nf,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:Sg,useReducer:nc,useRef:hg,useState:function(){return nc(fa)},useDebugValue:Uf,useDeferredValue:function(e,n){var a=rn();return yg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=nc(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Km,useId:Tg,useHostTransitionStatus:Ff,useFormState:cg,useActionState:cg,useOptimistic:function(e,n){var a=rn();return ng(a,Ge,e,n)},useMemoCache:Rf,useCacheRefresh:Ag};Bf.useEffectEvent=pg;var Lg={readContext:bn,use:ec,useCallback:xg,useContext:bn,useEffect:Nf,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:Sg,useReducer:wf,useRef:hg,useState:function(){return wf(fa)},useDebugValue:Uf,useDeferredValue:function(e,n){var a=rn();return Ge===null?Of(a,e,n):yg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=wf(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:Km,useId:Tg,useHostTransitionStatus:Ff,useFormState:fg,useActionState:fg,useOptimistic:function(e,n){var a=rn();return Ge!==null?ng(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Ag};Lg.useEffectEvent=pg;function zf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Zn(n,e,o),Co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Zn(n,e,o),Co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(e,o,a),n!==null&&(Zn(n,e,a),Co(n,e,a))}};function Ng(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!So(a,o)||!So(u,h):!0}function Ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Hf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Og(e){Il(e)}function Pg(e){console.error(e)}function Fg(e){Il(e)}function rc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ig(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gf(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(e,n)},a}function Bg(e){return e=ja(e),e.tag=3,e}function zg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Ig(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Ig(n,a,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&mr(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?vc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),hh(e,o,u)),!1;case 22:return a.flags|=65536,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),hh(e,o,u)),!1}throw Error(r(435,a.tag))}return hh(e,o,u),vc(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==rf&&(e=Error(r(422),{cause:o}),Eo(mi(e,a)))):(o!==rf&&(n=Error(r(423),{cause:o}),Eo(mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=mi(o,a),u=Gf(e.stateNode,o,u),_f(e,u),nn!==4&&(nn=2)),!1;var h=Error(r(520),{cause:o});if(h=mi(h,a),Vo===null?Vo=[h]:Vo.push(h),nn!==4&&(nn=2),n===null)return!0;o=mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Gf(a.stateNode,o,e),_f(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ja===null||!Ja.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Bg(u),zg(u,e,a,o),_f(a,u),!1}a=a.return}while(a!==null);return!1}var Vf=Error(r(461)),hn=!1;function Tn(e,n,a,o){n.child=e===null?km(n,null,a,o):Fs(n,e.child,a,o)}function Hg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return Ns(n),o=Ef(e,n,a,y,h,u),C=bf(),e!==null&&!hn?(Tf(e,n,u),ha(e,n,u)):(Ae&&C&&af(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Gg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!tf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Vg(e,n,h,o,u)):(e=Gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Kf(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(y,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=ra(h,o),e.ref=n.ref,e.return=n,n.child=e}function Vg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(So(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Kf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ha(e,n,u)}return kf(e,n,a,o,u)}function kg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Xg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(n,h!==null?h.cachePool:null),h!==null?Wm(n,h):xf(),Ym(n);else return o=n.lanes=536870912,Xg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(jl(n,h.cachePool),Wm(n,h),qa(),n.memoizedState=null):(e!==null&&jl(n,null),xf(),qa());return Tn(e,n,u,a),n.child}function Po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xg(e,n,a,o,u){var h=df();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&jl(n,null),xf(),Ym(n),e!==null&&mr(e,n,o,!0),n.childLanes=u,null}function oc(e,n){return n=cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jg(e,n,a){return Fs(n,e.child,null,a),e=oc(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function cy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=oc(n,o),n.lanes=536870912,Po(null,e);if(yf(n),(e=qe)?(e=i_(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=n,n.child=a,En=n,qe=null)):e=null,e===null)throw Va(n);return n.lanes=536870912,null}return oc(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||mr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=We,o!==null&&(y=Al(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,Cs(e,y),Zn(o,e,y),Vf;vc(),n=jg(e,n,a)}else e=h.treeContext,qe=Si(y.nextSibling),En=n,Ae=!0,Ga=null,vi=!1,e!==null&&Lm(n,e),n=oc(n,o),n.flags|=4096;return n}return e=ra(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function kf(e,n,a,o,u){return Ns(n),a=Ef(e,n,a,o,void 0,u),o=bf(),e!==null&&!hn?(Tf(e,n,u),ha(e,n,u)):(Ae&&o&&af(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Wg(e,n,a,o,u,h){return Ns(n),n.updateQueue=null,a=Zm(n,o,a,u),qm(e),o=bf(),e!==null&&!hn?(Tf(e,n,h),ha(e,n,h)):(Ae&&o&&af(n),n.flags|=1,Tn(e,n,a,h),n.child)}function Yg(e,n,a,o,u){if(Ns(n),n.stateNode===null){var h=fr,y=a.contextType;typeof y=="object"&&y!==null&&(h=bn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Hf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},mf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?bn(y):fr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(zf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Hf.enqueueReplaceState(h,h.state,null),Do(n,o,h,u),wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,k=Bs(a,C);h.props=k;var ot=h.context,gt=a.contextType;y=fr,typeof gt=="object"&&gt!==null&&(y=bn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ot!==y)&&Ug(n,h,o,y),Xa=!1;var ct=n.memoizedState;h.state=ct,Do(n,o,h,u),wo(),ot=n.memoizedState,C||ct!==ot||Xa?(typeof St=="function"&&(zf(n,a,St,o),ot=n.memoizedState),(k=Xa||Ng(n,a,k,o,ct,ot,y))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=y,o=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,gf(e,n),y=n.memoizedProps,gt=Bs(a,y),h.props=gt,St=n.pendingProps,ct=h.context,ot=a.contextType,k=fr,typeof ot=="object"&&ot!==null&&(k=bn(ot)),C=a.getDerivedStateFromProps,(ot=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==St||ct!==k)&&Ug(n,h,o,k),Xa=!1,ct=n.memoizedState,h.state=ct,Do(n,o,h,u),wo();var ht=n.memoizedState;y!==St||ct!==ht||Xa||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof C=="function"&&(zf(n,a,C,o),ht=n.memoizedState),(gt=Xa||Ng(n,a,gt,o,ct,ht,k)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(ot||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ht,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ht,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),h.props=o,h.state=ht,h.context=k,o=gt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,lc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Fs(n,e.child,null,u),n.child=Fs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ha(e,n,u),e}function qg(e,n,a,o){return Ds(),n.flags|=256,Tn(e,n,a,o),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:Im()}}function Wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Zg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ya(n):qa(),(e=qe)?(e=i_(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=n,n.child=a,En=n,qe=null)):e=null,e===null)throw Va(n);return Ch(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(qa(),u=n.mode,C=cc({mode:"hidden",children:C},u),o=ws(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=jf(a),o.childLanes=Wf(e,y,a),n.memoizedState=Xf,Po(null,o)):(Ya(n),Yf(n,C))}var k=e.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(h)n.flags&256?(Ya(n),n.flags&=-257,n=qf(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),C=o.fallback,u=n.mode,o=cc({mode:"visible",children:o.children},u),C=ws(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Fs(n,e.child,null,a),o=n.child,o.memoizedState=jf(a),o.childLanes=Wf(e,y,a),n.memoizedState=Xf,n=Po(null,o));else if(Ya(n),Ch(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ot=y.dgst;y=ot,o=Error(r(419)),o.stack="",o.digest=y,Eo({value:o,source:null,stack:null}),n=qf(e,n,a)}else if(hn||mr(e,n,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=We,y!==null&&(o=Al(y,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Cs(e,o),Zn(y,e,o),Vf;Rh(C)||vc(),n=qf(e,n,a)}else Rh(C)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,qe=Si(C.nextSibling),En=n,Ae=!0,Ga=null,vi=!1,e!==null&&Lm(n,e),n=Yf(n,o.children),n.flags|=4096);return n}return u?(qa(),C=o.fallback,u=n.mode,k=e.child,ot=k.sibling,o=ra(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ot!==null?C=ra(ot,C):(C=ws(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Po(null,o),o=n.child,C=e.child.memoizedState,C===null?C=jf(a):(u=C.cachePool,u!==null?(k=un._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=Im(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Wf(e,y,a),n.memoizedState=Xf,Po(e.child,o)):(Ya(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Yf(e,n){return n=cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cc(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function qf(e,n,a){return Fs(n,e.child,null,a),e=Yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),cf(e.return,n,a)}function Zf(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function Qg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=sn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,_t(sn,y),Tn(e,n,o,a),o=Ae?Mo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,a,n);else if(e.tag===19)Kg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ql(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ql(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zf(n,!0,a,null,h,o);break;case"together":Zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(mr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Kf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function uy(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ka(n,un,e.memoizedState.cache),Ds();break;case 27:case 5:jt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zg(e,n,a):(Ya(n),e=ha(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(mr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Qg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,kg(e,n,a,n.pendingProps);case 24:ka(n,un,e.memoizedState.cache)}return ha(e,n,a)}function Jg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Kf(e,a)&&(n.flags&128)===0)return hn=!1,uy(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ae&&(n.flags&1048576)!==0&&Dm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")tf(e)?(o=Bs(e,o),n.tag=1,n=Yg(null,n,e,o,a)):(n.tag=0,n=kf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Hg(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=Gg(null,n,e,o,a);break t}}throw n=it(e)||e,Error(r(306,n,""))}}return n;case 0:return kf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),Yg(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,gf(e,n),Do(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ka(n,un,o),o!==h.cache&&uf(n,[un],a,!0),wo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=qg(e,n,o,a);break t}else if(o!==u){u=mi(Error(r(424)),n),Eo(u),n=qg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=Si(e.firstChild),En=n,Ae=!0,Ga=null,vi=!0,a=km(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),o===u){n=ha(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return lc(e,n),e===null?(a=c_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Tc(st.current).createElement(a),o[on]=n,o[mn]=e,An(o,a,e),W(o),n.stateNode=o):n.memoizedState=c_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Ae&&(o=n.stateNode=r_(n.type,n.pendingProps,st.current),En=n,vi=!0,u=qe,ns(n.type)?(wh=u,qe=Si(o.firstChild)):qe=u),Tn(e,n,n.pendingProps.children,a),lc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=qe)&&(o=Hy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,En=n,qe=Si(o.firstChild),vi=!1,u=!0):u=!1),u||Va(n)),jt(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,bh(u,h)?o=null:y!==null&&bh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Ef(e,n,ey,null,null,a),Ko._currentValue=u),lc(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=qe)&&(a=Gy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,En=n,qe=null,e=!0):e=!1),e||Va(n)),null;case 13:return Zg(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Fs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Hg(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ns(n),u=bn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Gg(e,n,n.type,n.pendingProps,a);case 15:return Vg(e,n,n.type,n.pendingProps,a);case 19:return Qg(e,n,a);case 31:return cy(e,n,a);case 22:return kg(e,n,a,n.pendingProps);case 24:return Ns(n),o=bn(un),e===null?(u=df(),u===null&&(u=We,h=ff(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},mf(n),ka(n,un,u)):((e.lanes&a)!==0&&(gf(e,n),Do(n,null,null,a),wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,un,o)):(o=h.cache,ka(n,un,o),o!==u.cache&&uf(n,[un],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function da(e){e.flags|=4}function Qf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(T0())e.flags|=8192;else throw Ps=Yl,pf}else e.flags&=-16777217}function $g(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!p_(n))if(T0())e.flags|=8192;else throw Ps=Yl,pf}function uc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,Rr|=n)}function Fo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fy(e,n,a){var o=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(un),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pr(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),Ze(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(da(n),h!==null?(Ze(n),$g(n,h)):(Ze(n),Qf(n,u,null,o,a))):h?h!==e.memoizedState?(da(n),Ze(n),$g(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),Ze(n),Qf(n,u,e,o,a)),null;case 27:if($t(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Et.current,pr(n)?Nm(n):(e=r_(u,o,a),n.stateNode=e,da(n))}return Ze(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(h=Et.current,pr(n))Nm(n);else{var y=Tc(st.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[on]=n,h[mn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return Ze(n),Qf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,pr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Z0(e.nodeValue,a)),e||Va(n,!0)}else e=Tc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=pr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=pr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),uc(n,n.updateQueue),Ze(n),null);case 4:return zt(),e===null&&xh(n.stateNode.containerInfo),Ze(n),null;case 10:return ca(n.type),Ze(n),null;case 19:if(Y(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Fo(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ql(e),h!==null){for(n.flags|=128,Fo(o,!1),e=h.updateQueue,n.updateQueue=e,uc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ae&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>mc&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ql(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,uc(n,e),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ae)return Ze(n),null}else 2*T()-o.renderingStartTime>mc&&a!==536870912&&(n.flags|=128,u=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),Ae&&oa(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ai(n),Sf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&uc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hy(e,n){switch(sf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(un),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(sn),null;case 4:return zt(),null;case 10:return ca(n.type),null;case 22:case 23:return ai(n),Sf(),e!==null&&Y(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function t0(e,n){switch(sf(n),n.tag){case 3:ca(un),zt();break;case 26:case 27:case 5:$t(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Y(sn);break;case 10:ca(n.type);break;case 22:case 23:ai(n),Sf(),e!==null&&Y(Us);break;case 24:ca(un)}}function Io(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){ze(n,n.return,C)}}function Za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var k=a,ot=C;try{ot()}catch(gt){ze(u,k,gt)}}}o=o.next}while(o!==h)}}catch(gt){ze(n,n.return,gt)}}function e0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{jm(n,a)}catch(o){ze(e,e.return,o)}}}function n0(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function Bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Vi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function i0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Jf(e,n,a){try{var o=e.stateNode;Oy(o,e.type,a,n),o[mn]=n}catch(u){ze(e,e.return,u)}}function a0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function $f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||a0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function th(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(th(e,n,a),e=e.sibling;e!==null;)th(e,n,a),e=e.sibling}function fc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fc(e,n,a),e=e.sibling;e!==null;)fc(e,n,a),e=e.sibling}function s0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[on]=e,n[mn]=a}catch(h){ze(e,e.return,h)}}var pa=!1,dn=!1,eh=!1,r0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function dy(e,n){if(e=e.containerInfo,Mh=Nc,e=vm(e),Yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,C=-1,k=-1,ot=0,gt=0,St=e,ct=null;e:for(;;){for(var ht;St!==a||u!==0&&St.nodeType!==3||(C=y+u),St!==h||o!==0&&St.nodeType!==3||(k=y+o),St.nodeType===3&&(y+=St.nodeValue.length),(ht=St.firstChild)!==null;)ct=St,St=ht;for(;;){if(St===e)break e;if(ct===a&&++ot===u&&(C=y),ct===h&&++gt===o&&(k=y),(ht=St.nextSibling)!==null)break;St=ct,ct=St.parentNode}St=ht}a=C===-1||k===-1?null:{start:C,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eh={focusedElem:e,selectionRange:a},Nc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Wt=Bs(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){ze(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ah(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ah(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function o0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&Io(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){ze(a,a.return,y)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ze(a,a.return,y)}}o&64&&e0(a),o&512&&Bo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jm(e,n)}catch(y){ze(a,a.return,y)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:ga(e,a),n===null&&o&4&&i0(a),o&512&&Bo(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&u0(e,a);break;case 13:ga(e,a),o&4&&f0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=My.bind(null,a),Vy(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||dn,u=pa;var h=dn;pa=o,(dn=n)&&!h?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,dn=h}break;case 30:break;default:ga(e,a)}}function l0(e){var n=e.alternate;n!==null&&(e.alternate=null,l0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,jn=!1;function ma(e,n,a){for(a=a.child;a!==null;)c0(e,n,a),a=a.sibling}function c0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:dn||Vi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Vi(a,n);var o=$e,u=jn;ns(a.type)&&($e=a.stateNode,jn=!1),ma(e,n,a),Yo(a.stateNode),$e=o,jn=u;break;case 5:dn||Vi(a,n);case 6:if(o=$e,u=jn,$e=null,ma(e,n,a),$e=o,jn=u,$e!==null)if(jn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:$e!==null&&(jn?(e=$e,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pr(e)):e_($e,a.stateNode));break;case 4:o=$e,u=jn,$e=a.stateNode.containerInfo,jn=!0,ma(e,n,a),$e=o,jn=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),dn||Za(4,a,n),ma(e,n,a);break;case 1:dn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&n0(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ma(e,n,a),dn=o;break;default:ma(e,n,a)}}function u0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pr(e)}catch(a){ze(n,n.return,a)}}}function f0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pr(e)}catch(a){ze(n,n.return,a)}}function py(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new r0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new r0),n;default:throw Error(r(435,e.tag))}}function hc(e,n){var a=py(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ey.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(ns(C.type)){$e=C.stateNode,jn=!1;break t}break;case 5:$e=C.stateNode,jn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,jn=!0;break t}C=C.return}if($e===null)throw Error(r(160));c0(h,y,u),$e=null,jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)h0(n,e),n=n.sibling}var Li=null;function h0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(Za(3,e,e.return),Io(3,e),Za(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Es]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[on]=e,W(h),o=h;break t;case"link":var y=h_("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(h=y[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(y=h_("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(h=y[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=e,W(h),o=h}e.stateNode=o}else d_(u,e.type,e.stateNode);else e.stateNode=f_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?d_(u,e.type,e.stateNode):f_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Jf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),a!==null&&o&4&&Jf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Vi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Wt){ze(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Jf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(eh=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){ze(e,e.return,Wt)}}break;case 3:if(Cc=null,u=Li,Li=Ac(n.containerInfo),Wn(n,e),Li=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(Wt){ze(e,e.return,Wt)}eh&&(eh=!1,d0(e));break;case 4:o=Li,Li=Ac(e.stateNode.containerInfo),Wn(n,e),Yn(e),Li=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ot=pa,gt=dn;if(pa=ot||u,dn=gt||k,Wn(n,e),dn=gt,pa=ot,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||pa||dn||zs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(h=k.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=k.stateNode;var St=k.memoizedProps.style,ct=St!=null&&St.hasOwnProperty("display")?St.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Wt){ze(k,k.return,Wt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Wt){ze(k,k.return,Wt)}}}else if(n.tag===18){if(a===null){k=n;try{var ht=k.stateNode;u?n_(ht,!0):n_(k.stateNode,!1)}catch(Wt){ze(k,k.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hc(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(a0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=$f(e);fc(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(zn(y,""),a.flags&=-33);var C=$f(e);fc(e,C,y);break;case 3:case 4:var k=a.stateNode.containerInfo,ot=$f(e);th(e,ot,k);break;default:throw Error(r(161))}}catch(gt){ze(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function d0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;d0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)o0(e,n.alternate,n),n=n.sibling}function zs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),zs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&n0(n,n.return,a),zs(n);break;case 27:Yo(n.stateNode);case 26:case 5:Vi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,a),Io(4,h);break;case 1:if(_a(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){ze(o,o.return,ot)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Xm(k[u],C)}catch(ot){ze(o,o.return,ot)}}a&&y&64&&e0(h),Bo(h,h.return);break;case 27:s0(h);case 26:case 5:_a(u,h,a),a&&o===null&&y&4&&i0(h),Bo(h,h.return);break;case 12:_a(u,h,a);break;case 31:_a(u,h,a),a&&y&4&&u0(u,h);break;case 13:_a(u,h,a),a&&y&4&&f0(u,h);break;case 22:h.memoizedState===null&&_a(u,h,a),Bo(h,h.return);break;case 30:break;default:_a(u,h,a)}n=n.sibling}}function nh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bo(a))}function ih(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)p0(e,n,a,o),n=n.sibling}function p0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&Io(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,C=h.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){ze(n,n.return,k)}}else Ni(e,n,a,o);break;case 31:Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(e,n,a,o):zo(e,n):h._visibility&2?Ni(e,n,a,o):(h._visibility|=2,br(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&nh(y,n);break;case 24:Ni(e,n,a,o),u&2048&&ih(n.alternate,n);break;default:Ni(e,n,a,o)}}function br(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,C=a,k=o,ot=y.flags;switch(y.tag){case 0:case 11:case 15:br(h,y,C,k,u),Io(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?br(h,y,C,k,u):zo(h,y):(gt._visibility|=2,br(h,y,C,k,u)),u&&ot&2048&&nh(y.alternate,y);break;case 24:br(h,y,C,k,u),u&&ot&2048&&ih(y.alternate,y);break;default:br(h,y,C,k,u)}n=n.sibling}}function zo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:zo(a,o),u&2048&&nh(o.alternate,o);break;case 24:zo(a,o),u&2048&&ih(o.alternate,o);break;default:zo(a,o)}n=n.sibling}}var Ho=8192;function Tr(e,n,a){if(e.subtreeFlags&Ho)for(e=e.child;e!==null;)m0(e,n,a),e=e.sibling}function m0(e,n,a){switch(e.tag){case 26:Tr(e,n,a),e.flags&Ho&&e.memoizedState!==null&&tM(a,Li,e.memoizedState,e.memoizedProps);break;case 5:Tr(e,n,a);break;case 3:case 4:var o=Li;Li=Ac(e.stateNode.containerInfo),Tr(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ho,Ho=16777216,Tr(e,n,a),Ho=o):Tr(e,n,a));break;default:Tr(e,n,a)}}function g0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,v0(o,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,dc(e)):Go(e);break;default:Go(e)}}function dc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,v0(o,e)}g0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,dc(n));break;default:dc(n)}e=e.sibling}}function v0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,h=o.return;if(l0(o),o===a){yn=null;break t}if(u!==null){u.return=h,yn=u;break t}yn=h}}}var my={getCacheForType:function(e){var n=bn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(un).controller.signal}},gy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,ye=null,be=0,Be=0,si=null,Ka=!1,Ar=!1,ah=!1,va=0,nn=0,Qa=0,Hs=0,sh=0,ri=0,Rr=0,Vo=null,qn=null,rh=!1,pc=0,x0=0,mc=1/0,gc=null,Ja=null,_n=0,$a=null,Cr=null,xa=0,oh=0,lh=null,S0=null,ko=0,ch=null;function oi(){return(Oe&2)!==0&&be!==0?be&-be:N.T!==null?mh():zi()}function y0(){if(ri===0)if((be&536870912)===0||Ae){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Zn(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(wr(e,0),ts(e,be,ri,!1)),Fn(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(Hs|=a),nn===4&&ts(e,be,ri,!1)),ki(e))}function M0(e,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=o?xy(e,n):fh(e,n,!0),h=o;do{if(u===0){Ar&&!o&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!_y(a)){u=fh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=Vo;var k=C.current.memoizedState.isDehydrated;if(k&&(wr(C,y).flags|=256),y=fh(C,y,!1),y!==2){if(ah&&!k){C.errorRecoveryDisabledLanes|=h,Hs|=h,u=4;break t}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){wr(e,0),ts(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ts(o,n,ri,!Ka);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=pc+300-T(),10<u)){if(ts(o,n,ri,!Ka),pt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=$0(E0.bind(null,o,a,qn,gc,rh,n,ri,Hs,Rr,Ka,h,"Throttled",-0,0),u);break t}E0(o,a,qn,gc,rh,n,ri,Hs,Rr,Ka,h,null,-0,0)}}break}while(!0);ki(e)}function E0(e,n,a,o,u,h,y,C,k,ot,gt,St,ct,ht){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},m0(n,h,St);var Wt=(h&62914560)===h?pc-T():(h&4194048)===h?x0-T():0;if(Wt=eM(St,Wt),Wt!==null){xa=h,e.cancelPendingCommit=Wt(L0.bind(null,e,n,h,a,o,u,y,C,k,gt,St,null,ct,ht)),ts(e,h,y,!ot);return}}L0(e,n,h,a,o,u,y,C,k)}function _y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ei(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,o){n&=~sh,n&=~Hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&uo(e,a,n)}function _c(){return(Oe&6)===0?(Xo(0),!1):!0}function uh(){if(ye!==null){if(Be===0)var e=ye.return;else e=ye,la=Ls=null,Af(e),xr=null,Ao=0,e=ye;for(;e!==null;)t0(e.alternate,e),e=e.return;ye=null}}function wr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,uh(),We=e,ye=a=ra(e.current,null),be=n,Be=0,si=null,Ka=!1,Ar=kt(e,n),ah=!1,Rr=ri=sh=Hs=Qa=nn=0,qn=Vo=null,rh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return va=n,Bl(),a}function b0(e,n){de=null,N.H=Oo,n===vr||n===Wl?(n=Hm(),Be=3):n===pf?(n=Hm(),Be=4):Be=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(nn=1,rc(e,mi(n,e.current)))}function T0(){var e=ii.current;return e===null?!0:(be&4194048)===be?xi===null:(be&62914560)===be||(be&536870912)!==0?e===xi:!1}function A0(){var e=N.H;return N.H=Oo,e===null?Oo:e}function R0(){var e=N.A;return N.A=my,e}function vc(){nn=4,Ka||(be&4194048)!==be&&ii.current!==null||(Ar=!0),(Qa&134217727)===0&&(Hs&134217727)===0||We===null||ts(We,be,ri,!1)}function fh(e,n,a){var o=Oe;Oe|=2;var u=A0(),h=R0();(We!==e||be!==n)&&(gc=null,wr(e,n)),n=!1;var y=nn;t:do try{if(Be!==0&&ye!==null){var C=ye,k=si;switch(Be){case 8:uh(),y=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ot=Be;if(Be=0,si=null,Dr(e,C,k,ot),a&&Ar){y=0;break t}break;default:ot=Be,Be=0,si=null,Dr(e,C,k,ot)}}vy(),y=nn;break}catch(gt){b0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,la=Ls=null,Oe=o,N.H=u,N.A=h,ye===null&&(We=null,be=0,Bl()),y}function vy(){for(;ye!==null;)C0(ye)}function xy(e,n){var a=Oe;Oe|=2;var o=A0(),u=R0();We!==e||be!==n?(gc=null,mc=T()+500,wr(e,n)):Ar=kt(e,n);t:do try{if(Be!==0&&ye!==null){n=ye;var h=si;e:switch(Be){case 1:Be=0,si=null,Dr(e,n,h,1);break;case 2:case 9:if(Bm(h)){Be=0,si=null,w0(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),ki(e)},h.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Bm(h)?(Be=0,si=null,w0(n)):(Be=0,si=null,Dr(e,n,h,7));break;case 5:var y=null;switch(ye.tag){case 26:y=ye.memoizedState;case 5:case 27:var C=ye;if(y?p_(y):C.stateNode.complete){Be=0,si=null;var k=C.sibling;if(k!==null)ye=k;else{var ot=C.return;ot!==null?(ye=ot,xc(ot)):ye=null}break e}}Be=0,si=null,Dr(e,n,h,5);break;case 6:Be=0,si=null,Dr(e,n,h,6);break;case 8:uh(),nn=6;break t;default:throw Error(r(462))}}Sy();break}catch(gt){b0(e,gt)}while(!0);return la=Ls=null,N.H=o,N.A=u,Oe=a,ye!==null?0:(We=null,be=0,Bl(),nn)}function Sy(){for(;ye!==null&&!Gt();)C0(ye)}function C0(e){var n=Jg(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?xc(e):ye=n}function w0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Wg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Wg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Af(n);default:t0(a,n),n=ye=Rm(n,va),n=Jg(a,n,va)}e.memoizedProps=e.pendingProps,n===null?xc(e):ye=n}function Dr(e,n,a,o){la=Ls=null,Af(n),xr=null,Ao=0;var u=n.return;try{if(ly(e,u,n,a,be)){nn=1,rc(e,mi(a,e.current)),ye=null;return}}catch(h){if(u!==null)throw ye=u,h;nn=1,rc(e,mi(a,e.current)),ye=null;return}n.flags&32768?(Ae||o===1?e=!0:Ar||(be&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),D0(n,e)):xc(n)}function xc(e){var n=e;do{if((n.flags&32768)!==0){D0(n,Ka);return}e=n.return;var a=fy(n.alternate,n,va);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);nn===0&&(nn=5)}function D0(e,n){do{var a=hy(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);nn=6,ye=null}function L0(e,n,a,o,u,h,y,C,k){e.cancelPendingCommit=null;do Sc();while(_n!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Ju,Ai(e,a,h,y,C,k),e===We&&(ye=We=null,be=0),Cr=n,$a=e,xa=a,oh=h,lh=u,S0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,by(dt,function(){return F0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=z.p,z.p=2,y=Oe,Oe|=4;try{dy(e,n,a)}finally{Oe=y,z.p=u,N.T=o}}_n=1,N0(),U0(),O0()}}function N0(){if(_n===1){_n=0;var e=$a,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=z.p;z.p=2;var u=Oe;Oe|=4;try{h0(n,e);var h=Eh,y=vm(e.containerInfo),C=h.focusedElem,k=h.selectionRange;if(y!==C&&C&&C.ownerDocument&&_m(C.ownerDocument.documentElement,C)){if(k!==null&&Yu(C)){var ot=k.start,gt=k.end;if(gt===void 0&&(gt=ot),"selectionStart"in C)C.selectionStart=ot,C.selectionEnd=Math.min(gt,C.value.length);else{var St=C.ownerDocument||document,ct=St&&St.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),Wt=C.textContent.length,ee=Math.min(k.start,Wt),ke=k.end===void 0?ee:Math.min(k.end,Wt);!ht.extend&&ee>ke&&(y=ke,ke=ee,ee=y);var J=gm(C,ee),j=gm(C,ke);if(J&&j&&(ht.rangeCount!==1||ht.anchorNode!==J.node||ht.anchorOffset!==J.offset||ht.focusNode!==j.node||ht.focusOffset!==j.offset)){var rt=St.createRange();rt.setStart(J.node,J.offset),ht.removeAllRanges(),ee>ke?(ht.addRange(rt),ht.extend(j.node,j.offset)):(rt.setEnd(j.node,j.offset),ht.addRange(rt))}}}}for(St=[],ht=C;ht=ht.parentNode;)ht.nodeType===1&&St.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<St.length;C++){var xt=St[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Nc=!!Mh,Eh=Mh=null}finally{Oe=u,z.p=o,N.T=a}}e.current=n,_n=2}}function U0(){if(_n===2){_n=0;var e=$a,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=z.p;z.p=2;var u=Oe;Oe|=4;try{o0(e,n.alternate,n)}finally{Oe=u,z.p=o,N.T=a}}_n=3}}function O0(){if(_n===4||_n===3){_n=0,F();var e=$a,n=Cr,a=xa,o=S0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,Cr=$a=null,P0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ja=null),nr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=z.p,z.p=2,N.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];h(C.value,{componentStack:C.stack})}}finally{N.T=n,z.p=u}}(xa&3)!==0&&Sc(),ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ch?ko++:(ko=0,ch=e):ko=0,Xo(0)}}function P0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,bo(n)))}function Sc(){return N0(),U0(),O0(),F0()}function F0(){if(_n!==5)return!1;var e=$a,n=oh;oh=0;var a=nr(xa),o=N.T,u=z.p;try{z.p=32>a?32:a,N.T=null,a=lh,lh=null;var h=$a,y=xa;if(_n=0,Cr=$a=null,xa=0,(Oe&6)!==0)throw Error(r(331));var C=Oe;if(Oe|=4,_0(h.current),p0(h,h.current,y,a),Oe=C,Xo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{z.p=u,N.T=o,P0(e,n)}}function I0(e,n,a){n=mi(a,n),n=Gf(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(Fn(e,2),ki(e))}function ze(e,n,a){if(e.tag===3)I0(e,e,a);else for(;n!==null;){if(n.tag===3){I0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){e=mi(a,e),a=Bg(2),o=Wa(n,a,2),o!==null&&(zg(a,o,n,e),Fn(o,2),ki(o));break}}n=n.return}}function hh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ah=!0,u.add(a),e=yy.bind(null,e,n,a),n.then(e,e))}function yy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>T()-pc?(Oe&2)===0&&wr(e,0):sh|=a,Rr===be&&(Rr=0)),ki(e)}function B0(e,n){n===0&&(n=Ie()),e=Cs(e,n),e!==null&&(Fn(e,n),ki(e))}function My(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B0(e,a)}function Ey(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),B0(e,a)}function by(e,n){return Se(e,n)}var yc=null,Lr=null,dh=!1,Mc=!1,ph=!1,es=0;function ki(e){e!==Lr&&e.next===null&&(Lr===null?yc=Lr=e:Lr=Lr.next=e),Mc=!0,dh||(dh=!0,Ay())}function Xo(e,n){if(!ph&&Mc){ph=!0;do for(var a=!1,o=yc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(y&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,V0(o,h))}else h=be,h=pt(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||kt(o,h)||(a=!0,V0(o,h));o=o.next}while(a);ph=!1}}function Ty(){z0()}function z0(){Mc=dh=!1;var e=0;es!==0&&Fy()&&(e=es);for(var n=T(),a=null,o=yc;o!==null;){var u=o.next,h=H0(o,n);h===0?(o.next=null,a===null?yc=u:a.next=u,u===null&&(Lr=a)):(a=o,(e!==0||(h&3)!==0)&&(Mc=!0)),o=u}_n!==0&&_n!==5||Xo(e),es!==0&&(es=0)}function H0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Pt(h),C=1<<y,k=u[y];k===-1?((C&a)===0||(C&o)!==0)&&(u[y]=ae(C,n)):k<=n&&(e.expiredLanes|=C),h&=~C}if(n=We,a=be,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&he(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&he(o),nr(a)){case 2:case 8:a=yt;break;case 32:a=dt;break;case 268435456:a=wt;break;default:a=dt}return o=G0.bind(null,e),a=Se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&he(o),e.callbackPriority=2,e.callbackNode=null,2}function G0(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sc()&&e.callbackNode!==a)return null;var o=be;return o=pt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(M0(e,o,n),H0(e,T()),e.callbackNode!=null&&e.callbackNode===a?G0.bind(null,e):null)}function V0(e,n){if(Sc())return null;M0(e,n,!0)}function Ay(){By(function(){(Oe&6)!==0?Se(mt,Ty):z0()})}function mh(){if(es===0){var e=gr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),es=e}return es}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(""+e)}function X0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ry(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=k0((u[mn]||null).action),y=o.submitter;y&&(n=(n=y[mn]||null)?k0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var C=new Ol("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var k=y?X0(u,y):new FormData(u);Pf(a,{pending:!0,data:k,method:u.method,action:h},null,k)}}else typeof h=="function"&&(C.preventDefault(),k=y?X0(u,y):new FormData(u),Pf(a,{pending:!0,data:k,method:u.method,action:h},h,k))},currentTarget:u}]})}}for(var gh=0;gh<Qu.length;gh++){var _h=Qu[gh],Cy=_h.toLowerCase(),wy=_h[0].toUpperCase()+_h.slice(1);Di(Cy,"on"+wy)}Di(ym,"onAnimationEnd"),Di(Mm,"onAnimationIteration"),Di(Em,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(jS,"onTransitionRun"),Di(WS,"onTransitionStart"),Di(YS,"onTransitionCancel"),Di(bm,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function j0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],k=C.instance,ot=C.currentTarget;if(C=C.listener,k!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){Il(gt)}u.currentTarget=null,h=k}else for(y=0;y<o.length;y++){if(C=o[y],k=C.instance,ot=C.currentTarget,C=C.listener,k!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){Il(gt)}u.currentTarget=null,h=k}}}}function Me(e,n){var a=n[Fa];a===void 0&&(a=n[Fa]=new Set);var o=e+"__bubble";a.has(o)||(W0(n,e,2,!1),a.add(o))}function vh(e,n,a){var o=0;n&&(o|=4),W0(a,e,o,n)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function xh(e){if(!e[Ec]){e[Ec]=!0,ft.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||vh(a,!1,e),vh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ec]||(n[Ec]=!0,vh("selectionchange",!1,n))}}function W0(e,n,a,o){switch(y_(n)){case 2:var u=aM;break;case 8:u=sM;break;default:u=Oh}a=u.bind(null,n,a,e),u=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Sh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Ia(C),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){o=h=y;continue t}C=C.parentNode}}o=o.return}Qp(function(){var ot=h,gt=Fu(a),St=[];t:{var ct=Tm.get(e);if(ct!==void 0){var ht=Ol,Wt=e;switch(e){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":ht=ES;break;case"focusin":Wt="focus",ht=Vu;break;case"focusout":Wt="blur",ht=Vu;break;case"beforeblur":case"afterblur":ht=Vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=fS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=AS;break;case ym:case Mm:case Em:ht=pS;break;case bm:ht=CS;break;case"scroll":case"scrollend":ht=cS;break;case"wheel":ht=DS;break;case"copy":case"cut":case"paste":ht=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=nm;break;case"toggle":case"beforetoggle":ht=NS}var ee=(n&4)!==0,ke=!ee&&(e==="scroll"||e==="scrollend"),J=ee?ct!==null?ct+"Capture":null:ct;ee=[];for(var j=ot,rt;j!==null;){var xt=j;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||J===null||(xt=ho(j,J),xt!=null&&ee.push(Wo(j,xt,rt))),ke)break;j=j.return}0<ee.length&&(ct=new ht(ct,Wt,null,a,gt),St.push({event:ct,listeners:ee}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&a!==Pu&&(Wt=a.relatedTarget||a.fromElement)&&(Ia(Wt)||Wt[na]))break t;if((ht||ct)&&(ct=gt.window===gt?gt:(ct=gt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?(Wt=a.relatedTarget||a.toElement,ht=ot,Wt=Wt?Ia(Wt):null,Wt!==null&&(ke=c(Wt),ee=Wt.tag,Wt!==ke||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(ht=null,Wt=ot),ht!==Wt)){if(ee=tm,xt="onMouseLeave",J="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=nm,xt="onPointerLeave",J="onPointerEnter",j="pointer"),ke=ht==null?ct:bs(ht),rt=Wt==null?ct:bs(Wt),ct=new ee(xt,j+"leave",ht,a,gt),ct.target=ke,ct.relatedTarget=rt,xt=null,Ia(gt)===ot&&(ee=new ee(J,j+"enter",Wt,a,gt),ee.target=rt,ee.relatedTarget=ke,xt=ee),ke=xt,ht&&Wt)e:{for(ee=Ly,J=ht,j=Wt,rt=0,xt=J;xt;xt=ee(xt))rt++;xt=0;for(var Jt=j;Jt;Jt=ee(Jt))xt++;for(;0<rt-xt;)J=ee(J),rt--;for(;0<xt-rt;)j=ee(j),xt--;for(;rt--;){if(J===j||j!==null&&J===j.alternate){ee=J;break e}J=ee(J),j=ee(j)}ee=null}else ee=null;ht!==null&&Y0(St,ct,ht,ee,!1),Wt!==null&&ke!==null&&Y0(St,ke,Wt,ee,!0)}}t:{if(ct=ot?bs(ot):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var Ne=um;else if(lm(ct))if(fm)Ne=VS;else{Ne=HS;var Kt=zS}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&ar(ot.elementType)&&(Ne=um):Ne=GS;if(Ne&&(Ne=Ne(e,ot))){cm(St,Ne,a,gt);break t}Kt&&Kt(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&Ci(ct,"number",ct.value)}switch(Kt=ot?bs(ot):window,e){case"focusin":(lm(Kt)||Kt.contentEditable==="true")&&(lr=Kt,qu=ot,yo=null);break;case"focusout":yo=qu=lr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,xm(St,a,gt);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":xm(St,a,gt)}var ge;if(Xu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else or?rm(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(im&&a.locale!=="ko"&&(or||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&or&&(ge=Jp()):(za=gt,zu="value"in za?za.value:za.textContent,or=!0)),Kt=bc(ot,Te),0<Kt.length&&(Te=new em(Te,e,null,a,gt),St.push({event:Te,listeners:Kt}),ge?Te.data=ge:(ge=om(a),ge!==null&&(Te.data=ge)))),(ge=OS?PS(e,a):FS(e,a))&&(Te=bc(ot,"onBeforeInput"),0<Te.length&&(Kt=new em("onBeforeInput","beforeinput",null,a,gt),St.push({event:Kt,listeners:Te}),Kt.data=ge)),Ry(St,e,ot,a,gt)}j0(St,n)})}function Wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ho(e,a),u!=null&&o.unshift(Wo(e,u,h)),u=ho(e,n),u!=null&&o.push(Wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Ly(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Y0(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var C=a,k=C.alternate,ot=C.stateNode;if(C=C.tag,k!==null&&k===o)break;C!==5&&C!==26&&C!==27||ot===null||(k=ot,u?(ot=ho(a,h),ot!=null&&y.unshift(Wo(a,ot,k))):u||(ot=ho(a,h),ot!=null&&y.push(Wo(a,ot,k)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Ny=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function q0(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(Uy,"")}function Z0(e,n){return n=q0(n),q0(e)===n}function Ve(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":ia(e,o,h);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=oS.get(a)||a,ie(e,a,o))}}function yh(e,n,a,o,u,h){switch(a){case"style":ia(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,h,y,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var C=h=y=u=null,k=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":y=gt;break;case"checked":k=gt;break;case"defaultChecked":ot=gt;break;case"value":h=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,gt,a,null)}}$n(e,h,C,k,ot,y,u,!1);return;case"select":Me("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Ve(e,n,u,C,a,null)}n=h,a=y,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":Me("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ve(e,n,y,C,a,null)}ln(e,o,u,h);return;case"option":for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null)&&(k==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,k,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<jo.length;o++)Me(jo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,ot,o,a,null)}return;default:if(ar(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&yh(e,n,gt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ve(e,n,C,o,a,null))}function Oy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,C=null,k=null,ot=null,gt=null;for(ht in a){var St=a[ht];if(a.hasOwnProperty(ht)&&St!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":k=St;default:o.hasOwnProperty(ht)||Ve(e,n,ht,null,o,St)}}for(var ct in o){var ht=o[ct];if(St=a[ct],o.hasOwnProperty(ct)&&(ht!=null||St!=null))switch(ct){case"type":h=ht;break;case"name":u=ht;break;case"checked":ot=ht;break;case"defaultChecked":gt=ht;break;case"value":y=ht;break;case"defaultValue":C=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ht!==St&&Ve(e,n,ct,ht,o,St)}}Bn(e,y,C,k,ot,gt,h,u);return;case"select":ht=y=C=ct=null;for(h in a)if(k=a[h],a.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":ht=k;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,k)}for(u in o)if(h=o[u],k=a[u],o.hasOwnProperty(u)&&(h!=null||k!=null))switch(u){case"value":ct=h;break;case"defaultValue":C=h;break;case"multiple":y=h;default:h!==k&&Ve(e,n,u,h,o,k)}n=C,a=y,o=ht,ct!=null?ti(e,!!a,ct,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":ht=ct=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ve(e,n,C,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":ct=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ve(e,n,y,u,o,h)}Pe(e,ct,ht);return;case"option":for(var Wt in a)ct=a[Wt],a.hasOwnProperty(Wt)&&ct!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ve(e,n,Wt,null,o,ct));for(k in o)ct=o[k],ht=a[k],o.hasOwnProperty(k)&&ct!==ht&&(ct!=null||ht!=null)&&(k==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ve(e,n,k,ct,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)ct=a[ee],a.hasOwnProperty(ee)&&ct!=null&&!o.hasOwnProperty(ee)&&Ve(e,n,ee,null,o,ct);for(ot in o)if(ct=o[ot],ht=a[ot],o.hasOwnProperty(ot)&&ct!==ht&&(ct!=null||ht!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ve(e,n,ot,ct,o,ht)}return;default:if(ar(n)){for(var ke in a)ct=a[ke],a.hasOwnProperty(ke)&&ct!==void 0&&!o.hasOwnProperty(ke)&&yh(e,n,ke,void 0,o,ct);for(gt in o)ct=o[gt],ht=a[gt],!o.hasOwnProperty(gt)||ct===ht||ct===void 0&&ht===void 0||yh(e,n,gt,ct,o,ht);return}}for(var J in a)ct=a[J],a.hasOwnProperty(J)&&ct!=null&&!o.hasOwnProperty(J)&&Ve(e,n,J,null,o,ct);for(St in o)ct=o[St],ht=a[St],!o.hasOwnProperty(St)||ct===ht||ct==null&&ht==null||Ve(e,n,St,ct,o,ht)}function K0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,C=u.duration;if(h&&C&&K0(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ot=k.startTime;if(ot>C)break;var gt=k.transferSize,St=k.initiatorType;gt&&K0(St)&&(k=k.responseEnd,y+=gt*(k<C?1:(C-ot)/(k-ot)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mh=null,Eh=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function Q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Th=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===Th?!1:(Th=e,!0):(Th=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(zy)}:$0;function zy(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function e_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yo(a);for(var h=a.firstChild;h;){var y=h.nextSibling,C=h.nodeName;h[Es]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Yo(e.ownerDocument.body);a=u}while(a);Pr(n)}function n_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ah(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ah(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function i_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function Rh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wh=null;function a_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function s_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function r_(e,n,a){switch(n=Tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fo(e)}var yi=new Map,o_=new Set;function Ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=z.d;z.d={f:ky,r:Xy,D:jy,C:Wy,L:Yy,m:qy,X:Ky,S:Zy,M:Qy};function ky(){var e=Sa.f(),n=_c();return e||n}function Xy(e){var n=Ba(e);n!==null&&n.tag===5&&n.type==="form"?bg(n):Sa.r(e)}var Nr=typeof document>"u"?null:document;function l_(e,n,a){var o=Nr;if(o&&typeof n=="string"&&n){var u=re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),o_.has(u)||(o_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),W(n),o.head.appendChild(n)))}}function jy(e){Sa.D(e),l_("dns-prefetch",e,null)}function Wy(e,n){Sa.C(e,n),l_("preconnect",e,n)}function Yy(e,n,a){Sa.L(e,n,a);var o=Nr;if(o&&e&&n){var u='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+re(a.imageSizes)+'"]')):u+='[href="'+re(e)+'"]';var h=u;switch(n){case"style":h=Ur(e);break;case"script":h=Or(e)}yi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Zo(h))||(n=o.createElement("link"),An(n,"link",e),W(n),o.head.appendChild(n)))}}function qy(e,n){Sa.m(e,n);var a=Nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Or(e)}if(!yi.has(h)&&(e=_({rel:"modulepreload",href:e},n),yi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(h)))return}o=a.createElement("link"),An(o,"link",e),W(o),a.head.appendChild(o)}}}function Zy(e,n,a){Sa.S(e,n,a);var o=Nr;if(o&&e){var u=w(o).hoistableStyles,h=Ur(e);n=n||"default";var y=u.get(h);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(qo(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(h))&&Dh(e,a);var k=y=o.createElement("link");W(k),An(k,"link",e),k._p=new Promise(function(ot,gt){k.onload=ot,k.onerror=gt}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(h,y)}}}function Ky(e,n){Sa.X(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Or(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=_({src:e,async:!0},n),(n=yi.get(u))&&Lh(e,n),h=a.createElement("script"),W(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Qy(e,n){Sa.M(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Or(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=yi.get(u))&&Lh(e,n),h=a.createElement("script"),W(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function c_(e,n,a,o){var u=(u=st.current)?Ac(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ur(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ur(a.href);var h=w(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(qo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),h||Jy(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Or(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ur(e){return'href="'+re(e)+'"'}function qo(e){return'link[rel="stylesheet"]['+e+"]"}function u_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),W(n),e.head.appendChild(n))}function Or(e){return'[src="'+re(e)+'"]'}function Zo(e){return"script[async]"+e}function f_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),An(o,"style",u),Rc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ur(a.href);var h=e.querySelector(qo(u));if(h)return n.state.loading|=4,n.instance=h,W(h),h;o=u_(a),(u=yi.get(u))&&Dh(o,u),h=(e.ownerDocument||e).createElement("link"),W(h);var y=h;return y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),An(h,"link",o),n.state.loading|=4,Rc(h,a.precedence,e),n.instance=h;case"script":return h=Or(a.src),(u=e.querySelector(Zo(h)))?(n.instance=u,W(u),u):(o=a,(u=yi.get(h))&&(o=_({},a),Lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Rc(o,a.precedence,e));return n.instance}function Rc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Cc=null;function h_(e,n,a){if(Cc===null){var o=new Map,u=Cc=new Map;u.set(a,o)}else u=Cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Es]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(h):o.set(y,[h])}}return o}function d_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ur(o.href),h=n.querySelector(qo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,W(h);return}h=n.ownerDocument||n,o=u_(o),(u=yi.get(u))&&Dh(o,u),h=h.createElement("link"),W(h);var y=h;y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nh=0;function eM(e,n){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Nh===0&&(Nh=62500*Py());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Nh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,n.forEach(nM,e),Dc=null,wc.call(e))}function nM(e,n){if(!(n.state.loading&4)){var a=Dc.get(e);if(a)var o=a.get(null);else{a=new Map,Dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=wc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:L,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function iM(e,n,a,o,u,h,y,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function m_(e,n,a,o,u,h,y,C,k,ot,gt,St){return e=new iM(e,n,a,y,k,ot,gt,St,C),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=ff(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},mf(h),e}function g_(e){return e?(e=fr,e):fr}function __(e,n,a,o,u,h){u=g_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Wa(e,o,n),a!==null&&(Zn(a,e,n),Co(a,e,n))}function v_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Uh(e,n){v_(e,n),(e=e.alternate)&&v_(e,n)}function x_(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&Zn(n,e,67108864),Uh(e,67108864)}}function S_(e){if(e.tag===13||e.tag===31){var n=oi();n=er(n);var a=Cs(e,n);a!==null&&Zn(a,e,n),Uh(e,n)}}var Nc=!0;function aM(e,n,a,o){var u=N.T;N.T=null;var h=z.p;try{z.p=2,Oh(e,n,a,o)}finally{z.p=h,N.T=u}}function sM(e,n,a,o){var u=N.T;N.T=null;var h=z.p;try{z.p=8,Oh(e,n,a,o)}finally{z.p=h,N.T=u}}function Oh(e,n,a,o){if(Nc){var u=Ph(o);if(u===null)Sh(e,n,o,Uc,a),M_(e,o);else if(oM(u,e,n,a,o))o.stopPropagation();else if(M_(e,o),n&4&&-1<rM.indexOf(e)){for(;u!==null;){var h=Ba(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Rt(h.pendingLanes);if(y!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var k=1<<31-Pt(y);C.entanglements[1]|=k,y&=~k}ki(h),(Oe&6)===0&&(mc=T()+500,Xo(0))}}break;case 31:case 13:C=Cs(h,2),C!==null&&Zn(C,h,2),_c(),Uh(h,2)}if(h=Ph(o),h===null&&Sh(e,n,o,Uc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Sh(e,n,o,null,a)}}function Ph(e){return e=Fu(e),Fh(e)}var Uc=null;function Fh(e){if(Uc=null,e=Ia(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Uc=e,null}function y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case mt:return 2;case yt:return 8;case dt:case Vt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Ih=!1,is=null,as=null,ss=null,Qo=new Map,Jo=new Map,rs=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ba(n),n!==null&&x_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oM(e,n,a,o,u){switch(n){case"focusin":return is=$o(is,e,n,a,o,u),!0;case"dragenter":return as=$o(as,e,n,a,o,u),!0;case"mouseover":return ss=$o(ss,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Qo.set(h,$o(Qo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Jo.set(h,$o(Jo.get(h)||null,e,n,a,o,u)),!0}return!1}function E_(e){var n=Ia(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ir(e.priority,function(){S_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ir(e.priority,function(){S_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ph(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Pu=o,a.target.dispatchEvent(o),Pu=null}else return n=Ba(a),n!==null&&x_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){Oc(e)&&a.delete(n)}function lM(){Ih=!1,is!==null&&Oc(is)&&(is=null),as!==null&&Oc(as)&&(as=null),ss!==null&&Oc(ss)&&(ss=null),Qo.forEach(b_),Jo.forEach(b_)}function Pc(e,n){e.blockedOn===n&&(e.blockedOn=null,Ih||(Ih=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lM)))}var Fc=null;function T_(e){Fc!==e&&(Fc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Fc===e&&(Fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Fh(o||a)===null)continue;break}var h=Ba(a);h!==null&&(e.splice(n,3),n-=3,Pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Pr(e){function n(k){return Pc(k,e)}is!==null&&Pc(is,e),as!==null&&Pc(as,e),ss!==null&&Pc(ss,e),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[mn]||null;if(typeof h=="function")y||T_(a);else if(y){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[mn]||null)C=y.formAction;else if(Fh(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),T_(a)}}}function A_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bh(e){this._internalRoot=e}Ic.prototype.render=Bh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();__(a,o,e,n,null,null)},Ic.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;__(e.current,2,null,e,null,null),_c(),n[na]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&E_(e)}};var R_=t.version;if(R_!=="19.2.4")throw Error(r(527,R_,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Tt=Bc.inject(cM),bt=Bc}catch{}}return el.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Og,h=Pg,y=Fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=m_(e,1,!1,null,null,a,o,null,u,h,y,A_),e[na]=n.current,xh(e),new Bh(n)},el.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Og,y=Pg,C=Fg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=m_(e,1,!0,n,a??null,o,u,k,h,y,C,A_),n.context=g_(null),a=n.current,o=oi(),o=er(o),u=ja(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,Fn(n,a),ki(n),e[na]=n.current,xh(e),new Ic(n)},el.version="19.2.4",el}var I_;function SM(){if(I_)return Gh.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Gh.exports=xM(),Gh.exports}var yM=SM();const MM=sx(yM);var B_="popstate";function EM(s={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=Js(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Dd("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,d=m.indexOf("#");p=d===-1?m:m.slice(0,d)}return p+"#"+(typeof c=="string"?c:ml(c))}function r(l,c){Bi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return TM(t,i,r,s)}function tn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Bi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bM(){return Math.random().toString(36).substring(2,10)}function z_(s,t){return{usr:s.state,key:s.key,idx:t}}function Dd(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Js(t):t,state:i,key:t&&t.key||r||bM()}}function ml({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Js(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function TM(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){p="POP";let S=g(),x=S==null?null:S-d;d=S,m&&m({action:p,location:A.location,delta:x})}function v(S,x){p="PUSH";let R=Dd(A.location,S,x);i&&i(R,S),d=g()+1;let L=z_(R,d),U=A.createHref(R);try{f.pushState(L,"",U)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(U)}c&&m&&m({action:p,location:A.location,delta:1})}function M(S,x){p="REPLACE";let R=Dd(A.location,S,x);i&&i(R,S),d=g();let L=z_(R,d),U=A.createHref(R);f.replaceState(L,"",U),c&&m&&m({action:p,location:A.location,delta:0})}function E(S){return AM(S)}let A={get action(){return p},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(B_,_),m=S,()=>{l.removeEventListener(B_,_),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(S){return f.go(S)}};return A}function AM(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ml(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function rx(s,t,i="/"){return RM(s,t,i,!1)}function RM(s,t,i,r){let l=typeof t=="string"?Js(t):t,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=ox(s);CM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=zM(c);p=IM(f[m],d,r)}return p}function ox(s,t=[],i=[],r="",l=!1){let c=(f,p,m=l,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;tn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Da([r,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),ox(f.children,t,v,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:PM(_,f.index),routesMeta:v})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of lx(f.path))c(f,p,!0,m)}),t}function lx(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=lx(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function CM(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:FM(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var wM=/^:[\w-]+$/,DM=3,LM=2,NM=1,UM=10,OM=-2,H_=s=>s==="*";function PM(s,t){let i=s.split("/"),r=i.length;return i.some(H_)&&(r+=OM),t&&(r+=LM),i.filter(l=>!H_(l)).reduce((l,c)=>l+(wM.test(c)?DM:c===""?NM:UM),r)}function FM(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function IM(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],d=p===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),v=m.route;if(!_&&d&&i&&!r[r.length-1].route.index&&(_=yu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Da([c,_.pathname]),pathnameBase:kM(Da([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=Da([c,_.pathnameBase]))}return f}function yu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=BM(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((d,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=p[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=p[v];return _&&!M?d[g]=void 0:d[g]=(M||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:s}}function BM(s,t=!1,i=!0){Bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function zM(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Ua(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var HM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function GM(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Js(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=G_(i.substring(1),"/"):c=G_(i,t)):c=t,{pathname:c,search:XM(r),hash:jM(l)}}function G_(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function jh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VM(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function cx(s){let t=VM(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function ux(s,t,i,r=!1){let l;typeof s=="string"?l=Js(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),jh("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),jh("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),jh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?t[_]:"/"}let m=GM(l,p),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var Da=s=>s.join("/").replace(/\/\/+/g,"/"),kM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),XM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,jM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,WM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function YM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function qM(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hx(s,t){let i=s;if(typeof i!="string"||!HM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(fx)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ua(f.pathname,t);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dx=["POST","PUT","PATCH","DELETE"];new Set(dx);var ZM=["GET",...dx];new Set(ZM);var ro=$.createContext(null);ro.displayName="DataRouter";var Ru=$.createContext(null);Ru.displayName="DataRouterState";var KM=$.createContext(!1),px=$.createContext({isTransitioning:!1});px.displayName="ViewTransition";var QM=$.createContext(new Map);QM.displayName="Fetchers";var JM=$.createContext(null);JM.displayName="Await";var Ti=$.createContext(null);Ti.displayName="Navigation";var yl=$.createContext(null);yl.displayName="Location";var ea=$.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Cp=$.createContext(null);Cp.displayName="RouteError";var mx="REACT_ROUTER_ERROR",$M="REDIRECT",tE="ROUTE_ERROR_RESPONSE";function eE(s){if(s.startsWith(`${mx}:${$M}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function nE(s){if(s.startsWith(`${mx}:${tE}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new WM(t.status,t.statusText,t.data)}catch{}}function iE(s,{relative:t}={}){tn(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=$.useContext(Ti),{hash:l,pathname:c,search:f}=El(s,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Da([i,c])),r.createHref({pathname:p,search:f,hash:l})}function Ml(){return $.useContext(yl)!=null}function Ms(){return tn(Ml(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(yl).location}var gx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _x(s){$.useContext(Ti).static||$.useLayoutEffect(s)}function Cu(){let{isDataRoute:s}=$.useContext(ea);return s?vE():aE()}function aE(){tn(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let s=$.useContext(ro),{basename:t,navigator:i}=$.useContext(Ti),{matches:r}=$.useContext(ea),{pathname:l}=Ms(),c=JSON.stringify(cx(r)),f=$.useRef(!1);return _x(()=>{f.current=!0}),$.useCallback((m,d={})=>{if(Bi(f.current,gx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=ux(m,JSON.parse(c),l,d.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Da([t,g.pathname])),(d.replace?i.replace:i.push)(g,d.state,d)},[t,i,c,l,s])}var sE=$.createContext(null);function rE(s){let t=$.useContext(ea).outlet;return $.useMemo(()=>t&&$.createElement(sE.Provider,{value:s},t),[t,s])}function El(s,{relative:t}={}){let{matches:i}=$.useContext(ea),{pathname:r}=Ms(),l=JSON.stringify(cx(i));return $.useMemo(()=>ux(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function oE(s,t){return vx(s,t)}function vx(s,t,i,r,l){tn(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=$.useContext(Ti),{matches:f}=$.useContext(ea),p=f[f.length-1],m=p?p.params:{},d=p?p.pathname:"/",g=p?p.pathnameBase:"/",_=p&&p.route;{let R=_&&_.path||"";Sx(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Ms(),M;if(t){let R=typeof t=="string"?Js(t):t;tn(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),M=R}else M=v;let E=M.pathname||"/",A=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=rx(s,{pathname:A});Bi(_||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Bi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=hE(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:Da([g,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Da([g,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,r,l);return t&&x?$.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function lE(){let s=_E(),t=YM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:c},"ErrorBoundary")," or"," ",$.createElement("code",{style:c},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),i?$.createElement("pre",{style:l},i):null,f)}var cE=$.createElement(lE,null),xx=class extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=nE(s.digest);i&&(s=i)}let t=s!==void 0?$.createElement(ea.Provider,{value:this.props.routeContext},$.createElement(Cp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?$.createElement(uE,{error:s},t):t}};xx.contextType=KM;var Wh=new WeakMap;function uE({children:s,error:t}){let{basename:i}=$.useContext(Ti);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=eE(t.digest);if(r){let l=Wh.get(t);if(l)throw l;let c=hx(r.location,i);if(fx&&!Wh.get(t))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Wh.set(t,f),f}return $.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function fE({routeContext:s,match:t,children:i}){let r=$.useContext(ro);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(ea.Provider,{value:s},i)}function hE(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:M}=i,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let d=i&&r?(g,_)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:qM(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,v)=>{let M,E=!1,A=null,S=null;i&&(M=f&&_.route.id?f[_.route.id]:void 0,A=_.route.errorElement||cE,p&&(m<0&&v===0?(Sx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===v&&(E=!0,S=_.route.hydrateFallbackElement||null)));let x=t.concat(c.slice(0,v+1)),R=()=>{let L;return M?L=A:E?L=S:_.route.Component?L=$.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=g,$.createElement(fE,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:i!=null},children:L})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?$.createElement(xx,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:d}):R()},null)}function wp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dE(s){let t=$.useContext(ro);return tn(t,wp(s)),t}function pE(s){let t=$.useContext(Ru);return tn(t,wp(s)),t}function mE(s){let t=$.useContext(ea);return tn(t,wp(s)),t}function Dp(s){let t=mE(s),i=t.matches[t.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function gE(){return Dp("useRouteId")}function _E(){let s=$.useContext(Cp),t=pE("useRouteError"),i=Dp("useRouteError");return s!==void 0?s:t.errors?.[i]}function vE(){let{router:s}=dE("useNavigate"),t=Dp("useNavigate"),i=$.useRef(!1);return _x(()=>{i.current=!0}),$.useCallback(async(l,c={})=>{Bi(i.current,gx),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var V_={};function Sx(s,t,i){!t&&!V_[s]&&(V_[s]=!0,Bi(!1,i))}$.memo(xE);function xE({routes:s,future:t,state:i,onError:r}){return vx(s,void 0,i,r,t)}function SE(s){return rE(s.context)}function ms(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yE({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){tn(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=$.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Js(i));let{pathname:d="/",search:g="",hash:_="",state:v=null,key:M="default"}=i,E=$.useMemo(()=>{let A=Ua(d,p);return A==null?null:{location:{pathname:A,search:g,hash:_,state:v,key:M},navigationType:r}},[p,d,g,_,v,M,r]);return Bi(E!=null,`<Router basename="${p}"> is not able to match the URL "${d}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:$.createElement(Ti.Provider,{value:m},$.createElement(yl.Provider,{children:t,value:E}))}function ME({children:s,location:t}){return oE(Ld(s),t)}function Ld(s,t=[]){let i=[];return $.Children.forEach(s,(r,l)=>{if(!$.isValidElement(r))return;let c=[...t,l];if(r.type===$.Fragment){i.push.apply(i,Ld(r.props.children,c));return}tn(r.type===ms,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ld(r.props.children,c)),i.push(f)}),i}var du="get",pu="application/x-www-form-urlencoded";function wu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function EE(s){return wu(s)&&s.tagName.toLowerCase()==="button"}function bE(s){return wu(s)&&s.tagName.toLowerCase()==="form"}function TE(s){return wu(s)&&s.tagName.toLowerCase()==="input"}function AE(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function RE(s,t){return s.button===0&&(!t||t==="_self")&&!AE(s)}var zc=null;function CE(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var wE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yh(s){return s!=null&&!wE.has(s)?(Bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pu}"`),null):s}function DE(s,t){let i,r,l,c,f;if(bE(s)){let p=s.getAttribute("action");r=p?Ua(p,t):null,i=s.getAttribute("method")||du,l=Yh(s.getAttribute("enctype"))||pu,c=new FormData(s)}else if(EE(s)||TE(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Ua(m,t):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||du,l=Yh(s.getAttribute("formenctype"))||Yh(p.getAttribute("enctype"))||pu,c=new FormData(p,s),!CE()){let{name:d,type:g,value:_}=s;if(g==="image"){let v=d?`${d}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else d&&c.append(d,_)}}else{if(wu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=du,r=null,l=pu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function LE(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&Ua(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function NE(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function UE(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function OE(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await NE(c,i);return f.links?f.links():[]}return[]}));return BE(r.flat(1).filter(UE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function k_(s,t,i,r,l,c){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):c==="data"?t.filter((m,d)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function PE(s,t,{includeHydrateFallback:i}={}){return FE(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function FE(s){return[...new Set(s)]}function IE(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function BE(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(IE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function yx(){let s=$.useContext(ro);return Lp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function zE(){let s=$.useContext(Ru);return Lp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Np=$.createContext(void 0);Np.displayName="FrameworkContext";function Mx(){let s=$.useContext(Np);return Lp(s,"You must render this element inside a <HydratedRouter> element"),s}function HE(s,t){let i=$.useContext(Np),[r,l]=$.useState(!1),[c,f]=$.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=t,v=$.useRef(null);$.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=x=>{x.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),$.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:nl(p,M),onBlur:nl(m,E),onMouseEnter:nl(d,M),onMouseLeave:nl(g,E),onTouchStart:nl(_,M)}]:[!1,v,{}]}function nl(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function GE({page:s,...t}){let{router:i}=yx(),r=$.useMemo(()=>rx(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?$.createElement(kE,{page:s,matches:r,...t}):null}function VE(s){let{manifest:t,routeModules:i}=Mx(),[r,l]=$.useState([]);return $.useEffect(()=>{let c=!1;return OE(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function kE({page:s,matches:t,...i}){let r=Ms(),{future:l,manifest:c,routeModules:f}=Mx(),{basename:p}=yx(),{loaderData:m,matches:d}=zE(),g=$.useMemo(()=>k_(s,t,d,c,r,"data"),[s,t,d,c,r]),_=$.useMemo(()=>k_(s,t,d,c,r,"assets"),[s,t,d,c,r]),v=$.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let A=new Set,S=!1;if(t.forEach(R=>{let L=c.routes[R.route.id];!L||!L.hasLoader||(!g.some(U=>U.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||L.hasClientLoader?S=!0:A.add(R.route.id))}),A.size===0)return[];let x=LE(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return S&&A.size>0&&x.searchParams.set("_routes",t.filter(R=>A.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,c,g,t,s,f]),M=$.useMemo(()=>PE(_,c),[_,c]),E=VE(_);return $.createElement($.Fragment,null,v.map(A=>$.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),M.map(A=>$.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:S})=>$.createElement("link",{key:A,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function XE(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var jE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jE&&(window.__reactRouterVersion="7.13.0")}catch{}function WE({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=$.useRef();l.current==null&&(l.current=EM({window:r,v5Compat:!0}));let c=l.current,[f,p]=$.useState({action:c.action,location:c.location}),m=$.useCallback(d=>{i===!1?p(d):$.startTransition(()=>p(d))},[i]);return $.useLayoutEffect(()=>c.listen(m),[c,m]),$.createElement(yE,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=$.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E){let{basename:A,unstable_useTransitions:S}=$.useContext(Ti),x=typeof d=="string"&&Ex.test(d),R=hx(d,A);d=R.to;let L=iE(d,{relative:l}),[U,G,H]=HE(r,M),B=KE(d,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function b(nt){t&&t(nt),nt.defaultPrevented||B(nt)}let D=$.createElement("a",{...M,...H,href:R.absoluteURL||L,onClick:R.isExternal||c?t:b,ref:XE(E,G),target:m,"data-discover":!x&&i==="render"?"true":void 0});return U&&!x?$.createElement($.Fragment,null,D,$.createElement(GE,{page:L})):D});Ra.displayName="Link";var YE=$.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...d},g){let _=El(f,{relative:d.relative}),v=Ms(),M=$.useContext(Ru),{navigator:E,basename:A}=$.useContext(Ti),S=M!=null&&eb(_)&&p===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,R=v.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(R=R.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&A&&(L=Ua(L,A)||L);const U=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let G=R===x||!l&&R.startsWith(x)&&R.charAt(U)==="/",H=L!=null&&(L===x||!l&&L.startsWith(x)&&L.charAt(x.length)==="/"),B={isActive:G,isPending:H,isTransitioning:S},b=G?t:void 0,D;typeof r=="function"?D=r(B):D=[r,G?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let nt=typeof c=="function"?c(B):c;return $.createElement(Ra,{...d,"aria-current":b,className:D,ref:g,style:nt,to:f,viewTransition:p},typeof m=="function"?m(B):m)});YE.displayName="NavLink";var qE=$.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=du,action:p,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:A}=$.useContext(Ti),S=$E(),x=tb(p,{relative:d}),R=f.toLowerCase()==="get"?"get":"post",L=typeof p=="string"&&Ex.test(p),U=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let H=G.nativeEvent.submitter,B=H?.getAttribute("formmethod")||f,b=()=>S(H||G.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:c,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});A&&i!==!1?$.startTransition(()=>b()):b()};return $.createElement("form",{ref:E,method:R,action:x,onSubmit:r?m:U,...M,"data-discover":!L&&s==="render"?"true":void 0})});qE.displayName="Form";function ZE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bx(s){let t=$.useContext(ro);return tn(t,ZE(s)),t}function KE(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let d=Cu(),g=Ms(),_=El(s,{relative:c});return $.useCallback(v=>{if(RE(v,t)){v.preventDefault();let M=i!==void 0?i:ml(g)===ml(_),E=()=>d(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?$.startTransition(()=>E()):E()}},[g,d,_,i,r,t,s,l,c,f,p,m])}var QE=0,JE=()=>`__${String(++QE)}__`;function $E(){let{router:s}=bx("useSubmit"),{basename:t}=$.useContext(Ti),i=gE(),r=s.fetch,l=s.navigate;return $.useCallback(async(c,f={})=>{let{action:p,method:m,encType:d,formData:g,body:_}=DE(c,t);if(f.navigate===!1){let v=f.fetcherKey||JE();await r(v,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function tb(s,{relative:t}={}){let{basename:i}=$.useContext(Ti),r=$.useContext(ea);tn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...El(s||".",{relative:t})},f=Ms();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Da([i,c.pathname])),ml(c)}function eb(s,{relative:t}={}){let i=$.useContext(px);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bx("useViewTransitionState"),l=El(s,{relative:t});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,r)||i.nextLocation.pathname;return yu(l.pathname,f)!=null||yu(l.pathname,c)!=null}const nb="/Vibra-Web/assets/VibraLogo-DwWVlSzh.png";function ib(){return O.jsxs("nav",{className:"navbar",children:[O.jsx(Ra,{to:"/",className:"logo-link",children:O.jsx("img",{src:nb,alt:"VIBRA Logo",className:"navbar-logo"})}),O.jsxs("div",{className:"nav-links",children:[O.jsx(Ra,{to:"/",children:"HOME"}),O.jsx(Ra,{to:"/about",children:"ABOUT"}),O.jsx(Ra,{to:"/team",children:"TEAM"}),O.jsx(Ra,{to:"/simulation",children:"SIMULATION"}),O.jsx(Ra,{to:"/instruction",children:"INSTRUCTION"}),O.jsx(Ra,{to:"/contact",children:"CONTACT"})]})]})}function ab(){return O.jsxs("div",{className:"app-container",children:[O.jsx(ib,{}),O.jsx("div",{className:"page-content",children:O.jsx(SE,{})})]})}function sb(){const s=Cu(),t=Ms();return O.jsxs("div",{className:"home-container",children:[O.jsx("h1",{className:"main-title",children:"VIBRA"}),O.jsx("h2",{className:"subtitle",children:"STUDIO SIMULATION"}),O.jsxs("button",{className:"primary-btn",onClick:()=>s("/about"),children:[O.jsx("span",{className:"btn-text",children:"LEARN MORE ABOUT US"}),O.jsx("span",{className:"btn-arrow",children:"→"})]})]},t.key)}function rb(){const[s,t]=$.useState(!1),i=Cu();return $.useEffect(()=>{t(!0)},[]),O.jsxs("div",{className:`about-container ${s?"enter":""}`,children:[O.jsx("h1",{children:"ABOUT US"}),O.jsx("h3",{children:"WE ARE VIBRA"}),O.jsxs("div",{className:"about-content",children:[O.jsxs("div",{className:"about-text",children:[O.jsx("p",{className:"about-paragraph p1",children:O.jsx("span",{className:"para-inner",children:"VIBRA is a web-based studio simulation platform designed to visualize and analyze acoustic data through an interactive three-dimensional environment. It bridges real-world sound measurements and digital visualization, allowing users to better understand how sound behaves within enclosed spaces."})}),O.jsx("p",{className:"about-paragraph p2",children:O.jsx("span",{className:"para-inner",children:"The platform gathers acoustic parameters such as RT60 values and spatial measurements from a physical prototype and transforms them into meaningful visual representations. Through its integrated 3D simulation, users can identify acoustic conditions including hot spots, dead spots, and neutral zones within a room."})}),O.jsx("p",{className:"about-paragraph p3",children:O.jsx("span",{className:"para-inner",children:"VIBRA aims to support students, engineers, and designers by providing a clear and intuitive way to evaluate room acoustics, explore data-driven insights, and improve sound optimization decisions. By combining data analysis with immersive visualization, VIBRA delivers a modern approach to acoustic assessment and simulation."})})]}),O.jsx("div",{className:"about-cta-side",children:O.jsxs("button",{className:"about-cta-btn",onClick:()=>i("/team"),"aria-label":"Meet the developers",children:[O.jsx("span",{className:"cta-arrow",children:"→"}),O.jsx("span",{className:"cta-text",children:"Meet the developers"})]})})]})]})}const ob="/Vibra-Web/assets/marichu-kG7RSE-D.png",lb="/Vibra-Web/assets/missy-BteT_0I_.png",cb="/Vibra-Web/assets/khlowee-CAL1KU9a.png",ub="/Vibra-Web/assets/juliann-BXcYWaAK.png",fb="/Vibra-Web/assets/lance-DPwIT8nK.png",hb=[{name:"Marichu C. Espelimbergo",role:"Frontend Developer",image:ob},{name:"Missy Ann Jhlezshir G. Espiritu",role:"UI/UX Designer",image:lb},{name:"Khlowee A. Mendoza",role:"Assistant Backend Developer",image:cb},{name:"Juliann Vincent B. Quibral",role:"Backend Developer",image:ub},{name:"Lance Gabrielle A. Santos",role:"Assistant Frontend Developer",image:fb}];function db(){const s=Cu(),[t,i]=$.useState(!1);return $.useEffect(()=>{i(!0)},[]),O.jsxs("div",{className:`team-container ${t?"enter":""}`,children:[O.jsx("h1",{className:"team-title",children:"OUR TEAM"}),O.jsx("h3",{className:"team-subtitle",children:"MEET THE DEVELOPERS"}),O.jsx("div",{className:"team-grid",children:hb.map((r,l)=>O.jsx("div",{className:"team-member",children:O.jsx("div",{className:"flip-card",children:O.jsxs("div",{className:"flip-inner",children:[O.jsx("div",{className:"flip-front",style:{backgroundImage:`url(${r.image})`}}),O.jsxs("div",{className:"flip-back",children:[O.jsx("div",{className:"team-name",children:r.name}),O.jsx("div",{className:"team-role",children:r.role})]})]})})},l))}),O.jsx("div",{className:"team-cta-down",children:O.jsxs("button",{className:"team-cta-btn",type:"button",onClick:()=>s("/simulation"),"aria-label":"Continue to simulation",children:[O.jsx("span",{className:"team-cta-arrow",children:"→"}),O.jsx("span",{className:"team-cta-text",children:"Continue to Simulation"})]})})]})}const pb="1OAfQI6MwheL6wIes1EhGjak3G1jSVLFGppmzqTL9MWQ",mb=[{label:"Layer 1",gid:"0"},{label:"Layer 2",gid:"540291160"},{label:"Layer 3",gid:"1597351297"},{label:"Layer 4",gid:"1962364642"}],gb=s=>`https://docs.google.com/spreadsheets/d/${pb}/export?format=csv&gid=${s}`,Nd=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function X_(s){const t=String(s).replace(/\r/g,""),i=[];let r=[],l="",c=!1;for(let m=0;m<t.length;m++){const d=t[m],g=t[m+1];if(d==='"'){c&&g==='"'?(l+='"',m++):c=!c;continue}if(d===","&&!c){r.push(l),l="";continue}if(d===`
`&&!c){r.push(l),i.push(r),r=[],l="";continue}l+=d}if((l.length||r.length)&&(r.push(l),i.push(r)),!i.length)return[];const f=i[0].map(m=>Nd(m)),p=[];for(let m=1;m<i.length;m++){const d=i[m];if(d.every(_=>Nd(_)===""))continue;const g={};f.forEach((_,v)=>{g[_]=String(d[v]??"").trim()}),p.push(g)}return p}function Rn(s,t){for(const i of t){const r=Nd(i);if(Object.prototype.hasOwnProperty.call(s,r))return s[r]}return""}function _b(s){const t=String(s??"").trim(),i=Number(t.replace("°","").trim());return Number.isFinite(i)?i:null}function j_(s,t){const i=_b(s);return t==="Layer 1"&&i===270?"271":String(s??"").trim()}function vb({rawRows:s,setRawRows:t,displayedRows:i,searchInput:r,setSearchInput:l,setAppliedSearch:c,sortValue:f,setSortValue:p,onExport:m,onDeploy:d,onReset:g,spatial:_,uploadStatus:v,setUploadStatus:M}){const[E,A]=$.useState(!1),[S,x]=$.useState(!1),R=$.useRef(null),[L,U]=$.useState(!1);$.useEffect(()=>{if(v.type==="idle")return;const V=setTimeout(()=>M({type:"idle",message:""}),5e3);return()=>clearTimeout(V)},[v,M]),$.useEffect(()=>{if(_?.qualified===!1&&_?.area!=null){U(!0);const V=setTimeout(()=>U(!1),4e3);return()=>clearTimeout(V)}},[_?.qualified,_?.area]);const G=async()=>{try{M({type:"loading",message:"Uploading data from Google Sheet (all layers)..."});const V=[];for(const Q of mb){const Z=await(await fetch(gb(Q.gid),{redirect:"follow"})).text();if(Z.toLowerCase().includes("<html")||Z.toLowerCase().includes("<!doctype"))throw new Error(`Sheet ${Q.label} is not publicly accessible as CSV.`);const z=X_(Z).map(et=>{const ut=Rn(et,["angle"]);return{Angle:j_(ut,Q.label),Decibel:Rn(et,["db","dB","decibel"]),Ultrasonic:Rn(et,["utv","ultrasonic","ultrasonicvalue"]),RT60:Rn(et,["rt60","reverberation","rt60value"]),Classification:Rn(et,["class","classification"]),Layer:Q.label,LengthRaw:Rn(et,["length"]),WidthRaw:Rn(et,["width"]),HeightRaw:Rn(et,["utvh","height","heightraw"])}});V.push(...z)}if(!V.length)throw new Error("No data found from all sheets.");t(V),M({type:"success",message:`Done uploading. Loaded ${V.length} row(s) from all layers.`}),A(!1),x(!1)}catch(V){console.error("Cloud import failed:",V),M({type:"error",message:`Upload failed: ${String(V.message||V)}`}),A(!1),x(!1)}},H=V=>{const Q=V.target.files?.[0];if(!Q)return;if(!Q.name.toLowerCase().endsWith(".csv")){M({type:"error",message:"CSV only. Please upload a .csv file."}),V.target.value="";return}M({type:"loading",message:"Uploading data from local CSV..."});const it=new FileReader;it.onload=Z=>{try{const N=Z.target.result,z=X_(String(N));if(!z.length)throw new Error("CSV has no data rows.");const et=z.map(ut=>{const Mt=Rn(ut,["layer"])||"Local",I=Rn(ut,["angle"]);return{Angle:j_(I,Mt),Decibel:Rn(ut,["db","dB","decibel"]),Ultrasonic:Rn(ut,["utv","ultrasonic"]),RT60:Rn(ut,["rt60","reverberation"]),HeightRaw:Rn(ut,["utvh","height","heightraw"]),Classification:Rn(ut,["class","classification"]),Layer:Mt,LengthRaw:Rn(ut,["length"]),WidthRaw:Rn(ut,["width"])}});t(et),M({type:"success",message:`Done uploading. Loaded ${et.length} row(s).`})}catch(N){M({type:"error",message:`Upload failed: ${String(N.message||N)}`})}},it.readAsText(Q),A(!1),x(!1),V.target.value=""},B=()=>c(r),b=V=>{p(V),x(!1)},D=V=>V==null?"—":`${V.toFixed(1)} cm`,nt=V=>V==null?"—":`${V.toFixed(2)} m²`,P=_.qualified==null?"—":_.qualified?"Qualified":"Not Qualified";return O.jsxs("div",{className:"sim-slide sim-slide-1",children:[O.jsx("h1",{className:"sim-title",children:"SIMULATION"}),v.type!=="idle"&&O.jsxs("div",{className:`upload-toast upload-toast--floating ${v.type}`,children:[v.message,O.jsx("button",{className:"upload-toast-close",type:"button",onClick:()=>M({type:"idle",message:""}),"aria-label":"Close notification",children:"✕"})]}),O.jsxs("div",{className:"sim-row",children:[O.jsxs("div",{className:"glass-card glass-card--raw",children:[O.jsx("h2",{className:"card-title",children:"RAW PARAMETERS"}),O.jsxs("div",{className:"raw-top",children:[O.jsx("input",{className:"search-input",placeholder:"Search...",value:r,onChange:V=>l(V.target.value),onKeyDown:V=>V.key==="Enter"&&B()}),O.jsx("button",{className:"small-btn",type:"button",onClick:B,children:"Enter"}),O.jsxs("div",{className:"sort-wrapper",children:[O.jsx("button",{className:"small-btn",type:"button",onClick:()=>{x(V=>!V),A(!1)},children:"Sort ▾"}),S&&O.jsxs("div",{className:"sort-dropdown",children:[O.jsx("button",{type:"button",onClick:()=>b("layer:Layer 1"),children:"Layer 1"}),O.jsx("button",{type:"button",onClick:()=>b("layer:Layer 2"),children:"Layer 2"}),O.jsx("button",{type:"button",onClick:()=>b("layer:Layer 3"),children:"Layer 3"}),O.jsx("button",{type:"button",onClick:()=>b("layer:Layer 4"),children:"Layer 4"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>b("class:hotspot"),children:"Hot Spot"}),O.jsx("button",{type:"button",onClick:()=>b("class:deadspot"),children:"Dead Spot"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>b(null),children:"Clear Sort"})]})]})]}),O.jsx("div",{className:"data-box",children:O.jsxs("table",{className:"raw-table",children:[O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{children:"No."}),O.jsx("th",{children:"Angle"}),O.jsx("th",{children:"Decibel"}),O.jsx("th",{children:"Ultrasonic"}),O.jsx("th",{children:"RT60"}),O.jsx("th",{children:"Classification"}),O.jsx("th",{children:"Layer"})]})}),O.jsx("tbody",{children:i.map((V,Q)=>O.jsxs("tr",{children:[O.jsx("td",{children:Q+1}),O.jsx("td",{children:V.Angle}),O.jsx("td",{children:V.Decibel}),O.jsx("td",{children:V.Ultrasonic}),O.jsx("td",{children:V.RT60}),O.jsx("td",{children:V.Classification}),O.jsx("td",{children:V.Layer})]},`${V.Layer}-${Q}`))})]})}),O.jsxs("div",{className:"raw-bottom",children:[O.jsxs("div",{className:"left-actions",children:[O.jsxs("div",{className:"import-wrapper",children:[O.jsx("button",{className:"action-btn",type:"button",onClick:()=>{A(V=>!V),x(!1)},children:"Import ▾"}),E&&O.jsxs("div",{className:"import-dropdown",children:[O.jsx("button",{type:"button",onClick:G,children:"Cloud"}),O.jsx("button",{type:"button",onClick:()=>R.current?.click(),children:"Local"})]}),O.jsx("input",{type:"file",ref:R,style:{display:"none"},accept:".csv",onChange:H})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:m,disabled:!i.length,children:"Export"}),O.jsx("button",{className:"action-btn",type:"button",onClick:d,disabled:!i.length,children:"Deploy"})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:g,children:"Reset"})]})]}),O.jsxs("div",{className:"glass-card glass-card--spatial",style:{position:"relative"},children:[O.jsx("h2",{className:"card-title",children:"SPATIAL STATUS"}),O.jsx("p",{className:"label",children:"PHYSICAL DIMENSION:"}),L&&O.jsx("div",{className:"not-qualified-popup",children:"⚠ NOT QUALIFIED"}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Length: ",D(_.lengthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Width: ",D(_.widthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Height: ",_.heightRaw?`${_.heightRaw} cm`:"—"]})}),O.jsxs("div",{className:"status-wrapper",children:[O.jsx("p",{className:"status-label",children:"STATUS:"}),O.jsx("div",{className:"status-box",children:O.jsxs("div",{className:"status-inner",children:[O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Area:"})," ",O.jsx("b",{children:nt(_.area)})]}),O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Result:"})," ",O.jsx("b",{children:P})]}),O.jsxs("div",{className:"status-hint",children:["Qualified if floor area is ",O.jsx("b",{children:"3–5 m²"}),"."]})]})})]}),O.jsxs("div",{className:"spatial-meta",children:["Active rows: ",O.jsx("b",{children:i.length})," / ",s.length,f?O.jsxs(O.Fragment,{children:[" ","• Filter: ",O.jsx("b",{children:f})]}):null]})]})]})]})}const Up="183",Jr={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xb=0,W_=1,Sb=2,mu=1,yb=2,ul=3,Ss=0,Qn=1,Yi=2,La=0,$r=1,Y_=2,q_=3,Z_=4,Mb=5,Ys=100,Eb=101,bb=102,Tb=103,Ab=104,Rb=200,Cb=201,wb=202,Db=203,Ud=204,Od=205,Lb=206,Nb=207,Ub=208,Ob=209,Pb=210,Fb=211,Ib=212,Bb=213,zb=214,Pd=0,Fd=1,Id=2,eo=3,Bd=4,zd=5,Hd=6,Gd=7,Tx=0,Hb=1,Gb=2,Qi=0,Ax=1,Rx=2,Cx=3,wx=4,Dx=5,Lx=6,Nx=7,Ux=300,Qs=301,no=302,qh=303,Zh=304,Du=306,Vd=1e3,Ca=1001,kd=1002,Dn=1003,Vb=1004,Hc=1005,Pn=1006,Kh=1007,Zs=1008,hi=1009,Ox=1010,Px=1011,gl=1012,Op=1013,$i=1014,Zi=1015,Oa=1016,Pp=1017,Fp=1018,_l=1020,Fx=35902,Ix=35899,Bx=1021,zx=1022,Ii=1023,Pa=1026,Ks=1027,Hx=1028,Ip=1029,io=1030,Bp=1031,zp=1033,gu=33776,_u=33777,vu=33778,xu=33779,Xd=35840,jd=35841,Wd=35842,Yd=35843,qd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,tp=37491,ep=37808,np=37809,ip=37810,ap=37811,sp=37812,rp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,gp=36494,_p=36495,vp=36283,xp=36284,Sp=36285,yp=36286,kb=3200,Gx=0,Xb=1,vs="",fi="srgb",ao="srgb-linear",Mu="linear",He="srgb",Fr=7680,K_=519,jb=512,Wb=513,Yb=514,Hp=515,qb=516,Zb=517,Gp=518,Kb=519,Q_=35044,J_="300 es",Ki=2e3,vl=2001;function Qb(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Eu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jb(){const s=Eu("canvas");return s.style.display="block",s}const $_={};function tv(...s){const t="THREE."+s.shift();console.log(t,...s)}function Vx(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=Vx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ce(...s){s=Vx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function bu(...s){const t=s.join(" ");t in $_||($_[t]=!0,ne(...s))}function $b(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const tT={[Pd]:Fd,[Id]:Hd,[Bd]:Gd,[eo]:zd,[Fd]:Pd,[Hd]:Id,[Gd]:Bd,[zd]:eo};class $s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ev=1234567;const dl=Math.PI/180,xl=180/Math.PI;function oo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function Vp(s,t){return(s%t+t)%t}function eT(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function nT(s,t,i){return s!==t?(i-s)/(t-s):0}function pl(s,t,i){return(1-i)*s+i*t}function iT(s,t,i,r){return pl(s,t,1-Math.exp(-i*r))}function aT(s,t=1){return t-Math.abs(Vp(s,t*2)-t)}function sT(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function rT(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function oT(s,t){return s+Math.floor(Math.random()*(t-s+1))}function lT(s,t){return s+Math.random()*(t-s)}function cT(s){return s*(.5-Math.random())}function uT(s){s!==void 0&&(ev=s);let t=ev+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fT(s){return s*dl}function hT(s){return s*xl}function dT(s){return(s&s-1)===0&&s!==0}function pT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gT(s,t,i,r,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+r)/2),g=f((t+r)/2),_=c((t-r)/2),v=f((t-r)/2),M=c((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(p*g,m*_,m*v,p*d);break;case"YZY":s.set(m*v,p*g,m*_,p*d);break;case"ZXZ":s.set(m*_,m*v,p*g,p*d);break;case"XZX":s.set(p*g,m*E,m*M,p*d);break;case"YXY":s.set(m*M,p*g,m*E,p*d);break;case"ZYZ":s.set(m*E,m*M,p*g,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Kr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fl={DEG2RAD:dl,RAD2DEG:xl,generateUUID:oo,clamp:xe,euclideanModulo:Vp,mapLinear:eT,inverseLerp:nT,lerp:pl,damp:iT,pingpong:aT,smoothstep:sT,smootherstep:rT,randInt:oT,randFloat:lT,randFloatSpread:cT,seededRandom:uT,degToRad:fT,radToDeg:hT,isPowerOfTwo:dT,ceilPowerOfTwo:pT,floorPowerOfTwo:mT,setQuaternionFromProperEuler:gT,normalize:Gn,denormalize:Kr};class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,p){let m=r[l+0],d=r[l+1],g=r[l+2],_=r[l+3],v=c[f+0],M=c[f+1],E=c[f+2],A=c[f+3];if(_!==A||m!==v||d!==M||g!==E){let S=m*v+d*M+g*E+_*A;S<0&&(v=-v,M=-M,E=-E,A=-A,S=-S);let x=1-p;if(S<.9995){const R=Math.acos(S),L=Math.sin(R);x=Math.sin(x*R)/L,p=Math.sin(p*R)/L,m=m*x+v*p,d=d*x+M*p,g=g*x+E*p,_=_*x+A*p}else{m=m*x+v*p,d=d*x+M*p,g=g*x+E*p,_=_*x+A*p;const R=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=R,d*=R,g*=R,_*=R}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const p=r[l],m=r[l+1],d=r[l+2],g=r[l+3],_=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return t[i]=p*E+g*_+m*M-d*v,t[i+1]=m*E+g*v+d*_-p*M,t[i+2]=d*E+g*M+p*v-m*_,t[i+3]=g*E-p*_-m*v-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(r/2),g=p(l/2),_=p(c/2),v=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+d*M*E,this._y=d*M*_-v*g*E,this._z=d*g*E+v*M*_,this._w=d*g*_-v*M*E;break;case"YXZ":this._x=v*g*_+d*M*E,this._y=d*M*_-v*g*E,this._z=d*g*E-v*M*_,this._w=d*g*_+v*M*E;break;case"ZXY":this._x=v*g*_-d*M*E,this._y=d*M*_+v*g*E,this._z=d*g*E+v*M*_,this._w=d*g*_-v*M*E;break;case"ZYX":this._x=v*g*_-d*M*E,this._y=d*M*_+v*g*E,this._z=d*g*E-v*M*_,this._w=d*g*_+v*M*E;break;case"YZX":this._x=v*g*_+d*M*E,this._y=d*M*_+v*g*E,this._z=d*g*E-v*M*_,this._w=d*g*_-v*M*E;break;case"XZY":this._x=v*g*_-d*M*E,this._y=d*M*_-v*g*E,this._z=d*g*E+v*M*_,this._w=d*g*_+v*M*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+p+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-d)*M,this._z=(f-l)*M}else if(r>p&&r>_){const M=2*Math.sqrt(1+r-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+d)/M}else if(p>_){const M=2*Math.sqrt(1+p-r-_);this._w=(c-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-p);this._w=(f-l)/M,this._x=(c+d)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-r*d,this._z=c*g+f*d+r*m-l*p,this._w=f*g-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(nv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(nv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*r),g=2*(p*i-c*l),_=2*(c*r-f*i);return this.x=i+m*d+f*_-p*g,this.y=r+m*g+p*d-c*_,this.z=l+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qh=new tt,nv=new ys;class _e{constructor(t,i,r,l,c,f,p,m,d){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d)}set(t,i,r,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],M=r[5],E=r[8],A=l[0],S=l[3],x=l[6],R=l[1],L=l[4],U=l[7],G=l[2],H=l[5],B=l[8];return c[0]=f*A+p*R+m*G,c[3]=f*S+p*L+m*H,c[6]=f*x+p*U+m*B,c[1]=d*A+g*R+_*G,c[4]=d*S+g*L+_*H,c[7]=d*x+g*U+_*B,c[2]=v*A+M*R+E*G,c[5]=v*S+M*L+E*H,c[8]=v*x+M*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-r*c*g+r*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=g*f-p*d,v=p*m-g*c,M=d*c-f*m,E=i*_+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*d-g*r)*A,t[2]=(p*r-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=M*A,t[7]=(r*m-d*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Jh.makeScale(t,i)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jh=new _e,iv=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _T(){const s={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ao]:{primaries:t,whitePoint:r,transfer:Mu,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const we=_T();function Na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ir;class vT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ir===void 0&&(Ir=Eu("canvas")),Ir.width=t.width,Ir.height=t.height;const l=Ir.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ir}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Eu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Na(i[r]/255)*255):i[r]=Na(i[r]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xT=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push($h(l[f].image)):c.push($h(l[f]))}else c=$h(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function $h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let ST=0;const td=new tt;class kn extends $s{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Ca,l=Ca,c=Pn,f=Zs,p=Ii,m=hi,d=kn.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=oo(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ux)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Ux;kn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],M=m[5],E=m[9],A=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(d+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(d+1)/2,U=(M+1)/2,G=(x+1)/2,H=(g+v)/4,B=(_+A)/4,b=(E+S)/4;return L>U&&L>G?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=H/r,c=B/r):U>G?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=H/l,c=b/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=B/c,l=b/c),this.set(r,l,c,i),this}let R=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-A)/R,this.z=(v-g)/R,this.w=Math.acos((d+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yT extends $s{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new kn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends yT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class kx extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MT extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,r,l,c,f,p,m,d,g,_,v,M,E,A,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d,g,_,v,M,E,A,S)}set(t,i,r,l,c,f,p,m,d,g,_,v,M,E,A,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=M,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Br.setFromMatrixColumn(t,0).length(),c=1/Br.setFromMatrixColumn(t,1).length(),f=1/Br.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,M=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=M+E*d,i[5]=v-A*d,i[9]=-p*m,i[2]=A-v*d,i[6]=E+M*d,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,M=m*_,E=d*g,A=d*_;i[0]=v+A*p,i[4]=E*p-M,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=M*p-E,i[6]=A+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,M=m*_,E=d*g,A=d*_;i[0]=v-A*p,i[4]=-f*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*g,i[9]=A-v*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,M=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=E*d-M,i[8]=v*d+A,i[1]=m*_,i[5]=A*d+v,i[9]=M*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,M=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=M*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,M=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+A,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ET,t,bT)}lookAt(t,i,r){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ls.crossVectors(r,li),ls.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ls.crossVectors(r,li)),ls.normalize(),Gc.crossVectors(li,ls),l[0]=ls.x,l[4]=Gc.x,l[8]=li.x,l[1]=ls.y,l[5]=Gc.y,l[9]=li.y,l[2]=ls.z,l[6]=Gc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],M=r[13],E=r[2],A=r[6],S=r[10],x=r[14],R=r[3],L=r[7],U=r[11],G=r[15],H=l[0],B=l[4],b=l[8],D=l[12],nt=l[1],P=l[5],V=l[9],Q=l[13],it=l[2],Z=l[6],N=l[10],z=l[14],et=l[3],ut=l[7],Mt=l[11],I=l[15];return c[0]=f*H+p*nt+m*it+d*et,c[4]=f*B+p*P+m*Z+d*ut,c[8]=f*b+p*V+m*N+d*Mt,c[12]=f*D+p*Q+m*z+d*I,c[1]=g*H+_*nt+v*it+M*et,c[5]=g*B+_*P+v*Z+M*ut,c[9]=g*b+_*V+v*N+M*Mt,c[13]=g*D+_*Q+v*z+M*I,c[2]=E*H+A*nt+S*it+x*et,c[6]=E*B+A*P+S*Z+x*ut,c[10]=E*b+A*V+S*N+x*Mt,c[14]=E*D+A*Q+S*z+x*I,c[3]=R*H+L*nt+U*it+G*et,c[7]=R*B+L*P+U*Z+G*ut,c[11]=R*b+L*V+U*N+G*Mt,c[15]=R*D+L*Q+U*z+G*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],M=t[14],E=t[3],A=t[7],S=t[11],x=t[15],R=m*M-d*v,L=p*M-d*_,U=p*v-m*_,G=f*M-d*g,H=f*v-m*g,B=f*_-p*g;return i*(A*R-S*L+x*U)-r*(E*R-S*G+x*H)+l*(E*L-A*G+x*B)-c*(E*U-A*H+S*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],M=t[11],E=t[12],A=t[13],S=t[14],x=t[15],R=i*p-r*f,L=i*m-l*f,U=i*d-c*f,G=r*m-l*p,H=r*d-c*p,B=l*d-c*m,b=g*A-_*E,D=g*S-v*E,nt=g*x-M*E,P=_*S-v*A,V=_*x-M*A,Q=v*x-M*S,it=R*Q-L*V+U*P+G*nt-H*D+B*b;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/it;return t[0]=(p*Q-m*V+d*P)*Z,t[1]=(l*V-r*Q-c*P)*Z,t[2]=(A*B-S*H+x*G)*Z,t[3]=(v*H-_*B-M*G)*Z,t[4]=(m*nt-f*Q-d*D)*Z,t[5]=(i*Q-l*nt+c*D)*Z,t[6]=(S*U-E*B-x*L)*Z,t[7]=(g*B-v*U+M*L)*Z,t[8]=(f*V-p*nt+d*b)*Z,t[9]=(r*nt-i*V-c*b)*Z,t[10]=(E*H-A*U+x*R)*Z,t[11]=(_*U-g*H-M*R)*Z,t[12]=(p*D-f*P-m*b)*Z,t[13]=(i*P-r*D+l*b)*Z,t[14]=(A*L-E*G-S*R)*Z,t[15]=(g*G-_*L+v*R)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+r,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+r,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,_=p+p,v=c*d,M=c*g,E=c*_,A=f*g,S=f*_,x=p*_,R=m*d,L=m*g,U=m*_,G=r.x,H=r.y,B=r.z;return l[0]=(1-(A+x))*G,l[1]=(M+U)*G,l[2]=(E-L)*G,l[3]=0,l[4]=(M-U)*H,l[5]=(1-(v+x))*H,l[6]=(S+R)*H,l[7]=0,l[8]=(E+L)*B,l[9]=(S-R)*B,l[10]=(1-(v+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Br.set(l[0],l[1],l[2]).length();const p=Br.set(l[4],l[5],l[6]).length(),m=Br.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const d=1/f,g=1/p,_=1/m;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,f,p=Ki,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(r-l),v=(i+t)/(i-t),M=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(p===Ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===vl)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,c,f,p=Ki,m=!1){const d=this.elements,g=2/(i-t),_=2/(r-l),v=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(p===Ki)E=-2/(f-c),A=-(f+c)/(f-c);else if(p===vl)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Br=new tt,Ui=new Ke,ET=new tt(0,0,0),bT=new tt(1,1,1),ls=new tt,Gc=new tt,li=new tt,sv=new Ke,rv=new ys;class wn{constructor(t=0,i=0,r=0,l=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],_=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return rv.setFromEuler(this),this.setFromQuaternion(rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TT=0;const ov=new tt,zr=new ys,ya=new Ke,Vc=new tt,il=new tt,AT=new tt,RT=new ys,lv=new tt(1,0,0),cv=new tt(0,1,0),uv=new tt(0,0,1),fv={type:"added"},CT={type:"removed"},Hr={type:"childadded",child:null},ed={type:"childremoved",child:null};class Ln extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new tt,i=new wn,r=new ys,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new _e}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(lv,t)}rotateY(t){return this.rotateOnAxis(cv,t)}rotateZ(t){return this.rotateOnAxis(uv,t)}translateOnAxis(t,i){return ov.copy(t).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lv,t)}translateY(t){return this.translateOnAxis(cv,t)}translateZ(t){return this.translateOnAxis(uv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Vc.copy(t):Vc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(il,Vc,this.up):ya.lookAt(Vc,il,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(ya),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(CT),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,t,AT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,RT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),M=f(t.animations),E=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new tt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wa extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),x=this._getHandJoint(d,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,E=.005;d.inputState.pinching&&v>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new wa;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},kc={h:0,s:0,l:0};function id(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=Vp(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=id(f,c,t+1/3),this.g=id(f,c,t),this.b=id(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Xx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return we.workingToColorSpace(On.copy(this),t),Math.round(xe(On.r*255,0,255))*65536+Math.round(xe(On.g*255,0,255))*256+Math.round(xe(On.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const _=f-p;switch(d=g<=.5?_/(f+p):_/(2-f-p),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fi){we.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+i,cs.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(cs),t.getHSL(kc);const r=pl(cs.h,kc.h,i),l=pl(cs.s,kc.s,i),c=pl(cs.l,kc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new De;De.NAMES=Xx;class DT extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new tt,Ma=new tt,ad=new tt,Ea=new tt,Gr=new tt,Vr=new tt,hv=new tt,sd=new tt,rd=new tt,od=new tt,ld=new an,cd=new an,ud=new an;class Fi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Oi.subVectors(l,i),Ma.subVectors(r,i),ad.subVectors(t,i);const f=Oi.dot(Oi),p=Oi.dot(Ma),m=Oi.dot(ad),d=Ma.dot(Ma),g=Ma.dot(ad),_=f*d-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,M=(d*m-p*g)*v,E=(f*g-p*m)*v;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,r,l,c,f,p,m){return this.getBarycoord(t,i,r,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(f,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,r),ud.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ld,c.x),f.addScaledVector(cd,c.y),f.addScaledVector(ud,c.z),f}static isFrontFacing(t,i,r,l){return Oi.subVectors(r,i),Ma.subVectors(t,i),Oi.cross(Ma).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Oi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,p;Gr.subVectors(l,r),Vr.subVectors(c,r),sd.subVectors(t,r);const m=Gr.dot(sd),d=Vr.dot(sd);if(m<=0&&d<=0)return i.copy(r);rd.subVectors(t,l);const g=Gr.dot(rd),_=Vr.dot(rd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Gr,f);od.subVectors(t,c);const M=Gr.dot(od),E=Vr.dot(od);if(E>=0&&M<=E)return i.copy(c);const A=M*d-m*E;if(A<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(r).addScaledVector(Vr,p);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return hv.subVectors(c,l),p=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(hv,p);const x=1/(S+A+v);return f=A*x,p=v*x,i.copy(r).addScaledVector(Gr,f).addScaledVector(Vr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bl{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xc.copy(r.boundingBox)),Xc.applyMatrix4(t.matrixWorld),this.union(Xc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(al),jc.subVectors(this.max,al),kr.subVectors(t.a,al),Xr.subVectors(t.b,al),jr.subVectors(t.c,al),us.subVectors(Xr,kr),fs.subVectors(jr,Xr),Gs.subVectors(kr,jr);let i=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,fs.z,0,-fs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Gs.y,Gs.x,0];return!fd(i,kr,Xr,jr,jc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,kr,Xr,jr,jc))?!1:(Wc.crossVectors(us,fs),i=[Wc.x,Wc.y,Wc.z],fd(i,kr,Xr,jr,jc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Pi=new tt,Xc=new bl,kr=new tt,Xr=new tt,jr=new tt,us=new tt,fs=new tt,Gs=new tt,al=new tt,jc=new tt,Wc=new tt,Vs=new tt;function fd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Vs.fromArray(s,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),d=i.dot(Vs),g=r.dot(Vs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const pn=new tt,Yc=new ue;let LT=0;class di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Q_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(t),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Kr(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Kr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Kr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Kr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Kr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Q_&&(t.usage=this.usage),t}}class jx extends di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Wx extends di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends di{constructor(t,i,r){super(new Float32Array(t),i,r)}}const NT=new bl,sl=new tt,hd=new tt;class Lu{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):NT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sl.subVectors(t,this.center);const i=sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(sl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sl.copy(t.center).add(hd)),this.expandByPoint(sl.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let UT=0;const Mi=new Ke,dd=new Ln,Wr=new tt,ci=new bl,rl=new bl,Mn=new tt;class Jn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qb(t)?Wx:jx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _e().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,r){return Mi.makeTranslation(t,i,r),this.applyMatrix4(Mi),this}scale(t,i,r){return Mi.makeScale(t,i,r),this.applyMatrix4(Mi),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];rl.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(ci.min,rl.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,rl.max),ci.expandByPoint(Mn)):(ci.expandByPoint(rl.min),ci.expandByPoint(rl.max))}ci.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Mn.fromBufferAttribute(p,d),m&&(Wr.fromBufferAttribute(t,d),Mn.add(Wr)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new tt,m[b]=new tt;const d=new tt,g=new tt,_=new tt,v=new ue,M=new ue,E=new ue,A=new tt,S=new tt;function x(b,D,nt){d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,nt),v.fromBufferAttribute(c,b),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,nt),g.sub(d),_.sub(d),M.sub(v),E.sub(v);const P=1/(M.x*E.y-E.x*M.y);isFinite(P)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(P),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(P),p[b].add(A),p[D].add(A),p[nt].add(A),m[b].add(S),m[D].add(S),m[nt].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let b=0,D=R.length;b<D;++b){const nt=R[b],P=nt.start,V=nt.count;for(let Q=P,it=P+V;Q<it;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new tt,U=new tt,G=new tt,H=new tt;function B(b){G.fromBufferAttribute(l,b),H.copy(G);const D=p[b];L.copy(D),L.sub(G.multiplyScalar(G.dot(D))).normalize(),U.crossVectors(H,D);const P=U.dot(m[b])<0?-1:1;f.setXYZW(b,L.x,L.y,L.z,P)}for(let b=0,D=R.length;b<D;++b){const nt=R[b],P=nt.start,V=nt.count;for(let Q=P,it=P+V;Q<it;Q+=3)B(t.getX(Q+0)),B(t.getX(Q+1)),B(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new tt,c=new tt,f=new tt,p=new tt,m=new tt,d=new tt,g=new tt,_=new tt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),p.add(g),m.add(g),d.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,_=p.normalized,v=new d.constructor(m.length*g);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){p.isInterleavedBufferAttribute?M=m[A]*p.data.stride+p.offset:M=m[A]*g;for(let x=0;x<g;x++)v[E++]=d[M++]}return new di(v,g,_)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const v=d[g],M=t(v,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const M=d[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OT=0;class lo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=$r,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(r.blending=this.blending),this.side!==Ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ta=new tt,pd=new tt,qc=new tt,hs=new tt,md=new tt,Zc=new tt,gd=new tt;class Nu{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){pd.copy(t).add(i).multiplyScalar(.5),qc.copy(i).sub(t).normalize(),hs.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(qc),p=hs.dot(this.direction),m=-hs.dot(qc),d=hs.lengthSq(),g=Math.abs(1-f*f);let _,v,M,E;if(g>0)if(_=f*m-p,v=f*p-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,M=_*(_+f*v+2*p)+v*(f*_+v+2*m)+d}else v=c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+d):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+v*(v+2*m)+d);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),M=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(pd).addScaledVector(qc,v),M}intersectSphere(t,i){Ta.subVectors(t.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(t.min.x-v.x)*d,l=(t.max.x-v.x)*d):(r=(t.max.x-v.x)*d,l=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,i,r,l,c){md.subVectors(i,t),Zc.subVectors(r,t),gd.crossVectors(md,Zc);let f=this.direction.dot(gd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;hs.subVectors(this.origin,t);const m=p*this.direction.dot(Zc.crossVectors(hs,Zc));if(m<0)return null;const d=p*this.direction.dot(md.cross(hs));if(d<0||m+d>f)return null;const g=-p*hs.dot(gd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yx extends lo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dv=new Ke,ks=new Nu,Kc=new Lu,pv=new tt,Qc=new tt,Jc=new tt,$c=new tt,_d=new tt,tu=new tt,mv=new tt,eu=new tt;class Cn extends Ln{constructor(t=new Jn,i=new Yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){tu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(_d.fromBufferAttribute(_,t),f?tu.addScaledVector(_d,g):tu.addScaledVector(_d.sub(i),g))}i.add(tu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Kc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Kc,pv)===null||ks.origin.distanceToSquared(pv)>(t.far-t.near)**2))&&(dv.copy(c).invert(),ks.copy(t.ray).applyMatrix4(dv),!(r.boundingBox!==null&&ks.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=R,G=L;U<G;U+=3){const H=p.getX(U),B=p.getX(U+1),b=p.getX(U+2);l=nu(this,x,t,r,d,g,_,H,B,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const R=p.getX(S),L=p.getX(S+1),U=p.getX(S+2);l=nu(this,f,t,r,d,g,_,R,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=R,G=L;U<G;U+=3){const H=U,B=U+1,b=U+2;l=nu(this,x,t,r,d,g,_,H,B,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const R=S,L=S+1,U=S+2;l=nu(this,f,t,r,d,g,_,R,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function PT(s,t,i,r,l,c,f,p){let m;if(t.side===Qn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,t.side===Ss,p),m===null)return null;eu.copy(p),eu.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(eu);return d<i.near||d>i.far?null:{distance:d,point:eu.clone(),object:s}}function nu(s,t,i,r,l,c,f,p,m,d){s.getVertexPosition(p,Qc),s.getVertexPosition(m,Jc),s.getVertexPosition(d,$c);const g=PT(s,t,i,r,Qc,Jc,$c,mv);if(g){const _=new tt;Fi.getBarycoord(mv,Qc,Jc,$c,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,p,m,d,_,new ue)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,p,m,d,_,new ue)),f&&(g.normal=Fi.getInterpolatedAttribute(f,p,m,d,_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:d,normal:new tt,materialIndex:0};Fi.getNormal(Qc,Jc,$c,v.normal),g.face=v,g.barycoord=_}return g}class FT extends kn{constructor(t=null,i=1,r=1,l,c,f,p,m,d=Dn,g=Dn,_,v){super(null,f,p,m,d,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new tt,IT=new tt,BT=new _e;class gs{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=vd.subVectors(r,i).cross(IT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(vd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||BT.getNormalMatrix(t),l=this.coplanarPoint(vd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Lu,zT=new ue(.5,.5),iu=new tt;class jp{constructor(t=new gs,i=new gs,r=new gs,l=new gs,c=new gs,f=new gs){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ki,r=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],M=c[7],E=c[8],A=c[9],S=c[10],x=c[11],R=c[12],L=c[13],U=c[14],G=c[15];if(l[0].setComponents(d-f,M-g,x-E,G-R).normalize(),l[1].setComponents(d+f,M+g,x+E,G+R).normalize(),l[2].setComponents(d+p,M+_,x+A,G+L).normalize(),l[3].setComponents(d-p,M-_,x-A,G-L).normalize(),r)l[4].setComponents(m,v,S,U).normalize(),l[5].setComponents(d-m,M-v,x-S,G-U).normalize();else if(l[4].setComponents(d-m,M-v,x-S,G-U).normalize(),i===Ki)l[5].setComponents(d+m,M+v,x+S,G+U).normalize();else if(i===vl)l[5].setComponents(m,v,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=zT.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(iu.x=l.normal.x>0?t.max.x:t.min.x,iu.y=l.normal.y>0?t.max.y:t.min.y,iu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wp extends lo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tu=new tt,Au=new tt,gv=new Ke,ol=new Nu,au=new Lu,xd=new tt,_v=new tt;class qx extends Ln{constructor(t=new Jn,i=new Wp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Tu.fromBufferAttribute(i,l-1),Au.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Tu.distanceTo(Au);t.setAttribute("lineDistance",new bi(r,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(l),au.radius+=c,t.ray.intersectsSphere(au)===!1)return;gv.copy(l).invert(),ol.copy(t.ray).applyMatrix4(gv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=M,S=E-1;A<S;A+=d){const x=g.getX(A),R=g.getX(A+1),L=su(this,t,ol,m,x,R,A);L&&i.push(L)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(M),x=su(this,t,ol,m,A,S,E-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=M,S=E-1;A<S;A+=d){const x=su(this,t,ol,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=su(this,t,ol,m,E-1,M,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function su(s,t,i,r,l,c,f){const p=s.geometry.attributes.position;if(Tu.fromBufferAttribute(p,l),Au.fromBufferAttribute(p,c),i.distanceSqToSegment(Tu,Au,xd,_v)>r)return;xd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(xd);if(!(d<t.near||d>t.far))return{distance:d,point:_v.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class Zx extends kn{constructor(t=[],i=Qs,r,l,c,f,p,m,d,g){super(t,i,r,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sl extends kn{constructor(t,i,r=$i,l,c,f,p=Dn,m=Dn,d,g=Pa,_=1){if(g!==Pa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,p,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class HT extends Sl{constructor(t,i=$i,r=Qs,l,c,f=Dn,p=Dn,m,d=Pa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,r,l,c,f,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kx extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qi extends Jn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(d,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function E(A,S,x,R,L,U,G,H,B,b,D){const nt=U/B,P=G/b,V=U/2,Q=G/2,it=H/2,Z=B+1,N=b+1;let z=0,et=0;const ut=new tt;for(let Mt=0;Mt<N;Mt++){const I=Mt*P-Q;for(let Y=0;Y<Z;Y++){const _t=Y*nt-V;ut[A]=_t*R,ut[S]=I*L,ut[x]=it,d.push(ut.x,ut.y,ut.z),ut[A]=0,ut[S]=0,ut[x]=H>0?1:-1,g.push(ut.x,ut.y,ut.z),_.push(Y/B),_.push(1-Mt/b),z+=1}}for(let Mt=0;Mt<b;Mt++)for(let I=0;I<B;I++){const Y=v+I+Z*Mt,_t=v+I+Z*(Mt+1),Et=v+(I+1)+Z*(Mt+1),Lt=v+(I+1)+Z*Mt;m.push(Y,_t,Lt),m.push(_t,Et,Lt),et+=6}p.addGroup(M,et,D),M+=et,v+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tl extends Jn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,g=m+1,_=t/p,v=i/m,M=[],E=[],A=[],S=[];for(let x=0;x<g;x++){const R=x*v-f;for(let L=0;L<d;L++){const U=L*_-c;E.push(U,-R,0),A.push(0,0,1),S.push(L/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let R=0;R<p;R++){const L=R+d*x,U=R+d*(x+1),G=R+1+d*(x+1),H=R+1+d*x;M.push(L,U,H),M.push(U,G,H)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.widthSegments,t.heightSegments)}}function so(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=so(s[i]);for(const l in r)t[l]=r[l]}return t}function GT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Qx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const VT={clone:so,merge:Vn};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends lo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=XT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=GT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class jT extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ds extends lo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gx,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WT extends lo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YT extends lo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(xv(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!xv(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xv(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class qT{constructor(t,i,r){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const M=d[_],E=d[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZT=new qT;class Yp{constructor(t){this.manager=t!==void 0?t:ZT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Aa={};class KT extends Error{constructor(t,i){super(t),this.response=i}}class QT extends Yp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=vv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Aa[t]!==void 0){Aa[t].push({onLoad:i,onProgress:r,onError:l});return}Aa[t]=[],Aa[t].push({onLoad:i,onProgress:r,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Aa[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),M=v?parseInt(v):0,E=M!==0;let A=0;const S=new ReadableStream({start(x){R();function R(){_.read().then(({done:L,value:U})=>{if(L)x.close();else{A+=U.byteLength;const G=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:M});for(let H=0,B=g.length;H<B;H++){const b=g[H];b.onProgress&&b.onProgress(G)}x.enqueue(U),R()}},L=>{x.error(L)})}}});return new Response(S)}else throw new KT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,p));case"json":return d.json();default:if(p==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(p),v=_&&_[1]?_[1].toLowerCase():void 0,M=new TextDecoder(v);return d.arrayBuffer().then(E=>M.decode(E))}}}).then(d=>{vv.add(`file:${t}`,d);const g=Aa[t];delete Aa[t];for(let _=0,v=g.length;_<v;_++){const M=g[_];M.onLoad&&M.onLoad(d)}}).catch(d=>{const g=Aa[t];if(g===void 0)throw this.manager.itemError(t),d;delete Aa[t];for(let _=0,v=g.length;_<v;_++){const M=g[_];M.onError&&M.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jx extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Sd=new Ke,Sv=new tt,yv=new tt;class JT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Sv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sv),yv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(yv),i.updateMatrixWorld(),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===vl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ru=new tt,ou=new ys,Xi=new tt;class $x extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ru,ou,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(ru,ou,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ps=new tt,Mv=new ue,Ev=new ue;class Ei extends $x{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,Mv,Ev),i.subVectors(Ev,Mv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/d,l*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class qp extends $x{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $T extends JT{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tA extends Jx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new $T}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class eA extends Jx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Yr=-90,qr=1;class nA extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Yr,qr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(Yr,qr,t,i);c.layers=this.layers,this.add(c);const f=new Ei(Yr,qr,t,i);f.layers=this.layers,this.add(f);const p=new Ei(Yr,qr,t,i);p.layers=this.layers,this.add(p);const m=new Ei(Yr,qr,t,i);m.layers=this.layers,this.add(m);const d=new Ei(Yr,qr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,v,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class iA extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const bv=new Ke;class aA{constructor(t,i,r=0,l=1/0){this.ray=new Nu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return bv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bv),this}intersectObject(t,i=!0,r=[]){return Mp(t,this,r,i),r.sort(Tv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Mp(t[l],this,r,i);return r.sort(Tv),r}}function Tv(s,t){return s.distance-t.distance}function Mp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,p=c.length;f<p;f++)Mp(c[f],t,i,!0)}}class Av{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sA extends $s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rv(s,t,i,r){const l=rA(r);switch(i){case Bx:return s*t;case Hx:return s*t/l.components*l.byteLength;case Ip:return s*t/l.components*l.byteLength;case io:return s*t*2/l.components*l.byteLength;case Bp:return s*t*2/l.components*l.byteLength;case zx:return s*t*3/l.components*l.byteLength;case Ii:return s*t*4/l.components*l.byteLength;case zp:return s*t*4/l.components*l.byteLength;case gu:case _u:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vu:case xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jd:case Yd:return Math.max(s,16)*Math.max(t,8)/4;case Xd:case Wd:return Math.max(s,8)*Math.max(t,8)/2;case qd:case Zd:case Qd:case Jd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kd:case $d:case tp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ip:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ap:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case rp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case up:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mp:case gp:case _p:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vp:case xp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Sp:case yp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rA(s){switch(s){case hi:case Ox:return{byteLength:1,components:1};case gl:case Px:case Oa:return{byteLength:2,components:1};case Pp:case Fp:return{byteLength:2,components:4};case $i:case Op:case Zi:return{byteLength:4,components:1};case Fx:case Ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);function tS(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function oA(s){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,d,g),p.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,d){const g=m.array,_=m.updateRanges;if(s.bindBuffer(d,p),_.length===0)s.bufferSubData(d,0,g);else{_.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<_.length;M++){const E=_[v],A=_[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let M=0,E=_.length;M<E;M++){const A=_[M];s.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var lA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cA=`#ifdef USE_ALPHAHASH
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
#endif`,uA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pA=`#ifdef USE_AOMAP
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
#endif`,mA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gA=`#ifdef USE_BATCHING
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
#endif`,_A=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yA=`#ifdef USE_IRIDESCENCE
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
#endif`,MA=`#ifdef USE_BUMPMAP
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
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LA=`#define PI 3.141592653589793
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
} // validated`,NA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BA="gl_FragColor = linearToOutputTexel( gl_FragColor );",zA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HA=`#ifdef USE_ENVMAP
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
#endif`,GA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VA=`#ifdef USE_ENVMAP
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
#endif`,kA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XA=`#ifdef USE_ENVMAP
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
#endif`,jA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZA=`#ifdef USE_GRADIENTMAP
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
}`,KA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
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
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,r1=`uniform sampler2D dfgLUT;
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
}`,o1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_1=`#if defined( USE_POINTS_UV )
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
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
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
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,nR=`#ifdef USE_TRANSMISSION
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lR=`uniform sampler2D t2D;
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
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`#include <common>
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
}`,pR=`#if DEPTH_PACKING == 3200
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
}`,mR=`#define DISTANCE
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
}`,gR=`#define DISTANCE
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
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`uniform float scale;
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
}`,SR=`uniform vec3 diffuse;
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
}`,yR=`#include <common>
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
}`,MR=`uniform vec3 diffuse;
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
}`,ER=`#define LAMBERT
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
}`,bR=`#define LAMBERT
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
}`,TR=`#define MATCAP
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
}`,AR=`#define MATCAP
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
}`,RR=`#define NORMAL
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
}`,CR=`#define NORMAL
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
}`,wR=`#define PHONG
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
}`,DR=`#define PHONG
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
}`,LR=`#define STANDARD
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
}`,NR=`#define STANDARD
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
}`,OR=`#define TOON
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
}`,PR=`uniform float size;
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
}`,FR=`uniform vec3 diffuse;
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
}`,IR=`#include <common>
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
}`,BR=`uniform vec3 color;
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
}`,zR=`uniform float rotation;
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
}`,HR=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:lA,alphahash_pars_fragment:cA,alphamap_fragment:uA,alphamap_pars_fragment:fA,alphatest_fragment:hA,alphatest_pars_fragment:dA,aomap_fragment:pA,aomap_pars_fragment:mA,batching_pars_vertex:gA,batching_vertex:_A,begin_vertex:vA,beginnormal_vertex:xA,bsdfs:SA,iridescence_fragment:yA,bumpmap_pars_fragment:MA,clipping_planes_fragment:EA,clipping_planes_pars_fragment:bA,clipping_planes_pars_vertex:TA,clipping_planes_vertex:AA,color_fragment:RA,color_pars_fragment:CA,color_pars_vertex:wA,color_vertex:DA,common:LA,cube_uv_reflection_fragment:NA,defaultnormal_vertex:UA,displacementmap_pars_vertex:OA,displacementmap_vertex:PA,emissivemap_fragment:FA,emissivemap_pars_fragment:IA,colorspace_fragment:BA,colorspace_pars_fragment:zA,envmap_fragment:HA,envmap_common_pars_fragment:GA,envmap_pars_fragment:VA,envmap_pars_vertex:kA,envmap_physical_pars_fragment:t1,envmap_vertex:XA,fog_vertex:jA,fog_pars_vertex:WA,fog_fragment:YA,fog_pars_fragment:qA,gradientmap_pars_fragment:ZA,lightmap_pars_fragment:KA,lights_lambert_fragment:QA,lights_lambert_pars_fragment:JA,lights_pars_begin:$A,lights_toon_fragment:e1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:r1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:d1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:S1,morphcolor_vertex:y1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:b1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:w1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:O1,opaque_fragment:P1,packing:F1,premultiplied_alpha_fragment:I1,project_vertex:B1,dithering_fragment:z1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:X1,shadowmap_vertex:j1,shadowmask_pars_fragment:W1,skinbase_vertex:Y1,skinning_pars_vertex:q1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:Q1,specularmap_pars_fragment:J1,tonemapping_fragment:$1,tonemapping_pars_fragment:tR,transmission_fragment:eR,transmission_pars_fragment:nR,uv_pars_fragment:iR,uv_pars_vertex:aR,uv_vertex:sR,worldpos_vertex:rR,background_vert:oR,background_frag:lR,backgroundCube_vert:cR,backgroundCube_frag:uR,cube_vert:fR,cube_frag:hR,depth_vert:dR,depth_frag:pR,distance_vert:mR,distance_frag:gR,equirect_vert:_R,equirect_frag:vR,linedashed_vert:xR,linedashed_frag:SR,meshbasic_vert:yR,meshbasic_frag:MR,meshlambert_vert:ER,meshlambert_frag:bR,meshmatcap_vert:TR,meshmatcap_frag:AR,meshnormal_vert:RR,meshnormal_frag:CR,meshphong_vert:wR,meshphong_frag:DR,meshphysical_vert:LR,meshphysical_frag:NR,meshtoon_vert:UR,meshtoon_frag:OR,points_vert:PR,points_frag:FR,shadow_vert:IR,shadow_frag:BR,sprite_vert:zR,sprite_frag:HR},Ot={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Vn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Vn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Vn([Ot.points,Ot.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Vn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Vn([Ot.common,Ot.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Vn([Ot.sprite,Ot.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Vn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Vn([Ot.lights,Ot.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const lu={r:0,b:0,g:0},js=new wn,GR=new Ke;function VR(s,t,i,r,l,c){const f=new De(0);let p=l===!0?0:1,m,d,g=null,_=0,v=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const U=R.backgroundBlurriness>0;L=t.get(L,U)}return L}function E(R){let L=!1;const U=M(R);U===null?S(f,p):U&&U.isColor&&(S(U,1),L=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(R,L){const U=M(L);U&&(U.isCubeTexture||U.mapping===Du)?(d===void 0&&(d=new Cn(new qi(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:so(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,H,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),js.copy(L.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(GR.makeRotationFromEuler(js)),d.material.toneMapped=we.getTransfer(U.colorSpace)!==He,(g!==U||_!==U.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=U,_=U.version,v=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Cn(new Tl(2,2),new ta({name:"BackgroundMaterial",uniforms:so(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=we.getTransfer(U.colorSpace)!==He,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,v=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,L){R.getRGB(lu,Qx(s)),i.buffers.color.setClear(lu.r,lu.g,lu.b,L,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,L=1){f.set(R),p=L,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,S(f,p)},render:E,addToRenderList:A,dispose:x}}function kR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function p(P,V,Q,it,Z){let N=!1;const z=_(P,it,Q,V);c!==z&&(c=z,d(c.object)),N=M(P,it,Q,Z),N&&E(P,it,Q,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,U(P,V,Q,it),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return s.createVertexArray()}function d(P){return s.bindVertexArray(P)}function g(P){return s.deleteVertexArray(P)}function _(P,V,Q,it){const Z=it.wireframe===!0;let N=r[V.id];N===void 0&&(N={},r[V.id]=N);const z=P.isInstancedMesh===!0?P.id:0;let et=N[z];et===void 0&&(et={},N[z]=et);let ut=et[Q.id];ut===void 0&&(ut={},et[Q.id]=ut);let Mt=ut[Z];return Mt===void 0&&(Mt=v(m()),ut[Z]=Mt),Mt}function v(P){const V=[],Q=[],it=[];for(let Z=0;Z<i;Z++)V[Z]=0,Q[Z]=0,it[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:it,object:P,attributes:{},index:null}}function M(P,V,Q,it){const Z=c.attributes,N=V.attributes;let z=0;const et=Q.getAttributes();for(const ut in et)if(et[ut].location>=0){const I=Z[ut];let Y=N[ut];if(Y===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),I===void 0||I.attribute!==Y||Y&&I.data!==Y.data)return!0;z++}return c.attributesNum!==z||c.index!==it}function E(P,V,Q,it){const Z={},N=V.attributes;let z=0;const et=Q.getAttributes();for(const ut in et)if(et[ut].location>=0){let I=N[ut];I===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(I=P.instanceColor));const Y={};Y.attribute=I,I&&I.data&&(Y.data=I.data),Z[ut]=Y,z++}c.attributes=Z,c.attributesNum=z,c.index=it}function A(){const P=c.newAttributes;for(let V=0,Q=P.length;V<Q;V++)P[V]=0}function S(P){x(P,0)}function x(P,V){const Q=c.newAttributes,it=c.enabledAttributes,Z=c.attributeDivisors;Q[P]=1,it[P]===0&&(s.enableVertexAttribArray(P),it[P]=1),Z[P]!==V&&(s.vertexAttribDivisor(P,V),Z[P]=V)}function R(){const P=c.newAttributes,V=c.enabledAttributes;for(let Q=0,it=V.length;Q<it;Q++)V[Q]!==P[Q]&&(s.disableVertexAttribArray(Q),V[Q]=0)}function L(P,V,Q,it,Z,N,z){z===!0?s.vertexAttribIPointer(P,V,Q,Z,N):s.vertexAttribPointer(P,V,Q,it,Z,N)}function U(P,V,Q,it){A();const Z=it.attributes,N=Q.getAttributes(),z=V.defaultAttributeValues;for(const et in N){const ut=N[et];if(ut.location>=0){let Mt=Z[et];if(Mt===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(Mt=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(Mt=P.instanceColor)),Mt!==void 0){const I=Mt.normalized,Y=Mt.itemSize,_t=t.get(Mt);if(_t===void 0)continue;const Et=_t.buffer,Lt=_t.type,st=_t.bytesPerElement,vt=Lt===s.INT||Lt===s.UNSIGNED_INT||Mt.gpuType===Op;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,zt=At.stride,jt=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let $t=0;$t<ut.locationSize;$t++)x(ut.location+$t,At.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let $t=0;$t<ut.locationSize;$t++)S(ut.location+$t);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let $t=0;$t<ut.locationSize;$t++)L(ut.location+$t,Y/ut.locationSize,Lt,I,zt*st,(jt+Y/ut.locationSize*$t)*st,vt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<ut.locationSize;At++)x(ut.location+At,Mt.meshPerAttribute);P.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<ut.locationSize;At++)S(ut.location+At);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let At=0;At<ut.locationSize;At++)L(ut.location+At,Y/ut.locationSize,Lt,I,Y*st,Y/ut.locationSize*At*st,vt)}}else if(z!==void 0){const I=z[et];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(ut.location,I);break;case 3:s.vertexAttrib3fv(ut.location,I);break;case 4:s.vertexAttrib4fv(ut.location,I);break;default:s.vertexAttrib1fv(ut.location,I)}}}}R()}function G(){D();for(const P in r){const V=r[P];for(const Q in V){const it=V[Q];for(const Z in it){const N=it[Z];for(const z in N)g(N[z].object),delete N[z];delete it[Z]}}delete r[P]}}function H(P){if(r[P.id]===void 0)return;const V=r[P.id];for(const Q in V){const it=V[Q];for(const Z in it){const N=it[Z];for(const z in N)g(N[z].object),delete N[z];delete it[Z]}}delete r[P.id]}function B(P){for(const V in r){const Q=r[V];for(const it in Q){const Z=Q[it];if(Z[P.id]===void 0)continue;const N=Z[P.id];for(const z in N)g(N[z].object),delete N[z];delete Z[P.id]}}}function b(P){for(const V in r){const Q=r[V],it=P.isInstancedMesh===!0?P.id:0,Z=Q[it];if(Z!==void 0){for(const N in Z){const z=Z[N];for(const et in z)g(z[et].object),delete z[et];delete Z[N]}delete Q[it],Object.keys(Q).length===0&&delete r[V]}}}function D(){nt(),f=!0,c!==l&&(c=l,d(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:nt,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function XR(s,t,i){let r;function l(d){r=d}function c(d,g){s.drawArrays(r,d,g),i.update(g,r,1)}function f(d,g,_){_!==0&&(s.drawArraysInstanced(r,d,g,_),i.update(g,r,_))}function p(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,r,1)}function m(d,g,_,v){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<d.length;E++)f(d[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function jR(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ii&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const b=B===Oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==hi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Zi&&!b)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ne("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=s.getParameter(s.MAX_SAMPLES),H=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:U,maxSamples:G,samples:H}}function WR(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new gs,p=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||r!==0||l;return l=v,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,M){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):d();else{const R=c?0:r,L=R*4;let U=x.clippingState||null;m.value=U,U=g(E,v,L,M);for(let G=0;G!==L;++G)U[G]=i[G];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,M,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const x=M+A*4,R=v.matrixWorldInverse;p.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,U=M;L!==A;++L,U+=4)f.copy(_[L]).applyMatrix4(R,p),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const xs=4,Cv=[.125,.215,.35,.446,.526,.582],qs=20,YR=256,ll=new qp,wv=new De;let yd=null,Md=0,Ed=0,bd=!1;const qR=new tt;class Dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=qR}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Oa,format:Ii,colorSpace:ao,depthBuffer:!1},l=Lv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZR(c)),this._blurMaterial=QR(c,t,i),this._ggxMaterial=KR(c,t,i)}return l}_compileMaterial(t){const i=new Cn(new Jn,t);this._renderer.compile(i,ll)}_sceneToCubeUV(t,i,r,l,c){const m=new Ei(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(wv),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new qi,new Yx({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,x=!0):(S.color.copy(wv),x=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,d[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):U===1?(m.up.set(0,0,d[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,d[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const G=this._cubeSize;Zr(l,U*G,L>2?G:0,G,G),_.setRenderTarget(l),x&&_.render(A,m),_.render(t,m)}_.toneMapping=M,_.autoClear=v,t.background=R}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Qs||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Zr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ll)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,M=_*v,{_lodMax:E}=this,A=this._sizeLods[r],S=3*A*(r>E-xs?r-E+xs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,Zr(c,S,x,3*A,2*A),l.setRenderTarget(c),l.render(p,ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Zr(t,S,x,3*A,2*A),l.setRenderTarget(t),l.render(p,ll)}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=d;const v=d.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qs-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):qs;S>qs&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qs}`);const x=[];let R=0;for(let B=0;B<qs;++B){const b=B/A,D=Math.exp(-b*b/2);x.push(D),B===0?R+=D:B<S&&(R+=2*D)}for(let B=0;B<x.length;B++)x[B]=x[B]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const U=this._sizeLods[l],G=3*U*(l>L-xs?l-L+xs:0),H=4*(this._cubeSize-U);Zr(i,G,H,3*U,2*U),m.setRenderTarget(i),m.render(_,ll)}}function ZR(s){const t=[],i=[],r=[];let l=s;const c=s-xs+1+Cv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-xs?m=Cv[f-s+xs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,A=3,S=2,x=1,R=new Float32Array(A*E*M),L=new Float32Array(S*E*M),U=new Float32Array(x*E*M);for(let H=0;H<M;H++){const B=H%3*2/3-1,b=H>2?0:-1,D=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];R.set(D,A*E*H),L.set(v,S*E*H);const nt=[H,H,H,H,H,H];U.set(nt,x*E*H)}const G=new Jn;G.setAttribute("position",new di(R,A)),G.setAttribute("uv",new di(L,S)),G.setAttribute("faceIndex",new di(U,x)),r.push(new Cn(G,null)),l>xs&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Lv(s,t,i){const r=new Ji(s,t,i);return r.texture.mapping=Du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function KR(s,t,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function QR(s,t,i){const r=new Float32Array(qs),l=new tt(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Nv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Uv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}class eS extends Ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qi(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:La});c.uniforms.tEquirect.value=i;const f=new Cn(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Pn),new nA(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}function JR(s){let t=new WeakMap,i=new WeakMap,r=null;function l(v,M=!1){return v==null?null:M?f(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===qh||M===Zh)if(t.has(v)){const E=t.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new eS(E.height);return A.fromEquirectangularTexture(s,v),t.set(v,A),v.addEventListener("dispose",d),p(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const M=v.mapping,E=M===qh||M===Zh,A=M===Qs||M===no;if(E||A){let S=i.get(v);const x=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new Dv(s)),S=E?r.fromEquirectangular(v,S):r.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const R=v.image;return E&&R&&R.height>0||A&&R&&m(R)?(r===null&&(r=new Dv(s)),S=E?r.fromEquirectangular(v):r.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function p(v,M){return M===qh?v.mapping=Qs:M===Zh&&(v.mapping=no),v}function m(v){let M=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&M++;return M===E}function d(v){const M=v.target;M.removeEventListener("dispose",d);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function g(v){const M=v.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function $R(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&bu("WebGLRenderer: "+r+" extension not supported."),l}}}function tC(s,t,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const M in v)t.update(v[M],s.ARRAY_BUFFER)}function d(_){const v=[],M=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const R=M.array;A=M.version;for(let L=0,U=R.length;L<U;L+=3){const G=R[L+0],H=R[L+1],B=R[L+2];v.push(G,H,H,B,B,G)}}else{const R=E.array;A=E.version;for(let L=0,U=R.length/3-1;L<U;L+=3){const G=L+0,H=L+1,B=L+2;v.push(G,H,H,B,B,G)}}const S=new(E.count>=65535?Wx:jx)(v,1);S.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function eC(s,t,i){let r;function l(v){r=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,M){s.drawElements(r,M,c,v*f),i.update(M,r,1)}function d(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,v*f,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,r,1)}function _(v,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/f,M[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,v,0,A,0,E);let x=0;for(let R=0;R<E;R++)x+=M[R]*A[R];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function nC(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ce("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iC(s,t,i){const r=new WeakMap,l=new an;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(p);if(v===void 0||v.count!==_){let nt=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",nt)};var M=nt;v!==void 0&&v.texture.dispose();const E=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let U=0;E===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let G=p.attributes.position.count*U,H=1;G>t.maxTextureSize&&(H=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*H*4*_),b=new kx(B,G,H,_);b.type=Zi,b.needsUpdate=!0;const D=U*4;for(let P=0;P<_;P++){const V=x[P],Q=R[P],it=L[P],Z=G*H*4*P;for(let N=0;N<V.count;N++){const z=N*D;E===!0&&(l.fromBufferAttribute(V,N),B[Z+z+0]=l.x,B[Z+z+1]=l.y,B[Z+z+2]=l.z,B[Z+z+3]=0),A===!0&&(l.fromBufferAttribute(Q,N),B[Z+z+4]=l.x,B[Z+z+5]=l.y,B[Z+z+6]=l.z,B[Z+z+7]=0),S===!0&&(l.fromBufferAttribute(it,N),B[Z+z+8]=l.x,B[Z+z+9]=l.y,B[Z+z+10]=l.z,B[Z+z+11]=it.itemSize===4?l.w:1)}}v={count:_,texture:b,size:new ue(G,H)},r.set(p,v),p.addEventListener("dispose",nt)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const A=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function aC(s,t,i,r,l){let c=new WeakMap;function f(d){const g=l.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return v}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const sC={[Ax]:"LINEAR_TONE_MAPPING",[Rx]:"REINHARD_TONE_MAPPING",[Cx]:"CINEON_TONE_MAPPING",[wx]:"ACES_FILMIC_TONE_MAPPING",[Lx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Dx]:"CUSTOM_TONE_MAPPING"};function rC(s,t,i,r,l){const c=new Ji(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Ji(t,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),p=new Jn;p.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new jT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Cn(p,m),g=new qp(-1,1,1,-1,0,1);let _=null,v=null,M=!1,E,A=null,S=[],x=!1;this.setSize=function(R,L){c.setSize(R,L),f.setSize(R,L);for(let U=0;U<S.length;U++){const G=S[U];G.setSize&&G.setSize(R,L)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const L=c.width,U=c.height;for(let G=0;G<S.length;G++){const H=S[G];H.setSize&&H.setSize(L,U)}},this.begin=function(R,L){if(M||R.toneMapping===Qi&&S.length===0)return!1;if(A=L,L!==null){const U=L.width,G=L.height;(c.width!==U||c.height!==G)&&this.setSize(U,G)}return x===!1&&R.setRenderTarget(c),E=R.toneMapping,R.toneMapping=Qi,!0},this.hasRenderPass=function(){return x},this.end=function(R,L){R.toneMapping=E,M=!0;let U=c,G=f;for(let H=0;H<S.length;H++){const B=S[H];if(B.enabled!==!1&&(B.render(R,G,U,L),B.needsSwap!==!1)){const b=U;U=G,G=b}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,m.defines={},we.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const H=sC[v];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(A),R.render(d,g),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const nS=new kn,Ep=new Sl(1,1),iS=new kx,aS=new MT,sS=new Zx,Ov=[],Pv=[],Fv=new Float32Array(16),Iv=new Float32Array(9),Bv=new Float32Array(4);function co(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Ov[l];if(c===void 0&&(c=new Float32Array(l),Ov[l]=c),t!==0){r.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(c,p)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Sn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Ou(s,t){let i=Pv[t];i===void 0&&(i=new Int32Array(t),Pv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function oC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function lC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),Sn(i,t)}}function cC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),Sn(i,t)}}function uC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),Sn(i,t)}}function fC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Bv.set(r),s.uniformMatrix2fv(this.addr,!1,Bv),Sn(i,r)}}function hC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Iv.set(r),s.uniformMatrix3fv(this.addr,!1,Iv),Sn(i,r)}}function dC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Fv.set(r),s.uniformMatrix4fv(this.addr,!1,Fv),Sn(i,r)}}function pC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function mC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),Sn(i,t)}}function gC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),Sn(i,t)}}function _C(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),Sn(i,t)}}function vC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function xC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),Sn(i,t)}}function SC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),Sn(i,t)}}function yC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),Sn(i,t)}}function MC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Ep.compareFunction=i.isReversedDepthBuffer()?Gp:Hp,c=Ep):c=nS,i.setTexture2D(t||c,l)}function EC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||aS,l)}function bC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||sS,l)}function TC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||iS,l)}function AC(s){switch(s){case 5126:return oC;case 35664:return lC;case 35665:return cC;case 35666:return uC;case 35674:return fC;case 35675:return hC;case 35676:return dC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return _C;case 5125:return vC;case 36294:return xC;case 36295:return SC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return TC}}function RC(s,t){s.uniform1fv(this.addr,t)}function CC(s,t){const i=co(t,this.size,2);s.uniform2fv(this.addr,i)}function wC(s,t){const i=co(t,this.size,3);s.uniform3fv(this.addr,i)}function DC(s,t){const i=co(t,this.size,4);s.uniform4fv(this.addr,i)}function LC(s,t){const i=co(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function NC(s,t){const i=co(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function UC(s,t){const i=co(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function OC(s,t){s.uniform1iv(this.addr,t)}function PC(s,t){s.uniform2iv(this.addr,t)}function FC(s,t){s.uniform3iv(this.addr,t)}function IC(s,t){s.uniform4iv(this.addr,t)}function BC(s,t){s.uniform1uiv(this.addr,t)}function zC(s,t){s.uniform2uiv(this.addr,t)}function HC(s,t){s.uniform3uiv(this.addr,t)}function GC(s,t){s.uniform4uiv(this.addr,t)}function VC(s,t,i){const r=this.cache,l=t.length,c=Ou(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Ep:f=nS;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function kC(s,t,i){const r=this.cache,l=t.length,c=Ou(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||aS,c[f])}function XC(s,t,i){const r=this.cache,l=t.length,c=Ou(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||sS,c[f])}function jC(s,t,i){const r=this.cache,l=t.length,c=Ou(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||iS,c[f])}function WC(s){switch(s){case 5126:return RC;case 35664:return CC;case 35665:return wC;case 35666:return DC;case 35674:return LC;case 35675:return NC;case 35676:return UC;case 5124:case 35670:return OC;case 35667:case 35671:return PC;case 35668:case 35672:return FC;case 35669:case 35673:return IC;case 5125:return BC;case 36294:return zC;case 36295:return HC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return XC;case 36289:case 36303:case 36311:case 36292:return jC}}class YC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AC(i.type)}}class qC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WC(i.type)}}class ZC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function zv(s,t){s.seq.push(t),s.map[t.id]=t}function KC(s,t,i){const r=s.name,l=r.length;for(Td.lastIndex=0;;){const c=Td.exec(r),f=Td.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){zv(i,d===void 0?new YC(p,s,t):new qC(p,s,t));break}else{let _=i.map[p];_===void 0&&(_=new ZC(p),zv(i,_)),i=_}}}class Su{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);KC(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Hv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const QC=37297;let JC=0;function $C(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Gv=new _e;function tw(s){we._getMatrix(Gv,we.workingColorSpace,s);const t=`mat3( ${Gv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case Mu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+$C(s.getShaderSource(t),p)}else return c}function ew(s,t){const i=tw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nw={[Ax]:"Linear",[Rx]:"Reinhard",[Cx]:"Cineon",[wx]:"ACESFilmic",[Lx]:"AgX",[Nx]:"Neutral",[Dx]:"Custom"};function iw(s,t){const i=nw[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cu=new tt;function aw(){we.getLuminanceCoefficients(cu);const s=cu.x.toFixed(4),t=cu.y.toFixed(4),i=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function rw(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ow(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function hl(s){return s!==""}function kv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(s){return s.replace(lw,uw)}const cw=new Map;function uw(s,t){let i=ve[t];if(i===void 0){const r=cw.get(t);if(r!==void 0)i=ve[r],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bp(i)}const fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jv(s){return s.replace(fw,hw)}function hw(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Wv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const dw={[mu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function pw(s){return dw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mw={[Qs]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function gw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _w={[no]:"ENVMAP_MODE_REFRACTION"};function vw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_w[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xw={[Tx]:"ENVMAP_BLENDING_MULTIPLY",[Hb]:"ENVMAP_BLENDING_MIX",[Gb]:"ENVMAP_BLENDING_ADD"};function Sw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xw[s.combine]||"ENVMAP_BLENDING_NONE"}function yw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Mw(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=pw(i),d=gw(i),g=vw(i),_=Sw(i),v=yw(i),M=sw(i),E=rw(c),A=l.createProgram();let S,x,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(S=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?ve.tonemapping_pars_fragment:"",i.toneMapping!==Qi?iw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,ew("linearToOutputTexel",i.outputColorSpace),aw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),f=bp(f),f=kv(f,i),f=Xv(f,i),p=bp(p),p=kv(p,i),p=Xv(p,i),f=jv(f),p=jv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=R+S+f,U=R+x+p,G=Hv(l,l.VERTEX_SHADER,L),H=Hv(l,l.FRAGMENT_SHADER,U);l.attachShader(A,G),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(P){if(s.debug.checkShaderErrors){const V=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(G)||"",it=l.getShaderInfoLog(H)||"",Z=V.trim(),N=Q.trim(),z=it.trim();let et=!0,ut=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,H);else{const Mt=Vv(l,G,"vertex"),I=Vv(l,H,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+Mt+`
`+I)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(N===""||z==="")&&(ut=!1);ut&&(P.diagnostics={runnable:et,programLog:Z,vertexShader:{log:N,prefix:S},fragmentShader:{log:z,prefix:x}})}l.deleteShader(G),l.deleteShader(H),b=new Su(l,A),D=ow(l,A)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let nt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return nt===!1&&(nt=l.getProgramParameter(A,QC)),nt},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JC++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=H,this}let Ew=0;class bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Tw(t),i.set(t,r)),r}}class Tw{constructor(t){this.id=Ew++,this.code=t,this.usedTimes=0}}function Aw(s,t,i,r,l,c){const f=new Xp,p=new bw,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function A(b,D,nt,P,V){const Q=P.fog,it=V.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=t.get(b.envMap||Z,N),et=z&&z.mapping===Du?z.image.height:null,ut=M[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&ne("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Mt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,I=Mt!==void 0?Mt.length:0;let Y=0;it.morphAttributes.position!==void 0&&(Y=1),it.morphAttributes.normal!==void 0&&(Y=2),it.morphAttributes.color!==void 0&&(Y=3);let _t,Et,Lt,st;if(ut){const Re=Wi[ut];_t=Re.vertexShader,Et=Re.fragmentShader}else _t=b.vertexShader,Et=b.fragmentShader,p.update(b),Lt=p.getVertexShaderID(b),st=p.getFragmentShaderID(b);const vt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),zt=V.isInstancedMesh===!0,jt=V.isBatchedMesh===!0,$t=!!b.map,Fe=!!b.matcap,ce=!!z,fe=!!b.aoMap,Ee=!!b.lightMap,se=!!b.bumpMap,Ye=!!b.normalMap,X=!!b.displacementMap,je=!!b.emissiveMap,Se=!!b.metalnessMap,he=!!b.roughnessMap,Gt=b.anisotropy>0,F=b.clearcoat>0,T=b.dispersion>0,K=b.iridescence>0,mt=b.sheen>0,yt=b.transmission>0,dt=Gt&&!!b.anisotropyMap,Vt=F&&!!b.clearcoatMap,wt=F&&!!b.clearcoatNormalMap,Zt=F&&!!b.clearcoatRoughnessMap,te=K&&!!b.iridescenceMap,Tt=K&&!!b.iridescenceThicknessMap,bt=mt&&!!b.sheenColorMap,Ft=mt&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,It=!!b.specularColorMap,pe=!!b.specularIntensityMap,q=yt&&!!b.transmissionMap,Dt=yt&&!!b.thicknessMap,Ct=!!b.gradientMap,Bt=!!b.alphaMap,Rt=b.alphaTest>0,pt=!!b.alphaHash,kt=!!b.extensions;let ae=Qi;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ie={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Et,defines:b.defines,customVertexShaderID:Lt,customFragmentShaderID:st,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:jt,batchingColor:jt&&V._colorsTexture!==null,instancing:zt,instancingColor:zt&&V.instanceColor!==null,instancingMorph:zt&&V.morphTexture!==null,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ao,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Fe,envMap:ce,envMapMode:ce&&z.mapping,envMapCubeUVHeight:et,aoMap:fe,lightMap:Ee,bumpMap:se,normalMap:Ye,displacementMap:X,emissiveMap:je,normalMapObjectSpace:Ye&&b.normalMapType===Xb,normalMapTangentSpace:Ye&&b.normalMapType===Gx,metalnessMap:Se,roughnessMap:he,anisotropy:Gt,anisotropyMap:dt,clearcoat:F,clearcoatMap:Vt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:K,iridescenceMap:te,iridescenceThicknessMap:Tt,sheen:mt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:It,specularIntensityMap:pe,transmission:yt,transmissionMap:q,thicknessMap:Dt,gradientMap:Ct,opaque:b.transparent===!1&&b.blending===$r&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Rt,alphaHash:pt,combine:b.combine,mapUv:$t&&E(b.map.channel),aoMapUv:fe&&E(b.aoMap.channel),lightMapUv:Ee&&E(b.lightMap.channel),bumpMapUv:se&&E(b.bumpMap.channel),normalMapUv:Ye&&E(b.normalMap.channel),displacementMapUv:X&&E(b.displacementMap.channel),emissiveMapUv:je&&E(b.emissiveMap.channel),metalnessMapUv:Se&&E(b.metalnessMap.channel),roughnessMapUv:he&&E(b.roughnessMap.channel),anisotropyMapUv:dt&&E(b.anisotropyMap.channel),clearcoatMapUv:Vt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(b.sheenRoughnessMap.channel),specularMapUv:Pt&&E(b.specularMap.channel),specularColorMapUv:It&&E(b.specularColorMap.channel),specularIntensityMapUv:pe&&E(b.specularIntensityMap.channel),transmissionMapUv:q&&E(b.transmissionMap.channel),thicknessMapUv:Dt&&E(b.thicknessMap.channel),alphaMapUv:Bt&&E(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ye||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!it.attributes.uv&&($t||Bt),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||it.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:V.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&nt.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===He,decodeVideoTextureEmissive:je&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===He,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yi,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function S(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const nt in b.defines)D.push(nt),D.push(b.defines[nt]);return b.isRawShaderMaterial===!1&&(x(D,b),R(D,b),D.push(s.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function x(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function R(b,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),b.push(f.mask)}function L(b){const D=M[b.type];let nt;if(D){const P=Wi[D];nt=VT.clone(P.uniforms)}else nt=b.uniforms;return nt}function U(b,D){let nt=g.get(D);return nt!==void 0?++nt.usedTimes:(nt=new Mw(s,D,b,l),d.push(nt),g.set(D,nt)),nt}function G(b){if(--b.usedTimes===0){const D=d.indexOf(b);d[D]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function H(b){p.remove(b)}function B(){p.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:L,acquireProgram:U,releaseProgram:G,releaseShaderCache:H,programs:d,dispose:B}}function Rw(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Cw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Yv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,E,A,S,x){let R=s[t];return R===void 0?(R={id:v.id,object:v,geometry:M,material:E,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:x},s[t]=R):(R.id=v.id,R.object=v,R.geometry=M,R.material=E,R.materialVariant=f(v),R.groupOrder=A,R.renderOrder=v.renderOrder,R.z=S,R.group=x),t++,R}function m(v,M,E,A,S,x){const R=p(v,M,E,A,S,x);E.transmission>0?r.push(R):E.transparent===!0?l.push(R):i.push(R)}function d(v,M,E,A,S,x){const R=p(v,M,E,A,S,x);E.transmission>0?r.unshift(R):E.transparent===!0?l.unshift(R):i.unshift(R)}function g(v,M){i.length>1&&i.sort(v||Cw),r.length>1&&r.sort(M||Yv),l.length>1&&l.sort(M||Yv)}function _(){for(let v=t,M=s.length;v<M;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:_,sort:g}}function ww(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new qv,s.set(r,[f])):l>=c.length?(f=new qv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function Dw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new De};break;case"SpotLight":i={position:new tt,direction:new tt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function Lw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Nw=0;function Uw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ow(s){const t=new Dw,i=Lw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new tt);const l=new tt,c=new Ke,f=new Ke;function p(d){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,x=0,R=0,L=0,U=0,G=0,H=0,B=0;d.sort(Uw);for(let D=0,nt=d.length;D<nt;D++){const P=d[D],V=P.color,Q=P.intensity,it=P.distance;let Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===io?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)g+=V.r*Q,_+=V.g*Q,v+=V.b*Q;else if(P.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],Q);B++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,et=i.get(P);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,r.directionalShadow[M]=et,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=P.shadow.matrix,R++}r.directional[M]=N,M++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(V).multiplyScalar(Q),N.distance=it,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,r.spot[A]=N;const z=P.shadow;if(P.map&&(r.spotLightMap[G]=P.map,G++,z.updateMatrices(P),P.castShadow&&H++),r.spotLightMatrix[A]=z.matrix,P.castShadow){const et=i.get(P);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,r.spotShadow[A]=et,r.spotShadowMap[A]=Z,U++}A++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(V).multiplyScalar(Q),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[S]=N,S++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const z=P.shadow,et=i.get(P);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,et.shadowCameraNear=z.camera.near,et.shadowCameraFar=z.camera.far,r.pointShadow[E]=et,r.pointShadowMap[E]=Z,r.pointShadowMatrix[E]=P.shadow.matrix,L++}r.point[E]=N,E++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(Q),N.groundColor.copy(P.groundColor).multiplyScalar(Q),r.hemi[x]=N,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const b=r.hash;(b.directionalLength!==M||b.pointLength!==E||b.spotLength!==A||b.rectAreaLength!==S||b.hemiLength!==x||b.numDirectionalShadows!==R||b.numPointShadows!==L||b.numSpotShadows!==U||b.numSpotMaps!==G||b.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,b.directionalLength=M,b.pointLength=E,b.spotLength=A,b.rectAreaLength=S,b.hemiLength=x,b.numDirectionalShadows=R,b.numPointShadows=L,b.numSpotShadows=U,b.numSpotMaps=G,b.numLightProbes=B,r.version=Nw++)}function m(d,g){let _=0,v=0,M=0,E=0,A=0;const S=g.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const L=d[x];if(L.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(L.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:p,setupView:m,state:r}}function Zv(s){const t=new Ow(s),i=[],r=[];function l(g){d.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function Pw(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Zv(s),t.set(l,[p])):c>=f.length?(p=new Zv(s),f.push(p)):p=f[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`,Bw=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],zw=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],Kv=new Ke,cl=new tt,Ad=new tt;function Hw(s,t,i){let r=new jp;const l=new ue,c=new ue,f=new an,p=new WT,m=new YT,d={},g=i.maxTextureSize,_={[Ss]:Qn,[Qn]:Ss,[Yi]:Yi},v=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Fw,fragmentShader:Iw}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Cn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let x=this.type;this.render=function(H,B,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;this.type===yb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mu);const D=s.getRenderTarget(),nt=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),V=s.state;V.setBlending(La),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=x!==this.type;Q&&B.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(Z=>Z.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,Z=H.length;it<Z;it++){const N=H[it],z=N.shadow;if(z===void 0){ne("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const et=z.getFrameExtents();l.multiply(et),c.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/et.x),l.x=c.x*et.x,z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/et.y),l.y=c.y*et.y,z.mapSize.y=c.y));const ut=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ut,z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ul){if(N.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ji(l.x,l.y,{format:io,type:Oa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new Sl(l.x,l.y,Zi),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=Pa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn}else N.isPointLight?(z.map=new eS(l.x),z.map.depthTexture=new HT(l.x,$i)):(z.map=new Ji(l.x,l.y),z.map.depthTexture=new Sl(l.x,l.y,$i)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=Pa,this.type===mu?(z.map.depthTexture.compareFunction=ut?Gp:Hp,z.map.depthTexture.minFilter=Pn,z.map.depthTexture.magFilter=Pn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn);z.camera.updateProjectionMatrix()}const Mt=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Mt;I++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,I),s.clear();else{I===0&&(s.setRenderTarget(z.map),s.clear());const Y=z.getViewport(I);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),V.viewport(f)}if(N.isPointLight){const Y=z.camera,_t=z.matrix,Et=N.distance||Y.far;Et!==Y.far&&(Y.far=Et,Y.updateProjectionMatrix()),cl.setFromMatrixPosition(N.matrixWorld),Y.position.copy(cl),Ad.copy(Y.position),Ad.add(Bw[I]),Y.up.copy(zw[I]),Y.lookAt(Ad),Y.updateMatrixWorld(),_t.makeTranslation(-cl.x,-cl.y,-cl.z),Kv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Kv,Y.coordinateSystem,Y.reversedDepth)}else z.updateMatrices(N);r=z.getFrustum(),U(B,b,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===ul&&R(z,b),z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(D,nt,P)};function R(H,B){const b=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ji(l.x,l.y,{format:io,type:Oa})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,b,v,A,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,b,M,A,null)}function L(H,B,b,D){let nt=null;const P=b.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(P!==void 0)nt=P;else if(nt=b.isPointLight===!0?m:p,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const V=nt.uuid,Q=B.uuid;let it=d[V];it===void 0&&(it={},d[V]=it);let Z=it[Q];Z===void 0&&(Z=nt.clone(),it[Q]=Z,B.addEventListener("dispose",G)),nt=Z}if(nt.visible=B.visible,nt.wireframe=B.wireframe,D===ul?nt.side=B.shadowSide!==null?B.shadowSide:B.side:nt.side=B.shadowSide!==null?B.shadowSide:_[B.side],nt.alphaMap=B.alphaMap,nt.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,nt.map=B.map,nt.clipShadows=B.clipShadows,nt.clippingPlanes=B.clippingPlanes,nt.clipIntersection=B.clipIntersection,nt.displacementMap=B.displacementMap,nt.displacementScale=B.displacementScale,nt.displacementBias=B.displacementBias,nt.wireframeLinewidth=B.wireframeLinewidth,nt.linewidth=B.linewidth,b.isPointLight===!0&&nt.isMeshDistanceMaterial===!0){const V=s.properties.get(nt);V.light=b}return nt}function U(H,B,b,D,nt){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&nt===ul)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,H.matrixWorld);const Q=t.update(H),it=H.material;if(Array.isArray(it)){const Z=Q.groups;for(let N=0,z=Z.length;N<z;N++){const et=Z[N],ut=it[et.materialIndex];if(ut&&ut.visible){const Mt=L(H,ut,D,nt);H.onBeforeShadow(s,H,B,b,Q,Mt,et),s.renderBufferDirect(b,null,Q,Mt,H,et),H.onAfterShadow(s,H,B,b,Q,Mt,et)}}}else if(it.visible){const Z=L(H,it,D,nt);H.onBeforeShadow(s,H,B,b,Q,Z,null),s.renderBufferDirect(b,null,Q,Z,H,null),H.onAfterShadow(s,H,B,b,Q,Z,null)}}const V=H.children;for(let Q=0,it=V.length;Q<it;Q++)U(V[Q],B,b,D,nt)}function G(H){H.target.removeEventListener("dispose",G);for(const b in d){const D=d[b],nt=H.target.uuid;nt in D&&(D[nt].dispose(),delete D[nt])}}}function Gw(s,t){function i(){let q=!1;const Dt=new an;let Ct=null;const Bt=new an(0,0,0,0);return{setMask:function(Rt){Ct!==Rt&&!q&&(s.colorMask(Rt,Rt,Rt,Rt),Ct=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,pt,kt,ae,Ie){Ie===!0&&(Rt*=ae,pt*=ae,kt*=ae),Dt.set(Rt,pt,kt,ae),Bt.equals(Dt)===!1&&(s.clearColor(Rt,pt,kt,ae),Bt.copy(Dt))},reset:function(){q=!1,Ct=null,Bt.set(-1,0,0,0)}}}function r(){let q=!1,Dt=!1,Ct=null,Bt=null,Rt=null;return{setReversed:function(pt){if(Dt!==pt){const kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Dt=pt;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Dt},setTest:function(pt){pt?vt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(pt){Ct!==pt&&!q&&(s.depthMask(pt),Ct=pt)},setFunc:function(pt){if(Dt&&(pt=tT[pt]),Bt!==pt){switch(pt){case Pd:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Id:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Bd:s.depthFunc(s.EQUAL);break;case zd:s.depthFunc(s.GEQUAL);break;case Hd:s.depthFunc(s.GREATER);break;case Gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=pt}},setLocked:function(pt){q=pt},setClear:function(pt){Rt!==pt&&(Rt=pt,Dt&&(pt=1-pt),s.clearDepth(pt))},reset:function(){q=!1,Ct=null,Bt=null,Rt=null,Dt=!1}}}function l(){let q=!1,Dt=null,Ct=null,Bt=null,Rt=null,pt=null,kt=null,ae=null,Ie=null;return{setTest:function(Re){q||(Re?vt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Re){Dt!==Re&&!q&&(s.stencilMask(Re),Dt=Re)},setFunc:function(Re,Fn,Ai){(Ct!==Re||Bt!==Fn||Rt!==Ai)&&(s.stencilFunc(Re,Fn,Ai),Ct=Re,Bt=Fn,Rt=Ai)},setOp:function(Re,Fn,Ai){(pt!==Re||kt!==Fn||ae!==Ai)&&(s.stencilOp(Re,Fn,Ai),pt=Re,kt=Fn,ae=Ai)},setLocked:function(Re){q=Re},setClear:function(Re){Ie!==Re&&(s.clearStencil(Re),Ie=Re)},reset:function(){q=!1,Dt=null,Ct=null,Bt=null,Rt=null,pt=null,kt=null,ae=null,Ie=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,M=[],E=null,A=!1,S=null,x=null,R=null,L=null,U=null,G=null,H=null,B=new De(0,0,0),b=0,D=!1,nt=null,P=null,V=null,Q=null,it=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(et)[1]),N=z>=1):et.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),N=z>=2);let ut=null,Mt={};const I=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),_t=new an().fromArray(I),Et=new an().fromArray(Y);function Lt(q,Dt,Ct,Bt){const Rt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(q,pt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Ct;kt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Dt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return pt}const st={};st[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),vt(s.DEPTH_TEST),f.setFunc(eo),se(!1),Ye(W_),vt(s.CULL_FACE),fe(La);function vt(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function At(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function zt(q,Dt){return _[q]!==Dt?(s.bindFramebuffer(q,Dt),_[q]=Dt,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Dt),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function jt(q,Dt){let Ct=M,Bt=!1;if(q){Ct=v.get(Dt),Ct===void 0&&(Ct=[],v.set(Dt,Ct));const Rt=q.textures;if(Ct.length!==Rt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,kt=Rt.length;pt<kt;pt++)Ct[pt]=s.COLOR_ATTACHMENT0+pt;Ct.length=Rt.length,Bt=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Ct)}function $t(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Fe={[Ys]:s.FUNC_ADD,[Eb]:s.FUNC_SUBTRACT,[bb]:s.FUNC_REVERSE_SUBTRACT};Fe[Tb]=s.MIN,Fe[Ab]=s.MAX;const ce={[Rb]:s.ZERO,[Cb]:s.ONE,[wb]:s.SRC_COLOR,[Ud]:s.SRC_ALPHA,[Pb]:s.SRC_ALPHA_SATURATE,[Ub]:s.DST_COLOR,[Lb]:s.DST_ALPHA,[Db]:s.ONE_MINUS_SRC_COLOR,[Od]:s.ONE_MINUS_SRC_ALPHA,[Ob]:s.ONE_MINUS_DST_COLOR,[Nb]:s.ONE_MINUS_DST_ALPHA,[Fb]:s.CONSTANT_COLOR,[Ib]:s.ONE_MINUS_CONSTANT_COLOR,[Bb]:s.CONSTANT_ALPHA,[zb]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(q,Dt,Ct,Bt,Rt,pt,kt,ae,Ie,Re){if(q===La){A===!0&&(At(s.BLEND),A=!1);return}if(A===!1&&(vt(s.BLEND),A=!0),q!==Mb){if(q!==S||Re!==D){if((x!==Ys||U!==Ys)&&(s.blendEquation(s.FUNC_ADD),x=Ys,U=Ys),Re)switch(q){case $r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Y_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Z_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",q);break}else switch(q){case $r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Y_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case q_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",q);break}R=null,L=null,G=null,H=null,B.set(0,0,0),b=0,S=q,D=Re}return}Rt=Rt||Dt,pt=pt||Ct,kt=kt||Bt,(Dt!==x||Rt!==U)&&(s.blendEquationSeparate(Fe[Dt],Fe[Rt]),x=Dt,U=Rt),(Ct!==R||Bt!==L||pt!==G||kt!==H)&&(s.blendFuncSeparate(ce[Ct],ce[Bt],ce[pt],ce[kt]),R=Ct,L=Bt,G=pt,H=kt),(ae.equals(B)===!1||Ie!==b)&&(s.blendColor(ae.r,ae.g,ae.b,Ie),B.copy(ae),b=Ie),S=q,D=!1}function Ee(q,Dt){q.side===Yi?At(s.CULL_FACE):vt(s.CULL_FACE);let Ct=q.side===Qn;Dt&&(Ct=!Ct),se(Ct),q.blending===$r&&q.transparent===!1?fe(La):fe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Bt=q.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),je(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){nt!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),nt=q)}function Ye(q){q!==xb?(vt(s.CULL_FACE),q!==P&&(q===W_?s.cullFace(s.BACK):q===Sb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),P=q}function X(q){q!==V&&(N&&s.lineWidth(q),V=q)}function je(q,Dt,Ct){q?(vt(s.POLYGON_OFFSET_FILL),(Q!==Dt||it!==Ct)&&(Q=Dt,it=Ct,f.getReversed()&&(Dt=-Dt),s.polygonOffset(Dt,Ct))):At(s.POLYGON_OFFSET_FILL)}function Se(q){q?vt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function he(q){q===void 0&&(q=s.TEXTURE0+Z-1),ut!==q&&(s.activeTexture(q),ut=q)}function Gt(q,Dt,Ct){Ct===void 0&&(ut===null?Ct=s.TEXTURE0+Z-1:Ct=ut);let Bt=Mt[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},Mt[Ct]=Bt),(Bt.type!==q||Bt.texture!==Dt)&&(ut!==Ct&&(s.activeTexture(Ct),ut=Ct),s.bindTexture(q,Dt||st[q]),Bt.type=q,Bt.texture=Dt)}function F(){const q=Mt[ut];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function mt(){try{s.texSubImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function yt(){try{s.texSubImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function wt(){try{s.texStorage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function Zt(){try{s.texStorage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function te(){try{s.texImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function Tt(){try{s.texImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function bt(q){_t.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Ft(q){Et.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Et.copy(q))}function Pt(q,Dt){let Ct=d.get(Dt);Ct===void 0&&(Ct=new WeakMap,d.set(Dt,Ct));let Bt=Ct.get(q);Bt===void 0&&(Bt=s.getUniformBlockIndex(Dt,q.name),Ct.set(q,Bt))}function It(q,Dt){const Bt=d.get(Dt).get(q);m.get(Dt)!==Bt&&(s.uniformBlockBinding(Dt,Bt,q.__bindingPointIndex),m.set(Dt,Bt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ut=null,Mt={},_={},v=new WeakMap,M=[],E=null,A=!1,S=null,x=null,R=null,L=null,U=null,G=null,H=null,B=new De(0,0,0),b=0,D=!1,nt=null,P=null,V=null,Q=null,it=null,_t.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:vt,disable:At,bindFramebuffer:zt,drawBuffers:jt,useProgram:$t,setBlending:fe,setMaterial:Ee,setFlipSided:se,setCullFace:Ye,setLineWidth:X,setPolygonOffset:je,setScissorTest:Se,activeTexture:he,bindTexture:Gt,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:te,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Vt,scissor:bt,viewport:Ft,reset:pe}}function Vw(s,t,i,r,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,g=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,T){return M?new OffscreenCanvas(F,T):Eu("canvas")}function A(F,T,K){let mt=1;const yt=Gt(F);if((yt.width>K||yt.height>K)&&(mt=K/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const dt=Math.floor(mt*yt.width),Vt=Math.floor(mt*yt.height);_===void 0&&(_=E(dt,Vt));const wt=T?E(dt,Vt):_;return wt.width=dt,wt.height=Vt,wt.getContext("2d").drawImage(F,0,0,dt,Vt),ne("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+Vt+")."),wt}else return"data"in F&&ne("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){s.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(F,T,K,mt,yt=!1){if(F!==null){if(s[F]!==void 0)return s[F];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let dt=T;if(T===s.RED&&(K===s.FLOAT&&(dt=s.R32F),K===s.HALF_FLOAT&&(dt=s.R16F),K===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.R8UI),K===s.UNSIGNED_SHORT&&(dt=s.R16UI),K===s.UNSIGNED_INT&&(dt=s.R32UI),K===s.BYTE&&(dt=s.R8I),K===s.SHORT&&(dt=s.R16I),K===s.INT&&(dt=s.R32I)),T===s.RG&&(K===s.FLOAT&&(dt=s.RG32F),K===s.HALF_FLOAT&&(dt=s.RG16F),K===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RG8UI),K===s.UNSIGNED_SHORT&&(dt=s.RG16UI),K===s.UNSIGNED_INT&&(dt=s.RG32UI),K===s.BYTE&&(dt=s.RG8I),K===s.SHORT&&(dt=s.RG16I),K===s.INT&&(dt=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),K===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),K===s.UNSIGNED_INT&&(dt=s.RGB32UI),K===s.BYTE&&(dt=s.RGB8I),K===s.SHORT&&(dt=s.RGB16I),K===s.INT&&(dt=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),K===s.UNSIGNED_INT&&(dt=s.RGBA32UI),K===s.BYTE&&(dt=s.RGBA8I),K===s.SHORT&&(dt=s.RGBA16I),K===s.INT&&(dt=s.RGBA32I)),T===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),T===s.RGBA){const Vt=yt?Mu:we.getTransfer(mt);K===s.FLOAT&&(dt=s.RGBA32F),K===s.HALF_FLOAT&&(dt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(dt=Vt===He?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function U(F,T){let K;return F?T===null||T===$i||T===_l?K=s.DEPTH24_STENCIL8:T===Zi?K=s.DEPTH32F_STENCIL8:T===gl&&(K=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===_l?K=s.DEPTH_COMPONENT24:T===Zi?K=s.DEPTH_COMPONENT32F:T===gl&&(K=s.DEPTH_COMPONENT16),K}function G(F,T){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Dn&&F.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function H(F){const T=F.target;T.removeEventListener("dispose",H),b(T),T.isVideoTexture&&g.delete(T)}function B(F){const T=F.target;T.removeEventListener("dispose",B),nt(T)}function b(F){const T=r.get(F);if(T.__webglInit===void 0)return;const K=F.source,mt=v.get(K);if(mt){const yt=mt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(F),Object.keys(mt).length===0&&v.delete(K)}r.remove(F)}function D(F){const T=r.get(F);s.deleteTexture(T.__webglTexture);const K=F.source,mt=v.get(K);delete mt[T.__cacheKey],f.memory.textures--}function nt(F){const T=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let yt=0;yt<T.__webglFramebuffer[mt].length;yt++)s.deleteFramebuffer(T.__webglFramebuffer[mt][yt]);else s.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)s.deleteFramebuffer(T.__webglFramebuffer[mt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=F.textures;for(let mt=0,yt=K.length;mt<yt;mt++){const dt=r.get(K[mt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(K[mt])}r.remove(F)}let P=0;function V(){P=0}function Q(){const F=P;return F>=l.maxTextures&&ne("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),P+=1,F}function it(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function Z(F,T){const K=r.get(F);if(F.isVideoTexture&&Se(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){const mt=F.image;if(mt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{st(K,F,T);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function N(F,T){const K=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){st(K,F,T);return}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function z(F,T){const K=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){st(K,F,T);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function et(F,T){const K=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&K.__version!==F.version){vt(K,F,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const ut={[Vd]:s.REPEAT,[Ca]:s.CLAMP_TO_EDGE,[kd]:s.MIRRORED_REPEAT},Mt={[Dn]:s.NEAREST,[Vb]:s.NEAREST_MIPMAP_NEAREST,[Hc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Kh]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},I={[jb]:s.NEVER,[Kb]:s.ALWAYS,[Wb]:s.LESS,[Hp]:s.LEQUAL,[Yb]:s.EQUAL,[Gp]:s.GEQUAL,[qb]:s.GREATER,[Zb]:s.NOTEQUAL};function Y(F,T){if(T.type===Zi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pn||T.magFilter===Kh||T.magFilter===Hc||T.magFilter===Zs||T.minFilter===Pn||T.minFilter===Kh||T.minFilter===Hc||T.minFilter===Zs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ut[T.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ut[T.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ut[T.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,Mt[T.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==Hc&&T.minFilter!==Zs||T.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function _t(F,T){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",H));const mt=T.source;let yt=v.get(mt);yt===void 0&&(yt={},v.set(mt,yt));const dt=it(T);if(dt!==F.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),yt[dt].usedTimes++;const Vt=yt[F.__cacheKey];Vt!==void 0&&(yt[F.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(T)),F.__cacheKey=dt,F.__webglTexture=yt[dt].texture}return K}function Et(F,T,K){return Math.floor(Math.floor(F/K)/T)}function Lt(F,T,K,mt){const dt=F.updateRanges;if(dt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,K,mt,T.data);else{dt.sort((Tt,bt)=>Tt.start-bt.start);let Vt=0;for(let Tt=1;Tt<dt.length;Tt++){const bt=dt[Vt],Ft=dt[Tt],Pt=bt.start+bt.count,It=Et(Ft.start,T.width,4),pe=Et(bt.start,T.width,4);Ft.start<=Pt+1&&It===pe&&Et(Ft.start+Ft.count-1,T.width,4)===It?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++Vt,dt[Vt]=Ft)}dt.length=Vt+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),Zt=s.getParameter(s.UNPACK_SKIP_PIXELS),te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,bt=dt.length;Tt<bt;Tt++){const Ft=dt[Tt],Pt=Math.floor(Ft.start/4),It=Math.ceil(Ft.count/4),pe=Pt%T.width,q=Math.floor(Pt/T.width),Dt=It,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,pe,q,Dt,Ct,K,mt,T.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,te)}}function st(F,T,K){let mt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=s.TEXTURE_3D);const yt=_t(F,T),dt=T.source;i.bindTexture(mt,F.__webglTexture,s.TEXTURE0+K);const Vt=r.get(dt);if(dt.version!==Vt.__version||yt===!0){i.activeTexture(s.TEXTURE0+K);const wt=we.getPrimaries(we.workingColorSpace),Zt=T.colorSpace===vs?null:we.getPrimaries(T.colorSpace),te=T.colorSpace===vs||wt===Zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Tt=A(T.image,!1,l.maxTextureSize);Tt=he(T,Tt);const bt=c.convert(T.format,T.colorSpace),Ft=c.convert(T.type);let Pt=L(T.internalFormat,bt,Ft,T.colorSpace,T.isVideoTexture);Y(mt,T);let It;const pe=T.mipmaps,q=T.isVideoTexture!==!0,Dt=Vt.__version===void 0||yt===!0,Ct=dt.dataReady,Bt=G(T,Tt);if(T.isDepthTexture)Pt=U(T.format===Ks,T.type),Dt&&(q?i.texStorage2D(s.TEXTURE_2D,1,Pt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,bt,Ft,null));else if(T.isDataTexture)if(pe.length>0){q&&Dt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,pe[0].width,pe[0].height);for(let Rt=0,pt=pe.length;Rt<pt;Rt++)It=pe[Rt],q?Ct&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,It.width,It.height,bt,Ft,It.data):i.texImage2D(s.TEXTURE_2D,Rt,Pt,It.width,It.height,0,bt,Ft,It.data);T.generateMipmaps=!1}else q?(Dt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height),Ct&&Lt(T,Tt,bt,Ft)):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,bt,Ft,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,pe[0].width,pe[0].height,Tt.depth);for(let Rt=0,pt=pe.length;Rt<pt;Rt++)if(It=pe[Rt],T.format!==Ii)if(bt!==null)if(q){if(Ct)if(T.layerUpdates.size>0){const kt=Rv(It.width,It.height,T.format,T.type);for(const ae of T.layerUpdates){const Ie=It.data.subarray(ae*kt/It.data.BYTES_PER_ELEMENT,(ae+1)*kt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ae,It.width,It.height,1,bt,Ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,It.width,It.height,Tt.depth,bt,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Pt,It.width,It.height,Tt.depth,0,It.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,It.width,It.height,Tt.depth,bt,Ft,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Pt,It.width,It.height,Tt.depth,0,bt,Ft,It.data)}else{q&&Dt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,pe[0].width,pe[0].height);for(let Rt=0,pt=pe.length;Rt<pt;Rt++)It=pe[Rt],T.format!==Ii?bt!==null?q?Ct&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,It.width,It.height,bt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Pt,It.width,It.height,0,It.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,It.width,It.height,bt,Ft,It.data):i.texImage2D(s.TEXTURE_2D,Rt,Pt,It.width,It.height,0,bt,Ft,It.data)}else if(T.isDataArrayTexture)if(q){if(Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,Tt.width,Tt.height,Tt.depth),Ct)if(T.layerUpdates.size>0){const Rt=Rv(Tt.width,Tt.height,T.format,T.type);for(const pt of T.layerUpdates){const kt=Tt.data.subarray(pt*Rt/Tt.data.BYTES_PER_ELEMENT,(pt+1)*Rt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,Tt.width,Tt.height,1,bt,Ft,kt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,Ft,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,bt,Ft,Tt.data);else if(T.isData3DTexture)q?(Dt&&i.texStorage3D(s.TEXTURE_3D,Bt,Pt,Tt.width,Tt.height,Tt.depth),Ct&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,Ft,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,bt,Ft,Tt.data);else if(T.isFramebufferTexture){if(Dt)if(q)i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height);else{let Rt=Tt.width,pt=Tt.height;for(let kt=0;kt<Bt;kt++)i.texImage2D(s.TEXTURE_2D,kt,Pt,Rt,pt,0,bt,Ft,null),Rt>>=1,pt>>=1}}else if(pe.length>0){if(q&&Dt){const Rt=Gt(pe[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height)}for(let Rt=0,pt=pe.length;Rt<pt;Rt++)It=pe[Rt],q?Ct&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,bt,Ft,It):i.texImage2D(s.TEXTURE_2D,Rt,Pt,bt,Ft,It);T.generateMipmaps=!1}else if(q){if(Dt){const Rt=Gt(Tt);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height)}Ct&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Ft,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,bt,Ft,Tt);S(T)&&x(mt),Vt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function vt(F,T,K){if(T.image.length!==6)return;const mt=_t(F,T),yt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+K);const dt=r.get(yt);if(yt.version!==dt.__version||mt===!0){i.activeTexture(s.TEXTURE0+K);const Vt=we.getPrimaries(we.workingColorSpace),wt=T.colorSpace===vs?null:we.getPrimaries(T.colorSpace),Zt=T.colorSpace===vs||Vt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let pt=0;pt<6;pt++)!te&&!Tt?bt[pt]=A(T.image[pt],!0,l.maxCubemapSize):bt[pt]=Tt?T.image[pt].image:T.image[pt],bt[pt]=he(T,bt[pt]);const Ft=bt[0],Pt=c.convert(T.format,T.colorSpace),It=c.convert(T.type),pe=L(T.internalFormat,Pt,It,T.colorSpace),q=T.isVideoTexture!==!0,Dt=dt.__version===void 0||mt===!0,Ct=yt.dataReady;let Bt=G(T,Ft);Y(s.TEXTURE_CUBE_MAP,T);let Rt;if(te){q&&Dt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,pe,Ft.width,Ft.height);for(let pt=0;pt<6;pt++){Rt=bt[pt].mipmaps;for(let kt=0;kt<Rt.length;kt++){const ae=Rt[kt];T.format!==Ii?Pt!==null?q?Ct&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,pe,ae.width,ae.height,0,ae.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,ae.width,ae.height,Pt,It,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,pe,ae.width,ae.height,0,Pt,It,ae.data)}}}else{if(Rt=T.mipmaps,q&&Dt){Rt.length>0&&Bt++;const pt=Gt(bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,pe,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Tt){q?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt[pt].width,bt[pt].height,Pt,It,bt[pt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,pe,bt[pt].width,bt[pt].height,0,Pt,It,bt[pt].data);for(let kt=0;kt<Rt.length;kt++){const Ie=Rt[kt].image[pt].image;q?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,Ie.width,Ie.height,Pt,It,Ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,pe,Ie.width,Ie.height,0,Pt,It,Ie.data)}}else{q?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Pt,It,bt[pt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,pe,Pt,It,bt[pt]);for(let kt=0;kt<Rt.length;kt++){const ae=Rt[kt];q?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,Pt,It,ae.image[pt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,pe,Pt,It,ae.image[pt])}}}S(T)&&x(s.TEXTURE_CUBE_MAP),dt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function At(F,T,K,mt,yt,dt){const Vt=c.convert(K.format,K.colorSpace),wt=c.convert(K.type),Zt=L(K.internalFormat,Vt,wt,K.colorSpace),te=r.get(T),Tt=r.get(K);if(Tt.__renderTarget=T,!te.__hasExternalTextures){const bt=Math.max(1,T.width>>dt),Ft=Math.max(1,T.height>>dt);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,Zt,bt,Ft,T.depth,0,Vt,wt,null):i.texImage2D(yt,dt,Zt,bt,Ft,0,Vt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,F),je(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,yt,Tt.__webglTexture,0,X(T)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,yt,Tt.__webglTexture,dt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(F,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,F),T.depthBuffer){const mt=T.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,dt=U(T.stencilBuffer,yt),Vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(T),dt,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(T),dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,F)}else{const mt=T.textures;for(let yt=0;yt<mt.length;yt++){const dt=mt[yt],Vt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Zt=L(dt.internalFormat,Vt,wt,dt.colorSpace);je(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(T),Zt,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(T),Zt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Zt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(F,T,K){const mt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=r.get(T.depthTexture);if(yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,T.depthTexture.addEventListener("dispose",H)),yt.__webglTexture===void 0){yt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,T.depthTexture);const te=c.convert(T.depthTexture.format),Tt=c.convert(T.depthTexture.type);let bt;T.depthTexture.format===Pa?bt=s.DEPTH_COMPONENT24:T.depthTexture.format===Ks&&(bt=s.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,T.width,T.height,0,te,Tt,null)}}else Z(T.depthTexture,0);const dt=yt.__webglTexture,Vt=X(T),wt=mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Zt=T.depthTexture.format===Ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pa)je(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Zt,wt,dt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,Zt,wt,dt,0);else if(T.depthTexture.format===Ks)je(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Zt,wt,dt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,Zt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function $t(F){const T=r.get(F),K=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const mt=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=mt}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let mt=0;mt<6;mt++)jt(T.__webglFramebuffer[mt],F,mt);else{const mt=F.texture.mipmaps;mt&&mt.length>0?jt(T.__webglFramebuffer[0],F,0):jt(T.__webglFramebuffer,F,0)}else if(K){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=s.createRenderbuffer(),zt(T.__webglDepthbuffer[mt],F,!1);else{const yt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,dt)}}else{const mt=F.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),zt(T.__webglDepthbuffer,F,!1);else{const yt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,dt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(F,T,K){const mt=r.get(F);T!==void 0&&At(mt.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&$t(F)}function ce(F){const T=F.texture,K=r.get(F),mt=r.get(T);F.addEventListener("dispose",B);const yt=F.textures,dt=F.isWebGLCubeRenderTarget===!0,Vt=yt.length>1;if(Vt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=T.version,f.memory.textures++),dt){K.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)K.__webglFramebuffer[wt][Zt]=s.createFramebuffer()}else K.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)K.__webglFramebuffer[wt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let wt=0,Zt=yt.length;wt<Zt;wt++){const te=r.get(yt[wt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),f.memory.textures++)}if(F.samples>0&&je(F)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const Zt=yt[wt];K.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[wt]);const te=c.convert(Zt.format,Zt.colorSpace),Tt=c.convert(Zt.type),bt=L(Zt.internalFormat,te,Tt,Zt.colorSpace,F.isXRRenderTarget===!0),Ft=X(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,bt,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,K.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(K.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)At(K.__webglFramebuffer[wt][Zt],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else At(K.__webglFramebuffer[wt],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(T)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Zt=yt.length;wt<Zt;wt++){const te=yt[wt],Tt=r.get(te);let bt=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(bt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(bt,Tt.__webglTexture),Y(bt,te),At(K.__webglFramebuffer,F,te,s.COLOR_ATTACHMENT0+wt,bt,0),S(te)&&x(bt)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(wt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,mt.__webglTexture),Y(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)At(K.__webglFramebuffer[Zt],F,T,s.COLOR_ATTACHMENT0,wt,Zt);else At(K.__webglFramebuffer,F,T,s.COLOR_ATTACHMENT0,wt,0);S(T)&&x(wt),i.unbindTexture()}F.depthBuffer&&$t(F)}function fe(F){const T=F.textures;for(let K=0,mt=T.length;K<mt;K++){const yt=T[K];if(S(yt)){const dt=R(F),Vt=r.get(yt).__webglTexture;i.bindTexture(dt,Vt),x(dt),i.unbindTexture()}}}const Ee=[],se=[];function Ye(F){if(F.samples>0){if(je(F)===!1){const T=F.textures,K=F.width,mt=F.height;let yt=s.COLOR_BUFFER_BIT;const dt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(F),wt=T.length>1;if(wt)for(let te=0;te<T.length;te++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Zt=F.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let te=0;te<T.length;te++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[te]);const Tt=r.get(T[te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,K,mt,0,0,K,mt,yt,s.NEAREST),m===!0&&(Ee.length=0,se.length=0,Ee.push(s.COLOR_ATTACHMENT0+te),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ee.push(dt),se.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<T.length;te++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[te]);const Tt=r.get(T[te]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const T=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function X(F){return Math.min(l.maxSamples,F.samples)}function je(F){const T=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Se(F){const T=f.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function he(F,T){const K=F.colorSpace,mt=F.format,yt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==ao&&K!==vs&&(we.getTransfer(K)===He?(mt!==Ii||yt!==hi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",K)),T}function Gt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=et,this.rebindTextures=Fe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=At,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kw(s,t){function i(r,l=vs){let c;const f=we.getTransfer(l);if(r===hi)return s.UNSIGNED_BYTE;if(r===Pp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ox)return s.BYTE;if(r===Px)return s.SHORT;if(r===gl)return s.UNSIGNED_SHORT;if(r===Op)return s.INT;if(r===$i)return s.UNSIGNED_INT;if(r===Zi)return s.FLOAT;if(r===Oa)return s.HALF_FLOAT;if(r===Bx)return s.ALPHA;if(r===zx)return s.RGB;if(r===Ii)return s.RGBA;if(r===Pa)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===Hx)return s.RED;if(r===Ip)return s.RED_INTEGER;if(r===io)return s.RG;if(r===Bp)return s.RG_INTEGER;if(r===zp)return s.RGBA_INTEGER;if(r===gu||r===_u||r===vu||r===xu)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===jd||r===Wd||r===Yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===tp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===qd||r===Zd)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Kd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qd)return c.COMPRESSED_R11_EAC;if(r===Jd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return c.COMPRESSED_RG11_EAC;if(r===tp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ep||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp||r===pp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ep)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===np)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ip)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ap)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===op)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===up)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mp||r===gp||r===_p)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===mp)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_p)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vp||r===xp||r===Sp||r===yp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===vp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===xp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
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

}`;class Ww{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Kx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ta({vertexShader:Xw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yw extends $s{constructor(t,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,_=null,v=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",S=new Ww,x={},R=i.getContextAttributes();let L=null,U=null;const G=[],H=[],B=new ue;let b=null;const D=new Ei;D.viewport=new an;const nt=new Ei;nt.viewport=new an;const P=[D,nt],V=new iA;let Q=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let vt=G[st];return vt===void 0&&(vt=new nd,G[st]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(st){let vt=G[st];return vt===void 0&&(vt=new nd,G[st]=vt),vt.getGripSpace()},this.getHand=function(st){let vt=G[st];return vt===void 0&&(vt=new nd,G[st]=vt),vt.getHandSpace()};function Z(st){const vt=H.indexOf(st.inputSource);if(vt===-1)return;const At=G[vt];At!==void 0&&(At.update(st.inputSource,st.frame,d||f),At.dispatchEvent({type:st.type,data:st.inputSource}))}function N(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",z);for(let st=0;st<G.length;st++){const vt=H[st];vt!==null&&(H[st]=null,G[st].disconnect(vt))}Q=null,it=null,S.reset();for(const st in x)delete x[st];t.setRenderTarget(L),M=null,v=null,_=null,l=null,U=null,Lt.stop(),r.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,r.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){p=st,r.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(st){d=st},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",N),l.addEventListener("inputsourceschange",z),R.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,zt=null,jt=null;R.depth&&(jt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=R.stencil?Ks:Pa,zt=R.stencil?_l:$i);const $t={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($t),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Ji(v.textureWidth,v.textureHeight,{format:Ii,type:hi,depthTexture:new Sl(v.textureWidth,v.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ji(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(st){for(let vt=0;vt<st.removed.length;vt++){const At=st.removed[vt],zt=H.indexOf(At);zt>=0&&(H[zt]=null,G[zt].disconnect(At))}for(let vt=0;vt<st.added.length;vt++){const At=st.added[vt];let zt=H.indexOf(At);if(zt===-1){for(let $t=0;$t<G.length;$t++)if($t>=H.length){H.push(At),zt=$t;break}else if(H[$t]===null){H[$t]=At,zt=$t;break}if(zt===-1)break}const jt=G[zt];jt&&jt.connect(At)}}const et=new tt,ut=new tt;function Mt(st,vt,At){et.setFromMatrixPosition(vt.matrixWorld),ut.setFromMatrixPosition(At.matrixWorld);const zt=et.distanceTo(ut),jt=vt.projectionMatrix.elements,$t=At.projectionMatrix.elements,Fe=jt[14]/(jt[10]-1),ce=jt[14]/(jt[10]+1),fe=(jt[9]+1)/jt[5],Ee=(jt[9]-1)/jt[5],se=(jt[8]-1)/jt[0],Ye=($t[8]+1)/$t[0],X=Fe*se,je=Fe*Ye,Se=zt/(-se+Ye),he=Se*-se;if(vt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(he),st.translateZ(Se),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),jt[10]===-1)st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Gt=Fe+Se,F=ce+Se,T=X-he,K=je+(zt-he),mt=fe*ce/F*Gt,yt=Ee*ce/F*Gt;st.projectionMatrix.makePerspective(T,K,mt,yt,Gt,F),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function I(st,vt){vt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(vt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let vt=st.near,At=st.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),V.near=nt.near=D.near=vt,V.far=nt.far=D.far=At,(Q!==V.near||it!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),Q=V.near,it=V.far),V.layers.mask=st.layers.mask|6,D.layers.mask=V.layers.mask&-5,nt.layers.mask=V.layers.mask&-3;const zt=st.parent,jt=V.cameras;I(V,zt);for(let $t=0;$t<jt.length;$t++)I(jt[$t],zt);jt.length===2?Mt(V,D,nt):V.projectionMatrix.copy(D.projectionMatrix),Y(st,V,zt)};function Y(st,vt,At){At===null?st.matrix.copy(vt.matrixWorld):(st.matrix.copy(At.matrixWorld),st.matrix.invert(),st.matrix.multiply(vt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=xl*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(st){m=st,v!==null&&(v.fixedFoveation=st),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=st)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(V)},this.getCameraTexture=function(st){return x[st]};let _t=null;function Et(st,vt){if(g=vt.getViewerPose(d||f),E=vt,g!==null){const At=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let zt=!1;At.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let ce=0;ce<At.length;ce++){const fe=At[ce];let Ee=null;if(M!==null)Ee=M.getViewport(fe);else{const Ye=_.getViewSubImage(v,fe);Ee=Ye.viewport,ce===0&&(t.setRenderTargetTextures(U,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(U))}let se=P[ce];se===void 0&&(se=new Ei,se.layers.enable(ce),se.viewport=new an,P[ce]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ce===0&&(V.matrix.copy(se.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(se)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const ce=_.getDepthInformation(At[0]);ce&&ce.isValid&&ce.texture&&S.init(ce,l.renderState)}if(jt&&jt.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let ce=0;ce<At.length;ce++){const fe=At[ce].camera;if(fe){let Ee=x[fe];Ee||(Ee=new Kx,x[fe]=Ee);const se=_.getCameraImage(fe);Ee.sourceTexture=se}}}}for(let At=0;At<G.length;At++){const zt=H[At],jt=G[At];zt!==null&&jt!==void 0&&jt.update(zt,vt,d||f)}_t&&_t(st,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Lt=new tS;Lt.setAnimationLoop(Et),this.setAnimationLoop=function(st){_t=st},this.dispose=function(){}}}const Ws=new wn,qw=new Ke;function Zw(s,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Qx(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,R,L,U){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&M(S,x,U)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,R,L):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),L=R.envMap,U=R.envMapRotation;L&&(S.envMap.value=L,Ws.copy(U),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),S.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(Ws)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,R,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=L*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Kw(s,t,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const U=L.program;r.uniformBlockBinding(R,U)}function d(R,L){let U=l[R.id];U===void 0&&(E(R),U=g(R),l[R.id]=U,R.addEventListener("dispose",S));const G=L.program;r.updateUBOMapping(R,G);const H=t.render.frame;c[R.id]!==H&&(v(R),c[R.id]=H)}function g(R){const L=_();R.__bindingPointIndex=L;const U=s.createBuffer(),G=R.__size,H=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,U),U}function _(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const L=l[R.id],U=R.uniforms,G=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let H=0,B=U.length;H<B;H++){const b=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,nt=b.length;D<nt;D++){const P=b[D];if(M(P,H,D,G)===!0){const V=P.__offset,Q=Array.isArray(P.value)?P.value:[P.value];let it=0;for(let Z=0;Z<Q.length;Z++){const N=Q[Z],z=A(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,V+it,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,it),it+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,L,U,G){const H=R.value,B=L+"_"+U;if(G[B]===void 0)return typeof H=="number"||typeof H=="boolean"?G[B]=H:G[B]=H.clone(),!0;{const b=G[B];if(typeof H=="number"||typeof H=="boolean"){if(b!==H)return G[B]=H,!0}else if(b.equals(H)===!1)return b.copy(H),!0}return!1}function E(R){const L=R.uniforms;let U=0;const G=16;for(let B=0,b=L.length;B<b;B++){const D=Array.isArray(L[B])?L[B]:[L[B]];for(let nt=0,P=D.length;nt<P;nt++){const V=D[nt],Q=Array.isArray(V.value)?V.value:[V.value];for(let it=0,Z=Q.length;it<Z;it++){const N=Q[it],z=A(N),et=U%G,ut=et%z.boundary,Mt=et+ut;U+=ut,Mt!==0&&G-Mt<z.storage&&(U+=G-Mt),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=U,U+=z.storage}}}const H=U%G;return H>0&&(U+=G-H),R.__size=U,R.__cache={},this}function A(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",R),L}function S(R){const L=R.target;L.removeEventListener("dispose",S);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const R in l)s.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:d,dispose:x}}const Qw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function Jw(){return ji===null&&(ji=new FT(Qw,16,16,io,Oa),ji.name="DFG_LUT",ji.minFilter=Pn,ji.magFilter=Pn,ji.wrapS=Ca,ji.wrapT=Ca,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class $w{constructor(t={}){const{canvas:i=Jb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=hi}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const A=M,S=new Set([zp,Bp,Ip]),x=new Set([hi,$i,gl,_l,Pp,Fp]),R=new Uint32Array(4),L=new Int32Array(4);let U=null,G=null;const H=[],B=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let nt=!1;this._outputColorSpace=fi;let P=0,V=0,Q=null,it=-1,Z=null;const N=new an,z=new an;let et=null;const ut=new De(0);let Mt=0,I=i.width,Y=i.height,_t=1,Et=null,Lt=null;const st=new an(0,0,I,Y),vt=new an(0,0,I,Y);let At=!1;const zt=new jp;let jt=!1,$t=!1;const Fe=new Ke,ce=new tt,fe=new an,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ye(){return Q===null?_t:1}let X=r;function je(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const W="webgl2";if(X=je(W,w),X===null)throw je(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}let Se,he,Gt,F,T,K,mt,yt,dt,Vt,wt,Zt,te,Tt,bt,Ft,Pt,It,pe,q,Dt,Ct,Bt;function Rt(){Se=new $R(X),Se.init(),Dt=new kw(X,Se),he=new jR(X,Se,t,Dt),Gt=new Gw(X,Se),he.reversedDepthBuffer&&v&&Gt.buffers.depth.setReversed(!0),F=new nC(X),T=new Rw,K=new Vw(X,Se,Gt,T,he,Dt,F),mt=new JR(D),yt=new oA(X),Ct=new kR(X,yt),dt=new tC(X,yt,F,Ct),Vt=new aC(X,dt,yt,Ct,F),It=new iC(X,he,K),bt=new WR(T),wt=new Aw(D,mt,Se,he,Ct,bt),Zt=new Zw(D,T),te=new ww,Tt=new Pw(Se),Pt=new VR(D,mt,Gt,Vt,E,m),Ft=new Hw(D,Vt,he),Bt=new Kw(X,F,he,Gt),pe=new XR(X,Se,F),q=new eC(X,Se,F),F.programs=wt.programs,D.capabilities=he,D.extensions=Se,D.properties=T,D.renderLists=te,D.shadowMap=Ft,D.state=Gt,D.info=F}Rt(),A!==hi&&(b=new rC(A,i.width,i.height,l,c));const pt=new Yw(D,X);this.xr=pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(I,Y,!1))},this.getSize=function(w){return w.set(I,Y)},this.setSize=function(w,W,ft=!0){if(pt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,Y=W,i.width=Math.floor(w*_t),i.height=Math.floor(W*_t),ft===!0&&(i.style.width=w+"px",i.style.height=W+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(I*_t,Y*_t).floor()},this.setDrawingBufferSize=function(w,W,ft){I=w,Y=W,_t=ft,i.width=Math.floor(w*ft),i.height=Math.floor(W*ft),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(A===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,W,ft,lt){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,W,ft,lt),Gt.viewport(N.copy(st).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,W,ft,lt){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,W,ft,lt),Gt.scissor(z.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(w){Gt.setScissorTest(At=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Lt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ft=!0){let lt=0;if(w){let at=!1;if(Q!==null){const Nt=Q.texture.format;at=S.has(Nt)}if(at){const Nt=Q.texture.type,Ht=x.has(Nt),Ut=Pt.getClearColor(),qt=Pt.getClearAlpha(),Qt=Ut.r,ie=Ut.g,oe=Ut.b;Ht?(R[0]=Qt,R[1]=ie,R[2]=oe,R[3]=qt,X.clearBufferuiv(X.COLOR,0,R)):(L[0]=Qt,L[1]=ie,L[2]=oe,L[3]=qt,X.clearBufferiv(X.COLOR,0,L))}else lt|=X.COLOR_BUFFER_BIT}W&&(lt|=X.DEPTH_BUFFER_BIT),ft&&(lt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&X.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Pt.dispose(),te.dispose(),Tt.dispose(),T.dispose(),mt.dispose(),Vt.dispose(),Ct.dispose(),Bt.dispose(),wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",er),pt.removeEventListener("sessionend",nr),zi.stop()};function kt(w){w.preventDefault(),tv("WebGLRenderer: Context Lost."),nt=!0}function ae(){tv("WebGLRenderer: Context Restored."),nt=!1;const w=F.autoReset,W=Ft.enabled,ft=Ft.autoUpdate,lt=Ft.needsUpdate,at=Ft.type;Rt(),F.autoReset=w,Ft.enabled=W,Ft.autoUpdate=ft,Ft.needsUpdate=lt,Ft.type=at}function Ie(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const W=w.target;W.removeEventListener("dispose",Re),Fn(W)}function Fn(w){Ai(w),T.remove(w)}function Ai(w){const W=T.get(w).programs;W!==void 0&&(W.forEach(function(ft){wt.releaseProgram(ft)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ft,lt,at,Nt){W===null&&(W=Ee);const Ht=at.isMesh&&at.matrixWorld.determinant()<0,Ut=wl(w,W,ft,lt,at);Gt.setMaterial(lt,Ht);let qt=ft.index,Qt=1;if(lt.wireframe===!0){if(qt=dt.getWireframeAttribute(ft),qt===void 0)return;Qt=2}const ie=ft.drawRange,oe=ft.attributes.position;let Xt=ie.start*Qt,me=(ie.start+ie.count)*Qt;Nt!==null&&(Xt=Math.max(Xt,Nt.start*Qt),me=Math.min(me,(Nt.start+Nt.count)*Qt)),qt!==null?(Xt=Math.max(Xt,0),me=Math.min(me,qt.count)):oe!=null&&(Xt=Math.max(Xt,0),me=Math.min(me,oe.count));const Qe=me-Xt;if(Qe<0||Qe===1/0)return;Ct.setup(at,lt,Ut,ft,qt);let Je,Le=pe;if(qt!==null&&(Je=yt.get(qt),Le=q,Le.setIndex(Je)),at.isMesh)lt.wireframe===!0?(Gt.setLineWidth(lt.wireframeLinewidth*Ye()),Le.setMode(X.LINES)):Le.setMode(X.TRIANGLES);else if(at.isLine){let gn=lt.linewidth;gn===void 0&&(gn=1),Gt.setLineWidth(gn*Ye()),at.isLineSegments?Le.setMode(X.LINES):at.isLineLoop?Le.setMode(X.LINE_LOOP):Le.setMode(X.LINE_STRIP)}else at.isPoints?Le.setMode(X.POINTS):at.isSprite&&Le.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)bu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Le.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const gn=at._multiDrawStarts,Yt=at._multiDrawCounts,In=at._multiDrawCount,re=qt?yt.get(qt).bytesPerElement:1,Bn=T.get(lt).currentProgram.getUniforms();for(let $n=0;$n<In;$n++)Bn.setValue(X,"_gl_DrawID",$n),Le.render(gn[$n]/re,Yt[$n])}else if(at.isInstancedMesh)Le.renderInstances(Xt,Qe,at.count);else if(ft.isInstancedBufferGeometry){const gn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Yt=Math.min(ft.instanceCount,gn);Le.renderInstances(Xt,Qe,Yt)}else Le.render(Xt,Qe)};function uo(w,W,ft){w.transparent===!0&&w.side===Yi&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Fa(w,W,ft),w.side=Ss,w.needsUpdate=!0,Fa(w,W,ft),w.side=Yi):Fa(w,W,ft)}this.compile=function(w,W,ft=null){ft===null&&(ft=w),G=Tt.get(ft),G.init(W),B.push(G),ft.traverseVisible(function(at){at.isLight&&at.layers.test(W.layers)&&(G.pushLight(at),at.castShadow&&G.pushShadow(at))}),w!==ft&&w.traverseVisible(function(at){at.isLight&&at.layers.test(W.layers)&&(G.pushLight(at),at.castShadow&&G.pushShadow(at))}),G.setupLights();const lt=new Set;return w.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Nt=at.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){const Ut=Nt[Ht];uo(Ut,ft,at),lt.add(Ut)}else uo(Nt,ft,at),lt.add(Nt)}),G=B.pop(),lt},this.compileAsync=function(w,W,ft=null){const lt=this.compile(w,W,ft);return new Promise(at=>{function Nt(){if(lt.forEach(function(Ht){T.get(Ht).currentProgram.isReady()&&lt.delete(Ht)}),lt.size===0){at(w);return}setTimeout(Nt,10)}Se.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let tr=null;function Al(w){tr&&tr(w)}function er(){zi.stop()}function nr(){zi.start()}const zi=new tS;zi.setAnimationLoop(Al),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){tr=w,pt.setAnimationLoop(w),w===null?zi.stop():zi.start()},pt.addEventListener("sessionstart",er),pt.addEventListener("sessionend",nr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;const ft=pt.enabled===!0&&pt.isPresenting===!0,lt=b!==null&&(Q===null||ft)&&b.begin(D,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,W,Q),G=Tt.get(w,B.length),G.init(W),B.push(G),Fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),zt.setFromProjectionMatrix(Fe,Ki,W.reversedDepth),$t=this.localClippingEnabled,jt=bt.init(this.clippingPlanes,$t),U=te.get(w,H.length),U.init(),H.push(U),pt.enabled===!0&&pt.isPresenting===!0){const Ht=D.xr.getDepthSensingMesh();Ht!==null&&ir(Ht,W,-1/0,D.sortObjects)}ir(w,W,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Et,Lt),se=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,se&&Pt.addToRenderList(U,w),this.info.render.frame++,jt===!0&&bt.beginShadows();const at=G.state.shadowsArray;if(Ft.render(at,w,W),jt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&b.hasRenderPass())===!1){const Ht=U.opaque,Ut=U.transmissive;if(G.setupLights(),W.isArrayCamera){const qt=W.cameras;if(Ut.length>0)for(let Qt=0,ie=qt.length;Qt<ie;Qt++){const oe=qt[Qt];on(Ht,Ut,w,oe)}se&&Pt.render(w);for(let Qt=0,ie=qt.length;Qt<ie;Qt++){const oe=qt[Qt];Ri(U,w,oe,oe.viewport)}}else Ut.length>0&&on(Ht,Ut,w,W),se&&Pt.render(w),Ri(U,w,W)}Q!==null&&V===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),lt&&b.end(D),w.isScene===!0&&w.onAfterRender(D,w,W),Ct.resetDefaultState(),it=-1,Z=null,B.pop(),B.length>0?(G=B[B.length-1],jt===!0&&bt.setGlobalState(D.clippingPlanes,G.state.camera)):G=null,H.pop(),H.length>0?U=H[H.length-1]:U=null};function ir(w,W,ft,lt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ft=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)G.pushLight(w),w.castShadow&&G.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||zt.intersectsSprite(w)){lt&&fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);const Ht=Vt.update(w),Ut=w.material;Ut.visible&&U.push(w,Ht,Ut,ft,fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||zt.intersectsObject(w))){const Ht=Vt.update(w),Ut=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),fe.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),fe.copy(Ht.boundingSphere.center)),fe.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ut)){const qt=Ht.groups;for(let Qt=0,ie=qt.length;Qt<ie;Qt++){const oe=qt[Qt],Xt=Ut[oe.materialIndex];Xt&&Xt.visible&&U.push(w,Ht,Xt,ft,fe.z,oe)}}else Ut.visible&&U.push(w,Ht,Ut,ft,fe.z,null)}}const Nt=w.children;for(let Ht=0,Ut=Nt.length;Ht<Ut;Ht++)ir(Nt[Ht],W,ft,lt)}function Ri(w,W,ft,lt){const{opaque:at,transmissive:Nt,transparent:Ht}=w;G.setupLightsView(ft),jt===!0&&bt.setGlobalState(D.clippingPlanes,ft),lt&&Gt.viewport(N.copy(lt)),at.length>0&&mn(at,W,ft),Nt.length>0&&mn(Nt,W,ft),Ht.length>0&&mn(Ht,W,ft),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function on(w,W,ft,lt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[lt.id]===void 0){const Xt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[lt.id]=new Ji(1,1,{generateMipmaps:!0,type:Xt?Oa:hi,minFilter:Zs,samples:he.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Nt=G.state.transmissionRenderTarget[lt.id],Ht=lt.viewport||N;Nt.setSize(Ht.z*D.transmissionResolutionScale,Ht.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget(),qt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(Nt),D.getClearColor(ut),Mt=D.getClearAlpha(),Mt<1&&D.setClearColor(16777215,.5),D.clear(),se&&Pt.render(ft);const ie=D.toneMapping;D.toneMapping=Qi;const oe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),G.setupLightsView(lt),jt===!0&&bt.setGlobalState(D.clippingPlanes,lt),mn(w,ft,lt),K.updateMultisampleRenderTarget(Nt),K.updateRenderTargetMipmap(Nt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let me=0,Qe=W.length;me<Qe;me++){const Je=W[me],{object:Le,geometry:gn,material:Yt,group:In}=Je;if(Yt.side===Yi&&Le.layers.test(lt.layers)){const re=Yt.side;Yt.side=Qn,Yt.needsUpdate=!0,na(Le,ft,lt,gn,Yt,In),Yt.side=re,Yt.needsUpdate=!0,Xt=!0}}Xt===!0&&(K.updateMultisampleRenderTarget(Nt),K.updateRenderTargetMipmap(Nt))}D.setRenderTarget(Ut,qt,Qt),D.setClearColor(ut,Mt),oe!==void 0&&(lt.viewport=oe),D.toneMapping=ie}function mn(w,W,ft){const lt=W.isScene===!0?W.overrideMaterial:null;for(let at=0,Nt=w.length;at<Nt;at++){const Ht=w[at],{object:Ut,geometry:qt,group:Qt}=Ht;let ie=Ht.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Ut.layers.test(ft.layers)&&na(Ut,W,ft,qt,ie,Qt)}}function na(w,W,ft,lt,at,Nt){w.onBeforeRender(D,W,ft,lt,at,Nt),w.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(D,W,ft,lt,w,Nt),at.transparent===!0&&at.side===Yi&&at.forceSinglePass===!1?(at.side=Qn,at.needsUpdate=!0,D.renderBufferDirect(ft,W,lt,at,w,Nt),at.side=Ss,at.needsUpdate=!0,D.renderBufferDirect(ft,W,lt,at,w,Nt),at.side=Yi):D.renderBufferDirect(ft,W,lt,at,w,Nt),w.onAfterRender(D,W,ft,lt,at,Nt)}function Fa(w,W,ft){W.isScene!==!0&&(W=Ee);const lt=T.get(w),at=G.state.lights,Nt=G.state.shadowsArray,Ht=at.state.version,Ut=wt.getParameters(w,at.state,Nt,W,ft),qt=wt.getProgramCacheKey(Ut);let Qt=lt.programs;lt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,lt.fog=W.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;lt.envMap=mt.get(w.envMap||lt.environment,ie),lt.envMapRotation=lt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",Re),Qt=new Map,lt.programs=Qt);let oe=Qt.get(qt);if(oe!==void 0){if(lt.currentProgram===oe&&lt.lightsStateVersion===Ht)return Cl(w,Ut),oe}else Ut.uniforms=wt.getUniforms(w),w.onBeforeCompile(Ut,D),oe=wt.acquireProgram(Ut,qt),Qt.set(qt,oe),lt.uniforms=Ut.uniforms;const Xt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Cl(w,Ut),lt.needsLights=fo(w),lt.lightsStateVersion=Ht,lt.needsLights&&(Xt.ambientLightColor.value=at.state.ambient,Xt.lightProbe.value=at.state.probe,Xt.directionalLights.value=at.state.directional,Xt.directionalLightShadows.value=at.state.directionalShadow,Xt.spotLights.value=at.state.spot,Xt.spotLightShadows.value=at.state.spotShadow,Xt.rectAreaLights.value=at.state.rectArea,Xt.ltc_1.value=at.state.rectAreaLTC1,Xt.ltc_2.value=at.state.rectAreaLTC2,Xt.pointLights.value=at.state.point,Xt.pointLightShadows.value=at.state.pointShadow,Xt.hemisphereLights.value=at.state.hemi,Xt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Xt.spotLightMatrix.value=at.state.spotLightMatrix,Xt.spotLightMap.value=at.state.spotLightMap,Xt.pointShadowMatrix.value=at.state.pointShadowMatrix),lt.currentProgram=oe,lt.uniformsList=null,oe}function Rl(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Su.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Cl(w,W){const ft=T.get(w);ft.outputColorSpace=W.outputColorSpace,ft.batching=W.batching,ft.batchingColor=W.batchingColor,ft.instancing=W.instancing,ft.instancingColor=W.instancingColor,ft.instancingMorph=W.instancingMorph,ft.skinning=W.skinning,ft.morphTargets=W.morphTargets,ft.morphNormals=W.morphNormals,ft.morphColors=W.morphColors,ft.morphTargetsCount=W.morphTargetsCount,ft.numClippingPlanes=W.numClippingPlanes,ft.numIntersection=W.numClipIntersection,ft.vertexAlphas=W.vertexAlphas,ft.vertexTangents=W.vertexTangents,ft.toneMapping=W.toneMapping}function wl(w,W,ft,lt,at){W.isScene!==!0&&(W=Ee),K.resetTextureUnits();const Nt=W.fog,Ht=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?W.environment:null,Ut=Q===null?D.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ao,qt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Qt=mt.get(lt.envMap||Ht,qt),ie=lt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,oe=!!ft.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Xt=!!ft.morphAttributes.position,me=!!ft.morphAttributes.normal,Qe=!!ft.morphAttributes.color;let Je=Qi;lt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Je=D.toneMapping);const Le=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,gn=Le!==void 0?Le.length:0,Yt=T.get(lt),In=G.state.lights;if(jt===!0&&($t===!0||w!==Z)){const cn=w===Z&&lt.id===it;bt.setState(lt,w,cn)}let re=!1;lt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==In.state.version||Yt.outputColorSpace!==Ut||at.isBatchedMesh&&Yt.batching===!1||!at.isBatchedMesh&&Yt.batching===!0||at.isBatchedMesh&&Yt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Yt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Yt.instancing===!1||!at.isInstancedMesh&&Yt.instancing===!0||at.isSkinnedMesh&&Yt.skinning===!1||!at.isSkinnedMesh&&Yt.skinning===!0||at.isInstancedMesh&&Yt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Yt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Yt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Yt.instancingMorph===!1&&at.morphTexture!==null||Yt.envMap!==Qt||lt.fog===!0&&Yt.fog!==Nt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==ie||Yt.vertexTangents!==oe||Yt.morphTargets!==Xt||Yt.morphNormals!==me||Yt.morphColors!==Qe||Yt.toneMapping!==Je||Yt.morphTargetsCount!==gn)&&(re=!0):(re=!0,Yt.__version=lt.version);let Bn=Yt.currentProgram;re===!0&&(Bn=Fa(lt,W,at));let $n=!1,Ci=!1,ti=!1;const Pe=Bn.getUniforms(),ln=Yt.uniforms;if(Gt.useProgram(Bn.program)&&($n=!0,Ci=!0,ti=!0),lt.id!==it&&(it=lt.id,Ci=!0),$n||Z!==w){Gt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(X,"projectionMatrix",w.projectionMatrix),Pe.setValue(X,"viewMatrix",w.matrixWorldInverse);const wi=Pe.map.cameraPosition;wi!==void 0&&wi.setValue(X,ce.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&Pe.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Pe.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Ci=!0,ti=!0)}if(Yt.needsLights&&(In.state.directionalShadowMap.length>0&&Pe.setValue(X,"directionalShadowMap",In.state.directionalShadowMap,K),In.state.spotShadowMap.length>0&&Pe.setValue(X,"spotShadowMap",In.state.spotShadowMap,K),In.state.pointShadowMap.length>0&&Pe.setValue(X,"pointShadowMap",In.state.pointShadowMap,K)),at.isSkinnedMesh){Pe.setOptional(X,at,"bindMatrix"),Pe.setOptional(X,at,"bindMatrixInverse");const cn=at.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(X,"boneTexture",cn.boneTexture,K))}at.isBatchedMesh&&(Pe.setOptional(X,at,"batchingTexture"),Pe.setValue(X,"batchingTexture",at._matricesTexture,K),Pe.setOptional(X,at,"batchingIdTexture"),Pe.setValue(X,"batchingIdTexture",at._indirectTexture,K),Pe.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Pe.setValue(X,"batchingColorTexture",at._colorsTexture,K));const zn=ft.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&It.update(at,ft,Bn),(Ci||Yt.receiveShadow!==at.receiveShadow)&&(Yt.receiveShadow=at.receiveShadow,Pe.setValue(X,"receiveShadow",at.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Jw()),Ci&&(Pe.setValue(X,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&Es(ln,ti),Nt&&lt.fog===!0&&Zt.refreshFogUniforms(ln,Nt),Zt.refreshMaterialUniforms(ln,lt,_t,Y,G.state.transmissionRenderTarget[w.id]),Su.upload(X,Rl(Yt),ln,K)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Su.upload(X,Rl(Yt),ln,K),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Pe.setValue(X,"center",at.center),Pe.setValue(X,"modelViewMatrix",at.modelViewMatrix),Pe.setValue(X,"normalMatrix",at.normalMatrix),Pe.setValue(X,"modelMatrix",at.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const cn=lt.uniformsGroups;for(let wi=0,ia=cn.length;wi<ia;wi++){const ar=cn[wi];Bt.update(ar,Bn),Bt.bind(ar,Bn)}}return Bn}function Es(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function fo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,W,ft){const lt=T.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=W,T.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ft,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ft=T.get(w);ft.__webglFramebuffer=W,ft.__useDefaultFramebuffer=W===void 0};const Ia=X.createFramebuffer();this.setRenderTarget=function(w,W=0,ft=0){Q=w,P=W,V=ft;let lt=null,at=!1,Nt=!1;if(w){const Ut=T.get(w);if(Ut.__useDefaultFramebuffer!==void 0){Gt.bindFramebuffer(X.FRAMEBUFFER,Ut.__webglFramebuffer),N.copy(w.viewport),z.copy(w.scissor),et=w.scissorTest,Gt.viewport(N),Gt.scissor(z),Gt.setScissorTest(et),it=-1;return}else if(Ut.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Ut.__hasExternalTextures)K.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Ut.__boundDepthTexture!==ie){if(ie!==null&&T.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Nt=!0);const Qt=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?lt=Qt[W][ft]:lt=Qt[W],at=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?lt=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?lt=Qt[ft]:lt=Qt,N.copy(w.viewport),z.copy(w.scissor),et=w.scissorTest}else N.copy(st).multiplyScalar(_t).floor(),z.copy(vt).multiplyScalar(_t).floor(),et=At;if(ft!==0&&(lt=Ia),Gt.bindFramebuffer(X.FRAMEBUFFER,lt)&&Gt.drawBuffers(w,lt),Gt.viewport(N),Gt.scissor(z),Gt.setScissorTest(et),at){const Ut=T.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,ft)}else if(Nt){const Ut=W;for(let qt=0;qt<w.textures.length;qt++){const Qt=T.get(w.textures[qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qt,Qt.__webglTexture,ft,Ut)}}else if(w!==null&&ft!==0){const Ut=T.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ut.__webglTexture,ft)}it=-1},this.readRenderTargetPixels=function(w,W,ft,lt,at,Nt,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(qt=qt[Ht]),qt){Gt.bindFramebuffer(X.FRAMEBUFFER,qt);try{const Qt=w.textures[Ut],ie=Qt.format,oe=Qt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ut),!he.textureFormatReadable(ie)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-lt&&ft>=0&&ft<=w.height-at&&X.readPixels(W,ft,lt,at,Dt.convert(ie),Dt.convert(oe),Nt)}finally{const Qt=Q!==null?T.get(Q).__webglFramebuffer:null;Gt.bindFramebuffer(X.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,W,ft,lt,at,Nt,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(qt=qt[Ht]),qt)if(W>=0&&W<=w.width-lt&&ft>=0&&ft<=w.height-at){Gt.bindFramebuffer(X.FRAMEBUFFER,qt);const Qt=w.textures[Ut],ie=Qt.format,oe=Qt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ut),!he.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xt),X.bufferData(X.PIXEL_PACK_BUFFER,Nt.byteLength,X.STREAM_READ),X.readPixels(W,ft,lt,at,Dt.convert(ie),Dt.convert(oe),0);const me=Q!==null?T.get(Q).__webglFramebuffer:null;Gt.bindFramebuffer(X.FRAMEBUFFER,me);const Qe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await $b(X,Qe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Nt),X.deleteBuffer(Xt),X.deleteSync(Qe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ft=0){const lt=Math.pow(2,-ft),at=Math.floor(w.image.width*lt),Nt=Math.floor(w.image.height*lt),Ht=W!==null?W.x:0,Ut=W!==null?W.y:0;K.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,Ht,Ut,at,Nt),Gt.unbindTexture()};const Ba=X.createFramebuffer(),bs=X.createFramebuffer();this.copyTextureToTexture=function(w,W,ft=null,lt=null,at=0,Nt=0){let Ht,Ut,qt,Qt,ie,oe,Xt,me,Qe;const Je=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(ft!==null)Ht=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Qt=ft.min.x,ie=ft.min.y,oe=ft.isBox3?ft.min.z:0;else{const ln=Math.pow(2,-at);Ht=Math.floor(Je.width*ln),Ut=Math.floor(Je.height*ln),w.isDataArrayTexture?qt=Je.depth:w.isData3DTexture?qt=Math.floor(Je.depth*ln):qt=1,Qt=0,ie=0,oe=0}lt!==null?(Xt=lt.x,me=lt.y,Qe=lt.z):(Xt=0,me=0,Qe=0);const Le=Dt.convert(W.format),gn=Dt.convert(W.type);let Yt;W.isData3DTexture?(K.setTexture3D(W,0),Yt=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(K.setTexture2DArray(W,0),Yt=X.TEXTURE_2D_ARRAY):(K.setTexture2D(W,0),Yt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const In=X.getParameter(X.UNPACK_ROW_LENGTH),re=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=X.getParameter(X.UNPACK_SKIP_PIXELS),$n=X.getParameter(X.UNPACK_SKIP_ROWS),Ci=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,oe);const ti=w.isDataArrayTexture||w.isData3DTexture,Pe=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const ln=T.get(w),zn=T.get(W),cn=T.get(ln.__renderTarget),wi=T.get(zn.__renderTarget);Gt.bindFramebuffer(X.READ_FRAMEBUFFER,cn.__webglFramebuffer),Gt.bindFramebuffer(X.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ia=0;ia<qt;ia++)ti&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(w).__webglTexture,at,oe+ia),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(W).__webglTexture,Nt,Qe+ia)),X.blitFramebuffer(Qt,ie,Ht,Ut,Xt,me,Ht,Ut,X.DEPTH_BUFFER_BIT,X.NEAREST);Gt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||w.isRenderTargetTexture||T.has(w)){const ln=T.get(w),zn=T.get(W);Gt.bindFramebuffer(X.READ_FRAMEBUFFER,Ba),Gt.bindFramebuffer(X.DRAW_FRAMEBUFFER,bs);for(let cn=0;cn<qt;cn++)ti?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ln.__webglTexture,at,oe+cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ln.__webglTexture,at),Pe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zn.__webglTexture,Nt,Qe+cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zn.__webglTexture,Nt),at!==0?X.blitFramebuffer(Qt,ie,Ht,Ut,Xt,me,Ht,Ut,X.COLOR_BUFFER_BIT,X.NEAREST):Pe?X.copyTexSubImage3D(Yt,Nt,Xt,me,Qe+cn,Qt,ie,Ht,Ut):X.copyTexSubImage2D(Yt,Nt,Xt,me,Qt,ie,Ht,Ut);Gt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Yt,Nt,Xt,me,Qe,Ht,Ut,qt,Le,gn,Je.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Yt,Nt,Xt,me,Qe,Ht,Ut,qt,Le,Je.data):X.texSubImage3D(Yt,Nt,Xt,me,Qe,Ht,Ut,qt,Le,gn,Je):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Nt,Xt,me,Ht,Ut,Le,gn,Je.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Nt,Xt,me,Je.width,Je.height,Le,Je.data):X.texSubImage2D(X.TEXTURE_2D,Nt,Xt,me,Ht,Ut,Le,gn,Je);X.pixelStorei(X.UNPACK_ROW_LENGTH,In),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,re),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),X.pixelStorei(X.UNPACK_SKIP_ROWS,$n),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ci),Nt===0&&W.generateMipmaps&&X.generateMipmap(Yt),Gt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),Gt.unbindTexture()},this.resetState=function(){P=0,V=0,Q=null,Gt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Qv={type:"change"},Zp={type:"start"},rS={type:"end"},uu=new Nu,Jv=new gs,t3=Math.cos(70*fl.DEG2RAD),vn=new tt,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rd=1e-6;class e3 extends sA{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new ys,this._lastTargetPosition=new tt,this._quat=new ys().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Av,this._sphericalDelta=new Av,this._scale=1,this._panOffset=new tt,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new tt,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i3.bind(this),this._onPointerDown=n3.bind(this),this._onPointerUp=a3.bind(this),this._onContextMenu=f3.bind(this),this._onMouseWheel=o3.bind(this),this._onKeyDown=l3.bind(this),this._onTouchStart=c3.bind(this),this._onTouchMove=u3.bind(this),this._onMouseDown=s3.bind(this),this._onMouseMove=r3.bind(this),this._interceptControlDown=h3.bind(this),this._interceptControlUp=d3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qv),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=vn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<t3?this.object.lookAt(this.target):(Jv.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(Jv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rd||this._lastTargetPosition.distanceToSquared(this.target)>Rd?(this.dispatchEvent(Qv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,p=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ue,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function n3(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i3(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function a3(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rS),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function s3(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Xe.DOLLY;break;case Jr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xe.ROTATE}break;case Jr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Zp)}function r3(s){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function o3(s){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(s.preventDefault(),this.dispatchEvent(Zp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(rS))}function l3(s){this.enabled!==!1&&this._handleKeyDown(s)}function c3(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Xe.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Xe.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Zp)}function u3(s){switch(this._trackPointer(s),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Xe.NONE}}function f3(s){this.enabled!==!1&&s.preventDefault()}function h3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class p3 extends Yp{constructor(t){super(t)}load(t,i,r,l){const c=this,f=new QT(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(d){const g=new DataView(d),_=32/8*3+32/8*3*3+16/8,v=g.getUint32(80,!0);if(80+32/8+v*_===g.byteLength)return!0;const E=[115,111,108,105,100];for(let A=0;A<5;A++)if(r(E,g,A))return!1;return!0}function r(d,g,_){for(let v=0,M=d.length;v<M;v++)if(d[v]!==g.getUint8(_+v))return!1;return!0}function l(d){const g=new DataView(d),_=g.getUint32(80,!0);let v,M,E,A=!1,S,x,R,L,U;for(let P=0;P<70;P++)g.getUint32(P,!1)==1129270351&&g.getUint8(P+4)==82&&g.getUint8(P+5)==61&&(A=!0,S=new Float32Array(_*3*3),x=g.getUint8(P+6)/255,R=g.getUint8(P+7)/255,L=g.getUint8(P+8)/255,U=g.getUint8(P+9)/255);const G=84,H=50,B=new Jn,b=new Float32Array(_*3*3),D=new Float32Array(_*3*3),nt=new De;for(let P=0;P<_;P++){const V=G+P*H,Q=g.getFloat32(V,!0),it=g.getFloat32(V+4,!0),Z=g.getFloat32(V+8,!0);if(A){const N=g.getUint16(V+48,!0);(N&32768)===0?(v=(N&31)/31,M=(N>>5&31)/31,E=(N>>10&31)/31):(v=x,M=R,E=L)}for(let N=1;N<=3;N++){const z=V+N*12,et=P*3*3+(N-1)*3;b[et]=g.getFloat32(z,!0),b[et+1]=g.getFloat32(z+4,!0),b[et+2]=g.getFloat32(z+8,!0),D[et]=Q,D[et+1]=it,D[et+2]=Z,A&&(nt.setRGB(v,M,E,fi),S[et]=nt.r,S[et+1]=nt.g,S[et+2]=nt.b)}}return B.setAttribute("position",new di(b,3)),B.setAttribute("normal",new di(D,3)),A&&(B.setAttribute("color",new di(S,3)),B.hasColors=!0,B.alpha=U),B}function c(d){const g=new Jn,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let E=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,S=new RegExp("vertex"+A+A+A,"g"),x=new RegExp("normal"+A+A+A,"g"),R=[],L=[],U=[],G=new tt;let H,B=0,b=0,D=0;for(;(H=_.exec(d))!==null;){b=D;const nt=H[0],P=(H=M.exec(nt))!==null?H[1]:"";for(U.push(P);(H=v.exec(nt))!==null;){let it=0,Z=0;const N=H[0];for(;(H=x.exec(N))!==null;)G.x=parseFloat(H[1]),G.y=parseFloat(H[2]),G.z=parseFloat(H[3]),Z++;for(;(H=S.exec(N))!==null;)R.push(parseFloat(H[1]),parseFloat(H[2]),parseFloat(H[3])),L.push(G.x,G.y,G.z),it++,D++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),it!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const V=b,Q=D-b;g.userData.groupNames=U,g.addGroup(V,Q,B),B++}return g.setAttribute("position",new bi(R,3)),g.setAttribute("normal",new bi(L,3)),g}function f(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const g=new Uint8Array(d.length);for(let _=0;_<d.length;_++)g[_]=d.charCodeAt(_)&255;return g.buffer||g}else return d}const m=p(t);return i(m)?l(m):c(f(t))}}const m3="/Vibra-Web/",Tp=s=>`${m3}${String(s).replace(/^\/+/,"")}`,Cd=Tp("models/pad_2.stl"),wd=[Tp("models/Prototype-stripped.stl"),Tp("models/Protoype-stripped.stl")],$v=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[^a-z0-9]+/g,"");function ui(s,...t){if(!s)return null;const i=t.map($v);for(const r of Object.keys(s)){const l=$v(r);if(i.includes(l))return s[r]}return null}function fu(s){const t=Number(String(s??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}const Ap=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[\s\-]+/g,"");function g3(s){const i=String(s??"").toLowerCase().match(/(\d+)/),r=i?Number(i[1]):1;return Math.min(3,Math.max(0,r-1))}function _3(s){return new Promise((t,i)=>{new p3().load(s,t,void 0,i)})}async function tx(s,t){let i=null;for(const r of s)try{return t?.(r),{geom:await _3(r),url:r}}catch(l){i=l}throw i||new Error("All STL URLs failed")}function ex(s){const t=[new wn(0,0,0),new wn(-Math.PI/2,0,0),new wn(Math.PI/2,0,0),new wn(0,0,-Math.PI/2),new wn(0,0,Math.PI/2),new wn(0,-Math.PI/2,0),new wn(0,Math.PI/2,0)];let i=null,r=-1/0;for(const l of t){const c=s.clone();c.applyMatrix4(new Ke().makeRotationFromEuler(l)),c.computeBoundingBox();const f=new tt;c.boundingBox.getSize(f),f.y>r&&(r=f.y,i=c)}return i||s}function nx(s,t=1){const i=s.clone();i.computeBoundingBox();const r=i.boundingBox,l=new tt;r.getCenter(l);const c=r.min.y;i.translate(-l.x,-c,-l.z),i.computeBoundingBox();const f=new tt;i.boundingBox.getSize(f);const p=Math.max(f.x,f.y,f.z)||1,m=t/p;return i.computeVertexNormals(),{geom:i,scale:m}}const ix={hotspot:{title:"Hotspot Treatment",fixed:{label:"Bass Trap (Recommended)",desc:"Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",options:[{name:"Rockwool / Mineral Wool Corner Bass Trap",text:"Common DIY/pro option."},{name:"Foam Corner Bass Trap",text:"Easy to buy. Works mainly on mid/high-bass."},{name:"Panel Bass Trap",text:"Thicker wall panels placed at corners/first reflections."},{name:"Tube / Cylindrical Bass Trap",text:"Portable and repositionable."}],footnote:"Tip: Corner placement usually gives the biggest improvement for hotspots."}},deadspot:{title:"Deadspot Treatment",fixed:{label:"Diffuser (Recommended)",desc:"Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced.",options:[{name:"QRD Diffuser (1D)",text:"Common studio diffuser type."},{name:"Skyline Diffuser (2D)",text:"Scatters sound in many directions."},{name:"Poly / Curved Diffuser",text:"Smooth scattering (good for small rooms)."},{name:"Slat / Hybrid Diffuser Panel",text:"Hybrid look (wood slats + backing)."}],footnote:"Tip: Rear wall diffusion often helps deadspots."}}};function v3({rowsFor3D:s,spatial:t}){const i=Array.isArray(s)&&s.length>0,r=t?.qualified===!0,[l,c]=$.useState("all"),[f,p]=$.useState(!1),[m,d]=$.useState({hotspot:!1,deadspot:!1}),[g,_]=$.useState("before"),v=$.useMemo(()=>{const R=Array.isArray(s)?s:[];let L=0,U=0,G=0;for(const H of R){const B=Ap(ui(H,"Classification")??"");B.includes("hot")?L++:B.includes("dead")?U++:G++}return{hot:L,dead:U,neutral:G,total:R.length}},[s]),M=$.useMemo(()=>{const R=Array.isArray(s)?s:[];if(l==="all")return R;const L=l==="hotspot"?"hot":"dead";return R.filter(U=>Ap(ui(U,"Classification")).includes(L))},[s,l]);$.useEffect(()=>_("before"),[l]);const E=l==="hotspot"?ix.hotspot:l==="deadspot"?ix.deadspot:null,A=l==="hotspot"?m.hotspot:l==="deadspot"?m.deadspot:!1,S=i&&l!=="all"&&r,x=()=>{S&&(d(R=>l==="hotspot"?{...R,hotspot:!0}:l==="deadspot"?{...R,deadspot:!0}:R),_("after"))};return O.jsx("div",{className:"sim-slide sim-slide-2",children:O.jsxs("div",{className:"sim-row sim-row-2",children:[O.jsx("div",{className:"glass-card glass-card--bigLeft",children:O.jsxs("div",{className:"sim3d-card sim3d-card--three",children:[O.jsx(y3,{rowsFor3D:M,spatial:t,focusClass:l,viewMode:g,isApplied:A&&r}),O.jsxs("div",{className:"three-legend",children:[O.jsx("div",{className:"three-legend-title",children:"Legend (Click to filter)"}),O.jsxs("button",{type:"button",className:`legend-btn ${l==="hotspot"?"on":""}`,onClick:()=>c("hotspot"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-hot"})," Hotspot (",v.hot,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${l==="deadspot"?"on":""}`,onClick:()=>c("deadspot"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-dead"})," Deadspot (",v.dead,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${l==="all"?"on":""}`,onClick:()=>c("all"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-neutral"})," All (",v.total,")"]}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Hover a pad to view details"}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Layer 1 (bottom) → Layer 4 (top)"})]})]})}),O.jsxs("div",{className:"glass-card glass-card--recommend",children:[O.jsx("h2",{className:"card-title card-title--recommend",children:"RECOMMENDATION"}),O.jsxs("div",{className:"recommend-inner",children:[O.jsxs("div",{className:"recommend-toolbar",children:[O.jsx("button",{type:"button",className:`guide-btn ${f?"on":""}`,onClick:()=>p(R=>!R),children:f?"Hide Guide":"Guide"}),O.jsx("div",{className:"recommend-mini",children:i?O.jsxs(O.Fragment,{children:["Showing ",O.jsx("b",{children:M.length})," pad(s)"]}):O.jsx(O.Fragment,{children:"No deployed data"})})]}),f&&O.jsxs("div",{className:"guide-card",children:[O.jsx("div",{className:"guide-title",children:"How to use Slide 2"}),O.jsxs("ol",{className:"guide-list",children:[O.jsxs("li",{children:["Go to Slide 1 → Import CSV → then click ",O.jsx("b",{children:"Deploy"}),"."]}),O.jsxs("li",{children:["In Slide 2, click ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"}),"."]}),O.jsx("li",{children:"Read the treatment recommendation."}),O.jsxs("li",{children:["Click ",O.jsx("b",{children:"Apply Treatment"})," to preview “After” in 3D."]})]})]}),i?r?O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"select-card",children:[O.jsxs("div",{className:"select-title",children:["What you want to select: ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"}),"?"]}),O.jsxs("div",{className:"select-actions",children:[O.jsx("button",{type:"button",className:"select-btn",onClick:()=>c("hotspot"),children:"Select Hotspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>c("deadspot"),children:"Select Deadspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>c("all"),children:"Show All"})]}),O.jsx("div",{className:"select-hint",children:"You can also click the Legend inside the 3D panel."})]}),l==="all"?O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"Select one to continue"}),O.jsxs("div",{className:"info-text",children:["Choose ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"})," to show the recommended treatment and apply preview."]})]}):E&&O.jsxs("div",{className:"treat-card",children:[O.jsx("div",{className:"treat-title",children:E.title}),O.jsxs("div",{className:"treat-main",children:[O.jsx("div",{className:"treat-badge",children:E.fixed.label}),O.jsx("div",{className:"treat-desc",children:E.fixed.desc})]}),O.jsxs("div",{className:"treat-actions",children:[O.jsx("button",{type:"button",className:"apply-btn",onClick:x,disabled:!S||A,children:A?"Applied ✓":"Apply Treatment"}),O.jsxs("div",{className:"compare-toggle",children:[O.jsx("button",{type:"button",className:`compare-btn ${g==="before"?"on":""}`,onClick:()=>_("before"),children:"Before"}),O.jsx("button",{type:"button",className:`compare-btn ${g==="after"?"on":""}`,onClick:()=>_("after"),disabled:!A,children:"After"})]})]}),O.jsxs("div",{className:"recommend-card",style:{marginTop:14},children:[O.jsx("div",{className:"recommend-card-title",children:"Available Types (PH-friendly)"}),O.jsx("div",{className:"recommend-list",style:{marginTop:10},children:E.fixed.options.map(R=>O.jsxs("div",{className:"recommend-item",children:[O.jsx("div",{className:"recommend-item-name",children:R.name}),O.jsx("div",{className:"recommend-item-text",children:R.text})]},R.name))}),O.jsx("div",{className:"treat-footnote",children:E.fixed.footnote})]})]})]}):O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",style:{color:"#ff4d4d"},children:"No Recommendation"}),O.jsxs("div",{className:"info-text",children:["The room is ",O.jsx("b",{children:"NOT QUALIFIED"}),". Simulation is available, but recommendations are disabled."]})]}):O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"No data detected"}),O.jsxs("div",{className:"info-text",children:["Please import and deploy your data in ",O.jsx("b",{children:"Slide 1"})," first."]})]})]}),O.jsx("div",{className:"scroll-rail"}),O.jsx("div",{className:"scroll-thumb"})]})]})})}function x3({parent:s,lengthM:t,widthM:i,originX:r=0,originZ:l=0,minorCm:c=10,majorCm:f=50,y:p=.002}){if(!s)return;const m=new wa,d=t/2,g=i/2,_=c/100,v=new Wp({color:51455,transparent:!0,opacity:.15}),M=(E,A,S,x)=>{const R=new Jn().setFromPoints([new tt(E,p,A),new tt(S,p,x)]);return new qx(R,v)};for(let E=-d;E<=d;E+=_)m.add(M(E,-g,E,g));for(let E=-g;E<=g;E+=_)m.add(M(-d,E,d,E));s.add(m)}function S3({parent:s,lengthM:t,widthM:i,heightM:r,wallThickness:l=.05}){if(!s)return;const c=new wa,f=new Wp({color:58879,transparent:!0,opacity:.25}),p=new Jn().setFromPoints([new tt(-t/2,0,-i/2),new tt(-t/2,r,-i/2)]);c.add(new qx(p,f)),s.add(c)}function y3({rowsFor3D:s=[],spatial:t={},focusClass:i,viewMode:r,isApplied:l}){const c=$.useRef(null),[f,p]=$.useState({show:!1,x:0,y:0,text:""}),[m,d]=$.useState("Initializing 3D…"),[g,_]=$.useState(0),[v,M]=$.useState(0),[E,A]=$.useState({x:0,z:0}),S=$.useRef({renderer:null,scene:null,camera:null,controls:null,roomGroup:null,padsGroup:null,protoGroup:null}),x=$.useRef(new aA),R=$.useRef(new ue),L=$.useRef(0),U=$.useRef(""),G=$.useRef({ready:!1,geom:null,baseScale:1,fixYaw:0}),H=$.useRef({mesh:null,loaded:!1,fallbackBox:null}),B=$.useRef({hot:new ds({color:8129026,emissive:8129026,emissiveIntensity:.55,roughness:.35,metalness:.05}),dead:new ds({color:937106,emissive:937106,emissiveIntensity:.55,roughness:.35,metalness:.05}),neutral:new ds({color:15790320,emissive:15790320,emissiveIntensity:.12,roughness:.55,metalness:.02}),treated:new ds({color:3066993,emissive:3066993,emissiveIntensity:.45,roughness:.45,metalness:.02}),floor:new ds({color:14540253,transparent:!0,opacity:.92}),wall:new ds({color:16777215,transparent:!0,opacity:.25,side:Yi}),proto:new ds({color:16090919,roughness:.65,metalness:.25})});return $.useEffect(()=>{const b=c.current;if(!b)return;const D=b.clientWidth,nt=b.clientHeight;if(!D||!nt){d("3D mount has 0 width/height. Fix CSS height of .three-mount.");return}const P=new $w({antialias:!0,alpha:!0});P.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),P.setSize(D,nt),P.setClearAlpha(0),b.appendChild(P.domElement);const V=new DT,Q=new Ei(60,D/nt,.05,200);Q.position.set(0,2.5,4);const it=new e3(Q,P.domElement);it.enableDamping=!0,it.dampingFactor=.08,V.add(new eA(16777215,.75));const Z=new tA(16777215,1.1);Z.position.set(6,9,6),V.add(Z);const N=new wa,z=new wa,et=new wa;V.add(N),V.add(z),V.add(et),S.current={renderer:P,scene:V,camera:Q,controls:it,roomGroup:N,padsGroup:z,protoGroup:et},d("3D ready. Loading models…");const ut=new ResizeObserver(()=>{const Et=b.clientWidth,Lt=b.clientHeight;P.setSize(Et,Lt),Q.aspect=Et/Lt,Q.updateProjectionMatrix()});ut.observe(b);const Mt=Et=>{const Lt=P.domElement.getBoundingClientRect(),st=Et.clientX-Lt.left,vt=Et.clientY-Lt.top;L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{R.current.set(st/Lt.width*2-1,-(vt/Lt.height*2-1)),x.current.setFromCamera(R.current,Q);const At=x.current.intersectObjects(z.children,!1);if(!At.length){f.show&&p(ce=>({...ce,show:!1})),U.current="";return}const zt=At[0].object,jt=zt?.userData?.row;if(!jt)return;const Fe=[`#${(zt.userData.index??0)+1}`,`Layer: ${ui(jt,"Layer")??"-"}`,`Angle: ${ui(jt,"Angle")??"-"}`,`Ultrasonic: ${ui(jt,"Ultrasonic","Distance","UTV")??"-"}`,`Decibel: ${ui(jt,"Decibel","DB","dB")??"-"}`,`RT60: ${ui(jt,"RT60","Reverberation")??"-"}`,`Classification: ${ui(jt,"Classification")??"-"}`].join(`
`);Fe!==U.current||!f.show?(U.current=Fe,p({show:!0,x:st+14,y:vt+14,text:Fe})):p(ce=>({...ce,x:st+14,y:vt+14}))})},I=()=>{L.current&&cancelAnimationFrame(L.current),L.current=0,U.current="",p(Et=>Et.show?{...Et,show:!1}:Et)};P.domElement.addEventListener("pointermove",Mt),P.domElement.addEventListener("pointerleave",I);let Y=0;const _t=()=>{Y=requestAnimationFrame(_t),it.update(),P.render(V,Q)};return _t(),()=>{cancelAnimationFrame(Y),ut.disconnect(),P.domElement.removeEventListener("pointermove",Mt),P.domElement.removeEventListener("pointerleave",I),it.dispose(),P.dispose(),P.domElement&&b.contains(P.domElement)&&b.removeChild(P.domElement)}},[]),$.useEffect(()=>{const{roomGroup:b}=S.current;if(!b)return;b.clear();const D=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:3,nt=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3,P=fu(t?.heightRaw),V=P!=null?P/100:2.6,Q=new Cn(new Tl(D,nt),B.current.floor);Q.rotation.x=-Math.PI/2,b.add(Q);const it=.05,Z=B.current.wall,N=new Cn(new qi(D,V,it),Z);N.position.set(0,V/2,-nt/2),b.add(N);const z=new Cn(new qi(D,V,it),Z);z.position.set(0,V/2,nt/2),b.add(z);const et=new Cn(new qi(it,V,nt),Z);et.position.set(-D/2,V/2,0),b.add(et);const ut=new Cn(new qi(it,V,nt),Z);ut.position.set(D/2,V/2,0),b.add(ut),x3({parent:b,lengthM:D,widthM:nt,originX:E.x,originZ:E.z,minorCm:10,majorCm:50,y:.002}),S3({parent:b,lengthM:D,widthM:nt,heightM:V,wallThickness:it})},[t,E]),$.useEffect(()=>{let b=!1;return(async()=>{if(!G.current.ready)try{d("Loading pad_2.stl…");const{geom:D}=await tx([Cd],N=>d(`Loading pad… ${N.split("/").slice(-1)[0]}`));if(b)return;const nt=ex(D),{geom:P,scale:V}=nx(nt,1);P.computeBoundingBox();const Q=new tt;P.boundingBox.getSize(Q);const Z=(Q.x<=Q.z?"x":"z")==="x"?-Math.PI/2:0;G.current.geom=P,G.current.baseScale=V,G.current.fixYaw=Z,G.current.ready=!0,_(N=>N+1),d("pad_2.stl loaded ✅")}catch(D){console.error("[Pad] load failed ❌",D),d(`FAILED to load pad_2.stl. Check DevTools > Network if ${Cd} is 404.`)}})(),()=>{b=!0}},[]),$.useEffect(()=>{let b=!1;return(async()=>{const{protoGroup:D}=S.current;if(!D||H.current.loaded)return;const nt=new Cn(new qi(.25,.25,.25),new ds({color:16090919}));nt.position.set(0,.125,0),D.add(nt),H.current.fallbackBox=nt;try{const{geom:P,url:V}=await tx(wd,z=>d(`Loading prototype… trying ${z.split("/").slice(-1)[0]}`));if(b)return;const Q=ex(P),{geom:it,scale:Z}=nx(Q,1.8),N=new Cn(it,B.current.proto);N.scale.setScalar(Z),D.clear(),D.add(N),H.current.mesh=N,H.current.loaded=!0,M(z=>z+1),d(`prototype loaded ✅ (${V.split("/").slice(-1)[0]})`)}catch(P){console.error("[Prototype] load failed ❌",P),d("FAILED to load prototype STL. Put it in /public/models and check filename case (Prototype vs Protoype).")}})(),()=>{b=!0}},[]),$.useEffect(()=>{const{padsGroup:b,camera:D,controls:nt}=S.current;if(!b||!D||!nt)return;b.clear();const P=Array.isArray(s)?s:[];if(!P.length){d("No data rows to deploy.");return}if(!G.current.ready||!G.current.geom){d("Waiting for pad_2.stl to load…");return}d(`Deploying ${P.length} pads…`);const V=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:3,Q=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3,it=.18,Z=V/2-it,N=Q/2-it,et=(Math.max(...P.map(he=>fu(ui(he,"Ultrasonic","Distance","Ultrasonic(cm)","UTV"))??0))||0)>=20?1:30,ut=Math.max(6,Math.ceil(Math.sqrt(P.length))),Mt=Z*2/(ut+1),I=N*2/(ut+1);let Y=-1/0,_t=1/0,Et=-1/0,Lt=1/0;const st=new tt(0,0,0);let vt=0;const At=.22,zt=.45,jt=.02,$t=i==="hotspot"?"hot":i==="deadspot"?"dead":null,Fe=[];P.forEach((he,Gt)=>{const F=fu(ui(he,"Angle")),T=fu(ui(he,"Ultrasonic","Distance","Ultrasonic(cm)","UTV"));let K,mt;if(F!=null&&T!=null&&T>0){const Tt=F*Math.PI/180,bt=T/100*et;K=fl.clamp(Math.sin(Tt)*bt,-Z,Z),mt=fl.clamp(-Math.cos(Tt)*bt,-N,N)}else{const Tt=Math.floor(Gt/ut),bt=Gt%ut;K=-Z+Mt*(bt+1),mt=-N+I*(Tt+1)}const yt=g3(ui(he,"Layer")??"Layer 1"),dt=jt+yt*zt;Y=Math.max(Y,mt),_t=Math.min(_t,mt),Et=Math.max(Et,K),Lt=Math.min(Lt,K),st.add(new tt(K,0,mt)),vt++;const Vt=Ap(ui(he,"Classification")??"neutral");let wt=Vt.includes("hot")?B.current.hot:Vt.includes("dead")?B.current.dead:B.current.neutral;r==="after"&&l&&$t&&Vt.includes($t)&&(wt=B.current.treated);const Zt=new Cn(G.current.geom.clone(),wt),te=G.current.baseScale*At;Zt.scale.setScalar(te),Zt.position.set(K,dt,mt),Zt.userData={row:he,index:Gt},b.add(Zt),Fe.push(Zt)});const ce=vt?st.multiplyScalar(1/vt):new tt(0,0,0),fe=fl.clamp(ce.x,-Z+.2,Z-.2),Ee=fl.clamp(ce.z,-N+.2,N-.2);H.current.mesh?H.current.mesh.position.set(fe,0,Ee):H.current.fallbackBox&&H.current.fallbackBox.position.set(fe,.125,Ee),A({x:fe,z:Ee});for(const he of Fe){const Gt=fe-he.position.x,F=Ee-he.position.z;let T=Math.atan2(Gt,F);T+=G.current.fixYaw||0,he.rotation.set(0,T,0)}const se=Et-Lt+.6,Ye=Y-_t+.6,X=(Et+Lt)/2,je=(Y+_t)/2,Se=Math.max(se,Ye,3);D.position.set(X,Se*.9,je+Se*1.3),nt.target.set(X,1.1,je),nt.update(),d(`Deployed ✅ ${P.length} pads`)},[s,t,g,v,i,r,l]),O.jsxs("div",{ref:c,className:"three-mount",style:{position:"relative"},children:[O.jsxs("div",{style:{position:"absolute",left:10,top:10,padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,0.45)",color:"white",fontSize:12,zIndex:30,pointerEvents:"none",maxWidth:420},children:[m,O.jsxs("div",{style:{opacity:.85,marginTop:4},children:["PAD_URL: ",Cd,O.jsx("br",{}),"PROTO: ",wd[0]," / ",wd[1]]})]}),f.show&&O.jsx("div",{style:{position:"absolute",left:f.x,top:f.y,whiteSpace:"pre-line",padding:"10px 12px",borderRadius:12,background:"rgba(0,0,0,0.55)",color:"white",fontSize:12,textAlign:"left",lineHeight:1.35,pointerEvents:"none",maxWidth:260,zIndex:20},children:f.text})]})}const _s=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function ax(s){const t=Number(String(s??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}function M3(s,t){if(!t?.length)return;const i=Object.keys(t[0]||{}),r=p=>{const m=String(p??"");return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=[i.join(","),...t.map(p=>i.map(m=>r(p[m])).join(","))].join(`
`),c=new Blob([l],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");f.href=URL.createObjectURL(c),f.download=s,document.body.appendChild(f),f.click(),document.body.removeChild(f)}const E3=s=>s==null?null:(s%360+360)%360,b3=(s,t,i=3)=>{if(s==null)return null;const r=E3(s);let l=null,c=1/0;for(const f of t){const p=Math.min(Math.abs(r-f),360-Math.abs(r-f));p<c&&(c=p,l=f)}return c<=i?l:null};function hu(s,t,i=3){const r=["Layer 1","Layer 2","Layer 3","Layer 4"],l=[0,90,180,271];for(const c of r){const f=s.filter(p=>_s(p.Layer)===_s(c));for(const p of f){const m=ax(p.Angle);if(b3(m,l,i)!==t)continue;const g=ax(p.Ultrasonic);if(g!=null)return{value:g,fromLayer:c}}}return{value:null,fromLayer:""}}function T3(){const s=$.useMemo(()=>[0,1],[]),[t,i]=$.useState(0),[r,l]=$.useState(!1);$.useEffect(()=>l(!0),[]);const[c,f]=$.useState([]),[p,m]=$.useState([]),[d,g]=$.useState({type:"idle",message:""}),[_,v]=$.useState(""),[M,E]=$.useState(""),[A,S]=$.useState(null),x=$.useMemo(()=>{let b=[...c];if(A){const[D,nt]=String(A).split(":");if(D==="layer"&&(b=b.filter(P=>_s(P.Layer)===_s(nt))),D==="class"){const P=_s(nt).replace(/[\s\-]+/g,"");b=b.filter(V=>_s(String(V.Classification)).replace(/[\s\-]+/g,"")===P)}}if(M.trim()){const D=_s(M);b=b.filter(nt=>Object.values(nt).some(P=>_s(P).includes(D)))}return b},[c,M,A]),R=$.useMemo(()=>{const b=hu(c,0,3),D=hu(c,180,3),nt=hu(c,90,3),P=hu(c,271,3),V=b.value,Q=D.value,it=nt.value,Z=P.value,N=V!=null&&Q!=null?V+Q:null,z=it!=null&&Z!=null?it+Z:null,ut=(c.find(Et=>String(Et.HeightRaw??"").trim()!=="")||null)?.HeightRaw??"",Mt=N==null?null:N/100,I=z==null?null:z/100,Y=Mt!=null&&I!=null?Mt*I:null,_t=Y!=null?Y>=3&&Y<=5:null;return{lengthCm:N,widthCm:z,heightRaw:ut,area:Y,qualified:_t,debug:{u0:V,u0From:b.fromLayer,u180:Q,u180From:D.fromLayer,u90:it,u90From:nt.fromLayer,u271:Z,u271From:P.fromLayer}}},[c]),L=()=>i(b=>Math.max(0,b-1)),U=()=>i(b=>Math.min(s.length-1,b+1)),G=()=>{f([]),m([]),v(""),E(""),S(null),g({type:"idle",message:""}),i(0)},H=()=>{m(x),i(1)},B=()=>M3("vibra_raw_parameters.csv",x);return O.jsxs("div",{className:`simulation-page ${r?"enter":""}`,children:[t===0?O.jsx(vb,{rawRows:c,setRawRows:f,displayedRows:x,searchInput:_,setSearchInput:v,setAppliedSearch:E,sortValue:A,setSortValue:S,onExport:B,onDeploy:H,onReset:G,spatial:R,uploadStatus:d,setUploadStatus:g}):O.jsx(v3,{rowsFor3D:p,spatial:R}),O.jsxs("div",{className:"sim-controls",children:[O.jsx("button",{className:"sim-arrow",onClick:L,disabled:t===0,children:"‹"}),O.jsx("div",{className:"sim-dots",children:s.map((b,D)=>O.jsx("span",{className:`sim-dot ${D===t?"on":""}`},D))}),O.jsx("button",{className:"sim-arrow",onClick:U,disabled:t===s.length-1,children:"›"})]})]})}function A3(){return O.jsxs("div",{className:"inst-page",children:[O.jsx("h1",{className:"inst-title",children:"INSTRUCTION"}),O.jsx("h3",{className:"inst-subtitle",children:"HOW TO USE VIBRA"}),O.jsxs("div",{className:"inst-grid",children:[O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"PROTOTYPE"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Power on the prototype device."}),O.jsx("li",{children:"Place the device at the center of the room."}),O.jsx("li",{children:"Rotate the device 360° to scan the environment."}),O.jsx("li",{children:"Allow sensors to collect dB, distance, and RT60 data."}),O.jsx("li",{children:"Ensure measurements are stable before recording."}),O.jsx("li",{children:"Export or upload the gathered data."})]})]}),O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"WEB APPLICATION"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Go to the SIMULATION page."}),O.jsx("li",{children:"Import data (Cloud or Local)."}),O.jsx("li",{children:"Verify Angle, dB, Ultrasonic, RT60 values."}),O.jsx("li",{children:"Select classification (Hotspot/Deadspot/Neutral)."}),O.jsx("li",{children:"Click DEPLOY to map the data."}),O.jsx("li",{children:"Review recommendations and apply treatments."})]})]})]})]})}const R3="https://docs.google.com/spreadsheets/d/15EzmUf5PyGhI88RAx5znaZDTGuw_GUc4OMXKJS_A2Pk/edit?gid=0#gid=0";function C3(){const[s,t]=$.useState(!1),[i,r]=$.useState(""),[l,c]=$.useState(""),[f,p]=$.useState(""),[m,d]=$.useState({type:"",text:""}),[g,_]=$.useState(!1);$.useEffect(()=>{t(!0)},[]);function v(E){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(E||"").trim())}async function M(E){if(E.preventDefault(),g)return;const A=i.trim(),S=l.trim(),x=f.trim();if(!A||!S||!x){d({type:"error",text:"Please fill out Name, Email, and Message."});return}if(!v(S)){d({type:"error",text:"Please enter a valid email address."});return}_(!0),d({type:"loading",text:"Sending..."});try{const R=await fetch(R3,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,email:S,message:x})});let L=null;const U=await R.text();try{L=JSON.parse(U)}catch{L={ok:R.ok}}if(!R.ok||!L?.ok)throw new Error(L?.error||"Failed to send message.");d({type:"success",text:"Message sent! Thanks for reaching out."}),r(""),c(""),p("")}catch(R){d({type:"error",text:"Could not send. If this keeps happening, check the Apps Script deployment access (Anyone) and the URL."}),console.error(R)}finally{_(!1),setTimeout(()=>d({type:"",text:""}),3500)}}return O.jsxs("div",{className:`contact-page ${s?"enter":""}`,children:[O.jsx("h1",{className:"contact-title",children:"CONTACT US"}),O.jsx("h3",{className:"contact-subtitle",children:"GET IN TOUCH"}),O.jsxs("div",{className:"contact-grid",children:[O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"EMAIL"}),O.jsx("div",{className:"contact-value",children:"vibra.project@email.com"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"SCHOOL"}),O.jsx("div",{className:"contact-value",children:"Technological Institute of the Philippines"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"LOCATION"}),O.jsx("div",{className:"contact-value",children:"Quezon City, Philippines"})]})]}),m.text&&O.jsx("div",{className:`contact-toast ${m.type}`,children:m.text}),O.jsxs("form",{className:"contact-form",onSubmit:M,children:[O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"NAME"}),O.jsx("input",{value:i,onChange:E=>r(E.target.value),placeholder:"Your name",autoComplete:"name"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"EMAIL"}),O.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Your email",autoComplete:"email"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"MESSAGE"}),O.jsx("textarea",{value:f,onChange:E=>p(E.target.value),placeholder:"Your message...",rows:6})]}),O.jsx("button",{className:"contact-btn",type:"submit",disabled:g,children:g?"SENDING...":"SEND"})]})]})}function w3(){return O.jsx(WE,{children:O.jsx(ME,{children:O.jsxs(ms,{element:O.jsx(ab,{}),children:[O.jsx(ms,{path:"/",element:O.jsx(sb,{})}),O.jsx(ms,{path:"/about",element:O.jsx(rb,{})}),O.jsx(ms,{path:"/team",element:O.jsx(db,{})}),O.jsx(ms,{path:"/simulation",element:O.jsx(T3,{})}),O.jsx(ms,{path:"/instruction",element:O.jsx(A3,{})}),O.jsx(ms,{path:"/contact",element:O.jsx(C3,{})})]})})})}MM.createRoot(document.getElementById("root")).render(O.jsx(pM.StrictMode,{children:O.jsx(w3,{})}));
