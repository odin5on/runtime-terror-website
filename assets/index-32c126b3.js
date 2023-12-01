function Um(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hd={exports:{}},ts={},Kd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),zm=Symbol.for("react.portal"),Bm=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),$m=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),Gm=Symbol.for("react.suspense"),qm=Symbol.for("react.memo"),Ym=Symbol.for("react.lazy"),Xu=Symbol.iterator;function Qm(t){return t===null||typeof t!="object"?null:(t=Xu&&t[Xu]||t["@@iterator"],typeof t=="function"?t:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Yd={};function pr(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Gd}pr.prototype.isReactComponent={};pr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qd(){}Qd.prototype=pr.prototype;function Pl(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Gd}var Rl=Pl.prototype=new Qd;Rl.constructor=Pl;qd(Rl,pr.prototype);Rl.isPureReactComponent=!0;var Zu=Array.isArray,Jd=Object.prototype.hasOwnProperty,Nl={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Zd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Jd.call(e,r)&&!Xd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ci,type:t,key:o,ref:s,props:i,_owner:Nl.current}}function Jm(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function Xm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ec=/\/+/g;function Ds(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xm(""+t.key):e.toString(36)}function io(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ci:case zm:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ds(s,0):r,Zu(i)?(n="",t!=null&&(n=t.replace(ec,"$&/")+"/"),io(i,e,n,"",function(u){return u})):i!=null&&(xl(i)&&(i=Jm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Zu(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ds(o,a);s+=io(o,e,n,l,i)}else if(l=Qm(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ds(o,a++),s+=io(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fi(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Zm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},oo={transition:null},eg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:oo,ReactCurrentOwner:Nl};D.Children={map:Fi,forEach:function(t,e,n){Fi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fi(t,function(){e++}),e},toArray:function(t){return Fi(t,function(e){return e})||[]},only:function(t){if(!xl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=pr;D.Fragment=Bm;D.Profiler=$m;D.PureComponent=Pl;D.StrictMode=Vm;D.Suspense=Gm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Nl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jd.call(e,l)&&!Xd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ci,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:Hm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wm,_context:t},t.Consumer=t};D.createElement=Zd;D.createFactory=function(t){var e=Zd.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Km,render:t}};D.isValidElement=xl;D.lazy=function(t){return{$$typeof:Ym,_payload:{_status:-1,_result:t},_init:Zm}};D.memo=function(t,e){return{$$typeof:qm,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=oo.transition;oo.transition={};try{t()}finally{oo.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return we.current.useCallback(t,e)};D.useContext=function(t){return we.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return we.current.useDeferredValue(t)};D.useEffect=function(t,e){return we.current.useEffect(t,e)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return we.current.useMemo(t,e)};D.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};D.useRef=function(t){return we.current.useRef(t)};D.useState=function(t){return we.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";Kd.exports=D;var k=Kd.exports;const ef=Fm(k),tg=Um({__proto__:null,default:ef},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=k,rg=Symbol.for("react.element"),ig=Symbol.for("react.fragment"),og=Object.prototype.hasOwnProperty,sg=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ag={key:!0,ref:!0,__self:!0,__source:!0};function tf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)og.call(e,r)&&!ag.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rg,type:t,key:o,ref:s,props:i,_owner:sg.current}}ts.Fragment=ig;ts.jsx=tf;ts.jsxs=tf;Hd.exports=ts;var m=Hd.exports,Ia={},nf={exports:{}},De={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,A){var O=C.length;C.push(A);e:for(;0<O;){var J=O-1>>>1,oe=C[J];if(0<i(oe,A))C[J]=A,C[O]=oe,O=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var J=0,oe=C.length,ji=oe>>>1;J<ji;){var rn=2*(J+1)-1,Ls=C[rn],on=rn+1,Ui=C[on];if(0>i(Ls,O))on<oe&&0>i(Ui,Ls)?(C[J]=Ui,C[on]=O,J=on):(C[J]=Ls,C[rn]=O,J=rn);else if(on<oe&&0>i(Ui,O))C[J]=Ui,C[on]=O,J=on;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,g=3,v=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function w(C){if(_=!1,p(C),!y)if(n(l)!==null)y=!0,As(S);else{var A=n(u);A!==null&&Os(w,A.startTime-C)}}function S(C,A){y=!1,_&&(_=!1,h(N),N=-1),v=!0;var O=g;try{for(p(A),f=n(l);f!==null&&(!(f.expirationTime>A)||C&&!$e());){var J=f.callback;if(typeof J=="function"){f.callback=null,g=f.priorityLevel;var oe=J(f.expirationTime<=A);A=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),p(A)}else r(l);f=n(l)}if(f!==null)var ji=!0;else{var rn=n(u);rn!==null&&Os(w,rn.startTime-A),ji=!1}return ji}finally{f=null,g=O,v=!1}}var P=!1,R=null,N=-1,z=5,L=-1;function $e(){return!(t.unstable_now()-L<z)}function Sr(){if(R!==null){var C=t.unstable_now();L=C;var A=!0;try{A=R(!0,C)}finally{A?kr():(P=!1,R=null)}}else P=!1}var kr;if(typeof c=="function")kr=function(){c(Sr)};else if(typeof MessageChannel<"u"){var Ju=new MessageChannel,jm=Ju.port2;Ju.port1.onmessage=Sr,kr=function(){jm.postMessage(null)}}else kr=function(){x(Sr,0)};function As(C){R=C,P||(P=!0,kr())}function Os(C,A){N=x(function(){C(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,As(S))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var O=g;g=A;try{return C()}finally{g=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=g;g=C;try{return A()}finally{g=O}},t.unstable_scheduleCallback=function(C,A,O){var J=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?J+O:J):O=J,C){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=O+oe,C={id:d++,callback:A,priorityLevel:C,startTime:O,expirationTime:oe,sortIndex:-1},O>J?(C.sortIndex=O,e(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Os(w,O-J))):(C.sortIndex=oe,e(l,C),y||v||(y=!0,As(S))),C},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(C){var A=g;return function(){var O=g;g=A;try{return C.apply(this,arguments)}finally{g=O}}}})(of);rf.exports=of;var lg=rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=k,Le=lg;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,ei={};function xn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(ei[t]=e,t=0;t<e.length;t++)af.add(e[t])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function cg(t){return Ea.call(nc,t)?!0:Ea.call(tc,t)?!1:ug.test(t)?nc[t]=!0:(tc[t]=!0,!1)}function dg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fg(t,e,n,r){if(e===null||typeof e>"u"||dg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Ol(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Al,Ol);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Al,Ol);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Al,Ol);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ll(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fg(e,n,i,r)&&(n=null),r||i===null?cg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var St=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Ml=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Tr(t){return t===null||typeof t!="object"?null:(t=rc&&t[rc]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,bs;function Mr(t){if(bs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bs=e&&e[1]||""}return`
`+bs+t}var Ms=!1;function js(t,e){if(!t||Ms)return"";Ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ms=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mr(t):""}function hg(t){switch(t.tag){case 5:return Mr(t.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return t=js(t.type,!1),t;case 11:return t=js(t.type.render,!1),t;case 1:return t=js(t.type,!0),t;default:return""}}function Ca(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case jn:return"Portal";case Sa:return"Profiler";case Dl:return"StrictMode";case ka:return"Suspense";case Ta:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uf:return(t.displayName||"Context")+".Consumer";case lf:return(t._context.displayName||"Context")+".Provider";case bl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ml:return e=t.displayName||null,e!==null?e:Ca(t.type)||"Memo";case Nt:e=t._payload,t=t._init;try{return Ca(t(e))}catch{}}return null}function pg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(e);case 8:return e===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function df(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mg(t){var e=df(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bi(t){t._valueTracker||(t._valueTracker=mg(t))}function ff(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=df(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pa(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ic(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hf(t,e){e=e.checked,e!=null&&Ll(t,"checked",e,!1)}function Ra(t,e){hf(t,e);var n=Gt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Na(t,e.type,n):e.hasOwnProperty("defaultValue")&&Na(t,e.type,Gt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Na(t,e,n){(e!=="number"||Io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jr=Array.isArray;function Qn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(jr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gt(n)}}function pf(t,e){var n=Gt(e.value),r=Gt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ac(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vi,gf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ti(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(t){gg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vr[e]=Vr[t]})});function vf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vr.hasOwnProperty(t)&&Vr[t]?(""+e).trim():e+"px"}function yf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(t,e){if(e){if(vg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function La(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Da=null;function jl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ba=null,Jn=null,Xn=null;function lc(t){if(t=Ni(t)){if(typeof ba!="function")throw Error(I(280));var e=t.stateNode;e&&(e=ss(e),ba(t.stateNode,t.type,e))}}function wf(t){Jn?Xn?Xn.push(t):Xn=[t]:Jn=t}function _f(){if(Jn){var t=Jn,e=Xn;if(Xn=Jn=null,lc(t),e)for(t=0;t<e.length;t++)lc(e[t])}}function If(t,e){return t(e)}function Ef(){}var Us=!1;function Sf(t,e,n){if(Us)return t(e,n);Us=!0;try{return If(t,e,n)}finally{Us=!1,(Jn!==null||Xn!==null)&&(Ef(),_f())}}function ni(t,e){var n=t.stateNode;if(n===null)return null;var r=ss(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Ma=!1;if(yt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Ma=!1}function yg(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var $r=!1,Eo=null,So=!1,ja=null,wg={onError:function(t){$r=!0,Eo=t}};function _g(t,e,n,r,i,o,s,a,l){$r=!1,Eo=null,yg.apply(wg,arguments)}function Ig(t,e,n,r,i,o,s,a,l){if(_g.apply(this,arguments),$r){if($r){var u=Eo;$r=!1,Eo=null}else throw Error(I(198));So||(So=!0,ja=u)}}function An(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uc(t){if(An(t)!==t)throw Error(I(188))}function Eg(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uc(i),t;if(o===r)return uc(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Tf(t){return t=Eg(t),t!==null?Cf(t):null}function Cf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cf(t);if(e!==null)return e;t=t.sibling}return null}var Pf=Le.unstable_scheduleCallback,cc=Le.unstable_cancelCallback,Sg=Le.unstable_shouldYield,kg=Le.unstable_requestPaint,X=Le.unstable_now,Tg=Le.unstable_getCurrentPriorityLevel,Ul=Le.unstable_ImmediatePriority,Rf=Le.unstable_UserBlockingPriority,ko=Le.unstable_NormalPriority,Cg=Le.unstable_LowPriority,Nf=Le.unstable_IdlePriority,ns=null,st=null;function Pg(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(ns,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:xg,Rg=Math.log,Ng=Math.LN2;function xg(t){return t>>>=0,t===0?32:31-(Rg(t)/Ng|0)|0}var $i=64,Wi=4194304;function Ur(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ur(a):(o&=s,o!==0&&(r=Ur(o)))}else s=n&~i,s!==0?r=Ur(s):o!==0&&(r=Ur(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Ag(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Og(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Ag(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ua(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xf(){var t=$i;return $i<<=1,!($i&4194240)&&($i=64),t}function Fs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function Lg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Fl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Af(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Of,zl,Lf,Df,bf,Fa=!1,Hi=[],jt=null,Ut=null,Ft=null,ri=new Map,ii=new Map,At=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(t,e){switch(t){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(e.pointerId)}}function Pr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ni(e),e!==null&&zl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bg(t,e,n,r,i){switch(e){case"focusin":return jt=Pr(jt,t,e,n,r,i),!0;case"dragenter":return Ut=Pr(Ut,t,e,n,r,i),!0;case"mouseover":return Ft=Pr(Ft,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ri.set(o,Pr(ri.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ii.set(o,Pr(ii.get(o)||null,t,e,n,r,i)),!0}return!1}function Mf(t){var e=cn(t.target);if(e!==null){var n=An(e);if(n!==null){if(e=n.tag,e===13){if(e=kf(n),e!==null){t.blockedOn=e,bf(t.priority,function(){Lf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Da=r,n.target.dispatchEvent(r),Da=null}else return e=Ni(n),e!==null&&zl(e),t.blockedOn=n,!1;e.shift()}return!0}function fc(t,e,n){so(t)&&n.delete(e)}function Mg(){Fa=!1,jt!==null&&so(jt)&&(jt=null),Ut!==null&&so(Ut)&&(Ut=null),Ft!==null&&so(Ft)&&(Ft=null),ri.forEach(fc),ii.forEach(fc)}function Rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Fa||(Fa=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Mg)))}function oi(t){function e(i){return Rr(i,t)}if(0<Hi.length){Rr(Hi[0],t);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jt!==null&&Rr(jt,t),Ut!==null&&Rr(Ut,t),Ft!==null&&Rr(Ft,t),ri.forEach(e),ii.forEach(e),n=0;n<At.length;n++)r=At[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Mf(n),n.blockedOn===null&&At.shift()}var Zn=St.ReactCurrentBatchConfig,Co=!0;function jg(t,e,n,r){var i=j,o=Zn.transition;Zn.transition=null;try{j=1,Bl(t,e,n,r)}finally{j=i,Zn.transition=o}}function Ug(t,e,n,r){var i=j,o=Zn.transition;Zn.transition=null;try{j=4,Bl(t,e,n,r)}finally{j=i,Zn.transition=o}}function Bl(t,e,n,r){if(Co){var i=za(t,e,n,r);if(i===null)Ys(t,e,r,Po,n),dc(t,r);else if(bg(i,t,e,n,r))r.stopPropagation();else if(dc(t,r),e&4&&-1<Dg.indexOf(t)){for(;i!==null;){var o=Ni(i);if(o!==null&&Of(o),o=za(t,e,n,r),o===null&&Ys(t,e,r,Po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ys(t,e,r,null,n)}}var Po=null;function za(t,e,n,r){if(Po=null,t=jl(r),t=cn(t),t!==null)if(e=An(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function jf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case Ul:return 1;case Rf:return 4;case ko:case Cg:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var Lt=null,Vl=null,ao=null;function Uf(){if(ao)return ao;var t,e=Vl,n=e.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return ao=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ki(){return!0}function hc(){return!1}function be(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:hc,this.isPropagationStopped=hc,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=be(mr),Ri=K({},mr,{view:0,detail:0}),Fg=be(Ri),zs,Bs,Nr,rs=K({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nr&&(Nr&&t.type==="mousemove"?(zs=t.screenX-Nr.screenX,Bs=t.screenY-Nr.screenY):Bs=zs=0,Nr=t),zs)},movementY:function(t){return"movementY"in t?t.movementY:Bs}}),pc=be(rs),zg=K({},rs,{dataTransfer:0}),Bg=be(zg),Vg=K({},Ri,{relatedTarget:0}),Vs=be(Vg),$g=K({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=be($g),Hg=K({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kg=be(Hg),Gg=K({},mr,{data:0}),mc=be(Gg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qg[t])?!!e[t]:!1}function Wl(){return Jg}var Xg=K({},Ri,{key:function(t){if(t.key){var e=qg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=be(Xg),ev=K({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=be(ev),tv=K({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),nv=be(tv),rv=K({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=be(rv),ov=K({},rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=be(ov),av=[9,13,27,32],Hl=yt&&"CompositionEvent"in window,Wr=null;yt&&"documentMode"in document&&(Wr=document.documentMode);var lv=yt&&"TextEvent"in window&&!Wr,Ff=yt&&(!Hl||Wr&&8<Wr&&11>=Wr),vc=String.fromCharCode(32),yc=!1;function zf(t,e){switch(t){case"keyup":return av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fn=!1;function uv(t,e){switch(t){case"compositionend":return Bf(e);case"keypress":return e.which!==32?null:(yc=!0,vc);case"textInput":return t=e.data,t===vc&&yc?null:t;default:return null}}function cv(t,e){if(Fn)return t==="compositionend"||!Hl&&zf(t,e)?(t=Uf(),ao=Vl=Lt=null,Fn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ff&&e.locale!=="ko"?null:e.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dv[t.type]:e==="textarea"}function Vf(t,e,n,r){wf(r),e=Ro(e,"onChange"),0<e.length&&(n=new $l("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,si=null;function fv(t){Zf(t,0)}function is(t){var e=Vn(t);if(ff(e))return t}function hv(t,e){if(t==="change")return e}var $f=!1;if(yt){var $s;if(yt){var Ws="oninput"in document;if(!Ws){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),Ws=typeof _c.oninput=="function"}$s=Ws}else $s=!1;$f=$s&&(!document.documentMode||9<document.documentMode)}function Ic(){Hr&&(Hr.detachEvent("onpropertychange",Wf),si=Hr=null)}function Wf(t){if(t.propertyName==="value"&&is(si)){var e=[];Vf(e,si,t,jl(t)),Sf(fv,e)}}function pv(t,e,n){t==="focusin"?(Ic(),Hr=e,si=n,Hr.attachEvent("onpropertychange",Wf)):t==="focusout"&&Ic()}function mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return is(si)}function gv(t,e){if(t==="click")return is(e)}function vv(t,e){if(t==="input"||t==="change")return is(e)}function yv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:yv;function ai(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function Ec(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sc(t,e){var n=Ec(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function Hf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kf(){for(var t=window,e=Io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Io(t.document)}return e}function Kl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wv(t){var e=Kf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hf(n.ownerDocument.documentElement,n)){if(r!==null&&Kl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Sc(n,o);var s=Sc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _v=yt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ba=null,Kr=null,Va=!1;function kc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Va||zn==null||zn!==Io(r)||(r=zn,"selectionStart"in r&&Kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&ai(Kr,r)||(Kr=r,r=Ro(Ba,"onSelect"),0<r.length&&(e=new $l("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zn)))}function Gi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bn={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},Hs={},Gf={};yt&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function os(t){if(Hs[t])return Hs[t];if(!Bn[t])return t;var e=Bn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gf)return Hs[t]=e[n];return t}var qf=os("animationend"),Yf=os("animationiteration"),Qf=os("animationstart"),Jf=os("transitionend"),Xf=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(t,e){Xf.set(t,e),xn(e,[t])}for(var Ks=0;Ks<Tc.length;Ks++){var Gs=Tc[Ks],Iv=Gs.toLowerCase(),Ev=Gs[0].toUpperCase()+Gs.slice(1);Xt(Iv,"on"+Ev)}Xt(qf,"onAnimationEnd");Xt(Yf,"onAnimationIteration");Xt(Qf,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Jf,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Cc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ig(r,e,void 0,t),t.currentTarget=null}function Zf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Cc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Cc(i,a,u),o=l}}}if(So)throw t=ja,So=!1,ja=null,t}function B(t,e){var n=e[Ga];n===void 0&&(n=e[Ga]=new Set);var r=t+"__bubble";n.has(r)||(eh(e,t,2,!1),n.add(r))}function qs(t,e,n){var r=0;e&&(r|=4),eh(n,t,r,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function li(t){if(!t[qi]){t[qi]=!0,af.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||qs(n,!1,t),qs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,qs("selectionchange",!1,e))}}function eh(t,e,n,r){switch(jf(e)){case 1:var i=jg;break;case 4:i=Ug;break;default:i=Bl}n=i.bind(null,e,n,t),i=void 0,!Ma||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ys(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=cn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Sf(function(){var u=o,d=jl(n),f=[];e:{var g=Xf.get(t);if(g!==void 0){var v=$l,y=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":v=Zg;break;case"focusin":y="focus",v=Vs;break;case"focusout":y="blur",v=Vs;break;case"beforeblur":case"afterblur":v=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=nv;break;case qf:case Yf:case Qf:v=Wg;break;case Jf:v=iv;break;case"scroll":v=Fg;break;case"wheel":v=sv;break;case"copy":case"cut":case"paste":v=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gc}var _=(e&4)!==0,x=!_&&t==="scroll",h=_?g!==null?g+"Capture":null:g;_=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=ni(c,h),w!=null&&_.push(ui(c,w,p)))),x)break;c=c.return}0<_.length&&(g=new v(g,y,null,n,d),f.push({event:g,listeners:_}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Da&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[wt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?cn(y):null,y!==null&&(x=An(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=pc,w="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=gc,w="onPointerLeave",h="onPointerEnter",c="pointer"),x=v==null?g:Vn(v),p=y==null?g:Vn(y),g=new _(w,c+"leave",v,n,d),g.target=x,g.relatedTarget=p,w=null,cn(d)===u&&(_=new _(h,c+"enter",y,n,d),_.target=p,_.relatedTarget=x,w=_),x=w,v&&y)t:{for(_=v,h=y,c=0,p=_;p;p=bn(p))c++;for(p=0,w=h;w;w=bn(w))p++;for(;0<c-p;)_=bn(_),c--;for(;0<p-c;)h=bn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=bn(_),h=bn(h)}_=null}else _=null;v!==null&&Pc(f,g,v,_,!1),y!==null&&x!==null&&Pc(f,x,y,_,!0)}}e:{if(g=u?Vn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=hv;else if(wc(g))if($f)S=vv;else{S=mv;var P=pv}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=gv);if(S&&(S=S(t,u))){Vf(f,S,n,d);break e}P&&P(t,g,u),t==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Na(g,"number",g.value)}switch(P=u?Vn(u):window,t){case"focusin":(wc(P)||P.contentEditable==="true")&&(zn=P,Ba=u,Kr=null);break;case"focusout":Kr=Ba=zn=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,kc(f,n,d);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":kc(f,n,d)}var R;if(Hl)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Fn?zf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ff&&n.locale!=="ko"&&(Fn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Fn&&(R=Uf()):(Lt=d,Vl="value"in Lt?Lt.value:Lt.textContent,Fn=!0)),P=Ro(u,N),0<P.length&&(N=new mc(N,t,null,n,d),f.push({event:N,listeners:P}),R?N.data=R:(R=Bf(n),R!==null&&(N.data=R)))),(R=lv?uv(t,n):cv(t,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(d=new mc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}Zf(f,e)})}function ui(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ni(t,n),o!=null&&r.unshift(ui(t,o,i)),o=ni(t,e),o!=null&&r.push(ui(t,o,i))),t=t.return}return r}function bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ni(n,o),l!=null&&s.unshift(ui(n,l,a))):i||(l=ni(n,o),l!=null&&s.push(ui(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var kv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Rc(t){return(typeof t=="string"?t:""+t).replace(kv,`
`).replace(Tv,"")}function Yi(t,e,n){if(e=Rc(e),Rc(t)!==e&&n)throw Error(I(425))}function No(){}var $a=null,Wa=null;function Ha(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(t){return Nc.resolve(null).then(t).catch(Rv)}:Ka;function Rv(t){setTimeout(function(){throw t})}function Qs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(e)}function zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gr=Math.random().toString(36).slice(2),et="__reactFiber$"+gr,ci="__reactProps$"+gr,wt="__reactContainer$"+gr,Ga="__reactEvents$"+gr,Nv="__reactListeners$"+gr,xv="__reactHandles$"+gr;function cn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wt]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xc(t);t!==null;){if(n=t[et])return n;t=xc(t)}return e}t=n,n=t.parentNode}return null}function Ni(t){return t=t[et]||t[wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function ss(t){return t[ci]||null}var qa=[],$n=-1;function Zt(t){return{current:t}}function V(t){0>$n||(t.current=qa[$n],qa[$n]=null,$n--)}function F(t,e){$n++,qa[$n]=t.current,t.current=e}var qt={},ge=Zt(qt),ke=Zt(!1),_n=qt;function sr(t,e){var n=t.type.contextTypes;if(!n)return qt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function xo(){V(ke),V(ge)}function Ac(t,e,n){if(ge.current!==qt)throw Error(I(168));F(ge,e),F(ke,n)}function th(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,pg(t)||"Unknown",i));return K({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qt,_n=ge.current,F(ge,t),F(ke,ke.current),!0}function Oc(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=th(t,e,_n),r.__reactInternalMemoizedMergedChildContext=t,V(ke),V(ge),F(ge,t)):V(ke),F(ke,n)}var ct=null,as=!1,Js=!1;function nh(t){ct===null?ct=[t]:ct.push(t)}function Av(t){as=!0,nh(t)}function en(){if(!Js&&ct!==null){Js=!0;var t=0,e=j;try{var n=ct;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,as=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),Pf(Ul,en),i}finally{j=e,Js=!1}}return null}var Wn=[],Hn=0,Oo=null,Lo=0,Me=[],je=0,In=null,dt=1,ft="";function sn(t,e){Wn[Hn++]=Lo,Wn[Hn++]=Oo,Oo=t,Lo=e}function rh(t,e,n){Me[je++]=dt,Me[je++]=ft,Me[je++]=In,In=t;var r=dt;t=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(e)+i|n<<i|r,ft=o+t}else dt=1<<o|n<<i|r,ft=t}function Gl(t){t.return!==null&&(sn(t,1),rh(t,1,0))}function ql(t){for(;t===Oo;)Oo=Wn[--Hn],Wn[Hn]=null,Lo=Wn[--Hn],Wn[Hn]=null;for(;t===In;)In=Me[--je],Me[je]=null,ft=Me[--je],Me[je]=null,dt=Me[--je],Me[je]=null}var Oe=null,xe=null,$=!1,Ge=null;function ih(t,e){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,xe=zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=In!==null?{id:dt,overflow:ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,xe=null,!0):!1;default:return!1}}function Ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qa(t){if($){var e=xe;if(e){var n=e;if(!Lc(t,e)){if(Ya(t))throw Error(I(418));e=zt(n.nextSibling);var r=Oe;e&&Lc(t,e)?ih(r,n):(t.flags=t.flags&-4097|2,$=!1,Oe=t)}}else{if(Ya(t))throw Error(I(418));t.flags=t.flags&-4097|2,$=!1,Oe=t}}}function Dc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function Qi(t){if(t!==Oe)return!1;if(!$)return Dc(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ha(t.type,t.memoizedProps)),e&&(e=xe)){if(Ya(t))throw oh(),Error(I(418));for(;e;)ih(t,e),e=zt(e.nextSibling)}if(Dc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Oe?zt(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=xe;t;)t=zt(t.nextSibling)}function ar(){xe=Oe=null,$=!1}function Yl(t){Ge===null?Ge=[t]:Ge.push(t)}var Ov=St.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Do=Zt(null),bo=null,Kn=null,Ql=null;function Jl(){Ql=Kn=bo=null}function Xl(t){var e=Do.current;V(Do),t._currentValue=e}function Ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function er(t,e){bo=t,Ql=Kn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(Ql!==t)if(t={context:t,memoizedValue:e,next:null},Kn===null){if(bo===null)throw Error(I(308));Kn=t,bo.dependencies={lanes:0,firstContext:t}}else Kn=Kn.next=t;return e}var dn=null;function Zl(t){dn===null?dn=[t]:dn.push(t)}function sh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zl(e)):(n.next=i.next,i.next=n),e.interleaved=n,_t(t,r)}function _t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xt=!1;function eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_t(t,n)}return i=r.interleaved,i===null?(e.next=e,Zl(r)):(e.next=i.next,i.next=e),r.interleaved=e,_t(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fl(t,n)}}function bc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mo(t,e,n,r){var i=t.updateQueue;xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(g=e,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=K({},f,g);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Sn|=s,t.lanes=s,t.memoizedState=f}}function Mc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var lh=new sf.Component().refs;function Xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ls={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),o=mt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),o=mt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=$t(t),i=mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(Ye(e,t,r,n),uo(e,t,r))}};function jc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ai(n,r)||!ai(i,o):!0}function uh(t,e,n){var r=!1,i=qt,o=e.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=Te(e)?_n:ge.current,r=e.contextTypes,o=(r=r!=null)?sr(t,i):qt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ls,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Uc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ls.enqueueReplaceState(e,e.state,null)}function Za(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lh,eu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=Te(e)?_n:ge.current,i.context=sr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Xa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ls.enqueueReplaceState(i,i.state,null),Mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===lh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ji(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fc(t){var e=t._init;return e(t._payload)}function ch(t){function e(h,c){if(t){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Wt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,w){return c===null||c.tag!==6?(c=ia(p,h.mode,w),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,w){var S=p.type;return S===Un?d(h,c,p.props.children,w,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Fc(S)===c.type)?(w=i(c,p.props),w.ref=xr(h,c,p),w.return=h,w):(w=go(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,w)}function u(h,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=oa(p,h.mode,w),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,w,S){return c===null||c.tag!==7?(c=mn(p,h.mode,w,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ia(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zi:return p=go(c.type,c.key,c.props,null,h.mode,p),p.ref=xr(h,null,c),p.return=h,p;case jn:return c=oa(c,h.mode,p),c.return=h,c;case Nt:var w=c._init;return f(h,w(c._payload),p)}if(jr(c)||Tr(c))return c=mn(c,h.mode,p,null),c.return=h,c;Ji(h,c)}return null}function g(h,c,p,w){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:return p.key===S?l(h,c,p,w):null;case jn:return p.key===S?u(h,c,p,w):null;case Nt:return S=p._init,g(h,c,S(p._payload),w)}if(jr(p)||Tr(p))return S!==null?null:d(h,c,p,w,null);Ji(h,p)}return null}function v(h,c,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,a(c,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zi:return h=h.get(w.key===null?p:w.key)||null,l(c,h,w,S);case jn:return h=h.get(w.key===null?p:w.key)||null,u(c,h,w,S);case Nt:var P=w._init;return v(h,c,p,P(w._payload),S)}if(jr(w)||Tr(w))return h=h.get(p)||null,d(c,h,w,S,null);Ji(c,w)}return null}function y(h,c,p,w){for(var S=null,P=null,R=c,N=c=0,z=null;R!==null&&N<p.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=g(h,R,p[N],w);if(L===null){R===null&&(R=z);break}t&&R&&L.alternate===null&&e(h,R),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L,R=z}if(N===p.length)return n(h,R),$&&sn(h,N),S;if(R===null){for(;N<p.length;N++)R=f(h,p[N],w),R!==null&&(c=o(R,c,N),P===null?S=R:P.sibling=R,P=R);return $&&sn(h,N),S}for(R=r(h,R);N<p.length;N++)z=v(R,h,N,p[N],w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=o(z,c,N),P===null?S=z:P.sibling=z,P=z);return t&&R.forEach(function($e){return e(h,$e)}),$&&sn(h,N),S}function _(h,c,p,w){var S=Tr(p);if(typeof S!="function")throw Error(I(150));if(p=S.call(p),p==null)throw Error(I(151));for(var P=S=null,R=c,N=c=0,z=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(z=R,R=null):z=R.sibling;var $e=g(h,R,L.value,w);if($e===null){R===null&&(R=z);break}t&&R&&$e.alternate===null&&e(h,R),c=o($e,c,N),P===null?S=$e:P.sibling=$e,P=$e,R=z}if(L.done)return n(h,R),$&&sn(h,N),S;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,w),L!==null&&(c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return $&&sn(h,N),S}for(R=r(h,R);!L.done;N++,L=p.next())L=v(R,h,N,L.value,w),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return t&&R.forEach(function(Sr){return e(h,Sr)}),$&&sn(h,N),S}function x(h,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===Un){if(P.tag===7){n(h,P.sibling),c=i(P,p.props.children),c.return=h,h=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Fc(S)===P.type){n(h,P.sibling),c=i(P,p.props),c.ref=xr(h,P,p),c.return=h,h=c;break e}n(h,P);break}else e(h,P);P=P.sibling}p.type===Un?(c=mn(p.props.children,h.mode,w,p.key),c.return=h,h=c):(w=go(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,h=w)}return s(h);case jn:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else e(h,c);c=c.sibling}c=oa(p,h.mode,w),c.return=h,h=c}return s(h);case Nt:return P=p._init,x(h,c,P(p._payload),w)}if(jr(p))return y(h,c,p,w);if(Tr(p))return _(h,c,p,w);Ji(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=ia(p,h.mode,w),c.return=h,h=c),s(h)):n(h,c)}return x}var lr=ch(!0),dh=ch(!1),xi={},at=Zt(xi),di=Zt(xi),fi=Zt(xi);function fn(t){if(t===xi)throw Error(I(174));return t}function tu(t,e){switch(F(fi,e),F(di,t),F(at,xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Aa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Aa(e,t)}V(at),F(at,e)}function ur(){V(at),V(di),V(fi)}function fh(t){fn(fi.current);var e=fn(at.current),n=Aa(e,t.type);e!==n&&(F(di,t),F(at,n))}function nu(t){di.current===t&&(V(at),V(di))}var W=Zt(0);function jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xs=[];function ru(){for(var t=0;t<Xs.length;t++)Xs[t]._workInProgressVersionPrimary=null;Xs.length=0}var co=St.ReactCurrentDispatcher,Zs=St.ReactCurrentBatchConfig,En=0,H=null,re=null,se=null,Uo=!1,Gr=!1,hi=0,Lv=0;function he(){throw Error(I(321))}function iu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function ou(t,e,n,r,i,o){if(En=o,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?jv:Uv,t=n(r,i),Gr){o=0;do{if(Gr=!1,hi=0,25<=o)throw Error(I(301));o+=1,se=re=null,e.updateQueue=null,co.current=Fv,t=n(r,i)}while(Gr)}if(co.current=Fo,e=re!==null&&re.next!==null,En=0,se=re=H=null,Uo=!1,e)throw Error(I(300));return t}function su(){var t=hi!==0;return hi=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=t:se=se.next=t,se}function Be(){if(re===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=se===null?H.memoizedState:se.next;if(e!==null)se=e,re=t;else{if(t===null)throw Error(I(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?H.memoizedState=se=t:se=se.next=t}return se}function pi(t,e){return typeof e=="function"?e(t):e}function ea(t){var e=Be(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((En&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,H.lanes|=d,Sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qe(r,e.memoizedState)||(Se=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,H.lanes|=o,Sn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ta(t){var e=Be(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qe(o,e.memoizedState)||(Se=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function hh(){}function ph(t,e){var n=H,r=Be(),i=e(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,au(vh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,mi(9,gh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(I(349));En&30||mh(n,e,i)}return i}function mh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gh(t,e,n,r){e.value=n,e.getSnapshot=r,yh(e)&&wh(t)}function vh(t,e,n){return n(function(){yh(e)&&wh(t)})}function yh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function wh(t){var e=_t(t,1);e!==null&&Ye(e,t,1,-1)}function zc(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:t},e.queue=t,t=t.dispatch=Mv.bind(null,H,t),[e.memoizedState,t]}function mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _h(){return Be().memoizedState}function fo(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=mi(1|e,n,void 0,r===void 0?null:r)}function us(t,e,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&iu(r,s.deps)){i.memoizedState=mi(e,n,o,r);return}}H.flags|=t,i.memoizedState=mi(1|e,n,o,r)}function Bc(t,e){return fo(8390656,8,t,e)}function au(t,e){return us(2048,8,t,e)}function Ih(t,e){return us(4,2,t,e)}function Eh(t,e){return us(4,4,t,e)}function Sh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kh(t,e,n){return n=n!=null?n.concat([t]):null,us(4,4,Sh.bind(null,e,t),n)}function lu(){}function Th(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&iu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ch(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&iu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ph(t,e,n){return En&21?(Qe(n,e)||(n=xf(),H.lanes|=n,Sn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function Dv(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=Zs.transition;Zs.transition={};try{t(!1),e()}finally{j=n,Zs.transition=r}}function Rh(){return Be().memoizedState}function bv(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nh(t))xh(e,n);else if(n=sh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),Ah(n,e,r)}}function Mv(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nh(t))xh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,s)){var l=e.interleaved;l===null?(i.next=i,Zl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=sh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),Ah(n,e,r))}}function Nh(t){var e=t.alternate;return t===H||e!==null&&e===H}function xh(t,e){Gr=Uo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ah(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fl(t,n)}}var Fo={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},jv={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:Bc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,Sh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bv.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:zc,useDebugValue:lu,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=zc(!1),e=t[0];return t=Dv.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if($){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ae===null)throw Error(I(349));En&30||mh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Bc(vh.bind(null,r,o,t),[t]),r.flags|=2048,mi(9,gh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if($){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=hi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Uv={readContext:ze,useCallback:Th,useContext:ze,useEffect:au,useImperativeHandle:kh,useInsertionEffect:Ih,useLayoutEffect:Eh,useMemo:Ch,useReducer:ea,useRef:_h,useState:function(){return ea(pi)},useDebugValue:lu,useDeferredValue:function(t){var e=Be();return Ph(e,re.memoizedState,t)},useTransition:function(){var t=ea(pi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:hh,useSyncExternalStore:ph,useId:Rh,unstable_isNewReconciler:!1},Fv={readContext:ze,useCallback:Th,useContext:ze,useEffect:au,useImperativeHandle:kh,useInsertionEffect:Ih,useLayoutEffect:Eh,useMemo:Ch,useReducer:ta,useRef:_h,useState:function(){return ta(pi)},useDebugValue:lu,useDeferredValue:function(t){var e=Be();return re===null?e.memoizedState=t:Ph(e,re.memoizedState,t)},useTransition:function(){var t=ta(pi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:hh,useSyncExternalStore:ph,useId:Rh,unstable_isNewReconciler:!1};function cr(t,e){try{var n="",r=e;do n+=hg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function na(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function el(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Oh(t,e,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,cl=r),el(t,e)},n}function Lh(t,e,n){n=mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){el(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){el(t,e),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Vc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ey.bind(null,t,e,n),e.then(t,t))}function $c(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var Bv=St.ReactCurrentOwner,Se=!1;function ve(t,e,n,r){e.child=t===null?dh(e,null,n,r):lr(e,t.child,n,r)}function Hc(t,e,n,r,i){n=n.render;var o=e.ref;return er(e,i),r=ou(t,e,n,r,o,i),n=su(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):($&&n&&Gl(e),e.flags|=1,ve(t,e,r,i),e.child)}function Kc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!gu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Dh(t,e,o,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(s,r)&&t.ref===e.ref)return It(t,e,i)}return e.flags|=1,t=Wt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Dh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ai(o,r)&&t.ref===e.ref)if(Se=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,It(t,e,i)}return tl(t,e,n,r,i)}function bh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(qn,Re),Re|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(qn,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(qn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,F(qn,Re),Re|=r;return ve(t,e,i,n),e.child}function Mh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tl(t,e,n,r,i){var o=Te(n)?_n:ge.current;return o=sr(e,o),er(e,i),n=ou(t,e,n,r,o,i),r=su(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):($&&r&&Gl(e),e.flags|=1,ve(t,e,n,i),e.child)}function Gc(t,e,n,r,i){if(Te(n)){var o=!0;Ao(e)}else o=!1;if(er(e,i),e.stateNode===null)ho(t,e),uh(e,n,r),Za(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?_n:ge.current,u=sr(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Uc(e,s,r,u),xt=!1;var g=e.memoizedState;s.state=g,Mo(e,r,s,i),l=e.memoizedState,a!==r||g!==l||ke.current||xt?(typeof d=="function"&&(Xa(e,n,d,r),l=e.memoizedState),(a=xt||jc(e,n,a,r,g,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ah(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),s.props=u,f=e.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?_n:ge.current,l=sr(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||g!==l)&&Uc(e,s,r,l),xt=!1,g=e.memoizedState,s.state=g,Mo(e,r,s,i);var y=e.memoizedState;a!==f||g!==y||ke.current||xt?(typeof v=="function"&&(Xa(e,n,v,r),y=e.memoizedState),(u=xt||jc(e,n,u,r,g,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nl(t,e,n,r,o,i)}function nl(t,e,n,r,i,o){Mh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Oc(e,n,!1),It(t,e,o);r=e.stateNode,Bv.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=lr(e,t.child,null,o),e.child=lr(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&Oc(e,n,!0),e.child}function jh(t){var e=t.stateNode;e.pendingContext?Ac(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ac(t,e.context,!1),tu(t,e.containerInfo)}function qc(t,e,n,r,i){return ar(),Yl(i),e.flags|=256,ve(t,e,n,r),e.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function il(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uh(t,e,n){var r=e.pendingProps,i=W.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F(W,i&1),t===null)return Qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fs(s,r,0,null),t=mn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=il(n),e.memoizedState=rl,t):uu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vv(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=mn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=rl,r}return o=t.child,t=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uu(t,e){return e=fs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,n,r){return r!==null&&Yl(r),lr(e,t.child,null,n),t=uu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vv(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=na(Error(I(422))),Xi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=fs({mode:"visible",children:r.children},i,0,null),o=mn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&lr(e,t.child,null,s),e.child.memoizedState=il(s),e.memoizedState=rl,o);if(!(e.mode&1))return Xi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=na(o,r,void 0),Xi(t,e,s,r)}if(a=(s&t.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(t,i),Ye(r,t,i,-1))}return mu(),r=na(Error(I(421))),Xi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ty.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,xe=zt(i.nextSibling),Oe=e,$=!0,Ge=null,t!==null&&(Me[je++]=dt,Me[je++]=ft,Me[je++]=In,dt=t.id,ft=t.overflow,In=e),e=uu(e,r.children),e.flags|=4096,e)}function Yc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ja(t.return,e,n)}function ra(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yc(t,n,e);else if(t.tag===19)Yc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(W,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ra(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ra(e,!0,n,null,o);break;case"together":ra(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function It(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $v(t,e,n){switch(e.tag){case 3:jh(e),ar();break;case 5:fh(e);break;case 1:Te(e.type)&&Ao(e);break;case 4:tu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),e.flags|=128,null):n&e.child.childLanes?Uh(t,e,n):(F(W,W.current&1),t=It(t,e,n),t!==null?t.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,bh(t,e,n)}return It(t,e,n)}var zh,ol,Bh,Vh;zh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ol=function(){};Bh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fn(at.current);var o=null;switch(n){case"input":i=Pa(t,i),r=Pa(t,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=xa(t,i),r=xa(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=No)}Oa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Vh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ar(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Wv(t,e,n){var r=e.pendingProps;switch(ql(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&xo(),pe(e),null;case 3:return r=e.stateNode,ur(),V(ke),V(ge),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(hl(Ge),Ge=null))),ol(t,e),pe(e),null;case 5:nu(e);var i=fn(fi.current);if(n=e.type,t!==null&&e.stateNode!=null)Bh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return pe(e),null}if(t=fn(at.current),Qi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[ci]=o,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ic(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":sc(r,o),B("invalid",r)}Oa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",""+a]):ei.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":Bi(r),oc(r,o,!0);break;case"textarea":Bi(r),ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[ci]=r,zh(t,e,!1,!1),e.stateNode=t;e:{switch(s=La(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":ic(t,r),i=Pa(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",t);break;case"textarea":sc(t,r),i=xa(t,r),B("invalid",t);break;default:i=r}Oa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ti(t,l):typeof l=="number"&&ti(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",t):l!=null&&Ll(t,o,l,s))}switch(n){case"input":Bi(t),oc(t,r,!1);break;case"textarea":Bi(t),ac(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Qn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)Vh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=fn(fi.current),fn(at.current),Qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if(V(W),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&xe!==null&&e.mode&1&&!(e.flags&128))oh(),ar(),e.flags|=98560,o=!1;else if(o=Qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[et]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),o=!1}else Ge!==null&&(hl(Ge),Ge=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||W.current&1?ie===0&&(ie=3):mu())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return ur(),ol(t,e),t===null&&li(e.stateNode.containerInfo),pe(e),null;case 10:return Xl(e.type._context),pe(e),null;case 17:return Te(e.type)&&xo(),pe(e),null;case 19:if(V(W),o=e.memoizedState,o===null)return pe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ar(o,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jo(t),s!==null){for(e.flags|=128,Ar(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F(W,W.current&1|2),e.child}t=t.sibling}o.tail!==null&&X()>dr&&(e.flags|=128,r=!0,Ar(o,!1),e.lanes=4194304)}else{if(!r)if(t=jo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return pe(e),null}else 2*X()-o.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Ar(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=X(),e.sibling=null,n=W.current,F(W,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return pu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Re&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Hv(t,e){switch(ql(e),e.tag){case 1:return Te(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),V(ke),V(ge),ru(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nu(e),null;case 13:if(V(W),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(W),null;case 4:return ur(),null;case 10:return Xl(e.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Zi=!1,me=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function sl(t,e,n){try{n()}catch(r){G(t,e,r)}}var Qc=!1;function Gv(t,e){if($a=Co,t=Kf(),Kl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===t)break t;if(g===n&&++u===i&&(a=s),g===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:t,selectionRange:n},Co=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:He(e.type,_),x);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){G(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=Qc,Qc=!1,y}function qr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&sl(e,n,o)}i=i.next}while(i!==r)}}function cs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function al(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $h(t){var e=t.alternate;e!==null&&(t.alternate=null,$h(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[ci],delete e[Ga],delete e[Nv],delete e[xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wh(t){return t.tag===5||t.tag===3||t.tag===4}function Jc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ll(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=No));else if(r!==4&&(t=t.child,t!==null))for(ll(t,e,n),t=t.sibling;t!==null;)ll(t,e,n),t=t.sibling}function ul(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ul(t,e,n),t=t.sibling;t!==null;)ul(t,e,n),t=t.sibling}var le=null,Ke=!1;function Pt(t,e,n){for(n=n.child;n!==null;)Hh(t,e,n),n=n.sibling}function Hh(t,e,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(ns,n)}catch{}switch(n.tag){case 5:me||Gn(n,e);case 6:var r=le,i=Ke;le=null,Pt(t,e,n),le=r,Ke=i,le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?Qs(t.parentNode,n):t.nodeType===1&&Qs(t,n),oi(t)):Qs(le,n.stateNode));break;case 4:r=le,i=Ke,le=n.stateNode.containerInfo,Ke=!0,Pt(t,e,n),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&sl(n,e,s),i=i.next}while(i!==r)}Pt(t,e,n);break;case 1:if(!me&&(Gn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}Pt(t,e,n);break;case 21:Pt(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Pt(t,e,n),me=r):Pt(t,e,n);break;default:Pt(t,e,n)}}function Xc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kv),e.forEach(function(r){var i=ny.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ke=!1;break e;case 3:le=a.stateNode.containerInfo,Ke=!0;break e;case 4:le=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(le===null)throw Error(I(160));Hh(o,s,i),le=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kh(e,t),e=e.sibling}function Kh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(We(e,t),Xe(t),r&4){try{qr(3,t,t.return),cs(3,t)}catch(_){G(t,t.return,_)}try{qr(5,t,t.return)}catch(_){G(t,t.return,_)}}break;case 1:We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return),t.flags&32){var i=t.stateNode;try{ti(i,"")}catch(_){G(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),La(a,s);var u=La(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?yf(i,f):d==="dangerouslySetInnerHTML"?gf(i,f):d==="children"?ti(i,f):Ll(i,d,f,u)}switch(a){case"input":Ra(i,o);break;case"textarea":pf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Qn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Qn(i,!!o.multiple,o.defaultValue,!0):Qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ci]=o}catch(_){G(t,t.return,_)}}break;case 6:if(We(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){G(t,t.return,_)}}break;case 3:if(We(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(e.containerInfo)}catch(_){G(t,t.return,_)}break;case 4:We(e,t),Xe(t);break;case 13:We(e,t),Xe(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fu=X())),r&4&&Xc(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,We(e,t),me=u):We(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(f=T=d;T!==null;){switch(g=T,v=g.child,g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:Gn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Gn(g,g.return);break;case 22:if(g.memoizedState!==null){ed(f);continue}}v!==null?(v.return=g,T=v):ed(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vf("display",s))}catch(_){G(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){G(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(e,t),Xe(t),r&4&&Xc(t);break;case 21:break;default:We(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ti(i,""),r.flags&=-33);var o=Jc(t);ul(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jc(t);ll(t,a,s);break;default:throw Error(I(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qv(t,e,n){T=t,Gh(t)}function Gh(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Zi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=Zi;var u=me;if(Zi=s,(me=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?td(i):l!==null?(l.return=s,T=l):td(i);for(;o!==null;)T=o,Gh(o),o=o.sibling;T=i,Zi=a,me=u}Zc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Zc(t)}}function Zc(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||cs(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Mc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&oi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}me||e.flags&512&&al(e)}catch(g){G(e,e.return,g)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function ed(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function td(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cs(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var o=e.return;try{al(e)}catch(l){G(e,o,l)}break;case 5:var s=e.return;try{al(e)}catch(l){G(e,s,l)}}}catch(l){G(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var Yv=Math.ceil,zo=St.ReactCurrentDispatcher,cu=St.ReactCurrentOwner,Fe=St.ReactCurrentBatchConfig,b=0,ae=null,ee=null,ue=0,Re=0,qn=Zt(0),ie=0,gi=null,Sn=0,ds=0,du=0,Yr=null,Ee=null,fu=0,dr=1/0,ut=null,Bo=!1,cl=null,Vt=null,eo=!1,Dt=null,Vo=0,Qr=0,dl=null,po=-1,mo=0;function ye(){return b&6?X():po!==-1?po:po=X()}function $t(t){return t.mode&1?b&2&&ue!==0?ue&-ue:Ov.transition!==null?(mo===0&&(mo=xf()),mo):(t=j,t!==0||(t=window.event,t=t===void 0?16:jf(t.type)),t):1}function Ye(t,e,n,r){if(50<Qr)throw Qr=0,dl=null,Error(I(185));Pi(t,n,r),(!(b&2)||t!==ae)&&(t===ae&&(!(b&2)&&(ds|=n),ie===4&&Ot(t,ue)),Ce(t,r),n===1&&b===0&&!(e.mode&1)&&(dr=X()+500,as&&en()))}function Ce(t,e){var n=t.callbackNode;Og(t,e);var r=To(t,t===ae?ue:0);if(r===0)n!==null&&cc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cc(n),e===1)t.tag===0?Av(nd.bind(null,t)):nh(nd.bind(null,t)),Pv(function(){!(b&6)&&en()}),n=null;else{switch(Af(r)){case 1:n=Ul;break;case 4:n=Rf;break;case 16:n=ko;break;case 536870912:n=Nf;break;default:n=ko}n=tp(n,qh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qh(t,e){if(po=-1,mo=0,b&6)throw Error(I(327));var n=t.callbackNode;if(tr()&&t.callbackNode!==n)return null;var r=To(t,t===ae?ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$o(t,r);else{e=r;var i=b;b|=2;var o=Qh();(ae!==t||ue!==e)&&(ut=null,dr=X()+500,pn(t,e));do try{Xv();break}catch(a){Yh(t,a)}while(1);Jl(),zo.current=o,b=i,ee!==null?e=0:(ae=null,ue=0,e=ie)}if(e!==0){if(e===2&&(i=Ua(t),i!==0&&(r=i,e=fl(t,i))),e===1)throw n=gi,pn(t,0),Ot(t,r),Ce(t,X()),n;if(e===6)Ot(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qv(i)&&(e=$o(t,r),e===2&&(o=Ua(t),o!==0&&(r=o,e=fl(t,o))),e===1))throw n=gi,pn(t,0),Ot(t,r),Ce(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:an(t,Ee,ut);break;case 3:if(Ot(t,r),(r&130023424)===r&&(e=fu+500-X(),10<e)){if(To(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ka(an.bind(null,t,Ee,ut),e);break}an(t,Ee,ut);break;case 4:if(Ot(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yv(r/1960))-r,10<r){t.timeoutHandle=Ka(an.bind(null,t,Ee,ut),r);break}an(t,Ee,ut);break;case 5:an(t,Ee,ut);break;default:throw Error(I(329))}}}return Ce(t,X()),t.callbackNode===n?qh.bind(null,t):null}function fl(t,e){var n=Yr;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=$o(t,e),t!==2&&(e=Ee,Ee=n,e!==null&&hl(e)),t}function hl(t){Ee===null?Ee=t:Ee.push.apply(Ee,t)}function Qv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(t,e){for(e&=~du,e&=~ds,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function nd(t){if(b&6)throw Error(I(327));tr();var e=To(t,0);if(!(e&1))return Ce(t,X()),null;var n=$o(t,e);if(t.tag!==0&&n===2){var r=Ua(t);r!==0&&(e=r,n=fl(t,r))}if(n===1)throw n=gi,pn(t,0),Ot(t,e),Ce(t,X()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,Ee,ut),Ce(t,X()),null}function hu(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(dr=X()+500,as&&en())}}function kn(t){Dt!==null&&Dt.tag===0&&!(b&6)&&tr();var e=b;b|=1;var n=Fe.transition,r=j;try{if(Fe.transition=null,j=1,t)return t()}finally{j=r,Fe.transition=n,b=e,!(b&6)&&en()}}function pu(){Re=qn.current,V(qn)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cv(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:ur(),V(ke),V(ge),ru();break;case 5:nu(r);break;case 4:ur();break;case 13:V(W);break;case 19:V(W);break;case 10:Xl(r.type._context);break;case 22:case 23:pu()}n=n.return}if(ae=t,ee=t=Wt(t.current,null),ue=Re=e,ie=0,gi=null,du=ds=Sn=0,Ee=Yr=null,dn!==null){for(e=0;e<dn.length;e++)if(n=dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}dn=null}return t}function Yh(t,e){do{var n=ee;try{if(Jl(),co.current=Fo,Uo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(En=0,se=re=H=null,Gr=!1,hi=0,cu.current=null,n===null||n.return===null){ie=1,gi=e,ee=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=$c(s);if(v!==null){v.flags&=-257,Wc(v,s,a,o,e),v.mode&1&&Vc(o,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Vc(o,u,e),mu();break e}l=Error(I(426))}}else if($&&a.mode&1){var x=$c(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Wc(x,s,a,o,e),Yl(cr(l,a));break e}}o=l=cr(l,a),ie!==4&&(ie=2),Yr===null?Yr=[o]:Yr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Oh(o,l,e);bc(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Lh(o,a,e);bc(o,w);break e}}o=o.return}while(o!==null)}Xh(n)}catch(S){e=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Qh(){var t=zo.current;return zo.current=Fo,t===null?Fo:t}function mu(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Sn&268435455)&&!(ds&268435455)||Ot(ae,ue)}function $o(t,e){var n=b;b|=2;var r=Qh();(ae!==t||ue!==e)&&(ut=null,pn(t,e));do try{Jv();break}catch(i){Yh(t,i)}while(1);if(Jl(),b=n,zo.current=r,ee!==null)throw Error(I(261));return ae=null,ue=0,ie}function Jv(){for(;ee!==null;)Jh(ee)}function Xv(){for(;ee!==null&&!Sg();)Jh(ee)}function Jh(t){var e=ep(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?Xh(t):ee=e,cu.current=null}function Xh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hv(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=Wv(n,e,Re),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function an(t,e,n){var r=j,i=Fe.transition;try{Fe.transition=null,j=1,Zv(t,e,n,r)}finally{Fe.transition=i,j=r}return null}function Zv(t,e,n,r){do tr();while(Dt!==null);if(b&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lg(t,o),t===ae&&(ee=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,tp(ko,function(){return tr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var s=j;j=1;var a=b;b|=4,cu.current=null,Gv(t,n),Kh(n,t),wv(Wa),Co=!!$a,Wa=$a=null,t.current=n,qv(n),kg(),b=a,j=s,Fe.transition=o}else t.current=n;if(eo&&(eo=!1,Dt=t,Vo=i),o=t.pendingLanes,o===0&&(Vt=null),Pg(n.stateNode),Ce(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bo)throw Bo=!1,t=cl,cl=null,t;return Vo&1&&t.tag!==0&&tr(),o=t.pendingLanes,o&1?t===dl?Qr++:(Qr=0,dl=t):Qr=0,en(),null}function tr(){if(Dt!==null){var t=Af(Vo),e=Fe.transition,n=j;try{if(Fe.transition=null,j=16>t?16:t,Dt===null)var r=!1;else{if(t=Dt,Dt=null,Vo=0,b&6)throw Error(I(331));var i=b;for(b|=4,T=t.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:qr(8,d,o)}var f=d.child;if(f!==null)f.return=d,T=f;else for(;T!==null;){d=T;var g=d.sibling,v=d.return;if($h(d),d===u){T=null;break}if(g!==null){g.return=v,T=g;break}T=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var c=t.current;for(T=c;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cs(9,a)}}catch(S){G(a,a.return,S)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(b=i,en(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(ns,t)}catch{}r=!0}return r}finally{j=n,Fe.transition=e}}return!1}function rd(t,e,n){e=cr(n,e),e=Oh(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(Pi(t,1,e),Ce(t,e))}function G(t,e,n){if(t.tag===3)rd(t,t,n);else for(;e!==null;){if(e.tag===3){rd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){t=cr(n,t),t=Lh(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(Pi(e,1,t),Ce(e,t));break}}e=e.return}}function ey(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>X()-fu?pn(t,0):du|=n),Ce(t,e)}function Zh(t,e){e===0&&(t.mode&1?(e=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):e=1);var n=ye();t=_t(t,e),t!==null&&(Pi(t,e,n),Ce(t,n))}function ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zh(t,n)}function ny(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Zh(t,n)}var ep;ep=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Se=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Se=!1,$v(t,e,n);Se=!!(t.flags&131072)}else Se=!1,$&&e.flags&1048576&&rh(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=sr(e,ge.current);er(e,n),i=ou(null,e,r,t,i,n);var o=su();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(o=!0,Ao(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(e),i.updater=ls,e.stateNode=i,i._reactInternals=e,Za(e,r,t,n),e=nl(null,e,r,!0,o,n)):(e.tag=0,$&&o&&Gl(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iy(r),t=He(r,t),i){case 0:e=tl(null,e,r,t,n);break e;case 1:e=Gc(null,e,r,t,n);break e;case 11:e=Hc(null,e,r,t,n);break e;case 14:e=Kc(null,e,r,He(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),tl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Gc(t,e,r,i,n);case 3:e:{if(jh(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ah(t,e),Mo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=cr(Error(I(423)),e),e=qc(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(I(424)),e),e=qc(t,e,r,n,i);break e}else for(xe=zt(e.stateNode.containerInfo.firstChild),Oe=e,$=!0,Ge=null,n=dh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=It(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return fh(e),t===null&&Qa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ha(r,i)?s=null:o!==null&&Ha(r,o)&&(e.flags|=32),Mh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&Qa(e),null;case 13:return Uh(t,e,n);case 4:return tu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lr(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Hc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,F(Do,r._currentValue),r._currentValue=s,o!==null)if(Qe(o.value,s)){if(o.children===i.children&&!ke.current){e=It(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ja(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ja(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,er(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),Kc(t,e,r,i,n);case 15:return Dh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),ho(t,e),e.tag=1,Te(r)?(t=!0,Ao(e)):t=!1,er(e,n),uh(e,r,i),Za(e,r,i,n),nl(null,e,r,!0,t,n);case 19:return Fh(t,e,n);case 22:return bh(t,e,n)}throw Error(I(156,e.tag))};function tp(t,e){return Pf(t,e)}function ry(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(t,e,n,r){return new ry(t,e,n,r)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iy(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bl)return 11;if(t===Ml)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=Ue(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")gu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Un:return mn(n.children,i,o,e);case Dl:s=8,i|=8;break;case Sa:return t=Ue(12,n,e,i|2),t.elementType=Sa,t.lanes=o,t;case ka:return t=Ue(13,n,e,i),t.elementType=ka,t.lanes=o,t;case Ta:return t=Ue(19,n,e,i),t.elementType=Ta,t.lanes=o,t;case cf:return fs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lf:s=10;break e;case uf:s=9;break e;case bl:s=11;break e;case Ml:s=14;break e;case Nt:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ue(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function mn(t,e,n,r){return t=Ue(7,t,r,e),t.lanes=n,t}function fs(t,e,n,r){return t=Ue(22,t,r,e),t.elementType=cf,t.lanes=n,t.stateNode={isHidden:!1},t}function ia(t,e,n){return t=Ue(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=Ue(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vu(t,e,n,r,i,o,s,a,l){return t=new oy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ue(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(o),t}function sy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function np(t){if(!t)return qt;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Te(n))return th(t,n,e)}return e}function rp(t,e,n,r,i,o,s,a,l){return t=vu(n,r,!0,t,i,o,s,a,l),t.context=np(null),n=t.current,r=ye(),i=$t(n),o=mt(r,i),o.callback=e??null,Bt(n,o,i),t.current.lanes=i,Pi(t,i,r),Ce(t,r),t}function hs(t,e,n,r){var i=e.current,o=ye(),s=$t(i);return n=np(n),e.context===null?e.context=n:e.pendingContext=n,e=mt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,s),t!==null&&(Ye(t,i,s,o),uo(t,i,s)),s}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yu(t,e){id(t,e),(t=t.alternate)&&id(t,e)}function ay(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function wu(t){this._internalRoot=t}ps.prototype.render=wu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));hs(t,e,null,null)};ps.prototype.unmount=wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kn(function(){hs(null,t,null,null)}),e[wt]=null}};function ps(t){this._internalRoot=t}ps.prototype.unstable_scheduleHydration=function(t){if(t){var e=Df();t={blockedOn:null,target:t,priority:e};for(var n=0;n<At.length&&e!==0&&e<At[n].priority;n++);At.splice(n,0,t),n===0&&Mf(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ms(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function od(){}function ly(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Wo(s);o.call(u)}}var s=rp(e,r,t,0,null,!1,!1,"",od);return t._reactRootContainer=s,t[wt]=s.current,li(t.nodeType===8?t.parentNode:t),kn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Wo(l);a.call(u)}}var l=vu(t,0,!1,null,null,!1,!1,"",od);return t._reactRootContainer=l,t[wt]=l.current,li(t.nodeType===8?t.parentNode:t),kn(function(){hs(e,l,n,r)}),l}function gs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Wo(s);a.call(l)}}hs(e,s,t,i)}else s=ly(n,e,t,i,r);return Wo(s)}Of=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ur(e.pendingLanes);n!==0&&(Fl(e,n|1),Ce(e,X()),!(b&6)&&(dr=X()+500,en()))}break;case 13:kn(function(){var r=_t(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),yu(t,1)}};zl=function(t){if(t.tag===13){var e=_t(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}yu(t,134217728)}};Lf=function(t){if(t.tag===13){var e=$t(t),n=_t(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}yu(t,e)}};Df=function(){return j};bf=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};ba=function(t,e,n){switch(e){case"input":if(Ra(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ss(r);if(!i)throw Error(I(90));ff(r),Ra(r,i)}}}break;case"textarea":pf(t,n);break;case"select":e=n.value,e!=null&&Qn(t,!!n.multiple,e,!1)}};If=hu;Ef=kn;var uy={usingClientEntryPoint:!1,Events:[Ni,Vn,ss,wf,_f,hu]},Or={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cy={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tf(t),t===null?null:t.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{ns=to.inject(cy),st=to}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(e))throw Error(I(200));return sy(t,e,null,n)};De.createRoot=function(t,e){if(!_u(t))throw Error(I(299));var n=!1,r="",i=ip;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vu(t,1,!1,null,null,n,!1,r,i),t[wt]=e.current,li(t.nodeType===8?t.parentNode:t),new wu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Tf(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return kn(t)};De.hydrate=function(t,e,n){if(!ms(e))throw Error(I(200));return gs(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!_u(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ip;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=rp(e,null,t,1,n??null,i,!1,o,s),t[wt]=e.current,li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ps(e)};De.render=function(t,e,n){if(!ms(e))throw Error(I(200));return gs(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!ms(t))throw Error(I(40));return t._reactRootContainer?(kn(function(){gs(null,null,t,!1,function(){t._reactRootContainer=null,t[wt]=null})}),!0):!1};De.unstable_batchedUpdates=hu;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ms(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return gs(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)}catch(t){console.error(t)}}op(),nf.exports=De;var dy=nf.exports,sd=dy;Ia.createRoot=sd.createRoot,Ia.hydrateRoot=sd.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vi.apply(this,arguments)}var bt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bt||(bt={}));const ad="popstate";function fy(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return pl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sp(i)}return py(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Iu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hy(){return Math.random().toString(36).substr(2,8)}function ld(t,e){return{usr:t.state,key:t.key,idx:e}}function pl(t,e,n,r){return n===void 0&&(n=null),vi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vr(e):e,{state:n,key:e&&e.key||r||hy()})}function sp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function py(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=bt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(vi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=bt.Pop;let x=d(),h=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:h})}function g(x,h){a=bt.Push;let c=pl(_.location,x,h);n&&n(c,x),u=d()+1;let p=ld(c,u),w=_.createHref(c);try{s.pushState(p,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function v(x,h){a=bt.Replace;let c=pl(_.location,x,h);n&&n(c,x),u=d();let p=ld(c,u),w=_.createHref(c);s.replaceState(p,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof x=="string"?x:sp(x);return te(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return t(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,f),l=x,()=>{i.removeEventListener(ad,f),l=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:v,go(x){return s.go(x)}};return _}var ud;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ud||(ud={}));function my(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vr(e):e,i=up(r.pathname||"/",n);if(i==null)return null;let o=ap(t);gy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Ty(o[a],Ry(i));return s}function ap(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ap(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Sy(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of lp(o.path))i(o,s,l)}),e}function lp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function gy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ky(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vy=/^:\w+$/,yy=3,wy=2,_y=1,Iy=10,Ey=-2,cd=t=>t==="*";function Sy(t,e){let n=t.split("/"),r=n.length;return n.some(cd)&&(r+=Ey),e&&(r+=wy),n.filter(i=>!cd(i)).reduce((i,o)=>i+(vy.test(o)?yy:o===""?_y:Iy),r)}function ky(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ty(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Cy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:gn([i,d.pathname]),pathnameBase:Oy(gn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=gn([i,d.pathnameBase]))}return o}function Cy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Py(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[g]=void 0:u[g]=Ny(y||"",g),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Py(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Iu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ry(t){try{return decodeURI(t)}catch(e){return Iu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ny(t,e){try{return decodeURIComponent(t)}catch(n){return Iu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function up(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vr(t):t;return{pathname:n?n.startsWith("/")?n:Ay(n,e):e,search:Ly(r),hash:Dy(i)}}function Ay(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vr(t):(i=vi({},t),te(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let l=xy(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const gn=t=>t.join("/").replace(/\/\/+/g,"/"),Oy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Dy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function by(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fp=["post","put","patch","delete"];new Set(fp);const My=["get",...fp];new Set(My);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ho.apply(this,arguments)}const Eu=k.createContext(null),jy=k.createContext(null),vs=k.createContext(null),ys=k.createContext(null),tn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),hp=k.createContext(null);function Ai(){return k.useContext(ys)!=null}function ws(){return Ai()||te(!1),k.useContext(ys).location}function pp(t){k.useContext(vs).static||k.useLayoutEffect(t)}function Su(){let{isDataRoute:t}=k.useContext(tn);return t?Xy():Uy()}function Uy(){Ai()||te(!1);let t=k.useContext(Eu),{basename:e,navigator:n}=k.useContext(vs),{matches:r}=k.useContext(tn),{pathname:i}=ws(),o=JSON.stringify(cp(r).map(l=>l.pathnameBase)),s=k.useRef(!1);return pp(()=>{s.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=dp(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:gn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,o,i,t])}const Fy=k.createContext(null);function zy(t){let e=k.useContext(tn).outlet;return e&&k.createElement(Fy.Provider,{value:t},e)}function By(t,e){return Vy(t,e)}function Vy(t,e,n){Ai()||te(!1);let{navigator:r}=k.useContext(vs),{matches:i}=k.useContext(tn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=ws(),u;if(e){var d;let _=typeof e=="string"?vr(e):e;a==="/"||(d=_.pathname)!=null&&d.startsWith(a)||te(!1),u=_}else u=l;let f=u.pathname||"/",g=a==="/"?f:f.slice(a.length)||"/",v=my(t,{pathname:g}),y=Gy(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:gn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:gn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?k.createElement(ys.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bt.Pop}},y):y}function $y(){let t=Jy(),e=by(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const Wy=k.createElement($y,null);class Hy extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(tn.Provider,{value:this.props.routeContext},k.createElement(hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ky(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Eu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(tn.Provider,{value:e},r)}function Gy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||te(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Wy);let g=e.concat(o.slice(0,u+1)),v=()=>{let y;return d?y=f:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,k.createElement(Ky,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Hy,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var mp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mp||{}),Ko=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ko||{});function qy(t){let e=k.useContext(Eu);return e||te(!1),e}function Yy(t){let e=k.useContext(jy);return e||te(!1),e}function Qy(t){let e=k.useContext(tn);return e||te(!1),e}function gp(t){let e=Qy(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function Jy(){var t;let e=k.useContext(hp),n=Yy(Ko.UseRouteError),r=gp(Ko.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Xy(){let{router:t}=qy(mp.UseNavigateStable),e=gp(Ko.UseNavigateStable),n=k.useRef(!1);return pp(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ho({fromRouteId:e},o)))},[t,e])}function Zy(t){let{to:e,replace:n,state:r,relative:i}=t;Ai()||te(!1);let{matches:o}=k.useContext(tn),{pathname:s}=ws(),a=Su(),l=dp(e,cp(o).map(d=>d.pathnameBase),s,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function e0(t){return zy(t.context)}function ln(t){te(!1)}function t0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=bt.Pop,navigator:o,static:s=!1}=t;Ai()&&te(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,y=k.useMemo(()=>{let _=up(u,a);return _==null?null:{location:{pathname:_,search:d,hash:f,state:g,key:v},navigationType:i}},[a,u,d,f,g,v,i]);return y==null?null:k.createElement(vs.Provider,{value:l},k.createElement(ys.Provider,{children:n,value:y}))}function n0(t){let{children:e,location:n}=t;return By(ml(e),n)}new Promise(()=>{});function ml(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,ml(r.props.children,o));return}r.type!==ln&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ml(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const r0="startTransition",dd=tg[r0];function i0(t){let{basename:e,children:n,future:r,window:i}=t,o=k.useRef();o.current==null&&(o.current=fy({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&dd?dd(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>s.listen(d),[s,d]),k.createElement(t0,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}var fd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fd||(fd={}));var hd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hd||(hd={}));/**
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
 */const vp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},yp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(g=64)),r.push(n[d],n[f],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new s0;const g=o<<2|a>>4;if(r.push(g),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a0=function(t){const e=vp(t);return yp.encodeByteArray(e,!0)},wp=function(t){return a0(t).replace(/\./g,"")},_p=function(t){try{return yp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Go(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!l0(n)||(t[n]=Go(t[n],e[n]));return t}function l0(t){return t!=="__proto__"}/**
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
 */function u0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const c0=()=>u0().__FIREBASE_DEFAULTS__,d0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_p(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return c0()||d0()||f0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ip=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},h0=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class p0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Ep(){var t;const e=(t=ku())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g0(){return typeof self=="object"&&self.self===self}function Sp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kp(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qo(){try{return typeof indexedDB=="object"}catch{return!1}}function v0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const y0="FirebaseError";class Pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=y0,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?w0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Pe(i,a,r)}}function w0(t,e){return t.replace(_0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _0=/\{\$([^}]+)}/g;/**
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
 */function pd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(md(o)&&md(s)){if(!gl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function md(t){return t!==null&&typeof t=="object"}/**
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
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tp(t,e){const n=new E0(t,e);return n.subscribe.bind(n)}class E0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
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
 */class k0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new p0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C0(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T0(t){return t===un?void 0:t}function C0(t){return t.instantiationMode==="EAGER"}/**
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
 */class P0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Cu=[];var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const Cp={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},R0=U.INFO,N0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},x0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=N0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=R0,this._logHandler=x0,this._userLogHandler=null,Cu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}function A0(t){Cu.forEach(e=>{e.setLogLevel(t)})}function O0(t,e){for(const n of Cu){let r=null;e&&e.level&&(r=Cp[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:U[o].toLowerCase(),message:a,args:s,type:i.name})}}}const L0=(t,e)=>e.some(n=>t instanceof n);let gd,vd;function D0(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b0(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pp=new WeakMap,vl=new WeakMap,Rp=new WeakMap,la=new WeakMap,Ru=new WeakMap;function M0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ht(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Pp.set(n,t)}).catch(()=>{}),Ru.set(e,t),e}function j0(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});vl.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U0(t){yl=t(yl)}function F0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ua(this),e,...n);return Rp.set(r,e.sort?e.sort():[e]),Ht(r)}:b0().includes(t)?function(...e){return t.apply(ua(this),e),Ht(Pp.get(this))}:function(...e){return Ht(t.apply(ua(this),e))}}function z0(t){return typeof t=="function"?F0(t):(t instanceof IDBTransaction&&j0(t),L0(t,D0())?new Proxy(t,yl):t)}function Ht(t){if(t instanceof IDBRequest)return M0(t);if(la.has(t))return la.get(t);const e=z0(t);return e!==t&&(la.set(t,e),Ru.set(e,t)),e}const ua=t=>Ru.get(t);function B0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ht(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ht(s.result),l.oldVersion,l.newVersion,Ht(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const V0=["get","getKey","getAll","getAllKeys","count"],$0=["put","add","delete","clear"],ca=new Map;function yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ca.set(e,o),o}U0(t=>({...t,get:(e,n,r)=>yd(e,n)||t.get(e,n,r),has:(e,n)=>!!yd(e,n)||t.has(e,n)}));/**
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
 */class W0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wl="@firebase/app",wd="0.9.24";/**
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
 */const Tn=new Pu("@firebase/app"),K0="@firebase/app-compat",G0="@firebase/analytics-compat",q0="@firebase/analytics",Y0="@firebase/app-check-compat",Q0="@firebase/app-check",J0="@firebase/auth",X0="@firebase/auth-compat",Z0="@firebase/database",ew="@firebase/database-compat",tw="@firebase/functions",nw="@firebase/functions-compat",rw="@firebase/installations",iw="@firebase/installations-compat",ow="@firebase/messaging",sw="@firebase/messaging-compat",aw="@firebase/performance",lw="@firebase/performance-compat",uw="@firebase/remote-config",cw="@firebase/remote-config-compat",dw="@firebase/storage",fw="@firebase/storage-compat",hw="@firebase/firestore",pw="@firebase/firestore-compat",mw="firebase",gw="10.7.0";/**
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
 */const Qt="[DEFAULT]",vw={[wl]:"fire-core",[K0]:"fire-core-compat",[q0]:"fire-analytics",[G0]:"fire-analytics-compat",[Q0]:"fire-app-check",[Y0]:"fire-app-check-compat",[J0]:"fire-auth",[X0]:"fire-auth-compat",[Z0]:"fire-rtdb",[ew]:"fire-rtdb-compat",[tw]:"fire-fn",[nw]:"fire-fn-compat",[rw]:"fire-iid",[iw]:"fire-iid-compat",[ow]:"fire-fcm",[sw]:"fire-fcm-compat",[aw]:"fire-perf",[lw]:"fire-perf-compat",[uw]:"fire-rc",[cw]:"fire-rc-compat",[dw]:"fire-gcs",[fw]:"fire-gcs-compat",[hw]:"fire-fst",[pw]:"fire-fst-compat","fire-js":"fire-js",[mw]:"fire-js-all"};/**
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
 */const Jt=new Map,yi=new Map;function Yo(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Np(t,e){t.container.addOrOverwriteComponent(e)}function Cn(t){const e=t.name;if(yi.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,t);for(const n of Jt.values())Yo(n,t);return!0}function xp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yw(t,e,n=Qt){xp(t,e).clearInstance(n)}function ww(){yi.clear()}/**
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
 */const _w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new On("app","Firebase",_w);/**
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
 */let Iw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
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
 */const Ln=gw;function Nu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=Ip()),!n)throw gt.create("no-options");const o=Jt.get(i);if(o){if(gl(n,o.options)&&gl(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const s=new P0(i);for(const l of yi.values())s.addComponent(l);const a=new Iw(n,r,s);return Jt.set(i,a),a}function Ew(t=Qt){const e=Jt.get(t);if(!e&&t===Qt&&Ip())return Nu();if(!e)throw gt.create("no-app",{appName:t});return e}function Sw(){return Array.from(Jt.values())}async function Ap(t){const e=t.name;Jt.has(e)&&(Jt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=vw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Cn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Op(t,e){if(t!==null&&typeof t!="function")throw gt.create("invalid-log-argument");O0(t,e)}function Lp(t){A0(t)}/**
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
 */const kw="firebase-heartbeat-database",Tw=1,wi="firebase-heartbeat-store";let da=null;function Dp(){return da||(da=B0(kw,Tw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),da}async function Cw(t){try{return await(await Dp()).transaction(wi).objectStore(wi).get(bp(t))}catch(e){if(e instanceof Pe)Tn.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function _d(t,e){try{const r=(await Dp()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,bp(t)),await r.done}catch(n){if(n instanceof Pe)Tn.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function bp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pw=1024,Rw=30*24*60*60*1e3;class Nw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Aw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Id();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Rw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Id(),{heartbeatsToSend:r,unsentEntries:i}=xw(this._heartbeatsCache.heartbeats),o=wp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Id(){return new Date().toISOString().substring(0,10)}function xw(t,e=Pw){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ed(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Aw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qo()?v0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return wp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ow(t){Cn(new Yt("platform-logger",e=>new W0(e),"PRIVATE")),Cn(new Yt("heartbeat",e=>new Nw(e),"PRIVATE")),Kt(wl,wd,t),Kt(wl,wd,"esm2017"),Kt("fire-js","")}Ow("");const Lw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pe,SDK_VERSION:Ln,_DEFAULT_ENTRY_NAME:Qt,_addComponent:Yo,_addOrOverwriteComponent:Np,_apps:Jt,_clearComponents:ww,_components:yi,_getProvider:xp,_registerComponent:Cn,_removeServiceInstance:yw,deleteApp:Ap,getApp:Ew,getApps:Sw,initializeApp:Nu,onLog:Op,registerVersion:Kt,setLogLevel:Lp},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Dw{constructor(e,n){this._delegate=e,this.firebase=n,Yo(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ap(this._delegate)))}_getService(e,n=Qt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Yo(this._delegate,e)}_addOrOverwriteComponent(e){Np(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const bw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Sd=new On("app-compat","Firebase",bw);/**
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
 */function Mw(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Kt,setLogLevel:Lp,onLog:Op,apps:null,SDK_VERSION:Ln,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Lw}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Qt,!pd(e,u))throw Sd.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,d={}){const f=Nu(u,d);if(pd(e,f.name))return e[f.name];const g=new t(f,n);return e[f.name]=g,g}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if(Cn(u)&&u.type==="PUBLIC"){const g=(v=i())=>{if(typeof v[f]!="function")throw Sd.create("invalid-app-argument",{appName:d});return v[f]()};u.serviceProps!==void 0&&Go(g,u.serviceProps),n[f]=g,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function Mp(){const t=Mw(Dw);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Mp,extendNamespace:e,createSubscribe:Tp,ErrorFactory:On,deepExtend:Go});function e(n){Go(t,n)}return t}const jw=Mp();/**
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
 */const kd=new Pu("@firebase/app-compat"),Uw="@firebase/app-compat",Fw="0.2.24";/**
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
 */function zw(t){Kt(Uw,Fw,t)}/**
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
 */if(g0()&&self.firebase!==void 0){kd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const kt=jw;zw();function xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Lr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Bw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=Bw,$w=jp,Up=new On("auth","Firebase",jp());/**
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
 */const Qo=new Pu("@firebase/auth");function Ww(t,...e){Qo.logLevel<=U.WARN&&Qo.warn(`Auth (${Ln}): ${t}`,...e)}function vo(t,...e){Qo.logLevel<=U.ERROR&&Qo.error(`Auth (${Ln}): ${t}`,...e)}/**
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
 */function fe(t,...e){throw Au(t,...e)}function ce(t,...e){return Au(t,...e)}function Fp(t,e,n){const r=Object.assign(Object.assign({},$w()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function wr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(t,"argument-error"),Fp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Up.create(t,...e)}function E(t,e,...n){if(!t)throw Au(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Je(t,e){t||ot(e)}/**
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
 */function _i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ou(){return Td()==="http:"||Td()==="https:"}function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ou()||Sp()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=m0()||Tu()}get(){return Hw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lu(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qw=new Oi(3e4,6e4);function Y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Q(t,e,n,r,i={}){return Bp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zp.fetch()(Vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Bp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gw),e);try{const i=new Qw(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Br(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Br(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Br(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fp(t,d,u);fe(t,d)}}catch(i){if(i instanceof Pe)throw i;fe(t,"network-request-failed",{message:String(i)})}}async function Tt(t,e,n,r,i={}){const o=await Q(t,e,n,r,i);return"mfaPendingCredential"in o&&fe(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Vp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lu(t.config,i):`${t.config.apiScheme}://${i}`}function Yw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),qw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Cd(t){return t!==void 0&&t.getResponse!==void 0}function Pd(t){return t!==void 0&&t.enterprise!==void 0}class Jw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Yw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Xw(t){return(await Q(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Zw(t,e){return Q(t,"GET","/v2/recaptchaConfig",Y(t,e))}/**
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
 */async function e_(t,e){return Q(t,"POST","/v1/accounts:delete",e)}async function t_(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function n_(t,e){return Q(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r_(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=_s(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Jr(fa(i.auth_time)),issuedAtTime:Jr(fa(i.iat)),expirationTime:Jr(fa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function _s(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=_p(n);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function i_(t){const e=_s(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Et(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pe&&o_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function o_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class s_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Et(t,n_(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?u_(o.providerUserInfo):[],a=l_(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new $p(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function a_(t){const e=M(t);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function u_(t){return t.map(e=>{var{providerId:n}=e,r=xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function c_(t,e){const n=await Bp(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Vp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function d_(t,e){return Q(t,"POST","/v2/accounts:revokeToken",Y(t,e))}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await c_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ei;return r&&(E(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(E(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function Rt(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new $p(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r_(this,e)}reload(){return a_(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,e_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:S,providerData:P,stsTokenManager:R}=n;E(p&&R,e,"internal-error");const N=Ei.fromJSON(this.name,R);E(typeof p=="string",e,"internal-error"),Rt(f,e.name),Rt(g,e.name),E(typeof w=="boolean",e,"internal-error"),E(typeof S=="boolean",e,"internal-error"),Rt(v,e.name),Rt(y,e.name),Rt(_,e.name),Rt(x,e.name),Rt(h,e.name),Rt(c,e.name);const z=new vn({uid:p,auth:e,email:g,emailVerified:w,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(z.providerData=P.map(L=>Object.assign({},L))),x&&(z._redirectEventId=x),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ei;i.updateFromServerResponse(n);const o=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(o),o}}/**
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
 */const Rd=new Map;function Ae(t){Je(t instanceof Function,"Expected a class definition");let e=Rd.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rd.set(t,e),e)}/**
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
 */class Wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wp.type="NONE";const fr=Wp;/**
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
 */function Nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qp(e))return"Blackberry";if(Yp(e))return"Webos";if(Du(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Li(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hp(t=ne()){return/firefox\//i.test(t)}function Du(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(t=ne()){return/crios\//i.test(t)}function Gp(t=ne()){return/iemobile/i.test(t)}function Li(t=ne()){return/android/i.test(t)}function qp(t=ne()){return/blackberry/i.test(t)}function Yp(t=ne()){return/webos/i.test(t)}function _r(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function f_(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function h_(t=ne()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p_(){return kp()&&document.documentMode===10}function Qp(t=ne()){return _r(t)||Li(t)||Yp(t)||qp(t)||/windows phone/i.test(t)||Gp(t)}function m_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=Nd(ne());break;case"Worker":n=`${Nd(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
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
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function v_(t,e={}){return Q(t,"GET","/v2/passwordPolicy",Y(t,e))}/**
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
 */const y_=6;class w_{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:y_,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class __{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xd(this),this.idTokenSubscription=new xd(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v_(this),n=new w_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await d_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ww(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function q(t){return M(t)}class xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tp(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function I_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ce("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",I_().appendChild(r)})}function Xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const E_="https://www.google.com/recaptcha/enterprise.js?render=",S_="recaptcha-enterprise",k_="NO_RECAPTCHA";class T_{constructor(e){this.type=S_,this.auth=q(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Zw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Pd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(k_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Pd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}bu(E_+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Ad(t,e,n,r=!1){const i=new T_(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Si(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ad(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ad(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}function C_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P_(t,e,n){const r=q(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Zp(e),{host:s,port:a}=R_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||N_()}function Zp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R_(t){const e=Zp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Od(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Od(s)}}}function Od(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ir{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function em(t,e){return Q(t,"POST","/v1/accounts:resetPassword",Y(t,e))}async function x_(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function A_(t,e){return Q(t,"POST","/v1/accounts:signUp",e)}async function O_(t,e){return Q(t,"POST","/v1/accounts:update",Y(t,e))}/**
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
 */async function L_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPassword",Y(t,e))}async function Is(t,e){return Q(t,"POST","/v1/accounts:sendOobCode",Y(t,e))}async function D_(t,e){return Is(t,e)}async function b_(t,e){return Is(t,e)}async function M_(t,e){return Is(t,e)}async function j_(t,e){return Is(t,e)}/**
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
 */async function U_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}async function F_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}/**
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
 */class ki extends Ir{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,n,"signInWithPassword",L_);case"emailLink":return U_(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,r,"signUpPassword",A_);case"emailLink":return F_(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const z_="http://localhost";class lt extends Ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=xu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}buildRequest(){const e={requestUri:z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
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
 */async function B_(t,e){return Q(t,"POST","/v1/accounts:sendVerificationCode",Y(t,e))}async function V_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e))}async function $_(t,e){const n=await Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e));if(n.temporaryProof)throw Br(t,"account-exists-with-different-credential",n);return n}const W_={USER_NOT_FOUND:"user-not-found"};async function H_(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,n),W_)}/**
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
 */class wn extends Ir{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new wn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new wn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return V_(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return $_(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return H_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new wn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
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
 */function K_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G_(t){const e=Yn(zr(t)).link,n=e?Yn(zr(e)).deep_link_id:null,r=Yn(zr(t)).deep_link_id;return(r?Yn(zr(r)).link:null)||r||n||e||t}class Es{constructor(e){var n,r,i,o,s,a;const l=Yn(zr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=K_((i=l.mode)!==null&&i!==void 0?i:null);E(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=G_(e);try{return new Es(n)}catch{return null}}}/**
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
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Es.parseLink(n);return E(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Er extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rr extends Er{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return E("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new rr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class tt extends Er{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
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
 */class nt extends Er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class rt extends Er{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
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
 */const q_="http://localhost";class hr extends Ir{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new hr(r,o)}static _create(e,n){return new hr(e,n)}buildRequest(){return{requestUri:q_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Y_="saml.";class Jo extends Ct{constructor(e){E(e.startsWith(Y_),"argument-error"),super(e)}static credentialFromResult(e){return Jo.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Jo.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=hr.fromJSON(e);return E(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return hr._create(r,n)}catch{return null}}}/**
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
 */class it extends Er{constructor(){super("twitter.com")}static credential(e,n){return lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
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
 */async function tm(t,e){return Tt(t,"POST","/v1/accounts:signUp",Y(t,e))}/**
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
 */class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await vn._fromIdTokenResponse(e,r,i),s=Ld(r);return new Ve({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ld(r);return new Ve({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Q_(t){var e;const n=q(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await tm(n,{returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Xo extends Pe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xo(e,n,r,i)}}function nm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,o,e,r):o})}/**
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
 */function rm(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function J_(t,e){const n=M(t);await Ss(!0,n,e);const{providerUserInfo:r}=await t_(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=rm(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Mu(t,e,n=!1){const r=await Et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ve._forOperation(t,"link",r)}async function Ss(t,e,n){await Ii(e);const r=rm(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";E(r.has(n)===t,e.auth,i)}/**
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
 */async function im(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Et(t,nm(r,i,e,t),n);E(o.idToken,r,"internal-error");const s=_s(o.idToken);E(s,r,"internal-error");const{sub:a}=s;return E(t.uid===a,r,"user-mismatch"),Ve._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),o}}/**
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
 */async function om(t,e,n=!1){const r="signIn",i=await nm(t,r,e),o=await Ve._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function ks(t,e){return om(q(t),e)}async function sm(t,e){const n=M(t);return await Ss(!1,n,e.providerId),Mu(n,e)}async function am(t,e){return im(M(t),e)}/**
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
 */async function X_(t,e){return Tt(t,"POST","/v1/accounts:signInWithCustomToken",Y(t,e))}/**
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
 */async function Z_(t,e){const n=q(t),r=await X_(n,{token:e,returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Di{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ju._fromServerResponse(e,n):"totpInfo"in n?Uu._fromServerResponse(e,n):fe(e,"internal-error")}}class ju extends Di{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ju(n)}}class Uu extends Di{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Uu(n)}}/**
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
 */function Ts(t,e,n){var r;E(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Fu(t){const e=q(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eI(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ts(r,i,n),await Si(r,i,"getOobCode",b_)}async function tI(t,e,n){await em(M(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fu(t),r})}async function nI(t,e){await O_(M(t),{oobCode:e})}async function lm(t,e){const n=M(t),r=await em(n,{oobCode:e}),i=r.requestType;switch(E(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Di._fromServerResponse(q(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function rI(t,e){const{data:n}=await lm(M(t),e);return n.email}async function iI(t,e,n){const r=q(t),s=await Si(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Fu(t),l}),a=await Ve._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function oI(t,e,n){return ks(M(t),nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fu(t),r})}/**
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
 */async function sI(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(s,a){E(a.handleCodeInApp,r,"argument-error"),a&&Ts(r,s,a)}o(i,n),await Si(r,i,"getOobCode",M_)}function aI(t,e){const n=Es.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function lI(t,e,n){const r=M(t),i=nn.credentialWithLink(e,n||_i());return E(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ks(r,i)}/**
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
 */async function uI(t,e){return Q(t,"POST","/v1/accounts:createAuthUri",Y(t,e))}/**
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
 */async function cI(t,e){const n=Ou()?_i():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await uI(M(t),r);return i||[]}async function dI(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ts(n.auth,i,e);const{email:o}=await D_(n.auth,i);o!==t.email&&await t.reload()}async function fI(t,e,n){const r=M(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ts(r.auth,o,n);const{email:s}=await j_(r.auth,o);s!==t.email&&await t.reload()}/**
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
 */async function hI(t,e){return Q(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Et(r,hI(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function mI(t,e){return um(M(t),e,null)}function gI(t,e){return um(M(t),null,e)}async function um(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await Et(t,x_(r,o));await t._updateTokensIfNecessary(s,!0)}/**
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
 */function vI(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=_s(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new ir(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new yI(o,i);case"github.com":return new wI(o,i);case"google.com":return new _I(o,i);case"twitter.com":return new II(o,i,t.screenName||null);case"custom":case"anonymous":return new ir(o,null);default:return new ir(o,r,i)}}class ir{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class cm extends ir{constructor(e,n,r,i){super(e,n,r),this.username=i}}class yI extends ir{constructor(e,n){super(e,"facebook.com",n)}}class wI extends cm{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class _I extends ir{constructor(e,n){super(e,"google.com",n)}}class II extends cm{constructor(e,n,r){super(e,"twitter.com",n,r)}}function EI(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vI(n)}/**
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
 */class zu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=q(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Di._fromServerResponse(r,a));E(i.mfaPendingCredential,r,"internal-error");const s=hn._fromMfaPendingCredential(i.mfaPendingCredential);return new zu(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Ve._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return E(n.user,r,"internal-error"),Ve._forOperation(n.user,n.operationType,u);default:fe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function SI(t,e){var n;const r=M(t),i=e;return E(e.customData.operationType,r,"argument-error"),E((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),zu._fromError(r,i)}/**
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
 */function kI(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:start",Y(t,e))}function TI(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:finalize",Y(t,e))}function CI(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Y(t,e))}class Bu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Di._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Bu(e)}async getSession(){return hn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),o=await Et(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Et(this.user,CI(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ha=new WeakMap;function PI(t){const e=M(t);return ha.has(e)||ha.set(e,Bu._fromUser(e)),ha.get(e)}const Zo="__sak";/**
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
 */class dm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function RI(){const t=ne();return Du(t)||_r(t)}const NI=1e3,xI=10;class fm extends dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RI()&&m_(),this.fallbackToPolling=Qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);p_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fm.type="LOCAL";const Vu=fm;/**
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
 */class hm extends dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hm.type="SESSION";const Pn=hm;/**
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
 */function AI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await AI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cs.receivers=[];/**
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
 */function bi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=bi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Z(){return window}function LI(t){Z().location.href=t}/**
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
 */function $u(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MI(){return $u()?self:null}/**
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
 */const pm="firebaseLocalStorageDb",jI=1,es="firebaseLocalStorage",mm="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ps(t,e){return t.transaction([es],e?"readwrite":"readonly").objectStore(es)}function UI(){const t=indexedDB.deleteDatabase(pm);return new Mi(t).toPromise()}function _l(){const t=indexedDB.open(pm,jI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(es,{keyPath:mm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(es)?e(r):(r.close(),await UI(),e(await _l()))})})}async function Dd(t,e,n){const r=Ps(t,!0).put({[mm]:e,value:n});return new Mi(r).toPromise()}async function FI(t,e){const n=Ps(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function bd(t,e){const n=Ps(t,!0).delete(e);return new Mi(n).toPromise()}const zI=800,BI=3;class gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cs._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new OI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _l();return await Dd(e,Zo,"1"),await bd(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ps(i,!1).getAll();return new Mi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gm.type="LOCAL";const Ti=gm;/**
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
 */function VI(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:start",Y(t,e))}function $I(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:finalize",Y(t,e))}/**
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
 */const WI=500,HI=6e4,no=1e12;class KI{constructor(e){this.auth=e,this.counter=no,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new GI(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||no;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||no;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||no;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class GI{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;E(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=qI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},HI)},WI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function qI(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const pa=Xp("rcb"),YI=new Oi(3e4,6e4),QI="https://www.google.com/recaptcha/api.js?";class JI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return E(XI(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Cd(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const o=Z().setTimeout(()=>{i(ce(e,"network-request-failed"))},YI.get());Z()[pa]=()=>{Z().clearTimeout(o),delete Z()[pa];const a=Z().grecaptcha;if(!a||!Cd(a)){i(ce(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${QI}?${yr({onload:pa,render:"explicit",hl:n})}`;bu(s).catch(()=>{clearTimeout(o),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ZI{async load(e){return new KI(e)}clearedOneInstance(){}}/**
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
 */const vm="recaptcha",eE={theme:"light",type:"image"};let tE=class{constructor(e,n,r=Object.assign({},eE)){this.parameters=r,this.type=vm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=q(e),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;E(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZI:new JI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(Ou()&&!$u(),this.auth,"internal-error"),await nE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Xw(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nE(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Wu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=wn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function rE(t,e,n){const r=q(t),i=await Rs(r,e,M(n));return new Wu(i,o=>ks(r,o))}async function iE(t,e,n){const r=M(t);await Ss(!1,r,"phone");const i=await Rs(r.auth,e,M(n));return new Wu(i,o=>sm(r,o))}async function oE(t,e,n){const r=M(t),i=await Rs(r.auth,e,M(n));return new Wu(i,o=>am(r,o))}async function Rs(t,e,n){var r;const i=await n.verify();try{E(typeof i=="string",t,"argument-error"),E(n.type===vm,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return E(s.type==="enroll",t,"internal-error"),(await kI(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{E(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return E(a,t,"missing-multi-factor-info"),(await VI(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await B_(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function sE(t,e){await Mu(M(t),e)}/**
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
 */let Rn=class yo{constructor(e){this.providerId=yo.PROVIDER_ID,this.auth=q(e)}verifyPhoneNumber(e,n){return Rs(this.auth,e,M(n))}static credential(e,n){return wn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return yo.credentialFromTaggedObject(n)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?wn._fromTokenResponse(n,r):null}};Rn.PROVIDER_ID="phone";Rn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Dn(t,e){return e?Ae(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hu extends Ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aE(t){return om(t.auth,new Hu(t),t.bypassAuthState)}function lE(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),im(n,new Hu(t),t.bypassAuthState)}async function uE(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),Mu(n,new Hu(t),t.bypassAuthState)}/**
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
 */class ym{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cE=new Oi(2e3,1e4);async function dE(t,e,n){const r=q(t);wr(t,e,Ct);const i=Dn(r,n);return new ht(r,"signInViaPopup",e,i).executeNotNull()}async function fE(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function hE(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ht extends ym{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cE.get())};e()}}ht.currentPopupAction=null;/**
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
 */const pE="pendingRedirect",Xr=new Map;class mE extends ym{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await gE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gE(t,e){const n=_m(e),r=wm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ku(t,e){return wm(t)._set(_m(e),"true")}function vE(){Xr.clear()}function Gu(t,e){Xr.set(t._key(),e)}function wm(t){return Ae(t._redirectPersistence)}function _m(t){return yn(pE,t.config.apiKey,t.name)}/**
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
 */function yE(t,e,n){return wE(t,e,n)}async function wE(t,e,n){const r=q(t);wr(t,e,Ct),await r._initializationPromise;const i=Dn(r,n);return await Ku(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _E(t,e,n){return IE(t,e,n)}async function IE(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await Ku(i,r.auth);const o=await Im(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function EE(t,e,n){return SE(t,e,n)}async function SE(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await Ss(!1,r,e.providerId),await Ku(i,r.auth);const o=await Im(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function kE(t,e){return await q(t)._initializationPromise,Ns(t,e,!1)}async function Ns(t,e,n=!1){const r=q(t),i=Dn(r,e),s=await new mE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Im(t){const e=bi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const TE=10*60*1e3;class Em{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(t);default:return!1}}/**
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
 */async function km(t,e={}){return Q(t,"GET","/v1/projects",e)}/**
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
 */const PE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RE=/^https?/;async function NE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await km(t);for(const n of e)try{if(xE(n))return}catch{}fe(t,"unauthorized-domain")}function xE(t){const e=_i(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!RE.test(n))return!1;if(PE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AE=new Oi(3e4,6e4);function jd(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OE(t){return new Promise((e,n)=>{var r,i,o;function s(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(ce(t,"network-request-failed"))},timeout:AE.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Z().gapi)===null||o===void 0)&&o.load)s();else{const a=Xp("iframefcb");return Z()[a]=()=>{gapi.load?s():n(ce(t,"network-request-failed"))},bu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function LE(t){return wo=wo||OE(t),wo}/**
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
 */const DE=new Oi(5e3,15e3),bE="__/auth/iframe",ME="emulator/auth/iframe",jE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FE(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lu(e,ME):`https://${t.config.authDomain}/${bE}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},i=UE.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${yr(r).slice(1)}`}async function zE(t){const e=await LE(t),n=Z().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:FE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ce(t,"network-request-failed"),a=Z().setTimeout(()=>{o(s)},DE.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const BE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VE=500,$E=600,WE="_blank",HE="http://localhost";class Ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KE(t,e,n,r=VE,i=$E){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ne().toLowerCase();n&&(a=Kp(u)?WE:n),Hp(u)&&(e=e||HE,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[v,y])=>`${g}${v}=${y},`,"");if(h_(u)&&a!=="_self")return GE(e||"",a),new Ud(null);const f=window.open(e||"",a,d);E(f,t,"popup-blocked");try{f.focus()}catch{}return new Ud(f)}function GE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qE="__/auth/handler",YE="emulator/auth/handler",QE=encodeURIComponent("fac");async function Il(t,e,n,r,i,o){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:i};if(e instanceof Ct){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",I0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(e instanceof Er){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${QE}=${encodeURIComponent(l)}`:"";return`${JE(t)}?${yr(a).slice(1)}${u}`}function JE({config:t}){return t.emulator?Lu(t,YE):`https://${t.authDomain}/${qE}`}/**
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
 */const ma="webStorageSupport";class XE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=Ns,this._overrideRedirectResult=Gu}async _openPopup(e,n,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Il(e,n,r,_i(),i);return KE(e,s,bi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Il(e,n,r,_i(),i);return LI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zE(e),r=new Em(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ma,{type:ma},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ma];s!==void 0&&n(!!s),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qp()||Du()||_r()}}const ZE=XE;class eS{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ot("unexpected MultiFactorSessionType")}}}class qu extends eS{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new qu(e)}_finalizeEnroll(e,n,r){return TI(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return $I(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Tm{constructor(){}static assertion(e){return qu._fromCredential(e)}}Tm.FACTOR_ID="phone";var Fd="@firebase/auth",zd="1.5.0";/**
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
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rS(t){Cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;E(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},u=new __(r,i,o,l);return C_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Yt("auth-internal",e=>{const n=q(e.getProvider("auth").getImmediate());return(r=>new tS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Fd,zd,nS(t)),Kt(Fd,zd,"esm2017")}/**
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
 */const iS=5*60;h0("authIdTokenMaxAge");rS("Browser");/**
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
 */const oS=2e3;async function sS(t,e,n){var r;const{BuildInfo:i}=Nn();Je(e.sessionId,"AuthEvent did not contain a session ID");const o=await dS(e.sessionId),s={};return _r()?s.ibi=i.packageName:Li()?s.apn=i.packageName:fe(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,Il(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function aS(t){const{BuildInfo:e}=Nn(),n={};_r()?n.iosBundleId=e.packageName:Li()?n.androidPackageName=e.packageName:fe(t,"operation-not-supported-in-this-environment"),await km(t,n)}function lS(t){const{cordova:e}=Nn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,f_()?"_blank":"_system","location=yes"),n(i)})})}async function uS(t,e,n){const{cordova:r}=Nn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var f;o();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(ce(t,"redirect-cancelled-by-user"))},oS))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Li()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function cS(t){var e,n,r,i,o,s,a,l,u,d;const f=Nn();E(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E(typeof((o=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((l=(a=(s=f==null?void 0:f.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dS(t){const e=fS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function fS(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const hS=20;class pS extends Em{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mS(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:yS(),postBody:null,tenantId:t.tenantId,error:ce(t,"no-auth-event")}}function gS(t,e){return El()._set(Sl(t),e)}async function Bd(t){const e=await El()._get(Sl(t));return e&&await El()._remove(Sl(t)),e}function vS(t,e){var n,r;const i=_S(e);if(i.includes("/__/auth/callback")){const o=_o(i),s=o.firebaseError?wS(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ce(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function yS(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hS;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function El(){return Ae(Vu)}function Sl(t){return yn("authEvent",t.config.apiKey,t.name)}function wS(t){try{return JSON.parse(t)}catch{return null}}function _S(t){const e=_o(t),n=e.link?decodeURIComponent(e.link):void 0,r=_o(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _o(i).link||i||r||n||t}function _o(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Yn(n.join("?"))}/**
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
 */const IS=500;class ES{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ns,this._overrideRedirectResult=Gu}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new pS(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){fe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cS(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),vE(),await this._originValidation(e);const s=mS(e,r,i);await gS(e,s);const a=await sS(e,s,n),l=await lS(a);return uS(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Nn(),s=setTimeout(async()=>{await Bd(e),n.onEvent(Vd())},IS),a=async d=>{clearTimeout(s);const f=await Bd(e);let g=null;f&&(d!=null&&d.url)&&(g=vS(f,d.url)),n.onEvent(g||Vd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Nn().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const SS=ES;function Vd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ce("no-auth-event")}}/**
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
 */function kS(t,e){q(t)._logFramework(e)}var TS="@firebase/auth-compat",CS="0.5.0";/**
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
 */const PS=1e3;function Zr(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function RS(){return Zr()==="http:"||Zr()==="https:"}function Cm(t=ne()){return!!((Zr()==="file:"||Zr()==="ionic:"||Zr()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function NS(){return Tu()||Ep()}function xS(){return kp()&&(document==null?void 0:document.documentMode)===11}function AS(t=ne()){return/Edge\/\d+/.test(t)}function OS(t=ne()){return xS()||AS(t)}function Pm(){try{const t=self.localStorage,e=bi();if(t)return t.setItem(e,"1"),t.removeItem(e),OS()?qo():!0}catch{return Yu()&&qo()}return!1}function Yu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ga(){return(RS()||Sp()||Cm())&&!NS()&&Pm()&&!Yu()}function Rm(){return Cm()&&typeof document<"u"}async function LS(){return Rm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},PS);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function DS(){return typeof window<"u"?window:null}/**
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
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},Dr=E,Nm="persistence";function bS(t,e){if(Dr(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Tu()){Dr(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(Ep()){Dr(e===Ne.NONE,t,"unsupported-persistence-type");return}if(Yu()){Dr(e===Ne.NONE||e===Ne.LOCAL&&qo(),t,"unsupported-persistence-type");return}Dr(e===Ne.NONE||Pm(),t,"unsupported-persistence-type")}async function kl(t){await t._initializationPromise;const e=xm(),n=yn(Nm,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function MS(t,e){const n=xm();if(!n)return[];const r=yn(Nm,t,e);switch(n.getItem(r)){case Ne.NONE:return[fr];case Ne.LOCAL:return[Ti,Pn];case Ne.SESSION:return[Pn];default:return[]}}function xm(){var t;try{return((t=DS())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const jS=E;class Mt{constructor(){this.browserResolver=Ae(ZE),this.cordovaResolver=Ae(SS),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=Ns,this._overrideRedirectResult=Gu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Rm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return jS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await LS();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Am(t){return t.unwrap()}function US(t){return t.wrapped()}/**
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
 */function FS(t){return Om(t)}function zS(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BS(t,SI(t,e))}else if(r){const i=Om(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Om(t){const{_tokenResponse:e}=t instanceof Pe?t.customData:t;if(!e)return null;if(!(t instanceof Pe)&&"temporaryProof"in e&&"phoneNumber"in e)return Rn.credentialFromResult(t);const n=e.providerId;if(!n||n===Lr.PASSWORD)return null;let r;switch(n){case Lr.GOOGLE:r=nt;break;case Lr.FACEBOOK:r=tt;break;case Lr.GITHUB:r=rt;break;case Lr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?hr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new rr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Pe?r.credentialFromError(t):r.credentialFromResult(t)}function Ie(t,e){return e.catch(n=>{throw n instanceof Pe&&zS(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:FS(n),additionalUserInfo:EI(n),user:pt.getOrCreate(i)}})}async function Tl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ie(t,n.confirm(r))}}class BS{constructor(e,n){this.resolver=n,this.auth=US(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ie(Am(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class pt{constructor(e){this._delegate=e,this.multiFactor=PI(e)}static getOrCreate(e){return pt.USER_MAP.has(e)||pt.USER_MAP.set(e,new pt(e)),pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ie(this.auth,sm(this._delegate,e))}async linkWithPhoneNumber(e,n){return Tl(this.auth,iE(this._delegate,e,n))}async linkWithPopup(e){return Ie(this.auth,hE(this._delegate,e,Mt))}async linkWithRedirect(e){return await kl(q(this.auth)),EE(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ie(this.auth,am(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Tl(this.auth,oE(this._delegate,e,n))}reauthenticateWithPopup(e){return Ie(this.auth,fE(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await kl(q(this.auth)),_E(this._delegate,e,Mt)}sendEmailVerification(e){return dI(this._delegate,e)}async unlink(e){return await J_(this._delegate,e),this}updateEmail(e){return mI(this._delegate,e)}updatePassword(e){return gI(this._delegate,e)}updatePhoneNumber(e){return sE(this._delegate,e)}updateProfile(e){return pI(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return fI(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pt.USER_MAP=new WeakMap;/**
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
 */const br=E;class Cl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;br(r,"invalid-api-key",{appName:e.name}),br(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=n.initialize({options:{persistence:VS(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Vw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){P_(this._delegate,e,n)}applyActionCode(e){return nI(this._delegate,e)}checkActionCode(e){return lm(this._delegate,e)}confirmPasswordReset(e,n){return tI(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ie(this._delegate,iI(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cI(this._delegate,e)}isSignInWithEmailLink(e){return aI(this._delegate,e)}async getRedirectResult(){br(ga(),this._delegate,"operation-not-supported-in-this-environment");const e=await kE(this._delegate,Mt);return e?Ie(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kS(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=$d(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=$d(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return sI(this._delegate,e,n)}sendPasswordResetEmail(e,n){return eI(this._delegate,e,n||void 0)}async setPersistence(e){bS(this._delegate,e);let n;switch(e){case Ne.SESSION:n=Pn;break;case Ne.LOCAL:n=await Ae(Ti)._isAvailable()?Ti:Vu;break;case Ne.NONE:n=fr;break;default:return fe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ie(this._delegate,Q_(this._delegate))}signInWithCredential(e){return Ie(this._delegate,ks(this._delegate,e))}signInWithCustomToken(e){return Ie(this._delegate,Z_(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ie(this._delegate,oI(this._delegate,e,n))}signInWithEmailLink(e,n){return Ie(this._delegate,lI(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Tl(this._delegate,rE(this._delegate,e,n))}async signInWithPopup(e){return br(ga(),this._delegate,"operation-not-supported-in-this-environment"),Ie(this._delegate,dE(this._delegate,e,Mt))}async signInWithRedirect(e){return br(ga(),this._delegate,"operation-not-supported-in-this-environment"),await kl(this._delegate),yE(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rI(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cl.Persistence=Ne;function $d(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&pt.getOrCreate(s)),error:e,complete:n}}function VS(t,e){const n=MS(t,e);if(typeof self<"u"&&!n.includes(Ti)&&n.push(Ti),typeof window<"u")for(const r of[Vu,Pn])n.includes(r)||n.push(r);return n.includes(fr)||n.push(fr),n}/**
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
 */class Qu{constructor(){this.providerId="phone",this._delegate=new Rn(Am(kt.auth()))}static credential(e,n){return Rn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Qu.PHONE_SIGN_IN_METHOD=Rn.PHONE_SIGN_IN_METHOD;Qu.PROVIDER_ID=Rn.PROVIDER_ID;/**
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
 */const $S=E;class WS{constructor(e,n,r=kt.app()){var i;$S((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new tE(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const HS="auth-compat";function KS(t){t.INTERNAL.registerComponent(new Yt(HS,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Cl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mn.EMAIL_SIGNIN,PASSWORD_RESET:Mn.PASSWORD_RESET,RECOVER_EMAIL:Mn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mn.VERIFY_EMAIL}},EmailAuthProvider:nn,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:rr,SAMLAuthProvider:Jo,PhoneAuthProvider:Qu,PhoneMultiFactorGenerator:Tm,RecaptchaVerifier:WS,TwitterAuthProvider:it,Auth:Cl,AuthCredential:Ir,Error:Pe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(TS,CS)}KS(kt);var GS="firebase",qS="10.7.0";/**
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
 */kt.registerVersion(GS,qS,"app-compat");const YS={apiKey:"AIzaSyDzSTdaD4V0TAlXsE9lwjA_A-IqPclA9Vw",authDomain:"runtime-terror-website-a1313.firebaseapp.com",projectId:"runtime-terror-website-a1313",storageBucket:"runtime-terror-website-a1313.appspot.com",messagingSenderId:"768147262512",appId:"1:768147262512:web:a9d392e05065d4f9bef1f5",measurementId:"G-XWVEVEJGE1"};kt.initializeApp(YS);const QS=(t,e)=>(console.log(t,e),kt.auth().createUserWithEmailAndPassword(t,e)),JS=(t,e)=>kt.auth().signInWithEmailAndPassword(t,e),XS=()=>kt.auth().signOut(),ZS=()=>{const[t,e]=k.useState(null);return k.useEffect(()=>kt.auth().onAuthStateChanged(r=>{console.log("user",r),e(r)}),[]),t};function ek({onSignIn:t,onSignUp:e,onSignOut:n,currentUser:r}){const[i,o]=k.useState(""),[s,a]=k.useState(""),l=Su(),[u,d]=k.useState(!1),f=()=>{l("/")},g=()=>{console.log(r),d(!0)},v=()=>{d(!1)},y=()=>{t(i,s),console.log("sign in"),v()},_=()=>{n(),console.log("sign out"),v()},x=()=>{e(i,s),console.log("sign out"),v()},h=p=>{o(p.target.value)},c=p=>{a(p.target.value)};return m.jsxs("div",{children:[m.jsxs("div",{className:"flex w-full justify-between border-black border-b-2 px-16 py-8 mb-8",children:[m.jsx("div",{className:"ml-16 cursor-pointer",onClick:f,children:m.jsx("p",{className:"text-4xl",children:"Runtime Terror"})}),m.jsx("button",{className:"text-2xl border-2 border-black bg-slate-100 p-2 rounded-lg mr-16 hover:scale-110 cursor-pointer hover:bg-slate-200 transition-all duration-300",onClick:g,children:r?"Log Out":"Sign In"})]}),u&&m.jsxs("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[m.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),m.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:m.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:m.jsx("div",{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:m.jsxs("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[m.jsx("button",{className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800",onClick:v,children:"X"}),m.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:m.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})}),m.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),m.jsx("div",{className:"mt-2",children:m.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:i,onChange:h,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),m.jsxs("div",{children:[m.jsx("div",{className:"flex items-center justify-between",children:m.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"})}),m.jsx("div",{className:"mt-2",children:m.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:s,onChange:c,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),m.jsxs("div",{className:"flex my-8 gap-2",children:[m.jsx("button",{type:"submit",onClick:y,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign In"}),m.jsx("button",{type:"submit",onClick:x,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign Up"}),m.jsx("button",{onClick:_,className:"flex w-full justify-center rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",children:"Sign Out"})]})]})]})})})})]})]})}const ro=({name:t,picture:e,to:n,major:r,hometown:i,dreamjob:o})=>{const s=Su(),a=()=>{s(n)};return m.jsxs("div",{className:"h-full bg-slate-100 rounded-xl flex flex-col flex-grow hover:scale-105 cursor-pointer hover:bg-slate-200 transition-all duration-300 w-full",onClick:a,children:[m.jsxs("div",{className:"py-4 px-8 flex items-center",children:[m.jsx("img",{src:e,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"}),m.jsxs("p",{className:"text-lg pl-8",children:[m.jsx("em",{children:"Major:"})," ",r,m.jsx("br",{}),m.jsx("em",{children:"Hometown:"})," ",i,m.jsx("br",{}),m.jsx("em",{children:"Dream Job:"})," ",o]})]}),m.jsxs("div",{className:"pl-8 pb-8",children:[m.jsx("h3",{className:"text-3xl",children:t}),m.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]})},Lm="/runtime-terror-website/assets/danny-b221f444.jpg",Dm="/runtime-terror-website/assets/profilePic-f89f62fe.png",bm="/runtime-terror-website/assets/image4-32e48271.png",Mm="/runtime-terror-website/assets/cover_pic-5da812ef.png",va={major:"CSE",hometown:"Iowa City, IA",dreamjob:"Photographer for Redbull"},ya={major:"EE",hometown:"Cedar Rapids, IA",dreamjob:"A spy"},wa={major:"CSE",hometown:"Iowa City, IA",dreamjob:"Dance Choreographer"},_a={major:"CSE",hometown:"Frankfort, IL",dreamjob:"Interior Designer"};function tk(){return m.jsx("div",{className:"flex justify-center items-center px-40",children:m.jsxs("div",{className:"grid grid-cols-2 gap-8 justify-center justify-items-center",children:[m.jsx(ro,{name:"Danny Bodin",picture:Lm,to:"/danny",major:va.major,hometown:va.hometown,dreamjob:va.dreamjob}),m.jsx(ro,{name:"Jordin Eicher",picture:bm,to:"/jordin",major:ya.major,hometown:ya.hometown,dreamjob:ya.dreamjob}),m.jsx(ro,{name:"Addie Schroeder",picture:Mm,to:"/addie",major:wa.major,hometown:wa.hometown,dreamjob:wa.dreamjob}),m.jsx(ro,{name:"Nina Baffo",picture:Dm,to:"/nina",major:_a.major,hometown:_a.hometown,dreamjob:_a.dreamjob})]})})}const nk=(t,e,n)=>{const r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},rk=(t,e)=>{const n=window.document.getElementById(t);n&&e.removeChild(n)},xs=({id:t})=>(k.useEffect(()=>{if(!window)return;const e=window.document;return e.getElementById("commento")&&nk("https://cdn.commento.io/js/commento.js","commento-script",e.body),()=>rk("commento-script",e.body)},[t]),m.jsx("div",{id:"commento"})),ik=({items:t})=>{const e=k.useRef(null);return k.useEffect(()=>{const n=()=>{const{scrollLeft:i,scrollWidth:o,clientWidth:s}=e.current;i>o-s-10&&(e.current.scrollLeft=0)},r=e.current;return r.addEventListener("scroll",n),()=>r.removeEventListener("scroll",n)},[]),m.jsxs("div",{style:{overflowX:"auto",whiteSpace:"nowrap"},ref:e,children:[t.map((n,r)=>m.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:m.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px",objectFit:"cover"}})},r)),t.map((n,r)=>m.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:m.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px",objectFit:"cover"}})},`duplicate-${r}`))]})},ok="/runtime-terror-website/assets/d1-1eeb6b55.jpeg",sk="/runtime-terror-website/assets/d2-49d3e7bb.jpg",ak="/runtime-terror-website/assets/d3-6f29855b.jpeg",lk="/runtime-terror-website/assets/d4-7cb0dbeb.jpeg";function uk(){const t=[{src:ok,alt:"Fishing with Cassidy"},{src:sk,alt:"My Family"},{src:ak,alt:"Trout Fishing"},{src:lk,alt:"Snowboarding with Cassidy"}];return m.jsxs("div",{children:[m.jsxs("div",{className:"flex px-40",children:[m.jsxs("div",{className:"bg-slate-100 rounded-xl flex flex-col flex-grow",children:[m.jsx("div",{className:"p-8 flex items-center min-w-max",children:m.jsx("img",{src:Lm,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"})}),m.jsxs("div",{className:"pl-8 pb-8",children:[m.jsx("h3",{className:"text-3xl",children:"Danny B."}),m.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]}),m.jsx("div",{className:"my-4 mx-8",children:m.jsxs("p",{children:["Hello! I am a senior majoring in CSE and minoring in Business Administration. I am from Iowa City so this is my real home! As a CSE major I hope to get a job in software development. I have some experience so far with web development in the University of Iowa IT department, developing for Prof. Stump on his StarExec project, and developing a time tracking app for All American Concrete. ",m.jsx("br",{}),m.jsx("br",{}),"Outside of school I am happily married to my wife Cassidy, we have been married for 1.5 years! In my free time I enjoy golfing, fishing and snowboarding. Since I am from the area I also spend a lot of time with my family. ",m.jsx("br",{}),m.jsx("br",{}),"SDG"]})})]}),m.jsx("div",{className:"w-full bg-slate-100 py-16 mt-16",children:m.jsx(ik,{items:t})}),m.jsx("div",{className:"my-8 mx-40",children:m.jsx(xs,{id:1})})]})}const Wd="/runtime-terror-website/assets/image1-c760ea26.png",ck="/runtime-terror-website/assets/image2-62021c75.png",dk="/runtime-terror-website/assets/tech-490d6e4d.jpg",fk=({images:t})=>{const[e,n]=k.useState(0),r=s=>{n(s)},i=()=>{r(e-1)},o=()=>{r(e+1)};return m.jsxs("div",{className:"slideshow-container",children:[m.jsx("div",{className:"slides",style:{transform:`translateX(${-e*100}%)`},children:t.map((s,a)=>m.jsx("div",{className:"slide",children:m.jsx("img",{src:s,alt:`Image ${a+1}`})},a))}),m.jsx("button",{className:"prev",onClick:i,children:"❮"}),m.jsx("button",{className:"next",onClick:o,children:"❯"})]})},hk=()=>{const t=[bm,ck,Wd,dk];return m.jsxs("div",{className:"profile-page body",children:[m.jsxs("header",{className:"header",children:[m.jsx("div",{className:"profile-picture",children:m.jsx("img",{src:Wd,alt:"Profile"})}),m.jsxs("div",{className:"header-text",children:[m.jsx("h1",{children:m.jsx("strong",{children:"Jordin Eicher"})}),m.jsx("p",{children:m.jsx("i",{children:"AKA Linux Wizard"})})]})]}),m.jsxs("section",{className:"about-me",children:[m.jsx("h2",{className:"h2",children:"About Me"}),m.jsx("p",{className:"p",children:m.jsx("i",{children:"I am an Electrical Engineering major at the University of Iowa with focus in IoT. I have interned at Collins Aerospace in the Communications Hardware department and will start full-time as a Hardware Design Engineer following graduation. In my freetime, I enjoy watching MMA, learning history and philosophy, tinkering with electronics, and running."})})]}),m.jsxs("section",{className:"skills",children:[m.jsx("h2",{children:"Favorite Quote"}),m.jsx("ul",{className:"ul",children:m.jsx("li",{className:"li",children:m.jsx("i",{children:`"All the time people ask me, 'Brother, what are you proud of?', I say, I am very proud of... I never give up." - Khabib Nurmagomedov`})})})]}),m.jsxs("section",{className:"projects",children:[m.jsx("h1",{children:"Image1-3: Hiking, Image4: Tech stuff"}),m.jsx(fk,{images:t})]}),m.jsxs("section",{className:"contact",children:[m.jsx("h2",{children:"Contact"}),m.jsx("div",{children:m.jsxs("dl",{children:[m.jsx("dt",{children:"Personal Email:"}),m.jsx("dd",{children:m.jsx("a",{href:"mailto:jayike1010@gmail.com",children:"jayike1010@gmail.com"})}),m.jsx("dt",{children:"LinkedIn:"}),m.jsx("dd",{children:m.jsx("a",{href:"https://www.linkedin.com/in/jordin-eicher",target:"_blank",children:"linkedin.com/in/jordin-eicher"})}),m.jsx("dt",{children:"GitHub:"}),m.jsx("dd",{children:m.jsx("a",{href:"https://www.github.com/jayike",target:"_blank",children:"github.com/jayike"})})]})})]}),m.jsx("div",{className:"my-8 mx-40",children:m.jsx(xs,{id:3})}),m.jsx("footer",{children:m.jsx("p",{children:"© 2023 Runtime Terror. All rights reserved."})})]})};const pk="/runtime-terror-website/assets/kev-77fe69f5.jpeg",mk="/runtime-terror-website/assets/roomies-5768ac1f.jpeg",gk="/runtime-terror-website/assets/dance-a84d09bc.jpeg";function vk(){return m.jsxs("div",{style:{backgroundColor:"lightgrey"},children:[m.jsx("div",{style:{backgroundColor:"lightblue"},children:m.jsxs("h1",{class:"text-3xl text-center font-bold",children:[m.jsx("br",{})," Addie Schroeder ",m.jsx("br",{})]})}),m.jsxs("div",{className:"split-container",children:[m.jsx("div",{className:"left-column margin",children:m.jsx("div",{children:m.jsx("img",{src:Mm,alt:"Profile Pic",style:{width:"250px"}})})}),m.jsx("div",{className:"margin",children:m.jsxs("p",{children:[m.jsx("h2",{class:"font-bold",children:"A little about myself:"}),m.jsx("p",{class:"text-l",className:"right-column paragraph",style:{backgroundColor:"lightBlue"},children:"Hi! My name is Addie. I am a dedicated student at the University of Iowa, majoring in computer science and engineering while also pursuing a minor in mathematics. In addition to my academic pursuits, I spent the last four years representing the university as a member of the Iowa dance team. Outside of my studies, I am passionate about dance, and though I no longer invest as much time on the dance team, I channel that passion into teaching dance to kids at a local studio. Beyond academia and dance, my interests extend to spending quality time with friends and family, indulging in my love for travel, and enjoying the company of my cat, Kevin."})]})})]}),m.jsxs("div",{className:"image-row",style:{backgroundColor:"lightGrey"},children:[m.jsx("img",{src:pk,alt:"Kev",className:"image border"}),m.jsx("img",{src:mk,alt:"Roomies",className:"image"}),m.jsx("img",{src:gk,alt:"Dance",className:"image"})]}),m.jsx("div",{className:"my-8 mx-40",children:m.jsx(xs,{id:2})})]})}const yk="/runtime-terror-website/assets/bahamas-394d8819.jpeg",wk="/runtime-terror-website/assets/family-c98e45d5.jpeg",_k="/runtime-terror-website/assets/puppy-5f837944.jpeg";function Ik(){return m.jsxs("div",{children:[m.jsxs("div",{style:{backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[m.jsx("p",{style:{fontWeight:"bold",fontSize:"25px",marginBottom:"300px"},children:"Nina Baffo"}),m.jsx("img",{src:Dm,style:{width:"250px"}}),m.jsx("p",{style:{marginLeft:"1cm",fontWeight:"bold",fontSize:"17px"},children:"About me:"}),m.jsx("p",{style:{backgroundColor:"lightpink",padding:"10px",borderRadius:"5px",marginLeft:"1cm",marginRight:"1cm",marginBottom:"1.5cm",fontSize:"17px"},children:"Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering. I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. I can't wait to see where my career takes me in the near future! "})]}),m.jsxs("div",{style:{backgroundColor:"lavender",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[m.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[m.jsx("img",{src:_k,style:{width:"300px",marginRight:"1cm",marginBottom:"1cm"}}),m.jsx("p",{style:{fontSize:"17px"},children:"This is my puppy, his name is Benny and he just turned 8 months old. He is the best dog in the world, I take him with me everywhere."})]}),m.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[m.jsx("img",{src:wk,style:{width:"300px",marginRight:"1cm",marginBottom:"0.5cm"}}),m.jsx("p",{style:{fontSize:"17px"},children:"Pictured here is me, my mom, and sisters at an Iowa game this year. They are my best friends and I would do anything for them. I love my family very much."})]}),m.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[m.jsx("img",{src:yk,style:{width:"800px",marginRight:"1cm",marginBottom:"1cm"}}),m.jsx("p",{style:{fontSize:"17px"},children:"This is a picture of when I went to the Bahamas. I love traveling to new places and expanding my knowledge about different areas of the world. "})]})]}),m.jsx("div",{className:"my-8 mx-40",children:m.jsx(xs,{id:3})})]})}function Ek(){const t=ZS(),e=async(o,s)=>{try{console.log("Signing up..."+o+" "+s),await QS(o,s)}catch(a){console.error("Error signing up:",a)}},n=async(o,s)=>{try{await JS(o,s)}catch(a){console.error("Error signing in:",a)}},r=async()=>{try{await XS()}catch(o){console.error("Error signing out:",o)}},i=()=>{const o=ws();return t===void 0?null:(console.log(t),t?m.jsx(e0,{}):m.jsx(Zy,{to:"/",replace:!0,state:{from:o}}))};return m.jsxs(i0,{basename:"/runtime-terror-website/",children:[m.jsx(ek,{onSignIn:n,onSignOut:r,onSignUp:e,currentUser:t}),m.jsxs(n0,{children:[m.jsx(ln,{path:"/",element:m.jsx(tk,{})}),m.jsxs(ln,{element:m.jsx(i,{}),children:[m.jsx(ln,{path:"/Danny",element:m.jsx(uk,{})}),m.jsx(ln,{path:"/Jordin",element:m.jsx(hk,{})}),m.jsx(ln,{path:"/Addie",element:m.jsx(vk,{})}),m.jsx(ln,{path:"/Nina",element:m.jsx(Ik,{})})]})]})]})}Ia.createRoot(document.getElementById("root")).render(m.jsx(ef.StrictMode,{children:m.jsx(Ek,{})}));
