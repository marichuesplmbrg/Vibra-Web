(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function lx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Hh={exports:{}},el={};var L_;function pM(){if(L_)return el;L_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return el.Fragment=t,el.jsx=i,el.jsxs=i,el}var N_;function mM(){return N_||(N_=1,Hh.exports=pM()),Hh.exports}var O=mM(),Gh={exports:{}},ce={};var U_;function gM(){if(U_)return ce;U_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function S(P,Y,_t){this.props=P,this.context=Y,this.refs=x,this.updater=_t||E}S.prototype.isReactComponent={},S.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=S.prototype;function N(P,Y,_t){this.props=P,this.context=Y,this.refs=x,this.updater=_t||E}var L=N.prototype=new R;L.constructor=N,A(L,S.prototype),L.isPureReactComponent=!0;var G=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,Y,_t){var Rt=_t.ref;return{$$typeof:s,type:P,key:Y,ref:Rt!==void 0?Rt:null,props:_t}}function Q(P,Y){return D(P.type,Y,P.props)}function F(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function X(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return Y[_t]})}var et=/\/+/g;function k(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?X(""+P.key):Y.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,Y,_t,Rt,Lt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var gt=!1;if(P===null)gt=!0;else switch(at){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(P.$$typeof){case s:case t:gt=!0;break;case g:return gt=P._init,U(gt(P._payload),Y,_t,Rt,Lt)}}if(gt)return Lt=Lt(P),gt=Rt===""?"."+k(P,0):Rt,G(Lt)?(_t="",gt!=null&&(_t=gt.replace(et,"$&/")+"/"),U(Lt,Y,_t,"",function(Kt){return Kt})):Lt!=null&&(F(Lt)&&(Lt=Q(Lt,_t+(Lt.key==null||P&&P.key===Lt.key?"":(""+Lt.key).replace(et,"$&/")+"/")+gt)),Y.push(Lt)),1;gt=0;var Et=Rt===""?".":Rt+":";if(G(P))for(var zt=0;zt<P.length;zt++)Rt=P[zt],at=Et+k(Rt,zt),gt+=U(Rt,Y,_t,at,Lt);else if(zt=y(P),typeof zt=="function")for(P=zt.call(P),zt=0;!(Rt=P.next()).done;)Rt=Rt.value,at=Et+k(Rt,zt++),gt+=U(Rt,Y,_t,at,Lt);else if(at==="object"){if(typeof P.then=="function")return U(Z(P),Y,_t,Rt,Lt);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return gt}function I(P,Y,_t){if(P==null)return P;var Rt=[],Lt=0;return U(P,Rt,"","",function(at){return Y.call(_t,at,Lt++)}),Rt}function it(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var ht=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},St={map:I,forEach:function(P,Y,_t){I(P,function(){Y.apply(this,arguments)},_t)},count:function(P){var Y=0;return I(P,function(){Y++}),Y},toArray:function(P){return I(P,function(Y){return Y})||[]},only:function(P){if(!F(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ce.Activity=_,ce.Children=St,ce.Component=S,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ce.cache=function(P){return function(){return P.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(P,Y,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=A({},P.props),Lt=P.key;if(Y!=null)for(at in Y.key!==void 0&&(Lt=""+Y.key),Y)!T.call(Y,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Y.ref===void 0||(Rt[at]=Y[at]);var at=arguments.length-2;if(at===1)Rt.children=_t;else if(1<at){for(var gt=Array(at),Et=0;Et<at;Et++)gt[Et]=arguments[Et+2];Rt.children=gt}return D(P.type,Lt,Rt)},ce.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ce.createElement=function(P,Y,_t){var Rt,Lt={},at=null;if(Y!=null)for(Rt in Y.key!==void 0&&(at=""+Y.key),Y)T.call(Y,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=Y[Rt]);var gt=arguments.length-2;if(gt===1)Lt.children=_t;else if(1<gt){for(var Et=Array(gt),zt=0;zt<gt;zt++)Et[zt]=arguments[zt+2];Lt.children=Et}if(P&&P.defaultProps)for(Rt in gt=P.defaultProps,gt)Lt[Rt]===void 0&&(Lt[Rt]=gt[Rt]);return D(P,at,Lt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(P){return{$$typeof:p,render:P}},ce.isValidElement=F,ce.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:it}},ce.memo=function(P,Y){return{$$typeof:d,type:P,compare:Y===void 0?null:Y}},ce.startTransition=function(P){var Y=z.T,_t={};z.T=_t;try{var Rt=P(),Lt=z.S;Lt!==null&&Lt(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(H,ht)}catch(at){ht(at)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),z.T=Y}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(P){return z.H.use(P)},ce.useActionState=function(P,Y,_t){return z.H.useActionState(P,Y,_t)},ce.useCallback=function(P,Y){return z.H.useCallback(P,Y)},ce.useContext=function(P){return z.H.useContext(P)},ce.useDebugValue=function(){},ce.useDeferredValue=function(P,Y){return z.H.useDeferredValue(P,Y)},ce.useEffect=function(P,Y){return z.H.useEffect(P,Y)},ce.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(P,Y,_t){return z.H.useImperativeHandle(P,Y,_t)},ce.useInsertionEffect=function(P,Y){return z.H.useInsertionEffect(P,Y)},ce.useLayoutEffect=function(P,Y){return z.H.useLayoutEffect(P,Y)},ce.useMemo=function(P,Y){return z.H.useMemo(P,Y)},ce.useOptimistic=function(P,Y){return z.H.useOptimistic(P,Y)},ce.useReducer=function(P,Y,_t){return z.H.useReducer(P,Y,_t)},ce.useRef=function(P){return z.H.useRef(P)},ce.useState=function(P){return z.H.useState(P)},ce.useSyncExternalStore=function(P,Y,_t){return z.H.useSyncExternalStore(P,Y,_t)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.2.4",ce}var O_;function Lp(){return O_||(O_=1,Gh.exports=gM()),Gh.exports}var $=Lp();const _M=lx($);var Vh={exports:{}},nl={},kh={exports:{}},Xh={};var P_;function vM(){return P_||(P_=1,(function(s){function t(U,I){var it=U.length;U.push(I);t:for(;0<it;){var ht=it-1>>>1,St=U[ht];if(0<l(St,I))U[ht]=I,U[it]=St,it=ht;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var I=U[0],it=U.pop();if(it!==I){U[0]=it;t:for(var ht=0,St=U.length,P=St>>>1;ht<P;){var Y=2*(ht+1)-1,_t=U[Y],Rt=Y+1,Lt=U[Rt];if(0>l(_t,it))Rt<St&&0>l(Lt,_t)?(U[ht]=Lt,U[Rt]=it,ht=Rt):(U[ht]=_t,U[Y]=it,ht=Y);else if(Rt<St&&0>l(Lt,it))U[ht]=Lt,U[Rt]=it,ht=Rt;else break t}}return I}function l(U,I){var it=U.sortIndex-I.sortIndex;return it!==0?it:U.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,_=null,v=3,y=!1,E=!1,A=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var I=i(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=U)r(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(d)}}function G(U){if(A=!1,L(U),!E)if(i(m)!==null)E=!0,H||(H=!0,X());else{var I=i(d);I!==null&&Z(G,I.startTime-U)}}var H=!1,z=-1,T=5,D=-1;function Q(){return x?!0:!(s.unstable_now()-D<T)}function F(){if(x=!1,H){var U=s.unstable_now();D=U;var I=!0;try{t:{E=!1,A&&(A=!1,R(z),z=-1),y=!0;var it=v;try{e:{for(L(U),_=i(m);_!==null&&!(_.expirationTime>U&&Q());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var St=ht(_.expirationTime<=U);if(U=s.unstable_now(),typeof St=="function"){_.callback=St,L(U),I=!0;break e}_===i(m)&&r(m),L(U)}else r(m);_=i(m)}if(_!==null)I=!0;else{var P=i(d);P!==null&&Z(G,P.startTime-U),I=!1}}break t}finally{_=null,v=it,y=!1}I=void 0}}finally{I?X():H=!1}}}var X;if(typeof N=="function")X=function(){N(F)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,k=et.port2;et.port1.onmessage=F,X=function(){k.postMessage(null)}}else X=function(){S(F,0)};function Z(U,I){z=S(function(){U(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(U){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var it=v;v=I;try{return U()}finally{v=it}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var it=v;v=U;try{return I()}finally{v=it}},s.unstable_scheduleCallback=function(U,I,it){var ht=s.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ht+it:ht):it=ht,U){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=it+St,U={id:g++,callback:I,priorityLevel:U,startTime:it,expirationTime:St,sortIndex:-1},it>ht?(U.sortIndex=it,t(d,U),i(m)===null&&U===i(d)&&(A?(R(z),z=-1):A=!0,Z(G,it-ht))):(U.sortIndex=St,t(m,U),E||y||(E=!0,H||(H=!0,X()))),U},s.unstable_shouldYield=Q,s.unstable_wrapCallback=function(U){var I=v;return function(){var it=v;v=I;try{return U.apply(this,arguments)}finally{v=it}}}})(Xh)),Xh}var F_;function xM(){return F_||(F_=1,kh.exports=vM()),kh.exports}var jh={exports:{}},Nn={};var I_;function SM(){if(I_)return Nn;I_=1;var s=Lp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=g,r.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var B_;function yM(){if(B_)return jh.exports;B_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),jh.exports=SM(),jh.exports}var z_;function MM(){if(z_)return nl;z_=1;var s=xM(),t=Lp(),i=yM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=h;break}if(C===o){M=!0,o=u,a=h;break}C=C.sibling}if(!M){for(C=h.child;C;){if(C===a){M=!0,a=h,o=u;break}if(C===o){M=!0,o=h,a=u;break}C=C.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case S:return"Profiler";case x:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:k(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return k(e(n))}catch{}}return null}var Z=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},ht=[],St=-1;function P(e){return{current:e}}function Y(e){0>St||(e.current=ht[St],ht[St]=null,St--)}function _t(e,n){St++,ht[St]=e.current,e.current=n}var Rt=P(null),Lt=P(null),at=P(null),gt=P(null);function Et(e,n){switch(_t(at,n),_t(Lt,e),_t(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?t_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=t_(n),e=e_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Rt),_t(Rt,e)}function zt(){Y(Rt),Y(Lt),Y(at)}function Kt(e){e.memoizedState!==null&&_t(gt,e);var n=Rt.current,a=e_(n,e.type);n!==a&&(_t(Lt,e),_t(Rt,a))}function Yt(e){Lt.current===e&&(Y(Rt),Y(Lt)),gt.current===e&&(Y(gt),Qo._currentValue=it)}var je,re;function oe(e){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+re}var Ne=!1;function ue(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var ct=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){ct=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],C=h[1];if(M&&C){var V=M.split(`
`),ot=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ot.length)for(o=V.length-1,u=ot.length-1;1<=o&&0<=u&&V[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ot[u]){var mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return oe("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,be=s.unstable_scheduleCallback,Oe=s.unstable_cancelCallback,qt=s.unstable_shouldYield,B=s.unstable_requestPaint,b=s.unstable_now,J=s.unstable_getCurrentPriorityLevel,vt=s.unstable_ImmediatePriority,Mt=s.unstable_UserBlockingPriority,pt=s.unstable_NormalPriority,jt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Jt=s.log,ee=s.unstable_setDisableYieldValue,At=null,bt=null;function Ft(e){if(typeof Jt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(At,e)}catch{}}var Pt=Math.clz32?Math.clz32:K,It=Math.log,de=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(It(e)/de|0)|0}var wt=256,Ct=262144,Bt=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=Tt(o):(M&=C,M!==0?u=Tt(M):a||(a=C&~e,a!==0&&(u=Tt(a))))):(C=o&~h,C!==0?u=Tt(C):M!==0?u=Tt(M):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Pt(a),yt=1<<mt;C[mt]=0,V[mt]=-1;var ct=ot[mt];if(ct!==null)for(ot[mt]=null,mt=0;mt<ct.length;mt++){var ft=ct[mt];ft!==null&&(ft.lane&=-536870913)}a&=~yt}o!==0&&fo(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function fo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function tr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Rl(e,n){var a=n&-n;return a=(a&42)!==0?1:er(a),(a&(e.suspendedLanes|n))!==0?0:a}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function ir(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Ri=Math.random().toString(36).slice(2),on="__reactFiber$"+Ri,mn="__reactProps$"+Ri,na="__reactContainer$"+Ri,Fa="__reactEvents$"+Ri,Cl="__reactListeners$"+Ri,wl="__reactHandles$"+Ri,Dl="__reactResources$"+Ri,Es="__reactMarker$"+Ri;function ho(e){delete e[on],delete e[mn],delete e[Fa],delete e[Cl],delete e[wl]}function Ia(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[na]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=l_(e);e!==null;){if(a=e[on])return a;e=l_(e)}return n}e=a,a=e.parentNode}return null}function Ba(e){if(e=e[on]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function bs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[Dl];return n||(n=e[Dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[Es]=!0}var ut=new Set,lt={};function st(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(lt[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function Qt(e){return Ze.call(Wt,e)?!0:Ze.call(Ut,e)?!1:Ht.test(e)?Wt[e]=!0:(Ut[e]=!0,!1)}function ie(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function se(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,h,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ci(e,M,pe(n)):a!=null?Ci(e,M,pe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+pe(C):e.removeAttribute("name")}function ti(e,n,a,o,u,h,M,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){we(e);return}a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),we(e)}function Ci(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ei(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ia(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wi(e,h,n[h])}function ar(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return fS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Fu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,rr=null;function $p(e){var n=Ba(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(r(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&gn(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ei(e,!!a.multiple,n,!1)}}}var Bu=!1;function tm(e,n,a){if(Bu)return e(n,a);Bu=!0;try{var o=e(n);return o}finally{if(Bu=!1,(sr!==null||rr!==null)&&(vc(),sr&&(n=sr,e=rr,rr=sr=null,$p(n),e)))for(n=0;n<e.length;n++)$p(e[n])}}function po(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(sa)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){zu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{zu=!1}var za=null,Hu=null,Nl=null;function em(){if(Nl)return Nl;var e,n=Hu,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return Nl=u.slice(e,1<o?1-o:void 0)}function Ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function nm(){return!1}function Wn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ol:nm,this.isPropagationStopped=nm,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Wn(Ts),go=_({},Ts,{view:0,detail:0}),hS=Wn(go),Gu,Vu,_o,Fl=_({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Gu=e.screenX-_o.screenX,Vu=e.screenY-_o.screenY):Vu=Gu=0,_o=e),Gu)},movementY:function(e){return"movementY"in e?e.movementY:Vu}}),im=Wn(Fl),dS=_({},Fl,{dataTransfer:0}),pS=Wn(dS),mS=_({},go,{relatedTarget:0}),ku=Wn(mS),gS=_({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Wn(gS),vS=_({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xS=Wn(vS),SS=_({},Ts,{data:0}),am=Wn(SS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ES[e])?!!n[e]:!1}function Xu(){return bS}var TS=_({},go,{key:function(e){if(e.key){var n=yS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?MS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AS=Wn(TS),RS=_({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Wn(RS),CS=_({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),wS=Wn(CS),DS=_({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Wn(DS),NS=_({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Wn(NS),OS=_({},Ts,{newState:0,oldState:0}),PS=Wn(OS),FS=[9,13,27,32],ju=sa&&"CompositionEvent"in window,vo=null;sa&&"documentMode"in document&&(vo=document.documentMode);var IS=sa&&"TextEvent"in window&&!vo,rm=sa&&(!ju||vo&&8<vo&&11>=vo),om=" ",lm=!1;function cm(e,n){switch(e){case"keyup":return FS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function BS(e,n){switch(e){case"compositionend":return um(n);case"keypress":return n.which!==32?null:(lm=!0,om);case"textInput":return e=n.data,e===om&&lm?null:e;default:return null}}function zS(e,n){if(or)return e==="compositionend"||!ju&&cm(e,n)?(e=em(),Nl=Hu=za=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rm&&n.locale!=="ko"?null:n.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!HS[e.type]:n==="textarea"}function hm(e,n,a,o){sr?rr?rr.push(o):rr=[o]:sr=o,n=Tc(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var xo=null,So=null;function GS(e){q0(e,0)}function Il(e){var n=bs(e);if(gn(n))return e}function dm(e,n){if(e==="change")return n}var pm=!1;if(sa){var Wu;if(sa){var Yu="oninput"in document;if(!Yu){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Yu=typeof mm.oninput=="function"}Wu=Yu}else Wu=!1;pm=Wu&&(!document.documentMode||9<document.documentMode)}function gm(){xo&&(xo.detachEvent("onpropertychange",_m),So=xo=null)}function _m(e){if(e.propertyName==="value"&&Il(So)){var n=[];hm(n,So,e,Iu(e)),tm(GS,n)}}function VS(e,n,a){e==="focusin"?(gm(),xo=n,So=a,xo.attachEvent("onpropertychange",_m)):e==="focusout"&&gm()}function kS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(So)}function XS(e,n){if(e==="click")return Il(n)}function jS(e,n){if(e==="input"||e==="change")return Il(n)}function WS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:WS;function yo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ze.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xm(e,n){var a=vm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vm(a)}}function Sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ym(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var YS=sa&&"documentMode"in document&&11>=document.documentMode,lr=null,Zu=null,Mo=null,Ku=!1;function Mm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||lr==null||lr!==Xt(o)||(o=lr,"selectionStart"in o&&qu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&yo(Mo,o)||(Mo=o,o=Tc(Zu,"onSelect"),0<o.length&&(n=new Pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=lr)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var cr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Qu={},Em={};sa&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Rs(e){if(Qu[e])return Qu[e];if(!cr[e])return e;var n=cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Em)return Qu[e]=n[a];return e}var bm=Rs("animationend"),Tm=Rs("animationiteration"),Am=Rs("animationstart"),qS=Rs("transitionrun"),ZS=Rs("transitionstart"),KS=Rs("transitioncancel"),Rm=Rs("transitionend"),Cm=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Di(e,n){Cm.set(e,n),st(n,[e])}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],ur=0,$u=0;function zl(){for(var e=ur,n=$u=ur=0;n<e;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var h=pi[n];if(pi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&wm(a,u,h)}}function Hl(e,n,a,o){pi[ur++]=e,pi[ur++]=n,pi[ur++]=a,pi[ur++]=o,$u|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function tf(e,n,a,o){return Hl(e,n,a,o),Gl(e)}function Cs(e,n){return Hl(e,null,null,n),Gl(e)}function wm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Gl(e){if(50<Xo)throw Xo=0,uh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fr={};function QS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new QS(e,n,a,o)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")ef(e)&&(M=1);else if(typeof e=="string")M=nM(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ii(31,a,n,u),e.elementType=D,e.lanes=h,e;case A:return ws(a.children,u,h,n);case x:M=8,u|=24;break;case S:return e=ii(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case G:return e=ii(13,a,n,u),e.elementType=G,e.lanes=h,e;case H:return e=ii(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:M=10;break t;case R:M=9;break t;case L:M=11;break t;case z:M=14;break t;case T:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ii(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ws(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function nf(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Lm(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function af(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nm=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var hr=[],dr=0,kl=null,Eo=0,gi=[],_i=0,Ha=null,Hi=1,Gi="";function oa(e,n){hr[dr++]=Eo,hr[dr++]=kl,kl=e,Eo=n}function Um(e,n,a){gi[_i++]=Hi,gi[_i++]=Gi,gi[_i++]=Ha,Ha=e;var o=Hi;e=Gi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Hi=1<<32-Pt(n)+u|a<<u|o,Gi=h+e}else Hi=1<<h|a<<u|o,Gi=e}function sf(e){e.return!==null&&(oa(e,1),Um(e,1,0))}function rf(e){for(;e===kl;)kl=hr[--dr],hr[dr]=null,Eo=hr[--dr],hr[dr]=null;for(;e===Ha;)Ha=gi[--_i],gi[_i]=null,Gi=gi[--_i],gi[_i]=null,Hi=gi[--_i],gi[_i]=null}function Om(e,n){gi[_i++]=Hi,gi[_i++]=Gi,gi[_i++]=Ha,Hi=n.id,Gi=n.overflow,Ha=e}var En=null,We=null,Ee=!1,Ga=null,vi=!1,of=Error(r(519));function Va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(mi(n,e)),of}function Pm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[mn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Se(Wo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),ti(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||J0(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Va(e,!0)}function Fm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:En=En.return}}function pr(e){if(e!==En)return!1;if(!Ee)return Fm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Th(e.type,e.memoizedProps)),a=!a),a&&We&&Va(e),Fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=o_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=o_(e)}else n===27?(n=We,ns(e.type)?(e=Dh,Dh=null,We=e):We=n):We=En?Si(e.stateNode.nextSibling):null;return!0}function Ds(){We=En=null,Ee=!1}function lf(){var e=Ga;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ga=null),e}function bo(e){Ga===null?Ga=[e]:Ga.push(e)}var cf=P(null),Ls=null,la=null;function ka(e,n,a){_t(cf,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=cf.current,Y(cf)}function uf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ff(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),uf(h.return,a,e),o||(M=null);break t}h=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),uf(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function mr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=u.type;ni(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===gt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Qo):e=[Qo])}u=u.return}e!==null&&ff(n,e,a,o),n.flags|=262144}function Xl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Ls=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Im(Ls,e)}function jl(e,n){return Ls===null&&Ns(e),Im(e,n)}function Im(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(r(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var JS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},$S=s.unstable_scheduleCallback,ty=s.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new JS,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&$S(ty,function(){e.controller.abort()})}var Ao=null,df=0,gr=0,_r=null;function ey(e,n){if(Ao===null){var a=Ao=[];df=0,gr=gh(),_r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return df++,n.then(Bm,Bm),n}function Bm(){if(--df===0&&Ao!==null){_r!==null&&(_r.status="fulfilled");var e=Ao;Ao=null,gr=0,_r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ny(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var zm=U.S;U.S=function(e,n){M0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ey(e,n),zm!==null&&zm(e,n)};var Us=P(null);function pf(){var e=Us.current;return e!==null?e:Xe.pooledCache}function Wl(e,n){n===null?_t(Us,Us.current):_t(Us,n.pool)}function Hm(){var e=pf();return e===null?null:{parent:un._currentValue,pool:e}}var vr=Error(r(460)),mf=Error(r(474)),Yl=Error(r(542)),ql={then:function(){}};function Gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xm(e),e}throw Ps=n,vr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,vr):a}}var Ps=null;function km(){if(Ps===null)throw Error(r(459));var e=Ps;return Ps=null,e}function Xm(e){if(e===vr||e===Yl)throw Error(r(483))}var xr=null,Ro=0;function Zl(e){var n=Ro;return Ro+=1,xr===null&&(xr=[]),Vm(xr,e,n)}function Co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function jm(e){function n(tt,W){if(e){var rt=tt.deletions;rt===null?(tt.deletions=[W],tt.flags|=16):rt.push(W)}}function a(tt,W){if(!e)return null;for(;W!==null;)n(tt,W),W=W.sibling;return null}function o(tt){for(var W=new Map;tt!==null;)tt.key!==null?W.set(tt.key,tt):W.set(tt.index,tt),tt=tt.sibling;return W}function u(tt,W){return tt=ra(tt,W),tt.index=0,tt.sibling=null,tt}function h(tt,W,rt){return tt.index=rt,e?(rt=tt.alternate,rt!==null?(rt=rt.index,rt<W?(tt.flags|=67108866,W):rt):(tt.flags|=67108866,W)):(tt.flags|=1048576,W)}function M(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function C(tt,W,rt,xt){return W===null||W.tag!==6?(W=nf(rt,tt.mode,xt),W.return=tt,W):(W=u(W,rt),W.return=tt,W)}function V(tt,W,rt,xt){var $t=rt.type;return $t===A?mt(tt,W,rt.props.children,xt,rt.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Os($t)===W.type)?(W=u(W,rt.props),Co(W,rt),W.return=tt,W):(W=Vl(rt.type,rt.key,rt.props,null,tt.mode,xt),Co(W,rt),W.return=tt,W)}function ot(tt,W,rt,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=af(rt,tt.mode,xt),W.return=tt,W):(W=u(W,rt.children||[]),W.return=tt,W)}function mt(tt,W,rt,xt,$t){return W===null||W.tag!==7?(W=ws(rt,tt.mode,xt,$t),W.return=tt,W):(W=u(W,rt),W.return=tt,W)}function yt(tt,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=nf(""+W,tt.mode,rt),W.return=tt,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return rt=Vl(W.type,W.key,W.props,null,tt.mode,rt),Co(rt,W),rt.return=tt,rt;case E:return W=af(W,tt.mode,rt),W.return=tt,W;case T:return W=Os(W),yt(tt,W,rt)}if(Z(W)||X(W))return W=ws(W,tt.mode,rt,null),W.return=tt,W;if(typeof W.then=="function")return yt(tt,Zl(W),rt);if(W.$$typeof===N)return yt(tt,jl(tt,W),rt);Kl(tt,W)}return null}function ct(tt,W,rt,xt){var $t=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return $t!==null?null:C(tt,W,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===$t?V(tt,W,rt,xt):null;case E:return rt.key===$t?ot(tt,W,rt,xt):null;case T:return rt=Os(rt),ct(tt,W,rt,xt)}if(Z(rt)||X(rt))return $t!==null?null:mt(tt,W,rt,xt,null);if(typeof rt.then=="function")return ct(tt,W,Zl(rt),xt);if(rt.$$typeof===N)return ct(tt,W,jl(tt,rt),xt);Kl(tt,rt)}return null}function ft(tt,W,rt,xt,$t){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return tt=tt.get(rt)||null,C(W,tt,""+xt,$t);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return tt=tt.get(xt.key===null?rt:xt.key)||null,V(W,tt,xt,$t);case E:return tt=tt.get(xt.key===null?rt:xt.key)||null,ot(W,tt,xt,$t);case T:return xt=Os(xt),ft(tt,W,rt,xt,$t)}if(Z(xt)||X(xt))return tt=tt.get(rt)||null,mt(W,tt,xt,$t,null);if(typeof xt.then=="function")return ft(tt,W,rt,Zl(xt),$t);if(xt.$$typeof===N)return ft(tt,W,rt,jl(W,xt),$t);Kl(W,xt)}return null}function kt(tt,W,rt,xt){for(var $t=null,De=null,Zt=W,me=W=0,Me=null;Zt!==null&&me<rt.length;me++){Zt.index>me?(Me=Zt,Zt=null):Me=Zt.sibling;var Le=ct(tt,Zt,rt[me],xt);if(Le===null){Zt===null&&(Zt=Me);break}e&&Zt&&Le.alternate===null&&n(tt,Zt),W=h(Le,W,me),De===null?$t=Le:De.sibling=Le,De=Le,Zt=Me}if(me===rt.length)return a(tt,Zt),Ee&&oa(tt,me),$t;if(Zt===null){for(;me<rt.length;me++)Zt=yt(tt,rt[me],xt),Zt!==null&&(W=h(Zt,W,me),De===null?$t=Zt:De.sibling=Zt,De=Zt);return Ee&&oa(tt,me),$t}for(Zt=o(Zt);me<rt.length;me++)Me=ft(Zt,tt,me,rt[me],xt),Me!==null&&(e&&Me.alternate!==null&&Zt.delete(Me.key===null?me:Me.key),W=h(Me,W,me),De===null?$t=Me:De.sibling=Me,De=Me);return e&&Zt.forEach(function(os){return n(tt,os)}),Ee&&oa(tt,me),$t}function te(tt,W,rt,xt){if(rt==null)throw Error(r(151));for(var $t=null,De=null,Zt=W,me=W=0,Me=null,Le=rt.next();Zt!==null&&!Le.done;me++,Le=rt.next()){Zt.index>me?(Me=Zt,Zt=null):Me=Zt.sibling;var os=ct(tt,Zt,Le.value,xt);if(os===null){Zt===null&&(Zt=Me);break}e&&Zt&&os.alternate===null&&n(tt,Zt),W=h(os,W,me),De===null?$t=os:De.sibling=os,De=os,Zt=Me}if(Le.done)return a(tt,Zt),Ee&&oa(tt,me),$t;if(Zt===null){for(;!Le.done;me++,Le=rt.next())Le=yt(tt,Le.value,xt),Le!==null&&(W=h(Le,W,me),De===null?$t=Le:De.sibling=Le,De=Le);return Ee&&oa(tt,me),$t}for(Zt=o(Zt);!Le.done;me++,Le=rt.next())Le=ft(Zt,tt,me,Le.value,xt),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?me:Le.key),W=h(Le,W,me),De===null?$t=Le:De.sibling=Le,De=Le);return e&&Zt.forEach(function(dM){return n(tt,dM)}),Ee&&oa(tt,me),$t}function Ve(tt,W,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===A&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var $t=rt.key;W!==null;){if(W.key===$t){if($t=rt.type,$t===A){if(W.tag===7){a(tt,W.sibling),xt=u(W,rt.props.children),xt.return=tt,tt=xt;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Os($t)===W.type){a(tt,W.sibling),xt=u(W,rt.props),Co(xt,rt),xt.return=tt,tt=xt;break t}a(tt,W);break}else n(tt,W);W=W.sibling}rt.type===A?(xt=ws(rt.props.children,tt.mode,xt,rt.key),xt.return=tt,tt=xt):(xt=Vl(rt.type,rt.key,rt.props,null,tt.mode,xt),Co(xt,rt),xt.return=tt,tt=xt)}return M(tt);case E:t:{for($t=rt.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a(tt,W.sibling),xt=u(W,rt.children||[]),xt.return=tt,tt=xt;break t}else{a(tt,W);break}else n(tt,W);W=W.sibling}xt=af(rt,tt.mode,xt),xt.return=tt,tt=xt}return M(tt);case T:return rt=Os(rt),Ve(tt,W,rt,xt)}if(Z(rt))return kt(tt,W,rt,xt);if(X(rt)){if($t=X(rt),typeof $t!="function")throw Error(r(150));return rt=$t.call(rt),te(tt,W,rt,xt)}if(typeof rt.then=="function")return Ve(tt,W,Zl(rt),xt);if(rt.$$typeof===N)return Ve(tt,W,jl(tt,rt),xt);Kl(tt,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a(tt,W.sibling),xt=u(W,rt),xt.return=tt,tt=xt):(a(tt,W),xt=nf(rt,tt.mode,xt),xt.return=tt,tt=xt),M(tt)):a(tt,W)}return function(tt,W,rt,xt){try{Ro=0;var $t=Ve(tt,W,rt,xt);return xr=null,$t}catch(Zt){if(Zt===vr||Zt===Yl)throw Zt;var De=ii(29,Zt,null,tt.mode);return De.lanes=xt,De.return=tt,De}}}var Fs=jm(!0),Wm=jm(!1),Xa=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Gl(e),wm(e,null,a),n}return Hl(e,o,n,a),Gl(e)}function wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,tr(e,a)}}function vf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xf=!1;function Do(){if(xf){var e=_r;if(e!==null)throw e}}function Lo(e,n,a,o){xf=!1;var u=e.updateQueue;Xa=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,ot=V.next;V.next=null,M===null?h=ot:M.next=ot,M=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==M&&(C===null?mt.firstBaseUpdate=ot:C.next=ot,mt.lastBaseUpdate=V))}if(h!==null){var yt=u.baseState;M=0,mt=ot=V=null,C=h;do{var ct=C.lane&-536870913,ft=ct!==C.lane;if(ft?(ye&ct)===ct:(o&ct)===ct){ct!==0&&ct===gr&&(xf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,te=C;ct=n;var Ve=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){yt=kt.call(Ve,yt,ct);break t}yt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,ct=typeof kt=="function"?kt.call(Ve,yt,ct):kt,ct==null)break t;yt=_({},yt,ct);break t;case 2:Xa=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(ot=mt=ft,V=yt):mt=mt.next=ft,M|=ct;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(V=yt),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),Qa|=M,e.lanes=M,e.memoizedState=yt}}function Ym(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function qm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ym(a[e],n)}var Sr=P(null),Ql=P(0);function Zm(e,n){e=va,_t(Ql,e),_t(Sr,n),va=e|n.baseLanes}function Sf(){_t(Ql,va),_t(Sr,Sr.current)}function yf(){va=Ql.current,Y(Sr),Y(Ql)}var ai=P(null),xi=null;function Ya(e){var n=e.alternate;_t(sn,sn.current&1),_t(ai,e),xi===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(xi=e)}function Mf(e){_t(sn,sn.current),_t(ai,e),xi===null&&(xi=e)}function Km(e){e.tag===22?(_t(sn,sn.current),_t(ai,e),xi===null&&(xi=e)):qa()}function qa(){_t(sn,sn.current),_t(ai,ai.current)}function si(e){Y(ai),xi===e&&(xi=null),Y(sn)}var sn=P(0);function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ch(a)||wh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,he=null,He=null,fn=null,$l=!1,yr=!1,Is=!1,tc=0,No=0,Mr=null,iy=0;function en(){throw Error(r(321))}function Ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function bf(e,n,a,o,u,h){return ua=h,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Ug:zf,Is=!1,h=a(o,u),Is=!1,yr&&(h=Jm(n,a,o,u)),Qm(e),h}function Qm(e){U.H=Po;var n=He!==null&&He.next!==null;if(ua=0,fn=He=he=null,$l=!1,No=0,Mr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&Xl(e)&&(hn=!0))}function Jm(e,n,a,o){he=e;var u=0;do{if(yr&&(Mr=null),No=0,yr=!1,25<=u)throw Error(r(301));if(u+=1,fn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=Og,h=n(a,o)}while(yr);return h}function ay(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Uo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(he.flags|=1024),n}function Tf(){var e=tc!==0;return tc=0,e}function Af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Rf(e){if($l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}$l=!1}ua=0,fn=He=he=null,yr=!1,No=tc=0,Mr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?he.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(He===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=fn===null?he.memoizedState:fn.next;if(n!==null)fn=n,He=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},fn===null?he.memoizedState=fn=e:fn=fn.next=e}return fn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var n=No;return No+=1,Mr===null&&(Mr=[]),e=Vm(Mr,e,n),n=he,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Ug:zf),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===N)return bn(e)}throw Error(r(438,String(e)))}function Cf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ec(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Q;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function ic(e){var n=rn();return wf(n,He,e)}function wf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=M=null,V=null,ot=n,mt=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(ye&yt)===yt:(ua&yt)===yt){var ct=ot.revertLane;if(ct===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===gr&&(mt=!0);else if((ua&ct)===ct){ot=ot.next,ct===gr&&(mt=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=yt,M=h):V=V.next=yt,he.lanes|=ct,Qa|=ct;yt=ot.action,Is&&a(h,yt),h=ot.hasEagerState?ot.eagerState:a(h,yt)}else ct={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=ct,M=h):V=V.next=ct,he.lanes|=yt,Qa|=yt;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?M=h:V.next=C,!ni(h,e.memoizedState)&&(hn=!0,mt&&(a=_r,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Df(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);ni(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function $m(e,n,a){var o=he,u=rn(),h=Ee;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!ni((He||u).memoizedState,a);if(M&&(u.memoizedState=a,hn=!0),u=u.queue,Uf(ng.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Er(9,{destroy:void 0},eg.bind(null,o,u,a,n),null),Xe===null)throw Error(r(349));h||(ua&127)!==0||tg(o,n,a)}return a}function tg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=ec(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function eg(e,n,a,o){n.value=a,n.getSnapshot=o,ig(n)&&ag(e)}function ng(e,n,a){return a(function(){ig(n)&&ag(e)})}function ig(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function ag(e){var n=Cs(e,2);n!==null&&Qn(n,e,2)}function Lf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Is){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function sg(e,n,a,o){return e.baseState=a,wf(e,He,typeof o=="function"?o:fa)}function sy(e,n,a,o,u){if(rc(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};U.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,rg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function rg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=U.T,M={};U.T=M;try{var C=a(u,o),V=U.S;V!==null&&V(M,C),og(e,n,C)}catch(ot){Nf(e,n,ot)}finally{h!==null&&M.types!==null&&(h.types=M.types),U.T=h}}else try{h=a(u,o),og(e,n,h)}catch(ot){Nf(e,n,ot)}}function og(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lg(e,n,o)},function(o){return Nf(e,n,o)}):lg(e,n,a)}function lg(e,n,a){n.status="fulfilled",n.value=a,cg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rg(e,a)))}function Nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cg(n),n=n.next;while(n!==o)}e.action=null}function cg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ug(e,n){return n}function fg(e,n){if(Ee){var a=Xe.formState;if(a!==null){t:{var o=he;if(Ee){if(We){e:{for(var u=We,h=vi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){We=Si(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:n},a.queue=o,a=Dg.bind(null,he,o),o.dispatch=a,o=Lf(!1),h=Bf.bind(null,he,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sy.bind(null,he,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function hg(e){var n=rn();return dg(n,He,e)}function dg(e,n,a){if(n=wf(e,n,ug)[0],e=ic(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(M){throw M===vr?Yl:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Er(9,{destroy:void 0},ry.bind(null,u,a),null)),[o,h,e]}function ry(e,n){e.action=n}function pg(e){var n=rn(),a=He;if(a!==null)return dg(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Er(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=ec(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function mg(){return rn().memoizedState}function ac(e,n,a,o){var u=Hn();he.flags|=e,u.memoizedState=Er(1|n,{destroy:void 0},a,o===void 0?null:o)}function sc(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&Ef(o,He.memoizedState.deps)?u.memoizedState=Er(n,h,a,o):(he.flags|=e,u.memoizedState=Er(1|n,h,a,o))}function gg(e,n){ac(8390656,8,e,n)}function Uf(e,n){sc(2048,8,e,n)}function oy(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=ec(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _g(e){var n=rn().memoizedState;return oy({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function vg(e,n){return sc(4,2,e,n)}function xg(e,n){return sc(4,4,e,n)}function Sg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yg(e,n,a){a=a!=null?a.concat([e]):null,sc(4,4,Sg.bind(null,n,e),a)}function Of(){}function Mg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Eg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=e(),Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Pf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=b0(),he.lanes|=e,Qa|=e,a)}function bg(e,n,a,o){return ni(a,n)?a:Sr.current!==null?(e=Pf(e,a,o),ni(e,n)||(hn=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=b0(),he.lanes|=e,Qa|=e,n)}function Tg(e,n,a,o,u){var h=I.p;I.p=h!==0&&8>h?h:8;var M=U.T,C={};U.T=C,Bf(e,!1,n,a);try{var V=u(),ot=U.S;if(ot!==null&&ot(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=ny(V,o);Oo(e,n,mt,li(e))}else Oo(e,n,o,li(e))}catch(yt){Oo(e,n,{then:function(){},status:"rejected",reason:yt},li())}finally{I.p=h,M!==null&&C.types!==null&&(M.types=C.types),U.T=M}}function ly(){}function Ff(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Ag(e).queue;Tg(e,u,n,it,a===null?ly:function(){return Rg(e),a(o)})}function Ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rg(e){var n=Ag(e);n.next===null&&(n=e.alternate.memoizedState),Oo(e,n.next.queue,{},li())}function If(){return bn(Qo)}function Cg(){return rn().memoizedState}function wg(){return rn().memoizedState}function cy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=ja(a);var o=Wa(n,e,a);o!==null&&(Qn(o,n,a),wo(o,n,a)),n={cache:hf()},e.payload=n;return}n=n.return}}function uy(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(e)?Lg(n,a):(a=tf(e,n,a,o),a!==null&&(Qn(a,e,o),Ng(a,n,o)))}function Dg(e,n,a){var o=li();Oo(e,n,a,o)}function Oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(e))Lg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,C=h(M,a);if(u.hasEagerState=!0,u.eagerState=C,ni(C,M))return Hl(e,n,u,0),Xe===null&&zl(),!1}catch{}if(a=tf(e,n,u,o),a!==null)return Qn(a,e,o),Ng(a,n,o),!0}return!1}function Bf(e,n,a,o){if(o={lane:2,revertLane:gh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(n)throw Error(r(479))}else n=tf(e,a,o,2),n!==null&&Qn(n,e,2)}function rc(e){var n=e.alternate;return e===he||n!==null&&n===he}function Lg(e,n){yr=$l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,tr(e,a)}}var Po={readContext:bn,use:nc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Po.useEffectEvent=en;var Ug={readContext:bn,use:nc,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:gg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ac(4194308,4,Sg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ac(4194308,4,e,n)},useInsertionEffect:function(e,n){ac(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Is){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Is){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=uy.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Lf(e);var n=e.queue,a=Dg.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,n){var a=Hn();return Pf(a,e,n)},useTransition:function(){var e=Lf(!1);return e=Tg.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Hn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ye&127)!==0||tg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,gg(ng.bind(null,o,h,e),[e]),o.flags|=2048,Er(9,{destroy:void 0},eg.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=Xe.identifierPrefix;if(Ee){var a=Gi,o=Hi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=iy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:If,useFormState:fg,useActionState:fg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Cf,useCacheRefresh:function(){return Hn().memoizedState=cy.bind(null,he)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zf={readContext:bn,use:nc,useCallback:Mg,useContext:bn,useEffect:Uf,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:ic,useRef:mg,useState:function(){return ic(fa)},useDebugValue:Of,useDeferredValue:function(e,n){var a=rn();return bg(a,He.memoizedState,e,n)},useTransition:function(){var e=ic(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:If,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=rn();return sg(a,He,e,n)},useMemoCache:Cf,useCacheRefresh:wg};zf.useEffectEvent=_g;var Og={readContext:bn,use:nc,useCallback:Mg,useContext:bn,useEffect:Uf,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:Df,useRef:mg,useState:function(){return Df(fa)},useDebugValue:Of,useDeferredValue:function(e,n){var a=rn();return He===null?Pf(a,e,n):bg(a,He.memoizedState,e,n)},useTransition:function(){var e=Df(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:If,useFormState:pg,useActionState:pg,useOptimistic:function(e,n){var a=rn();return He!==null?sg(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:wg};Og.useEffectEvent=_g;function Hf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Qn(n,e,o),wo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Qn(n,e,o),wo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(e,o,a),n!==null&&(Qn(n,e,a),wo(n,e,a))}};function Pg(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!yo(a,o)||!yo(u,h):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ig(e){Bl(e)}function Bg(e){console.error(e)}function zg(e){Bl(e)}function oc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vf(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(e,n)},a}function Gg(e){return e=ja(e),e.tag=3,e}function Vg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Hg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Hg(n,a,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function fy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&mr(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?xc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dh(e,o,u)),!1;case 22:return a.flags|=65536,o===ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dh(e,o,u)),!1}throw Error(r(435,a.tag))}return dh(e,o,u),xc(),!1}if(Ee)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==of&&(e=Error(r(422),{cause:o}),bo(mi(e,a)))):(o!==of&&(n=Error(r(423),{cause:o}),bo(mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=mi(o,a),u=Vf(e.stateNode,o,u),vf(e,u),nn!==4&&(nn=2)),!1;var h=Error(r(520),{cause:o});if(h=mi(h,a),ko===null?ko=[h]:ko.push(h),nn!==4&&(nn=2),n===null)return!0;o=mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Vf(a.stateNode,o,e),vf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ja===null||!Ja.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gg(u),Vg(u,e,a,o),vf(a,u),!1}a=a.return}while(a!==null);return!1}var kf=Error(r(461)),hn=!1;function Tn(e,n,a,o){n.child=e===null?Wm(n,null,a,o):Fs(n,e.child,a,o)}function kg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return Ns(n),o=bf(e,n,a,M,h,u),C=Tf(),e!==null&&!hn?(Af(e,n,u),ha(e,n,u)):(Ee&&C&&sf(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Xg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!ef(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,jg(e,n,h,o,u)):(e=Vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Qf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(M,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=ra(h,o),e.ref=n.ref,e.return=n,n.child=e}function jg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(yo(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Qf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ha(e,n,u)}return Xf(e,n,a,o,u)}function Wg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Yg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(n,h!==null?h.cachePool:null),h!==null?Zm(n,h):Sf(),Km(n);else return o=n.lanes=536870912,Yg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Wl(n,h.cachePool),Zm(n,h),qa(),n.memoizedState=null):(e!==null&&Wl(n,null),Sf(),qa());return Tn(e,n,u,a),n.child}function Fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yg(e,n,a,o,u){var h=pf();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Wl(n,null),Sf(),Km(n),e!==null&&mr(e,n,o,!0),n.childLanes=u,null}function lc(e,n){return n=uc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qg(e,n,a){return Fs(n,e.child,null,a),e=lc(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function hy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=lc(n,o),n.lanes=536870912,Fo(null,e);if(Mf(n),(e=We)?(e=r_(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw Va(n);return n.lanes=536870912,null}return lc(n,o)}var h=e.memoizedState;if(h!==null){var M=h.dehydrated;if(Mf(n),u)if(n.flags&256)n.flags&=-257,n=qg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||mr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Xe,o!==null&&(M=Rl(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,Cs(e,M),Qn(o,e,M),kf;xc(),n=qg(e,n,a)}else e=h.treeContext,We=Si(M.nextSibling),En=n,Ee=!0,Ga=null,vi=!1,e!==null&&Om(n,e),n=lc(n,o),n.flags|=4096;return n}return e=ra(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function cc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xf(e,n,a,o,u){return Ns(n),a=bf(e,n,a,o,void 0,u),o=Tf(),e!==null&&!hn?(Af(e,n,u),ha(e,n,u)):(Ee&&o&&sf(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Zg(e,n,a,o,u,h){return Ns(n),n.updateQueue=null,a=Jm(n,o,a,u),Qm(e),o=Tf(),e!==null&&!hn?(Af(e,n,h),ha(e,n,h)):(Ee&&o&&sf(n),n.flags|=1,Tn(e,n,a,h),n.child)}function Kg(e,n,a,o,u){if(Ns(n),n.stateNode===null){var h=fr,M=a.contextType;typeof M=="object"&&M!==null&&(h=bn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Gf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},gf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?bn(M):fr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Hf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Gf.enqueueReplaceState(h,h.state,null),Lo(n,o,h,u),Do(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,V=Bs(a,C);h.props=V;var ot=h.context,mt=a.contextType;M=fr,typeof mt=="object"&&mt!==null&&(M=bn(mt));var yt=a.getDerivedStateFromProps;mt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ot!==M)&&Fg(n,h,o,M),Xa=!1;var ct=n.memoizedState;h.state=ct,Lo(n,o,h,u),Do(),ot=n.memoizedState,C||ct!==ot||Xa?(typeof yt=="function"&&(Hf(n,a,yt,o),ot=n.memoizedState),(V=Xa||Pg(n,a,V,o,ct,ot,M))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=M,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,_f(e,n),M=n.memoizedProps,mt=Bs(a,M),h.props=mt,yt=n.pendingProps,ct=h.context,ot=a.contextType,V=fr,typeof ot=="object"&&ot!==null&&(V=bn(ot)),C=a.getDerivedStateFromProps,(ot=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==yt||ct!==V)&&Fg(n,h,o,V),Xa=!1,ct=n.memoizedState,h.state=ct,Lo(n,o,h,u),Do();var ft=n.memoizedState;M!==yt||ct!==ft||Xa||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof C=="function"&&(Hf(n,a,C,o),ft=n.memoizedState),(mt=Xa||Pg(n,a,mt,o,ct,ft,V)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(ot||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=V,o=mt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,cc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Fs(n,e.child,null,u),n.child=Fs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ha(e,n,u),e}function Qg(e,n,a,o){return Ds(),n.flags|=256,Tn(e,n,a,o),n.child}var jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(e){return{baseLanes:e,cachePool:Hm()}}function Yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Jg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ya(n):qa(),(e=We)?(e=r_(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw Va(n);return wh(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(qa(),u=n.mode,C=uc({mode:"hidden",children:C},u),o=ws(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(e,M,a),n.memoizedState=jf,Fo(null,o)):(Ya(n),qf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(h)n.flags&256?(Ya(n),n.flags&=-257,n=Zf(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),C=o.fallback,u=n.mode,o=uc({mode:"visible",children:o.children},u),C=ws(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Fs(n,e.child,null,a),o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(e,M,a),n.memoizedState=jf,n=Fo(null,o));else if(Ya(n),wh(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var ot=M.dgst;M=ot,o=Error(r(419)),o.stack="",o.digest=M,bo({value:o,source:null,stack:null}),n=Zf(e,n,a)}else if(hn||mr(e,n,a,!1),M=(a&e.childLanes)!==0,hn||M){if(M=Xe,M!==null&&(o=Rl(M,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Cs(e,o),Qn(M,e,o),kf;Ch(C)||xc(),n=Zf(e,n,a)}else Ch(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,We=Si(C.nextSibling),En=n,Ee=!0,Ga=null,vi=!1,e!==null&&Om(n,e),n=qf(n,o.children),n.flags|=4096);return n}return u?(qa(),C=o.fallback,u=n.mode,V=e.child,ot=V.sibling,o=ra(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ot!==null?C=ra(ot,C):(C=ws(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Fo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Wf(a):(u=C.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Hm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Yf(e,M,a),n.memoizedState=jf,Fo(e.child,o)):(Ya(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function qf(e,n){return n=uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uc(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Zf(e,n,a){return Fs(n,e.child,null,a),e=qf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $g(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),uf(e.return,n,a)}function Kf(e,n,a,o,u,h){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function t0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=sn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,_t(sn,M),Tn(e,n,o,a),o=Ee?Eo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,a,n);else if(e.tag===19)$g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Jl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Kf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Jl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Kf(n,!0,a,null,h,o);break;case"together":Kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(mr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function dy(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),ka(n,un,e.memoizedState.cache),Ds();break;case 27:case 5:Kt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jg(e,n,a):(Ya(n),e=ha(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(mr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return t0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Wg(e,n,a,n.pendingProps);case 24:ka(n,un,e.memoizedState.cache)}return ha(e,n,a)}function e0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Qf(e,a)&&(n.flags&128)===0)return hn=!1,dy(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&Um(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")ef(e)?(o=Bs(e,o),n.tag=1,n=Kg(null,n,e,o,a)):(n.tag=0,n=Xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=kg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Xg(null,n,e,o,a);break t}}throw n=k(e)||e,Error(r(306,n,""))}}return n;case 0:return Xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),Kg(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,_f(e,n),Lo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ka(n,un,o),o!==h.cache&&ff(n,[un],a,!0),Do(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Qg(e,n,o,a);break t}else if(o!==u){u=mi(Error(r(424)),n),bo(u),n=Qg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=Si(e.firstChild),En=n,Ee=!0,Ga=null,vi=!0,a=Wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),o===u){n=ha(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return cc(e,n),e===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Ac(at.current).createElement(a),o[on]=n,o[mn]=e,An(o,a,e),q(o),n.stateNode=o):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ee&&(o=n.stateNode=c_(n.type,n.pendingProps,at.current),En=n,vi=!0,u=We,ns(n.type)?(Dh=u,We=Si(o.firstChild)):We=u),Tn(e,n,n.pendingProps.children,a),cc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=We)&&(o=ky(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,En=n,We=Si(o.firstChild),vi=!1,u=!0):u=!1),u||Va(n)),Kt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Th(u,h)?o=null:M!==null&&Th(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=bf(e,n,ay,null,null,a),Qo._currentValue=u),cc(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=We)&&(a=Xy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,En=n,We=null,e=!0):e=!1),e||Va(n)),null;case 13:return Jg(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Fs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return kg(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ns(n),u=bn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,a);case 15:return jg(e,n,n.type,n.pendingProps,a);case 19:return t0(e,n,a);case 31:return hy(e,n,a);case 22:return Wg(e,n,a,n.pendingProps);case 24:return Ns(n),o=bn(un),e===null?(u=pf(),u===null&&(u=Xe,h=hf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},gf(n),ka(n,un,u)):((e.lanes&a)!==0&&(_f(e,n),Lo(n,null,null,a),Do()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,un,o)):(o=h.cache,ka(n,un,o),o!==u.cache&&ff(n,[un],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function da(e){e.flags|=4}function Jf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(C0())e.flags|=8192;else throw Ps=ql,mf}else e.flags&=-16777217}function n0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(n))if(C0())e.flags|=8192;else throw Ps=ql,mf}function fc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,Rr|=n)}function Io(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function py(e,n,a){var o=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(un),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pr(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),Ye(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(da(n),h!==null?(Ye(n),n0(n,h)):(Ye(n),Jf(n,u,null,o,a))):h?h!==e.memoizedState?(da(n),Ye(n),n0(n,h)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),Ye(n),Jf(n,u,e,o,a)),null;case 27:if(Yt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=Rt.current,pr(n)?Pm(n):(e=c_(u,o,a),n.stateNode=e,da(n))}return Ye(n),null;case 5:if(Yt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(h=Rt.current,pr(n))Pm(n);else{var M=Ac(at.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[on]=n,h[mn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;t:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return Ye(n),Jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=at.current,pr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||J0(e.nodeValue,a)),e||Va(n,!0)}else e=Ac(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=pr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=pr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),fc(n,n.updateQueue),Ye(n),null);case 4:return zt(),e===null&&Sh(n.stateNode.containerInfo),Ye(n),null;case 10:return ca(n.type),Ye(n),null;case 19:if(Y(sn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Io(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Jl(e),h!==null){for(n.flags|=128,Io(o,!1),e=h.updateQueue,n.updateQueue=e,fc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ee&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>gc&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304)}else{if(!u)if(e=Jl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,fc(n,e),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Ye(n),null}else 2*b()-o.renderingStartTime>gc&&a!==536870912&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),Ee&&oa(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return si(n),yf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&fc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function my(e,n){switch(rf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(un),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Yt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(sn),null;case 4:return zt(),null;case 10:return ca(n.type),null;case 22:case 23:return si(n),yf(),e!==null&&Y(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function i0(e,n){switch(rf(n),n.tag){case 3:ca(un),zt();break;case 26:case 27:case 5:Yt(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Y(sn);break;case 10:ca(n.type);break;case 22:case 23:si(n),yf(),e!==null&&Y(Us);break;case 24:ca(un)}}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){Be(n,n.return,C)}}function Za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var V=a,ot=C;try{ot()}catch(mt){Be(u,V,mt)}}}o=o.next}while(o!==h)}}catch(mt){Be(n,n.return,mt)}}function a0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qm(n,a)}catch(o){Be(e,e.return,o)}}}function s0(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function zo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Vi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function r0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function $f(e,n,a){try{var o=e.stateNode;Iy(o,e.type,a,n),o[mn]=n}catch(u){Be(e,e.return,u)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function th(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(eh(e,n,a),e=e.sibling;e!==null;)eh(e,n,a),e=e.sibling}function hc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(hc(e,n,a),e=e.sibling;e!==null;)hc(e,n,a),e=e.sibling}function l0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[on]=e,n[mn]=a}catch(h){Be(e,e.return,h)}}var pa=!1,dn=!1,nh=!1,c0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function gy(e,n){if(e=e.containerInfo,Eh=Uc,e=ym(e),qu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,C=-1,V=-1,ot=0,mt=0,yt=e,ct=null;e:for(;;){for(var ft;yt!==a||u!==0&&yt.nodeType!==3||(C=M+u),yt!==h||o!==0&&yt.nodeType!==3||(V=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)ct=yt,yt=ft;for(;;){if(yt===e)break e;if(ct===a&&++ot===u&&(C=M),ct===h&&++mt===o&&(V=M),(ft=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ft}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(bh={focusedElem:e,selectionRange:a},Uc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=Bs(a.type,u);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function u0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&Bo(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Be(a,a.return,M)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Be(a,a.return,M)}}o&64&&a0(a),o&512&&zo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qm(e,n)}catch(M){Be(a,a.return,M)}}break;case 27:n===null&&o&4&&l0(a);case 26:case 5:ga(e,a),n===null&&o&4&&r0(a),o&512&&zo(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&d0(e,a);break;case 13:ga(e,a),o&4&&p0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ty.bind(null,a),jy(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||dn,u=pa;var h=dn;pa=o,(dn=n)&&!h?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,dn=h}break;case 30:break;default:ga(e,a)}}function f0(e){var n=e.alternate;n!==null&&(e.alternate=null,f0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ho(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Yn=!1;function ma(e,n,a){for(a=a.child;a!==null;)h0(e,n,a),a=a.sibling}function h0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:dn||Vi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Vi(a,n);var o=Je,u=Yn;ns(a.type)&&(Je=a.stateNode,Yn=!1),ma(e,n,a),qo(a.stateNode),Je=o,Yn=u;break;case 5:dn||Vi(a,n);case 6:if(o=Je,u=Yn,Je=null,ma(e,n,a),Je=o,Yn=u,Je!==null)if(Yn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Je.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Je!==null&&(Yn?(e=Je,a_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pr(e)):a_(Je,a.stateNode));break;case 4:o=Je,u=Yn,Je=a.stateNode.containerInfo,Yn=!0,ma(e,n,a),Je=o,Yn=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),dn||Za(4,a,n),ma(e,n,a);break;case 1:dn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s0(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ma(e,n,a),dn=o;break;default:ma(e,n,a)}}function d0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pr(e)}catch(a){Be(n,n.return,a)}}}function p0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pr(e)}catch(a){Be(n,n.return,a)}}function _y(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c0),n;default:throw Error(r(435,e.tag))}}function dc(e,n){var a=_y(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ay.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ns(C.type)){Je=C.stateNode,Yn=!1;break t}break;case 5:Je=C.stateNode,Yn=!1;break t;case 3:case 4:Je=C.stateNode.containerInfo,Yn=!0;break t}C=C.return}if(Je===null)throw Error(r(160));h0(h,M,u),Je=null,Yn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m0(n,e),n=n.sibling}var Li=null;function m0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Zn(e),o&4&&(Za(3,e,e.return),Bo(3,e),Za(5,e,e.return));break;case 1:qn(n,e),Zn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(qn(n,e),Zn(e),o&512&&(dn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Es]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[on]=e,q(h),o=h;break t;case"link":var M=m_("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(h=M[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(M=m_("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(h=M[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=e,q(h),o=h}e.stateNode=o}else g_(u,e.type,e.stateNode);else e.stateNode=p_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?g_(u,e.type,e.stateNode):p_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$f(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Zn(e),o&512&&(dn||a===null||Vi(a,a.return)),a!==null&&o&4&&$f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Zn(e),o&512&&(dn||a===null||Vi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,$f(e,u,a!==null?a.memoizedProps:u)),o&1024&&(nh=!0);break;case 6:if(qn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(wc=null,u=Li,Li=Rc(n.containerInfo),qn(n,e),Li=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(kt){Be(e,e.return,kt)}nh&&(nh=!1,g0(e));break;case 4:o=Li,Li=Rc(e.stateNode.containerInfo),qn(n,e),Zn(e),Li=o;break;case 12:qn(n,e),Zn(e);break;case 31:qn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 13:qn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mc=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ot=pa,mt=dn;if(pa=ot||u,dn=mt||V,qn(n,e),dn=mt,pa=ot,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||pa||dn||zs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var yt=V.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(kt){Be(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(kt){Be(V,V.return,kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;u?s_(ft,!0):s_(V.stateNode,!1)}catch(kt){Be(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,dc(e,a))));break;case 19:qn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(o0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=th(e);hc(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(zn(M,""),a.flags&=-33);var C=th(e);hc(e,C,M);break;case 3:case 4:var V=a.stateNode.containerInfo,ot=th(e);eh(e,ot,V);break;default:throw Error(r(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function g0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;g0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u0(e,n.alternate,n),n=n.sibling}function zs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),zs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),zs(n);break;case 27:qo(n.stateNode);case 26:case 5:Vi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,a),Bo(4,h);break;case 1:if(_a(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Be(o,o.return,ot)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Ym(V[u],C)}catch(ot){Be(o,o.return,ot)}}a&&M&64&&a0(h),zo(h,h.return);break;case 27:l0(h);case 26:case 5:_a(u,h,a),a&&o===null&&M&4&&r0(h),zo(h,h.return);break;case 12:_a(u,h,a);break;case 31:_a(u,h,a),a&&M&4&&d0(u,h);break;case 13:_a(u,h,a),a&&M&4&&p0(u,h);break;case 22:h.memoizedState===null&&_a(u,h,a),zo(h,h.return);break;case 30:break;default:_a(u,h,a)}n=n.sibling}}function ih(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&To(a))}function ah(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(e,n,a,o),n=n.sibling}function _0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&Bo(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,C=h.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Be(n,n.return,V)}}else Ni(e,n,a,o);break;case 31:Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(e,n,a,o):Ho(e,n):h._visibility&2?Ni(e,n,a,o):(h._visibility|=2,br(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ih(M,n);break;case 24:Ni(e,n,a,o),u&2048&&ah(n.alternate,n);break;default:Ni(e,n,a,o)}}function br(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,M=n,C=a,V=o,ot=M.flags;switch(M.tag){case 0:case 11:case 15:br(h,M,C,V,u),Bo(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?br(h,M,C,V,u):Ho(h,M):(mt._visibility|=2,br(h,M,C,V,u)),u&&ot&2048&&ih(M.alternate,M);break;case 24:br(h,M,C,V,u),u&&ot&2048&&ah(M.alternate,M);break;default:br(h,M,C,V,u)}n=n.sibling}}function Ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ho(a,o),u&2048&&ih(o.alternate,o);break;case 24:Ho(a,o),u&2048&&ah(o.alternate,o);break;default:Ho(a,o)}n=n.sibling}}var Go=8192;function Tr(e,n,a){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)v0(e,n,a),e=e.sibling}function v0(e,n,a){switch(e.tag){case 26:Tr(e,n,a),e.flags&Go&&e.memoizedState!==null&&iM(a,Li,e.memoizedState,e.memoizedProps);break;case 5:Tr(e,n,a);break;case 3:case 4:var o=Li;Li=Rc(e.stateNode.containerInfo),Tr(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Tr(e,n,a),Go=o):Tr(e,n,a));break;default:Tr(e,n,a)}}function x0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,y0(o,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,pc(e)):Vo(e);break;default:Vo(e)}}function pc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,y0(o,e)}x0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),pc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,pc(n));break;default:pc(n)}e=e.sibling}}function y0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,h=o.return;if(f0(o),o===a){yn=null;break t}if(u!==null){u.return=h,yn=u;break t}yn=h}}}var vy={getCacheForType:function(e){var n=bn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(un).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,xe=null,ye=0,Ie=0,ri=null,Ka=!1,Ar=!1,sh=!1,va=0,nn=0,Qa=0,Hs=0,rh=0,oi=0,Rr=0,ko=null,Kn=null,oh=!1,mc=0,M0=0,gc=1/0,_c=null,Ja=null,_n=0,$a=null,Cr=null,xa=0,lh=0,ch=null,E0=null,Xo=0,uh=null;function li(){return(Ue&2)!==0&&ye!==0?ye&-ye:U.T!==null?gh():zi()}function b0(){if(oi===0)if((ye&536870912)===0||Ee){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Qn(e,n,a){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(wr(e,0),ts(e,ye,oi,!1)),Fn(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(Hs|=a),nn===4&&ts(e,ye,oi,!1)),ki(e))}function T0(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?My(e,n):hh(e,n,!0),h=o;do{if(u===0){Ar&&!o&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Sy(a)){u=hh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=ko;var V=C.current.memoizedState.isDehydrated;if(V&&(wr(C,M).flags|=256),M=hh(C,M,!1),M!==2){if(sh&&!V){C.errorRecoveryDisabledLanes|=h,Hs|=h,u=4;break t}h=Kn,Kn=u,h!==null&&(Kn===null?Kn=h:Kn.push.apply(Kn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){wr(e,0),ts(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ts(o,n,oi,!Ka);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=mc+300-b(),10<u)){if(ts(o,n,oi,!Ka),dt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=n_(A0.bind(null,o,a,Kn,_c,oh,n,oi,Hs,Rr,Ka,h,"Throttled",-0,0),u);break t}A0(o,a,Kn,_c,oh,n,oi,Hs,Rr,Ka,h,null,-0,0)}}break}while(!0);ki(e)}function A0(e,n,a,o,u,h,M,C,V,ot,mt,yt,ct,ft){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},v0(n,h,yt);var kt=(h&62914560)===h?mc-b():(h&4194048)===h?M0-b():0;if(kt=aM(yt,kt),kt!==null){xa=h,e.cancelPendingCommit=kt(O0.bind(null,e,n,h,a,o,u,M,C,V,mt,yt,null,ct,ft)),ts(e,h,M,!ot);return}}O0(e,n,h,a,o,u,M,C,V)}function Sy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ni(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,o){n&=~rh,n&=~Hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&fo(e,a,n)}function vc(){return(Ue&6)===0?(jo(0),!1):!0}function fh(){if(xe!==null){if(Ie===0)var e=xe.return;else e=xe,la=Ls=null,Rf(e),xr=null,Ro=0,e=xe;for(;e!==null;)i0(e.alternate,e),e=e.return;xe=null}}function wr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,fh(),Xe=e,xe=a=ra(e.current,null),ye=n,Ie=0,ri=null,Ka=!1,Ar=Gt(e,n),sh=!1,Rr=oi=rh=Hs=Qa=nn=0,Kn=ko=null,oh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return va=n,zl(),a}function R0(e,n){he=null,U.H=Po,n===vr||n===Yl?(n=km(),Ie=3):n===mf?(n=km(),Ie=4):Ie=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,xe===null&&(nn=1,oc(e,mi(n,e.current)))}function C0(){var e=ai.current;return e===null?!0:(ye&4194048)===ye?xi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===xi:!1}function w0(){var e=U.H;return U.H=Po,e===null?Po:e}function D0(){var e=U.A;return U.A=vy,e}function xc(){nn=4,Ka||(ye&4194048)!==ye&&ai.current!==null||(Ar=!0),(Qa&134217727)===0&&(Hs&134217727)===0||Xe===null||ts(Xe,ye,oi,!1)}function hh(e,n,a){var o=Ue;Ue|=2;var u=w0(),h=D0();(Xe!==e||ye!==n)&&(_c=null,wr(e,n)),n=!1;var M=nn;t:do try{if(Ie!==0&&xe!==null){var C=xe,V=ri;switch(Ie){case 8:fh(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ot=Ie;if(Ie=0,ri=null,Dr(e,C,V,ot),a&&Ar){M=0;break t}break;default:ot=Ie,Ie=0,ri=null,Dr(e,C,V,ot)}}yy(),M=nn;break}catch(mt){R0(e,mt)}while(!0);return n&&e.shellSuspendCounter++,la=Ls=null,Ue=o,U.H=u,U.A=h,xe===null&&(Xe=null,ye=0,zl()),M}function yy(){for(;xe!==null;)L0(xe)}function My(e,n){var a=Ue;Ue|=2;var o=w0(),u=D0();Xe!==e||ye!==n?(_c=null,gc=b()+500,wr(e,n)):Ar=Gt(e,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var h=ri;e:switch(Ie){case 1:Ie=0,ri=null,Dr(e,n,h,1);break;case 2:case 9:if(Gm(h)){Ie=0,ri=null,N0(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),ki(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Gm(h)?(Ie=0,ri=null,N0(n)):(Ie=0,ri=null,Dr(e,n,h,7));break;case 5:var M=null;switch(xe.tag){case 26:M=xe.memoizedState;case 5:case 27:var C=xe;if(M?__(M):C.stateNode.complete){Ie=0,ri=null;var V=C.sibling;if(V!==null)xe=V;else{var ot=C.return;ot!==null?(xe=ot,Sc(ot)):xe=null}break e}}Ie=0,ri=null,Dr(e,n,h,5);break;case 6:Ie=0,ri=null,Dr(e,n,h,6);break;case 8:fh(),nn=6;break t;default:throw Error(r(462))}}Ey();break}catch(mt){R0(e,mt)}while(!0);return la=Ls=null,U.H=o,U.A=u,Ue=a,xe!==null?0:(Xe=null,ye=0,zl(),nn)}function Ey(){for(;xe!==null&&!qt();)L0(xe)}function L0(e){var n=e0(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?Sc(e):xe=n}function N0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Rf(n);default:i0(a,n),n=xe=Dm(n,va),n=e0(a,n,va)}e.memoizedProps=e.pendingProps,n===null?Sc(e):xe=n}function Dr(e,n,a,o){la=Ls=null,Rf(n),xr=null,Ro=0;var u=n.return;try{if(fy(e,u,n,a,ye)){nn=1,oc(e,mi(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;nn=1,oc(e,mi(a,e.current)),xe=null;return}n.flags&32768?(Ee||o===1?e=!0:Ar||(ye&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),U0(n,e)):Sc(n)}function Sc(e){var n=e;do{if((n.flags&32768)!==0){U0(n,Ka);return}e=n.return;var a=py(n.alternate,n,va);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function U0(e,n){do{var a=my(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function O0(e,n,a,o,u,h,M,C,V){e.cancelPendingCommit=null;do yc();while(_n!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=$u,Ai(e,a,h,M,C,V),e===Xe&&(xe=Xe=null,ye=0),Cr=n,$a=e,xa=a,lh=h,ch=u,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ry(pt,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=I.p,I.p=2,M=Ue,Ue|=4;try{gy(e,n,a)}finally{Ue=M,I.p=u,U.T=o}}_n=1,P0(),F0(),I0()}}function P0(){if(_n===1){_n=0;var e=$a,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ue;Ue|=4;try{m0(n,e);var h=bh,M=ym(e.containerInfo),C=h.focusedElem,V=h.selectionRange;if(M!==C&&C&&C.ownerDocument&&Sm(C.ownerDocument.documentElement,C)){if(V!==null&&qu(C)){var ot=V.start,mt=V.end;if(mt===void 0&&(mt=ot),"selectionStart"in C)C.selectionStart=ot,C.selectionEnd=Math.min(mt,C.value.length);else{var yt=C.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),kt=C.textContent.length,te=Math.min(V.start,kt),Ve=V.end===void 0?te:Math.min(V.end,kt);!ft.extend&&te>Ve&&(M=Ve,Ve=te,te=M);var tt=xm(C,te),W=xm(C,Ve);if(tt&&W&&(ft.rangeCount!==1||ft.anchorNode!==tt.node||ft.anchorOffset!==tt.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var rt=yt.createRange();rt.setStart(tt.node,tt.offset),ft.removeAllRanges(),te>Ve?(ft.addRange(rt),ft.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),ft.addRange(rt))}}}}for(yt=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var xt=yt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Uc=!!Eh,bh=Eh=null}finally{Ue=u,I.p=o,U.T=a}}e.current=n,_n=2}}function F0(){if(_n===2){_n=0;var e=$a,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ue;Ue|=4;try{u0(e,n.alternate,n)}finally{Ue=u,I.p=o,U.T=a}}_n=3}}function I0(){if(_n===4||_n===3){_n=0,B();var e=$a,n=Cr,a=xa,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,Cr=$a=null,B0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ja=null),nr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var C=o[M];h(C.value,{componentStack:C.stack})}}finally{U.T=n,I.p=u}}(xa&3)!==0&&yc(),ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===uh?Xo++:(Xo=0,uh=e):Xo=0,jo(0)}}function B0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function yc(){return P0(),F0(),I0(),z0()}function z0(){if(_n!==5)return!1;var e=$a,n=lh;lh=0;var a=nr(xa),o=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=ch,ch=null;var h=$a,M=xa;if(_n=0,Cr=$a=null,xa=0,(Ue&6)!==0)throw Error(r(331));var C=Ue;if(Ue|=4,S0(h.current),_0(h,h.current,M,a),Ue=C,jo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{I.p=u,U.T=o,B0(e,n)}}function H0(e,n,a){n=mi(a,n),n=Vf(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(Fn(e,2),ki(e))}function Be(e,n,a){if(e.tag===3)H0(e,e,a);else for(;n!==null;){if(n.tag===3){H0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){e=mi(a,e),a=Gg(2),o=Wa(n,a,2),o!==null&&(Vg(a,o,n,e),Fn(o,2),ki(o));break}}n=n.return}}function dh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new xy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(sh=!0,u.add(a),e=by.bind(null,e,n,a),n.then(e,e))}function by(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>b()-mc?(Ue&2)===0&&wr(e,0):rh|=a,Rr===ye&&(Rr=0)),ki(e)}function G0(e,n){n===0&&(n=Fe()),e=Cs(e,n),e!==null&&(Fn(e,n),ki(e))}function Ty(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),G0(e,a)}function Ay(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),G0(e,a)}function Ry(e,n){return be(e,n)}var Mc=null,Lr=null,ph=!1,Ec=!1,mh=!1,es=0;function ki(e){e!==Lr&&e.next===null&&(Lr===null?Mc=Lr=e:Lr=Lr.next=e),Ec=!0,ph||(ph=!0,wy())}function jo(e,n){if(!mh&&Ec){mh=!0;do for(var a=!1,o=Mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(M&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,j0(o,h))}else h=ye,h=dt(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Gt(o,h)||(a=!0,j0(o,h));o=o.next}while(a);mh=!1}}function Cy(){V0()}function V0(){Ec=ph=!1;var e=0;es!==0&&zy()&&(e=es);for(var n=b(),a=null,o=Mc;o!==null;){var u=o.next,h=k0(o,n);h===0?(o.next=null,a===null?Mc=u:a.next=u,u===null&&(Lr=a)):(a=o,(e!==0||(h&3)!==0)&&(Ec=!0)),o=u}_n!==0&&_n!==5||jo(e),es!==0&&(es=0)}function k0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Pt(h),C=1<<M,V=u[M];V===-1?((C&a)===0||(C&o)!==0)&&(u[M]=ae(C,n)):V<=n&&(e.expiredLanes|=C),h&=~C}if(n=Xe,a=ye,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),nr(a)){case 2:case 8:a=Mt;break;case 32:a=pt;break;case 268435456:a=Dt;break;default:a=pt}return o=X0.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function X0(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yc()&&e.callbackNode!==a)return null;var o=ye;return o=dt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(T0(e,o,n),k0(e,b()),e.callbackNode!=null&&e.callbackNode===a?X0.bind(null,e):null)}function j0(e,n){if(yc())return null;T0(e,n,!0)}function wy(){Gy(function(){(Ue&6)!==0?be(vt,Cy):V0()})}function gh(){if(es===0){var e=gr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),es=e}return es}function W0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function Y0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Dy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=W0((u[mn]||null).action),M=o.submitter;M&&(n=(n=M[mn]||null)?W0(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var C=new Pl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var V=M?Y0(u,M):new FormData(u);Ff(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=M?Y0(u,M):new FormData(u),Ff(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var _h=0;_h<Ju.length;_h++){var vh=Ju[_h],Ly=vh.toLowerCase(),Ny=vh[0].toUpperCase()+vh.slice(1);Di(Ly,"on"+Ny)}Di(bm,"onAnimationEnd"),Di(Tm,"onAnimationIteration"),Di(Am,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(qS,"onTransitionRun"),Di(ZS,"onTransitionStart"),Di(KS,"onTransitionCancel"),Di(Rm,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],V=C.instance,ot=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(mt){Bl(mt)}u.currentTarget=null,h=V}else for(M=0;M<o.length;M++){if(C=o[M],V=C.instance,ot=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(mt){Bl(mt)}u.currentTarget=null,h=V}}}}function Se(e,n){var a=n[Fa];a===void 0&&(a=n[Fa]=new Set);var o=e+"__bubble";a.has(o)||(Z0(n,e,2,!1),a.add(o))}function xh(e,n,a){var o=0;n&&(o|=4),Z0(a,e,o,n)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Sh(e){if(!e[bc]){e[bc]=!0,ut.forEach(function(a){a!=="selectionchange"&&(Uy.has(a)||xh(a,!1,e),xh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bc]||(n[bc]=!0,xh("selectionchange",!1,n))}}function Z0(e,n,a,o){switch(b_(n)){case 2:var u=oM;break;case 8:u=lM;break;default:u=Ph}a=u.bind(null,n,a,e),u=void 0,!zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function yh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=Ia(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=h=M;continue t}C=C.parentNode}}o=o.return}tm(function(){var ot=h,mt=Iu(a),yt=[];t:{var ct=Cm.get(e);if(ct!==void 0){var ft=Pl,kt=e;switch(e){case"keypress":if(Ul(a)===0)break t;case"keydown":case"keyup":ft=AS;break;case"focusin":kt="focus",ft=ku;break;case"focusout":kt="blur",ft=ku;break;case"beforeblur":case"afterblur":ft=ku;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=wS;break;case bm:case Tm:case Am:ft=_S;break;case Rm:ft=LS;break;case"scroll":case"scrollend":ft=hS;break;case"wheel":ft=US;break;case"copy":case"cut":case"paste":ft=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=sm;break;case"toggle":case"beforetoggle":ft=PS}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),tt=te?ct!==null?ct+"Capture":null:ct;te=[];for(var W=ot,rt;W!==null;){var xt=W;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||tt===null||(xt=po(W,tt),xt!=null&&te.push(Yo(W,xt,rt))),Ve)break;W=W.return}0<te.length&&(ct=new ft(ct,kt,null,a,mt),yt.push({event:ct,listeners:te}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ct&&a!==Fu&&(kt=a.relatedTarget||a.fromElement)&&(Ia(kt)||kt[na]))break t;if((ft||ct)&&(ct=mt.window===mt?mt:(ct=mt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(kt=a.relatedTarget||a.toElement,ft=ot,kt=kt?Ia(kt):null,kt!==null&&(Ve=c(kt),te=kt.tag,kt!==Ve||te!==5&&te!==27&&te!==6)&&(kt=null)):(ft=null,kt=ot),ft!==kt)){if(te=im,xt="onMouseLeave",tt="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=sm,xt="onPointerLeave",tt="onPointerEnter",W="pointer"),Ve=ft==null?ct:bs(ft),rt=kt==null?ct:bs(kt),ct=new te(xt,W+"leave",ft,a,mt),ct.target=Ve,ct.relatedTarget=rt,xt=null,Ia(mt)===ot&&(te=new te(tt,W+"enter",kt,a,mt),te.target=rt,te.relatedTarget=Ve,xt=te),Ve=xt,ft&&kt)e:{for(te=Oy,tt=ft,W=kt,rt=0,xt=tt;xt;xt=te(xt))rt++;xt=0;for(var $t=W;$t;$t=te($t))xt++;for(;0<rt-xt;)tt=te(tt),rt--;for(;0<xt-rt;)W=te(W),xt--;for(;rt--;){if(tt===W||W!==null&&tt===W.alternate){te=tt;break e}tt=te(tt),W=te(W)}te=null}else te=null;ft!==null&&K0(yt,ct,ft,te,!1),kt!==null&&Ve!==null&&K0(yt,Ve,kt,te,!0)}}t:{if(ct=ot?bs(ot):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var De=dm;else if(fm(ct))if(pm)De=jS;else{De=kS;var Zt=VS}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&ar(ot.elementType)&&(De=dm):De=XS;if(De&&(De=De(e,ot))){hm(yt,De,a,mt);break t}Zt&&Zt(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&Ci(ct,"number",ct.value)}switch(Zt=ot?bs(ot):window,e){case"focusin":(fm(Zt)||Zt.contentEditable==="true")&&(lr=Zt,Zu=ot,Mo=null);break;case"focusout":Mo=Zu=lr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Mm(yt,a,mt);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":Mm(yt,a,mt)}var me;if(ju)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else or?cm(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(rm&&a.locale!=="ko"&&(or||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&or&&(me=em()):(za=mt,Hu="value"in za?za.value:za.textContent,or=!0)),Zt=Tc(ot,Me),0<Zt.length&&(Me=new am(Me,e,null,a,mt),yt.push({event:Me,listeners:Zt}),me?Me.data=me:(me=um(a),me!==null&&(Me.data=me)))),(me=IS?BS(e,a):zS(e,a))&&(Me=Tc(ot,"onBeforeInput"),0<Me.length&&(Zt=new am("onBeforeInput","beforeinput",null,a,mt),yt.push({event:Zt,listeners:Me}),Zt.data=me)),Dy(yt,e,ot,a,mt)}q0(yt,n)})}function Yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=po(e,a),u!=null&&o.unshift(Yo(e,u,h)),u=po(e,n),u!=null&&o.push(Yo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K0(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var C=a,V=C.alternate,ot=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||ot===null||(V=ot,u?(ot=po(a,h),ot!=null&&M.unshift(Yo(a,ot,V))):u||(ot=po(a,h),ot!=null&&M.push(Yo(a,ot,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Py=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Fy,"")}function J0(e,n){return n=Q0(n),Q0(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":le(e,"class",o);break;case"tabIndex":le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":le(e,a,o);break;case"style":ia(e,o,h);break;case"data":if(n!=="object"){le(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=uS.get(a)||a,ie(e,a,o))}}function Mh(e,n,a,o,u,h){switch(a){case"style":ia(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,h,M,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var C=h=M=u=null,V=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":V=mt;break;case"defaultChecked":ot=mt;break;case"value":h=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ge(e,n,o,mt,a,null)}}ti(e,h,C,V,ot,M,u,!1);return;case"select":Se("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:Ge(e,n,u,C,a,null)}n=h,a=M,e.multiple=!!o,n!=null?ei(e,!!o,n,!1):a!=null&&ei(e,!!o,a,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ge(e,n,M,C,a,null)}ln(e,o,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,V,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Se(Wo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,ot,o,a,null)}return;default:if(ar(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Mh(e,n,mt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ge(e,n,C,o,a,null))}function Iy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,C=null,V=null,ot=null,mt=null;for(ft in a){var yt=a[ft];if(a.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=yt;default:o.hasOwnProperty(ft)||Ge(e,n,ft,null,o,yt)}}for(var ct in o){var ft=o[ct];if(yt=a[ct],o.hasOwnProperty(ct)&&(ft!=null||yt!=null))switch(ct){case"type":h=ft;break;case"name":u=ft;break;case"checked":ot=ft;break;case"defaultChecked":mt=ft;break;case"value":M=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==yt&&Ge(e,n,ct,ft,o,yt)}}Bn(e,M,C,V,ot,mt,h,u);return;case"select":ft=M=C=ct=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ft=V;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ct=h;break;case"defaultValue":C=h;break;case"multiple":M=h;default:h!==V&&Ge(e,n,u,h,o,V)}n=C,a=M,o=ft,ct!=null?ei(e,!!a,ct,!1):!!o!=!!a&&(n!=null?ei(e,!!a,n,!0):ei(e,!!a,a?[]:"",!1));return;case"textarea":ft=ct=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ge(e,n,C,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ct=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ge(e,n,M,u,o,h)}Pe(e,ct,ft);return;case"option":for(var kt in a)ct=a[kt],a.hasOwnProperty(kt)&&ct!=null&&!o.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Ge(e,n,kt,null,o,ct));for(V in o)ct=o[V],ft=a[V],o.hasOwnProperty(V)&&ct!==ft&&(ct!=null||ft!=null)&&(V==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ge(e,n,V,ct,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ct=a[te],a.hasOwnProperty(te)&&ct!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,ct);for(ot in o)if(ct=o[ot],ft=a[ot],o.hasOwnProperty(ot)&&ct!==ft&&(ct!=null||ft!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ge(e,n,ot,ct,o,ft)}return;default:if(ar(n)){for(var Ve in a)ct=a[Ve],a.hasOwnProperty(Ve)&&ct!==void 0&&!o.hasOwnProperty(Ve)&&Mh(e,n,Ve,void 0,o,ct);for(mt in o)ct=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||ct===ft||ct===void 0&&ft===void 0||Mh(e,n,mt,ct,o,ft);return}}for(var tt in a)ct=a[tt],a.hasOwnProperty(tt)&&ct!=null&&!o.hasOwnProperty(tt)&&Ge(e,n,tt,null,o,ct);for(yt in o)ct=o[yt],ft=a[yt],!o.hasOwnProperty(yt)||ct===ft||ct==null&&ft==null||Ge(e,n,yt,ct,o,ft)}function $0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,C=u.duration;if(h&&C&&$0(M)){for(M=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ot=V.startTime;if(ot>C)break;var mt=V.transferSize,yt=V.initiatorType;mt&&$0(yt)&&(V=V.responseEnd,M+=mt*(V<C?1:(C-ot)/(V-ot)))}if(--o,n+=8*(h+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eh=null,bh=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function t_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ah=null;function zy(){var e=window.event;return e&&e.type==="popstate"?e===Ah?!1:(Ah=e,!0):(Ah=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(e){return i_.resolve(null).then(e).catch(Vy)}:n_;function Vy(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function a_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qo(a);for(var h=a.firstChild;h;){var M=h.nextSibling,C=h.nodeName;h[Es]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&qo(e.ownerDocument.body);a=u}while(a);Pr(n)}function s_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Rh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rh(a),ho(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ky(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Xy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function r_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function wh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Dh=null;function o_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function l_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function c_(e,n,a){switch(n=Ac(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ho(e)}var yi=new Map,u_=new Set;function Rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=I.d;I.d={f:Wy,r:Yy,D:qy,C:Zy,L:Ky,m:Qy,X:$y,S:Jy,M:tM};function Wy(){var e=Sa.f(),n=vc();return e||n}function Yy(e){var n=Ba(e);n!==null&&n.tag===5&&n.type==="form"?Rg(n):Sa.r(e)}var Nr=typeof document>"u"?null:document;function f_(e,n,a){var o=Nr;if(o&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u_.has(u)||(u_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),q(n),o.head.appendChild(n)))}}function qy(e){Sa.D(e),f_("dns-prefetch",e,null)}function Zy(e,n){Sa.C(e,n),f_("preconnect",e,n)}function Ky(e,n,a){Sa.L(e,n,a);var o=Nr;if(o&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var h=u;switch(n){case"style":h=Ur(e);break;case"script":h=Or(e)}yi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Zo(h))||n==="script"&&o.querySelector(Ko(h))||(n=o.createElement("link"),An(n,"link",e),q(n),o.head.appendChild(n)))}}function Qy(e,n){Sa.m(e,n);var a=Nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Or(e)}if(!yi.has(h)&&(e=_({rel:"modulepreload",href:e},n),yi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(h)))return}o=a.createElement("link"),An(o,"link",e),q(o),a.head.appendChild(o)}}}function Jy(e,n,a){Sa.S(e,n,a);var o=Nr;if(o&&e){var u=w(o).hoistableStyles,h=Ur(e);n=n||"default";var M=u.get(h);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Zo(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(h))&&Lh(e,a);var V=M=o.createElement("link");q(V),An(V,"link",e),V._p=new Promise(function(ot,mt){V.onload=ot,V.onerror=mt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Cc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(h,M)}}}function $y(e,n){Sa.X(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Or(e),h=o.get(u);h||(h=a.querySelector(Ko(u)),h||(e=_({src:e,async:!0},n),(n=yi.get(u))&&Nh(e,n),h=a.createElement("script"),q(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function tM(e,n){Sa.M(e,n);var a=Nr;if(a&&e){var o=w(a).hoistableScripts,u=Or(e),h=o.get(u);h||(h=a.querySelector(Ko(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=yi.get(u))&&Nh(e,n),h=a.createElement("script"),q(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function h_(e,n,a,o){var u=(u=at.current)?Rc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ur(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ur(a.href);var h=w(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Zo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),h||eM(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Or(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ur(e){return'href="'+se(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function eM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),q(n),e.head.appendChild(n))}function Or(e){return'[src="'+se(e)+'"]'}function Ko(e){return"script[async]"+e}function p_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),An(o,"style",u),Cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ur(a.href);var h=e.querySelector(Zo(u));if(h)return n.state.loading|=4,n.instance=h,q(h),h;o=d_(a),(u=yi.get(u))&&Lh(o,u),h=(e.ownerDocument||e).createElement("link"),q(h);var M=h;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),An(h,"link",o),n.state.loading|=4,Cc(h,a.precedence,e),n.instance=h;case"script":return h=Or(a.src),(u=e.querySelector(Ko(h)))?(n.instance=u,q(u),u):(o=a,(u=yi.get(h))&&(o=_({},a),Nh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,a.precedence,e));return n.instance}function Cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wc=null;function m_(e,n,a){if(wc===null){var o=new Map,u=wc=new Map;u.set(a,o)}else u=wc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Es]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var C=o.get(M);C?C.push(h):o.set(M,[h])}}return o}function g_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ur(o.href),h=n.querySelector(Zo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Dc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,q(h);return}h=n.ownerDocument||n,o=d_(o),(u=yi.get(u))&&Lh(o,u),h=h.createElement("link"),q(h);var M=h;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Dc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uh=0;function aM(e,n){return e.stylesheets&&e.count===0&&Nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Nc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Uh===0&&(Uh=62500*By());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Uh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Lc=null;function Nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Lc=new Map,n.forEach(sM,e),Lc=null,Dc.call(e))}function sM(e,n){if(!(n.state.loading&4)){var a=Lc.get(e);if(a)var o=a.get(null);else{a=new Map,Lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Qo={$$typeof:N,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function rM(e,n,a,o,u,h,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function v_(e,n,a,o,u,h,M,C,V,ot,mt,yt){return e=new rM(e,n,a,M,V,ot,mt,yt,C),n=1,h===!0&&(n|=24),h=ii(3,null,null,n),e.current=h,h.stateNode=e,n=hf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},gf(h),e}function x_(e){return e?(e=fr,e):fr}function S_(e,n,a,o,u,h){u=x_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Wa(e,o,n),a!==null&&(Qn(a,e,n),wo(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Oh(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function M_(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&Qn(n,e,67108864),Oh(e,67108864)}}function E_(e){if(e.tag===13||e.tag===31){var n=li();n=er(n);var a=Cs(e,n);a!==null&&Qn(a,e,n),Oh(e,n)}}var Uc=!0;function oM(e,n,a,o){var u=U.T;U.T=null;var h=I.p;try{I.p=2,Ph(e,n,a,o)}finally{I.p=h,U.T=u}}function lM(e,n,a,o){var u=U.T;U.T=null;var h=I.p;try{I.p=8,Ph(e,n,a,o)}finally{I.p=h,U.T=u}}function Ph(e,n,a,o){if(Uc){var u=Fh(o);if(u===null)yh(e,n,o,Oc,a),T_(e,o);else if(uM(u,e,n,a,o))o.stopPropagation();else if(T_(e,o),n&4&&-1<cM.indexOf(e)){for(;u!==null;){var h=Ba(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Tt(h.pendingLanes);if(M!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-Pt(M);C.entanglements[1]|=V,M&=~V}ki(h),(Ue&6)===0&&(gc=b()+500,jo(0))}}break;case 31:case 13:C=Cs(h,2),C!==null&&Qn(C,h,2),vc(),Oh(h,2)}if(h=Fh(o),h===null&&yh(e,n,o,Oc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else yh(e,n,o,null,a)}}function Fh(e){return e=Iu(e),Ih(e)}var Oc=null;function Ih(e){if(Oc=null,e=Ia(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Oc=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case vt:return 2;case Mt:return 8;case pt:case jt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Bh=!1,is=null,as=null,ss=null,Jo=new Map,$o=new Map,rs=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ba(n),n!==null&&M_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function uM(e,n,a,o,u){switch(n){case"focusin":return is=tl(is,e,n,a,o,u),!0;case"dragenter":return as=tl(as,e,n,a,o,u),!0;case"mouseover":return ss=tl(ss,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Jo.set(h,tl(Jo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,$o.set(h,tl($o.get(h)||null,e,n,a,o,u)),!0}return!1}function A_(e){var n=Ia(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ir(e.priority,function(){E_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ir(e.priority,function(){E_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Fu=o,a.target.dispatchEvent(o),Fu=null}else return n=Ba(a),n!==null&&M_(n),e.blockedOn=a,!1;n.shift()}return!0}function R_(e,n,a){Pc(e)&&a.delete(n)}function fM(){Bh=!1,is!==null&&Pc(is)&&(is=null),as!==null&&Pc(as)&&(as=null),ss!==null&&Pc(ss)&&(ss=null),Jo.forEach(R_),$o.forEach(R_)}function Fc(e,n){e.blockedOn===n&&(e.blockedOn=null,Bh||(Bh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,fM)))}var Ic=null;function C_(e){Ic!==e&&(Ic=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ic===e&&(Ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ih(o||a)===null)continue;break}var h=Ba(a);h!==null&&(e.splice(n,3),n-=3,Ff(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Pr(e){function n(V){return Fc(V,e)}is!==null&&Fc(is,e),as!==null&&Fc(as,e),ss!==null&&Fc(ss,e),Jo.forEach(n),$o.forEach(n);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)A_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[mn]||null;if(typeof h=="function")M||C_(a);else if(M){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[mn]||null)C=M.formAction;else if(Ih(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),C_(a)}}}function w_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function zh(e){this._internalRoot=e}Bc.prototype.render=zh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();S_(a,o,e,n,null,null)},Bc.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S_(e.current,2,null,e,null,null),vc(),n[na]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=zi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&A_(e)}};var D_=t.version;if(D_!=="19.2.4")throw Error(r(527,D_,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{At=zc.inject(hM),bt=zc}catch{}}return nl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Ig,h=Bg,M=zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=v_(e,1,!1,null,null,a,o,null,u,h,M,w_),e[na]=n.current,Sh(e),new zh(n)},nl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Ig,M=Bg,C=zg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=v_(e,1,!0,n,a??null,o,u,V,h,M,C,w_),n.context=x_(null),a=n.current,o=li(),o=er(o),u=ja(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,Fn(n,a),ki(n),e[na]=n.current,Sh(e),new Bc(n)},nl.version="19.2.4",nl}var H_;function EM(){if(H_)return Vh.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Vh.exports=MM(),Vh.exports}var bM=EM();const TM=lx(bM);var G_="popstate";function AM(s={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=Js(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Nd("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,d=m.indexOf("#");p=d===-1?m:m.slice(0,d)}return p+"#"+(typeof c=="string"?c:ml(c))}function r(l,c){Bi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return CM(t,i,r,s)}function tn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Bi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function RM(){return Math.random().toString(36).substring(2,10)}function V_(s,t){return{usr:s.state,key:s.key,idx:t}}function Nd(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Js(t):t,state:i,key:t&&t.key||r||RM()}}function ml({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Js(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function CM(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){p="POP";let x=g(),S=x==null?null:x-d;d=x,m&&m({action:p,location:A.location,delta:S})}function v(x,S){p="PUSH";let R=Nd(A.location,x,S);i&&i(R,x),d=g()+1;let N=V_(R,d),L=A.createHref(R);try{f.pushState(N,"",L)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(L)}c&&m&&m({action:p,location:A.location,delta:1})}function y(x,S){p="REPLACE";let R=Nd(A.location,x,S);i&&i(R,x),d=g();let N=V_(R,d),L=A.createHref(R);f.replaceState(N,"",L),c&&m&&m({action:p,location:A.location,delta:0})}function E(x){return wM(x)}let A={get action(){return p},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(G_,_),m=x,()=>{l.removeEventListener(G_,_),m=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let S=E(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:y,go(x){return f.go(x)}};return A}function wM(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ml(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function cx(s,t,i="/"){return DM(s,t,i,!1)}function DM(s,t,i,r){let l=typeof t=="string"?Js(t):t,c=Ua(l.pathname||"/",i);if(c==null)return null;let f=ux(s);LM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=VM(c);p=HM(f[m],d,r)}return p}function ux(s,t=[],i=[],r="",l=!1){let c=(f,p,m=l,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;tn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Da([r,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),ux(f.children,t,v,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:BM(_,f.index),routesMeta:v})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of fx(f.path))c(f,p,!0,m)}),t}function fx(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=fx(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function LM(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:zM(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var NM=/^:[\w-]+$/,UM=3,OM=2,PM=1,FM=10,IM=-2,k_=s=>s==="*";function BM(s,t){let i=s.split("/"),r=i.length;return i.some(k_)&&(r+=IM),t&&(r+=OM),i.filter(l=>!k_(l)).reduce((l,c)=>l+(NM.test(c)?UM:c===""?PM:FM),r)}function zM(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function HM(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],d=p===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=Mu({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),v=m.route;if(!_&&d&&i&&!r[r.length-1].route.index&&(_=Mu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Da([c,_.pathname]),pathnameBase:WM(Da([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=Da([c,_.pathnameBase]))}return f}function Mu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=GM(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((d,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=p[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=p[v];return _&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:s}}function GM(s,t=!1,i=!0){Bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function VM(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Ua(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var kM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function XM(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Js(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=X_(i.substring(1),"/"):c=X_(i,t)):c=t,{pathname:c,search:YM(r),hash:qM(l)}}function X_(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Wh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jM(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function hx(s){let t=jM(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function dx(s,t,i,r=!1){let l;typeof s=="string"?l=Js(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),Wh("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Wh("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Wh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?t[_]:"/"}let m=XM(l,p),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var Da=s=>s.join("/").replace(/\/\/+/g,"/"),WM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),YM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,qM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,ZM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function KM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function QM(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function mx(s,t){let i=s;if(typeof i!="string"||!kM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(px)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ua(f.pathname,t);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gx=["POST","PUT","PATCH","DELETE"];new Set(gx);var JM=["GET",...gx];new Set(JM);var oo=$.createContext(null);oo.displayName="DataRouter";var Cu=$.createContext(null);Cu.displayName="DataRouterState";var $M=$.createContext(!1),_x=$.createContext({isTransitioning:!1});_x.displayName="ViewTransition";var tE=$.createContext(new Map);tE.displayName="Fetchers";var eE=$.createContext(null);eE.displayName="Await";var Ti=$.createContext(null);Ti.displayName="Navigation";var Ml=$.createContext(null);Ml.displayName="Location";var ea=$.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Np=$.createContext(null);Np.displayName="RouteError";var vx="REACT_ROUTER_ERROR",nE="REDIRECT",iE="ROUTE_ERROR_RESPONSE";function aE(s){if(s.startsWith(`${vx}:${nE}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function sE(s){if(s.startsWith(`${vx}:${iE}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ZM(t.status,t.statusText,t.data)}catch{}}function rE(s,{relative:t}={}){tn(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=$.useContext(Ti),{hash:l,pathname:c,search:f}=bl(s,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Da([i,c])),r.createHref({pathname:p,search:f,hash:l})}function El(){return $.useContext(Ml)!=null}function Ms(){return tn(El(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Ml).location}var xx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sx(s){$.useContext(Ti).static||$.useLayoutEffect(s)}function wu(){let{isDataRoute:s}=$.useContext(ea);return s?yE():oE()}function oE(){tn(El(),"useNavigate() may be used only in the context of a <Router> component.");let s=$.useContext(oo),{basename:t,navigator:i}=$.useContext(Ti),{matches:r}=$.useContext(ea),{pathname:l}=Ms(),c=JSON.stringify(hx(r)),f=$.useRef(!1);return Sx(()=>{f.current=!0}),$.useCallback((m,d={})=>{if(Bi(f.current,xx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=dx(m,JSON.parse(c),l,d.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Da([t,g.pathname])),(d.replace?i.replace:i.push)(g,d.state,d)},[t,i,c,l,s])}var lE=$.createContext(null);function cE(s){let t=$.useContext(ea).outlet;return $.useMemo(()=>t&&$.createElement(lE.Provider,{value:s},t),[t,s])}function bl(s,{relative:t}={}){let{matches:i}=$.useContext(ea),{pathname:r}=Ms(),l=JSON.stringify(hx(i));return $.useMemo(()=>dx(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function uE(s,t){return yx(s,t)}function yx(s,t,i,r,l){tn(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=$.useContext(Ti),{matches:f}=$.useContext(ea),p=f[f.length-1],m=p?p.params:{},d=p?p.pathname:"/",g=p?p.pathnameBase:"/",_=p&&p.route;{let R=_&&_.path||"";Ex(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Ms(),y;if(t){let R=typeof t=="string"?Js(t):t;tn(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=v;let E=y.pathname||"/",A=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=cx(s,{pathname:A});Bi(_||x!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Bi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=mE(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:Da([g,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Da([g,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,r,l);return t&&S?$.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function fE(){let s=SE(),t=KM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:c},"ErrorBoundary")," or"," ",$.createElement("code",{style:c},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),i?$.createElement("pre",{style:l},i):null,f)}var hE=$.createElement(fE,null),Mx=class extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=sE(s.digest);i&&(s=i)}let t=s!==void 0?$.createElement(ea.Provider,{value:this.props.routeContext},$.createElement(Np.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?$.createElement(dE,{error:s},t):t}};Mx.contextType=$M;var Yh=new WeakMap;function dE({children:s,error:t}){let{basename:i}=$.useContext(Ti);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=aE(t.digest);if(r){let l=Yh.get(t);if(l)throw l;let c=mx(r.location,i);if(px&&!Yh.get(t))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Yh.set(t,f),f}return $.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function pE({routeContext:s,match:t,children:i}){let r=$.useContext(oo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(ea.Provider,{value:s},i)}function mE(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:y}=i,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!y||y[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let d=i&&r?(g,_)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:QM(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,v)=>{let y,E=!1,A=null,x=null;i&&(y=f&&_.route.id?f[_.route.id]:void 0,A=_.route.errorElement||hE,p&&(m<0&&v===0?(Ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):m===v&&(E=!0,x=_.route.hydrateFallbackElement||null)));let S=t.concat(c.slice(0,v+1)),R=()=>{let N;return y?N=A:E?N=x:_.route.Component?N=$.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=g,$.createElement(pE,{match:_,routeContext:{outlet:g,matches:S,isDataRoute:i!=null},children:N})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?$.createElement(Mx,{location:i.location,revalidation:i.revalidation,component:A,error:y,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:d}):R()},null)}function Up(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gE(s){let t=$.useContext(oo);return tn(t,Up(s)),t}function _E(s){let t=$.useContext(Cu);return tn(t,Up(s)),t}function vE(s){let t=$.useContext(ea);return tn(t,Up(s)),t}function Op(s){let t=vE(s),i=t.matches[t.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function xE(){return Op("useRouteId")}function SE(){let s=$.useContext(Np),t=_E("useRouteError"),i=Op("useRouteError");return s!==void 0?s:t.errors?.[i]}function yE(){let{router:s}=gE("useNavigate"),t=Op("useNavigate"),i=$.useRef(!1);return Sx(()=>{i.current=!0}),$.useCallback(async(l,c={})=>{Bi(i.current,xx),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var j_={};function Ex(s,t,i){!t&&!j_[s]&&(j_[s]=!0,Bi(!1,i))}$.memo(ME);function ME({routes:s,future:t,state:i,onError:r}){return yx(s,void 0,i,r,t)}function EE(s){return cE(s.context)}function ms(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bE({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){tn(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=$.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Js(i));let{pathname:d="/",search:g="",hash:_="",state:v=null,key:y="default"}=i,E=$.useMemo(()=>{let A=Ua(d,p);return A==null?null:{location:{pathname:A,search:g,hash:_,state:v,key:y},navigationType:r}},[p,d,g,_,v,y,r]);return Bi(E!=null,`<Router basename="${p}"> is not able to match the URL "${d}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:$.createElement(Ti.Provider,{value:m},$.createElement(Ml.Provider,{children:t,value:E}))}function TE({children:s,location:t}){return uE(Ud(s),t)}function Ud(s,t=[]){let i=[];return $.Children.forEach(s,(r,l)=>{if(!$.isValidElement(r))return;let c=[...t,l];if(r.type===$.Fragment){i.push.apply(i,Ud(r.props.children,c));return}tn(r.type===ms,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ud(r.props.children,c)),i.push(f)}),i}var pu="get",mu="application/x-www-form-urlencoded";function Du(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function AE(s){return Du(s)&&s.tagName.toLowerCase()==="button"}function RE(s){return Du(s)&&s.tagName.toLowerCase()==="form"}function CE(s){return Du(s)&&s.tagName.toLowerCase()==="input"}function wE(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function DE(s,t){return s.button===0&&(!t||t==="_self")&&!wE(s)}var Hc=null;function LE(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var NE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qh(s){return s!=null&&!NE.has(s)?(Bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):s}function UE(s,t){let i,r,l,c,f;if(RE(s)){let p=s.getAttribute("action");r=p?Ua(p,t):null,i=s.getAttribute("method")||pu,l=qh(s.getAttribute("enctype"))||mu,c=new FormData(s)}else if(AE(s)||CE(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?Ua(m,t):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||pu,l=qh(s.getAttribute("formenctype"))||qh(p.getAttribute("enctype"))||mu,c=new FormData(p,s),!LE()){let{name:d,type:g,value:_}=s;if(g==="image"){let v=d?`${d}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else d&&c.append(d,_)}}else{if(Du(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pu,r=null,l=mu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function OE(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&Ua(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function PE(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FE(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function IE(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await PE(c,i);return f.links?f.links():[]}return[]}));return GE(r.flat(1).filter(FE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function W_(s,t,i,r,l,c){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):c==="data"?t.filter((m,d)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function BE(s,t,{includeHydrateFallback:i}={}){return zE(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function zE(s){return[...new Set(s)]}function HE(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function GE(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(HE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function bx(){let s=$.useContext(oo);return Pp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function VE(){let s=$.useContext(Cu);return Pp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Fp=$.createContext(void 0);Fp.displayName="FrameworkContext";function Tx(){let s=$.useContext(Fp);return Pp(s,"You must render this element inside a <HydratedRouter> element"),s}function kE(s,t){let i=$.useContext(Fp),[r,l]=$.useState(!1),[c,f]=$.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=t,v=$.useRef(null);$.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=S=>{S.forEach(R=>{f(R.isIntersecting)})},x=new IntersectionObserver(A,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[s]),$.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:il(p,y),onBlur:il(m,E),onMouseEnter:il(d,y),onMouseLeave:il(g,E),onTouchStart:il(_,y)}]:[!1,v,{}]}function il(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function XE({page:s,...t}){let{router:i}=bx(),r=$.useMemo(()=>cx(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?$.createElement(WE,{page:s,matches:r,...t}):null}function jE(s){let{manifest:t,routeModules:i}=Tx(),[r,l]=$.useState([]);return $.useEffect(()=>{let c=!1;return IE(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function WE({page:s,matches:t,...i}){let r=Ms(),{future:l,manifest:c,routeModules:f}=Tx(),{basename:p}=bx(),{loaderData:m,matches:d}=VE(),g=$.useMemo(()=>W_(s,t,d,c,r,"data"),[s,t,d,c,r]),_=$.useMemo(()=>W_(s,t,d,c,r,"assets"),[s,t,d,c,r]),v=$.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let A=new Set,x=!1;if(t.forEach(R=>{let N=c.routes[R.route.id];!N||!N.hasLoader||(!g.some(L=>L.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||N.hasClientLoader?x=!0:A.add(R.route.id))}),A.size===0)return[];let S=OE(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return x&&A.size>0&&S.searchParams.set("_routes",t.filter(R=>A.has(R.route.id)).map(R=>R.route.id).join(",")),[S.pathname+S.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,c,g,t,s,f]),y=$.useMemo(()=>BE(_,c),[_,c]),E=jE(_);return $.createElement($.Fragment,null,v.map(A=>$.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),y.map(A=>$.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:x})=>$.createElement("link",{key:A,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function YE(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var qE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qE&&(window.__reactRouterVersion="7.13.0")}catch{}function ZE({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=$.useRef();l.current==null&&(l.current=AM({window:r,v5Compat:!0}));let c=l.current,[f,p]=$.useState({action:c.action,location:c.location}),m=$.useCallback(d=>{i===!1?p(d):$.startTransition(()=>p(d))},[i]);return $.useLayoutEffect(()=>c.listen(m),[c,m]),$.createElement(bE,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=$.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...y},E){let{basename:A,unstable_useTransitions:x}=$.useContext(Ti),S=typeof d=="string"&&Ax.test(d),R=mx(d,A);d=R.to;let N=rE(d,{relative:l}),[L,G,H]=kE(r,y),z=$E(d,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:x});function T(Q){t&&t(Q),Q.defaultPrevented||z(Q)}let D=$.createElement("a",{...y,...H,href:R.absoluteURL||N,onClick:R.isExternal||c?t:T,ref:YE(E,G),target:m,"data-discover":!S&&i==="render"?"true":void 0});return L&&!S?$.createElement($.Fragment,null,D,$.createElement(XE,{page:N})):D});Ra.displayName="Link";var KE=$.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...d},g){let _=bl(f,{relative:d.relative}),v=Ms(),y=$.useContext(Cu),{navigator:E,basename:A}=$.useContext(Ti),x=y!=null&&ab(_)&&p===!0,S=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,R=v.pathname,N=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(R=R.toLowerCase(),N=N?N.toLowerCase():null,S=S.toLowerCase()),N&&A&&(N=Ua(N,A)||N);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let G=R===S||!l&&R.startsWith(S)&&R.charAt(L)==="/",H=N!=null&&(N===S||!l&&N.startsWith(S)&&N.charAt(S.length)==="/"),z={isActive:G,isPending:H,isTransitioning:x},T=G?t:void 0,D;typeof r=="function"?D=r(z):D=[r,G?"active":null,H?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Q=typeof c=="function"?c(z):c;return $.createElement(Ra,{...d,"aria-current":T,className:D,ref:g,style:Q,to:f,viewTransition:p},typeof m=="function"?m(z):m)});KE.displayName="NavLink";var QE=$.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=pu,action:p,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...y},E)=>{let{unstable_useTransitions:A}=$.useContext(Ti),x=nb(),S=ib(p,{relative:d}),R=f.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&Ax.test(p),L=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let H=G.nativeEvent.submitter,z=H?.getAttribute("formmethod")||f,T=()=>x(H||G.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:c,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});A&&i!==!1?$.startTransition(()=>T()):T()};return $.createElement("form",{ref:E,method:R,action:S,onSubmit:r?m:L,...y,"data-discover":!N&&s==="render"?"true":void 0})});QE.displayName="Form";function JE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rx(s){let t=$.useContext(oo);return tn(t,JE(s)),t}function $E(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let d=wu(),g=Ms(),_=bl(s,{relative:c});return $.useCallback(v=>{if(DE(v,t)){v.preventDefault();let y=i!==void 0?i:ml(g)===ml(_),E=()=>d(s,{replace:y,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?$.startTransition(()=>E()):E()}},[g,d,_,i,r,t,s,l,c,f,p,m])}var tb=0,eb=()=>`__${String(++tb)}__`;function nb(){let{router:s}=Rx("useSubmit"),{basename:t}=$.useContext(Ti),i=xE(),r=s.fetch,l=s.navigate;return $.useCallback(async(c,f={})=>{let{action:p,method:m,encType:d,formData:g,body:_}=UE(c,t);if(f.navigate===!1){let v=f.fetcherKey||eb();await r(v,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function ib(s,{relative:t}={}){let{basename:i}=$.useContext(Ti),r=$.useContext(ea);tn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...bl(s||".",{relative:t})},f=Ms();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Da([i,c.pathname])),ml(c)}function ab(s,{relative:t}={}){let i=$.useContext(_x);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rx("useViewTransitionState"),l=bl(s,{relative:t});if(!i.isTransitioning)return!1;let c=Ua(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ua(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Mu(l.pathname,f)!=null||Mu(l.pathname,c)!=null}const sb="/Vibra-Web/assets/VibraLogo-DwWVlSzh.png";function rb(){return O.jsxs("nav",{className:"navbar",children:[O.jsx(Ra,{to:"/",className:"logo-link",children:O.jsx("img",{src:sb,alt:"VIBRA Logo",className:"navbar-logo"})}),O.jsxs("div",{className:"nav-links",children:[O.jsx(Ra,{to:"/",children:"HOME"}),O.jsx(Ra,{to:"/about",children:"ABOUT"}),O.jsx(Ra,{to:"/team",children:"TEAM"}),O.jsx(Ra,{to:"/simulation",children:"SIMULATION"}),O.jsx(Ra,{to:"/instruction",children:"INSTRUCTION"}),O.jsx(Ra,{to:"/contact",children:"CONTACT"})]})]})}function ob(){return O.jsxs("div",{className:"app-container",children:[O.jsx(rb,{}),O.jsx("div",{className:"page-content",children:O.jsx(EE,{})})]})}function lb(){const s=wu(),t=Ms();return O.jsxs("div",{className:"home-container",children:[O.jsx("h1",{className:"main-title",children:"VIBRA"}),O.jsx("h2",{className:"subtitle",children:"STUDIO SIMULATION"}),O.jsxs("button",{className:"primary-btn",onClick:()=>s("/about"),children:[O.jsx("span",{className:"btn-text",children:"LEARN MORE ABOUT US"}),O.jsx("span",{className:"btn-arrow",children:"→"})]})]},t.key)}function cb(){const[s,t]=$.useState(!1),i=wu();return $.useEffect(()=>{t(!0)},[]),O.jsxs("div",{className:`about-container ${s?"enter":""}`,children:[O.jsx("h1",{children:"ABOUT US"}),O.jsx("h3",{children:"WE ARE VIBRA"}),O.jsxs("div",{className:"about-content",children:[O.jsxs("div",{className:"about-text",children:[O.jsx("p",{className:"about-paragraph p1",children:O.jsx("span",{className:"para-inner",children:"VIBRA is a web-based studio simulation platform designed to visualize and analyze acoustic data through an interactive three-dimensional environment. It bridges real-world sound measurements and digital visualization, allowing users to better understand how sound behaves within enclosed spaces."})}),O.jsx("p",{className:"about-paragraph p2",children:O.jsx("span",{className:"para-inner",children:"The platform gathers acoustic parameters such as RT60 values and spatial measurements from a physical prototype and transforms them into meaningful visual representations. Through its integrated 3D simulation, users can identify acoustic conditions including hot spots, dead spots, and neutral zones within a room."})}),O.jsx("p",{className:"about-paragraph p3",children:O.jsx("span",{className:"para-inner",children:"VIBRA aims to support students, engineers, and designers by providing a clear and intuitive way to evaluate room acoustics, explore data-driven insights, and improve sound optimization decisions. By combining data analysis with immersive visualization, VIBRA delivers a modern approach to acoustic assessment and simulation."})})]}),O.jsx("div",{className:"about-cta-side",children:O.jsxs("button",{className:"about-cta-btn",onClick:()=>i("/team"),"aria-label":"Meet the developers",children:[O.jsx("span",{className:"cta-arrow",children:"→"}),O.jsx("span",{className:"cta-text",children:"Meet the developers"})]})})]})]})}const ub="/Vibra-Web/assets/marichu-kG7RSE-D.png",fb="/Vibra-Web/assets/missy-BteT_0I_.png",hb="/Vibra-Web/assets/khlowee-CAL1KU9a.png",db="/Vibra-Web/assets/juliann-BXcYWaAK.png",pb="/Vibra-Web/assets/lance-DPwIT8nK.png",mb=[{name:"Marichu C. Espelimbergo",role:"Frontend Developer",image:ub},{name:"Missy Ann Jhlezshir G. Espiritu",role:"UI/UX Designer",image:fb},{name:"Khlowee A. Mendoza",role:"Assistant Backend Developer",image:hb},{name:"Juliann Vincent B. Quibral",role:"Backend Developer",image:db},{name:"Lance Gabrielle A. Santos",role:"Assistant Frontend Developer",image:pb}];function gb(){const s=wu(),[t,i]=$.useState(!1);return $.useEffect(()=>{i(!0)},[]),O.jsxs("div",{className:`team-container ${t?"enter":""}`,children:[O.jsx("h1",{className:"team-title",children:"OUR TEAM"}),O.jsx("h3",{className:"team-subtitle",children:"MEET THE DEVELOPERS"}),O.jsx("div",{className:"team-grid",children:mb.map((r,l)=>O.jsx("div",{className:"team-member",children:O.jsx("div",{className:"flip-card",children:O.jsxs("div",{className:"flip-inner",children:[O.jsx("div",{className:"flip-front",style:{backgroundImage:`url(${r.image})`}}),O.jsxs("div",{className:"flip-back",children:[O.jsx("div",{className:"team-name",children:r.name}),O.jsx("div",{className:"team-role",children:r.role})]})]})})},l))}),O.jsx("div",{className:"team-cta-down",children:O.jsxs("button",{className:"team-cta-btn",type:"button",onClick:()=>s("/simulation"),"aria-label":"Continue to simulation",children:[O.jsx("span",{className:"team-cta-arrow",children:"→"}),O.jsx("span",{className:"team-cta-text",children:"Continue to Simulation"})]})})]})}const _b="1OAfQI6MwheL6wIes1EhGjak3G1jSVLFGppmzqTL9MWQ",vb=[{label:"Layer 1",gid:"0"},{label:"Layer 2",gid:"540291160"},{label:"Layer 3",gid:"1597351297"},{label:"Layer 4",gid:"1962364642"}],xb=s=>`https://docs.google.com/spreadsheets/d/${_b}/export?format=csv&gid=${s}`,Od=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function Y_(s){const t=String(s).replace(/\r/g,""),i=[];let r=[],l="",c=!1;for(let m=0;m<t.length;m++){const d=t[m],g=t[m+1];if(d==='"'){c&&g==='"'?(l+='"',m++):c=!c;continue}if(d===","&&!c){r.push(l),l="";continue}if(d===`
`&&!c){r.push(l),i.push(r),r=[],l="";continue}l+=d}if((l.length||r.length)&&(r.push(l),i.push(r)),!i.length)return[];const f=i[0].map(m=>Od(m)),p=[];for(let m=1;m<i.length;m++){const d=i[m];if(d.every(_=>Od(_)===""))continue;const g={};f.forEach((_,v)=>{g[_]=String(d[v]??"").trim()}),p.push(g)}return p}function Rn(s,t){for(const i of t){const r=Od(i);if(Object.prototype.hasOwnProperty.call(s,r))return s[r]}return""}function Sb(s){const t=String(s??"").trim(),i=Number(t.replace("°","").trim());return Number.isFinite(i)?i:null}function q_(s,t){const i=Sb(s);return t==="Layer 1"&&i===270?"271":String(s??"").trim()}function yb(s){const t=Number(String(s??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}function Mb({rawRows:s,setRawRows:t,displayedRows:i,searchInput:r,setSearchInput:l,setAppliedSearch:c,sortValue:f,setSortValue:p,onExport:m,onDeploy:d,onReset:g,spatial:_,uploadStatus:v,setUploadStatus:y,treatmentApplied:E={hotspot:!1,deadspot:!1}}){const[A,x]=$.useState(!1),[S,R]=$.useState(!1),N=$.useRef(null);$.useEffect(()=>{if(v.type==="idle")return;const k=setTimeout(()=>y({type:"idle",message:""}),5e3);return()=>clearTimeout(k)},[v,y]);const L=async()=>{try{y({type:"loading",message:"Uploading data from Google Sheet (all layers)..."});const k=[];for(const Z of vb){const I=await(await fetch(xb(Z.gid),{redirect:"follow"})).text();if(I.toLowerCase().includes("<html")||I.toLowerCase().includes("<!doctype"))throw new Error(`Sheet ${Z.label} is not publicly accessible as CSV.`);const ht=Y_(I).map(St=>{const P=Rn(St,["angle"]);return{Angle:q_(P,Z.label),Decibel:Rn(St,["db","dB","decibel"]),Ultrasonic:Rn(St,["utv","ultrasonic","ultrasonicvalue"]),RT60:Rn(St,["rt60","reverberation","rt60value"]),Classification:Rn(St,["class","classification"]),Layer:Z.label,LengthRaw:Rn(St,["length"]),WidthRaw:Rn(St,["width"]),HeightRaw:Rn(St,["utvh","height","heightraw"])}});k.push(...ht)}if(!k.length)throw new Error("No data found from all sheets.");t(k),y({type:"success",message:`Done uploading. Loaded ${k.length} row(s) from all layers.`}),x(!1),R(!1)}catch(k){console.error("Cloud import failed:",k),y({type:"error",message:`Upload failed: ${String(k.message||k)}`}),x(!1),R(!1)}},G=k=>{const Z=k.target.files?.[0];if(!Z)return;if(!Z.name.toLowerCase().endsWith(".csv")){y({type:"error",message:"CSV only. Please upload a .csv file."}),k.target.value="";return}y({type:"loading",message:"Uploading data from local CSV..."});const U=new FileReader;U.onload=I=>{try{const it=I.target.result,ht=Y_(String(it));if(!ht.length)throw new Error("CSV has no data rows.");const St=ht.map(P=>{const Y=Rn(P,["layer"])||"Local",_t=Rn(P,["angle"]);return{Angle:q_(_t,Y),Decibel:Rn(P,["db","dB","decibel"]),Ultrasonic:Rn(P,["utv","ultrasonic"]),RT60:Rn(P,["rt60","reverberation"]),HeightRaw:Rn(P,["utvh","height","heightraw"]),Classification:Rn(P,["class","classification"]),Layer:Y,LengthRaw:Rn(P,["length"]),WidthRaw:Rn(P,["width"])}});t(St),y({type:"success",message:`Done uploading. Loaded ${St.length} row(s).`})}catch(it){y({type:"error",message:`Upload failed: ${String(it.message||it)}`})}},U.readAsText(Z),x(!1),R(!1),k.target.value=""},H=()=>c(r),z=k=>{p(k),R(!1)},T=k=>k==null?"—":`${k.toFixed(1)} cm`,D=k=>k==null?"—":`${k.toFixed(2)} m²`,Q=$.useMemo(()=>{const k=s.map(U=>yb(U.RT60)).filter(U=>Number.isFinite(U));return k.length?k.reduce((U,I)=>U+I,0)/k.length:null},[s]),F=$.useMemo(()=>{if(Q==null)return null;let k=Q;return E.hotspot&&(k-=.08),E.deadspot&&(k+=.08),Math.max(0,k)},[Q,E]),X=$.useMemo(()=>{const k=F;return k==null?"—":k>.4?"Hotspot":k<.3?"Deadspot":"Qualified"},[F]),et=E.hotspot||E.deadspot?X:_.qualified==null?"—":_.qualified?"Qualified":"Not Qualified";return O.jsxs("div",{className:"sim-slide sim-slide-1",children:[O.jsx("h1",{className:"sim-title",children:"SIMULATION"}),v.type!=="idle"&&O.jsxs("div",{className:`upload-toast upload-toast--floating ${v.type}`,children:[v.message,O.jsx("button",{className:"upload-toast-close",type:"button",onClick:()=>y({type:"idle",message:""}),"aria-label":"Close notification",children:"✕"})]}),O.jsxs("div",{className:"sim-row",children:[O.jsxs("div",{className:"glass-card glass-card--raw",children:[O.jsx("h2",{className:"card-title",children:"RAW PARAMETERS"}),O.jsxs("div",{className:"raw-top",children:[O.jsx("input",{className:"search-input",placeholder:"Search...",value:r,onChange:k=>l(k.target.value),onKeyDown:k=>k.key==="Enter"&&H()}),O.jsx("button",{className:"small-btn",type:"button",onClick:H,children:"Enter"}),O.jsxs("div",{className:"sort-wrapper",children:[O.jsx("button",{className:"small-btn",type:"button",onClick:()=>{R(k=>!k),x(!1)},children:"Sort ▾"}),S&&O.jsxs("div",{className:"sort-dropdown",children:[O.jsx("button",{type:"button",onClick:()=>z("layer:Layer 1"),children:"Layer 1"}),O.jsx("button",{type:"button",onClick:()=>z("layer:Layer 2"),children:"Layer 2"}),O.jsx("button",{type:"button",onClick:()=>z("layer:Layer 3"),children:"Layer 3"}),O.jsx("button",{type:"button",onClick:()=>z("layer:Layer 4"),children:"Layer 4"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>z("class:hotspot"),children:"Hot Spot"}),O.jsx("button",{type:"button",onClick:()=>z("class:deadspot"),children:"Dead Spot"}),O.jsx("div",{className:"sort-divider"}),O.jsx("button",{type:"button",onClick:()=>z(null),children:"Clear Sort"})]})]})]}),O.jsx("div",{className:"data-box",children:O.jsxs("table",{className:"raw-table",children:[O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{children:"No."}),O.jsx("th",{children:"Angle"}),O.jsx("th",{children:"Decibel"}),O.jsx("th",{children:"Ultrasonic"}),O.jsx("th",{children:"RT60"}),O.jsx("th",{children:"Classification"}),O.jsx("th",{children:"Layer"})]})}),O.jsx("tbody",{children:i.map((k,Z)=>O.jsxs("tr",{children:[O.jsx("td",{children:Z+1}),O.jsx("td",{children:k.Angle}),O.jsx("td",{children:k.Decibel}),O.jsx("td",{children:k.Ultrasonic}),O.jsx("td",{children:k.RT60}),O.jsx("td",{children:k.Classification}),O.jsx("td",{children:k.Layer})]},`${k.Layer}-${Z}`))})]})}),O.jsxs("div",{className:"raw-bottom",children:[O.jsxs("div",{className:"left-actions",children:[O.jsxs("div",{className:"import-wrapper",children:[O.jsx("button",{className:"action-btn",type:"button",onClick:()=>{x(k=>!k),R(!1)},children:"Import ▾"}),A&&O.jsxs("div",{className:"import-dropdown",children:[O.jsx("button",{type:"button",onClick:L,children:"Cloud"}),O.jsx("button",{type:"button",onClick:()=>N.current?.click(),children:"Local"})]}),O.jsx("input",{type:"file",ref:N,style:{display:"none"},accept:".csv",onChange:G})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:m,disabled:!i.length,children:"Export"}),O.jsx("button",{className:"action-btn",type:"button",onClick:d,disabled:!i.length,children:"Deploy"})]}),O.jsx("button",{className:"action-btn",type:"button",onClick:g,children:"Reset"})]})]}),O.jsxs("div",{className:"glass-card glass-card--spatial",style:{position:"relative"},children:[O.jsx("h2",{className:"card-title",children:"SPATIAL STATUS"}),O.jsx("p",{className:"label",children:"PHYSICAL DIMENSION:"}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Length: ",T(_.lengthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Width: ",T(_.widthCm)]})}),O.jsx("div",{className:"dimension-input",children:O.jsxs("span",{className:"dimension-text",children:["Height: ",_.heightRaw?`${_.heightRaw} cm`:"—"]})}),O.jsxs("div",{className:"status-wrapper",children:[O.jsx("p",{className:"status-label",children:"STATUS:"}),O.jsx("div",{className:"status-box",children:O.jsxs("div",{className:"status-inner",children:[O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Area:"})," ",O.jsx("b",{children:D(_.area)})]}),O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"Result:"})," ",O.jsx("b",{children:et})]}),O.jsxs("div",{className:"status-line",children:[O.jsx("span",{children:"RT60 Average:"})," ",O.jsx("b",{children:F==null?"—":F.toFixed(3)})]}),O.jsxs("div",{className:"status-hint",children:["Target RT60 after treatment: ",O.jsx("b",{children:"0.3–0.4"}),"."]}),O.jsxs("div",{className:"status-hint",children:["Above ",O.jsx("b",{children:"0.4"})," = Hotspot, below ",O.jsx("b",{children:"0.3"})," = Deadspot."]})]})})]}),O.jsxs("div",{className:"spatial-meta",children:["Active rows: ",O.jsx("b",{children:i.length})," / ",s.length,f?O.jsxs(O.Fragment,{children:[" ","• Filter: ",O.jsx("b",{children:f})]}):null]})]})]})]})}const Ip="183",Jr={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eb=0,Z_=1,bb=2,gu=1,Tb=2,fl=3,Ss=0,$n=1,Yi=2,La=0,$r=1,K_=2,Q_=3,J_=4,Ab=5,Ys=100,Rb=101,Cb=102,wb=103,Db=104,Lb=200,Nb=201,Ub=202,Ob=203,Pd=204,Fd=205,Pb=206,Fb=207,Ib=208,Bb=209,zb=210,Hb=211,Gb=212,Vb=213,kb=214,Id=0,Bd=1,zd=2,no=3,Hd=4,Gd=5,Vd=6,kd=7,Cx=0,Xb=1,jb=2,Qi=0,wx=1,Dx=2,Lx=3,Nx=4,Ux=5,Ox=6,Px=7,Fx=300,Qs=301,io=302,Zh=303,Kh=304,Lu=306,Xd=1e3,Ca=1001,jd=1002,Dn=1003,Wb=1004,Gc=1005,Pn=1006,Qh=1007,Zs=1008,hi=1009,Ix=1010,Bx=1011,gl=1012,Bp=1013,$i=1014,Zi=1015,Oa=1016,zp=1017,Hp=1018,_l=1020,zx=35902,Hx=35899,Gx=1021,Vx=1022,Ii=1023,Pa=1026,Ks=1027,kx=1028,Gp=1029,ao=1030,Vp=1031,kp=1033,_u=33776,vu=33777,xu=33778,Su=33779,Wd=35840,Yd=35841,qd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37488,tp=37489,ep=37490,np=37491,ip=37808,ap=37809,sp=37810,rp=37811,op=37812,lp=37813,cp=37814,up=37815,fp=37816,hp=37817,dp=37818,pp=37819,mp=37820,gp=37821,_p=36492,vp=36494,xp=36495,Sp=36283,yp=36284,Mp=36285,Ep=36286,Yb=3200,Xx=0,qb=1,vs="",fi="srgb",so="srgb-linear",Eu="linear",ze="srgb",Fr=7680,$_=519,Zb=512,Kb=513,Qb=514,Xp=515,Jb=516,$b=517,jp=518,tT=519,tv=35044,ev="300 es",Ki=2e3,vl=2001;function eT(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function bu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nT(){const s=bu("canvas");return s.style.display="block",s}const nv={};function iv(...s){const t="THREE."+s.shift();console.log(t,...s)}function jx(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=jx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ae(...s){s=jx(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function Tu(...s){const t=s.join(" ");t in nv||(nv[t]=!0,ne(...s))}function iT(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const aT={[Id]:Bd,[zd]:Vd,[Hd]:kd,[no]:Gd,[Bd]:Id,[Vd]:zd,[kd]:Hd,[Gd]:no};class $s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let av=1234567;const dl=Math.PI/180,xl=180/Math.PI;function lo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function ve(s,t,i){return Math.max(t,Math.min(i,s))}function Wp(s,t){return(s%t+t)%t}function sT(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function rT(s,t,i){return s!==t?(i-s)/(t-s):0}function pl(s,t,i){return(1-i)*s+i*t}function oT(s,t,i,r){return pl(s,t,1-Math.exp(-i*r))}function lT(s,t=1){return t-Math.abs(Wp(s,t*2)-t)}function cT(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function uT(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function fT(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hT(s,t){return s+Math.random()*(t-s)}function dT(s){return s*(.5-Math.random())}function pT(s){s!==void 0&&(av=s);let t=av+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mT(s){return s*dl}function gT(s){return s*xl}function _T(s){return(s&s-1)===0&&s!==0}function vT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xT(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ST(s,t,i,r,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+r)/2),g=f((t+r)/2),_=c((t-r)/2),v=f((t-r)/2),y=c((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(p*g,m*_,m*v,p*d);break;case"YZY":s.set(m*v,p*g,m*_,p*d);break;case"ZXZ":s.set(m*_,m*v,p*g,p*d);break;case"XZX":s.set(p*g,m*E,m*y,p*d);break;case"YXY":s.set(m*y,p*g,m*E,p*d);break;case"ZYZ":s.set(m*E,m*y,p*g,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Kr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bp={DEG2RAD:dl,RAD2DEG:xl,generateUUID:lo,clamp:ve,euclideanModulo:Wp,mapLinear:sT,inverseLerp:rT,lerp:pl,damp:oT,pingpong:lT,smoothstep:cT,smootherstep:uT,randInt:fT,randFloat:hT,randFloatSpread:dT,seededRandom:pT,degToRad:mT,radToDeg:gT,isPowerOfTwo:_T,ceilPowerOfTwo:vT,floorPowerOfTwo:xT,setQuaternionFromProperEuler:ST,normalize:Gn,denormalize:Kr};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,p){let m=r[l+0],d=r[l+1],g=r[l+2],_=r[l+3],v=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(_!==A||m!==v||d!==y||g!==E){let x=m*v+d*y+g*E+_*A;x<0&&(v=-v,y=-y,E=-E,A=-A,x=-x);let S=1-p;if(x<.9995){const R=Math.acos(x),N=Math.sin(R);S=Math.sin(S*R)/N,p=Math.sin(p*R)/N,m=m*S+v*p,d=d*S+y*p,g=g*S+E*p,_=_*S+A*p}else{m=m*S+v*p,d=d*S+y*p,g=g*S+E*p,_=_*S+A*p;const R=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=R,d*=R,g*=R,_*=R}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const p=r[l],m=r[l+1],d=r[l+2],g=r[l+3],_=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[i]=p*E+g*_+m*y-d*v,t[i+1]=m*E+g*v+d*_-p*y,t[i+2]=d*E+g*y+p*v-m*_,t[i+3]=g*E-p*_-m*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(r/2),g=p(l/2),_=p(c/2),v=m(r/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+p+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(r>p&&r>_){const y=2*Math.sqrt(1+r-p-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>_){const y=2*Math.sqrt(1+p-r-_);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-r-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-r*d,this._z=c*g+f*d+r*m-l*p,this._w=f*g-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*r),g=2*(p*i-c*l),_=2*(c*r-f*i);return this.x=i+m*d+f*_-p*g,this.y=r+m*g+p*d-c*_,this.z=l+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Jh.copy(this).projectOnVector(t),this.sub(Jh)}reflect(t){return this.sub(Jh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jh=new nt,sv=new ys;class ge{constructor(t,i,r,l,c,f,p,m,d){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d)}set(t,i,r,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],y=r[5],E=r[8],A=l[0],x=l[3],S=l[6],R=l[1],N=l[4],L=l[7],G=l[2],H=l[5],z=l[8];return c[0]=f*A+p*R+m*G,c[3]=f*x+p*N+m*H,c[6]=f*S+p*L+m*z,c[1]=d*A+g*R+_*G,c[4]=d*x+g*N+_*H,c[7]=d*S+g*L+_*z,c[2]=v*A+y*R+E*G,c[5]=v*x+y*N+E*H,c[8]=v*S+y*L+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-r*c*g+r*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=g*f-p*d,v=p*m-g*c,y=d*c-f*m,E=i*_+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*d-g*r)*A,t[2]=(p*r-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=y*A,t[7]=(r*m-d*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply($h.makeScale(t,i)),this}rotate(t){return this.premultiply($h.makeRotation(-t)),this}translate(t,i){return this.premultiply($h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $h=new ge,rv=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ov=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yT(){const s={enabled:!0,workingColorSpace:so,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[so]:{primaries:t,whitePoint:r,transfer:Eu,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Re=yT();function Na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ir;class MT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ir===void 0&&(Ir=bu("canvas")),Ir.width=t.width,Ir.height=t.height;const l=Ir.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ir}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=bu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Na(i[r]/255)*255):i[r]=Na(i[r]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ET=0;class Yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(td(l[f].image)):c.push(td(l[f]))}else c=td(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?MT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let bT=0;const ed=new nt;class Xn extends $s{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ca,l=Ca,c=Pn,f=Zs,p=Ii,m=hi,d=Xn.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=lo(),this.name="",this.source=new Yp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Fx;Xn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],A=m[2],x=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,L=(y+1)/2,G=(S+1)/2,H=(g+v)/4,z=(_+A)/4,T=(E+x)/4;return N>L&&N>G?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=H/r,c=z/r):L>G?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=H/l,c=T/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=z/c,l=T/c),this.set(r,l,c,i),this}let R=Math.sqrt((x-E)*(x-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(_-A)/R,this.z=(v-g)/R,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TT extends $s{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new Xn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Yp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends TT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Wx extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AT extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t,i,r,l,c,f,p,m,d,g,_,v,y,E,A,x){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,p,m,d,g,_,v,y,E,A,x)}set(t,i,r,l,c,f,p,m,d,g,_,v,y,E,A,x){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=d,S[6]=g,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=A,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Br.setFromMatrixColumn(t,0).length(),c=1/Br.setFromMatrixColumn(t,1).length(),f=1/Br.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=y+E*d,i[5]=v-A*d,i[9]=-p*m,i[2]=A-v*d,i[6]=E+y*d,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=d*g,A=d*_;i[0]=v+A*p,i[4]=E*p-y,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=y*p-E,i[6]=A+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=d*g,A=d*_;i[0]=v-A*p,i[4]=-f*_,i[8]=E+y*p,i[1]=y+E*p,i[5]=f*g,i[9]=A-v*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,y=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=E*d-y,i[8]=v*d+A,i[1]=m*_,i[5]=A*d+v,i[9]=y*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=y*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,y=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+A,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=p*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RT,t,CT)}lookAt(t,i,r){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(r,ci),ls.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(r,ci)),ls.normalize(),Vc.crossVectors(ci,ls),l[0]=ls.x,l[4]=Vc.x,l[8]=ci.x,l[1]=ls.y,l[5]=Vc.y,l[9]=ci.y,l[2]=ls.z,l[6]=Vc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],y=r[13],E=r[2],A=r[6],x=r[10],S=r[14],R=r[3],N=r[7],L=r[11],G=r[15],H=l[0],z=l[4],T=l[8],D=l[12],Q=l[1],F=l[5],X=l[9],et=l[13],k=l[2],Z=l[6],U=l[10],I=l[14],it=l[3],ht=l[7],St=l[11],P=l[15];return c[0]=f*H+p*Q+m*k+d*it,c[4]=f*z+p*F+m*Z+d*ht,c[8]=f*T+p*X+m*U+d*St,c[12]=f*D+p*et+m*I+d*P,c[1]=g*H+_*Q+v*k+y*it,c[5]=g*z+_*F+v*Z+y*ht,c[9]=g*T+_*X+v*U+y*St,c[13]=g*D+_*et+v*I+y*P,c[2]=E*H+A*Q+x*k+S*it,c[6]=E*z+A*F+x*Z+S*ht,c[10]=E*T+A*X+x*U+S*St,c[14]=E*D+A*et+x*I+S*P,c[3]=R*H+N*Q+L*k+G*it,c[7]=R*z+N*F+L*Z+G*ht,c[11]=R*T+N*X+L*U+G*St,c[15]=R*D+N*et+L*I+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],A=t[7],x=t[11],S=t[15],R=m*y-d*v,N=p*y-d*_,L=p*v-m*_,G=f*y-d*g,H=f*v-m*g,z=f*_-p*g;return i*(A*R-x*N+S*L)-r*(E*R-x*G+S*H)+l*(E*N-A*G+S*z)-c*(E*L-A*H+x*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],A=t[13],x=t[14],S=t[15],R=i*p-r*f,N=i*m-l*f,L=i*d-c*f,G=r*m-l*p,H=r*d-c*p,z=l*d-c*m,T=g*A-_*E,D=g*x-v*E,Q=g*S-y*E,F=_*x-v*A,X=_*S-y*A,et=v*S-y*x,k=R*et-N*X+L*F+G*Q-H*D+z*T;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/k;return t[0]=(p*et-m*X+d*F)*Z,t[1]=(l*X-r*et-c*F)*Z,t[2]=(A*z-x*H+S*G)*Z,t[3]=(v*H-_*z-y*G)*Z,t[4]=(m*Q-f*et-d*D)*Z,t[5]=(i*et-l*Q+c*D)*Z,t[6]=(x*L-E*z-S*N)*Z,t[7]=(g*z-v*L+y*N)*Z,t[8]=(f*X-p*Q+d*T)*Z,t[9]=(r*Q-i*X-c*T)*Z,t[10]=(E*H-A*L+S*R)*Z,t[11]=(_*L-g*H-y*R)*Z,t[12]=(p*D-f*F-m*T)*Z,t[13]=(i*F-r*D+l*T)*Z,t[14]=(A*N-E*G-x*R)*Z,t[15]=(g*G-_*N+v*R)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+r,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+r,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,_=p+p,v=c*d,y=c*g,E=c*_,A=f*g,x=f*_,S=p*_,R=m*d,N=m*g,L=m*_,G=r.x,H=r.y,z=r.z;return l[0]=(1-(A+S))*G,l[1]=(y+L)*G,l[2]=(E-N)*G,l[3]=0,l[4]=(y-L)*H,l[5]=(1-(v+S))*H,l[6]=(x+R)*H,l[7]=0,l[8]=(E+N)*z,l[9]=(x-R)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Br.set(l[0],l[1],l[2]).length();const p=Br.set(l[4],l[5],l[6]).length(),m=Br.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const d=1/f,g=1/p,_=1/m;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,f,p=Ki,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(p===Ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===vl)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,c,f,p=Ki,m=!1){const d=this.elements,g=2/(i-t),_=2/(r-l),v=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(p===Ki)E=-2/(f-c),A=-(f+c)/(f-c);else if(p===vl)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Br=new nt,Ui=new qe,RT=new nt(0,0,0),CT=new nt(1,1,1),ls=new nt,Vc=new nt,ci=new nt,lv=new qe,cv=new ys;class wn{constructor(t=0,i=0,r=0,l=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return lv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return cv.setFromEuler(this),this.setFromQuaternion(cv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wT=0;const uv=new nt,zr=new ys,ya=new qe,kc=new nt,al=new nt,DT=new nt,LT=new ys,fv=new nt(1,0,0),hv=new nt(0,1,0),dv=new nt(0,0,1),pv={type:"added"},NT={type:"removed"},Hr={type:"childadded",child:null},nd={type:"childremoved",child:null};class Ln extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new nt,i=new wn,r=new ys,l=new nt(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new ge}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(fv,t)}rotateY(t){return this.rotateOnAxis(hv,t)}rotateZ(t){return this.rotateOnAxis(dv,t)}translateOnAxis(t,i){return uv.copy(t).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fv,t)}translateY(t){return this.translateOnAxis(hv,t)}translateZ(t){return this.translateOnAxis(dv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?kc.copy(t):kc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(al,kc,this.up):ya.lookAt(kc,al,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(ya),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(NT),nd.child=t,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,DT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,LT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new nt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wa extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const A of t.hand.values()){const x=i.getJointPose(A,r),S=this._getHandJoint(d,A);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new wa;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function ad(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=Wp(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=ad(f,c,t+1/3),this.g=ad(f,c,t),this.b=ad(f,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Yx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Re.workingToColorSpace(On.copy(this),t),Math.round(ve(On.r*255,0,255))*65536+Math.round(ve(On.g*255,0,255))*256+Math.round(ve(On.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const _=f-p;switch(d=g<=.5?_/(f+p):_/(2-f-p),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fi){Re.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+i,cs.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(cs),t.getHSL(Xc);const r=pl(cs.h,Xc.h,i),l=pl(cs.s,Xc.s,i),c=pl(cs.l,Xc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ce;Ce.NAMES=Yx;class OT extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new nt,Ma=new nt,sd=new nt,Ea=new nt,Gr=new nt,Vr=new nt,mv=new nt,rd=new nt,od=new nt,ld=new nt,cd=new an,ud=new an,fd=new an;class Fi{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Oi.subVectors(l,i),Ma.subVectors(r,i),sd.subVectors(t,i);const f=Oi.dot(Oi),p=Oi.dot(Ma),m=Oi.dot(sd),d=Ma.dot(Ma),g=Ma.dot(sd),_=f*d-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*m-p*g)*v,E=(f*g-p*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,r,l,c,f,p,m){return this.getBarycoord(t,i,r,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(f,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return cd.setScalar(0),ud.setScalar(0),fd.setScalar(0),cd.fromBufferAttribute(t,i),ud.fromBufferAttribute(t,r),fd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(cd,c.x),f.addScaledVector(ud,c.y),f.addScaledVector(fd,c.z),f}static isFrontFacing(t,i,r,l){return Oi.subVectors(r,i),Ma.subVectors(t,i),Oi.cross(Ma).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Oi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,p;Gr.subVectors(l,r),Vr.subVectors(c,r),rd.subVectors(t,r);const m=Gr.dot(rd),d=Vr.dot(rd);if(m<=0&&d<=0)return i.copy(r);od.subVectors(t,l);const g=Gr.dot(od),_=Vr.dot(od);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Gr,f);ld.subVectors(t,c);const y=Gr.dot(ld),E=Vr.dot(ld);if(E>=0&&y<=E)return i.copy(c);const A=y*d-m*E;if(A<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(r).addScaledVector(Vr,p);const x=g*E-y*_;if(x<=0&&_-g>=0&&y-E>=0)return mv.subVectors(c,l),p=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(mv,p);const S=1/(x+A+v);return f=A*S,p=v*S,i.copy(r).addScaledVector(Gr,f).addScaledVector(Vr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Tl{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(t.matrixWorld),this.union(jc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Wc.subVectors(this.max,sl),kr.subVectors(t.a,sl),Xr.subVectors(t.b,sl),jr.subVectors(t.c,sl),us.subVectors(Xr,kr),fs.subVectors(jr,Xr),Gs.subVectors(kr,jr);let i=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,fs.z,0,-fs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Gs.y,Gs.x,0];return!hd(i,kr,Xr,jr,Wc)||(i=[1,0,0,0,1,0,0,0,1],!hd(i,kr,Xr,jr,Wc))?!1:(Yc.crossVectors(us,fs),i=[Yc.x,Yc.y,Yc.z],hd(i,kr,Xr,jr,Wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Pi=new nt,jc=new Tl,kr=new nt,Xr=new nt,jr=new nt,us=new nt,fs=new nt,Gs=new nt,sl=new nt,Wc=new nt,Yc=new nt,Vs=new nt;function hd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Vs.fromArray(s,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),d=i.dot(Vs),g=r.dot(Vs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const pn=new nt,qc=new fe;let PT=0;class di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=tv,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)qc.fromBufferAttribute(this,i),qc.applyMatrix3(t),this.setXY(i,qc.x,qc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Kr(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Kr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Kr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Kr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Kr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tv&&(t.usage=this.usage),t}}class qx extends di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Zx extends di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends di{constructor(t,i,r){super(new Float32Array(t),i,r)}}const FT=new Tl,rl=new nt,dd=new nt;class Nu{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):FT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rl.subVectors(t,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(rl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rl.copy(t.center).add(dd)),this.expandByPoint(rl.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let IT=0;const Mi=new qe,pd=new Ln,Wr=new nt,ui=new Tl,ol=new Tl,Mn=new nt;class jn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eT(t)?Zx:qx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ge().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,r){return Mi.makeTranslation(t,i,r),this.applyMatrix4(Mi),this}scale(t,i,r){return Mi.makeScale(t,i,r),this.applyMatrix4(Mi),this}lookAt(t){return pd.lookAt(t),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ol.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(ui.min,ol.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,ol.max),ui.expandByPoint(Mn)):(ui.expandByPoint(ol.min),ui.expandByPoint(ol.max))}ui.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Mn.fromBufferAttribute(p,d),m&&(Wr.fromBufferAttribute(t,d),Mn.add(Wr)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new nt,m[T]=new nt;const d=new nt,g=new nt,_=new nt,v=new fe,y=new fe,E=new fe,A=new nt,x=new nt;function S(T,D,Q){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,Q),v.fromBufferAttribute(c,T),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,Q),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(F),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),p[T].add(A),p[D].add(A),p[Q].add(A),m[T].add(x),m[D].add(x),m[Q].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,D=R.length;T<D;++T){const Q=R[T],F=Q.start,X=Q.count;for(let et=F,k=F+X;et<k;et+=3)S(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const N=new nt,L=new nt,G=new nt,H=new nt;function z(T){G.fromBufferAttribute(l,T),H.copy(G);const D=p[T];N.copy(D),N.sub(G.multiplyScalar(G.dot(D))).normalize(),L.crossVectors(H,D);const F=L.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,F)}for(let T=0,D=R.length;T<D;++T){const Q=R[T],F=Q.start,X=Q.count;for(let et=F,k=F+X;et<k;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new nt,c=new nt,f=new nt,p=new nt,m=new nt,d=new nt,g=new nt,_=new nt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),x=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,x),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),d.fromBufferAttribute(r,x),p.add(g),m.add(g),d.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,_=p.normalized,v=new d.constructor(m.length*g);let y=0,E=0;for(let A=0,x=m.length;A<x;A++){p.isInterleavedBufferAttribute?y=m[A]*p.data.stride+p.offset:y=m[A]*g;for(let S=0;S<g;S++)v[E++]=d[y++]}return new di(v,g,_)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let BT=0;class co extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=$r,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Fd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(r.blending=this.blending),this.side!==Ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pd&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ta=new nt,md=new nt,Zc=new nt,hs=new nt,gd=new nt,Kc=new nt,_d=new nt;class Uu{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){md.copy(t).add(i).multiplyScalar(.5),Zc.copy(i).sub(t).normalize(),hs.copy(this.origin).sub(md);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Zc),p=hs.dot(this.direction),m=-hs.dot(Zc),d=hs.lengthSq(),g=Math.abs(1-f*f);let _,v,y,E;if(g>0)if(_=f*m-p,v=f*p-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,y=_*(_+f*v+2*p)+v*(f*_+v+2*m)+d}else v=c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+d):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(md).addScaledVector(Zc,v),y}intersectSphere(t,i){Ta.subVectors(t.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(t.min.x-v.x)*d,l=(t.max.x-v.x)*d):(r=(t.max.x-v.x)*d,l=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,i,r,l,c){gd.subVectors(i,t),Kc.subVectors(r,t),_d.crossVectors(gd,Kc);let f=this.direction.dot(_d),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;hs.subVectors(this.origin,t);const m=p*this.direction.dot(Kc.crossVectors(hs,Kc));if(m<0)return null;const d=p*this.direction.dot(gd.cross(hs));if(d<0||m+d>f)return null;const g=-p*hs.dot(_d);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kx extends co{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gv=new qe,ks=new Uu,Qc=new Nu,_v=new nt,Jc=new nt,$c=new nt,tu=new nt,vd=new nt,eu=new nt,vv=new nt,nu=new nt;class Cn extends Ln{constructor(t=new jn,i=new Kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){eu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(vd.fromBufferAttribute(_,t),f?eu.addScaledVector(vd,g):eu.addScaledVector(vd.sub(i),g))}i.add(eu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qc.copy(r.boundingSphere),Qc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Qc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Qc,_v)===null||ks.origin.distanceToSquared(_v)>(t.far-t.near)**2))&&(gv.copy(c).invert(),ks.copy(t.ray).applyMatrix4(gv),!(r.boundingBox!==null&&ks.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const x=v[E],S=f[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let L=R,G=N;L<G;L+=3){const H=p.getX(L),z=p.getX(L+1),T=p.getX(L+2);l=iu(this,S,t,r,d,g,_,H,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let x=E,S=A;x<S;x+=3){const R=p.getX(x),N=p.getX(x+1),L=p.getX(x+2);l=iu(this,f,t,r,d,g,_,R,N,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const x=v[E],S=f[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let L=R,G=N;L<G;L+=3){const H=L,z=L+1,T=L+2;l=iu(this,S,t,r,d,g,_,H,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let x=E,S=A;x<S;x+=3){const R=x,N=x+1,L=x+2;l=iu(this,f,t,r,d,g,_,R,N,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function zT(s,t,i,r,l,c,f,p){let m;if(t.side===$n?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,t.side===Ss,p),m===null)return null;nu.copy(p),nu.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(nu);return d<i.near||d>i.far?null:{distance:d,point:nu.clone(),object:s}}function iu(s,t,i,r,l,c,f,p,m,d){s.getVertexPosition(p,Jc),s.getVertexPosition(m,$c),s.getVertexPosition(d,tu);const g=zT(s,t,i,r,Jc,$c,tu,vv);if(g){const _=new nt;Fi.getBarycoord(vv,Jc,$c,tu,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,p,m,d,_,new fe)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,p,m,d,_,new fe)),f&&(g.normal=Fi.getInterpolatedAttribute(f,p,m,d,_,new nt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:d,normal:new nt,materialIndex:0};Fi.getNormal(Jc,$c,tu,v.normal),g.face=v,g.barycoord=_}return g}class HT extends Xn{constructor(t=null,i=1,r=1,l,c,f,p,m,d=Dn,g=Dn,_,v){super(null,f,p,m,d,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new nt,GT=new nt,VT=new ge;class gs{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=xd.subVectors(r,i).cross(GT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||VT.getNormalMatrix(t),l=this.coplanarPoint(xd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Nu,kT=new fe(.5,.5),au=new nt;class Zp{constructor(t=new gs,i=new gs,r=new gs,l=new gs,c=new gs,f=new gs){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ki,r=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],A=c[9],x=c[10],S=c[11],R=c[12],N=c[13],L=c[14],G=c[15];if(l[0].setComponents(d-f,y-g,S-E,G-R).normalize(),l[1].setComponents(d+f,y+g,S+E,G+R).normalize(),l[2].setComponents(d+p,y+_,S+A,G+N).normalize(),l[3].setComponents(d-p,y-_,S-A,G-N).normalize(),r)l[4].setComponents(m,v,x,L).normalize(),l[5].setComponents(d-m,y-v,S-x,G-L).normalize();else if(l[4].setComponents(d-m,y-v,S-x,G-L).normalize(),i===Ki)l[5].setComponents(d+m,y+v,S+x,G+L).normalize();else if(i===vl)l[5].setComponents(m,v,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=kT.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(au.x=l.normal.x>0?t.max.x:t.min.x,au.y=l.normal.y>0?t.max.y:t.min.y,au.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends co{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Au=new nt,Ru=new nt,xv=new qe,ll=new Uu,su=new Nu,Sd=new nt,Sv=new nt;class Tp extends Ln{constructor(t=new jn,i=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Au.fromBufferAttribute(i,l-1),Ru.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new bi(r,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(l),su.radius+=c,t.ray.intersectsSphere(su)===!1)return;xv.copy(l).invert(),ll.copy(t.ray).applyMatrix4(xv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,x=E-1;A<x;A+=d){const S=g.getX(A),R=g.getX(A+1),N=ru(this,t,ll,m,S,R,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(E-1),x=g.getX(y),S=ru(this,t,ll,m,A,x,E-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=y,x=E-1;A<x;A+=d){const S=ru(this,t,ll,m,A,A+1,A);S&&i.push(S)}if(this.isLineLoop){const A=ru(this,t,ll,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function ru(s,t,i,r,l,c,f){const p=s.geometry.attributes.position;if(Au.fromBufferAttribute(p,l),Ru.fromBufferAttribute(p,c),i.distanceSqToSegment(Au,Ru,Sd,Sv)>r)return;Sd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Sd);if(!(d<t.near||d>t.far))return{distance:d,point:Sv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class Qx extends Xn{constructor(t=[],i=Qs,r,l,c,f,p,m,d,g){super(t,i,r,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yl extends Xn{constructor(t,i,r=$i,l,c,f,p=Dn,m=Dn,d,g=Pa,_=1){if(g!==Pa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,p,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class XT extends yl{constructor(t,i=$i,r=Qs,l,c,f=Dn,p=Dn,m,d=Pa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,r,l,c,f,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jx extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qi extends jn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(d,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function E(A,x,S,R,N,L,G,H,z,T,D){const Q=L/z,F=G/T,X=L/2,et=G/2,k=H/2,Z=z+1,U=T+1;let I=0,it=0;const ht=new nt;for(let St=0;St<U;St++){const P=St*F-et;for(let Y=0;Y<Z;Y++){const _t=Y*Q-X;ht[A]=_t*R,ht[x]=P*N,ht[S]=k,d.push(ht.x,ht.y,ht.z),ht[A]=0,ht[x]=0,ht[S]=H>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(Y/z),_.push(1-St/T),I+=1}}for(let St=0;St<T;St++)for(let P=0;P<z;P++){const Y=v+P+Z*St,_t=v+P+Z*(St+1),Rt=v+(P+1)+Z*(St+1),Lt=v+(P+1)+Z*St;m.push(Y,_t,Lt),m.push(_t,Rt,Lt),it+=6}p.addGroup(y,it,D),y+=it,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Al extends jn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,g=m+1,_=t/p,v=i/m,y=[],E=[],A=[],x=[];for(let S=0;S<g;S++){const R=S*v-f;for(let N=0;N<d;N++){const L=N*_-c;E.push(L,-R,0),A.push(0,0,1),x.push(N/p),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<p;R++){const N=R+d*S,L=R+d*(S+1),G=R+1+d*(S+1),H=R+1+d*S;y.push(N,L,H),y.push(L,G,H)}this.setIndex(y),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.width,t.height,t.widthSegments,t.heightSegments)}}function ro(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=ro(s[i]);for(const l in r)t[l]=r[l]}return t}function jT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function $x(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const WT={clone:ro,merge:Vn};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends co{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=qT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=jT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ZT extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ds extends co{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xx,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class KT extends co{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QT extends co{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Mv(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Mv(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Mv(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class JT{constructor(t,i,r){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $T=new JT;class Kp{constructor(t){this.manager=t!==void 0?t:$T,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Kp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Aa={};class tA extends Error{constructor(t,i){super(t),this.response=i}}class eA extends Kp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=yv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Aa[t]!==void 0){Aa[t].push({onLoad:i,onProgress:r,onError:l});return}Aa[t]=[],Aa[t].push({onLoad:i,onProgress:r,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Aa[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let A=0;const x=new ReadableStream({start(S){R();function R(){_.read().then(({done:N,value:L})=>{if(N)S.close();else{A+=L.byteLength;const G=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:y});for(let H=0,z=g.length;H<z;H++){const T=g[H];T.onProgress&&T.onProgress(G)}S.enqueue(L),R()}},N=>{S.error(N)})}}});return new Response(x)}else throw new tA(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,p));case"json":return d.json();default:if(p==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(p),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{yv.add(`file:${t}`,d);const g=Aa[t];delete Aa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=Aa[t];if(g===void 0)throw this.manager.itemError(t),d;delete Aa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class tS extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const yd=new qe,Ev=new nt,bv=new nt;class nA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Ev.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ev),bv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(bv),i.updateMatrixWorld(),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===vl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ou=new nt,lu=new ys,Xi=new nt;class eS extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ou,lu,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,lu,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(ou,lu,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,lu,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ps=new nt,Tv=new fe,Av=new fe;class Ei extends eS{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,Tv,Av),i.subVectors(Av,Tv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/d,l*=f.width/m,r*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Qp extends eS{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iA extends nA{constructor(){super(new Qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aA extends tS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new iA}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class sA extends tS{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Yr=-90,qr=1;class rA extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Yr,qr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(Yr,qr,t,i);c.layers=this.layers,this.add(c);const f=new Ei(Yr,qr,t,i);f.layers=this.layers,this.add(f);const p=new Ei(Yr,qr,t,i);p.layers=this.layers,this.add(p);const m=new Ei(Yr,qr,t,i);m.layers=this.layers,this.add(m);const d=new Ei(Yr,qr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class oA extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Rv=new qe;class lA{constructor(t,i,r=0,l=1/0){this.ray=new Uu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rv),this}intersectObject(t,i=!0,r=[]){return Ap(t,this,r,i),r.sort(Cv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Ap(t[l],this,r,i);return r.sort(Cv),r}}function Cv(s,t){return s.distance-t.distance}function Ap(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,p=c.length;f<p;f++)Ap(c[f],t,i,!0)}}class wv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cA extends $s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Dv(s,t,i,r){const l=uA(r);switch(i){case Gx:return s*t;case kx:return s*t/l.components*l.byteLength;case Gp:return s*t/l.components*l.byteLength;case ao:return s*t*2/l.components*l.byteLength;case Vp:return s*t*2/l.components*l.byteLength;case Vx:return s*t*3/l.components*l.byteLength;case Ii:return s*t*4/l.components*l.byteLength;case kp:return s*t*4/l.components*l.byteLength;case _u:case vu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Zd:return Math.max(s,16)*Math.max(t,8)/4;case Wd:case qd:return Math.max(s,8)*Math.max(t,8)/2;case Kd:case Qd:case $d:case tp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jd:case ep:case np:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ip:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ap:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case op:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case lp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case up:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _p:case vp:case xp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sp:case yp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Mp:case Ep:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uA(s){switch(s){case hi:case Ix:return{byteLength:1,components:1};case gl:case Bx:case Oa:return{byteLength:2,components:1};case zp:case Hp:return{byteLength:2,components:4};case $i:case Bp:case Zi:return{byteLength:4,components:1};case zx:case Hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);function nS(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function fA(s){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,d,g),p.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,d){const g=m.array,_=m.updateRanges;if(s.bindBuffer(d,p),_.length===0)s.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];s.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var hA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dA=`#ifdef USE_ALPHAHASH
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
#endif`,pA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vA=`#ifdef USE_AOMAP
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
#endif`,xA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SA=`#ifdef USE_BATCHING
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
#endif`,yA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TA=`#ifdef USE_IRIDESCENCE
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
#endif`,AA=`#ifdef USE_BUMPMAP
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
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PA=`#define PI 3.141592653589793
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
} // validated`,FA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IA=`vec3 transformedNormal = objectNormal;
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
#endif`,BA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VA="gl_FragColor = linearToOutputTexel( gl_FragColor );",kA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XA=`#ifdef USE_ENVMAP
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
#endif`,jA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
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
#endif`,YA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,ZA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$A=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
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
#endif`,u1=`uniform sampler2D dfgLUT;
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
}`,f1=`
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K1=`float getShadowMask() {
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
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tR=`#ifdef USE_SKINNING
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
#endif`,eR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sR=`#ifdef USE_TRANSMISSION
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
#endif`,rR=`#ifdef USE_TRANSMISSION
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
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hR=`uniform sampler2D t2D;
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
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`#include <common>
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
}`,vR=`#if DEPTH_PACKING == 3200
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
}`,xR=`#define DISTANCE
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
}`,SR=`#define DISTANCE
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
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`uniform float scale;
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
}`,bR=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,AR=`uniform vec3 diffuse;
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
}`,RR=`#define LAMBERT
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
}`,CR=`#define LAMBERT
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
}`,wR=`#define MATCAP
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
}`,DR=`#define MATCAP
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
}`,LR=`#define NORMAL
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
}`,NR=`#define NORMAL
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
}`,UR=`#define PHONG
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
}`,OR=`#define PHONG
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
}`,PR=`#define STANDARD
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
}`,FR=`#define STANDARD
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
}`,IR=`#define TOON
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
}`,BR=`#define TOON
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
}`,zR=`uniform float size;
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
}`,HR=`uniform vec3 diffuse;
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
}`,GR=`#include <common>
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
}`,VR=`uniform vec3 color;
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
}`,kR=`uniform float rotation;
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
}`,XR=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:hA,alphahash_pars_fragment:dA,alphamap_fragment:pA,alphamap_pars_fragment:mA,alphatest_fragment:gA,alphatest_pars_fragment:_A,aomap_fragment:vA,aomap_pars_fragment:xA,batching_pars_vertex:SA,batching_vertex:yA,begin_vertex:MA,beginnormal_vertex:EA,bsdfs:bA,iridescence_fragment:TA,bumpmap_pars_fragment:AA,clipping_planes_fragment:RA,clipping_planes_pars_fragment:CA,clipping_planes_pars_vertex:wA,clipping_planes_vertex:DA,color_fragment:LA,color_pars_fragment:NA,color_pars_vertex:UA,color_vertex:OA,common:PA,cube_uv_reflection_fragment:FA,defaultnormal_vertex:IA,displacementmap_pars_vertex:BA,displacementmap_vertex:zA,emissivemap_fragment:HA,emissivemap_pars_fragment:GA,colorspace_fragment:VA,colorspace_pars_fragment:kA,envmap_fragment:XA,envmap_common_pars_fragment:jA,envmap_pars_fragment:WA,envmap_pars_vertex:YA,envmap_physical_pars_fragment:a1,envmap_vertex:qA,fog_vertex:ZA,fog_pars_vertex:KA,fog_fragment:QA,fog_pars_fragment:JA,gradientmap_pars_fragment:$A,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:o1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:f1,lights_fragment_maps:h1,lights_fragment_end:d1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:_1,map_fragment:v1,map_pars_fragment:x1,map_particle_fragment:S1,map_particle_pars_fragment:y1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:E1,morphinstance_vertex:b1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:R1,morphtarget_vertex:C1,normal_fragment_begin:w1,normal_fragment_maps:D1,normal_pars_fragment:L1,normal_pars_vertex:N1,normal_vertex:U1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:B1,opaque_fragment:z1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:k1,dithering_pars_fragment:X1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:q1,shadowmap_vertex:Z1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:$1,skinnormal_vertex:tR,specularmap_fragment:eR,specularmap_pars_fragment:nR,tonemapping_fragment:iR,tonemapping_pars_fragment:aR,transmission_fragment:sR,transmission_pars_fragment:rR,uv_pars_fragment:oR,uv_pars_vertex:lR,uv_vertex:cR,worldpos_vertex:uR,background_vert:fR,background_frag:hR,backgroundCube_vert:dR,backgroundCube_frag:pR,cube_vert:mR,cube_frag:gR,depth_vert:_R,depth_frag:vR,distance_vert:xR,distance_frag:SR,equirect_vert:yR,equirect_frag:MR,linedashed_vert:ER,linedashed_frag:bR,meshbasic_vert:TR,meshbasic_frag:AR,meshlambert_vert:RR,meshlambert_frag:CR,meshmatcap_vert:wR,meshmatcap_frag:DR,meshnormal_vert:LR,meshnormal_frag:NR,meshphong_vert:UR,meshphong_frag:OR,meshphysical_vert:PR,meshphysical_frag:FR,meshtoon_vert:IR,meshtoon_frag:BR,points_vert:zR,points_frag:HR,shadow_vert:GR,shadow_frag:VR,sprite_vert:kR,sprite_frag:XR},Ot={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Vn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Vn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Vn([Ot.points,Ot.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Vn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Vn([Ot.common,Ot.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Vn([Ot.sprite,Ot.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Vn([Ot.common,Ot.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Vn([Ot.lights,Ot.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const cu={r:0,b:0,g:0},js=new wn,jR=new qe;function WR(s,t,i,r,l,c){const f=new Ce(0);let p=l===!0?0:1,m,d,g=null,_=0,v=null;function y(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const L=R.backgroundBlurriness>0;N=t.get(N,L)}return N}function E(R){let N=!1;const L=y(R);L===null?x(f,p):L&&L.isColor&&(x(L,1),N=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(R,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===Lu)?(d===void 0&&(d=new Cn(new qi(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:ro(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,H,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),js.copy(N.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(jR.makeRotationFromEuler(js)),d.material.toneMapped=Re.getTransfer(L.colorSpace)!==ze,(g!==L||_!==L.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Cn(new Al(2,2),new ta({name:"BackgroundMaterial",uniforms:ro(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Re.getTransfer(L.colorSpace)!==ze,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,N){R.getRGB(cu,$x(s)),i.buffers.color.setClear(cu.r,cu.g,cu.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,N=1){f.set(R),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(f,p)},render:E,addToRenderList:A,dispose:S}}function YR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function p(F,X,et,k,Z){let U=!1;const I=_(F,k,et,X);c!==I&&(c=I,d(c.object)),U=y(F,k,et,Z),U&&E(F,k,et,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,L(F,X,et,k),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return s.createVertexArray()}function d(F){return s.bindVertexArray(F)}function g(F){return s.deleteVertexArray(F)}function _(F,X,et,k){const Z=k.wireframe===!0;let U=r[X.id];U===void 0&&(U={},r[X.id]=U);const I=F.isInstancedMesh===!0?F.id:0;let it=U[I];it===void 0&&(it={},U[I]=it);let ht=it[et.id];ht===void 0&&(ht={},it[et.id]=ht);let St=ht[Z];return St===void 0&&(St=v(m()),ht[Z]=St),St}function v(F){const X=[],et=[],k=[];for(let Z=0;Z<i;Z++)X[Z]=0,et[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:et,attributeDivisors:k,object:F,attributes:{},index:null}}function y(F,X,et,k){const Z=c.attributes,U=X.attributes;let I=0;const it=et.getAttributes();for(const ht in it)if(it[ht].location>=0){const P=Z[ht];let Y=U[ht];if(Y===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==k}function E(F,X,et,k){const Z={},U=X.attributes;let I=0;const it=et.getAttributes();for(const ht in it)if(it[ht].location>=0){let P=U[ht];P===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(P=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(P=F.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),Z[ht]=Y,I++}c.attributes=Z,c.attributesNum=I,c.index=k}function A(){const F=c.newAttributes;for(let X=0,et=F.length;X<et;X++)F[X]=0}function x(F){S(F,0)}function S(F,X){const et=c.newAttributes,k=c.enabledAttributes,Z=c.attributeDivisors;et[F]=1,k[F]===0&&(s.enableVertexAttribArray(F),k[F]=1),Z[F]!==X&&(s.vertexAttribDivisor(F,X),Z[F]=X)}function R(){const F=c.newAttributes,X=c.enabledAttributes;for(let et=0,k=X.length;et<k;et++)X[et]!==F[et]&&(s.disableVertexAttribArray(et),X[et]=0)}function N(F,X,et,k,Z,U,I){I===!0?s.vertexAttribIPointer(F,X,et,Z,U):s.vertexAttribPointer(F,X,et,k,Z,U)}function L(F,X,et,k){A();const Z=k.attributes,U=et.getAttributes(),I=X.defaultAttributeValues;for(const it in U){const ht=U[it];if(ht.location>=0){let St=Z[it];if(St===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(St=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(St=F.instanceColor)),St!==void 0){const P=St.normalized,Y=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const Rt=_t.buffer,Lt=_t.type,at=_t.bytesPerElement,gt=Lt===s.INT||Lt===s.UNSIGNED_INT||St.gpuType===Bp;if(St.isInterleavedBufferAttribute){const Et=St.data,zt=Et.stride,Kt=St.offset;if(Et.isInstancedInterleavedBuffer){for(let Yt=0;Yt<ht.locationSize;Yt++)S(ht.location+Yt,Et.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Yt=0;Yt<ht.locationSize;Yt++)x(ht.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Yt=0;Yt<ht.locationSize;Yt++)N(ht.location+Yt,Y/ht.locationSize,Lt,P,zt*at,(Kt+Y/ht.locationSize*Yt)*at,gt)}else{if(St.isInstancedBufferAttribute){for(let Et=0;Et<ht.locationSize;Et++)S(ht.location+Et,St.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<ht.locationSize;Et++)x(ht.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Et=0;Et<ht.locationSize;Et++)N(ht.location+Et,Y/ht.locationSize,Lt,P,Y*at,Y/ht.locationSize*Et*at,gt)}}else if(I!==void 0){const P=I[it];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(ht.location,P);break;case 3:s.vertexAttrib3fv(ht.location,P);break;case 4:s.vertexAttrib4fv(ht.location,P);break;default:s.vertexAttrib1fv(ht.location,P)}}}}R()}function G(){D();for(const F in r){const X=r[F];for(const et in X){const k=X[et];for(const Z in k){const U=k[Z];for(const I in U)g(U[I].object),delete U[I];delete k[Z]}}delete r[F]}}function H(F){if(r[F.id]===void 0)return;const X=r[F.id];for(const et in X){const k=X[et];for(const Z in k){const U=k[Z];for(const I in U)g(U[I].object),delete U[I];delete k[Z]}}delete r[F.id]}function z(F){for(const X in r){const et=r[X];for(const k in et){const Z=et[k];if(Z[F.id]===void 0)continue;const U=Z[F.id];for(const I in U)g(U[I].object),delete U[I];delete Z[F.id]}}}function T(F){for(const X in r){const et=r[X],k=F.isInstancedMesh===!0?F.id:0,Z=et[k];if(Z!==void 0){for(const U in Z){const I=Z[U];for(const it in I)g(I[it].object),delete I[it];delete Z[U]}delete et[k],Object.keys(et).length===0&&delete r[X]}}}function D(){Q(),f=!0,c!==l&&(c=l,d(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:Q,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:x,disableUnusedAttributes:R}}function qR(s,t,i){let r;function l(d){r=d}function c(d,g){s.drawArrays(r,d,g),i.update(g,r,1)}function f(d,g,_){_!==0&&(s.drawArraysInstanced(r,d,g,_),i.update(g,r,_))}function p(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,r,1)}function m(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function ZR(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ii&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==hi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ne("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=s.getParameter(s.MAX_SAMPLES),H=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:L,maxSamples:G,samples:H}}function KR(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new gs,p=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||l;return l=v,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,A=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!l||E===null||E.length===0||c&&!x)c?g(null):d();else{const R=c?0:r,N=R*4;let L=S.clippingState||null;m.value=L,L=g(E,v,N,y);for(let G=0;G!==N;++G)L[G]=i[G];S.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,y,E){const A=_!==null?_.length:0;let x=null;if(A!==0){if(x=m.value,E!==!0||x===null){const S=y+A*4,R=v.matrixWorldInverse;p.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,L=y;N!==A;++N,L+=4)f.copy(_[N]).applyMatrix4(R,p),f.normal.toArray(x,L),x[L+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,x}}const xs=4,Lv=[.125,.215,.35,.446,.526,.582],qs=20,QR=256,cl=new Qp,Nv=new Ce;let Md=null,Ed=0,bd=0,Td=!1;const JR=new nt;class Uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=JR}=c;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Md,Ed,bd),this._renderer.xr.enabled=Td,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Oa,format:Ii,colorSpace:so,depthBuffer:!1},l=Ov(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$R(c)),this._blurMaterial=eC(c,t,i),this._ggxMaterial=tC(c,t,i)}return l}_compileMaterial(t){const i=new Cn(new jn,t);this._renderer.compile(i,cl)}_sceneToCubeUV(t,i,r,l,c){const m=new Ei(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Nv),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new qi,new Kx({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let S=!1;const R=t.background;R?R.isColor&&(x.color.copy(R),t.background=null,S=!0):(x.color.copy(Nv),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):L===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const G=this._cubeSize;Zr(l,L*G,N>2?G:0,G,G),_.setRenderTarget(l),S&&_.render(A,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=R}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Qs||t.mapping===io;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Zr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,cl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:E}=this,A=this._sizeLods[r],x=3*A*(r>E-xs?r-E+xs:0),S=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Zr(c,x,S,3*A,2*A),l.setRenderTarget(c),l.render(p,cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Zr(t,x,S,3*A,2*A),l.setRenderTarget(t),l.render(p,cl)}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=d;const v=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*qs-1),A=c/E,x=isFinite(c)?1+Math.floor(g*A):qs;x>qs&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qs}`);const S=[];let R=0;for(let z=0;z<qs;++z){const T=z/A,D=Math.exp(-T*T/2);S.push(D),z===0?R+=D:z<x&&(R+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/R;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const L=this._sizeLods[l],G=3*L*(l>N-xs?l-N+xs:0),H=4*(this._cubeSize-L);Zr(i,G,H,3*L,2*L),m.setRenderTarget(i),m.render(_,cl)}}function $R(s){const t=[],i=[],r=[];let l=s;const c=s-xs+1+Lv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-xs?m=Lv[f-s+xs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,x=2,S=1,R=new Float32Array(A*E*y),N=new Float32Array(x*E*y),L=new Float32Array(S*E*y);for(let H=0;H<y;H++){const z=H%3*2/3-1,T=H>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];R.set(D,A*E*H),N.set(v,x*E*H);const Q=[H,H,H,H,H,H];L.set(Q,S*E*H)}const G=new jn;G.setAttribute("position",new di(R,A)),G.setAttribute("uv",new di(N,x)),G.setAttribute("faceIndex",new di(L,S)),r.push(new Cn(G,null)),l>xs&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Ov(s,t,i){const r=new Ji(s,t,i);return r.texture.mapping=Lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function tC(s,t,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function eC(s,t,i){const r=new Float32Array(qs),l=new nt(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Pv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Fv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}class iS extends Ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qi(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:La});c.uniforms.tEquirect.value=i;const f=new Cn(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Pn),new rA(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}function nC(s){let t=new WeakMap,i=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?f(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Zh||y===Kh)if(t.has(v)){const E=t.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new iS(E.height);return A.fromEquirectangularTexture(s,v),t.set(v,A),v.addEventListener("dispose",d),p(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const y=v.mapping,E=y===Zh||y===Kh,A=y===Qs||y===io;if(E||A){let x=i.get(v);const S=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Uv(s)),x=E?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,i.set(v,x),x.texture;if(x!==void 0)return x.texture;{const R=v.image;return E&&R&&R.height>0||A&&R&&m(R)?(r===null&&(r=new Uv(s)),x=E?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,i.set(v,x),v.addEventListener("dispose",g),x.texture):null}}}return v}function p(v,y){return y===Zh?v.mapping=Qs:y===Kh&&(v.mapping=io),v}function m(v){let y=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&y++;return y===E}function d(v){const y=v.target;y.removeEventListener("dispose",d);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function iC(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Tu("WebGLRenderer: "+r+" extension not supported."),l}}}function aC(s,t,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(y!==null){const R=y.array;A=y.version;for(let N=0,L=R.length;N<L;N+=3){const G=R[N+0],H=R[N+1],z=R[N+2];v.push(G,H,H,z,z,G)}}else{const R=E.array;A=E.version;for(let N=0,L=R.length/3-1;N<L;N+=3){const G=N+0,H=N+1,z=N+2;v.push(G,H,H,z,z,G)}}const x=new(E.count>=65535?Zx:qx)(v,1);x.version=A;const S=c.get(_);S&&t.remove(S),c.set(_,x)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function sC(s,t,i){let r;function l(v){r=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,y){s.drawElements(r,y,c,v*f),i.update(y,r,1)}function d(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,v*f,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,E);let x=0;for(let S=0;S<E;S++)x+=y[S];i.update(x,r,1)}function _(v,y,E,A){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)d(v[S]/f,y[S],A[S]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,A,0,E);let S=0;for(let R=0;R<E;R++)S+=y[R]*A[R];i.update(S,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function rC(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oC(s,t,i){const r=new WeakMap,l=new an;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(p);if(v===void 0||v.count!==_){let Q=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",Q)};var y=Q;v!==void 0&&v.texture.dispose();const E=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let L=0;E===!0&&(L=1),A===!0&&(L=2),x===!0&&(L=3);let G=p.attributes.position.count*L,H=1;G>t.maxTextureSize&&(H=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*H*4*_),T=new Wx(z,G,H,_);T.type=Zi,T.needsUpdate=!0;const D=L*4;for(let F=0;F<_;F++){const X=S[F],et=R[F],k=N[F],Z=G*H*4*F;for(let U=0;U<X.count;U++){const I=U*D;E===!0&&(l.fromBufferAttribute(X,U),z[Z+I+0]=l.x,z[Z+I+1]=l.y,z[Z+I+2]=l.z,z[Z+I+3]=0),A===!0&&(l.fromBufferAttribute(et,U),z[Z+I+4]=l.x,z[Z+I+5]=l.y,z[Z+I+6]=l.z,z[Z+I+7]=0),x===!0&&(l.fromBufferAttribute(k,U),z[Z+I+8]=l.x,z[Z+I+9]=l.y,z[Z+I+10]=l.z,z[Z+I+11]=k.itemSize===4?l.w:1)}}v={count:_,texture:T,size:new fe(G,H)},r.set(p,v),p.addEventListener("dispose",Q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const A=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function lC(s,t,i,r,l){let c=new WeakMap;function f(d){const g=l.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return v}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const cC={[wx]:"LINEAR_TONE_MAPPING",[Dx]:"REINHARD_TONE_MAPPING",[Lx]:"CINEON_TONE_MAPPING",[Nx]:"ACES_FILMIC_TONE_MAPPING",[Ox]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function uC(s,t,i,r,l){const c=new Ji(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Ji(t,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),p=new jn;p.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new ZT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Cn(p,m),g=new Qp(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,A=null,x=[],S=!1;this.setSize=function(R,N){c.setSize(R,N),f.setSize(R,N);for(let L=0;L<x.length;L++){const G=x[L];G.setSize&&G.setSize(R,N)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const N=c.width,L=c.height;for(let G=0;G<x.length;G++){const H=x[G];H.setSize&&H.setSize(N,L)}},this.begin=function(R,N){if(y||R.toneMapping===Qi&&x.length===0)return!1;if(A=N,N!==null){const L=N.width,G=N.height;(c.width!==L||c.height!==G)&&this.setSize(L,G)}return S===!1&&R.setRenderTarget(c),E=R.toneMapping,R.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(R,N){R.toneMapping=E,y=!0;let L=c,G=f;for(let H=0;H<x.length;H++){const z=x[H];if(z.enabled!==!1&&(z.render(R,G,L,N),z.needsSwap!==!1)){const T=L;L=G,G=T}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,m.defines={},Re.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const H=cC[v];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(A),R.render(d,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const aS=new Xn,Rp=new yl(1,1),sS=new Wx,rS=new AT,oS=new Qx,Iv=[],Bv=[],zv=new Float32Array(16),Hv=new Float32Array(9),Gv=new Float32Array(4);function uo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Iv[l];if(c===void 0&&(c=new Float32Array(l),Iv[l]=c),t!==0){r.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(c,p)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Sn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Pu(s,t){let i=Bv[t];i===void 0&&(i=new Int32Array(t),Bv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function fC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function hC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),Sn(i,t)}}function dC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),Sn(i,t)}}function pC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),Sn(i,t)}}function mC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Gv.set(r),s.uniformMatrix2fv(this.addr,!1,Gv),Sn(i,r)}}function gC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Hv.set(r),s.uniformMatrix3fv(this.addr,!1,Hv),Sn(i,r)}}function _C(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;zv.set(r),s.uniformMatrix4fv(this.addr,!1,zv),Sn(i,r)}}function vC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function xC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),Sn(i,t)}}function SC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),Sn(i,t)}}function yC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),Sn(i,t)}}function MC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function EC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),Sn(i,t)}}function bC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),Sn(i,t)}}function TC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),Sn(i,t)}}function AC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Rp.compareFunction=i.isReversedDepthBuffer()?jp:Xp,c=Rp):c=aS,i.setTexture2D(t||c,l)}function RC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||rS,l)}function CC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||oS,l)}function wC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||sS,l)}function DC(s){switch(s){case 5126:return fC;case 35664:return hC;case 35665:return dC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return _C;case 5124:case 35670:return vC;case 35667:case 35671:return xC;case 35668:case 35672:return SC;case 35669:case 35673:return yC;case 5125:return MC;case 36294:return EC;case 36295:return bC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return CC;case 36289:case 36303:case 36311:case 36292:return wC}}function LC(s,t){s.uniform1fv(this.addr,t)}function NC(s,t){const i=uo(t,this.size,2);s.uniform2fv(this.addr,i)}function UC(s,t){const i=uo(t,this.size,3);s.uniform3fv(this.addr,i)}function OC(s,t){const i=uo(t,this.size,4);s.uniform4fv(this.addr,i)}function PC(s,t){const i=uo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function FC(s,t){const i=uo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function IC(s,t){const i=uo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function BC(s,t){s.uniform1iv(this.addr,t)}function zC(s,t){s.uniform2iv(this.addr,t)}function HC(s,t){s.uniform3iv(this.addr,t)}function GC(s,t){s.uniform4iv(this.addr,t)}function VC(s,t){s.uniform1uiv(this.addr,t)}function kC(s,t){s.uniform2uiv(this.addr,t)}function XC(s,t){s.uniform3uiv(this.addr,t)}function jC(s,t){s.uniform4uiv(this.addr,t)}function WC(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Rp:f=aS;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function YC(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||rS,c[f])}function qC(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||oS,c[f])}function ZC(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||sS,c[f])}function KC(s){switch(s){case 5126:return LC;case 35664:return NC;case 35665:return UC;case 35666:return OC;case 35674:return PC;case 35675:return FC;case 35676:return IC;case 5124:case 35670:return BC;case 35667:case 35671:return zC;case 35668:case 35672:return HC;case 35669:case 35673:return GC;case 5125:return VC;case 36294:return kC;case 36295:return XC;case 36296:return jC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return YC;case 35680:case 36300:case 36308:case 36293:return qC;case 36289:case 36303:case 36311:case 36292:return ZC}}class QC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=DC(i.type)}}class JC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KC(i.type)}}class $C{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Vv(s,t){s.seq.push(t),s.map[t.id]=t}function tw(s,t,i){const r=s.name,l=r.length;for(Ad.lastIndex=0;;){const c=Ad.exec(r),f=Ad.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Vv(i,d===void 0?new QC(p,s,t):new JC(p,s,t));break}else{let _=i.map[p];_===void 0&&(_=new $C(p),Vv(i,_)),i=_}}}class yu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);tw(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function kv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const ew=37297;let nw=0;function iw(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Xv=new ge;function aw(s){Re._getMatrix(Xv,Re.workingColorSpace,s);const t=`mat3( ${Xv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(s)){case Eu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+iw(s.getShaderSource(t),p)}else return c}function sw(s,t){const i=aw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const rw={[wx]:"Linear",[Dx]:"Reinhard",[Lx]:"Cineon",[Nx]:"ACESFilmic",[Ox]:"AgX",[Px]:"Neutral",[Ux]:"Custom"};function ow(s,t){const i=rw[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uu=new nt;function lw(){Re.getLuminanceCoefficients(uu);const s=uu.x.toFixed(4),t=uu.y.toFixed(4),i=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function uw(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function fw(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function hl(s){return s!==""}function Wv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(s){return s.replace(hw,pw)}const dw=new Map;function pw(s,t){let i=_e[t];if(i===void 0){const r=dw.get(t);if(r!==void 0)i=_e[r],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cp(i)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(s){return s.replace(mw,gw)}function gw(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const _w={[gu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function vw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xw={[Qs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function Sw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yw={[io]:"ENVMAP_MODE_REFRACTION"};function Mw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ew={[Cx]:"ENVMAP_BLENDING_MULTIPLY",[Xb]:"ENVMAP_BLENDING_MIX",[jb]:"ENVMAP_BLENDING_ADD"};function bw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[s.combine]||"ENVMAP_BLENDING_NONE"}function Tw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Aw(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=vw(i),d=Sw(i),g=Mw(i),_=bw(i),v=Tw(i),y=cw(i),E=uw(c),A=l.createProgram();let x,S,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),S.length>0&&(S+=`
`)):(x=[Zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),S=[Zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?_e.tonemapping_pars_fragment:"",i.toneMapping!==Qi?ow("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,sw("linearToOutputTexel",i.outputColorSpace),lw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),f=Cp(f),f=Wv(f,i),f=Yv(f,i),p=Cp(p),p=Wv(p,i),p=Yv(p,i),f=qv(f),p=qv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=R+x+f,L=R+S+p,G=kv(l,l.VERTEX_SHADER,N),H=kv(l,l.FRAGMENT_SHADER,L);l.attachShader(A,G),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(F){if(s.debug.checkShaderErrors){const X=l.getProgramInfoLog(A)||"",et=l.getShaderInfoLog(G)||"",k=l.getShaderInfoLog(H)||"",Z=X.trim(),U=et.trim(),I=k.trim();let it=!0,ht=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,H);else{const St=jv(l,G,"vertex"),P=jv(l,H,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+St+`
`+P)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(U===""||I==="")&&(ht=!1);ht&&(F.diagnostics={runnable:it,programLog:Z,vertexShader:{log:U,prefix:x},fragmentShader:{log:I,prefix:S}})}l.deleteShader(G),l.deleteShader(H),T=new yu(l,A),D=fw(l,A)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(A,ew)),Q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=H,this}let Rw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new ww(t),i.set(t,r)),r}}class ww{constructor(t){this.id=Rw++,this.code=t,this.usedTimes=0}}function Dw(s,t,i,r,l,c){const f=new qp,p=new Cw,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,D,Q,F,X){const et=F.fog,k=X.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,U=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Z,U),it=I&&I.mapping===Lu?I.image.height:null,ht=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const St=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,P=St!==void 0?St.length:0;let Y=0;k.morphAttributes.position!==void 0&&(Y=1),k.morphAttributes.normal!==void 0&&(Y=2),k.morphAttributes.color!==void 0&&(Y=3);let _t,Rt,Lt,at;if(ht){const Te=Wi[ht];_t=Te.vertexShader,Rt=Te.fragmentShader}else _t=T.vertexShader,Rt=T.fragmentShader,p.update(T),Lt=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const gt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),zt=X.isInstancedMesh===!0,Kt=X.isBatchedMesh===!0,Yt=!!T.map,je=!!T.matcap,re=!!I,oe=!!T.aoMap,Ne=!!T.lightMap,ue=!!T.bumpMap,$e=!!T.normalMap,j=!!T.displacementMap,Ze=!!T.emissiveMap,be=!!T.metalnessMap,Oe=!!T.roughnessMap,qt=T.anisotropy>0,B=T.clearcoat>0,b=T.dispersion>0,J=T.iridescence>0,vt=T.sheen>0,Mt=T.transmission>0,pt=qt&&!!T.anisotropyMap,jt=B&&!!T.clearcoatMap,Dt=B&&!!T.clearcoatNormalMap,Jt=B&&!!T.clearcoatRoughnessMap,ee=J&&!!T.iridescenceMap,At=J&&!!T.iridescenceThicknessMap,bt=vt&&!!T.sheenColorMap,Ft=vt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,It=!!T.specularColorMap,de=!!T.specularIntensityMap,K=Mt&&!!T.transmissionMap,wt=Mt&&!!T.thicknessMap,Ct=!!T.gradientMap,Bt=!!T.alphaMap,Tt=T.alphaTest>0,dt=!!T.alphaHash,Gt=!!T.extensions;let ae=Qi;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Fe={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Kt,batchingColor:Kt&&X._colorsTexture!==null,instancing:zt,instancingColor:zt&&X.instanceColor!==null,instancingMorph:zt&&X.morphTexture!==null,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:so,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:je,envMap:re,envMapMode:re&&I.mapping,envMapCubeUVHeight:it,aoMap:oe,lightMap:Ne,bumpMap:ue,normalMap:$e,displacementMap:j,emissiveMap:Ze,normalMapObjectSpace:$e&&T.normalMapType===qb,normalMapTangentSpace:$e&&T.normalMapType===Xx,metalnessMap:be,roughnessMap:Oe,anisotropy:qt,anisotropyMap:pt,clearcoat:B,clearcoatMap:jt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Jt,dispersion:b,iridescence:J,iridescenceMap:ee,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:It,specularIntensityMap:de,transmission:Mt,transmissionMap:K,thicknessMap:wt,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===$r&&T.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Tt,alphaHash:dt,combine:T.combine,mapUv:Yt&&E(T.map.channel),aoMapUv:oe&&E(T.aoMap.channel),lightMapUv:Ne&&E(T.lightMap.channel),bumpMapUv:ue&&E(T.bumpMap.channel),normalMapUv:$e&&E(T.normalMap.channel),displacementMapUv:j&&E(T.displacementMap.channel),emissiveMapUv:Ze&&E(T.emissiveMap.channel),metalnessMapUv:be&&E(T.metalnessMap.channel),roughnessMapUv:Oe&&E(T.roughnessMap.channel),anisotropyMapUv:pt&&E(T.anisotropyMap.channel),clearcoatMapUv:jt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Pt&&E(T.specularMap.channel),specularColorMapUv:It&&E(T.specularColorMap.channel),specularIntensityMapUv:de&&E(T.specularIntensityMap.channel),transmissionMapUv:K&&E(T.transmissionMap.channel),thicknessMapUv:wt&&E(T.thicknessMap.channel),alphaMapUv:Bt&&E(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($e||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!k.attributes.uv&&(Yt||Bt),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&$e===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:X.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Re.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&Re.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Yi,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)D.push(Q),D.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(S(D,T),R(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function R(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),T.push(f.mask)}function N(T){const D=y[T.type];let Q;if(D){const F=Wi[D];Q=WT.clone(F.uniforms)}else Q=T.uniforms;return Q}function L(T,D){let Q=g.get(D);return Q!==void 0?++Q.usedTimes:(Q=new Aw(s,D,T,l),d.push(Q),g.set(D,Q)),Q}function G(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function z(){p.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:G,releaseShaderCache:H,programs:d,dispose:z}}function Lw(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Nw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Kv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function p(v,y,E,A,x,S){let R=s[t];return R===void 0?(R={id:v.id,object:v,geometry:y,material:E,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:x,group:S},s[t]=R):(R.id=v.id,R.object=v,R.geometry=y,R.material=E,R.materialVariant=f(v),R.groupOrder=A,R.renderOrder=v.renderOrder,R.z=x,R.group=S),t++,R}function m(v,y,E,A,x,S){const R=p(v,y,E,A,x,S);E.transmission>0?r.push(R):E.transparent===!0?l.push(R):i.push(R)}function d(v,y,E,A,x,S){const R=p(v,y,E,A,x,S);E.transmission>0?r.unshift(R):E.transparent===!0?l.unshift(R):i.unshift(R)}function g(v,y){i.length>1&&i.sort(v||Nw),r.length>1&&r.sort(y||Kv),l.length>1&&l.sort(y||Kv)}function _(){for(let v=t,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:_,sort:g}}function Uw(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Qv,s.set(r,[f])):l>=c.length?(f=new Qv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function Ow(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new Ce};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=i,i}}}function Pw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Fw=0;function Iw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Bw(s){const t=new Ow,i=Pw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new nt);const l=new nt,c=new qe,f=new qe;function p(d){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,E=0,A=0,x=0,S=0,R=0,N=0,L=0,G=0,H=0,z=0;d.sort(Iw);for(let D=0,Q=d.length;D<Q;D++){const F=d[D],X=F.color,et=F.intensity,k=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ao?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)g+=X.r*et,_+=X.g*et,v+=X.b*et;else if(F.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(F.sh.coefficients[U],et);z++}else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const I=F.shadow,it=i.get(F);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,r.directionalShadow[y]=it,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=F.shadow.matrix,R++}r.directional[y]=U,y++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(X).multiplyScalar(et),U.distance=k,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,r.spot[A]=U;const I=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,I.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[A]=I.matrix,F.castShadow){const it=i.get(F);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,r.spotShadow[A]=it,r.spotShadowMap[A]=Z,L++}A++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(X).multiplyScalar(et),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=U,x++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const I=F.shadow,it=i.get(F);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,it.shadowCameraNear=I.camera.near,it.shadowCameraFar=I.camera.far,r.pointShadow[E]=it,r.pointShadowMap[E]=Z,r.pointShadowMatrix[E]=F.shadow.matrix,N++}r.point[E]=U,E++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(et),U.groundColor.copy(F.groundColor).multiplyScalar(et),r.hemi[S]=U,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==N||T.numSpotShadows!==L||T.numSpotMaps!==G||T.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,T.directionalLength=y,T.pointLength=E,T.spotLength=A,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=N,T.numSpotShadows=L,T.numSpotMaps=G,T.numLightProbes=z,r.version=Fw++)}function m(d,g){let _=0,v=0,y=0,E=0,A=0;const x=g.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const N=d[S];if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),_++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),y++}else if(N.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),f.identity(),c.copy(N.matrixWorld),c.premultiply(x),f.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),v++}else if(N.isHemisphereLight){const L=r.hemi[A];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(x),A++}}}return{setup:p,setupView:m,state:r}}function Jv(s){const t=new Bw(s),i=[],r=[];function l(g){d.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function zw(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Jv(s),t.set(l,[p])):c>=f.length?(p=new Jv(s),f.push(p)):p=f[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Vw=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],kw=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],$v=new qe,ul=new nt,Rd=new nt;function Xw(s,t,i){let r=new Zp;const l=new fe,c=new fe,f=new an,p=new KT,m=new QT,d={},g=i.maxTextureSize,_={[Ss]:$n,[$n]:Ss,[Yi]:Yi},v=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new jn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Cn(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let S=this.type;this.render=function(H,z,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;this.type===Tb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gu);const D=s.getRenderTarget(),Q=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),X=s.state;X.setBlending(La),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const et=S!==this.type;et&&z.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Z=>Z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Z=H.length;k<Z;k++){const U=H[k],I=U.shadow;if(I===void 0){ne("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const it=I.getFrameExtents();l.multiply(it),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/it.x),l.x=c.x*it.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/it.y),l.y=c.y*it.y,I.mapSize.y=c.y));const ht=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ht,I.map===null||et===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===fl){if(U.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ji(l.x,l.y,{format:ao,type:Oa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new yl(l.x,l.y,Zi),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Pa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn}else U.isPointLight?(I.map=new iS(l.x),I.map.depthTexture=new XT(l.x,$i)):(I.map=new Ji(l.x,l.y),I.map.depthTexture=new yl(l.x,l.y,$i)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Pa,this.type===gu?(I.map.depthTexture.compareFunction=ht?jp:Xp,I.map.depthTexture.minFilter=Pn,I.map.depthTexture.magFilter=Pn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn);I.camera.updateProjectionMatrix()}const St=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<St;P++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,P),s.clear();else{P===0&&(s.setRenderTarget(I.map),s.clear());const Y=I.getViewport(P);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),X.viewport(f)}if(U.isPointLight){const Y=I.camera,_t=I.matrix,Rt=U.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),ul.setFromMatrixPosition(U.matrixWorld),Y.position.copy(ul),Rd.copy(Y.position),Rd.add(Vw[P]),Y.up.copy(kw[P]),Y.lookAt(Rd),Y.updateMatrixWorld(),_t.makeTranslation(-ul.x,-ul.y,-ul.z),$v.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix($v,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(U);r=I.getFrustum(),L(z,T,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===fl&&R(I,T),I.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(D,Q,F)};function R(H,z){const T=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ji(l.x,l.y,{format:ao,type:Oa})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(z,null,T,v,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(z,null,T,y,A,null)}function N(H,z,T,D){let Q=null;const F=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)Q=F;else if(Q=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const X=Q.uuid,et=z.uuid;let k=d[X];k===void 0&&(k={},d[X]=k);let Z=k[et];Z===void 0&&(Z=Q.clone(),k[et]=Z,z.addEventListener("dispose",G)),Q=Z}if(Q.visible=z.visible,Q.wireframe=z.wireframe,D===fl?Q.side=z.shadowSide!==null?z.shadowSide:z.side:Q.side=z.shadowSide!==null?z.shadowSide:_[z.side],Q.alphaMap=z.alphaMap,Q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Q.map=z.map,Q.clipShadows=z.clipShadows,Q.clippingPlanes=z.clippingPlanes,Q.clipIntersection=z.clipIntersection,Q.displacementMap=z.displacementMap,Q.displacementScale=z.displacementScale,Q.displacementBias=z.displacementBias,Q.wireframeLinewidth=z.wireframeLinewidth,Q.linewidth=z.linewidth,T.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const X=s.properties.get(Q);X.light=T}return Q}function L(H,z,T,D,Q){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&Q===fl)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const et=t.update(H),k=H.material;if(Array.isArray(k)){const Z=et.groups;for(let U=0,I=Z.length;U<I;U++){const it=Z[U],ht=k[it.materialIndex];if(ht&&ht.visible){const St=N(H,ht,D,Q);H.onBeforeShadow(s,H,z,T,et,St,it),s.renderBufferDirect(T,null,et,St,H,it),H.onAfterShadow(s,H,z,T,et,St,it)}}}else if(k.visible){const Z=N(H,k,D,Q);H.onBeforeShadow(s,H,z,T,et,Z,null),s.renderBufferDirect(T,null,et,Z,H,null),H.onAfterShadow(s,H,z,T,et,Z,null)}}const X=H.children;for(let et=0,k=X.length;et<k;et++)L(X[et],z,T,D,Q)}function G(H){H.target.removeEventListener("dispose",G);for(const T in d){const D=d[T],Q=H.target.uuid;Q in D&&(D[Q].dispose(),delete D[Q])}}}function jw(s,t){function i(){let K=!1;const wt=new an;let Ct=null;const Bt=new an(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!K&&(s.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){K=Tt},setClear:function(Tt,dt,Gt,ae,Fe){Fe===!0&&(Tt*=ae,dt*=ae,Gt*=ae),wt.set(Tt,dt,Gt,ae),Bt.equals(wt)===!1&&(s.clearColor(Tt,dt,Gt,ae),Bt.copy(wt))},reset:function(){K=!1,Ct=null,Bt.set(-1,0,0,0)}}}function r(){let K=!1,wt=!1,Ct=null,Bt=null,Tt=null;return{setReversed:function(dt){if(wt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),wt=dt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return wt},setTest:function(dt){dt?gt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(dt){Ct!==dt&&!K&&(s.depthMask(dt),Ct=dt)},setFunc:function(dt){if(wt&&(dt=aT[dt]),Bt!==dt){switch(dt){case Id:s.depthFunc(s.NEVER);break;case Bd:s.depthFunc(s.ALWAYS);break;case zd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Hd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Vd:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=dt}},setLocked:function(dt){K=dt},setClear:function(dt){Tt!==dt&&(Tt=dt,wt&&(dt=1-dt),s.clearDepth(dt))},reset:function(){K=!1,Ct=null,Bt=null,Tt=null,wt=!1}}}function l(){let K=!1,wt=null,Ct=null,Bt=null,Tt=null,dt=null,Gt=null,ae=null,Fe=null;return{setTest:function(Te){K||(Te?gt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!K&&(s.stencilMask(Te),wt=Te)},setFunc:function(Te,Fn,Ai){(Ct!==Te||Bt!==Fn||Tt!==Ai)&&(s.stencilFunc(Te,Fn,Ai),Ct=Te,Bt=Fn,Tt=Ai)},setOp:function(Te,Fn,Ai){(dt!==Te||Gt!==Fn||ae!==Ai)&&(s.stencilOp(Te,Fn,Ai),dt=Te,Gt=Fn,ae=Ai)},setLocked:function(Te){K=Te},setClear:function(Te){Fe!==Te&&(s.clearStencil(Te),Fe=Te)},reset:function(){K=!1,wt=null,Ct=null,Bt=null,Tt=null,dt=null,Gt=null,ae=null,Fe=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,A=!1,x=null,S=null,R=null,N=null,L=null,G=null,H=null,z=new Ce(0,0,0),T=0,D=!1,Q=null,F=null,X=null,et=null,k=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(it)[1]),U=I>=1):it.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),U=I>=2);let ht=null,St={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),_t=new an().fromArray(P),Rt=new an().fromArray(Y);function Lt(K,wt,Ct,Bt){const Tt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(K,dt),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Ct;Gt++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(wt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return dt}const at={};at[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),gt(s.DEPTH_TEST),f.setFunc(no),ue(!1),$e(Z_),gt(s.CULL_FACE),oe(La);function gt(K){g[K]!==!0&&(s.enable(K),g[K]=!0)}function Et(K){g[K]!==!1&&(s.disable(K),g[K]=!1)}function zt(K,wt){return _[K]!==wt?(s.bindFramebuffer(K,wt),_[K]=wt,K===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),K===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Kt(K,wt){let Ct=y,Bt=!1;if(K){Ct=v.get(wt),Ct===void 0&&(Ct=[],v.set(wt,Ct));const Tt=K.textures;if(Ct.length!==Tt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Gt=Tt.length;dt<Gt;dt++)Ct[dt]=s.COLOR_ATTACHMENT0+dt;Ct.length=Tt.length,Bt=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Ct)}function Yt(K){return E!==K?(s.useProgram(K),E=K,!0):!1}const je={[Ys]:s.FUNC_ADD,[Rb]:s.FUNC_SUBTRACT,[Cb]:s.FUNC_REVERSE_SUBTRACT};je[wb]=s.MIN,je[Db]=s.MAX;const re={[Lb]:s.ZERO,[Nb]:s.ONE,[Ub]:s.SRC_COLOR,[Pd]:s.SRC_ALPHA,[zb]:s.SRC_ALPHA_SATURATE,[Ib]:s.DST_COLOR,[Pb]:s.DST_ALPHA,[Ob]:s.ONE_MINUS_SRC_COLOR,[Fd]:s.ONE_MINUS_SRC_ALPHA,[Bb]:s.ONE_MINUS_DST_COLOR,[Fb]:s.ONE_MINUS_DST_ALPHA,[Hb]:s.CONSTANT_COLOR,[Gb]:s.ONE_MINUS_CONSTANT_COLOR,[Vb]:s.CONSTANT_ALPHA,[kb]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(K,wt,Ct,Bt,Tt,dt,Gt,ae,Fe,Te){if(K===La){A===!0&&(Et(s.BLEND),A=!1);return}if(A===!1&&(gt(s.BLEND),A=!0),K!==Ab){if(K!==x||Te!==D){if((S!==Ys||L!==Ys)&&(s.blendEquation(s.FUNC_ADD),S=Ys,L=Ys),Te)switch(K){case $r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFunc(s.ONE,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ae("WebGLState: Invalid blending: ",K);break}else switch(K){case $r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",K);break}R=null,N=null,G=null,H=null,z.set(0,0,0),T=0,x=K,D=Te}return}Tt=Tt||wt,dt=dt||Ct,Gt=Gt||Bt,(wt!==S||Tt!==L)&&(s.blendEquationSeparate(je[wt],je[Tt]),S=wt,L=Tt),(Ct!==R||Bt!==N||dt!==G||Gt!==H)&&(s.blendFuncSeparate(re[Ct],re[Bt],re[dt],re[Gt]),R=Ct,N=Bt,G=dt,H=Gt),(ae.equals(z)===!1||Fe!==T)&&(s.blendColor(ae.r,ae.g,ae.b,Fe),z.copy(ae),T=Fe),x=K,D=!1}function Ne(K,wt){K.side===Yi?Et(s.CULL_FACE):gt(s.CULL_FACE);let Ct=K.side===$n;wt&&(Ct=!Ct),ue(Ct),K.blending===$r&&K.transparent===!1?oe(La):oe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const Bt=K.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ze(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(K){Q!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),Q=K)}function $e(K){K!==Eb?(gt(s.CULL_FACE),K!==F&&(K===Z_?s.cullFace(s.BACK):K===bb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),F=K}function j(K){K!==X&&(U&&s.lineWidth(K),X=K)}function Ze(K,wt,Ct){K?(gt(s.POLYGON_OFFSET_FILL),(et!==wt||k!==Ct)&&(et=wt,k=Ct,f.getReversed()&&(wt=-wt),s.polygonOffset(wt,Ct))):Et(s.POLYGON_OFFSET_FILL)}function be(K){K?gt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Oe(K){K===void 0&&(K=s.TEXTURE0+Z-1),ht!==K&&(s.activeTexture(K),ht=K)}function qt(K,wt,Ct){Ct===void 0&&(ht===null?Ct=s.TEXTURE0+Z-1:Ct=ht);let Bt=St[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},St[Ct]=Bt),(Bt.type!==K||Bt.texture!==wt)&&(ht!==Ct&&(s.activeTexture(Ct),ht=Ct),s.bindTexture(K,wt||at[K]),Bt.type=K,Bt.texture=wt)}function B(){const K=St[ht];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(K){Ae("WebGLState:",K)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(K){Ae("WebGLState:",K)}}function vt(){try{s.texSubImage2D(...arguments)}catch(K){Ae("WebGLState:",K)}}function Mt(){try{s.texSubImage3D(...arguments)}catch(K){Ae("WebGLState:",K)}}function pt(){try{s.compressedTexSubImage2D(...arguments)}catch(K){Ae("WebGLState:",K)}}function jt(){try{s.compressedTexSubImage3D(...arguments)}catch(K){Ae("WebGLState:",K)}}function Dt(){try{s.texStorage2D(...arguments)}catch(K){Ae("WebGLState:",K)}}function Jt(){try{s.texStorage3D(...arguments)}catch(K){Ae("WebGLState:",K)}}function ee(){try{s.texImage2D(...arguments)}catch(K){Ae("WebGLState:",K)}}function At(){try{s.texImage3D(...arguments)}catch(K){Ae("WebGLState:",K)}}function bt(K){_t.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),_t.copy(K))}function Ft(K){Rt.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Rt.copy(K))}function Pt(K,wt){let Ct=d.get(wt);Ct===void 0&&(Ct=new WeakMap,d.set(wt,Ct));let Bt=Ct.get(K);Bt===void 0&&(Bt=s.getUniformBlockIndex(wt,K.name),Ct.set(K,Bt))}function It(K,wt){const Bt=d.get(wt).get(K);m.get(wt)!==Bt&&(s.uniformBlockBinding(wt,Bt,K.__bindingPointIndex),m.set(wt,Bt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ht=null,St={},_={},v=new WeakMap,y=[],E=null,A=!1,x=null,S=null,R=null,N=null,L=null,G=null,H=null,z=new Ce(0,0,0),T=0,D=!1,Q=null,F=null,X=null,et=null,k=null,_t.set(0,0,s.canvas.width,s.canvas.height),Rt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:gt,disable:Et,bindFramebuffer:zt,drawBuffers:Kt,useProgram:Yt,setBlending:oe,setMaterial:Ne,setFlipSided:ue,setCullFace:$e,setLineWidth:j,setPolygonOffset:Ze,setScissorTest:be,activeTexture:Oe,bindTexture:qt,unbindTexture:B,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:ee,texImage3D:At,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:Dt,texStorage3D:Jt,texSubImage2D:vt,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:jt,scissor:bt,viewport:Ft,reset:de}}function Ww(s,t,i,r,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new fe,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,b){return y?new OffscreenCanvas(B,b):bu("canvas")}function A(B,b,J){let vt=1;const Mt=qt(B);if((Mt.width>J||Mt.height>J)&&(vt=J/Math.max(Mt.width,Mt.height)),vt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pt=Math.floor(vt*Mt.width),jt=Math.floor(vt*Mt.height);_===void 0&&(_=E(pt,jt));const Dt=b?E(pt,jt):_;return Dt.width=pt,Dt.height=jt,Dt.getContext("2d").drawImage(B,0,0,pt,jt),ne("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+jt+")."),Dt}else return"data"in B&&ne("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),B;return B}function x(B){return B.generateMipmaps}function S(B){s.generateMipmap(B)}function R(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(B,b,J,vt,Mt=!1){if(B!==null){if(s[B]!==void 0)return s[B];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pt=b;if(b===s.RED&&(J===s.FLOAT&&(pt=s.R32F),J===s.HALF_FLOAT&&(pt=s.R16F),J===s.UNSIGNED_BYTE&&(pt=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(pt=s.R8UI),J===s.UNSIGNED_SHORT&&(pt=s.R16UI),J===s.UNSIGNED_INT&&(pt=s.R32UI),J===s.BYTE&&(pt=s.R8I),J===s.SHORT&&(pt=s.R16I),J===s.INT&&(pt=s.R32I)),b===s.RG&&(J===s.FLOAT&&(pt=s.RG32F),J===s.HALF_FLOAT&&(pt=s.RG16F),J===s.UNSIGNED_BYTE&&(pt=s.RG8)),b===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(pt=s.RG8UI),J===s.UNSIGNED_SHORT&&(pt=s.RG16UI),J===s.UNSIGNED_INT&&(pt=s.RG32UI),J===s.BYTE&&(pt=s.RG8I),J===s.SHORT&&(pt=s.RG16I),J===s.INT&&(pt=s.RG32I)),b===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),J===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),J===s.UNSIGNED_INT&&(pt=s.RGB32UI),J===s.BYTE&&(pt=s.RGB8I),J===s.SHORT&&(pt=s.RGB16I),J===s.INT&&(pt=s.RGB32I)),b===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),J===s.UNSIGNED_INT&&(pt=s.RGBA32UI),J===s.BYTE&&(pt=s.RGBA8I),J===s.SHORT&&(pt=s.RGBA16I),J===s.INT&&(pt=s.RGBA32I)),b===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(pt=s.R11F_G11F_B10F)),b===s.RGBA){const jt=Mt?Eu:Re.getTransfer(vt);J===s.FLOAT&&(pt=s.RGBA32F),J===s.HALF_FLOAT&&(pt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(pt=jt===ze?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function L(B,b){let J;return B?b===null||b===$i||b===_l?J=s.DEPTH24_STENCIL8:b===Zi?J=s.DEPTH32F_STENCIL8:b===gl&&(J=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===_l?J=s.DEPTH_COMPONENT24:b===Zi?J=s.DEPTH_COMPONENT32F:b===gl&&(J=s.DEPTH_COMPONENT16),J}function G(B,b){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Dn&&B.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function H(B){const b=B.target;b.removeEventListener("dispose",H),T(b),b.isVideoTexture&&g.delete(b)}function z(B){const b=B.target;b.removeEventListener("dispose",z),Q(b)}function T(B){const b=r.get(B);if(b.__webglInit===void 0)return;const J=B.source,vt=v.get(J);if(vt){const Mt=vt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(B),Object.keys(vt).length===0&&v.delete(J)}r.remove(B)}function D(B){const b=r.get(B);s.deleteTexture(b.__webglTexture);const J=B.source,vt=v.get(J);delete vt[b.__cacheKey],f.memory.textures--}function Q(B){const b=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let Mt=0;Mt<b.__webglFramebuffer[vt].length;Mt++)s.deleteFramebuffer(b.__webglFramebuffer[vt][Mt]);else s.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)s.deleteFramebuffer(b.__webglFramebuffer[vt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=B.textures;for(let vt=0,Mt=J.length;vt<Mt;vt++){const pt=r.get(J[vt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),f.memory.textures--),r.remove(J[vt])}r.remove(B)}let F=0;function X(){F=0}function et(){const B=F;return B>=l.maxTextures&&ne("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),F+=1,B}function k(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function Z(B,b){const J=r.get(B);if(B.isVideoTexture&&be(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const vt=B.image;if(vt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{at(J,B,b);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function U(B,b){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){at(J,B,b);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function I(B,b){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){at(J,B,b);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function it(B,b){const J=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){gt(J,B,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const ht={[Xd]:s.REPEAT,[Ca]:s.CLAMP_TO_EDGE,[jd]:s.MIRRORED_REPEAT},St={[Dn]:s.NEAREST,[Wb]:s.NEAREST_MIPMAP_NEAREST,[Gc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Qh]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},P={[Zb]:s.NEVER,[tT]:s.ALWAYS,[Kb]:s.LESS,[Xp]:s.LEQUAL,[Qb]:s.EQUAL,[jp]:s.GEQUAL,[Jb]:s.GREATER,[$b]:s.NOTEQUAL};function Y(B,b){if(b.type===Zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===Qh||b.magFilter===Gc||b.magFilter===Zs||b.minFilter===Pn||b.minFilter===Qh||b.minFilter===Gc||b.minFilter===Zs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ht[b.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ht[b.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ht[b.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,St[b.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Gc&&b.minFilter!==Zs||b.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _t(B,b){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",H));const vt=b.source;let Mt=v.get(vt);Mt===void 0&&(Mt={},v.set(vt,Mt));const pt=k(b);if(pt!==B.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),Mt[pt].usedTimes++;const jt=Mt[B.__cacheKey];jt!==void 0&&(Mt[B.__cacheKey].usedTimes--,jt.usedTimes===0&&D(b)),B.__cacheKey=pt,B.__webglTexture=Mt[pt].texture}return J}function Rt(B,b,J){return Math.floor(Math.floor(B/J)/b)}function Lt(B,b,J,vt){const pt=B.updateRanges;if(pt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,J,vt,b.data);else{pt.sort((At,bt)=>At.start-bt.start);let jt=0;for(let At=1;At<pt.length;At++){const bt=pt[jt],Ft=pt[At],Pt=bt.start+bt.count,It=Rt(Ft.start,b.width,4),de=Rt(bt.start,b.width,4);Ft.start<=Pt+1&&It===de&&Rt(Ft.start+Ft.count-1,b.width,4)===It?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++jt,pt[jt]=Ft)}pt.length=jt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Jt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let At=0,bt=pt.length;At<bt;At++){const Ft=pt[At],Pt=Math.floor(Ft.start/4),It=Math.ceil(Ft.count/4),de=Pt%b.width,K=Math.floor(Pt/b.width),wt=It,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,de),s.pixelStorei(s.UNPACK_SKIP_ROWS,K),i.texSubImage2D(s.TEXTURE_2D,0,de,K,wt,Ct,J,vt,b.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function at(B,b,J){let vt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(vt=s.TEXTURE_3D);const Mt=_t(B,b),pt=b.source;i.bindTexture(vt,B.__webglTexture,s.TEXTURE0+J);const jt=r.get(pt);if(pt.version!==jt.__version||Mt===!0){i.activeTexture(s.TEXTURE0+J);const Dt=Re.getPrimaries(Re.workingColorSpace),Jt=b.colorSpace===vs?null:Re.getPrimaries(b.colorSpace),ee=b.colorSpace===vs||Dt===Jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let At=A(b.image,!1,l.maxTextureSize);At=Oe(b,At);const bt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Pt=N(b.internalFormat,bt,Ft,b.colorSpace,b.isVideoTexture);Y(vt,b);let It;const de=b.mipmaps,K=b.isVideoTexture!==!0,wt=jt.__version===void 0||Mt===!0,Ct=pt.dataReady,Bt=G(b,At);if(b.isDepthTexture)Pt=L(b.format===Ks,b.type),wt&&(K?i.texStorage2D(s.TEXTURE_2D,1,Pt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Pt,At.width,At.height,0,bt,Ft,null));else if(b.isDataTexture)if(de.length>0){K&&wt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,de[0].width,de[0].height);for(let Tt=0,dt=de.length;Tt<dt;Tt++)It=de[Tt],K?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,It.width,It.height,bt,Ft,It.data):i.texImage2D(s.TEXTURE_2D,Tt,Pt,It.width,It.height,0,bt,Ft,It.data);b.generateMipmaps=!1}else K?(wt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,At.width,At.height),Ct&&Lt(b,At,bt,Ft)):i.texImage2D(s.TEXTURE_2D,0,Pt,At.width,At.height,0,bt,Ft,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){K&&wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,de[0].width,de[0].height,At.depth);for(let Tt=0,dt=de.length;Tt<dt;Tt++)if(It=de[Tt],b.format!==Ii)if(bt!==null)if(K){if(Ct)if(b.layerUpdates.size>0){const Gt=Dv(It.width,It.height,b.format,b.type);for(const ae of b.layerUpdates){const Fe=It.data.subarray(ae*Gt/It.data.BYTES_PER_ELEMENT,(ae+1)*Gt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,ae,It.width,It.height,1,bt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,At.depth,bt,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,It.width,It.height,At.depth,0,It.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Ct&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,At.depth,bt,Ft,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,It.width,It.height,At.depth,0,bt,Ft,It.data)}else{K&&wt&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,de[0].width,de[0].height);for(let Tt=0,dt=de.length;Tt<dt;Tt++)It=de[Tt],b.format!==Ii?bt!==null?K?Ct&&i.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,It.width,It.height,bt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,Tt,Pt,It.width,It.height,0,It.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,It.width,It.height,bt,Ft,It.data):i.texImage2D(s.TEXTURE_2D,Tt,Pt,It.width,It.height,0,bt,Ft,It.data)}else if(b.isDataArrayTexture)if(K){if(wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,At.width,At.height,At.depth),Ct)if(b.layerUpdates.size>0){const Tt=Dv(At.width,At.height,b.format,b.type);for(const dt of b.layerUpdates){const Gt=At.data.subarray(dt*Tt/At.data.BYTES_PER_ELEMENT,(dt+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,At.width,At.height,1,bt,Ft,Gt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,bt,Ft,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,At.width,At.height,At.depth,0,bt,Ft,At.data);else if(b.isData3DTexture)K?(wt&&i.texStorage3D(s.TEXTURE_3D,Bt,Pt,At.width,At.height,At.depth),Ct&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,bt,Ft,At.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,At.width,At.height,At.depth,0,bt,Ft,At.data);else if(b.isFramebufferTexture){if(wt)if(K)i.texStorage2D(s.TEXTURE_2D,Bt,Pt,At.width,At.height);else{let Tt=At.width,dt=At.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(s.TEXTURE_2D,Gt,Pt,Tt,dt,0,bt,Ft,null),Tt>>=1,dt>>=1}}else if(de.length>0){if(K&&wt){const Tt=qt(de[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height)}for(let Tt=0,dt=de.length;Tt<dt;Tt++)It=de[Tt],K?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,bt,Ft,It):i.texImage2D(s.TEXTURE_2D,Tt,Pt,bt,Ft,It);b.generateMipmaps=!1}else if(K){if(wt){const Tt=qt(At);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Ft,At)}else i.texImage2D(s.TEXTURE_2D,0,Pt,bt,Ft,At);x(b)&&S(vt),jt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function gt(B,b,J){if(b.image.length!==6)return;const vt=_t(B,b),Mt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+J);const pt=r.get(Mt);if(Mt.version!==pt.__version||vt===!0){i.activeTexture(s.TEXTURE0+J);const jt=Re.getPrimaries(Re.workingColorSpace),Dt=b.colorSpace===vs?null:Re.getPrimaries(b.colorSpace),Jt=b.colorSpace===vs||jt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!ee&&!At?bt[dt]=A(b.image[dt],!0,l.maxCubemapSize):bt[dt]=At?b.image[dt].image:b.image[dt],bt[dt]=Oe(b,bt[dt]);const Ft=bt[0],Pt=c.convert(b.format,b.colorSpace),It=c.convert(b.type),de=N(b.internalFormat,Pt,It,b.colorSpace),K=b.isVideoTexture!==!0,wt=pt.__version===void 0||vt===!0,Ct=Mt.dataReady;let Bt=G(b,Ft);Y(s.TEXTURE_CUBE_MAP,b);let Tt;if(ee){K&&wt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,de,Ft.width,Ft.height);for(let dt=0;dt<6;dt++){Tt=bt[dt].mipmaps;for(let Gt=0;Gt<Tt.length;Gt++){const ae=Tt[Gt];b.format!==Ii?Pt!==null?K?Ct&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,de,ae.width,ae.height,0,ae.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ae.width,ae.height,Pt,It,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,de,ae.width,ae.height,0,Pt,It,ae.data)}}}else{if(Tt=b.mipmaps,K&&wt){Tt.length>0&&Bt++;const dt=qt(bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,de,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(At){K?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,Pt,It,bt[dt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,bt[dt].width,bt[dt].height,0,Pt,It,bt[dt].data);for(let Gt=0;Gt<Tt.length;Gt++){const Fe=Tt[Gt].image[dt].image;K?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Fe.width,Fe.height,Pt,It,Fe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,de,Fe.width,Fe.height,0,Pt,It,Fe.data)}}else{K?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt,It,bt[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,Pt,It,bt[dt]);for(let Gt=0;Gt<Tt.length;Gt++){const ae=Tt[Gt];K?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Pt,It,ae.image[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,de,Pt,It,ae.image[dt])}}}x(b)&&S(s.TEXTURE_CUBE_MAP),pt.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Et(B,b,J,vt,Mt,pt){const jt=c.convert(J.format,J.colorSpace),Dt=c.convert(J.type),Jt=N(J.internalFormat,jt,Dt,J.colorSpace),ee=r.get(b),At=r.get(J);if(At.__renderTarget=b,!ee.__hasExternalTextures){const bt=Math.max(1,b.width>>pt),Ft=Math.max(1,b.height>>pt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,pt,Jt,bt,Ft,b.depth,0,jt,Dt,null):i.texImage2D(Mt,pt,Jt,bt,Ft,0,jt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),Ze(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,Mt,At.__webglTexture,0,j(b)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,Mt,At.__webglTexture,pt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(B,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,B),b.depthBuffer){const vt=b.depthTexture,Mt=vt&&vt.isDepthTexture?vt.type:null,pt=L(b.stencilBuffer,Mt),jt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(b),pt,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(b),pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,jt,s.RENDERBUFFER,B)}else{const vt=b.textures;for(let Mt=0;Mt<vt.length;Mt++){const pt=vt[Mt],jt=c.convert(pt.format,pt.colorSpace),Dt=c.convert(pt.type),Jt=N(pt.internalFormat,jt,Dt,pt.colorSpace);Ze(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(b),Jt,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(b),Jt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Jt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(B,b,J){const vt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),vt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",H)),Mt.__webglTexture===void 0){Mt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Mt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,b.depthTexture);const ee=c.convert(b.depthTexture.format),At=c.convert(b.depthTexture.type);let bt;b.depthTexture.format===Pa?bt=s.DEPTH_COMPONENT24:b.depthTexture.format===Ks&&(bt=s.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,b.width,b.height,0,ee,At,null)}}else Z(b.depthTexture,0);const pt=Mt.__webglTexture,jt=j(b),Dt=vt?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Jt=b.depthTexture.format===Ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Pa)Ze(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Jt,Dt,pt,0,jt):s.framebufferTexture2D(s.FRAMEBUFFER,Jt,Dt,pt,0);else if(b.depthTexture.format===Ks)Ze(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Jt,Dt,pt,0,jt):s.framebufferTexture2D(s.FRAMEBUFFER,Jt,Dt,pt,0);else throw new Error("Unknown depthTexture format")}function Yt(B){const b=r.get(B),J=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const vt=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),vt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,vt.removeEventListener("dispose",Mt)};vt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=vt}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let vt=0;vt<6;vt++)Kt(b.__webglFramebuffer[vt],B,vt);else{const vt=B.texture.mipmaps;vt&&vt.length>0?Kt(b.__webglFramebuffer[0],B,0):Kt(b.__webglFramebuffer,B,0)}else if(J){b.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[vt]),b.__webglDepthbuffer[vt]===void 0)b.__webglDepthbuffer[vt]=s.createRenderbuffer(),zt(b.__webglDepthbuffer[vt],B,!1);else{const Mt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,pt)}}else{const vt=B.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),zt(b.__webglDepthbuffer,B,!1);else{const Mt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,pt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function je(B,b,J){const vt=r.get(B);b!==void 0&&Et(vt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Yt(B)}function re(B){const b=B.texture,J=r.get(B),vt=r.get(b);B.addEventListener("dispose",z);const Mt=B.textures,pt=B.isWebGLCubeRenderTarget===!0,jt=Mt.length>1;if(jt||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=b.version,f.memory.textures++),pt){J.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Dt]=[];for(let Jt=0;Jt<b.mipmaps.length;Jt++)J.__webglFramebuffer[Dt][Jt]=s.createFramebuffer()}else J.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)J.__webglFramebuffer[Dt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(jt)for(let Dt=0,Jt=Mt.length;Dt<Jt;Dt++){const ee=r.get(Mt[Dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&Ze(B)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Jt=Mt[Dt];J.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Dt]);const ee=c.convert(Jt.format,Jt.colorSpace),At=c.convert(Jt.type),bt=N(Jt.internalFormat,ee,At,Jt.colorSpace,B.isXRRenderTarget===!0),Ft=j(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,bt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,J.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(J.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){i.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Jt=0;Jt<b.mipmaps.length;Jt++)Et(J.__webglFramebuffer[Dt][Jt],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Jt);else Et(J.__webglFramebuffer[Dt],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(b)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Dt=0,Jt=Mt.length;Dt<Jt;Dt++){const ee=Mt[Dt],At=r.get(ee);let bt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(bt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(bt,At.__webglTexture),Y(bt,ee),Et(J.__webglFramebuffer,B,ee,s.COLOR_ATTACHMENT0+Dt,bt,0),x(ee)&&S(bt)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Dt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,vt.__webglTexture),Y(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Jt=0;Jt<b.mipmaps.length;Jt++)Et(J.__webglFramebuffer[Jt],B,b,s.COLOR_ATTACHMENT0,Dt,Jt);else Et(J.__webglFramebuffer,B,b,s.COLOR_ATTACHMENT0,Dt,0);x(b)&&S(Dt),i.unbindTexture()}B.depthBuffer&&Yt(B)}function oe(B){const b=B.textures;for(let J=0,vt=b.length;J<vt;J++){const Mt=b[J];if(x(Mt)){const pt=R(B),jt=r.get(Mt).__webglTexture;i.bindTexture(pt,jt),S(pt),i.unbindTexture()}}}const Ne=[],ue=[];function $e(B){if(B.samples>0){if(Ze(B)===!1){const b=B.textures,J=B.width,vt=B.height;let Mt=s.COLOR_BUFFER_BIT;const pt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,jt=r.get(B),Dt=b.length>1;if(Dt)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Jt=B.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const At=r.get(b[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,J,vt,0,0,J,vt,Mt,s.NEAREST),m===!0&&(Ne.length=0,ue.length=0,Ne.push(s.COLOR_ATTACHMENT0+ee),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ne.push(pt),ue.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ue)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const At=r.get(b[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const b=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function j(B){return Math.min(l.maxSamples,B.samples)}function Ze(B){const b=r.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(B){const b=f.render.frame;g.get(B)!==b&&(g.set(B,b),B.update())}function Oe(B,b){const J=B.colorSpace,vt=B.format,Mt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==so&&J!==vs&&(Re.getTransfer(J)===ze?(vt!==Ii||Mt!==hi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",J)),b}function qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=it,this.rebindTextures=je,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Yw(s,t){function i(r,l=vs){let c;const f=Re.getTransfer(l);if(r===hi)return s.UNSIGNED_BYTE;if(r===zp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ix)return s.BYTE;if(r===Bx)return s.SHORT;if(r===gl)return s.UNSIGNED_SHORT;if(r===Bp)return s.INT;if(r===$i)return s.UNSIGNED_INT;if(r===Zi)return s.FLOAT;if(r===Oa)return s.HALF_FLOAT;if(r===Gx)return s.ALPHA;if(r===Vx)return s.RGB;if(r===Ii)return s.RGBA;if(r===Pa)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===kx)return s.RED;if(r===Gp)return s.RED_INTEGER;if(r===ao)return s.RG;if(r===Vp)return s.RG_INTEGER;if(r===kp)return s.RGBA_INTEGER;if(r===_u||r===vu||r===xu||r===Su)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wd||r===Yd||r===qd||r===Zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd||r===Qd||r===Jd||r===$d||r===tp||r===ep||r===np)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Kd||r===Qd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Jd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===$d)return c.COMPRESSED_R11_EAC;if(r===tp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ep)return c.COMPRESSED_RG11_EAC;if(r===np)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp||r===pp||r===mp||r===gp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ip)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ap)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===op)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===up)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gp)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_p||r===vp||r===xp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===_p)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===yp||r===Mp||r===Ep)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Jx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ta({vertexShader:qw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Al(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qw extends $s{constructor(t,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,_=null,v=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",x=new Kw,S={},R=i.getContextAttributes();let N=null,L=null;const G=[],H=[],z=new fe;let T=null;const D=new Ei;D.viewport=new an;const Q=new Ei;Q.viewport=new an;const F=[D,Q],X=new oA;let et=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=G[at];return gt===void 0&&(gt=new id,G[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=G[at];return gt===void 0&&(gt=new id,G[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=G[at];return gt===void 0&&(gt=new id,G[at]=gt),gt.getHandSpace()};function Z(at){const gt=H.indexOf(at.inputSource);if(gt===-1)return;const Et=G[gt];Et!==void 0&&(Et.update(at.inputSource,at.frame,d||f),Et.dispatchEvent({type:at.type,data:at.inputSource}))}function U(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let at=0;at<G.length;at++){const gt=H[at];gt!==null&&(H[at]=null,G[at].disconnect(gt))}et=null,k=null,x.reset();for(const at in S)delete S[at];t.setRenderTarget(N),y=null,v=null,_=null,l=null,L=null,Lt.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,r.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,zt=null,Kt=null;R.depth&&(Kt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=R.stencil?Ks:Pa,zt=R.stencil?_l:$i);const Yt={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Yt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Ji(v.textureWidth,v.textureHeight,{format:Ii,type:hi,depthTexture:new yl(v.textureWidth,v.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ji(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(at){for(let gt=0;gt<at.removed.length;gt++){const Et=at.removed[gt],zt=H.indexOf(Et);zt>=0&&(H[zt]=null,G[zt].disconnect(Et))}for(let gt=0;gt<at.added.length;gt++){const Et=at.added[gt];let zt=H.indexOf(Et);if(zt===-1){for(let Yt=0;Yt<G.length;Yt++)if(Yt>=H.length){H.push(Et),zt=Yt;break}else if(H[Yt]===null){H[Yt]=Et,zt=Yt;break}if(zt===-1)break}const Kt=G[zt];Kt&&Kt.connect(Et)}}const it=new nt,ht=new nt;function St(at,gt,Et){it.setFromMatrixPosition(gt.matrixWorld),ht.setFromMatrixPosition(Et.matrixWorld);const zt=it.distanceTo(ht),Kt=gt.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,je=Kt[14]/(Kt[10]-1),re=Kt[14]/(Kt[10]+1),oe=(Kt[9]+1)/Kt[5],Ne=(Kt[9]-1)/Kt[5],ue=(Kt[8]-1)/Kt[0],$e=(Yt[8]+1)/Yt[0],j=je*ue,Ze=je*$e,be=zt/(-ue+$e),Oe=be*-ue;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Oe),at.translateZ(be),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Kt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const qt=je+be,B=re+be,b=j-Oe,J=Ze+(zt-Oe),vt=oe*re/B*qt,Mt=Ne*re/B*qt;at.projectionMatrix.makePerspective(b,J,vt,Mt,qt,B),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let gt=at.near,Et=at.far;x.texture!==null&&(x.depthNear>0&&(gt=x.depthNear),x.depthFar>0&&(Et=x.depthFar)),X.near=Q.near=D.near=gt,X.far=Q.far=D.far=Et,(et!==X.near||k!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),et=X.near,k=X.far),X.layers.mask=at.layers.mask|6,D.layers.mask=X.layers.mask&-5,Q.layers.mask=X.layers.mask&-3;const zt=at.parent,Kt=X.cameras;P(X,zt);for(let Yt=0;Yt<Kt.length;Yt++)P(Kt[Yt],zt);Kt.length===2?St(X,D,Q):X.projectionMatrix.copy(D.projectionMatrix),Y(at,X,zt)};function Y(at,gt,Et){Et===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Et.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=xl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(at){m=at,v!==null&&(v.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(at){return S[at]};let _t=null;function Rt(at,gt){if(g=gt.getViewerPose(d||f),E=gt,g!==null){const Et=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let zt=!1;Et.length!==X.cameras.length&&(X.cameras.length=0,zt=!0);for(let re=0;re<Et.length;re++){const oe=Et[re];let Ne=null;if(y!==null)Ne=y.getViewport(oe);else{const $e=_.getViewSubImage(v,oe);Ne=$e.viewport,re===0&&(t.setRenderTargetTextures(L,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(L))}let ue=F[re];ue===void 0&&(ue=new Ei,ue.layers.enable(re),ue.viewport=new an,F[re]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),re===0&&(X.matrix.copy(ue.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),zt===!0&&X.cameras.push(ue)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const re=_.getDepthInformation(Et[0]);re&&re.isValid&&re.texture&&x.init(re,l.renderState)}if(Kt&&Kt.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let re=0;re<Et.length;re++){const oe=Et[re].camera;if(oe){let Ne=S[oe];Ne||(Ne=new Jx,S[oe]=Ne);const ue=_.getCameraImage(oe);Ne.sourceTexture=ue}}}}for(let Et=0;Et<G.length;Et++){const zt=H[Et],Kt=G[Et];zt!==null&&Kt!==void 0&&Kt.update(zt,gt,d||f)}_t&&_t(at,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Lt=new nS;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(at){_t=at},this.dispose=function(){}}}const Ws=new wn,Jw=new qe;function $w(s,t){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,$x(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,R,N,L){S.isMeshBasicMaterial?c(x,S):S.isMeshLambertMaterial?(c(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(x,S),_(x,S)):S.isMeshPhongMaterial?(c(x,S),g(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(c(x,S),E(x,S)):S.isMeshDepthMaterial?c(x,S):S.isMeshDistanceMaterial?(c(x,S),A(x,S)):S.isMeshNormalMaterial?c(x,S):S.isLineBasicMaterial?(f(x,S),S.isLineDashedMaterial&&p(x,S)):S.isPointsMaterial?m(x,S,R,N):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===$n&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===$n&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=t.get(S),N=R.envMap,L=R.envMapRotation;N&&(x.envMap.value=N,Ws.copy(L),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),x.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(Ws)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function f(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function p(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,R,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=N*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function A(x,S){const R=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function t3(s,t,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const L=N.program;r.uniformBlockBinding(R,L)}function d(R,N){let L=l[R.id];L===void 0&&(E(R),L=g(R),l[R.id]=L,R.addEventListener("dispose",x));const G=N.program;r.updateUBOMapping(R,G);const H=t.render.frame;c[R.id]!==H&&(v(R),c[R.id]=H)}function g(R){const N=_();R.__bindingPointIndex=N;const L=s.createBuffer(),G=R.__size,H=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function _(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const N=l[R.id],L=R.uniforms,G=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let H=0,z=L.length;H<z;H++){const T=Array.isArray(L[H])?L[H]:[L[H]];for(let D=0,Q=T.length;D<Q;D++){const F=T[D];if(y(F,H,D,G)===!0){const X=F.__offset,et=Array.isArray(F.value)?F.value:[F.value];let k=0;for(let Z=0;Z<et.length;Z++){const U=et[Z],I=A(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,X+k,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):(U.toArray(F.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(R,N,L,G){const H=R.value,z=N+"_"+L;if(G[z]===void 0)return typeof H=="number"||typeof H=="boolean"?G[z]=H:G[z]=H.clone(),!0;{const T=G[z];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return G[z]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function E(R){const N=R.uniforms;let L=0;const G=16;for(let z=0,T=N.length;z<T;z++){const D=Array.isArray(N[z])?N[z]:[N[z]];for(let Q=0,F=D.length;Q<F;Q++){const X=D[Q],et=Array.isArray(X.value)?X.value:[X.value];for(let k=0,Z=et.length;k<Z;k++){const U=et[k],I=A(U),it=L%G,ht=it%I.boundary,St=it+ht;L+=ht,St!==0&&G-St<I.storage&&(L+=G-St),X.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=I.storage}}}const H=L%G;return H>0&&(L+=G-H),R.__size=L,R.__cache={},this}function A(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",R),N}function x(R){const N=R.target;N.removeEventListener("dispose",x);const L=f.indexOf(N.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const R in l)s.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:d,dispose:S}}const e3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function n3(){return ji===null&&(ji=new HT(e3,16,16,ao,Oa),ji.name="DFG_LUT",ji.minFilter=Pn,ji.magFilter=Pn,ji.wrapS=Ca,ji.wrapT=Ca,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class i3{constructor(t={}){const{canvas:i=nT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const A=y,x=new Set([kp,Vp,Gp]),S=new Set([hi,$i,gl,_l,zp,Hp]),R=new Uint32Array(4),N=new Int32Array(4);let L=null,G=null;const H=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let Q=!1;this._outputColorSpace=fi;let F=0,X=0,et=null,k=-1,Z=null;const U=new an,I=new an;let it=null;const ht=new Ce(0);let St=0,P=i.width,Y=i.height,_t=1,Rt=null,Lt=null;const at=new an(0,0,P,Y),gt=new an(0,0,P,Y);let Et=!1;const zt=new Zp;let Kt=!1,Yt=!1;const je=new qe,re=new nt,oe=new an,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function $e(){return et===null?_t:1}let j=r;function Ze(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ip}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),j===null){const q="webgl2";if(j=Ze(q,w),j===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ae("WebGLRenderer: "+w.message),w}let be,Oe,qt,B,b,J,vt,Mt,pt,jt,Dt,Jt,ee,At,bt,Ft,Pt,It,de,K,wt,Ct,Bt;function Tt(){be=new iC(j),be.init(),wt=new Yw(j,be),Oe=new ZR(j,be,t,wt),qt=new jw(j,be),Oe.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),B=new rC(j),b=new Lw,J=new Ww(j,be,qt,b,Oe,wt,B),vt=new nC(D),Mt=new fA(j),Ct=new YR(j,Mt),pt=new aC(j,Mt,B,Ct),jt=new lC(j,pt,Mt,Ct,B),It=new oC(j,Oe,J),bt=new KR(b),Dt=new Dw(D,vt,be,Oe,Ct,bt),Jt=new $w(D,b),ee=new Uw,At=new zw(be),Pt=new WR(D,vt,qt,jt,E,m),Ft=new Xw(D,jt,Oe),Bt=new t3(j,B,Oe,qt),de=new qR(j,be,B),K=new sC(j,be,B),B.programs=Dt.programs,D.capabilities=Oe,D.extensions=be,D.properties=b,D.renderLists=ee,D.shadowMap=Ft,D.state=qt,D.info=B}Tt(),A!==hi&&(T=new uC(A,i.width,i.height,l,c));const dt=new Qw(D,j);this.xr=dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(P,Y,!1))},this.getSize=function(w){return w.set(P,Y)},this.setSize=function(w,q,ut=!0){if(dt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,Y=q,i.width=Math.floor(w*_t),i.height=Math.floor(q*_t),ut===!0&&(i.style.width=w+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(P*_t,Y*_t).floor()},this.setDrawingBufferSize=function(w,q,ut){P=w,Y=q,_t=ut,i.width=Math.floor(w*ut),i.height=Math.floor(q*ut),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(A===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,q,ut,lt){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,q,ut,lt),qt.viewport(U.copy(at).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,q,ut,lt){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,q,ut,lt),qt.scissor(I.copy(gt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){qt.setScissorTest(Et=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){Lt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ut=!0){let lt=0;if(w){let st=!1;if(et!==null){const Nt=et.texture.format;st=x.has(Nt)}if(st){const Nt=et.texture.type,Ht=S.has(Nt),Ut=Pt.getClearColor(),Wt=Pt.getClearAlpha(),Qt=Ut.r,ie=Ut.g,le=Ut.b;Ht?(R[0]=Qt,R[1]=ie,R[2]=le,R[3]=Wt,j.clearBufferuiv(j.COLOR,0,R)):(N[0]=Qt,N[1]=ie,N[2]=le,N[3]=Wt,j.clearBufferiv(j.COLOR,0,N))}else lt|=j.COLOR_BUFFER_BIT}q&&(lt|=j.DEPTH_BUFFER_BIT),ut&&(lt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&j.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Pt.dispose(),ee.dispose(),At.dispose(),b.dispose(),vt.dispose(),jt.dispose(),Ct.dispose(),Bt.dispose(),Dt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",er),dt.removeEventListener("sessionend",nr),zi.stop()};function Gt(w){w.preventDefault(),iv("WebGLRenderer: Context Lost."),Q=!0}function ae(){iv("WebGLRenderer: Context Restored."),Q=!1;const w=B.autoReset,q=Ft.enabled,ut=Ft.autoUpdate,lt=Ft.needsUpdate,st=Ft.type;Tt(),B.autoReset=w,Ft.enabled=q,Ft.autoUpdate=ut,Ft.needsUpdate=lt,Ft.type=st}function Fe(w){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const q=w.target;q.removeEventListener("dispose",Te),Fn(q)}function Fn(w){Ai(w),b.remove(w)}function Ai(w){const q=b.get(w).programs;q!==void 0&&(q.forEach(function(ut){Dt.releaseProgram(ut)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ut,lt,st,Nt){q===null&&(q=Ne);const Ht=st.isMesh&&st.matrixWorld.determinant()<0,Ut=Dl(w,q,ut,lt,st);qt.setMaterial(lt,Ht);let Wt=ut.index,Qt=1;if(lt.wireframe===!0){if(Wt=pt.getWireframeAttribute(ut),Wt===void 0)return;Qt=2}const ie=ut.drawRange,le=ut.attributes.position;let Vt=ie.start*Qt,pe=(ie.start+ie.count)*Qt;Nt!==null&&(Vt=Math.max(Vt,Nt.start*Qt),pe=Math.min(pe,(Nt.start+Nt.count)*Qt)),Wt!==null?(Vt=Math.max(Vt,0),pe=Math.min(pe,Wt.count)):le!=null&&(Vt=Math.max(Vt,0),pe=Math.min(pe,le.count));const Ke=pe-Vt;if(Ke<0||Ke===1/0)return;Ct.setup(st,lt,Ut,ut,Wt);let Qe,we=de;if(Wt!==null&&(Qe=Mt.get(Wt),we=K,we.setIndex(Qe)),st.isMesh)lt.wireframe===!0?(qt.setLineWidth(lt.wireframeLinewidth*$e()),we.setMode(j.LINES)):we.setMode(j.TRIANGLES);else if(st.isLine){let gn=lt.linewidth;gn===void 0&&(gn=1),qt.setLineWidth(gn*$e()),st.isLineSegments?we.setMode(j.LINES):st.isLineLoop?we.setMode(j.LINE_LOOP):we.setMode(j.LINE_STRIP)}else st.isPoints?we.setMode(j.POINTS):st.isSprite&&we.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))we.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const gn=st._multiDrawStarts,Xt=st._multiDrawCounts,In=st._multiDrawCount,se=Wt?Mt.get(Wt).bytesPerElement:1,Bn=b.get(lt).currentProgram.getUniforms();for(let ti=0;ti<In;ti++)Bn.setValue(j,"_gl_DrawID",ti),we.render(gn[ti]/se,Xt[ti])}else if(st.isInstancedMesh)we.renderInstances(Vt,Ke,st.count);else if(ut.isInstancedBufferGeometry){const gn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Xt=Math.min(ut.instanceCount,gn);we.renderInstances(Vt,Ke,Xt)}else we.render(Vt,Ke)};function fo(w,q,ut){w.transparent===!0&&w.side===Yi&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,Fa(w,q,ut),w.side=Ss,w.needsUpdate=!0,Fa(w,q,ut),w.side=Yi):Fa(w,q,ut)}this.compile=function(w,q,ut=null){ut===null&&(ut=w),G=At.get(ut),G.init(q),z.push(G),ut.traverseVisible(function(st){st.isLight&&st.layers.test(q.layers)&&(G.pushLight(st),st.castShadow&&G.pushShadow(st))}),w!==ut&&w.traverseVisible(function(st){st.isLight&&st.layers.test(q.layers)&&(G.pushLight(st),st.castShadow&&G.pushShadow(st))}),G.setupLights();const lt=new Set;return w.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Nt=st.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){const Ut=Nt[Ht];fo(Ut,ut,st),lt.add(Ut)}else fo(Nt,ut,st),lt.add(Nt)}),G=z.pop(),lt},this.compileAsync=function(w,q,ut=null){const lt=this.compile(w,q,ut);return new Promise(st=>{function Nt(){if(lt.forEach(function(Ht){b.get(Ht).currentProgram.isReady()&&lt.delete(Ht)}),lt.size===0){st(w);return}setTimeout(Nt,10)}be.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let tr=null;function Rl(w){tr&&tr(w)}function er(){zi.stop()}function nr(){zi.start()}const zi=new nS;zi.setAnimationLoop(Rl),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){tr=w,dt.setAnimationLoop(w),w===null?zi.stop():zi.start()},dt.addEventListener("sessionstart",er),dt.addEventListener("sessionend",nr),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const ut=dt.enabled===!0&&dt.isPresenting===!0,lt=T!==null&&(et===null||ut)&&T.begin(D,et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,et),G=At.get(w,z.length),G.init(q),z.push(G),je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),zt.setFromProjectionMatrix(je,Ki,q.reversedDepth),Yt=this.localClippingEnabled,Kt=bt.init(this.clippingPlanes,Yt),L=ee.get(w,H.length),L.init(),H.push(L),dt.enabled===!0&&dt.isPresenting===!0){const Ht=D.xr.getDepthSensingMesh();Ht!==null&&ir(Ht,q,-1/0,D.sortObjects)}ir(w,q,0,D.sortObjects),L.finish(),D.sortObjects===!0&&L.sort(Rt,Lt),ue=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ue&&Pt.addToRenderList(L,w),this.info.render.frame++,Kt===!0&&bt.beginShadows();const st=G.state.shadowsArray;if(Ft.render(st,w,q),Kt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&T.hasRenderPass())===!1){const Ht=L.opaque,Ut=L.transmissive;if(G.setupLights(),q.isArrayCamera){const Wt=q.cameras;if(Ut.length>0)for(let Qt=0,ie=Wt.length;Qt<ie;Qt++){const le=Wt[Qt];on(Ht,Ut,w,le)}ue&&Pt.render(w);for(let Qt=0,ie=Wt.length;Qt<ie;Qt++){const le=Wt[Qt];Ri(L,w,le,le.viewport)}}else Ut.length>0&&on(Ht,Ut,w,q),ue&&Pt.render(w),Ri(L,w,q)}et!==null&&X===0&&(J.updateMultisampleRenderTarget(et),J.updateRenderTargetMipmap(et)),lt&&T.end(D),w.isScene===!0&&w.onAfterRender(D,w,q),Ct.resetDefaultState(),k=-1,Z=null,z.pop(),z.length>0?(G=z[z.length-1],Kt===!0&&bt.setGlobalState(D.clippingPlanes,G.state.camera)):G=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function ir(w,q,ut,lt){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)G.pushLight(w),w.castShadow&&G.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||zt.intersectsSprite(w)){lt&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);const Ht=jt.update(w),Ut=w.material;Ut.visible&&L.push(w,Ht,Ut,ut,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||zt.intersectsObject(w))){const Ht=jt.update(w),Ut=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),oe.copy(Ht.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(Ut)){const Wt=Ht.groups;for(let Qt=0,ie=Wt.length;Qt<ie;Qt++){const le=Wt[Qt],Vt=Ut[le.materialIndex];Vt&&Vt.visible&&L.push(w,Ht,Vt,ut,oe.z,le)}}else Ut.visible&&L.push(w,Ht,Ut,ut,oe.z,null)}}const Nt=w.children;for(let Ht=0,Ut=Nt.length;Ht<Ut;Ht++)ir(Nt[Ht],q,ut,lt)}function Ri(w,q,ut,lt){const{opaque:st,transmissive:Nt,transparent:Ht}=w;G.setupLightsView(ut),Kt===!0&&bt.setGlobalState(D.clippingPlanes,ut),lt&&qt.viewport(U.copy(lt)),st.length>0&&mn(st,q,ut),Nt.length>0&&mn(Nt,q,ut),Ht.length>0&&mn(Ht,q,ut),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function on(w,q,ut,lt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[lt.id]===void 0){const Vt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[lt.id]=new Ji(1,1,{generateMipmaps:!0,type:Vt?Oa:hi,minFilter:Zs,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Nt=G.state.transmissionRenderTarget[lt.id],Ht=lt.viewport||U;Nt.setSize(Ht.z*D.transmissionResolutionScale,Ht.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget(),Wt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(Nt),D.getClearColor(ht),St=D.getClearAlpha(),St<1&&D.setClearColor(16777215,.5),D.clear(),ue&&Pt.render(ut);const ie=D.toneMapping;D.toneMapping=Qi;const le=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),G.setupLightsView(lt),Kt===!0&&bt.setGlobalState(D.clippingPlanes,lt),mn(w,ut,lt),J.updateMultisampleRenderTarget(Nt),J.updateRenderTargetMipmap(Nt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let pe=0,Ke=q.length;pe<Ke;pe++){const Qe=q[pe],{object:we,geometry:gn,material:Xt,group:In}=Qe;if(Xt.side===Yi&&we.layers.test(lt.layers)){const se=Xt.side;Xt.side=$n,Xt.needsUpdate=!0,na(we,ut,lt,gn,Xt,In),Xt.side=se,Xt.needsUpdate=!0,Vt=!0}}Vt===!0&&(J.updateMultisampleRenderTarget(Nt),J.updateRenderTargetMipmap(Nt))}D.setRenderTarget(Ut,Wt,Qt),D.setClearColor(ht,St),le!==void 0&&(lt.viewport=le),D.toneMapping=ie}function mn(w,q,ut){const lt=q.isScene===!0?q.overrideMaterial:null;for(let st=0,Nt=w.length;st<Nt;st++){const Ht=w[st],{object:Ut,geometry:Wt,group:Qt}=Ht;let ie=Ht.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Ut.layers.test(ut.layers)&&na(Ut,q,ut,Wt,ie,Qt)}}function na(w,q,ut,lt,st,Nt){w.onBeforeRender(D,q,ut,lt,st,Nt),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),st.onBeforeRender(D,q,ut,lt,w,Nt),st.transparent===!0&&st.side===Yi&&st.forceSinglePass===!1?(st.side=$n,st.needsUpdate=!0,D.renderBufferDirect(ut,q,lt,st,w,Nt),st.side=Ss,st.needsUpdate=!0,D.renderBufferDirect(ut,q,lt,st,w,Nt),st.side=Yi):D.renderBufferDirect(ut,q,lt,st,w,Nt),w.onAfterRender(D,q,ut,lt,st,Nt)}function Fa(w,q,ut){q.isScene!==!0&&(q=Ne);const lt=b.get(w),st=G.state.lights,Nt=G.state.shadowsArray,Ht=st.state.version,Ut=Dt.getParameters(w,st.state,Nt,q,ut),Wt=Dt.getProgramCacheKey(Ut);let Qt=lt.programs;lt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,lt.fog=q.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;lt.envMap=vt.get(w.envMap||lt.environment,ie),lt.envMapRotation=lt.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",Te),Qt=new Map,lt.programs=Qt);let le=Qt.get(Wt);if(le!==void 0){if(lt.currentProgram===le&&lt.lightsStateVersion===Ht)return wl(w,Ut),le}else Ut.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Ut,D),le=Dt.acquireProgram(Ut,Wt),Qt.set(Wt,le),lt.uniforms=Ut.uniforms;const Vt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=bt.uniform),wl(w,Ut),lt.needsLights=ho(w),lt.lightsStateVersion=Ht,lt.needsLights&&(Vt.ambientLightColor.value=st.state.ambient,Vt.lightProbe.value=st.state.probe,Vt.directionalLights.value=st.state.directional,Vt.directionalLightShadows.value=st.state.directionalShadow,Vt.spotLights.value=st.state.spot,Vt.spotLightShadows.value=st.state.spotShadow,Vt.rectAreaLights.value=st.state.rectArea,Vt.ltc_1.value=st.state.rectAreaLTC1,Vt.ltc_2.value=st.state.rectAreaLTC2,Vt.pointLights.value=st.state.point,Vt.pointLightShadows.value=st.state.pointShadow,Vt.hemisphereLights.value=st.state.hemi,Vt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Vt.spotLightMatrix.value=st.state.spotLightMatrix,Vt.spotLightMap.value=st.state.spotLightMap,Vt.pointShadowMatrix.value=st.state.pointShadowMatrix),lt.currentProgram=le,lt.uniformsList=null,le}function Cl(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=yu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function wl(w,q){const ut=b.get(w);ut.outputColorSpace=q.outputColorSpace,ut.batching=q.batching,ut.batchingColor=q.batchingColor,ut.instancing=q.instancing,ut.instancingColor=q.instancingColor,ut.instancingMorph=q.instancingMorph,ut.skinning=q.skinning,ut.morphTargets=q.morphTargets,ut.morphNormals=q.morphNormals,ut.morphColors=q.morphColors,ut.morphTargetsCount=q.morphTargetsCount,ut.numClippingPlanes=q.numClippingPlanes,ut.numIntersection=q.numClipIntersection,ut.vertexAlphas=q.vertexAlphas,ut.vertexTangents=q.vertexTangents,ut.toneMapping=q.toneMapping}function Dl(w,q,ut,lt,st){q.isScene!==!0&&(q=Ne),J.resetTextureUnits();const Nt=q.fog,Ht=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?q.environment:null,Ut=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:so,Wt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Qt=vt.get(lt.envMap||Ht,Wt),ie=lt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,le=!!ut.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!ut.morphAttributes.position,pe=!!ut.morphAttributes.normal,Ke=!!ut.morphAttributes.color;let Qe=Qi;lt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const we=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,gn=we!==void 0?we.length:0,Xt=b.get(lt),In=G.state.lights;if(Kt===!0&&(Yt===!0||w!==Z)){const cn=w===Z&&lt.id===k;bt.setState(lt,w,cn)}let se=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==In.state.version||Xt.outputColorSpace!==Ut||st.isBatchedMesh&&Xt.batching===!1||!st.isBatchedMesh&&Xt.batching===!0||st.isBatchedMesh&&Xt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Xt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Xt.instancing===!1||!st.isInstancedMesh&&Xt.instancing===!0||st.isSkinnedMesh&&Xt.skinning===!1||!st.isSkinnedMesh&&Xt.skinning===!0||st.isInstancedMesh&&Xt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Xt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Xt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Xt.instancingMorph===!1&&st.morphTexture!==null||Xt.envMap!==Qt||lt.fog===!0&&Xt.fog!==Nt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==bt.numPlanes||Xt.numIntersection!==bt.numIntersection)||Xt.vertexAlphas!==ie||Xt.vertexTangents!==le||Xt.morphTargets!==Vt||Xt.morphNormals!==pe||Xt.morphColors!==Ke||Xt.toneMapping!==Qe||Xt.morphTargetsCount!==gn)&&(se=!0):(se=!0,Xt.__version=lt.version);let Bn=Xt.currentProgram;se===!0&&(Bn=Fa(lt,q,st));let ti=!1,Ci=!1,ei=!1;const Pe=Bn.getUniforms(),ln=Xt.uniforms;if(qt.useProgram(Bn.program)&&(ti=!0,Ci=!0,ei=!0),lt.id!==k&&(k=lt.id,Ci=!0),ti||Z!==w){qt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(j,"projectionMatrix",w.projectionMatrix),Pe.setValue(j,"viewMatrix",w.matrixWorldInverse);const wi=Pe.map.cameraPosition;wi!==void 0&&wi.setValue(j,re.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Pe.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Pe.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Ci=!0,ei=!0)}if(Xt.needsLights&&(In.state.directionalShadowMap.length>0&&Pe.setValue(j,"directionalShadowMap",In.state.directionalShadowMap,J),In.state.spotShadowMap.length>0&&Pe.setValue(j,"spotShadowMap",In.state.spotShadowMap,J),In.state.pointShadowMap.length>0&&Pe.setValue(j,"pointShadowMap",In.state.pointShadowMap,J)),st.isSkinnedMesh){Pe.setOptional(j,st,"bindMatrix"),Pe.setOptional(j,st,"bindMatrixInverse");const cn=st.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(j,"boneTexture",cn.boneTexture,J))}st.isBatchedMesh&&(Pe.setOptional(j,st,"batchingTexture"),Pe.setValue(j,"batchingTexture",st._matricesTexture,J),Pe.setOptional(j,st,"batchingIdTexture"),Pe.setValue(j,"batchingIdTexture",st._indirectTexture,J),Pe.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&Pe.setValue(j,"batchingColorTexture",st._colorsTexture,J));const zn=ut.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&It.update(st,ut,Bn),(Ci||Xt.receiveShadow!==st.receiveShadow)&&(Xt.receiveShadow=st.receiveShadow,Pe.setValue(j,"receiveShadow",st.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&q.environment!==null&&(ln.envMapIntensity.value=q.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=n3()),Ci&&(Pe.setValue(j,"toneMappingExposure",D.toneMappingExposure),Xt.needsLights&&Es(ln,ei),Nt&&lt.fog===!0&&Jt.refreshFogUniforms(ln,Nt),Jt.refreshMaterialUniforms(ln,lt,_t,Y,G.state.transmissionRenderTarget[w.id]),yu.upload(j,Cl(Xt),ln,J)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(yu.upload(j,Cl(Xt),ln,J),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Pe.setValue(j,"center",st.center),Pe.setValue(j,"modelViewMatrix",st.modelViewMatrix),Pe.setValue(j,"normalMatrix",st.normalMatrix),Pe.setValue(j,"modelMatrix",st.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const cn=lt.uniformsGroups;for(let wi=0,ia=cn.length;wi<ia;wi++){const ar=cn[wi];Bt.update(ar,Bn),Bt.bind(ar,Bn)}}return Bn}function Es(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function ho(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(w,q,ut){const lt=b.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=q,b.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ut,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ut=b.get(w);ut.__webglFramebuffer=q,ut.__useDefaultFramebuffer=q===void 0};const Ia=j.createFramebuffer();this.setRenderTarget=function(w,q=0,ut=0){et=w,F=q,X=ut;let lt=null,st=!1,Nt=!1;if(w){const Ut=b.get(w);if(Ut.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(j.FRAMEBUFFER,Ut.__webglFramebuffer),U.copy(w.viewport),I.copy(w.scissor),it=w.scissorTest,qt.viewport(U),qt.scissor(I),qt.setScissorTest(it),k=-1;return}else if(Ut.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(Ut.__hasExternalTextures)J.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Ut.__boundDepthTexture!==ie){if(ie!==null&&b.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Nt=!0);const Qt=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?lt=Qt[q][ut]:lt=Qt[q],st=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?lt=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?lt=Qt[ut]:lt=Qt,U.copy(w.viewport),I.copy(w.scissor),it=w.scissorTest}else U.copy(at).multiplyScalar(_t).floor(),I.copy(gt).multiplyScalar(_t).floor(),it=Et;if(ut!==0&&(lt=Ia),qt.bindFramebuffer(j.FRAMEBUFFER,lt)&&qt.drawBuffers(w,lt),qt.viewport(U),qt.scissor(I),qt.setScissorTest(it),st){const Ut=b.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ut.__webglTexture,ut)}else if(Nt){const Ut=q;for(let Wt=0;Wt<w.textures.length;Wt++){const Qt=b.get(w.textures[Wt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Wt,Qt.__webglTexture,ut,Ut)}}else if(w!==null&&ut!==0){const Ut=b.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ut.__webglTexture,ut)}k=-1},this.readRenderTargetPixels=function(w,q,ut,lt,st,Nt,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){qt.bindFramebuffer(j.FRAMEBUFFER,Wt);try{const Qt=w.textures[Ut],ie=Qt.format,le=Qt.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ut),!Oe.textureFormatReadable(ie)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(le)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-lt&&ut>=0&&ut<=w.height-st&&j.readPixels(q,ut,lt,st,wt.convert(ie),wt.convert(le),Nt)}finally{const Qt=et!==null?b.get(et).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,q,ut,lt,st,Nt,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt)if(q>=0&&q<=w.width-lt&&ut>=0&&ut<=w.height-st){qt.bindFramebuffer(j.FRAMEBUFFER,Wt);const Qt=w.textures[Ut],ie=Qt.format,le=Qt.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ut),!Oe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Vt),j.bufferData(j.PIXEL_PACK_BUFFER,Nt.byteLength,j.STREAM_READ),j.readPixels(q,ut,lt,st,wt.convert(ie),wt.convert(le),0);const pe=et!==null?b.get(et).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,pe);const Ke=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await iT(j,Ke,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Vt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Nt),j.deleteBuffer(Vt),j.deleteSync(Ke),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ut=0){const lt=Math.pow(2,-ut),st=Math.floor(w.image.width*lt),Nt=Math.floor(w.image.height*lt),Ht=q!==null?q.x:0,Ut=q!==null?q.y:0;J.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,ut,0,0,Ht,Ut,st,Nt),qt.unbindTexture()};const Ba=j.createFramebuffer(),bs=j.createFramebuffer();this.copyTextureToTexture=function(w,q,ut=null,lt=null,st=0,Nt=0){let Ht,Ut,Wt,Qt,ie,le,Vt,pe,Ke;const Qe=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(ut!==null)Ht=ut.max.x-ut.min.x,Ut=ut.max.y-ut.min.y,Wt=ut.isBox3?ut.max.z-ut.min.z:1,Qt=ut.min.x,ie=ut.min.y,le=ut.isBox3?ut.min.z:0;else{const ln=Math.pow(2,-st);Ht=Math.floor(Qe.width*ln),Ut=Math.floor(Qe.height*ln),w.isDataArrayTexture?Wt=Qe.depth:w.isData3DTexture?Wt=Math.floor(Qe.depth*ln):Wt=1,Qt=0,ie=0,le=0}lt!==null?(Vt=lt.x,pe=lt.y,Ke=lt.z):(Vt=0,pe=0,Ke=0);const we=wt.convert(q.format),gn=wt.convert(q.type);let Xt;q.isData3DTexture?(J.setTexture3D(q,0),Xt=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(J.setTexture2DArray(q,0),Xt=j.TEXTURE_2D_ARRAY):(J.setTexture2D(q,0),Xt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const In=j.getParameter(j.UNPACK_ROW_LENGTH),se=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Bn=j.getParameter(j.UNPACK_SKIP_PIXELS),ti=j.getParameter(j.UNPACK_SKIP_ROWS),Ci=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Qe.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Qe.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Qt),j.pixelStorei(j.UNPACK_SKIP_ROWS,ie),j.pixelStorei(j.UNPACK_SKIP_IMAGES,le);const ei=w.isDataArrayTexture||w.isData3DTexture,Pe=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const ln=b.get(w),zn=b.get(q),cn=b.get(ln.__renderTarget),wi=b.get(zn.__renderTarget);qt.bindFramebuffer(j.READ_FRAMEBUFFER,cn.__webglFramebuffer),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ia=0;ia<Wt;ia++)ei&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,b.get(w).__webglTexture,st,le+ia),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Nt,Ke+ia)),j.blitFramebuffer(Qt,ie,Ht,Ut,Vt,pe,Ht,Ut,j.DEPTH_BUFFER_BIT,j.NEAREST);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||w.isRenderTargetTexture||b.has(w)){const ln=b.get(w),zn=b.get(q);qt.bindFramebuffer(j.READ_FRAMEBUFFER,Ba),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,bs);for(let cn=0;cn<Wt;cn++)ei?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ln.__webglTexture,st,le+cn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ln.__webglTexture,st),Pe?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,zn.__webglTexture,Nt,Ke+cn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zn.__webglTexture,Nt),st!==0?j.blitFramebuffer(Qt,ie,Ht,Ut,Vt,pe,Ht,Ut,j.COLOR_BUFFER_BIT,j.NEAREST):Pe?j.copyTexSubImage3D(Xt,Nt,Vt,pe,Ke+cn,Qt,ie,Ht,Ut):j.copyTexSubImage2D(Xt,Nt,Vt,pe,Qt,ie,Ht,Ut);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Xt,Nt,Vt,pe,Ke,Ht,Ut,Wt,we,gn,Qe.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Xt,Nt,Vt,pe,Ke,Ht,Ut,Wt,we,Qe.data):j.texSubImage3D(Xt,Nt,Vt,pe,Ke,Ht,Ut,Wt,we,gn,Qe):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Nt,Vt,pe,Ht,Ut,we,gn,Qe.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Nt,Vt,pe,Qe.width,Qe.height,we,Qe.data):j.texSubImage2D(j.TEXTURE_2D,Nt,Vt,pe,Ht,Ut,we,gn,Qe);j.pixelStorei(j.UNPACK_ROW_LENGTH,In),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,se),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Bn),j.pixelStorei(j.UNPACK_SKIP_ROWS,ti),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ci),Nt===0&&q.generateMipmaps&&j.generateMipmap(Xt),qt.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),qt.unbindTexture()},this.resetState=function(){F=0,X=0,et=null,qt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const tx={type:"change"},Jp={type:"start"},lS={type:"end"},fu=new Uu,ex=new gs,a3=Math.cos(70*bp.DEG2RAD),vn=new nt,Jn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cd=1e-6;class s3 extends cA{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new ys,this._lastTargetPosition=new nt,this._quat=new ys().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wv,this._sphericalDelta=new wv,this._scale=1,this._panOffset=new nt,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new nt,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o3.bind(this),this._onPointerDown=r3.bind(this),this._onPointerUp=l3.bind(this),this._onContextMenu=m3.bind(this),this._onMouseWheel=f3.bind(this),this._onKeyDown=h3.bind(this),this._onTouchStart=d3.bind(this),this._onTouchMove=p3.bind(this),this._onMouseDown=c3.bind(this),this._onMouseMove=u3.bind(this),this._interceptControlDown=g3.bind(this),this._interceptControlUp=_3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tx),this.update(),this.state=ke.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Jn:r>Math.PI&&(r-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=vn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(fu.origin.copy(this.object.position),fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fu.direction))<a3?this.object.lookAt(this.target):(ex.setFromNormalAndCoplanarPoint(this.object.up,this.target),fu.intersectPlane(ex,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cd||this._lastTargetPosition.distanceToSquared(this.target)>Cd?(this.dispatchEvent(tx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,p=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function r3(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function o3(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function l3(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lS),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function c3(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ke.DOLLY;break;case Jr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}break;case Jr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Jp)}function u3(s){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function f3(s){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(s.preventDefault(),this.dispatchEvent(Jp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(lS))}function h3(s){this.enabled!==!1&&this._handleKeyDown(s)}function d3(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ke.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ke.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Jp)}function p3(s){switch(this._trackPointer(s),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ke.NONE}}function m3(s){this.enabled!==!1&&s.preventDefault()}function g3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class v3 extends Kp{constructor(t){super(t)}load(t,i,r,l){const c=this,f=new eA(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(d){const g=new DataView(d),_=32/8*3+32/8*3*3+16/8,v=g.getUint32(80,!0);if(80+32/8+v*_===g.byteLength)return!0;const E=[115,111,108,105,100];for(let A=0;A<5;A++)if(r(E,g,A))return!1;return!0}function r(d,g,_){for(let v=0,y=d.length;v<y;v++)if(d[v]!==g.getUint8(_+v))return!1;return!0}function l(d){const g=new DataView(d),_=g.getUint32(80,!0);let v,y,E,A=!1,x,S,R,N,L;for(let F=0;F<70;F++)g.getUint32(F,!1)==1129270351&&g.getUint8(F+4)==82&&g.getUint8(F+5)==61&&(A=!0,x=new Float32Array(_*3*3),S=g.getUint8(F+6)/255,R=g.getUint8(F+7)/255,N=g.getUint8(F+8)/255,L=g.getUint8(F+9)/255);const G=84,H=50,z=new jn,T=new Float32Array(_*3*3),D=new Float32Array(_*3*3),Q=new Ce;for(let F=0;F<_;F++){const X=G+F*H,et=g.getFloat32(X,!0),k=g.getFloat32(X+4,!0),Z=g.getFloat32(X+8,!0);if(A){const U=g.getUint16(X+48,!0);(U&32768)===0?(v=(U&31)/31,y=(U>>5&31)/31,E=(U>>10&31)/31):(v=S,y=R,E=N)}for(let U=1;U<=3;U++){const I=X+U*12,it=F*3*3+(U-1)*3;T[it]=g.getFloat32(I,!0),T[it+1]=g.getFloat32(I+4,!0),T[it+2]=g.getFloat32(I+8,!0),D[it]=et,D[it+1]=k,D[it+2]=Z,A&&(Q.setRGB(v,y,E,fi),x[it]=Q.r,x[it+1]=Q.g,x[it+2]=Q.b)}}return z.setAttribute("position",new di(T,3)),z.setAttribute("normal",new di(D,3)),A&&(z.setAttribute("color",new di(x,3)),z.hasColors=!0,z.alpha=L),z}function c(d){const g=new jn,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let E=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+A+A+A,"g"),S=new RegExp("normal"+A+A+A,"g"),R=[],N=[],L=[],G=new nt;let H,z=0,T=0,D=0;for(;(H=_.exec(d))!==null;){T=D;const Q=H[0],F=(H=y.exec(Q))!==null?H[1]:"";for(L.push(F);(H=v.exec(Q))!==null;){let k=0,Z=0;const U=H[0];for(;(H=S.exec(U))!==null;)G.x=parseFloat(H[1]),G.y=parseFloat(H[2]),G.z=parseFloat(H[3]),Z++;for(;(H=x.exec(U))!==null;)R.push(parseFloat(H[1]),parseFloat(H[2]),parseFloat(H[3])),N.push(G.x,G.y,G.z),k++,D++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),k!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const X=T,et=D-T;g.userData.groupNames=L,g.addGroup(X,et,z),z++}return g.setAttribute("position",new bi(R,3)),g.setAttribute("normal",new bi(N,3)),g}function f(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const g=new Uint8Array(d.length);for(let _=0;_<d.length;_++)g[_]=d.charCodeAt(_)&255;return g.buffer||g}else return d}const m=p(t);return i(m)?l(m):c(f(t))}}const x3="/Vibra-Web/",wp=s=>`${x3}${String(s).replace(/^\/+/,"")}`,wd=wp("models/pad_2.stl"),Dd=[wp("models/Prototype-stripped.stl"),wp("models/Protoype-stripped.stl")],nx=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[^a-z0-9]+/g,"");function kn(s,...t){if(!s)return null;const i=t.map(nx);for(const r of Object.keys(s)){const l=nx(r);if(i.includes(l))return s[r]}return null}function eo(s){const t=Number(String(s??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}const Dp=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[\s\-]+/g,"");function S3(s){const i=String(s??"").toLowerCase().match(/(\d+)/),r=i?Number(i[1]):1;return Math.min(3,Math.max(0,r-1))}function cS(s){const t=Number(s);return Number.isFinite(t)?(t%360+360)%360:null}function hu(s,t){const i=Math.abs(s-t)%360;return i>180?360-i:i}function y3(s){return new Promise((t,i)=>{new v3().load(s,t,void 0,i)})}async function ix(s,t){let i=null;for(const r of s)try{return t?.(r),{geom:await y3(r),url:r}}catch(l){i=l}throw i||new Error("All STL URLs failed")}function ax(s){const t=[new wn(0,0,0),new wn(-Math.PI/2,0,0),new wn(Math.PI/2,0,0),new wn(0,0,-Math.PI/2),new wn(0,0,Math.PI/2),new wn(0,-Math.PI/2,0),new wn(0,Math.PI/2,0)];let i=null,r=-1/0;for(const l of t){const c=s.clone();c.applyMatrix4(new qe().makeRotationFromEuler(l)),c.computeBoundingBox();const f=new nt;c.boundingBox.getSize(f),f.y>r&&(r=f.y,i=c)}return i||s}function sx(s,t=1){const i=s.clone();i.computeBoundingBox();const r=i.boundingBox,l=new nt;r.getCenter(l);const c=r.min.y;i.translate(-l.x,-c,-l.z),i.computeBoundingBox();const f=new nt;i.boundingBox.getSize(f);const p=Math.max(f.x,f.y,f.z)||1,m=t/p;return i.computeVertexNormals(),{geom:i,scale:m}}function Ld(s=[],t={}){const l=[],c=[],f=[],p=[];for(const R of s){const N=cS(eo(kn(R,"Angle"))),L=eo(kn(R,"Ultrasonic","Distance","Ultrasonic(cm)","UTV"));if(N==null||L==null||L<=0)continue;const G=L/100;hu(N,0)<=8&&l.push(G),hu(N,90)<=8&&c.push(G),hu(N,180)<=8&&f.push(G),hu(N,270)<=8&&p.push(G)}const m=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:5.6,d=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3.2,g=d/2,_=d/2,v=m/2,y=m/2,E=(l.length?Math.max(...l):g)+.28,A=(c.length?Math.max(...c):v)+.28,x=(f.length?Math.max(...f):_)+.28,S=(p.length?Math.max(...p):y)+.28;return{north:E,east:A,south:x,west:S,lengthM:A+S,widthM:E+x,minX:-S,maxX:A,minZ:-E,maxZ:x,centerX:(A-S)/2,centerZ:(x-E)/2}}function M3({parent:s,bounds:t,y:i=.002,minorCm:r=10,majorCm:l=50}){if(!s||!t)return;const c=new wa,f=r/100,p=new Sl({color:51455,transparent:!0,opacity:.14}),m=new Sl({color:58879,transparent:!0,opacity:.28}),d=(g,_,v,y,E)=>{const A=new jn().setFromPoints([new nt(g,i,_),new nt(v,i,y)]);return new Tp(A,E)};for(let g=t.minX;g<=t.maxX+1e-6;g+=f){const v=Math.round(Math.abs(g)*100)%l===0;c.add(d(g,t.minZ,g,t.maxZ,v?m:p))}for(let g=t.minZ;g<=t.maxZ+1e-6;g+=f){const v=Math.round(Math.abs(g)*100)%l===0;c.add(d(t.minX,g,t.maxX,g,v?m:p))}s.add(c)}function E3({parent:s,bounds:t,heightM:i,wallThickness:r=.05,minorCm:l=10,majorCm:c=50,surfaceOffset:f=.002}){if(!s||!t)return;const p=new wa,m=l/100,d=new Sl({color:58879,transparent:!0,opacity:.16}),g=new Sl({color:58879,transparent:!0,opacity:.3}),_=(y,E,A,x,S)=>{const R=new jn().setFromPoints([new nt(y,A,x),new nt(E,A,x)]);return new Tp(R,S)},v=(y,E,A,x,S)=>{const R=new jn().setFromPoints([new nt(y,E,A),new nt(y,E,x)]);return new Tp(R,S)};for(let y=0;y<=i+1e-6;y+=m){const A=Math.round(y*100)%c===0?g:d;p.add(_(t.minX,t.maxX,y,t.minZ+r/2+f,A)),p.add(_(t.minX,t.maxX,y,t.maxZ-r/2-f,A)),p.add(v(t.minX+r/2+f,y,t.minZ,t.maxZ,A)),p.add(v(t.maxX-r/2-f,y,t.minZ,t.maxZ,A))}s.add(p)}const rx={hotspot:{title:"Hotspot Treatment",fixed:{label:"Bass Trap (Recommended)",desc:"Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",options:[{name:"Rockwool / Mineral Wool Corner Bass Trap",text:"Common DIY/pro option."},{name:"Foam Corner Bass Trap",text:"Easy to buy. Works mainly on mid/high-bass."},{name:"Panel Bass Trap",text:"Thicker wall panels placed at corners/first reflections."},{name:"Tube / Cylindrical Bass Trap",text:"Portable and repositionable."}],footnote:"Tip: Corner placement usually gives the biggest improvement for hotspots."}},deadspot:{title:"Deadspot Treatment",fixed:{label:"Diffuser (Recommended)",desc:"Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced.",options:[{name:"QRD Diffuser (1D)",text:"Common studio diffuser type."},{name:"Skyline Diffuser (2D)",text:"Scatters sound in many directions."},{name:"Poly / Curved Diffuser",text:"Smooth scattering (good for small rooms)."},{name:"Slat / Hybrid Diffuser Panel",text:"Hybrid look (wood slats + backing)."}],footnote:"Tip: Rear wall diffusion often helps deadspots."}}};function b3({rowsFor3D:s,spatial:t}){const i=Array.isArray(s)&&s.length>0,[r,l]=$.useState("all"),[c,f]=$.useState(!1),[p,m]=$.useState({hotspot:!1,deadspot:!1}),[d,g]=$.useState("before"),_=$.useMemo(()=>{const L=Array.isArray(s)?s:[];let G=0,H=0,z=0;for(const T of L){const D=Dp(kn(T,"Classification")??"");D.includes("hot")?G++:D.includes("dead")?H++:z++}return{hot:G,dead:H,neutral:z,total:L.length}},[s]),v=$.useMemo(()=>{const G=(Array.isArray(s)?s:[]).map(z=>eo(kn(z,"RT60","Reverberation"))).filter(z=>Number.isFinite(z));return G.length?G.reduce((z,T)=>z+T,0)/G.length:null},[s]),y=$.useMemo(()=>{if(v==null)return null;let L=v;return p.hotspot&&(L-=.08),p.deadspot&&(L+=.08),Math.max(0,L)},[v,p]),E=$.useMemo(()=>y==null?"—":y>.4?"Hotspot":y<.3?"Deadspot":"Balanced",[y]),A=$.useMemo(()=>{const L=Array.isArray(s)?s:[];if(r==="all")return L;const G=r==="hotspot"?"hot":"dead";return L.filter(H=>Dp(kn(H,"Classification")).includes(G))},[s,r]);$.useEffect(()=>{g("before")},[r]);const x=r==="hotspot"?rx.hotspot:r==="deadspot"?rx.deadspot:null,S=r==="hotspot"?p.hotspot:r==="deadspot"?p.deadspot:!1,R=i&&r!=="all",N=()=>{R&&(m(L=>r==="hotspot"?{...L,hotspot:!0}:r==="deadspot"?{...L,deadspot:!0}:L),g("after"))};return O.jsx("div",{className:"sim-slide sim-slide-2",children:O.jsxs("div",{className:"sim-row sim-row-2",children:[O.jsx("div",{className:"glass-card glass-card--bigLeft",children:O.jsxs("div",{className:"sim3d-card sim3d-card--three",children:[O.jsx(T3,{rowsFor3D:A,allRows:s||[],spatial:t,focusClass:r,viewMode:d,isApplied:S}),O.jsxs("div",{className:"three-legend",children:[O.jsx("div",{className:"three-legend-title",children:"Legend (Click to filter)"}),O.jsxs("button",{type:"button",className:`legend-btn ${r==="hotspot"?"on":""}`,onClick:()=>l("hotspot"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-hot"})," Hotspot (",_.hot,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${r==="deadspot"?"on":""}`,onClick:()=>l("deadspot"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-dead"})," Deadspot (",_.dead,")"]}),O.jsxs("button",{type:"button",className:`legend-btn ${r==="all"?"on":""}`,onClick:()=>l("all"),disabled:!i,children:[O.jsx("span",{className:"swatch swatch-neutral"})," All (",_.total,")"]}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Hover a pad to view details"}),O.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Layer 1 (bottom) → Layer 4 (top)"})]}),O.jsxs("div",{style:{position:"absolute",right:18,top:18,minWidth:180,padding:"12px 14px",borderRadius:14,background:"rgba(18, 24, 38, 0.78)",color:"#fff",zIndex:25,boxShadow:"0 8px 20px rgba(0,0,0,0.18)",pointerEvents:"none"},children:[O.jsx("div",{style:{fontSize:12,opacity:.8,marginBottom:6},children:"RT60 STATUS"}),O.jsx("div",{style:{fontSize:20,fontWeight:700,lineHeight:1.1},children:y==null?"—":y.toFixed(3)}),O.jsx("div",{style:{fontSize:12,marginTop:6,opacity:.9},children:"Target: 0.3 – 0.4"}),O.jsxs("div",{style:{fontSize:12,marginTop:4},children:["Status: ",O.jsx("b",{children:E})]})]})]})}),O.jsxs("div",{className:"glass-card glass-card--recommend",children:[O.jsx("h2",{className:"card-title card-title--recommend",children:"RECOMMENDATION"}),O.jsxs("div",{className:"recommend-inner",children:[O.jsxs("div",{className:"recommend-toolbar",children:[O.jsx("button",{type:"button",className:`guide-btn ${c?"on":""}`,onClick:()=>f(L=>!L),children:c?"Hide Guide":"Guide"}),O.jsx("div",{className:"recommend-mini",children:i?O.jsxs(O.Fragment,{children:["Showing ",O.jsx("b",{children:A.length})," pad(s)"]}):O.jsx(O.Fragment,{children:"No deployed data"})})]}),c&&O.jsxs("div",{className:"guide-card",children:[O.jsx("div",{className:"guide-title",children:"How to use Slide 2"}),O.jsxs("ol",{className:"guide-list",children:[O.jsxs("li",{children:["Go to Slide 1 → Import CSV → then click ",O.jsx("b",{children:"Deploy"}),"."]}),O.jsxs("li",{children:["In Slide 2, click ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"}),"."]}),O.jsx("li",{children:"Read the treatment recommendation."}),O.jsxs("li",{children:["Click ",O.jsx("b",{children:"Apply Treatment"})," to preview “After” in 3D."]})]})]}),i?r==="all"?O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"Select one to continue"}),O.jsxs("div",{className:"info-text",children:["Choose ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"})," to show the recommended treatment and apply preview."]})]}):O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"select-card",children:[O.jsxs("div",{className:"select-title",children:["What you want to select: ",O.jsx("b",{children:"Hotspot"})," or ",O.jsx("b",{children:"Deadspot"}),"?"]}),O.jsxs("div",{className:"select-actions",children:[O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("hotspot"),children:"Select Hotspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("deadspot"),children:"Select Deadspot"}),O.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("all"),children:"Show All"})]}),O.jsx("div",{className:"select-hint",children:"You can also click the Legend inside the 3D panel."})]}),x&&O.jsxs("div",{className:"treat-card",children:[O.jsx("div",{className:"treat-title",children:x.title}),O.jsxs("div",{className:"treat-main",children:[O.jsx("div",{className:"treat-badge",children:x.fixed.label}),O.jsx("div",{className:"treat-desc",children:x.fixed.desc})]}),O.jsxs("div",{className:"treat-actions",children:[O.jsx("button",{type:"button",className:"apply-btn",onClick:N,disabled:!R||S,children:S?"Applied ✓":"Apply Treatment"}),O.jsxs("div",{className:"compare-toggle",children:[O.jsx("button",{type:"button",className:`compare-btn ${d==="before"?"on":""}`,onClick:()=>g("before"),children:"Before"}),O.jsx("button",{type:"button",className:`compare-btn ${d==="after"?"on":""}`,onClick:()=>g("after"),disabled:!S,children:"After"})]})]}),O.jsxs("div",{className:"recommend-card",style:{marginTop:14},children:[O.jsx("div",{className:"recommend-card-title",children:"Available Types (PH-friendly)"}),O.jsx("div",{className:"recommend-list",style:{marginTop:10},children:x.fixed.options.map(L=>O.jsxs("div",{className:"recommend-item",children:[O.jsx("div",{className:"recommend-item-name",children:L.name}),O.jsx("div",{className:"recommend-item-text",children:L.text})]},L.name))}),O.jsx("div",{className:"treat-footnote",children:x.fixed.footnote})]})]})]}):O.jsxs("div",{className:"info-card",children:[O.jsx("div",{className:"info-title",children:"No data detected"}),O.jsxs("div",{className:"info-text",children:["Please import and deploy your data in ",O.jsx("b",{children:"Slide 1"})," first."]})]})]}),O.jsx("div",{className:"scroll-rail"}),O.jsx("div",{className:"scroll-thumb"})]})]})})}function T3({rowsFor3D:s=[],allRows:t=[],spatial:i={},focusClass:r,viewMode:l,isApplied:c}){const f=$.useRef(null),[p,m]=$.useState({show:!1,x:0,y:0,text:""}),[d,g]=$.useState("Initializing 3D…"),_=$.useRef({renderer:null,scene:null,camera:null,controls:null,roomGroup:null,padsGroup:null,protoGroup:null}),v=$.useRef(new lA),y=$.useRef(new fe),E=$.useRef(0),A=$.useRef(""),x=$.useRef({ready:!1,geom:null,baseScale:1,fixYaw:0}),S=$.useRef({mesh:null,loaded:!1,fallbackBox:null}),R=$.useRef(null),N=$.useRef(!1),[L,G]=$.useState(0),[H,z]=$.useState(0),T=$.useRef({hot:new ds({color:8129026,emissive:8129026,emissiveIntensity:.55,roughness:.35,metalness:.05}),dead:new ds({color:937106,emissive:937106,emissiveIntensity:.55,roughness:.35,metalness:.05}),neutral:new ds({color:15790320,emissive:15790320,emissiveIntensity:.12,roughness:.55,metalness:.02}),treated:new ds({color:3066993,emissive:3066993,emissiveIntensity:.45,roughness:.45,metalness:.02}),floor:new ds({color:14540253,transparent:!0,opacity:.92}),wall:new ds({color:16777215,transparent:!0,opacity:.25,side:Yi}),proto:new ds({color:16090919,roughness:.65,metalness:.25})});return $.useEffect(()=>{const D=f.current;if(!D)return;const Q=D.clientWidth,F=D.clientHeight;if(!Q||!F){g("3D mount has 0 width/height. Fix CSS height of .three-mount.");return}const X=new i3({antialias:!0,alpha:!0});X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.setSize(Q,F),X.setClearAlpha(0),D.appendChild(X.domElement);const et=new OT,k=new Ei(60,Q/F,.05,200);k.position.set(0,2.5,4);const Z=new s3(k,X.domElement);Z.enableDamping=!0,Z.dampingFactor=.08,et.add(new sA(16777215,.75));const U=new aA(16777215,1.1);U.position.set(6,9,6),et.add(U);const I=new wa,it=new wa,ht=new wa;et.add(I),et.add(it),et.add(ht),_.current={renderer:X,scene:et,camera:k,controls:Z,roomGroup:I,padsGroup:it,protoGroup:ht},g("3D ready. Loading models…");const St=new ResizeObserver(()=>{const Lt=D.clientWidth,at=D.clientHeight;X.setSize(Lt,at),k.aspect=Lt/at,k.updateProjectionMatrix()});St.observe(D);const P=Lt=>{const at=X.domElement.getBoundingClientRect(),gt=Lt.clientX-at.left,Et=Lt.clientY-at.top;E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{y.current.set(gt/at.width*2-1,-(Et/at.height*2-1)),v.current.setFromCamera(y.current,k);const zt=v.current.intersectObjects(it.children,!1);if(!zt.length){m(oe=>oe.show?{...oe,show:!1}:oe),A.current="";return}const Kt=zt[0].object,Yt=Kt?.userData?.row;if(!Yt)return;const re=[`#${(Kt.userData.index??0)+1}`,`Layer: ${kn(Yt,"Layer")??"-"}`,`Angle: ${kn(Yt,"Angle")??"-"}`,`Ultrasonic: ${kn(Yt,"Ultrasonic","Distance","UTV")??"-"}`,`Decibel: ${kn(Yt,"Decibel","DB","dB")??"-"}`,`RT60: ${kn(Yt,"RT60","Reverberation")??"-"}`,`Classification: ${kn(Yt,"Classification")??"-"}`].join(`
`);re!==A.current?(A.current=re,m({show:!0,x:gt+14,y:Et+14,text:re})):m(oe=>oe.show?{...oe,x:gt+14,y:Et+14}:{show:!0,x:gt+14,y:Et+14,text:re})})},Y=()=>{E.current&&cancelAnimationFrame(E.current),E.current=0,A.current="",m(Lt=>Lt.show?{...Lt,show:!1}:Lt)};X.domElement.addEventListener("pointermove",P),X.domElement.addEventListener("pointerleave",Y);let _t=0;const Rt=()=>{_t=requestAnimationFrame(Rt),Z.update(),X.render(et,k)};return Rt(),()=>{E.current&&cancelAnimationFrame(E.current),cancelAnimationFrame(_t),St.disconnect(),X.domElement.removeEventListener("pointermove",P),X.domElement.removeEventListener("pointerleave",Y),Z.dispose(),X.dispose(),X.domElement&&D.contains(X.domElement)&&D.removeChild(X.domElement)}},[]),$.useEffect(()=>{let D=!1;return(async()=>{if(!x.current.ready)try{g("Loading pad_2.stl…");const{geom:Q}=await ix([wd],I=>g(`Loading pad… ${I.split("/").slice(-1)[0]}`));if(D)return;const F=ax(Q),{geom:X,scale:et}=sx(F,1);X.computeBoundingBox();const k=new nt;X.boundingBox.getSize(k);const U=(k.x<=k.z?"x":"z")==="x"?-Math.PI/2:0;x.current.geom=X,x.current.baseScale=et,x.current.fixYaw=U,x.current.ready=!0,G(I=>I+1),g("pad_2.stl loaded ✅")}catch(Q){console.error("[Pad] load failed ❌",Q),g(`FAILED to load pad_2.stl. Check DevTools > Network if ${wd} is 404.`)}})(),()=>{D=!0}},[]),$.useEffect(()=>{let D=!1;return(async()=>{const{protoGroup:Q}=_.current;if(!Q||S.current.loaded)return;const F=new Cn(new qi(.25,.25,.25),new ds({color:16090919}));F.position.set(0,.125,0),Q.add(F),S.current.fallbackBox=F;try{const{geom:X,url:et}=await ix(Dd,it=>g(`Loading prototype… trying ${it.split("/").slice(-1)[0]}`));if(D)return;const k=ax(X),{geom:Z,scale:U}=sx(k,1.8),I=new Cn(Z,T.current.proto);I.scale.setScalar(U),Q.clear(),Q.add(I),I.position.set(0,0,0),S.current.mesh=I,S.current.loaded=!0,z(it=>it+1),g(`prototype loaded ✅ (${et.split("/").slice(-1)[0]})`)}catch(X){console.error("[Prototype] load failed ❌",X),g("FAILED to load prototype STL. Put it in /public/models and check filename case (Prototype vs Protoype).")}})(),()=>{D=!0}},[]),$.useEffect(()=>{const{roomGroup:D}=_.current;if(!D)return;D.clear();const Q=Ld(t,i);R.current=Q;const F=eo(i?.heightRaw),X=F!=null?F/100:2.7,et=new Cn(new Al(Q.lengthM,Q.widthM),T.current.floor);et.rotation.x=-Math.PI/2,et.position.set(Q.centerX,0,Q.centerZ),D.add(et);const k=.05,Z=T.current.wall,U=new Cn(new qi(Q.lengthM,X,k),Z);U.position.set(Q.centerX,X/2,Q.minZ),D.add(U);const I=new Cn(new qi(Q.lengthM,X,k),Z);I.position.set(Q.centerX,X/2,Q.maxZ),D.add(I);const it=new Cn(new qi(k,X,Q.widthM),Z);it.position.set(Q.minX,X/2,Q.centerZ),D.add(it);const ht=new Cn(new qi(k,X,Q.widthM),Z);ht.position.set(Q.maxX,X/2,Q.centerZ),D.add(ht),M3({parent:D,bounds:Q,y:.002,minorCm:10,majorCm:50}),E3({parent:D,bounds:Q,heightM:X,wallThickness:k,minorCm:10,majorCm:50,surfaceOffset:.002})},[t,i]),$.useEffect(()=>{const{camera:D,controls:Q}=_.current;if(!D||!Q||!x.current.ready)return;const F=R.current||Ld(t,i);if(!F)return;const X=Math.max(F.lengthM,F.widthM,4.5);D.position.set(F.centerX,X*.95,F.centerZ+X*1.15),Q.target.set(F.centerX,1,F.centerZ),Q.update(),N.current=!0},[t,i,L,H]),$.useEffect(()=>{const{padsGroup:D}=_.current;if(!D)return;D.clear();const Q=Array.isArray(s)?s:[],F=R.current||Ld(t,i);if(!Q.length){g("No data rows to deploy.");return}if(!x.current.ready||!x.current.geom){g("Waiting for pad_2.stl to load…");return}g(`Deploying ${Q.length} pads…`);const X=.22,et=.75,k=.42,Z=0,U=r==="hotspot"?"hot":r==="deadspot"?"dead":null;Q.forEach((I,it)=>{const ht=cS(eo(kn(I,"Angle"))),St=eo(kn(I,"Ultrasonic","Distance","Ultrasonic(cm)","UTV"));let P=0,Y=0;if(ht!=null&&St!=null&&St>0){const je=(ht+Z)*Math.PI/180,re=St/100;P=Math.sin(je)*re,Y=-Math.cos(je)*re,P=bp.clamp(P,F.minX+.05,F.maxX-.05),Y=bp.clamp(Y,F.minZ+.05,F.maxZ-.05)}const _t=S3(kn(I,"Layer")??"Layer 1"),Rt=et+_t*k,Lt=Dp(kn(I,"Classification")??"neutral");let at=Lt.includes("hot")?T.current.hot:Lt.includes("dead")?T.current.dead:T.current.neutral;l==="after"&&c&&U&&Lt.includes(U)&&(at=T.current.treated);const gt=new Cn(x.current.geom.clone(),at),Et=x.current.baseScale*X;gt.scale.setScalar(Et),gt.position.set(P,Rt,Y),gt.userData={row:I,index:it};const zt=-P,Kt=-Y;let Yt=Math.atan2(zt,Kt);Yt+=x.current.fixYaw||0,gt.rotation.set(0,Yt,0),D.add(gt)}),S.current.mesh?S.current.mesh.position.set(0,0,0):S.current.fallbackBox&&S.current.fallbackBox.position.set(0,.125,0),g(`Deployed ✅ ${Q.length} pads`)},[s,t,i,L,H,r,l,c]),O.jsxs("div",{ref:f,className:"three-mount",style:{position:"relative"},children:[O.jsxs("div",{style:{position:"absolute",left:10,top:10,padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,0.45)",color:"white",fontSize:12,zIndex:30,pointerEvents:"none",maxWidth:420},children:[d,O.jsxs("div",{style:{opacity:.85,marginTop:4},children:["PAD_URL: ",wd,O.jsx("br",{}),"PROTO: ",Dd[0]," / ",Dd[1]]})]}),p.show&&O.jsx("div",{style:{position:"absolute",left:p.x,top:p.y,whiteSpace:"pre-line",padding:"10px 12px",borderRadius:12,background:"rgba(0,0,0,0.55)",color:"white",fontSize:12,textAlign:"left",lineHeight:1.35,pointerEvents:"none",maxWidth:260,zIndex:20},children:p.text})]})}const _s=s=>String(s??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function ox(s){const t=Number(String(s??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}function A3(s,t){if(!t?.length)return;const i=Object.keys(t[0]||{}),r=p=>{const m=String(p??"");return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=[i.join(","),...t.map(p=>i.map(m=>r(p[m])).join(","))].join(`
`),c=new Blob([l],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");f.href=URL.createObjectURL(c),f.download=s,document.body.appendChild(f),f.click(),document.body.removeChild(f)}const R3=s=>s==null?null:(s%360+360)%360,C3=(s,t,i=3)=>{if(s==null)return null;const r=R3(s);let l=null,c=1/0;for(const f of t){const p=Math.min(Math.abs(r-f),360-Math.abs(r-f));p<c&&(c=p,l=f)}return c<=i?l:null};function du(s,t,i=3){const r=["Layer 1","Layer 2","Layer 3","Layer 4"],l=[0,90,180,271];for(const c of r){const f=s.filter(p=>_s(p.Layer)===_s(c));for(const p of f){const m=ox(p.Angle);if(C3(m,l,i)!==t)continue;const g=ox(p.Ultrasonic);if(g!=null)return{value:g,fromLayer:c}}}return{value:null,fromLayer:""}}function w3(){const s=$.useMemo(()=>[0,1],[]),[t,i]=$.useState(0),[r,l]=$.useState(!1);$.useEffect(()=>l(!0),[]);const[c,f]=$.useState([]),[p,m]=$.useState([]),[d,g]=$.useState({type:"idle",message:""}),[_,v]=$.useState(""),[y,E]=$.useState(""),[A,x]=$.useState(null),S=$.useMemo(()=>{let T=[...c];if(A){const[D,Q]=String(A).split(":");if(D==="layer"&&(T=T.filter(F=>_s(F.Layer)===_s(Q))),D==="class"){const F=_s(Q).replace(/[\s\-]+/g,"");T=T.filter(X=>_s(String(X.Classification)).replace(/[\s\-]+/g,"")===F)}}if(y.trim()){const D=_s(y);T=T.filter(Q=>Object.values(Q).some(F=>_s(F).includes(D)))}return T},[c,y,A]),R=$.useMemo(()=>{const T=du(c,0,3),D=du(c,180,3),Q=du(c,90,3),F=du(c,271,3),X=T.value,et=D.value,k=Q.value,Z=F.value,U=X!=null&&et!=null?X+et:null,I=k!=null&&Z!=null?k+Z:null,ht=(c.find(Rt=>String(Rt.HeightRaw??"").trim()!=="")||null)?.HeightRaw??"",St=U==null?null:U/100,P=I==null?null:I/100,Y=St!=null&&P!=null?St*P:null,_t=Y!=null?Y>=3&&Y<=5:null;return{lengthCm:U,widthCm:I,heightRaw:ht,area:Y,qualified:_t,debug:{u0:X,u0From:T.fromLayer,u180:et,u180From:D.fromLayer,u90:k,u90From:Q.fromLayer,u271:Z,u271From:F.fromLayer}}},[c]),N=()=>i(T=>Math.max(0,T-1)),L=()=>i(T=>Math.min(s.length-1,T+1)),G=()=>{f([]),m([]),v(""),E(""),x(null),g({type:"idle",message:""}),i(0)},H=()=>{m(S),i(1)},z=()=>A3("vibra_raw_parameters.csv",S);return O.jsxs("div",{className:`simulation-page ${r?"enter":""}`,children:[t===0?O.jsx(Mb,{rawRows:c,setRawRows:f,displayedRows:S,searchInput:_,setSearchInput:v,setAppliedSearch:E,sortValue:A,setSortValue:x,onExport:z,onDeploy:H,onReset:G,spatial:R,uploadStatus:d,setUploadStatus:g}):O.jsx(b3,{rowsFor3D:p,spatial:R}),O.jsxs("div",{className:"sim-controls",children:[O.jsx("button",{className:"sim-arrow",onClick:N,disabled:t===0,children:"‹"}),O.jsx("div",{className:"sim-dots",children:s.map((T,D)=>O.jsx("span",{className:`sim-dot ${D===t?"on":""}`},D))}),O.jsx("button",{className:"sim-arrow",onClick:L,disabled:t===s.length-1,children:"›"})]})]})}function D3(){return O.jsxs("div",{className:"inst-page",children:[O.jsx("h1",{className:"inst-title",children:"INSTRUCTION"}),O.jsx("h3",{className:"inst-subtitle",children:"HOW TO USE VIBRA"}),O.jsxs("div",{className:"inst-grid",children:[O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"PROTOTYPE"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Power on the prototype device."}),O.jsx("li",{children:"Place the device at the center of the room."}),O.jsx("li",{children:"Rotate the device 360° to scan the environment."}),O.jsx("li",{children:"Allow sensors to collect dB, distance, and RT60 data."}),O.jsx("li",{children:"Ensure measurements are stable before recording."}),O.jsx("li",{children:"Export or upload the gathered data."})]})]}),O.jsxs("div",{className:"inst-card",children:[O.jsx("h2",{className:"card-heading",children:"WEB APPLICATION"}),O.jsxs("ol",{className:"inst-list",children:[O.jsx("li",{children:"Go to the SIMULATION page."}),O.jsx("li",{children:"Import data (Cloud or Local)."}),O.jsx("li",{children:"Verify Angle, dB, Ultrasonic, RT60 values."}),O.jsx("li",{children:"Select classification (Hotspot/Deadspot/Neutral)."}),O.jsx("li",{children:"Click DEPLOY to map the data."}),O.jsx("li",{children:"Review recommendations and apply treatments."})]})]})]})]})}const L3="https://docs.google.com/spreadsheets/d/15EzmUf5PyGhI88RAx5znaZDTGuw_GUc4OMXKJS_A2Pk/edit?gid=0#gid=0";function N3(){const[s,t]=$.useState(!1),[i,r]=$.useState(""),[l,c]=$.useState(""),[f,p]=$.useState(""),[m,d]=$.useState({type:"",text:""}),[g,_]=$.useState(!1);$.useEffect(()=>{t(!0)},[]);function v(E){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(E||"").trim())}async function y(E){if(E.preventDefault(),g)return;const A=i.trim(),x=l.trim(),S=f.trim();if(!A||!x||!S){d({type:"error",text:"Please fill out Name, Email, and Message."});return}if(!v(x)){d({type:"error",text:"Please enter a valid email address."});return}_(!0),d({type:"loading",text:"Sending..."});try{const R=await fetch(L3,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,email:x,message:S})});let N=null;const L=await R.text();try{N=JSON.parse(L)}catch{N={ok:R.ok}}if(!R.ok||!N?.ok)throw new Error(N?.error||"Failed to send message.");d({type:"success",text:"Message sent! Thanks for reaching out."}),r(""),c(""),p("")}catch(R){d({type:"error",text:"Could not send. If this keeps happening, check the Apps Script deployment access (Anyone) and the URL."}),console.error(R)}finally{_(!1),setTimeout(()=>d({type:"",text:""}),3500)}}return O.jsxs("div",{className:`contact-page ${s?"enter":""}`,children:[O.jsx("h1",{className:"contact-title",children:"CONTACT US"}),O.jsx("h3",{className:"contact-subtitle",children:"GET IN TOUCH"}),O.jsxs("div",{className:"contact-grid",children:[O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"EMAIL"}),O.jsx("div",{className:"contact-value",children:"vibra.project@email.com"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"SCHOOL"}),O.jsx("div",{className:"contact-value",children:"Technological Institute of the Philippines"})]}),O.jsxs("div",{className:"contact-card",children:[O.jsx("div",{className:"contact-label",children:"LOCATION"}),O.jsx("div",{className:"contact-value",children:"Quezon City, Philippines"})]})]}),m.text&&O.jsx("div",{className:`contact-toast ${m.type}`,children:m.text}),O.jsxs("form",{className:"contact-form",onSubmit:y,children:[O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"NAME"}),O.jsx("input",{value:i,onChange:E=>r(E.target.value),placeholder:"Your name",autoComplete:"name"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"EMAIL"}),O.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Your email",autoComplete:"email"})]}),O.jsxs("div",{className:"contact-field",children:[O.jsx("label",{children:"MESSAGE"}),O.jsx("textarea",{value:f,onChange:E=>p(E.target.value),placeholder:"Your message...",rows:6})]}),O.jsx("button",{className:"contact-btn",type:"submit",disabled:g,children:g?"SENDING...":"SEND"})]})]})}function U3(){return O.jsx(ZE,{children:O.jsx(TE,{children:O.jsxs(ms,{element:O.jsx(ob,{}),children:[O.jsx(ms,{path:"/",element:O.jsx(lb,{})}),O.jsx(ms,{path:"/about",element:O.jsx(cb,{})}),O.jsx(ms,{path:"/team",element:O.jsx(gb,{})}),O.jsx(ms,{path:"/simulation",element:O.jsx(w3,{})}),O.jsx(ms,{path:"/instruction",element:O.jsx(D3,{})}),O.jsx(ms,{path:"/contact",element:O.jsx(N3,{})})]})})})}TM.createRoot(document.getElementById("root")).render(O.jsx(_M.StrictMode,{children:O.jsx(U3,{})}));
