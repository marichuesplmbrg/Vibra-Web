(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function dx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kh={exports:{}},al={};var U_;function xM(){if(U_)return al;U_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var N_;function yM(){return N_||(N_=1,kh.exports=xM()),kh.exports}var I=yM(),Xh={exports:{}},le={};var O_;function SM(){if(O_)return le;O_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function x(O,j,_t){this.props=O,this.context=j,this.refs=S,this.updater=_t||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function R(){}R.prototype=x.prototype;function D(O,j,_t){this.props=O,this.context=j,this.refs=S,this.updater=_t||E}var U=D.prototype=new R;U.constructor=D,A(U,x.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(O,j,_t){var Rt=_t.ref;return{$$typeof:r,type:O,key:j,ref:Rt!==void 0?Rt:null,props:_t}}function k(O,j){return L(O.type,j,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Z(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return j[_t]})}var J=/\/+/g;function it(O,j){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):j.toString(36)}function Q(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(j){O.status==="pending"&&(O.status="fulfilled",O.value=j)},function(j){O.status==="pending"&&(O.status="rejected",O.reason=j)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,j,_t,Rt,Lt){var tt=typeof O;(tt==="undefined"||tt==="boolean")&&(O=null);var mt=!1;if(O===null)mt=!0;else switch(tt){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(O.$$typeof){case r:case t:mt=!0;break;case g:return mt=O._init,P(mt(O._payload),j,_t,Rt,Lt)}}if(mt)return Lt=Lt(O),mt=Rt===""?"."+it(O,0):Rt,F(Lt)?(_t="",mt!=null&&(_t=mt.replace(J,"$&/")+"/"),P(Lt,j,_t,"",function(Zt){return Zt})):Lt!=null&&(H(Lt)&&(Lt=k(Lt,_t+(Lt.key==null||O&&O.key===Lt.key?"":(""+Lt.key).replace(J,"$&/")+"/")+mt)),j.push(Lt)),1;mt=0;var Et=Rt===""?".":Rt+":";if(F(O))for(var Pt=0;Pt<O.length;Pt++)Rt=O[Pt],tt=Et+it(Rt,Pt),mt+=P(Rt,j,_t,tt,Lt);else if(Pt=y(O),typeof Pt=="function")for(O=Pt.call(O),Pt=0;!(Rt=O.next()).done;)Rt=Rt.value,tt=Et+it(Rt,Pt++),mt+=P(Rt,j,_t,tt,Lt);else if(tt==="object"){if(typeof O.then=="function")return P(Q(O),j,_t,Rt,Lt);throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return mt}function G(O,j,_t){if(O==null)return O;var Rt=[],Lt=0;return P(O,Rt,"","",function(tt){return j.call(_t,tt,Lt++)}),Rt}function st(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var ht=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Mt={map:G,forEach:function(O,j,_t){G(O,function(){j.apply(this,arguments)},_t)},count:function(O){var j=0;return G(O,function(){j++}),j},toArray:function(O){return G(O,function(j){return j})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return le.Activity=_,le.Children=Mt,le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=D,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(O,j,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=A({},O.props),Lt=O.key;if(j!=null)for(tt in j.key!==void 0&&(Lt=""+j.key),j)!b.call(j,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&j.ref===void 0||(Rt[tt]=j[tt]);var tt=arguments.length-2;if(tt===1)Rt.children=_t;else if(1<tt){for(var mt=Array(tt),Et=0;Et<tt;Et++)mt[Et]=arguments[Et+2];Rt.children=mt}return L(O.type,Lt,Rt)},le.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},le.createElement=function(O,j,_t){var Rt,Lt={},tt=null;if(j!=null)for(Rt in j.key!==void 0&&(tt=""+j.key),j)b.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=j[Rt]);var mt=arguments.length-2;if(mt===1)Lt.children=_t;else if(1<mt){for(var Et=Array(mt),Pt=0;Pt<mt;Pt++)Et[Pt]=arguments[Pt+2];Lt.children=Et}if(O&&O.defaultProps)for(Rt in mt=O.defaultProps,mt)Lt[Rt]===void 0&&(Lt[Rt]=mt[Rt]);return L(O,tt,Lt)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:p,render:O}},le.isValidElement=H,le.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:st}},le.memo=function(O,j){return{$$typeof:d,type:O,compare:j===void 0?null:j}},le.startTransition=function(O){var j=z.T,_t={};z.T=_t;try{var Rt=O(),Lt=z.S;Lt!==null&&Lt(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(N,ht)}catch(tt){ht(tt)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),z.T=j}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(O){return z.H.use(O)},le.useActionState=function(O,j,_t){return z.H.useActionState(O,j,_t)},le.useCallback=function(O,j){return z.H.useCallback(O,j)},le.useContext=function(O){return z.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,j){return z.H.useDeferredValue(O,j)},le.useEffect=function(O,j){return z.H.useEffect(O,j)},le.useEffectEvent=function(O){return z.H.useEffectEvent(O)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(O,j,_t){return z.H.useImperativeHandle(O,j,_t)},le.useInsertionEffect=function(O,j){return z.H.useInsertionEffect(O,j)},le.useLayoutEffect=function(O,j){return z.H.useLayoutEffect(O,j)},le.useMemo=function(O,j){return z.H.useMemo(O,j)},le.useOptimistic=function(O,j){return z.H.useOptimistic(O,j)},le.useReducer=function(O,j,_t){return z.H.useReducer(O,j,_t)},le.useRef=function(O){return z.H.useRef(O)},le.useState=function(O){return z.H.useState(O)},le.useSyncExternalStore=function(O,j,_t){return z.H.useSyncExternalStore(O,j,_t)},le.useTransition=function(){return z.H.useTransition()},le.version="19.2.4",le}var P_;function Lp(){return P_||(P_=1,Xh.exports=SM()),Xh.exports}var nt=Lp();const MM=dx(nt);var jh={exports:{}},sl={},Wh={exports:{}},Yh={};var I_;function EM(){return I_||(I_=1,(function(r){function t(P,G){var st=P.length;P.push(G);t:for(;0<st;){var ht=st-1>>>1,Mt=P[ht];if(0<l(Mt,G))P[ht]=G,P[st]=Mt,st=ht;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var G=P[0],st=P.pop();if(st!==G){P[0]=st;t:for(var ht=0,Mt=P.length,O=Mt>>>1;ht<O;){var j=2*(ht+1)-1,_t=P[j],Rt=j+1,Lt=P[Rt];if(0>l(_t,st))Rt<Mt&&0>l(Lt,_t)?(P[ht]=Lt,P[Rt]=st,ht=Rt):(P[ht]=_t,P[j]=st,ht=j);else if(Rt<Mt&&0>l(Lt,st))P[ht]=Lt,P[Rt]=st,ht=Rt;else break t}}return G}function l(P,G){var st=P.sortIndex-G.sortIndex;return st!==0?st:P.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],g=1,_=null,v=3,y=!1,E=!1,A=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var G=i(d);G!==null;){if(G.callback===null)s(d);else if(G.startTime<=P)s(d),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(d)}}function F(P){if(A=!1,U(P),!E)if(i(m)!==null)E=!0,N||(N=!0,Z());else{var G=i(d);G!==null&&Q(F,G.startTime-P)}}var N=!1,z=-1,b=5,L=-1;function k(){return S?!0:!(r.unstable_now()-L<b)}function H(){if(S=!1,N){var P=r.unstable_now();L=P;var G=!0;try{t:{E=!1,A&&(A=!1,R(z),z=-1),y=!0;var st=v;try{e:{for(U(P),_=i(m);_!==null&&!(_.expirationTime>P&&k());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var Mt=ht(_.expirationTime<=P);if(P=r.unstable_now(),typeof Mt=="function"){_.callback=Mt,U(P),G=!0;break e}_===i(m)&&s(m),U(P)}else s(m);_=i(m)}if(_!==null)G=!0;else{var O=i(d);O!==null&&Q(F,O.startTime-P),G=!1}}break t}finally{_=null,v=st,y=!1}G=void 0}}finally{G?Z():N=!1}}}var Z;if(typeof D=="function")Z=function(){D(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,it=J.port2;J.port1.onmessage=H,Z=function(){it.postMessage(null)}}else Z=function(){x(H,0)};function Q(P,G){z=x(function(){P(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(P){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var st=v;v=G;try{return P()}finally{v=st}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var st=v;v=P;try{return G()}finally{v=st}},r.unstable_scheduleCallback=function(P,G,st){var ht=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?ht+st:ht):st=ht,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=st+Mt,P={id:g++,callback:G,priorityLevel:P,startTime:st,expirationTime:Mt,sortIndex:-1},st>ht?(P.sortIndex=st,t(d,P),i(m)===null&&P===i(d)&&(A?(R(z),z=-1):A=!0,Q(F,st-ht))):(P.sortIndex=Mt,t(m,P),E||y||(E=!0,N||(N=!0,Z()))),P},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(P){var G=v;return function(){var st=v;v=G;try{return P.apply(this,arguments)}finally{v=st}}}})(Yh)),Yh}var F_;function bM(){return F_||(F_=1,Wh.exports=EM()),Wh.exports}var qh={exports:{}},Nn={};var B_;function TM(){if(B_)return Nn;B_=1;var r=Lp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=g,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var z_;function AM(){if(z_)return qh.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qh.exports=TM(),qh.exports}var H_;function RM(){if(H_)return sl;H_=1;var r=bM(),t=Lp(),i=AM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=h;break}if(C===o){M=!0,o=u,a=h;break}C=C.sibling}if(!M){for(C=h.child;C;){if(C===a){M=!0,a=h,o=u;break}if(C===o){M=!0,o=h,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:it(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return it(e(n))}catch{}}return null}var Q=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ht=[],Mt=-1;function O(e){return{current:e}}function j(e){0>Mt||(e.current=ht[Mt],ht[Mt]=null,Mt--)}function _t(e,n){Mt++,ht[Mt]=e.current,e.current=n}var Rt=O(null),Lt=O(null),tt=O(null),mt=O(null);function Et(e,n){switch(_t(tt,n),_t(Lt,e),_t(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),_t(Rt,e)}function Pt(){j(Rt),j(Lt),j(tt)}function Zt(e){e.memoizedState!==null&&_t(mt,e);var n=Rt.current,a=n_(n,e.type);n!==a&&(_t(Lt,e),_t(Rt,a))}function Qt(e){Lt.current===e&&(j(Rt),j(Lt)),mt.current===e&&(j(mt),tl._currentValue=st)}var Ne,ue;function _e(e){if(Ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+ue}var Ae=!1;function se(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var ct=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){ct=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],C=h[1];if(M&&C){var V=M.split(`
`),ot=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ot.length)for(o=V.length-1,u=ot.length-1;1<=o&&0<=u&&V[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ot[u]){var gt=`
`+V[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Ye(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return _e("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=Ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ke=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Pe=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,B=r.unstable_requestPaint,T=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Jt=r.log,ee=r.unstable_setDisableYieldValue,At=null,bt=null;function Ft(e){if(typeof Jt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(At,e)}catch{}}var It=Math.clz32?Math.clz32:q,Bt=Math.log,he=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Bt(e)/he|0)|0}var wt=256,Ct=262144,zt=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=Tt(o):(M&=C,M!==0?u=Tt(M):a||(a=C&~e,a!==0&&(u=Tt(a))))):(C=o&~h,C!==0?u=Tt(C):M!==0?u=Tt(M):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ri(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=M&~a;0<a;){var gt=31-It(a),yt=1<<gt;C[gt]=0,V[gt]=-1;var ct=ot[gt];if(ct!==null)for(ot[gt]=null,gt=0;gt<ct.length;gt++){var ft=ct[gt];ft!==null&&(ft.lane&=-536870913)}a&=~yt}o!==0&&mo(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function mo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function nr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ll(e,n){var a=n&-n;return a=(a&42)!==0?1:ir(a),(a&(e.suspendedLanes|n))!==0?0:a}function ir(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gi(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:T_(e.type))}function sr(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Ci=Math.random().toString(36).slice(2),on="__reactFiber$"+Ci,_n="__reactProps$"+Ci,na="__reactContainer$"+Ci,Ia="__reactEvents$"+Ci,Ul="__reactListeners$"+Ci,Nl="__reactHandles$"+Ci,Ol="__reactResources$"+Ci,Es="__reactMarker$"+Ci;function go(e){delete e[on],delete e[_n],delete e[Ia],delete e[Ul],delete e[Nl]}function Fa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[na]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=c_(e);e!==null;){if(a=e[on])return a;e=c_(e)}return n}e=a,a=e.parentNode}return null}function Ba(e){if(e=e[on]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function bs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[Ol];return n||(n=e[Ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Es]=!0}var ut=new Set,lt={};function at(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(lt[e]=n,e=0;e<n.length;e++)ut.add(n[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nt={},Wt={};function Kt(e){return Ke.call(Wt,e)?!0:Ke.call(Nt,e)?!1:Ht.test(e)?Wt[e]=!0:(Nt[e]=!0,!1)}function ie(e,n,a){if(Kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function De(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function re(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,h,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?wi(e,M,de(n)):a!=null?wi(e,M,de(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+de(C):e.removeAttribute("name")}function ti(e,n,a,o,u,h,M,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){De(e);return}a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),De(e)}function wi(e,n,a){n==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ei(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),De(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Di(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ia(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Di(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Di(e,h,n[h])}function rr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var my=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return gy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var zu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var or=null,lr=null;function tm(e){var n=Ba(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ei(e,!!a.multiple,n,!1)}}}var Gu=!1;function em(e,n,a){if(Gu)return e(n,a);Gu=!0;try{var o=e(n);return o}finally{if(Gu=!1,(or!==null||lr!==null)&&(Mc(),or&&(n=or,e=lr,lr=or=null,tm(n),e)))for(n=0;n<e.length;n++)tm(e[n])}}function _o(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(sa)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Vu=!1}var za=null,ku=null,Il=null;function nm(){if(Il)return Il;var e,n=ku,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return Il=u.slice(e,1<o?1-o:void 0)}function Fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function im(){return!1}function Xn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Bl:im,this.isPropagationStopped=im,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Xn(Ts),xo=_({},Ts,{view:0,detail:0}),_y=Xn(xo),Xu,ju,yo,Hl=_({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(Xu=e.screenX-yo.screenX,ju=e.screenY-yo.screenY):ju=Xu=0,yo=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),am=Xn(Hl),vy=_({},Hl,{dataTransfer:0}),xy=Xn(vy),yy=_({},xo,{relatedTarget:0}),Wu=Xn(yy),Sy=_({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Xn(Sy),Ey=_({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),by=Xn(Ey),Ty=_({},Ts,{data:0}),sm=Xn(Ty),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cy[e])?!!n[e]:!1}function Yu(){return wy}var Dy=_({},xo,{key:function(e){if(e.key){var n=Ay[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=Xn(Dy),Uy=_({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Xn(Uy),Ny=_({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Oy=Xn(Ny),Py=_({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Xn(Py),Fy=_({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),By=Xn(Fy),zy=_({},Ts,{newState:0,oldState:0}),Hy=Xn(zy),Gy=[9,13,27,32],qu=sa&&"CompositionEvent"in window,So=null;sa&&"documentMode"in document&&(So=document.documentMode);var Vy=sa&&"TextEvent"in window&&!So,om=sa&&(!qu||So&&8<So&&11>=So),lm=" ",cm=!1;function um(e,n){switch(e){case"keyup":return Gy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function ky(e,n){switch(e){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(cm=!0,lm);case"textInput":return e=n.data,e===lm&&cm?null:e;default:return null}}function Xy(e,n){if(cr)return e==="compositionend"||!qu&&um(e,n)?(e=nm(),Il=ku=za=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jy[e.type]:n==="textarea"}function dm(e,n,a,o){or?lr?lr.push(o):lr=[o]:or=o,n=wc(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Mo=null,Eo=null;function Wy(e){Z0(e,0)}function Gl(e){var n=bs(e);if(vn(n))return e}function pm(e,n){if(e==="change")return n}var mm=!1;if(sa){var Zu;if(sa){var Ku="oninput"in document;if(!Ku){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Ku=typeof gm.oninput=="function"}Zu=Ku}else Zu=!1;mm=Zu&&(!document.documentMode||9<document.documentMode)}function _m(){Mo&&(Mo.detachEvent("onpropertychange",vm),Eo=Mo=null)}function vm(e){if(e.propertyName==="value"&&Gl(Eo)){var n=[];dm(n,Eo,e,Hu(e)),em(Wy,n)}}function Yy(e,n,a){e==="focusin"?(_m(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",vm)):e==="focusout"&&_m()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(Eo)}function Zy(e,n){if(e==="click")return Gl(n)}function Ky(e,n){if(e==="input"||e==="change")return Gl(n)}function Qy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:Qy;function bo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ke.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ym(e,n){var a=xm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xm(a)}}function Sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xt(e.document)}return n}function Qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Jy=sa&&"documentMode"in document&&11>=document.documentMode,ur=null,Ju=null,To=null,$u=!1;function Em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$u||ur==null||ur!==Xt(o)||(o=ur,"selectionStart"in o&&Qu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),To&&bo(To,o)||(To=o,o=wc(Ju,"onSelect"),0<o.length&&(n=new zl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ur)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var fr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},tf={},bm={};sa&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Rs(e){if(tf[e])return tf[e];if(!fr[e])return e;var n=fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in bm)return tf[e]=n[a];return e}var Tm=Rs("animationend"),Am=Rs("animationiteration"),Rm=Rs("animationstart"),$y=Rs("transitionrun"),tS=Rs("transitionstart"),eS=Rs("transitioncancel"),Cm=Rs("transitionend"),wm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Li(e,n){wm.set(e,n),at(n,[e])}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],hr=0,nf=0;function kl(){for(var e=hr,n=nf=hr=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var h=di[n];if(di[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Dm(a,u,h)}}function Xl(e,n,a,o){di[hr++]=e,di[hr++]=n,di[hr++]=a,di[hr++]=o,nf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function af(e,n,a,o){return Xl(e,n,a,o),jl(e)}function Cs(e,n){return Xl(e,null,null,n),jl(e)}function Dm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-It(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function jl(e){if(50<Yo)throw Yo=0,dh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var dr={};function nS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new nS(e,n,a,o)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")sf(e)&&(M=1);else if(typeof e=="string")M=oM(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ii(31,a,n,u),e.elementType=L,e.lanes=h,e;case A:return ws(a.children,u,h,n);case S:M=8,u|=24;break;case x:return e=ii(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case F:return e=ii(13,a,n,u),e.elementType=F,e.lanes=h,e;case N:return e=ii(19,a,n,u),e.elementType=N,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case R:M=9;break t;case U:M=11;break t;case z:M=14;break t;case b:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ws(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function rf(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Um(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function of(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var pr=[],mr=0,Yl=null,Ao=0,mi=[],gi=0,Ha=null,Vi=1,ki="";function oa(e,n){pr[mr++]=Ao,pr[mr++]=Yl,Yl=e,Ao=n}function Om(e,n,a){mi[gi++]=Vi,mi[gi++]=ki,mi[gi++]=Ha,Ha=e;var o=Vi;e=ki;var u=32-It(o)-1;o&=~(1<<u),a+=1;var h=32-It(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Vi=1<<32-It(n)+u|a<<u|o,ki=h+e}else Vi=1<<h|a<<u|o,ki=e}function lf(e){e.return!==null&&(oa(e,1),Om(e,1,0))}function cf(e){for(;e===Yl;)Yl=pr[--mr],pr[mr]=null,Ao=pr[--mr],pr[mr]=null;for(;e===Ha;)Ha=mi[--gi],mi[gi]=null,ki=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null}function Pm(e,n){mi[gi++]=Vi,mi[gi++]=ki,mi[gi++]=Ha,Vi=n.id,ki=n.overflow,Ha=e}var An=null,qe=null,Ee=!1,Ga=null,_i=!1,uf=Error(s(519));function Va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(pi(n,e)),uf}function Im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[_n]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)ye(Zo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),ti(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Va(e,!0)}function Fm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:An=An.return}}function gr(e){if(e!==An)return!1;if(!Ee)return Fm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ch(e.type,e.memoizedProps)),a=!a),a&&qe&&Va(e),Fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=l_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=l_(e)}else n===27?(n=qe,ns(e.type)?(e=Nh,Nh=null,qe=e):qe=n):qe=An?xi(e.stateNode.nextSibling):null;return!0}function Ds(){qe=An=null,Ee=!1}function ff(){var e=Ga;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ga=null),e}function Ro(e){Ga===null?Ga=[e]:Ga.push(e)}var hf=O(null),Ls=null,la=null;function ka(e,n,a){_t(hf,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=hf.current,j(hf)}function df(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function pf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),df(h.return,a,e),o||(M=null);break t}h=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),df(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function _r(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;ni(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===mt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}u=u.return}e!==null&&pf(n,e,a,o),n.flags|=262144}function ql(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ls=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Bm(Ls,e)}function Zl(e,n){return Ls===null&&Us(e),Bm(e,n)}function Bm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(s(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var iS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},aS=r.unstable_scheduleCallback,sS=r.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new iS,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&aS(sS,function(){e.controller.abort()})}var wo=null,gf=0,vr=0,xr=null;function rS(e,n){if(wo===null){var a=wo=[];gf=0,vr=xh(),xr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return gf++,n.then(zm,zm),n}function zm(){if(--gf===0&&wo!==null){xr!==null&&(xr.status="fulfilled");var e=wo;wo=null,vr=0,xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function oS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hm=P.S;P.S=function(e,n){E0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rS(e,n),Hm!==null&&Hm(e,n)};var Ns=O(null);function _f(){var e=Ns.current;return e!==null?e:We.pooledCache}function Kl(e,n){n===null?_t(Ns,Ns.current):_t(Ns,n.pool)}function Gm(){var e=_f();return e===null?null:{parent:un._currentValue,pool:e}}var yr=Error(s(460)),vf=Error(s(474)),Ql=Error(s(542)),Jl={then:function(){}};function Vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function km(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw Ps=n,yr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,yr):a}}var Ps=null;function Xm(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function jm(e){if(e===yr||e===Ql)throw Error(s(483))}var Sr=null,Do=0;function $l(e){var n=Do;return Do+=1,Sr===null&&(Sr=[]),km(Sr,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function tc(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wm(e){function n($,W){if(e){var rt=$.deletions;rt===null?($.deletions=[W],$.flags|=16):rt.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=ra($,W),$.index=0,$.sibling=null,$}function h($,W,rt){return $.index=rt,e?(rt=$.alternate,rt!==null?(rt=rt.index,rt<W?($.flags|=67108866,W):rt):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return e&&$.alternate===null&&($.flags|=67108866),$}function C($,W,rt,xt){return W===null||W.tag!==6?(W=rf(rt,$.mode,xt),W.return=$,W):(W=u(W,rt),W.return=$,W)}function V($,W,rt,xt){var $t=rt.type;return $t===A?gt($,W,rt.props.children,xt,rt.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&Os($t)===W.type)?(W=u(W,rt.props),Lo(W,rt),W.return=$,W):(W=Wl(rt.type,rt.key,rt.props,null,$.mode,xt),Lo(W,rt),W.return=$,W)}function ot($,W,rt,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=of(rt,$.mode,xt),W.return=$,W):(W=u(W,rt.children||[]),W.return=$,W)}function gt($,W,rt,xt,$t){return W===null||W.tag!==7?(W=ws(rt,$.mode,xt,$t),W.return=$,W):(W=u(W,rt),W.return=$,W)}function yt($,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=rf(""+W,$.mode,rt),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return rt=Wl(W.type,W.key,W.props,null,$.mode,rt),Lo(rt,W),rt.return=$,rt;case E:return W=of(W,$.mode,rt),W.return=$,W;case b:return W=Os(W),yt($,W,rt)}if(Q(W)||Z(W))return W=ws(W,$.mode,rt,null),W.return=$,W;if(typeof W.then=="function")return yt($,$l(W),rt);if(W.$$typeof===D)return yt($,Zl($,W),rt);tc($,W)}return null}function ct($,W,rt,xt){var $t=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return $t!==null?null:C($,W,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===$t?V($,W,rt,xt):null;case E:return rt.key===$t?ot($,W,rt,xt):null;case b:return rt=Os(rt),ct($,W,rt,xt)}if(Q(rt)||Z(rt))return $t!==null?null:gt($,W,rt,xt,null);if(typeof rt.then=="function")return ct($,W,$l(rt),xt);if(rt.$$typeof===D)return ct($,W,Zl($,rt),xt);tc($,rt)}return null}function ft($,W,rt,xt,$t){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return $=$.get(rt)||null,C(W,$,""+xt,$t);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return $=$.get(xt.key===null?rt:xt.key)||null,V(W,$,xt,$t);case E:return $=$.get(xt.key===null?rt:xt.key)||null,ot(W,$,xt,$t);case b:return xt=Os(xt),ft($,W,rt,xt,$t)}if(Q(xt)||Z(xt))return $=$.get(rt)||null,gt(W,$,xt,$t,null);if(typeof xt.then=="function")return ft($,W,rt,$l(xt),$t);if(xt.$$typeof===D)return ft($,W,rt,Zl(W,xt),$t);tc(W,xt)}return null}function kt($,W,rt,xt){for(var $t=null,Le=null,qt=W,pe=W=0,Me=null;qt!==null&&pe<rt.length;pe++){qt.index>pe?(Me=qt,qt=null):Me=qt.sibling;var Ue=ct($,qt,rt[pe],xt);if(Ue===null){qt===null&&(qt=Me);break}e&&qt&&Ue.alternate===null&&n($,qt),W=h(Ue,W,pe),Le===null?$t=Ue:Le.sibling=Ue,Le=Ue,qt=Me}if(pe===rt.length)return a($,qt),Ee&&oa($,pe),$t;if(qt===null){for(;pe<rt.length;pe++)qt=yt($,rt[pe],xt),qt!==null&&(W=h(qt,W,pe),Le===null?$t=qt:Le.sibling=qt,Le=qt);return Ee&&oa($,pe),$t}for(qt=o(qt);pe<rt.length;pe++)Me=ft(qt,$,pe,rt[pe],xt),Me!==null&&(e&&Me.alternate!==null&&qt.delete(Me.key===null?pe:Me.key),W=h(Me,W,pe),Le===null?$t=Me:Le.sibling=Me,Le=Me);return e&&qt.forEach(function(os){return n($,os)}),Ee&&oa($,pe),$t}function te($,W,rt,xt){if(rt==null)throw Error(s(151));for(var $t=null,Le=null,qt=W,pe=W=0,Me=null,Ue=rt.next();qt!==null&&!Ue.done;pe++,Ue=rt.next()){qt.index>pe?(Me=qt,qt=null):Me=qt.sibling;var os=ct($,qt,Ue.value,xt);if(os===null){qt===null&&(qt=Me);break}e&&qt&&os.alternate===null&&n($,qt),W=h(os,W,pe),Le===null?$t=os:Le.sibling=os,Le=os,qt=Me}if(Ue.done)return a($,qt),Ee&&oa($,pe),$t;if(qt===null){for(;!Ue.done;pe++,Ue=rt.next())Ue=yt($,Ue.value,xt),Ue!==null&&(W=h(Ue,W,pe),Le===null?$t=Ue:Le.sibling=Ue,Le=Ue);return Ee&&oa($,pe),$t}for(qt=o(qt);!Ue.done;pe++,Ue=rt.next())Ue=ft(qt,$,pe,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&qt.delete(Ue.key===null?pe:Ue.key),W=h(Ue,W,pe),Le===null?$t=Ue:Le.sibling=Ue,Le=Ue);return e&&qt.forEach(function(vM){return n($,vM)}),Ee&&oa($,pe),$t}function ke($,W,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===A&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var $t=rt.key;W!==null;){if(W.key===$t){if($t=rt.type,$t===A){if(W.tag===7){a($,W.sibling),xt=u(W,rt.props.children),xt.return=$,$=xt;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&Os($t)===W.type){a($,W.sibling),xt=u(W,rt.props),Lo(xt,rt),xt.return=$,$=xt;break t}a($,W);break}else n($,W);W=W.sibling}rt.type===A?(xt=ws(rt.props.children,$.mode,xt,rt.key),xt.return=$,$=xt):(xt=Wl(rt.type,rt.key,rt.props,null,$.mode,xt),Lo(xt,rt),xt.return=$,$=xt)}return M($);case E:t:{for($t=rt.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a($,W.sibling),xt=u(W,rt.children||[]),xt.return=$,$=xt;break t}else{a($,W);break}else n($,W);W=W.sibling}xt=of(rt,$.mode,xt),xt.return=$,$=xt}return M($);case b:return rt=Os(rt),ke($,W,rt,xt)}if(Q(rt))return kt($,W,rt,xt);if(Z(rt)){if($t=Z(rt),typeof $t!="function")throw Error(s(150));return rt=$t.call(rt),te($,W,rt,xt)}if(typeof rt.then=="function")return ke($,W,$l(rt),xt);if(rt.$$typeof===D)return ke($,W,Zl($,rt),xt);tc($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a($,W.sibling),xt=u(W,rt),xt.return=$,$=xt):(a($,W),xt=rf(rt,$.mode,xt),xt.return=$,$=xt),M($)):a($,W)}return function($,W,rt,xt){try{Do=0;var $t=ke($,W,rt,xt);return Sr=null,$t}catch(qt){if(qt===yr||qt===Ql)throw qt;var Le=ii(29,qt,null,$.mode);return Le.lanes=xt,Le.return=$,Le}}}var Is=Wm(!0),Ym=Wm(!1),Xa=!1;function xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=jl(e),Dm(e,null,a),n}return Xl(e,o,n,a),jl(e)}function Uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nr(e,a)}}function Sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Mf=!1;function No(){if(Mf){var e=xr;if(e!==null)throw e}}function Oo(e,n,a,o){Mf=!1;var u=e.updateQueue;Xa=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,ot=V.next;V.next=null,M===null?h=ot:M.next=ot,M=V;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==M&&(C===null?gt.firstBaseUpdate=ot:C.next=ot,gt.lastBaseUpdate=V))}if(h!==null){var yt=u.baseState;M=0,gt=ot=V=null,C=h;do{var ct=C.lane&-536870913,ft=ct!==C.lane;if(ft?(Se&ct)===ct:(o&ct)===ct){ct!==0&&ct===vr&&(Mf=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,te=C;ct=n;var ke=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){yt=kt.call(ke,yt,ct);break t}yt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,ct=typeof kt=="function"?kt.call(ke,yt,ct):kt,ct==null)break t;yt=_({},yt,ct);break t;case 2:Xa=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(ot=gt=ft,V=yt):gt=gt.next=ft,M|=ct;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);gt===null&&(V=yt),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),Qa|=M,e.lanes=M,e.memoizedState=yt}}function qm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Zm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qm(a[e],n)}var Mr=O(null),ec=O(0);function Km(e,n){e=va,_t(ec,e),_t(Mr,n),va=e|n.baseLanes}function Ef(){_t(ec,va),_t(Mr,Mr.current)}function bf(){va=ec.current,j(Mr),j(ec)}var ai=O(null),vi=null;function Ya(e){var n=e.alternate;_t(sn,sn.current&1),_t(ai,e),vi===null&&(n===null||Mr.current!==null||n.memoizedState!==null)&&(vi=e)}function Tf(e){_t(sn,sn.current),_t(ai,e),vi===null&&(vi=e)}function Qm(e){e.tag===22?(_t(sn,sn.current),_t(ai,e),vi===null&&(vi=e)):qa()}function qa(){_t(sn,sn.current),_t(ai,ai.current)}function si(e){j(ai),vi===e&&(vi=null),j(sn)}var sn=O(0);function nc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lh(a)||Uh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,fe=null,Ge=null,fn=null,ic=!1,Er=!1,Fs=!1,ac=0,Po=0,br=null,lS=0;function en(){throw Error(s(321))}function Af(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Rf(e,n,a,o,u,h){return ua=h,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Og:Vf,Fs=!1,h=a(o,u),Fs=!1,Er&&(h=$m(n,a,o,u)),Jm(e),h}function Jm(e){P.H=Bo;var n=Ge!==null&&Ge.next!==null;if(ua=0,fn=Ge=fe=null,ic=!1,Po=0,br=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&ql(e)&&(hn=!0))}function $m(e,n,a,o){fe=e;var u=0;do{if(Er&&(br=null),Po=0,Er=!1,25<=u)throw Error(s(301));if(u+=1,fn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Pg,h=n(a,o)}while(Er);return h}function cS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Io(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(fe.flags|=1024),n}function Cf(){var e=ac!==0;return ac=0,e}function wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Df(e){if(ic){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ic=!1}ua=0,fn=Ge=fe=null,Er=!1,Po=ac=0,br=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?fe.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(Ge===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=fn===null?fe.memoizedState:fn.next;if(n!==null)fn=n,Ge=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},fn===null?fe.memoizedState=fn=e:fn=fn.next=e}return fn}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var n=Po;return Po+=1,br===null&&(br=[]),e=km(br,e,n),n=fe,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Og:Vf),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===D)return Rn(e)}throw Error(s(438,String(e)))}function Lf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sc(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=k;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function oc(e){var n=rn();return Uf(n,Ge,e)}function Uf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=M=null,V=null,ot=n,gt=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(Se&yt)===yt:(ua&yt)===yt){var ct=ot.revertLane;if(ct===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===vr&&(gt=!0);else if((ua&ct)===ct){ot=ot.next,ct===vr&&(gt=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=yt,M=h):V=V.next=yt,fe.lanes|=ct,Qa|=ct;yt=ot.action,Fs&&a(h,yt),h=ot.hasEagerState?ot.eagerState:a(h,yt)}else ct={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=ct,M=h):V=V.next=ct,fe.lanes|=yt,Qa|=yt;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?M=h:V.next=C,!ni(h,e.memoizedState)&&(hn=!0,gt&&(a=xr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);ni(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function tg(e,n,a){var o=fe,u=rn(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ni((Ge||u).memoizedState,a);if(M&&(u.memoizedState=a,hn=!0),u=u.queue,If(ig.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Tr(9,{destroy:void 0},ng.bind(null,o,u,a,n),null),We===null)throw Error(s(349));h||(ua&127)!==0||eg(o,n,a)}return a}function eg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=sc(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ng(e,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&sg(e)}function ig(e,n,a){return a(function(){ag(n)&&sg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function sg(e){var n=Cs(e,2);n!==null&&Zn(n,e,2)}function Of(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Fs){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function rg(e,n,a,o){return e.baseState=a,Uf(e,Ge,typeof o=="function"?o:fa)}function uS(e,n,a,o,u){if(uc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,og(n,h)):(h.next=a.next,n.pending=a.next=h)}}function og(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,M={};P.T=M;try{var C=a(u,o),V=P.S;V!==null&&V(M,C),lg(e,n,C)}catch(ot){Pf(e,n,ot)}finally{h!==null&&M.types!==null&&(h.types=M.types),P.T=h}}else try{h=a(u,o),lg(e,n,h)}catch(ot){Pf(e,n,ot)}}function lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(e,n,o)},function(o){return Pf(e,n,o)}):cg(e,n,a)}function cg(e,n,a){n.status="fulfilled",n.value=a,ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,og(e,a)))}function Pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==o)}e.action=null}function ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fg(e,n){return n}function hg(e,n){if(Ee){var a=We.formState;if(a!==null){t:{var o=fe;if(Ee){if(qe){e:{for(var u=qe,h=_i;u.nodeType!==8;){if(!h){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){qe=xi(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Lg.bind(null,fe,o),o.dispatch=a,o=Of(!1),h=Gf.bind(null,fe,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=uS.bind(null,fe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dg(e){var n=rn();return pg(n,Ge,e)}function pg(e,n,a){if(n=Uf(e,n,fg)[0],e=oc(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Io(n)}catch(M){throw M===yr?Ql:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Tr(9,{destroy:void 0},fS.bind(null,u,a),null)),[o,h,e]}function fS(e,n){e.action=n}function mg(e){var n=rn(),a=Ge;if(a!==null)return pg(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Tr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=sc(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gg(){return rn().memoizedState}function lc(e,n,a,o){var u=Gn();fe.flags|=e,u.memoizedState=Tr(1|n,{destroy:void 0},a,o===void 0?null:o)}function cc(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&Af(o,Ge.memoizedState.deps)?u.memoizedState=Tr(n,h,a,o):(fe.flags|=e,u.memoizedState=Tr(1|n,h,a,o))}function _g(e,n){lc(8390656,8,e,n)}function If(e,n){cc(2048,8,e,n)}function hS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=sc(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=rn().memoizedState;return hS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function xg(e,n){return cc(4,2,e,n)}function yg(e,n){return cc(4,4,e,n)}function Sg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mg(e,n,a){a=a!=null?a.concat([e]):null,cc(4,4,Sg.bind(null,n,e),a)}function Ff(){}function Eg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Af(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Af(n,o[1]))return o[0];if(o=e(),Fs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Bf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T0(),fe.lanes|=e,Qa|=e,a)}function Tg(e,n,a,o){return ni(a,n)?a:Mr.current!==null?(e=Bf(e,a,o),ni(e,n)||(hn=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(Se&261930)===0?(hn=!0,e.memoizedState=a):(e=T0(),fe.lanes|=e,Qa|=e,n)}function Ag(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var M=P.T,C={};P.T=C,Gf(e,!1,n,a);try{var V=u(),ot=P.S;if(ot!==null&&ot(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var gt=oS(V,o);Fo(e,n,gt,li(e))}else Fo(e,n,o,li(e))}catch(yt){Fo(e,n,{then:function(){},status:"rejected",reason:yt},li())}finally{G.p=h,M!==null&&C.types!==null&&(M.types=C.types),P.T=M}}function dS(){}function zf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Rg(e).queue;Ag(e,u,n,st,a===null?dS:function(){return Cg(e),a(o)})}function Rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cg(e){var n=Rg(e);n.next===null&&(n=e.alternate.memoizedState),Fo(e,n.next.queue,{},li())}function Hf(){return Rn(tl)}function wg(){return rn().memoizedState}function Dg(){return rn().memoizedState}function pS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=ja(a);var o=Wa(n,e,a);o!==null&&(Zn(o,n,a),Uo(o,n,a)),n={cache:mf()},e.payload=n;return}n=n.return}}function mS(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uc(e)?Ug(n,a):(a=af(e,n,a,o),a!==null&&(Zn(a,e,o),Ng(a,n,o)))}function Lg(e,n,a){var o=li();Fo(e,n,a,o)}function Fo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uc(e))Ug(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,C=h(M,a);if(u.hasEagerState=!0,u.eagerState=C,ni(C,M))return Xl(e,n,u,0),We===null&&kl(),!1}catch{}if(a=af(e,n,u,o),a!==null)return Zn(a,e,o),Ng(a,n,o),!0}return!1}function Gf(e,n,a,o){if(o={lane:2,revertLane:xh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(n)throw Error(s(479))}else n=af(e,a,o,2),n!==null&&Zn(n,e,2)}function uc(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Ug(e,n){Er=ic=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nr(e,a)}}var Bo={readContext:Rn,use:rc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Bo.useEffectEvent=en;var Og={readContext:Rn,use:rc,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:_g,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,lc(4194308,4,Sg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return lc(4194308,4,e,n)},useInsertionEffect:function(e,n){lc(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Fs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Fs){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=mS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Of(e);var n=e.queue,a=Lg.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(e,n){var a=Gn();return Bf(a,e,n)},useTransition:function(){var e=Of(!1);return e=Ag.bind(null,fe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Gn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Se&127)!==0||eg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_g(ig.bind(null,o,h,e),[e]),o.flags|=2048,Tr(9,{destroy:void 0},ng.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=We.identifierPrefix;if(Ee){var a=ki,o=Vi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ac++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Hf,useFormState:hg,useActionState:hg,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lf,useCacheRefresh:function(){return Gn().memoizedState=pS.bind(null,fe)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Vf={readContext:Rn,use:rc,useCallback:Eg,useContext:Rn,useEffect:If,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:oc,useRef:gg,useState:function(){return oc(fa)},useDebugValue:Ff,useDeferredValue:function(e,n){var a=rn();return Tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=oc(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Hf,useFormState:dg,useActionState:dg,useOptimistic:function(e,n){var a=rn();return rg(a,Ge,e,n)},useMemoCache:Lf,useCacheRefresh:Dg};Vf.useEffectEvent=vg;var Pg={readContext:Rn,use:rc,useCallback:Eg,useContext:Rn,useEffect:If,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:Nf,useRef:gg,useState:function(){return Nf(fa)},useDebugValue:Ff,useDeferredValue:function(e,n){var a=rn();return Ge===null?Bf(a,e,n):Tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Nf(fa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Hf,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=rn();return Ge!==null?rg(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:Dg};Pg.useEffectEvent=vg;function kf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Zn(n,e,o),Uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(e,u,o),n!==null&&(Zn(n,e,o),Uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(e,o,a),n!==null&&(Zn(n,e,a),Uo(n,e,a))}};function Ig(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!bo(a,o)||!bo(u,h):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Xf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bg(e){Vl(e)}function zg(e){console.error(e)}function Hg(e){Vl(e)}function fc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){fc(e,n)},a}function Vg(e){return e=ja(e),e.tag=3,e}function kg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Gg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Gg(n,a,o),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function gS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&_r(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Ec():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),gh(e,o,u)),!1;case 22:return a.flags|=65536,o===Jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),gh(e,o,u)),!1}throw Error(s(435,a.tag))}return gh(e,o,u),Ec(),!1}if(Ee)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==uf&&(e=Error(s(422),{cause:o}),Ro(pi(e,a)))):(o!==uf&&(n=Error(s(423),{cause:o}),Ro(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=jf(e.stateNode,o,u),Sf(e,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=pi(h,a),Wo===null?Wo=[h]:Wo.push(h),nn!==4&&(nn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=jf(a.stateNode,o,e),Sf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ja===null||!Ja.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),kg(u,e,a,o),Sf(a,u),!1}a=a.return}while(a!==null);return!1}var Wf=Error(s(461)),hn=!1;function Cn(e,n,a,o){n.child=e===null?Ym(n,null,a,o):Is(n,e.child,a,o)}function Xg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return Us(n),o=Rf(e,n,a,M,h,u),C=Cf(),e!==null&&!hn?(wf(e,n,u),ha(e,n,u)):(Ee&&C&&lf(n),n.flags|=1,Cn(e,n,o,u),n.child)}function jg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!sf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Wg(e,n,h,o,u)):(e=Wl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!th(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(M,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=ra(h,o),e.ref=n.ref,e.return=n,n.child=e}function Wg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(bo(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,th(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ha(e,n,u)}return Yf(e,n,a,o,u)}function Yg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return qg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(n,h!==null?h.cachePool:null),h!==null?Km(n,h):Ef(),Qm(n);else return o=n.lanes=536870912,qg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Kl(n,h.cachePool),Km(n,h),qa(),n.memoizedState=null):(e!==null&&Kl(n,null),Ef(),qa());return Cn(e,n,u,a),n.child}function zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(e,n,a,o,u){var h=_f();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Kl(n,null),Ef(),Qm(n),e!==null&&_r(e,n,o,!0),n.childLanes=u,null}function hc(e,n){return n=pc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zg(e,n,a){return Is(n,e.child,null,a),e=hc(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function _S(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=hc(n,o),n.lanes=536870912,zo(null,e);if(Tf(n),(e=qe)?(e=o_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=Um(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Va(n);return n.lanes=536870912,null}return hc(n,o)}var h=e.memoizedState;if(h!==null){var M=h.dehydrated;if(Tf(n),u)if(n.flags&256)n.flags&=-257,n=Zg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||_r(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=We,o!==null&&(M=Ll(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,Cs(e,M),Zn(o,e,M),Wf;Ec(),n=Zg(e,n,a)}else e=h.treeContext,qe=xi(M.nextSibling),An=n,Ee=!0,Ga=null,_i=!1,e!==null&&Pm(n,e),n=hc(n,o),n.flags|=4096;return n}return e=ra(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function dc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yf(e,n,a,o,u){return Us(n),a=Rf(e,n,a,o,void 0,u),o=Cf(),e!==null&&!hn?(wf(e,n,u),ha(e,n,u)):(Ee&&o&&lf(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Kg(e,n,a,o,u,h){return Us(n),n.updateQueue=null,a=$m(n,o,a,u),Jm(e),o=Cf(),e!==null&&!hn?(wf(e,n,h),ha(e,n,h)):(Ee&&o&&lf(n),n.flags|=1,Cn(e,n,a,h),n.child)}function Qg(e,n,a,o,u){if(Us(n),n.stateNode===null){var h=dr,M=a.contextType;typeof M=="object"&&M!==null&&(h=Rn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Xf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},xf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Rn(M):dr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(kf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Xf.enqueueReplaceState(h,h.state,null),Oo(n,o,h,u),No(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,V=Bs(a,C);h.props=V;var ot=h.context,gt=a.contextType;M=dr,typeof gt=="object"&&gt!==null&&(M=Rn(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ot!==M)&&Fg(n,h,o,M),Xa=!1;var ct=n.memoizedState;h.state=ct,Oo(n,o,h,u),No(),ot=n.memoizedState,C||ct!==ot||Xa?(typeof yt=="function"&&(kf(n,a,yt,o),ot=n.memoizedState),(V=Xa||Ig(n,a,V,o,ct,ot,M))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=M,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,yf(e,n),M=n.memoizedProps,gt=Bs(a,M),h.props=gt,yt=n.pendingProps,ct=h.context,ot=a.contextType,V=dr,typeof ot=="object"&&ot!==null&&(V=Rn(ot)),C=a.getDerivedStateFromProps,(ot=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==yt||ct!==V)&&Fg(n,h,o,V),Xa=!1,ct=n.memoizedState,h.state=ct,Oo(n,o,h,u),No();var ft=n.memoizedState;M!==yt||ct!==ft||Xa||e!==null&&e.dependencies!==null&&ql(e.dependencies)?(typeof C=="function"&&(kf(n,a,C,o),ft=n.memoizedState),(gt=Xa||Ig(n,a,gt,o,ct,ft,V)||e!==null&&e.dependencies!==null&&ql(e.dependencies))?(ot||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=V,o=gt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,dc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Is(n,e.child,null,u),n.child=Is(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ha(e,n,u),e}function Jg(e,n,a,o){return Ds(),n.flags|=256,Cn(e,n,a,o),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(e){return{baseLanes:e,cachePool:Gm()}}function Kf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function $g(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ya(n):qa(),(e=qe)?(e=o_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=Um(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Va(n);return Uh(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(qa(),u=n.mode,C=pc({mode:"hidden",children:C},u),o=ws(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Zf(a),o.childLanes=Kf(e,M,a),n.memoizedState=qf,zo(null,o)):(Ya(n),Qf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(h)n.flags&256?(Ya(n),n.flags&=-257,n=Jf(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),C=o.fallback,u=n.mode,o=pc({mode:"visible",children:o.children},u),C=ws(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Is(n,e.child,null,a),o=n.child,o.memoizedState=Zf(a),o.childLanes=Kf(e,M,a),n.memoizedState=qf,n=zo(null,o));else if(Ya(n),Uh(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var ot=M.dgst;M=ot,o=Error(s(419)),o.stack="",o.digest=M,Ro({value:o,source:null,stack:null}),n=Jf(e,n,a)}else if(hn||_r(e,n,a,!1),M=(a&e.childLanes)!==0,hn||M){if(M=We,M!==null&&(o=Ll(M,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Cs(e,o),Zn(M,e,o),Wf;Lh(C)||Ec(),n=Jf(e,n,a)}else Lh(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,qe=xi(C.nextSibling),An=n,Ee=!0,Ga=null,_i=!1,e!==null&&Pm(n,e),n=Qf(n,o.children),n.flags|=4096);return n}return u?(qa(),C=o.fallback,u=n.mode,V=e.child,ot=V.sibling,o=ra(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ot!==null?C=ra(ot,C):(C=ws(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,zo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Zf(a):(u=C.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Gm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Kf(e,M,a),n.memoizedState=qf,zo(e.child,o)):(Ya(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Qf(e,n){return n=pc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function pc(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Jf(e,n,a){return Is(n,e.child,null,a),e=Qf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),df(e.return,n,a)}function $f(e,n,a,o,u,h){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function e0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=sn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,_t(sn,M),Cn(e,n,o,a),o=Ee?Ao:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t0(e,a,n);else if(e.tag===19)t0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&nc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),$f(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&nc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}$f(n,!0,a,null,h,o);break;case"together":$f(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(_r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function th(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ql(e)))}function vS(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),ka(n,un,e.memoizedState.cache),Ds();break;case 27:case 5:Zt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$g(e,n,a):(Ya(n),e=ha(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(_r(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Yg(e,n,a,n.pendingProps);case 24:ka(n,un,e.memoizedState.cache)}return ha(e,n,a)}function n0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!th(e,a)&&(n.flags&128)===0)return hn=!1,vS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&Om(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")sf(e)?(o=Bs(e,o),n.tag=1,n=Qg(null,n,e,o,a)):(n.tag=0,n=Yf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Xg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=jg(null,n,e,o,a);break t}}throw n=it(e)||e,Error(s(306,n,""))}}return n;case 0:return Yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),Qg(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,yf(e,n),Oo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ka(n,un,o),o!==h.cache&&pf(n,[un],a,!0),No(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jg(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),Ro(u),n=Jg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=xi(e.firstChild),An=n,Ee=!0,Ga=null,_i=!0,a=Ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),o===u){n=ha(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return dc(e,n),e===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Dc(tt.current).createElement(a),o[on]=n,o[_n]=e,wn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=d_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Ee&&(o=n.stateNode=u_(n.type,n.pendingProps,tt.current),An=n,_i=!0,u=qe,ns(n.type)?(Nh=u,qe=xi(o.firstChild)):qe=u),Cn(e,n,n.pendingProps.children,a),dc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=qe)&&(o=qS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,An=n,qe=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Va(n)),Zt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Ch(u,h)?o=null:M!==null&&Ch(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Rf(e,n,cS,null,null,a),tl._currentValue=u),dc(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=qe)&&(a=ZS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,An=n,qe=null,e=!0):e=!1),e||Va(n)),null;case 13:return $g(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Is(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Xg(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return jg(e,n,n.type,n.pendingProps,a);case 15:return Wg(e,n,n.type,n.pendingProps,a);case 19:return e0(e,n,a);case 31:return _S(e,n,a);case 22:return Yg(e,n,a,n.pendingProps);case 24:return Us(n),o=Rn(un),e===null?(u=_f(),u===null&&(u=We,h=mf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},xf(n),ka(n,un,u)):((e.lanes&a)!==0&&(yf(e,n),Oo(n,null,null,a),No()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,un,o)):(o=h.cache,ka(n,un,o),o!==u.cache&&pf(n,[un],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(e){e.flags|=4}function eh(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(w0())e.flags|=8192;else throw Ps=Jl,vf}else e.flags&=-16777217}function i0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!v_(n))if(w0())e.flags|=8192;else throw Ps=Jl,vf}function mc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,wr|=n)}function Ho(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xS(e,n,a){var o=n.pendingProps;switch(cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(un),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gr(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ff())),Ze(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(da(n),h!==null?(Ze(n),i0(n,h)):(Ze(n),eh(n,u,null,o,a))):h?h!==e.memoizedState?(da(n),Ze(n),i0(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),Ze(n),eh(n,u,e,o,a)),null;case 27:if(Qt(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Rt.current,gr(n)?Im(n):(e=u_(u,o,a),n.stateNode=e,da(n))}return Ze(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(h=Rt.current,gr(n))Im(n);else{var M=Dc(tt.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[on]=n,h[_n]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;t:switch(wn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return Ze(n),eh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,gr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$0(e.nodeValue,a)),e||Va(n,!0)}else e=Dc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=gr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=gr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),mc(n,n.updateQueue),Ze(n),null);case 4:return Pt(),e===null&&Eh(n.stateNode.containerInfo),Ze(n),null;case 10:return ca(n.type),Ze(n),null;case 19:if(j(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ho(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=nc(e),h!==null){for(n.flags|=128,Ho(o,!1),e=h.updateQueue,n.updateQueue=e,mc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ee&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>yc&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304)}else{if(!u)if(e=nc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,mc(n,e),Ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Ze(n),null}else 2*T()-o.renderingStartTime>yc&&a!==536870912&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),Ee&&oa(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return si(n),bf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&mc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(Ns),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yS(e,n){switch(cf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(un),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(sn),null;case 4:return Pt(),null;case 10:return ca(n.type),null;case 22:case 23:return si(n),bf(),e!==null&&j(Ns),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function a0(e,n){switch(cf(n),n.tag){case 3:ca(un),Pt();break;case 26:case 27:case 5:Qt(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:j(sn);break;case 10:ca(n.type);break;case 22:case 23:si(n),bf(),e!==null&&j(Ns);break;case 24:ca(un)}}function Go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){ze(n,n.return,C)}}function Za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var V=a,ot=C;try{ot()}catch(gt){ze(u,V,gt)}}}o=o.next}while(o!==h)}}catch(gt){ze(n,n.return,gt)}}function s0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zm(n,a)}catch(o){ze(e,e.return,o)}}}function r0(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function Vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Xi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function o0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function nh(e,n,a){try{var o=e.stateNode;VS(o,e.type,a,n),o[_n]=n}catch(u){ze(e,e.return,u)}}function l0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function ih(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ah(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ah(e,n,a),e=e.sibling;e!==null;)ah(e,n,a),e=e.sibling}function gc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gc(e,n,a),e=e.sibling;e!==null;)gc(e,n,a),e=e.sibling}function c0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=e,n[_n]=a}catch(h){ze(e,e.return,h)}}var pa=!1,dn=!1,sh=!1,u0=typeof WeakSet=="function"?WeakSet:Set,En=null;function SS(e,n){if(e=e.containerInfo,Ah=Fc,e=Mm(e),Qu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,C=-1,V=-1,ot=0,gt=0,yt=e,ct=null;e:for(;;){for(var ft;yt!==a||u!==0&&yt.nodeType!==3||(C=M+u),yt!==h||o!==0&&yt.nodeType!==3||(V=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)ct=yt,yt=ft;for(;;){if(yt===e)break e;if(ct===a&&++ot===u&&(C=M),ct===h&&++gt===o&&(V=M),(ft=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ft}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rh={focusedElem:e,selectionRange:a},Fc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=Bs(a.type,u);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Dh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function f0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&Go(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){ze(a,a.return,M)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ze(a,a.return,M)}}o&64&&s0(a),o&512&&Vo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zm(e,n)}catch(M){ze(a,a.return,M)}}break;case 27:n===null&&o&4&&c0(a);case 26:case 5:ga(e,a),n===null&&o&4&&o0(a),o&512&&Vo(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&p0(e,a);break;case 13:ga(e,a),o&4&&m0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=DS.bind(null,a),KS(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||dn,u=pa;var h=dn;pa=o,(dn=n)&&!h?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,dn=h}break;case 30:break;default:ga(e,a)}}function h0(e){var n=e.alternate;n!==null&&(e.alternate=null,h0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&go(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,jn=!1;function ma(e,n,a){for(a=a.child;a!==null;)d0(e,n,a),a=a.sibling}function d0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:dn||Xi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Xi(a,n);var o=$e,u=jn;ns(a.type)&&($e=a.stateNode,jn=!1),ma(e,n,a),Qo(a.stateNode),$e=o,jn=u;break;case 5:dn||Xi(a,n);case 6:if(o=$e,u=jn,$e=null,ma(e,n,a),$e=o,jn=u,$e!==null)if(jn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:$e!==null&&(jn?(e=$e,s_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fr(e)):s_($e,a.stateNode));break;case 4:o=$e,u=jn,$e=a.stateNode.containerInfo,jn=!0,ma(e,n,a),$e=o,jn=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),dn||Za(4,a,n),ma(e,n,a);break;case 1:dn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r0(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ma(e,n,a),dn=o;break;default:ma(e,n,a)}}function p0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(a){ze(n,n.return,a)}}}function m0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(a){ze(n,n.return,a)}}function MS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new u0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new u0),n;default:throw Error(s(435,e.tag))}}function _c(e,n){var a=MS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=LS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ns(C.type)){$e=C.stateNode,jn=!1;break t}break;case 5:$e=C.stateNode,jn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,jn=!0;break t}C=C.return}if($e===null)throw Error(s(160));d0(h,M,u),$e=null,jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,e),n=n.sibling}var Ui=null;function g0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(Za(3,e,e.return),Go(3,e),Za(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(dn||a===null||Xi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Xi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Es]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),wn(h,o,a),h[on]=e,Y(h),o=h;break t;case"link":var M=g_("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(h=M[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=g_("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(h=M[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=e,Y(h),o=h}e.stateNode=o}else __(u,e.type,e.stateNode);else e.stateNode=m_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?__(u,e.type,e.stateNode):m_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&nh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(dn||a===null||Xi(a,a.return)),a!==null&&o&4&&nh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(dn||a===null||Xi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(kt){ze(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,nh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(sh=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){ze(e,e.return,kt)}}break;case 3:if(Nc=null,u=Ui,Ui=Lc(n.containerInfo),Wn(n,e),Ui=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(kt){ze(e,e.return,kt)}sh&&(sh=!1,_0(e));break;case 4:o=Ui,Ui=Lc(e.stateNode.containerInfo),Wn(n,e),Yn(e),Ui=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ot=pa,gt=dn;if(pa=ot||u,dn=gt||V,Wn(n,e),dn=gt,pa=ot,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||pa||dn||zs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var yt=V.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(kt){ze(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(kt){ze(V,V.return,kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;u?r_(ft,!0):r_(V.stateNode,!1)}catch(kt){ze(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_c(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_c(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=ih(e);gc(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Hn(M,""),a.flags&=-33);var C=ih(e);gc(e,C,M);break;case 3:case 4:var V=a.stateNode.containerInfo,ot=ih(e);ah(e,ot,V);break;default:throw Error(s(161))}}catch(gt){ze(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(e,n.alternate,n),n=n.sibling}function zs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),zs(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r0(n,n.return,a),zs(n);break;case 27:Qo(n.stateNode);case 26:case 5:Xi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,a),Go(4,h);break;case 1:if(_a(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){ze(o,o.return,ot)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)qm(V[u],C)}catch(ot){ze(o,o.return,ot)}}a&&M&64&&s0(h),Vo(h,h.return);break;case 27:c0(h);case 26:case 5:_a(u,h,a),a&&o===null&&M&4&&o0(h),Vo(h,h.return);break;case 12:_a(u,h,a);break;case 31:_a(u,h,a),a&&M&4&&p0(u,h);break;case 13:_a(u,h,a),a&&M&4&&m0(u,h);break;case 22:h.memoizedState===null&&_a(u,h,a),Vo(h,h.return);break;case 30:break;default:_a(u,h,a)}n=n.sibling}}function rh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Co(a))}function oh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(e,n,a,o),n=n.sibling}function v0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&Go(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,C=h.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){ze(n,n.return,V)}}else Ni(e,n,a,o);break;case 31:Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(e,n,a,o):ko(e,n):h._visibility&2?Ni(e,n,a,o):(h._visibility|=2,Ar(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&rh(M,n);break;case 24:Ni(e,n,a,o),u&2048&&oh(n.alternate,n);break;default:Ni(e,n,a,o)}}function Ar(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,M=n,C=a,V=o,ot=M.flags;switch(M.tag){case 0:case 11:case 15:Ar(h,M,C,V,u),Go(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?Ar(h,M,C,V,u):ko(h,M):(gt._visibility|=2,Ar(h,M,C,V,u)),u&&ot&2048&&rh(M.alternate,M);break;case 24:Ar(h,M,C,V,u),u&&ot&2048&&oh(M.alternate,M);break;default:Ar(h,M,C,V,u)}n=n.sibling}}function ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ko(a,o),u&2048&&rh(o.alternate,o);break;case 24:ko(a,o),u&2048&&oh(o.alternate,o);break;default:ko(a,o)}n=n.sibling}}var Xo=8192;function Rr(e,n,a){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)x0(e,n,a),e=e.sibling}function x0(e,n,a){switch(e.tag){case 26:Rr(e,n,a),e.flags&Xo&&e.memoizedState!==null&&lM(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:Rr(e,n,a);break;case 3:case 4:var o=Ui;Ui=Lc(e.stateNode.containerInfo),Rr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Xo,Xo=16777216,Rr(e,n,a),Xo=o):Rr(e,n,a));break;default:Rr(e,n,a)}}function y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,M0(o,e)}y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&Za(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,vc(e)):jo(e);break;default:jo(e)}}function vc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,M0(o,e)}y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),vc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,vc(n));break;default:vc(n)}e=e.sibling}}function M0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,h=o.return;if(h0(o),o===a){En=null;break t}if(u!==null){u.return=h,En=u;break t}En=h}}}var ES={getCacheForType:function(e){var n=Rn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(un).controller.signal}},bS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,xe=null,Se=0,Be=0,ri=null,Ka=!1,Cr=!1,lh=!1,va=0,nn=0,Qa=0,Hs=0,ch=0,oi=0,wr=0,Wo=null,qn=null,uh=!1,xc=0,E0=0,yc=1/0,Sc=null,Ja=null,xn=0,$a=null,Dr=null,xa=0,fh=0,hh=null,b0=null,Yo=0,dh=null;function li(){return(Oe&2)!==0&&Se!==0?Se&-Se:P.T!==null?xh():Gi()}function T0(){if(oi===0)if((Se&536870912)===0||Ee){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Zn(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Lr(e,0),ts(e,Se,oi,!1)),Fn(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(Hs|=a),nn===4&&ts(e,Se,oi,!1)),ji(e))}function A0(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?RS(e,n):mh(e,n,!0),h=o;do{if(u===0){Cr&&!o&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!TS(a)){u=mh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=Wo;var V=C.current.memoizedState.isDehydrated;if(V&&(Lr(C,M).flags|=256),M=mh(C,M,!1),M!==2){if(lh&&!V){C.errorRecoveryDisabledLanes|=h,Hs|=h,u=4;break t}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){Lr(e,0),ts(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ts(o,n,oi,!Ka);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=xc+300-T(),10<u)){if(ts(o,n,oi,!Ka),dt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=i_(R0.bind(null,o,a,qn,Sc,uh,n,oi,Hs,wr,Ka,h,"Throttled",-0,0),u);break t}R0(o,a,qn,Sc,uh,n,oi,Hs,wr,Ka,h,null,-0,0)}}break}while(!0);ji(e)}function R0(e,n,a,o,u,h,M,C,V,ot,gt,yt,ct,ft){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},x0(n,h,yt);var kt=(h&62914560)===h?xc-T():(h&4194048)===h?E0-T():0;if(kt=cM(yt,kt),kt!==null){xa=h,e.cancelPendingCommit=kt(P0.bind(null,e,n,h,a,o,u,M,C,V,gt,yt,null,ct,ft)),ts(e,h,M,!ot);return}}P0(e,n,h,a,o,u,M,C,V)}function TS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ni(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,o){n&=~ch,n&=~Hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-It(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&mo(e,a,n)}function Mc(){return(Oe&6)===0?(qo(0),!1):!0}function ph(){if(xe!==null){if(Be===0)var e=xe.return;else e=xe,la=Ls=null,Df(e),Sr=null,Do=0,e=xe;for(;e!==null;)a0(e.alternate,e),e=e.return;xe=null}}function Lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,ph(),We=e,xe=a=ra(e.current,null),Se=n,Be=0,ri=null,Ka=!1,Cr=Gt(e,n),lh=!1,wr=oi=ch=Hs=Qa=nn=0,qn=Wo=null,uh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),h=1<<u;n|=e[u],o&=~h}return va=n,kl(),a}function C0(e,n){fe=null,P.H=Bo,n===yr||n===Ql?(n=Xm(),Be=3):n===vf?(n=Xm(),Be=4):Be=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,xe===null&&(nn=1,fc(e,pi(n,e.current)))}function w0(){var e=ai.current;return e===null?!0:(Se&4194048)===Se?vi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===vi:!1}function D0(){var e=P.H;return P.H=Bo,e===null?Bo:e}function L0(){var e=P.A;return P.A=ES,e}function Ec(){nn=4,Ka||(Se&4194048)!==Se&&ai.current!==null||(Cr=!0),(Qa&134217727)===0&&(Hs&134217727)===0||We===null||ts(We,Se,oi,!1)}function mh(e,n,a){var o=Oe;Oe|=2;var u=D0(),h=L0();(We!==e||Se!==n)&&(Sc=null,Lr(e,n)),n=!1;var M=nn;t:do try{if(Be!==0&&xe!==null){var C=xe,V=ri;switch(Be){case 8:ph(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ot=Be;if(Be=0,ri=null,Ur(e,C,V,ot),a&&Cr){M=0;break t}break;default:ot=Be,Be=0,ri=null,Ur(e,C,V,ot)}}AS(),M=nn;break}catch(gt){C0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,la=Ls=null,Oe=o,P.H=u,P.A=h,xe===null&&(We=null,Se=0,kl()),M}function AS(){for(;xe!==null;)U0(xe)}function RS(e,n){var a=Oe;Oe|=2;var o=D0(),u=L0();We!==e||Se!==n?(Sc=null,yc=T()+500,Lr(e,n)):Cr=Gt(e,n);t:do try{if(Be!==0&&xe!==null){n=xe;var h=ri;e:switch(Be){case 1:Be=0,ri=null,Ur(e,n,h,1);break;case 2:case 9:if(Vm(h)){Be=0,ri=null,N0(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),ji(e)},h.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Vm(h)?(Be=0,ri=null,N0(n)):(Be=0,ri=null,Ur(e,n,h,7));break;case 5:var M=null;switch(xe.tag){case 26:M=xe.memoizedState;case 5:case 27:var C=xe;if(M?v_(M):C.stateNode.complete){Be=0,ri=null;var V=C.sibling;if(V!==null)xe=V;else{var ot=C.return;ot!==null?(xe=ot,bc(ot)):xe=null}break e}}Be=0,ri=null,Ur(e,n,h,5);break;case 6:Be=0,ri=null,Ur(e,n,h,6);break;case 8:ph(),nn=6;break t;default:throw Error(s(462))}}CS();break}catch(gt){C0(e,gt)}while(!0);return la=Ls=null,P.H=o,P.A=u,Oe=a,xe!==null?0:(We=null,Se=0,kl(),nn)}function CS(){for(;xe!==null&&!Yt();)U0(xe)}function U0(e){var n=n0(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?bc(e):xe=n}function N0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Kg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Kg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Df(n);default:a0(a,n),n=xe=Lm(n,va),n=n0(a,n,va)}e.memoizedProps=e.pendingProps,n===null?bc(e):xe=n}function Ur(e,n,a,o){la=Ls=null,Df(n),Sr=null,Do=0;var u=n.return;try{if(gS(e,u,n,a,Se)){nn=1,fc(e,pi(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;nn=1,fc(e,pi(a,e.current)),xe=null;return}n.flags&32768?(Ee||o===1?e=!0:Cr||(Se&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,e)):bc(n)}function bc(e){var n=e;do{if((n.flags&32768)!==0){O0(n,Ka);return}e=n.return;var a=xS(n.alternate,n,va);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function O0(e,n){do{var a=yS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function P0(e,n,a,o,u,h,M,C,V){e.cancelPendingCommit=null;do Tc();while(xn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=nf,Ri(e,a,h,M,C,V),e===We&&(xe=We=null,Se=0),Dr=n,$a=e,xa=a,fh=h,hh=u,b0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,US(pt,function(){return H0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,M=Oe,Oe|=4;try{SS(e,n,a)}finally{Oe=M,G.p=u,P.T=o}}xn=1,I0(),F0(),B0()}}function I0(){if(xn===1){xn=0;var e=$a,n=Dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Oe;Oe|=4;try{g0(n,e);var h=Rh,M=Mm(e.containerInfo),C=h.focusedElem,V=h.selectionRange;if(M!==C&&C&&C.ownerDocument&&Sm(C.ownerDocument.documentElement,C)){if(V!==null&&Qu(C)){var ot=V.start,gt=V.end;if(gt===void 0&&(gt=ot),"selectionStart"in C)C.selectionStart=ot,C.selectionEnd=Math.min(gt,C.value.length);else{var yt=C.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),kt=C.textContent.length,te=Math.min(V.start,kt),ke=V.end===void 0?te:Math.min(V.end,kt);!ft.extend&&te>ke&&(M=ke,ke=te,te=M);var $=ym(C,te),W=ym(C,ke);if($&&W&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var rt=yt.createRange();rt.setStart($.node,$.offset),ft.removeAllRanges(),te>ke?(ft.addRange(rt),ft.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),ft.addRange(rt))}}}}for(yt=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var xt=yt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Fc=!!Ah,Rh=Ah=null}finally{Oe=u,G.p=o,P.T=a}}e.current=n,xn=2}}function F0(){if(xn===2){xn=0;var e=$a,n=Dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Oe;Oe|=4;try{f0(e,n.alternate,n)}finally{Oe=u,G.p=o,P.T=a}}xn=3}}function B0(){if(xn===4||xn===3){xn=0,B();var e=$a,n=Dr,a=xa,o=b0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Dr=$a=null,z0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ja=null),ar(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var C=o[M];h(C.value,{componentStack:C.stack})}}finally{P.T=n,G.p=u}}(xa&3)!==0&&Tc(),ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===dh?Yo++:(Yo=0,dh=e):Yo=0,qo(0)}}function z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Co(n)))}function Tc(){return I0(),F0(),B0(),H0()}function H0(){if(xn!==5)return!1;var e=$a,n=fh;fh=0;var a=ar(xa),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=hh,hh=null;var h=$a,M=xa;if(xn=0,Dr=$a=null,xa=0,(Oe&6)!==0)throw Error(s(331));var C=Oe;if(Oe|=4,S0(h.current),v0(h,h.current,M,a),Oe=C,qo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{G.p=u,P.T=o,z0(e,n)}}function G0(e,n,a){n=pi(a,n),n=jf(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(Fn(e,2),ji(e))}function ze(e,n,a){if(e.tag===3)G0(e,e,a);else for(;n!==null;){if(n.tag===3){G0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ja===null||!Ja.has(o))){e=pi(a,e),a=Vg(2),o=Wa(n,a,2),o!==null&&(kg(a,o,n,e),Fn(o,2),ji(o));break}}n=n.return}}function gh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new bS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(lh=!0,u.add(a),e=wS.bind(null,e,n,a),n.then(e,e))}function wS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Se&a)===a&&(nn===4||nn===3&&(Se&62914560)===Se&&300>T()-xc?(Oe&2)===0&&Lr(e,0):ch|=a,wr===Se&&(wr=0)),ji(e)}function V0(e,n){n===0&&(n=Fe()),e=Cs(e,n),e!==null&&(Fn(e,n),ji(e))}function DS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),V0(e,a)}function LS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),V0(e,a)}function US(e,n){return be(e,n)}var Ac=null,Nr=null,_h=!1,Rc=!1,vh=!1,es=0;function ji(e){e!==Nr&&e.next===null&&(Nr===null?Ac=Nr=e:Nr=Nr.next=e),Rc=!0,_h||(_h=!0,OS())}function qo(e,n){if(!vh&&Rc){vh=!0;do for(var a=!1,o=Ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-It(42|e)+1)-1,h&=u&~(M&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,W0(o,h))}else h=Se,h=dt(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Gt(o,h)||(a=!0,W0(o,h));o=o.next}while(a);vh=!1}}function NS(){k0()}function k0(){Rc=_h=!1;var e=0;es!==0&&XS()&&(e=es);for(var n=T(),a=null,o=Ac;o!==null;){var u=o.next,h=X0(o,n);h===0?(o.next=null,a===null?Ac=u:a.next=u,u===null&&(Nr=a)):(a=o,(e!==0||(h&3)!==0)&&(Rc=!0)),o=u}xn!==0&&xn!==5||qo(e),es!==0&&(es=0)}function X0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-It(h),C=1<<M,V=u[M];V===-1?((C&a)===0||(C&o)!==0)&&(u[M]=ae(C,n)):V<=n&&(e.expiredLanes|=C),h&=~C}if(n=We,a=Se,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Pe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Pe(o),ar(a)){case 2:case 8:a=St;break;case 32:a=pt;break;case 268435456:a=Dt;break;default:a=pt}return o=j0.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Pe(o),e.callbackPriority=2,e.callbackNode=null,2}function j0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Tc()&&e.callbackNode!==a)return null;var o=Se;return o=dt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(A0(e,o,n),X0(e,T()),e.callbackNode!=null&&e.callbackNode===a?j0.bind(null,e):null)}function W0(e,n){if(Tc())return null;A0(e,n,!0)}function OS(){WS(function(){(Oe&6)!==0?be(vt,NS):k0()})}function xh(){if(es===0){var e=vr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),es=e}return es}function Y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function q0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function PS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Y0((u[_n]||null).action),M=o.submitter;M&&(n=(n=M[_n]||null)?Y0(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var C=new zl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var V=M?q0(u,M):new FormData(u);zf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=M?q0(u,M):new FormData(u),zf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var yh=0;yh<ef.length;yh++){var Sh=ef[yh],IS=Sh.toLowerCase(),FS=Sh[0].toUpperCase()+Sh.slice(1);Li(IS,"on"+FS)}Li(Tm,"onAnimationEnd"),Li(Am,"onAnimationIteration"),Li(Rm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li($y,"onTransitionRun"),Li(tS,"onTransitionStart"),Li(eS,"onTransitionCancel"),Li(Cm,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function Z0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],V=C.instance,ot=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){Vl(gt)}u.currentTarget=null,h=V}else for(M=0;M<o.length;M++){if(C=o[M],V=C.instance,ot=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){Vl(gt)}u.currentTarget=null,h=V}}}}function ye(e,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var o=e+"__bubble";a.has(o)||(K0(n,e,2,!1),a.add(o))}function Mh(e,n,a){var o=0;n&&(o|=4),K0(a,e,o,n)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Eh(e){if(!e[Cc]){e[Cc]=!0,ut.forEach(function(a){a!=="selectionchange"&&(BS.has(a)||Mh(a,!1,e),Mh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cc]||(n[Cc]=!0,Mh("selectionchange",!1,n))}}function K0(e,n,a,o){switch(T_(n)){case 2:var u=hM;break;case 8:u=dM;break;default:u=Bh}a=u.bind(null,n,a,e),u=void 0,!Vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function bh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=Fa(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=h=M;continue t}C=C.parentNode}}o=o.return}em(function(){var ot=h,gt=Hu(a),yt=[];t:{var ct=wm.get(e);if(ct!==void 0){var ft=zl,kt=e;switch(e){case"keypress":if(Fl(a)===0)break t;case"keydown":case"keyup":ft=Ly;break;case"focusin":kt="focus",ft=Wu;break;case"focusout":kt="blur",ft=Wu;break;case"beforeblur":case"afterblur":ft=Wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Oy;break;case Tm:case Am:case Rm:ft=My;break;case Cm:ft=Iy;break;case"scroll":case"scrollend":ft=_y;break;case"wheel":ft=By;break;case"copy":case"cut":case"paste":ft=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=rm;break;case"toggle":case"beforetoggle":ft=Hy}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),$=te?ct!==null?ct+"Capture":null:ct;te=[];for(var W=ot,rt;W!==null;){var xt=W;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||$===null||(xt=_o(W,$),xt!=null&&te.push(Ko(W,xt,rt))),ke)break;W=W.return}0<te.length&&(ct=new ft(ct,kt,null,a,gt),yt.push({event:ct,listeners:te}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ct&&a!==zu&&(kt=a.relatedTarget||a.fromElement)&&(Fa(kt)||kt[na]))break t;if((ft||ct)&&(ct=gt.window===gt?gt:(ct=gt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(kt=a.relatedTarget||a.toElement,ft=ot,kt=kt?Fa(kt):null,kt!==null&&(ke=c(kt),te=kt.tag,kt!==ke||te!==5&&te!==27&&te!==6)&&(kt=null)):(ft=null,kt=ot),ft!==kt)){if(te=am,xt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=rm,xt="onPointerLeave",$="onPointerEnter",W="pointer"),ke=ft==null?ct:bs(ft),rt=kt==null?ct:bs(kt),ct=new te(xt,W+"leave",ft,a,gt),ct.target=ke,ct.relatedTarget=rt,xt=null,Fa(gt)===ot&&(te=new te($,W+"enter",kt,a,gt),te.target=rt,te.relatedTarget=ke,xt=te),ke=xt,ft&&kt)e:{for(te=zS,$=ft,W=kt,rt=0,xt=$;xt;xt=te(xt))rt++;xt=0;for(var $t=W;$t;$t=te($t))xt++;for(;0<rt-xt;)$=te($),rt--;for(;0<xt-rt;)W=te(W),xt--;for(;rt--;){if($===W||W!==null&&$===W.alternate){te=$;break e}$=te($),W=te(W)}te=null}else te=null;ft!==null&&Q0(yt,ct,ft,te,!1),kt!==null&&ke!==null&&Q0(yt,ke,kt,te,!0)}}t:{if(ct=ot?bs(ot):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var Le=pm;else if(hm(ct))if(mm)Le=Ky;else{Le=qy;var qt=Yy}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&rr(ot.elementType)&&(Le=pm):Le=Zy;if(Le&&(Le=Le(e,ot))){dm(yt,Le,a,gt);break t}qt&&qt(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&wi(ct,"number",ct.value)}switch(qt=ot?bs(ot):window,e){case"focusin":(hm(qt)||qt.contentEditable==="true")&&(ur=qt,Ju=ot,To=null);break;case"focusout":To=Ju=ur=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Em(yt,a,gt);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Em(yt,a,gt)}var pe;if(qu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else cr?um(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(om&&a.locale!=="ko"&&(cr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&cr&&(pe=nm()):(za=gt,ku="value"in za?za.value:za.textContent,cr=!0)),qt=wc(ot,Me),0<qt.length&&(Me=new sm(Me,e,null,a,gt),yt.push({event:Me,listeners:qt}),pe?Me.data=pe:(pe=fm(a),pe!==null&&(Me.data=pe)))),(pe=Vy?ky(e,a):Xy(e,a))&&(Me=wc(ot,"onBeforeInput"),0<Me.length&&(qt=new sm("onBeforeInput","beforeinput",null,a,gt),yt.push({event:qt,listeners:Me}),qt.data=pe)),PS(yt,e,ot,a,gt)}Z0(yt,n)})}function Ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function wc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=_o(e,a),u!=null&&o.unshift(Ko(e,u,h)),u=_o(e,n),u!=null&&o.push(Ko(e,u,h))),e.tag===3)return o;e=e.return}return[]}function zS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q0(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var C=a,V=C.alternate,ot=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||ot===null||(V=ot,u?(ot=_o(a,h),ot!=null&&M.unshift(Ko(a,ot,V))):u||(ot=_o(a,h),ot!=null&&M.push(Ko(a,ot,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function J0(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function $0(e,n){return n=J0(n),J0(e)===n}function Ve(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":ia(e,o,h);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Pl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Pl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=my.get(a)||a,ie(e,a,o))}}function Th(e,n,a,o,u,h){switch(a){case"style":ia(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,h,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var C=h=M=u=null,V=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":M=gt;break;case"checked":V=gt;break;case"defaultChecked":ot=gt;break;case"value":h=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,gt,a,null)}}ti(e,h,C,V,ot,M,u,!1);return;case"select":ye("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:Ve(e,n,u,C,a,null)}n=h,a=M,e.multiple=!!o,n!=null?ei(e,!!o,n,!1):a!=null&&ei(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Ve(e,n,M,C,a,null)}ln(e,o,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,V,o,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Zo.length;o++)ye(Zo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,ot,o,a,null)}return;default:if(rr(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Th(e,n,gt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ve(e,n,C,o,a,null))}function VS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,C=null,V=null,ot=null,gt=null;for(ft in a){var yt=a[ft];if(a.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=yt;default:o.hasOwnProperty(ft)||Ve(e,n,ft,null,o,yt)}}for(var ct in o){var ft=o[ct];if(yt=a[ct],o.hasOwnProperty(ct)&&(ft!=null||yt!=null))switch(ct){case"type":h=ft;break;case"name":u=ft;break;case"checked":ot=ft;break;case"defaultChecked":gt=ft;break;case"value":M=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==yt&&Ve(e,n,ct,ft,o,yt)}}zn(e,M,C,V,ot,gt,h,u);return;case"select":ft=M=C=ct=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ft=V;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ct=h;break;case"defaultValue":C=h;break;case"multiple":M=h;default:h!==V&&Ve(e,n,u,h,o,V)}n=C,a=M,o=ft,ct!=null?ei(e,!!a,ct,!1):!!o!=!!a&&(n!=null?ei(e,!!a,n,!0):ei(e,!!a,a?[]:"",!1));return;case"textarea":ft=ct=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ve(e,n,C,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ct=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ve(e,n,M,u,o,h)}Ie(e,ct,ft);return;case"option":for(var kt in a)ct=a[kt],a.hasOwnProperty(kt)&&ct!=null&&!o.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Ve(e,n,kt,null,o,ct));for(V in o)ct=o[V],ft=a[V],o.hasOwnProperty(V)&&ct!==ft&&(ct!=null||ft!=null)&&(V==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ve(e,n,V,ct,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ct=a[te],a.hasOwnProperty(te)&&ct!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,ct);for(ot in o)if(ct=o[ot],ft=a[ot],o.hasOwnProperty(ot)&&ct!==ft&&(ct!=null||ft!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ve(e,n,ot,ct,o,ft)}return;default:if(rr(n)){for(var ke in a)ct=a[ke],a.hasOwnProperty(ke)&&ct!==void 0&&!o.hasOwnProperty(ke)&&Th(e,n,ke,void 0,o,ct);for(gt in o)ct=o[gt],ft=a[gt],!o.hasOwnProperty(gt)||ct===ft||ct===void 0&&ft===void 0||Th(e,n,gt,ct,o,ft);return}}for(var $ in a)ct=a[$],a.hasOwnProperty($)&&ct!=null&&!o.hasOwnProperty($)&&Ve(e,n,$,null,o,ct);for(yt in o)ct=o[yt],ft=a[yt],!o.hasOwnProperty(yt)||ct===ft||ct==null&&ft==null||Ve(e,n,yt,ct,o,ft)}function t_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,C=u.duration;if(h&&C&&t_(M)){for(M=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ot=V.startTime;if(ot>C)break;var gt=V.transferSize,yt=V.initiatorType;gt&&t_(yt)&&(V=V.responseEnd,M+=gt*(V<C?1:(C-ot)/(V-ot)))}if(--o,n+=8*(h+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ah=null,Rh=null;function Dc(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ch(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wh=null;function XS(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(YS)}:i_;function YS(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function s_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Fr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Qo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qo(a);for(var h=a.firstChild;h;){var M=h.nextSibling,C=h.nodeName;h[Es]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&Qo(e.ownerDocument.body);a=u}while(a);Fr(n)}function r_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Dh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Dh(a),go(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function ZS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function o_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Lh(e){return e.data==="$?"||e.data==="$~"}function Uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Nh=null;function l_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function c_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function u_(e,n,a){switch(n=Dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Qo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);go(e)}var yi=new Map,f_=new Set;function Lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=G.d;G.d={f:QS,r:JS,D:$S,C:tM,L:eM,m:nM,X:aM,S:iM,M:sM};function QS(){var e=ya.f(),n=Mc();return e||n}function JS(e){var n=Ba(e);n!==null&&n.tag===5&&n.type==="form"?Cg(n):ya.r(e)}var Or=typeof document>"u"?null:document;function h_(e,n,a){var o=Or;if(o&&typeof n=="string"&&n){var u=re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),f_.has(u)||(f_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),Y(n),o.head.appendChild(n)))}}function $S(e){ya.D(e),h_("dns-prefetch",e,null)}function tM(e,n){ya.C(e,n),h_("preconnect",e,n)}function eM(e,n,a){ya.L(e,n,a);var o=Or;if(o&&e&&n){var u='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+re(a.imageSizes)+'"]')):u+='[href="'+re(e)+'"]';var h=u;switch(n){case"style":h=Pr(e);break;case"script":h=Ir(e)}yi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Jo(h))||n==="script"&&o.querySelector($o(h))||(n=o.createElement("link"),wn(n,"link",e),Y(n),o.head.appendChild(n)))}}function nM(e,n){ya.m(e,n);var a=Or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ir(e)}if(!yi.has(h)&&(e=_({rel:"modulepreload",href:e},n),yi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(h)))return}o=a.createElement("link"),wn(o,"link",e),Y(o),a.head.appendChild(o)}}}function iM(e,n,a){ya.S(e,n,a);var o=Or;if(o&&e){var u=w(o).hoistableStyles,h=Pr(e);n=n||"default";var M=u.get(h);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Jo(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(h))&&Oh(e,a);var V=M=o.createElement("link");Y(V),wn(V,"link",e),V._p=new Promise(function(ot,gt){V.onload=ot,V.onerror=gt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Uc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(h,M)}}}function aM(e,n){ya.X(e,n);var a=Or;if(a&&e){var o=w(a).hoistableScripts,u=Ir(e),h=o.get(u);h||(h=a.querySelector($o(u)),h||(e=_({src:e,async:!0},n),(n=yi.get(u))&&Ph(e,n),h=a.createElement("script"),Y(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function sM(e,n){ya.M(e,n);var a=Or;if(a&&e){var o=w(a).hoistableScripts,u=Ir(e),h=o.get(u);h||(h=a.querySelector($o(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=yi.get(u))&&Ph(e,n),h=a.createElement("script"),Y(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function d_(e,n,a,o){var u=(u=tt.current)?Lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Pr(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pr(a.href);var h=w(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Jo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),h||rM(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ir(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pr(e){return'href="'+re(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function p_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function rM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),Y(n),e.head.appendChild(n))}function Ir(e){return'[src="'+re(e)+'"]'}function $o(e){return"script[async]"+e}function m_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),wn(o,"style",u),Uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Pr(a.href);var h=e.querySelector(Jo(u));if(h)return n.state.loading|=4,n.instance=h,Y(h),h;o=p_(a),(u=yi.get(u))&&Oh(o,u),h=(e.ownerDocument||e).createElement("link"),Y(h);var M=h;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),wn(h,"link",o),n.state.loading|=4,Uc(h,a.precedence,e),n.instance=h;case"script":return h=Ir(a.src),(u=e.querySelector($o(h)))?(n.instance=u,Y(u),u):(o=a,(u=yi.get(h))&&(o=_({},a),Ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Uc(o,a.precedence,e));return n.instance}function Uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Nc=null;function g_(e,n,a){if(Nc===null){var o=new Map,u=Nc=new Map;u.set(a,o)}else u=Nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Es]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var C=o.get(M);C?C.push(h):o.set(M,[h])}}return o}function __(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function oM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Pr(o.href),h=n.querySelector(Jo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Y(h);return}h=n.ownerDocument||n,o=p_(o),(u=yi.get(u))&&Oh(o,u),h=h.createElement("link"),Y(h);var M=h;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),wn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ih=0;function cM(e,n){return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Ih===0&&(Ih=62500*kS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Ih?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pc=null;function Ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pc=new Map,n.forEach(uM,e),Pc=null,Oc.call(e))}function uM(e,n){if(!(n.state.loading&4)){var a=Pc.get(e);if(a)var o=a.get(null);else{a=new Map,Pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=Oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:D,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function fM(e,n,a,o,u,h,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function x_(e,n,a,o,u,h,M,C,V,ot,gt,yt){return e=new fM(e,n,a,M,V,ot,gt,yt,C),n=1,h===!0&&(n|=24),h=ii(3,null,null,n),e.current=h,h.stateNode=e,n=mf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},xf(h),e}function y_(e){return e?(e=dr,e):dr}function S_(e,n,a,o,u,h){u=y_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Wa(e,o,n),a!==null&&(Zn(a,e,n),Uo(a,e,n))}function M_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Fh(e,n){M_(e,n),(e=e.alternate)&&M_(e,n)}function E_(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&Zn(n,e,67108864),Fh(e,67108864)}}function b_(e){if(e.tag===13||e.tag===31){var n=li();n=ir(n);var a=Cs(e,n);a!==null&&Zn(a,e,n),Fh(e,n)}}var Fc=!0;function hM(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=2,Bh(e,n,a,o)}finally{G.p=h,P.T=u}}function dM(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=8,Bh(e,n,a,o)}finally{G.p=h,P.T=u}}function Bh(e,n,a,o){if(Fc){var u=zh(o);if(u===null)bh(e,n,o,Bc,a),A_(e,o);else if(mM(u,e,n,a,o))o.stopPropagation();else if(A_(e,o),n&4&&-1<pM.indexOf(e)){for(;u!==null;){var h=Ba(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Tt(h.pendingLanes);if(M!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-It(M);C.entanglements[1]|=V,M&=~V}ji(h),(Oe&6)===0&&(yc=T()+500,qo(0))}}break;case 31:case 13:C=Cs(h,2),C!==null&&Zn(C,h,2),Mc(),Fh(h,2)}if(h=zh(o),h===null&&bh(e,n,o,Bc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else bh(e,n,o,null,a)}}function zh(e){return e=Hu(e),Hh(e)}var Bc=null;function Hh(e){if(Bc=null,e=Fa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Bc=e,null}function T_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case vt:return 2;case St:return 8;case pt:case jt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Gh=!1,is=null,as=null,ss=null,el=new Map,nl=new Map,rs=[],pM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ba(n),n!==null&&E_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function mM(e,n,a,o,u){switch(n){case"focusin":return is=il(is,e,n,a,o,u),!0;case"dragenter":return as=il(as,e,n,a,o,u),!0;case"mouseover":return ss=il(ss,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return el.set(h,il(el.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,nl.set(h,il(nl.get(h)||null,e,n,a,o,u)),!0}return!1}function R_(e){var n=Fa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,sr(e.priority,function(){b_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,sr(e.priority,function(){b_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);zu=o,a.target.dispatchEvent(o),zu=null}else return n=Ba(a),n!==null&&E_(n),e.blockedOn=a,!1;n.shift()}return!0}function C_(e,n,a){zc(e)&&a.delete(n)}function gM(){Gh=!1,is!==null&&zc(is)&&(is=null),as!==null&&zc(as)&&(as=null),ss!==null&&zc(ss)&&(ss=null),el.forEach(C_),nl.forEach(C_)}function Hc(e,n){e.blockedOn===n&&(e.blockedOn=null,Gh||(Gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gM)))}var Gc=null;function w_(e){Gc!==e&&(Gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Hh(o||a)===null)continue;break}var h=Ba(a);h!==null&&(e.splice(n,3),n-=3,zf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Fr(e){function n(V){return Hc(V,e)}is!==null&&Hc(is,e),as!==null&&Hc(as,e),ss!==null&&Hc(ss,e),el.forEach(n),nl.forEach(n);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[_n]||null;if(typeof h=="function")M||w_(a);else if(M){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[_n]||null)C=M.formAction;else if(Hh(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),w_(a)}}}function D_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vh(e){this._internalRoot=e}Vc.prototype.render=Vh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();S_(a,o,e,n,null,null)},Vc.prototype.unmount=Vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S_(e.current,2,null,e,null,null),Mc(),n[na]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&R_(e)}};var L_=t.version;if(L_!=="19.2.4")throw Error(s(527,L_,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var _M={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{At=kc.inject(_M),bt=kc}catch{}}return sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Bg,h=zg,M=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=x_(e,1,!1,null,null,a,o,null,u,h,M,D_),e[na]=n.current,Eh(e),new Vh(n)},sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Bg,M=zg,C=Hg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=x_(e,1,!0,n,a??null,o,u,V,h,M,C,D_),n.context=y_(null),a=n.current,o=li(),o=ir(o),u=ja(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,Fn(n,a),ji(n),e[na]=n.current,Eh(e),new Vc(n)},sl.version="19.2.4",sl}var G_;function CM(){if(G_)return jh.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jh.exports=RM(),jh.exports}var wM=CM();const DM=dx(wM);var V_="popstate";function LM(r={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=Js(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Nd("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,d=m.indexOf("#");p=d===-1?m:m.slice(0,d)}return p+"#"+(typeof c=="string"?c:yl(c))}function s(l,c){Hi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return NM(t,i,s,r)}function tn(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Hi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function UM(){return Math.random().toString(36).substring(2,10)}function k_(r,t){return{usr:r.state,key:r.key,idx:t}}function Nd(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Js(t):t,state:i,key:t&&t.key||s||UM()}}function yl({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Js(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function NM(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){p="POP";let S=g(),x=S==null?null:S-d;d=S,m&&m({action:p,location:A.location,delta:x})}function v(S,x){p="PUSH";let R=Nd(A.location,S,x);i&&i(R,S),d=g()+1;let D=k_(R,d),U=A.createHref(R);try{f.pushState(D,"",U)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(U)}c&&m&&m({action:p,location:A.location,delta:1})}function y(S,x){p="REPLACE";let R=Nd(A.location,S,x);i&&i(R,S),d=g();let D=k_(R,d),U=A.createHref(R);f.replaceState(D,"",U),c&&m&&m({action:p,location:A.location,delta:0})}function E(S){return OM(S)}let A={get action(){return p},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(V_,_),m=S,()=>{l.removeEventListener(V_,_),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(S){return f.go(S)}};return A}function OM(r,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:yl(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function px(r,t,i="/"){return PM(r,t,i,!1)}function PM(r,t,i,s){let l=typeof t=="string"?Js(t):t,c=Na(l.pathname||"/",i);if(c==null)return null;let f=mx(r);IM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let d=YM(c);p=jM(f[m],d,s)}return p}function mx(r,t=[],i=[],s="",l=!1){let c=(f,p,m=l,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;tn(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=Da([s,g.relativePath]),v=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),mx(f.children,t,v,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:kM(_,f.index),routesMeta:v})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of gx(f.path))c(f,p,!0,m)}),t}function gx(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=gx(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function IM(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:XM(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var FM=/^:[\w-]+$/,BM=3,zM=2,HM=1,GM=10,VM=-2,X_=r=>r==="*";function kM(r,t){let i=r.split("/"),s=i.length;return i.some(X_)&&(s+=VM),t&&(s+=zM),i.filter(l=>!X_(l)).reduce((l,c)=>l+(FM.test(c)?BM:c===""?HM:GM),s)}function XM(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function jM(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],d=p===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=Tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),v=m.route;if(!_&&d&&i&&!s[s.length-1].route.index&&(_=Tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Da([c,_.pathname]),pathnameBase:QM(Da([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=Da([c,_.pathnameBase]))}return f}function Tu(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=WM(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((d,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=p[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=p[v];return _&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:r}}function WM(r,t=!1,i=!0){Hi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function YM(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Na(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var qM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ZM(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Js(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=j_(i.substring(1),"/"):c=j_(i,t)):c=t,{pathname:c,search:JM(s),hash:$M(l)}}function j_(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Zh(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function KM(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function _x(r){let t=KM(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function vx(r,t,i,s=!1){let l;typeof r=="string"?l=Js(r):(l={...r},tn(!l.pathname||!l.pathname.includes("?"),Zh("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Zh("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Zh("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=t.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?t[_]:"/"}let m=ZM(l,p),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var Da=r=>r.join("/").replace(/\/\/+/g,"/"),QM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),JM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,$M=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,tE=class{constructor(r,t,i,s=!1){this.status=r,this.statusText=t||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function eE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function nE(r){return r.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var xx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function yx(r,t){let i=r;if(typeof i!="string"||!qM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(xx)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Na(f.pathname,t);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Hi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sx=["POST","PUT","PATCH","DELETE"];new Set(Sx);var iE=["GET",...Sx];new Set(iE);var co=nt.createContext(null);co.displayName="DataRouter";var Lu=nt.createContext(null);Lu.displayName="DataRouterState";var aE=nt.createContext(!1),Mx=nt.createContext({isTransitioning:!1});Mx.displayName="ViewTransition";var sE=nt.createContext(new Map);sE.displayName="Fetchers";var rE=nt.createContext(null);rE.displayName="Await";var Ai=nt.createContext(null);Ai.displayName="Navigation";var Cl=nt.createContext(null);Cl.displayName="Location";var ea=nt.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Up=nt.createContext(null);Up.displayName="RouteError";var Ex="REACT_ROUTER_ERROR",oE="REDIRECT",lE="ROUTE_ERROR_RESPONSE";function cE(r){if(r.startsWith(`${Ex}:${oE}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function uE(r){if(r.startsWith(`${Ex}:${lE}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new tE(t.status,t.statusText,t.data)}catch{}}function fE(r,{relative:t}={}){tn(wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=nt.useContext(Ai),{hash:l,pathname:c,search:f}=Dl(r,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Da([i,c])),s.createHref({pathname:p,search:f,hash:l})}function wl(){return nt.useContext(Cl)!=null}function Ms(){return tn(wl(),"useLocation() may be used only in the context of a <Router> component."),nt.useContext(Cl).location}var bx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tx(r){nt.useContext(Ai).static||nt.useLayoutEffect(r)}function Uu(){let{isDataRoute:r}=nt.useContext(ea);return r?AE():hE()}function hE(){tn(wl(),"useNavigate() may be used only in the context of a <Router> component.");let r=nt.useContext(co),{basename:t,navigator:i}=nt.useContext(Ai),{matches:s}=nt.useContext(ea),{pathname:l}=Ms(),c=JSON.stringify(_x(s)),f=nt.useRef(!1);return Tx(()=>{f.current=!0}),nt.useCallback((m,d={})=>{if(Hi(f.current,bx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=vx(m,JSON.parse(c),l,d.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Da([t,g.pathname])),(d.replace?i.replace:i.push)(g,d.state,d)},[t,i,c,l,r])}var dE=nt.createContext(null);function pE(r){let t=nt.useContext(ea).outlet;return nt.useMemo(()=>t&&nt.createElement(dE.Provider,{value:r},t),[t,r])}function Dl(r,{relative:t}={}){let{matches:i}=nt.useContext(ea),{pathname:s}=Ms(),l=JSON.stringify(_x(i));return nt.useMemo(()=>vx(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function mE(r,t){return Ax(r,t)}function Ax(r,t,i,s,l){tn(wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=nt.useContext(Ai),{matches:f}=nt.useContext(ea),p=f[f.length-1],m=p?p.params:{},d=p?p.pathname:"/",g=p?p.pathnameBase:"/",_=p&&p.route;{let R=_&&_.path||"";Cx(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Ms(),y;if(t){let R=typeof t=="string"?Js(t):t;tn(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),y=R}else y=v;let E=y.pathname||"/",A=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=px(r,{pathname:A});Hi(_||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Hi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=yE(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:Da([g,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Da([g,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,s,l);return t&&x?nt.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function gE(){let r=TE(),t=eE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=nt.createElement(nt.Fragment,null,nt.createElement("p",null,"💿 Hey developer 👋"),nt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",nt.createElement("code",{style:c},"ErrorBoundary")," or"," ",nt.createElement("code",{style:c},"errorElement")," prop on your route.")),nt.createElement(nt.Fragment,null,nt.createElement("h2",null,"Unexpected Application Error!"),nt.createElement("h3",{style:{fontStyle:"italic"}},t),i?nt.createElement("pre",{style:l},i):null,f)}var _E=nt.createElement(gE,null),Rx=class extends nt.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=uE(r.digest);i&&(r=i)}let t=r!==void 0?nt.createElement(ea.Provider,{value:this.props.routeContext},nt.createElement(Up.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?nt.createElement(vE,{error:r},t):t}};Rx.contextType=aE;var Kh=new WeakMap;function vE({children:r,error:t}){let{basename:i}=nt.useContext(Ai);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let s=cE(t.digest);if(s){let l=Kh.get(t);if(l)throw l;let c=yx(s.location,i);if(xx&&!Kh.get(t))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Kh.set(t,f),f}return nt.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function xE({routeContext:r,match:t,children:i}){let s=nt.useContext(co);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),nt.createElement(ea.Provider,{value:r},i)}function yE(r,t=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let g=c.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:y}=i,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!y||y[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let d=i&&s?(g,_)=>{s(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:nE(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,v)=>{let y,E=!1,A=null,S=null;i&&(y=f&&_.route.id?f[_.route.id]:void 0,A=_.route.errorElement||_E,p&&(m<0&&v===0?(Cx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):m===v&&(E=!0,S=_.route.hydrateFallbackElement||null)));let x=t.concat(c.slice(0,v+1)),R=()=>{let D;return y?D=A:E?D=S:_.route.Component?D=nt.createElement(_.route.Component,null):_.route.element?D=_.route.element:D=g,nt.createElement(xE,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:i!=null},children:D})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?nt.createElement(Rx,{location:i.location,revalidation:i.revalidation,component:A,error:y,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:d}):R()},null)}function Np(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SE(r){let t=nt.useContext(co);return tn(t,Np(r)),t}function ME(r){let t=nt.useContext(Lu);return tn(t,Np(r)),t}function EE(r){let t=nt.useContext(ea);return tn(t,Np(r)),t}function Op(r){let t=EE(r),i=t.matches[t.matches.length-1];return tn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function bE(){return Op("useRouteId")}function TE(){let r=nt.useContext(Up),t=ME("useRouteError"),i=Op("useRouteError");return r!==void 0?r:t.errors?.[i]}function AE(){let{router:r}=SE("useNavigate"),t=Op("useNavigate"),i=nt.useRef(!1);return Tx(()=>{i.current=!0}),nt.useCallback(async(l,c={})=>{Hi(i.current,bx),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var W_={};function Cx(r,t,i){!t&&!W_[r]&&(W_[r]=!0,Hi(!1,i))}nt.memo(RE);function RE({routes:r,future:t,state:i,onError:s}){return Ax(r,void 0,i,s,t)}function CE(r){return pE(r.context)}function gs(r){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wE({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){tn(!wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=nt.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Js(i));let{pathname:d="/",search:g="",hash:_="",state:v=null,key:y="default"}=i,E=nt.useMemo(()=>{let A=Na(d,p);return A==null?null:{location:{pathname:A,search:g,hash:_,state:v,key:y},navigationType:s}},[p,d,g,_,v,y,s]);return Hi(E!=null,`<Router basename="${p}"> is not able to match the URL "${d}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:nt.createElement(Ai.Provider,{value:m},nt.createElement(Cl.Provider,{children:t,value:E}))}function DE({children:r,location:t}){return mE(Od(r),t)}function Od(r,t=[]){let i=[];return nt.Children.forEach(r,(s,l)=>{if(!nt.isValidElement(s))return;let c=[...t,l];if(s.type===nt.Fragment){i.push.apply(i,Od(s.props.children,c));return}tn(s.type===gs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Od(s.props.children,c)),i.push(f)}),i}var _u="get",vu="application/x-www-form-urlencoded";function Nu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function LE(r){return Nu(r)&&r.tagName.toLowerCase()==="button"}function UE(r){return Nu(r)&&r.tagName.toLowerCase()==="form"}function NE(r){return Nu(r)&&r.tagName.toLowerCase()==="input"}function OE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function PE(r,t){return r.button===0&&(!t||t==="_self")&&!OE(r)}var Xc=null;function IE(){if(Xc===null)try{new FormData(document.createElement("form"),0),Xc=!1}catch{Xc=!0}return Xc}var FE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qh(r){return r!=null&&!FE.has(r)?(Hi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`),null):r}function BE(r,t){let i,s,l,c,f;if(UE(r)){let p=r.getAttribute("action");s=p?Na(p,t):null,i=r.getAttribute("method")||_u,l=Qh(r.getAttribute("enctype"))||vu,c=new FormData(r)}else if(LE(r)||NE(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Na(m,t):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||_u,l=Qh(r.getAttribute("formenctype"))||Qh(p.getAttribute("enctype"))||vu,c=new FormData(p,r),!IE()){let{name:d,type:g,value:_}=r;if(g==="image"){let v=d?`${d}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else d&&c.append(d,_)}}else{if(Nu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_u,s=null,l=vu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pp(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function zE(r,t,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:t&&Na(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function HE(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function VE(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await HE(c,i);return f.links?f.links():[]}return[]}));return WE(s.flat(1).filter(GE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Y_(r,t,i,s,l,c){let f=(m,d)=>i[d]?m.route.id!==i[d].route.id:!0,p=(m,d)=>i[d].pathname!==m.pathname||i[d].route.path?.endsWith("*")&&i[d].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,d)=>f(m,d)||p(m,d)):c==="data"?t.filter((m,d)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||p(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function kE(r,t,{includeHydrateFallback:i}={}){return XE(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function XE(r){return[...new Set(r)]}function jE(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function WE(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(jE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function wx(){let r=nt.useContext(co);return Pp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function YE(){let r=nt.useContext(Lu);return Pp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ip=nt.createContext(void 0);Ip.displayName="FrameworkContext";function Dx(){let r=nt.useContext(Ip);return Pp(r,"You must render this element inside a <HydratedRouter> element"),r}function qE(r,t){let i=nt.useContext(Ip),[s,l]=nt.useState(!1),[c,f]=nt.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=t,v=nt.useRef(null);nt.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let A=x=>{x.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),nt.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:rl(p,y),onBlur:rl(m,E),onMouseEnter:rl(d,y),onMouseLeave:rl(g,E),onTouchStart:rl(_,y)}]:[!1,v,{}]}function rl(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function ZE({page:r,...t}){let{router:i}=wx(),s=nt.useMemo(()=>px(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?nt.createElement(QE,{page:r,matches:s,...t}):null}function KE(r){let{manifest:t,routeModules:i}=Dx(),[s,l]=nt.useState([]);return nt.useEffect(()=>{let c=!1;return VE(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function QE({page:r,matches:t,...i}){let s=Ms(),{future:l,manifest:c,routeModules:f}=Dx(),{basename:p}=wx(),{loaderData:m,matches:d}=YE(),g=nt.useMemo(()=>Y_(r,t,d,c,s,"data"),[r,t,d,c,s]),_=nt.useMemo(()=>Y_(r,t,d,c,s,"assets"),[r,t,d,c,s]),v=nt.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let A=new Set,S=!1;if(t.forEach(R=>{let D=c.routes[R.route.id];!D||!D.hasLoader||(!g.some(U=>U.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||D.hasClientLoader?S=!0:A.add(R.route.id))}),A.size===0)return[];let x=zE(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return S&&A.size>0&&x.searchParams.set("_routes",t.filter(R=>A.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,g,t,r,f]),y=nt.useMemo(()=>kE(_,c),[_,c]),E=KE(_);return nt.createElement(nt.Fragment,null,v.map(A=>nt.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),y.map(A=>nt.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),E.map(({key:A,link:S})=>nt.createElement("link",{key:A,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function JE(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var $E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$E&&(window.__reactRouterVersion="7.13.0")}catch{}function tb({basename:r,children:t,unstable_useTransitions:i,window:s}){let l=nt.useRef();l.current==null&&(l.current=LM({window:s,v5Compat:!0}));let c=l.current,[f,p]=nt.useState({action:c.action,location:c.location}),m=nt.useCallback(d=>{i===!1?p(d):nt.startTransition(()=>p(d))},[i]);return nt.useLayoutEffect(()=>c.listen(m),[c,m]),nt.createElement(wE,{basename:r,children:t,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var Lx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=nt.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...y},E){let{basename:A,unstable_useTransitions:S}=nt.useContext(Ai),x=typeof d=="string"&&Lx.test(d),R=yx(d,A);d=R.to;let D=fE(d,{relative:l}),[U,F,N]=qE(s,y),z=ab(d,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:S});function b(k){t&&t(k),k.defaultPrevented||z(k)}let L=nt.createElement("a",{...y,...N,href:R.absoluteURL||D,onClick:R.isExternal||c?t:b,ref:JE(E,F),target:m,"data-discover":!x&&i==="render"?"true":void 0});return U&&!x?nt.createElement(nt.Fragment,null,L,nt.createElement(ZE,{page:D})):L});Ra.displayName="Link";var eb=nt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...d},g){let _=Dl(f,{relative:d.relative}),v=Ms(),y=nt.useContext(Lu),{navigator:E,basename:A}=nt.useContext(Ai),S=y!=null&&cb(_)&&p===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,R=v.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(R=R.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&A&&(D=Na(D,A)||D);const U=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=R===x||!l&&R.startsWith(x)&&R.charAt(U)==="/",N=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),z={isActive:F,isPending:N,isTransitioning:S},b=F?t:void 0,L;typeof s=="function"?L=s(z):L=[s,F?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof c=="function"?c(z):c;return nt.createElement(Ra,{...d,"aria-current":b,className:L,ref:g,style:k,to:f,viewTransition:p},typeof m=="function"?m(z):m)});eb.displayName="NavLink";var nb=nt.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=_u,action:p,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...y},E)=>{let{unstable_useTransitions:A}=nt.useContext(Ai),S=ob(),x=lb(p,{relative:d}),R=f.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Lx.test(p),U=F=>{if(m&&m(F),F.defaultPrevented)return;F.preventDefault();let N=F.nativeEvent.submitter,z=N?.getAttribute("formmethod")||f,b=()=>S(N||F.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:c,relative:d,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});A&&i!==!1?nt.startTransition(()=>b()):b()};return nt.createElement("form",{ref:E,method:R,action:x,onSubmit:s?m:U,...y,"data-discover":!D&&r==="render"?"true":void 0})});nb.displayName="Form";function ib(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ux(r){let t=nt.useContext(co);return tn(t,ib(r)),t}function ab(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let d=Uu(),g=Ms(),_=Dl(r,{relative:c});return nt.useCallback(v=>{if(PE(v,t)){v.preventDefault();let y=i!==void 0?i:yl(g)===yl(_),E=()=>d(r,{replace:y,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?nt.startTransition(()=>E()):E()}},[g,d,_,i,s,t,r,l,c,f,p,m])}var sb=0,rb=()=>`__${String(++sb)}__`;function ob(){let{router:r}=Ux("useSubmit"),{basename:t}=nt.useContext(Ai),i=bE(),s=r.fetch,l=r.navigate;return nt.useCallback(async(c,f={})=>{let{action:p,method:m,encType:d,formData:g,body:_}=BE(c,t);if(f.navigate===!1){let v=f.fetcherKey||rb();await s(v,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||d,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,t,i])}function lb(r,{relative:t}={}){let{basename:i}=nt.useContext(Ai),s=nt.useContext(ea);tn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Dl(r||".",{relative:t})},f=Ms();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Da([i,c.pathname])),yl(c)}function cb(r,{relative:t}={}){let i=nt.useContext(Mx);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ux("useViewTransitionState"),l=Dl(r,{relative:t});if(!i.isTransitioning)return!1;let c=Na(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Na(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Tu(l.pathname,f)!=null||Tu(l.pathname,c)!=null}const ub="/Vibra-Web/assets/VibraLogo-DwWVlSzh.png";function fb(){return I.jsxs("nav",{className:"navbar",children:[I.jsx(Ra,{to:"/",className:"logo-link",children:I.jsx("img",{src:ub,alt:"VIBRA Logo",className:"navbar-logo"})}),I.jsxs("div",{className:"nav-links",children:[I.jsx(Ra,{to:"/",children:"HOME"}),I.jsx(Ra,{to:"/about",children:"ABOUT"}),I.jsx(Ra,{to:"/team",children:"TEAM"}),I.jsx(Ra,{to:"/simulation",children:"SIMULATION"}),I.jsx(Ra,{to:"/instruction",children:"INSTRUCTION"}),I.jsx(Ra,{to:"/contact",children:"CONTACT"})]})]})}function hb(){return I.jsxs("div",{className:"app-container",children:[I.jsx(fb,{}),I.jsx("div",{className:"page-content",children:I.jsx(CE,{})})]})}function db(){const r=Uu(),t=Ms();return I.jsxs("div",{className:"home-container",children:[I.jsx("h1",{className:"main-title",children:"VIBRA"}),I.jsx("h2",{className:"subtitle",children:"STUDIO SIMULATION"}),I.jsxs("button",{className:"primary-btn",onClick:()=>r("/about"),children:[I.jsx("span",{className:"btn-text",children:"LEARN MORE ABOUT US"}),I.jsx("span",{className:"btn-arrow",children:"→"})]})]},t.key)}function pb(){const[r,t]=nt.useState(!1),i=Uu();return nt.useEffect(()=>{t(!0)},[]),I.jsxs("div",{className:`about-container ${r?"enter":""}`,children:[I.jsx("h1",{children:"ABOUT US"}),I.jsx("h3",{children:"WE ARE VIBRA"}),I.jsxs("div",{className:"about-content",children:[I.jsxs("div",{className:"about-text",children:[I.jsx("p",{className:"about-paragraph p1",children:I.jsx("span",{className:"para-inner",children:"VIBRA is a web-based studio simulation platform designed to visualize and analyze acoustic data through an interactive three-dimensional environment. It bridges real-world sound measurements and digital visualization, allowing users to better understand how sound behaves within enclosed spaces."})}),I.jsx("p",{className:"about-paragraph p2",children:I.jsx("span",{className:"para-inner",children:"The platform gathers acoustic parameters such as RT60 values and spatial measurements from a physical prototype and transforms them into meaningful visual representations. Through its integrated 3D simulation, users can identify acoustic conditions including hot spots, dead spots, and neutral zones within a room."})}),I.jsx("p",{className:"about-paragraph p3",children:I.jsx("span",{className:"para-inner",children:"VIBRA aims to support students, engineers, and designers by providing a clear and intuitive way to evaluate room acoustics, explore data-driven insights, and improve sound optimization decisions. By combining data analysis with immersive visualization, VIBRA delivers a modern approach to acoustic assessment and simulation."})})]}),I.jsx("div",{className:"about-cta-side",children:I.jsxs("button",{className:"about-cta-btn",onClick:()=>i("/team"),"aria-label":"Meet the developers",children:[I.jsx("span",{className:"cta-arrow",children:"→"}),I.jsx("span",{className:"cta-text",children:"Meet the developers"})]})})]})]})}const mb="/Vibra-Web/assets/marichu-kG7RSE-D.png",gb="/Vibra-Web/assets/missy-BteT_0I_.png",_b="/Vibra-Web/assets/khlowee-CAL1KU9a.png",vb="/Vibra-Web/assets/juliann-BXcYWaAK.png",xb="/Vibra-Web/assets/lance-DPwIT8nK.png",yb=[{name:"Marichu C. Espelimbergo",role:"Frontend Developer",image:mb},{name:"Missy Ann Jhlezshir G. Espiritu",role:"UI/UX Designer",image:gb},{name:"Khlowee A. Mendoza",role:"Assistant Backend Developer",image:_b},{name:"Juliann Vincent B. Quibral",role:"Backend Developer",image:vb},{name:"Lance Gabrielle A. Santos",role:"Assistant Frontend Developer",image:xb}];function Sb(){const r=Uu(),[t,i]=nt.useState(!1);return nt.useEffect(()=>{i(!0)},[]),I.jsxs("div",{className:`team-container ${t?"enter":""}`,children:[I.jsx("h1",{className:"team-title",children:"OUR TEAM"}),I.jsx("h3",{className:"team-subtitle",children:"MEET THE DEVELOPERS"}),I.jsx("div",{className:"team-grid",children:yb.map((s,l)=>I.jsx("div",{className:"team-member",children:I.jsx("div",{className:"flip-card",children:I.jsxs("div",{className:"flip-inner",children:[I.jsx("div",{className:"flip-front",style:{backgroundImage:`url(${s.image})`}}),I.jsxs("div",{className:"flip-back",children:[I.jsx("div",{className:"team-name",children:s.name}),I.jsx("div",{className:"team-role",children:s.role})]})]})})},l))}),I.jsx("div",{className:"team-cta-down",children:I.jsxs("button",{className:"team-cta-btn",type:"button",onClick:()=>r("/simulation"),"aria-label":"Continue to simulation",children:[I.jsx("span",{className:"team-cta-arrow",children:"→"}),I.jsx("span",{className:"team-cta-text",children:"Continue to Simulation"})]})})]})}const Mb="1OAfQI6MwheL6wIes1EhGjak3G1jSVLFGppmzqTL9MWQ",Eb=[{label:"Layer 1",gid:"0"},{label:"Layer 2",gid:"540291160"},{label:"Layer 3",gid:"1597351297"},{label:"Layer 4",gid:"1962364642"}],bb=r=>`https://docs.google.com/spreadsheets/d/${Mb}/export?format=csv&gid=${r}`,Pd=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function q_(r){const t=String(r).replace(/\r/g,""),i=[];let s=[],l="",c=!1;for(let m=0;m<t.length;m++){const d=t[m],g=t[m+1];if(d==='"'){c&&g==='"'?(l+='"',m++):c=!c;continue}if(d===","&&!c){s.push(l),l="";continue}if(d===`
`&&!c){s.push(l),i.push(s),s=[],l="";continue}l+=d}if((l.length||s.length)&&(s.push(l),i.push(s)),!i.length)return[];const f=i[0].map(m=>Pd(m)),p=[];for(let m=1;m<i.length;m++){const d=i[m];if(d.every(_=>Pd(_)===""))continue;const g={};f.forEach((_,v)=>{g[_]=String(d[v]??"").trim()}),p.push(g)}return p}function Dn(r,t){for(const i of t){const s=Pd(i);if(Object.prototype.hasOwnProperty.call(r,s))return r[s]}return""}function Tb({rawRows:r,setRawRows:t,displayedRows:i,searchInput:s,setSearchInput:l,setAppliedSearch:c,sortValue:f,setSortValue:p,onExport:m,onDeploy:d,onReset:g,spatial:_,uploadStatus:v,setUploadStatus:y}){const[E,A]=nt.useState(!1),[S,x]=nt.useState(!1),R=nt.useRef(null);nt.useEffect(()=>{if(v.type==="idle")return;const k=setTimeout(()=>y({type:"idle",message:""}),5e3);return()=>clearTimeout(k)},[v,y]);const D=async()=>{try{y({type:"loading",message:"Uploading data from Google Sheet (all layers)..."});const k=[];for(const H of Eb){const J=await(await fetch(bb(H.gid),{redirect:"follow"})).text();if(J.toLowerCase().includes("<html")||J.toLowerCase().includes("<!doctype"))throw new Error(`Sheet ${H.label} is not publicly accessible as CSV.`);const Q=q_(J).map(P=>({Angle:Dn(P,["angle"]),Decibel:Dn(P,["db","dB","decibel"]),Ultrasonic:Dn(P,["utv","ultrasonic","ultrasonicvalue"]),RT60:Dn(P,["rt60","reverberation","rt60value"]),Classification:Dn(P,["class","classification"]),Layer:H.label,LengthRaw:Dn(P,["length"]),WidthRaw:Dn(P,["width"]),HeightRaw:Dn(P,["utvh","height","heightraw"])}));k.push(...Q)}if(!k.length)throw new Error("No data found from all sheets.");t(k),y({type:"success",message:`Done uploading. Loaded ${k.length} row(s) from all layers.`}),A(!1),x(!1)}catch(k){console.error("Cloud import failed:",k),y({type:"error",message:`Upload failed: ${String(k.message||k)}`}),A(!1),x(!1)}},U=k=>{const H=k.target.files?.[0];if(!H)return;if(!H.name.toLowerCase().endsWith(".csv")){y({type:"error",message:"CSV only. Please upload a .csv file."}),k.target.value="";return}y({type:"loading",message:"Uploading data from local CSV..."});const Z=new FileReader;Z.onload=J=>{try{const it=J.target.result,Q=q_(String(it));if(!Q.length)throw new Error("CSV has no data rows.");const P=Q.map(G=>({Angle:Dn(G,["angle"]),Decibel:Dn(G,["db","dB"]),Ultrasonic:Dn(G,["utv","ultrasonic"]),RT60:Dn(G,["rt60","reverberation"]),HeightRaw:Dn(G,["utvh","height","heightraw"]),Classification:Dn(G,["class","classification"]),Layer:Dn(G,["layer"])||"Local",LengthRaw:Dn(G,["length"]),WidthRaw:Dn(G,["width"])}));t(P),y({type:"success",message:`Done uploading. Loaded ${P.length} row(s).`})}catch(it){y({type:"error",message:`Upload failed: ${String(it.message||it)}`})}},Z.readAsText(H),A(!1),x(!1),k.target.value=""},F=()=>c(s),N=k=>{p(k),x(!1)},z=k=>k==null?"—":`${k.toFixed(1)} cm`,b=k=>k==null?"—":`${k.toFixed(2)} m²`,L=_.qualified==null?"—":_.qualified?"Qualified":"Not Qualified";return I.jsxs("div",{className:"sim-slide sim-slide-1",children:[I.jsx("h1",{className:"sim-title",children:"SIMULATION"}),v.type!=="idle"&&I.jsxs("div",{className:`upload-toast upload-toast--floating ${v.type}`,children:[v.message,I.jsx("button",{className:"upload-toast-close",type:"button",onClick:()=>y({type:"idle",message:""}),"aria-label":"Close notification",children:"✕"})]}),I.jsxs("div",{className:"sim-row",children:[I.jsxs("div",{className:"glass-card glass-card--raw",children:[I.jsx("h2",{className:"card-title",children:"RAW PARAMETERS"}),I.jsxs("div",{className:"raw-top",children:[I.jsx("input",{className:"search-input",placeholder:"Search...",value:s,onChange:k=>l(k.target.value),onKeyDown:k=>k.key==="Enter"&&F()}),I.jsx("button",{className:"small-btn",type:"button",onClick:F,children:"Enter"}),I.jsxs("div",{className:"sort-wrapper",children:[I.jsx("button",{className:"small-btn",type:"button",onClick:()=>{x(k=>!k),A(!1)},children:"Sort ▾"}),S&&I.jsxs("div",{className:"sort-dropdown",children:[I.jsx("button",{type:"button",onClick:()=>N("layer:Layer 1"),children:"Layer 1"}),I.jsx("button",{type:"button",onClick:()=>N("layer:Layer 2"),children:"Layer 2"}),I.jsx("button",{type:"button",onClick:()=>N("layer:Layer 3"),children:"Layer 3"}),I.jsx("button",{type:"button",onClick:()=>N("layer:Layer 4"),children:"Layer 4"}),I.jsx("div",{className:"sort-divider"}),I.jsx("button",{type:"button",onClick:()=>N("class:hotspot"),children:"Hot Spot"}),I.jsx("button",{type:"button",onClick:()=>N("class:deadspot"),children:"Dead Spot"}),I.jsx("div",{className:"sort-divider"}),I.jsx("button",{type:"button",onClick:()=>N(null),children:"Clear Sort"})]})]})]}),I.jsx("div",{className:"data-box",children:I.jsxs("table",{className:"raw-table",children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx("th",{children:"No."}),I.jsx("th",{children:"Angle"}),I.jsx("th",{children:"Decibel"}),I.jsx("th",{children:"Ultrasonic"}),I.jsx("th",{children:"RT60"}),I.jsx("th",{children:"Classification"}),I.jsx("th",{children:"Layer"})]})}),I.jsx("tbody",{children:i.map((k,H)=>I.jsxs("tr",{children:[I.jsx("td",{children:H+1}),I.jsx("td",{children:k.Angle}),I.jsx("td",{children:k.Decibel}),I.jsx("td",{children:k.Ultrasonic}),I.jsx("td",{children:k.RT60}),I.jsx("td",{children:k.Classification}),I.jsx("td",{children:k.Layer})]},`${k.Layer}-${H}`))})]})}),I.jsxs("div",{className:"raw-bottom",children:[I.jsxs("div",{className:"left-actions",children:[I.jsxs("div",{className:"import-wrapper",children:[I.jsx("button",{className:"action-btn",type:"button",onClick:()=>{A(k=>!k),x(!1)},children:"Import ▾"}),E&&I.jsxs("div",{className:"import-dropdown",children:[I.jsx("button",{type:"button",onClick:D,children:"Cloud"}),I.jsx("button",{type:"button",onClick:()=>R.current?.click(),children:"Local"})]}),I.jsx("input",{type:"file",ref:R,style:{display:"none"},accept:".csv",onChange:U})]}),I.jsx("button",{className:"action-btn",type:"button",onClick:m,disabled:!i.length,children:"Export"}),I.jsx("button",{className:"action-btn",type:"button",onClick:d,disabled:!i.length,children:"Deploy"})]}),I.jsx("button",{className:"action-btn",type:"button",onClick:g,children:"Reset"})]})]}),I.jsxs("div",{className:"glass-card glass-card--spatial",children:[I.jsx("h2",{className:"card-title",children:"SPATIAL STATUS"}),I.jsx("p",{className:"label",children:"PHYSICAL DIMENSION:"}),I.jsx("div",{className:"dimension-input",children:I.jsxs("span",{className:"dimension-text",children:["Length: ",z(_.lengthCm)]})}),I.jsx("div",{className:"dimension-input",children:I.jsxs("span",{className:"dimension-text",children:["Width: ",z(_.widthCm)]})}),I.jsx("div",{className:"dimension-input",children:I.jsxs("span",{className:"dimension-text",children:["Height: ",_.heightRaw?`${_.heightRaw} cm`:"—"]})}),I.jsxs("div",{className:"status-wrapper",children:[I.jsx("p",{className:"status-label",children:"STATUS:"}),I.jsx("div",{className:"status-box",children:I.jsxs("div",{className:"status-inner",children:[I.jsxs("div",{className:"status-line",children:[I.jsx("span",{children:"Area:"})," ",I.jsx("b",{children:b(_.area)})]}),I.jsxs("div",{className:"status-line",children:[I.jsx("span",{children:"Result:"})," ",I.jsx("b",{children:L})]}),I.jsxs("div",{className:"status-hint",children:["Qualified if floor area is ",I.jsx("b",{children:"3–5 m²"}),"."]})]})})]}),I.jsxs("div",{className:"spatial-meta",children:["Active rows: ",I.jsx("b",{children:i.length})," / ",r.length,f?I.jsxs(I.Fragment,{children:[" ","• Filter: ",I.jsx("b",{children:f})]}):null]})]})]})]})}const Fp="183",eo={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ab=0,Z_=1,Rb=2,xu=1,Cb=2,gl=3,ys=0,Qn=1,bi=2,La=0,no=1,K_=2,Q_=3,J_=4,wb=5,Ys=100,Db=101,Lb=102,Ub=103,Nb=104,Ob=200,Pb=201,Ib=202,Fb=203,Id=204,Fd=205,Bb=206,zb=207,Hb=208,Gb=209,Vb=210,kb=211,Xb=212,jb=213,Wb=214,Bd=0,zd=1,Hd=2,ao=3,Gd=4,Vd=5,kd=6,Xd=7,Nx=0,Yb=1,qb=2,Qi=0,Ox=1,Px=2,Ix=3,Fx=4,Bx=5,zx=6,Hx=7,Gx=300,Qs=301,so=302,Jh=303,$h=304,Ou=306,jd=1e3,Ca=1001,Wd=1002,Un=1003,Zb=1004,jc=1005,gn=1006,td=1007,Zs=1008,hi=1009,Vx=1010,kx=1011,Sl=1012,Bp=1013,$i=1014,Bi=1015,Oa=1016,zp=1017,Hp=1018,Ml=1020,Xx=35902,jx=35899,Wx=1021,Yx=1022,zi=1023,Pa=1026,Ks=1027,Gp=1028,Vp=1029,ro=1030,kp=1031,Xp=1033,yu=33776,Su=33777,Mu=33778,Eu=33779,Yd=35840,qd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37488,ep=37489,np=37490,ip=37491,ap=37808,sp=37809,rp=37810,op=37811,lp=37812,cp=37813,up=37814,fp=37815,hp=37816,dp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,xp=36494,yp=36495,Sp=36283,Mp=36284,Ep=36285,bp=36286,Kb=3200,qx=0,Qb=1,vs="",fi="srgb",oo="srgb-linear",Au="linear",He="srgb",Br=7680,$_=519,Jb=512,$b=513,tT=514,jp=515,eT=516,nT=517,Wp=518,iT=519,tv=35044,aT=35048,ev="300 es",Ki=2e3,El=2001;function sT(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rT(){const r=Ru("canvas");return r.style.display="block",r}const nv={};function iv(...r){const t="THREE."+r.shift();console.log(t,...r)}function Zx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ne(...r){r=Zx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ce(...r){r=Zx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Cu(...r){const t=r.join(" ");t in nv||(nv[t]=!0,ne(...r))}function oT(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const lT={[Bd]:zd,[Hd]:kd,[Gd]:Xd,[ao]:Vd,[zd]:Bd,[kd]:Hd,[Xd]:Gd,[Vd]:ao};class $s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let av=1234567;const vl=Math.PI/180,bl=180/Math.PI;function uo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function Yp(r,t){return(r%t+t)%t}function cT(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function uT(r,t,i){return r!==t?(i-r)/(t-r):0}function xl(r,t,i){return(1-i)*r+i*t}function fT(r,t,i,s){return xl(r,t,1-Math.exp(-i*s))}function hT(r,t=1){return t-Math.abs(Yp(r,t*2)-t)}function dT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function pT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function mT(r,t){return r+Math.floor(Math.random()*(t-r+1))}function gT(r,t){return r+Math.random()*(t-r)}function _T(r){return r*(.5-Math.random())}function vT(r){r!==void 0&&(av=r);let t=av+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xT(r){return r*vl}function yT(r){return r*bl}function ST(r){return(r&r-1)===0&&r!==0}function MT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ET(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bT(r,t,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),v=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(p*g,m*_,m*v,p*d);break;case"YZY":r.set(m*v,p*g,m*_,p*d);break;case"ZXZ":r.set(m*_,m*v,p*g,p*d);break;case"XZX":r.set(p*g,m*E,m*y,p*d);break;case"YXY":r.set(m*y,p*g,m*E,p*d);break;case"ZYZ":r.set(m*E,m*y,p*g,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function $r(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:vl,RAD2DEG:bl,generateUUID:uo,clamp:ve,euclideanModulo:Yp,mapLinear:cT,inverseLerp:uT,lerp:xl,damp:fT,pingpong:hT,smoothstep:dT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:_T,seededRandom:vT,degToRad:xT,radToDeg:yT,isPowerOfTwo:ST,ceilPowerOfTwo:MT,floorPowerOfTwo:ET,setQuaternionFromProperEuler:bT,normalize:Vn,denormalize:$r};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3],v=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(_!==A||m!==v||d!==y||g!==E){let S=m*v+d*y+g*E+_*A;S<0&&(v=-v,y=-y,E=-E,A=-A,S=-S);let x=1-p;if(S<.9995){const R=Math.acos(S),D=Math.sin(R);x=Math.sin(x*R)/D,p=Math.sin(p*R)/D,m=m*x+v*p,d=d*x+y*p,g=g*x+E*p,_=_*x+A*p}else{m=m*x+v*p,d=d*x+y*p,g=g*x+E*p,_=_*x+A*p;const R=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=R,d*=R,g*=R,_*=R}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],g=s[l+3],_=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[i]=p*E+g*_+m*y-d*v,t[i+1]=m*E+g*v+d*_-p*y,t[i+2]=d*E+g*y+p*v-m*_,t[i+3]=g*E-p*_-m*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),g=p(l/2),_=p(c/2),v=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=s+p+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(s>p&&s>_){const y=2*Math.sqrt(1+s-p-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>_){const y=2*Math.sqrt(1+p-s-_);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+f*p+l*d-c*m,this._y=l*g+f*m+c*p-s*d,this._z=c*g+f*d+s*m-l*p,this._w=f*g-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*d+f*_-p*g,this.y=s+m*g+p*d-c*_,this.z=l+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new et,sv=new Ss;class me{constructor(t,i,s,l,c,f,p,m,d){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],A=l[0],S=l[3],x=l[6],R=l[1],D=l[4],U=l[7],F=l[2],N=l[5],z=l[8];return c[0]=f*A+p*R+m*F,c[3]=f*S+p*D+m*N,c[6]=f*x+p*U+m*z,c[1]=d*A+g*R+_*F,c[4]=d*S+g*D+_*N,c[7]=d*x+g*U+_*z,c[2]=v*A+y*R+E*F,c[5]=v*S+y*D+E*N,c[8]=v*x+y*U+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*p*d-s*c*g+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=g*f-p*d,v=p*m-g*c,y=d*c-f*m,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*d-g*s)*A,t[2]=(p*s-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=y*A,t[7]=(s*m-d*i)*A,t[8]=(f*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(nd.makeScale(t,i)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new me,rv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ov=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TT(){const r={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[oo]:{primaries:t,whitePoint:s,transfer:Au,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const we=TT();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class AT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{zr===void 0&&(zr=Ru("canvas")),zr.width=t.width,zr.height=t.height;const l=zr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=zr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RT=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=uo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(id(l[f].image)):c.push(id(l[f]))}else c=id(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function id(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let CT=0;const ad=new et;class In extends $s{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Ca,l=Ca,c=gn,f=Zs,p=zi,m=hi,d=In.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=uo(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Gx;In.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],A=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,U=(y+1)/2,F=(x+1)/2,N=(g+v)/4,z=(_+A)/4,b=(E+S)/4;return D>U&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=N/s,c=z/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=N/l,c=b/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=b/c),this.set(s,l,c,i),this}let R=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-A)/R,this.z=(v-g)/R,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wT extends $s{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new In(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends wT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Kx extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DT extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(t,i,s,l,c,f,p,m,d,g,_,v,y,E,A,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,g,_,v,y,E,A,S)}set(t,i,s,l,c,f,p,m,d,g,_,v,y,E,A,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Hr.setFromMatrixColumn(t,0).length(),c=1/Hr.setFromMatrixColumn(t,1).length(),f=1/Hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=y+E*d,i[5]=v-A*d,i[9]=-p*m,i[2]=A-v*d,i[6]=E+y*d,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=d*g,A=d*_;i[0]=v+A*p,i[4]=E*p-y,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=y*p-E,i[6]=A+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=d*g,A=d*_;i[0]=v-A*p,i[4]=-f*_,i[8]=E+y*p,i[1]=y+E*p,i[5]=f*g,i[9]=A-v*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,y=f*_,E=p*g,A=p*_;i[0]=m*g,i[4]=E*d-y,i[8]=v*d+A,i[1]=m*_,i[5]=A*d+v,i[9]=y*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-d*g,i[6]=y*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,y=f*d,E=p*m,A=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+A,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=p*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LT,t,UT)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(s,ci),ls.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(s,ci)),ls.normalize(),Wc.crossVectors(ci,ls),l[0]=ls.x,l[4]=Wc.x,l[8]=ci.x,l[1]=ls.y,l[5]=Wc.y,l[9]=ci.y,l[2]=ls.z,l[6]=Wc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],A=s[6],S=s[10],x=s[14],R=s[3],D=s[7],U=s[11],F=s[15],N=l[0],z=l[4],b=l[8],L=l[12],k=l[1],H=l[5],Z=l[9],J=l[13],it=l[2],Q=l[6],P=l[10],G=l[14],st=l[3],ht=l[7],Mt=l[11],O=l[15];return c[0]=f*N+p*k+m*it+d*st,c[4]=f*z+p*H+m*Q+d*ht,c[8]=f*b+p*Z+m*P+d*Mt,c[12]=f*L+p*J+m*G+d*O,c[1]=g*N+_*k+v*it+y*st,c[5]=g*z+_*H+v*Q+y*ht,c[9]=g*b+_*Z+v*P+y*Mt,c[13]=g*L+_*J+v*G+y*O,c[2]=E*N+A*k+S*it+x*st,c[6]=E*z+A*H+S*Q+x*ht,c[10]=E*b+A*Z+S*P+x*Mt,c[14]=E*L+A*J+S*G+x*O,c[3]=R*N+D*k+U*it+F*st,c[7]=R*z+D*H+U*Q+F*ht,c[11]=R*b+D*Z+U*P+F*Mt,c[15]=R*L+D*J+U*G+F*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],A=t[7],S=t[11],x=t[15],R=m*y-d*v,D=p*y-d*_,U=p*v-m*_,F=f*y-d*g,N=f*v-m*g,z=f*_-p*g;return i*(A*R-S*D+x*U)-s*(E*R-S*F+x*N)+l*(E*D-A*F+x*z)-c*(E*U-A*N+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],A=t[13],S=t[14],x=t[15],R=i*p-s*f,D=i*m-l*f,U=i*d-c*f,F=s*m-l*p,N=s*d-c*p,z=l*d-c*m,b=g*A-_*E,L=g*S-v*E,k=g*x-y*E,H=_*S-v*A,Z=_*x-y*A,J=v*x-y*S,it=R*J-D*Z+U*H+F*k-N*L+z*b;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/it;return t[0]=(p*J-m*Z+d*H)*Q,t[1]=(l*Z-s*J-c*H)*Q,t[2]=(A*z-S*N+x*F)*Q,t[3]=(v*N-_*z-y*F)*Q,t[4]=(m*k-f*J-d*L)*Q,t[5]=(i*J-l*k+c*L)*Q,t[6]=(S*U-E*z-x*D)*Q,t[7]=(g*z-v*U+y*D)*Q,t[8]=(f*Z-p*k+d*b)*Q,t[9]=(s*k-i*Z-c*b)*Q,t[10]=(E*N-A*U+x*R)*Q,t[11]=(_*U-g*N-y*R)*Q,t[12]=(p*L-f*H-m*b)*Q,t[13]=(i*H-s*L+l*b)*Q,t[14]=(A*D-E*F-S*R)*Q,t[15]=(g*F-_*D+v*R)*Q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,g=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+s,g*m-l*f,0,d*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,g=f+f,_=p+p,v=c*d,y=c*g,E=c*_,A=f*g,S=f*_,x=p*_,R=m*d,D=m*g,U=m*_,F=s.x,N=s.y,z=s.z;return l[0]=(1-(A+x))*F,l[1]=(y+U)*F,l[2]=(E-D)*F,l[3]=0,l[4]=(y-U)*N,l[5]=(1-(v+x))*N,l[6]=(S+R)*N,l[7]=0,l[8]=(E+D)*z,l[9]=(S-R)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Hr.set(l[0],l[1],l[2]).length();const p=Hr.set(l[4],l[5],l[6]).length(),m=Hr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oi.copy(this);const d=1/f,g=1/p,_=1/m;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,i.setFromRotationMatrix(Oi),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=Ki,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(p===Ki)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(p===El)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=Ki,m=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(p===Ki)E=-2/(f-c),A=-(f+c)/(f-c);else if(p===El)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Hr=new et,Oi=new je,LT=new et(0,0,0),UT=new et(1,1,1),ls=new et,Wc=new et,ci=new et,lv=new je,cv=new Ss;class Ln{constructor(t=0,i=0,s=0,l=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return lv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return cv.setFromEuler(this),this.setFromQuaternion(cv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NT=0;const uv=new et,Gr=new Ss,Sa=new je,Yc=new et,ol=new et,OT=new et,PT=new Ss,fv=new et(1,0,0),hv=new et(0,1,0),dv=new et(0,0,1),pv={type:"added"},IT={type:"removed"},Vr={type:"childadded",child:null},sd={type:"childremoved",child:null};class Tn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new et,i=new Ln,s=new Ss,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new me}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Gr.setFromAxisAngle(t,i),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,i){return Gr.setFromAxisAngle(t,i),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(fv,t)}rotateY(t){return this.rotateOnAxis(hv,t)}rotateZ(t){return this.rotateOnAxis(dv,t)}translateOnAxis(t,i){return uv.copy(t).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fv,t)}translateY(t){return this.translateOnAxis(hv,t)}translateZ(t){return this.translateOnAxis(dv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Yc.copy(t):Yc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(ol,Yc,this.up):Sa.lookAt(Yc,ol,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Gr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pv),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IT),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pv),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,OT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,PT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new et(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wa extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FT={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,s),x=this._getHandJoint(d,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(FT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},qc={h:0,s:0,l:0};function od(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Te{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=Yp(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=od(f,c,t+1/3),this.g=od(f,c,t),this.b=od(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const s=Qx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return we.workingToColorSpace(Pn.copy(this),t),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const g=(p+f)/2;if(p===f)m=0,d=0;else{const _=f-p;switch(d=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=fi){we.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+i,cs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(cs),t.getHSL(qc);const s=xl(cs.h,qc.h,i),l=xl(cs.s,qc.s,i),c=xl(cs.l,qc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Te;Te.NAMES=Qx;class BT extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new et,Ma=new et,ld=new et,Ea=new et,kr=new et,Xr=new et,mv=new et,cd=new et,ud=new et,fd=new et,hd=new an,dd=new an,pd=new an;class Fi{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Pi.subVectors(l,i),Ma.subVectors(s,i),ld.subVectors(t,i);const f=Pi.dot(Pi),p=Pi.dot(Ma),m=Pi.dot(ld),d=Ma.dot(Ma),g=Ma.dot(ld),_=f*d-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*m-p*g)*v,E=(f*g-p*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(f,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return hd.setScalar(0),dd.setScalar(0),pd.setScalar(0),hd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,s),pd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(hd,c.x),f.addScaledVector(dd,c.y),f.addScaledVector(pd,c.z),f}static isFrontFacing(t,i,s,l){return Pi.subVectors(s,i),Ma.subVectors(t,i),Pi.cross(Ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Pi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;kr.subVectors(l,s),Xr.subVectors(c,s),cd.subVectors(t,s);const m=kr.dot(cd),d=Xr.dot(cd);if(m<=0&&d<=0)return i.copy(s);ud.subVectors(t,l);const g=kr.dot(ud),_=Xr.dot(ud);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(kr,f);fd.subVectors(t,c);const y=kr.dot(fd),E=Xr.dot(fd);if(E>=0&&y<=E)return i.copy(c);const A=y*d-m*E;if(A<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(s).addScaledVector(Xr,p);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return mv.subVectors(c,l),p=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(mv,p);const x=1/(S+A+v);return f=A*x,p=v*x,i.copy(s).addScaledVector(kr,f).addScaledVector(Xr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tr{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zc.copy(s.boundingBox)),Zc.applyMatrix4(t.matrixWorld),this.union(Zc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ll),Kc.subVectors(this.max,ll),jr.subVectors(t.a,ll),Wr.subVectors(t.b,ll),Yr.subVectors(t.c,ll),us.subVectors(Wr,jr),fs.subVectors(Yr,Wr),Gs.subVectors(jr,Yr);let i=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,fs.z,0,-fs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Gs.y,Gs.x,0];return!md(i,jr,Wr,Yr,Kc)||(i=[1,0,0,0,1,0,0,0,1],!md(i,jr,Wr,Yr,Kc))?!1:(Qc.crossVectors(us,fs),i=[Qc.x,Qc.y,Qc.z],md(i,jr,Wr,Yr,Kc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new et,new et,new et,new et,new et,new et,new et,new et],Ii=new et,Zc=new tr,jr=new et,Wr=new et,Yr=new et,us=new et,fs=new et,Gs=new et,ll=new et,Kc=new et,Qc=new et,Vs=new et;function md(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Vs.fromArray(r,c);const p=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),d=i.dot(Vs),g=s.dot(Vs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const pn=new et,Jc=new ce;let zT=0;class Jn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=tv,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Jc.fromBufferAttribute(this,i),Jc.applyMatrix3(t),this.setXY(i,Jc.x,Jc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=$r(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=$r(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=$r(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=$r(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=$r(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tv&&(t.usage=this.usage),t}}class Jx extends Jn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class $x extends Jn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ti extends Jn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const HT=new tr,cl=new et,gd=new et;class fo{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):HT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cl.subVectors(t,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(cl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cl.copy(t.center).add(gd)),this.expandByPoint(cl.copy(t.center).sub(gd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let GT=0;const Si=new je,_d=new Tn,qr=new et,ui=new tr,ul=new tr,bn=new et;class $n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sT(t)?$x:Jx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,i,s){return Si.makeTranslation(t,i,s),this.applyMatrix4(Si),this}scale(t,i,s){return Si.makeScale(t,i,s),this.applyMatrix4(Si),this}lookAt(t){return _d.lookAt(t),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ti(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ul.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,ul.min),ui.expandByPoint(bn),bn.addVectors(ui.max,ul.max),ui.expandByPoint(bn)):(ui.expandByPoint(ul.min),ui.expandByPoint(ul.max))}ui.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)bn.fromBufferAttribute(p,d),m&&(qr.fromBufferAttribute(t,d),bn.add(qr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new et,m[b]=new et;const d=new et,g=new et,_=new et,v=new ce,y=new ce,E=new ce,A=new et,S=new et;function x(b,L,k){d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),_.fromBufferAttribute(s,k),v.fromBufferAttribute(c,b),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,k),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),p[b].add(A),p[L].add(A),p[k].add(A),m[b].add(S),m[L].add(S),m[k].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let b=0,L=R.length;b<L;++b){const k=R[b],H=k.start,Z=k.count;for(let J=H,it=H+Z;J<it;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const D=new et,U=new et,F=new et,N=new et;function z(b){F.fromBufferAttribute(l,b),N.copy(F);const L=p[b];D.copy(L),D.sub(F.multiplyScalar(F.dot(L))).normalize(),U.crossVectors(N,L);const H=U.dot(m[b])<0?-1:1;f.setXYZW(b,D.x,D.y,D.z,H)}for(let b=0,L=R.length;b<L;++b){const k=R[b],H=k.start,Z=k.count;for(let J=H,it=H+Z;J<it;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Jn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new et,c=new et,f=new et,p=new et,m=new et,d=new et,g=new et,_=new et;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,S),p.add(g),m.add(g),d.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,_=p.normalized,v=new d.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){p.isInterleavedBufferAttribute?y=m[A]*p.data.stride+p.offset:y=m[A]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new Jn(v,g,_)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let VT=0;class ho extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=no,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Fd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Id&&(s.blendSrc=this.blendSrc),this.blendDst!==Fd&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ta=new et,vd=new et,$c=new et,hs=new et,xd=new et,tu=new et,yd=new et;class Pu{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){vd.copy(t).add(i).multiplyScalar(.5),$c.copy(i).sub(t).normalize(),hs.copy(this.origin).sub(vd);const c=t.distanceTo(i)*.5,f=-this.direction.dot($c),p=hs.dot(this.direction),m=-hs.dot($c),d=hs.lengthSq(),g=Math.abs(1-f*f);let _,v,y,E;if(g>0)if(_=f*m-p,v=f*p-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,y=_*(_+f*v+2*p)+v*(f*_+v+2*m)+d}else v=c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+d):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(vd).addScaledVector($c,v),y}intersectSphere(t,i){Ta.subVectors(t.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(t.min.x-v.x)*d,l=(t.max.x-v.x)*d):(s=(t.max.x-v.x)*d,l=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,i,s,l,c){xd.subVectors(i,t),tu.subVectors(s,t),yd.crossVectors(xd,tu);let f=this.direction.dot(yd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;hs.subVectors(this.origin,t);const m=p*this.direction.dot(tu.crossVectors(hs,tu));if(m<0)return null;const d=p*this.direction.dot(xd.cross(hs));if(d<0||m+d>f)return null;const g=-p*hs.dot(yd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Iu extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gv=new je,ks=new Pu,eu=new fo,_v=new et,nu=new et,iu=new et,au=new et,Sd=new et,su=new et,vv=new et,ru=new et;class mn extends Tn{constructor(t=new $n,i=new Iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){su.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(Sd.fromBufferAttribute(_,t),f?su.addScaledVector(Sd,g):su.addScaledVector(Sd.sub(i),g))}i.add(su)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(eu.containsPoint(ks.origin)===!1&&(ks.intersectSphere(eu,_v)===null||ks.origin.distanceToSquared(_v)>(t.far-t.near)**2))&&(gv.copy(c).invert(),ks.copy(t.ray).applyMatrix4(gv),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],R=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let U=R,F=D;U<F;U+=3){const N=p.getX(U),z=p.getX(U+1),b=p.getX(U+2);l=ou(this,x,t,s,d,g,_,N,z,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const R=p.getX(S),D=p.getX(S+1),U=p.getX(S+2);l=ou(this,f,t,s,d,g,_,R,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],R=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=R,F=D;U<F;U+=3){const N=U,z=U+1,b=U+2;l=ou(this,x,t,s,d,g,_,N,z,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const R=S,D=S+1,U=S+2;l=ou(this,f,t,s,d,g,_,R,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function kT(r,t,i,s,l,c,f,p){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===ys,p),m===null)return null;ru.copy(p),ru.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(ru);return d<i.near||d>i.far?null:{distance:d,point:ru.clone(),object:r}}function ou(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,nu),r.getVertexPosition(m,iu),r.getVertexPosition(d,au);const g=kT(r,t,i,s,nu,iu,au,vv);if(g){const _=new et;Fi.getBarycoord(vv,nu,iu,au,_),l&&(g.uv=Fi.getInterpolatedAttribute(l,p,m,d,_,new ce)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,p,m,d,_,new ce)),f&&(g.normal=Fi.getInterpolatedAttribute(f,p,m,d,_,new et),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:d,normal:new et,materialIndex:0};Fi.getNormal(nu,iu,au,v.normal),g.face=v,g.barycoord=_}return g}class ty extends In{constructor(t=null,i=1,s=1,l,c,f,p,m,d=Un,g=Un,_,v){super(null,f,p,m,d,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tp extends Jn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zr=new je,xv=new je,lu=[],yv=new tr,XT=new je,fl=new mn,hl=new fo;class jT extends mn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Tp(new Float32Array(s*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,XT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new tr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Zr),yv.copy(t.boundingBox).applyMatrix4(Zr),this.boundingBox.union(yv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new fo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Zr),hl.copy(t.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(hl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let p=0;p<s.length;p++)s[p]=l[f+p]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),t.ray.intersectsSphere(hl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Zr),xv.multiplyMatrices(s,Zr),fl.matrixWorld=xv,fl.raycast(t,lu);for(let f=0,p=lu.length;f<p;f++){const m=lu[f];m.instanceId=c,m.object=this,i.push(m)}lu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Tp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new ty(new Float32Array(l*this.count),l,this.count,Gp,Bi));const c=this.morphTexture.source.data.data;let f=0;for(let d=0;d<s.length;d++)f+=s[d];const p=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=p,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Md=new et,WT=new et,YT=new me;class _s{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Md.subVectors(s,i).cross(WT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Md),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||YT.getNormalMatrix(t),l=this.coplanarPoint(Md).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new fo,qT=new ce(.5,.5),cu=new et;class Kp{constructor(t=new _s,i=new _s,s=new _s,l=new _s,c=new _s,f=new _s){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ki,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],A=c[9],S=c[10],x=c[11],R=c[12],D=c[13],U=c[14],F=c[15];if(l[0].setComponents(d-f,y-g,x-E,F-R).normalize(),l[1].setComponents(d+f,y+g,x+E,F+R).normalize(),l[2].setComponents(d+p,y+_,x+A,F+D).normalize(),l[3].setComponents(d-p,y-_,x-A,F-D).normalize(),s)l[4].setComponents(m,v,S,U).normalize(),l[5].setComponents(d-m,y-v,x-S,F-U).normalize();else if(l[4].setComponents(d-m,y-v,x-S,F-U).normalize(),i===Ki)l[5].setComponents(d+m,y+v,x+S,F+U).normalize();else if(i===El)l[5].setComponents(m,v,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=qT.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cu.x=l.normal.x>0?t.max.x:t.min.x,cu.y=l.normal.y>0?t.max.y:t.min.y,cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Al extends ho{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wu=new et,Du=new et,Sv=new je,dl=new Pu,uu=new fo,Ed=new et,Mv=new et;class ey extends Tn{constructor(t=new $n,i=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)wu.fromBufferAttribute(i,l-1),Du.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=wu.distanceTo(Du);t.setAttribute("lineDistance",new Ti(s,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),uu.copy(s.boundingSphere),uu.applyMatrix4(l),uu.radius+=c,t.ray.intersectsSphere(uu)===!1)return;Sv.copy(l).invert(),dl.copy(t.ray).applyMatrix4(Sv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=d){const x=g.getX(A),R=g.getX(A+1),D=fu(this,t,dl,m,x,R,A);D&&i.push(D)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),x=fu(this,t,dl,m,A,S,E-1);x&&i.push(x)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=d){const x=fu(this,t,dl,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=fu(this,t,dl,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function fu(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(wu.fromBufferAttribute(p,l),Du.fromBufferAttribute(p,c),i.distanceSqToSegment(wu,Du,Ed,Mv)>s)return;Ed.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Ed);if(!(d<t.near||d>t.far))return{distance:d,point:Mv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class ny extends In{constructor(t=[],i=Qs,s,l,c,f,p,m,d,g){super(t,i,s,l,c,f,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iy extends In{constructor(t,i,s,l,c,f,p,m,d){super(t,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rl extends In{constructor(t,i,s=$i,l,c,f,p=Un,m=Un,d,g=Pa,_=1){if(g!==Pa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,p,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZT extends Rl{constructor(t,i=$i,s=Qs,l,c,f=Un,p=Un,m,d=Pa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ay extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zi extends $n{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ti(d,3)),this.setAttribute("normal",new Ti(g,3)),this.setAttribute("uv",new Ti(_,2));function E(A,S,x,R,D,U,F,N,z,b,L){const k=U/z,H=F/b,Z=U/2,J=F/2,it=N/2,Q=z+1,P=b+1;let G=0,st=0;const ht=new et;for(let Mt=0;Mt<P;Mt++){const O=Mt*H-J;for(let j=0;j<Q;j++){const _t=j*k-Z;ht[A]=_t*R,ht[S]=O*D,ht[x]=it,d.push(ht.x,ht.y,ht.z),ht[A]=0,ht[S]=0,ht[x]=N>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(j/z),_.push(1-Mt/b),G+=1}}for(let Mt=0;Mt<b;Mt++)for(let O=0;O<z;O++){const j=v+O+Q*Mt,_t=v+O+Q*(Mt+1),Rt=v+(O+1)+Q*(Mt+1),Lt=v+(O+1)+Q*Mt;m.push(j,_t,Lt),m.push(_t,Rt,Lt),st+=6}p.addGroup(y,st,L),y+=st,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class er extends $n{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,g=m+1,_=t/p,v=i/m,y=[],E=[],A=[],S=[];for(let x=0;x<g;x++){const R=x*v-f;for(let D=0;D<d;D++){const U=D*_-c;E.push(U,-R,0),A.push(0,0,1),S.push(D/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let R=0;R<p;R++){const D=R+d*x,U=R+d*(x+1),F=R+1+d*(x+1),N=R+1+d*x;y.push(D,U,N),y.push(U,F,N)}this.setIndex(y),this.setAttribute("position",new Ti(E,3)),this.setAttribute("normal",new Ti(A,3)),this.setAttribute("uv",new Ti(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.widthSegments,t.heightSegments)}}function lo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=lo(r[i]);for(const l in s)t[l]=s[l]}return t}function KT(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function sy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const QT={clone:lo,merge:kn};var JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=$T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=KT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tA extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ds extends ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qx,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eA extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nA extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ev={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(bv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!bv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function bv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class iA{constructor(t,i,s){const l=this;let c=!1,f=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,p),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,p),f===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const aA=new iA;class Qp{constructor(t){this.manager=t!==void 0?t:aA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Qp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Aa={};class sA extends Error{constructor(t,i){super(t),this.response=i}}class rA extends Qp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Ev.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Aa[t]!==void 0){Aa[t].push({onLoad:i,onProgress:s,onError:l});return}Aa[t]=[],Aa[t].push({onLoad:i,onProgress:s,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Aa[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let A=0;const S=new ReadableStream({start(x){R();function R(){_.read().then(({done:D,value:U})=>{if(D)x.close();else{A+=U.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:y});for(let N=0,z=g.length;N<z;N++){const b=g[N];b.onProgress&&b.onProgress(F)}x.enqueue(U),R()}},D=>{x.error(D)})}}});return new Response(S)}else throw new sA(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,p));case"json":return d.json();default:if(p==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(p),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{Ev.add(`file:${t}`,d);const g=Aa[t];delete Aa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=Aa[t];if(g===void 0)throw this.manager.itemError(t),d;delete Aa[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ry extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const bd=new je,Tv=new et,Av=new et;class oA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Tv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tv),Av.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Av),i.updateMatrixWorld(),bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===El||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hu=new et,du=new Ss,Wi=new et;class oy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hu,du,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(hu,du,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ps=new et,Rv=new ce,Cv=new ce;class Ei extends oy{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,Rv,Cv),i.subVectors(Cv,Rv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Jp extends oy{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lA extends oA{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cA extends ry{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new lA}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class uA extends ry{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Kr=-90,Qr=1;class fA extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Kr,Qr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(Kr,Qr,t,i);c.layers=this.layers,this.add(c);const f=new Ei(Kr,Qr,t,i);f.layers=this.layers,this.add(f);const p=new Ei(Kr,Qr,t,i);p.layers=this.layers,this.add(p);const m=new Ei(Kr,Qr,t,i);m.layers=this.layers,this.add(m);const d=new Ei(Kr,Qr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===El)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class hA extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const wv=new je;class dA{constructor(t,i,s=0,l=1/0){this.ray=new Pu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return wv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wv),this}intersectObject(t,i=!0,s=[]){return Ap(t,this,s,i),s.sort(Dv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Ap(t[l],this,s,i);return s.sort(Dv),s}}function Dv(r,t){return r.distance-t.distance}function Ap(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)Ap(c[f],t,i,!0)}}class Lv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pA extends $s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Uv(r,t,i,s){const l=mA(s);switch(i){case Wx:return r*t;case Gp:return r*t/l.components*l.byteLength;case Vp:return r*t/l.components*l.byteLength;case ro:return r*t*2/l.components*l.byteLength;case kp:return r*t*2/l.components*l.byteLength;case Yx:return r*t*3/l.components*l.byteLength;case zi:return r*t*4/l.components*l.byteLength;case Xp:return r*t*4/l.components*l.byteLength;case yu:case Su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mu:case Eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:case Kd:return Math.max(r,16)*Math.max(t,8)/4;case Yd:case Zd:return Math.max(r,8)*Math.max(t,8)/2;case Qd:case Jd:case tp:case ep:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $d:case np:case ip:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ap:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case rp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case op:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case lp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case cp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case up:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case dp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case pp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case mp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case gp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vp:case xp:case yp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Sp:case Mp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ep:case bp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mA(r){switch(r){case hi:case Vx:return{byteLength:1,components:1};case Sl:case kx:case Oa:return{byteLength:2,components:1};case zp:case Hp:return{byteLength:2,components:4};case $i:case Bp:case Bi:return{byteLength:4,components:1};case Xx:case jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);function ly(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gA(r){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,d,g),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,p),_.length===0)r.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];r.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var _A=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vA=`#ifdef USE_ALPHAHASH
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
#endif`,xA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EA=`#ifdef USE_AOMAP
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
#endif`,bA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
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
#endif`,AA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DA=`#ifdef USE_IRIDESCENCE
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
#endif`,LA=`#ifdef USE_BUMPMAP
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
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HA=`#define PI 3.141592653589793
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
} // validated`,GA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VA=`vec3 transformedNormal = objectNormal;
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
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZA=`#ifdef USE_ENVMAP
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
#endif`,KA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,JA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
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
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`uniform sampler2D dfgLUT;
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
}`,g1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eR=`float getShadowMask() {
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
}`,nR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iR=`#ifdef USE_SKINNING
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
#endif`,aR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sR=`#ifdef USE_SKINNING
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
#endif`,rR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uR=`#ifdef USE_TRANSMISSION
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
#endif`,fR=`#ifdef USE_TRANSMISSION
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
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_R=`uniform sampler2D t2D;
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
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MR=`#include <common>
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
}`,ER=`#if DEPTH_PACKING == 3200
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
}`,bR=`#define DISTANCE
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
}`,TR=`#define DISTANCE
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
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`uniform float scale;
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
}`,wR=`uniform vec3 diffuse;
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
}`,DR=`#include <common>
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
}`,LR=`uniform vec3 diffuse;
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
}`,UR=`#define LAMBERT
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
}`,NR=`#define LAMBERT
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
}`,OR=`#define MATCAP
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
}`,PR=`#define MATCAP
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
}`,IR=`#define NORMAL
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
}`,FR=`#define NORMAL
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
}`,BR=`#define PHONG
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
}`,zR=`#define PHONG
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
}`,HR=`#define STANDARD
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
}`,GR=`#define STANDARD
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
}`,VR=`#define TOON
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
}`,kR=`#define TOON
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
}`,XR=`uniform float size;
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
}`,jR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,YR=`uniform vec3 color;
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
}`,qR=`uniform float rotation;
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
}`,ZR=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:_A,alphahash_pars_fragment:vA,alphamap_fragment:xA,alphamap_pars_fragment:yA,alphatest_fragment:SA,alphatest_pars_fragment:MA,aomap_fragment:EA,aomap_pars_fragment:bA,batching_pars_vertex:TA,batching_vertex:AA,begin_vertex:RA,beginnormal_vertex:CA,bsdfs:wA,iridescence_fragment:DA,bumpmap_pars_fragment:LA,clipping_planes_fragment:UA,clipping_planes_pars_fragment:NA,clipping_planes_pars_vertex:OA,clipping_planes_vertex:PA,color_fragment:IA,color_pars_fragment:FA,color_pars_vertex:BA,color_vertex:zA,common:HA,cube_uv_reflection_fragment:GA,defaultnormal_vertex:VA,displacementmap_pars_vertex:kA,displacementmap_vertex:XA,emissivemap_fragment:jA,emissivemap_pars_fragment:WA,colorspace_fragment:YA,colorspace_pars_fragment:qA,envmap_fragment:ZA,envmap_common_pars_fragment:KA,envmap_pars_fragment:QA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:c1,envmap_vertex:$A,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:u1,lights_toon_pars_fragment:f1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:M1,map_fragment:E1,map_pars_fragment:b1,map_particle_fragment:T1,map_particle_pars_fragment:A1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:C1,morphinstance_vertex:w1,morphcolor_vertex:D1,morphnormal_vertex:L1,morphtarget_pars_vertex:U1,morphtarget_vertex:N1,normal_fragment_begin:O1,normal_fragment_maps:P1,normal_pars_fragment:I1,normal_pars_vertex:F1,normal_vertex:B1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:k1,opaque_fragment:X1,packing:j1,premultiplied_alpha_fragment:W1,project_vertex:Y1,dithering_fragment:q1,dithering_pars_fragment:Z1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:$1,shadowmap_vertex:tR,shadowmask_pars_fragment:eR,skinbase_vertex:nR,skinning_pars_vertex:iR,skinning_vertex:aR,skinnormal_vertex:sR,specularmap_fragment:rR,specularmap_pars_fragment:oR,tonemapping_fragment:lR,tonemapping_pars_fragment:cR,transmission_fragment:uR,transmission_pars_fragment:fR,uv_pars_fragment:hR,uv_pars_vertex:dR,uv_vertex:pR,worldpos_vertex:mR,background_vert:gR,background_frag:_R,backgroundCube_vert:vR,backgroundCube_frag:xR,cube_vert:yR,cube_frag:SR,depth_vert:MR,depth_frag:ER,distance_vert:bR,distance_frag:TR,equirect_vert:AR,equirect_frag:RR,linedashed_vert:CR,linedashed_frag:wR,meshbasic_vert:DR,meshbasic_frag:LR,meshlambert_vert:UR,meshlambert_frag:NR,meshmatcap_vert:OR,meshmatcap_frag:PR,meshnormal_vert:IR,meshnormal_frag:FR,meshphong_vert:BR,meshphong_frag:zR,meshphysical_vert:HR,meshphysical_frag:GR,meshtoon_vert:VR,meshtoon_frag:kR,points_vert:XR,points_frag:jR,shadow_vert:WR,shadow_frag:YR,sprite_vert:qR,sprite_frag:ZR},Ot={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},qi={basic:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:kn([Ot.common,Ot.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:kn([Ot.lights,Ot.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const pu={r:0,b:0,g:0},js=new Ln,KR=new je;function QR(r,t,i,s,l,c){const f=new Te(0);let p=l===!0?0:1,m,d,g=null,_=0,v=null;function y(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const U=R.backgroundBlurriness>0;D=t.get(D,U)}return D}function E(R){let D=!1;const U=y(R);U===null?S(f,p):U&&U.isColor&&(S(U,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,D){const U=y(D);U&&(U.isCubeTexture||U.mapping===Ou)?(d===void 0&&(d=new mn(new Zi(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:lo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),js.copy(D.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(KR.makeRotationFromEuler(js)),d.material.toneMapped=we.getTransfer(U.colorSpace)!==He,(g!==U||_!==U.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new mn(new er(2,2),new ta({name:"BackgroundMaterial",uniforms:lo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=we.getTransfer(U.colorSpace)!==He,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,D){R.getRGB(pu,sy(r)),i.buffers.color.setClear(pu.r,pu.g,pu.b,D,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,D=1){f.set(R),p=D,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,S(f,p)},render:E,addToRenderList:A,dispose:x}}function JR(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(H,Z,J,it,Q){let P=!1;const G=_(H,it,J,Z);c!==G&&(c=G,d(c.object)),P=y(H,it,J,Q),P&&E(H,it,J,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,U(H,Z,J,it),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function _(H,Z,J,it){const Q=it.wireframe===!0;let P=s[Z.id];P===void 0&&(P={},s[Z.id]=P);const G=H.isInstancedMesh===!0?H.id:0;let st=P[G];st===void 0&&(st={},P[G]=st);let ht=st[J.id];ht===void 0&&(ht={},st[J.id]=ht);let Mt=ht[Q];return Mt===void 0&&(Mt=v(m()),ht[Q]=Mt),Mt}function v(H){const Z=[],J=[],it=[];for(let Q=0;Q<i;Q++)Z[Q]=0,J[Q]=0,it[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:it,object:H,attributes:{},index:null}}function y(H,Z,J,it){const Q=c.attributes,P=Z.attributes;let G=0;const st=J.getAttributes();for(const ht in st)if(st[ht].location>=0){const O=Q[ht];let j=P[ht];if(j===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;G++}return c.attributesNum!==G||c.index!==it}function E(H,Z,J,it){const Q={},P=Z.attributes;let G=0;const st=J.getAttributes();for(const ht in st)if(st[ht].location>=0){let O=P[ht];O===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const j={};j.attribute=O,O&&O.data&&(j.data=O.data),Q[ht]=j,G++}c.attributes=Q,c.attributesNum=G,c.index=it}function A(){const H=c.newAttributes;for(let Z=0,J=H.length;Z<J;Z++)H[Z]=0}function S(H){x(H,0)}function x(H,Z){const J=c.newAttributes,it=c.enabledAttributes,Q=c.attributeDivisors;J[H]=1,it[H]===0&&(r.enableVertexAttribArray(H),it[H]=1),Q[H]!==Z&&(r.vertexAttribDivisor(H,Z),Q[H]=Z)}function R(){const H=c.newAttributes,Z=c.enabledAttributes;for(let J=0,it=Z.length;J<it;J++)Z[J]!==H[J]&&(r.disableVertexAttribArray(J),Z[J]=0)}function D(H,Z,J,it,Q,P,G){G===!0?r.vertexAttribIPointer(H,Z,J,Q,P):r.vertexAttribPointer(H,Z,J,it,Q,P)}function U(H,Z,J,it){A();const Q=it.attributes,P=J.getAttributes(),G=Z.defaultAttributeValues;for(const st in P){const ht=P[st];if(ht.location>=0){let Mt=Q[st];if(Mt===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const O=Mt.normalized,j=Mt.itemSize,_t=t.get(Mt);if(_t===void 0)continue;const Rt=_t.buffer,Lt=_t.type,tt=_t.bytesPerElement,mt=Lt===r.INT||Lt===r.UNSIGNED_INT||Mt.gpuType===Bp;if(Mt.isInterleavedBufferAttribute){const Et=Mt.data,Pt=Et.stride,Zt=Mt.offset;if(Et.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ht.locationSize;Qt++)x(ht.location+Qt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Qt=0;Qt<ht.locationSize;Qt++)S(ht.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Qt=0;Qt<ht.locationSize;Qt++)D(ht.location+Qt,j/ht.locationSize,Lt,O,Pt*tt,(Zt+j/ht.locationSize*Qt)*tt,mt)}else{if(Mt.isInstancedBufferAttribute){for(let Et=0;Et<ht.locationSize;Et++)x(ht.location+Et,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Et=0;Et<ht.locationSize;Et++)S(ht.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Et=0;Et<ht.locationSize;Et++)D(ht.location+Et,j/ht.locationSize,Lt,O,j*tt,j/ht.locationSize*Et*tt,mt)}}else if(G!==void 0){const O=G[st];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ht.location,O);break;case 3:r.vertexAttrib3fv(ht.location,O);break;case 4:r.vertexAttrib4fv(ht.location,O);break;default:r.vertexAttrib1fv(ht.location,O)}}}}R()}function F(){L();for(const H in s){const Z=s[H];for(const J in Z){const it=Z[J];for(const Q in it){const P=it[Q];for(const G in P)g(P[G].object),delete P[G];delete it[Q]}}delete s[H]}}function N(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const J in Z){const it=Z[J];for(const Q in it){const P=it[Q];for(const G in P)g(P[G].object),delete P[G];delete it[Q]}}delete s[H.id]}function z(H){for(const Z in s){const J=s[Z];for(const it in J){const Q=J[it];if(Q[H.id]===void 0)continue;const P=Q[H.id];for(const G in P)g(P[G].object),delete P[G];delete Q[H.id]}}}function b(H){for(const Z in s){const J=s[Z],it=H.isInstancedMesh===!0?H.id:0,Q=J[it];if(Q!==void 0){for(const P in Q){const G=Q[P];for(const st in G)g(G[st].object),delete G[st];delete Q[P]}delete J[it],Object.keys(J).length===0&&delete s[Z]}}}function L(){k(),f=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function $R(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function p(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function tC(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==zi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===Oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==hi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Bi&&!b)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ne("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:U,maxSamples:F,samples:N}}function eC(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new _s,p=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):d();else{const R=c?0:s,D=R*4;let U=x.clippingState||null;m.value=U,U=g(E,v,D,y);for(let F=0;F!==D;++F)U[F]=i[F];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const x=y+A*4,R=v.matrixWorldInverse;p.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,U=y;D!==A;++D,U+=4)f.copy(_[D]).applyMatrix4(R,p),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const xs=4,Nv=[.125,.215,.35,.446,.526,.582],qs=20,nC=256,pl=new Jp,Ov=new Te;let Td=null,Ad=0,Rd=0,Cd=!1;const iC=new et;class Pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=iC}=c;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Oa,format:zi,colorSpace:oo,depthBuffer:!1},l=Iv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aC(c)),this._blurMaterial=rC(c,t,i),this._ggxMaterial=sC(c,t,i)}return l}_compileMaterial(t){const i=new mn(new $n,t);this._renderer.compile(i,pl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ei(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Ov),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Zi,new Iu({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,x=!0):(S.color.copy(Ov),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,d[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const F=this._cubeSize;Jr(l,U*F,D>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(A,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Qs||t.mapping===so;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,pl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:E}=this,A=this._sizeLods[s],S=3*A*(s>E-xs?s-E+xs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Jr(c,S,x,3*A,2*A),l.setRenderTarget(c),l.render(p,pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Jr(t,S,x,3*A,2*A),l.setRenderTarget(t),l.render(p,pl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=d;const v=d.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*qs-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):qs;S>qs&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qs}`);const x=[];let R=0;for(let z=0;z<qs;++z){const b=z/A,L=Math.exp(-b*b/2);x.push(L),z===0?R+=L:z<S&&(R+=2*L)}for(let z=0;z<x.length;z++)x[z]=x[z]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const U=this._sizeLods[l],F=3*U*(l>D-xs?l-D+xs:0),N=4*(this._cubeSize-U);Jr(i,F,N,3*U,2*U),m.setRenderTarget(i),m.render(_,pl)}}function aC(r){const t=[],i=[],s=[];let l=r;const c=r-xs+1+Nv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-xs?m=Nv[f-r+xs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,S=2,x=1,R=new Float32Array(A*E*y),D=new Float32Array(S*E*y),U=new Float32Array(x*E*y);for(let N=0;N<y;N++){const z=N%3*2/3-1,b=N>2?0:-1,L=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];R.set(L,A*E*N),D.set(v,S*E*N);const k=[N,N,N,N,N,N];U.set(k,x*E*N)}const F=new $n;F.setAttribute("position",new Jn(R,A)),F.setAttribute("uv",new Jn(D,S)),F.setAttribute("faceIndex",new Jn(U,x)),s.push(new mn(F,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Iv(r,t,i){const s=new Ji(r,t,i);return s.texture.mapping=Ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function sC(r,t,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function rC(r,t,i){const s=new Float32Array(qs),l=new et(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Fv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Bv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}class cy extends Ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ny(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zi(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:La});c.uniforms.tEquirect.value=i;const f=new mn(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=gn),new fA(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function oC(r){let t=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?f(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Jh||y===$h)if(t.has(v)){const E=t.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new cy(E.height);return A.fromEquirectangularTexture(r,v),t.set(v,A),v.addEventListener("dispose",d),p(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const y=v.mapping,E=y===Jh||y===$h,A=y===Qs||y===so;if(E||A){let S=i.get(v);const x=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new Pv(r)),S=E?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const R=v.image;return E&&R&&R.height>0||A&&R&&m(R)?(s===null&&(s=new Pv(r)),S=E?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function p(v,y){return y===Jh?v.mapping=Qs:y===$h&&(v.mapping=so),v}function m(v){let y=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&y++;return y===E}function d(v){const y=v.target;y.removeEventListener("dispose",d);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function lC(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Cu("WebGLRenderer: "+s+" extension not supported."),l}}}function cC(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(y!==null){const R=y.array;A=y.version;for(let D=0,U=R.length;D<U;D+=3){const F=R[D+0],N=R[D+1],z=R[D+2];v.push(F,N,N,z,z,F)}}else{const R=E.array;A=E.version;for(let D=0,U=R.length/3-1;D<U;D+=3){const F=D+0,N=D+1,z=D+2;v.push(F,N,N,z,z,F)}}const S=new(E.count>=65535?$x:Jx)(v,1);S.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function uC(r,t,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function d(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*f,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];i.update(S,s,1)}function _(v,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/f,y[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,E);let x=0;for(let R=0;R<E;R++)x+=y[R]*A[R];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function fC(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ce("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function hC(r,t,i){const s=new WeakMap,l=new an;function c(f,p,m){const d=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(p);if(v===void 0||v.count!==_){let L=function(){z.dispose(),s.delete(p),p.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const y=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,A=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],x=p.morphAttributes.normal||[],R=p.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),A===!0&&(D=3);let U=p.attributes.position.count*D,F=1;U>t.maxTextureSize&&(F=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*F*4*_),z=new Kx(N,U,F,_);z.type=Bi,z.needsUpdate=!0;const b=D*4;for(let k=0;k<_;k++){const H=S[k],Z=x[k],J=R[k],it=U*F*4*k;for(let Q=0;Q<H.count;Q++){const P=Q*b;y===!0&&(l.fromBufferAttribute(H,Q),N[it+P+0]=l.x,N[it+P+1]=l.y,N[it+P+2]=l.z,N[it+P+3]=0),E===!0&&(l.fromBufferAttribute(Z,Q),N[it+P+4]=l.x,N[it+P+5]=l.y,N[it+P+6]=l.z,N[it+P+7]=0),A===!0&&(l.fromBufferAttribute(J,Q),N[it+P+8]=l.x,N[it+P+9]=l.y,N[it+P+10]=l.z,N[it+P+11]=J.itemSize===4?l.w:1)}}v={count:_,texture:z,size:new ce(U,F)},s.set(p,v),p.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let y=0;for(let A=0;A<d.length;A++)y+=d[A];const E=p.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function dC(r,t,i,s,l){let c=new WeakMap;function f(d){const g=l.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return v}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const pC={[Ox]:"LINEAR_TONE_MAPPING",[Px]:"REINHARD_TONE_MAPPING",[Ix]:"CINEON_TONE_MAPPING",[Fx]:"ACES_FILMIC_TONE_MAPPING",[zx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function mC(r,t,i,s,l){const c=new Ji(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ji(t,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),p=new $n;p.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const m=new tA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mn(p,m),g=new Jp(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,A=null,S=[],x=!1;this.setSize=function(R,D){c.setSize(R,D),f.setSize(R,D);for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(R,D)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const D=c.width,U=c.height;for(let F=0;F<S.length;F++){const N=S[F];N.setSize&&N.setSize(D,U)}},this.begin=function(R,D){if(y||R.toneMapping===Qi&&S.length===0)return!1;if(A=D,D!==null){const U=D.width,F=D.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return x===!1&&R.setRenderTarget(c),E=R.toneMapping,R.toneMapping=Qi,!0},this.hasRenderPass=function(){return x},this.end=function(R,D){R.toneMapping=E,y=!0;let U=c,F=f;for(let N=0;N<S.length;N++){const z=S[N];if(z.enabled!==!1&&(z.render(R,F,U,D),z.needsSwap!==!1)){const b=U;U=F,F=b}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,m.defines={},we.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const N=pC[v];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(A),R.render(d,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const uy=new In,Rp=new Rl(1,1),fy=new Kx,hy=new DT,dy=new ny,zv=[],Hv=[],Gv=new Float32Array(16),Vv=new Float32Array(9),kv=new Float32Array(4);function po(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=zv[l];if(c===void 0&&(c=new Float32Array(l),zv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Bu(r,t){let i=Hv[t];i===void 0&&(i=new Int32Array(t),Hv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function gC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function _C(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function vC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function xC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function yC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(Sn(i,s))return;kv.set(s),r.uniformMatrix2fv(this.addr,!1,kv),Mn(i,s)}}function SC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(Sn(i,s))return;Vv.set(s),r.uniformMatrix3fv(this.addr,!1,Vv),Mn(i,s)}}function MC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(Sn(i,s))return;Gv.set(s),r.uniformMatrix4fv(this.addr,!1,Gv),Mn(i,s)}}function EC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function bC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function TC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function AC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function RC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function CC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function wC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function DC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function LC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Rp.compareFunction=i.isReversedDepthBuffer()?Wp:jp,c=Rp):c=uy,i.setTexture2D(t||c,l)}function UC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||hy,l)}function NC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||dy,l)}function OC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fy,l)}function PC(r){switch(r){case 5126:return gC;case 35664:return _C;case 35665:return vC;case 35666:return xC;case 35674:return yC;case 35675:return SC;case 35676:return MC;case 5124:case 35670:return EC;case 35667:case 35671:return bC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return RC;case 36294:return CC;case 36295:return wC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return OC}}function IC(r,t){r.uniform1fv(this.addr,t)}function FC(r,t){const i=po(t,this.size,2);r.uniform2fv(this.addr,i)}function BC(r,t){const i=po(t,this.size,3);r.uniform3fv(this.addr,i)}function zC(r,t){const i=po(t,this.size,4);r.uniform4fv(this.addr,i)}function HC(r,t){const i=po(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function GC(r,t){const i=po(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function VC(r,t){const i=po(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function kC(r,t){r.uniform1iv(this.addr,t)}function XC(r,t){r.uniform2iv(this.addr,t)}function jC(r,t){r.uniform3iv(this.addr,t)}function WC(r,t){r.uniform4iv(this.addr,t)}function YC(r,t){r.uniform1uiv(this.addr,t)}function qC(r,t){r.uniform2uiv(this.addr,t)}function ZC(r,t){r.uniform3uiv(this.addr,t)}function KC(r,t){r.uniform4uiv(this.addr,t)}function QC(r,t,i){const s=this.cache,l=t.length,c=Bu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Rp:f=uy;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function JC(r,t,i){const s=this.cache,l=t.length,c=Bu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||hy,c[f])}function $C(r,t,i){const s=this.cache,l=t.length,c=Bu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||dy,c[f])}function tw(r,t,i){const s=this.cache,l=t.length,c=Bu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||fy,c[f])}function ew(r){switch(r){case 5126:return IC;case 35664:return FC;case 35665:return BC;case 35666:return zC;case 35674:return HC;case 35675:return GC;case 35676:return VC;case 5124:case 35670:return kC;case 35667:case 35671:return XC;case 35668:case 35672:return jC;case 35669:case 35673:return WC;case 5125:return YC;case 36294:return qC;case 36295:return ZC;case 36296:return KC;case 35678:case 36198:case 36298:case 36306:case 35682:return QC;case 35679:case 36299:case 36307:return JC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return tw}}class nw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=PC(i.type)}}class iw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ew(i.type)}}class aw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Xv(r,t){r.seq.push(t),r.map[t.id]=t}function sw(r,t,i){const s=r.name,l=s.length;for(wd.lastIndex=0;;){const c=wd.exec(s),f=wd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Xv(i,d===void 0?new nw(p,r,t):new iw(p,r,t));break}else{let _=i.map[p];_===void 0&&(_=new aw(p),Xv(i,_)),i=_}}}class bu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);sw(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function jv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const rw=37297;let ow=0;function lw(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Wv=new me;function cw(r){we._getMatrix(Wv,we.workingColorSpace,r);const t=`mat3( ${Wv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case Au:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Yv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+lw(r.getShaderSource(t),p)}else return c}function uw(r,t){const i=cw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fw={[Ox]:"Linear",[Px]:"Reinhard",[Ix]:"Cineon",[Fx]:"ACESFilmic",[zx]:"AgX",[Hx]:"Neutral",[Bx]:"Custom"};function hw(r,t){const i=fw[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mu=new et;function dw(){we.getLuminanceCoefficients(mu);const r=mu.x.toFixed(4),t=mu.y.toFixed(4),i=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function mw(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gw(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function _l(r){return r!==""}function qv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(r){return r.replace(_w,xw)}const vw=new Map;function xw(r,t){let i=ge[t];if(i===void 0){const s=vw.get(t);if(s!==void 0)i=ge[s],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Cp(i)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(r){return r.replace(yw,Sw)}function Sw(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Qv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const Mw={[xu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function Ew(r){return Mw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bw={[Qs]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function Tw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Aw={[so]:"ENVMAP_MODE_REFRACTION"};function Rw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Aw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[Yb]:"ENVMAP_BLENDING_MIX",[qb]:"ENVMAP_BLENDING_ADD"};function ww(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[r.combine]||"ENVMAP_BLENDING_NONE"}function Dw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Lw(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=Ew(i),d=Tw(i),g=Rw(i),_=ww(i),v=Dw(i),y=pw(i),E=mw(c),A=l.createProgram();let S,x,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(_l).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(_l).join(`
`),x.length>0&&(x+=`
`)):(S=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),x=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?ge.tonemapping_pars_fragment:"",i.toneMapping!==Qi?hw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,uw("linearToOutputTexel",i.outputColorSpace),dw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),f=Cp(f),f=qv(f,i),f=Zv(f,i),p=Cp(p),p=qv(p,i),p=Zv(p,i),f=Kv(f),p=Kv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=R+S+f,U=R+x+p,F=jv(l,l.VERTEX_SHADER,D),N=jv(l,l.FRAGMENT_SHADER,U);l.attachShader(A,F),l.attachShader(A,N),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(A)||"",J=l.getShaderInfoLog(F)||"",it=l.getShaderInfoLog(N)||"",Q=Z.trim(),P=J.trim(),G=it.trim();let st=!0,ht=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,F,N);else{const Mt=Yv(l,F,"vertex"),O=Yv(l,N,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+Mt+`
`+O)}else Q!==""?ne("WebGLProgram: Program Info Log:",Q):(P===""||G==="")&&(ht=!1);ht&&(H.diagnostics={runnable:st,programLog:Q,vertexShader:{log:P,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(F),l.deleteShader(N),b=new bu(l,A),L=gw(l,A)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(A,rw)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ow++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=N,this}let Uw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Ow(t),i.set(t,s)),s}}class Ow{constructor(t){this.id=Uw++,this.code=t,this.usedTimes=0}}function Pw(r,t,i,s,l,c){const f=new Zp,p=new Nw,m=new Set,d=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function A(b,L,k,H,Z){const J=H.fog,it=Z.geometry,Q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=t.get(b.envMap||Q,P),st=G&&G.mapping===Ou?G.image.height:null,ht=y[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&ne("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Mt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,O=Mt!==void 0?Mt.length:0;let j=0;it.morphAttributes.position!==void 0&&(j=1),it.morphAttributes.normal!==void 0&&(j=2),it.morphAttributes.color!==void 0&&(j=3);let _t,Rt,Lt,tt;if(ht){const Re=qi[ht];_t=Re.vertexShader,Rt=Re.fragmentShader}else _t=b.vertexShader,Rt=b.fragmentShader,p.update(b),Lt=p.getVertexShaderID(b),tt=p.getFragmentShaderID(b);const mt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Pt=Z.isInstancedMesh===!0,Zt=Z.isBatchedMesh===!0,Qt=!!b.map,Ne=!!b.matcap,ue=!!G,_e=!!b.aoMap,Ae=!!b.lightMap,se=!!b.bumpMap,Ye=!!b.normalMap,X=!!b.displacementMap,Ke=!!b.emissiveMap,be=!!b.metalnessMap,Pe=!!b.roughnessMap,Yt=b.anisotropy>0,B=b.clearcoat>0,T=b.dispersion>0,K=b.iridescence>0,vt=b.sheen>0,St=b.transmission>0,pt=Yt&&!!b.anisotropyMap,jt=B&&!!b.clearcoatMap,Dt=B&&!!b.clearcoatNormalMap,Jt=B&&!!b.clearcoatRoughnessMap,ee=K&&!!b.iridescenceMap,At=K&&!!b.iridescenceThicknessMap,bt=vt&&!!b.sheenColorMap,Ft=vt&&!!b.sheenRoughnessMap,It=!!b.specularMap,Bt=!!b.specularColorMap,he=!!b.specularIntensityMap,q=St&&!!b.transmissionMap,wt=St&&!!b.thicknessMap,Ct=!!b.gradientMap,zt=!!b.alphaMap,Tt=b.alphaTest>0,dt=!!b.alphaHash,Gt=!!b.extensions;let ae=Qi;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Fe={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Rt,defines:b.defines,customVertexShaderID:Lt,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:Zt,batchingColor:Zt&&Z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&Z.instanceColor!==null,instancingMorph:Pt&&Z.morphTexture!==null,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:oo,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:Ne,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:st,aoMap:_e,lightMap:Ae,bumpMap:se,normalMap:Ye,displacementMap:X,emissiveMap:Ke,normalMapObjectSpace:Ye&&b.normalMapType===Qb,normalMapTangentSpace:Ye&&b.normalMapType===qx,metalnessMap:be,roughnessMap:Pe,anisotropy:Yt,anisotropyMap:pt,clearcoat:B,clearcoatMap:jt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Jt,dispersion:T,iridescence:K,iridescenceMap:ee,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:It,specularColorMap:Bt,specularIntensityMap:he,transmission:St,transmissionMap:q,thicknessMap:wt,gradientMap:Ct,opaque:b.transparent===!1&&b.blending===no&&b.alphaToCoverage===!1,alphaMap:zt,alphaTest:Tt,alphaHash:dt,combine:b.combine,mapUv:Qt&&E(b.map.channel),aoMapUv:_e&&E(b.aoMap.channel),lightMapUv:Ae&&E(b.lightMap.channel),bumpMapUv:se&&E(b.bumpMap.channel),normalMapUv:Ye&&E(b.normalMap.channel),displacementMapUv:X&&E(b.displacementMap.channel),emissiveMapUv:Ke&&E(b.emissiveMap.channel),metalnessMapUv:be&&E(b.metalnessMap.channel),roughnessMapUv:Pe&&E(b.roughnessMap.channel),anisotropyMapUv:pt&&E(b.anisotropyMap.channel),clearcoatMapUv:jt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(b.sheenRoughnessMap.channel),specularMapUv:It&&E(b.specularMap.channel),specularColorMapUv:Bt&&E(b.specularColorMap.channel),specularIntensityMapUv:he&&E(b.specularIntensityMap.channel),transmissionMapUv:q&&E(b.transmissionMap.channel),thicknessMapUv:wt&&E(b.thicknessMap.channel),alphaMapUv:zt&&E(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ye||Yt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(Qt||zt),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||it.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:Z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===He,decodeVideoTextureEmissive:Ke&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===He,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bi,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function S(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)L.push(k),L.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(x(L,b),R(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function x(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function R(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),b.push(f.mask)}function D(b){const L=y[b.type];let k;if(L){const H=qi[L];k=QT.clone(H.uniforms)}else k=b.uniforms;return k}function U(b,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new Lw(r,L,b,l),d.push(k),g.set(L,k)),k}function F(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function N(b){p.remove(b)}function z(){p.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:D,acquireProgram:U,releaseProgram:F,releaseShaderCache:N,programs:d,dispose:z}}function Iw(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function Fw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Jv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $v(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function p(v,y,E,A,S,x){let R=r[t];return R===void 0?(R={id:v.id,object:v,geometry:y,material:E,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:x},r[t]=R):(R.id=v.id,R.object=v,R.geometry=y,R.material=E,R.materialVariant=f(v),R.groupOrder=A,R.renderOrder=v.renderOrder,R.z=S,R.group=x),t++,R}function m(v,y,E,A,S,x){const R=p(v,y,E,A,S,x);E.transmission>0?s.push(R):E.transparent===!0?l.push(R):i.push(R)}function d(v,y,E,A,S,x){const R=p(v,y,E,A,S,x);E.transmission>0?s.unshift(R):E.transparent===!0?l.unshift(R):i.unshift(R)}function g(v,y){i.length>1&&i.sort(v||Fw),s.length>1&&s.sort(y||Jv),l.length>1&&l.sort(y||Jv)}function _(){for(let v=t,y=r.length;v<y;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:_,sort:g}}function Bw(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new $v,r.set(s,[f])):l>=c.length?(f=new $v,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function zw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Te};break;case"SpotLight":i={position:new et,direction:new et,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function Hw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Gw=0;function Vw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kw(r){const t=new zw,i=Hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new et);const l=new et,c=new je,f=new je;function p(d){let g=0,_=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,E=0,A=0,S=0,x=0,R=0,D=0,U=0,F=0,N=0,z=0;d.sort(Vw);for(let L=0,k=d.length;L<k;L++){const H=d[L],Z=H.color,J=H.intensity,it=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ro?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Z.r*J,_+=Z.g*J,v+=Z.b*J;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],J);z++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=Q,s.directionalShadowMatrix[y]=H.shadow.matrix,R++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(Z).multiplyScalar(J),P.distance=it,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[A]=P;const G=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,G.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[A]=G.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.spotShadow[A]=st,s.spotShadowMap[A]=Q,U++}A++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(Z).multiplyScalar(J),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=P,S++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,st.shadowCameraNear=G.camera.near,st.shadowCameraFar=G.camera.far,s.pointShadow[E]=st,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=H.shadow.matrix,D++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(J),P.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[x]=P,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const b=s.hash;(b.directionalLength!==y||b.pointLength!==E||b.spotLength!==A||b.rectAreaLength!==S||b.hemiLength!==x||b.numDirectionalShadows!==R||b.numPointShadows!==D||b.numSpotShadows!==U||b.numSpotMaps!==F||b.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=z,b.directionalLength=y,b.pointLength=E,b.spotLength=A,b.rectAreaLength=S,b.hemiLength=x,b.numDirectionalShadows=R,b.numPointShadows=D,b.numSpotShadows=U,b.numSpotMaps=F,b.numLightProbes=z,s.version=Gw++)}function m(d,g){let _=0,v=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const D=d[x];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(D.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const U=s.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:p,setupView:m,state:s}}function tx(r){const t=new kw(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function Xw(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new tx(r),t.set(l,[p])):c>=f.length?(p=new tx(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
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
}`,Yw=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],qw=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],ex=new je,ml=new et,Dd=new et;function Zw(r,t,i){let s=new Kp;const l=new ce,c=new ce,f=new an,p=new eA,m=new nA,d={},g=i.maxTextureSize,_={[ys]:Qn,[Qn]:ys,[bi]:bi},v=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:jw,fragmentShader:Ww}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new mn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let x=this.type;this.render=function(N,z,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Cb&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xu);const L=r.getRenderTarget(),k=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(La),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=x!==this.type;J&&z.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(Q=>Q.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,Q=N.length;it<Q;it++){const P=N[it],G=P.shadow;if(G===void 0){ne("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const st=G.getFrameExtents();l.multiply(st),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/st.x),l.x=c.x*st.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/st.y),l.y=c.y*st.y,G.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ht,G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===gl){if(P.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ji(l.x,l.y,{format:ro,type:Oa,minFilter:gn,magFilter:gn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new Rl(l.x,l.y,Bi),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Pa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else P.isPointLight?(G.map=new cy(l.x),G.map.depthTexture=new ZT(l.x,$i)):(G.map=new Ji(l.x,l.y),G.map.depthTexture=new Rl(l.x,l.y,$i)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Pa,this.type===xu?(G.map.depthTexture.compareFunction=ht?Wp:jp,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un);G.camera.updateProjectionMatrix()}const Mt=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Mt;O++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,O),r.clear();else{O===0&&(r.setRenderTarget(G.map),r.clear());const j=G.getViewport(O);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Z.viewport(f)}if(P.isPointLight){const j=G.camera,_t=G.matrix,Rt=P.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),ml.setFromMatrixPosition(P.matrixWorld),j.position.copy(ml),Dd.copy(j.position),Dd.add(Yw[O]),j.up.copy(qw[O]),j.lookAt(Dd),j.updateMatrixWorld(),_t.makeTranslation(-ml.x,-ml.y,-ml.z),ex.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ex,j.coordinateSystem,j.reversedDepth)}else G.updateMatrices(P);s=G.getFrustum(),U(z,b,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===gl&&R(G,b),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(L,k,H)};function R(N,z){const b=t.update(A);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ji(l.x,l.y,{format:ro,type:Oa})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,b,v,A,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,b,y,A,null)}function D(N,z,b,L){let k=null;const H=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)k=H;else if(k=b.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=k.uuid,J=z.uuid;let it=d[Z];it===void 0&&(it={},d[Z]=it);let Q=it[J];Q===void 0&&(Q=k.clone(),it[J]=Q,z.addEventListener("dispose",F)),k=Q}if(k.visible=z.visible,k.wireframe=z.wireframe,L===gl?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:_[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=r.properties.get(k);Z.light=b}return k}function U(N,z,b,L,k){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===gl)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const J=t.update(N),it=N.material;if(Array.isArray(it)){const Q=J.groups;for(let P=0,G=Q.length;P<G;P++){const st=Q[P],ht=it[st.materialIndex];if(ht&&ht.visible){const Mt=D(N,ht,L,k);N.onBeforeShadow(r,N,z,b,J,Mt,st),r.renderBufferDirect(b,null,J,Mt,N,st),N.onAfterShadow(r,N,z,b,J,Mt,st)}}}else if(it.visible){const Q=D(N,it,L,k);N.onBeforeShadow(r,N,z,b,J,Q,null),r.renderBufferDirect(b,null,J,Q,N,null),N.onAfterShadow(r,N,z,b,J,Q,null)}}const Z=N.children;for(let J=0,it=Z.length;J<it;J++)U(Z[J],z,b,L,k)}function F(N){N.target.removeEventListener("dispose",F);for(const b in d){const L=d[b],k=N.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function Kw(r,t){function i(){let q=!1;const wt=new an;let Ct=null;const zt=new an(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!q&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){q=Tt},setClear:function(Tt,dt,Gt,ae,Fe){Fe===!0&&(Tt*=ae,dt*=ae,Gt*=ae),wt.set(Tt,dt,Gt,ae),zt.equals(wt)===!1&&(r.clearColor(Tt,dt,Gt,ae),zt.copy(wt))},reset:function(){q=!1,Ct=null,zt.set(-1,0,0,0)}}}function s(){let q=!1,wt=!1,Ct=null,zt=null,Tt=null;return{setReversed:function(dt){if(wt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),wt=dt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return wt},setTest:function(dt){dt?mt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(dt){Ct!==dt&&!q&&(r.depthMask(dt),Ct=dt)},setFunc:function(dt){if(wt&&(dt=lT[dt]),zt!==dt){switch(dt){case Bd:r.depthFunc(r.NEVER);break;case zd:r.depthFunc(r.ALWAYS);break;case Hd:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case Gd:r.depthFunc(r.EQUAL);break;case Vd:r.depthFunc(r.GEQUAL);break;case kd:r.depthFunc(r.GREATER);break;case Xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=dt}},setLocked:function(dt){q=dt},setClear:function(dt){Tt!==dt&&(Tt=dt,wt&&(dt=1-dt),r.clearDepth(dt))},reset:function(){q=!1,Ct=null,zt=null,Tt=null,wt=!1}}}function l(){let q=!1,wt=null,Ct=null,zt=null,Tt=null,dt=null,Gt=null,ae=null,Fe=null;return{setTest:function(Re){q||(Re?mt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Re){wt!==Re&&!q&&(r.stencilMask(Re),wt=Re)},setFunc:function(Re,Fn,Ri){(Ct!==Re||zt!==Fn||Tt!==Ri)&&(r.stencilFunc(Re,Fn,Ri),Ct=Re,zt=Fn,Tt=Ri)},setOp:function(Re,Fn,Ri){(dt!==Re||Gt!==Fn||ae!==Ri)&&(r.stencilOp(Re,Fn,Ri),dt=Re,Gt=Fn,ae=Ri)},setLocked:function(Re){q=Re},setClear:function(Re){Fe!==Re&&(r.clearStencil(Re),Fe=Re)},reset:function(){q=!1,wt=null,Ct=null,zt=null,Tt=null,dt=null,Gt=null,ae=null,Fe=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,R=null,D=null,U=null,F=null,N=null,z=new Te(0,0,0),b=0,L=!1,k=null,H=null,Z=null,J=null,it=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(st)[1]),P=G>=1):st.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),P=G>=2);let ht=null,Mt={};const O=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),_t=new an().fromArray(O),Rt=new an().fromArray(j);function Lt(q,wt,Ct,zt){const Tt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(q,dt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<Ct;Gt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(wt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return dt}const tt={};tt[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),mt(r.DEPTH_TEST),f.setFunc(ao),se(!1),Ye(Z_),mt(r.CULL_FACE),_e(La);function mt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Et(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Pt(q,wt){return _[q]!==wt?(r.bindFramebuffer(q,wt),_[q]=wt,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=wt),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Zt(q,wt){let Ct=y,zt=!1;if(q){Ct=v.get(wt),Ct===void 0&&(Ct=[],v.set(wt,Ct));const Tt=q.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Gt=Tt.length;dt<Gt;dt++)Ct[dt]=r.COLOR_ATTACHMENT0+dt;Ct.length=Tt.length,zt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Ct)}function Qt(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const Ne={[Ys]:r.FUNC_ADD,[Db]:r.FUNC_SUBTRACT,[Lb]:r.FUNC_REVERSE_SUBTRACT};Ne[Ub]=r.MIN,Ne[Nb]=r.MAX;const ue={[Ob]:r.ZERO,[Pb]:r.ONE,[Ib]:r.SRC_COLOR,[Id]:r.SRC_ALPHA,[Vb]:r.SRC_ALPHA_SATURATE,[Hb]:r.DST_COLOR,[Bb]:r.DST_ALPHA,[Fb]:r.ONE_MINUS_SRC_COLOR,[Fd]:r.ONE_MINUS_SRC_ALPHA,[Gb]:r.ONE_MINUS_DST_COLOR,[zb]:r.ONE_MINUS_DST_ALPHA,[kb]:r.CONSTANT_COLOR,[Xb]:r.ONE_MINUS_CONSTANT_COLOR,[jb]:r.CONSTANT_ALPHA,[Wb]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(q,wt,Ct,zt,Tt,dt,Gt,ae,Fe,Re){if(q===La){A===!0&&(Et(r.BLEND),A=!1);return}if(A===!1&&(mt(r.BLEND),A=!0),q!==wb){if(q!==S||Re!==L){if((x!==Ys||U!==Ys)&&(r.blendEquation(r.FUNC_ADD),x=Ys,U=Ys),Re)switch(q){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K_:r.blendFunc(r.ONE,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",q);break}else switch(q){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",q);break}R=null,D=null,F=null,N=null,z.set(0,0,0),b=0,S=q,L=Re}return}Tt=Tt||wt,dt=dt||Ct,Gt=Gt||zt,(wt!==x||Tt!==U)&&(r.blendEquationSeparate(Ne[wt],Ne[Tt]),x=wt,U=Tt),(Ct!==R||zt!==D||dt!==F||Gt!==N)&&(r.blendFuncSeparate(ue[Ct],ue[zt],ue[dt],ue[Gt]),R=Ct,D=zt,F=dt,N=Gt),(ae.equals(z)===!1||Fe!==b)&&(r.blendColor(ae.r,ae.g,ae.b,Fe),z.copy(ae),b=Fe),S=q,L=!1}function Ae(q,wt){q.side===bi?Et(r.CULL_FACE):mt(r.CULL_FACE);let Ct=q.side===Qn;wt&&(Ct=!Ct),se(Ct),q.blending===no&&q.transparent===!1?_e(La):_e(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const zt=q.stencilWrite;p.setTest(zt),zt&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ke(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){k!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),k=q)}function Ye(q){q!==Ab?(mt(r.CULL_FACE),q!==H&&(q===Z_?r.cullFace(r.BACK):q===Rb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),H=q}function X(q){q!==Z&&(P&&r.lineWidth(q),Z=q)}function Ke(q,wt,Ct){q?(mt(r.POLYGON_OFFSET_FILL),(J!==wt||it!==Ct)&&(J=wt,it=Ct,f.getReversed()&&(wt=-wt),r.polygonOffset(wt,Ct))):Et(r.POLYGON_OFFSET_FILL)}function be(q){q?mt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function Pe(q){q===void 0&&(q=r.TEXTURE0+Q-1),ht!==q&&(r.activeTexture(q),ht=q)}function Yt(q,wt,Ct){Ct===void 0&&(ht===null?Ct=r.TEXTURE0+Q-1:Ct=ht);let zt=Mt[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[Ct]=zt),(zt.type!==q||zt.texture!==wt)&&(ht!==Ct&&(r.activeTexture(Ct),ht=Ct),r.bindTexture(q,wt||tt[q]),zt.type=q,zt.texture=wt)}function B(){const q=Mt[ht];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function vt(){try{r.texSubImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function St(){try{r.texSubImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function Dt(){try{r.texStorage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function Jt(){try{r.texStorage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function ee(){try{r.texImage2D(...arguments)}catch(q){Ce("WebGLState:",q)}}function At(){try{r.texImage3D(...arguments)}catch(q){Ce("WebGLState:",q)}}function bt(q){_t.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Ft(q){Rt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Rt.copy(q))}function It(q,wt){let Ct=d.get(wt);Ct===void 0&&(Ct=new WeakMap,d.set(wt,Ct));let zt=Ct.get(q);zt===void 0&&(zt=r.getUniformBlockIndex(wt,q.name),Ct.set(q,zt))}function Bt(q,wt){const zt=d.get(wt).get(q);m.get(wt)!==zt&&(r.uniformBlockBinding(wt,zt,q.__bindingPointIndex),m.set(wt,zt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ht=null,Mt={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,R=null,D=null,U=null,F=null,N=null,z=new Te(0,0,0),b=0,L=!1,k=null,H=null,Z=null,J=null,it=null,_t.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:mt,disable:Et,bindFramebuffer:Pt,drawBuffers:Zt,useProgram:Qt,setBlending:_e,setMaterial:Ae,setFlipSided:se,setCullFace:Ye,setLineWidth:X,setPolygonOffset:Ke,setScissorTest:be,activeTexture:Pe,bindTexture:Yt,unbindTexture:B,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:ee,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:Jt,texSubImage2D:vt,texSubImage3D:St,compressedTexSubImage2D:pt,compressedTexSubImage3D:jt,scissor:bt,viewport:Ft,reset:he}}function Qw(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,T){return y?new OffscreenCanvas(B,T):Ru("canvas")}function A(B,T,K){let vt=1;const St=Yt(B);if((St.width>K||St.height>K)&&(vt=K/Math.max(St.width,St.height)),vt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pt=Math.floor(vt*St.width),jt=Math.floor(vt*St.height);_===void 0&&(_=E(pt,jt));const Dt=T?E(pt,jt):_;return Dt.width=pt,Dt.height=jt,Dt.getContext("2d").drawImage(B,0,0,pt,jt),ne("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+jt+")."),Dt}else return"data"in B&&ne("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),B;return B}function S(B){return B.generateMipmaps}function x(B){r.generateMipmap(B)}function R(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(B,T,K,vt,St=!1){if(B!==null){if(r[B]!==void 0)return r[B];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pt=T;if(T===r.RED&&(K===r.FLOAT&&(pt=r.R32F),K===r.HALF_FLOAT&&(pt=r.R16F),K===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.R8UI),K===r.UNSIGNED_SHORT&&(pt=r.R16UI),K===r.UNSIGNED_INT&&(pt=r.R32UI),K===r.BYTE&&(pt=r.R8I),K===r.SHORT&&(pt=r.R16I),K===r.INT&&(pt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(pt=r.RG32F),K===r.HALF_FLOAT&&(pt=r.RG16F),K===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RG8UI),K===r.UNSIGNED_SHORT&&(pt=r.RG16UI),K===r.UNSIGNED_INT&&(pt=r.RG32UI),K===r.BYTE&&(pt=r.RG8I),K===r.SHORT&&(pt=r.RG16I),K===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),K===r.UNSIGNED_INT&&(pt=r.RGB32UI),K===r.BYTE&&(pt=r.RGB8I),K===r.SHORT&&(pt=r.RGB16I),K===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),K===r.UNSIGNED_INT&&(pt=r.RGBA32UI),K===r.BYTE&&(pt=r.RGBA8I),K===r.SHORT&&(pt=r.RGBA16I),K===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),T===r.RGBA){const jt=St?Au:we.getTransfer(vt);K===r.FLOAT&&(pt=r.RGBA32F),K===r.HALF_FLOAT&&(pt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(pt=jt===He?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(B,T){let K;return B?T===null||T===$i||T===Ml?K=r.DEPTH24_STENCIL8:T===Bi?K=r.DEPTH32F_STENCIL8:T===Sl&&(K=r.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===Ml?K=r.DEPTH_COMPONENT24:T===Bi?K=r.DEPTH_COMPONENT32F:T===Sl&&(K=r.DEPTH_COMPONENT16),K}function F(B,T){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Un&&B.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function N(B){const T=B.target;T.removeEventListener("dispose",N),b(T),T.isVideoTexture&&g.delete(T)}function z(B){const T=B.target;T.removeEventListener("dispose",z),k(T)}function b(B){const T=s.get(B);if(T.__webglInit===void 0)return;const K=B.source,vt=v.get(K);if(vt){const St=vt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&L(B),Object.keys(vt).length===0&&v.delete(K)}s.remove(B)}function L(B){const T=s.get(B);r.deleteTexture(T.__webglTexture);const K=B.source,vt=v.get(K);delete vt[T.__cacheKey],f.memory.textures--}function k(B){const T=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let St=0;St<T.__webglFramebuffer[vt].length;St++)r.deleteFramebuffer(T.__webglFramebuffer[vt][St]);else r.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)r.deleteFramebuffer(T.__webglFramebuffer[vt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=B.textures;for(let vt=0,St=K.length;vt<St;vt++){const pt=s.get(K[vt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(K[vt])}s.remove(B)}let H=0;function Z(){H=0}function J(){const B=H;return B>=l.maxTextures&&ne("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),H+=1,B}function it(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function Q(B,T){const K=s.get(B);if(B.isVideoTexture&&be(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){const vt=B.image;if(vt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(K,B,T);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function P(B,T){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){tt(K,B,T);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function G(B,T){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){tt(K,B,T);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function st(B,T){const K=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){mt(K,B,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const ht={[jd]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[Wd]:r.MIRRORED_REPEAT},Mt={[Un]:r.NEAREST,[Zb]:r.NEAREST_MIPMAP_NEAREST,[jc]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[td]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},O={[Jb]:r.NEVER,[iT]:r.ALWAYS,[$b]:r.LESS,[jp]:r.LEQUAL,[tT]:r.EQUAL,[Wp]:r.GEQUAL,[eT]:r.GREATER,[nT]:r.NOTEQUAL};function j(B,T){if(T.type===Bi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===gn||T.magFilter===td||T.magFilter===jc||T.magFilter===Zs||T.minFilter===gn||T.minFilter===td||T.minFilter===jc||T.minFilter===Zs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,ht[T.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,ht[T.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,ht[T.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,Mt[T.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==jc&&T.minFilter!==Zs||T.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _t(B,T){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",N));const vt=T.source;let St=v.get(vt);St===void 0&&(St={},v.set(vt,St));const pt=it(T);if(pt!==B.__cacheKey){St[pt]===void 0&&(St[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),St[pt].usedTimes++;const jt=St[B.__cacheKey];jt!==void 0&&(St[B.__cacheKey].usedTimes--,jt.usedTimes===0&&L(T)),B.__cacheKey=pt,B.__webglTexture=St[pt].texture}return K}function Rt(B,T,K){return Math.floor(Math.floor(B/K)/T)}function Lt(B,T,K,vt){const pt=B.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,vt,T.data);else{pt.sort((At,bt)=>At.start-bt.start);let jt=0;for(let At=1;At<pt.length;At++){const bt=pt[jt],Ft=pt[At],It=bt.start+bt.count,Bt=Rt(Ft.start,T.width,4),he=Rt(bt.start,T.width,4);Ft.start<=It+1&&Bt===he&&Rt(Ft.start+Ft.count-1,T.width,4)===Bt?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++jt,pt[jt]=Ft)}pt.length=jt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let At=0,bt=pt.length;At<bt;At++){const Ft=pt[At],It=Math.floor(Ft.start/4),Bt=Math.ceil(Ft.count/4),he=It%T.width,q=Math.floor(It/T.width),wt=Bt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,he,q,wt,Ct,K,vt,T.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function tt(B,T,K){let vt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=r.TEXTURE_3D);const St=_t(B,T),pt=T.source;i.bindTexture(vt,B.__webglTexture,r.TEXTURE0+K);const jt=s.get(pt);if(pt.version!==jt.__version||St===!0){i.activeTexture(r.TEXTURE0+K);const Dt=we.getPrimaries(we.workingColorSpace),Jt=T.colorSpace===vs?null:we.getPrimaries(T.colorSpace),ee=T.colorSpace===vs||Dt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let At=A(T.image,!1,l.maxTextureSize);At=Pe(T,At);const bt=c.convert(T.format,T.colorSpace),Ft=c.convert(T.type);let It=D(T.internalFormat,bt,Ft,T.colorSpace,T.isVideoTexture);j(vt,T);let Bt;const he=T.mipmaps,q=T.isVideoTexture!==!0,wt=jt.__version===void 0||St===!0,Ct=pt.dataReady,zt=F(T,At);if(T.isDepthTexture)It=U(T.format===Ks,T.type),wt&&(q?i.texStorage2D(r.TEXTURE_2D,1,It,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,It,At.width,At.height,0,bt,Ft,null));else if(T.isDataTexture)if(he.length>0){q&&wt&&i.texStorage2D(r.TEXTURE_2D,zt,It,he[0].width,he[0].height);for(let Tt=0,dt=he.length;Tt<dt;Tt++)Bt=he[Tt],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,bt,Ft,Bt.data):i.texImage2D(r.TEXTURE_2D,Tt,It,Bt.width,Bt.height,0,bt,Ft,Bt.data);T.generateMipmaps=!1}else q?(wt&&i.texStorage2D(r.TEXTURE_2D,zt,It,At.width,At.height),Ct&&Lt(T,At,bt,Ft)):i.texImage2D(r.TEXTURE_2D,0,It,At.width,At.height,0,bt,Ft,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,It,he[0].width,he[0].height,At.depth);for(let Tt=0,dt=he.length;Tt<dt;Tt++)if(Bt=he[Tt],T.format!==zi)if(bt!==null)if(q){if(Ct)if(T.layerUpdates.size>0){const Gt=Uv(Bt.width,Bt.height,T.format,T.type);for(const ae of T.layerUpdates){const Fe=Bt.data.subarray(ae*Gt/Bt.data.BYTES_PER_ELEMENT,(ae+1)*Gt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ae,Bt.width,Bt.height,1,bt,Fe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,bt,Bt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,It,Bt.width,Bt.height,At.depth,0,Bt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,bt,Ft,Bt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,It,Bt.width,Bt.height,At.depth,0,bt,Ft,Bt.data)}else{q&&wt&&i.texStorage2D(r.TEXTURE_2D,zt,It,he[0].width,he[0].height);for(let Tt=0,dt=he.length;Tt<dt;Tt++)Bt=he[Tt],T.format!==zi?bt!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,bt,Bt.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,It,Bt.width,Bt.height,0,Bt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,bt,Ft,Bt.data):i.texImage2D(r.TEXTURE_2D,Tt,It,Bt.width,Bt.height,0,bt,Ft,Bt.data)}else if(T.isDataArrayTexture)if(q){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,It,At.width,At.height,At.depth),Ct)if(T.layerUpdates.size>0){const Tt=Uv(At.width,At.height,T.format,T.type);for(const dt of T.layerUpdates){const Gt=At.data.subarray(dt*Tt/At.data.BYTES_PER_ELEMENT,(dt+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,At.width,At.height,1,bt,Ft,Gt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,bt,Ft,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,At.width,At.height,At.depth,0,bt,Ft,At.data);else if(T.isData3DTexture)q?(wt&&i.texStorage3D(r.TEXTURE_3D,zt,It,At.width,At.height,At.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,bt,Ft,At.data)):i.texImage3D(r.TEXTURE_3D,0,It,At.width,At.height,At.depth,0,bt,Ft,At.data);else if(T.isFramebufferTexture){if(wt)if(q)i.texStorage2D(r.TEXTURE_2D,zt,It,At.width,At.height);else{let Tt=At.width,dt=At.height;for(let Gt=0;Gt<zt;Gt++)i.texImage2D(r.TEXTURE_2D,Gt,It,Tt,dt,0,bt,Ft,null),Tt>>=1,dt>>=1}}else if(he.length>0){if(q&&wt){const Tt=Yt(he[0]);i.texStorage2D(r.TEXTURE_2D,zt,It,Tt.width,Tt.height)}for(let Tt=0,dt=he.length;Tt<dt;Tt++)Bt=he[Tt],q?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,bt,Ft,Bt):i.texImage2D(r.TEXTURE_2D,Tt,It,bt,Ft,Bt);T.generateMipmaps=!1}else if(q){if(wt){const Tt=Yt(At);i.texStorage2D(r.TEXTURE_2D,zt,It,Tt.width,Tt.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ft,At)}else i.texImage2D(r.TEXTURE_2D,0,It,bt,Ft,At);S(T)&&x(vt),jt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function mt(B,T,K){if(T.image.length!==6)return;const vt=_t(B,T),St=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+K);const pt=s.get(St);if(St.version!==pt.__version||vt===!0){i.activeTexture(r.TEXTURE0+K);const jt=we.getPrimaries(we.workingColorSpace),Dt=T.colorSpace===vs?null:we.getPrimaries(T.colorSpace),Jt=T.colorSpace===vs||jt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!ee&&!At?bt[dt]=A(T.image[dt],!0,l.maxCubemapSize):bt[dt]=At?T.image[dt].image:T.image[dt],bt[dt]=Pe(T,bt[dt]);const Ft=bt[0],It=c.convert(T.format,T.colorSpace),Bt=c.convert(T.type),he=D(T.internalFormat,It,Bt,T.colorSpace),q=T.isVideoTexture!==!0,wt=pt.__version===void 0||vt===!0,Ct=St.dataReady;let zt=F(T,Ft);j(r.TEXTURE_CUBE_MAP,T);let Tt;if(ee){q&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,he,Ft.width,Ft.height);for(let dt=0;dt<6;dt++){Tt=bt[dt].mipmaps;for(let Gt=0;Gt<Tt.length;Gt++){const ae=Tt[Gt];T.format!==zi?It!==null?q?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ae.width,ae.height,It,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,he,ae.width,ae.height,0,ae.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,ae.width,ae.height,It,Bt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,he,ae.width,ae.height,0,It,Bt,ae.data)}}}else{if(Tt=T.mipmaps,q&&wt){Tt.length>0&&zt++;const dt=Yt(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,he,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(At){q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,It,Bt,bt[dt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,bt[dt].width,bt[dt].height,0,It,Bt,bt[dt].data);for(let Gt=0;Gt<Tt.length;Gt++){const Fe=Tt[Gt].image[dt].image;q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Fe.width,Fe.height,It,Bt,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,he,Fe.width,Fe.height,0,It,Bt,Fe.data)}}else{q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It,Bt,bt[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,he,It,Bt,bt[dt]);for(let Gt=0;Gt<Tt.length;Gt++){const ae=Tt[Gt];q?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,It,Bt,ae.image[dt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,he,It,Bt,ae.image[dt])}}}S(T)&&x(r.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Et(B,T,K,vt,St,pt){const jt=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),Jt=D(K.internalFormat,jt,Dt,K.colorSpace),ee=s.get(T),At=s.get(K);if(At.__renderTarget=T,!ee.__hasExternalTextures){const bt=Math.max(1,T.width>>pt),Ft=Math.max(1,T.height>>pt);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,Jt,bt,Ft,T.depth,0,jt,Dt,null):i.texImage2D(St,pt,Jt,bt,Ft,0,jt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),Ke(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,St,At.__webglTexture,0,X(T)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,St,At.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(B,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,B),T.depthBuffer){const vt=T.depthTexture,St=vt&&vt.isDepthTexture?vt.type:null,pt=U(T.stencilBuffer,St),jt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(T),pt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(T),pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,B)}else{const vt=T.textures;for(let St=0;St<vt.length;St++){const pt=vt[St],jt=c.convert(pt.format,pt.colorSpace),Dt=c.convert(pt.type),Jt=D(pt.internalFormat,jt,Dt,pt.colorSpace);Ke(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(T),Jt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(T),Jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(B,T,K){const vt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(T.depthTexture);if(St.__renderTarget=T,(!St.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt){if(St.__webglInit===void 0&&(St.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),j(r.TEXTURE_CUBE_MAP,T.depthTexture);const ee=c.convert(T.depthTexture.format),At=c.convert(T.depthTexture.type);let bt;T.depthTexture.format===Pa?bt=r.DEPTH_COMPONENT24:T.depthTexture.format===Ks&&(bt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,T.width,T.height,0,ee,At,null)}}else Q(T.depthTexture,0);const pt=St.__webglTexture,jt=X(T),Dt=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,Jt=T.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pa)Ke(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,pt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,pt,0);else if(T.depthTexture.format===Ks)Ke(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Dt,pt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Dt,pt,0);else throw new Error("Unknown depthTexture format")}function Qt(B){const T=s.get(B),K=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const vt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",St)};vt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=vt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let vt=0;vt<6;vt++)Zt(T.__webglFramebuffer[vt],B,vt);else{const vt=B.texture.mipmaps;vt&&vt.length>0?Zt(T.__webglFramebuffer[0],B,0):Zt(T.__webglFramebuffer,B,0)}else if(K){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=r.createRenderbuffer(),Pt(T.__webglDepthbuffer[vt],B,!1);else{const St=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,pt)}}else{const vt=B.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Pt(T.__webglDepthbuffer,B,!1);else{const St=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(B,T,K){const vt=s.get(B);T!==void 0&&Et(vt.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Qt(B)}function ue(B){const T=B.texture,K=s.get(B),vt=s.get(T);B.addEventListener("dispose",z);const St=B.textures,pt=B.isWebGLCubeRenderTarget===!0,jt=St.length>1;if(jt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=T.version,f.memory.textures++),pt){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let Jt=0;Jt<T.mipmaps.length;Jt++)K.__webglFramebuffer[Dt][Jt]=r.createFramebuffer()}else K.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ee=s.get(St[Dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(B.samples>0&&Ke(B)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Jt=St[Dt];K.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt]);const ee=c.convert(Jt.format,Jt.colorSpace),At=c.convert(Jt.type),bt=D(Jt.internalFormat,ee,At,Jt.colorSpace,B.isXRRenderTarget===!0),Ft=X(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,bt,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(K.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),j(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)Et(K.__webglFramebuffer[Dt][Jt],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Jt);else Et(K.__webglFramebuffer[Dt],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Dt=0,Jt=St.length;Dt<Jt;Dt++){const ee=St[Dt],At=s.get(ee);let bt=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(bt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,At.__webglTexture),j(bt,ee),Et(K.__webglFramebuffer,B,ee,r.COLOR_ATTACHMENT0+Dt,bt,0),S(ee)&&x(bt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Dt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,vt.__webglTexture),j(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)Et(K.__webglFramebuffer[Jt],B,T,r.COLOR_ATTACHMENT0,Dt,Jt);else Et(K.__webglFramebuffer,B,T,r.COLOR_ATTACHMENT0,Dt,0);S(T)&&x(Dt),i.unbindTexture()}B.depthBuffer&&Qt(B)}function _e(B){const T=B.textures;for(let K=0,vt=T.length;K<vt;K++){const St=T[K];if(S(St)){const pt=R(B),jt=s.get(St).__webglTexture;i.bindTexture(pt,jt),x(pt),i.unbindTexture()}}}const Ae=[],se=[];function Ye(B){if(B.samples>0){if(Ke(B)===!1){const T=B.textures,K=B.width,vt=B.height;let St=r.COLOR_BUFFER_BIT;const pt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(B),Dt=T.length>1;if(Dt)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Jt=B.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const At=s.get(T[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,K,vt,0,0,K,vt,St,r.NEAREST),m===!0&&(Ae.length=0,se.length=0,Ae.push(r.COLOR_ATTACHMENT0+ee),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ae.push(pt),se.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const At=s.get(T[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const T=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function X(B){return Math.min(l.maxSamples,B.samples)}function Ke(B){const T=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(B){const T=f.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function Pe(B,T){const K=B.colorSpace,vt=B.format,St=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==oo&&K!==vs&&(we.getTransfer(K)===He?(vt!==zi||St!==hi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",K)),T}function Yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=st,this.rebindTextures=Ne,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Jw(r,t){function i(s,l=vs){let c;const f=we.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===zp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vx)return r.BYTE;if(s===kx)return r.SHORT;if(s===Sl)return r.UNSIGNED_SHORT;if(s===Bp)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===Oa)return r.HALF_FLOAT;if(s===Wx)return r.ALPHA;if(s===Yx)return r.RGB;if(s===zi)return r.RGBA;if(s===Pa)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===Gp)return r.RED;if(s===Vp)return r.RED_INTEGER;if(s===ro)return r.RG;if(s===kp)return r.RG_INTEGER;if(s===Xp)return r.RGBA_INTEGER;if(s===yu||s===Su||s===Mu||s===Eu)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===qd||s===Zd||s===Kd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Qd||s===Jd)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===$d)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===tp)return c.COMPRESSED_R11_EAC;if(s===ep)return c.COMPRESSED_SIGNED_R11_EAC;if(s===np)return c.COMPRESSED_RG11_EAC;if(s===ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ap||s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ap)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===op)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===up)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gp)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_p)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vp||s===xp||s===yp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===vp)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sp||s===Mp||s===Ep||s===bp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Sp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ay(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:$w,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new er(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends $s{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,g=null,_=null,v=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new e2,x={},R=i.getContextAttributes();let D=null,U=null;const F=[],N=[],z=new ce;let b=null;const L=new Ei;L.viewport=new an;const k=new Ei;k.viewport=new an;const H=[L,k],Z=new hA;let J=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=F[tt];return mt===void 0&&(mt=new rd,F[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=F[tt];return mt===void 0&&(mt=new rd,F[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=F[tt];return mt===void 0&&(mt=new rd,F[tt]=mt),mt.getHandSpace()};function Q(tt){const mt=N.indexOf(tt.inputSource);if(mt===-1)return;const Et=F[mt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,d||f),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function P(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let tt=0;tt<F.length;tt++){const mt=N[tt];mt!==null&&(N[tt]=null,F[tt].disconnect(mt))}J=null,it=null,S.reset();for(const tt in x)delete x[tt];t.setRenderTarget(D),y=null,v=null,_=null,l=null,U=null,Lt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,s.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Pt=null,Zt=null;R.depth&&(Zt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=R.stencil?Ks:Pa,Pt=R.stencil?Ml:$i);const Qt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Qt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Ji(v.textureWidth,v.textureHeight,{format:zi,type:hi,depthTexture:new Rl(v.textureWidth,v.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ji(y.framebufferWidth,y.framebufferHeight,{format:zi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Lt.setContext(l),Lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(tt){for(let mt=0;mt<tt.removed.length;mt++){const Et=tt.removed[mt],Pt=N.indexOf(Et);Pt>=0&&(N[Pt]=null,F[Pt].disconnect(Et))}for(let mt=0;mt<tt.added.length;mt++){const Et=tt.added[mt];let Pt=N.indexOf(Et);if(Pt===-1){for(let Qt=0;Qt<F.length;Qt++)if(Qt>=N.length){N.push(Et),Pt=Qt;break}else if(N[Qt]===null){N[Qt]=Et,Pt=Qt;break}if(Pt===-1)break}const Zt=F[Pt];Zt&&Zt.connect(Et)}}const st=new et,ht=new et;function Mt(tt,mt,Et){st.setFromMatrixPosition(mt.matrixWorld),ht.setFromMatrixPosition(Et.matrixWorld);const Pt=st.distanceTo(ht),Zt=mt.projectionMatrix.elements,Qt=Et.projectionMatrix.elements,Ne=Zt[14]/(Zt[10]-1),ue=Zt[14]/(Zt[10]+1),_e=(Zt[9]+1)/Zt[5],Ae=(Zt[9]-1)/Zt[5],se=(Zt[8]-1)/Zt[0],Ye=(Qt[8]+1)/Qt[0],X=Ne*se,Ke=Ne*Ye,be=Pt/(-se+Ye),Pe=be*-se;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Pe),tt.translateZ(be),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Zt[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Ne+be,B=ue+be,T=X-Pe,K=Ke+(Pt-Pe),vt=_e*ue/B*Yt,St=Ae*ue/B*Yt;tt.projectionMatrix.makePerspective(T,K,vt,St,Yt,B),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function O(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,Et=tt.far;S.texture!==null&&(S.depthNear>0&&(mt=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),Z.near=k.near=L.near=mt,Z.far=k.far=L.far=Et,(J!==Z.near||it!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),J=Z.near,it=Z.far),Z.layers.mask=tt.layers.mask|6,L.layers.mask=Z.layers.mask&-5,k.layers.mask=Z.layers.mask&-3;const Pt=tt.parent,Zt=Z.cameras;O(Z,Pt);for(let Qt=0;Qt<Zt.length;Qt++)O(Zt[Qt],Pt);Zt.length===2?Mt(Z,L,k):Z.projectionMatrix.copy(L.projectionMatrix),j(tt,Z,Pt)};function j(tt,mt,Et){Et===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=bl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(tt){m=tt,v!==null&&(v.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(tt){return x[tt]};let _t=null;function Rt(tt,mt){if(g=mt.getViewerPose(d||f),E=mt,g!==null){const Et=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Pt=!1;Et.length!==Z.cameras.length&&(Z.cameras.length=0,Pt=!0);for(let ue=0;ue<Et.length;ue++){const _e=Et[ue];let Ae=null;if(y!==null)Ae=y.getViewport(_e);else{const Ye=_.getViewSubImage(v,_e);Ae=Ye.viewport,ue===0&&(t.setRenderTargetTextures(U,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(U))}let se=H[ue];se===void 0&&(se=new Ei,se.layers.enable(ue),se.viewport=new an,H[ue]=se),se.matrix.fromArray(_e.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(_e.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ue===0&&(Z.matrix.copy(se.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pt===!0&&Z.cameras.push(se)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const ue=_.getDepthInformation(Et[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,l.renderState)}if(Zt&&Zt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let ue=0;ue<Et.length;ue++){const _e=Et[ue].camera;if(_e){let Ae=x[_e];Ae||(Ae=new ay,x[_e]=Ae);const se=_.getCameraImage(_e);Ae.sourceTexture=se}}}}for(let Et=0;Et<F.length;Et++){const Pt=N[Et],Zt=F[Et];Pt!==null&&Zt!==void 0&&Zt.update(Pt,mt,d||f)}_t&&_t(tt,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Lt=new ly;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const Ws=new Ln,i2=new je;function a2(r,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,sy(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,R,D,U){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,U)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,R,D):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),D=R.envMap,U=R.envMapRotation;D&&(S.envMap.value=D,Ws.copy(U),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),S.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(Ws)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,R,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=D*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function s2(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,D){const U=D.program;s.uniformBlockBinding(R,U)}function d(R,D){let U=l[R.id];U===void 0&&(E(R),U=g(R),l[R.id]=U,R.addEventListener("dispose",S));const F=D.program;s.updateUBOMapping(R,F);const N=t.render.frame;c[R.id]!==N&&(v(R),c[R.id]=N)}function g(R){const D=_();R.__bindingPointIndex=D;const U=r.createBuffer(),F=R.__size,N=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function _(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const D=l[R.id],U=R.uniforms,F=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,z=U.length;N<z;N++){const b=Array.isArray(U[N])?U[N]:[U[N]];for(let L=0,k=b.length;L<k;L++){const H=b[L];if(y(H,N,L,F)===!0){const Z=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let it=0;for(let Q=0;Q<J.length;Q++){const P=J[Q],G=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Z+it,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,it),it+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,D,U,F){const N=R.value,z=D+"_"+U;if(F[z]===void 0)return typeof N=="number"||typeof N=="boolean"?F[z]=N:F[z]=N.clone(),!0;{const b=F[z];if(typeof N=="number"||typeof N=="boolean"){if(b!==N)return F[z]=N,!0}else if(b.equals(N)===!1)return b.copy(N),!0}return!1}function E(R){const D=R.uniforms;let U=0;const F=16;for(let z=0,b=D.length;z<b;z++){const L=Array.isArray(D[z])?D[z]:[D[z]];for(let k=0,H=L.length;k<H;k++){const Z=L[k],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let it=0,Q=J.length;it<Q;it++){const P=J[it],G=A(P),st=U%F,ht=st%G.boundary,Mt=st+ht;U+=ht,Mt!==0&&F-Mt<G.storage&&(U+=F-Mt),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=G.storage}}}const N=U%F;return N>0&&(U+=F-N),R.__size=U,R.__cache={},this}function A(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",R),D}function S(R){const D=R.target;D.removeEventListener("dispose",S);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:d,dispose:x}}const r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function o2(){return Yi===null&&(Yi=new ty(r2,16,16,ro,Oa),Yi.name="DFG_LUT",Yi.minFilter=gn,Yi.magFilter=gn,Yi.wrapS=Ca,Yi.wrapT=Ca,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class l2{constructor(t={}){const{canvas:i=rT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=y,S=new Set([Xp,kp,Vp]),x=new Set([hi,$i,Sl,Ml,zp,Hp]),R=new Uint32Array(4),D=new Int32Array(4);let U=null,F=null;const N=[],z=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let k=!1;this._outputColorSpace=fi;let H=0,Z=0,J=null,it=-1,Q=null;const P=new an,G=new an;let st=null;const ht=new Te(0);let Mt=0,O=i.width,j=i.height,_t=1,Rt=null,Lt=null;const tt=new an(0,0,O,j),mt=new an(0,0,O,j);let Et=!1;const Pt=new Kp;let Zt=!1,Qt=!1;const Ne=new je,ue=new et,_e=new an,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ye(){return J===null?_t:1}let X=s;function Ke(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const Y="webgl2";if(X=Ke(Y,w),X===null)throw Ke(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}let be,Pe,Yt,B,T,K,vt,St,pt,jt,Dt,Jt,ee,At,bt,Ft,It,Bt,he,q,wt,Ct,zt;function Tt(){be=new lC(X),be.init(),wt=new Jw(X,be),Pe=new tC(X,be,t,wt),Yt=new Kw(X,be),Pe.reversedDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),B=new fC(X),T=new Iw,K=new Qw(X,be,Yt,T,Pe,wt,B),vt=new oC(L),St=new gA(X),Ct=new JR(X,St),pt=new cC(X,St,B,Ct),jt=new dC(X,pt,St,Ct,B),Bt=new hC(X,Pe,K),bt=new eC(T),Dt=new Pw(L,vt,be,Pe,Ct,bt),Jt=new a2(L,T),ee=new Bw,At=new Xw(be),It=new QR(L,vt,Yt,jt,E,m),Ft=new Zw(L,jt,Pe),zt=new s2(X,B,Pe,Yt),he=new $R(X,be,B),q=new uC(X,be,B),B.programs=Dt.programs,L.capabilities=Pe,L.extensions=be,L.properties=T,L.renderLists=ee,L.shadowMap=Ft,L.state=Yt,L.info=B}Tt(),A!==hi&&(b=new mC(A,i.width,i.height,l,c));const dt=new n2(L,X);this.xr=dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(O,j,!1))},this.getSize=function(w){return w.set(O,j)},this.setSize=function(w,Y,ut=!0){if(dt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,j=Y,i.width=Math.floor(w*_t),i.height=Math.floor(Y*_t),ut===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(O*_t,j*_t).floor()},this.setDrawingBufferSize=function(w,Y,ut){O=w,j=Y,_t=ut,i.width=Math.floor(w*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(A===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,Y,ut,lt){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,Y,ut,lt),Yt.viewport(P.copy(tt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,Y,ut,lt){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,Y,ut,lt),Yt.scissor(G.copy(mt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){Yt.setScissorTest(Et=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){Lt=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ut=!0){let lt=0;if(w){let at=!1;if(J!==null){const Ut=J.texture.format;at=S.has(Ut)}if(at){const Ut=J.texture.type,Ht=x.has(Ut),Nt=It.getClearColor(),Wt=It.getClearAlpha(),Kt=Nt.r,ie=Nt.g,oe=Nt.b;Ht?(R[0]=Kt,R[1]=ie,R[2]=oe,R[3]=Wt,X.clearBufferuiv(X.COLOR,0,R)):(D[0]=Kt,D[1]=ie,D[2]=oe,D[3]=Wt,X.clearBufferiv(X.COLOR,0,D))}else lt|=X.COLOR_BUFFER_BIT}Y&&(lt|=X.DEPTH_BUFFER_BIT),ut&&(lt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&X.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),It.dispose(),ee.dispose(),At.dispose(),T.dispose(),vt.dispose(),jt.dispose(),Ct.dispose(),zt.dispose(),Dt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ir),dt.removeEventListener("sessionend",ar),Gi.stop()};function Gt(w){w.preventDefault(),iv("WebGLRenderer: Context Lost."),k=!0}function ae(){iv("WebGLRenderer: Context Restored."),k=!1;const w=B.autoReset,Y=Ft.enabled,ut=Ft.autoUpdate,lt=Ft.needsUpdate,at=Ft.type;Tt(),B.autoReset=w,Ft.enabled=Y,Ft.autoUpdate=ut,Ft.needsUpdate=lt,Ft.type=at}function Fe(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const Y=w.target;Y.removeEventListener("dispose",Re),Fn(Y)}function Fn(w){Ri(w),T.remove(w)}function Ri(w){const Y=T.get(w).programs;Y!==void 0&&(Y.forEach(function(ut){Dt.releaseProgram(ut)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ut,lt,at,Ut){Y===null&&(Y=Ae);const Ht=at.isMesh&&at.matrixWorld.determinant()<0,Nt=Ol(w,Y,ut,lt,at);Yt.setMaterial(lt,Ht);let Wt=ut.index,Kt=1;if(lt.wireframe===!0){if(Wt=pt.getWireframeAttribute(ut),Wt===void 0)return;Kt=2}const ie=ut.drawRange,oe=ut.attributes.position;let Vt=ie.start*Kt,de=(ie.start+ie.count)*Kt;Ut!==null&&(Vt=Math.max(Vt,Ut.start*Kt),de=Math.min(de,(Ut.start+Ut.count)*Kt)),Wt!==null?(Vt=Math.max(Vt,0),de=Math.min(de,Wt.count)):oe!=null&&(Vt=Math.max(Vt,0),de=Math.min(de,oe.count));const Qe=de-Vt;if(Qe<0||Qe===1/0)return;Ct.setup(at,lt,Nt,ut,Wt);let Je,De=he;if(Wt!==null&&(Je=St.get(Wt),De=q,De.setIndex(Je)),at.isMesh)lt.wireframe===!0?(Yt.setLineWidth(lt.wireframeLinewidth*Ye()),De.setMode(X.LINES)):De.setMode(X.TRIANGLES);else if(at.isLine){let vn=lt.linewidth;vn===void 0&&(vn=1),Yt.setLineWidth(vn*Ye()),at.isLineSegments?De.setMode(X.LINES):at.isLineLoop?De.setMode(X.LINE_LOOP):De.setMode(X.LINE_STRIP)}else at.isPoints?De.setMode(X.POINTS):at.isSprite&&De.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))De.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const vn=at._multiDrawStarts,Xt=at._multiDrawCounts,Bn=at._multiDrawCount,re=Wt?St.get(Wt).bytesPerElement:1,zn=T.get(lt).currentProgram.getUniforms();for(let ti=0;ti<Bn;ti++)zn.setValue(X,"_gl_DrawID",ti),De.render(vn[ti]/re,Xt[ti])}else if(at.isInstancedMesh)De.renderInstances(Vt,Qe,at.count);else if(ut.isInstancedBufferGeometry){const vn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Xt=Math.min(ut.instanceCount,vn);De.renderInstances(Vt,Qe,Xt)}else De.render(Vt,Qe)};function mo(w,Y,ut){w.transparent===!0&&w.side===bi&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Ia(w,Y,ut),w.side=ys,w.needsUpdate=!0,Ia(w,Y,ut),w.side=bi):Ia(w,Y,ut)}this.compile=function(w,Y,ut=null){ut===null&&(ut=w),F=At.get(ut),F.init(Y),z.push(F),ut.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(F.pushLight(at),at.castShadow&&F.pushShadow(at))}),w!==ut&&w.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(F.pushLight(at),at.castShadow&&F.pushShadow(at))}),F.setupLights();const lt=new Set;return w.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ut=at.material;if(Ut)if(Array.isArray(Ut))for(let Ht=0;Ht<Ut.length;Ht++){const Nt=Ut[Ht];mo(Nt,ut,at),lt.add(Nt)}else mo(Ut,ut,at),lt.add(Ut)}),F=z.pop(),lt},this.compileAsync=function(w,Y,ut=null){const lt=this.compile(w,Y,ut);return new Promise(at=>{function Ut(){if(lt.forEach(function(Ht){T.get(Ht).currentProgram.isReady()&&lt.delete(Ht)}),lt.size===0){at(w);return}setTimeout(Ut,10)}be.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let nr=null;function Ll(w){nr&&nr(w)}function ir(){Gi.stop()}function ar(){Gi.start()}const Gi=new ly;Gi.setAnimationLoop(Ll),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){nr=w,dt.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},dt.addEventListener("sessionstart",ir),dt.addEventListener("sessionend",ar),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const ut=dt.enabled===!0&&dt.isPresenting===!0,lt=b!==null&&(J===null||ut)&&b.begin(L,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Y),Y=dt.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,Y,J),F=At.get(w,z.length),F.init(Y),z.push(F),Ne.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pt.setFromProjectionMatrix(Ne,Ki,Y.reversedDepth),Qt=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,Qt),U=ee.get(w,N.length),U.init(),N.push(U),dt.enabled===!0&&dt.isPresenting===!0){const Ht=L.xr.getDepthSensingMesh();Ht!==null&&sr(Ht,Y,-1/0,L.sortObjects)}sr(w,Y,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(Rt,Lt),se=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,se&&It.addToRenderList(U,w),this.info.render.frame++,Zt===!0&&bt.beginShadows();const at=F.state.shadowsArray;if(Ft.render(at,w,Y),Zt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&b.hasRenderPass())===!1){const Ht=U.opaque,Nt=U.transmissive;if(F.setupLights(),Y.isArrayCamera){const Wt=Y.cameras;if(Nt.length>0)for(let Kt=0,ie=Wt.length;Kt<ie;Kt++){const oe=Wt[Kt];on(Ht,Nt,w,oe)}se&&It.render(w);for(let Kt=0,ie=Wt.length;Kt<ie;Kt++){const oe=Wt[Kt];Ci(U,w,oe,oe.viewport)}}else Nt.length>0&&on(Ht,Nt,w,Y),se&&It.render(w),Ci(U,w,Y)}J!==null&&Z===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),lt&&b.end(L),w.isScene===!0&&w.onAfterRender(L,w,Y),Ct.resetDefaultState(),it=-1,Q=null,z.pop(),z.length>0?(F=z[z.length-1],Zt===!0&&bt.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,N.pop(),N.length>0?U=N[N.length-1]:U=null};function sr(w,Y,ut,lt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)F.pushLight(w),w.castShadow&&F.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pt.intersectsSprite(w)){lt&&_e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ne);const Ht=jt.update(w),Nt=w.material;Nt.visible&&U.push(w,Ht,Nt,ut,_e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pt.intersectsObject(w))){const Ht=jt.update(w),Nt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_e.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),_e.copy(Ht.boundingSphere.center)),_e.applyMatrix4(w.matrixWorld).applyMatrix4(Ne)),Array.isArray(Nt)){const Wt=Ht.groups;for(let Kt=0,ie=Wt.length;Kt<ie;Kt++){const oe=Wt[Kt],Vt=Nt[oe.materialIndex];Vt&&Vt.visible&&U.push(w,Ht,Vt,ut,_e.z,oe)}}else Nt.visible&&U.push(w,Ht,Nt,ut,_e.z,null)}}const Ut=w.children;for(let Ht=0,Nt=Ut.length;Ht<Nt;Ht++)sr(Ut[Ht],Y,ut,lt)}function Ci(w,Y,ut,lt){const{opaque:at,transmissive:Ut,transparent:Ht}=w;F.setupLightsView(ut),Zt===!0&&bt.setGlobalState(L.clippingPlanes,ut),lt&&Yt.viewport(P.copy(lt)),at.length>0&&_n(at,Y,ut),Ut.length>0&&_n(Ut,Y,ut),Ht.length>0&&_n(Ht,Y,ut),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function on(w,Y,ut,lt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[lt.id]===void 0){const Vt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[lt.id]=new Ji(1,1,{generateMipmaps:!0,type:Vt?Oa:hi,minFilter:Zs,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Ut=F.state.transmissionRenderTarget[lt.id],Ht=lt.viewport||P;Ut.setSize(Ht.z*L.transmissionResolutionScale,Ht.w*L.transmissionResolutionScale);const Nt=L.getRenderTarget(),Wt=L.getActiveCubeFace(),Kt=L.getActiveMipmapLevel();L.setRenderTarget(Ut),L.getClearColor(ht),Mt=L.getClearAlpha(),Mt<1&&L.setClearColor(16777215,.5),L.clear(),se&&It.render(ut);const ie=L.toneMapping;L.toneMapping=Qi;const oe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),F.setupLightsView(lt),Zt===!0&&bt.setGlobalState(L.clippingPlanes,lt),_n(w,ut,lt),K.updateMultisampleRenderTarget(Ut),K.updateRenderTargetMipmap(Ut),be.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let de=0,Qe=Y.length;de<Qe;de++){const Je=Y[de],{object:De,geometry:vn,material:Xt,group:Bn}=Je;if(Xt.side===bi&&De.layers.test(lt.layers)){const re=Xt.side;Xt.side=Qn,Xt.needsUpdate=!0,na(De,ut,lt,vn,Xt,Bn),Xt.side=re,Xt.needsUpdate=!0,Vt=!0}}Vt===!0&&(K.updateMultisampleRenderTarget(Ut),K.updateRenderTargetMipmap(Ut))}L.setRenderTarget(Nt,Wt,Kt),L.setClearColor(ht,Mt),oe!==void 0&&(lt.viewport=oe),L.toneMapping=ie}function _n(w,Y,ut){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let at=0,Ut=w.length;at<Ut;at++){const Ht=w[at],{object:Nt,geometry:Wt,group:Kt}=Ht;let ie=Ht.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Nt.layers.test(ut.layers)&&na(Nt,Y,ut,Wt,ie,Kt)}}function na(w,Y,ut,lt,at,Ut){w.onBeforeRender(L,Y,ut,lt,at,Ut),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(L,Y,ut,lt,w,Ut),at.transparent===!0&&at.side===bi&&at.forceSinglePass===!1?(at.side=Qn,at.needsUpdate=!0,L.renderBufferDirect(ut,Y,lt,at,w,Ut),at.side=ys,at.needsUpdate=!0,L.renderBufferDirect(ut,Y,lt,at,w,Ut),at.side=bi):L.renderBufferDirect(ut,Y,lt,at,w,Ut),w.onAfterRender(L,Y,ut,lt,at,Ut)}function Ia(w,Y,ut){Y.isScene!==!0&&(Y=Ae);const lt=T.get(w),at=F.state.lights,Ut=F.state.shadowsArray,Ht=at.state.version,Nt=Dt.getParameters(w,at.state,Ut,Y,ut),Wt=Dt.getProgramCacheKey(Nt);let Kt=lt.programs;lt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,lt.fog=Y.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;lt.envMap=vt.get(w.envMap||lt.environment,ie),lt.envMapRotation=lt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Re),Kt=new Map,lt.programs=Kt);let oe=Kt.get(Wt);if(oe!==void 0){if(lt.currentProgram===oe&&lt.lightsStateVersion===Ht)return Nl(w,Nt),oe}else Nt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Nt,L),oe=Dt.acquireProgram(Nt,Wt),Kt.set(Wt,oe),lt.uniforms=Nt.uniforms;const Vt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=bt.uniform),Nl(w,Nt),lt.needsLights=go(w),lt.lightsStateVersion=Ht,lt.needsLights&&(Vt.ambientLightColor.value=at.state.ambient,Vt.lightProbe.value=at.state.probe,Vt.directionalLights.value=at.state.directional,Vt.directionalLightShadows.value=at.state.directionalShadow,Vt.spotLights.value=at.state.spot,Vt.spotLightShadows.value=at.state.spotShadow,Vt.rectAreaLights.value=at.state.rectArea,Vt.ltc_1.value=at.state.rectAreaLTC1,Vt.ltc_2.value=at.state.rectAreaLTC2,Vt.pointLights.value=at.state.point,Vt.pointLightShadows.value=at.state.pointShadow,Vt.hemisphereLights.value=at.state.hemi,Vt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Vt.spotLightMatrix.value=at.state.spotLightMatrix,Vt.spotLightMap.value=at.state.spotLightMap,Vt.pointShadowMatrix.value=at.state.pointShadowMatrix),lt.currentProgram=oe,lt.uniformsList=null,oe}function Ul(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Nl(w,Y){const ut=T.get(w);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function Ol(w,Y,ut,lt,at){Y.isScene!==!0&&(Y=Ae),K.resetTextureUnits();const Ut=Y.fog,Ht=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?Y.environment:null,Nt=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:oo,Wt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Kt=vt.get(lt.envMap||Ht,Wt),ie=lt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,oe=!!ut.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!ut.morphAttributes.position,de=!!ut.morphAttributes.normal,Qe=!!ut.morphAttributes.color;let Je=Qi;lt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Je=L.toneMapping);const De=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,vn=De!==void 0?De.length:0,Xt=T.get(lt),Bn=F.state.lights;if(Zt===!0&&(Qt===!0||w!==Q)){const cn=w===Q&&lt.id===it;bt.setState(lt,w,cn)}let re=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Bn.state.version||Xt.outputColorSpace!==Nt||at.isBatchedMesh&&Xt.batching===!1||!at.isBatchedMesh&&Xt.batching===!0||at.isBatchedMesh&&Xt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Xt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Xt.instancing===!1||!at.isInstancedMesh&&Xt.instancing===!0||at.isSkinnedMesh&&Xt.skinning===!1||!at.isSkinnedMesh&&Xt.skinning===!0||at.isInstancedMesh&&Xt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Xt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Xt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Xt.instancingMorph===!1&&at.morphTexture!==null||Xt.envMap!==Kt||lt.fog===!0&&Xt.fog!==Ut||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==bt.numPlanes||Xt.numIntersection!==bt.numIntersection)||Xt.vertexAlphas!==ie||Xt.vertexTangents!==oe||Xt.morphTargets!==Vt||Xt.morphNormals!==de||Xt.morphColors!==Qe||Xt.toneMapping!==Je||Xt.morphTargetsCount!==vn)&&(re=!0):(re=!0,Xt.__version=lt.version);let zn=Xt.currentProgram;re===!0&&(zn=Ia(lt,Y,at));let ti=!1,wi=!1,ei=!1;const Ie=zn.getUniforms(),ln=Xt.uniforms;if(Yt.useProgram(zn.program)&&(ti=!0,wi=!0,ei=!0),lt.id!==it&&(it=lt.id,wi=!0),ti||Q!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(X,"projectionMatrix",w.projectionMatrix),Ie.setValue(X,"viewMatrix",w.matrixWorldInverse);const Di=Ie.map.cameraPosition;Di!==void 0&&Di.setValue(X,ue.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Ie.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ie.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,wi=!0,ei=!0)}if(Xt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Ie.setValue(X,"directionalShadowMap",Bn.state.directionalShadowMap,K),Bn.state.spotShadowMap.length>0&&Ie.setValue(X,"spotShadowMap",Bn.state.spotShadowMap,K),Bn.state.pointShadowMap.length>0&&Ie.setValue(X,"pointShadowMap",Bn.state.pointShadowMap,K)),at.isSkinnedMesh){Ie.setOptional(X,at,"bindMatrix"),Ie.setOptional(X,at,"bindMatrixInverse");const cn=at.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ie.setValue(X,"boneTexture",cn.boneTexture,K))}at.isBatchedMesh&&(Ie.setOptional(X,at,"batchingTexture"),Ie.setValue(X,"batchingTexture",at._matricesTexture,K),Ie.setOptional(X,at,"batchingIdTexture"),Ie.setValue(X,"batchingIdTexture",at._indirectTexture,K),Ie.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Ie.setValue(X,"batchingColorTexture",at._colorsTexture,K));const Hn=ut.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Bt.update(at,ut,zn),(wi||Xt.receiveShadow!==at.receiveShadow)&&(Xt.receiveShadow=at.receiveShadow,Ie.setValue(X,"receiveShadow",at.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&Y.environment!==null&&(ln.envMapIntensity.value=Y.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=o2()),wi&&(Ie.setValue(X,"toneMappingExposure",L.toneMappingExposure),Xt.needsLights&&Es(ln,ei),Ut&&lt.fog===!0&&Jt.refreshFogUniforms(ln,Ut),Jt.refreshMaterialUniforms(ln,lt,_t,j,F.state.transmissionRenderTarget[w.id]),bu.upload(X,Ul(Xt),ln,K)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(bu.upload(X,Ul(Xt),ln,K),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ie.setValue(X,"center",at.center),Ie.setValue(X,"modelViewMatrix",at.modelViewMatrix),Ie.setValue(X,"normalMatrix",at.normalMatrix),Ie.setValue(X,"modelMatrix",at.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const cn=lt.uniformsGroups;for(let Di=0,ia=cn.length;Di<ia;Di++){const rr=cn[Di];zt.update(rr,zn),zt.bind(rr,zn)}}return zn}function Es(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Y,ut){const lt=T.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Y,T.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ut,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ut=T.get(w);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const Fa=X.createFramebuffer();this.setRenderTarget=function(w,Y=0,ut=0){J=w,H=Y,Z=ut;let lt=null,at=!1,Ut=!1;if(w){const Nt=T.get(w);if(Nt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(X.FRAMEBUFFER,Nt.__webglFramebuffer),P.copy(w.viewport),G.copy(w.scissor),st=w.scissorTest,Yt.viewport(P),Yt.scissor(G),Yt.setScissorTest(st),it=-1;return}else if(Nt.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Nt.__hasExternalTextures)K.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Nt.__boundDepthTexture!==ie){if(ie!==null&&T.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);const Kt=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?lt=Kt[Y][ut]:lt=Kt[Y],at=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?lt=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?lt=Kt[ut]:lt=Kt,P.copy(w.viewport),G.copy(w.scissor),st=w.scissorTest}else P.copy(tt).multiplyScalar(_t).floor(),G.copy(mt).multiplyScalar(_t).floor(),st=Et;if(ut!==0&&(lt=Fa),Yt.bindFramebuffer(X.FRAMEBUFFER,lt)&&Yt.drawBuffers(w,lt),Yt.viewport(P),Yt.scissor(G),Yt.setScissorTest(st),at){const Nt=T.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,ut)}else if(Ut){const Nt=Y;for(let Wt=0;Wt<w.textures.length;Wt++){const Kt=T.get(w.textures[Wt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Wt,Kt.__webglTexture,ut,Nt)}}else if(w!==null&&ut!==0){const Nt=T.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nt.__webglTexture,ut)}it=-1},this.readRenderTargetPixels=function(w,Y,ut,lt,at,Ut,Ht,Nt=0){if(!(w&&w.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){Yt.bindFramebuffer(X.FRAMEBUFFER,Wt);try{const Kt=w.textures[Nt],ie=Kt.format,oe=Kt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),!Pe.textureFormatReadable(ie)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-lt&&ut>=0&&ut<=w.height-at&&X.readPixels(Y,ut,lt,at,wt.convert(ie),wt.convert(oe),Ut)}finally{const Kt=J!==null?T.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ut,lt,at,Ut,Ht,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt)if(Y>=0&&Y<=w.width-lt&&ut>=0&&ut<=w.height-at){Yt.bindFramebuffer(X.FRAMEBUFFER,Wt);const Kt=w.textures[Nt],ie=Kt.format,oe=Kt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),!Pe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),X.readPixels(Y,ut,lt,at,wt.convert(ie),wt.convert(oe),0);const de=J!==null?T.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(X.FRAMEBUFFER,de);const Qe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await oT(X,Qe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.deleteBuffer(Vt),X.deleteSync(Qe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ut=0){const lt=Math.pow(2,-ut),at=Math.floor(w.image.width*lt),Ut=Math.floor(w.image.height*lt),Ht=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;K.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ut,0,0,Ht,Nt,at,Ut),Yt.unbindTexture()};const Ba=X.createFramebuffer(),bs=X.createFramebuffer();this.copyTextureToTexture=function(w,Y,ut=null,lt=null,at=0,Ut=0){let Ht,Nt,Wt,Kt,ie,oe,Vt,de,Qe;const Je=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(ut!==null)Ht=ut.max.x-ut.min.x,Nt=ut.max.y-ut.min.y,Wt=ut.isBox3?ut.max.z-ut.min.z:1,Kt=ut.min.x,ie=ut.min.y,oe=ut.isBox3?ut.min.z:0;else{const ln=Math.pow(2,-at);Ht=Math.floor(Je.width*ln),Nt=Math.floor(Je.height*ln),w.isDataArrayTexture?Wt=Je.depth:w.isData3DTexture?Wt=Math.floor(Je.depth*ln):Wt=1,Kt=0,ie=0,oe=0}lt!==null?(Vt=lt.x,de=lt.y,Qe=lt.z):(Vt=0,de=0,Qe=0);const De=wt.convert(Y.format),vn=wt.convert(Y.type);let Xt;Y.isData3DTexture?(K.setTexture3D(Y,0),Xt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(K.setTexture2DArray(Y,0),Xt=X.TEXTURE_2D_ARRAY):(K.setTexture2D(Y,0),Xt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const Bn=X.getParameter(X.UNPACK_ROW_LENGTH),re=X.getParameter(X.UNPACK_IMAGE_HEIGHT),zn=X.getParameter(X.UNPACK_SKIP_PIXELS),ti=X.getParameter(X.UNPACK_SKIP_ROWS),wi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,oe);const ei=w.isDataArrayTexture||w.isData3DTexture,Ie=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const ln=T.get(w),Hn=T.get(Y),cn=T.get(ln.__renderTarget),Di=T.get(Hn.__renderTarget);Yt.bindFramebuffer(X.READ_FRAMEBUFFER,cn.__webglFramebuffer),Yt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ia=0;ia<Wt;ia++)ei&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(w).__webglTexture,at,oe+ia),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Ut,Qe+ia)),X.blitFramebuffer(Kt,ie,Ht,Nt,Vt,de,Ht,Nt,X.DEPTH_BUFFER_BIT,X.NEAREST);Yt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||w.isRenderTargetTexture||T.has(w)){const ln=T.get(w),Hn=T.get(Y);Yt.bindFramebuffer(X.READ_FRAMEBUFFER,Ba),Yt.bindFramebuffer(X.DRAW_FRAMEBUFFER,bs);for(let cn=0;cn<Wt;cn++)ei?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ln.__webglTexture,at,oe+cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ln.__webglTexture,at),Ie?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Hn.__webglTexture,Ut,Qe+cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Hn.__webglTexture,Ut),at!==0?X.blitFramebuffer(Kt,ie,Ht,Nt,Vt,de,Ht,Nt,X.COLOR_BUFFER_BIT,X.NEAREST):Ie?X.copyTexSubImage3D(Xt,Ut,Vt,de,Qe+cn,Kt,ie,Ht,Nt):X.copyTexSubImage2D(Xt,Ut,Vt,de,Kt,ie,Ht,Nt);Yt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ie?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Xt,Ut,Vt,de,Qe,Ht,Nt,Wt,De,vn,Je.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Xt,Ut,Vt,de,Qe,Ht,Nt,Wt,De,Je.data):X.texSubImage3D(Xt,Ut,Vt,de,Qe,Ht,Nt,Wt,De,vn,Je):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ut,Vt,de,Ht,Nt,De,vn,Je.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ut,Vt,de,Je.width,Je.height,De,Je.data):X.texSubImage2D(X.TEXTURE_2D,Ut,Vt,de,Ht,Nt,De,vn,Je);X.pixelStorei(X.UNPACK_ROW_LENGTH,Bn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,re),X.pixelStorei(X.UNPACK_SKIP_PIXELS,zn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ti),X.pixelStorei(X.UNPACK_SKIP_IMAGES,wi),Ut===0&&Y.generateMipmaps&&X.generateMipmap(Xt),Yt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){H=0,Z=0,J=null,Yt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const nx={type:"change"},$p={type:"start"},py={type:"end"},gu=new Pu,ix=new _s,c2=Math.cos(70*Tl.DEG2RAD),yn=new et,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ld=1e-6;class u2 extends pA{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Ss,this._lastTargetPosition=new et,this._quat=new Ss().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lv,this._sphericalDelta=new Lv,this._scale=1,this._panOffset=new et,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new et,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h2.bind(this),this._onPointerDown=f2.bind(this),this._onPointerUp=d2.bind(this),this._onContextMenu=y2.bind(this),this._onMouseWheel=g2.bind(this),this._onKeyDown=_2.bind(this),this._onTouchStart=v2.bind(this),this._onTouchMove=x2.bind(this),this._onMouseDown=p2.bind(this),this._onMouseMove=m2.bind(this),this._interceptControlDown=S2.bind(this),this._interceptControlUp=M2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nx),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=yn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<c2?this.object.lookAt(this.target):(ix.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(ix,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ld||this._lastTargetPosition.distanceToSquared(this.target)>Ld?(this.dispatchEvent(nx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function f2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function h2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function d2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(py),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function p2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case eo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case eo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case eo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent($p)}function m2(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function g2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent($p),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(py))}function _2(r){this.enabled!==!1&&this._handleKeyDown(r)}function v2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent($p)}function x2(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function y2(r){this.enabled!==!1&&r.preventDefault()}function S2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class E2 extends Qp{constructor(t){super(t)}load(t,i,s,l){const c=this,f=new rA(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(d){const g=new DataView(d),_=32/8*3+32/8*3*3+16/8,v=g.getUint32(80,!0);if(80+32/8+v*_===g.byteLength)return!0;const E=[115,111,108,105,100];for(let A=0;A<5;A++)if(s(E,g,A))return!1;return!0}function s(d,g,_){for(let v=0,y=d.length;v<y;v++)if(d[v]!==g.getUint8(_+v))return!1;return!0}function l(d){const g=new DataView(d),_=g.getUint32(80,!0);let v,y,E,A=!1,S,x,R,D,U;for(let H=0;H<70;H++)g.getUint32(H,!1)==1129270351&&g.getUint8(H+4)==82&&g.getUint8(H+5)==61&&(A=!0,S=new Float32Array(_*3*3),x=g.getUint8(H+6)/255,R=g.getUint8(H+7)/255,D=g.getUint8(H+8)/255,U=g.getUint8(H+9)/255);const F=84,N=50,z=new $n,b=new Float32Array(_*3*3),L=new Float32Array(_*3*3),k=new Te;for(let H=0;H<_;H++){const Z=F+H*N,J=g.getFloat32(Z,!0),it=g.getFloat32(Z+4,!0),Q=g.getFloat32(Z+8,!0);if(A){const P=g.getUint16(Z+48,!0);(P&32768)===0?(v=(P&31)/31,y=(P>>5&31)/31,E=(P>>10&31)/31):(v=x,y=R,E=D)}for(let P=1;P<=3;P++){const G=Z+P*12,st=H*3*3+(P-1)*3;b[st]=g.getFloat32(G,!0),b[st+1]=g.getFloat32(G+4,!0),b[st+2]=g.getFloat32(G+8,!0),L[st]=J,L[st+1]=it,L[st+2]=Q,A&&(k.setRGB(v,y,E,fi),S[st]=k.r,S[st+1]=k.g,S[st+2]=k.b)}}return z.setAttribute("position",new Jn(b,3)),z.setAttribute("normal",new Jn(L,3)),A&&(z.setAttribute("color",new Jn(S,3)),z.hasColors=!0,z.alpha=U),z}function c(d){const g=new $n,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let E=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,S=new RegExp("vertex"+A+A+A,"g"),x=new RegExp("normal"+A+A+A,"g"),R=[],D=[],U=[],F=new et;let N,z=0,b=0,L=0;for(;(N=_.exec(d))!==null;){b=L;const k=N[0],H=(N=y.exec(k))!==null?N[1]:"";for(U.push(H);(N=v.exec(k))!==null;){let it=0,Q=0;const P=N[0];for(;(N=x.exec(P))!==null;)F.x=parseFloat(N[1]),F.y=parseFloat(N[2]),F.z=parseFloat(N[3]),Q++;for(;(N=S.exec(P))!==null;)R.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),D.push(F.x,F.y,F.z),it++,L++;Q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),it!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const Z=b,J=L-b;g.userData.groupNames=U,g.addGroup(Z,J,z),z++}return g.setAttribute("position",new Ti(R,3)),g.setAttribute("normal",new Ti(D,3)),g}function f(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const g=new Uint8Array(d.length);for(let _=0;_<d.length;_++)g[_]=d.charCodeAt(_)&255;return g.buffer||g}else return d}const m=p(t);return i(m)?l(m):c(f(t))}}const b2="/Vibra-Web/",wp=r=>`${b2}${String(r).replace(/^\/+/,"")}`,ax=wp("models/pad_2.stl"),T2=[wp("models/Prototype-stripped.stl"),wp("models/Protoype-stripped.stl")],sx=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[^a-z0-9]+/g,"");function Mi(r,...t){if(!r)return null;const i=t.map(sx);for(const s of Object.keys(r)){const l=sx(s);if(i.includes(l))return r[s]}return null}function Ud(r){const t=Number(String(r??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}const Dp=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase().replace(/[\s\-]+/g,"");function A2(r){const i=String(r??"").toLowerCase().match(/(\d+)/),s=i?Number(i[1]):1;return Math.min(3,Math.max(0,s-1))}function R2(r){return new Promise((t,i)=>{new E2().load(r,t,void 0,i)})}async function rx(r,t){let i=null;for(const s of r)try{return t?.(s),{geom:await R2(s),url:s}}catch(l){i=l}throw i||new Error("All STL URLs failed")}function ox(r){const t=[new Ln(0,0,0),new Ln(-Math.PI/2,0,0),new Ln(Math.PI/2,0,0),new Ln(0,0,-Math.PI/2),new Ln(0,0,Math.PI/2),new Ln(0,-Math.PI/2,0),new Ln(0,Math.PI/2,0)];let i=null,s=-1/0;for(const l of t){const c=r.clone();c.applyMatrix4(new je().makeRotationFromEuler(l)),c.computeBoundingBox();const f=new et;c.boundingBox.getSize(f),f.y>s&&(s=f.y,i=c)}return i||r}function lx(r,t=1){const i=r.clone();i.computeBoundingBox();const s=i.boundingBox,l=new et;s.getCenter(l);const c=s.min.y;i.translate(-l.x,-c,-l.z),i.computeBoundingBox();const f=new et;i.boundingBox.getSize(f);const p=Math.max(f.x,f.y,f.z)||1,m=t/p;return i.computeVertexNormals(),{geom:i,scale:m}}function cx(r,{fontSize:t=56}={}){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=256,i.height=128,s.clearRect(0,0,i.width,i.height),s.font=`bold ${t}px Arial`,s.fillStyle="rgba(0, 229, 255, 0.95)",s.textAlign="center",s.textBaseline="middle",s.fillText(r,i.width/2,i.height/2);const l=new iy(i);l.needsUpdate=!0,l.minFilter=gn,l.magFilter=gn;const c=new Iu({map:l,transparent:!0,depthWrite:!1,depthTest:!0,side:bi}),f=new er(.18,.09),p=new mn(f,c);return p.rotation.x=-Math.PI/2,p.renderOrder=10,p}function C2({parent:r,lengthM:t,widthM:i,originX:s=0,originZ:l=0,minorCm:c=10,majorCm:f=50,y:p=.002}){const m=new wa;m.name="MeasurementGridCM";const d=t/2,g=i/2,_=c/100,v=f/100,y=new Al({color:51455,transparent:!0,opacity:.18}),E=new Al({color:58879,transparent:!0,opacity:.6}),A=(U,F,N,z,b)=>{const L=new $n().setFromPoints([new et(U,p,F),new et(N,p,z)]),k=new ey(L,b);return k.renderOrder=1,k},S=(U,F)=>{const N=U/F;return Math.abs(N-Math.round(N))<1e-6};for(let U=-d;U<=d+1e-6;U+=_){const F=U+d;m.add(A(U,-g,U,g,S(F,v)?E:y))}for(let U=-g;U<=g+1e-6;U+=_){const F=U+g;m.add(A(-d,U,d,U,S(F,v)?E:y))}const x=p+.004,R=Tl.clamp(l,-g,g),D=Tl.clamp(s,-d,d);for(let U=-d;U<=d+1e-6;U+=v){const F=Math.round((U-s)*100),N=cx(`${F} cm`,{fontSize:56});N.position.set(U,x,R),m.add(N)}for(let U=-g;U<=g+1e-6;U+=v){const F=Math.round((U-l)*100),N=cx(`${F} cm`,{fontSize:56});N.position.set(D,x,U),N.rotation.z=Math.PI/2,m.add(N)}return r.add(m),m}function ux(r,{fontSize:t=54}={}){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=256,i.height=128,s.clearRect(0,0,i.width,i.height),s.font=`bold ${t}px Arial`,s.fillStyle="rgba(0, 229, 255, 0.95)",s.textAlign="center",s.textBaseline="middle",s.fillText(r,i.width/2,i.height/2);const l=new iy(i);l.needsUpdate=!0,l.minFilter=gn,l.magFilter=gn;const c=new Iu({map:l,transparent:!0,depthWrite:!1,depthTest:!0,side:bi}),f=new er(.18,.09),p=new mn(f,c);return p.renderOrder=10,p}function w2({parent:r,lengthM:t,widthM:i,heightM:s,wallThickness:l=.05,minorCm:c=10,majorCm:f=50,surfaceOffset:p=.002}){const m=new wa;m.name="WallRulersCM";const d=c/100,g=f/100,_=new Al({color:51455,transparent:!0,opacity:.25}),v=new Al({color:58879,transparent:!0,opacity:.7}),y=(R,D,U)=>{const F=new $n().setFromPoints([R,D]),N=new ey(F,U);return N.renderOrder=2,N},E=R=>{const D=R/g;return Math.abs(D-Math.round(D))<1e-6},A=t/2,x=-(i/2)+l/2+p;{const R=-A+.12;for(let D=0;D<=s+1e-6;D+=d){const U=E(D),F=U?.18:.1;if(m.add(y(new et(R,D,x),new et(R+F,D,x),U?v:_)),U){const N=Math.round(D*100),z=ux(`${N} cm`,{fontSize:54});z.position.set(R+F+.12,D,x),m.add(z)}}}for(let D=-A;D<=A+1e-6;D+=d){const U=D+A,F=E(U),N=F?.16:.09;if(m.add(y(new et(D,.22,x),new et(D,.22+N,x),F?v:_)),F){const z=Math.round(U*100),b=ux(`${z} cm`,{fontSize:54});b.position.set(D,.22+N+.1,x),b.rotation.z=Math.PI/2,m.add(b)}}return r.add(m),m}const fx={hotspot:{title:"Hotspot Treatment",what:["A hotspot is a part of the room where sound becomes too strong or “focuses” in one area.","It can happen when reflections and low-frequency build-up collect at certain points (commonly corners or near walls).","Your data detects hotspot based on the measured parameters and classification output from the system."],fixed:{key:"bass_trap",label:"Bass Trap (Recommended)",desc:"Bass traps help reduce low-frequency build-up and smooth the room response. They are usually placed in corners and wall–ceiling corners where bass energy collects.",options:[{name:"Rockwool / Mineral Wool Corner Bass Trap",text:"Common DIY/pro option. Materials are widely available in PH hardware suppliers; many builders also sell ready-made corner traps online."},{name:"Foam Corner Bass Trap (Acoustic Foam)",text:"Easy to buy (PH e-commerce). Works mainly on mid/high-bass compared to thick wool traps, but still helps for basic control."},{name:"Panel Bass Trap (Thick Broadband Panels)",text:"Thicker wall panels placed at corners/first reflections. Often sold locally by acoustic treatment shops and custom builders."},{name:"Tube / Cylindrical Bass Trap",text:"Portable and repositionable. Some local sellers offer cylindrical traps; can also be custom-made by upholstery/wood shops."}],footnote:"Tip: Corner placement usually gives the biggest improvement for hotspots caused by low-frequency build-up."}},deadspot:{title:"Deadspot Treatment",what:["A deadspot is a part of the room that feels weak, dull, or “missing detail.”","It can happen when reflections cancel out or when the space becomes overly absorptive in certain areas.","Your data detects deadspot based on the measured parameters and classification output from the system."],fixed:{key:"diffuser",label:"Diffuser (Recommended)",desc:"Diffusers scatter reflections instead of removing them. This helps make the room feel more natural and balanced, improving spaciousness without adding strong echo.",options:[{name:"QRD Diffuser (1D)",text:"Common studio diffuser type. Available via local acoustic builders and custom wood shops in PH."},{name:"Skyline Diffuser (2D)",text:"Scatters sound in many directions. Often made-to-order locally; some ready-made options appear on PH marketplaces."},{name:"Poly / Curved Diffuser",text:"Smooth scattering (good for small rooms). Usually custom-made using plywood/curved panels by local fabricators."},{name:"Slat / Hybrid Diffuser Panel",text:"Hybrid look (wood slats + backing). Common in PH interior builds; can be ordered from acoustic/interior contractors."}],footnote:"Tip: Rear wall diffusion often helps deadspots by restoring useful reflections without making the room harsh."}}};function D2({rowsFor3D:r,spatial:t}){const i=Array.isArray(r)&&r.length>0,[s,l]=nt.useState("all"),[c,f]=nt.useState(!1),[p,m]=nt.useState({hotspot:!1,deadspot:!1}),[d,g]=nt.useState("before"),_=nt.useMemo(()=>{const x=Array.isArray(r)?r:[];let R=0,D=0,U=0;for(const F of x){const N=Dp(Mi(F,"Classification")??"");N.includes("hot")?R++:N.includes("dead")?D++:U++}return{hot:R,dead:D,neutral:U,total:x.length}},[r]),v=nt.useMemo(()=>{const x=Array.isArray(r)?r:[];if(s==="all")return x;const R=s==="hotspot"?"hot":"dead";return x.filter(D=>Dp(Mi(D,"Classification")).includes(R))},[r,s]);nt.useEffect(()=>{g("before")},[s]);const y=s==="hotspot"?fx.hotspot:s==="deadspot"?fx.deadspot:null,E=s==="hotspot"?p.hotspot:s==="deadspot"?p.deadspot:!1,A=i&&s!=="all",S=()=>{A&&(m(x=>s==="hotspot"?{...x,hotspot:!0}:s==="deadspot"?{...x,deadspot:!0}:x),g("after"))};return I.jsx("div",{className:"sim-slide sim-slide-2",children:I.jsxs("div",{className:"sim-row sim-row-2",children:[I.jsx("div",{className:"glass-card glass-card--bigLeft",children:I.jsxs("div",{className:"sim3d-card sim3d-card--three",children:[I.jsx(L2,{rowsFor3D:v,spatial:t,focusClass:s,viewMode:d,isApplied:E}),I.jsxs("div",{className:"three-legend",children:[I.jsx("div",{className:"three-legend-title",children:"Legend (Click to filter)"}),I.jsxs("button",{type:"button",className:`legend-btn ${s==="hotspot"?"on":""}`,onClick:()=>l("hotspot"),disabled:!i,title:i?"Show hotspots only":"Deploy data first in Slide 1",children:[I.jsx("span",{className:"swatch swatch-hot"})," Hotspot (",_.hot,")"]}),I.jsxs("button",{type:"button",className:`legend-btn ${s==="deadspot"?"on":""}`,onClick:()=>l("deadspot"),disabled:!i,title:i?"Show deadspots only":"Deploy data first in Slide 1",children:[I.jsx("span",{className:"swatch swatch-dead"})," Deadspot (",_.dead,")"]}),I.jsxs("button",{type:"button",className:`legend-btn ${s==="all"?"on":""}`,onClick:()=>l("all"),disabled:!i,title:i?"Show all pads":"Deploy data first in Slide 1",children:[I.jsx("span",{className:"swatch swatch-neutral"})," All (",_.total,")"]}),I.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Hover a pad to view details"}),I.jsx("div",{className:"three-legend-row",style:{opacity:.85},children:"Layer 1 (bottom) → Layer 4 (top)"})]})]})}),I.jsxs("div",{className:"glass-card glass-card--recommend",children:[I.jsx("h2",{className:"card-title card-title--recommend",children:"RECOMMENDATION"}),I.jsxs("div",{className:"recommend-inner",children:[I.jsxs("div",{className:"recommend-toolbar",children:[I.jsx("button",{type:"button",className:`guide-btn ${c?"on":""}`,onClick:()=>f(x=>!x),children:c?"Hide Guide":"Guide"}),I.jsx("div",{className:"recommend-mini",children:i?I.jsxs(I.Fragment,{children:["Showing ",I.jsx("b",{children:v.length})," pad(s)"]}):I.jsx(I.Fragment,{children:"No deployed data"})})]}),c&&I.jsxs("div",{className:"guide-card",children:[I.jsx("div",{className:"guide-title",children:"How to use Slide 2"}),I.jsxs("ol",{className:"guide-list",children:[I.jsxs("li",{children:["Go to Slide 1 → Import CSV → then click ",I.jsx("b",{children:"Deploy"}),"."]}),I.jsxs("li",{children:["In Slide 2, click ",I.jsx("b",{children:"Hotspot"})," or ",I.jsx("b",{children:"Deadspot"})," (Legend or buttons)."]}),I.jsx("li",{children:"Read the treatment recommendation."}),I.jsxs("li",{children:["Click ",I.jsx("b",{children:"Apply Treatment"})," to preview the “After” view in 3D."]}),I.jsxs("li",{children:["Use ",I.jsx("b",{children:"Before / After"})," to compare."]})]}),I.jsx("div",{className:"guide-note",children:"Note: Treatment preview is a visual indicator (green pads) to help users understand changes."})]}),i?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"info-card",style:{marginBottom:16},children:[I.jsx("div",{className:"info-title",children:"What are Hotspot and Deadspot?"}),I.jsxs("div",{className:"info-text",children:[I.jsx("b",{children:"Hotspot"})," = sound energy becomes too strong in a specific area (often due to reflections + build-up).",I.jsx("br",{}),I.jsx("b",{children:"Deadspot"})," = sound feels weak/dull in a specific area (often due to cancellations or uneven reflections).",I.jsx("br",{}),"These are detected from your measured parameters and the system’s classification result."]})]}),I.jsxs("div",{className:"select-card",children:[I.jsxs("div",{className:"select-title",children:["What you want to select: ",I.jsx("b",{children:"Hotspot"})," or ",I.jsx("b",{children:"Deadspot"}),"?"]}),I.jsxs("div",{className:"select-actions",children:[I.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("hotspot"),children:"Select Hotspot"}),I.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("deadspot"),children:"Select Deadspot"}),I.jsx("button",{type:"button",className:"select-btn",onClick:()=>l("all"),children:"Show All"})]}),I.jsx("div",{className:"select-hint",children:"You can also click the Legend inside the 3D panel."})]}),s==="all"?I.jsxs("div",{className:"info-card",children:[I.jsx("div",{className:"info-title",children:"Select one to continue"}),I.jsxs("div",{className:"info-text",children:["Choose ",I.jsx("b",{children:"Hotspot"})," or ",I.jsx("b",{children:"Deadspot"})," to show the recommended treatment and apply preview."]})]}):y&&I.jsxs("div",{className:"treat-card",children:[I.jsx("div",{className:"treat-title",children:y.title}),I.jsxs("div",{className:"treat-sub",children:["Showing ",I.jsx("b",{children:v.length})," pad(s) in 3D"]}),I.jsxs("div",{className:"treat-main",children:[I.jsx("div",{className:"treat-badge",children:y.fixed.label}),I.jsx("div",{className:"treat-desc",children:y.fixed.desc})]}),I.jsxs("div",{className:"treat-actions",children:[I.jsx("button",{type:"button",className:"apply-btn",onClick:S,disabled:E,title:E?"Treatment already applied":"Apply and preview After",children:E?"Applied ✓":"Apply Treatment"}),I.jsxs("div",{className:"compare-toggle",children:[I.jsx("button",{type:"button",className:`compare-btn ${d==="before"?"on":""}`,onClick:()=>g("before"),children:"Before"}),I.jsx("button",{type:"button",className:`compare-btn ${d==="after"?"on":""}`,onClick:()=>g("after"),disabled:!E,title:E?"View treated preview":"Apply treatment to enable After view",children:"After"})]})]}),I.jsxs("div",{className:"recommend-card",style:{marginTop:14},children:[I.jsx("div",{className:"recommend-card-title",children:"Available Types (PH-friendly)"}),I.jsx("div",{className:"recommend-list",style:{marginTop:10},children:y.fixed.options.map(x=>I.jsxs("div",{className:"recommend-item",children:[I.jsx("div",{className:"recommend-item-name",children:x.name}),I.jsx("div",{className:"recommend-item-text",children:x.text})]},x.name))}),I.jsx("div",{className:"treat-footnote",children:y.fixed.footnote})]})]})]}):I.jsxs("div",{className:"info-card",children:[I.jsx("div",{className:"info-title",children:"No data detected"}),I.jsxs("div",{className:"info-text",children:["Please import and deploy your data in ",I.jsx("b",{children:"Slide 1"})," first."]})]})]}),I.jsx("div",{className:"scroll-rail"}),I.jsx("div",{className:"scroll-thumb"})]})]})})}function L2({rowsFor3D:r,spatial:t,focusClass:i,viewMode:s,isApplied:l}){const c=nt.useRef(null),[f,p]=nt.useState({show:!1,x:0,y:0,text:""}),[m,d]=nt.useState("Initializing 3D…"),g=nt.useRef({renderer:null,scene:null,camera:null,controls:null,roomGroup:null,padsGroup:null,protoGroup:null}),_=nt.useRef(new dA),v=nt.useRef(new ce),y=nt.useRef(0),E=nt.useRef(""),A=nt.useRef({ready:!1,geom:null,baseScale:1,fixYaw:0}),S=nt.useRef({mesh:null,loaded:!1}),x=nt.useRef({rows:[],mesh:null}),[R,D]=nt.useState({x:0,z:0}),U=nt.useRef({hot:new ds({color:8129026,emissive:8129026,emissiveIntensity:.55,roughness:.35,metalness:.05}),dead:new ds({color:937106,emissive:937106,emissiveIntensity:.55,roughness:.35,metalness:.05}),neutral:new ds({color:15790320,emissive:15790320,emissiveIntensity:.12,roughness:.55,metalness:.02,transparent:!1,opacity:1}),treated:new ds({color:3066993,emissive:3066993,emissiveIntensity:.45,roughness:.45,metalness:.02}),floor:new ds({color:14540253,transparent:!0,opacity:.92}),wall:new ds({color:16777215,transparent:!0,opacity:.25,side:bi}),proto:new ds({color:16090919,roughness:.65,metalness:.25})});return nt.useEffect(()=>{const F=c.current;if(!F)return;const N=F.clientWidth,z=F.clientHeight;if(!N||!z){d("3D mount has 0 width/height. Fix CSS height of .three-mount.");return}const b=new l2({antialias:!0,alpha:!0});b.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),b.setSize(N,z),b.setClearAlpha(0),F.appendChild(b.domElement);const L=new BT,k=new Ei(60,N/z,.05,200);k.position.set(0,2.5,4);const H=new u2(k,b.domElement);H.enableDamping=!0,H.dampingFactor=.08,L.add(new uA(16777215,.75));const Z=new cA(16777215,1.1);Z.position.set(6,9,6),L.add(Z);const J=new wa,it=new wa,Q=new wa;L.add(J),L.add(it),L.add(Q),g.current={renderer:b,scene:L,camera:k,controls:H,roomGroup:J,padsGroup:it,protoGroup:Q},d("3D ready. Loading models…");const P=new ResizeObserver(()=>{const O=F.clientWidth,j=F.clientHeight;b.setSize(O,j),k.aspect=O/j,k.updateProjectionMatrix()});P.observe(F);const G=O=>{const j=b.domElement.getBoundingClientRect(),_t=O.clientX-j.left,Rt=O.clientY-j.top;y.current&&cancelAnimationFrame(y.current),y.current=requestAnimationFrame(()=>{v.current.set(_t/j.width*2-1,-(Rt/j.height*2-1)),_.current.setFromCamera(v.current,k);const Lt=x.current.mesh;if(!Lt){f.show&&p(Ne=>({...Ne,show:!1})),E.current="";return}const tt=_.current.intersectObject(Lt,!1);if(!tt.length){f.show&&p(Ne=>({...Ne,show:!1})),E.current="";return}const Et=tt[0].instanceId,Pt=x.current.rows?.[Et];if(!Pt)return;const Qt=[`#${Et+1}`,`Layer: ${Mi(Pt,"Layer")??"-"}`,`Angle: ${Mi(Pt,"Angle")??"-"}`,`Ultrasonic: ${Mi(Pt,"Ultrasonic","Distance","UTV")??"-"}`,`Decibel: ${Mi(Pt,"Decibel","DB","dB")??"-"}`,`RT60: ${Mi(Pt,"RT60","Reverberation")??"-"}`,`Classification: ${Mi(Pt,"Classification")??"-"}`].join(`
`);Qt!==E.current||!f.show?(E.current=Qt,p({show:!0,x:_t+14,y:Rt+14,text:Qt})):p(Ne=>({...Ne,x:_t+14,y:Rt+14}))})},st=()=>{y.current&&cancelAnimationFrame(y.current),y.current=0,E.current="",p(O=>O.show?{...O,show:!1}:O)};b.domElement.addEventListener("pointermove",G),b.domElement.addEventListener("pointerleave",st);let ht=0;const Mt=()=>{ht=requestAnimationFrame(Mt),H.update(),b.render(L,k)};return Mt(),()=>{cancelAnimationFrame(ht),P.disconnect(),b.domElement.removeEventListener("pointermove",G),b.domElement.removeEventListener("pointerleave",st),H.dispose(),b.dispose(),b.domElement&&F.contains(b.domElement)&&F.removeChild(b.domElement)}},[]),nt.useEffect(()=>{const{roomGroup:F}=g.current;if(!F)return;F.clear();const N=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:3,z=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3,b=Ud(t?.heightRaw),L=b!=null?b/100:2.6,k=new mn(new er(N,z),U.current.floor);k.rotation.x=-Math.PI/2,F.add(k);const H=.05,Z=U.current.wall,J=new mn(new Zi(N,L,H),Z);J.position.set(0,L/2,-z/2),F.add(J);const it=new mn(new Zi(N,L,H),Z);it.position.set(0,L/2,z/2),F.add(it);const Q=new mn(new Zi(H,L,z),Z);Q.position.set(-N/2,L/2,0),F.add(Q);const P=new mn(new Zi(H,L,z),Z);P.position.set(N/2,L/2,0),F.add(P),C2({parent:F,lengthM:N,widthM:z,originX:R.x,originZ:R.z,minorCm:10,majorCm:50,y:.002}),w2({parent:F,lengthM:N,widthM:z,heightM:L,wallThickness:H,minorCm:10,majorCm:50,surfaceOffset:.002})},[t,R]),nt.useEffect(()=>{let F=!1;return(async()=>{if(!A.current.ready){d("Loading pad_2.stl…");try{const{geom:N}=await rx([ax],()=>{});if(F)return;const z=ox(N),{geom:b,scale:L}=lx(z,1);b.computeBoundingBox();const k=new et;b.boundingBox.getSize(k);const Z=(k.x<=k.z?"x":"z")==="x"?-Math.PI/2:0;A.current.geom=b,A.current.baseScale=L,A.current.fixYaw=Z,A.current.ready=!0,d("pad_2.stl loaded ✅")}catch(N){console.error("[Pad] load failed ❌",N),d(`FAILED to load pad_2.stl. Check DevTools > Network if ${ax} is 404.`)}}})(),()=>{F=!0}},[]),nt.useEffect(()=>{let F=!1;return(async()=>{const{protoGroup:N}=g.current;if(!N||S.current.loaded)return;N.clear();const z=new mn(new Zi(.25,.25,.25),new ds({color:16090919}));z.position.set(0,.125,0),N.add(z);try{d("Loading prototype STL…");const{geom:b,url:L}=await rx(T2,it=>d(`Loading prototype… trying ${it.split("/").slice(-1)[0]}`));if(F)return;const k=ox(b),{geom:H,scale:Z}=lx(k,1.8),J=new mn(H,U.current.proto);J.scale.setScalar(Z),N.clear(),N.add(J),S.current.mesh=J,S.current.loaded=!0,D({x:J.position.x,z:J.position.z}),d(`prototype loaded ✅ (${L.split("/").slice(-1)[0]})`)}catch(b){console.error("[Prototype] load failed ❌",b),d("FAILED to load prototype STL. Check /public/models/Prototype-stripped.stl (or Protoype-stripped.stl) and DevTools > Network.")}})(),()=>{F=!0}},[]),nt.useEffect(()=>{const{padsGroup:F}=g.current;if(!F)return;F.clear(),x.current.mesh=null,x.current.rows=[],E.current="",p(O=>O.show?{...O,show:!1}:O);const N=Array.isArray(r)?r:[];if(!N.length){d(O=>O.includes("loaded")?O:"No pads to display (no rows).");return}if(!A.current.ready||!A.current.geom){d(O=>O.includes("pad_2")?O:"Waiting for pad_2.stl…");return}const z=t?.lengthCm!=null&&Number.isFinite(t.lengthCm)?t.lengthCm/100:3,b=t?.widthCm!=null&&Number.isFinite(t.widthCm)?t.widthCm/100:3,L=z/2,k=b/2,H=O=>Ud(Mi(O,"X","PosX","PositionX","X(m)","X_m","Xcoord","ColumnX")),Z=O=>Ud(Mi(O,"Z","PosZ","PositionZ","Z(m)","Z_m","Zcoord","RowZ")),J=[[],[],[],[]];for(const O of N)J[A2(Mi(O,"Layer"))].push(O);const it=.07,Q=[];for(let O=0;O<4;O++){const j=J[O];if(!j.length)continue;if(j.reduce((Lt,tt)=>Lt+(H(tt)!=null&&Z(tt)!=null?1:0),0)/j.length>.7)for(const Lt of j){let tt=H(Lt),mt=Z(Lt);if(tt==null||mt==null)continue;(Math.abs(tt)>20||Math.abs(mt)>20)&&(tt=tt/100,mt=mt/100),tt=Tl.clamp(tt,-L+.08,L-.08),mt=Tl.clamp(mt,-k+.08,k-.08),Q.push({row:Lt,x:tt,z:mt,y:.001+O*it})}else{const Lt=j.length,tt=Math.ceil(Math.sqrt(Lt)),mt=Math.ceil(Lt/tt),Et=.16,Pt=Math.max(.5,z-Et*2),Zt=Math.max(.5,b-Et*2),Qt=Pt/Math.max(1,tt),Ne=Zt/Math.max(1,mt);for(let ue=0;ue<Lt;ue++){const _e=ue%tt,Ae=Math.floor(ue/tt),se=-Pt/2+Qt/2+_e*Qt,Ye=-Zt/2+Ne/2+Ae*Ne;Q.push({row:j[ue],x:se,z:Ye,y:.001+O*it})}}}if(!Q.length){d("No pads placed (missing coords + empty layers).");return}const P=A.current.geom,G=U.current.neutral.clone();G.vertexColors=!0;const st=new jT(P,G,Q.length);st.instanceMatrix.setUsage(aT),st.instanceColor=new Tp(new Float32Array(Q.length*3),3);const ht=new Tn,Mt=new Te;for(let O=0;O<Q.length;O++){const{row:j,x:_t,z:Rt,y:Lt}=Q[O],tt=Dp(Mi(j,"Classification")??""),mt=s==="after"&&l&&i!=="all"?3066993:tt.includes("hot")?8129026:tt.includes("dead")?937106:15790320;Mt.setHex(mt),st.setColorAt(O,Mt),ht.position.set(_t,Lt,Rt),ht.rotation.set(0,A.current.fixYaw||0,0);const Et=A.current.baseScale||1;ht.scale.setScalar(Et),ht.updateMatrix(),st.setMatrixAt(O,ht.matrix)}st.instanceMatrix.needsUpdate=!0,st.instanceColor.needsUpdate=!0,F.add(st),x.current.mesh=st,x.current.rows=Q.map(O=>O.row),d(O=>O.includes("loaded")?O:"Pads rendered ✅")},[r,t,i,s,l]),I.jsxs("div",{ref:c,className:"three-mount",style:{position:"relative"},children:[I.jsx("div",{style:{position:"absolute",left:10,top:10,padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,0.45)",color:"white",fontSize:12,zIndex:30,pointerEvents:"none",maxWidth:460},children:m}),f.show&&I.jsx("div",{style:{position:"absolute",left:f.x,top:f.y,whiteSpace:"pre-line",padding:"10px 12px",borderRadius:12,background:"rgba(0,0,0,0.55)",color:"white",fontSize:12,textAlign:"left",lineHeight:1.35,pointerEvents:"none",maxWidth:260,zIndex:20},children:f.text})]})}const U2=new URL("../../assets/Prototype-stripped.stl",import.meta.url).href,ms=r=>String(r??"").replace(/\uFEFF/g,"").replace(/\u00A0/g," ").trim().toLowerCase();function hx(r){const t=Number(String(r??"").replace(/[^\d.\-]/g,""));return Number.isFinite(t)?t:null}function N2(r,t){if(!t?.length)return;const i=Object.keys(t[0]||{}),s=p=>{const m=String(p??"");return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=[i.join(","),...t.map(p=>i.map(m=>s(p[m])).join(","))].join(`
`),c=new Blob([l],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");f.href=URL.createObjectURL(c),f.download=r,document.body.appendChild(f),f.click(),document.body.removeChild(f)}const O2=r=>r==null?null:(r%360+360)%360,P2=(r,t=3)=>{if(r==null)return null;const i=O2(r),s=[0,90,180,270];let l=null,c=1/0;for(const f of s){const p=Math.min(Math.abs(i-f),360-Math.abs(i-f));p<c&&(c=p,l=f)}return c<=t?l:null};function I2(){const r=nt.useMemo(()=>[0,1],[]),[t,i]=nt.useState(0),[s,l]=nt.useState(!1);nt.useEffect(()=>l(!0),[]);const[c,f]=nt.useState([]),[p,m]=nt.useState([]),[d,g]=nt.useState({type:"idle",message:""}),[_,v]=nt.useState(""),[y,E]=nt.useState(""),[A,S]=nt.useState(null),x=nt.useMemo(()=>{let b=[...c];if(A){const[L,k]=String(A).split(":");if(L==="layer"&&(b=b.filter(H=>ms(H.Layer)===ms(k))),L==="class"){const H=ms(k).replace(/[\s\-]+/g,"");b=b.filter(Z=>ms(String(Z.Classification)).replace(/[\s\-]+/g,"")===H)}}if(y.trim()){const L=ms(y);b=b.filter(k=>Object.values(k).some(H=>ms(H).includes(L)))}return b},[c,y,A]),R=nt.useMemo(()=>{const b=c.filter(j=>ms(j.Layer)===ms("Layer 1")),L={0:[],90:[],180:[],270:[]};for(const j of b){const _t=P2(hx(j.Angle),3);if(_t==null)continue;const Rt=hx(j.Ultrasonic);Rt!=null&&L[_t].push(Rt)}const k=L[0][0]??null,H=L[180][0]??null,Z=L[90][0]??null,J=L[270][0]??null,it=k!=null&&H!=null?k+H:null,Q=Z!=null&&J!=null?Z+J:null,G=(c.find(j=>String(j.HeightRaw??"").trim()!=="")||null)?.HeightRaw??"",st=it==null?null:it/100,ht=Q==null?null:Q/100,Mt=st!=null&&ht!=null?st*ht:null,O=Mt!=null?Mt>=3&&Mt<=5:null;return{lengthCm:it,widthCm:Q,heightRaw:G,area:Mt,qualified:O,debug:{u0:k,u180:H,u90:Z,u270:J}}},[c]),D=()=>i(b=>Math.max(0,b-1)),U=()=>i(b=>Math.min(r.length-1,b+1)),F=()=>{f([]),m([]),v(""),E(""),S(null),g({type:"idle",message:""}),i(0)},N=()=>{m(x),i(1)},z=()=>N2("vibra_raw_parameters.csv",x);return I.jsxs("div",{className:`simulation-page ${s?"enter":""}`,children:[t===0?I.jsx(Tb,{rawRows:c,setRawRows:f,displayedRows:x,searchInput:_,setSearchInput:v,setAppliedSearch:E,sortValue:A,setSortValue:S,onExport:z,onDeploy:N,onReset:F,spatial:R,uploadStatus:d,setUploadStatus:g}):I.jsx(D2,{rowsFor3D:p,spatial:R,prototypeUrl:U2}),I.jsxs("div",{className:"sim-controls",children:[I.jsx("button",{className:"sim-arrow",onClick:D,disabled:t===0,children:"‹"}),I.jsx("div",{className:"sim-dots",children:r.map((b,L)=>I.jsx("span",{className:`sim-dot ${L===t?"on":""}`},L))}),I.jsx("button",{className:"sim-arrow",onClick:U,disabled:t===r.length-1,children:"›"})]})]})}function F2(){return I.jsxs("div",{className:"inst-page",children:[I.jsx("h1",{className:"inst-title",children:"INSTRUCTION"}),I.jsx("h3",{className:"inst-subtitle",children:"HOW TO USE VIBRA"}),I.jsxs("div",{className:"inst-grid",children:[I.jsxs("div",{className:"inst-card",children:[I.jsx("h2",{className:"card-heading",children:"PROTOTYPE"}),I.jsxs("ol",{className:"inst-list",children:[I.jsx("li",{children:"Power on the prototype device."}),I.jsx("li",{children:"Place the device at the center of the room."}),I.jsx("li",{children:"Rotate the device 360° to scan the environment."}),I.jsx("li",{children:"Allow sensors to collect dB, distance, and RT60 data."}),I.jsx("li",{children:"Ensure measurements are stable before recording."}),I.jsx("li",{children:"Export or upload the gathered data."})]})]}),I.jsxs("div",{className:"inst-card",children:[I.jsx("h2",{className:"card-heading",children:"WEB APPLICATION"}),I.jsxs("ol",{className:"inst-list",children:[I.jsx("li",{children:"Go to the SIMULATION page."}),I.jsx("li",{children:"Import data (Cloud or Local)."}),I.jsx("li",{children:"Verify Angle, dB, Ultrasonic, RT60 values."}),I.jsx("li",{children:"Select classification (Hotspot/Deadspot/Neutral)."}),I.jsx("li",{children:"Click DEPLOY to map the data."}),I.jsx("li",{children:"Review recommendations and apply treatments."})]})]})]})]})}const B2="https://docs.google.com/spreadsheets/d/15EzmUf5PyGhI88RAx5znaZDTGuw_GUc4OMXKJS_A2Pk/edit?gid=0#gid=0";function z2(){const[r,t]=nt.useState(!1),[i,s]=nt.useState(""),[l,c]=nt.useState(""),[f,p]=nt.useState(""),[m,d]=nt.useState({type:"",text:""}),[g,_]=nt.useState(!1);nt.useEffect(()=>{t(!0)},[]);function v(E){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(E||"").trim())}async function y(E){if(E.preventDefault(),g)return;const A=i.trim(),S=l.trim(),x=f.trim();if(!A||!S||!x){d({type:"error",text:"Please fill out Name, Email, and Message."});return}if(!v(S)){d({type:"error",text:"Please enter a valid email address."});return}_(!0),d({type:"loading",text:"Sending..."});try{const R=await fetch(B2,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A,email:S,message:x})});let D=null;const U=await R.text();try{D=JSON.parse(U)}catch{D={ok:R.ok}}if(!R.ok||!D?.ok)throw new Error(D?.error||"Failed to send message.");d({type:"success",text:"Message sent! Thanks for reaching out."}),s(""),c(""),p("")}catch(R){d({type:"error",text:"Could not send. If this keeps happening, check the Apps Script deployment access (Anyone) and the URL."}),console.error(R)}finally{_(!1),setTimeout(()=>d({type:"",text:""}),3500)}}return I.jsxs("div",{className:`contact-page ${r?"enter":""}`,children:[I.jsx("h1",{className:"contact-title",children:"CONTACT US"}),I.jsx("h3",{className:"contact-subtitle",children:"GET IN TOUCH"}),I.jsxs("div",{className:"contact-grid",children:[I.jsxs("div",{className:"contact-card",children:[I.jsx("div",{className:"contact-label",children:"EMAIL"}),I.jsx("div",{className:"contact-value",children:"vibra.project@email.com"})]}),I.jsxs("div",{className:"contact-card",children:[I.jsx("div",{className:"contact-label",children:"SCHOOL"}),I.jsx("div",{className:"contact-value",children:"Technological Institute of the Philippines"})]}),I.jsxs("div",{className:"contact-card",children:[I.jsx("div",{className:"contact-label",children:"LOCATION"}),I.jsx("div",{className:"contact-value",children:"Quezon City, Philippines"})]})]}),m.text&&I.jsx("div",{className:`contact-toast ${m.type}`,children:m.text}),I.jsxs("form",{className:"contact-form",onSubmit:y,children:[I.jsxs("div",{className:"contact-field",children:[I.jsx("label",{children:"NAME"}),I.jsx("input",{value:i,onChange:E=>s(E.target.value),placeholder:"Your name",autoComplete:"name"})]}),I.jsxs("div",{className:"contact-field",children:[I.jsx("label",{children:"EMAIL"}),I.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Your email",autoComplete:"email"})]}),I.jsxs("div",{className:"contact-field",children:[I.jsx("label",{children:"MESSAGE"}),I.jsx("textarea",{value:f,onChange:E=>p(E.target.value),placeholder:"Your message...",rows:6})]}),I.jsx("button",{className:"contact-btn",type:"submit",disabled:g,children:g?"SENDING...":"SEND"})]})]})}function H2(){return I.jsx(tb,{children:I.jsx(DE,{children:I.jsxs(gs,{element:I.jsx(hb,{}),children:[I.jsx(gs,{path:"/",element:I.jsx(db,{})}),I.jsx(gs,{path:"/about",element:I.jsx(pb,{})}),I.jsx(gs,{path:"/team",element:I.jsx(Sb,{})}),I.jsx(gs,{path:"/simulation",element:I.jsx(I2,{})}),I.jsx(gs,{path:"/instruction",element:I.jsx(F2,{})}),I.jsx(gs,{path:"/contact",element:I.jsx(z2,{})})]})})})}DM.createRoot(document.getElementById("root")).render(I.jsx(MM.StrictMode,{children:I.jsx(H2,{})}));
