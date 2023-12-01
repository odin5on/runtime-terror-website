function Lm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bd={exports:{}},ns={},Vd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Mm=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),jm=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),Vm=Symbol.for("react.suspense"),$m=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),qu=Symbol.iterator;function Hm(t){return t===null||typeof t!="object"?null:(t=qu&&t[qu]||t["@@iterator"],typeof t=="function"?t:null)}var $d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wd=Object.assign,Hd={};function pr(t,e,n){this.props=t,this.context=e,this.refs=Hd,this.updater=n||$d}pr.prototype.isReactComponent={};pr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kd(){}Kd.prototype=pr.prototype;function Sl(t,e,n){this.props=t,this.context=e,this.refs=Hd,this.updater=n||$d}var kl=Sl.prototype=new Kd;kl.constructor=Sl;Wd(kl,pr.prototype);kl.isPureReactComponent=!0;var Yu=Array.isArray,Gd=Object.prototype.hasOwnProperty,Tl={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Yd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Gd.call(e,r)&&!qd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pi,type:t,key:o,ref:s,props:i,_owner:Tl.current}}function Km(t,e){return{$$typeof:Pi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pi}function Gm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qu=/\/+/g;function Ds(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gm(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Pi:case bm:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ds(s,0):r,Yu(i)?(n="",t!=null&&(n=t.replace(Qu,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(Cl(i)&&(i=Km(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Yu(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ds(o,a);s+=oo(o,e,n,l,i)}else if(l=Hm(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ds(o,a++),s+=oo(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function zi(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(o){return e.call(n,o,i++)}),r}function qm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},so={transition:null},Ym={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:so,ReactCurrentOwner:Tl};D.Children={map:zi,forEach:function(t,e,n){zi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zi(t,function(){e++}),e},toArray:function(t){return zi(t,function(e){return e})||[]},only:function(t){if(!Cl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=pr;D.Fragment=Mm;D.Profiler=jm;D.PureComponent=Sl;D.StrictMode=Um;D.Suspense=Vm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Tl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gd.call(e,l)&&!qd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pi,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:zm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fm,_context:t},t.Consumer=t};D.createElement=Yd;D.createFactory=function(t){var e=Yd.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Bm,render:t}};D.isValidElement=Cl;D.lazy=function(t){return{$$typeof:Wm,_payload:{_status:-1,_result:t},_init:qm}};D.memo=function(t,e){return{$$typeof:$m,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return we.current.useCallback(t,e)};D.useContext=function(t){return we.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return we.current.useDeferredValue(t)};D.useEffect=function(t,e){return we.current.useEffect(t,e)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return we.current.useMemo(t,e)};D.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};D.useRef=function(t){return we.current.useRef(t)};D.useState=function(t){return we.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";Vd.exports=D;var k=Vd.exports;const Qd=Dm(k),Qm=Lm({__proto__:null,default:Qd},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=k,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),eg=Object.prototype.hasOwnProperty,tg=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ng={key:!0,ref:!0,__self:!0,__source:!0};function Jd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)eg.call(e,r)&&!ng.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xm,type:t,key:o,ref:s,props:i,_owner:tg.current}}ns.Fragment=Zm;ns.jsx=Jd;ns.jsxs=Jd;Bd.exports=ns;var g=Bd.exports,va={},Xd={exports:{}},De={},Zd={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,A){var O=C.length;C.push(A);e:for(;0<O;){var J=O-1>>>1,oe=C[J];if(0<i(oe,A))C[J]=A,C[O]=oe,O=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var J=0,oe=C.length,ji=oe>>>1;J<ji;){var rn=2*(J+1)-1,Ls=C[rn],on=rn+1,Fi=C[on];if(0>i(Ls,O))on<oe&&0>i(Fi,Ls)?(C[J]=Fi,C[on]=O,J=on):(C[J]=Ls,C[rn]=O,J=rn);else if(on<oe&&0>i(Fi,O))C[J]=Fi,C[on]=O,J=on;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function w(C){if(_=!1,p(C),!y)if(n(l)!==null)y=!0,As(S);else{var A=n(u);A!==null&&Os(w,A.startTime-C)}}function S(C,A){y=!1,_&&(_=!1,h(N),N=-1),v=!0;var O=m;try{for(p(A),f=n(l);f!==null&&(!(f.expirationTime>A)||C&&!$e());){var J=f.callback;if(typeof J=="function"){f.callback=null,m=f.priorityLevel;var oe=J(f.expirationTime<=A);A=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),p(A)}else r(l);f=n(l)}if(f!==null)var ji=!0;else{var rn=n(u);rn!==null&&Os(w,rn.startTime-A),ji=!1}return ji}finally{f=null,m=O,v=!1}}var P=!1,R=null,N=-1,z=5,L=-1;function $e(){return!(t.unstable_now()-L<z)}function Sr(){if(R!==null){var C=t.unstable_now();L=C;var A=!0;try{A=R(!0,C)}finally{A?kr():(P=!1,R=null)}}else P=!1}var kr;if(typeof c=="function")kr=function(){c(Sr)};else if(typeof MessageChannel<"u"){var Gu=new MessageChannel,Om=Gu.port2;Gu.port1.onmessage=Sr,kr=function(){Om.postMessage(null)}}else kr=function(){x(Sr,0)};function As(C){R=C,P||(P=!0,kr())}function Os(C,A){N=x(function(){C(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,As(S))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var O=m;m=A;try{return C()}finally{m=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return A()}finally{m=O}},t.unstable_scheduleCallback=function(C,A,O){var J=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?J+O:J):O=J,C){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=O+oe,C={id:d++,callback:A,priorityLevel:C,startTime:O,expirationTime:oe,sortIndex:-1},O>J?(C.sortIndex=O,e(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Os(w,O-J))):(C.sortIndex=oe,e(l,C),y||v||(y=!0,As(S))),C},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(C){var A=m;return function(){var O=m;m=A;try{return C.apply(this,arguments)}finally{m=O}}}})(ef);Zd.exports=ef;var rg=Zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=k,Le=rg;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nf=new Set,ti={};function xn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(ti[t]=e,t=0;t<e.length;t++)nf.add(e[t])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},Xu={};function og(t){return ya.call(Xu,t)?!0:ya.call(Ju,t)?!1:ig.test(t)?Xu[t]=!0:(Ju[t]=!0,!1)}function sg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ag(t,e,n,r){if(e===null||typeof e>"u"||sg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pl=/[\-:]([a-z])/g;function Rl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pl,Rl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pl,Rl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pl,Rl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nl(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ag(e,n,i,r)&&(n=null),r||i===null?og(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var St=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),of=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),sf=Symbol.for("react.offscreen"),Zu=Symbol.iterator;function Tr(t){return t===null||typeof t!="object"?null:(t=Zu&&t[Zu]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,bs;function Mr(t){if(bs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bs=e&&e[1]||""}return`
`+bs+t}var Ms=!1;function Us(t,e){if(!t||Ms)return"";Ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ms=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mr(t):""}function lg(t){switch(t.tag){case 5:return Mr(t.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return t=Us(t.type,!1),t;case 11:return t=Us(t.type.render,!1),t;case 1:return t=Us(t.type,!0),t;default:return""}}function Ia(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jn:return"Fragment";case Un:return"Portal";case wa:return"Profiler";case xl:return"StrictMode";case _a:return"Suspense";case Ea:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case of:return(t.displayName||"Context")+".Consumer";case rf:return(t._context.displayName||"Context")+".Provider";case Al:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ol:return e=t.displayName||null,e!==null?e:Ia(t.type)||"Memo";case Nt:e=t._payload,t=t._init;try{return Ia(t(e))}catch{}}return null}function ug(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(e);case 8:return e===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function af(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cg(t){var e=af(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){t._valueTracker||(t._valueTracker=cg(t))}function lf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=af(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sa(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ec(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uf(t,e){e=e.checked,e!=null&&Nl(t,"checked",e,!1)}function ka(t,e){uf(t,e);var n=Gt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ta(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ta(t,e.type,Gt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ta(t,e,n){(e!=="number"||Io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ur=Array.isArray;function Qn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ca(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ur(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gt(n)}}function cf(t,e){var n=Gt(e.value),r=Gt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function df(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?df(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $i,ff=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$i.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dg=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(t){dg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$r[e]=$r[t]})});function hf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$r.hasOwnProperty(t)&&$r[t]?(""+e).trim():e+"px"}function pf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(t,e){if(e){if(fg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Na(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Ll(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Jn=null,Xn=null;function ic(t){if(t=xi(t)){if(typeof Aa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=as(e),Aa(t.stateNode,t.type,e))}}function mf(t){Jn?Xn?Xn.push(t):Xn=[t]:Jn=t}function gf(){if(Jn){var t=Jn,e=Xn;if(Xn=Jn=null,ic(t),e)for(t=0;t<e.length;t++)ic(e[t])}}function vf(t,e){return t(e)}function yf(){}var js=!1;function wf(t,e,n){if(js)return t(e,n);js=!0;try{return vf(t,e,n)}finally{js=!1,(Jn!==null||Xn!==null)&&(yf(),gf())}}function ri(t,e){var n=t.stateNode;if(n===null)return null;var r=as(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Oa=!1;if(yt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Oa=!1}function hg(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Wr=!1,So=null,ko=!1,La=null,pg={onError:function(t){Wr=!0,So=t}};function mg(t,e,n,r,i,o,s,a,l){Wr=!1,So=null,hg.apply(pg,arguments)}function gg(t,e,n,r,i,o,s,a,l){if(mg.apply(this,arguments),Wr){if(Wr){var u=So;Wr=!1,So=null}else throw Error(E(198));ko||(ko=!0,La=u)}}function An(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oc(t){if(An(t)!==t)throw Error(E(188))}function vg(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return oc(i),t;if(o===r)return oc(i),e;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Ef(t){return t=vg(t),t!==null?If(t):null}function If(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=If(t);if(e!==null)return e;t=t.sibling}return null}var Sf=Le.unstable_scheduleCallback,sc=Le.unstable_cancelCallback,yg=Le.unstable_shouldYield,wg=Le.unstable_requestPaint,X=Le.unstable_now,_g=Le.unstable_getCurrentPriorityLevel,Dl=Le.unstable_ImmediatePriority,kf=Le.unstable_UserBlockingPriority,To=Le.unstable_NormalPriority,Eg=Le.unstable_LowPriority,Tf=Le.unstable_IdlePriority,rs=null,st=null;function Ig(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(rs,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Tg,Sg=Math.log,kg=Math.LN2;function Tg(t){return t>>>=0,t===0?32:31-(Sg(t)/kg|0)|0}var Wi=64,Hi=4194304;function jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=jr(a):(o&=s,o!==0&&(r=jr(o)))}else s=n&~i,s!==0?r=jr(s):o!==0&&(r=jr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Cg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Cg(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Da(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cf(){var t=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),t}function Fs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ri(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function Rg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function bl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Pf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rf,Ml,Nf,xf,Af,ba=!1,Ki=[],Ut=null,jt=null,Ft=null,ii=new Map,oi=new Map,At=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(t,e){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":ii.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function Pr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=xi(e),e!==null&&Ml(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xg(t,e,n,r,i){switch(e){case"focusin":return Ut=Pr(Ut,t,e,n,r,i),!0;case"dragenter":return jt=Pr(jt,t,e,n,r,i),!0;case"mouseover":return Ft=Pr(Ft,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ii.set(o,Pr(ii.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,oi.set(o,Pr(oi.get(o)||null,t,e,n,r,i)),!0}return!1}function Of(t){var e=cn(t.target);if(e!==null){var n=An(e);if(n!==null){if(e=n.tag,e===13){if(e=_f(n),e!==null){t.blockedOn=e,Af(t.priority,function(){Nf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ma(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=xi(n),e!==null&&Ml(e),t.blockedOn=n,!1;e.shift()}return!0}function lc(t,e,n){ao(t)&&n.delete(e)}function Ag(){ba=!1,Ut!==null&&ao(Ut)&&(Ut=null),jt!==null&&ao(jt)&&(jt=null),Ft!==null&&ao(Ft)&&(Ft=null),ii.forEach(lc),oi.forEach(lc)}function Rr(t,e){t.blockedOn===e&&(t.blockedOn=null,ba||(ba=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Ag)))}function si(t){function e(i){return Rr(i,t)}if(0<Ki.length){Rr(Ki[0],t);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ut!==null&&Rr(Ut,t),jt!==null&&Rr(jt,t),Ft!==null&&Rr(Ft,t),ii.forEach(e),oi.forEach(e),n=0;n<At.length;n++)r=At[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&At.shift()}var Zn=St.ReactCurrentBatchConfig,Po=!0;function Og(t,e,n,r){var i=U,o=Zn.transition;Zn.transition=null;try{U=1,Ul(t,e,n,r)}finally{U=i,Zn.transition=o}}function Lg(t,e,n,r){var i=U,o=Zn.transition;Zn.transition=null;try{U=4,Ul(t,e,n,r)}finally{U=i,Zn.transition=o}}function Ul(t,e,n,r){if(Po){var i=Ma(t,e,n,r);if(i===null)Ys(t,e,r,Ro,n),ac(t,r);else if(xg(i,t,e,n,r))r.stopPropagation();else if(ac(t,r),e&4&&-1<Ng.indexOf(t)){for(;i!==null;){var o=xi(i);if(o!==null&&Rf(o),o=Ma(t,e,n,r),o===null&&Ys(t,e,r,Ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ys(t,e,r,null,n)}}var Ro=null;function Ma(t,e,n,r){if(Ro=null,t=Ll(r),t=cn(t),t!==null)if(e=An(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ro=t,null}function Lf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_g()){case Dl:return 1;case kf:return 4;case To:case Eg:return 16;case Tf:return 536870912;default:return 16}default:return 16}}var Lt=null,jl=null,lo=null;function Df(){if(lo)return lo;var t,e=jl,n=e.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return lo=i.slice(t,1<r?1-r:void 0)}function uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function uc(){return!1}function be(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gi:uc,this.isPropagationStopped=uc,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=be(mr),Ni=K({},mr,{view:0,detail:0}),Dg=be(Ni),zs,Bs,Nr,is=K({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nr&&(Nr&&t.type==="mousemove"?(zs=t.screenX-Nr.screenX,Bs=t.screenY-Nr.screenY):Bs=zs=0,Nr=t),zs)},movementY:function(t){return"movementY"in t?t.movementY:Bs}}),cc=be(is),bg=K({},is,{dataTransfer:0}),Mg=be(bg),Ug=K({},Ni,{relatedTarget:0}),Vs=be(Ug),jg=K({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=be(jg),zg=K({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bg=be(zg),Vg=K({},mr,{data:0}),dc=be(Vg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hg[t])?!!e[t]:!1}function zl(){return Kg}var Gg=K({},Ni,{key:function(t){if(t.key){var e=$g[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qg=be(Gg),Yg=K({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=be(Yg),Qg=K({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Jg=be(Qg),Xg=K({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=be(Xg),ev=K({},is,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=be(ev),nv=[9,13,27,32],Bl=yt&&"CompositionEvent"in window,Hr=null;yt&&"documentMode"in document&&(Hr=document.documentMode);var rv=yt&&"TextEvent"in window&&!Hr,bf=yt&&(!Bl||Hr&&8<Hr&&11>=Hr),hc=String.fromCharCode(32),pc=!1;function Mf(t,e){switch(t){case"keyup":return nv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fn=!1;function iv(t,e){switch(t){case"compositionend":return Uf(e);case"keypress":return e.which!==32?null:(pc=!0,hc);case"textInput":return t=e.data,t===hc&&pc?null:t;default:return null}}function ov(t,e){if(Fn)return t==="compositionend"||!Bl&&Mf(t,e)?(t=Df(),lo=jl=Lt=null,Fn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bf&&e.locale!=="ko"?null:e.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sv[t.type]:e==="textarea"}function jf(t,e,n,r){mf(r),e=No(e,"onChange"),0<e.length&&(n=new Fl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Kr=null,ai=null;function av(t){Yf(t,0)}function os(t){var e=Vn(t);if(lf(e))return t}function lv(t,e){if(t==="change")return e}var Ff=!1;if(yt){var $s;if(yt){var Ws="oninput"in document;if(!Ws){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Ws=typeof gc.oninput=="function"}$s=Ws}else $s=!1;Ff=$s&&(!document.documentMode||9<document.documentMode)}function vc(){Kr&&(Kr.detachEvent("onpropertychange",zf),ai=Kr=null)}function zf(t){if(t.propertyName==="value"&&os(ai)){var e=[];jf(e,ai,t,Ll(t)),wf(av,e)}}function uv(t,e,n){t==="focusin"?(vc(),Kr=e,ai=n,Kr.attachEvent("onpropertychange",zf)):t==="focusout"&&vc()}function cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return os(ai)}function dv(t,e){if(t==="click")return os(e)}function fv(t,e){if(t==="input"||t==="change")return os(e)}function hv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:hv;function li(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ya.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function yc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wc(t,e){var n=yc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function Bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vf(){for(var t=window,e=Io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Io(t.document)}return e}function Vl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pv(t){var e=Vf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bf(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=wc(n,o);var s=wc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mv=yt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ua=null,Gr=null,ja=!1;function _c(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ja||zn==null||zn!==Io(r)||(r=zn,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&li(Gr,r)||(Gr=r,r=No(Ua,"onSelect"),0<r.length&&(e=new Fl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zn)))}function qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},Hs={},$f={};yt&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function ss(t){if(Hs[t])return Hs[t];if(!Bn[t])return t;var e=Bn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $f)return Hs[t]=e[n];return t}var Wf=ss("animationend"),Hf=ss("animationiteration"),Kf=ss("animationstart"),Gf=ss("transitionend"),qf=new Map,Ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(t,e){qf.set(t,e),xn(e,[t])}for(var Ks=0;Ks<Ec.length;Ks++){var Gs=Ec[Ks],gv=Gs.toLowerCase(),vv=Gs[0].toUpperCase()+Gs.slice(1);Xt(gv,"on"+vv)}Xt(Wf,"onAnimationEnd");Xt(Hf,"onAnimationIteration");Xt(Kf,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Gf,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Ic(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gg(r,e,void 0,t),t.currentTarget=null}function Yf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}}}if(ko)throw t=La,ko=!1,La=null,t}function B(t,e){var n=e[$a];n===void 0&&(n=e[$a]=new Set);var r=t+"__bubble";n.has(r)||(Qf(e,t,2,!1),n.add(r))}function qs(t,e,n){var r=0;e&&(r|=4),Qf(n,t,r,e)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ui(t){if(!t[Yi]){t[Yi]=!0,nf.forEach(function(n){n!=="selectionchange"&&(yv.has(n)||qs(n,!1,t),qs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yi]||(e[Yi]=!0,qs("selectionchange",!1,e))}}function Qf(t,e,n,r){switch(Lf(e)){case 1:var i=Og;break;case 4:i=Lg;break;default:i=Ul}n=i.bind(null,e,n,t),i=void 0,!Oa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ys(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=cn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wf(function(){var u=o,d=Ll(n),f=[];e:{var m=qf.get(t);if(m!==void 0){var v=Fl,y=t;switch(t){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":v=qg;break;case"focusin":y="focus",v=Vs;break;case"focusout":y="blur",v=Vs;break;case"beforeblur":case"afterblur":v=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jg;break;case Wf:case Hf:case Kf:v=Fg;break;case Gf:v=Zg;break;case"scroll":v=Dg;break;case"wheel":v=tv;break;case"copy":case"cut":case"paste":v=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fc}var _=(e&4)!==0,x=!_&&t==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=ri(c,h),w!=null&&_.push(ci(c,w,p)))),x)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,d),f.push({event:m,listeners:_}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==xa&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[wt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?cn(y):null,y!==null&&(x=An(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=cc,w="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=fc,w="onPointerLeave",h="onPointerEnter",c="pointer"),x=v==null?m:Vn(v),p=y==null?m:Vn(y),m=new _(w,c+"leave",v,n,d),m.target=x,m.relatedTarget=p,w=null,cn(d)===u&&(_=new _(h,c+"enter",y,n,d),_.target=p,_.relatedTarget=x,w=_),x=w,v&&y)t:{for(_=v,h=y,c=0,p=_;p;p=bn(p))c++;for(p=0,w=h;w;w=bn(w))p++;for(;0<c-p;)_=bn(_),c--;for(;0<p-c;)h=bn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=bn(_),h=bn(h)}_=null}else _=null;v!==null&&Sc(f,m,v,_,!1),y!==null&&x!==null&&Sc(f,x,y,_,!0)}}e:{if(m=u?Vn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=lv;else if(mc(m))if(Ff)S=fv;else{S=cv;var P=uv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=dv);if(S&&(S=S(t,u))){jf(f,S,n,d);break e}P&&P(t,m,u),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ta(m,"number",m.value)}switch(P=u?Vn(u):window,t){case"focusin":(mc(P)||P.contentEditable==="true")&&(zn=P,Ua=u,Gr=null);break;case"focusout":Gr=Ua=zn=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,_c(f,n,d);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":_c(f,n,d)}var R;if(Bl)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Fn?Mf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(bf&&n.locale!=="ko"&&(Fn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Fn&&(R=Df()):(Lt=d,jl="value"in Lt?Lt.value:Lt.textContent,Fn=!0)),P=No(u,N),0<P.length&&(N=new dc(N,t,null,n,d),f.push({event:N,listeners:P}),R?N.data=R:(R=Uf(n),R!==null&&(N.data=R)))),(R=rv?iv(t,n):ov(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(d=new dc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}Yf(f,e)})}function ci(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ri(t,n),o!=null&&r.unshift(ci(t,o,i)),o=ri(t,e),o!=null&&r.push(ci(t,o,i))),t=t.return}return r}function bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ri(n,o),l!=null&&s.unshift(ci(n,l,a))):i||(l=ri(n,o),l!=null&&s.push(ci(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var wv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function kc(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(_v,"")}function Qi(t,e,n){if(e=kc(e),kc(t)!==e&&n)throw Error(E(425))}function xo(){}var Fa=null,za=null;function Ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(t){return Tc.resolve(null).then(t).catch(Sv)}:Va;function Sv(t){setTimeout(function(){throw t})}function Qs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),si(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);si(e)}function zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gr=Math.random().toString(36).slice(2),et="__reactFiber$"+gr,di="__reactProps$"+gr,wt="__reactContainer$"+gr,$a="__reactEvents$"+gr,kv="__reactListeners$"+gr,Tv="__reactHandles$"+gr;function cn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wt]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cc(t);t!==null;){if(n=t[et])return n;t=Cc(t)}return e}t=n,n=t.parentNode}return null}function xi(t){return t=t[et]||t[wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function as(t){return t[di]||null}var Wa=[],$n=-1;function Zt(t){return{current:t}}function V(t){0>$n||(t.current=Wa[$n],Wa[$n]=null,$n--)}function F(t,e){$n++,Wa[$n]=t.current,t.current=e}var qt={},ge=Zt(qt),ke=Zt(!1),_n=qt;function sr(t,e){var n=t.type.contextTypes;if(!n)return qt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function Ao(){V(ke),V(ge)}function Pc(t,e,n){if(ge.current!==qt)throw Error(E(168));F(ge,e),F(ke,n)}function Jf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,ug(t)||"Unknown",i));return K({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qt,_n=ge.current,F(ge,t),F(ke,ke.current),!0}function Rc(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Jf(t,e,_n),r.__reactInternalMemoizedMergedChildContext=t,V(ke),V(ge),F(ge,t)):V(ke),F(ke,n)}var ct=null,ls=!1,Js=!1;function Xf(t){ct===null?ct=[t]:ct.push(t)}function Cv(t){ls=!0,Xf(t)}function en(){if(!Js&&ct!==null){Js=!0;var t=0,e=U;try{var n=ct;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,ls=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),Sf(Dl,en),i}finally{U=e,Js=!1}}return null}var Wn=[],Hn=0,Lo=null,Do=0,Me=[],Ue=0,En=null,dt=1,ft="";function sn(t,e){Wn[Hn++]=Do,Wn[Hn++]=Lo,Lo=t,Do=e}function Zf(t,e,n){Me[Ue++]=dt,Me[Ue++]=ft,Me[Ue++]=En,En=t;var r=dt;t=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(e)+i|n<<i|r,ft=o+t}else dt=1<<o|n<<i|r,ft=t}function $l(t){t.return!==null&&(sn(t,1),Zf(t,1,0))}function Wl(t){for(;t===Lo;)Lo=Wn[--Hn],Wn[Hn]=null,Do=Wn[--Hn],Wn[Hn]=null;for(;t===En;)En=Me[--Ue],Me[Ue]=null,ft=Me[--Ue],Me[Ue]=null,dt=Me[--Ue],Me[Ue]=null}var Oe=null,xe=null,$=!1,Ge=null;function eh(t,e){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,xe=zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=En!==null?{id:dt,overflow:ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,xe=null,!0):!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ka(t){if($){var e=xe;if(e){var n=e;if(!Nc(t,e)){if(Ha(t))throw Error(E(418));e=zt(n.nextSibling);var r=Oe;e&&Nc(t,e)?eh(r,n):(t.flags=t.flags&-4097|2,$=!1,Oe=t)}}else{if(Ha(t))throw Error(E(418));t.flags=t.flags&-4097|2,$=!1,Oe=t}}}function xc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function Ji(t){if(t!==Oe)return!1;if(!$)return xc(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ba(t.type,t.memoizedProps)),e&&(e=xe)){if(Ha(t))throw th(),Error(E(418));for(;e;)eh(t,e),e=zt(e.nextSibling)}if(xc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Oe?zt(t.stateNode.nextSibling):null;return!0}function th(){for(var t=xe;t;)t=zt(t.nextSibling)}function ar(){xe=Oe=null,$=!1}function Hl(t){Ge===null?Ge=[t]:Ge.push(t)}var Pv=St.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bo=Zt(null),Mo=null,Kn=null,Kl=null;function Gl(){Kl=Kn=Mo=null}function ql(t){var e=bo.current;V(bo),t._currentValue=e}function Ga(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function er(t,e){Mo=t,Kl=Kn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(Kl!==t)if(t={context:t,memoizedValue:e,next:null},Kn===null){if(Mo===null)throw Error(E(308));Kn=t,Mo.dependencies={lanes:0,firstContext:t}}else Kn=Kn.next=t;return e}var dn=null;function Yl(t){dn===null?dn=[t]:dn.push(t)}function nh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yl(e)):(n.next=i.next,i.next=n),e.interleaved=n,_t(t,r)}function _t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_t(t,n)}return i=r.interleaved,i===null?(e.next=e,Yl(r)):(e.next=i.next,i.next=e),r.interleaved=e,_t(t,n)}function co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}function Ac(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uo(t,e,n,r){var i=t.updateQueue;xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(m=e,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=K({},f,m);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Sn|=s,t.lanes=s,t.memoizedState=f}}function Oc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ih=new tf.Component().refs;function qa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var us={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),o=mt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),o=mt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=$t(t),i=mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(Ye(e,t,r,n),co(e,t,r))}};function Lc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!li(n,r)||!li(i,o):!0}function oh(t,e,n){var r=!1,i=qt,o=e.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=Te(e)?_n:ge.current,r=e.contextTypes,o=(r=r!=null)?sr(t,i):qt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=us,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Dc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&us.enqueueReplaceState(e,e.state,null)}function Ya(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ih,Ql(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=Te(e)?_n:ge.current,i.context=sr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&us.enqueueReplaceState(i,i.state,null),Uo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===ih&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Xi(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bc(t){var e=t._init;return e(t._payload)}function sh(t){function e(h,c){if(t){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Wt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,w){return c===null||c.tag!==6?(c=ia(p,h.mode,w),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,w){var S=p.type;return S===jn?d(h,c,p.props.children,w,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&bc(S)===c.type)?(w=i(c,p.props),w.ref=xr(h,c,p),w.return=h,w):(w=vo(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,w)}function u(h,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=oa(p,h.mode,w),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,w,S){return c===null||c.tag!==7?(c=mn(p,h.mode,w,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ia(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Bi:return p=vo(c.type,c.key,c.props,null,h.mode,p),p.ref=xr(h,null,c),p.return=h,p;case Un:return c=oa(c,h.mode,p),c.return=h,c;case Nt:var w=c._init;return f(h,w(c._payload),p)}if(Ur(c)||Tr(c))return c=mn(c,h.mode,p,null),c.return=h,c;Xi(h,c)}return null}function m(h,c,p,w){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bi:return p.key===S?l(h,c,p,w):null;case Un:return p.key===S?u(h,c,p,w):null;case Nt:return S=p._init,m(h,c,S(p._payload),w)}if(Ur(p)||Tr(p))return S!==null?null:d(h,c,p,w,null);Xi(h,p)}return null}function v(h,c,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,a(c,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bi:return h=h.get(w.key===null?p:w.key)||null,l(c,h,w,S);case Un:return h=h.get(w.key===null?p:w.key)||null,u(c,h,w,S);case Nt:var P=w._init;return v(h,c,p,P(w._payload),S)}if(Ur(w)||Tr(w))return h=h.get(p)||null,d(c,h,w,S,null);Xi(c,w)}return null}function y(h,c,p,w){for(var S=null,P=null,R=c,N=c=0,z=null;R!==null&&N<p.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=m(h,R,p[N],w);if(L===null){R===null&&(R=z);break}t&&R&&L.alternate===null&&e(h,R),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L,R=z}if(N===p.length)return n(h,R),$&&sn(h,N),S;if(R===null){for(;N<p.length;N++)R=f(h,p[N],w),R!==null&&(c=o(R,c,N),P===null?S=R:P.sibling=R,P=R);return $&&sn(h,N),S}for(R=r(h,R);N<p.length;N++)z=v(R,h,N,p[N],w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=o(z,c,N),P===null?S=z:P.sibling=z,P=z);return t&&R.forEach(function($e){return e(h,$e)}),$&&sn(h,N),S}function _(h,c,p,w){var S=Tr(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var P=S=null,R=c,N=c=0,z=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(z=R,R=null):z=R.sibling;var $e=m(h,R,L.value,w);if($e===null){R===null&&(R=z);break}t&&R&&$e.alternate===null&&e(h,R),c=o($e,c,N),P===null?S=$e:P.sibling=$e,P=$e,R=z}if(L.done)return n(h,R),$&&sn(h,N),S;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,w),L!==null&&(c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return $&&sn(h,N),S}for(R=r(h,R);!L.done;N++,L=p.next())L=v(R,h,N,L.value,w),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return t&&R.forEach(function(Sr){return e(h,Sr)}),$&&sn(h,N),S}function x(h,c,p,w){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Bi:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===jn){if(P.tag===7){n(h,P.sibling),c=i(P,p.props.children),c.return=h,h=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&bc(S)===P.type){n(h,P.sibling),c=i(P,p.props),c.ref=xr(h,P,p),c.return=h,h=c;break e}n(h,P);break}else e(h,P);P=P.sibling}p.type===jn?(c=mn(p.props.children,h.mode,w,p.key),c.return=h,h=c):(w=vo(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,h=w)}return s(h);case Un:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else e(h,c);c=c.sibling}c=oa(p,h.mode,w),c.return=h,h=c}return s(h);case Nt:return P=p._init,x(h,c,P(p._payload),w)}if(Ur(p))return y(h,c,p,w);if(Tr(p))return _(h,c,p,w);Xi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=ia(p,h.mode,w),c.return=h,h=c),s(h)):n(h,c)}return x}var lr=sh(!0),ah=sh(!1),Ai={},at=Zt(Ai),fi=Zt(Ai),hi=Zt(Ai);function fn(t){if(t===Ai)throw Error(E(174));return t}function Jl(t,e){switch(F(hi,e),F(fi,t),F(at,Ai),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pa(e,t)}V(at),F(at,e)}function ur(){V(at),V(fi),V(hi)}function lh(t){fn(hi.current);var e=fn(at.current),n=Pa(e,t.type);e!==n&&(F(fi,t),F(at,n))}function Xl(t){fi.current===t&&(V(at),V(fi))}var W=Zt(0);function jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xs=[];function Zl(){for(var t=0;t<Xs.length;t++)Xs[t]._workInProgressVersionPrimary=null;Xs.length=0}var fo=St.ReactCurrentDispatcher,Zs=St.ReactCurrentBatchConfig,In=0,H=null,re=null,se=null,Fo=!1,qr=!1,pi=0,Rv=0;function he(){throw Error(E(321))}function eu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function tu(t,e,n,r,i,o){if(In=o,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?Ov:Lv,t=n(r,i),qr){o=0;do{if(qr=!1,pi=0,25<=o)throw Error(E(301));o+=1,se=re=null,e.updateQueue=null,fo.current=Dv,t=n(r,i)}while(qr)}if(fo.current=zo,e=re!==null&&re.next!==null,In=0,se=re=H=null,Fo=!1,e)throw Error(E(300));return t}function nu(){var t=pi!==0;return pi=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=t:se=se.next=t,se}function Be(){if(re===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=se===null?H.memoizedState:se.next;if(e!==null)se=e,re=t;else{if(t===null)throw Error(E(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?H.memoizedState=se=t:se=se.next=t}return se}function mi(t,e){return typeof e=="function"?e(t):e}function ea(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((In&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,H.lanes|=d,Sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qe(r,e.memoizedState)||(Se=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,H.lanes|=o,Sn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ta(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qe(o,e.memoizedState)||(Se=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function uh(){}function ch(t,e){var n=H,r=Be(),i=e(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,ru(hh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,gi(9,fh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(E(349));In&30||dh(n,e,i)}return i}function dh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fh(t,e,n,r){e.value=n,e.getSnapshot=r,ph(e)&&mh(t)}function hh(t,e,n){return n(function(){ph(e)&&mh(t)})}function ph(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function mh(t){var e=_t(t,1);e!==null&&Ye(e,t,1,-1)}function Mc(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:t},e.queue=t,t=t.dispatch=Av.bind(null,H,t),[e.memoizedState,t]}function gi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gh(){return Be().memoizedState}function ho(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=gi(1|e,n,void 0,r===void 0?null:r)}function cs(t,e,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&eu(r,s.deps)){i.memoizedState=gi(e,n,o,r);return}}H.flags|=t,i.memoizedState=gi(1|e,n,o,r)}function Uc(t,e){return ho(8390656,8,t,e)}function ru(t,e){return cs(2048,8,t,e)}function vh(t,e){return cs(4,2,t,e)}function yh(t,e){return cs(4,4,t,e)}function wh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _h(t,e,n){return n=n!=null?n.concat([t]):null,cs(4,4,wh.bind(null,e,t),n)}function iu(){}function Eh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ih(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sh(t,e,n){return In&21?(Qe(n,e)||(n=Cf(),H.lanes|=n,Sn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function Nv(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=Zs.transition;Zs.transition={};try{t(!1),e()}finally{U=n,Zs.transition=r}}function kh(){return Be().memoizedState}function xv(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Th(t))Ch(e,n);else if(n=nh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),Ph(n,e,r)}}function Av(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Th(t))Ch(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,s)){var l=e.interleaved;l===null?(i.next=i,Yl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=nh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),Ph(n,e,r))}}function Th(t){var e=t.alternate;return t===H||e!==null&&e===H}function Ch(t,e){qr=Fo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ph(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bl(t,n)}}var zo={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ov={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:Uc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ho(4194308,4,wh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return ho(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xv.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:Mc,useDebugValue:iu,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=Mc(!1),e=t[0];return t=Nv.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if($){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ae===null)throw Error(E(349));In&30||dh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Uc(hh.bind(null,r,o,t),[t]),r.flags|=2048,gi(9,fh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if($){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Rv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lv={readContext:ze,useCallback:Eh,useContext:ze,useEffect:ru,useImperativeHandle:_h,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Ih,useReducer:ea,useRef:gh,useState:function(){return ea(mi)},useDebugValue:iu,useDeferredValue:function(t){var e=Be();return Sh(e,re.memoizedState,t)},useTransition:function(){var t=ea(mi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:uh,useSyncExternalStore:ch,useId:kh,unstable_isNewReconciler:!1},Dv={readContext:ze,useCallback:Eh,useContext:ze,useEffect:ru,useImperativeHandle:_h,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Ih,useReducer:ta,useRef:gh,useState:function(){return ta(mi)},useDebugValue:iu,useDeferredValue:function(t){var e=Be();return re===null?e.memoizedState=t:Sh(e,re.memoizedState,t)},useTransition:function(){var t=ta(mi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:uh,useSyncExternalStore:ch,useId:kh,unstable_isNewReconciler:!1};function cr(t,e){try{var n="",r=e;do n+=lg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function na(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,e,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vo||(Vo=!0,sl=r),Qa(t,e)},n}function Nh(t,e,n){n=mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qa(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qa(t,e),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function jc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Yv.bind(null,t,e,n),e.then(t,t))}function Fc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var Mv=St.ReactCurrentOwner,Se=!1;function ve(t,e,n,r){e.child=t===null?ah(e,null,n,r):lr(e,t.child,n,r)}function Bc(t,e,n,r,i){n=n.render;var o=e.ref;return er(e,i),r=tu(t,e,n,r,o,i),n=nu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):($&&n&&$l(e),e.flags|=1,ve(t,e,r,i),e.child)}function Vc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,xh(t,e,o,r,i)):(t=vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(s,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Wt(o,r),t.ref=e.ref,t.return=e,e.child=t}function xh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(li(o,r)&&t.ref===e.ref)if(Se=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,Et(t,e,i)}return Ja(t,e,n,r,i)}function Ah(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(qn,Re),Re|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(qn,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(qn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,F(qn,Re),Re|=r;return ve(t,e,i,n),e.child}function Oh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ja(t,e,n,r,i){var o=Te(n)?_n:ge.current;return o=sr(e,o),er(e,i),n=tu(t,e,n,r,o,i),r=nu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):($&&r&&$l(e),e.flags|=1,ve(t,e,n,i),e.child)}function $c(t,e,n,r,i){if(Te(n)){var o=!0;Oo(e)}else o=!1;if(er(e,i),e.stateNode===null)po(t,e),oh(e,n,r),Ya(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?_n:ge.current,u=sr(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dc(e,s,r,u),xt=!1;var m=e.memoizedState;s.state=m,Uo(e,r,s,i),l=e.memoizedState,a!==r||m!==l||ke.current||xt?(typeof d=="function"&&(qa(e,n,d,r),l=e.memoizedState),(a=xt||Lc(e,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,rh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),s.props=u,f=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?_n:ge.current,l=sr(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Dc(e,s,r,l),xt=!1,m=e.memoizedState,s.state=m,Uo(e,r,s,i);var y=e.memoizedState;a!==f||m!==y||ke.current||xt?(typeof v=="function"&&(qa(e,n,v,r),y=e.memoizedState),(u=xt||Lc(e,n,u,r,m,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Xa(t,e,n,r,o,i)}function Xa(t,e,n,r,i,o){Oh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Rc(e,n,!1),Et(t,e,o);r=e.stateNode,Mv.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=lr(e,t.child,null,o),e.child=lr(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&Rc(e,n,!0),e.child}function Lh(t){var e=t.stateNode;e.pendingContext?Pc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pc(t,e.context,!1),Jl(t,e.containerInfo)}function Wc(t,e,n,r,i){return ar(),Hl(i),e.flags|=256,ve(t,e,n,r),e.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function el(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dh(t,e,n){var r=e.pendingProps,i=W.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F(W,i&1),t===null)return Ka(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hs(s,r,0,null),t=mn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=el(n),e.memoizedState=Za,t):ou(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Uv(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=mn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?el(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Za,r}return o=t.child,t=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ou(t,e){return e=hs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zi(t,e,n,r){return r!==null&&Hl(r),lr(e,t.child,null,n),t=ou(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uv(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=na(Error(E(422))),Zi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=hs({mode:"visible",children:r.children},i,0,null),o=mn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&lr(e,t.child,null,s),e.child.memoizedState=el(s),e.memoizedState=Za,o);if(!(e.mode&1))return Zi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=na(o,r,void 0),Zi(t,e,s,r)}if(a=(s&t.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(t,i),Ye(r,t,i,-1))}return du(),r=na(Error(E(421))),Zi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Qv.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,xe=zt(i.nextSibling),Oe=e,$=!0,Ge=null,t!==null&&(Me[Ue++]=dt,Me[Ue++]=ft,Me[Ue++]=En,dt=t.id,ft=t.overflow,En=e),e=ou(e,r.children),e.flags|=4096,e)}function Hc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ga(t.return,e,n)}function ra(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hc(t,n,e);else if(t.tag===19)Hc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(W,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ra(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ra(e,!0,n,null,o);break;case"together":ra(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jv(t,e,n){switch(e.tag){case 3:Lh(e),ar();break;case 5:lh(e);break;case 1:Te(e.type)&&Oo(e);break;case 4:Jl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),e.flags|=128,null):n&e.child.childLanes?Dh(t,e,n):(F(W,W.current&1),t=Et(t,e,n),t!==null?t.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,Ah(t,e,n)}return Et(t,e,n)}var Mh,tl,Uh,jh;Mh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tl=function(){};Uh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fn(at.current);var o=null;switch(n){case"input":i=Sa(t,i),r=Sa(t,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Ca(t,i),r=Ca(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xo)}Ra(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};jh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ar(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fv(t,e,n){var r=e.pendingProps;switch(Wl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&Ao(),pe(e),null;case 3:return r=e.stateNode,ur(),V(ke),V(ge),Zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ji(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(ul(Ge),Ge=null))),tl(t,e),pe(e),null;case 5:Xl(e);var i=fn(hi.current);if(n=e.type,t!==null&&e.stateNode!=null)Uh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return pe(e),null}if(t=fn(at.current),Ji(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[di]=o,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ec(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":nc(r,o),B("invalid",r)}Ra(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,t),i=["children",""+a]):ti.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":Vi(r),tc(r,o,!0);break;case"textarea":Vi(r),rc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=df(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[di]=r,Mh(t,e,!1,!1),e.stateNode=t;e:{switch(s=Na(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":ec(t,r),i=Sa(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",t);break;case"textarea":nc(t,r),i=Ca(t,r),B("invalid",t);break;default:i=r}Ra(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?pf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ff(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ni(t,l):typeof l=="number"&&ni(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ti.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",t):l!=null&&Nl(t,o,l,s))}switch(n){case"input":Vi(t),tc(t,r,!1);break;case"textarea":Vi(t),rc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Qn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)jh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=fn(hi.current),fn(at.current),Ji(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Qi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if(V(W),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&xe!==null&&e.mode&1&&!(e.flags&128))th(),ar(),e.flags|=98560,o=!1;else if(o=Ji(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(E(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[et]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),o=!1}else Ge!==null&&(ul(Ge),Ge=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||W.current&1?ie===0&&(ie=3):du())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return ur(),tl(t,e),t===null&&ui(e.stateNode.containerInfo),pe(e),null;case 10:return ql(e.type._context),pe(e),null;case 17:return Te(e.type)&&Ao(),pe(e),null;case 19:if(V(W),o=e.memoizedState,o===null)return pe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ar(o,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jo(t),s!==null){for(e.flags|=128,Ar(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F(W,W.current&1|2),e.child}t=t.sibling}o.tail!==null&&X()>dr&&(e.flags|=128,r=!0,Ar(o,!1),e.lanes=4194304)}else{if(!r)if(t=jo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return pe(e),null}else 2*X()-o.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Ar(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=X(),e.sibling=null,n=W.current,F(W,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return cu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Re&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function zv(t,e){switch(Wl(e),e.tag){case 1:return Te(e.type)&&Ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),V(ke),V(ge),Zl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xl(e),null;case 13:if(V(W),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(W),null;case 4:return ur(),null;case 10:return ql(e.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var eo=!1,me=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function nl(t,e,n){try{n()}catch(r){G(t,e,r)}}var Kc=!1;function Vv(t,e){if(Fa=Po,t=Vf(),Vl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(za={focusedElem:t,selectionRange:n},Po=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:He(e.type,_),x);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){G(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=Kc,Kc=!1,y}function Yr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&nl(e,n,o)}i=i.next}while(i!==r)}}function ds(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fh(t){var e=t.alternate;e!==null&&(t.alternate=null,Fh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[di],delete e[$a],delete e[kv],delete e[Tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zh(t){return t.tag===5||t.tag===3||t.tag===4}function Gc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function il(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xo));else if(r!==4&&(t=t.child,t!==null))for(il(t,e,n),t=t.sibling;t!==null;)il(t,e,n),t=t.sibling}function ol(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ol(t,e,n),t=t.sibling;t!==null;)ol(t,e,n),t=t.sibling}var le=null,Ke=!1;function Pt(t,e,n){for(n=n.child;n!==null;)Bh(t,e,n),n=n.sibling}function Bh(t,e,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(rs,n)}catch{}switch(n.tag){case 5:me||Gn(n,e);case 6:var r=le,i=Ke;le=null,Pt(t,e,n),le=r,Ke=i,le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?Qs(t.parentNode,n):t.nodeType===1&&Qs(t,n),si(t)):Qs(le,n.stateNode));break;case 4:r=le,i=Ke,le=n.stateNode.containerInfo,Ke=!0,Pt(t,e,n),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&nl(n,e,s),i=i.next}while(i!==r)}Pt(t,e,n);break;case 1:if(!me&&(Gn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}Pt(t,e,n);break;case 21:Pt(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Pt(t,e,n),me=r):Pt(t,e,n);break;default:Pt(t,e,n)}}function qc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bv),e.forEach(function(r){var i=Jv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ke=!1;break e;case 3:le=a.stateNode.containerInfo,Ke=!0;break e;case 4:le=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(le===null)throw Error(E(160));Bh(o,s,i),le=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vh(e,t),e=e.sibling}function Vh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(We(e,t),Xe(t),r&4){try{Yr(3,t,t.return),ds(3,t)}catch(_){G(t,t.return,_)}try{Yr(5,t,t.return)}catch(_){G(t,t.return,_)}}break;case 1:We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return),t.flags&32){var i=t.stateNode;try{ni(i,"")}catch(_){G(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uf(i,o),Na(a,s);var u=Na(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?pf(i,f):d==="dangerouslySetInnerHTML"?ff(i,f):d==="children"?ni(i,f):Nl(i,d,f,u)}switch(a){case"input":ka(i,o);break;case"textarea":cf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Qn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qn(i,!!o.multiple,o.defaultValue,!0):Qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(_){G(t,t.return,_)}}break;case 6:if(We(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){G(t,t.return,_)}}break;case 3:if(We(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{si(e.containerInfo)}catch(_){G(t,t.return,_)}break;case 4:We(e,t),Xe(t);break;case 13:We(e,t),Xe(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(lu=X())),r&4&&qc(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,We(e,t),me=u):We(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(f=T=d;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:Yr(4,m,m.return);break;case 1:Gn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Gn(m,m.return);break;case 22:if(m.memoizedState!==null){Qc(f);continue}}v!==null?(v.return=m,T=v):Qc(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hf("display",s))}catch(_){G(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){G(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(e,t),Xe(t),r&4&&qc(t);break;case 21:break;default:We(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var o=Gc(t);ol(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Gc(t);il(t,a,s);break;default:throw Error(E(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $v(t,e,n){T=t,$h(t)}function $h(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||eo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=eo;var u=me;if(eo=s,(me=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?Jc(i):l!==null?(l.return=s,T=l):Jc(i);for(;o!==null;)T=o,$h(o),o=o.sibling;T=i,eo=a,me=u}Yc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Yc(t)}}function Yc(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||ds(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Oc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&si(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||e.flags&512&&rl(e)}catch(m){G(e,e.return,m)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Qc(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Jc(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ds(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var o=e.return;try{rl(e)}catch(l){G(e,o,l)}break;case 5:var s=e.return;try{rl(e)}catch(l){G(e,s,l)}}}catch(l){G(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var Wv=Math.ceil,Bo=St.ReactCurrentDispatcher,su=St.ReactCurrentOwner,Fe=St.ReactCurrentBatchConfig,b=0,ae=null,ee=null,ue=0,Re=0,qn=Zt(0),ie=0,vi=null,Sn=0,fs=0,au=0,Qr=null,Ie=null,lu=0,dr=1/0,ut=null,Vo=!1,sl=null,Vt=null,to=!1,Dt=null,$o=0,Jr=0,al=null,mo=-1,go=0;function ye(){return b&6?X():mo!==-1?mo:mo=X()}function $t(t){return t.mode&1?b&2&&ue!==0?ue&-ue:Pv.transition!==null?(go===0&&(go=Cf()),go):(t=U,t!==0||(t=window.event,t=t===void 0?16:Lf(t.type)),t):1}function Ye(t,e,n,r){if(50<Jr)throw Jr=0,al=null,Error(E(185));Ri(t,n,r),(!(b&2)||t!==ae)&&(t===ae&&(!(b&2)&&(fs|=n),ie===4&&Ot(t,ue)),Ce(t,r),n===1&&b===0&&!(e.mode&1)&&(dr=X()+500,ls&&en()))}function Ce(t,e){var n=t.callbackNode;Pg(t,e);var r=Co(t,t===ae?ue:0);if(r===0)n!==null&&sc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sc(n),e===1)t.tag===0?Cv(Xc.bind(null,t)):Xf(Xc.bind(null,t)),Iv(function(){!(b&6)&&en()}),n=null;else{switch(Pf(r)){case 1:n=Dl;break;case 4:n=kf;break;case 16:n=To;break;case 536870912:n=Tf;break;default:n=To}n=Jh(n,Wh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wh(t,e){if(mo=-1,go=0,b&6)throw Error(E(327));var n=t.callbackNode;if(tr()&&t.callbackNode!==n)return null;var r=Co(t,t===ae?ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wo(t,r);else{e=r;var i=b;b|=2;var o=Kh();(ae!==t||ue!==e)&&(ut=null,dr=X()+500,pn(t,e));do try{Gv();break}catch(a){Hh(t,a)}while(1);Gl(),Bo.current=o,b=i,ee!==null?e=0:(ae=null,ue=0,e=ie)}if(e!==0){if(e===2&&(i=Da(t),i!==0&&(r=i,e=ll(t,i))),e===1)throw n=vi,pn(t,0),Ot(t,r),Ce(t,X()),n;if(e===6)Ot(t,r);else{if(i=t.current.alternate,!(r&30)&&!Hv(i)&&(e=Wo(t,r),e===2&&(o=Da(t),o!==0&&(r=o,e=ll(t,o))),e===1))throw n=vi,pn(t,0),Ot(t,r),Ce(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:an(t,Ie,ut);break;case 3:if(Ot(t,r),(r&130023424)===r&&(e=lu+500-X(),10<e)){if(Co(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Va(an.bind(null,t,Ie,ut),e);break}an(t,Ie,ut);break;case 4:if(Ot(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wv(r/1960))-r,10<r){t.timeoutHandle=Va(an.bind(null,t,Ie,ut),r);break}an(t,Ie,ut);break;case 5:an(t,Ie,ut);break;default:throw Error(E(329))}}}return Ce(t,X()),t.callbackNode===n?Wh.bind(null,t):null}function ll(t,e){var n=Qr;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=Wo(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&ul(e)),t}function ul(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Hv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(t,e){for(e&=~au,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function Xc(t){if(b&6)throw Error(E(327));tr();var e=Co(t,0);if(!(e&1))return Ce(t,X()),null;var n=Wo(t,e);if(t.tag!==0&&n===2){var r=Da(t);r!==0&&(e=r,n=ll(t,r))}if(n===1)throw n=vi,pn(t,0),Ot(t,e),Ce(t,X()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,Ie,ut),Ce(t,X()),null}function uu(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(dr=X()+500,ls&&en())}}function kn(t){Dt!==null&&Dt.tag===0&&!(b&6)&&tr();var e=b;b|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,t)return t()}finally{U=r,Fe.transition=n,b=e,!(b&6)&&en()}}function cu(){Re=qn.current,V(qn)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ev(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:ur(),V(ke),V(ge),Zl();break;case 5:Xl(r);break;case 4:ur();break;case 13:V(W);break;case 19:V(W);break;case 10:ql(r.type._context);break;case 22:case 23:cu()}n=n.return}if(ae=t,ee=t=Wt(t.current,null),ue=Re=e,ie=0,vi=null,au=fs=Sn=0,Ie=Qr=null,dn!==null){for(e=0;e<dn.length;e++)if(n=dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}dn=null}return t}function Hh(t,e){do{var n=ee;try{if(Gl(),fo.current=zo,Fo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fo=!1}if(In=0,se=re=H=null,qr=!1,pi=0,su.current=null,n===null||n.return===null){ie=1,vi=e,ee=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Fc(s);if(v!==null){v.flags&=-257,zc(v,s,a,o,e),v.mode&1&&jc(o,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){jc(o,u,e),du();break e}l=Error(E(426))}}else if($&&a.mode&1){var x=Fc(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zc(x,s,a,o,e),Hl(cr(l,a));break e}}o=l=cr(l,a),ie!==4&&(ie=2),Qr===null?Qr=[o]:Qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Rh(o,l,e);Ac(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Nh(o,a,e);Ac(o,w);break e}}o=o.return}while(o!==null)}qh(n)}catch(S){e=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Kh(){var t=Bo.current;return Bo.current=zo,t===null?zo:t}function du(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Sn&268435455)&&!(fs&268435455)||Ot(ae,ue)}function Wo(t,e){var n=b;b|=2;var r=Kh();(ae!==t||ue!==e)&&(ut=null,pn(t,e));do try{Kv();break}catch(i){Hh(t,i)}while(1);if(Gl(),b=n,Bo.current=r,ee!==null)throw Error(E(261));return ae=null,ue=0,ie}function Kv(){for(;ee!==null;)Gh(ee)}function Gv(){for(;ee!==null&&!yg();)Gh(ee)}function Gh(t){var e=Qh(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?qh(t):ee=e,su.current=null}function qh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zv(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=Fv(n,e,Re),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function an(t,e,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,qv(t,e,n,r)}finally{Fe.transition=i,U=r}return null}function qv(t,e,n,r){do tr();while(Dt!==null);if(b&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rg(t,o),t===ae&&(ee=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Jh(To,function(){return tr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var s=U;U=1;var a=b;b|=4,su.current=null,Vv(t,n),Vh(n,t),pv(za),Po=!!Fa,za=Fa=null,t.current=n,$v(n),wg(),b=a,U=s,Fe.transition=o}else t.current=n;if(to&&(to=!1,Dt=t,$o=i),o=t.pendingLanes,o===0&&(Vt=null),Ig(n.stateNode),Ce(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,t=sl,sl=null,t;return $o&1&&t.tag!==0&&tr(),o=t.pendingLanes,o&1?t===al?Jr++:(Jr=0,al=t):Jr=0,en(),null}function tr(){if(Dt!==null){var t=Pf($o),e=Fe.transition,n=U;try{if(Fe.transition=null,U=16>t?16:t,Dt===null)var r=!1;else{if(t=Dt,Dt=null,$o=0,b&6)throw Error(E(331));var i=b;for(b|=4,T=t.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Yr(8,d,o)}var f=d.child;if(f!==null)f.return=d,T=f;else for(;T!==null;){d=T;var m=d.sibling,v=d.return;if(Fh(d),d===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var c=t.current;for(T=c;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ds(9,a)}}catch(S){G(a,a.return,S)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(b=i,en(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(rs,t)}catch{}r=!0}return r}finally{U=n,Fe.transition=e}}return!1}function Zc(t,e,n){e=cr(n,e),e=Rh(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(Ri(t,1,e),Ce(t,e))}function G(t,e,n){if(t.tag===3)Zc(t,t,n);else for(;e!==null;){if(e.tag===3){Zc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){t=cr(n,t),t=Nh(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(Ri(e,1,t),Ce(e,t));break}}e=e.return}}function Yv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>X()-lu?pn(t,0):au|=n),Ce(t,e)}function Yh(t,e){e===0&&(t.mode&1?(e=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):e=1);var n=ye();t=_t(t,e),t!==null&&(Ri(t,e,n),Ce(t,n))}function Qv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yh(t,n)}function Jv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Yh(t,n)}var Qh;Qh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Se=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Se=!1,jv(t,e,n);Se=!!(t.flags&131072)}else Se=!1,$&&e.flags&1048576&&Zf(e,Do,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;po(t,e),t=e.pendingProps;var i=sr(e,ge.current);er(e,n),i=tu(null,e,r,t,i,n);var o=nu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(o=!0,Oo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ql(e),i.updater=us,e.stateNode=i,i._reactInternals=e,Ya(e,r,t,n),e=Xa(null,e,r,!0,o,n)):(e.tag=0,$&&o&&$l(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(po(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Zv(r),t=He(r,t),i){case 0:e=Ja(null,e,r,t,n);break e;case 1:e=$c(null,e,r,t,n);break e;case 11:e=Bc(null,e,r,t,n);break e;case 14:e=Vc(null,e,r,He(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Ja(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),$c(t,e,r,i,n);case 3:e:{if(Lh(e),t===null)throw Error(E(387));r=e.pendingProps,o=e.memoizedState,i=o.element,rh(t,e),Uo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=cr(Error(E(423)),e),e=Wc(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(E(424)),e),e=Wc(t,e,r,n,i);break e}else for(xe=zt(e.stateNode.containerInfo.firstChild),Oe=e,$=!0,Ge=null,n=ah(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=Et(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return lh(e),t===null&&Ka(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ba(r,i)?s=null:o!==null&&Ba(r,o)&&(e.flags|=32),Oh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&Ka(e),null;case 13:return Dh(t,e,n);case 4:return Jl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lr(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Bc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,F(bo,r._currentValue),r._currentValue=s,o!==null)if(Qe(o.value,s)){if(o.children===i.children&&!ke.current){e=Et(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ga(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ga(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,er(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),Vc(t,e,r,i,n);case 15:return xh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),po(t,e),e.tag=1,Te(r)?(t=!0,Oo(e)):t=!1,er(e,n),oh(e,r,i),Ya(e,r,i,n),Xa(null,e,r,!0,t,n);case 19:return bh(t,e,n);case 22:return Ah(t,e,n)}throw Error(E(156,e.tag))};function Jh(t,e){return Sf(t,e)}function Xv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,r){return new Xv(t,e,n,r)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zv(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Al)return 11;if(t===Ol)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")fu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case jn:return mn(n.children,i,o,e);case xl:s=8,i|=8;break;case wa:return t=je(12,n,e,i|2),t.elementType=wa,t.lanes=o,t;case _a:return t=je(13,n,e,i),t.elementType=_a,t.lanes=o,t;case Ea:return t=je(19,n,e,i),t.elementType=Ea,t.lanes=o,t;case sf:return hs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rf:s=10;break e;case of:s=9;break e;case Al:s=11;break e;case Ol:s=14;break e;case Nt:s=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=je(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function mn(t,e,n,r){return t=je(7,t,r,e),t.lanes=n,t}function hs(t,e,n,r){return t=je(22,t,r,e),t.elementType=sf,t.lanes=n,t.stateNode={isHidden:!1},t}function ia(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ey(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(t,e,n,r,i,o,s,a,l){return t=new ey(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=je(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(o),t}function ty(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xh(t){if(!t)return qt;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Te(n))return Jf(t,n,e)}return e}function Zh(t,e,n,r,i,o,s,a,l){return t=hu(n,r,!0,t,i,o,s,a,l),t.context=Xh(null),n=t.current,r=ye(),i=$t(n),o=mt(r,i),o.callback=e??null,Bt(n,o,i),t.current.lanes=i,Ri(t,i,r),Ce(t,r),t}function ps(t,e,n,r){var i=e.current,o=ye(),s=$t(i);return n=Xh(n),e.context===null?e.context=n:e.pendingContext=n,e=mt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,s),t!==null&&(Ye(t,i,s,o),co(t,i,s)),s}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ed(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pu(t,e){ed(t,e),(t=t.alternate)&&ed(t,e)}function ny(){return null}var ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}ms.prototype.render=mu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ps(t,e,null,null)};ms.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kn(function(){ps(null,t,null,null)}),e[wt]=null}};function ms(t){this._internalRoot=t}ms.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<At.length&&e!==0&&e<At[n].priority;n++);At.splice(n,0,t),n===0&&Of(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function td(){}function ry(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ho(s);o.call(u)}}var s=Zh(e,r,t,0,null,!1,!1,"",td);return t._reactRootContainer=s,t[wt]=s.current,ui(t.nodeType===8?t.parentNode:t),kn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ho(l);a.call(u)}}var l=hu(t,0,!1,null,null,!1,!1,"",td);return t._reactRootContainer=l,t[wt]=l.current,ui(t.nodeType===8?t.parentNode:t),kn(function(){ps(e,l,n,r)}),l}function vs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ho(s);a.call(l)}}ps(e,s,t,i)}else s=ry(n,e,t,i,r);return Ho(s)}Rf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jr(e.pendingLanes);n!==0&&(bl(e,n|1),Ce(e,X()),!(b&6)&&(dr=X()+500,en()))}break;case 13:kn(function(){var r=_t(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),pu(t,1)}};Ml=function(t){if(t.tag===13){var e=_t(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}pu(t,134217728)}};Nf=function(t){if(t.tag===13){var e=$t(t),n=_t(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}pu(t,e)}};xf=function(){return U};Af=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Aa=function(t,e,n){switch(e){case"input":if(ka(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=as(r);if(!i)throw Error(E(90));lf(r),ka(r,i)}}}break;case"textarea":cf(t,n);break;case"select":e=n.value,e!=null&&Qn(t,!!n.multiple,e,!1)}};vf=uu;yf=kn;var iy={usingClientEntryPoint:!1,Events:[xi,Vn,as,mf,gf,uu]},Or={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oy={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ef(t),t===null?null:t.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{rs=no.inject(oy),st=no}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(e))throw Error(E(200));return ty(t,e,null,n)};De.createRoot=function(t,e){if(!gu(t))throw Error(E(299));var n=!1,r="",i=ep;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hu(t,1,!1,null,null,n,!1,r,i),t[wt]=e.current,ui(t.nodeType===8?t.parentNode:t),new mu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Ef(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return kn(t)};De.hydrate=function(t,e,n){if(!gs(e))throw Error(E(200));return vs(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!gu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ep;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Zh(e,null,t,1,n??null,i,!1,o,s),t[wt]=e.current,ui(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ms(e)};De.render=function(t,e,n){if(!gs(e))throw Error(E(200));return vs(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!gs(t))throw Error(E(40));return t._reactRootContainer?(kn(function(){vs(null,null,t,!1,function(){t._reactRootContainer=null,t[wt]=null})}),!0):!1};De.unstable_batchedUpdates=uu;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gs(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return vs(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(t){console.error(t)}}tp(),Xd.exports=De;var sy=Xd.exports,nd=sy;va.createRoot=nd.createRoot,va.hydrateRoot=nd.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yi.apply(this,arguments)}var bt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bt||(bt={}));const rd="popstate";function ay(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return cl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:np(i)}return uy(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ly(){return Math.random().toString(36).substr(2,8)}function id(t,e){return{usr:t.state,key:t.key,idx:e}}function cl(t,e,n,r){return n===void 0&&(n=null),yi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vr(e):e,{state:n,key:e&&e.key||r||ly()})}function np(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=bt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(yi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=bt.Pop;let x=d(),h=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:h})}function m(x,h){a=bt.Push;let c=cl(_.location,x,h);n&&n(c,x),u=d()+1;let p=id(c,u),w=_.createHref(c);try{s.pushState(p,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function v(x,h){a=bt.Replace;let c=cl(_.location,x,h);n&&n(c,x),u=d();let p=id(c,u),w=_.createHref(c);s.replaceState(p,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof x=="string"?x:np(x);return te(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return t(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rd,f),l=x,()=>{i.removeEventListener(rd,f),l=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(x){return s.go(x)}};return _}var od;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(od||(od={}));function cy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vr(e):e,i=op(r.pathname||"/",n);if(i==null)return null;let o=rp(t);dy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=_y(o[a],Sy(i));return s}function rp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rp(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:yy(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ip(o.path))i(o,s,l)}),e}function ip(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ip(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fy=/^:\w+$/,hy=3,py=2,my=1,gy=10,vy=-2,sd=t=>t==="*";function yy(t,e){let n=t.split("/"),r=n.length;return n.some(sd)&&(r+=vy),e&&(r+=py),n.filter(i=>!sd(i)).reduce((i,o)=>i+(fy.test(o)?hy:o===""?my:gy),r)}function wy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _y(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Ey({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:gn([i,d.pathname]),pathnameBase:Py(gn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=gn([i,d.pathnameBase]))}return o}function Ey(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Iy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[m]=void 0:u[m]=ky(y||"",m),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Iy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sy(t){try{return decodeURI(t)}catch(e){return vu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ky(t,e){try{return decodeURIComponent(t)}catch(n){return vu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function op(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ty(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vr(t):t;return{pathname:n?n.startsWith("/")?n:Cy(n,e):e,search:Ry(r),hash:Ny(i)}}function Cy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ap(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vr(t):(i=yi({},t),te(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=Ty(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const gn=t=>t.join("/").replace(/\/\/+/g,"/"),Py=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ry=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ny=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lp=["post","put","patch","delete"];new Set(lp);const Ay=["get",...lp];new Set(Ay);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}const yu=k.createContext(null),Oy=k.createContext(null),ys=k.createContext(null),ws=k.createContext(null),tn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),up=k.createContext(null);function Oi(){return k.useContext(ws)!=null}function _s(){return Oi()||te(!1),k.useContext(ws).location}function cp(t){k.useContext(ys).static||k.useLayoutEffect(t)}function wu(){let{isDataRoute:t}=k.useContext(tn);return t?Gy():Ly()}function Ly(){Oi()||te(!1);let t=k.useContext(yu),{basename:e,navigator:n}=k.useContext(ys),{matches:r}=k.useContext(tn),{pathname:i}=_s(),o=JSON.stringify(sp(r).map(l=>l.pathnameBase)),s=k.useRef(!1);return cp(()=>{s.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=ap(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:gn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,o,i,t])}const Dy=k.createContext(null);function by(t){let e=k.useContext(tn).outlet;return e&&k.createElement(Dy.Provider,{value:t},e)}function My(t,e){return Uy(t,e)}function Uy(t,e,n){Oi()||te(!1);let{navigator:r}=k.useContext(ys),{matches:i}=k.useContext(tn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=_s(),u;if(e){var d;let _=typeof e=="string"?vr(e):e;a==="/"||(d=_.pathname)!=null&&d.startsWith(a)||te(!1),u=_}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",v=cy(t,{pathname:m}),y=Vy(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:gn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:gn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?k.createElement(ws.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bt.Pop}},y):y}function jy(){let t=Ky(),e=xy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const Fy=k.createElement(jy,null);class zy extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(tn.Provider,{value:this.props.routeContext},k.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function By(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(yu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(tn.Provider,{value:e},r)}function Vy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||te(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Fy);let m=e.concat(o.slice(0,u+1)),v=()=>{let y;return d?y=f:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,k.createElement(By,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(zy,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var dp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dp||{}),Go=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Go||{});function $y(t){let e=k.useContext(yu);return e||te(!1),e}function Wy(t){let e=k.useContext(Oy);return e||te(!1),e}function Hy(t){let e=k.useContext(tn);return e||te(!1),e}function fp(t){let e=Hy(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function Ky(){var t;let e=k.useContext(up),n=Wy(Go.UseRouteError),r=fp(Go.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Gy(){let{router:t}=$y(dp.UseNavigateStable),e=fp(Go.UseNavigateStable),n=k.useRef(!1);return cp(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ko({fromRouteId:e},o)))},[t,e])}function qy(t){let{to:e,replace:n,state:r,relative:i}=t;Oi()||te(!1);let{matches:o}=k.useContext(tn),{pathname:s}=_s(),a=wu(),l=ap(e,sp(o).map(d=>d.pathnameBase),s,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Yy(t){return by(t.context)}function ln(t){te(!1)}function Qy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=bt.Pop,navigator:o,static:s=!1}=t;Oi()&&te(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,y=k.useMemo(()=>{let _=op(u,a);return _==null?null:{location:{pathname:_,search:d,hash:f,state:m,key:v},navigationType:i}},[a,u,d,f,m,v,i]);return y==null?null:k.createElement(ys.Provider,{value:l},k.createElement(ws.Provider,{children:n,value:y}))}function Jy(t){let{children:e,location:n}=t;return My(dl(e),n)}new Promise(()=>{});function dl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,dl(r.props.children,o));return}r.type!==ln&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=dl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xy="startTransition",ad=Qm[Xy];function Zy(t){let{basename:e,children:n,future:r,window:i}=t,o=k.useRef();o.current==null&&(o.current=ay({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&ad?ad(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>s.listen(d),[s,d]),k.createElement(Qy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}var ld;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ld||(ld={}));var ud;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ud||(ud={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new t0;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n0=function(t){const e=hp(t);return pp.encodeByteArray(e,!0)},mp=function(t){return n0(t).replace(/\./g,"")},gp=function(t){try{return pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function qo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!r0(n)||(t[n]=qo(t[n],e[n]));return t}function r0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=()=>i0().__FIREBASE_DEFAULTS__,s0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gp(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return o0()||s0()||a0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},l0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function yp(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function d0(){return typeof self=="object"&&self.self===self}function wp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function f0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="FirebaseError";class Pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h0,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?p0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Pe(i,a,r)}}function p0(t,e){return t.replace(m0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const m0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(dd(o)&&dd(s)){if(!fl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ep(t,e){const n=new v0(t,e);return n.subscribe.bind(n)}class v0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");y0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new u0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E0(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _0(t){return t===un?void 0:t}function E0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=[];var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Ip={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},S0=j.INFO,k0={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},T0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=k0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=S0,this._logHandler=T0,this._userLogHandler=null,Iu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ip[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function C0(t){Iu.forEach(e=>{e.setLogLevel(t)})}function P0(t,e){for(const n of Iu){let r=null;e&&e.level&&(r=Ip[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:j[o].toLowerCase(),message:a,args:s,type:i.name})}}}const R0=(t,e)=>e.some(n=>t instanceof n);let fd,hd;function N0(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x0(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,hl=new WeakMap,kp=new WeakMap,la=new WeakMap,ku=new WeakMap;function A0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ht(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Sp.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function O0(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});hl.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L0(t){pl=t(pl)}function D0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ua(this),e,...n);return kp.set(r,e.sort?e.sort():[e]),Ht(r)}:x0().includes(t)?function(...e){return t.apply(ua(this),e),Ht(Sp.get(this))}:function(...e){return Ht(t.apply(ua(this),e))}}function b0(t){return typeof t=="function"?D0(t):(t instanceof IDBTransaction&&O0(t),R0(t,N0())?new Proxy(t,pl):t)}function Ht(t){if(t instanceof IDBRequest)return A0(t);if(la.has(t))return la.get(t);const e=b0(t);return e!==t&&(la.set(t,e),ku.set(e,t)),e}const ua=t=>ku.get(t);function M0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ht(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ht(s.result),l.oldVersion,l.newVersion,Ht(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const U0=["get","getKey","getAll","getAllKeys","count"],j0=["put","add","delete","clear"],ca=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=j0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||U0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ca.set(e,o),o}L0(t=>({...t,get:(e,n,r)=>pd(e,n)||t.get(e,n,r),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ml="@firebase/app",md="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Su("@firebase/app"),B0="@firebase/app-compat",V0="@firebase/analytics-compat",$0="@firebase/analytics",W0="@firebase/app-check-compat",H0="@firebase/app-check",K0="@firebase/auth",G0="@firebase/auth-compat",q0="@firebase/database",Y0="@firebase/database-compat",Q0="@firebase/functions",J0="@firebase/functions-compat",X0="@firebase/installations",Z0="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",iw="@firebase/remote-config",ow="@firebase/remote-config-compat",sw="@firebase/storage",aw="@firebase/storage-compat",lw="@firebase/firestore",uw="@firebase/firestore-compat",cw="firebase",dw="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]",fw={[ml]:"fire-core",[B0]:"fire-core-compat",[$0]:"fire-analytics",[V0]:"fire-analytics-compat",[H0]:"fire-app-check",[W0]:"fire-app-check-compat",[K0]:"fire-auth",[G0]:"fire-auth-compat",[q0]:"fire-rtdb",[Y0]:"fire-rtdb-compat",[Q0]:"fire-fn",[J0]:"fire-fn-compat",[X0]:"fire-iid",[Z0]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[iw]:"fire-rc",[ow]:"fire-rc-compat",[sw]:"fire-gcs",[aw]:"fire-gcs-compat",[lw]:"fire-fst",[uw]:"fire-fst-compat","fire-js":"fire-js",[cw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map,wi=new Map;function Qo(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tp(t,e){t.container.addOrOverwriteComponent(e)}function Cn(t){const e=t.name;if(wi.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,t);for(const n of Jt.values())Qo(n,t);return!0}function Cp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hw(t,e,n=Qt){Cp(t,e).clearInstance(n)}function pw(){wi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new On("app","Firebase",mw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=dw;function Tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=vp()),!n)throw gt.create("no-options");const o=Jt.get(i);if(o){if(fl(n,o.options)&&fl(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const s=new I0(i);for(const l of wi.values())s.addComponent(l);const a=new gw(n,r,s);return Jt.set(i,a),a}function vw(t=Qt){const e=Jt.get(t);if(!e&&t===Qt&&vp())return Tu();if(!e)throw gt.create("no-app",{appName:t});return e}function yw(){return Array.from(Jt.values())}async function Pp(t){const e=t.name;Jt.has(e)&&(Jt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=fw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Cn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Rp(t,e){if(t!==null&&typeof t!="function")throw gt.create("invalid-log-argument");P0(t,e)}function Np(t){C0(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firebase-heartbeat-database",_w=1,_i="firebase-heartbeat-store";let da=null;function xp(){return da||(da=M0(ww,_w,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),da}async function Ew(t){try{return await(await xp()).transaction(_i).objectStore(_i).get(Ap(t))}catch(e){if(e instanceof Pe)Tn.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function gd(t,e){try{const r=(await xp()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,Ap(t)),await r.done}catch(n){if(n instanceof Pe)Tn.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Ap(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=1024,Sw=30*24*60*60*1e3;class kw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Sw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:i}=Tw(this._heartbeatsCache.heartbeats),o=mp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function vd(){return new Date().toISOString().substring(0,10)}function Tw(t,e=Iw){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),yd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?f0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ew(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yd(t){return mp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){Cn(new Yt("platform-logger",e=>new F0(e),"PRIVATE")),Cn(new Yt("heartbeat",e=>new kw(e),"PRIVATE")),Kt(ml,md,t),Kt(ml,md,"esm2017"),Kt("fire-js","")}Pw("");const Rw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pe,SDK_VERSION:Ln,_DEFAULT_ENTRY_NAME:Qt,_addComponent:Qo,_addOrOverwriteComponent:Tp,_apps:Jt,_clearComponents:pw,_components:wi,_getProvider:Cp,_registerComponent:Cn,_removeServiceInstance:hw,deleteApp:Pp,getApp:vw,getApps:yw,initializeApp:Tu,onLog:Rp,registerVersion:Kt,setLogLevel:Np},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this._delegate=e,this.firebase=n,Qo(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Pp(this._delegate)))}_getService(e,n=Qt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Qo(this._delegate,e)}_addOrOverwriteComponent(e){Tp(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},wd=new On("app-compat","Firebase",xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Kt,setLogLevel:Np,onLog:Rp,apps:null,SDK_VERSION:Ln,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Rw}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Qt,!cd(e,u))throw wd.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,d={}){const f=Tu(u,d);if(cd(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if(Cn(u)&&u.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw wd.create("invalid-app-argument",{appName:d});return v[f]()};u.serviceProps!==void 0&&qo(m,u.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){const t=Aw(Nw);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Op,extendNamespace:e,createSubscribe:Ep,ErrorFactory:On,deepExtend:qo});function e(n){qo(t,n)}return t}const Ow=Op();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Su("@firebase/app-compat"),Lw="@firebase/app-compat",Dw="0.2.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){Kt(Lw,Dw,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(d0()&&self.firebase!==void 0){_d.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&_d.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const kt=Ow;bw();function Cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Lr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uw=Mw,jw=Lp,Dp=new On("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Su("@firebase/auth");function Fw(t,...e){Jo.logLevel<=j.WARN&&Jo.warn(`Auth (${Ln}): ${t}`,...e)}function yo(t,...e){Jo.logLevel<=j.ERROR&&Jo.error(`Auth (${Ln}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,...e){throw Pu(t,...e)}function ce(t,...e){return Pu(t,...e)}function bp(t,e,n){const r=Object.assign(Object.assign({},jw()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function wr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(t,"argument-error"),bp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dp.create(t,...e)}function I(t,e,...n){if(!t)throw Pu(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function Je(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ru(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ru()||wp()||"connection"in navigator)?navigator.onLine:!0}function Bw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=c0()||Eu()}get(){return zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Li(3e4,6e4);function Y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Q(t,e,n,r,i={}){return Up(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mp.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Up(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vw),e);try{const i=new Hw(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Br(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Br(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Br(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bp(t,d,u);fe(t,d)}}catch(i){if(i instanceof Pe)throw i;fe(t,"network-request-failed",{message:String(i)})}}async function Tt(t,e,n,r,i={}){const o=await Q(t,e,n,r,i);return"mfaPendingCredential"in o&&fe(t,"multi-factor-auth-required",{_serverResponse:o}),o}function jp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nu(t.config,i):`${t.config.apiScheme}://${i}`}function Ww(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),$w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){return t!==void 0&&t.getResponse!==void 0}function Sd(t){return t!==void 0&&t.enterprise!==void 0}class Kw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ww(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t){return(await Q(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function qw(t,e){return Q(t,"GET","/v2/recaptchaConfig",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e){return Q(t,"POST","/v1/accounts:delete",e)}async function Qw(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function Jw(t,e){return Q(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xw(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Es(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Xr(fa(i.auth_time)),issuedAtTime:Xr(fa(i.iat)),expirationTime:Xr(fa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function Es(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=gp(n);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zw(t){const e=Es(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pe&&e_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function e_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t){var e;const n=t.auth,r=await t.getIdToken(),i=await It(t,Jw(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?i_(o.providerUserInfo):[],a=r_(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Fp(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function n_(t){const e=M(t);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function i_(t){return t.map(e=>{var{providerId:n}=e,r=Cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e){const n=await Up(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=jp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function s_(t,e){return Q(t,"POST","/v2/accounts:revokeToken",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await o_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Si;return r&&(I(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(I(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Fp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xw(this,e)}reload(){return n_(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,Yw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:S,providerData:P,stsTokenManager:R}=n;I(p&&R,e,"internal-error");const N=Si.fromJSON(this.name,R);I(typeof p=="string",e,"internal-error"),Rt(f,e.name),Rt(m,e.name),I(typeof w=="boolean",e,"internal-error"),I(typeof S=="boolean",e,"internal-error"),Rt(v,e.name),Rt(y,e.name),Rt(_,e.name),Rt(x,e.name),Rt(h,e.name),Rt(c,e.name);const z=new vn({uid:p,auth:e,email:m,emailVerified:w,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(z.providerData=P.map(L=>Object.assign({},L))),x&&(z._redirectEventId=x),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const o=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;function Ae(t){Je(t instanceof Function,"Expected a class definition");let e=kd.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zp.type="NONE";const fr=zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e,n){return`firebase:${t}:${e}:${n}`}class nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=yn(this.userKey,i.apiKey,o),this.fullPersistenceKey=yn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nr(Ae(fr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ae(fr);const s=yn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=vn._fromJSON(e,d);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new nr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new nr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Hp(e))return"Webos";if(xu(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Di(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bp(t=ne()){return/firefox\//i.test(t)}function xu(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(t=ne()){return/crios\//i.test(t)}function $p(t=ne()){return/iemobile/i.test(t)}function Di(t=ne()){return/android/i.test(t)}function Wp(t=ne()){return/blackberry/i.test(t)}function Hp(t=ne()){return/webos/i.test(t)}function _r(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a_(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function l_(t=ne()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u_(){return _p()&&document.documentMode===10}function Kp(t=ne()){return _r(t)||Di(t)||Hp(t)||Wp(t)||/windows phone/i.test(t)||$p(t)}function c_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=Td(ne());break;case"Worker":n=`${Td(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e={}){return Q(t,"GET","/v2/passwordPolicy",Y(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=6;class p_{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:h_,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f_(this),n=new p_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await s_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function q(t){return M(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ep(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Au(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ce("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",g_().appendChild(r)})}function qp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v_="https://www.google.com/recaptcha/enterprise.js?render=",y_="recaptcha-enterprise",w_="NO_RECAPTCHA";class __{constructor(e){this.type=y_,this.auth=q(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{qw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Kw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Sd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(w_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Sd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Au(v_+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Pd(t,e,n,r=!1){const i=new __(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ki(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Pd(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}function E_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I_(t,e,n){const r=q(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Yp(e),{host:s,port:a}=S_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||k_()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S_(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Rd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Rd(s)}}}function Rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function k_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e){return Q(t,"POST","/v1/accounts:resetPassword",Y(t,e))}async function T_(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function C_(t,e){return Q(t,"POST","/v1/accounts:signUp",e)}async function P_(t,e){return Q(t,"POST","/v1/accounts:update",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPassword",Y(t,e))}async function Is(t,e){return Q(t,"POST","/v1/accounts:sendOobCode",Y(t,e))}async function N_(t,e){return Is(t,e)}async function x_(t,e){return Is(t,e)}async function A_(t,e){return Is(t,e)}async function O_(t,e){return Is(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}async function D_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Er{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ti(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,n,"signInWithPassword",R_);case"emailLink":return L_(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,r,"signUpPassword",C_);case"emailLink":return D_(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return Tt(t,"POST","/v1/accounts:signInWithIdp",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="http://localhost";class lt extends Er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Cu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}buildRequest(){const e={requestUri:b_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e){return Q(t,"POST","/v1/accounts:sendVerificationCode",Y(t,e))}async function U_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e))}async function j_(t,e){const n=await Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e));if(n.temporaryProof)throw Br(t,"account-exists-with-different-credential",n);return n}const F_={USER_NOT_FOUND:"user-not-found"};async function z_(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,n),F_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Er{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new wn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new wn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return U_(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return j_(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return z_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new wn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V_(t){const e=Yn(zr(t)).link,n=e?Yn(zr(e)).deep_link_id:null,r=Yn(zr(t)).deep_link_id;return(r?Yn(zr(r)).link:null)||r||n||e||t}class Ss{constructor(e){var n,r,i,o,s,a;const l=Yn(zr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=B_((i=l.mode)!==null&&i!==void 0?i:null);I(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=V_(e);try{return new Ss(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ss.parseLink(n);return I(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rr extends Ir{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new rr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Ir{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Ir{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="http://localhost";class hr extends Er{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new hr(r,o)}static _create(e,n){return new hr(e,n)}buildRequest(){return{requestUri:$_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="saml.";class Xo extends Ct{constructor(e){I(e.startsWith(W_),"argument-error"),super(e)}static credentialFromResult(e){return Xo.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Xo.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=hr.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return hr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ir{constructor(){super("twitter.com")}static credential(e,n){return lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e){return Tt(t,"POST","/v1/accounts:signUp",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await vn._fromIdTokenResponse(e,r,i),s=Nd(r);return new Ve({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nd(r);return new Ve({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(t){var e;const n=q(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Jp(n,{returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Pe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zo(e,n,r,i)}}function Xp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(t,e){const n=M(t);await ks(!0,n,e);const{providerUserInfo:r}=await Qw(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Zp(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ou(t,e,n=!1){const r=await It(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ve._forOperation(t,"link",r)}async function ks(t,e,n){await Ii(e);const r=Zp(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await It(t,Xp(r,i,e,t),n);I(o.idToken,r,"internal-error");const s=Es(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(t.uid===a,r,"user-mismatch"),Ve._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e,n=!1){const r="signIn",i=await Xp(t,r,e),o=await Ve._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Ts(t,e){return tm(q(t),e)}async function nm(t,e){const n=M(t);return await ks(!1,n,e.providerId),Ou(n,e)}async function rm(t,e){return em(M(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e){return Tt(t,"POST","/v1/accounts:signInWithCustomToken",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,e){const n=q(t),r=await G_(n,{token:e,returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Lu._fromServerResponse(e,n):"totpInfo"in n?Du._fromServerResponse(e,n):fe(e,"internal-error")}}class Lu extends bi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Lu(n)}}class Du extends bi{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Du(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t){const e=q(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Y_(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Cs(r,i,n),await ki(r,i,"getOobCode",x_)}async function Q_(t,e,n){await Qp(M(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bu(t),r})}async function J_(t,e){await P_(M(t),{oobCode:e})}async function im(t,e){const n=M(t),r=await Qp(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=bi._fromServerResponse(q(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function X_(t,e){const{data:n}=await im(M(t),e);return n.email}async function Z_(t,e,n){const r=q(t),s=await ki(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jp).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&bu(t),l}),a=await Ve._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function eE(t,e,n){return Ts(M(t),nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bu(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(s,a){I(a.handleCodeInApp,r,"argument-error"),a&&Cs(r,s,a)}o(i,n),await ki(r,i,"getOobCode",A_)}function nE(t,e){const n=Ss.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function rE(t,e,n){const r=M(t),i=nn.credentialWithLink(e,n||Ei());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ts(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e){return Q(t,"POST","/v1/accounts:createAuthUri",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e){const n=Ru()?Ei():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await iE(M(t),r);return i||[]}async function sE(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Cs(n.auth,i,e);const{email:o}=await N_(n.auth,i);o!==t.email&&await t.reload()}async function aE(t,e,n){const r=M(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Cs(r.auth,o,n);const{email:s}=await O_(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e){return Q(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await It(r,lE(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function cE(t,e){return om(M(t),e,null)}function dE(t,e){return om(M(t),null,e)}async function om(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await It(t,T_(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Es(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new ir(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new hE(o,i);case"github.com":return new pE(o,i);case"google.com":return new mE(o,i);case"twitter.com":return new gE(o,i,t.screenName||null);case"custom":case"anonymous":return new ir(o,null);default:return new ir(o,r,i)}}class ir{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class sm extends ir{constructor(e,n,r,i){super(e,n,r),this.username=i}}class hE extends ir{constructor(e,n){super(e,"facebook.com",n)}}class pE extends sm{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class mE extends ir{constructor(e,n){super(e,"google.com",n)}}class gE extends sm{constructor(e,n,r){super(e,"twitter.com",n,r)}}function vE(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:fE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new hn("enroll",e,n)}static _fromMfaPendingCredential(e){return new hn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return hn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return hn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=q(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>bi._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const s=hn._fromMfaPendingCredential(i.mfaPendingCredential);return new Mu(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Ve._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return I(n.user,r,"internal-error"),Ve._forOperation(n.user,n.operationType,u);default:fe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function yE(t,e){var n;const r=M(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Mu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:start",Y(t,e))}function _E(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:finalize",Y(t,e))}function EE(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Y(t,e))}class Uu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>bi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Uu(e)}async getSession(){return hn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),o=await It(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await It(this.user,EE(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ha=new WeakMap;function IE(t){const e=M(t);return ha.has(e)||ha.set(e,Uu._fromUser(e)),ha.get(e)}const es="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){const t=ne();return xu(t)||_r(t)}const kE=1e3,TE=10;class lm extends am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SE()&&c_(),this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);u_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const ju=lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}um.type="SESSION";const Pn=um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await CE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Mi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function RE(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function NE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AE(){return Fu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="firebaseLocalStorageDb",OE=1,ts="firebaseLocalStorage",dm="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rs(t,e){return t.transaction([ts],e?"readwrite":"readonly").objectStore(ts)}function LE(){const t=indexedDB.deleteDatabase(cm);return new Ui(t).toPromise()}function gl(){const t=indexedDB.open(cm,OE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ts,{keyPath:dm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ts)?e(r):(r.close(),await LE(),e(await gl()))})})}async function xd(t,e,n){const r=Rs(t,!0).put({[dm]:e,value:n});return new Ui(r).toPromise()}async function DE(t,e){const n=Rs(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Ad(t,e){const n=Rs(t,!0).delete(e);return new Ui(n).toPromise()}const bE=800,ME=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ME)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(AE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NE(),!this.activeServiceWorker)return;this.sender=new PE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gl();return await xd(e,es,"1"),await Ad(e,es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Rs(i,!1).getAll();return new Ui(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const Ci=fm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:start",Y(t,e))}function jE(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:finalize",Y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=500,zE=6e4,ro=1e12;class BE{constructor(e){this.auth=e,this.counter=ro,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new VE(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ro;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ro;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ro;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class VE{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$E(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},zE)},FE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $E(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=qp("rcb"),WE=new Li(3e4,6e4),HE="https://www.google.com/recaptcha/api.js?";class KE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(GE(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Id(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const o=Z().setTimeout(()=>{i(ce(e,"network-request-failed"))},WE.get());Z()[pa]=()=>{Z().clearTimeout(o),delete Z()[pa];const a=Z().grecaptcha;if(!a||!Id(a)){i(ce(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${HE}?${yr({onload:pa,render:"explicit",hl:n})}`;Au(s).catch(()=>{clearTimeout(o),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function GE(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class qE{async load(e){return new BE(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="recaptcha",YE={theme:"light",type:"image"};let QE=class{constructor(e,n,r=Object.assign({},YE)){this.parameters=r,this.type=hm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=q(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qE:new KE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Ru()&&!Fu(),this.auth,"internal-error"),await JE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Gw(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function JE(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=wn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function XE(t,e,n){const r=q(t),i=await Ns(r,e,M(n));return new zu(i,o=>Ts(r,o))}async function ZE(t,e,n){const r=M(t);await ks(!1,r,"phone");const i=await Ns(r.auth,e,M(n));return new zu(i,o=>nm(r,o))}async function eI(t,e,n){const r=M(t),i=await Ns(r.auth,e,M(n));return new zu(i,o=>rm(r,o))}async function Ns(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===hm,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return I(s.type==="enroll",t,"internal-error"),(await wE(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await UE(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await M_(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function tI(t,e){await Ou(M(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn=class wo{constructor(e){this.providerId=wo.PROVIDER_ID,this.auth=q(e)}verifyPhoneNumber(e,n){return Ns(this.auth,e,M(n))}static credential(e,n){return wn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return wo.credentialFromTaggedObject(n)}static credentialFromError(e){return wo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?wn._fromTokenResponse(n,r):null}};Rn.PROVIDER_ID="phone";Rn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return e?Ae(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nI(t){return tm(t.auth,new Bu(t),t.bypassAuthState)}function rI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),em(n,new Bu(t),t.bypassAuthState)}async function iI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Ou(n,new Bu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new Li(2e3,1e4);async function sI(t,e,n){const r=q(t);wr(t,e,Ct);const i=Dn(r,n);return new ht(r,"signInViaPopup",e,i).executeNotNull()}async function aI(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function lI(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ht extends pm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oI.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="pendingRedirect",Zr=new Map;class cI extends pm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zr.get(this.auth._key());if(!e){try{const r=await dI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zr.set(this.auth._key(),e)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dI(t,e){const n=gm(e),r=mm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Vu(t,e){return mm(t)._set(gm(e),"true")}function fI(){Zr.clear()}function $u(t,e){Zr.set(t._key(),e)}function mm(t){return Ae(t._redirectPersistence)}function gm(t){return yn(uI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e,n){return pI(t,e,n)}async function pI(t,e,n){const r=q(t);wr(t,e,Ct),await r._initializationPromise;const i=Dn(r,n);return await Vu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function mI(t,e,n){return gI(t,e,n)}async function gI(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await Vu(i,r.auth);const o=await vm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function vI(t,e,n){return yI(t,e,n)}async function yI(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await ks(!1,r,e.providerId),await Vu(i,r.auth);const o=await vm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function wI(t,e){return await q(t)._initializationPromise,xs(t,e,!1)}async function xs(t,e,n=!1){const r=q(t),i=Dn(r,e),s=await new cI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function vm(t){const e=Mi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=10*60*1e3;class ym{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_I&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e={}){return Q(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SI=/^https?/;async function kI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _m(t);for(const n of e)try{if(TI(n))return}catch{}fe(t,"unauthorized-domain")}function TI(t){const e=Ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!SI.test(n))return!1;if(II.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new Li(3e4,6e4);function Ld(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PI(t){return new Promise((e,n)=>{var r,i,o;function s(){Ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(ce(t,"network-request-failed"))},timeout:CI.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Z().gapi)===null||o===void 0)&&o.load)s();else{const a=qp("iframefcb");return Z()[a]=()=>{gapi.load?s():n(ce(t,"network-request-failed"))},Au(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _o=null,e})}let _o=null;function RI(t){return _o=_o||PI(t),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Li(5e3,15e3),xI="__/auth/iframe",AI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nu(e,AI):`https://${t.config.authDomain}/${xI}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},i=LI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${yr(r).slice(1)}`}async function bI(t){const e=await RI(t),n=Z().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:DI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ce(t,"network-request-failed"),a=Z().setTimeout(()=>{o(s)},NI.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UI=500,jI=600,FI="_blank",zI="http://localhost";class Dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BI(t,e,n,r=UI,i=jI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ne().toLowerCase();n&&(a=Vp(u)?FI:n),Bp(u)&&(e=e||zI,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(l_(u)&&a!=="_self")return VI(e||"",a),new Dd(null);const f=window.open(e||"",a,d);I(f,t,"popup-blocked");try{f.focus()}catch{}return new Dd(f)}function VI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="__/auth/handler",WI="emulator/auth/handler",HI=encodeURIComponent("fac");async function vl(t,e,n,r,i,o){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:i};if(e instanceof Ct){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",g0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(e instanceof Ir){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${HI}=${encodeURIComponent(l)}`:"";return`${KI(t)}?${yr(a).slice(1)}${u}`}function KI({config:t}){return t.emulator?Nu(t,WI):`https://${t.authDomain}/${$I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="webStorageSupport";class GI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=xs,this._overrideRedirectResult=$u}async _openPopup(e,n,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await vl(e,n,r,Ei(),i);return BI(e,s,Mi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await vl(e,n,r,Ei(),i);return RE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bI(e),r=new ym(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ma,{type:ma},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ma];s!==void 0&&n(!!s),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||xu()||_r()}}const qI=GI;class YI{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ot("unexpected MultiFactorSessionType")}}}class Wu extends YI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wu(e)}_finalizeEnroll(e,n,r){return _E(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return jE(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Em{constructor(){}static assertion(e){return Wu._fromCredential(e)}}Em.FACTOR_ID="phone";var bd="@firebase/auth",Md="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XI(t){Cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;I(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},u=new m_(r,i,o,l);return E_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Yt("auth-internal",e=>{const n=q(e.getProvider("auth").getImmediate());return(r=>new QI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(bd,Md,JI(t)),Kt(bd,Md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=5*60;l0("authIdTokenMaxAge");XI("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=2e3;async function tS(t,e,n){var r;const{BuildInfo:i}=Nn();Je(e.sessionId,"AuthEvent did not contain a session ID");const o=await sS(e.sessionId),s={};return _r()?s.ibi=i.packageName:Di()?s.apn=i.packageName:fe(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,vl(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function nS(t){const{BuildInfo:e}=Nn(),n={};_r()?n.iosBundleId=e.packageName:Di()?n.androidPackageName=e.packageName:fe(t,"operation-not-supported-in-this-environment"),await _m(t,n)}function rS(t){const{cordova:e}=Nn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,a_()?"_blank":"_system","location=yes"),n(i)})})}async function iS(t,e,n){const{cordova:r}=Nn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var f;o();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(ce(t,"redirect-cancelled-by-user"))},eS))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Di()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function oS(t){var e,n,r,i,o,s,a,l,u,d;const f=Nn();I(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((o=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(s=f==null?void 0:f.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function sS(t){const e=aS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function aS(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=20;class uS extends ym{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function cS(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:hS(),postBody:null,tenantId:t.tenantId,error:ce(t,"no-auth-event")}}function dS(t,e){return yl()._set(wl(t),e)}async function Ud(t){const e=await yl()._get(wl(t));return e&&await yl()._remove(wl(t)),e}function fS(t,e){var n,r;const i=mS(e);if(i.includes("/__/auth/callback")){const o=Eo(i),s=o.firebaseError?pS(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ce(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function hS(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<lS;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function yl(){return Ae(ju)}function wl(t){return yn("authEvent",t.config.apiKey,t.name)}function pS(t){try{return JSON.parse(t)}catch{return null}}function mS(t){const e=Eo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Eo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Eo(i).link||i||r||n||t}function Eo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Yn(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=500;class vS{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=xs,this._overrideRedirectResult=$u}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new uS(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){fe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){oS(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),fI(),await this._originValidation(e);const s=cS(e,r,i);await dS(e,s);const a=await tS(e,s,n),l=await rS(a);return iS(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Nn(),s=setTimeout(async()=>{await Ud(e),n.onEvent(jd())},gS),a=async d=>{clearTimeout(s);const f=await Ud(e);let m=null;f&&(d!=null&&d.url)&&(m=fS(f,d.url)),n.onEvent(m||jd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Nn().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const yS=vS;function jd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ce("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t,e){q(t)._logFramework(e)}var _S="@firebase/auth-compat",ES="0.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1e3;function ei(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function SS(){return ei()==="http:"||ei()==="https:"}function Im(t=ne()){return!!((ei()==="file:"||ei()==="ionic:"||ei()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function kS(){return Eu()||yp()}function TS(){return _p()&&(document==null?void 0:document.documentMode)===11}function CS(t=ne()){return/Edge\/\d+/.test(t)}function PS(t=ne()){return TS()||CS(t)}function Sm(){try{const t=self.localStorage,e=Mi();if(t)return t.setItem(e,"1"),t.removeItem(e),PS()?Yo():!0}catch{return Hu()&&Yo()}return!1}function Hu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ga(){return(SS()||wp()||Im())&&!kS()&&Sm()&&!Hu()}function km(){return Im()&&typeof document<"u"}async function RS(){return km()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},IS);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function NS(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},Dr=I,Tm="persistence";function xS(t,e){if(Dr(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Eu()){Dr(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(yp()){Dr(e===Ne.NONE,t,"unsupported-persistence-type");return}if(Hu()){Dr(e===Ne.NONE||e===Ne.LOCAL&&Yo(),t,"unsupported-persistence-type");return}Dr(e===Ne.NONE||Sm(),t,"unsupported-persistence-type")}async function _l(t){await t._initializationPromise;const e=Cm(),n=yn(Tm,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function AS(t,e){const n=Cm();if(!n)return[];const r=yn(Tm,t,e);switch(n.getItem(r)){case Ne.NONE:return[fr];case Ne.LOCAL:return[Ci,Pn];case Ne.SESSION:return[Pn];default:return[]}}function Cm(){var t;try{return((t=NS())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=I;class Mt{constructor(){this.browserResolver=Ae(qI),this.cordovaResolver=Ae(yS),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=xs,this._overrideRedirectResult=$u}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return km()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return OS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await RS();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){return t.unwrap()}function LS(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){return Rm(t)}function bS(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new MS(t,yE(t,e))}else if(r){const i=Rm(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Rm(t){const{_tokenResponse:e}=t instanceof Pe?t.customData:t;if(!e)return null;if(!(t instanceof Pe)&&"temporaryProof"in e&&"phoneNumber"in e)return Rn.credentialFromResult(t);const n=e.providerId;if(!n||n===Lr.PASSWORD)return null;let r;switch(n){case Lr.GOOGLE:r=nt;break;case Lr.FACEBOOK:r=tt;break;case Lr.GITHUB:r=rt;break;case Lr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?hr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new rr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Pe?r.credentialFromError(t):r.credentialFromResult(t)}function Ee(t,e){return e.catch(n=>{throw n instanceof Pe&&bS(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:DS(n),additionalUserInfo:vE(n),user:pt.getOrCreate(i)}})}async function El(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ee(t,n.confirm(r))}}class MS{constructor(e,n){this.resolver=n,this.auth=LS(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ee(Pm(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._delegate=e,this.multiFactor=IE(e)}static getOrCreate(e){return pt.USER_MAP.has(e)||pt.USER_MAP.set(e,new pt(e)),pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ee(this.auth,nm(this._delegate,e))}async linkWithPhoneNumber(e,n){return El(this.auth,ZE(this._delegate,e,n))}async linkWithPopup(e){return Ee(this.auth,lI(this._delegate,e,Mt))}async linkWithRedirect(e){return await _l(q(this.auth)),vI(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ee(this.auth,rm(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return El(this.auth,eI(this._delegate,e,n))}reauthenticateWithPopup(e){return Ee(this.auth,aI(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await _l(q(this.auth)),mI(this._delegate,e,Mt)}sendEmailVerification(e){return sE(this._delegate,e)}async unlink(e){return await K_(this._delegate,e),this}updateEmail(e){return cE(this._delegate,e)}updatePassword(e){return dE(this._delegate,e)}updatePhoneNumber(e){return tI(this._delegate,e)}updateProfile(e){return uE(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return aE(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=I;class Il{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;br(r,"invalid-api-key",{appName:e.name}),br(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=n.initialize({options:{persistence:US(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Uw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){I_(this._delegate,e,n)}applyActionCode(e){return J_(this._delegate,e)}checkActionCode(e){return im(this._delegate,e)}confirmPasswordReset(e,n){return Q_(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ee(this._delegate,Z_(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return oE(this._delegate,e)}isSignInWithEmailLink(e){return nE(this._delegate,e)}async getRedirectResult(){br(ga(),this._delegate,"operation-not-supported-in-this-environment");const e=await wI(this._delegate,Mt);return e?Ee(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){wS(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=Fd(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=Fd(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return tE(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Y_(this._delegate,e,n||void 0)}async setPersistence(e){xS(this._delegate,e);let n;switch(e){case Ne.SESSION:n=Pn;break;case Ne.LOCAL:n=await Ae(Ci)._isAvailable()?Ci:ju;break;case Ne.NONE:n=fr;break;default:return fe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ee(this._delegate,H_(this._delegate))}signInWithCredential(e){return Ee(this._delegate,Ts(this._delegate,e))}signInWithCustomToken(e){return Ee(this._delegate,q_(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ee(this._delegate,eE(this._delegate,e,n))}signInWithEmailLink(e,n){return Ee(this._delegate,rE(this._delegate,e,n))}signInWithPhoneNumber(e,n){return El(this._delegate,XE(this._delegate,e,n))}async signInWithPopup(e){return br(ga(),this._delegate,"operation-not-supported-in-this-environment"),Ee(this._delegate,sI(this._delegate,e,Mt))}async signInWithRedirect(e){return br(ga(),this._delegate,"operation-not-supported-in-this-environment"),await _l(this._delegate),hI(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return X_(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Il.Persistence=Ne;function Fd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&pt.getOrCreate(s)),error:e,complete:n}}function US(t,e){const n=AS(t,e);if(typeof self<"u"&&!n.includes(Ci)&&n.push(Ci),typeof window<"u")for(const r of[ju,Pn])n.includes(r)||n.push(r);return n.includes(fr)||n.push(fr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.providerId="phone",this._delegate=new Rn(Pm(kt.auth()))}static credential(e,n){return Rn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ku.PHONE_SIGN_IN_METHOD=Rn.PHONE_SIGN_IN_METHOD;Ku.PROVIDER_ID=Rn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=I;class FS{constructor(e,n,r=kt.app()){var i;jS((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new QE(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="auth-compat";function BS(t){t.INTERNAL.registerComponent(new Yt(zS,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Il(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mn.EMAIL_SIGNIN,PASSWORD_RESET:Mn.PASSWORD_RESET,RECOVER_EMAIL:Mn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mn.VERIFY_EMAIL}},EmailAuthProvider:nn,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:rr,SAMLAuthProvider:Xo,PhoneAuthProvider:Ku,PhoneMultiFactorGenerator:Em,RecaptchaVerifier:FS,TwitterAuthProvider:it,Auth:Il,AuthCredential:Er,Error:Pe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(_S,ES)}BS(kt);var VS="firebase",$S="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.registerVersion(VS,$S,"app-compat");const WS={apiKey:"AIzaSyDzSTdaD4V0TAlXsE9lwjA_A-IqPclA9Vw",authDomain:"runtime-terror-website-a1313.firebaseapp.com",projectId:"runtime-terror-website-a1313",storageBucket:"runtime-terror-website-a1313.appspot.com",messagingSenderId:"768147262512",appId:"1:768147262512:web:a9d392e05065d4f9bef1f5",measurementId:"G-XWVEVEJGE1"};kt.initializeApp(WS);const HS=(t,e)=>(console.log(t,e),kt.auth().createUserWithEmailAndPassword(t,e)),KS=(t,e)=>kt.auth().signInWithEmailAndPassword(t,e),GS=()=>kt.auth().signOut(),qS=()=>{const[t,e]=k.useState(null);return k.useEffect(()=>kt.auth().onAuthStateChanged(r=>{console.log("user",r),e(r)}),[]),t};function YS({onSignIn:t,onSignUp:e,onSignOut:n,currentUser:r}){const[i,o]=k.useState(""),[s,a]=k.useState(""),l=wu(),[u,d]=k.useState(!1),f=()=>{l("/")},m=()=>{console.log(r),d(!0)},v=()=>{d(!1)},y=()=>{t(i,s),console.log("sign in"),v()},_=()=>{n(),console.log("sign out"),v()},x=()=>{e(i,s),console.log("sign out"),v()},h=p=>{o(p.target.value)},c=p=>{a(p.target.value)};return g.jsxs("div",{children:[g.jsxs("div",{className:"flex w-full justify-between border-black border-b-2 px-16 py-8 mb-8",children:[g.jsx("div",{className:"ml-16 cursor-pointer",onClick:f,children:g.jsx("p",{className:"text-4xl",children:"Runtime Terror"})}),g.jsx("button",{className:"text-2xl border-2 border-black bg-slate-100 p-2 rounded-lg mr-16 hover:scale-110 cursor-pointer hover:bg-slate-200 transition-all duration-300",onClick:m,children:r?"Log Out":"Sign In"})]}),u&&g.jsxs("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[g.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),g.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:g.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:g.jsx("div",{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:g.jsxs("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[g.jsx("button",{className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800",onClick:v,children:"X"}),g.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:g.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})}),g.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),g.jsx("div",{className:"mt-2",children:g.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:i,onChange:h,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),g.jsxs("div",{children:[g.jsx("div",{className:"flex items-center justify-between",children:g.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"})}),g.jsx("div",{className:"mt-2",children:g.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:s,onChange:c,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),g.jsxs("div",{className:"flex my-8 gap-2",children:[g.jsx("button",{type:"submit",onClick:y,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign In"}),g.jsx("button",{type:"submit",onClick:x,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign Up"}),g.jsx("button",{onClick:_,className:"flex w-full justify-center rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",children:"Sign Out"})]})]})]})})})})]})]})}const io=({name:t,picture:e,to:n})=>{const r=wu(),i=()=>{r(n)};return g.jsxs("div",{className:"h-full bg-slate-100 rounded-xl flex flex-col flex-grow hover:scale-105 cursor-pointer hover:bg-slate-200 transition-all duration-300",onClick:i,children:[g.jsxs("div",{className:"py-4 px-8 flex items-center",children:[g.jsx("img",{src:e,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"}),g.jsx("p",{className:"text-lg pl-8",children:"Here is a little info about me! Click on this card to learn more about me!"})]}),g.jsxs("div",{className:"pl-8 pb-8",children:[g.jsx("h3",{className:"text-3xl",children:t}),g.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]})},Nm="/runtime-terror-website/assets/danny-b221f444.jpg",xm="/runtime-terror-website/assets/profilePic-f89f62fe.png",Vr="/runtime-terror-website/assets/sid-d9f5f144.jpg",Am="/runtime-terror-website/assets/image4-32e48271.png";function QS(){return g.jsx("div",{className:"flex justify-center items-center px-40",children:g.jsxs("div",{className:"grid grid-cols-2 gap-8 justify-center justify-items-center",children:[g.jsx(io,{name:"Danny Bodin",picture:Nm,to:"/danny"}),g.jsx(io,{name:"Jordin Eicher",picture:Am,to:"/jordin"}),g.jsx(io,{name:"Addie Schroeder",picture:Vr,to:"/addie"}),g.jsx(io,{name:"Nina Baffo",picture:xm,to:"/nina"})]})})}const JS=(t,e,n)=>{const r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},XS=(t,e)=>{const n=window.document.getElementById(t);n&&e.removeChild(n)},ZS=({id:t})=>(k.useEffect(()=>{if(!window)return;const e=window.document;return e.getElementById("commento")&&JS("https://cdn.commento.io/js/commento.js","commento-script",e.body),()=>XS("commento-script",e.body)},[t]),g.jsx("div",{id:"commento"})),ek=({items:t})=>{const e=k.useRef(null);return k.useEffect(()=>{const n=()=>{const{scrollLeft:i,scrollWidth:o,clientWidth:s}=e.current;i>o-s-10&&(e.current.scrollLeft=0)},r=e.current;return r.addEventListener("scroll",n),()=>r.removeEventListener("scroll",n)},[]),g.jsxs("div",{style:{overflowX:"auto",whiteSpace:"nowrap"},ref:e,children:[t.map((n,r)=>g.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:g.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px"}})},r)),t.map((n,r)=>g.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:g.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px"}})},`duplicate-${r}`))]})};function tk(){const t=[{src:Vr,alt:"Sid"},{src:Vr,alt:"Sid"},{src:Vr,alt:"Sid"},{src:Vr,alt:"Sid"}];return g.jsxs("div",{children:[g.jsxs("div",{className:"flex px-40",children:[g.jsxs("div",{className:"bg-slate-100 rounded-xl flex flex-col flex-grow",children:[g.jsx("div",{className:"p-8 flex items-center min-w-max",children:g.jsx("img",{src:Nm,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"})}),g.jsxs("div",{className:"pl-8 pb-8",children:[g.jsx("h3",{className:"text-3xl",children:"Danny B."}),g.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]}),g.jsx("div",{className:"m-4",children:g.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laudantium nam quo fugiat. Eius fugit, consequuntur nisi deserunt beatae odio natus cupiditate exercitationem necessitatibus perspiciatis aliquid praesentium. Voluptatum, velit repellendus!"})})]}),g.jsx("div",{className:"w-full bg-slate-100 py-16 mt-16",children:g.jsx(ek,{items:t})}),g.jsx("div",{className:"my-8 mx-40",children:g.jsx(ZS,{id:1})})]})}const zd="/runtime-terror-website/assets/image1-c760ea26.png",nk="/runtime-terror-website/assets/image2-62021c75.png",rk="/runtime-terror-website/assets/tech-490d6e4d.jpg",ik=({images:t})=>{const[e,n]=k.useState(0),r=s=>{n(s)},i=()=>{r(e-1)},o=()=>{r(e+1)};return g.jsxs("div",{className:"slideshow-container",children:[g.jsx("div",{className:"slides",style:{transform:`translateX(${-e*100}%)`},children:t.map((s,a)=>g.jsx("div",{className:"slide",children:g.jsx("img",{src:s,alt:`Image ${a+1}`})},a))}),g.jsx("button",{className:"prev",onClick:i,children:"❮"}),g.jsx("button",{className:"next",onClick:o,children:"❯"})]})},ok=()=>{const t=[Am,nk,zd,rk];return g.jsxs("div",{className:"profile-page body",children:[g.jsxs("header",{className:"header",children:[g.jsx("div",{className:"profile-picture",children:g.jsx("img",{src:zd,alt:"Profile"})}),g.jsxs("div",{className:"header-text",children:[g.jsx("h1",{children:g.jsx("strong",{children:"Jordin Eicher"})}),g.jsx("p",{children:g.jsx("i",{children:"AKA Linux Wizard"})})]})]}),g.jsxs("section",{className:"about-me",children:[g.jsx("h2",{className:"h2",children:"About Me"}),g.jsx("p",{className:"p",children:g.jsx("i",{children:"I am an Electrical Engineering major at the University of Iowa with focus in IoT. I have interned at Collins Aerospace in the Communications Hardware department and will start full-time as a Hardware Design Engineer following graduation. In my freetime, I enjoy watching MMA, learning history and philosophy, tinkering with electronics, and running."})})]}),g.jsxs("section",{className:"skills",children:[g.jsx("h2",{children:"Favorite Quote"}),g.jsx("ul",{className:"ul",children:g.jsx("li",{className:"li",children:g.jsx("i",{children:`"All the time people ask me, 'Brother, what are you proud of?', I say, I am very proud of... I never give up." - Khabib Nurmagomedov`})})})]}),g.jsxs("section",{className:"projects",children:[g.jsx("h1",{children:"Image1-3: Hiking, Image4: Tech stuff"}),g.jsx(ik,{images:t})]}),g.jsxs("section",{className:"contact",children:[g.jsx("h2",{children:"Contact"}),g.jsx("div",{children:g.jsxs("dl",{children:[g.jsx("dt",{children:"Personal Email:"}),g.jsx("dd",{children:g.jsx("a",{href:"mailto:jayike1010@gmail.com",children:"jayike1010@gmail.com"})}),g.jsx("dt",{children:"LinkedIn:"}),g.jsx("dd",{children:g.jsx("a",{href:"https://www.linkedin.com/in/jordin-eicher",target:"_blank",children:"linkedin.com/in/jordin-eicher"})}),g.jsx("dt",{children:"GitHub:"}),g.jsx("dd",{children:g.jsx("a",{href:"https://www.github.com/jayike",target:"_blank",children:"github.com/jayike"})})]})})]}),g.jsx("footer",{children:g.jsx("p",{children:"© 2023 Runtime Terror. All rights reserved."})})]})};const sk="/runtime-terror-website/assets/kev-77fe69f5.jpeg",ak="/runtime-terror-website/assets/roomies-5768ac1f.jpeg",lk="/runtime-terror-website/assets/dance-a84d09bc.jpeg",uk="/runtime-terror-website/assets/cover_pic-5da812ef.png";function ck(){return g.jsxs("div",{style:{backgroundColor:"lightgrey"},children:[g.jsx("div",{style:{backgroundColor:"lightblue"},children:g.jsxs("h1",{class:"text-3xl text-center font-bold",children:[g.jsx("br",{})," Addie Schroeder ",g.jsx("br",{})]})}),g.jsxs("div",{className:"split-container",children:[g.jsx("div",{className:"left-column margin",children:g.jsx("div",{children:g.jsx("img",{src:uk,alt:"Profile Pic",style:{width:"250px"}})})}),g.jsx("div",{className:"margin",children:g.jsxs("p",{children:[g.jsx("h2",{class:"font-bold",children:"A little about myself:"}),g.jsx("p",{class:"text-l",className:"right-column paragraph",style:{backgroundColor:"lightBlue"},children:"Hi! My name is Addie. I am a dedicated student at the University of Iowa, majoring in computer science and engineering while also pursuing a minor in mathematics. In addition to my academic pursuits, I spent the last four years representing the university as a member of the Iowa dance team. Outside of my studies, I am passionate about dance, and though I no longer invest as much time on the dance team, I channel that passion into teaching dance to kids at a local studio. Beyond academia and dance, my interests extend to spending quality time with friends and family, indulging in my love for travel, and enjoying the company of my cat, Kevin."})]})})]}),g.jsxs("div",{className:"image-row",style:{backgroundColor:"lightGrey"},children:[g.jsx("img",{src:sk,alt:"Kev",className:"image border"}),g.jsx("img",{src:ak,alt:"Roomies",className:"image"}),g.jsx("img",{src:lk,alt:"Dance",className:"image"})]})]})}const dk="/runtime-terror-website/assets/bahamas-394d8819.jpeg",fk="/runtime-terror-website/assets/family-c98e45d5.jpeg",hk="/runtime-terror-website/assets/puppy-5f837944.jpeg";function pk(){return g.jsxs("div",{children:[g.jsxs("div",{style:{backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[g.jsx("p",{style:{fontWeight:"bold",fontSize:"25px",marginBottom:"300px"},children:"Nina Baffo"}),g.jsx("img",{src:xm,style:{width:"250px"}}),g.jsx("p",{style:{marginLeft:"1cm",fontWeight:"bold",fontSize:"17px"},children:"About me:"}),g.jsx("p",{style:{backgroundColor:"lightpink",padding:"10px",borderRadius:"5px",marginLeft:"1cm",marginRight:"1cm",marginBottom:"1.5cm",fontSize:"17px"},children:"Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering. I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. I can't wait to see where my career takes me in the near future! "})]}),g.jsxs("div",{style:{backgroundColor:"lavender",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:hk,style:{width:"300px",marginRight:"1cm",marginBottom:"1cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"This is my puppy, his name is Benny and he just turned 8 months old. He is the best dog in the world, I take him with me everywhere."})]}),g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:fk,style:{width:"300px",marginRight:"1cm",marginBottom:"0.5cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"Pictured here is me, my mom, and sisters at an Iowa game this year. They are my best friends and I would do anything for them. I love my family very much."})]}),g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:dk,style:{width:"800px",marginRight:"1cm",marginBottom:"1cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"This is a picture of when I went to the Bahamas. I love traveling to new places and expanding my knowledge about different areas of the world. "})]})]})]})}function mk(){const t=qS(),e=async(o,s)=>{try{console.log("Signing up..."+o+" "+s),await HS(o,s)}catch(a){console.error("Error signing up:",a)}},n=async(o,s)=>{try{await KS(o,s)}catch(a){console.error("Error signing in:",a)}},r=async()=>{try{await GS()}catch(o){console.error("Error signing out:",o)}},i=()=>{const o=_s();return t===void 0?null:(console.log(t),t?g.jsx(Yy,{}):g.jsx(qy,{to:"/",replace:!0,state:{from:o}}))};return g.jsxs(Zy,{basename:"/runtime-terror-website/",children:[g.jsx(YS,{onSignIn:n,onSignOut:r,onSignUp:e,currentUser:t}),g.jsxs(Jy,{children:[g.jsx(ln,{path:"/",element:g.jsx(QS,{})}),g.jsxs(ln,{element:g.jsx(i,{}),children:[g.jsx(ln,{path:"/Danny",element:g.jsx(tk,{})}),g.jsx(ln,{path:"/Jordin",element:g.jsx(ok,{})}),g.jsx(ln,{path:"/Addie",element:g.jsx(ck,{})}),g.jsx(ln,{path:"/Nina",element:g.jsx(pk,{})})]})]})]})}va.createRoot(document.getElementById("root")).render(g.jsx(Qd.StrictMode,{children:g.jsx(mk,{})}));
