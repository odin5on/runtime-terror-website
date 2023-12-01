function bm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Mm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vd={exports:{}},to={},$d={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Um=Symbol.for("react.portal"),jm=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),zm=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Wm=Symbol.for("react.suspense"),Hm=Symbol.for("react.memo"),Km=Symbol.for("react.lazy"),Yu=Symbol.iterator;function Gm(t){return t===null||typeof t!="object"?null:(t=Yu&&t[Yu]||t["@@iterator"],typeof t=="function"?t:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Kd={};function pr(t,e,n){this.props=t,this.context=e,this.refs=Kd,this.updater=n||Wd}pr.prototype.isReactComponent={};pr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gd(){}Gd.prototype=pr.prototype;function kl(t,e,n){this.props=t,this.context=e,this.refs=Kd,this.updater=n||Wd}var Tl=kl.prototype=new Gd;Tl.constructor=kl;Hd(Tl,pr.prototype);Tl.isPureReactComponent=!0;var Qu=Array.isArray,qd=Object.prototype.hasOwnProperty,Cl={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qd.call(e,r)&&!Yd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ci,type:t,key:s,ref:o,props:i,_owner:Cl.current}}function qm(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function Ym(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ju=/\/+/g;function bo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ym(""+t.key):e.toString(36)}function ss(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ci:case Um:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bo(o,0):r,Qu(i)?(n="",t!=null&&(n=t.replace(Ju,"$&/")+"/"),ss(i,e,n,"",function(u){return u})):i!=null&&(Pl(i)&&(i=qm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ju,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qu(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bo(s,a);o+=ss(s,e,n,l,i)}else if(l=Gm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bo(s,a++),o+=ss(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fi(t,e,n){if(t==null)return t;var r=[],i=0;return ss(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Qm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},os={transition:null},Jm={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:os,ReactCurrentOwner:Cl};D.Children={map:Fi,forEach:function(t,e,n){Fi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fi(t,function(){e++}),e},toArray:function(t){return Fi(t,function(e){return e})||[]},only:function(t){if(!Pl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=pr;D.Fragment=jm;D.Profiler=zm;D.PureComponent=kl;D.StrictMode=Fm;D.Suspense=Wm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qd.call(e,l)&&!Yd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ci,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:Vm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bm,_context:t},t.Consumer=t};D.createElement=Qd;D.createFactory=function(t){var e=Qd.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:$m,render:t}};D.isValidElement=Pl;D.lazy=function(t){return{$$typeof:Km,_payload:{_status:-1,_result:t},_init:Qm}};D.memo=function(t,e){return{$$typeof:Hm,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=os.transition;os.transition={};try{t()}finally{os.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return we.current.useCallback(t,e)};D.useContext=function(t){return we.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return we.current.useDeferredValue(t)};D.useEffect=function(t,e){return we.current.useEffect(t,e)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return we.current.useMemo(t,e)};D.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};D.useRef=function(t){return we.current.useRef(t)};D.useState=function(t){return we.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";$d.exports=D;var k=$d.exports;const Jd=Mm(k),Xm=bm({__proto__:null,default:Jd},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=k,eg=Symbol.for("react.element"),tg=Symbol.for("react.fragment"),ng=Object.prototype.hasOwnProperty,rg=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ig={key:!0,ref:!0,__self:!0,__source:!0};function Xd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ng.call(e,r)&&!ig.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eg,type:t,key:s,ref:o,props:i,_owner:rg.current}}to.Fragment=tg;to.jsx=Xd;to.jsxs=Xd;Vd.exports=to;var g=Vd.exports,ya={},Zd={exports:{}},De={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,A){var O=C.length;C.push(A);e:for(;0<O;){var J=O-1>>>1,se=C[J];if(0<i(se,A))C[J]=A,C[O]=se,O=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var J=0,se=C.length,Ui=se>>>1;J<Ui;){var rn=2*(J+1)-1,Do=C[rn],sn=rn+1,ji=C[sn];if(0>i(Do,O))sn<se&&0>i(ji,Do)?(C[J]=ji,C[sn]=O,J=sn):(C[J]=Do,C[rn]=O,J=rn);else if(sn<se&&0>i(ji,O))C[J]=ji,C[sn]=O,J=sn;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function w(C){if(_=!1,p(C),!y)if(n(l)!==null)y=!0,Oo(S);else{var A=n(u);A!==null&&Lo(w,A.startTime-C)}}function S(C,A){y=!1,_&&(_=!1,h(N),N=-1),v=!0;var O=m;try{for(p(A),f=n(l);f!==null&&(!(f.expirationTime>A)||C&&!$e());){var J=f.callback;if(typeof J=="function"){f.callback=null,m=f.priorityLevel;var se=J(f.expirationTime<=A);A=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),p(A)}else r(l);f=n(l)}if(f!==null)var Ui=!0;else{var rn=n(u);rn!==null&&Lo(w,rn.startTime-A),Ui=!1}return Ui}finally{f=null,m=O,v=!1}}var P=!1,R=null,N=-1,z=5,L=-1;function $e(){return!(t.unstable_now()-L<z)}function Sr(){if(R!==null){var C=t.unstable_now();L=C;var A=!0;try{A=R(!0,C)}finally{A?kr():(P=!1,R=null)}}else P=!1}var kr;if(typeof c=="function")kr=function(){c(Sr)};else if(typeof MessageChannel<"u"){var qu=new MessageChannel,Dm=qu.port2;qu.port1.onmessage=Sr,kr=function(){Dm.postMessage(null)}}else kr=function(){x(Sr,0)};function Oo(C){R=C,P||(P=!0,kr())}function Lo(C,A){N=x(function(){C(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,Oo(S))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var O=m;m=A;try{return C()}finally{m=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return A()}finally{m=O}},t.unstable_scheduleCallback=function(C,A,O){var J=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?J+O:J):O=J,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=O+se,C={id:d++,callback:A,priorityLevel:C,startTime:O,expirationTime:se,sortIndex:-1},O>J?(C.sortIndex=O,e(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Lo(w,O-J))):(C.sortIndex=se,e(l,C),y||v||(y=!0,Oo(S))),C},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(C){var A=m;return function(){var O=m;m=A;try{return C.apply(this,arguments)}finally{m=O}}}})(tf);ef.exports=tf;var sg=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=k,Le=sg;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,ei={};function xn(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(ei[t]=e,t=0;t<e.length;t++)rf.add(e[t])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Zu={};function ag(t){return wa.call(Zu,t)?!0:wa.call(Xu,t)?!1:og.test(t)?Zu[t]=!0:(Xu[t]=!0,!1)}function lg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ug(t,e,n,r){if(e===null||typeof e>"u"||lg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rl=/[\-:]([a-z])/g;function Nl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rl,Nl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rl,Nl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rl,Nl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function xl(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ug(e,n,i,r)&&(n=null),r||i===null?ag(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var St=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),_a=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),of=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),ec=Symbol.iterator;function Tr(t){return t===null||typeof t!="object"?null:(t=ec&&t[ec]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,Mo;function Mr(t){if(Mo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mo=e&&e[1]||""}return`
`+Mo+t}var Uo=!1;function jo(t,e){if(!t||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mr(t):""}function cg(t){switch(t.tag){case 5:return Mr(t.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return t=jo(t.type,!1),t;case 11:return t=jo(t.type.render,!1),t;case 1:return t=jo(t.type,!0),t;default:return""}}function Sa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jn:return"Fragment";case Un:return"Portal";case _a:return"Profiler";case Al:return"StrictMode";case Ea:return"Suspense";case Ia:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case of:return(t.displayName||"Context")+".Consumer";case sf:return(t._context.displayName||"Context")+".Provider";case Ol:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ll:return e=t.displayName||null,e!==null?e:Sa(t.type)||"Memo";case Nt:e=t._payload,t=t._init;try{return Sa(t(e))}catch{}}return null}function dg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(e);case 8:return e===Al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fg(t){var e=lf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bi(t){t._valueTracker||(t._valueTracker=fg(t))}function uf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Es(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ka(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cf(t,e){e=e.checked,e!=null&&xl(t,"checked",e,!1)}function Ta(t,e){cf(t,e);var n=Gt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ca(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ca(t,e.type,Gt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ca(t,e,n){(e!=="number"||Es(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ur=Array.isArray;function Qn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ur(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gt(n)}}function df(t,e){var n=Gt(e.value),r=Gt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ic(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ff(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ff(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vi,hf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ti(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(t){hg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vr[e]=Vr[t]})});function pf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vr.hasOwnProperty(t)&&Vr[t]?(""+e).trim():e+"px"}function mf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(t,e){if(e){if(pg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function xa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Dl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,Jn=null,Xn=null;function sc(t){if(t=Ni(t)){if(typeof Oa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=oo(e),Oa(t.stateNode,t.type,e))}}function gf(t){Jn?Xn?Xn.push(t):Xn=[t]:Jn=t}function vf(){if(Jn){var t=Jn,e=Xn;if(Xn=Jn=null,sc(t),e)for(t=0;t<e.length;t++)sc(e[t])}}function yf(t,e){return t(e)}function wf(){}var Fo=!1;function _f(t,e,n){if(Fo)return t(e,n);Fo=!0;try{return yf(t,e,n)}finally{Fo=!1,(Jn!==null||Xn!==null)&&(wf(),vf())}}function ni(t,e){var n=t.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var La=!1;if(yt)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){La=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{La=!1}function mg(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var $r=!1,Is=null,Ss=!1,Da=null,gg={onError:function(t){$r=!0,Is=t}};function vg(t,e,n,r,i,s,o,a,l){$r=!1,Is=null,mg.apply(gg,arguments)}function yg(t,e,n,r,i,s,o,a,l){if(vg.apply(this,arguments),$r){if($r){var u=Is;$r=!1,Is=null}else throw Error(E(198));Ss||(Ss=!0,Da=u)}}function An(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ef(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oc(t){if(An(t)!==t)throw Error(E(188))}function wg(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return oc(i),t;if(s===r)return oc(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function If(t){return t=wg(t),t!==null?Sf(t):null}function Sf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sf(t);if(e!==null)return e;t=t.sibling}return null}var kf=Le.unstable_scheduleCallback,ac=Le.unstable_cancelCallback,_g=Le.unstable_shouldYield,Eg=Le.unstable_requestPaint,X=Le.unstable_now,Ig=Le.unstable_getCurrentPriorityLevel,bl=Le.unstable_ImmediatePriority,Tf=Le.unstable_UserBlockingPriority,ks=Le.unstable_NormalPriority,Sg=Le.unstable_LowPriority,Cf=Le.unstable_IdlePriority,no=null,ot=null;function kg(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(no,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Pg,Tg=Math.log,Cg=Math.LN2;function Pg(t){return t>>>=0,t===0?32:31-(Tg(t)/Cg|0)|0}var $i=64,Wi=4194304;function jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ts(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jr(a):(s&=o,s!==0&&(r=jr(s)))}else o=n&~i,o!==0?r=jr(o):s!==0&&(r=jr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Rg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Rg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pf(){var t=$i;return $i<<=1,!($i&4194240)&&($i=64),t}function zo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function xg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ml(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Rf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nf,Ul,xf,Af,Of,Ma=!1,Hi=[],Ut=null,jt=null,Ft=null,ri=new Map,ii=new Map,At=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(t,e){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(e.pointerId)}}function Pr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ni(e),e!==null&&Ul(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Og(t,e,n,r,i){switch(e){case"focusin":return Ut=Pr(Ut,t,e,n,r,i),!0;case"dragenter":return jt=Pr(jt,t,e,n,r,i),!0;case"mouseover":return Ft=Pr(Ft,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ri.set(s,Pr(ri.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ii.set(s,Pr(ii.get(s)||null,t,e,n,r,i)),!0}return!1}function Lf(t){var e=cn(t.target);if(e!==null){var n=An(e);if(n!==null){if(e=n.tag,e===13){if(e=Ef(n),e!==null){t.blockedOn=e,Of(t.priority,function(){xf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function as(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ua(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return e=Ni(n),e!==null&&Ul(e),t.blockedOn=n,!1;e.shift()}return!0}function uc(t,e,n){as(t)&&n.delete(e)}function Lg(){Ma=!1,Ut!==null&&as(Ut)&&(Ut=null),jt!==null&&as(jt)&&(jt=null),Ft!==null&&as(Ft)&&(Ft=null),ri.forEach(uc),ii.forEach(uc)}function Rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ma||(Ma=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Lg)))}function si(t){function e(i){return Rr(i,t)}if(0<Hi.length){Rr(Hi[0],t);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ut!==null&&Rr(Ut,t),jt!==null&&Rr(jt,t),Ft!==null&&Rr(Ft,t),ri.forEach(e),ii.forEach(e),n=0;n<At.length;n++)r=At[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&At.shift()}var Zn=St.ReactCurrentBatchConfig,Cs=!0;function Dg(t,e,n,r){var i=U,s=Zn.transition;Zn.transition=null;try{U=1,jl(t,e,n,r)}finally{U=i,Zn.transition=s}}function bg(t,e,n,r){var i=U,s=Zn.transition;Zn.transition=null;try{U=4,jl(t,e,n,r)}finally{U=i,Zn.transition=s}}function jl(t,e,n,r){if(Cs){var i=Ua(t,e,n,r);if(i===null)Qo(t,e,r,Ps,n),lc(t,r);else if(Og(i,t,e,n,r))r.stopPropagation();else if(lc(t,r),e&4&&-1<Ag.indexOf(t)){for(;i!==null;){var s=Ni(i);if(s!==null&&Nf(s),s=Ua(t,e,n,r),s===null&&Qo(t,e,r,Ps,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qo(t,e,r,null,n)}}var Ps=null;function Ua(t,e,n,r){if(Ps=null,t=Dl(r),t=cn(t),t!==null)if(e=An(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ef(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ps=t,null}function Df(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ig()){case bl:return 1;case Tf:return 4;case ks:case Sg:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Lt=null,Fl=null,ls=null;function bf(){if(ls)return ls;var t,e=Fl,n=e.length,r,i="value"in Lt?Lt.value:Lt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ls=i.slice(t,1<r?1-r:void 0)}function us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ki(){return!0}function cc(){return!1}function be(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ki:cc,this.isPropagationStopped=cc,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=be(mr),Ri=K({},mr,{view:0,detail:0}),Mg=be(Ri),Bo,Vo,Nr,ro=K({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nr&&(Nr&&t.type==="mousemove"?(Bo=t.screenX-Nr.screenX,Vo=t.screenY-Nr.screenY):Vo=Bo=0,Nr=t),Bo)},movementY:function(t){return"movementY"in t?t.movementY:Vo}}),dc=be(ro),Ug=K({},ro,{dataTransfer:0}),jg=be(Ug),Fg=K({},Ri,{relatedTarget:0}),$o=be(Fg),zg=K({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=be(zg),Vg=K({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$g=be(Vg),Wg=K({},mr,{data:0}),fc=be(Wg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gg[t])?!!e[t]:!1}function Bl(){return qg}var Yg=K({},Ri,{key:function(t){if(t.key){var e=Hg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(t){return t.type==="keypress"?us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qg=be(Yg),Jg=K({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=be(Jg),Xg=K({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Zg=be(Xg),ev=K({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=be(ev),nv=K({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=be(nv),iv=[9,13,27,32],Vl=yt&&"CompositionEvent"in window,Wr=null;yt&&"documentMode"in document&&(Wr=document.documentMode);var sv=yt&&"TextEvent"in window&&!Wr,Mf=yt&&(!Vl||Wr&&8<Wr&&11>=Wr),pc=String.fromCharCode(32),mc=!1;function Uf(t,e){switch(t){case"keyup":return iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fn=!1;function ov(t,e){switch(t){case"compositionend":return jf(e);case"keypress":return e.which!==32?null:(mc=!0,pc);case"textInput":return t=e.data,t===pc&&mc?null:t;default:return null}}function av(t,e){if(Fn)return t==="compositionend"||!Vl&&Uf(t,e)?(t=bf(),ls=Fl=Lt=null,Fn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mf&&e.locale!=="ko"?null:e.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lv[t.type]:e==="textarea"}function Ff(t,e,n,r){gf(r),e=Rs(e,"onChange"),0<e.length&&(n=new zl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,oi=null;function uv(t){Qf(t,0)}function io(t){var e=Vn(t);if(uf(e))return t}function cv(t,e){if(t==="change")return e}var zf=!1;if(yt){var Wo;if(yt){var Ho="oninput"in document;if(!Ho){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),Ho=typeof vc.oninput=="function"}Wo=Ho}else Wo=!1;zf=Wo&&(!document.documentMode||9<document.documentMode)}function yc(){Hr&&(Hr.detachEvent("onpropertychange",Bf),oi=Hr=null)}function Bf(t){if(t.propertyName==="value"&&io(oi)){var e=[];Ff(e,oi,t,Dl(t)),_f(uv,e)}}function dv(t,e,n){t==="focusin"?(yc(),Hr=e,oi=n,Hr.attachEvent("onpropertychange",Bf)):t==="focusout"&&yc()}function fv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(oi)}function hv(t,e){if(t==="click")return io(e)}function pv(t,e){if(t==="input"||t==="change")return io(e)}function mv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:mv;function ai(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _c(t,e){var n=wc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function Vf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $f(){for(var t=window,e=Es();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Es(t.document)}return e}function $l(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gv(t){var e=$f(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vf(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_c(n,s);var o=_c(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vv=yt&&"documentMode"in document&&11>=document.documentMode,zn=null,ja=null,Kr=null,Fa=!1;function Ec(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||zn==null||zn!==Es(r)||(r=zn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&ai(Kr,r)||(Kr=r,r=Rs(ja,"onSelect"),0<r.length&&(e=new zl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zn)))}function Gi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bn={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},Ko={},Wf={};yt&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function so(t){if(Ko[t])return Ko[t];if(!Bn[t])return t;var e=Bn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wf)return Ko[t]=e[n];return t}var Hf=so("animationend"),Kf=so("animationiteration"),Gf=so("animationstart"),qf=so("transitionend"),Yf=new Map,Ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(t,e){Yf.set(t,e),xn(e,[t])}for(var Go=0;Go<Ic.length;Go++){var qo=Ic[Go],yv=qo.toLowerCase(),wv=qo[0].toUpperCase()+qo.slice(1);Xt(yv,"on"+wv)}Xt(Hf,"onAnimationEnd");Xt(Kf,"onAnimationIteration");Xt(Gf,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(qf,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Sc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yg(r,e,void 0,t),t.currentTarget=null}function Qf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Sc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Sc(i,a,u),s=l}}}if(Ss)throw t=Da,Ss=!1,Da=null,t}function B(t,e){var n=e[Wa];n===void 0&&(n=e[Wa]=new Set);var r=t+"__bubble";n.has(r)||(Jf(e,t,2,!1),n.add(r))}function Yo(t,e,n){var r=0;e&&(r|=4),Jf(n,t,r,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function li(t){if(!t[qi]){t[qi]=!0,rf.forEach(function(n){n!=="selectionchange"&&(_v.has(n)||Yo(n,!1,t),Yo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,Yo("selectionchange",!1,e))}}function Jf(t,e,n,r){switch(Df(e)){case 1:var i=Dg;break;case 4:i=bg;break;default:i=jl}n=i.bind(null,e,n,t),i=void 0,!La||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_f(function(){var u=s,d=Dl(n),f=[];e:{var m=Yf.get(t);if(m!==void 0){var v=zl,y=t;switch(t){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":v=Qg;break;case"focusin":y="focus",v=$o;break;case"focusout":y="blur",v=$o;break;case"beforeblur":case"afterblur":v=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Zg;break;case Hf:case Kf:case Gf:v=Bg;break;case qf:v=tv;break;case"scroll":v=Mg;break;case"wheel":v=rv;break;case"copy":case"cut":case"paste":v=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hc}var _=(e&4)!==0,x=!_&&t==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=ni(c,h),w!=null&&_.push(ui(c,w,p)))),x)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,d),f.push({event:m,listeners:_}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Aa&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[wt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?cn(y):null,y!==null&&(x=An(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=dc,w="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=hc,w="onPointerLeave",h="onPointerEnter",c="pointer"),x=v==null?m:Vn(v),p=y==null?m:Vn(y),m=new _(w,c+"leave",v,n,d),m.target=x,m.relatedTarget=p,w=null,cn(d)===u&&(_=new _(h,c+"enter",y,n,d),_.target=p,_.relatedTarget=x,w=_),x=w,v&&y)t:{for(_=v,h=y,c=0,p=_;p;p=bn(p))c++;for(p=0,w=h;w;w=bn(w))p++;for(;0<c-p;)_=bn(_),c--;for(;0<p-c;)h=bn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=bn(_),h=bn(h)}_=null}else _=null;v!==null&&kc(f,m,v,_,!1),y!==null&&x!==null&&kc(f,x,y,_,!0)}}e:{if(m=u?Vn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=cv;else if(gc(m))if(zf)S=pv;else{S=fv;var P=dv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=hv);if(S&&(S=S(t,u))){Ff(f,S,n,d);break e}P&&P(t,m,u),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ca(m,"number",m.value)}switch(P=u?Vn(u):window,t){case"focusin":(gc(P)||P.contentEditable==="true")&&(zn=P,ja=u,Kr=null);break;case"focusout":Kr=ja=zn=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Ec(f,n,d);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":Ec(f,n,d)}var R;if(Vl)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Fn?Uf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Mf&&n.locale!=="ko"&&(Fn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Fn&&(R=bf()):(Lt=d,Fl="value"in Lt?Lt.value:Lt.textContent,Fn=!0)),P=Rs(u,N),0<P.length&&(N=new fc(N,t,null,n,d),f.push({event:N,listeners:P}),R?N.data=R:(R=jf(n),R!==null&&(N.data=R)))),(R=sv?ov(t,n):av(t,n))&&(u=Rs(u,"onBeforeInput"),0<u.length&&(d=new fc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}Qf(f,e)})}function ui(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ni(t,n),s!=null&&r.unshift(ui(t,s,i)),s=ni(t,e),s!=null&&r.push(ui(t,s,i))),t=t.return}return r}function bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ni(n,s),l!=null&&o.unshift(ui(n,l,a))):i||(l=ni(n,s),l!=null&&o.push(ui(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ev=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function Tc(t){return(typeof t=="string"?t:""+t).replace(Ev,`
`).replace(Iv,"")}function Yi(t,e,n){if(e=Tc(e),Tc(t)!==e&&n)throw Error(E(425))}function Ns(){}var za=null,Ba=null;function Va(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(t){return Cc.resolve(null).then(t).catch(Tv)}:$a;function Tv(t){setTimeout(function(){throw t})}function Jo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),si(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);si(e)}function zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gr=Math.random().toString(36).slice(2),et="__reactFiber$"+gr,ci="__reactProps$"+gr,wt="__reactContainer$"+gr,Wa="__reactEvents$"+gr,Cv="__reactListeners$"+gr,Pv="__reactHandles$"+gr;function cn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wt]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pc(t);t!==null;){if(n=t[et])return n;t=Pc(t)}return e}t=n,n=t.parentNode}return null}function Ni(t){return t=t[et]||t[wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function oo(t){return t[ci]||null}var Ha=[],$n=-1;function Zt(t){return{current:t}}function V(t){0>$n||(t.current=Ha[$n],Ha[$n]=null,$n--)}function F(t,e){$n++,Ha[$n]=t.current,t.current=e}var qt={},ge=Zt(qt),ke=Zt(!1),_n=qt;function or(t,e){var n=t.type.contextTypes;if(!n)return qt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function xs(){V(ke),V(ge)}function Rc(t,e,n){if(ge.current!==qt)throw Error(E(168));F(ge,e),F(ke,n)}function Xf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,dg(t)||"Unknown",i));return K({},n,r)}function As(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qt,_n=ge.current,F(ge,t),F(ke,ke.current),!0}function Nc(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Xf(t,e,_n),r.__reactInternalMemoizedMergedChildContext=t,V(ke),V(ge),F(ge,t)):V(ke),F(ke,n)}var ct=null,ao=!1,Xo=!1;function Zf(t){ct===null?ct=[t]:ct.push(t)}function Rv(t){ao=!0,Zf(t)}function en(){if(!Xo&&ct!==null){Xo=!0;var t=0,e=U;try{var n=ct;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,ao=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),kf(bl,en),i}finally{U=e,Xo=!1}}return null}var Wn=[],Hn=0,Os=null,Ls=0,Me=[],Ue=0,En=null,dt=1,ft="";function on(t,e){Wn[Hn++]=Ls,Wn[Hn++]=Os,Os=t,Ls=e}function eh(t,e,n){Me[Ue++]=dt,Me[Ue++]=ft,Me[Ue++]=En,En=t;var r=dt;t=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var s=32-qe(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-qe(e)+i|n<<i|r,ft=s+t}else dt=1<<s|n<<i|r,ft=t}function Wl(t){t.return!==null&&(on(t,1),eh(t,1,0))}function Hl(t){for(;t===Os;)Os=Wn[--Hn],Wn[Hn]=null,Ls=Wn[--Hn],Wn[Hn]=null;for(;t===En;)En=Me[--Ue],Me[Ue]=null,ft=Me[--Ue],Me[Ue]=null,dt=Me[--Ue],Me[Ue]=null}var Oe=null,xe=null,$=!1,Ge=null;function th(t,e){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,xe=zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=En!==null?{id:dt,overflow:ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,xe=null,!0):!1;default:return!1}}function Ka(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ga(t){if($){var e=xe;if(e){var n=e;if(!xc(t,e)){if(Ka(t))throw Error(E(418));e=zt(n.nextSibling);var r=Oe;e&&xc(t,e)?th(r,n):(t.flags=t.flags&-4097|2,$=!1,Oe=t)}}else{if(Ka(t))throw Error(E(418));t.flags=t.flags&-4097|2,$=!1,Oe=t}}}function Ac(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function Qi(t){if(t!==Oe)return!1;if(!$)return Ac(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Va(t.type,t.memoizedProps)),e&&(e=xe)){if(Ka(t))throw nh(),Error(E(418));for(;e;)th(t,e),e=zt(e.nextSibling)}if(Ac(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Oe?zt(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=xe;t;)t=zt(t.nextSibling)}function ar(){xe=Oe=null,$=!1}function Kl(t){Ge===null?Ge=[t]:Ge.push(t)}var Nv=St.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ds=Zt(null),bs=null,Kn=null,Gl=null;function ql(){Gl=Kn=bs=null}function Yl(t){var e=Ds.current;V(Ds),t._currentValue=e}function qa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function er(t,e){bs=t,Gl=Kn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(Gl!==t)if(t={context:t,memoizedValue:e,next:null},Kn===null){if(bs===null)throw Error(E(308));Kn=t,bs.dependencies={lanes:0,firstContext:t}}else Kn=Kn.next=t;return e}var dn=null;function Ql(t){dn===null?dn=[t]:dn.push(t)}function rh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ql(e)):(n.next=i.next,i.next=n),e.interleaved=n,_t(t,r)}function _t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xt=!1;function Jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_t(t,n)}return i=r.interleaved,i===null?(e.next=e,Ql(r)):(e.next=i.next,i.next=e),r.interleaved=e,_t(t,n)}function cs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ml(t,n)}}function Oc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ms(t,e,n,r){var i=t.updateQueue;xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(m=e,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=K({},f,m);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sn|=o,t.lanes=o,t.memoizedState=f}}function Lc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var sh=new nf.Component().refs;function Ya(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lo={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),s=mt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(Ye(e,t,i,r),cs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=$t(t),s=mt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(Ye(e,t,i,r),cs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=$t(t),i=mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(Ye(e,t,r,n),cs(e,t,r))}};function Dc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ai(n,r)||!ai(i,s):!0}function oh(t,e,n){var r=!1,i=qt,s=e.contextType;return typeof s=="object"&&s!==null?s=ze(s):(i=Te(e)?_n:ge.current,r=e.contextTypes,s=(r=r!=null)?or(t,i):qt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lo.enqueueReplaceState(e,e.state,null)}function Qa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sh,Jl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ze(s):(s=Te(e)?_n:ge.current,i.context=or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ya(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lo.enqueueReplaceState(i,i.state,null),Ms(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===sh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ji(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mc(t){var e=t._init;return e(t._payload)}function ah(t){function e(h,c){if(t){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Wt(h,c),h.index=0,h.sibling=null,h}function s(h,c,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,w){return c===null||c.tag!==6?(c=sa(p,h.mode,w),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,w){var S=p.type;return S===jn?d(h,c,p.props.children,w,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Mc(S)===c.type)?(w=i(c,p.props),w.ref=xr(h,c,p),w.return=h,w):(w=gs(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,w)}function u(h,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=oa(p,h.mode,w),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,w,S){return c===null||c.tag!==7?(c=mn(p,h.mode,w,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sa(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zi:return p=gs(c.type,c.key,c.props,null,h.mode,p),p.ref=xr(h,null,c),p.return=h,p;case Un:return c=oa(c,h.mode,p),c.return=h,c;case Nt:var w=c._init;return f(h,w(c._payload),p)}if(Ur(c)||Tr(c))return c=mn(c,h.mode,p,null),c.return=h,c;Ji(h,c)}return null}function m(h,c,p,w){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:return p.key===S?l(h,c,p,w):null;case Un:return p.key===S?u(h,c,p,w):null;case Nt:return S=p._init,m(h,c,S(p._payload),w)}if(Ur(p)||Tr(p))return S!==null?null:d(h,c,p,w,null);Ji(h,p)}return null}function v(h,c,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,a(c,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zi:return h=h.get(w.key===null?p:w.key)||null,l(c,h,w,S);case Un:return h=h.get(w.key===null?p:w.key)||null,u(c,h,w,S);case Nt:var P=w._init;return v(h,c,p,P(w._payload),S)}if(Ur(w)||Tr(w))return h=h.get(p)||null,d(c,h,w,S,null);Ji(c,w)}return null}function y(h,c,p,w){for(var S=null,P=null,R=c,N=c=0,z=null;R!==null&&N<p.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=m(h,R,p[N],w);if(L===null){R===null&&(R=z);break}t&&R&&L.alternate===null&&e(h,R),c=s(L,c,N),P===null?S=L:P.sibling=L,P=L,R=z}if(N===p.length)return n(h,R),$&&on(h,N),S;if(R===null){for(;N<p.length;N++)R=f(h,p[N],w),R!==null&&(c=s(R,c,N),P===null?S=R:P.sibling=R,P=R);return $&&on(h,N),S}for(R=r(h,R);N<p.length;N++)z=v(R,h,N,p[N],w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=s(z,c,N),P===null?S=z:P.sibling=z,P=z);return t&&R.forEach(function($e){return e(h,$e)}),$&&on(h,N),S}function _(h,c,p,w){var S=Tr(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var P=S=null,R=c,N=c=0,z=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(z=R,R=null):z=R.sibling;var $e=m(h,R,L.value,w);if($e===null){R===null&&(R=z);break}t&&R&&$e.alternate===null&&e(h,R),c=s($e,c,N),P===null?S=$e:P.sibling=$e,P=$e,R=z}if(L.done)return n(h,R),$&&on(h,N),S;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,w),L!==null&&(c=s(L,c,N),P===null?S=L:P.sibling=L,P=L);return $&&on(h,N),S}for(R=r(h,R);!L.done;N++,L=p.next())L=v(R,h,N,L.value,w),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=s(L,c,N),P===null?S=L:P.sibling=L,P=L);return t&&R.forEach(function(Sr){return e(h,Sr)}),$&&on(h,N),S}function x(h,c,p,w){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===jn){if(P.tag===7){n(h,P.sibling),c=i(P,p.props.children),c.return=h,h=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Mc(S)===P.type){n(h,P.sibling),c=i(P,p.props),c.ref=xr(h,P,p),c.return=h,h=c;break e}n(h,P);break}else e(h,P);P=P.sibling}p.type===jn?(c=mn(p.props.children,h.mode,w,p.key),c.return=h,h=c):(w=gs(p.type,p.key,p.props,null,h.mode,w),w.ref=xr(h,c,p),w.return=h,h=w)}return o(h);case Un:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else e(h,c);c=c.sibling}c=oa(p,h.mode,w),c.return=h,h=c}return o(h);case Nt:return P=p._init,x(h,c,P(p._payload),w)}if(Ur(p))return y(h,c,p,w);if(Tr(p))return _(h,c,p,w);Ji(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=sa(p,h.mode,w),c.return=h,h=c),o(h)):n(h,c)}return x}var lr=ah(!0),lh=ah(!1),xi={},at=Zt(xi),di=Zt(xi),fi=Zt(xi);function fn(t){if(t===xi)throw Error(E(174));return t}function Xl(t,e){switch(F(fi,e),F(di,t),F(at,xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ra(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ra(e,t)}V(at),F(at,e)}function ur(){V(at),V(di),V(fi)}function uh(t){fn(fi.current);var e=fn(at.current),n=Ra(e,t.type);e!==n&&(F(di,t),F(at,n))}function Zl(t){di.current===t&&(V(at),V(di))}var W=Zt(0);function Us(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zo=[];function eu(){for(var t=0;t<Zo.length;t++)Zo[t]._workInProgressVersionPrimary=null;Zo.length=0}var ds=St.ReactCurrentDispatcher,ea=St.ReactCurrentBatchConfig,In=0,H=null,re=null,oe=null,js=!1,Gr=!1,hi=0,xv=0;function he(){throw Error(E(321))}function tu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function nu(t,e,n,r,i,s){if(In=s,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ds.current=t===null||t.memoizedState===null?Dv:bv,t=n(r,i),Gr){s=0;do{if(Gr=!1,hi=0,25<=s)throw Error(E(301));s+=1,oe=re=null,e.updateQueue=null,ds.current=Mv,t=n(r,i)}while(Gr)}if(ds.current=Fs,e=re!==null&&re.next!==null,In=0,oe=re=H=null,js=!1,e)throw Error(E(300));return t}function ru(){var t=hi!==0;return hi=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?H.memoizedState=oe=t:oe=oe.next=t,oe}function Be(){if(re===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=oe===null?H.memoizedState:oe.next;if(e!==null)oe=e,re=t;else{if(t===null)throw Error(E(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?H.memoizedState=oe=t:oe=oe.next=t}return oe}function pi(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((In&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,H.lanes|=d,Sn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qe(r,e.memoizedState)||(Se=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,H.lanes|=s,Sn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qe(s,e.memoizedState)||(Se=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ch(){}function dh(t,e){var n=H,r=Be(),i=e(),s=!Qe(r.memoizedState,i);if(s&&(r.memoizedState=i,Se=!0),r=r.queue,iu(ph.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,mi(9,hh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(E(349));In&30||fh(n,e,i)}return i}function fh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hh(t,e,n,r){e.value=n,e.getSnapshot=r,mh(e)&&gh(t)}function ph(t,e,n){return n(function(){mh(e)&&gh(t)})}function mh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function gh(t){var e=_t(t,1);e!==null&&Ye(e,t,1,-1)}function Uc(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:t},e.queue=t,t=t.dispatch=Lv.bind(null,H,t),[e.memoizedState,t]}function mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vh(){return Be().memoizedState}function fs(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=mi(1|e,n,void 0,r===void 0?null:r)}function uo(t,e,n,r){var i=Be();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&tu(r,o.deps)){i.memoizedState=mi(e,n,s,r);return}}H.flags|=t,i.memoizedState=mi(1|e,n,s,r)}function jc(t,e){return fs(8390656,8,t,e)}function iu(t,e){return uo(2048,8,t,e)}function yh(t,e){return uo(4,2,t,e)}function wh(t,e){return uo(4,4,t,e)}function _h(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eh(t,e,n){return n=n!=null?n.concat([t]):null,uo(4,4,_h.bind(null,e,t),n)}function su(){}function Ih(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kh(t,e,n){return In&21?(Qe(n,e)||(n=Pf(),H.lanes|=n,Sn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function Av(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{U=n,ea.transition=r}}function Th(){return Be().memoizedState}function Ov(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(t))Ph(e,n);else if(n=rh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),Rh(n,e,r)}}function Lv(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Ph(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,o)){var l=e.interleaved;l===null?(i.next=i,Ql(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),Rh(n,e,r))}}function Ch(t){var e=t.alternate;return t===H||e!==null&&e===H}function Ph(t,e){Gr=js=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ml(t,n)}}var Fs={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Dv={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:jc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fs(4194308,4,_h.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fs(4194308,4,t,e)},useInsertionEffect:function(t,e){return fs(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ov.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:Uc,useDebugValue:su,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=Uc(!1),e=t[0];return t=Av.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if($){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ae===null)throw Error(E(349));In&30||fh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jc(ph.bind(null,r,s,t),[t]),r.flags|=2048,mi(9,hh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if($){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=hi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bv={readContext:ze,useCallback:Ih,useContext:ze,useEffect:iu,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:Sh,useReducer:ta,useRef:vh,useState:function(){return ta(pi)},useDebugValue:su,useDeferredValue:function(t){var e=Be();return kh(e,re.memoizedState,t)},useTransition:function(){var t=ta(pi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:ch,useSyncExternalStore:dh,useId:Th,unstable_isNewReconciler:!1},Mv={readContext:ze,useCallback:Ih,useContext:ze,useEffect:iu,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:Sh,useReducer:na,useRef:vh,useState:function(){return na(pi)},useDebugValue:su,useDeferredValue:function(t){var e=Be();return re===null?e.memoizedState=t:kh(e,re.memoizedState,t)},useTransition:function(){var t=na(pi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:ch,useSyncExternalStore:dh,useId:Th,unstable_isNewReconciler:!1};function cr(t,e){try{var n="",r=e;do n+=cg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ja(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uv=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,e,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bs||(Bs=!0,al=r),Ja(t,e)},n}function xh(t,e,n){n=mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ja(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ja(t,e),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jv.bind(null,t,e,n),e.then(t,t))}function zc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var jv=St.ReactCurrentOwner,Se=!1;function ve(t,e,n,r){e.child=t===null?lh(e,null,n,r):lr(e,t.child,n,r)}function Vc(t,e,n,r,i){n=n.render;var s=e.ref;return er(e,i),r=nu(t,e,n,r,s,i),n=ru(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):($&&n&&Wl(e),e.flags|=1,ve(t,e,r,i),e.child)}function $c(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ah(t,e,s,r,i)):(t=gs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(o,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Wt(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ah(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ai(s,r)&&t.ref===e.ref)if(Se=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,Et(t,e,i)}return Xa(t,e,n,r,i)}function Oh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(qn,Re),Re|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(qn,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(qn,Re),Re|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,F(qn,Re),Re|=r;return ve(t,e,i,n),e.child}function Lh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xa(t,e,n,r,i){var s=Te(n)?_n:ge.current;return s=or(e,s),er(e,i),n=nu(t,e,n,r,s,i),r=ru(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):($&&r&&Wl(e),e.flags|=1,ve(t,e,n,i),e.child)}function Wc(t,e,n,r,i){if(Te(n)){var s=!0;As(e)}else s=!1;if(er(e,i),e.stateNode===null)hs(t,e),oh(e,n,r),Qa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?_n:ge.current,u=or(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bc(e,o,r,u),xt=!1;var m=e.memoizedState;o.state=m,Ms(e,r,o,i),l=e.memoizedState,a!==r||m!==l||ke.current||xt?(typeof d=="function"&&(Ya(e,n,d,r),l=e.memoizedState),(a=xt||Dc(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ih(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?_n:ge.current,l=or(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&bc(e,o,r,l),xt=!1,m=e.memoizedState,o.state=m,Ms(e,r,o,i);var y=e.memoizedState;a!==f||m!==y||ke.current||xt?(typeof v=="function"&&(Ya(e,n,v,r),y=e.memoizedState),(u=xt||Dc(e,n,u,r,m,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Za(t,e,n,r,s,i)}function Za(t,e,n,r,i,s){Lh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nc(e,n,!1),Et(t,e,s);r=e.stateNode,jv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lr(e,t.child,null,s),e.child=lr(e,null,a,s)):ve(t,e,a,s),e.memoizedState=r.state,i&&Nc(e,n,!0),e.child}function Dh(t){var e=t.stateNode;e.pendingContext?Rc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rc(t,e.context,!1),Xl(t,e.containerInfo)}function Hc(t,e,n,r,i){return ar(),Kl(i),e.flags|=256,ve(t,e,n,r),e.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(t){return{baseLanes:t,cachePool:null,transitions:null}}function bh(t,e,n){var r=e.pendingProps,i=W.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F(W,i&1),t===null)return Ga(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ho(o,r,0,null),t=mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tl(n),e.memoizedState=el,t):ou(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Fv(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wt(a,s):(s=mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=el,r}return s=t.child,t=s.sibling,r=Wt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ou(t,e){return e=ho({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,n,r){return r!==null&&Kl(r),lr(e,t.child,null,n),t=ou(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(E(422))),Xi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ho({mode:"visible",children:r.children},i,0,null),s=mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lr(e,t.child,null,o),e.child.memoizedState=tl(o),e.memoizedState=el,s);if(!(e.mode&1))return Xi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=ra(s,r,void 0),Xi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_t(t,i),Ye(r,t,i,-1))}return fu(),r=ra(Error(E(421))),Xi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xe=zt(i.nextSibling),Oe=e,$=!0,Ge=null,t!==null&&(Me[Ue++]=dt,Me[Ue++]=ft,Me[Ue++]=En,dt=t.id,ft=t.overflow,En=e),e=ou(e,r.children),e.flags|=4096,e)}function Kc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qa(t.return,e,n)}function ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ve(t,e,r.children,n),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kc(t,n,e);else if(t.tag===19)Kc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(W,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Us(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Us(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,s);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zv(t,e,n){switch(e.tag){case 3:Dh(e),ar();break;case 5:uh(e);break;case 1:Te(e.type)&&As(e);break;case 4:Xl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(Ds,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),e.flags|=128,null):n&e.child.childLanes?bh(t,e,n):(F(W,W.current&1),t=Et(t,e,n),t!==null?t.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,Oh(t,e,n)}return Et(t,e,n)}var Uh,nl,jh,Fh;Uh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nl=function(){};jh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fn(at.current);var s=null;switch(n){case"input":i=ka(t,i),r=ka(t,r),s=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),s=[];break;case"textarea":i=Pa(t,i),r=Pa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ns)}Na(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ei.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Fh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ar(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bv(t,e,n){var r=e.pendingProps;switch(Hl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&xs(),pe(e),null;case 3:return r=e.stateNode,ur(),V(ke),V(ge),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(cl(Ge),Ge=null))),nl(t,e),pe(e),null;case 5:Zl(e);var i=fn(fi.current);if(n=e.type,t!==null&&e.stateNode!=null)jh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return pe(e),null}if(t=fn(at.current),Qi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[et]=e,r[ci]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":tc(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":rc(r,s),B("invalid",r)}Na(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yi(r.textContent,a,t),i=["children",""+a]):ei.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Bi(r),nc(r,s,!0);break;case"textarea":Bi(r),ic(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ns)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ff(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[et]=e,t[ci]=r,Uh(t,e,!1,!1),e.stateNode=t;e:{switch(o=xa(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":tc(t,r),i=ka(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",t);break;case"textarea":rc(t,r),i=Pa(t,r),B("invalid",t);break;default:i=r}Na(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ti(t,l):typeof l=="number"&&ti(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ei.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&xl(t,s,l,o))}switch(n){case"input":Bi(t),nc(t,r,!1);break;case"textarea":Bi(t),ic(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)Fh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=fn(fi.current),fn(at.current),Qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(s=r.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if(V(W),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&xe!==null&&e.mode&1&&!(e.flags&128))nh(),ar(),e.flags|=98560,s=!1;else if(s=Qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[et]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),s=!1}else Ge!==null&&(cl(Ge),Ge=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||W.current&1?ie===0&&(ie=3):fu())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return ur(),nl(t,e),t===null&&li(e.stateNode.containerInfo),pe(e),null;case 10:return Yl(e.type._context),pe(e),null;case 17:return Te(e.type)&&xs(),pe(e),null;case 19:if(V(W),s=e.memoizedState,s===null)return pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ar(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Us(t),o!==null){for(e.flags|=128,Ar(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F(W,W.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>dr&&(e.flags|=128,r=!0,Ar(s,!1),e.lanes=4194304)}else{if(!r)if(t=Us(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return pe(e),null}else 2*X()-s.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Ar(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=W.current,F(W,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return du(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Re&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Vv(t,e){switch(Hl(e),e.tag){case 1:return Te(e.type)&&xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),V(ke),V(ge),eu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zl(e),null;case 13:if(V(W),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(W),null;case 4:return ur(),null;case 10:return Yl(e.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Zi=!1,me=!1,$v=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function rl(t,e,n){try{n()}catch(r){G(t,e,r)}}var Gc=!1;function Wv(t,e){if(za=Cs,t=$f(),$l(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ba={focusedElem:t,selectionRange:n},Cs=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:He(e.type,_),x);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){G(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=Gc,Gc=!1,y}function qr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rl(e,n,s)}i=i.next}while(i!==r)}}function co(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function il(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zh(t){var e=t.alternate;e!==null&&(t.alternate=null,zh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[ci],delete e[Wa],delete e[Cv],delete e[Pv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bh(t){return t.tag===5||t.tag===3||t.tag===4}function qc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ns));else if(r!==4&&(t=t.child,t!==null))for(sl(t,e,n),t=t.sibling;t!==null;)sl(t,e,n),t=t.sibling}function ol(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ol(t,e,n),t=t.sibling;t!==null;)ol(t,e,n),t=t.sibling}var le=null,Ke=!1;function Pt(t,e,n){for(n=n.child;n!==null;)Vh(t,e,n),n=n.sibling}function Vh(t,e,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(no,n)}catch{}switch(n.tag){case 5:me||Gn(n,e);case 6:var r=le,i=Ke;le=null,Pt(t,e,n),le=r,Ke=i,le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?Jo(t.parentNode,n):t.nodeType===1&&Jo(t,n),si(t)):Jo(le,n.stateNode));break;case 4:r=le,i=Ke,le=n.stateNode.containerInfo,Ke=!0,Pt(t,e,n),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rl(n,e,o),i=i.next}while(i!==r)}Pt(t,e,n);break;case 1:if(!me&&(Gn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}Pt(t,e,n);break;case 21:Pt(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Pt(t,e,n),me=r):Pt(t,e,n);break;default:Pt(t,e,n)}}function Yc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $v),e.forEach(function(r){var i=Zv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ke=!1;break e;case 3:le=a.stateNode.containerInfo,Ke=!0;break e;case 4:le=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(le===null)throw Error(E(160));Vh(s,o,i),le=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$h(e,t),e=e.sibling}function $h(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(We(e,t),Xe(t),r&4){try{qr(3,t,t.return),co(3,t)}catch(_){G(t,t.return,_)}try{qr(5,t,t.return)}catch(_){G(t,t.return,_)}}break;case 1:We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(We(e,t),Xe(t),r&512&&n!==null&&Gn(n,n.return),t.flags&32){var i=t.stateNode;try{ti(i,"")}catch(_){G(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cf(i,s),xa(a,o);var u=xa(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?mf(i,f):d==="dangerouslySetInnerHTML"?hf(i,f):d==="children"?ti(i,f):xl(i,d,f,u)}switch(a){case"input":Ta(i,s);break;case"textarea":df(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Qn(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Qn(i,!!s.multiple,s.defaultValue,!0):Qn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ci]=s}catch(_){G(t,t.return,_)}}break;case 6:if(We(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){G(t,t.return,_)}}break;case 3:if(We(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{si(e.containerInfo)}catch(_){G(t,t.return,_)}break;case 4:We(e,t),Xe(t);break;case 13:We(e,t),Xe(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uu=X())),r&4&&Yc(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,We(e,t),me=u):We(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(f=T=d;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:Gn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Gn(m,m.return);break;case 22:if(m.memoizedState!==null){Jc(f);continue}}v!==null?(v.return=m,T=v):Jc(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pf("display",o))}catch(_){G(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){G(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(e,t),Xe(t),r&4&&Yc(t);break;case 21:break;default:We(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ti(i,""),r.flags&=-33);var s=qc(t);ol(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qc(t);sl(t,a,o);break;default:throw Error(E(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hv(t,e,n){T=t,Wh(t)}function Wh(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=Zi;var u=me;if(Zi=o,(me=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Xc(i):l!==null?(l.return=o,T=l):Xc(i);for(;s!==null;)T=s,Wh(s),s=s.sibling;T=i,Zi=a,me=u}Qc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Qc(t)}}function Qc(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||co(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&si(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||e.flags&512&&il(e)}catch(m){G(e,e.return,m)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Jc(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Xc(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{co(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var s=e.return;try{il(e)}catch(l){G(e,s,l)}break;case 5:var o=e.return;try{il(e)}catch(l){G(e,o,l)}}}catch(l){G(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var Kv=Math.ceil,zs=St.ReactCurrentDispatcher,au=St.ReactCurrentOwner,Fe=St.ReactCurrentBatchConfig,b=0,ae=null,ee=null,ue=0,Re=0,qn=Zt(0),ie=0,gi=null,Sn=0,fo=0,lu=0,Yr=null,Ie=null,uu=0,dr=1/0,ut=null,Bs=!1,al=null,Vt=null,es=!1,Dt=null,Vs=0,Qr=0,ll=null,ps=-1,ms=0;function ye(){return b&6?X():ps!==-1?ps:ps=X()}function $t(t){return t.mode&1?b&2&&ue!==0?ue&-ue:Nv.transition!==null?(ms===0&&(ms=Pf()),ms):(t=U,t!==0||(t=window.event,t=t===void 0?16:Df(t.type)),t):1}function Ye(t,e,n,r){if(50<Qr)throw Qr=0,ll=null,Error(E(185));Pi(t,n,r),(!(b&2)||t!==ae)&&(t===ae&&(!(b&2)&&(fo|=n),ie===4&&Ot(t,ue)),Ce(t,r),n===1&&b===0&&!(e.mode&1)&&(dr=X()+500,ao&&en()))}function Ce(t,e){var n=t.callbackNode;Ng(t,e);var r=Ts(t,t===ae?ue:0);if(r===0)n!==null&&ac(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ac(n),e===1)t.tag===0?Rv(Zc.bind(null,t)):Zf(Zc.bind(null,t)),kv(function(){!(b&6)&&en()}),n=null;else{switch(Rf(r)){case 1:n=bl;break;case 4:n=Tf;break;case 16:n=ks;break;case 536870912:n=Cf;break;default:n=ks}n=Xh(n,Hh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hh(t,e){if(ps=-1,ms=0,b&6)throw Error(E(327));var n=t.callbackNode;if(tr()&&t.callbackNode!==n)return null;var r=Ts(t,t===ae?ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$s(t,r);else{e=r;var i=b;b|=2;var s=Gh();(ae!==t||ue!==e)&&(ut=null,dr=X()+500,pn(t,e));do try{Yv();break}catch(a){Kh(t,a)}while(1);ql(),zs.current=s,b=i,ee!==null?e=0:(ae=null,ue=0,e=ie)}if(e!==0){if(e===2&&(i=ba(t),i!==0&&(r=i,e=ul(t,i))),e===1)throw n=gi,pn(t,0),Ot(t,r),Ce(t,X()),n;if(e===6)Ot(t,r);else{if(i=t.current.alternate,!(r&30)&&!Gv(i)&&(e=$s(t,r),e===2&&(s=ba(t),s!==0&&(r=s,e=ul(t,s))),e===1))throw n=gi,pn(t,0),Ot(t,r),Ce(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:an(t,Ie,ut);break;case 3:if(Ot(t,r),(r&130023424)===r&&(e=uu+500-X(),10<e)){if(Ts(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$a(an.bind(null,t,Ie,ut),e);break}an(t,Ie,ut);break;case 4:if(Ot(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qe(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kv(r/1960))-r,10<r){t.timeoutHandle=$a(an.bind(null,t,Ie,ut),r);break}an(t,Ie,ut);break;case 5:an(t,Ie,ut);break;default:throw Error(E(329))}}}return Ce(t,X()),t.callbackNode===n?Hh.bind(null,t):null}function ul(t,e){var n=Yr;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=$s(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&cl(e)),t}function cl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Gv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qe(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(t,e){for(e&=~lu,e&=~fo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function Zc(t){if(b&6)throw Error(E(327));tr();var e=Ts(t,0);if(!(e&1))return Ce(t,X()),null;var n=$s(t,e);if(t.tag!==0&&n===2){var r=ba(t);r!==0&&(e=r,n=ul(t,r))}if(n===1)throw n=gi,pn(t,0),Ot(t,e),Ce(t,X()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,Ie,ut),Ce(t,X()),null}function cu(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(dr=X()+500,ao&&en())}}function kn(t){Dt!==null&&Dt.tag===0&&!(b&6)&&tr();var e=b;b|=1;var n=Fe.transition,r=U;try{if(Fe.transition=null,U=1,t)return t()}finally{U=r,Fe.transition=n,b=e,!(b&6)&&en()}}function du(){Re=qn.current,V(qn)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sv(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xs();break;case 3:ur(),V(ke),V(ge),eu();break;case 5:Zl(r);break;case 4:ur();break;case 13:V(W);break;case 19:V(W);break;case 10:Yl(r.type._context);break;case 22:case 23:du()}n=n.return}if(ae=t,ee=t=Wt(t.current,null),ue=Re=e,ie=0,gi=null,lu=fo=Sn=0,Ie=Yr=null,dn!==null){for(e=0;e<dn.length;e++)if(n=dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}dn=null}return t}function Kh(t,e){do{var n=ee;try{if(ql(),ds.current=Fs,js){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}js=!1}if(In=0,oe=re=H=null,Gr=!1,hi=0,au.current=null,n===null||n.return===null){ie=1,gi=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=zc(o);if(v!==null){v.flags&=-257,Bc(v,o,a,s,e),v.mode&1&&Fc(s,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Fc(s,u,e),fu();break e}l=Error(E(426))}}else if($&&a.mode&1){var x=zc(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Bc(x,o,a,s,e),Kl(cr(l,a));break e}}s=l=cr(l,a),ie!==4&&(ie=2),Yr===null?Yr=[s]:Yr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Nh(s,l,e);Oc(s,h);break e;case 1:a=l;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=xh(s,a,e);Oc(s,w);break e}}s=s.return}while(s!==null)}Yh(n)}catch(S){e=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Gh(){var t=zs.current;return zs.current=Fs,t===null?Fs:t}function fu(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Sn&268435455)&&!(fo&268435455)||Ot(ae,ue)}function $s(t,e){var n=b;b|=2;var r=Gh();(ae!==t||ue!==e)&&(ut=null,pn(t,e));do try{qv();break}catch(i){Kh(t,i)}while(1);if(ql(),b=n,zs.current=r,ee!==null)throw Error(E(261));return ae=null,ue=0,ie}function qv(){for(;ee!==null;)qh(ee)}function Yv(){for(;ee!==null&&!_g();)qh(ee)}function qh(t){var e=Jh(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?Yh(t):ee=e,au.current=null}function Yh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vv(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=Bv(n,e,Re),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function an(t,e,n){var r=U,i=Fe.transition;try{Fe.transition=null,U=1,Qv(t,e,n,r)}finally{Fe.transition=i,U=r}return null}function Qv(t,e,n,r){do tr();while(Dt!==null);if(b&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xg(t,s),t===ae&&(ee=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||es||(es=!0,Xh(ks,function(){return tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fe.transition,Fe.transition=null;var o=U;U=1;var a=b;b|=4,au.current=null,Wv(t,n),$h(n,t),gv(Ba),Cs=!!za,Ba=za=null,t.current=n,Hv(n),Eg(),b=a,U=o,Fe.transition=s}else t.current=n;if(es&&(es=!1,Dt=t,Vs=i),s=t.pendingLanes,s===0&&(Vt=null),kg(n.stateNode),Ce(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bs)throw Bs=!1,t=al,al=null,t;return Vs&1&&t.tag!==0&&tr(),s=t.pendingLanes,s&1?t===ll?Qr++:(Qr=0,ll=t):Qr=0,en(),null}function tr(){if(Dt!==null){var t=Rf(Vs),e=Fe.transition,n=U;try{if(Fe.transition=null,U=16>t?16:t,Dt===null)var r=!1;else{if(t=Dt,Dt=null,Vs=0,b&6)throw Error(E(331));var i=b;for(b|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:qr(8,d,s)}var f=d.child;if(f!==null)f.return=d,T=f;else for(;T!==null;){d=T;var m=d.sibling,v=d.return;if(zh(d),d===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}var c=t.current;for(T=c;T!==null;){o=T;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,T=p;else e:for(o=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:co(9,a)}}catch(S){G(a,a.return,S)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(b=i,en(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(no,t)}catch{}r=!0}return r}finally{U=n,Fe.transition=e}}return!1}function ed(t,e,n){e=cr(n,e),e=Nh(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(Pi(t,1,e),Ce(t,e))}function G(t,e,n){if(t.tag===3)ed(t,t,n);else for(;e!==null;){if(e.tag===3){ed(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){t=cr(n,t),t=xh(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(Pi(e,1,t),Ce(e,t));break}}e=e.return}}function Jv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>X()-uu?pn(t,0):lu|=n),Ce(t,e)}function Qh(t,e){e===0&&(t.mode&1?(e=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):e=1);var n=ye();t=_t(t,e),t!==null&&(Pi(t,e,n),Ce(t,n))}function Xv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qh(t,n)}function Zv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Qh(t,n)}var Jh;Jh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Se=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Se=!1,zv(t,e,n);Se=!!(t.flags&131072)}else Se=!1,$&&e.flags&1048576&&eh(e,Ls,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hs(t,e),t=e.pendingProps;var i=or(e,ge.current);er(e,n),i=nu(null,e,r,t,i,n);var s=ru();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(s=!0,As(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(e),i.updater=lo,e.stateNode=i,i._reactInternals=e,Qa(e,r,t,n),e=Za(null,e,r,!0,s,n)):(e.tag=0,$&&s&&Wl(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ty(r),t=He(r,t),i){case 0:e=Xa(null,e,r,t,n);break e;case 1:e=Wc(null,e,r,t,n);break e;case 11:e=Vc(null,e,r,t,n);break e;case 14:e=$c(null,e,r,He(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Xa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Wc(t,e,r,i,n);case 3:e:{if(Dh(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ih(t,e),Ms(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cr(Error(E(423)),e),e=Hc(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(E(424)),e),e=Hc(t,e,r,n,i);break e}else for(xe=zt(e.stateNode.containerInfo.firstChild),Oe=e,$=!0,Ge=null,n=lh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=Et(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return uh(e),t===null&&Ga(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Va(r,i)?o=null:s!==null&&Va(r,s)&&(e.flags|=32),Lh(t,e),ve(t,e,o,n),e.child;case 6:return t===null&&Ga(e),null;case 13:return bh(t,e,n);case 4:return Xl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lr(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Vc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,F(Ds,r._currentValue),r._currentValue=o,s!==null)if(Qe(s.value,o)){if(s.children===i.children&&!ke.current){e=Et(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,er(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),$c(t,e,r,i,n);case 15:return Ah(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),hs(t,e),e.tag=1,Te(r)?(t=!0,As(e)):t=!1,er(e,n),oh(e,r,i),Qa(e,r,i,n),Za(null,e,r,!0,t,n);case 19:return Mh(t,e,n);case 22:return Oh(t,e,n)}throw Error(E(156,e.tag))};function Xh(t,e){return kf(t,e)}function ey(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,r){return new ey(t,e,n,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ty(t){if(typeof t=="function")return hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ol)return 11;if(t===Ll)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jn:return mn(n.children,i,s,e);case Al:o=8,i|=8;break;case _a:return t=je(12,n,e,i|2),t.elementType=_a,t.lanes=s,t;case Ea:return t=je(13,n,e,i),t.elementType=Ea,t.lanes=s,t;case Ia:return t=je(19,n,e,i),t.elementType=Ia,t.lanes=s,t;case af:return ho(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sf:o=10;break e;case of:o=9;break e;case Ol:o=11;break e;case Ll:o=14;break e;case Nt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mn(t,e,n,r){return t=je(7,t,r,e),t.lanes=n,t}function ho(t,e,n,r){return t=je(22,t,r,e),t.elementType=af,t.lanes=n,t.stateNode={isHidden:!1},t}function sa(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ny(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(t,e,n,r,i,s,o,a,l){return t=new ny(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(s),t}function ry(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zh(t){if(!t)return qt;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Te(n))return Xf(t,n,e)}return e}function ep(t,e,n,r,i,s,o,a,l){return t=pu(n,r,!0,t,i,s,o,a,l),t.context=Zh(null),n=t.current,r=ye(),i=$t(n),s=mt(r,i),s.callback=e??null,Bt(n,s,i),t.current.lanes=i,Pi(t,i,r),Ce(t,r),t}function po(t,e,n,r){var i=e.current,s=ye(),o=$t(i);return n=Zh(n),e.context===null?e.context=n:e.pendingContext=n,e=mt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,o),t!==null&&(Ye(t,i,o,s),cs(t,i,o)),o}function Ws(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function td(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mu(t,e){td(t,e),(t=t.alternate)&&td(t,e)}function iy(){return null}var tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gu(t){this._internalRoot=t}mo.prototype.render=gu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));po(t,e,null,null)};mo.prototype.unmount=gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kn(function(){po(null,t,null,null)}),e[wt]=null}};function mo(t){this._internalRoot=t}mo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Af();t={blockedOn:null,target:t,priority:e};for(var n=0;n<At.length&&e!==0&&e<At[n].priority;n++);At.splice(n,0,t),n===0&&Lf(t)}};function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function go(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nd(){}function sy(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ws(o);s.call(u)}}var o=ep(e,r,t,0,null,!1,!1,"",nd);return t._reactRootContainer=o,t[wt]=o.current,li(t.nodeType===8?t.parentNode:t),kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ws(l);a.call(u)}}var l=pu(t,0,!1,null,null,!1,!1,"",nd);return t._reactRootContainer=l,t[wt]=l.current,li(t.nodeType===8?t.parentNode:t),kn(function(){po(e,l,n,r)}),l}function vo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ws(o);a.call(l)}}po(e,o,t,i)}else o=sy(n,e,t,i,r);return Ws(o)}Nf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jr(e.pendingLanes);n!==0&&(Ml(e,n|1),Ce(e,X()),!(b&6)&&(dr=X()+500,en()))}break;case 13:kn(function(){var r=_t(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),mu(t,1)}};Ul=function(t){if(t.tag===13){var e=_t(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}mu(t,134217728)}};xf=function(t){if(t.tag===13){var e=$t(t),n=_t(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}mu(t,e)}};Af=function(){return U};Of=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Oa=function(t,e,n){switch(e){case"input":if(Ta(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oo(r);if(!i)throw Error(E(90));uf(r),Ta(r,i)}}}break;case"textarea":df(t,n);break;case"select":e=n.value,e!=null&&Qn(t,!!n.multiple,e,!1)}};yf=cu;wf=kn;var oy={usingClientEntryPoint:!1,Events:[Ni,Vn,oo,gf,vf,cu]},Or={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ay={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=If(t),t===null?null:t.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{no=ts.inject(ay),ot=ts}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(e))throw Error(E(200));return ry(t,e,null,n)};De.createRoot=function(t,e){if(!vu(t))throw Error(E(299));var n=!1,r="",i=tp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pu(t,1,!1,null,null,n,!1,r,i),t[wt]=e.current,li(t.nodeType===8?t.parentNode:t),new gu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=If(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return kn(t)};De.hydrate=function(t,e,n){if(!go(e))throw Error(E(200));return vo(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!vu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ep(e,null,t,1,n??null,i,!1,s,o),t[wt]=e.current,li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mo(e)};De.render=function(t,e,n){if(!go(e))throw Error(E(200));return vo(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!go(t))throw Error(E(40));return t._reactRootContainer?(kn(function(){vo(null,null,t,!1,function(){t._reactRootContainer=null,t[wt]=null})}),!0):!1};De.unstable_batchedUpdates=cu;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!go(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return vo(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)}catch(t){console.error(t)}}np(),Zd.exports=De;var ly=Zd.exports,rd=ly;ya.createRoot=rd.createRoot,ya.hydrateRoot=rd.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vi.apply(this,arguments)}var bt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bt||(bt={}));const id="popstate";function uy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return dl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rp(i)}return dy(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cy(){return Math.random().toString(36).substr(2,8)}function sd(t,e){return{usr:t.state,key:t.key,idx:e}}function dl(t,e,n,r){return n===void 0&&(n=null),vi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vr(e):e,{state:n,key:e&&e.key||r||cy()})}function rp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=bt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(vi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=bt.Pop;let x=d(),h=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:h})}function m(x,h){a=bt.Push;let c=dl(_.location,x,h);n&&n(c,x),u=d()+1;let p=sd(c,u),w=_.createHref(c);try{o.pushState(p,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function v(x,h){a=bt.Replace;let c=dl(_.location,x,h);n&&n(c,x),u=d();let p=sd(c,u),w=_.createHref(c);o.replaceState(p,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof x=="string"?x:rp(x);return te(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(id,f),l=x,()=>{i.removeEventListener(id,f),l=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(x){return o.go(x)}};return _}var od;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(od||(od={}));function fy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vr(e):e,i=op(r.pathname||"/",n);if(i==null)return null;let s=ip(t);hy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Iy(s[a],Ty(i));return o}function ip(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ip(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:_y(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of sp(s.path))i(s,o,l)}),e}function sp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=sp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ey(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const py=/^:\w+$/,my=3,gy=2,vy=1,yy=10,wy=-2,ad=t=>t==="*";function _y(t,e){let n=t.split("/"),r=n.length;return n.some(ad)&&(r+=wy),e&&(r+=gy),n.filter(i=>!ad(i)).reduce((i,s)=>i+(py.test(s)?my:s===""?vy:yy),r)}function Ey(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Iy(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Sy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:gn([i,d.pathname]),pathnameBase:Ny(gn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=gn([i,d.pathnameBase]))}return s}function Sy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ky(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[m]=void 0:u[m]=Cy(y||"",m),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ky(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ty(t){try{return decodeURI(t)}catch(e){return yu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cy(t,e){try{return decodeURIComponent(t)}catch(n){return yu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function op(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Py(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vr(t):t;return{pathname:n?n.startsWith("/")?n:Ry(n,e):e,search:xy(r),hash:Ay(i)}}function Ry(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function aa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ap(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vr(t):(i=vi({},t),te(!i.pathname||!i.pathname.includes("?"),aa("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),aa("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),aa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=Py(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const gn=t=>t.join("/").replace(/\/\/+/g,"/"),Ny=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ay=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const up=["post","put","patch","delete"];new Set(up);const Ly=["get",...up];new Set(Ly);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hs.apply(this,arguments)}const wu=k.createContext(null),Dy=k.createContext(null),yo=k.createContext(null),wo=k.createContext(null),tn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),cp=k.createContext(null);function Ai(){return k.useContext(wo)!=null}function _o(){return Ai()||te(!1),k.useContext(wo).location}function dp(t){k.useContext(yo).static||k.useLayoutEffect(t)}function _u(){let{isDataRoute:t}=k.useContext(tn);return t?Yy():by()}function by(){Ai()||te(!1);let t=k.useContext(wu),{basename:e,navigator:n}=k.useContext(yo),{matches:r}=k.useContext(tn),{pathname:i}=_o(),s=JSON.stringify(ap(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return dp(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=lp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:gn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}const My=k.createContext(null);function Uy(t){let e=k.useContext(tn).outlet;return e&&k.createElement(My.Provider,{value:t},e)}function jy(t,e){return Fy(t,e)}function Fy(t,e,n){Ai()||te(!1);let{navigator:r}=k.useContext(yo),{matches:i}=k.useContext(tn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=_o(),u;if(e){var d;let _=typeof e=="string"?vr(e):e;a==="/"||(d=_.pathname)!=null&&d.startsWith(a)||te(!1),u=_}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",v=fy(t,{pathname:m}),y=Wy(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:gn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:gn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?k.createElement(wo.Provider,{value:{location:Hs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bt.Pop}},y):y}function zy(){let t=qy(),e=Oy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const By=k.createElement(zy,null);class Vy extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(tn.Provider,{value:this.props.routeContext},k.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $y(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(wu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(tn.Provider,{value:e},r)}function Wy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||By);let m=e.concat(s.slice(0,u+1)),v=()=>{let y;return d?y=f:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,k.createElement($y,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Vy,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var fp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fp||{}),Ks=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ks||{});function Hy(t){let e=k.useContext(wu);return e||te(!1),e}function Ky(t){let e=k.useContext(Dy);return e||te(!1),e}function Gy(t){let e=k.useContext(tn);return e||te(!1),e}function hp(t){let e=Gy(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function qy(){var t;let e=k.useContext(cp),n=Ky(Ks.UseRouteError),r=hp(Ks.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Yy(){let{router:t}=Hy(fp.UseNavigateStable),e=hp(Ks.UseNavigateStable),n=k.useRef(!1);return dp(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Hs({fromRouteId:e},s)))},[t,e])}function Qy(t){let{to:e,replace:n,state:r,relative:i}=t;Ai()||te(!1);let{matches:s}=k.useContext(tn),{pathname:o}=_o(),a=_u(),l=lp(e,ap(s).map(d=>d.pathnameBase),o,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Jy(t){return Uy(t.context)}function ln(t){te(!1)}function Xy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=bt.Pop,navigator:s,static:o=!1}=t;Ai()&&te(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,y=k.useMemo(()=>{let _=op(u,a);return _==null?null:{location:{pathname:_,search:d,hash:f,state:m,key:v},navigationType:i}},[a,u,d,f,m,v,i]);return y==null?null:k.createElement(yo.Provider,{value:l},k.createElement(wo.Provider,{children:n,value:y}))}function Zy(t){let{children:e,location:n}=t;return jy(fl(e),n)}new Promise(()=>{});function fl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,fl(r.props.children,s));return}r.type!==ln&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const e0="startTransition",ld=Xm[e0];function t0(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=uy({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&ld?ld(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(Xy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var ud;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ud||(ud={}));var cd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(cd||(cd={}));/**
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
 */const pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new r0;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i0=function(t){const e=pp(t);return mp.encodeByteArray(e,!0)},gp=function(t){return i0(t).replace(/\./g,"")},vp=function(t){try{return mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Gs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s0(n)||(t[n]=Gs(t[n],e[n]));return t}function s0(t){return t!=="__proto__"}/**
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
 */function o0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const a0=()=>o0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vp(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return a0()||l0()||u0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yp=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},c0=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class d0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function wp(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function h0(){return typeof self=="object"&&self.self===self}function _p(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ep(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qs(){try{return typeof indexedDB=="object"}catch{return!1}}function p0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const m0="FirebaseError";class Pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=m0,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?g0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pe(i,a,r)}}function g0(t,e){return t.replace(v0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v0=/\{\$([^}]+)}/g;/**
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
 */function dd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fd(s)&&fd(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
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
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ip(t,e){const n=new w0(t,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}/**
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
 */class E0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new d0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S0(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===un?void 0:t}function S0(t){return t.instantiationMode==="EAGER"}/**
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
 */class k0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Su=[];var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Sp={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},T0=j.INFO,C0={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},P0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=T0,this._logHandler=P0,this._userLogHandler=null,Su.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function R0(t){Su.forEach(e=>{e.setLogLevel(t)})}function N0(t,e){for(const n of Su){let r=null;e&&e.level&&(r=Sp[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:j[s].toLowerCase(),message:a,args:o,type:i.name})}}}const x0=(t,e)=>e.some(n=>t instanceof n);let hd,pd;function A0(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kp=new WeakMap,pl=new WeakMap,Tp=new WeakMap,ua=new WeakMap,Tu=new WeakMap;function L0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ht(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kp.set(n,t)}).catch(()=>{}),Tu.set(e,t),e}function D0(t){if(pl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b0(t){ml=t(ml)}function M0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ca(this),e,...n);return Tp.set(r,e.sort?e.sort():[e]),Ht(r)}:O0().includes(t)?function(...e){return t.apply(ca(this),e),Ht(kp.get(this))}:function(...e){return Ht(t.apply(ca(this),e))}}function U0(t){return typeof t=="function"?M0(t):(t instanceof IDBTransaction&&D0(t),x0(t,A0())?new Proxy(t,ml):t)}function Ht(t){if(t instanceof IDBRequest)return L0(t);if(ua.has(t))return ua.get(t);const e=U0(t);return e!==t&&(ua.set(t,e),Tu.set(e,t)),e}const ca=t=>Tu.get(t);function j0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ht(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const F0=["get","getKey","getAll","getAllKeys","count"],z0=["put","add","delete","clear"],da=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=z0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return da.set(e,s),s}b0(t=>({...t,get:(e,n,r)=>md(e,n)||t.get(e,n,r),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
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
 */class B0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",gd="0.9.24";/**
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
 */const Tn=new ku("@firebase/app"),$0="@firebase/app-compat",W0="@firebase/analytics-compat",H0="@firebase/analytics",K0="@firebase/app-check-compat",G0="@firebase/app-check",q0="@firebase/auth",Y0="@firebase/auth-compat",Q0="@firebase/database",J0="@firebase/database-compat",X0="@firebase/functions",Z0="@firebase/functions-compat",ew="@firebase/installations",tw="@firebase/installations-compat",nw="@firebase/messaging",rw="@firebase/messaging-compat",iw="@firebase/performance",sw="@firebase/performance-compat",ow="@firebase/remote-config",aw="@firebase/remote-config-compat",lw="@firebase/storage",uw="@firebase/storage-compat",cw="@firebase/firestore",dw="@firebase/firestore-compat",fw="firebase",hw="10.7.0";/**
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
 */const Qt="[DEFAULT]",pw={[gl]:"fire-core",[$0]:"fire-core-compat",[H0]:"fire-analytics",[W0]:"fire-analytics-compat",[G0]:"fire-app-check",[K0]:"fire-app-check-compat",[q0]:"fire-auth",[Y0]:"fire-auth-compat",[Q0]:"fire-rtdb",[J0]:"fire-rtdb-compat",[X0]:"fire-fn",[Z0]:"fire-fn-compat",[ew]:"fire-iid",[tw]:"fire-iid-compat",[nw]:"fire-fcm",[rw]:"fire-fcm-compat",[iw]:"fire-perf",[sw]:"fire-perf-compat",[ow]:"fire-rc",[aw]:"fire-rc-compat",[lw]:"fire-gcs",[uw]:"fire-gcs-compat",[cw]:"fire-fst",[dw]:"fire-fst-compat","fire-js":"fire-js",[fw]:"fire-js-all"};/**
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
 */const Jt=new Map,yi=new Map;function Ys(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cp(t,e){t.container.addOrOverwriteComponent(e)}function Cn(t){const e=t.name;if(yi.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,t);for(const n of Jt.values())Ys(n,t);return!0}function Pp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mw(t,e,n=Qt){Pp(t,e).clearInstance(n)}function gw(){yi.clear()}/**
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
 */const vw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new On("app","Firebase",vw);/**
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
 */let yw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
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
 */const Ln=hw;function Cu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=yp()),!n)throw gt.create("no-options");const s=Jt.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const o=new k0(i);for(const l of yi.values())o.addComponent(l);const a=new yw(n,r,o);return Jt.set(i,a),a}function ww(t=Qt){const e=Jt.get(t);if(!e&&t===Qt&&yp())return Cu();if(!e)throw gt.create("no-app",{appName:t});return e}function _w(){return Array.from(Jt.values())}async function Rp(t){const e=t.name;Jt.has(e)&&(Jt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=pw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Cn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Np(t,e){if(t!==null&&typeof t!="function")throw gt.create("invalid-log-argument");N0(t,e)}function xp(t){R0(t)}/**
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
 */const Ew="firebase-heartbeat-database",Iw=1,wi="firebase-heartbeat-store";let fa=null;function Ap(){return fa||(fa=j0(Ew,Iw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),fa}async function Sw(t){try{return await(await Ap()).transaction(wi).objectStore(wi).get(Op(t))}catch(e){if(e instanceof Pe)Tn.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function vd(t,e){try{const r=(await Ap()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,Op(t)),await r.done}catch(n){if(n instanceof Pe)Tn.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Op(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kw=1024,Tw=30*24*60*60*1e3;class Cw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Tw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yd(),{heartbeatsToSend:r,unsentEntries:i}=Pw(this._heartbeatsCache.heartbeats),s=gp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yd(){return new Date().toISOString().substring(0,10)}function Pw(t,e=kw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qs()?p0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wd(t){return gp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Nw(t){Cn(new Yt("platform-logger",e=>new B0(e),"PRIVATE")),Cn(new Yt("heartbeat",e=>new Cw(e),"PRIVATE")),Kt(gl,gd,t),Kt(gl,gd,"esm2017"),Kt("fire-js","")}Nw("");const xw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pe,SDK_VERSION:Ln,_DEFAULT_ENTRY_NAME:Qt,_addComponent:Ys,_addOrOverwriteComponent:Cp,_apps:Jt,_clearComponents:gw,_components:yi,_getProvider:Pp,_registerComponent:Cn,_removeServiceInstance:mw,deleteApp:Rp,getApp:ww,getApps:_w,initializeApp:Cu,onLog:Np,registerVersion:Kt,setLogLevel:xp},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Aw{constructor(e,n){this._delegate=e,this.firebase=n,Ys(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Rp(this._delegate)))}_getService(e,n=Qt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ys(this._delegate,e)}_addOrOverwriteComponent(e){Cp(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Ow={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},_d=new On("app-compat","Firebase",Ow);/**
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
 */function Lw(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Kt,setLogLevel:xp,onLog:Np,apps:null,SDK_VERSION:Ln,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:xw}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Qt,!dd(e,u))throw _d.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const f=Cu(u,d);if(dd(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if(Cn(u)&&u.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw _d.create("invalid-app-argument",{appName:d});return v[f]()};u.serviceProps!==void 0&&Gs(m,u.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function Lp(){const t=Lw(Aw);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Lp,extendNamespace:e,createSubscribe:Ip,ErrorFactory:On,deepExtend:Gs});function e(n){Gs(t,n)}return t}const Dw=Lp();/**
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
 */const Ed=new ku("@firebase/app-compat"),bw="@firebase/app-compat",Mw="0.2.24";/**
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
 */function Uw(t){Kt(bw,Mw,t)}/**
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
 */if(h0()&&self.firebase!==void 0){Ed.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ed.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const kt=Dw;Uw();function Pu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Lr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function jw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fw=jw,zw=Dp,bp=new On("auth","Firebase",Dp());/**
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
 */const Qs=new ku("@firebase/auth");function Bw(t,...e){Qs.logLevel<=j.WARN&&Qs.warn(`Auth (${Ln}): ${t}`,...e)}function vs(t,...e){Qs.logLevel<=j.ERROR&&Qs.error(`Auth (${Ln}): ${t}`,...e)}/**
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
 */function fe(t,...e){throw Ru(t,...e)}function ce(t,...e){return Ru(t,...e)}function Mp(t,e,n){const r=Object.assign(Object.assign({},zw()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function wr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(t,"argument-error"),Mp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bp.create(t,...e)}function I(t,e,...n){if(!t)throw Ru(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vs(e),new Error(e)}function Je(t,e){t||st(e)}/**
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
 */function _i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nu(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nu()||_p()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=f0()||Iu()}get(){return Vw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xu(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Up{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ww={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hw=new Oi(3e4,6e4);function Y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Q(t,e,n,r,i={}){return jp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Up.fetch()(Fp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ww),e);try{const i=new Gw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Br(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Br(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Br(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mp(t,d,u);fe(t,d)}}catch(i){if(i instanceof Pe)throw i;fe(t,"network-request-failed",{message:String(i)})}}async function Tt(t,e,n,r,i={}){const s=await Q(t,e,n,r,i);return"mfaPendingCredential"in s&&fe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Fp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xu(t.config,i):`${t.config.apiScheme}://${i}`}function Kw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),Hw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Sd(t){return t!==void 0&&t.getResponse!==void 0}function kd(t){return t!==void 0&&t.enterprise!==void 0}class qw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Yw(t){return(await Q(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Qw(t,e){return Q(t,"GET","/v2/recaptchaConfig",Y(t,e))}/**
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
 */async function Jw(t,e){return Q(t,"POST","/v1/accounts:delete",e)}async function Xw(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function Zw(t,e){return Q(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e_(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Eo(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jr(ha(i.auth_time)),issuedAtTime:Jr(ha(i.iat)),expirationTime:Jr(ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ha(t){return Number(t)*1e3}function Eo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const i=vp(n);return i?JSON.parse(i):(vs("Failed to decode base64 JWT payload"),null)}catch(i){return vs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function t_(t){const e=Eo(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function It(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pe&&n_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ei(t){var e;const n=t.auth,r=await t.getIdToken(),i=await It(t,Zw(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o_(s.providerUserInfo):[],a=s_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function i_(t){const e=M(t);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o_(t){return t.map(e=>{var{providerId:n}=e,r=Pu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function a_(t,e){const n=await jp(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Up.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l_(t,e){return Q(t,"POST","/v2/accounts:revokeToken",Y(t,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):t_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await a_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ii;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function Rt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e_(this,e)}reload(){return i_(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,Jw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:S,providerData:P,stsTokenManager:R}=n;I(p&&R,e,"internal-error");const N=Ii.fromJSON(this.name,R);I(typeof p=="string",e,"internal-error"),Rt(f,e.name),Rt(m,e.name),I(typeof w=="boolean",e,"internal-error"),I(typeof S=="boolean",e,"internal-error"),Rt(v,e.name),Rt(y,e.name),Rt(_,e.name),Rt(x,e.name),Rt(h,e.name),Rt(c,e.name);const z=new vn({uid:p,auth:e,email:m,emailVerified:w,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(z.providerData=P.map(L=>Object.assign({},L))),x&&(z._redirectEventId=x),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ei(s),s}}/**
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
 */const Td=new Map;function Ae(t){Je(t instanceof Function,"Expected a class definition");let e=Td.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
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
 */class Bp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bp.type="NONE";const fr=Bp;/**
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
 */function yn(t,e,n){return`firebase:${t}:${e}:${n}`}class nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yn(this.userKey,i.apiKey,s),this.fullPersistenceKey=yn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nr(Ae(fr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ae(fr);const o=yn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=vn._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new nr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new nr(s,e,r))}}/**
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
 */function Cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hp(e))return"Blackberry";if(Kp(e))return"Webos";if(Au(e))return"Safari";if((e.includes("chrome/")||$p(e))&&!e.includes("edge/"))return"Chrome";if(Li(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vp(t=ne()){return/firefox\//i.test(t)}function Au(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $p(t=ne()){return/crios\//i.test(t)}function Wp(t=ne()){return/iemobile/i.test(t)}function Li(t=ne()){return/android/i.test(t)}function Hp(t=ne()){return/blackberry/i.test(t)}function Kp(t=ne()){return/webos/i.test(t)}function _r(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function u_(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function c_(t=ne()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d_(){return Ep()&&document.documentMode===10}function Gp(t=ne()){return _r(t)||Li(t)||Kp(t)||Hp(t)||/windows phone/i.test(t)||Wp(t)}function f_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qp(t,e=[]){let n;switch(t){case"Browser":n=Cd(ne());break;case"Worker":n=`${Cd(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
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
 */class h_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function p_(t,e={}){return Q(t,"GET","/v2/passwordPolicy",Y(t,e))}/**
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
 */const m_=6;class g_{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:m_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class v_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p_(this),n=new g_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function q(t){return M(t)}class Pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ip(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function y_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ou(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",y_().appendChild(r)})}function Yp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w_="https://www.google.com/recaptcha/enterprise.js?render=",__="recaptcha-enterprise",E_="NO_RECAPTCHA";class I_{constructor(e){this.type=__,this.auth=q(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Qw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(E_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ou(w_+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Rd(t,e,n,r=!1){const i=new I_(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Si(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Rd(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function S_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k_(t,e,n){const r=q(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Qp(e),{host:o,port:a}=T_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||C_()}function Qp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T_(t){const e=Qp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nd(o)}}}function Nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Er{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
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
 */async function Jp(t,e){return Q(t,"POST","/v1/accounts:resetPassword",Y(t,e))}async function P_(t,e){return Q(t,"POST","/v1/accounts:update",e)}async function R_(t,e){return Q(t,"POST","/v1/accounts:signUp",e)}async function N_(t,e){return Q(t,"POST","/v1/accounts:update",Y(t,e))}/**
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
 */async function x_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPassword",Y(t,e))}async function Io(t,e){return Q(t,"POST","/v1/accounts:sendOobCode",Y(t,e))}async function A_(t,e){return Io(t,e)}async function O_(t,e){return Io(t,e)}async function L_(t,e){return Io(t,e)}async function D_(t,e){return Io(t,e)}/**
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
 */async function b_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}async function M_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",Y(t,e))}/**
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
 */class ki extends Er{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,n,"signInWithPassword",x_);case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,r,"signUpPassword",R_);case"emailLink":return M_(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const U_="http://localhost";class lt extends Er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}buildRequest(){const e={requestUri:U_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
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
 */async function j_(t,e){return Q(t,"POST","/v1/accounts:sendVerificationCode",Y(t,e))}async function F_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e))}async function z_(t,e){const n=await Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,e));if(n.temporaryProof)throw Br(t,"account-exists-with-different-credential",n);return n}const B_={USER_NOT_FOUND:"user-not-found"};async function V_(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",Y(t,n),B_)}/**
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
 */class wn extends Er{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new wn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new wn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return F_(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return z_(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return V_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new wn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function $_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W_(t){const e=Yn(zr(t)).link,n=e?Yn(zr(e)).deep_link_id:null,r=Yn(zr(t)).deep_link_id;return(r?Yn(zr(r)).link:null)||r||n||e||t}class So{constructor(e){var n,r,i,s,o,a;const l=Yn(zr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=$_((i=l.mode)!==null&&i!==void 0?i:null);I(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=W_(e);try{return new So(n)}catch{return null}}}/**
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
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=So.parseLink(n);return I(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ir extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rr extends Ir{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new rr(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */const H_="http://localhost";class hr extends Er{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new hr(r,s)}static _create(e,n){return new hr(e,n)}buildRequest(){return{requestUri:H_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const K_="saml.";class Js extends Ct{constructor(e){I(e.startsWith(K_),"argument-error"),super(e)}static credentialFromResult(e){return Js.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Js.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=hr.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return hr._create(r,n)}catch{return null}}}/**
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
 */async function Xp(t,e){return Tt(t,"POST","/v1/accounts:signUp",Y(t,e))}/**
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
 */class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=xd(r);return new Ve({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xd(r);return new Ve({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function G_(t){var e;const n=q(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Xp(n,{returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Xs extends Pe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xs(e,n,r,i)}}function Zp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function em(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function q_(t,e){const n=M(t);await ko(!0,n,e);const{providerUserInfo:r}=await Xw(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=em(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Lu(t,e,n=!1){const r=await It(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ve._forOperation(t,"link",r)}async function ko(t,e,n){await Ei(e);const r=em(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
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
 */async function tm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await It(t,Zp(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=Eo(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),Ve._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),s}}/**
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
 */async function nm(t,e,n=!1){const r="signIn",i=await Zp(t,r,e),s=await Ve._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function To(t,e){return nm(q(t),e)}async function rm(t,e){const n=M(t);return await ko(!1,n,e.providerId),Lu(n,e)}async function im(t,e){return tm(M(t),e)}/**
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
 */async function Y_(t,e){return Tt(t,"POST","/v1/accounts:signInWithCustomToken",Y(t,e))}/**
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
 */async function Q_(t,e){const n=q(t),r=await Y_(n,{token:e,returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Di{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Du._fromServerResponse(e,n):"totpInfo"in n?bu._fromServerResponse(e,n):fe(e,"internal-error")}}class Du extends Di{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Du(n)}}class bu extends Di{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new bu(n)}}/**
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
 */function Co(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Mu(t){const e=q(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J_(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Co(r,i,n),await Si(r,i,"getOobCode",O_)}async function X_(t,e,n){await Jp(M(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mu(t),r})}async function Z_(t,e){await N_(M(t),{oobCode:e})}async function sm(t,e){const n=M(t),r=await Jp(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Di._fromServerResponse(q(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function eE(t,e){const{data:n}=await sm(M(t),e);return n.email}async function tE(t,e,n){const r=q(t),o=await Si(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xp).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Mu(t),l}),a=await Ve._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nE(t,e,n){return To(M(t),nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mu(t),r})}/**
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
 */async function rE(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){I(a.handleCodeInApp,r,"argument-error"),a&&Co(r,o,a)}s(i,n),await Si(r,i,"getOobCode",L_)}function iE(t,e){const n=So.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function sE(t,e,n){const r=M(t),i=nn.credentialWithLink(e,n||_i());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),To(r,i)}/**
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
 */async function oE(t,e){return Q(t,"POST","/v1/accounts:createAuthUri",Y(t,e))}/**
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
 */async function aE(t,e){const n=Nu()?_i():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await oE(M(t),r);return i||[]}async function lE(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Co(n.auth,i,e);const{email:s}=await A_(n.auth,i);s!==t.email&&await t.reload()}async function uE(t,e,n){const r=M(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Co(r.auth,s,n);const{email:o}=await D_(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function cE(t,e){return Q(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await It(r,cE(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fE(t,e){return om(M(t),e,null)}function hE(t,e){return om(M(t),null,e)}async function om(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await It(t,P_(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function pE(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Eo(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ir(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new mE(s,i);case"github.com":return new gE(s,i);case"google.com":return new vE(s,i);case"twitter.com":return new yE(s,i,t.screenName||null);case"custom":case"anonymous":return new ir(s,null);default:return new ir(s,r,i)}}class ir{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class am extends ir{constructor(e,n,r,i){super(e,n,r),this.username=i}}class mE extends ir{constructor(e,n){super(e,"facebook.com",n)}}class gE extends am{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class vE extends ir{constructor(e,n){super(e,"google.com",n)}}class yE extends am{constructor(e,n,r){super(e,"twitter.com",n,r)}}function wE(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:pE(n)}/**
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
 */class Uu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=q(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Di._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const o=hn._fromMfaPendingCredential(i.mfaPendingCredential);return new Uu(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Ve._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return I(n.user,r,"internal-error"),Ve._forOperation(n.user,n.operationType,u);default:fe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function _E(t,e){var n;const r=M(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Uu._fromError(r,i)}/**
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
 */function EE(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:start",Y(t,e))}function IE(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:finalize",Y(t,e))}function SE(t,e){return Q(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Y(t,e))}class ju{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Di._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ju(e)}async getSession(){return hn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await It(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await It(this.user,SE(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const pa=new WeakMap;function kE(t){const e=M(t);return pa.has(e)||pa.set(e,ju._fromUser(e)),pa.get(e)}const Zs="__sak";/**
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
 */class lm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function TE(){const t=ne();return Au(t)||_r(t)}const CE=1e3,PE=10;class um extends lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TE()&&f_(),this.fallbackToPolling=Gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);d_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}um.type="LOCAL";const Fu=um;/**
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
 */class cm extends lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cm.type="SESSION";const Pn=cm;/**
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
 */function RE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Po(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await RE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
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
 */class NE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=bi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Z(){return window}function xE(t){Z().location.href=t}/**
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
 */function zu(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function AE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LE(){return zu()?self:null}/**
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
 */const dm="firebaseLocalStorageDb",DE=1,eo="firebaseLocalStorage",fm="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ro(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function bE(){const t=indexedDB.deleteDatabase(dm);return new Mi(t).toPromise()}function vl(){const t=indexedDB.open(dm,DE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eo,{keyPath:fm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eo)?e(r):(r.close(),await bE(),e(await vl()))})})}async function Ad(t,e,n){const r=Ro(t,!0).put({[fm]:e,value:n});return new Mi(r).toPromise()}async function ME(t,e){const n=Ro(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Od(t,e){const n=Ro(t,!0).delete(e);return new Mi(n).toPromise()}const UE=800,jE=3;class hm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AE(),!this.activeServiceWorker)return;this.sender=new NE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await Ad(e,Zs,"1"),await Od(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ME(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ro(i,!1).getAll();return new Mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hm.type="LOCAL";const Ti=hm;/**
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
 */function FE(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:start",Y(t,e))}function zE(t,e){return Q(t,"POST","/v2/accounts/mfaSignIn:finalize",Y(t,e))}/**
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
 */const BE=500,VE=6e4,ns=1e12;class $E{constructor(e){this.auth=e,this.counter=ns,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new WE(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ns;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ns;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ns;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class WE{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=HE(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},VE)},BE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function HE(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ma=Yp("rcb"),KE=new Oi(3e4,6e4),GE="https://www.google.com/recaptcha/api.js?";class qE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(YE(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Sd(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const s=Z().setTimeout(()=>{i(ce(e,"network-request-failed"))},KE.get());Z()[ma]=()=>{Z().clearTimeout(s),delete Z()[ma];const a=Z().grecaptcha;if(!a||!Sd(a)){i(ce(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${GE}?${yr({onload:ma,render:"explicit",hl:n})}`;Ou(o).catch(()=>{clearTimeout(s),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function YE(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class QE{async load(e){return new $E(e)}clearedOneInstance(){}}/**
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
 */const pm="recaptcha",JE={theme:"light",type:"image"};let XE=class{constructor(e,n,r=Object.assign({},JE)){this.parameters=r,this.type=pm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=q(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new QE:new qE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Nu()&&!zu(),this.auth,"internal-error"),await ZE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Yw(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function ZE(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Bu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=wn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function eI(t,e,n){const r=q(t),i=await No(r,e,M(n));return new Bu(i,s=>To(r,s))}async function tI(t,e,n){const r=M(t);await ko(!1,r,"phone");const i=await No(r.auth,e,M(n));return new Bu(i,s=>rm(r,s))}async function nI(t,e,n){const r=M(t),i=await No(r.auth,e,M(n));return new Bu(i,s=>im(r,s))}async function No(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===pm,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return I(o.type==="enroll",t,"internal-error"),(await EE(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await FE(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await j_(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function rI(t,e){await Lu(M(t),e)}/**
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
 */let Rn=class ys{constructor(e){this.providerId=ys.PROVIDER_ID,this.auth=q(e)}verifyPhoneNumber(e,n){return No(this.auth,e,M(n))}static credential(e,n){return wn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ys.credentialFromTaggedObject(n)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?wn._fromTokenResponse(n,r):null}};Rn.PROVIDER_ID="phone";Rn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class Vu extends Er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iI(t){return nm(t.auth,new Vu(t),t.bypassAuthState)}function sI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),tm(n,new Vu(t),t.bypassAuthState)}async function oI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Lu(n,new Vu(t),t.bypassAuthState)}/**
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
 */class mm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aI=new Oi(2e3,1e4);async function lI(t,e,n){const r=q(t);wr(t,e,Ct);const i=Dn(r,n);return new ht(r,"signInViaPopup",e,i).executeNotNull()}async function uI(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function cI(t,e,n){const r=M(t);wr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ht extends mm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}ht.currentPopupAction=null;/**
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
 */const dI="pendingRedirect",Xr=new Map;class fI extends mm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(t,e){const n=vm(e),r=gm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function $u(t,e){return gm(t)._set(vm(e),"true")}function pI(){Xr.clear()}function Wu(t,e){Xr.set(t._key(),e)}function gm(t){return Ae(t._redirectPersistence)}function vm(t){return yn(dI,t.config.apiKey,t.name)}/**
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
 */function mI(t,e,n){return gI(t,e,n)}async function gI(t,e,n){const r=q(t);wr(t,e,Ct),await r._initializationPromise;const i=Dn(r,n);return await $u(i,r),i._openRedirect(r,e,"signInViaRedirect")}function vI(t,e,n){return yI(t,e,n)}async function yI(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await $u(i,r.auth);const s=await ym(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function wI(t,e,n){return _I(t,e,n)}async function _I(t,e,n){const r=M(t);wr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await ko(!1,r,e.providerId),await $u(i,r.auth);const s=await ym(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function EI(t,e){return await q(t)._initializationPromise,xo(t,e,!1)}async function xo(t,e,n=!1){const r=q(t),i=Dn(r,e),o=await new fI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function ym(t){const e=bi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const II=10*60*1e3;class wm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_m(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))}saveEventToCache(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()}}function Ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _m({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _m(t);default:return!1}}/**
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
 */async function Em(t,e={}){return Q(t,"GET","/v1/projects",e)}/**
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
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Em(t);for(const n of e)try{if(PI(n))return}catch{}fe(t,"unauthorized-domain")}function PI(t){const e=_i(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TI.test(n))return!1;if(kI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RI=new Oi(3e4,6e4);function Dd(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var r,i,s;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(ce(t,"network-request-failed"))},timeout:RI.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Z().gapi)===null||s===void 0)&&s.load)o();else{const a=Yp("iframefcb");return Z()[a]=()=>{gapi.load?o():n(ce(t,"network-request-failed"))},Ou(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ws=null,e})}let ws=null;function xI(t){return ws=ws||NI(t),ws}/**
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
 */const AI=new Oi(5e3,15e3),OI="__/auth/iframe",LI="emulator/auth/iframe",DI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,LI):`https://${t.config.authDomain}/${OI}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},i=bI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yr(r).slice(1)}`}async function UI(t){const e=await xI(t),n=Z().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:MI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ce(t,"network-request-failed"),a=Z().setTimeout(()=>{s(o)},AI.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,zI=600,BI="_blank",VI="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $I(t,e,n,r=FI,i=zI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ne().toLowerCase();n&&(a=$p(u)?BI:n),Vp(u)&&(e=e||VI,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(c_(u)&&a!=="_self")return WI(e||"",a),new bd(null);const f=window.open(e||"",a,d);I(f,t,"popup-blocked");try{f.focus()}catch{}return new bd(f)}function WI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HI="__/auth/handler",KI="emulator/auth/handler",GI=encodeURIComponent("fac");async function yl(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:i};if(e instanceof Ct){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Ir){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${GI}=${encodeURIComponent(l)}`:"";return`${qI(t)}?${yr(a).slice(1)}${u}`}function qI({config:t}){return t.emulator?xu(t,KI):`https://${t.authDomain}/${HI}`}/**
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
 */const ga="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=xo,this._overrideRedirectResult=Wu}async _openPopup(e,n,r,i){var s;Je((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yl(e,n,r,_i(),i);return $I(e,o,bi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yl(e,n,r,_i(),i);return xE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Je(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new wm(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ga];o!==void 0&&n(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gp()||Au()||_r()}}const QI=YI;class JI{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return st("unexpected MultiFactorSessionType")}}}class Hu extends JI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hu(e)}_finalizeEnroll(e,n,r){return IE(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return zE(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Im{constructor(){}static assertion(e){return Hu._fromCredential(e)}}Im.FACTOR_ID="phone";var Md="@firebase/auth",Ud="1.5.0";/**
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
 */class XI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eS(t){Cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qp(t)},u=new v_(r,i,s,l);return S_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Yt("auth-internal",e=>{const n=q(e.getProvider("auth").getImmediate());return(r=>new XI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Md,Ud,ZI(t)),Kt(Md,Ud,"esm2017")}/**
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
 */const tS=5*60;c0("authIdTokenMaxAge");eS("Browser");/**
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
 */const nS=2e3;async function rS(t,e,n){var r;const{BuildInfo:i}=Nn();Je(e.sessionId,"AuthEvent did not contain a session ID");const s=await lS(e.sessionId),o={};return _r()?o.ibi=i.packageName:Li()?o.apn=i.packageName:fe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,yl(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function iS(t){const{BuildInfo:e}=Nn(),n={};_r()?n.iosBundleId=e.packageName:Li()?n.androidPackageName=e.packageName:fe(t,"operation-not-supported-in-this-environment"),await Em(t,n)}function sS(t){const{cordova:e}=Nn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,u_()?"_blank":"_system","location=yes"),n(i)})})}async function oS(t,e,n){const{cordova:r}=Nn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ce(t,"redirect-cancelled-by-user"))},nS))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Li()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function aS(t){var e,n,r,i,s,o,a,l,u,d;const f=Nn();I(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function lS(t){const e=uS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function uS(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const cS=20;class dS extends wm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function fS(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:mS(),postBody:null,tenantId:t.tenantId,error:ce(t,"no-auth-event")}}function hS(t,e){return wl()._set(_l(t),e)}async function jd(t){const e=await wl()._get(_l(t));return e&&await wl()._remove(_l(t)),e}function pS(t,e){var n,r;const i=vS(e);if(i.includes("/__/auth/callback")){const s=_s(i),o=s.firebaseError?gS(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ce(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function mS(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cS;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function wl(){return Ae(Fu)}function _l(t){return yn("authEvent",t.config.apiKey,t.name)}function gS(t){try{return JSON.parse(t)}catch{return null}}function vS(t){const e=_s(t),n=e.link?decodeURIComponent(e.link):void 0,r=_s(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _s(i).link||i||r||n||t}function _s(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Yn(n.join("?"))}/**
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
 */const yS=500;class wS{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=xo,this._overrideRedirectResult=Wu}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new dS(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){fe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){aS(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),pI(),await this._originValidation(e);const o=fS(e,r,i);await hS(e,o);const a=await rS(e,o,n),l=await sS(a);return oS(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Nn(),o=setTimeout(async()=>{await jd(e),n.onEvent(Fd())},yS),a=async d=>{clearTimeout(o);const f=await jd(e);let m=null;f&&(d!=null&&d.url)&&(m=pS(f,d.url)),n.onEvent(m||Fd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Nn().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const _S=wS;function Fd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ce("no-auth-event")}}/**
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
 */function ES(t,e){q(t)._logFramework(e)}var IS="@firebase/auth-compat",SS="0.5.0";/**
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
 */const kS=1e3;function Zr(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function TS(){return Zr()==="http:"||Zr()==="https:"}function Sm(t=ne()){return!!((Zr()==="file:"||Zr()==="ionic:"||Zr()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function CS(){return Iu()||wp()}function PS(){return Ep()&&(document==null?void 0:document.documentMode)===11}function RS(t=ne()){return/Edge\/\d+/.test(t)}function NS(t=ne()){return PS()||RS(t)}function km(){try{const t=self.localStorage,e=bi();if(t)return t.setItem(e,"1"),t.removeItem(e),NS()?qs():!0}catch{return Ku()&&qs()}return!1}function Ku(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function va(){return(TS()||_p()||Sm())&&!CS()&&km()&&!Ku()}function Tm(){return Sm()&&typeof document<"u"}async function xS(){return Tm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},kS);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function AS(){return typeof window<"u"?window:null}/**
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
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},Dr=I,Cm="persistence";function OS(t,e){if(Dr(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Iu()){Dr(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(wp()){Dr(e===Ne.NONE,t,"unsupported-persistence-type");return}if(Ku()){Dr(e===Ne.NONE||e===Ne.LOCAL&&qs(),t,"unsupported-persistence-type");return}Dr(e===Ne.NONE||km(),t,"unsupported-persistence-type")}async function El(t){await t._initializationPromise;const e=Pm(),n=yn(Cm,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function LS(t,e){const n=Pm();if(!n)return[];const r=yn(Cm,t,e);switch(n.getItem(r)){case Ne.NONE:return[fr];case Ne.LOCAL:return[Ti,Pn];case Ne.SESSION:return[Pn];default:return[]}}function Pm(){var t;try{return((t=AS())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const DS=I;class Mt{constructor(){this.browserResolver=Ae(QI),this.cordovaResolver=Ae(_S),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=xo,this._overrideRedirectResult=Wu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Tm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return DS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await xS();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Rm(t){return t.unwrap()}function bS(t){return t.wrapped()}/**
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
 */function MS(t){return Nm(t)}function US(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new jS(t,_E(t,e))}else if(r){const i=Nm(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Nm(t){const{_tokenResponse:e}=t instanceof Pe?t.customData:t;if(!e)return null;if(!(t instanceof Pe)&&"temporaryProof"in e&&"phoneNumber"in e)return Rn.credentialFromResult(t);const n=e.providerId;if(!n||n===Lr.PASSWORD)return null;let r;switch(n){case Lr.GOOGLE:r=nt;break;case Lr.FACEBOOK:r=tt;break;case Lr.GITHUB:r=rt;break;case Lr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?hr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new rr(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Pe?r.credentialFromError(t):r.credentialFromResult(t)}function Ee(t,e){return e.catch(n=>{throw n instanceof Pe&&US(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:MS(n),additionalUserInfo:wE(n),user:pt.getOrCreate(i)}})}async function Il(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ee(t,n.confirm(r))}}class jS{constructor(e,n){this.resolver=n,this.auth=bS(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ee(Rm(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class pt{constructor(e){this._delegate=e,this.multiFactor=kE(e)}static getOrCreate(e){return pt.USER_MAP.has(e)||pt.USER_MAP.set(e,new pt(e)),pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ee(this.auth,rm(this._delegate,e))}async linkWithPhoneNumber(e,n){return Il(this.auth,tI(this._delegate,e,n))}async linkWithPopup(e){return Ee(this.auth,cI(this._delegate,e,Mt))}async linkWithRedirect(e){return await El(q(this.auth)),wI(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ee(this.auth,im(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Il(this.auth,nI(this._delegate,e,n))}reauthenticateWithPopup(e){return Ee(this.auth,uI(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await El(q(this.auth)),vI(this._delegate,e,Mt)}sendEmailVerification(e){return lE(this._delegate,e)}async unlink(e){return await q_(this._delegate,e),this}updateEmail(e){return fE(this._delegate,e)}updatePassword(e){return hE(this._delegate,e)}updatePhoneNumber(e){return rI(this._delegate,e)}updateProfile(e){return dE(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return uE(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pt.USER_MAP=new WeakMap;/**
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
 */const br=I;class Sl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;br(r,"invalid-api-key",{appName:e.name}),br(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=n.initialize({options:{persistence:FS(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Fw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){k_(this._delegate,e,n)}applyActionCode(e){return Z_(this._delegate,e)}checkActionCode(e){return sm(this._delegate,e)}confirmPasswordReset(e,n){return X_(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ee(this._delegate,tE(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return aE(this._delegate,e)}isSignInWithEmailLink(e){return iE(this._delegate,e)}async getRedirectResult(){br(va(),this._delegate,"operation-not-supported-in-this-environment");const e=await EI(this._delegate,Mt);return e?Ee(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ES(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=zd(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=zd(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return rE(this._delegate,e,n)}sendPasswordResetEmail(e,n){return J_(this._delegate,e,n||void 0)}async setPersistence(e){OS(this._delegate,e);let n;switch(e){case Ne.SESSION:n=Pn;break;case Ne.LOCAL:n=await Ae(Ti)._isAvailable()?Ti:Fu;break;case Ne.NONE:n=fr;break;default:return fe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ee(this._delegate,G_(this._delegate))}signInWithCredential(e){return Ee(this._delegate,To(this._delegate,e))}signInWithCustomToken(e){return Ee(this._delegate,Q_(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ee(this._delegate,nE(this._delegate,e,n))}signInWithEmailLink(e,n){return Ee(this._delegate,sE(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Il(this._delegate,eI(this._delegate,e,n))}async signInWithPopup(e){return br(va(),this._delegate,"operation-not-supported-in-this-environment"),Ee(this._delegate,lI(this._delegate,e,Mt))}async signInWithRedirect(e){return br(va(),this._delegate,"operation-not-supported-in-this-environment"),await El(this._delegate),mI(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return eE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Sl.Persistence=Ne;function zd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&pt.getOrCreate(o)),error:e,complete:n}}function FS(t,e){const n=LS(t,e);if(typeof self<"u"&&!n.includes(Ti)&&n.push(Ti),typeof window<"u")for(const r of[Fu,Pn])n.includes(r)||n.push(r);return n.includes(fr)||n.push(fr),n}/**
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
 */class Gu{constructor(){this.providerId="phone",this._delegate=new Rn(Rm(kt.auth()))}static credential(e,n){return Rn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Gu.PHONE_SIGN_IN_METHOD=Rn.PHONE_SIGN_IN_METHOD;Gu.PROVIDER_ID=Rn.PROVIDER_ID;/**
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
 */const zS=I;class BS{constructor(e,n,r=kt.app()){var i;zS((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new XE(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const VS="auth-compat";function $S(t){t.INTERNAL.registerComponent(new Yt(VS,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Sl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mn.EMAIL_SIGNIN,PASSWORD_RESET:Mn.PASSWORD_RESET,RECOVER_EMAIL:Mn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mn.VERIFY_EMAIL}},EmailAuthProvider:nn,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:rr,SAMLAuthProvider:Js,PhoneAuthProvider:Gu,PhoneMultiFactorGenerator:Im,RecaptchaVerifier:BS,TwitterAuthProvider:it,Auth:Sl,AuthCredential:Er,Error:Pe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(IS,SS)}$S(kt);var WS="firebase",HS="10.7.0";/**
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
 */kt.registerVersion(WS,HS,"app-compat");const KS={apiKey:"AIzaSyDzSTdaD4V0TAlXsE9lwjA_A-IqPclA9Vw",authDomain:"runtime-terror-website-a1313.firebaseapp.com",projectId:"runtime-terror-website-a1313",storageBucket:"runtime-terror-website-a1313.appspot.com",messagingSenderId:"768147262512",appId:"1:768147262512:web:a9d392e05065d4f9bef1f5",measurementId:"G-XWVEVEJGE1"};kt.initializeApp(KS);const GS=(t,e)=>(console.log(t,e),kt.auth().createUserWithEmailAndPassword(t,e)),qS=(t,e)=>kt.auth().signInWithEmailAndPassword(t,e),YS=()=>kt.auth().signOut(),QS=()=>{const[t,e]=k.useState(null);return k.useEffect(()=>kt.auth().onAuthStateChanged(r=>{console.log("user",r),e(r)}),[]),t};function JS({onSignIn:t,onSignUp:e,onSignOut:n,currentUser:r}){const[i,s]=k.useState(""),[o,a]=k.useState(""),l=_u(),[u,d]=k.useState(!1),f=()=>{l("/")},m=()=>{console.log(r),d(!0)},v=()=>{d(!1)},y=()=>{t(i,o),console.log("sign in"),v()},_=()=>{n(),console.log("sign out"),v()},x=()=>{e(i,o),console.log("sign out"),v()},h=p=>{s(p.target.value)},c=p=>{a(p.target.value)};return g.jsxs("div",{children:[g.jsxs("div",{className:"flex w-full justify-between border-black border-b-2 px-16 py-8 mb-8",children:[g.jsx("div",{className:"ml-16 cursor-pointer",onClick:f,children:g.jsx("p",{className:"text-4xl",children:"Runtime Terror"})}),g.jsx("button",{className:"text-2xl border-2 border-black bg-slate-100 p-2 rounded-lg mr-16 hover:scale-110 cursor-pointer hover:bg-slate-200 transition-all duration-300",onClick:m,children:r?"Log Out":"Sign In"})]}),u&&g.jsxs("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[g.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),g.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:g.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:g.jsx("div",{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:g.jsxs("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[g.jsx("button",{className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800",onClick:v,children:"X"}),g.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:g.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})}),g.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),g.jsx("div",{className:"mt-2",children:g.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:i,onChange:h,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),g.jsxs("div",{children:[g.jsx("div",{className:"flex items-center justify-between",children:g.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"})}),g.jsx("div",{className:"mt-2",children:g.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:o,onChange:c,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),g.jsxs("div",{className:"flex my-8 gap-2",children:[g.jsx("button",{type:"submit",onClick:y,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign In"}),g.jsx("button",{type:"submit",onClick:x,className:"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Sign Up"}),g.jsx("button",{onClick:_,className:"flex w-full justify-center rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",children:"Sign Out"})]})]})]})})})})]})]})}const rs=({name:t,picture:e,to:n})=>{const r=_u(),i=()=>{r(n)};return g.jsxs("div",{className:"h-full bg-slate-100 rounded-xl flex flex-col flex-grow hover:scale-105 cursor-pointer hover:bg-slate-200 transition-all duration-300",onClick:i,children:[g.jsxs("div",{className:"py-4 px-8 flex items-center",children:[g.jsx("img",{src:e,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"}),g.jsx("p",{className:"text-lg pl-8",children:"Here is a little info about me! Click on this card to learn more about me!"})]}),g.jsxs("div",{className:"pl-8 pb-8",children:[g.jsx("h3",{className:"text-3xl",children:t}),g.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]})},xm="/runtime-terror-website/assets/danny-b221f444.jpg",Am="/runtime-terror-website/assets/profilePic-f89f62fe.png",is="/runtime-terror-website/assets/sid-d9f5f144.jpg",Om="/runtime-terror-website/assets/image4-32e48271.png",Lm="/runtime-terror-website/assets/cover_pic-5da812ef.png";function XS(){return g.jsx("div",{className:"flex justify-center items-center px-40",children:g.jsxs("div",{className:"grid grid-cols-2 gap-8 justify-center justify-items-center",children:[g.jsx(rs,{name:"Danny Bodin",picture:xm,to:"/danny"}),g.jsx(rs,{name:"Jordin Eicher",picture:Om,to:"/jordin"}),g.jsx(rs,{name:"Addie Schroeder",picture:Lm,to:"/addie"}),g.jsx(rs,{name:"Nina Baffo",picture:Am,to:"/nina"})]})})}const ZS=(t,e,n)=>{const r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},ek=(t,e)=>{const n=window.document.getElementById(t);n&&e.removeChild(n)},Ao=({id:t})=>(k.useEffect(()=>{if(!window)return;const e=window.document;return e.getElementById("commento")&&ZS("https://cdn.commento.io/js/commento.js","commento-script",e.body),()=>ek("commento-script",e.body)},[t]),g.jsx("div",{id:"commento"})),tk=({items:t})=>{const e=k.useRef(null);return k.useEffect(()=>{const n=()=>{const{scrollLeft:i,scrollWidth:s,clientWidth:o}=e.current;i>s-o-10&&(e.current.scrollLeft=0)},r=e.current;return r.addEventListener("scroll",n),()=>r.removeEventListener("scroll",n)},[]),g.jsxs("div",{style:{overflowX:"auto",whiteSpace:"nowrap"},ref:e,children:[t.map((n,r)=>g.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:g.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px"}})},r)),t.map((n,r)=>g.jsx("div",{style:{display:"inline-block",marginRight:"50px"},children:g.jsx("img",{src:n.src,alt:n.alt,style:{width:"300px",height:"300px"}})},`duplicate-${r}`))]})};function nk(){const t=[{src:is,alt:"Sid"},{src:is,alt:"Sid"},{src:is,alt:"Sid"},{src:is,alt:"Sid"}];return g.jsxs("div",{children:[g.jsxs("div",{className:"flex px-40",children:[g.jsxs("div",{className:"bg-slate-100 rounded-xl flex flex-col flex-grow",children:[g.jsx("div",{className:"p-8 flex items-center min-w-max",children:g.jsx("img",{src:xm,alt:"Profile Picture",className:"rounded-full w-36 h-36 border-4 border-blue-500"})}),g.jsxs("div",{className:"pl-8 pb-8",children:[g.jsx("h3",{className:"text-3xl",children:"Danny B."}),g.jsx("h6",{className:"text-lg text-gray-500",children:"Developer"})]})]}),g.jsx("div",{className:"m-4",children:g.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laudantium nam quo fugiat. Eius fugit, consequuntur nisi deserunt beatae odio natus cupiditate exercitationem necessitatibus perspiciatis aliquid praesentium. Voluptatum, velit repellendus!"})})]}),g.jsx("div",{className:"w-full bg-slate-100 py-16 mt-16",children:g.jsx(tk,{items:t})}),g.jsx("div",{className:"my-8 mx-40",children:g.jsx(Ao,{id:1})})]})}const Bd="/runtime-terror-website/assets/image1-c760ea26.png",rk="/runtime-terror-website/assets/image2-62021c75.png",ik="/runtime-terror-website/assets/tech-490d6e4d.jpg",sk=({images:t})=>{const[e,n]=k.useState(0),r=o=>{n(o)},i=()=>{r(e-1)},s=()=>{r(e+1)};return g.jsxs("div",{className:"slideshow-container",children:[g.jsx("div",{className:"slides",style:{transform:`translateX(${-e*100}%)`},children:t.map((o,a)=>g.jsx("div",{className:"slide",children:g.jsx("img",{src:o,alt:`Image ${a+1}`})},a))}),g.jsx("button",{className:"prev",onClick:i,children:"❮"}),g.jsx("button",{className:"next",onClick:s,children:"❯"})]})},ok=()=>{const t=[Om,rk,Bd,ik];return g.jsxs("div",{className:"profile-page body",children:[g.jsxs("header",{className:"header",children:[g.jsx("div",{className:"profile-picture",children:g.jsx("img",{src:Bd,alt:"Profile"})}),g.jsxs("div",{className:"header-text",children:[g.jsx("h1",{children:g.jsx("strong",{children:"Jordin Eicher"})}),g.jsx("p",{children:g.jsx("i",{children:"AKA Linux Wizard"})})]})]}),g.jsxs("section",{className:"about-me",children:[g.jsx("h2",{className:"h2",children:"About Me"}),g.jsx("p",{className:"p",children:g.jsx("i",{children:"I am an Electrical Engineering major at the University of Iowa with focus in IoT. I have interned at Collins Aerospace in the Communications Hardware department and will start full-time as a Hardware Design Engineer following graduation. In my freetime, I enjoy watching MMA, learning history and philosophy, tinkering with electronics, and running."})})]}),g.jsxs("section",{className:"skills",children:[g.jsx("h2",{children:"Favorite Quote"}),g.jsx("ul",{className:"ul",children:g.jsx("li",{className:"li",children:g.jsx("i",{children:`"All the time people ask me, 'Brother, what are you proud of?', I say, I am very proud of... I never give up." - Khabib Nurmagomedov`})})})]}),g.jsxs("section",{className:"projects",children:[g.jsx("h1",{children:"Image1-3: Hiking, Image4: Tech stuff"}),g.jsx(sk,{images:t})]}),g.jsxs("section",{className:"contact",children:[g.jsx("h2",{children:"Contact"}),g.jsx("div",{children:g.jsxs("dl",{children:[g.jsx("dt",{children:"Personal Email:"}),g.jsx("dd",{children:g.jsx("a",{href:"mailto:jayike1010@gmail.com",children:"jayike1010@gmail.com"})}),g.jsx("dt",{children:"LinkedIn:"}),g.jsx("dd",{children:g.jsx("a",{href:"https://www.linkedin.com/in/jordin-eicher",target:"_blank",children:"linkedin.com/in/jordin-eicher"})}),g.jsx("dt",{children:"GitHub:"}),g.jsx("dd",{children:g.jsx("a",{href:"https://www.github.com/jayike",target:"_blank",children:"github.com/jayike"})})]})})]}),g.jsx("div",{className:"my-8 mx-40",children:g.jsx(Ao,{id:3})}),g.jsx("footer",{children:g.jsx("p",{children:"© 2023 Runtime Terror. All rights reserved."})})]})};const ak="/runtime-terror-website/assets/kev-77fe69f5.jpeg",lk="/runtime-terror-website/assets/roomies-5768ac1f.jpeg",uk="/runtime-terror-website/assets/dance-a84d09bc.jpeg";function ck(){return g.jsxs("div",{style:{backgroundColor:"lightgrey"},children:[g.jsx("div",{style:{backgroundColor:"lightblue"},children:g.jsxs("h1",{class:"text-3xl text-center font-bold",children:[g.jsx("br",{})," Addie Schroeder ",g.jsx("br",{})]})}),g.jsxs("div",{className:"split-container",children:[g.jsx("div",{className:"left-column margin",children:g.jsx("div",{children:g.jsx("img",{src:Lm,alt:"Profile Pic",style:{width:"250px"}})})}),g.jsx("div",{className:"margin",children:g.jsxs("p",{children:[g.jsx("h2",{class:"font-bold",children:"A little about myself:"}),g.jsx("p",{class:"text-l",className:"right-column paragraph",style:{backgroundColor:"lightBlue"},children:"Hi! My name is Addie. I am a dedicated student at the University of Iowa, majoring in computer science and engineering while also pursuing a minor in mathematics. In addition to my academic pursuits, I spent the last four years representing the university as a member of the Iowa dance team. Outside of my studies, I am passionate about dance, and though I no longer invest as much time on the dance team, I channel that passion into teaching dance to kids at a local studio. Beyond academia and dance, my interests extend to spending quality time with friends and family, indulging in my love for travel, and enjoying the company of my cat, Kevin."})]})})]}),g.jsxs("div",{className:"image-row",style:{backgroundColor:"lightGrey"},children:[g.jsx("img",{src:ak,alt:"Kev",className:"image border"}),g.jsx("img",{src:lk,alt:"Roomies",className:"image"}),g.jsx("img",{src:uk,alt:"Dance",className:"image"})]}),g.jsx("div",{className:"my-8 mx-40",children:g.jsx(Ao,{id:2})})]})}const dk="/runtime-terror-website/assets/bahamas-394d8819.jpeg",fk="/runtime-terror-website/assets/family-c98e45d5.jpeg",hk="/runtime-terror-website/assets/puppy-5f837944.jpeg";function pk(){return g.jsxs("div",{children:[g.jsxs("div",{style:{backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[g.jsx("p",{style:{fontWeight:"bold",fontSize:"25px",marginBottom:"300px"},children:"Nina Baffo"}),g.jsx("img",{src:Am,style:{width:"250px"}}),g.jsx("p",{style:{marginLeft:"1cm",fontWeight:"bold",fontSize:"17px"},children:"About me:"}),g.jsx("p",{style:{backgroundColor:"lightpink",padding:"10px",borderRadius:"5px",marginLeft:"1cm",marginRight:"1cm",marginBottom:"1.5cm",fontSize:"17px"},children:"Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering. I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. I can't wait to see where my career takes me in the near future! "})]}),g.jsxs("div",{style:{backgroundColor:"lavender",padding:"10px",borderRadius:"5px",marginBottom:"10px",marginLeft:"1cm",marginRight:"1cm",display:"flex",alignItems:"center"},children:[g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:hk,style:{width:"300px",marginRight:"1cm",marginBottom:"1cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"This is my puppy, his name is Benny and he just turned 8 months old. He is the best dog in the world, I take him with me everywhere."})]}),g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:fk,style:{width:"300px",marginRight:"1cm",marginBottom:"0.5cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"Pictured here is me, my mom, and sisters at an Iowa game this year. They are my best friends and I would do anything for them. I love my family very much."})]}),g.jsxs("div",{style:{marginRight:"1cm",marginLeft:"1cm"},children:[g.jsx("img",{src:dk,style:{width:"800px",marginRight:"1cm",marginBottom:"1cm"}}),g.jsx("p",{style:{fontSize:"17px"},children:"This is a picture of when I went to the Bahamas. I love traveling to new places and expanding my knowledge about different areas of the world. "})]})]}),g.jsx("div",{className:"my-8 mx-40",children:g.jsx(Ao,{id:3})})]})}function mk(){const t=QS(),e=async(s,o)=>{try{console.log("Signing up..."+s+" "+o),await GS(s,o)}catch(a){console.error("Error signing up:",a)}},n=async(s,o)=>{try{await qS(s,o)}catch(a){console.error("Error signing in:",a)}},r=async()=>{try{await YS()}catch(s){console.error("Error signing out:",s)}},i=()=>{const s=_o();return t===void 0?null:(console.log(t),t?g.jsx(Jy,{}):g.jsx(Qy,{to:"/",replace:!0,state:{from:s}}))};return g.jsxs(t0,{basename:"/runtime-terror-website/",children:[g.jsx(JS,{onSignIn:n,onSignOut:r,onSignUp:e,currentUser:t}),g.jsxs(Zy,{children:[g.jsx(ln,{path:"/",element:g.jsx(XS,{})}),g.jsxs(ln,{element:g.jsx(i,{}),children:[g.jsx(ln,{path:"/Danny",element:g.jsx(nk,{})}),g.jsx(ln,{path:"/Jordin",element:g.jsx(ok,{})}),g.jsx(ln,{path:"/Addie",element:g.jsx(ck,{})}),g.jsx(ln,{path:"/Nina",element:g.jsx(pk,{})})]})]})]})}ya.createRoot(document.getElementById("root")).render(g.jsx(Jd.StrictMode,{children:g.jsx(mk,{})}));
